import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

//  Instantiate the global object
const StoreContext = createContext();
const { Provider } = StoreContext;

// Value is good to include, it opens up to pass in more data for state if we need to
// ...props is in place to handle any other props the user may need
const StoreProvider = ({ value = [], ...props }) => {
  // Every time we run useProductReducer() we receive:
  // state - Most up to date version of global object
  // dispatch - Method we execute to update our state
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: '',
  });
  // use this to confirm it works!
  console.log(state);

  // We initially created our own functionality to manage state at a global level and make it available to all
  // of our components through a special <Provider> component
  return <Provider value={[state, dispatch]} {...props} />;
};

// With this last block of code, we just created our own custom hook
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
