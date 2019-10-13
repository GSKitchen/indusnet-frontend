const initState = {
  userInfo: [
    {
      firstName: "fn",
      lastName: "fssss",
      email: "sfdf",
      companyName: "gvvv",
      password: "pw",
      conPassword: "cpm"
    }
  ],
  userOtp: "",
  companyDetails: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      //console.log("created user", action.user);
      return {
        ...state,
        userInfo: action.user
      };
    case "VERIFY_OTP":
      //console.log(action.userOtp);
      return {
        ...state,
        userOtp: action.userOtp
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
