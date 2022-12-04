
var $ = document;
var createAccountForm = $.getElementById("createAccount")
var loginForm = $.getElementById("login")
createAccountForm.style.display = "none";
var text = $.getElementById('text')
var my_firend = $.getElementById('my_firend')
var totalprice = $.getElementById('totalprice')
var cartnumber = $.getElementById("cartnumber")
var Pay = $.getElementById("Pay")
var bagNumber = $.getElementById("bagNumber")
var breadNumber = $.getElementById("breadNumber")
$.getElementById('tri').style.display="none"
my_firend.style.display = "none"   /*---------------*/ 
Pay.style.display = "none"   /*---------------*/ 
totalprice.style.display = "none"
var email_text = $.getElementById("email_text")
var creatacc_username_text = $.getElementById("creatacc_username_text")
var creatacc_password1_text = $.getElementById("creatacc_password1_text")
var creatacc_password2_text = $.getElementById("creatacc_password2_text")
var login_username_text = $.getElementById("login_username_text")
var login_password_text = $.getElementById("login_password_text")
var creatacc_password1 = $.getElementById('creatacc_password1')
var creatacc_password2 = $.getElementById('creatacc_password2')
var x = creatacc_password1
var y = creatacc_password2

// -------------------------------------------------------------------------------

function creatacc_emailfun(){  
var creatacc_email = $.getElementById('creatacc_email').value
creatacc_email.length < 12 ? email_text.innerHTML="Sorry,your email must be more than 12 characters long" : email_text.innerHTML=""
}
// -------------------------------------------------------------------------------
function creatacc_usernamefun(){
  var creatacc_username = $.getElementById('creatacc_username').value 
    creatacc_username.length < 2 ? creatacc_username_text.innerHTML="Sorry,your username must be more than 2 characters long" :  creatacc_username_text.innerHTML=""
}
// -------------------------------------------------------------------------------
function creatacc_password1fun(){
  var creatacc_password1 = $.getElementById('creatacc_password1').value
  creatacc_password1.length < 8 ? creatacc_password1_text.innerHTML="Sorry,your password must be more than 8 characters long" :  creatacc_password1_text.innerHTML=""
}
// -------------------------------------------------------------------------------
function creatacc_password2fun(){
  var creatacc_password1 = $.getElementById('creatacc_password1').value
var creatacc_password2 = $.getElementById('creatacc_password2').value
    creatacc_password1 != creatacc_password2 ?  creatacc_password2_text.innerHTML="Sorry, this password does not match the original password" : creatacc_password2_text.innerHTML=""
}
// -------------------------------------------------------------------------------
function login_usernamefun(){
var login_username = $.getElementById('login_username').value
  login_username.length < 2 ? login_username_text.innerHTML="Sorry,your username must be more than 2 characters long" : login_username_text.innerHTML=""
}
// -------------------------------------------------------------------------------
function login_passwordfun(){
var login_password = $.getElementById('login_password').value
    login_password.length <= 4 ? login_password_text.innerHTML="Sorry,your password must be more than 4 characters long" : login_password_text.innerHTML=""
}
// -------------------------------------------------------------------------------
function showloginForm() {
  loginForm.style.display = "block";
  createAccountForm.style.display = "none"
}
// -------------------------------------------------------------------------------
function showCreateAccountForm() {
  loginForm.style.display = "none";
  createAccountForm.style.display = "block"
}  
// -------------------------------------------------------------------------------
function creat_acc(){
  var creatacc_password1 = $.getElementById('creatacc_password1').value
  var creatacc_password2 = $.getElementById('creatacc_password2').value
  var creatacc_username = $.getElementById('creatacc_username').value
  var my_firend = $.getElementById('my_firend')
  if(creatacc_username.length >= 2  && creatacc_password1.length >= 8 && creatacc_password2 == creatacc_password1) {
  // creatacc_username.length >= 2  && creatacc_password1.length >= 8 && creatacc_password2 == creatacc_password1 ? my_firend.style.display = "none" : creatacc_password2_text.innerHTML = "Sorry, plisase complet the form"
var select =$.getElementById("select2")

if(select2.value == "www.Google.com" ){
    $.getElementById("msform").action="http://www.google.com/search"
}else if(select2.value == "en-maktoob.yahoo.com"){

  $.getElementById("text1").innerHTML="en-maktoob.yahoo.com"
  $.getElementById("msform").action="https://en-maktoob.yahoo.com"
    

}else if(select2.value == "duckduckgo.com"){

    $.getElementById("msform").action="https://duckduckgo.com"
    $.getElementById("text1").innerHTML="duckduckgo.com"

}else if(select2.value == "www.bing.com"){

    $.getElementById("msform").action="https://www.bing.com/#!"
    $.getElementById("text1").innerHTML="www.bing.com"

}else if(select2.value == "Ask.com"){

    $.getElementById("msform").action="https://www.ask.com/"
    $.getElementById("text1").innerHTML="Ask.com"
}    
  $.getElementById('tri').style.display="block"

  var y = 4;
  var myTimer = setInterval(function() {
    y--;
    
    if(y == 0) {
      clearInterval(myTimer);
      
      $.getElementById('tri').style.display="none"
      my_firend.style.display = "block" 
      
    }
  }, 1000);
  createAccountForm.style.display = "none"}else{creatacc_password2_text.innerHTML = "Sorry, plisase complet the form"}
}
function login1(){
  var login_username = $.getElementById('login_username').value
  var login_password = $.getElementById('login_password').value
  var my_firend = $.getElementById('my_firend')
  var x = "test"
  var p = "12345"
  if(login_username == x && login_password == p){
    loginForm.style.display = "none";
    createAccountForm.style.display = "none";


var select =$.getElementById("select")

if(select.value == "www.Google.com" ){

    $.getElementById("msform").action="http://www.google.com/search"

}else if(select.value == "en-maktoob.yahoo.com"){
    $.getElementById("msform").action="https://en-maktoob.yahoo.com"
    $.getElementById("text1").innerHTML="en-maktoob.yahoo.com"
}else if(select.value == "duckduckgo.com"){
    $.getElementById("msform").action="https://duckduckgo.com"
    $.getElementById("text1").innerHTML="duckduckgo.com"
}else if(select.value == "www.bing.com"){
    $.getElementById("msform").action="https://www.bing.com/#!"
    $.getElementById("text1").innerHTML="www.bing.com"
}else if(select.value == "Ask.com"){
    $.getElementById("msform").action="https://www.ask.com/"
    $.getElementById("text1").innerHTML="Ask.com"
}

$.getElementById('tri').style.display="block"
var y = 4;
var myTimer = setInterval(function() {
  y--;
  if(y == 0) {
    clearInterval(myTimer);
    $.getElementById('tri').style.display="none"
    my_firend.style.display = "block" 
  }}, 1000);
}else{
login_password_text.innerHTML = "is not defend"
}
}
$.getElementById('tri').style.display="none"
// -------------------------------------------------------------------------------
function breadPlass(){
  var bread = $.getElementById("Bread-number");bread.value++
}
function breadmines(){
  var bread = $.getElementById("Bread-number");bread.value--
  if(bread.value = 0 || bread.value < 0){
    bread.value=""
  }
}
function bagPlass(){
  var bag = $.getElementById("bag-number");bag.value--
  if(bag.value = 0 || bag.value < 0){
    bag.value=""
  }
}
function bagMaines(){
var bag = $.getElementById("bag-number").value++

}

// breadprice * bread + bagprice * bag*********  -M-

function showpay(){
  var bread = Number($.getElementById("Bread-number").value)
  var bag = Number($.getElementById("bag-number").value)

var totalprice = $.getElementById('totalprice')
var my_firend = $.getElementById('my_firend')
// alert(breadprice * bread + bagprice * bag)

var totaltext = $.getElementById("totaltext")



// var capthaCode = Math.floor(Math.random() * 100000);

$.getElementById("code").innerHTML ="Captha Code : " + capthaCode ;




my_firend.style.display = "block"
totalprice.style.display = "none"
Pay.style.display = "none"

}

