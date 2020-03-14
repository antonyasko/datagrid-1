import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Table from './components/table';
import SearchBar from './components/search-bar';
import VisibilityBar from './components/visibility-bar';
import VirtualizationToggler from './components/virtualization-toggler';

import './App.scss';

const App: React.FC = () => (
  <Provider store={store}>
    <h1>Data grid</h1>
    <SearchBar />
    <VisibilityBar />
    <VirtualizationToggler />
    <Table />
  </Provider>
);

export default App;
