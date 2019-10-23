import userReducer from "./userReducer";

describe("create user", () => {
  it("should return initState", () => {
    expect(userReducer(undefined, {})).toEqual({
      user: null,
      userOtp: "",
      companyDetails: null,
      errorMessage: ""
    });
  });
  it("should save data on trigered", () => {
    expect(
      userReducer(
        {
          user: null,
          userOtp: "",
          companyDetails: null,
          errorMessage: ""
        },
        {
          type: "CREATE_USER",
          user: {
            firstName: "fnsd",
            lastName: "fssss",
            email: "sfdf@gmail.com",
            companyName: "gvxxvv",
            password: "pssdfdfw",
            conPassword: "pssdfdfw"
          },
          userOtp: "",
          companyDetails: null,
          errorMessage: ""
        }
      )
    ).toEqual({
      user: {
        firstName: "fnsd",
        lastName: "fssss",
        email: "sfdf@gmail.com",
        companyName: "gvxxvv",
        password: "pssdfdfw",
        conPassword: "pssdfdfw"
      },
      userOtp: "",
      companyDetails: null,
      errorMessage: ""
    });
  });
});
