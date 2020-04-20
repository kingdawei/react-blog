import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import css from "./PostPrev.module.css";

const PostDetails = (props) => {
  const { post } = props;
  if (post) {
    return (
      <div className={css.container}>
        <div className={css.authorCont}>
          {/* <img
          className={css.photo}
          src={PublicUrl(post.photo)}
          alt={props.post.author + " logo"}
        /> */}
          <div className={css.descCont}>
            <div className={css.titleCont}>
              <h2 className={css.title}>{post.title}</h2>
              <span className={css.date}>{post.date}</span>
            </div>
            <h2 className={css.author}>{post.author}</h2>
          </div>
        </div>
        <p>{post.content}</p>
        <p>Directions: {post.direction}</p>
        <p>{post.address}</p>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "posts",
    },
  ])
)(PostDetails);
