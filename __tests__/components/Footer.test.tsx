import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer'

describe('Footer', () => {
  it('renders the footer with company information', () => {
    render(<Footer />)
    
    expect(screen.getByText('5Xcodes')).toBeInTheDocument()
    expect(screen.getByText(/accelerating digital transformation/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    
    expect(screen.getByText('Custom Development')).toBeInTheDocument()
    expect(screen.getByText('Cloud Solutions')).toBeInTheDocument()
    expect(screen.getByText('AI Integration')).toBeInTheDocument()
    expect(screen.getByText('Mobile Apps')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    
    const socialLinks = screen.getAllByRole('link')
    const linkedinLink = socialLinks.find(link => 
      link.getAttribute('href')?.includes('linkedin.com')
    )
    const twitterLink = socialLinks.find(link => 
      link.getAttribute('href')?.includes('twitter.com')
    )
    const githubLink = socialLinks.find(link => 
      link.getAttribute('href')?.includes('github.com')
    )
    
    expect(linkedinLink).toBeInTheDocument()
    expect(twitterLink).toBeInTheDocument()
    expect(githubLink).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    
    expect(screen.getByText(/contact@5xcodes.com/i)).toBeInDocument()
    expect(screen.getByText(/\+1 \(555\) 123-4567/i)).toBeInTheDocument()
  })

  it('renders copyright information', () => {
    render(<Footer />)
    
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${currentYear} 5Xcodes`))).toBeInTheDocument()
  })
})
