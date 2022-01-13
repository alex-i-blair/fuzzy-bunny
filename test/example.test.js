// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderBunny } from '../families/render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('this function should create an h4 dom element, add class list and text content and return the element', (expect) => {

    const bunny = {
        name: 'Fred'
    };

    const expected = '<h4 class="bunny">Fred</h4>';

    const actual = renderBunny(bunny).outerHTML;

    expect.equal(actual, expected);
});