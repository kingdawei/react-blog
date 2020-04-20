export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .add({
        ...post,
        // author: "author",
        // createdAt: new Date(),
        // authorId: 12345,
        date: "1 hour ago",
      })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};
