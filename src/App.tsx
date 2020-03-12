import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Table from './components/table';
import SearchBar from './components/search-bar';
import VisibilityBar from './components/visibility-bar';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <h1>Data grid</h1>
      <SearchBar />
      <VisibilityBar />
      <Table />
    </Provider>
  );
}

export default App;
