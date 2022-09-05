$(document).ready(function() {
    $("#icon").click(function(){
        $("ul").toggleClass("show")
    })
    // checkCookie()

})

$("#checkRgxEmail").click(function(){
    var email = $("#email").val()
    checkRgxEmail(email)

});
$("#checkSetCookie").click(function(){
    var username = $("#username").val()
    setCookie("UserName", username.toString(),3)

    alert("Xin chào "+getCookie("UserName"));
});
$("#getAlert").click(function ready(){
    var msg = $("#alert").val()
    var t = setInterval(alertThis(msg), 3000)
    clearInterval(t)
});

$("#count").click(function(){
    count()
})

function alertThis(msg){
    alert(msg)
}
function checkRgxEmail(email) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(emailFormat)) {
        alert("email hợp lệ")
    }
    else {
        alert("email không hợp lệ")
    }

}

function setCookie(c_name, value, exdays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + exdays)
    var c_value = escape(value) +((exdate==null) ? "" :";expires=" + exdate.toUTCString())
    console.log(c_value)
    document.cookie = c_name + "=" + c_value
}

function	getCookie(c_name)	{
    var	i,	x,	y,	ARRcookies=document.cookie.split(";");
    for	(i=0;	i<ARRcookies.length;	i++)	{
    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
    x=x.replace(/^\s+|\s+$/g,"");
    if	(x==c_name)	{
    return	unescape(y);
}
}
}

function	checkCookie()	{
    var	username=getCookie("username");
    if	(username!=null	&&	username!="")	{
    alert("Welcome	again	"	+	username);
    }	else	{
    username=prompt("Please	enter	your	name:","");
    if	(username!=null	&&	username!="")	{
    setCookie("username",username,365);
    }
    }
    }

function count(){
    var count=1;
    var tHnd = setInterval(function(){
       if(count == 10)
           clearInterval(tHnd);
           $("#number").val(count)
       count++;
    },1000);

}





