const initState = {
  posts: [
    { id: "1", title: "help me!", content: "this is content" },
    { id: "1", title: "help me!", content: "this is content" },
    { id: "1", title: "help me!", content: "this is content" },
  ],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("created post", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("EROROROROR", action.err);
      return state;
    default:
      return state;
  }
};

export default postReducer;
