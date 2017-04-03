const modhash = window.reddit.modhash;  //API call to prevent CSRF

var sec = 0;
var index = -1;

if (sec < -10) {
	sec = 100;
}
setInterval(() => console.log("Beginning traversal again in: " + (sec--) + " secs, keep the faith brethren"), 1e3); //set pace


const draw = seconds => {
	index++
	sec = seconds = Math.ceil(seconds) //max value of seconds

	setTimeout(() => {
		const x = index % 59;
		const y = Math.floor(index / 59); //60 wide
		flagColor = [
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  3,  3,  3,  3,  3,  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  6,  6,  6,  7,  7,  7,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  7,  7,  7,  3,  3,  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  8,  8,  6,  6,  3,  3,  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  8,  6,  6,  6,  3,  3,  7,  7,  7,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  7,  7,  3,  3,  3,  7,  7,  7,  7,  7,  7,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  6,  6,  3,  8,  8,  8,  8,  6,  7,  7,  3,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  3,  3,  3,  6,  8,  8,  8,  8,  8,  6,  7,  7,  3,  0,  0,  0,  0,  0,  0,  0,  6,  3,  3,  3,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  6,  3,  7,  6,  6,  8,  8,  8,  8,  6,  7,  7,  3,  0,  0,  0,  0,  3,  3,  3,  7,  7,  7,  7,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  6,  3,  7,  7,  7,  3,  6,  8,  8,  8,  7,  7,  3,  0,  0,  0,  3,  7,  7,  7,  7,  7,  7,  7,  7,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  6,  3,  7,  7,  7,  3,  6,  8,  8,  8,  7,  7,  3,  0,  0,  0,  3,  7,  7,  7,  7,  7,  7,  7,  7,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  6,  3,  3,  3,  3,  3,  3,  3,  8,  8,  6,  7,  7,  3,  3,  3,  7,  7,  7,  7,  6,  6,  6,  6,  6,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  7,  8,  6,  7,  3,  0,  0,  3,  0,  3,  6,  8,  8,  6,  7,  7,  7,  7,  7,  6,  8,  8,  8,  8,  8,  6,  6,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  7,  7,  7,  7,  3,  0,  0,  3,  0,  3,  3,  3,  8,  8,  6,  7,  7,  6,  6,  8,  8,  8,  8,  8,  8,  8,  6,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  8,  6,  3,  0,  0,  3,  0,  3,  0,  3,  6,  8,  8,  8,  8,  8,  8,  3,  3,  3,  3,  6,  8,  8,  6,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  6,  6,  3,  0,  0,  3,  0,  3,  0,  3,  3,  3,  8,  8,  8,  8,  6,  3,  0,  6,  3,  7,  8,  8,  6,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  3,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  8,  3,  8,  3,  3,  3,  8,  8,  8,  3,  8,  3,  3,  3,  8,  3,  3,  3,  8,  3,  3,  3,  8,  3,  8,  8,  8,  3,  3,  3,  8,  3,  3,  3,  8,  3,  3,  8,  8,  3,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  3,  3,  8,  3,  8,  3,  8,  8,  3,  3,  8,  8,  3,  8,  8,  3,  8,  3,  8,  3,  8,  8,  8,  3,  8,  8,  8,  3,  8,  3,  8,  3,  8,  3,  8,  3,  8,  3,  8,  3,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  3,  8,  8,  3,  3,  8,  8,  8,  3,  8,  8,  8,  3,  8,  8,  3,  3,  8,  8,  3,  3,  8,  8,  3,  8,  8,  8,  3,  3,  3,  8,  3,  8,  3,  8,  3,  8,  3,  8,  3,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  3,  3,  8,  8,  3,  8,  3,  8,  3,  3,  8,  8,  8,  3,  8,  8,  3,  8,  3,  8,  3,  8,  8,  8,  3,  8,  8,  8,  3,  8,  3,  8,  3,  8,  3,  8,  3,  8,  3,  8,  3,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  3,  8,  8,  8,  3,  8,  3,  8,  3,  8,  8,  8,  3,  3,  3,  8,  3,  8,  3,  8,  3,  3,  3,  8,  3,  3,  3,  8,  3,  8,  3,  8,  3,  8,  3,  8,  3,  3,  8,  8,  3,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  3,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  8,  6,  3,  0,  0,  3,  0,  3,  0,  3,  0,  3,  7,  3,  6,  8,  8,  6,  6,  6,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  8,  6,  6,  3,  0,  0,  3,  0,  3,  0,  3,  0,  3,  7,  6,  8,  8,  8,  6,  3,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  3,  3,  3,  0,  0,  0,  3,  0,  3,  0,  3,  3,  3,  6,  8,  8,  8,  6,  6,  3,  3,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  6,  3,  0,  0,  0,  3,  0,  3,  0,  3,  7,  6,  8,  8,  8,  8,  6,  3,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  6,  3,  0,  0,  0,  3,  0,  3,  0,  3,  7,  6,  8,  8,  8,  8,  6,  3,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  6,  3,  0,  0,  0,  3,  0,  3,  3,  3,  7,  8,  8,  8,  8,  6,  6,  3,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  8,  6,  3,  0,  0,  0,  3,  0,  3,  7,  3,  6,  8,  8,  8,  6,  6,  3,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  7,  8,  6,  7,  3,  0,  0,  3,  3,  3,  7,  6,  8,  8,  8,  8,  6,  6,  3,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  7,  7,  7,  7,  3,  0,  0,  3,  7,  3,  6,  8,  8,  8,  8,  6,  6,  3,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  7,  8,  8,  6,  6,  7,  3,  3,  3,  7,  6,  8,  8,  8,  8,  6,  6,  6,  3,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  7,  7,  7,  7,  7,  7,  3,  3,  3,  6,  6,  6,  6,  6,  6,  6,  6,  7,  3,  3,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  6,  8,  8,  8,  8,  6,  3,  3,  3,  3,  7,  7,  7,  7,  7,  3,  3,  3,  3,  3,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  6,  6,  6,  6,  6,  6,  3,  3,  6,  6,  6,  8,  8,  8,  8,  8,  6,  6,  6,  3,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6]]
[y][x];
		const ax = x + 446; //value of x
		const ay = y + 621; //value of y

		// Check to see if there is a newer matrix and if so use that
		$.ajax({
			url: "https://raw.githubusercontent.com/eoinobrien/ireland-place-script/master/FlagColoursMatrix.txt", type: "GET",
			 statusCode: {
				404: function() {
					console.log( "No newer matrix found" );
				},
				200: function(text) {
					console.log( "Newer matrix found running that" );
					flagColor = eval(text)[y][x];
				}
			}
		})

		//get x and y co-ords
		$.get("https://www.reddit.com/api/place/pixel.json?x=" + ax + "&y=" + ay)
			.then(res => {
				if (res.color == -1 || flagColor == -1) {
					console.log("SKIP:" + (ax + ", " + ay) + "<- not a pixel we deal with"); //skip
					return draw(1); //set timer to 1
				}
				if (res.color == flagColor) { //if match
					console.log("SKIP:" + (ax + ", " + ay) + "<- pride intact"); //skip
					return draw(1); //set timer to 1
				}
				console.log("CONGRATULATIONS BRETHREN: " + ax + ", " + ay + " (https://www.reddit.com/r/place/#x=" + ax + "&y=" + ay + ")");

				$.ajax({
					url: "https://www.reddit.com/api/place/draw.json", type: "POST",
					headers: { "x-modhash": modhash }, data: { x: ax, y: ay, color: flagColor }
				})
					.done(data => draw(data.wait_seconds))
					.error(data => draw(data.responseJSON.wait_seconds));
			}).fail(res => { return draw(10); });
	}, seconds * 1000);

}
draw(0);