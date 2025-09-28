import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '@/components/Header'

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
    resolvedTheme: 'light',
  }),
}))

describe('Header', () => {
  it('renders the header with navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('5Xcodes')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the mobile menu button', () => {
    render(<Header />)
    
    const mobileMenuButton = screen.getByRole('button', { name: /open main menu/i })
    expect(mobileMenuButton).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />)
    
    const mobileMenuButton = screen.getByRole('button', { name: /open main menu/i })
    fireEvent.click(mobileMenuButton)
    
    // Check if mobile menu is now open
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('renders the theme toggle button', () => {
    render(<Header />)
    
    const themeToggle = screen.getByRole('button', { name: /toggle theme/i })
    expect(themeToggle).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Header />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveAttribute('aria-label', 'Main navigation')
  })
})