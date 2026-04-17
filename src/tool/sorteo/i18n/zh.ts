import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'giveaway';
const title = '直播专用随机名字抽取器';
const description =
  '从名字列表中随机抽取一名获胜者。适用于 Twitch、YouTube 和各类活动的免费、快速且具有视觉效果的抽奖工具。';

const faqData = [
  {
    question: '这个抽奖真的是随机的吗？',
    answer:
      '是的，我们使用浏览器的加密随机算法 (Web Crypto API) 来确保每位参与者都有完全相同的获胜概率，不存在任何偏见或操控。',
  },
  {
    question: '我可以在 Twitch 或 YouTube 上使用这个抽取器吗？',
    answer:
      '当然可以。作为一个网页工具，您可以通过 OBS 捕获窗口或直接共享屏幕。简洁的设计和动画旨在让观众能以完全透明的方式看到整个过程。',
  },
  {
    question: '如何防止有人重复参与？',
    answer:
      '该工具具有自动“去重”功能，可以检测完全相同的名字或带有微小空格差异的名字，以确保每个真实的人只被计算一次。',
  },
  {
    question: '我可以一次抽取多名获胜者吗？',
    answer:
      '可以，您可以在点击按钮之前配置所需的获胜者人数。工具会清晰地列出幸运儿，以便您在直播中宣布。',
  },
  {
    question: '我可以在列表中添加多少个名字？',
    answer:
      '工具本身没有严格的人数限制。我们已经优化了引擎，可以毫无压力地处理包含数千名参与者的列表，非常适合大规模抽奖。',
  },
  {
    question: '我的数据或参与者列表会被保存吗？',
    answer:
      '不，永远不会。您的隐私是我们的首要任务。整个抽奖过程在您的网页浏览器本地运行。您输入的名字永远不会发送到我们的服务器，也不会存储在任何数据库中。',
  },
];

const howToData = [
  {
    name: '准备参与者列表',
    text: '从您的聊天记录、Excel 或社交网络中复制名字列表，并将其粘贴到文本框中。',
  },
  {
    name: '配置抽奖选项',
    text: '选择您需要的获胜者人数，以及是否要过滤重复项或空白名字。',
  },
  {
    name: '启动“公平之手”',
    text: '点击抽奖按钮。在揭晓获胜者之前，视觉动画将保持现场的紧张氛围。',
  },
  {
    name: '公布结果',
    text: '复制获胜者的名字，以便在您的社交网络或直播聊天室中分享。',
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Fisher-Yates 洗牌算法',
      url: 'https://zh.wikipedia.org/wiki/Fisher-Yates%E6%B4%97%E7%89%8C%E7%AE%97%E6%B3%95',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: '在线随机名字抽取器与参与者列表',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '想知道如何快速、安全且完全透明地进行在线随机抽奖吗？我们的免费<strong>名字抽取器</strong>工具是在几秒钟内随机选择获胜者的终极解决方案。它设计简单、直观且高效，非常适合任何需要数字“公平抽签”的应用场景。',
    },
    {
      type: 'paragraph',
      html: '无论您是在管理社交网络上的竞赛，还是在直播频道进行大规模抽奖，亦或只是决定今天谁去倒垃圾，我们的随机选择器都能凭借现代加密算法保证绝对的公正性。<strong>没有操控，没有偏见，只有纯粹的随机性。</strong>'
    },
    {
      type: 'title',
      text: '应用场景',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '社交媒体抽奖',
          description: '非常适合 Instagram、Twitter (X) 或 Facebook 上的竞赛。只需从评论中复制名字并粘贴，即可选出公正的获胜者。工具会自动去除重复项。',
        },
        {
          title: 'Twitch / YouTube 直播',
          description: '借助我们拥有流畅动画和集成音效的“直播间模式”，您可以直接在 OBS 中共享屏幕，在直播抽取获胜者的同时为观众呈现精彩的视觉效果。',
        },
        {
          title: '课堂与团队互动',
          description: '教师和团队负责人可以使用它来随机分组、选择首位发言人或随机分配任务，确保过程完全透明且不带任何偏向。',
        },
        {
          title: '圣诞老人抽签与各类活动',
          description: '通过瞬间随机选择名字，简化家庭聚会、办公室抽奖或圣诞老人抽签的组织工作，无需纸条或复杂的后勤准备。',
        },
      ],
    },
    {
      type: 'title',
      text: '为什么我们的工具与众不同？',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>真实加密：</strong> 我们使用浏览器的 Web Crypto API（W3C 标准），而非脆弱的伪随机生成器。每次抽奖在数学上都是公正的。',
        '<strong>无存储：</strong> 您的数据永远不会离开浏览器。我们不出售列表、不分析您的特征、不存储任何内容。纯本地处理。',
        '<strong>视觉设计：</strong> 影院模式和动画让每次抽奖都成为难忘的时刻。非常适合 OBS 捕获或直播。',
        '<strong>去重处理：</strong> 自动检测重复的名字或变体（额外的空格、大小写等），以确保每个真实的人只被计算一次。',
      ],
    },
    {
      type: 'title',
      text: '抽奖步骤详解',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>第一步 - 输入参与者：</strong> 将名字列表粘贴到主文本框中。工具会自动将每个换行符识别为一个不同的参与者。有重复？没问题，工具会自动去除。',
        '<strong>第二步 - 自定义：</strong> 在设置标签中，您可以开启倒计时以营造紧张感，开启五彩纸屑效果进行庆祝，或者开启“黑名单”以排除某些名字。',
        '<strong>第三步 - 抽取！</strong> 点击主按钮，我们的引擎将生成加密安全的随机选择。获胜者将以清晰且令人难忘的方式展示。',
      ],
    },
    {
      type: 'title',
      text: '权重条目：赋予某些参与者优势',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '想奖励您最忠实的订阅者或给某些参与者更多机会吗？我们的<strong>权重条目</strong>系统独一无二，允许您为任何名字分配“权重”或倍数，而无需多次书写。',
    },
    {
      type: 'tip',
      title: '如何为名字分配权重',
      html: '<p>使用星号 (*) 或 "x" 后跟参与次数。例如：</p><ul><li><strong>"张三 * 5"</strong> - 张三的竞争力相当于 5 个人</li><li><strong>"李四 x 10"</strong> - 李四获胜的几率增加 10 倍</li><li><strong>"王五"</strong> - 无符号 = 1 次常规参与</li></ul><p>这非常适合您想给 VIP 订阅者或特殊用户提供优势的抽奖活动。</p>',
    },
    {
      type: 'title',
      text: '绝对的隐私与安全',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '与其他在线工具不同，<strong>我们不存储您的数据</strong>。名字的所有处理和抽奖的执行都在您自己的浏览器本地完成。参与者列表绝不会通过网络传输，也不会保存在任何外部服务器上。',
    },
    {
      type: 'paragraph',
      html: '<strong>这意味着什么？</strong> 参与者列表完全属于您。关闭标签页后，数据即刻消失。没有追踪 Cookie、没有用户画像、没有中央数据库。为您和参与抽奖的人提供最大的隐私保证。',
    },
    {
      type: 'title',
      text: '数学透明性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '有人可能会问：“如果你操控结果怎么办？”答案很简单：<strong>我们做不到</strong>。抽奖代码是确定性且加密的。没有隐藏变量，没有“幕后黑手”。',
    },
    {
      type: 'paragraph',
      html: '每位获胜者都是对您的确切列表应用 Fisher-Yates 洗牌算法后的直接结果，并使用了真实的加密熵。如果您想审计该过程，可以在 GitHub 上查看公开代码。',
    },
  ],
  ui: {
    faqTitle: '常见问题',
    bibliographyTitle: '技术参考',
    title: '随机抽奖',
    totalParticipants: '唯一参与者总数',
    ready: '就绪',
    participants: '参与者',
    settings: '设置',
    importFile: '导入文件',
    clearAll: '清除全部',
    placeholder: '在此键入或粘贴名字...\n张三\n李四\n@twitch_user',
    onePerLine: '每行 1 位参与者',
    lines: '行',
    filters: '过滤器',
    allowDuplicates: '允许重复',
    winnerCount: '获胜者人数',
    autoRemove: '自动移除获胜者',
    blacklist: '黑名单 (排除)',
    blacklistPlaceholder: '禁止的名字（每行一个）...',
    blacklistInfo: '这些用户将不会进入抽奖。',
    sceneEffects: '场景效果',
    countdown: '倒计时 (3秒)',
    confetti: '胜利纸屑',
    zenMode: '禅模式 (隐藏面板)',
    waitingParticipants: '等待参与者...',
    winner: '获胜者',
    reroll: '重新抽取',
    history: '本次会话历史',
    noWinnersYet: '暂无获胜者...',
    startGiveaway: '开始抽奖',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
