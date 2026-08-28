interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'w-48',
  md: 'w-64',
  lg: 'w-72 md:w-80',
}

export function PhoneMockup({ children, className = '', size = 'md' }: PhoneMockupProps) {
  return (
    <div
      className={`relative ${sizeMap[size]} mx-auto select-none ${className}`}
      aria-hidden="true"
    >
      {/* Phone shell */}
      <div className="relative bg-charcoal-950 rounded-[3rem] border-[3px] border-charcoal-800 shadow-phone overflow-hidden">
        {/* Top notch / pill */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 w-24 h-5 bg-charcoal-950 rounded-full" />
        {/* Screen */}
        <div className="relative bg-white overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
          {children}
        </div>
        {/* Bottom indicator */}
        <div className="h-4 flex items-center justify-center">
          <div className="w-24 h-1 bg-charcoal-600 rounded-full" />
        </div>
      </div>
    </div>
  )
}
