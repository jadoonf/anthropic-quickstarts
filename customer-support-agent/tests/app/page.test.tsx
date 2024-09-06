import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatArea from '@/components/ChatArea';

test('renders ChatArea component', () => {
  render(<ChatArea />);
  const chatAreaElement = screen.getByText(/ChatArea/i);
  expect(chatAreaElement).toBeInTheDocument();
});
