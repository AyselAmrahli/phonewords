import React from 'react';
import { render } from '@testing-library/react';
import Suggestions from '../components/Suggestions';
describe('Suggestion components', () => {
  let mockData: {name: string, number: string, words: Array<string>};
  beforeEach(() => {
    mockData = {
      "name": "phonewords",
      "number": "23",
      "words": [
        "cd",
        "bd",
        "ad",
        "ce",
        "be",
        "ae",
        "cf",
        "bf",
        "af"
      ]
    };
    jest.mock('../hooks/useFetch.ts');
  });

  test('renders suggestion components via given data', async () => {
    const { getByTestId } = render(
      <Suggestions contents={mockData.words} />
    );

    expect(getByTestId('suggest-wrapper')).toHaveStyle('display: flex');
    mockData.words.forEach((w) => {
      expect(getByTestId(`list-item-${w}`)).toHaveStyle('margin: 0px 3px');
      expect(getByTestId(`list-item-${w}`).firstChild).toHaveTextContent(w);
    })
  });
});