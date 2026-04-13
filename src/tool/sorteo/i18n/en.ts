import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'giveaway';
const title = 'Random Name Picker for Streaming';
const description =
  'Choose a winner at random from a list of names. Free, fast, and visual giveaway tool for Twitch, YouTube, and events.';

const faqData = [
  {
    question: 'Is this giveaway truly random?',
    answer:
      'Yes, we use the browser\'s cryptographic randomness algorithm (Web Crypto API) to ensure that each participant has exactly the same probability of winning, without bias or manipulation.',
  },
  {
    question: 'Can I use this giveaway on Twitch or YouTube?',
    answer:
      'Absolutely. As a web tool, you can capture the window with OBS or share your screen directly. The clean design and animations are designed so that the audience sees the process with total transparency.',
  },
  {
    question: 'How do I prevent someone from participating twice?',
    answer:
      'The tool has an automatic "duplicate cleaning" function that detects identical names or those with small spacing variations to ensure each real person counts only once.',
  },
  {
    question: 'Can I draw several winners at once?',
    answer:
      'Yes, you can configure the number of winners desired before clicking the button. The tool will list the lucky ones clearly so you can mention them in your live stream.',
  },
  {
    question: 'How many names can I add to the list?',
    answer:
      'There is no strict limit imposed by the tool. We have optimized the engine to handle lists of thousands of participants without performance issues, making it ideal even for massive giveaways.',
  },
  {
    question: 'Are my data or the list of participants saved?',
    answer:
      'No, never. Your privacy comes first. The entire giveaway process runs locally in your web browser. The names you enter are never sent to our servers or stored in any database.',
  },
];

const howToData = [
  {
    name: 'Prepare the list of participants',
    text: 'Copy the list of names from your chat, Excel, or social network and paste it into the text box.',
  },
  {
    name: 'Configure giveaway options',
    text: 'Choose how many winners you need and if you want to filter duplicates or empty names.',
  },
  {
    name: 'Launch the innocent hand',
    text: 'Click the giveaway button. A visual animation will maintain the tension before revealing the winner.',
  },
  {
    name: 'Announce results',
    text: 'Copy the names of the winners to share them on your social networks or streaming chat.',
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

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical References',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Fisher-Yates Shuffle Algorithm',
      url: 'https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Random Name Picker and Participants List Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wondering how to do a random giveaway online quickly, safely, and totally transparently? Our free <strong>Name Picker</strong> tool is the ultimate solution to choose a winner at random in seconds. Designed to be simple, visual, and effective, it is perfect for any scenario where you need a digital "innocent hand".',
    },
    {
      type: 'paragraph',
      html: 'Whether you are managing a contest on social networks, a massive giveaway on your streaming channel, or simply deciding who takes out the trash today, our random selector guarantees total impartiality thanks to modern cryptographic algorithms. <strong>No manipulation, no bias, just pure randomness.</strong>'
    },
    {
      type: 'title',
      text: 'Use Cases',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Social Media Giveaways',
          description: 'Ideal for Instagram, Twitter (X), or Facebook contests. Simply copy names from comments and paste them to choose a fair winner. The tool automatically removes duplicates.',
        },
        {
          title: 'Twitch / YouTube Streaming',
          description: 'Thanks to our Studio Mode with smooth animations and integrated sounds, you can share your screen directly in OBS and offer an exciting visual show to your audience while choosing winners live.',
        },
        {
          title: 'Class and Team Dynamics',
          description: 'Teachers and team leaders can use it to form random groups, choose who presents first, or assign tasks at random with total transparency and no favoritism.',
        },
        {
          title: 'Secret Santa and Events',
          description: 'Simplify the organization of family events, office giveaways, or Secret Santa by choosing names at random instantly without the need for papers or complicated logistics.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Why is our tool different?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Real Cryptography:</strong> We use the browser\'s Web Crypto API (W3C standard) instead of weak pseudo-random generators. Every giveaway is mathematically impartial.',
        '<strong>No Storage:</strong> Your data never leaves your browser. We don\'t sell lists, we don\'t profile you, we don\'t store anything. Pure local processing.',
        '<strong>Visual Design:</strong> Cinema mode and animations make every giveaway a memorable event. Perfect for OBS capture or live streaming.',
        '<strong>Duplicate Handling:</strong> Automatically detects repeated names or variants (extra spaces, capitalization, etc.) to ensure each real person counts only once.',
      ],
    },
    {
      type: 'title',
      text: 'How to use the giveaway step by step',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Step 1 - Enter participants:</strong> Paste your list of names into the main text box. The tool automatically detects each line break as a different participant. Do you have duplicates? No problem, the tool removes them.',
        '<strong>Step 2 - Customize:</strong> In the settings tab you can enable the countdown to generate tension, the confetti effect to celebrate, or enable the "blacklist" to exclude certain names.',
        '<strong>Step 3 - Draw!</strong> Click the main button and our engine will generate a cryptographically secure random selection. The winners will be displayed clearly and memorably.',
      ],
    },
    {
      type: 'title',
      text: 'Weighted Entries: Give Advantage to Some Participants',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Want to reward your most loyal subscribers or give more opportunities to certain participants? Our <strong>Weighted Entries</strong> system is unique and allows you to assign a "weight" or multiplier to any name without having to write it multiple times.',
    },
    {
      type: 'tip',
      title: 'How to assign weights to names',
      html: '<p>Use an asterisk (*) or an "x" followed by the number of participations. Examples:</p><ul><li><strong>"John * 5"</strong> - John competes as if he were 5 people</li><li><strong>"Maria x 10"</strong> - Maria has 10 times more chances</li><li><strong>"Peter"</strong> - No symbol = 1 regular entry</li></ul><p>This is perfect for giveaways where you want to give VIP subscribers or special users an advantage.</p>',
    },
    {
      type: 'title',
      text: 'Total Privacy and Security',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Unlike other online tools, <strong>we do not store your data</strong>. All processing of names and execution of the giveaway occurs locally in your own browser. Your participant lists never travel over the network or are saved on any external server.',
    },
    {
      type: 'paragraph',
      html: '<strong>What does this mean?</strong> Your participant list is yours and yours alone. Closing the tab, it disappears. No tracking cookies, no user profiles, no central database. Maximum privacy guaranteed for you and those who participate in your giveaways.',
    },
    {
      type: 'title',
      text: 'Mathematical Transparency',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Some might wonder: "What if you manipulate the results?" The answer is simple: <strong>we can\'t</strong>. The giveaway code is deterministic and cryptographic. No hidden variables, no "fingers on the stage".',
    },
    {
      type: 'paragraph',
      html: 'Each winner is the direct result of the Fisher-Yates Shuffle algorithm applied to your exact list, using real cryptographic entropy. If you want to audit the process, the code is available on GitHub for public inspection.',
    },
  ],
  ui: {
    title: 'Random Giveaway',
    totalParticipants: 'Total Unique Participants',
    ready: 'READY',
    participants: 'Participants',
    settings: 'Settings',
    importFile: 'Import File',
    clearAll: 'Clear all',
    placeholder: 'Type or paste names here...\nJohn Doe\nMaria Garcia\n@twitch_user',
    onePerLine: '1 participant per line',
    lines: 'lines',
    filters: 'Filters',
    allowDuplicates: 'Allow Duplicates',
    winnerCount: 'Number of Winners',
    autoRemove: 'Auto-Remove Winner',
    blacklist: 'Blacklist (Exclude)',
    blacklistPlaceholder: 'Prohibited names (one per line)...',
    blacklistInfo: 'These users will not enter the giveaway.',
    sceneEffects: 'Scene Effects',
    countdown: 'Countdown (3s)',
    confetti: 'Victory Confetti',
    zenMode: 'Zen Mode (Hide Panel)',
    waitingParticipants: 'Waiting for participants...',
    winner: 'WINNER',
    reroll: 'Reroll Giveaway',
    history: 'History for this session',
    noWinnersYet: 'No winners yet...',
    startGiveaway: 'Start Giveaway',
  },
};
