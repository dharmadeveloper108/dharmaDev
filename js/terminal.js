const tInput = document.getElementById('terminalInput');
const tOutput = document.getElementById('output');

const title = document.getElementById('title');
const paragraph = document.getElementById('par');

const user = document.getElementById('sessionUser');
const userCln = user.cloneNode(true);

tInput.focus();

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

const about = `<span class="retrofont big">Hi, I'm Kamala <small>(Francesca Ida Rocci)</small> </span><br><br>*:･ﾟ✧*:･ﾟ✧ *:･ﾟ
<!--<div class="tooltip">
<button id="cvButton" class="border" onclick="copyEmail()">Email me</button>
<span class="tooltiptext" >Copy email to clipboard</span>
</div> -->
<br><br>
I am a software developer who loves making things with code.<br> 
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
<img src="images/computer.gif" alt="dank gifs"> 
<img src="images/dog10.gif" alt="dank gifs">
<img src="images/files.gif" alt="dank gifs">
<img src="images/ArquivodoWindows.gif" alt="dank gifs">
<img src="images/Bgoku.gif" alt="dank gifs">
<img src="images/computer_surfing_sm.gif" alt="dank gifs">
<img src="images/lady.gif" alt="dank gifs">
<img src="images/rotating_computer.gif" alt="dank gifs">
<img src="images/rotstar2_e0.gif" alt="dank gifs">
<img src="images/sonic_runnen.gif" alt="dank gifs">
<img src="images/TypingComputer.gif" alt="dank gifs">
<img src="images/Windows95.gif" alt="dank gifs">
<img src="images/duck24.gif" alt="dank gifs">
<img src="images/dove.gif" alt="dank gifs">
<img src="images/bookani.gif" alt="dank gifs">
<img src="images/firetext.gif" alt="dank gifs">
`;

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

const projectsObj = [
  {
    prTitle: 'KindlyShare',
    prTech: 'Flutter, Dart',
    prDescr: `#Hack20 Flutter Hackathon submission. A mobile app aimed at assisting local neighborhoods in times of crisis.`,
    prImg: '',
    prBtnLink: 'Github repo',
    prBtnTxt: 'https://github.com/Storm-Slayers/kindlyshare',
    prBtnLink1: '',
    prBtnTxt1: '',
  },
  {
    prTitle: 'Space scenes twitter bot',
    prTech: 'Node JS, Express, Twitter API, Heroku',
    prDescr: `A twitter bot that posts cute galactic scenes every few hours, sometimes with a wholesome message. Deployed on Heroku.`,
    prImg: '',
    prBtnLink: 'Github repo',
    prBtnTxt: 'https://github.com/dharmadeveloper108/space_scene_bot',
    prBtnLink1: 'Twitter Bot',
    prBtnTxt1: 'https://twitter.com/cute_space_bot',
  },
  {
    prTitle: 'MemoNagari Android App',
    prTech: 'Android, Java8',
    prDescr: `A memory cards game to challenge your knowledge of the Sanskrit (Devanagari) alphabet.`,
    prImg: '',
    prBtnLink: 'Google Play link',
    prBtnTxt: 'https://play.google.com/store/apps/details?id=it.hinduism.hindumemory',
    prBtnLink1: '',
    prBtnTxt1: '',
  },
  {
    prTitle: 'Should I Wear Sunscreen?',
    prTech: 'React JS, HTML/CSS',
    prDescr: `A simple App to get the UV index level in your location and figure out if you need to wear sunscreen to go outside.`,
    prImg: '',
    prBtnLink: 'Github repo',
    prBtnTxt: 'https://github.com/dharmadeveloper108/should-I-wear-sunscreen',
    prBtnLink1: 'DEMO',
    prBtnTxt1: 'https://uvindexapp.web.app/',
  },
  {
    prTitle: 'Touch your Face => Post Tweet',
    prTech: 'Node JS, Express, Twitter API, Vanilla JavaScript, HTML/CSS',
    prDescr: `A web App that uses the Tensorflow Bodypic library. Basically, if you touch your face a Twitter bot posts a random tweet from a selection of embarrassing posts.`,
    prImg: '',
    prBtnLink: 'Back-end code',
    prBtnTxt: 'https://github.com/dharmadeveloper108/cringe_tweet_bot',
    prBtnLink1: 'Front-end code',
    prBtnTxt1: 'https://github.com/dharmadeveloper108/touchFace_tweetCringe',
  },
  {
    prTitle: 'Copy&Paste Joystick',
    prTech: 'Arduino',
    prDescr: `A firmware for Arduino Leonardo to use a Joystick as a Copy & Paste keyboard.`,
    prImg: '',
    prBtnLink: 'Github repo',
    prBtnTxt: 'https://github.com/dharmadeveloper108/arduino_copy_paste_joystick',
    prBtnLink1: 'Arduino Project Hub Article',
    prBtnTxt1: 'https://create.arduino.cc/projecthub/dharmadeveloper108/arduino-leonardo-copy-paste-joystick-31f4bf?ref=user&ref_id=1616313&offset=0',
  },
  {
    prTitle: 'QR Code Generator',
    prTech: 'Spring Boot, Java11, Rest API',
    prDescr: `A simple Spring Boot Rest API that generates a QR code from the body of the http POST request.`,
    prImg: '',
    prBtnLink: 'Github repo',
    prBtnTxt: 'https://github.com/dharmadeveloper108/qr_code_generator_spring_boot',
    prBtnLink1: '',
    prBtnTxt1: '',
  },
  {
    prTitle: 'Duplicated Tabs Destroyer',
    prTech: 'Node JS Rest API, Vanilla JavaScript, HTML/CSS',
    prDescr: `A Firefox extension to get rid of those pesky duplicated tabs cluttering your browser session.`,
    prImg: '',
    prBtnLink: 'Github repo',
    prBtnTxt: 'https://github.com/dharmadeveloper108/browser-extensions/tree/master/firefox/duplicated-tabs-destroyer',
    prBtnLink1: '',
    prBtnTxt1: '',
  },
  {
    prTitle: 'Eyes Saver',
    prTech: 'Java11, Intellij IDEA',
    prDescr: `Intellij IDEA extension to remind the user to take breaks from looking at the screen.`,
    prImg: '',
    prBtnLink: 'Github repo',
    prBtnTxt: 'https://github.com/dharmadeveloper108/EyesSaver',
    prBtnLink1: '',
    prBtnTxt1: '',
  },
  {
    prTitle: 'Random Quotes IOS App',
    prTech: 'Swift, IOS',
    prDescr: `A simple IOS App that makes GET requests to the Quotable API to retrieve and parse random quotes.`,
    prImg: '',
    prBtnLink: 'Github repo',
    prBtnTxt: 'https://github.com/dharmadeveloper108/random-quotes-ios-app',
    prBtnLink1: '',
    prBtnTxt1: '',
  }
];

function iterateProjObjs(objs) {
  projectStr = '';
  objs.forEach((obj, i) => {
    projectStr += makeProjectsTabs(obj.prTitle, obj.prTech, obj.prDescr, obj.prImg,
      obj.prBtnLink, obj.prBtnTxt, obj.prBtnLink1, obj.prBtnTxt1);
});

  return projectStr;
}

const projects = `Here are some of my personal side projects: <br><br>` +
iterateProjObjs(projectsObj);

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

function makeProjectsTabs(title, tech, descr, previewImg, btnText, btnLink, btnDemoTxt, btnDemoLink) {
  return `
  <div class="projectBox">
<svg class="left iconPadding" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
<h4 class="blu left" style="margin-bottom: 5px;" >${title}</h4>
<div style="clear: both"></div>
<p class="repo-language" style="margin-top: 0px ">
${tech}
</p> 
<p class="collapsible">
${descr}
</p>
<p class="collapsible">${previewImg}</p>
<button class="projectButton">
<a style="text-decoration:none" href="${btnLink}">${btnText}</a>
</button>
${btnDemoTxt != '' ? `<button class="projectButton">
<a style="text-decoration:none" href="${btnDemoLink}">${btnDemoTxt}</a>
</button>` : `` }
</div>
  `;
}

windows98.style.display = "block";
setWindowsContent("About", about);