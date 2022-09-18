// The Promise.all() method takes an iterable of promises as an input, and returns a single Promise.
// This returned promise will fulfill when all of the input's promises have fulfilled.

function getChannelDetails(host) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (host === "xyz") {
        resolve({ channelName: "xyz", createdOn: new Date() });
      } else {
        reject(Error("No channel found."));
      }
    }, 2000);
  });
}

function getChannelProducts(host) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (host === "xyz") {
        resolve({ productName: "xyz", createdOn: new Date() });
      } else {
        reject(Error("No product found."));
      }
    }, 3000);
  });
}

Promise.all([getChannelDetails("xyz"), getChannelProducts("xyz")])
  .then((result) => {
    console.log(`channelDetails - ${JSON.stringify(result[0])}`);
    console.log(`channelProducts - ${JSON.stringify(result[1])}}`);
  })
  .catch((err) => {
    console.log(err.message);
  });
