// initial state
const initState = {
  user: null,
  userOtp: "",
  companyDetails: null,
  errorMessage: ""
};

//this reducer take state adnd action as parameter
const userReducer = (state = initState, action) => {
  //differentiate action type
  switch (action.type) {
    case "CREATE_USER":
      console.log("created user", action.user);
      return {
        ...state,
        userInfo: action.user,
        user: action.user
      };
    case "VERIFY_OTP":
      //console.log(action.userOtp);
      return {
        ...state,
        errorMessage: action.message
      };
    case "SAVE_COMPANY":
      console.log(action.company);
      return {
        ...state,
        companyDetails: action.company
      };
    default:
      return state;
  }
};

export default userReducer;
