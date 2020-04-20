import React from "react";
import css from "./PostPrev.module.css";

const ProjectSummary = ({ post }) => {
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
          <h4 className={css.author}>{post.author}</h4>
        </div>
      </div>
    </div>
  );
};
export default ProjectSummary;
