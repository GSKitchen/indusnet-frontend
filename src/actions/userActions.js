export const createUser = user => {
  return (dispatch, getState) => {
    //make async code
    dispatch({ type: "CREATE_USER", user });
  };
};

export const verifyOtp = userOtp => {
  return (dispatch, getState) => {
    //make db call
    dispatch({ type: "VERIFY_OTP", userOtp });
  };
};

export const saveCompany = company => {
  return (dispatch, getState) => {
    dispatch({ type: "SAVE_COMPANY", company });
  };
};
