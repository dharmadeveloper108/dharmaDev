let tInput = document.getElementById('terminalInput');

function checkInput() {
  if (tInput.value.trim() === '--info') {
    console.log('dshkdfshjkdsfk')
    document.getElementById('output').innerHTML = "about: about page<br>\n\
    experience: my resumee<br>\n\
    projects: some personal projects";
  } 
}

function noenter() {
  if (tInput.value.trim() === '--info') {
    checkInput();
    tInput.value = "";
  } 
  return !(window.event && window.event.keyCode == 13); }