import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DisplayText from "../../ch6-react-testing/DisplayText";

import "@testing-library/jest-dom/extend-expect";

describe('Test DisplayText', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<DisplayText/>);
    expect(baseElement).toBeInTheDocument();
  });

  it('receives input text', () => {
    const testTextInput = 'Text For Testing Input';
    const testTextOutput = `Welcome to React Testing : ${testTextInput}`;
    render(<DisplayText/>);

    const input = screen.getByTestId('user-input');
    fireEvent.change(input, {
      target: {
        value: testTextInput,
      },
    });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(testTextInput);

    const button = screen.getByTestId('input-submit');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    const output = screen.getByTestId('final-msg');
    expect(output).toBeInTheDocument();
    expect(output.innerHTML).toBe(testTextOutput);
  })
});