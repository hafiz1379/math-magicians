import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Quote from './quote';

describe('Quotes', () => {
  it('Renders Quote component', () => {
    const quotes = render(<Quote />);
    expect(quotes).toMatchSnapshot();
  });

  it('Displays loading message while fetching quotes', () => {
    const quotes = render(<Quote />);
    const loading = quotes.getByText((content) => content === 'Loading ↺');
    expect(loading).toBeInTheDocument();
  });
});
