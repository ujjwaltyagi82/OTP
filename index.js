const otpGen = require("otp-generator")
let otp = otpGen.generate(6, { digits: true, upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false })

var sid = "ACac03127ea7da735d731254a9ab7f79ea";
var auth_token = "f8fb791a4478ebcb1ea450828bc6b695";


var twilio = require("twilio")(sid, auth_token);

twilio.messages
    .create({
        from: "+12183323707",
        to: "+918287817604",
        body: `this is testing otp from Ujjwal side ${otp}`,
    })
    .then(function (res) { console.log("message has sent!") })
    .catch(function (err) {
        console.log(err);
    });
