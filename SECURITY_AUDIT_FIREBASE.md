# SECURITY AUDIT: FreshSave Flutter Application

==================================================
1. EXECUTIVE SUMMARY
==================================================

**Overall Security Rating: D**

**Rationale for Rating:**
While the FreshSave application correctly utilizes `flutter_secure_storage` for token management and implements standard Firebase Authentication flows, it suffers from severe configuration and Android build security flaws. The most critical issues are the use of debug signing keys for release builds, the allowance of cleartext traffic, the use of a default application ID (`com.example.customer_app`), and the commitment of `google-services.json` to source control. These configuration issues pose significant risks to the production deployment of the application.

*   **Overall Firebase security assessment:** PARTIAL. Implementation is standard, but relies on a committed `google-services.json` and does not use `firebase_options.dart`.
*   **Overall authentication security assessment:** PASS. Uses `firebase_auth`, `google_sign_in`, and securely stores local tokens.
*   **Overall Android security assessment:** FAIL. Cleartext traffic is enabled. Default application ID is used.
*   **Overall release-build security assessment:** FAIL. Release build uses debug signing keys.

**Critical Security Risks:**
*   Release APKs are signed with the debug keystore.
*   Application ID is left as default `com.example.customer_app`.

**High-Risk Issues:**
*   Cleartext HTTP traffic is permitted globally.
*   `google-services.json` is not excluded in `.gitignore`.

**Medium-Risk Issues:**
*   Firebase initialization is platform-dependent (relies exclusively on Android Gradle plugin rather than Dart-only configuration).
*   Backend authorization and Firestore rules could not be verified from the codebase.

**Low-Risk/Informational Observations:**
*   Proper use of `flutter_secure_storage` for token persistence.

==================================================
2. FIREBASE PROJECT CONFIGURATION
==================================================

**Flow:**
Flutter application → Android Gradle → `google-services.json` → Google Services Gradle plugin `com.google.gms.google-services` → Firebase SDK → Firebase project.

*   **Firebase project configuration:** Relies on `google-services.json` applied via the Google Services Gradle plugin in `android/app/build.gradle.kts`. 
*   **Android package/application ID:** `com.example.customer_app` (Found in `android/app/build.gradle.kts`). This is a default placeholder and poses a major risk for Play Store publishing and Firebase App validation.
*   **google-services.json usage:** Placed in `android/app/google-services.json`. The file is read by the Gradle plugin during the build process to inject resources into the Android context.
*   **Environment separation:** NOT VERIFIED. There is no evidence of staging vs. production separation in the repository. Only one `google-services.json` was detected.

==================================================
3. FIREBASE INITIALIZATION AUDIT
==================================================

**Actual Initialization Sequence (lib/main.dart):**
Application startup
→ `WidgetsFlutterBinding.ensureInitialized()`
→ `Firebase.initializeApp()`
→ `SharedPreferences.getInstance()`
→ `ProviderScope` (overriding storage providers)
→ `FreshSaveApp` (ConsumerWidget)
→ `MaterialApp.router`

*   **Where it is called:** `lib/main.dart` line 17.
*   **Await status:** Yes, it is awaited (`await Firebase.initializeApp();`).
*   **Error handling:** NOT VERIFIED. There is no `try/catch` block wrapping the initialization in `main.dart`.
*   **firebase_options.dart usage:** No. The codebase does not use `options: DefaultFirebaseOptions.currentPlatform`. It relies on the native configuration injection.

==================================================
4. FIREBASE AUTHENTICATION AUDIT
==================================================

**Implemented Methods (from `AuthRepositoryImpl`):**
*   `signInWithEmailAndPassword`
*   `createUserWithEmailAndPassword`
*   `signOut`
*   `sendPasswordResetEmail`
*   `signInWithGoogle` (using `google_sign_in` and `GoogleAuthProvider.credential`)

*   **Implementation Location:** `lib/features/auth/data/repositories/auth_repository_impl.dart`.
*   **Token Handling:** Tokens and session state are managed by the Firebase SDK natively. 
*   **Local Storage of Passwords:** No passwords are saved in the codebase.
*   **Logout behavior:** Calls `await firebaseAuth.signOut();`.
*   **Error Handling:** Implemented. Authentication returns a `Result.success` or handles failures implicitly.

==================================================
5. AUTHENTICATION FLOW DIAGRAM
==================================================

User
 ↓
Login Screen / Register Screen (`login_screen.dart` / `register_screen.dart`)
 ↓
Auth Controller (`auth_controller.dart`)
 ↓
Auth Repository (`auth_repository_impl.dart`)
 ↓
FirebaseAuth (`firebaseAuth.signInWithEmailAndPassword` / `signInWithGoogle`)
 ↓
Firebase Authentication Backend
 ↓
Firebase SDK manages Session internally
 ↓
Controller updates state -> App Router detects auth state change
 ↓
Authenticated Screens

==================================================
6. CREDENTIAL SECURITY
==================================================

*   **google-services.json:** Present in `android/app/google-services.json`.
*   **Git Exposure:** `google-services.json` is NOT listed in the `.gitignore` file. This means the API key, project ID, and client IDs are likely exposed in source control. (HIGH RISK).
*   **Token Storage:** The codebase utilizes `flutter_secure_storage` inside `lib/core/storage/token_storage.dart`. This encrypts data (like JWTs or access tokens) using Keystore on Android and Keychain on iOS. 
*   **SharedPreferences:** Used safely for non-sensitive data: `setSearchRadius`, `setReducedMotion`, `setThemeMode`.
*   **Hardcoded secrets:** None found directly in Dart code.

==================================================
7. ANDROID SECURITY
==================================================

*   **AndroidManifest.xml (`android/app/src/main/AndroidManifest.xml`):**
    *   `<application android:usesCleartextTraffic="true">` is present. This is a massive security risk that allows the application to communicate over unencrypted HTTP, making it vulnerable to Man-In-The-Middle (MITM) attacks. (HIGH RISK)
    *   Permissions requested: `ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`, `INTERNET`.
    *   Exported Activities: `MainActivity` is exported (`android:exported="true"`) to act as the LAUNCHER, which is standard.
*   **build.gradle.kts:** Application ID is left as `com.example.customer_app`. 

==================================================
8. FIREBASE SECURITY RULES
==================================================

NOT VERIFIED / REQUIRES MANUAL VERIFICATION.
Firebase security rules (`firestore.rules`, `storage.rules`, `database.rules.json`) could not be verified from the repository. There are no local rule files committed. Do not assume that Firebase Console rules are secure.

==================================================
9. BACKEND AUTHORIZATION
==================================================

NOT VERIFIED / REQUIRES MANUAL VERIFICATION.
The Flutter codebase implies a transition to Firebase Auth (noted by comments in `auth_repository_impl.dart`: `"We will mock this response for now as we transition to Firebase Auth"`). 
The backend code handling the actual Firebase ID tokens for protected resources was not found in this repository.

==================================================
10. API SECURITY
==================================================

NOT VERIFIED / REQUIRES MANUAL VERIFICATION.
Because `usesCleartextTraffic="true"` is enabled, any HTTP API calls made by the `dio` package could potentially be intercepted if the endpoint is not explicitly enforcing HTTPS.

==================================================
11. FIREBASE API KEY SECURITY
==================================================

The Firebase API key contained in `google-services.json` is exposed to the client and will be bundled into the APK.
*   **What it can do:** It identifies the Firebase project to Google servers. 
*   **Why it is not equivalent to a password:** The API key alone does not grant access to user data. Access is governed by Firebase Security Rules.
*   **Recommendations:** While client exposure is normal, the key should be restricted in the Google Cloud Console to only allow requests from the specific Android SHA-1/SHA-256 and Application ID (`com.example...`). 

==================================================
12. GOOGLE SIGN-IN / OAUTH SECURITY
==================================================

ACTUALLY IMPLEMENTED.
*   **Implementation:** Found in `auth_repository_impl.dart` (`signInWithGoogle()`).
*   **Credential Exchange:** Correctly uses `firebase.GoogleAuthProvider.credential(accessToken, idToken)`.
*   **Configuration:** Requires manual verification of the SHA-1/SHA-256 fingerprint in the Firebase Console and Google Cloud Console.

==================================================
13. ROUTING AND SESSION SECURITY
==================================================

*   **Implementation:** Uses `go_router` (`routerProvider`).
*   **Protection:** The router handles navigation, but since the Firebase session is managed by the Firebase SDK, the client-side router merely acts as a UI gatekeeper. True authorization must be enforced by the backend and Firebase Security Rules. UI-level protection relies on checking `firebaseAuth.currentUser`.

==================================================
14. LOCAL STORAGE SECURITY
==================================================

*   **Token Storage (`lib/core/storage/token_storage.dart`)**
    *   **Mechanism:** `flutter_secure_storage`
    *   **Encryption status:** Encrypted (Android Keystore / iOS Keychain).
    *   **Security risk:** LOW. This is the correct way to store sensitive tokens on mobile.
*   **Preferences Storage (`lib/core/storage/preferences_storage.dart`)**
    *   **Mechanism:** `shared_preferences`
    *   **Encryption status:** Plaintext XML (Android) / UserDefaults (iOS).
    *   **Security risk:** LOW. Used only for UI settings (Theme, Search Radius, Reduced Motion).

==================================================
15. RELEASE BUILD SECURITY
==================================================

CRITICAL FINDING:
In `android/app/build.gradle.kts`:
```kotlin
buildTypes {
    release {
        // Signing with the debug keys for now, so `flutter run --release` works.
        signingConfig = signingConfigs.getByName("debug")
    }
}
```
*   Release builds are currently signed using the debug keystore. This means the release APK cannot be uploaded to the Google Play Store, and anyone can spoof the application if they possess the publicly known Android debug keystore.

==================================================
16. SOURCE CONTROL SECURITY
==================================================

*   `.gitignore` is present but **does not exclude `google-services.json`**.
*   This implies configuration files and project identifiers are leaked to anyone with repository access.

==================================================
17. DEPENDENCY SECURITY
==================================================

From `pubspec.yaml`:
*   `firebase_auth: ^6.7.0`
*   `google_sign_in: ^6.2.1`
*   `flutter_secure_storage: ^11.0.0`
*   `dio: ^5.11.0`

Dependencies are modern. No immediate security flaws in the declared versions.

==================================================
18. THREAT MODEL
==================================================

1. **Network Attacker (MITM):**
   *   *Attack surface:* `usesCleartextTraffic="true"`.
   *   *Possible attack:* Intercept unencrypted HTTP API requests to steal sessions.
   *   *Risk:* HIGH.
   *   *Mitigation:* Remove `usesCleartextTraffic="true"`.

2. **Malicious App Developer / Spoofing:**
   *   *Attack surface:* Debug signing in release build + default Application ID.
   *   *Possible attack:* Create a malicious app with the same ID and sign it with the universal debug key to overwrite the app on user devices (if installed outside Play Store).
   *   *Risk:* CRITICAL.
   *   *Mitigation:* Generate a production Keystore, use a unique Application ID, and configure `signingConfigs.getByName("release")`.

==================================================
19. FINDINGS TABLE
==================================================

| ID | Severity | Component | Finding | Evidence | Impact | Recommendation |
|----|----------|-----------|---------|----------|--------|----------------|
| 1 | CRITICAL | Android Build | Release build uses debug signing config | `build.gradle.kts`: `signingConfig = signingConfigs.getByName("debug")` | App cannot be published safely; easily spoofed. | Create a release keystore and update `build.gradle.kts`. |
| 2 | HIGH | AndroidManifest | Cleartext traffic allowed | `AndroidManifest.xml`: `android:usesCleartextTraffic="true"` | MITM attacks can intercept unencrypted HTTP traffic. | Remove `usesCleartextTraffic="true"` or use Network Security Config. |
| 3 | HIGH | Git | `google-services.json` committed to Git | `.gitignore` does not exclude `google-services.json` | Project configuration and API keys leaked in repo. | Add `google-services.json` to `.gitignore`. |
| 4 | MEDIUM | Android Build | Default Application ID used | `build.gradle.kts`: `applicationId = "com.example.customer_app"` | App cannot be published to Play Store; conflicts with other example apps. | Change Application ID to a unique reverse-domain identifier. |
| 5 | LOW | Firebase Init | Missing `try/catch` in initialization | `main.dart`: `await Firebase.initializeApp();` | App crashes silently if Firebase fails to initialize. | Wrap initialization in `try/catch`. |

==================================================
20. FIREBASE SECURITY SCORECARD
==================================================

*   Firebase Configuration: PARTIAL (Relies on committed JSON, default App ID)
*   Authentication: PASS (Standard implementation via SDK)
*   Authorization: NOT VERIFIED
*   Token Handling: PASS (Uses flutter_secure_storage)
*   Backend Verification: NOT VERIFIED
*   Firestore Rules: NOT VERIFIED
*   Storage Rules: NOT VERIFIED
*   API Security: FAIL (Cleartext traffic enabled)
*   Android Security: FAIL (Cleartext, Default App ID)
*   Local Storage: PASS
*   Logging: PASS
*   Release Security: FAIL (Debug Keystore used)
*   Dependency Security: PASS
*   Secret Management: FAIL (google-services.json in Git)

==================================================
21. PRIORITIZED REMEDIATION PLAN
==================================================

**P0 — Immediate**
*   **Problem:** Release build uses debug signing.
*   **File:** `android/app/build.gradle.kts`
*   **Approach:** Generate a production `jks` keystore, configure a `release` signing config block reading from `key.properties`, and apply it to the `release` build type.

**P1 — High Priority**
*   **Problem:** Cleartext traffic allowed.
*   **File:** `android/app/src/main/AndroidManifest.xml`
*   **Approach:** Remove `android:usesCleartextTraffic="true"`.
*   **Problem:** Default application ID.
*   **File:** `android/app/build.gradle.kts`
*   **Approach:** Change `applicationId` to a unique reverse-domain format (e.g., `com.freshsave.customer`).

**P2 — Medium Priority**
*   **Problem:** `google-services.json` is not ignored.
*   **File:** `.gitignore`
*   **Approach:** Add `google-services.json` to `.gitignore`. (If already committed, remove it from git history using `git rm --cached`).

==================================================
22. FINAL VERDICT
==================================================

*   **Overall security rating:** D
*   **Top 5 security risks:** 
    1. Debug keystore used for release builds.
    2. Cleartext traffic enabled globally.
    3. `google-services.json` committed to source control.
    4. Default `com.example` application ID in use.
    5. Unknown backend authorization status.
*   **Top 5 recommended fixes:**
    1. Implement production Keystore signing.
    2. Disable cleartext traffic in AndroidManifest.
    3. Change Application ID to a unique identifier.
    4. Exclude `google-services.json` from Git.
    5. Ensure Firebase Security Rules are implemented on the backend.
*   **Firebase readiness:** PARTIAL. (Needs App ID update).
*   **Production readiness:** FAIL.
*   **Authentication readiness:** PASS.
*   **Release APK security readiness:** FAIL.
