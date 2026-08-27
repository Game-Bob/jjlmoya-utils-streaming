import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'ja',
  slug: 'video-bitrate-storage-planner',
  title: '動画ビットレートとストレージ計画',
  description: '配信や録画に必要な動画ストレージ、フレーム時間、実用的なビットレートを見積もります。',
  ui: {
    presetLabel: 'シーンから始める', presetFast: '高速ウェブ配信', presetUpload: '通常のライブ', presetArchive: '4Kアーカイブ', resolutionLabel: '解像度', frameRateLabel: 'フレームレート', codecLabel: 'コーデック', bitrateLabel: '動画ビットレート', durationLabel: 'セッション時間', copiesLabel: '保存するコピー数', minutesLabel: '分', copiesShort: 'コピー', h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: 'コーデック効率は品質の読み取りを変えますが、ストレージ計算は変えません。', sceneLabel: '信号からストレージへ', signalSource: '映像', codecGate: 'エンコード', storageReel: 'ストレージ', qualityEstimate: '品質の目安', storageEstimate: '推定ストレージ', perCopy: '1コピー', allCopies: '全コピー', perHour: '1時間あたり', frameTime: 'フレーム時間', dataPerFrame: '1フレームのデータ', comparisonLabel: 'ストレージ比較', lean: '軽量', balanced: 'バランス', crisp: '高精細', qualityLean: '軽量な信号', qualityBalanced: 'バランスした信号', qualityStrong: '細部に強い', qualityExcellent: '余裕が大きい', qualityAggressive: '強い圧縮', qualityGuidance: '設定を比べるための視覚的な目安です。', capacityLight: '軽いストレージ負荷', capacityMedium: '中程度のストレージ負荷', capacityHeavy: '大きなストレージ負荷', capacityNote: '容量バッジは上に表示されたコピーの合計を基にします。', reset: '値をリセット', localNote: 'このブラウザ内で動作します。アップロードはありません。', assumptionTitle: '計算の前提', assumptionText: 'ストレージは10進ギガバイトと入力した動画ビットレートで計算します。音声、コンテナのオーバーヘッド、可変ビットレートのピーク、ファイルシステムの余白は含みません。', warningText: '品質レベルは計画用の目安です。動き、粒状感、キーフレーム、エンコーダ設定、再エンコード、ネットワーク余裕によって実際の結果は変わります。', readyText: '値を変えると信号が描き直されます。', calculateAria: '動画計画を更新',
  },
  faq: [
    { question: 'この計画ツールは動画をアップロードまたは検査しますか？', answer: 'いいえ。ブラウザに入力した値だけを使います。ファイルのアップロード、カメラの検査、配信サービスへの問い合わせは行いません。' },
    { question: 'ストレージはどのように計算されますか？', answer: 'ビットレートに時間を掛け、8で割ってビットをバイトに変換します。10進ギガバイトで表示し、コピー数を掛けます。' },
    { question: '品質の目安は何を意味しますか？', answer: 'ピクセル数、毎秒フレーム数、ビットレート、コーデック効率の大まかな係数による目安です。動きやエンコーダ設定も影響するため、画質を保証するものではありません。' },
    { question: '解像度やフレームレートで同じビットレートの意味が変わるのはなぜですか？', answer: '高い解像度は多くのピクセルを持ち、高いフレームレートは毎秒より多くのフレームを送ります。同じビットレートでより多くの情報を扱うことになります。' },
    { question: '結果を配信サービスの必須条件として使えますか？', answer: '容量計画と設定比較に使ってください。サービスの条件は変わるため、配信先の最新のエンコーダー案内を確認し、ライブ配信には回線の余裕を残してください。' },
  ],
  howTo: [
    { name: '映像形式を選ぶ', text: '作成する配信や録画に合う解像度とフレームレートを選択します。' },
    { name: 'エンコード信号を設定する', text: 'コーデックを選び、動画ビットレートをMbpsで入力します。迷ったらプリセットから始めます。' },
    { name: 'セッションを指定する', text: '時間を分で入力し、保存、編集、納品するコピー数を指定します。' },
    { name: 'トレードオフを読む', text: '軽量、バランス、高精細を比べ、録画前にストレージの変化を確認します。' },
  ],
  seo: [
    { type: 'title', text: '配信や録画の前に動画ストレージを見積もる', level: 2 },
    { type: 'paragraph', html: '動画ビットレート計算ツールは、録画セッションに現実的なストレージ計画が必要なときに役立ちます。ビットレート、時間、コピー数を入力し、同じ映像形式で3つの信号を比較できます。' },
    { type: 'title', text: 'この計画ツールが計算するもの', level: 3 },
    { type: 'list', items: ['<strong>ストレージ:</strong> ビットレートと時間を掛け、ビットから10進ギガバイトに変換してコピー数を掛けます。', '<strong>フレーム時間:</strong> 選択したFPSで1フレームに使えるミリ秒と、フレームごとのデータ量を示します。', '<strong>品質の目安:</strong> コーデック効率を考慮したフレームあたりのピクセル比較です。'] },
    { type: 'title', text: '解像度とFPSがトレードオフを変える仕組み', level: 3 },
    { type: 'paragraph', html: '解像度が上がると1フレームのピクセルが増え、FPSが上がると毎秒のフレーム数が増えます。ビットレートを固定すると1フレームに配分できるデータが減り、圧縮の負荷が高まります。' },
    { type: 'tip', title: 'ライブ配信には余裕を残す', html: '入力した動画ビットレートを回線容量の全てと考えないでください。音声、プロトコル、ネットワーク変動のための余裕を残し、実際の動きに近い映像でテストします。' },
    { type: 'title', text: '最終設定は配信先の案内で確認する', level: 3 },
    { type: 'paragraph', html: 'このツールは特定のサービスに依存しません。YouTubeは解像度とフレームレート別にビットレートの範囲を公開しています。ここで作ったシナリオを最新の配信先ルールで確認してください。' },
    { type: 'title', text: 'ストレージ結果が推定値である理由', level: 3 },
    { type: 'paragraph', html: '公称ビットレートだけでは完成ファイルの全バイトを表せません。可変ビットレート、音声、コンテナ情報、キーフレーム、再エンコード、単位系によって最終サイズは変わります。' },
  ],
});
