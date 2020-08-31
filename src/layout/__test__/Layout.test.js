import React from 'react';
import ReactDOM from 'react-dom';
import {NavigationBar} from '../Layout';
import {render, cleanup} from '@testing-library/react';
// import {storageMock} from '../../setupTests';

beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    localStorage.clear();
  });

afterEach(cleanup);

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavigationBar/>, div);
    // console.log(localStorage.getItem('isLoggedIn'));
})

it ('render Navigation Bar without login', () => {
    const KEY = 'isLoggedIn',VALUE = 'false';
    localStorage.setItem(KEY, VALUE);
    // expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.getItem(KEY)).toBe(VALUE);
    const div = document.createElement('div');
    // ReactDOM.render(<NavigationBar/>, div);
    const {container} = render(<NavigationBar/>)
    const element = container.querySelector('responsive-navbar-nav');
    console.log(element);
    console.log(container);
})

test('should not impact the next test', () => {
    const KEY = 'foo',
      VALUE = 'bar';
    localStorage.setItem(KEY, VALUE);
    // expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.getItem(KEY)).toBe(VALUE);
    //expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    //expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });

// it('should not be impacted by the previous test', () => {
    
// })

