import React, {Component} from 'react';

import BookList from '../containers/book-list';

export default class App_Redux extends Component {
  render() {
    return (
        <div>
          <BookList />
        </div>

    )
  }
}