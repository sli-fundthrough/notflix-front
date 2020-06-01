import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import MoviePreviews from './components/MoviePreviews';

import store from './store';

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <MoviePreviews/>
          </div>
      </Provider>
  );
}

export default App;
