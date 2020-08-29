function myFunction(){
var userName = document.getElementById("userName").value;
var Password = document.getElementById("Password").value;
var xuser = document.getElementById("xuser");
var xpass = document.getElementById("xpass")

//var combin = ("hello" + " " + userName + " " + "Your password is" + " " + Password);
//var msg = window.prompt("confirm your password: ");




if(userName>=6){
  xuser.style.display = "block";
  }
  else{
    xuser.style.display = "none";
  }
if(Password>=8){
  xpass.style.display = "block";
}
else{
  xpass.style.display = "none";
}
if(userName, Password>10){//user name ar password ok veema welcome page ah vahnnan gio hadhanvee dhn
  window.location.href = "welcome.html";
}
	
}
