import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import Icon from '@/share/atoms/icon'

afterEach(() => {
    cleanup()
})

describe('Icon', () => {
    const handleClick = jest.fn()
    render(<Icon type='error' handleClick={handleClick}/>)
    const icon = screen.getByTestId('icon-button')

    it('should render icon component',  ()=>{
        expect(icon).toBeInTheDocument()
    })
    it('should have a icon with class nxt-icon', ()=>{
        expect(icon).toHaveClass('nxt-icon')
    })
    it('should have a icon with variant', ()=>{
        // expect(icon).toHaveProperty('variant','ghost')
        expect(icon).toHaveProperty('variant', 'button')
    })
})