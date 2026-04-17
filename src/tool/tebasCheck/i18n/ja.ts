import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'isp-blockage-detector';
const title = 'ISPブロック検出器 Tebas Check';
const description = 'スペインのISPによるCloudflare共有IPの不当なブロックを検出するための診断ツール。';

const faqData = [
  {
    question: 'Tebas-Checkとは何ですか？',
    answer: 'これは、海賊版放送へのアクセスを防ぐためにスペインで司法的にブロックされた既知のCloudflare IPへの接続を試みる診断ツールです。問題は、共有IPをブロックすることで、何千もの正当なウェブサイトが「壊れて」しまうことです。',
  },
  {
    question: 'なぜ私のISPはCloudflare IPをブロックしているのですか？',
    answer: '保護されたコンテンツを放送しているとされるサーバーのIPをISPがブロックしなければならない動的な予防措置のためです。Cloudflare（CDN）を使用することで、多くのウェブサイトが同じIPを共有しており、罪のないユーザーに付随的な被害をもたらしています。',
  },
  {
    question: 'テストはどのように機能しますか？',
    answer: 'ブロックされたとマークされたIPから小さなリソースをロードしようとします。それらのIPでのみ「タイムアウト」または接続リセットのために接続が失敗した場合、それはあなたのISPがIPフィルタリングを適用している明確な指標です。',
  },
  {
    question: 'このブロックを回避できますか？',
    answer: 'IPブロックは、DNSを変更するだけでは回避が困難です。解決策は通常、VPN、Torブラウザを使用するか、Cloudflareがアクセスしようとしている正当なサービスに新しいIPを割り当てるのを待つことです。',
  },
];

const howToData = [
  {
    name: 'VPNまたはプロキシを無効にする',
    text: 'テストを正確に行うには、中間のレイヤーなしでルーターの直接接続（光回線または4G/5G）を使用する必要があります。',
  },
  {
    name: 'スキャンを開始する',
    text: '診断ボタンをクリックします。ツールはブロックの疑いがあるIPにテストパケットを送信します。',
  },
  {
    name: '結果を解釈する',
    text: '結果が赤で表示されている場合、そのIPには到達できないことを意味します。緑色の場合は、トラフィックが正常に流れています。',
  },
  {
    name: 'レポートを生成する',
    text: '正当なサービスをブロックしている場合、その結果を使用してISPにインシデントを報告できます。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献と背景',
  bibliography: [
    {
      name: 'Cloudflare: IPブロッキングを理解する',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'スペインの動的ブロッキング規制',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'なぜすべてが動かなくなったのですか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>「予防的司法」</strong>の素晴らしい世界へようこそ。日曜日の午後にここにいて、正当なウェブサイトの読み込みが停止し、Twitterが完璧に動作しているなら、あなたはおそらく違法なサッカー放送に対する十字軍の付随的な犠牲者です。',
    },
    {
      type: 'paragraph',
      html: 'スペインでは、裁判官が特定のスポーツ団体に「赤いボタン」を与えました。このボタンにより、彼らは分単位の直接的な司法監督なしに、リアルタイムでIPアドレスをブロックすることができます。問題は、彼らがお祭りの射的のような銃で狙いを定め、「違法な試合」に加えて、病院、大学、あるいはお気に入りの料理ブログが存在する共有サーバーをしばしば撃ち抜くことです。',
    },
    {
      type: 'title',
      text: '燃えるビルの理論',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '超高層ビルの4B号室から違法ストリーミングが放送されていると想像してください。論理的な解決策は、4Bのドアを叩いて電気を切ることですよね？',
    },
    {
      type: 'paragraph',
      html: 'いいえ、違います。現在の解決策は、<strong>ビル全体の土台を爆破すること</strong>です。',
    },
    {
      type: 'paragraph',
      html: 'CloudflareのようなサービスのIPをブロックすることで、インターネットプロバイダーは海賊版を停止させるだけでなく、同じデジタルアドレスを共有していた他の50,000の正当なウェブサイトも停止させます。もしあなたが仕事や勉強をしていて、そのウェブサイトがそのIPを使用していたなら、運が悪かったということで、付随的な被害です。銃器職人の親方に苦情を申し立ててください。',
    },
    {
      type: 'title',
      text: 'この診断ツールは具体的に何をしますか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'このツールは、ISPが選択的なIPアドレスブロッキングを適用しているかどうかを特定するために、3つのステップでテクニカル分析を実行します。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'GoogleにPing',
          description: '脈拍があるかどうかを確認します。Googleが読み込まれない場合、問題はWi-Fiの料金を支払っていないことです。これは基本的な接続テストです。',
        },
        {
          title: 'CloudflareにPing',
          description: '1.1.1.1に到達しようとします。これはスペインにおけるブロッキングの「炭鉱のカナリア」であり、司法ブロッキングの主な標的です。',
        },
        {
          title: '判定',
          description: 'Googleが機能し、Cloudflareが失敗した場合、結果は明白です。お使いのISPはCloudflareの選択的なIPブロッキングを適用しています。',
        },
      ],
    },
    {
      type: 'title',
      text: '動的ブロッキングの影響',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '誤検知',
          description: '企業のウェブサイト、個人のブログ、政府のサービスなどは、許可されていないストリーミングサーバーとIPを共有している場合、動作が停止する可能性があります。',
        },
        {
          title: 'IPフィルタリング',
          description: 'DNSブロッキングとは異なり、IPフィルタリングはネットワークレベルで接続を妨げるため、DNSを変更するだけでは問題の解決には不十分です。',
        },
        {
          title: '透明性の欠如',
          description: '多くの場合、ユーザーは問題が自分の接続にあるのか、ISPのアクティブなブロックにあるのかを知ることなく、「タイムアウト」エラーのみを目にします。',
        },
      ],
    },
    {
      type: 'title',
      text: '誰も答えたがらない質問',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>これを使用するのは違法ですか？</strong> いいえ。サーバーにPingを送信することは、ショーウィンドウを覗き見ることと同じくらい合法です。このツールはパッシブなネットワーク診断です。暗号化を解読したり、パスワードをクラックしたり、保護されたコンテンツにアクセスしたりすることはありません。ただ、なぜいつものウェブサイトにアクセスできないのかを教えてくれるだけです。',
        '<strong>どうすれば直りますか？</strong> アクティブなブロックがある場合、DNSの変更はもはや役に立ちません（彼らはすべてのトリックを知っています）。今日の唯一の真の解決策は<strong>VPN</strong>です。トラフィックを暗号化することで、ISPは何を要求しているのか、誰に要求しているのかを確認できなくなり、その結果、「選択的に」（または誤って）ブロックすることができなくなります。',
      ],
    },
    {
      type: 'title',
      text: 'ストリーマーモード / OBSウィジェット',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ストリーマーで、検閲の状況を配信上でリアルタイムに表示したいですか？透明な背景（クロマキー対応）と5分ごとの自動更新を備えた、特別な超ミニマリストモードを作成しました。',
    },
    {
      type: 'list',
      items: [
        '<strong>ステップ1:</strong> OBSで新しい<strong>ブラウザ</strong>ソースを追加します。',
        '<strong>ステップ2:</strong> このURLを使用します: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>ステップ3:</strong> 完了です！接続がクリーンであるか、司法攻撃を受けているかを示す大きなアイコン（緑/赤）が表示されます。',
      ],
    },
    {
      type: 'tip',
      title: '法的通知',
      html: '<p>このツールはいかなるスポーツ団体とも提携しておらず、保護されたコンテンツへのアクセスを容易にするものではなく、技術的保護手段（DRM）を回避するものでもありません。単に、ユーザーのインターネット接続が人為的に劣化していることを通知するものです。</p>',
    },
  ],
  ui: {
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献と背景',
    scanning: 'マトリックスをスキャン中...',
    seekingBlocks: '回線内のコンクリートブロックを探索中...',
    blockedTitle: 'ブロック中...',
    blockedDiagnosis: '診断：「選択的検閲」',
    blockedReason: 'ISPでの干渉を検出しました。CloudflareまたはDNSが操作されています。',
    noInternetTitle: '接続なし',
    noInternetReason: 'インターネットにアクセスできないようです。ケーブルまたは料金の支払いを確認してください。',
    successTitle: 'あなたは自由です',
    successReason: 'あなたの接続はクリーンなようです。グローバルなブロックがある場合でも、あなたには影響していません。',
    retryBtn: '再び司法を挑発する',
    authorNoteTitle: '著者注：',
    authorNoteText: '私はテバスの「黒い手」の影響を受けていないため、このユーティリティを完全にテストすることはできていません。診断の改善にご協力いただける場合は、ご連絡ください。',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'ルーターと交渉中...',
    statusDodging: '裁判所の通達を回避中...',
    statusCheckingPirate: 'あなたが海賊でないか確認中（ウィンク）...',
    statusPinging: 'あなたが存在するか確認するためにGoogleにPing中...',
    statusConsulting: '共有IPの神託を仰ぎ中...',
    statusCheckingFee: 'テバスが自営業者の会費を支払ったか確認中...',
    statusCalculating: '宝くじに当たる確率を計算中...',
    statusDeciphering: 'ISP契約の解読を試行中...',
    logStarted: "自律プロトコル 'TEBAS_WATCH' を開始中...",
    logDetecting: '> ISPと基本的な接続を検出中...',
    logIspFound: '> 検出されたISP: ',
    logConnError: '> 基本的な接続エラー',
    logDnsCross: '> DNSデータのクロスチェック（DoH vs ローカル）を実行中...',
    logDnsGoogle: '> リアルDNS（Google）: ',
    logDnsPoisoned: '> 警告：毒されたDNSを検出しました。',
    logDnsNoDoh: '> DoHが利用不可能なため、DNSクロスチェックをスキップします。',
    logLaunchingProbes: '> 重大なターゲットにプローブを起動中...',
    logIpBlocked: '> ターゲット {ip}: 応答なし（IPブロックの疑い）',
    logIpActive: '> ターゲット {ip}: アクティブ',
    logAlertInterference: '!!! 司法干渉アラート !!!',
    logNoInternet: 'インターネットアクセスなし',
    logClean: 'クリーンな接続。お楽しみください。',
    logDiagError: '診断エラー',
  },
};
