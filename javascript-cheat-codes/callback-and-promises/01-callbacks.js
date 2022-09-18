console.log("START");

function login(email, password, callback) {
  setTimeout(() => {
    if (email === "iamchandanys@gmail.com" && password === "1234") {
      callback(email);
    } else {
      callback(null);
    }
  }, 2000);
}

function getUserDetails(email, callback) {
  setTimeout(() => {
    if (email === "iamchandanys@gmail.com") {
      callback({ userName: "Chandan", city: "Bengaluru" });
    } else {
      callback(null);
    }
  }, 2000);
}

login("iamchandanys@gmail.com", "1234", (loginResponse) => {
  console.log(loginResponse);
  getUserDetails("iamchandanys@gmail.com", (userDetailsResponse) => {
    console.log(userDetailsResponse);
  });
});

console.log("END");
