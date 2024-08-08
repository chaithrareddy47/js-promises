let promise = new Promise(function (resolve, reject) {
    resolve('i am ignored')
    resolve('i am done')
    reject(new Error('something went wrong'))

})
console.log(promise);


