import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout';

describe('Layout component', () => {
  test('renders Layout component', () => {
    render(<Layout />);
    expect(screen.getByRole("img", { name: "kiwi logo" })).toBeInTheDocument();
  });
})
