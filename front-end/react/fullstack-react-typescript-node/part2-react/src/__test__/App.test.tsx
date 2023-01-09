import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test('renders buttons', () => {
  render(<App/>, { wrapper: BrowserRouter });
  const buttonList = ['Index', 'Chapter 4', 'Chapter 5', 'Chapter 6'];
  buttonList.forEach(button => {
    const elem = screen.getByText(button);
    expect(elem).toBeInTheDocument();
  });
});
