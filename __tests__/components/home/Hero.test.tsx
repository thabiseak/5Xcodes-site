import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/home/Hero'

// Mock the FloatingCodeElements component
jest.mock('@/components/home/FloatingCodeElements', () => ({
  FloatingCodeElements: () => <div data-testid="floating-code-elements" />
}))

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    
    expect(screen.getByText('Accelerate Your')).toBeInTheDocument()
    expect(screen.getByText('Digital Future')).toBeInTheDocument()
    expect(screen.getByText('5X Faster')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    
    expect(screen.getByText(/transform your business with cutting-edge software solutions/i)).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Hero />)
    
    expect(screen.getByText('Get Started Today')).toBeInTheDocument()
    expect(screen.getByText('Watch Demo')).toBeInTheDocument()
  })

  it('renders the stats section', () => {
    render(<Hero />)
    
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Projects Delivered')).toBeInTheDocument()
    expect(screen.getByText('99%')).toBeInTheDocument()
    expect(screen.getByText('Client Satisfaction')).toBeInTheDocument()
    expect(screen.getByText('5X')).toBeInTheDocument()
    expect(screen.getByText('Faster Development')).toBeInTheDocument()
    expect(screen.getByText('24/7')).toBeInTheDocument()
    expect(screen.getByText('Support Available')).toBeInTheDocument()
  })

  it('renders the floating code elements', () => {
    render(<Hero />)
    
    expect(screen.getByTestId('floating-code-elements')).toBeInTheDocument()
  })

  it('renders the scroll indicator', () => {
    render(<Hero />)
    
    // The scroll indicator should be present (it's an animated element)
    const scrollIndicator = screen.getByRole('button', { hidden: true })
    expect(scrollIndicator).toBeInTheDocument()
  })
})
