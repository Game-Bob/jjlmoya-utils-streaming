import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'giveaway';
const title = '配信向けランダム名前抽選器';
const description =
  '名前のリストから勝者をランダムに選びます。Twitch、YouTube、イベント向けの、無料で高速、かつ視覚的な抽選ツールです。';

const faqData = [
  {
    question: 'この抽選は本当にランダムですか？',
    answer:
      'はい。ブラウザの暗号化乱数アルゴリズム（Web Crypto API）を使用して、バイアスや操作なしに、各参加者が全く同じ確率で当選するようにしています。',
  },
  {
    question: 'この抽選器をTwitchやYouTubeで使用できますか？',
    answer:
      'もちろんです。ウェブツールなので、OBSでウィンドウをキャプチャしたり、画面を直接共有したりできます。クリーンなデザインとアニメーションは、視聴者がプロセスを完全に透明に確認できるように設計されています。',
  },
  {
    question: '一人が二回参加するのを防ぐにはどうすればよいですか？',
    answer:
      'ツールには自動の「重複クリーニング」機能があり、同一の名前やスペースのわずかな違いがある名前を検出して、実在する一人が一回だけカウントされるようにします。',
  },
  {
    question: '一度に複数の当選者を選ぶことはできますか？',
    answer:
      'はい。ボタンをクリックする前に、希望する当選者数を設定できます。ツールは当選者を明確にリストアップするので、ライブ配信中に名前を読み上げることができます。',
  },
  {
    question: 'リストに何人まで名前を追加できますか？',
    answer:
      'ツールによる厳密な制限はありません。数千人の参加者リストでもパフォーマンスの問題なく処理できるようにエンジンを最適化しており、大規模な抽選にも理想的です。',
  },
  {
    question: '私のデータや参加者リストは保存されますか？',
    answer:
      'いいえ、決して保存されません。あなたのプライバシーが第一です。抽選プロセス全体がウェブブラウザ内でローカルに実行されます。入力した名前が弊社のサーバーに送信されたり、データベースに保存されたりすることはありません。',
  },
];

const howToData = [
  {
    name: '参加者リストを準備する',
    text: 'チャット、Excel、またはSNSから名前のリストをコピーして、テキストボックスに貼り付けます。',
  },
  {
    name: '抽選オプションを設定する',
    text: '必要な当選者数と、重複や空の名前をフィルタリングするかどうかを選択します。',
  },
  {
    name: '「清き一票（抽選）」を実行する',
    text: '抽選ボタンをクリックします。視覚的なアニメーションが、勝者が発表されるまでの緊張感を高めます。',
  },
  {
    name: '結果を発表する',
    text: '当選者の名前をコピーして、SNSや配信チャットで共有します。',
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

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンス',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'フィッシャー–イェーツのシャッフル アルゴリズム',
      url: 'https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%A3%E3%83%BC%E2%80%93%E3%82%A4%E3%82%A7%E3%83%BC%E3%83%84%E3%81%AE%E3%82%B7%E3%83%A3%E3%83%83%E3%83%95%E3%83%AB',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'オンライン ランダム名前抽選器・参加者リスト',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'オンラインで素早く、安全に、そして完全に透明にランダム抽選を行う方法をお探しですか？弊社の無料の<strong>名前抽選器</strong>は、数秒でランダムに当選者を選ぶための究極のソリューションです。シンプルで視覚的、かつ効果的に設計されており、デジタルの「公平な抽選」が必要なあらゆるシナリオに最適です。',
    },
    {
      type: 'paragraph',
      html: 'SNSのコンテスト管理、配信チャンネルでの大規模な抽選、あるいは今日のゴミ出し担当を決める際でも、弊社のランダムセレクターは最新の暗号化アルゴリズムにより完全な公平性を保証します。<strong>操作なし、バイアスなし、純粋なランダム性のみ。</strong>'
    },
    {
      type: 'title',
      text: '利用シーン',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'SNSプレゼントキャンペーン',
          description: 'Instagram、Twitter（X）、Facebookのコンテストに最適です。コメントから名前をコピーして貼り付けるだけで、公平な当選者を選べます。ツールは自動的に重複を削除します。',
        },
        {
          title: 'Twitch / YouTube 配信',
          description: 'スムーズなアニメーションと統合されたサウンドを備えた「スタジオモード」により、OBSで画面を直接共有し、ライブで当選者を選びながら視聴者にエキサイティングなビジュアルショーを提供できます。',
        },
        {
          title: 'クラスやチームのアクティビティ',
          description: '教師やチームリーダーは、ランダムなグループ作り、最初の発表者の決定、タスクのランダムな割り当てなどに使用でき、ひいきのない完全な透明性を確保できます。',
        },
        {
          title: 'シークレットサンタやイベント',
          description: '家族のイベント、オフィスの抽選、シークレットサンタなどを、紙や複雑な段取りなしに名前を即座にランダムに選ぶことで簡素化できます。',
        },
      ],
    },
    {
      type: 'title',
      text: 'このツールの特徴',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>真の暗号化：</strong> 脆弱な疑似乱数生成器ではなく、ブラウザのWeb Crypto API（W3C標準）を使用しています。すべての抽選は数学的に公平です。',
        '<strong>保存なし：</strong> データがブラウザから送信されることはありません。リストの販売、プロファイリング、データの保存などは一切行いません。純粋なローカル処理です。',
        '<strong>視覚的なデザイン：</strong> シネマモードとアニメーションにより、すべての抽選が思い出に残るイベントになります。OBSキャプチャやライブ配信に最適です。',
        '<strong>重複処理：</strong> 繰り返された名前やバリエーション（余分なスペース、大文字小文字など）を自動的に検出し、実在する一人が一回だけカウントされるようにします。',
      ],
    },
    {
      type: 'title',
      text: '抽選器の使い方ステップバイステップ',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>ステップ1 - 参加者を入力：</strong> メインのテキストボックスに名前のリストを貼り付けます。ツールは改行ごとに異なる参加者として自動的に検出します。重複がありますか？問題ありません。ツールが削除します。',
        '<strong>ステップ2 - カスタマイズ：</strong> 設定タブでは、緊張感を高めるカウントダウン、お祝いのコンフェッティ（紙吹雪）効果、特定の名前を除外する「ブラックリスト」を有効にできます。',
        '<strong>ステップ3 - 抽選！</strong> メインボタンをクリックすると、エンジンが暗号的に安全なランダムな選択を生成します。当選者は明確かつ印象的に表示されます。',
      ],
    },
    {
      type: 'title',
      text: '重み付けエントリー：特定の参加者を有利にする',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最も忠実なサブスクライバー（登録者）に報いたり、特定の参加者にチャンスを増やしたりしたいですか？弊社の<strong>重み付けエントリー</strong>システムはユニークで、名前を何度も書くことなく、任意の名前に「重み」や倍率を割り当てることができます。',
    },
    {
      type: 'tip',
      title: '名前に重みを割り当てる方法',
      html: '<p>アスタリスク（*）または「x」の後に参加数を入力します。例：</p><ul><li><strong>"田中 * 5"</strong> - 田中さんは5人分として参加します</li><li><strong>"佐藤 x 10"</strong> - 佐藤さんは当選確率が10倍になります</li><li><strong>"鈴木"</strong> - 記号なし = 通常の1エントリー</li></ul><p>これは、VIPサブスクライバーや特定のユーザーを優遇したい抽選に最適です。</p>',
    },
    {
      type: 'title',
      text: '完全なプライバシーとセキュリティ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '他のオンラインツールとは異なり、<strong>弊社はお客様のデータを保存しません</strong>。名前の処理や抽選の実行はすべてお客様自身のブラウザ内でローカルに行われます。参加者リストがネットワーク経由で送信されたり、外部サーバーに保存されたりすることはありません。',
    },
    {
      type: 'paragraph',
      html: '<strong>これはどういう意味ですか？</strong> 参加者リストはあなただけのものです。タブを閉じるとデータは消えます。トラッキングクッキー、ユーザープロフィール、中央データベースはありません。あなたと抽選の参加者に最大限のプライバシーを保証します。',
    },
    {
      type: 'title',
      text: '数学的な透明性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '「結果が操作されているのではないか？」と疑問に思う方がいるかもしれません。答えは簡単です。<strong>操作は不可能です。</strong> 抽選コードは決定的かつ暗号的です。隠された変数や「裏での操作」はありません。',
    },
    {
      type: 'paragraph',
      html: '各当選者は、真の暗号化エントロピーを使用して、入力されたリストにフィッシャー–イェーツのシャッフル アルゴリズムを適用した直接の結果です。プロセスを監査したい場合は、コードがGitHubで公開されています。',
    },
  ],
  ui: {
    faqTitle: 'よくある質問',
    bibliographyTitle: '技術リファレンス',
    title: 'ランダム抽選',
    totalParticipants: 'ユニーク参加者数',
    ready: '準備完了',
    participants: '参加者',
    settings: '設定',
    importFile: 'ファイルをインポート',
    clearAll: 'すべてクリア',
    placeholder: 'ここに名前を入力または貼り付けてください...\n田中太郎\n山田花子\n@twitch_user',
    onePerLine: '1行に1参加者',
    lines: '行',
    filters: 'フィルター',
    allowDuplicates: '重複を許可',
    winnerCount: '当選者数',
    autoRemove: '当選者を自動削除',
    blacklist: 'ブラックリスト（除外）',
    blacklistPlaceholder: '禁止する名前（1行に1つ）...',
    blacklistInfo: 'これらのユーザーは抽選に参加しません。',
    sceneEffects: 'シーンエフェクト',
    countdown: 'カウントダウン（3秒）',
    confetti: 'お祝いの紙吹雪',
    zenMode: 'ゼンモード（パネルを隠す）',
    waitingParticipants: '参加者を待機中...',
    winner: '当選者',
    reroll: '再抽選',
    history: 'このセッションの履歴',
    noWinnersYet: 'まだ当選者はいません...',
    startGiveaway: '抽選を開始',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
