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

      tOutput.textContent += `\r\n> $ ${tInput.value}\r\nabout: about page\r\nexperience: my resume\r\nprojects: some personal projects\r\n`;
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
      tOutput.textContent += `\r\n> $ ${tInput.value}\r\ncommand not found: ${tInput.value}\r\n`;
      tOutput.setAttribute('style', 'white-space: pre;');
      tOutput.appendChild(userCln);
      tInput.value = "";
    }
  }

  return !(window.event && window.event.keyCode == 13);
}

const about = `<span class="retrofont big">Hi, I'm Kamala. </span>*:･ﾟ✧*:･ﾟ✧ <br><br>
I love making things with code.<br> I'm a perfectionist but I'm also very passionate about getting things done.
Here are some fun facts about me: <br><br><small>
• I have a Bachelor’s Degree in Sanskrit Language. That
must be why I adapt well to working on legacy codebases:
not that different from translating a Sanskrit text<br><br>
• Even though I'm an introvert, I have a talent for befriending and getting along with 
virtually anyone. I enjoy working both in a team and solo<br><br>
• I have a diverse job
history, ranging from translator to graphic designer, from
copywriter to control room operator, from event planner
to personal assistant (just to name a few) </small><br><br>
<button id="cvButton" class="border" onclick="window.open('CV-francescaidarocci.pdf')" download>Download CV</button>`;

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

const projects = `
Here are some of my personal side projects: <br><br>

<div class="projectBox">
<svg class="left iconPadding" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
<h3 class="blu left">Should I Wear Sunscreen? - React JS</h3>
<div style="clear: both"></div>
<span class="repo-language" style="margin-top: 0px ">
<span class="repo-language-color" style="background-color: #f1e05a; margin-right: 10px"></span>
JavaScript
</span> 

<p class="collapsible">

</p>
</div>

`;

function setWindowsContent(titleText, parText) {
  title.innerHTML = titleText;
  paragraph.innerHTML = parText;
  tInput.value = "";
  windows98.style.display = "block";
  bringToFront(windows98);
}

function displayCommand(value) {
  tOutput.setAttribute('style', 'white-space: pre;');
  tOutput.textContent += `\r\n> $ ${value.charAt(0).toLowerCase() + value.slice(1)}\r\n`;
  tOutput.setAttribute('style', 'white-space: pre;');
  tOutput.appendChild(userCln);
  tOutput.setAttribute('style', 'white-space: pre;');
  tInput.scrollIntoView();
}