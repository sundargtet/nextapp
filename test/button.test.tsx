import '@testing-library/jest-dom'
import { fireEvent, render, screen, cleanup } from '@testing-library/react'
import Button from '@/share/atoms/button'

afterEach(() => {
  cleanup()
})

describe('Button', () => {
  const onClick = jest.fn()
  render(<Button onClick={onClick} isDisabled={true}>hello</Button>)
  const button = screen.getByTestId('nxt-btn')

  it('should render button component', () => {
    expect(button).toBeInTheDocument()
  })
  it('should render a button with children text', () => {
    expect(button).toHaveTextContent('hello')
  })
  it('should render a button with class of nxt-btn', () => {
    expect(button).toHaveClass('nxt-btn')
  })
  it('should render a button with disable condition', () => {
    expect(button).toBeDisabled()
  })
  it('should render a button with click condition', () => {
    fireEvent.click(button)
  })
})

