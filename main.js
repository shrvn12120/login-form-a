function myFunction(){
var userName = document.getElementById("userName").value;
var Password = document.getElementById("Password").value;

//var combin = ("hello" + " " + userName + " " + "Your password is" + " " + Password);
//var msg = window.prompt("confirm your password: ");




if(userName, Password<=" "){
alert("user name or password is incorrect");
return false;
	
  }
 else if(userName, Password>="0"){
	document.write("Welcome"+" "+ userName);
	return true;
} 
  else{
   alert("password does not match");
	  return false;
  }

	
}
