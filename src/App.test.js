import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import App from './App';
import MovieBrowser from './modules/movie-browser/movie-browser.container';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('App Tests', () => {
  const mockStore = configureStore();
  let store, appContainer, initialState;

  beforeEach(() => {
    initialState = {
      movieBrowser: {
        nowPlaying: { response: { results: [] } },
        genreList: { response: { genres: [] } },
        ratingFilter: { selectedRating: 3 },
        genreFilters: { selectedGenres: new Map() }
      }
    };
    store = mockStore(initialState);
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance()).not.toBeNull();
  });

  it('renders FULL app with store', () => {
    appContainer = shallow(
      <Provider store={store}>
        <App getGenresList={() => {}} />
      </Provider>
    );
    expect(appContainer.instance()).not.toBeNull();
  });
});
