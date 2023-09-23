

function strings() {

  var str1 = document.getElementById("pal").value;
  var str1 = str1.toLowerCase(); var splitString = str1.split("");
  var reverseString = splitString.reverse();
  var joinString = reverseString.join("");
// this is just what you showed us pretty much tried to get it to change and work differently or all at once then it just all messes up or nothing works

  if (str1 == joinString) {
    document.getElementById("updated").innerHTML = "Hey you got one how about the next!!"
    
  }
  else {
    document.getElementById("updated").innerHTML = "Aww this Is not a Palindrome maybe the next one.";
  }

  
}


function check() {

var firstName = document.getElemnetById("fName").value;

var LastName = document.getElemnetById("lName").value;

var zipcode = document.getElemnetById("lName").value;

var allName = firstName +  " " + LastName;

var len = allName.length;


    If ((len <2 ) || (len >20)) {

     document.GetElementById("Info").innerHTML = "Invalid length";

    }
    else if ((zipcode<100000) || (zipcode>0)) {
      // no idea whats wrong with this 
      document.GetElementById("Info").innerHTML = "Congrats Information accseptable";
    }
    else {
      
      document.GetElementById("Info").innerHTML = "something wrong with your zip";
    }



}