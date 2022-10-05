function addEmailButton() {
    let textBox = document.createElement("input");
    textBox.setAttribute("type", "email");
    document.body.appendChild(textBox);
    textBox.placeholder = "Enter email"
    
    //create element button
    let textbutton = document.createElement("input"); 
    textbutton.setAttribute("type", "button");
    
    //textbutton.setAttribute('id', 'rmbtn'); 
    textbutton.value = "Remove Email";
    
    //appending button
    document.body.appendChild(textbutton);
    textbutton.onclick = function () {
        document.body.removeChild(textBox);
        document.body.removeChild(textbutton);
    }
}
