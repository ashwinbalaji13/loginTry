function login(){
	var uname = document.getElementById("uname").value;
	var pwd = document.getElementById("pwd").val;
	document.getElementById("fail").style.display="none";
	if(uname=="admin" && pwd="admin"){
		window.location.href="LogSuc.html";
	}
	else{
		document.getElementById("fail").style.display="block";
	}
}