export const validateInputField = element => {
  let messageElement = document.querySelector("small#" + element.id);

  if (element.min > element.value.length) {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    messageElement.className = "text-danger";
  } else {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    messageElement.className = "d-none";
  }
};

export const validateConfirmPassword = (element, password) => {
  let messageElement = document.querySelector("small#" + element.id);

  if (element.value !== password) {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    messageElement.className = "text-danger";
    return true;
  } else {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    messageElement.className = "d-none";
    return false;
  }
};

export const validateEmail = element => {
  let messageElement = document.querySelector("small#" + element.id);

  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      element.value
    )
  ) {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    messageElement.className = "d-none";
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    messageElement.className = "text-danger";
  }
};
