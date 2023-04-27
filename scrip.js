var netamt=0
var user="chakravarthy202vinay0511"
function add(){

  var s=document.activeElement.parentElement.id;
  var prod=document.getElementById(s).querySelector("img").src;
  var pname=document.getElementById(s).children[1].innerHTML;
  var price=document.getElementById(s).querySelector("#price").innerHTML;
  var qty=document.getElementById(s).querySelector("input").value;
  var cart1=document.getElementById("shop_cart_items");
  var row=cart1.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell4.id=s+"_qty";
  cell3.id=s+"_price";
  cell5.id="tot1";
  cell1.innerHTML="<img id='cartit45' src='"+ prod +"'>";
  cell2.innerHTML=pname;
  cell3.innerHTML=price;
  cell4.innerHTML=qty;/*"<input type='number' id='quantity' value=1>";*/
  cell5.innerHTML=parseInt(qty)*parseInt(cell3.innerHTML);
  cell6.innerHTML="<a onclick='remove(this)' id='itemca'><i class='fa fa-close'></i></a>";
  netamt+=parseInt(cell5.innerHTML) 
  cal();
};  
function logbtn1() {
  document.getElementById("loginForm1").style.display="block";
  document.getElementById("signupForm1").style.display="none"
  
};
function signup() {
  document.getElementById("loginForm1").style.display="none";
  document.getElementById("signupForm1").style.display="block"
};
function remove(x){
  var e= x.parentElement.parentElement.rowIndex;
  var le=document.getElementById("shop_cart_items").rows[e].cells[4].innerHTML;
  netamt-=parseInt(le);
  document.getElementById("shop_cart_items").deleteRow(e)
  pay1()
  cal();
  hide();
};
function pay1(){
  if (netamt==0){
    document.querySelector(".end4").style.display="none"
    document.querySelector(".cartbut").style.display="block"}
  else{
    return
  }
};
function shpcrt(){
  document.getElementById("shop-cart").style.display="block";
  document.getElementById("netp2").style.display="block";
  document.querySelector(".cartbut").style.display="block";
  document.getElementById("headcart").style.display="block";
  document.getElementById("idrt").style.display="none";
  document.querySelector(".shopt").style.display="none";
  hide();
 };
function shpcrt1(){
  document.getElementById("shop-cart").style.display="none";
  document.getElementById("netp2").style.display="none";
  document.querySelector(".cartbut").style.display="none";
  document.getElementById("headcart").style.display="none";
  document.getElementById("idrt").style.display="block";
  document.querySelector(".shopt").style.display="block";
}; 
function hide(){
  if(netamt==0){
    document.getElementById("checkou").disabled = true;
  }
};
function cal(){
  document.getElementById("netamt0").innerHTML=netamt;
  document.getElementById("netamt1").innerHTML=netamt;
  document.getElementById("carttot").innerHTML=netamt;
  document.getElementById("totalamt123").innerHTML=netamt;
};
function pay(){
  document.querySelector(".end4").style.display="block"
  document.querySelector(".cartbut").style.display="none"
};
function ValidateEmail() {
  var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var input=document.getElementById("email-register");
  if (input.value.match(validRegex)) {
    return true;
  } else {
    input.value=""
    alert("Invalid email address!")

    return false;

  }
};
function closebtn(){
  document.activeElement.parentElement.parentElement.style.display="none"

};
function signin(){
  var serna=document.getElementById("username").value;
  var pass=document.getElementById("password").value;
  var usre1=serna+pass
  if(usre1.match(user)){
    document.getElementById("loginBtn").style.display="none";
    document.getElementById("logout").innerHTML=serna
    document.getElementById("logout").style.display="block";
    document.getElementById("loginForm1").style.display="none";

  }
  else{
    alert("Inavlid user and password");
  }
  };
function like(){
  var count=document.getElementById("like").innerHTML;
  document.getElementById("like").innerHTML=parseInt(count)+1
};
