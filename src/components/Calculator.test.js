import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';
import Calculator from './Calculator';

describe('Calculator', () => {
  test('calculator is rendering', () => {
    const calculator = render(<Calculator />);
    expect(prettyDOM(calculator.container)).toMatchSnapshot();
  });

  test('clicking on the "7" button should update the display', () => {
    const calculator = render(<Calculator />);
    const buttonSeven = calculator.getByText('7');
    fireEvent.click(buttonSeven);
    const displayValue = calculator.queryAllByText('7');
    expect(displayValue.length).toBeGreaterThan(0);
    expect(displayValue[0]).toBeInTheDocument();
  });
});
