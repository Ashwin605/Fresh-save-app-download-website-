import { useState } from 'react'
import { RevealWrapper } from '../ui/RevealWrapper'

const faqItems = [
  {
    question: 'What is MYOFERS?',
    answer:
      'MYOFERS is an Android application that helps you discover local stores and products near your location. It connects customers with nearby shopkeepers, making local shopping easier and more convenient.',
  },
  {
    question: 'How do I install the APK?',
    answer:
      'Download the APK from the download section above, open the downloaded file, allow installation from this source if Android prompts you, then tap Install. Once installed, you\'ll find MYOFERS on your home screen.',
  },
  {
    question: 'Why isn\'t MYOFERS on the Play Store?',
    answer:
      'MYOFERS is currently distributed as a direct APK download from this official website. We may publish to the Play Store in the future, but for now you can download the latest version directly here.',
  },
  {
    question: 'Is MYOFERS free?',
    answer:
      'Yes, MYOFERS is free to download and use. There are no hidden charges for browsing stores and products.',
  },
  {
    question: 'Can I use MYOFERS without creating an account?',
    answer:
      'You can browse stores and products without an account. However, some features like placing orders and managing your cart may require you to sign in.',
  },
  {
    question: 'How do I update the app?',
    answer:
      'Visit this website to download the latest APK whenever a new version is available. We recommend checking back periodically for updates with new features and improvements.',
  },
  {
    question: 'What should I do if the APK doesn\'t install?',
    answer:
      'Make sure you have allowed installation from unknown sources in your Android settings. Go to Settings → Security (or Privacy) → enable \"Install from unknown sources\" for your browser. If the issue persists, try downloading the APK again.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-charcoal-100 rounded-2xl overflow-hidden bg-white transition-shadow duration-200 hover:shadow-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400 focus-visible:ring-inset rounded-2xl"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-charcoal-900 leading-snug">
          {question}
        </span>
        <span
          className={`w-8 h-8 rounded-xl bg-charcoal-50 border border-charcoal-100 flex items-center justify-center shrink-0 transition-all duration-200 ${
            isOpen ? 'bg-fresh-50 border-fresh-200 rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 transition-colors duration-200 ${isOpen ? 'text-fresh-600' : 'text-charcoal-500'}`}>
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-spring ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pt-0">
          <div className="divider mb-4" aria-hidden="true" />
          <p className="text-sm text-charcoal-500 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="section-padding"
      aria-label="Frequently asked questions"
    >
      <div className="container-page">
        <RevealWrapper>
          <div className="text-center mb-12 md:mb-16">
            <span className="section-label mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-fresh-500" aria-hidden="true" />
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-950 tracking-tight mt-4 mb-4 text-balance">
              Frequently asked{' '}
              <span className="text-gradient">questions</span>
            </h2>
            <p className="text-lg text-charcoal-500 max-w-lg mx-auto leading-relaxed">
              Got questions? Here are answers to the most common ones.
            </p>
          </div>
        </RevealWrapper>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqItems.map((item, i) => (
            <RevealWrapper key={item.question} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <FAQItem question={item.question} answer={item.answer} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
