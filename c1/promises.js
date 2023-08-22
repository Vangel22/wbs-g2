// Promises in Javascript are a way to handle asynchronous operations and manage their result

// fs.writeFile -> ni dozvoluva da prodolzime so izvrsuvanje na kodot
// fs.writeFileSync -> ne odi na naredna linija se dodeka ne zavrsi

// Promise has 3 states:
// 1. fullfilled
// 2. rejected
// 3. pending

function performAsyncOperation(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

// successPromise
//   .then((res) => console.log(res)) // Operation successful
//   .catch((error) => console.error(error)); // ova nema da se izvrsi

// failedPromise
//   .then((res) => console.log(res)) // ova nema da se izvrsi
//   .catch((error) => console.error(error)); // Operation failed

// Callback - ES5
// Promises - ES6
// Async/await - ES7

async function main() {
  try {
    const successPromise = performAsyncOperation(true);
    const successResult = await successPromise;
    console.log("Result", successResult);
    // successPromise -> performAsyncOperation(true) -> ke vrati nov promise koj e faten vo resolve
    // try ni e slicen blok kako then
  } catch (err) {
    console.log("Error", err);
  }

  try {
    const failedPromise = performAsyncOperation(false);
    const failedResult = await failedPromise;
    console.log("Result", failedResult);
  } catch (err) {
    console.log("Error", err);
  }
}

main();
