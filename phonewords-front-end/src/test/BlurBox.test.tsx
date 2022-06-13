import React from 'react';
import { render, screen } from '@testing-library/react';
import BlurBox from '../components/BlurBox';

describe('BlurBox component', () => {
  test('renders BlurBox component', () => {
    const children = <h4 className="head-element">Testing blur box</h4>
    render(<BlurBox>{children}</BlurBox>);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/Testing blur box/);
    expect(element).toHaveClass('head-element');
  });
})
