import { makeContent } from './locale-factory';

export const content = makeContent({
  language: 'ko',
  slug: 'stream-scene-countdown-clock',
  title: '스트리밍 장면 카운트다운',
  description: '방송 시작 전, BRB, 레이드, 휴식 장면에 사용할 스트리머용 카운트다운 화면을 만듭니다.',
  ui: {
    sceneLabel: '어떤 장면을 준비하고 있나요?', sceneBrb: 'BRB', sceneStarting: '곧 시작', sceneRaid: '레이드', sceneIntermission: '휴식', sceneTitleLabel: '타이머 위에 무엇을 표시할까요?', sceneTitlePlaceholder: '곧 시작', designLabel: '장면의 분위기는 어떤가요?', designAurora: '오로라 안개', designType: '키네틱 타이포', designPulse: '펄스 블룸', designGlitch: '글리치 신호', designSunset: '선셋 플레어', accentColorLabel: '포인트 색상', glowColorLabel: '글로우 색상', messageLabel: '시청자에게 무엇을 알릴까요?', messagePlaceholder: '5분 후 돌아옵니다', durationLabel: '얼마나 시간이 필요한가요?', duration60: '1분', duration300: '5분', duration600: '10분', durationCustom: '직접 입력', secondsLabel: '초', startLabel: '이 안내를 언제 시작할까요?', startNow: '지금 시작', scheduleTime: '시간 예약', timeLabel: '현지 시간으로 언제 시작할까요?', startAction: '내 안내를 송출', focusAction: '내 장면 보기', exitFocusAction: '장면 보기 종료', resetAction: '안내 초기화', flowText: '당신이 스트리머입니다. 상황과 필요한 시간을 선택한 뒤 안내를 송출하세요.', obsTitle: '이 장면을 OBS에 넣기', obsText: '링크를 복사하고 OBS에서 브라우저 소스를 추가한 뒤 붙여넣으세요. STREAMING을 사용하면 컨트롤이 없는 전체 화면 장면이 자동으로 열립니다.', obsStepCopy: '이 링크 복사', obsStepAdd: 'OBS에서 브라우저 소스 추가', obsStepPaste: '붙여넣고 캔버스 크기 맞추기', copyUrlAction: 'OBS 링크 복사', copiedUrlText: 'OBS 링크를 복사했습니다', streamUrlAria: '생성된 OBS 스트리밍 URL', previewTitle: '장면 디자인 선택', previewHint: '미리보기를 클릭해 사용', previewAria: '장면 디자인 미리보기', stageEyebrow: '방송 화면', stageCaption: '다음 장면이 준비되었습니다', readyBadge: '준비됨', waitingBadge: '대기 중', liveBadge: '라이브 안내', endedBadge: '종료됨', readyText: '화면을 확인하고 장면이 준비되면 안내를 시작하세요.', waitingText: '예약한 현지 시간이 되면 라이브 카운트다운이 시작됩니다.', liveText: '장면 전환을 준비하는 동안 이 화면을 표시하세요.', endedText: '안내가 끝났습니다. 초기화하거나 새 장면을 준비하세요.', remainingLabel: '장면에 남은 시간', startTimeLabel: '시작', endTimeLabel: '종료', progressLabel: '장면 진행률', assumptionTitle: '시간 안내', assumptionText: '예약 시간은 기기의 시계를 사용합니다. 이 타이머는 시각적 안내이며 OBS, Twitch, 채팅 또는 인코더를 동기화하지 않습니다.', warningTitle: '장면 안내로 사용하세요', warningText: '절전 상태의 탭, 시스템 시계 변경 또는 방송 지연으로 화면의 시간이 실제 방송과 달라질 수 있습니다. 전환하기 전에 라이브 장면을 확인하세요.', invalidTime: '현지 시간을 HH:MM 형식으로 입력하세요.', clockAria: '카운트다운 남은 시간', statusAria: '카운트다운 상태',
  },
  faq: [
    { question: '이 카운트다운은 OBS나 Twitch에 연결되나요?', answer: '아니요. 독립적으로 작동하는 타이머이며 OBS, Twitch, 채팅 또는 스트리밍 서버를 제어하지 않습니다. 내 장면 보기를 사용해 화면을 채운 뒤 브라우저 소스로 캡처하세요.' },
    { question: 'OBS에서 카운트다운을 바로 사용하려면 어떻게 하나요?', answer: '스트리밍 플래그와 설정을 포함한 도구 URL을 OBS 브라우저 소스에 추가하세요. 예시는 ?STREAMING&scene=starting&duration=300&design=aurora&title=곧%20시작 입니다. 컨트롤이 사라지고 소스 영역을 채웁니다.' },
    { question: '시작 시간을 예약하면 어떻게 되나요?', answer: '선택한 현지 시간까지 기다린 다음 장면의 시간을 카운트합니다. 이미 지난 시간은 다음 날의 다음 시각으로 처리됩니다.' },
    { question: '직접 작성한 메시지를 사용할 수 있나요?', answer: '네. 스트리머가 돌아올 시간, 다음 순서 또는 레이드 안내처럼 시청자에게 보여줄 짧은 메시지를 입력할 수 있습니다.' },
    { question: '장면 프리셋은 무엇을 바꾸나요?', answer: '방송의 순간에 이름을 붙여 장면을 한눈에 알아볼 수 있게 합니다. 타이머 계산, 시간, 플랫폼 연결은 바뀌지 않습니다.' },
    { question: '종료 시간은 정확한가요?', answer: '기기의 현지 시계와 입력한 시간으로 계산합니다. 브라우저 절전, 일시 정지된 탭 또는 시계 변경으로 표시 갱신이 달라질 수 있으므로 방송 동기화가 아닌 준비용 기준입니다.' },
  ],
  howTo: [
    { name: '장면 순간 선택', text: '곧 시작, BRB, 레이드 또는 휴식을 선택해 시청자에게 보일 순간을 표시합니다.' },
    { name: '스트리머 안내 작성', text: '다음 장면을 준비하는 동안 시청자가 읽을 짧은 메시지를 입력합니다.' },
    { name: '시간 또는 시각 설정', text: '자주 쓰는 시간을 고르거나 직접 입력합니다. 즉시 시작하거나 현지 시간을 예약할 수 있습니다.' },
    { name: '상태 확인', text: '큰 시계와 상태 배지를 보고 방송 장면을 바꿀 시점을 판단합니다.' },
  ],
  seo: [
    { type: 'title', text: '한눈에 읽히는 방송 장면 안내 만들기', level: 2 },
    { type: 'paragraph', html: '카운트다운은 곧 시작, BRB, 레이드 또는 휴식 장면에 돌아올 시점을 보여줍니다. 무엇을 준비하는지와 필요한 시간을 입력하고 큰 숫자를 화면에 남겨 두세요.' },
    { type: 'title', text: '장면 시계가 계산하는 것', level: 3 },
    { type: 'list', items: ['<strong>즉시 안내:</strong> 송출한 순간부터 선택한 시간을 셉니다.', '<strong>예약 안내:</strong> 현지 시간을 기다린 뒤 장면 시간을 시작합니다.', '<strong>장면 상태:</strong> 준비, 대기, 라이브, 종료를 나누어 다음 행동을 보여줍니다.'] },
    { type: 'title', text: '알맞은 장면 시간 고르기', level: 3 },
    { type: 'paragraph', html: '소스를 바꾸거나 짧은 문제를 해결할 때는 짧은 시간을 사용하세요. 게스트, 게임 또는 기술 재시작을 준비한다면 더 긴 시간이 좋습니다. 메시지는 시계만으로 알 수 없는 정보를 전달해야 합니다.' },
    { type: 'tip', title: '돌아올 내용을 구체적으로 쓰기', html: '일반적인 약속 대신 "20시 30분에 결승으로 돌아옵니다" 또는 "레이드 준비 중"처럼 다음 행동을 쓰세요. 시청자가 기다리는 시간과 이유를 이해할 수 있습니다.' },
    { type: 'title', text: '시계가 오프라인으로 작동하는 이유', level: 3 },
    { type: 'paragraph', html: '채널이나 방송 소프트웨어에 접근할 필요가 없습니다. 글자와 시간은 브라우저 안에서 처리되므로 준비용 장면으로 사용할 수 있습니다. 방송 전에는 OBS에서 소스 표시와 장면 전환을 확인하세요.' },
    { type: 'title', text: '완성된 장면을 OBS로 보내기', level: 3 },
    { type: 'paragraph', html: '<strong>OBS 링크 복사</strong>를 누르고 방송 장면에 브라우저 소스를 추가합니다. 링크를 붙여넣고 캔버스 해상도를 맞추세요. <code>?STREAMING</code>은 컨트롤 없는 깨끗한 전체 화면 장면을 자동으로 시작합니다.' },
    { type: 'title', text: '채널에 맞는 디자인 고르기', level: 3 },
    { type: 'paragraph', html: '오로라 안개는 분위기 있는 링, 키네틱 타이포는 큰 숫자, 펄스 블룸은 퍼지는 파동, 글리치 신호는 날카로운 방송 에너지, 선셋 플레어는 따뜻한 지평선을 만듭니다. 미리보기를 고른 뒤 색상도 조정하세요.' },
    { type: 'list', items: ['<strong>장면:</strong> 곧 시작, BRB, 레이드 또는 휴식을 표시합니다.', '<strong>제목:</strong> 기본 문구를 자신의 헤드라인으로 바꿉니다.', '<strong>메시지:</strong> 시청자가 읽을 보조 안내를 추가합니다.', '<strong>시간과 시각:</strong> 장면의 시작과 표시 시간을 정합니다.'] },
    { type: 'paragraph', html: 'URL을 직접 만들 때는 <code>?STREAMING&amp;scene=raid&amp;title=레이드%20준비%20중&amp;design=pulse</code>처럼 사용할 수 있습니다. 생성된 링크에는 시간, 메시지, 색상이 자동으로 들어갑니다.' },
    { type: 'title', text: '종료 시간을 준비 기준으로 읽기', level: 3 },
    { type: 'paragraph', html: '종료 시간은 기기 시계와 선택한 시간에서 계산한 기준입니다. 모든 시청자에게 같은 순간에 도착한다는 보장은 없습니다. 게스트, 연결 또는 방송 전환이 필요하다면 약간의 여유를 두세요.' },
  ],
});
