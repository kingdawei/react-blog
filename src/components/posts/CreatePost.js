import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";

class CreatePost extends Component {
  state = {
    title: "",
    content: "",
    address: "",
    direction: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
  };

  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">New Post</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="author">Author</label>
              <input type="text" id="author" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="content"> Content</label>
              <textarea
                id="content"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="input-field">
              <label htmlFor="direction"> Direction</label>
              <textarea
                id="direction"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
            </div>

            <div className="input-field">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <button className="btn blue lighten-1 z-depth-0">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { createPost: (post) => dispatch(createPost(post)) };
};
export default connect(null, mapDispatchToProps)(CreatePost);
