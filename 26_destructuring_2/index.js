let config = {
    ip: '104.196.63.212',
    port: '60',
    blocked: false
}

let ip = "";
let port = "80";
blocked = true;

console.log(ip);
console.log(port);
console.log(blocked);

({ip, port, blocked} = config);
console.log(ip);
console.log(port);
console.log(blocked);