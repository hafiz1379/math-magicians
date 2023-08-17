import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';
import Display from './chiled';

describe('display', () => {
  const calculator = render(<Display value="0" />);
  test('calculator is rendering', () => {
    expect(prettyDOM(calculator.container)).toMatchSnapshot();
  });
});
