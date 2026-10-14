/**
 * data.js
 * ------------------------------------------------------------------
 * Single source of truth for the content on this site.
 * Edit the arrays below to update Skills, Projects, Certifications
 * and Write-ups. Nothing else in the codebase needs to change.
 *
 * Status values used throughout:
 *   "learning"     -> actively studying, no hands-on claim yet
 *   "hands-on"     -> practical / lab experience gained
 *   "planned"      -> not started yet
 *   "in-progress"  -> actively being worked on
 *   "completed"    -> finished and verifiable
 * ------------------------------------------------------------------
 */

const SITE = {
  name: "Hazem Gamal Mohamed Omara",
  shortName: "Hazem Omara",
  role: "Cybersecurity Student | Aspiring SOC Analyst",
  university: "Faculty of Computers & Information, Menoufia University",
  department: "Information Technology (IT)",
  focus: "Security Operations Center (SOC)",
  graduation: "Expected 2027",
  linkedin: "https://linkedin.com/in/hazem-omara-00772a357",
  github: "https://github.com/hazem-omara24",
  email: "hazemomara223@gmail.com",
  // Phone is on the CV but intentionally left out of the public site to
  // avoid exposing it to scrapers/spam. Add it here only if you're fine
  // with it being public, then wire it into contact-and-links in main.js.
  phone: null,
};

const SKILLS = [
  {
    category: "Cybersecurity",
    items: [
      { name: "Security Operations Center (SOC)", status: "hands-on" },
      { name: "Incident Response", status: "hands-on" },
      { name: "Threat Detection", status: "hands-on" },
      { name: "Security Monitoring", status: "hands-on" },
      { name: "Log Analysis", status: "hands-on" },
      { name: "MITRE ATT&CK", status: "hands-on" },
      { name: "Cybersecurity Fundamentals", status: "learning" },
      { name: "Threat Hunting", status: "learning" },
      { name: "Digital Forensics Fundamentals", status: "learning" },
      { name: "IOC Analysis", status: "learning" },
      { name: "Malware & Phishing Fundamentals", status: "learning" },
      { name: "Cryptography & TLS Fundamentals", status: "learning" },
    ],
  },
  {
    category: "Network Security",
    items: [
      { name: "TCP/IP", status: "hands-on" },
      { name: "Firewalls", status: "hands-on" },
      { name: "DNS", status: "learning" },
      { name: "HTTP/HTTPS", status: "learning" },
      { name: "IDS/IPS", status: "learning" },
      { name: "NAT", status: "learning" },
      { name: "DMZ", status: "learning" },
      { name: "Network Traffic Analysis", status: "learning" },
      { name: "Authentication & Access Control", status: "learning" },
    ],
  },
  {
    category: "Security Tools",
    items: [
      { name: "FortiGate", status: "hands-on" },
      { name: "FortiAnalyzer", status: "hands-on" },
      { name: "Wazuh", status: "hands-on" },
      { name: "Wireshark", status: "learning" },
      { name: "Zeek", status: "learning" },
      { name: "Suricata", status: "learning" },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "Amazon Web Services (AWS)", status: "hands-on" },
      { name: "IAM", status: "learning" },
      { name: "Amazon RDS", status: "learning" },
      { name: "Amazon CloudFront", status: "learning" },
      { name: "AWS Lambda", status: "learning" },
      { name: "DynamoDB", status: "learning" },
    ],
  },
  {
    category: "Systems & Virtualization",
    items: [
      { name: "Windows", status: "hands-on" },
      { name: "Linux", status: "hands-on" },
      { name: "VMware", status: "hands-on" },
    ],
  },
  {
    category: "Programming & Scripting",
    items: [
      { name: "Python", status: "learning" },
      { name: "SQL", status: "learning" },
      { name: "PowerShell", status: "learning" },
      { name: "C++", status: "learning" },
      { name: "Java", status: "learning" },
    ],
  },
];

const JOURNEY = [
  {
    title: "Security Operations",
    description:
      "Building foundational knowledge in SOC monitoring, security events, alert triage, and incident response.",
  },
  {
    title: "Network Security",
    description:
      "Developing knowledge of network security, firewalls, VPNs, and defensive network configurations.",
  },
  {
    title: "Practical Labs",
    description:
      "Learning through hands-on environments, security tools, networking labs, and controlled experiments.",
  },
  {
    title: "Continuous Learning",
    description:
      "Documenting progress, studying security concepts, and improving technical problem-solving skills.",
  },
];

const PROJECTS = [
  {
    title: "Mini Security Operations Center (SOC) Lab",
    status: "in-progress", // planned | in-progress | completed
    description:
      "A virtualized SOC environment built to simulate security monitoring and incident response workflows, including centralized security logging, log analysis, threat detection, alert triage, and incident investigation.",
    tech: ["Wazuh", "Windows", "Linux", "VMware", "SIEM Concepts", "Log Analysis"],
    plannedFeatures: [
      "Expand detection use cases and alerting rules",
      "Deeper MITRE ATT&CK mapping of simulated events",
      "Document sample investigations as write-ups",
    ],
    github: null,
  },
  {
    title: "Fortinet Security Labs",
    status: "in-progress",
    description:
      "Configured and practiced firewall security concepts using FortiGate, and worked with FortiAnalyzer for centralized log collection and security event monitoring. Practiced firewall policies, routing, LDAP authentication, FSSO authentication, and security logging.",
    tech: ["FortiGate", "FortiAnalyzer", "Firewall Policies", "Routing", "LDAP", "FSSO"],
    plannedFeatures: [],
    github: null,
  },
  {
    title: "SolarWinds Incident Analysis",
    status: "completed",
    description:
      "Analyzed the SolarWinds cyberattack from a cybersecurity and MITRE ATT&CK perspective, mapping attacker activities to specific tactics and techniques and studying supply chain compromise, command and control, defense evasion, and credential access.",
    tech: ["MITRE ATT&CK", "Threat Intelligence", "Incident Analysis"],
    plannedFeatures: [],
    github: null,
  },
];

const CERTIFICATIONS = [
  {
    name: "Incident Response Training",
    provider: "Digital Egypt Pioneers Initiative (DEPI)",
    status: "in-progress", // completed | in-progress | planned
    date: "",
  },
  {
    name: "Fortinet Cybersecurity Training",
    provider: "National Telecommunication Institute (NTI)",
    status: "completed",
    date: "",
  },
  {
    name: "AWS Cloud Training",
    provider: "National Telecommunication Institute (NTI)",
    status: "completed",
    date: "",
  },
];

const WRITEUPS = [
  {
    title: "Understanding Security Operations Centers (SOC)",
    category: "SOC Fundamentals",
    description:
      "An introduction to SOC operations, security monitoring, alert investigation, and defensive security workflows.",
    status: "Coming Soon",
    link: null,
  },
  {
    title: "Introduction to Log Analysis",
    category: "Blue Team / SOC",
    description:
      "Exploring how security logs support monitoring, investigation, and threat detection.",
    status: "Coming Soon",
    link: null,
  },
  {
    title: "SolarWinds Attack — A MITRE ATT&CK Walkthrough",
    category: "Threat Intelligence",
    description:
      "A closer look at the SolarWinds supply chain compromise, mapped step by step to MITRE ATT&CK tactics and techniques.",
    status: "Coming Soon",
    link: null,
  },
];

const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Good" },
];
