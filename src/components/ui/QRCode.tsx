import { useEffect, useState } from 'react'
import QRCode from 'qrcode'

interface QRCodeSVGProps {
  value: string
  size?: number
  className?: string
}

export function QRCodeSVG({ value, size = 180, className = '' }: QRCodeSVGProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    QRCode.toCanvas(canvas, value, {
      width: size * 2,
      margin: 1,
      color: {
        dark: '#1a1c1a',
        light: '#ffffff',
      },
      errorCorrectionLevel: 'M',
    })
      .then(() => {
        setDataUrl(canvas.toDataURL('image/png'))
      })
      .catch(() => {
        // Silently fail — QR code is supplementary
      })
  }, [value, size])

  if (!dataUrl) {
    return (
      <div
        className={`bg-charcoal-50 rounded-2xl flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <div className="w-8 h-8 border-2 border-charcoal-300 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-2xl p-4 border border-charcoal-100 shadow-card inline-block ${className}`}>
      <img
        src={dataUrl}
        alt={`QR code linking to ${value}`}
        width={size}
        height={size}
        className="block rounded-lg"
      />
    </div>
  )
}
