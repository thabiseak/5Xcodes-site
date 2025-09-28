import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '@/components/contact/ContactForm';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  useInView: () => [null, true],
}));

describe('ContactForm Component', () => {
  it('renders all form fields', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('shows validation errors for required fields', async () => {
    render(<ContactForm />);
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Subject is required')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    render(<ContactForm />);
    
    const emailInput = screen.getByLabelText(/email address/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    render(<ContactForm />);
    
    // Fill in the form
    fireEvent.change(screen.getByLabelText(/full name/i), { 
      target: { value: 'John Doe' } 
    });
    fireEvent.change(screen.getByLabelText(/email address/i), { 
      target: { value: 'john@example.com' } 
    });
    fireEvent.change(screen.getByLabelText(/company/i), { 
      target: { value: 'Test Company' } 
    });
    fireEvent.change(screen.getByLabelText(/subject/i), { 
      target: { value: 'general' } 
    });
    fireEvent.change(screen.getByLabelText(/message/i), { 
      target: { value: 'Test message' } 
    });
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    // Check if loading state is shown
    expect(screen.getByText('Sending...')).toBeInTheDocument();
  });
});