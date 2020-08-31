import React from 'react';
import App from './App';
// import {add} from './App';

const add = jest.fn(() => 3);

test('Fake Test', () => {
  expect(true).toBeTruthy();
});

test('Fake TEst2', () => {
  expect(add(1,2)).toEqual(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1,2);
})
