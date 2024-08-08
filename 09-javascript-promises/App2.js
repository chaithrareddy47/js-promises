const sub = new Promise((res, rej) => {
    const result = false;
    if (result) {
      res('subscribe')  
    } else {
        rej(new Error('why not sibscribe'))
    }
})

sub.then((res) => {
    console.log(res);
    
}).catch((rej) => {
    console.log(rej);
    
})