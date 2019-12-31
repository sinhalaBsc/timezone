var empty = new Date();
var GMn = new Date(1970,0,1);  //       (GMT=n) 
var GM0 = new Date(0);         // UTC = (GMT=0) 
var NOW = Date.now();          


var milliseconds = empty.getTime();
var seconds =Math.floor(empty.getTime()/1000); 
console.log("second : ", seconds);


console.log("GMn :",GMn.setSeconds(seconds));
console.log("GM0 :",GM0.setSeconds(seconds));


console.log("GMn :",GMn);
console.log("GM0 :",GM0);
console.log("empty :",empty);
console.log("NOW :",NOW);


console.log("GMn time in milliseconds :",GMn.getTime());
console.log("GM0 time in milliseconds :",GM0.getTime());
console.log("empty time in millseconds:",empty.getTime());


var input = new Date(seconds * 1000);
console.log("input",input.getTime());


console.log("GMn hours   :", GMn.getUTCHours(),GMn.getHours() );
console.log("GM0 hours   :", GM0.getUTCHours(),GMn.getHours() );
console.log("empty hours :", empty.getUTCHours(),empty.getHours() );


console.log("GMn  local  :", GMn.getTimezoneOffset()   ,GMn.toLocaleString() );
console.log("GM0  local  :", GM0.getTimezoneOffset()   ,GM0.toLocaleString() );
console.log("empty local :", empty.getTimezoneOffset() ,empty.toLocaleString() );
//TimeZoneoffset =  -330 mean GMT+5.5 (330 minuts = 5.5 hours)  
