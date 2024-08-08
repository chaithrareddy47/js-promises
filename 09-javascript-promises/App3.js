console.log('start');

function importantAction(userName) {
    setTimeout(() => {
        return console.log(`subscribe to ${userName}`);
        
    },1000) 
}
function interview(userName) {
    setTimeout(() => {
        return console.log(`subscribe to ${userName}`);
        
    },1000) 
}
function upskilling(userName) {
    setTimeout(() => {
        return console.log(`subscribe to ${userName}`);
        
    },1000) 
}

importantAction('Youtube Channel').then((res) => {
    console.log(res);
    
})