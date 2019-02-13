import React, { Component } from 'react';
import CommentList from '../Containers/CommentList';
import CommentForm from '../Containers/CommentForm';
import DATA from '../Containers/data';
import '../CSS/CommentBox.css';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  render() {
    return (
      <div className="container">
        <div className="comments">
          <h2>Comments:</h2>
          <CommentList data={DATA} />
        </div>
        <div className="form">
          <CommentForm />
        </div>
      </div>
    );
  }
}

export default CommentBox;