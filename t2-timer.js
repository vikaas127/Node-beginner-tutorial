// set immdiate
setImmediate(function() {  
    console.log("setInterval: Hey! 1 millisecond completed!..");   
   }, 20);  


   // set Interval , Timeout
   function welcome () {  
    console.log("Welcome to www.Techdotbit.com");  
  }  
  
  var id1 = setTimeout(welcome,1000);  
  var id2 = setInterval(welcome,1000);  
 clearTimeout(id1);  
  clearInterval(id2);