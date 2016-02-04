function step1button()
{
    document.getElementById("container2").hidden=false;
    document.getElementById("container1").hidden=true;
    var name=document.getElementById('city').value;
    address();
}
function step2button()
{
    document.getElementById("container3").hidden=false;
    document.getElementById("container2").hidden=true;
    var radios = document.getElementsByName('size');
    for(var i = 0; i < radios.length; i++) 
    {
       if(radios[i].checked == true) 
       {
           selectedSize = radios[i].value;
       }
    }
   
}
function step3button()
{
    document.getElementById("container4").hidden=false;
    document.getElementById("container3").hidden=true;
    
}
function address()
{
     var name=document.getElementById('name').value;
     var address=document.getElementById('house').value;
    address=address+","+document.getElementById('street').value;
     address=address+","+document.getElementById('city').value;
     address=address+","+document.getElementById('postalcode').value;
    var contact=document.getElementById('contact').value;
    document.getElementById('forname').innerHTML=name;
     document.getElementById('forcontact').innerHTML=contact;
     document.getElementById('foraddress').innerHTML=address;
    
}
