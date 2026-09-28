/* ===== EDIT YOUR CONTENT HERE =====
   Set any link to a real URL (e.g. github:"https://github.com/you/repo").
   Leave it as "" and a labelled placeholder is shown instead. */

const projects = [
  {
    name: "Path Traversal Vulnerability Detector", tag: "Web security tool",
    summary: "Automated tool that detects path traversal vulnerabilities in web applications.",
    what: "A tool that automatically tests web endpoints for path traversal (directory traversal) flaws.",
    why: "Path traversal is a classic OWASP-listed issue that is tedious to test by hand across many parameters. [Add your personal motivation.]",
    objective: "Automate detection so parameters can be tested quickly and consistently.",
    tools: ["Python", "HTTP requests", "Burp Suite", "OWASP Top 10"],
    did: ["Designed payload and detection logic for traversal attempts", "Built the scanner to test parameters and analyse responses", "[Add: how you validated it, e.g. on DVWA or a lab app]"],
    skills: ["Web application security", "Vulnerability assessment", "Security tooling in Python"],
    outcome: "[Add: what the tool found or how well it worked.]",
    relevance: "Automated checks like this support VAPT engagements and secure code review by catching file-access flaws early.",
    links: { github: "", screenshots: "", writeup: "", demo: "", docs: "" }
  },
  {
    name: "GraphQLi Detector", tag: "API security tool",
    summary: "Automatic tool that detects vulnerabilities in GraphQL applications.",
    what: "A scanner that checks GraphQL endpoints for injection and related weaknesses.",
    why: "GraphQL APIs are widely adopted and often under-tested compared with REST. [Add your motivation.]",
    objective: "Identify GraphQL vulnerabilities automatically.",
    tools: ["Python", "GraphQL", "Burp Suite", "API security testing"],
    did: ["Studied GraphQL query structure and common weaknesses", "Implemented automated probing of endpoints", "[Add: what checks it performs]"],
    skills: ["API security testing", "Injection testing", "Tool development"],
    outcome: "[Add: results, test targets, findings.]",
    relevance: "Modern apps expose GraphQL APIs; automated checks speed up API pentests and security reviews.",
    links: { github: "", screenshots: "", writeup: "", demo: "", docs: "" }
  },
  {
    name: "Location Tracker (OSINT)", tag: "OSINT utility",
    summary: "Finds location, service provider and bank branch from a phone number or IFSC code.",
    what: "A tool that resolves a phone number or IFSC code into location, telecom provider and bank branch details.",
    why: "To practise OSINT techniques and see how much can be learned from public data. [Add your motivation.]",
    objective: "Aggregate publicly available data into one lookup tool.",
    tools: ["Python", "OSINT", "Public APIs / datasets [confirm]"],
    did: ["Built lookups for phone numbers and IFSC codes", "Formatted results into a readable output", "[Add: data sources used]"],
    skills: ["OSINT", "API integration", "Data handling"],
    outcome: "[Add outcome.]",
    relevance: "OSINT is used in reconnaissance, fraud investigation and threat intelligence. Use only on data you're authorised to look up.",
    links: { github: "", screenshots: "", writeup: "", demo: "", docs: "" }
  },
  {
    name: "People Counting System (YOLOv8)", tag: "Computer vision",
    summary: "Counts people entering and exiting an area using YOLOv8.",
    what: "A system that detects and tracks people to count entries and exits.",
    why: "[Add: why you built it.]",
    objective: "Accurately count people crossing a defined line or zone.",
    tools: ["Python", "YOLOv8", "OpenCV [confirm]"],
    did: ["Applied YOLOv8 for person detection", "Implemented counting logic for in/out movement", "[Add details]"],
    skills: ["Computer vision", "Python", "Applied AI"],
    outcome: "[Add accuracy or demo result.]",
    relevance: "Occupancy analytics and physical security monitoring.",
    links: { github: "", screenshots: "", writeup: "", demo: "", docs: "" }
  },
  {
    name: "Rule-Based Chatbot", tag: "Web development",
    summary: "Rule-based chatbot with a Bootstrap static site for information delivery.",
    what: "A chatbot following predefined rules, paired with a static Bootstrap website.",
    why: "[Add: why you built it.]",
    objective: "Deliver information through a simple conversational interface.",
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript / Python [confirm]"],
    did: ["Designed rule set and responses", "Built the responsive Bootstrap front end", "[Add details]"],
    skills: ["Front-end development", "Conversation design"],
    outcome: "[Add outcome.]",
    relevance: "Shows development background that supports secure SDLC and code-level understanding.",
    links: { github: "", screenshots: "", writeup: "", demo: "", docs: "" }
  },
  {
    name: "Text-to-PDF Converter", tag: "Python utility",
    summary: "Python utility that converts plain text files into PDF.",
    what: "A small Python utility that converts standard text files to PDF.",
    why: "[Add: why you built it.]",
    objective: "Simple, reliable text-to-PDF conversion.",
    tools: ["Python", "PDF library [confirm]"],
    did: ["Implemented file reading and PDF generation", "[Add details]"],
    skills: ["Python scripting", "File handling"],
    outcome: "[Add outcome.]",
    relevance: "Scripting skills for automating reporting and documentation.",
    links: { github: "", screenshots: "", writeup: "", demo: "", docs: "" }
  }
];

const certs = [
  { name: "CEH v11", why: "[Add why]", areas: "Ethical hacking, reconnaissance, exploitation, web and network attacks", link: "" },
  { name: "CompTIA Security+", why: "[Add why]", areas: "Security fundamentals, threats, architecture, risk, incident response", link: "" },
  { name: "Cyber Security Expert & CISSP Training (Simplilearn)", why: "[Add why]", areas: "Security domains, risk and governance (training programme)", link: "" },
  { name: "Forage Simulations: Mastercard, Deloitte, AIG (2024)", why: "[Add why]", areas: "Virtual job simulations in security awareness, cyber and threat analysis", link: "" }
];

/* ===== SITE LOGIC ===== */
const $ = s => document.querySelector(s);
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const chips = a => `<div class="chips">${a.map(x => `<span class="chip">${esc(x)}</span>`).join("")}</div>`;
const linkBtn = (label, url) => url
  ? `<a class="btn" href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`
  : `<span class="btn ph">${label} [add link]</span>`;

$("#projectGrid").innerHTML = projects.map((p, i) => `
  <button class="card" data-i="${i}">
    <p class="meta">${esc(p.tag)}</p><h4>${esc(p.name)}</h4>
    <p>${esc(p.summary)}</p>${chips(p.tools.slice(0, 3))}
    <span class="more">View details &rarr;</span>
  </button>`).join("");

$("#certGrid").innerHTML = certs.map(c => `
  <article class="card"><h4>${esc(c.name)}</h4>
    <p><b>Why:</b> ${esc(c.why)}</p><p><b>Covers:</b> ${esc(c.areas)}</p>
    ${c.link ? `<a class="more" href="${esc(c.link)}" target="_blank" rel="noopener">View certificate &rarr;</a>` : `<p class="ph">Certificate link [add]</p>`}
  </article>`).join("");

const modal = $("#modal");
$("#projectGrid").addEventListener("click", e => {
  const card = e.target.closest(".card"); if (!card) return;
  const p = projects[card.dataset.i], l = p.links;
  $("#modalBody").innerHTML = `
    <button class="close" onclick="modal.close()">close</button>
    <p class="meta chip" style="display:inline-block">${esc(p.tag)}</p><h3>${esc(p.name)}</h3>
    <h5>What was the project?</h5><p>${esc(p.what)}</p>
    <h5>Why I built it</h5><p>${esc(p.why)}</p>
    <h5>Objective</h5><p>${esc(p.objective)}</p>
    <h5>Tools &amp; technologies</h5>${chips(p.tools)}
    <h5>What I actually did</h5><ul>${p.did.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
    <h5>Skills developed</h5>${chips(p.skills)}
    <h5>Outcome</h5><p>${esc(p.outcome)}</p>
    <h5>Real-world relevance</h5><p>${esc(p.relevance)}</p>
    <h5>Evidence</h5>
    <div class="btns">${linkBtn("GitHub repo", l.github)}${linkBtn("Screenshots", l.screenshots)}${linkBtn("Write-up", l.writeup)}${linkBtn("Demo", l.demo)}${linkBtn("Technical docs", l.docs)}</div>`;
  modal.showModal();
});
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

// mobile menu
$("#burger").onclick = () => $("#menu").classList.toggle("open");
$("#menu").onclick = () => $("#menu").classList.remove("open");

// scroll reveal
const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && x.target.classList.add("in")), { threshold: .1 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// hero terminal typing
const lines = "$ whoami\nsecurity-analyst-in-training\n\n$ cat focus.txt\n> web & API security\n> vulnerability assessment\n> SOC / SIEM fundamentals\n\n$ ls projects/\n5 tools built, more coming";
let n = 0;
(function type() { $("#typed").textContent = lines.slice(0, n++); if (n <= lines.length) setTimeout(type, 35); })();

$("#year").textContent = new Date().getFullYear();
