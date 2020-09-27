const windows98 = document.getElementById('windows98');

// menu item description visibility
function menuVisibility(elem) {
        var node = document.getElementById(elem);
        var display = node.style.display;
        node.style.display = display == "block" ? 'none' : "block"
}

// captcha
//   <!-- <script src="https://www.google.com/recaptcha/api.js"></script> -->
// function onSubmit(token) {
//   document.getElementById("demo-form").submit();
// }

// make the windows98 DIV draggable:
dragElement(windows98);

// forefront window onclick 
draggableTerminal.addEventListener("click", e => {
        bringToFront(draggableTerminal);
        windows98.style.zIndex = "1";
});
windows98.addEventListener("click", e => {
        bringToFront(windows98);
        draggableTerminal.style.zIndex = "1";
});


function bringToFront(element) {
        element.style.zIndex = "10";
}


// copy email address

function copyToClipboard(text) {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', text);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
}

function copyEmail() {
        copyToClipboard("francescaida.rocci@gmail.com");
        let emailFields = document.querySelectorAll('.tooltiptext');

        emailFields.forEach((email) => {
                email.innerHTML = 'Copied!';
        });
}