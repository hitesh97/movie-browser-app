import React from 'react';
import { shallow } from 'enzyme';
import * as testSetup from './test-setup';
import MovieCardComponent from '../movie-card/movie-card.component';
import GenreListComponent from '../genre-list/genre-list.component';

testSetup.configureAdapter();

describe('Movie Card Tests', () => {
  it('renders without crashing when no movie is set', () => {
    const wrapper = shallow(<MovieCardComponent />);
    expect(wrapper.instance()).not.toBeNull();
  });
  it('renders movie title and other attribiutes when movie is set', () => {
    const movie = {
      adult: false,
      vote_average: 5.7,
      title: 'spiderman',
      overview: 'The film reveals the ...',
      popularity: 4,
      backdrop_path: 'https://image.tmdb.org/t/p/w300/backdrop.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w300/poster.jpg'
    };
    const wrapper = shallow(<MovieCardComponent movie={movie} />);

    expect(wrapper.find('.titleText').text()).toEqual(movie.title);
    expect(wrapper.find('img').prop('src')).toEqual(movie.poster_path);
    expect(wrapper.contains(<GenreListComponent />)).toBeTruthy();
  });
});
