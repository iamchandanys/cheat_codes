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

async function init() {
  try {
    const cDetails = await getChannelDetails("xyz");
    console.log(cDetails);
    const cProducts = await getChannelProducts("xyz");
    console.log(cProducts);
  } catch (err) {
    console.log(err.message);
  }
}

init();
