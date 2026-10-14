/* ===== EDIT YOUR CONTENT HERE =====
   Set any link to a real URL (e.g. github:"https://github.com/you/repo").
   Leave it as "" and a labelled placeholder is shown instead. */

const projects = [
  {
    name: "Smart LFI Scanner – Automated Web Vulnerability Assessment Tool", tag: "Web security tool | AppSec | Automated Scanning | Path Traversal ",
    summary: "Automated tool that detects path traversal vulnerabilities in web applications.",
    what: "Developed a Python-based automated web security assessment tool designed to identify potential Local File Inclusion (LFI) and path traversal vulnerabilities in web applications. The tool combines URL filtering, web crawling, parameter analysis, and payload-based testing to streamline the discovery and assessment of potentially vulnerable endpoints.",
    why: "Path traversal is a classic OWASP-listed issue that is tedious to test by hand across many parameters; also as a part of VAPT internship",
    objective: "Automate detection so parameters can be tested quickly and consistently.",
    tools: ["Python", "HTTP requests","BeautifulSoup4" ,"urllib.parse","Regular Expressions","Collections","Local File Inclusion (LFI)","Path Traversal","URL Parameter Analysis","Web Crawling","HTTP Request Analysis","Session Management"],
    did: ["Automated URL Analysis: Parses a list of URLs and identifies potentially vulnerable endpoints based on query parameter names, file extensions, and path-like values.",
          "Intelligent Web Crawling: Crawls same-domain web pages to discover additional URLs containing query parameters, with configurable crawl depth and page limits.",
          "Parameter-Based Filtering: Categorizes URLs into strong and weak candidates using configurable patterns associated with file handling, paths, templates, documents, and related functionality.",
          "LFI and Path Traversal Testing: Tests candidate parameters using directory traversal payloads, encoded payload variations, and file access techniques.",
          "Response Analysis: Compares baseline and test responses using content markers and response-length differences to flag potentially vulnerable behavior.",
          "Authentication Support: Supports manual session-cookie input for assessing authenticated endpoints.",
          "Automated Reporting: Displays potential findings in the terminal and saves response evidence to text files for further investigation.",
          "Batch Processing: Processes multiple URLs from an input file and exports filtered candidate endpoints for subsequent testing."],
    skills: ["Web application security","Security tooling in Python","Python Programming","Penetration Testing","Local File Inclusion (LFI)","Path Traversal Testing","Web Crawling","URL Parsing and Analysis","Security Automation","HTTP Request Handling","Vulnerability Assessment","Payload Testing","Response Analysis","BeautifulSoup","Requests Library", "Regex", "Security Reporting"],
    outcome: "Gained practical experience in Python-based web security automation, explored common indicators of LFI and path traversal vulnerabilities, implemented web crawling and URL parameter discovery techniques,practiced HTTP request handling, session-cookie management, and response comparison, learned how to organize vulnerability assessment workflows and document potential findings.",
    relevance: "Automated checks like this support VAPT engagements and secure code review by catching file-access flaws early.",
    links: { github: "https://github.com/AnjaliVB/PATH_TRAVERSAL_AGENT"}
  },
  {
    name: "GraphQLi Detector", tag: "Web Application Security | API Security | Python Automation",
    summary: "Automatic tool that detects vulnerabilities in GraphQL applications.",
    what: "Developed a Python-based GraphQL security scanner to automate endpoint discovery and identify potential security misconfigurations and vulnerabilities in GraphQL APIs. The tool combines endpoint enumeration, schema analysis, response inspection, and automated security checks to help assess the exposure of GraphQL services in authorized testing environments.",
    why: "GraphQL APIs are widely adopted and often under-tested compared with REST. To automate the identification of GraphQL security misconfigurations and potential vulnerabilities, making API security assessments faster and more efficient.",
    objective: "To develop a Python-based tool that automates GraphQL endpoint discovery and detects potential API vulnerabilities, security misconfigurations, and information disclosure risks.",
    tools: ["Python", "Requests", "GraphQL", "REST/API concepts", "JSON", "Multithreading", "Socket Programming", "Regular Expression"],
    did: ["Endpoint Discovery: Identifies potential GraphQL endpoints through website crawling, JavaScript analysis, and common-path enumeration.",
          "Introspection Analysis: Checks whether GraphQL schema introspection is enabled and extracts schema details, including available types, queries, and mutations.",
          "Security Misconfiguration Checks: Tests for field suggestions, query batching, and schema definition language (SDL) exposure.",
          "Access Control Testing: Performs preliminary checks for potential IDOR-related data exposure through identifier-based queries.",
          "Technology Fingerprinting: Examines HTTP headers and schema metadata for GraphQL engine and version information disclosure.",
          "Automated Reporting: Records findings with severity labels, descriptions, and supporting evidence, with optional JSON schema output.",
          "Target Validation: Includes URL validation and private-IP checks intended to reduce the risk of unintended internal network access."],
    skills: ["API security testing", "Injection testing", "Tool development","Python programming","GraphQL Security","API Vulnerability Assessment","Endpoint Enumeration",
             "Introspection Testing","Access Control Testing","Information Disclosure Analysis","Modules like Requests, urllib3, JSON","Regular Expressions","Web Crawling","Automated Vulnerability Detection",
             "HTTP/HTTPS","JSON Reporting","Vulnerability Documentation","Severity Classification"],
    outcome: "[Add: results, test targets, findings.]",
    relevance: "Modern apps expose GraphQL APIs; automated checks speed up API pentests and security reviews.",
    links: { github: "https://github.com/AnjaliVB/GraphQL_Agent"}
  },
  {
    name: "Python Phone Number Intelligence Tool – OSINT Metadata Lookup", tag: "OSINT utility | Python | Phone-Number-Lookup | Information-Gathering",
    summary: "Finds location, service provider and bank branch from a phone number or IFSC code.",
    what: "Developed  a Python-based Phone Number Information Lookup Tool using the phonenumbers library to extract publicly available metadata from phone numbers. The tool identifies the phone number's regional description, associated carrier information, and possible time zones. It demonstrates practical applications of Python programming, data parsing, and telecommunications metadata analysis. The project is designed for educational purposes and OSINT (Open-Source Intelligence) learning.",
    why: "To practise OSINT techniques and see how much can be learned from public data. ",
    objective: "To develop a Python-based Phone Number Information Lookup Tool that extracts and displays phone number metadata, including regional information, associated carrier details, and possible time zones..",
    tools: ["Python", "OSINT","phonenumbers lib", "Geocoder Module","Carrier Module","Timezone Module"],
    did: ["Phone Number Parsing: Accepts user input and parses phone numbers using the phonenumbers library.",
          "Regional Information: Displays the geographical region associated with the phone number's numbering information.",
          "Carrier Identification: Retrieves available carrier metadata.",
          "Timezone Detection: Displays possible time zones associated with the number.",
          "Interactive Input: Allows users to enter a phone number directly through the command line.",
          "Lightweight and Simple: Runs locally without requiring a web interface or external API.",
          "OSINT Learning: Demonstrates basic telecommunications metadata analysis for educational purposes."],
    skills: ["OSINT", "API integration", "Data handling", "Python Programming","Phone Number Parsing","Data Extraction", "Python Libraries","Information Gathering"],
    outcome: "Reveals Mobile Service Provider information, location like country and region",
    relevance: "OSINT is used in reconnaissance, fraud investigation and threat intelligence. Use only on data you're authorised to look up.",
    links: { github: "https://github.com/AnjaliVB/Phone-Tracking-System" }
  },
  {
    name: "People Counting System (YOLOv8)", tag: "Computer vision",
    summary: "Counts people entering and exiting an area using YOLOv8.",
    what: "Developed a computer vision-based People Counting System using Python, OpenCV, and YOLOv8 to detect and track people in video footage. The system uses object detection and object tracking to assign IDs to individuals and monitor their movement across predefined entry and exit zones. It maintains separate counts for people entering and leaving an area, displays real-time counting results on the video feed, and saves the counting data to a log file. This project demonstrates practical applications of computer vision, object detection, and automated surveillance analytics.",
    why: "Built it for a pre-screening process for an interview. ",
    objective: "To develop an automated people counting system that detects, tracks, and counts individuals entering and exiting a designated area using computer vision and deep learning techniques, reducing the need for manual counting and enabling efficient monitoring of human movement.",
    tools: ["Python", "YOLOv8", "OpenCV","Pandas","NumPy","CVZone"],
    did: ["Person Detection: Detects people in video frames using the YOLOv8 deep learning model.",
          "Object Tracking: Assigns tracking IDs to detected individuals to help maintain identity across frames.",
          "Entry and Exit Detection: Uses predefined polygon zones to identify movement between designated areas.",
          "Automated People Counting: Maintains separate counts for entering and exiting individuals.",
          "Visual Monitoring: Displays bounding boxes, tracking IDs, counting zones, and live totals on the video feed.",
          "Data Logging: Records the current entry and exit counts in a text file.",
          "Interactive Video Analysis: Supports frame resizing and mouse-coordinate inspection for configuring detection zones."],
    skills: ["Computer vision", "Python", "Applied AI","Object Detection and Tracking","YOLOv8","OpenCV","People Counting","Video Processing","NumPy","Pandas","Real-Time Detection","Data Logging"],
    outcome: "Implemented person detection using a pretrained YOLOv8 model.Gained hands-on experience with object tracking and video frame processing. Learned to define polygonal regions and detect movement between zones. Developed automated entry and exit counting logic using tracking IDs. Practiced integrating multiple Python libraries into a computer vision workflow. Implemented basic file-based logging for monitoring results.",
    relevance: "Occupancy analytics and physical security monitoring.",
    links: { github: "https://github.com/AnjaliVB/People-Counting-System" }
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
    what: "A small Python utility that reads a user-specified text file and converts its contents into a PDF document. The tool automates basic document conversion and generates a PDF output file, demonstrating file handling, PDF generation, and text processing in Python.",
    why: "Built it out of interest",
    objective: "Simple, reliable text-to-PDF conversion.",
    tools: ["Python", "FPDF library","Python file operations, Reading files","FPDF page"],
    did: ["User-Defined Input: Accepts the name or path of a text file.",
          "Text File Reading: Reads file contents line by line.",
          "PDF Generation: Creates a PDF document using the FPDF library.",
          "Automated Conversion: Transfers text content into PDF cells.",
          "Output File Creation: Saves the generated document as a PDF file.",
          "Simple CLI Workflow: Provides a straightforward, interactive conversion process."],
    skills: ["Python scripting", "File handling","File Handling","Text Processing","PDF Generation","FPDF Library","Document Automation","User Input Handling","Exception Handling","Basic Scripting"],
    outcome: "Gained practical experience in Python file handling and document processing, learned to generate PDF documents programmatically using FPDF, improved understanding of reading text files and writing output files.",
    relevance: "Scripting skills for automating reporting and documentation.",
    links: { github: "https://github.com/AnjaliVB/Text-to-pdf-converter"}
  },
   {
      name:"Network Packet Sniffer and Protocol Distribution Analyzer", tag:"Cybersecurity | Network Security | Network Traffic Analysis",
      summary:"Python-based network traffic analyzer using Scapy to capture and classify packets by protocol, with Matplotlib visualization to summarize TCP, UDP, ICMP, and other traffic categories.",
      what:"This tool captures 100 network packets, identifies and counts TCP, UDP, ICMP, and other IP traffic using Python and Scapy. It visualizes the protocol distribution in a bar chart using Matplotlib for basic network traffic analysis.",
      why:"Built it as internship project",
      objective:"Objective: To capture, analyze, and classify network packets by protocol using Python and Scapy, and visualize traffic distribution using Matplotlib for basic network monitoring and security analysis.",
      tools:["Python","Scapy","Matplotlib"],
      did:["Network Packet Capture: Uses Python's Scapy library to capture network packets from an accessible network interface.",
           "Automatic Protocol Identification: Identifies packets containing TCP, UDP, and ICMP layers and categorizes other IP packets separately.",
           "Packet Counting: Maintains individual counters for each protocol category to summarize captured network traffic.",
           "IP Packet Filtering: Checks whether a packet contains an IP layer before performing protocol classification.",
           "Configurable Packet Capture Limit: Captures 100 packets by default, allowing a limited traffic sample to be analyzed.",
           "Real-Time Packet Processing: Processes each packet through a callback function as it is captured, updating protocol counters during the capture session.",
           "Graphical Traffic Visualization: Uses Matplotlib to generate a bar chart displaying the packet count for each protocol category.",
           "Color-Coded Bar Chart: Assigns different colors to protocol categories to make comparisons easier.",
           "Lightweight Python Implementation: Uses Python libraries to perform packet analysis and visualization without requiring a full network monitoring platform."],
      skills:["Python","Network packet capture and inspection","TCP","UDP","ICMP","IP protocol fundamentals.","Scapy packet-layer analysis","Data visualization","Matplotlib","Network Monitoring"],
      outcome:"Gained hands-on experience in network packet capture, protocol identification, and traffic analysis using Python and Scapy, along with data visualization using Matplotlib and an understanding of fundamental network security monitoring concepts.",
      relevance:"Relevance: Demonstrates practical application of network traffic monitoring and protocol analysis for understanding network communication patterns. Builds foundational skills relevant to cybersecurity, network security monitoring, and intrusion detection.",
      links:{github:"https://github.com/AnjaliVB/Network-Traffic-Analysis-and-Protocol-Distribution-Visualization-Using-Python-Scapy"}
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
    <div class="btns">${linkBtn("GitHub repo", l.github)}</div>`;
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
