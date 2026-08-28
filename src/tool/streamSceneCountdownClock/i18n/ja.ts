import { makeContent } from './locale-factory';

export const content = makeContent({
  language: 'ja',
  slug: 'stream-scene-countdown-clock',
  title: '配信用シーンカウントダウン',
  description: '配信開始前、BRB、レイド、休憩で使える、配信者向けのシーン用カウントダウンを作成します。',
  ui: {
    sceneLabel: '準備しているシーンは？', sceneBrb: 'BRB', sceneStarting: 'まもなく開始', sceneRaid: 'レイド', sceneIntermission: '休憩', sceneTitleLabel: 'タイマーの上に何を表示しますか？', sceneTitlePlaceholder: 'まもなく開始', designLabel: 'シーンの雰囲気は？', designAurora: 'オーロラの霞', designType: 'キネティック文字', designPulse: '脈動する光', designGlitch: 'グリッチ信号', designSunset: 'サンセットフレア', accentColorLabel: 'アクセントカラー', glowColorLabel: 'グローカラー', messageLabel: '視聴者に伝えることは？', messagePlaceholder: '5分後に戻ります', durationLabel: '必要な時間は？', duration60: '1分', duration300: '5分', duration600: '10分', durationCustom: 'カスタム', secondsLabel: '秒', startLabel: 'この合図をいつ始めますか？', startNow: '今すぐ開始', scheduleTime: '時刻を予約', timeLabel: '現地時刻で何時に開始しますか？', startAction: '合図をオンエア', focusAction: 'シーンを表示', exitFocusAction: 'シーン表示を終了', resetAction: '合図をリセット', flowText: 'あなたが配信者です。シーンと必要な時間を選び、合図をオンエアします。', obsTitle: 'このシーンをOBSに設定', obsText: 'リンクをコピーし、OBSでブラウザソースを追加して貼り付けます。STREAMINGを付けると、操作部分のない全画面シーンが自動で開きます。', obsStepCopy: 'リンクをコピー', obsStepAdd: 'OBSにブラウザソースを追加', obsStepPaste: '貼り付けてキャンバスサイズを合わせる', copyUrlAction: 'OBSリンクをコピー', copiedUrlText: 'OBSリンクをコピーしました', streamUrlAria: '生成されたOBSストリーミングURL', previewTitle: 'シーンのデザインを選択', previewHint: 'プレビューをクリックして選択', previewAria: 'シーンデザインのプレビュー', stageEyebrow: '配信スレート', stageCaption: '次のシーンの準備ができました', readyBadge: '準備完了', waitingBadge: '待機中', liveBadge: 'ライブ合図', endedBadge: '終了', readyText: 'プレビューを確認し、シーンの準備ができたら合図を開始します。', waitingText: '予約した現地時刻になるとライブカウントダウンが始まります。', liveText: 'シーン切り替えの準備ができるまで、この画面を表示します。', endedText: '合図が終了しました。リセットするか、新しいシーンを設定します。', remainingLabel: 'シーンの残り時間', startTimeLabel: '開始', endTimeLabel: '終了', progressLabel: 'シーンの進行状況', assumptionTitle: '時間について', assumptionText: '予約時刻は端末の時計を使います。タイマーは視覚的な合図で、OBS、Twitch、チャット、エンコーダーを同期しません。', warningTitle: 'シーンの合図として使用', warningText: 'スリープ中のタブ、端末時刻の変更、配信の遅延により、表示時刻と実際の配信がずれることがあります。切り替え前にライブシーンを確認してください。', invalidTime: '現地時刻をHH:MM形式で入力してください。', clockAria: 'カウントダウンの残り時間', statusAria: 'カウントダウンの状態',
  },
  faq: [
    { question: 'このカウントダウンはOBSやTwitchに接続しますか？', answer: 'いいえ。単独で動くタイマーで、OBS、Twitch、チャット、配信サーバーを操作しません。シーンを表示で画面いっぱいにして、ブラウザソースとして取り込めます。' },
    { question: 'OBSで直接カウントダウンを使うには？', answer: 'ストリーミング指定と設定を付けて、ツールのURLをOBSのブラウザソースに追加します。例は ?STREAMING&scene=starting&duration=300&design=aurora&title=まもなく%20開始 です。操作部分が消え、ソースの領域いっぱいに表示されます。' },
    { question: '開始時刻を予約するとどうなりますか？', answer: '選択した現地時刻まで待機し、その後シーンの時間をカウントします。過ぎた時刻は翌日の次の発生時刻として扱います。' },
    { question: '自由なメッセージを使えますか？', answer: 'はい。配信者として、戻る時刻、次の予定、レイドの案内など、視聴者に見せたい短い合図を書けます。' },
    { question: 'シーンプリセットは何を変えますか？', answer: '配信中の場面に名前を付け、シーンを一目で分かりやすくします。タイマーの計算、時間、配信サービスとの接続は変わりません。' },
    { question: '終了時刻は正確ですか？', answer: '端末の時計と入力した時間から計算します。ブラウザのスリープや時刻変更で表示更新がずれることがあるため、配信同期の保証ではなく準備用の目安です。' },
  ],
  howTo: [
    { name: 'シーンを選ぶ', text: 'まもなく開始、BRB、レイド、休憩から、視聴者に見せる場面を選びます。' },
    { name: '配信者の合図を書く', text: '次のシーンを準備している間に視聴者が読む短いメッセージを入力します。' },
    { name: '時間または時刻を設定', text: 'よく使う時間を選ぶか自由に入力します。すぐ始めるか、現地時刻を予約できます。' },
    { name: '状態を確認', text: '大きな時計と状態ラベルを見て、シーンを切り替えるタイミングを判断します。' },
  ],
  seo: [
    { type: 'title', text: '一目で読める配信シーンの合図を作る', level: 2 },
    { type: 'paragraph', html: 'カウントダウンを使うと、まもなく開始、BRB、レイド、休憩のシーンに戻る時刻を示せます。何を準備しているか、必要な時間、視聴者への一言を画面に残します。' },
    { type: 'title', text: 'シーンタイマーが計算するもの', level: 3 },
    { type: 'list', items: ['<strong>すぐ始める合図:</strong> オンエアした瞬間から選んだ時間を数えます。', '<strong>予約した合図:</strong> 現地時刻まで待ってからシーンの時間を始めます。', '<strong>シーンの状態:</strong> 準備完了、待機、ライブ、終了を分けて次の行動を示します。'] },
    { type: 'title', text: 'シーンの時間を選ぶ方法', level: 3 },
    { type: 'paragraph', html: 'ソース切り替えや短い中断には短い時間を使います。ゲスト、ゲーム、機材の準備には長めの時間を選びます。メッセージには、時計だけでは分からない理由や次の予定を書きましょう。' },
    { type: 'tip', title: '戻る内容を具体的にする', html: '「すぐ戻ります」ではなく、「20時30分に決勝へ戻ります」や「レイドを準備中」と書くと、視聴者は待ち時間と理由を理解できます。' },
    { type: 'title', text: 'タイマーがオフラインで動く理由', level: 3 },
    { type: 'paragraph', html: 'チャンネルや配信ソフトへのアクセスは必要ありません。文字と時間はブラウザ内で処理されるため、準備用のシーンとして使えます。配信前にOBSでソースの表示とシーン切り替えを確認してください。' },
    { type: 'title', text: '完成したシーンをOBSへ送る', level: 3 },
    { type: 'paragraph', html: '<strong>OBSリンクをコピー</strong>を押し、配信に使うシーンへブラウザソースを追加します。リンクを貼り、キャンバス解像度を合わせます。<code>?STREAMING</code>を付けると、操作部分のない全画面シーンが自動で始まります。' },
    { type: 'title', text: '配信に合うデザインを選ぶ', level: 3 },
    { type: 'paragraph', html: 'オーロラの霞は空気感のあるリング、キネティック文字は大きな数字、脈動する光は広がる波、グリッチ信号は放送らしい鋭さ、サンセットフレアは暖かな水平線を作ります。プレビューを選び、アクセントと光の色も調整できます。' },
    { type: 'list', items: ['<strong>シーン:</strong> まもなく開始、BRB、レイド、休憩を表示します。', '<strong>タイトル:</strong> 初期の見出しを自分の言葉に置き換えます。', '<strong>メッセージ:</strong> 視聴者に読んでほしい補足を表示します。', '<strong>時間と時刻:</strong> シーンの開始と表示時間を決めます。'] },
    { type: 'paragraph', html: 'URLを自分で作る場合は <code>?STREAMING&amp;scene=raid&amp;title=レイド%20準備中&amp;design=pulse</code> のようにします。生成したリンクには時間、メッセージ、色が自動で含まれます。' },
    { type: 'title', text: '終了時刻を準備の目安として読む', level: 3 },
    { type: 'paragraph', html: '終了時刻は端末の時計と選択した時間から出した目安です。全員の画面に同時に届く保証ではありません。ゲストや接続、配信の切り替えが関わる場合は少し余裕を残してください。' },
  ],
});
