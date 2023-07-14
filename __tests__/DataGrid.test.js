


// DataGrid.test.jsx
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import DataGrid from '../components/DataGrid';

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  app: {
    searchData: {
      status: '',
      original_launch: '',
      type: '',
    },
    pagination: {
      currentPage: 1,
      totalPages: 1,
    },
    searchResults: [],
  }
});

// Mock axios get method
jest.mock('axios');
axios.get.mockResolvedValue({
  data: [], // mock response data
  headers: {
    'spacex-api-count': '20' // mock response headers
  }
});

describe('DataGrid component', () => {
  test('renders without errors', () => {
    render(
      <Provider store={store}>
        <DataGrid />
      </Provider>
    );
    // Add your assertions here
  });

  test('renders pagination component', () => {
    render(
      <Provider store={store}>
        <DataGrid />
      </Provider>
    );

    const paginationComponent = screen.getByTestId('pagination-component');
    expect(paginationComponent).toBeInTheDocument();
  });
});
