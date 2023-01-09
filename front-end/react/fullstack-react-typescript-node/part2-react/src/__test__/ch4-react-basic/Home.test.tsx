import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Home from "../../ch4-react-basic/Home";

describe('Test Home', () => {
  it('render without crashing', () => {
    const { baseElement } = render(<Home/>);
    expect(baseElement).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { baseElement } = render(<Home/>);
    expect(baseElement).toMatchSnapshot();
  });
})