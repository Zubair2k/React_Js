const reducer = (state, action) => {
    switch (action.type) {
      case "USER_NAME":
        return action.name;
  
      default:
        return "";
    }
  };
  export default reducer;
  