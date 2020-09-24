const tInput = document.getElementById('terminalInput');
const tOutput = document.getElementById('output');

const title = document.getElementById('title');
const paragraph = document.getElementById('par');

const user = document.getElementById('sessionUser');
const userCln = user.cloneNode(true);

// faux terminal input/output logic
function noenter() {
  let t = tInput.value.charAt(0).toUpperCase() + tInput.value.slice(1);

  if (window.event.keyCode == 13) {

    if (tInput.value.trim() === '--info') {

      tOutput.textContent += `\r\n> $ ${tInput.value}\r\nabout: about page\r\nexperience: my resumee\r\nprojects: some personal projects`;
      tOutput.setAttribute('style', 'white-space: pre;');
      tInput.value = "";
      tOutput.appendChild(userCln);

    } else if (tInput.value.trim() === 'about' || tInput.value.trim() === 'experience' || tInput.value.trim() === 'projects') {

      setWindowsContent(t, eval(tInput.value.trim()));
      displayCommand(t);

    } else if (tInput.value.trim().includes("'")) {

      setWindowsContent("Woohooo!", "We've got a hacker over here lol");
      displayCommand(t);

    } else {
      tOutput.textContent += `\r\n> $ ${tInput.value}\r\ncommand not found: ${tInput.value}`;
      tOutput.setAttribute('style', 'white-space: pre;');
      tOutput.appendChild(userCln);
      tInput.value = "";
    }
  }

  return !(window.event && window.event.keyCode == 13);
}

const about = `<span class="retrofont big">Hi, I'm Kamala. </span>✌️ <br><br>
I make things with code. I'm a perfectionist but I'm also VERY passionate about getting things done. <br> 
Here are some fun facts about me: <br><br><small>
• I have a Bachelor’s Degree in Sanskrit Language. That
must be why I adapt well to working on legacy codebases:
not that different from translating a Sanskrit text 😅<br><br>
• Even though I'm an introvert, I have a talent for befriending and getting along with 
virtually anyone. I enjoy working both in a team and solo 🧑‍🤝‍🧑<br><br>
• I have a diverse job
history, ranging from translator to graphic designer, from
copywriter to control room operator, from event planner
to personal assistant (just to name a few) 🛠️ </small>`;

const experience = `
<small><strong>BV TECH</strong> // September 2019 - Present</small><br><br>
<strong>Software Developer Consultant for LEONARDO</strong><br>
• Feature development and bug fixing for the Arma dei Carabinieri Salary system web app.<br><br>
<span class="bluText">Technologies: ASP.NET, C#, JQuery, HTML5, CSS3, Visual Studio.</span><br><br>
<strong>Software Developer Consultant for LEONARDO</strong><br>
• Porting, stabilization activities, bug fixing and
maintenance for the Aeronautics project “SiLEF 2.0”;<br>
• Internationalization for the project “SiLEF KAF”;<br>
• Bug fixing for the Aeronautics project “SiLEF”.<br><br>
<span class="bluText">Technologies: J2EE Web Applications (JSP/Servlet),
Java 8, JavaScript, JQuery, GIT, Intellij IDEA.</span> `;

function setWindowsContent(titleText, parText) {
  title.innerHTML = titleText;
  paragraph.innerHTML = parText;
  tInput.value = "";
  windows98.style.display = "block";
  bringToFront(windows98);
}

function displayCommand(value) {
  tOutput.textContent += `\r\n> $ ${value.charAt(0).toLowerCase() + value.slice(1)}`;
  tOutput.setAttribute('style', 'white-space: pre;');
  tOutput.appendChild(userCln);
}