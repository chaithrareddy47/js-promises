const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("done");
  }, 2000);
});
console.log(promise);

const newPromise = new Promise((res, rej) => {
  const num = 5;
  if (num >= 5) {
    res("Promsie is fullfilled");
  } else {
    rej("Promise rejected");
  }
});

console.log(newPromise);

const promiseThree = new Promise((res, rej) => {
  const num = 10;
  if (num >= 10) {
    res("value is equal or grater");
  } else {
    rej("not done");
  }
});

promiseThree.then(
    (value) => {
        console.log(`operation sucessfull , ${value}`);
        
  },
    (error) => {
      console.log(`operation failed , ${error}`);
      
  }
);

console.log(promiseThree);


// function handleResolve(value) {
//     console.log(value);

// }

// function handleReject(reason) {
//     console.error(reason);

// }

// promiseThree.then(handleResolve, handleReject)
