import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: '広告休憩はどのように配置されますか？', answer: '選択した間隔とコンテンツの分数を比較し、その後にある最初のセグメント境界へ休憩を配置します。セグメントの途中で切ることはありません。' },
  { question: 'コンテンツブロックはどの形式で入力しますか？', answer: '「名前 | 分数」の形式で1行に1ブロックを入力します。例は Opening | 15 です。並び順が進行表になります。' },
  { question: '休憩が間隔より後になるのはなぜですか？', answer: 'この計算ではセグメントの境界を優先します。長いセグメントが間隔を越えた場合、次の境界へ移動し、そのずれを表示します。' },
  { question: '特定の配信プラットフォームの広告ルールに従いますか？', answer: 'いいえ。入力した間隔、休憩時間、番組構成による計画モデルです。配信先、契約、地域の最新ルールを確認してください。' },
  { question: '終了時刻には休憩が含まれますか？', answer: 'はい。コンテンツ時間と広告時間は分けて表示しますが、終了時刻には予定した休憩をすべて加えます。' },
];
const howTo = [
  { name: '開始時刻と休憩ルールを設定する', text: '開始時刻、予定コンテンツ分数、休憩間隔、各休憩の長さを選びます。' },
  { name: '進行表を入力する', text: '各ブロックを「名前 | 分数」で入力します。自然に止められる場所に境界を置きます。' },
  { name: '時間レールを読む', text: '休憩の位置、追加される時間、長いブロックによるずれを確認します。' },
  { name: '制作向けの進行表をコピーする', text: '警告を確認してから、プロデューサーやモデレーター向けに時刻リストをコピーします。' },
];
const seo: SEOSection[] = [
  { type: 'title', text: '番組を切らない休憩計画を作る', level: 2 },
  { type: 'paragraph', html: 'ライブ配信にはコンテンツの分数と、休憩を含む実際の時計という2つの時間があります。この計算機は進行表、間隔、休憩時間から両方を見える形にし、終了時刻を算出します。' },
  { type: 'paragraph', html: 'コンテンツの時計が間隔に達すると、次に使えるセグメント境界へ休憩を置きます。配信前にブロックを移動または短縮するか、ずれを受け入れるか判断できます。' },
  { type: 'title', text: 'セグメント境界を制作の合図にする', level: 2 },
  { type: 'paragraph', html: '挨拶の後、話題の切り替え、試合、予定した中断は休憩に向いています。長い1ブロックには安全な場所がないため、警告が編集上の判断を示します。' },
  { type: 'list', items: ['長いインタビューを挨拶、会話、質問に分ける。', '最後の挨拶は最後のブロックにする。', '広告時間を含む終了時刻とコンテンツ分数を比べる。', '休憩を実行する担当者に進行表を渡す。'] },
  { type: 'title', text: '3つの時間シグナルを読む', level: 2 },
  { type: 'table', headers: ['信号', '意味', '行動'], rows: [['コンテンツ', '進行表の分数', '約束した番組時間に収まるか確認する'], ['広告時間', '休憩で追加される分数', '出演者と制作に予定を伝える'], ['放送終了', '開始時刻とコンテンツと休憩の合計', 'スタジオや引き継ぎ時間を確保する']] },
  { type: 'tip', title: 'プラットフォームの保証ではありません', html: '結果はローカルな進行表です。広告を起動せず、視聴者への表示や契約、広告規制も保証しません。配信先の最新条件を確認してください。' },
  { type: 'title', text: 'コントロールルームで使える計画にする', level: 2 },
  { type: 'paragraph', html: '警告を確認してから計画をコピーします。時刻はシーンの準備、モデレーターへの連絡、重要な場面の保護に役立ちます。休憩がない場合は、意味のある境界を追加します。' },
  { type: 'tip', title: 'リハーサル後に実時計を確認する', html: '会話や技術的な切り替えは長くなりがちです。計算結果を基準にし、リハーサル後に各ブロックの分数を更新してください。' },
];
export const content = makeContent({
  slug: 'stream-ad-break-schedule-calculator',
  title: 'ライブ配信の広告休憩スケジュール計算機',
  description: 'ライブ配信の進行表から広告休憩の時刻表を作り、実際の終了時刻を確認します。',
  ui: {
    startTimeLabel: '配信開始時刻', startTimeHint: '配信が始まる時刻', streamDurationLabel: '予定コンテンツ分数', streamDurationHint: '休憩を除く番組時間', cadenceLabel: '休憩間隔', cadenceHint: 'このコンテンツ分数の後に休憩を置く', breakLengthLabel: '休憩時間', breakLengthHint: '配信の時計に加える分数', segmentsLabel: '進行表', segmentsHint: '1行に1ブロック: 名前 | 分数', presetsLabel: '番組の形から始める', presetQuick: '2時間配信', presetLong: '長時間イベント', presetInterview: 'インタビュー配信', scheduleLabel: '放送時間レール', scheduleHint: '休憩は間隔の後にある最初の境界へ配置されます。', contentTotalLabel: 'コンテンツ', adsTotalLabel: '広告時間', plannedEndLabel: '放送終了', breaksLabel: '休憩', stateReady: '境界を利用できます', stateWarning: '時間のずれを確認', stateEmpty: '進行表を追加', stateReadyText: 'この時刻表を制作向けの初稿として渡せます。', stateWarningText: '無効な行があるか、間隔が自然な境界に当たりません。', stateEmptyText: '2つ以上のブロックを追加すると、その間に休憩を置けます。', copyLabel: '進行表をコピー', resetLabel: '例を復元', copiedLabel: '進行表をコピーしました', copyErrorLabel: 'コピーがブロックされました。時刻表を選択して手動でコピーしてください。', segmentKind: 'コンテンツ', breakKind: '広告休憩', minutesShort: '分', noEntriesText: 'ここに時間レールが表示されます。', invalidLineText: '行 {lines} を確認してください。名前 | 分数を使います。', plannedMismatchText: '進行表は予定時間から {difference} ずれています。', boundaryWarningText: '1つのブロック内で間隔に達したため休憩はありません。境界を追加するかブロックを分割してください。'
  }, seo, faq, howTo,
});
