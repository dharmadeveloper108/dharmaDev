let tInput = document.getElementById('terminalInput');
let tOutput = document.getElementById('output');

const title = document.getElementById('title');
const paragraph = document.getElementById('par');

// faux terminal input/output logic
function noenter() {
  if (window.event.keyCode == 13) {
    if (tInput.value.trim() === '--info') {
      console.log('dshkdfshjkdsfk')
      tOutput.textContent += `\r\n> $ ${tInput.value}\r\nabout: about page\r\nexperience: my resumee\r\nprojects: some personal projects`;
      tOutput.setAttribute('style', 'white-space: pre;');
      tInput.value = "";
    } else if (tInput.value.trim() === 'about') {
      title.innerHTML = "About";
      paragraph.innerHTML = `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet `;
      tInput.value = "";
      windows98.style.display = "block";
      bringToFront(windows98);
    } else if (tInput.value.trim() === 'experience') {
      title.innerHTML = "Experience";
      paragraph.innerHTML = `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet `;
      tInput.value = "";
      windows98.style.display = "block";
      bringToFront(windows98);
    } else if (tInput.value.trim() === 'projects') {
      title.innerHTML = "Projects";
      paragraph.innerHTML = `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet `;
      tInput.value = "";
      windows98.style.display = "block";
      bringToFront(windows98);
    } else {
      tOutput.textContent += `\r\n> $ ${tInput.value}\r\ncommand not found: ${tInput.value}`;
      tOutput.setAttribute('style', 'white-space: pre;');
      tInput.value = "";
    }
  }

  return !(window.event && window.event.keyCode == 13);
}