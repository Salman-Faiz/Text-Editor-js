
// Bold.....
function boldValue(){
    document.getElementById('text-Area').style.fontWeight ="bold";
    
}
// italic
function italicValue(){
    document.getElementById('text-Area').style.fontStyle = "italic"; 
}
// reset........
// function resetValue(){
//     document.getElementById('text-Area').reset();
// }

// Underline....
function underlineValue(){
    document.getElementById('text-Area').style.textDecoration= "underline";
}
// leftAlign
function leftAlign(){
    document.getElementById("text-Area").style.textAlign = "left";
}
// rightAlign
function rightAlign(){
    document.getElementById("text-Area").style.textAlign = "right";
}
// centerAlign
function centerAlign(){
    document.getElementById("text-Area").style.textAlign = "center";
}
// justifyAlign
function justifyAlign(){
    document.getElementById("text-Area").style.textAlign = "justify";
}

// font-Size//////////////////

function fontSize(){
    const fontSizeValue=document.getElementById("tentacles").value;
    // console.log(fontSizePx);
    const fontSizePx= fontSizeValue+"px";
    document.getElementById("text-Area").style.fontSize=fontSizePx;
   
}
// font-colors"""""""
function fontColor(){
const fontColorValue =document.getElementById('fontColor').value;
// console.log(fontColorValue);
document.getElementById("text-Area").style.color=fontColorValue;

}




