import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'ko',
  slug: 'video-bitrate-storage-planner',
  title: '동영상 비트레이트 및 저장 공간 플래너',
  description: '스트리밍이나 녹화에 필요한 동영상 저장 공간, 프레임 시간, 실용적인 비트레이트를 추정합니다.',
  ui: {
    presetLabel: '장면으로 시작', presetFast: '빠른 웹 스트림', presetUpload: '일상 라이브', presetArchive: '4K 아카이브', resolutionLabel: '해상도', frameRateLabel: '프레임 속도', codecLabel: '코덱', bitrateLabel: '동영상 비트레이트', durationLabel: '세션 길이', copiesLabel: '보관할 사본', minutesLabel: '분', copiesShort: '사본', h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: '코덱 효율은 품질 판단을 바꾸지만 저장 공간 계산은 바꾸지 않습니다.', sceneLabel: '신호에서 저장 공간까지', signalSource: '화면', codecGate: '인코딩', storageReel: '저장 공간', qualityEstimate: '품질 판단', storageEstimate: '예상 저장 공간', perCopy: '한 사본', allCopies: '전체 사본', perHour: '시간당', frameTime: '프레임 시간', dataPerFrame: '프레임당 데이터', comparisonLabel: '저장 공간 비교', lean: '가벼움', balanced: '균형', crisp: '선명함', qualityLean: '가볍고 절약됨', qualityBalanced: '균형 잡힌 신호', qualityStrong: '세부 묘사 강함', qualityExcellent: '여유가 큼', qualityAggressive: '강한 압축', qualityGuidance: '설정을 비교하기 위한 시각적 추정입니다.', capacityLight: '낮은 저장 공간 부담', capacityMedium: '중간 저장 공간 부담', capacityHeavy: '높은 저장 공간 부담', capacityNote: '용량 상태는 위에 표시된 사본 전체를 기준으로 합니다.', reset: '값 초기화', localNote: '이 브라우저에서 로컬로 실행됩니다. 업로드하지 않습니다.', assumptionTitle: '가정 읽기', assumptionText: '저장 공간은 10진 기가바이트와 입력한 동영상 비트레이트를 사용합니다. 오디오, 컨테이너 오버헤드, 가변 비트레이트 피크, 파일 시스템 여유 공간은 더하지 않습니다.', warningText: '품질 단계는 계획을 위한 기준입니다. 움직임, 그레인, 키프레임, 인코더 프리셋, 플랫폼 트랜스코딩, 네트워크 여유에 따라 실제 결과가 달라집니다.', readyText: '값을 바꾸면 신호가 다시 그려집니다.', calculateAria: '동영상 계획 업데이트',
  },
  faq: [
    { question: '이 플래너가 내 동영상을 업로드하거나 검사하나요?', answer: '아니요. 브라우저에 입력한 값만 사용합니다. 파일을 업로드하거나 카메라를 검사하거나 스트리밍 서비스에 요청하지 않습니다.' },
    { question: '저장 공간은 어떻게 계산하나요?', answer: '비트레이트에 시간을 곱한 뒤 8로 나누어 비트를 바이트로 바꿉니다. 10진 기가바이트로 표시하고 사본 수를 곱합니다.' },
    { question: '품질 판단은 무엇을 의미하나요?', answer: '픽셀 수, 초당 프레임 수, 비트레이트, 넓은 코덱 효율 계수를 기반으로 한 기준입니다. 움직임과 인코더 설정도 중요하므로 화질을 보장하지 않습니다.' },
    { question: '해상도나 프레임 속도에 따라 같은 비트레이트의 의미가 달라지는 이유는 무엇인가요?', answer: '해상도가 높으면 픽셀이 많아지고 프레임 속도가 높으면 매초 더 많은 프레임을 보냅니다. 같은 비트레이트로 더 많은 화면 정보를 처리해야 합니다.' },
    { question: '결과를 플랫폼 요구 사항으로 사용할 수 있나요?', answer: '용량을 계획하고 시나리오를 비교하는 데 사용하세요. 플랫폼 요구 사항은 바뀔 수 있으므로 최신 인코더 안내를 확인하고 라이브 스트림에는 업로드 여유를 두세요.' },
  ],
  howTo: [
    { name: '화면 형식 선택', text: '만들려는 스트림이나 녹화에 맞는 해상도와 프레임 속도를 선택합니다.' },
    { name: '인코딩 신호 설정', text: '코덱을 선택하고 동영상 비트레이트를 Mbps로 입력합니다. 프리셋으로 시작해도 됩니다.' },
    { name: '세션 설명', text: '시간을 분 단위로 입력하고 보관, 편집, 전달할 사본 수를 입력합니다.' },
    { name: '트레이드오프 확인', text: '가벼움, 균형, 선명함을 비교해 녹화 전에 저장 공간 변화를 확인합니다.' },
  ],
  seo: [
    { type: 'title', text: '스트리밍이나 녹화 전에 동영상 저장 공간 추정하기', level: 2 },
    { type: 'paragraph', html: '동영상 비트레이트 계산기는 녹화 세션에 현실적인 저장 공간 계획이 필요할 때 유용합니다. 비트레이트, 시간, 사본 수를 입력하고 같은 화면 형식에서 세 가지 신호 단계를 비교하세요.' },
    { type: 'title', text: '플래너가 계산하는 항목', level: 3 },
    { type: 'list', items: ['<strong>저장 공간:</strong> 비트레이트와 시간을 곱하고 비트에서 10진 기가바이트로 바꾼 뒤 사본 수를 곱합니다.', '<strong>프레임 시간:</strong> 선택한 FPS에서 프레임 하나에 사용할 수 있는 밀리초와 프레임별 데이터 추정치입니다.', '<strong>품질 판단:</strong> 코덱 효율 계수를 반영한 프레임당 픽셀 비교입니다.'] },
    { type: 'title', text: '해상도와 FPS가 트레이드오프를 바꾸는 방식', level: 3 },
    { type: 'paragraph', html: '해상도는 프레임마다 픽셀 수를 늘리고 FPS는 초당 프레임 수를 늘립니다. 비트레이트가 고정되면 각 프레임에 배분되는 데이터가 줄어 압축 부담이 커집니다.' },
    { type: 'tip', title: '라이브 스트림에 여유 두기', html: '동영상 비트레이트를 회선 전체 용량으로 보지 마세요. 오디오, 프로토콜, 네트워크 변동을 위한 공간을 남기고 실제 장면과 비슷한 움직임으로 테스트하세요.' },
    { type: 'title', text: '최종 설정은 플랫폼 안내로 확인하기', level: 3 },
    { type: 'paragraph', html: '이 플래너는 특정 플랫폼에 종속되지 않습니다. YouTube는 해상도와 프레임 속도별 비트레이트 범위를 공개합니다. 여기서 만든 시나리오를 최신 목적지 규칙으로 확인하세요.' },
    { type: 'title', text: '저장 공간 결과가 추정치인 이유', level: 3 },
    { type: 'paragraph', html: '명목 비트레이트만으로 완성 파일의 모든 바이트를 알 수는 없습니다. 가변 비트레이트, 오디오, 컨테이너 메타데이터, 키프레임, 트랜스코딩, 시스템 단위가 최종 크기를 바꿀 수 있습니다.' },
  ],
});
