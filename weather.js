var obj = {
    latitude : 37.7577,
    longitude : -122.4376,
    currently : {
        summary : "clear",
        humidity : 0.93
    }
}
console.log(obj.latitude);
console.log(obj.currently.humidity);
var jasonstring = JSON.stringify(obj);
console.log(jasonstring);
var backtoobj = JSON.parse(jasonstring);
console.log(backtoobj);
'https://darksky.net/dev/docs'