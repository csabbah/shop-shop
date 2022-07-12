import { reducer } from '../utils/reducers';

import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../utils/actions';

// create a sample of what our global state will look like
const initialState = {
  products: [],
  categories: [{ name: 'Food' }],
  currentCategory: '1',
};

// With this test, we create a new state object
// When creating new objects to hold our state, most of it doesn't change.
test('UPDATE_PRODUCTS', () => {
  let newState = reducer(initialState, {
    // The type of action we're performing (the predefined one)
    type: UPDATE_PRODUCTS,
    products: [{}, {}],
  });

  //  These would confirm that we successfully added our products to newState
  expect(newState.products.length).toBe(2);
  // and that it didn't affect initialState
  expect(initialState.products.length).toBe(0);
});

test('UPDATE_CATEGORIES', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}],
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

test('UPDATE_CURRENT_CATEGORY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: '2',
  });

  expect(newState.currentCategory).toBe('2');
  expect(initialState.currentCategory).toBe('1');
});
