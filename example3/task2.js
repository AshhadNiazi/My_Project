document.addEventListener("DOMContentLoaded",function(){
    const colorPicker = document.getElementById("colorPicker");
    const colorDisplay = document.getElementById("colorDisplay");
});
colorPicker.addEventListener("input",function(){
   const selectedColor = colorPicker.value;
   colorDisplay.style.backgroundColor = selectedColor
});