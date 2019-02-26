{/* <input type="text" id="test">
<input type="button" value="click" onclick="z()"><span id="err"></span>
function z()
    {
    var a=document.getElementById("test");
    if((a.value=="an apple")||(a.value=="apple"))
    {
    document.getElementById('err').innerHTML= 'correct';
    }
    else
    {
    document.getElementById('err').innerHTML= 'wrong';
    
    }
    
    } */}

    if(document.getElementById('1st').checked){
        
    }
    else if (document.getElementById('2nd').checked) {
        window.alert("wrong");
    }
    else if (document.getElementById('3rd').checked) {
        window.alert("false");
    }