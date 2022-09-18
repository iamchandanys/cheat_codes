function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "iamchandanys@gmail.com" && password === "1234") {
        resolve(email);
      } else {
        reject(Error("Invalid username or password."));
      }
    }, 2000);
  });
}

function getUserDetails(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "iamchandanys@gmail.com") {
        resolve({ userName: "Chandan", city: "Bengaluru" });
      } else {
        reject("No user details found.");
      }
    }, 2000);
  });
}

login("iamchandanys@gmail.com", "1234")
  .then((loginResponse) => {
    console.log(loginResponse);
    getUserDetails("iamchandanys@gmail.com")
      .then((userDetailsResponse) => {
        console.log(userDetailsResponse);
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err.message);
  });
