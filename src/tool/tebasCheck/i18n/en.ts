import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'isp-blockage-detector';
const title = 'ISP Blockage Detector Tebas Check';
const description = 'Diagnostic tool to detect illegitimate blocking of shared Cloudflare IPs by Spanish ISPs.';

const faqData = [
  {
    question: 'What is the Tebas-Check?',
    answer: 'It is a diagnostic tool that attempts to connect to known Cloudflare IPs that have been judicially blocked in Spain to prevent access to pirate broadcasts. The problem is that by blocking a shared IP, thousands of legitimate websites are "broken".',
  },
  {
    question: 'Why is my ISP blocking a Cloudflare IP?',
    answer: 'Due to dynamic precautionary measures where ISPs must block IPs of servers supposedly broadcasting protected content. By using Cloudflare (CDN), many websites share the same IP, causing collateral damage to innocent users.',
  },
  {
    question: 'How does the test work?',
    answer: 'We attempt to load a small resource from the IPs flagged as blocked. If the connection fails due to "Timeout" or connection resets only on those IPs, it is a clear indicator that your ISP is applying IP filtering.',
  },
  {
    question: 'Can I bypass this block?',
    answer: 'IP blocks are difficult to bypass just by changing DNS. The solution usually involves using a VPN, the Tor browser, or waiting for Cloudflare to assign a new IP to the legitimate service you are trying to visit.',
  },
];

const howToData = [
  {
    name: 'Disable VPN or Proxies',
    text: 'For the test to be accurate, you must use your router\'s direct connection (Fiber or 4G/5G) without intermediate layers.',
  },
  {
    name: 'Start the scan',
    text: 'Click the diagnostic button. The tool will send test packets to the IPs under suspicion of blocking.',
  },
  {
    name: 'Interpret the results',
    text: 'If you see results in red, it means that IP is unreachable. If it is green, your traffic flows normally.',
  },
  {
    name: 'Generate report',
    text: 'You can use the results to report the incident to your ISP if they are blocking legitimate services.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Context',
  bibliography: [
    {
      name: 'Cloudflare: Understanding IP Blocking',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'Spanish dynamic blocking regulations',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Why has everything stopped working?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Welcome to the wonderful world of <strong>"Preventive Justice"</strong>. If you\'re here on a Sunday afternoon and legitimate websites have stopped loading while Twitter works perfectly, you\'re probably a collateral victim of the crusade against illegal football broadcasting.',
    },
    {
      type: 'paragraph',
      html: 'In Spain, judges have given a "red button" to certain sports entities. This button allows them to block IP addresses in real time without direct judicial supervision minute by minute. The problem is that they aim with a carnival shotgun, and they often shoot at shared servers where, in addition to "illegal matches", hospitals, universities, or your favorite cooking blog live.',
    },
    {
      type: 'title',
      text: 'The Theory of the Burning Building',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Imagine an illegal stream is being broadcast from apartment 4B of a skyscraper. The logical solution would be to knock on the door of 4B and cut off its power, right?',
    },
    {
      type: 'paragraph',
      html: 'Well, no. The current solution is to <strong>blow up the foundations of the entire building</strong>.',
    },
    {
      type: 'paragraph',
      html: 'By blocking the IP of a service like Cloudflare, the internet provider not only takes down the pirate, but also the other 50,000 legitimate websites that shared that same digital address. If you were working or studying and your website used that IP: bad luck, collateral damage. File a complaint with the master gunsmith.',
    },
    {
      type: 'title',
      text: 'What does this diagnostic tool do exactly?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This tool performs a technical analysis in three steps to identify if your ISP is applying selective IP address blocking:',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ping Google',
          description: 'We check if you have a pulse. If Google doesn\'t load, the problem is that you haven\'t paid your Wi-Fi bill. This is the baseline connectivity test.',
        },
        {
          title: 'Ping Cloudflare',
          description: 'We try to reach 1.1.1.1. It\'s the "canary in the coal mine" of blocking in Spain and the main target of judicial blocks.',
        },
        {
          title: 'Verdict',
          description: 'If Google works and Cloudflare fails, it\'s crystal clear: your ISP is applying selective IP blocking of Cloudflare.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Impact of Dynamic Blocking',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'False Positives',
          description: 'Company websites, personal blogs, and government services can stop working if they share an IP with an unauthorized streaming server.',
        },
        {
          title: 'IP Filtering',
          description: 'Unlike DNS blocking, IP filtering prevents connection at the network level, making changing DNS insufficient to solve the problem.',
        },
        {
          title: 'Lack of Transparency',
          description: 'Often, the user only sees a "Timeout" error without knowing if the problem is their connection or an active ISP block.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Questions no one wants to answer',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Is it illegal to use this?</strong> No. Pinging a server is as illegal as looking at a storefront. This tool is a passive network diagnostic. It doesn\'t break encryption, doesn\'t crack passwords, and doesn\'t access protected content. It just tells you why you can\'t access your usual websites.',
        '<strong>How do I fix it?</strong> If you have an active block, changing DNS no longer helps (they know all the tricks). The only real solution today is a <strong>VPN</strong>. By encrypting your traffic, your ISP can\'t see what you\'re asking for or to whom, and therefore can\'t block you "selectively" (or by mistake).',
      ],
    },
    {
      type: 'title',
      text: 'Streamer Mode / OBS Widget',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Are you a streamer and want to show the status of censorship in real-time on your stream? We\'ve created a special ultra-minimalist mode, with transparent background (chroma-ready) and auto-refresh every 5 minutes.',
    },
    {
      type: 'list',
      items: [
        '<strong>Step 1:</strong> Add a new <strong>Browser</strong> source in OBS.',
        '<strong>Step 2:</strong> Use this URL: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>Step 3:</strong> Done! A large icon (Green/Red) will appear indicating whether your connection is clean or under judicial attack.',
      ],
    },
    {
      type: 'tip',
      title: 'Legal Notice',
      html: '<p>This tool has no affiliation with any sports entity, does not facilitate access to protected content, and does not circumvent technological protection measures (DRM). It simply informs the user that their internet connection is artificially degraded.</p>',
    },
  ],
  ui: {
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'References and Context',
    scanning: 'Scanning the matrix...',
    seekingBlocks: 'Searching for concrete blocks in your fiber...',
    blockedTitle: 'BLOCKING...',
    blockedDiagnosis: 'Diagnosis: "Selective Censorship"',
    blockedReason: 'We detected interference in your ISP. Cloudflare or DNS are being manipulated.',
    noInternetTitle: 'NO CONNECTION',
    noInternetReason: 'It seems you have no internet access. Check your cable or the bill.',
    successTitle: 'YOU ARE FREE',
    successReason: 'Your connection looks clean. If there are global blocks, they are not affecting you.',
    retryBtn: 'Provoke justice again',
    authorNoteTitle: 'Author\'s Note:',
    authorNoteText: 'I haven\'t been able to fully test this utility because I\'m not affected by Tebas\'s "black hand". If you want to help me improve the diagnosis, contact me.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'Negotiating with your router...',
    statusDodging: 'Dodging the court circular...',
    statusCheckingPirate: 'Checking if you are a pirate (wink, wink)...',
    statusPinging: 'Pinging Google to see if you exist...',
    statusConsulting: 'Consulting the shared IP oracle...',
    statusCheckingFee: 'Checking if Tebas paid the autonomous fee...',
    statusCalculating: 'Calculating the probability of winning the lottery...',
    statusDeciphering: 'Attempting to decipher your ISP contract...',
    logStarted: "STARTING AUTONOMOUS PROTOCOL 'TEBAS_WATCH'...",
    logDetecting: '> Detecting ISP and basic connectivity...',
    logIspFound: '> ISP detected: ',
    logConnError: '> Basic connection error',
    logDnsCross: '> Executing DNS data cross-check (DoH vs Local)...',
    logDnsGoogle: '> Real DNS (Google): ',
    logDnsPoisoned: '> ALERT: Poisoned DNS detected.',
    logDnsNoDoh: '> DoH unavailable, skipping DNS cross-check.',
    logLaunchingProbes: '> Launching probes on critical targets...',
    logIpBlocked: '> Target {ip}: NO RESPONSE (Suspect IP block)',
    logIpActive: '> Target {ip}: ACTIVE',
    logAlertInterference: '!!! JUDICIAL INTERFERENCE ALERT !!!',
    logNoInternet: 'NO INTERNET ACCESS',
    logClean: 'CLEAN CONNECTION. ENJOY.',
    logDiagError: 'DIAGNOSTIC ERROR',
  },
};
