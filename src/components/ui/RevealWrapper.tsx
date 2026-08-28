import { useScrollReveal } from '../../hooks/useScrollReveal'

interface RevealWrapperProps {
  children: React.ReactNode
  className?: string
  variant?: 'up' | 'scale' | 'left' | 'right'
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  threshold?: number
}

const variantClass = {
  up: 'reveal',
  scale: 'reveal-scale',
  left: 'reveal-left',
  right: 'reveal-right',
}

const delayClass = {
  0: '',
  1: 'stagger-1',
  2: 'stagger-2',
  3: 'stagger-3',
  4: 'stagger-4',
  5: 'stagger-5',
  6: 'stagger-6',
}

export function RevealWrapper({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  threshold = 0.1,
}: RevealWrapperProps) {
  const { ref, isVisible } = useScrollReveal({ threshold })

  return (
    <div
      ref={ref}
      className={`${variantClass[variant]} ${delayClass[delay]} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
