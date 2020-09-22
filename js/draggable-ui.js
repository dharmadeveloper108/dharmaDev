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
 document.getElementById('menuAboutTerminal').addEventListener('click', e => {
     draggableTerminal.style.display = "block";
 });

 // close window
 function closeWindow(btn, elem) {
     btn.addEventListener('click', e => {
         elem.style.display = "none";
         document.getElementById('output').innerHTML = "";
     });
 }

 closeWindow(document.getElementById('close'), draggableTerminal);
 closeWindow(document.getElementById('close98'), windows98);

 // 'fullscreen' mode
 let isclicked = false;

 function setFullscreen(btn, elem) {
     btn.addEventListener('click', e => {
         if (isclicked) {
             elem.style.width = "calc(40vw)";
             elem.style.height = "320px";
             elem.style.top = "calc(20vh)";
             elem.style.left = "calc(15vw)";
             isclicked = false;
             return;
         }
         elem.style.width = "100%";
         elem.style.height = "100%";
         elem.style.top = "0";
         elem.style.left = "0";
         isclicked = true;
     })
 }

 setFullscreen(document.getElementById('fullscreen'), draggableTerminal);
 setFullscreen(document.getElementById('full98'), windows98);