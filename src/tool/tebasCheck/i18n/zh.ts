import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'isp-blockage-detector';
const title = 'ISP 封锁检测器 Tebas Check';
const description = '用于检测西班牙 ISP 非法封锁 Cloudflare 共享 IP 的诊断工具。';

const faqData = [
  {
    question: '什么是 Tebas-Check？',
    answer: '这是一项诊断工具，尝试连接到在西班牙被司法封锁的已知 Cloudflare IP，以防止访问盗版广播。问题在于，通过封锁共享 IP，成千上万的正规网站也会被“误伤”。',
  },
  {
    question: '为什么我的 ISP 封锁了 Cloudflare IP？',
    answer: '这是由于动态预防措施，ISP 必须封锁涉嫌广播受保护内容的服务器 IP。由于使用 Cloudflare (CDN)，许多网站共享同一个 IP，从而导致无辜用户受到连带损害。',
  },
  {
    question: '测试是如何工作的？',
    answer: '我们尝试从标记为已封锁的 IP 加载一个小资源。如果仅在这些 IP 上由于“超时”或连接重置而导致连接失败，则清楚地表明您的 ISP 正在应用 IP 过滤。',
  },
  {
    question: '我可以绕过此封锁吗？',
    answer: '仅通过更改 DNS 很难绕过 IP 封锁。解决方案通常包括使用 VPN、Tor 浏览器，或等待 Cloudflare 为您尝试访问的正规服务分配新的 IP。',
  },
];

const howToData = [
  {
    name: '禁用 VPN 或代理',
    text: '为了使测试准确，您必须使用路由器的直接连接（光纤或 4G/5G），而不使用中间层。',
  },
  {
    name: '点击开始扫描',
    text: '点击诊断按钮。该工具将向涉嫌封锁的 IP 发送测试数据包。',
  },
  {
    name: '解读结果',
    text: '如果您看到红色的结果，这意味着该 IP 无法访问。如果是绿色的，则您的流量正常流动。',
  },
  {
    name: '生成报告',
    text: '如果 ISP 封锁了正规服务，您可以使用结果向您的 ISP 举报该事件。',
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

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料与背景',
  bibliography: [
    {
      name: 'Cloudflare: 了解 IP 封锁',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: '西班牙动态封锁法规',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: '为什么一切都停止工作了？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '欢迎来到<strong>“预防性司法”</strong>的神奇世界。如果你在周日下午来到这里，正规网站停止加载，而 Twitter 运行完美，那么你可能是打击非法足球转播行动的连带受害者。',
    },
    {
      type: 'paragraph',
      html: '在西班牙，法官给了某些体育实体一个“红色按钮”。这个按钮允许他们实时封锁 IP 地址，而无需每分钟直接进行司法监督。问题在于，他们就像用园游会的猎枪瞄准一样，经常射中共享服务器，除了“非法比赛”外，那里还住着医院、大学或你最喜欢的烹饪博客。',
    },
    {
      type: 'title',
      text: '起火建筑理论',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '想象一下，摩天大楼的 4B 公寓正在播送非法流媒体。逻辑上的解决方案应该是敲 4B 的门并切断其电源，对吧？',
    },
    {
      type: 'paragraph',
      html: '不，不是的。目前的解决方案是<strong>炸毁整座建筑的地基</strong>。',
    },
    {
      type: 'paragraph',
      html: '通过封锁 Cloudflare 等服务的 IP，互联网提供商不仅击倒了盗版者，还击倒了共享该数字地址的其他 50,000 个正规网站。如果你正在工作或学学习，而你的网站使用了该 IP：算你倒霉，连带损害。请向首席军械师投诉。',
    },
    {
      type: 'title',
      text: '这个诊断工具究竟在做什么？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '该工具执行分三个步骤的技术分析，以识别您的 ISP 是否正在应用选择性 IP 地址封锁：',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ping Google',
          description: '我们检查您是否有“脉搏”。如果 Google 无法加载，问题可能是您没交 Wi-Fi 费。这是基准连接测试。',
        },
        {
          title: 'Ping Cloudflare',
          description: '我们尝试访问 1.1.1.1。这是西班牙封锁行动的“矿井里的金丝雀”，也是司法封锁的主要目标。',
        },
        {
          title: '结论',
          description: '如果 Google 工作正常而 Cloudflare 失败，那么显而易见：您的 ISP 正在对 Cloudflare 应用选择性 IP 封锁。',
        },
      ],
    },
    {
      type: 'title',
      text: '动态封锁的影响',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '误报',
          description: '如果公司网站、个人博客和政府服务与未经授权的流媒体服务器共享 IP，它们可能会停止工作。',
        },
        {
          title: 'IP 过滤',
          description: '与 DNS 封锁不同，IP 过滤在网络层级阻止连接，这使得仅更改 DNS 不足以解决问题。',
        },
        {
          title: '缺乏透明度',
          description: '通常，用户只会看到“超时”错误，而不知道问题出在他们的连接上还是 ISP 的主动封锁上。',
        },
      ],
    },
    {
      type: 'title',
      text: '没人想回答的问题',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>使用这个是非法的吗？</strong> 不。Ping 服务器就像看商店橱窗一样合法。该工具是一种被动网络诊断。它不破解加密，不破解密码，也不访问受保护的内容。它只是告诉你为什么无法访问常用的网站。',
        '<strong>如何修复它？</strong> 如果您面临主动封锁，更改 DNS 已不再有效（他们知道所有的技巧）。目前唯一真正的解决方案是 <strong>VPN</strong>。通过加密您的流量，您的 ISP 无法看到您请求的内容或向谁请求，因此无法“有选择性地”（或错误地）封锁您。',
      ],
    },
    {
      type: 'title',
      text: '主播模式 / OBS 插件',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '您是主播并想在直播中实时展示审查状态吗？我们创建了一个特殊的极简模式，具有透明背景（支持色键）并每 5 分钟自动刷新一次。',
    },
    {
      type: 'list',
      items: [
        '<strong>第一步：</strong>在 OBS 中添加一个新的<strong>浏览器</strong>源。',
        '<strong>第二步：</strong>使用此 URL：<code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>第三步：</strong>完成！将出现一个大图标（绿色/红色），指示您的连接是洁净的还是正遭受司法攻击。',
      ],
    },
    {
      type: 'tip',
      title: '法律声明',
      html: '<p>此工具与任何体育实体均无关联，不提供访问受保护内容的便利，也不绕过技术保护措施 (DRM)。它只是通知用户其互联网连接被人为降级。</p>',
    },
  ],
  ui: {
    faqTitle: '常见问题',
    bibliographyTitle: '参考资料与背景',
    scanning: '正在扫描矩阵...',
    seekingBlocks: '正在您的光纤中搜索具体封锁...',
    blockedTitle: '封锁中...',
    blockedDiagnosis: '诊断：“选择性审查”',
    blockedReason: '我们检测到您的 ISP 存在干扰。Cloudflare 或 DNS 正在被操纵。',
    noInternetTitle: '无连接',
    noInternetReason: '看来您无法访问互联网。请检查您的网线或账单。',
    successTitle: '你是自由的',
    successReason: '您的连接看起来很洁净。如果有全局封锁，它们并未影响到您。',
    retryBtn: '再次挑衅司法',
    authorNoteTitle: '作者注：',
    authorNoteText: '由于我并未受到 Tebas 的“黑手”影响，因此无法完整测试此工具。如果您想帮助我改进诊断，请与我联系。',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: '正在与您的路由器协商...',
    statusDodging: '正在规避法院通告...',
    statusCheckingPirate: '正在检查您是否是海盗（眨眼）...',
    statusPinging: '正在 Ping Google 以确认您的存在...',
    statusConsulting: '正在咨询共享 IP 神谕...',
    statusCheckingFee: '正在检查 Tebas 是否支付了自由职业者费用...',
    statusCalculating: '正在计算赢得彩票的概率...',
    statusDeciphering: '正在尝试解读您的 ISP 合同...',
    logStarted: "正在启动自主协议 'TEBAS_WATCH'...",
    logDetecting: '> 正在检测 ISP 和基础连接...',
    logIspFound: '> 检测到 ISP： ',
    logConnError: '> 基础连接错误',
    logDnsCross: '> 正在执行 DNS 数据交叉检查 (DoH vs 本地)...',
    logDnsGoogle: '> 真实 DNS (Google)： ',
    logDnsPoisoned: '> 警报：检测到中毒的 DNS。',
    logDnsNoDoh: '> DoH 不可用，跳过 DNS 交叉检查。',
    logLaunchingProbes: '> 正在对关键目标启动探测...',
    logIpBlocked: '> 目标 {ip}：无响应 (疑似 IP 封锁)',
    logIpActive: '> 目标 {ip}：活跃',
    logAlertInterference: '!!! 司法干预警报 !!!',
    logNoInternet: '无法访问互联网',
    logClean: '连接洁净。请尽情享受。',
    logDiagError: '诊断错误',
  },
};
