 const draggableTerminal = document.getElementById('terminal');

 // listen to terminal resize and display size
 const resizeObserver = new ResizeObserver(entries => {
     let draggableTerminalWidth = draggableTerminal.offsetWidth;
     let draggableTerminalHeight = draggableTerminal.offsetHeight;
     document.getElementById('window-size').innerHTML = draggableTerminalWidth + "x" + draggableTerminalHeight;
 });
 resizeObserver.observe(draggableTerminal);

 // make the terminal DIV draggable:
 dragElement(draggableTerminal);

 function dragElement(elmnt) {
     var pos1 = 0,
         pos2 = 0,
         pos3 = 0,
         pos4 = 0;
     if (document.getElementById(elmnt.id + "header")) {
         document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
     } else {
         elmnt.onmousedown = dragMouseDown;
     }

     function dragMouseDown(e) {
         e = e || window.event;
         e.preventDefault();
         // get the mouse cursor position at startup:
         pos3 = e.clientX;
         pos4 = e.clientY;
         document.onmouseup = closeDragElement;
         // call a function whenever the cursor moves:
         document.onmousemove = elementDrag;
     }

     function elementDrag(e) {
         e = e || window.event;
         e.preventDefault();
         // calculate the new cursor position:
         pos1 = pos3 - e.clientX;
         pos2 = pos4 - e.clientY;
         pos3 = e.clientX;
         pos4 = e.clientY;
         // set the element's new position:
         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
     }

     function closeDragElement() {
         /* stop moving when mouse button is released:*/
         document.onmouseup = null;
         document.onmousemove = null;
     }
 }

 // menu 'code' button to open terminal
 document.querySelector('.code').addEventListener('click', e => {
     draggableTerminal.style.display = "block";
 });

 // terminal 'close' red button
 document.getElementById('close').addEventListener('click', e => {
     draggableTerminal.style.display = "none";
 })

 // terminal 'fullscreen' green button
 let isclicked = false;
 document.getElementById('fullscreen').addEventListener('click', e => {
     if (isclicked) {
         draggableTerminal.style.width = "calc(40vw)";
         draggableTerminal.style.height = "320px";
         draggableTerminal.style.top = "calc(30vh)";
         draggableTerminal.style.left = "calc(20vw)";
         isclicked = false;
         return;
     }
     draggableTerminal.style.width = "100%";
     draggableTerminal.style.height = "100%";
     draggableTerminal.style.top = "0";
     draggableTerminal.style.left = "0";
     isclicked = true;
 })