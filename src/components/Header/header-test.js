import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import Header from './header';

describe('header', async (assert) => {
  const createHeader = () => render(<Header />);
  {
    const $ = createHeader();
    assert({
      given: 'no arguments',
      should: 'render the header',
      expected: 1,
      actual: $(`.header`).length,
    });
  }
});
