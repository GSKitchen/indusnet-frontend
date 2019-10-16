import axios from "axios";

export const createUser = (user, props) => {
  return (dispatch, getState) => {
    axios
      .post("http://indusnet.ap-south-1.elasticbeanstalk.com/users", user)
      .then(res => {
        if (res.status === 201 || res.status === "201") {
          props.history.push("/verify");
        }
      });
    //console.log(user);
    dispatch({ type: "CREATE_USER", user });
  };
};

export const verifyOtp = (userOtp, props) => {
  return (dispatch, getState) => {
    //make db call
    let message;
    console.log(userOtp);
    axios.post("http://192.168.43.236:5000/verify-email", userOtp).then(res => {
      console.log(res);
      if (res.status === 200) {
        message = res.statusText;
        props.history.push("/company-details");
      } else {
        message = res.statusText;
      }
    });
    dispatch({ type: "VERIFY_OTP", message });
  };
};

export const saveCompany = (company, props) => {
  return (dispatch, getState) => {
    console.log(props);
    axios
      .post("http://192.168.43.236:5000/save-company/" + props.user.email)
      .then(res => {
        console.log(res);
      });
    props.history.push("/signer-details");
    dispatch({ type: "SAVE_COMPANY", company });
  };
};
