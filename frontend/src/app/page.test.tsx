import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home page', () => {
  it('renders the hero content for the storefront', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: /sweet treats for every occasion/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /browse best sellers/i })).toBeInTheDocument();
  });
});
