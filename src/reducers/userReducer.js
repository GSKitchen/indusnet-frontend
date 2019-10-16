const initState = {
  userInfo: [
    {
      firstName: "fn",
      lastName: "fssss",
      email: "sfdf@gmail.com",
      companyName: "gvvv",
      password: "pw",
      conPassword: "cpm"
    }
  ],
  user: null,
  userOtp: "",
  companyDetails: null,
  errorMessage: ""
};

const userReducer = (state = initState, action) => {
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
