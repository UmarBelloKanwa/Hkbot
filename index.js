function myfullName(){
   var fullNameParent, fullName, fullNameWarning;
       fullNameParent = document.getElementById("fullNameParent");
       fullName = document.getElementById("fullName").value;
       fullNameWarning = document.getElementById("fullNameWarning");
   if (fullName == "" || fullName == " " )
      {fullNameWarning.innerHTML="Incorrect Name !!!";}
   else{fullNameParent.style.display="none";
        nickNameParent.style.display="block";
        full.innerHTML="Name : " + fullName;}
}
function mynickName(){
   var nickNameParent, nickName, nickNameWarning;
       nickNameParent = document.getElementById("nickNameParent");
       nickName = document.getElementById("nickName").value;
       nickNameWarning = document.getElementById("nickNameWarning");
   if (nickName == "" || nickName == " " )
      {nickNameWarning.innerHTML="Incorrect Nick Name !!!";}
   else{nickNameParent.style.display="none";
        AddressParent.style.display="block";
        nick.innerHTML="Nick Name : " + nickName;}
} 
function myAddress(){
   var Address, AddresseWarning;
       Address = document.getElementById("Address").value;
       AddressWarning = document.getElementById("AddressWarning");
   if (Address == "" || Address == " " )
      {AddressWarning.innerHTML="Incorrect Address !!!";}
   else{form.style.display="none";
        document.getElementById("profileAlert").style.display="block";
        addr.innerHTML="Address : " + Address;}
}
function openHome(){
var Profile = document.getElementById("profileAlert").innerHTML;
         profileAlert.style.display="none";
         nav.style.display="inline-block";
         body.style.height="100%";
         userProfile.innerHTML= Profile ;
         phone.style.display="block";
         questionForm.style.display="block";}
function Question(){
   var hkAnswer = document.getElementById("hk").innerHTML;
   var QInput = document.getElementById("QInput").value;
       userQuestion.innerHTML=QInput;
   if (QInput == "Who is HK ?" || QInput == "Who are HK ?" || QInput == "HK" )
      {answerShow.innerHTML=hkAnswer;
       phone.style.height="100%";}
  
   var anasAnswer = document.getElementById("anas").innerHTML;
   if (QInput == "Who is Anas ?" || QInput == "Who is an Anas ?" || QInput == "Anas" )
      {answerShow.innerHTML=anasAnswer;
       phone.style.height="100%";}
       
   var abbaAnswer = document.getElementById("abba").innerHTML;
   if (QInput == "Who is Abba ?" || QInput == "Who is an Ibrahim ?" || QInput == "Abba" )
      {answerShow.innerHTML=abbaAnswer;
       phone.style.height="100%";}
       
   var modaAnswer = document.getElementById("moda").innerHTML;
   if (QInput == "Who is Abdurrazak ?" || QInput == "Who is Abdurrazak / moda ?" || QInput == "Moda" )
       {answerShow.innerHTML=modaAnswer;
       phone.style.height="100%";}
       
   var dangulamuAnswer = document.getElementById("dangulamu").innerHTML;
   if (QInput == "Who is Abdullahi ?" || QInput == "Who is Abdullahi / Dan gulamu ?" || QInput == "Dan gulamu" )
       {answerShow.innerHTML=dangulamuAnswer;
       phone.style.height="100%";}
       
  var umarAnswer = document.getElementById("umar").innerHTML;
  if (QInput == "Who is an Umar ?" || QInput == "Who is Umar ?" || QInput == "Umar" )
       {answerShow.innerHTML=umarAnswer;
       phone.style.height="100%";}
       
  var shamsuddinAnswer = document.getElementById("shamsuddin").innerHTML;
  if (QInput == "Who is Shamsuddin ?" || QInput == "Who is Shamsu ?" || QInput == "Shamsuddin" )
       {answerShow.innerHTML=shamsuddinAnswer;
       phone.style.height="100%";}
 
  if (QInput == "Whose are HK Creatives Company ?" || QInput == "Whose are HK Creatives ?" || QInput == "HK Creatives" )
       {answerShow.innerHTML=hkAnswer + anasAnswer + abbaAnswer + modaAnswer + dangulamuAnswer + umarAnswer + shamsuddinAnswer;
       phone.style.height="100%";}     
  // else {answerShow.innerHTML="Please sorry, I couldn't find what you want, make sure to write any words correctly !!!"} 
}