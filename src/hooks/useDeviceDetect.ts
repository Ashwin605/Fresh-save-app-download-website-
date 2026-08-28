import { useMemo } from 'react'

export type DeviceType = 'android' | 'ios' | 'desktop' | 'unknown'

export function useDeviceDetect(): DeviceType {
  return useMemo(() => {
    if (typeof navigator === 'undefined') return 'unknown'
    const ua = navigator.userAgent.toLowerCase()
    if (/android/.test(ua)) return 'android'
    if (/iphone|ipad|ipod/.test(ua)) return 'ios'
    if (/windows|macintosh|linux/.test(ua)) return 'desktop'
    return 'unknown'
  }, [])
}
