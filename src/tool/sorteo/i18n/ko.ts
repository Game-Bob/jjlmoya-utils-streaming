import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'giveaway';
const title = '방송용 랜덤 이름 추첨기';
const description =
  '이름 목록에서 무작위로 당첨자를 선택하세요. Twitch, YouTube 및 각종 이벤트를 위한 무료이며 빠르고 시각적인 추첨 도구입니다.';

const faqData = [
  {
    question: '이 추첨은 정말 무작위인가요?',
    answer:
      '네, 저희는 브라우저의 암호화 난수 알고리즘(Web Crypto API)을 사용하여 편향이나 조작 없이 각 참가자가 정확히 동일한 당첨 확률을 갖도록 보장합니다.',
  },
  {
    question: '이 추첨기를 Twitch나 YouTube에서 사용할 수 있나요?',
    answer:
      '물론입니다. 웹 기반 도구이므로 OBS로 창을 캡처하거나 화면을 직접 공유할 수 있습니다. 깔끔한 디자인과 애니메이션은 시청자가 추첨 과정을 투명하게 볼 수 있도록 설계되었습니다.',
  },
  {
    question: '한 사람이 두 번 참여하는 것을 어떻게 방지하나요?',
    answer:
      '이 도구에는 자동 "중복 정리" 기능이 있어 동일한 이름이나 공백의 미세한 차이가 있는 이름을 감지하여 실제 인원 한 명당 한 번만 계산되도록 합니다.',
  },
  {
    question: '한 번에 여러 명의 당첨자를 뽑을 수 있나요?',
    answer:
      '네, 버튼을 클릭하기 전에 원하는 당첨자 수를 설정할 수 있습니다. 도구는 당첨자 목록을 명확하게 표시하므로 라이브 방송 중에 이름을 언급하기 편리합니다.',
  },
  {
    question: '목록에 이름을 몇 명까지 추가할 수 있나요?',
    answer:
      '도구 자체에서 제한하는 엄격한 한도는 없습니다. 수천 명의 참가자 목록도 성능 저하 없이 처리할 수 있도록 엔진을 최적화했으므로 대규모 추첨에도 이상적입니다.',
  },
  {
    question: '제 데이터나 참가자 목록이 저장되나요?',
    answer:
      '아니요, 절대 저장되지 않습니다. 사용자의 개인정보가 최우선입니다. 모든 추첨 과정은 사용자의 웹 브라우저 내에서 로컬로 실행됩니다. 입력하신 이름은 저희 서버로 전송되거나 어떤 데이터베이스에도 저장되지 않습니다.',
  },
];

const howToData = [
  {
    name: '참가자 목록 준비하기',
    text: '채팅창, 엑셀, 또는 SNS에서 이름 목록을 복사하여 텍스트 상자에 붙여넣으세요.',
  },
  {
    name: '추첨 옵션 설정하기',
    text: '필요한 당첨자 수와 중복 이름 또는 빈 이름을 필터링할지 여부를 선택하세요.',
  },
  {
    name: '추첨 시작하기',
    text: '추첨 버튼을 클릭하세요. 당첨자가 발표되기 전까지 시각적 애니메이션이 긴장감을 유지해 줍니다.',
  },
  {
    name: '결과 발표하기',
    text: '당첨자의 이름을 복사하여 SNS나 방송 채팅창에 공유하세요.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 문서',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Fisher-Yates Shuffle 알고리즘',
      url: 'https://ko.wikipedia.org/wiki/%ED%94%BC%EC%85%94-%EC%9G%B4%EC%B8%A0_%EC%85%94%ED%94%8C',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: '온라인 랜덤 이름 추첨기 및 참가자 목록 관리',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '온라인에서 빠르고 안전하며 투명하게 랜덤 추첨을 진행하는 방법을 찾고 계신가요? 저희의 무료 <strong>이름 추첨기</strong>는 몇 초 만에 무작위로 당첨자를 뽑을 수 있는 궁극적인 해결책입니다. 단순하면서도 시각적이고 효과적으로 설계되어 디지털 "추첨의 손"이 필요한 모든 상황에 완벽합니다.',
    },
    {
      type: 'paragraph',
      html: 'SNS 이벤트 관리, 방송 채널에서의 대규모 이벤트, 또는 단순히 오늘 누가 쓰레기를 버릴지 정할 때도 저희의 랜덤 추첨기는 현대적인 암호화 알고리즘 덕분에 완전한 공정성을 보장합니다. <strong>조작이나 편향 없이 순수한 무작위성만을 제공합니다.</strong>'
    },
    {
      type: 'title',
      text: '활용 사례',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '소셜 미디어 이벤트',
          description: 'Instagram, Twitter(X), Facebook 이벤트에 이상적입니다. 댓글에서 이름을 복사해 붙여넣기만 하면 공정한 당첨자를 뽑을 수 있습니다. 도구가 중복된 이름을 자동으로 제거합니다.',
        },
        {
          title: 'Twitch / YouTube 방송',
          description: '부드러운 애니메이션과 사운드가 통합된 스튜디오 모드 덕분에 OBS에서 직접 화면을 공유하며 라이브로 당첨자를 뽑아 시청자들에게 박진감 넘치는 장면을 선사할 수 있습니다.',
        },
        {
          title: '학급 및 팀 활동',
          description: '교사나 팀장은 랜덤 그룹 형성, 발표 순서 정하기, 업무 할당 등을 어떤 편애도 없이 투명하게 진행할 수 있습니다.',
        },
        {
          title: '시크릿 산타 및 각종 행사',
          description: '종이 제비뽑기나 복잡한 절차 없이 즉석에서 이름을 무작위로 뽑아 가족 행사, 사무실 추첨, 시크릿 산타 등의 주최를 간소화할 수 있습니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '저희 도구의 특별한 점',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>강력한 암호화:</strong> 취약한 의사 난수 생성기 대신 브라우저의 Web Crypto API(W3C 표준)를 사용합니다. 모든 추첨은 수학적으로 공정합니다.',
        '<strong>저장되지 않는 데이터:</strong> 사용자의 데이터는 브라우저를 벗어나지 않습니다. 목록을 판매하거나 프로파일링 정보를 수집하지 않으며, 어떤 저장 과정도 거치지 않습니다. 순수한 로컬 처리 방식입니다.',
        '<strong>시각적 디자인:</strong> 시네마 모드와 애니메이션은 모든 추첨을 기억에 남는 이벤트로 만들어줍니다. OBS 캡처나 라이브 방송에 최적화되어 있습니다.',
        '<strong>중복 관리:</strong> 반복된 이름이나 변형(추가 공백, 대소문자 등)을 자동으로 감지하여 실제 인원 한 명당 한 번만 계산되도록 보장합니다.',
      ],
    },
    {
      type: 'title',
      text: '단계별 추첨기 사용 방법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>1단계 - 참가자 입력:</strong> 메인 텍스트 상자에 이름 목록을 붙여넣으세요. 도구는 줄바꿈을 기준으로 각 참가자를 자동 인식합니다. 중복이 걱정되나요? 도구가 알아서 제거해 드립니다.',
        '<strong>2단계 - 설정:</strong> 설정 탭에서 긴장감을 더해주는 카운트다운, 축하용 컨페티(종이가루) 효과를 켜거나 특정 이름을 제외할 수 있는 "블랙리스트"를 활성화할 수 있습니다.',
        '<strong>3단계 - 추첨 시작!</strong> 메인 버튼을 클릭하면 엔진이 암호학적으로 안전한 무작위 선택을 생성합니다. 당첨자는 명확하고 인상적인 방식으로 화면에 표시됩니다.',
      ],
    },
    {
      type: 'title',
      text: '가중치 부여: 특정 참가자에게 혜택 주기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '가장 충성도 높은 구독자에게 보상을 주거나 특정 참가자에게 더 많은 기회를 주고 싶으신가요? 저희의 <strong>가중치 부여 시스템</strong>은 이름을 여러 번 쓸 필요 없이 모든 이름에 "가중치"나 배수를 지정할 수 있는 독특한 기능을 제공합니다.',
    },
    {
      type: 'tip',
      title: '이름에 가중치 부여하는 방법',
      html: '<p>별표(*) 또는 "x" 뒤에 참여 횟수를 입력하세요. 예시:</p><ul><li><strong>"홍길동 * 5"</strong> - 홍길동은 5명인 것처럼 참여합니다</li><li><strong>"김철수 x 10"</strong> - 김철수는 10배 높은 확률을 가집니다</li><li><strong>"이영희"</strong> - 기호 없음 = 일반 참여 1회</li></ul><p>이는 VIP 구독자나 특정 사용자에게 혜택을 주고 싶은 이벤트에 완벽합니다.</p>',
    },
    {
      type: 'title',
      text: '완벽한 개인정보 보호 및 보안',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '다른 온라인 도구와 달리 <strong>저희는 사용자의 데이터를 저장하지 않습니다</strong>. 이름 처리와 추첨 실행의 모든 과정은 사용자의 브라우저 내에서 로컬로 이루어집니다. 참가자 목록은 네트워크를 통해 전송되지 않으며 외부 서버에 저장되지도 않습니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>이것이 의미하는 바는 무엇일까요?</strong> 사용자의 참가자 목록은 오직 사용자의 것입니다. 탭을 닫으면 데이터는 사라집니다. 추적 쿠키, 사용자 프로필, 중앙 데이터베이스가 없습니다. 사용자와 참가자 모두에게 최대의 개인정보 보호를 보장합니다.',
    },
    {
      type: 'title',
      text: '수학적 투명성',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '어떤 분들은 "결과를 조작하면 어떡하죠?"라고 물을 수 있습니다. 대답은 간단합니다. <strong>그럴 수 없습니다.</strong> 추첨 코드는 결정론적이며 암호화되어 있습니다. 숨겨진 변수나 뒷공작은 불가능합니다.',
    },
    {
      type: 'paragraph',
      html: '각 당첨자는 실제 암호화 엔트로피를 활용하여 입력된 목록에 Fisher-Yates Shuffle 알고리즘을 적용한 직접적인 결과입니다. 과정을 직접 확인하고 싶으시다면 GitHub에서 누구나 소스 코드를 열람할 수 있습니다.',
    },
  ],
  ui: {
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '기술 문서',
    title: '랜덤 추첨',
    totalParticipants: '전체 고유 참가자',
    ready: '준비 완료',
    participants: '참가자',
    settings: '설정',
    importFile: '파일 불러오기',
    clearAll: '모두 지우기',
    placeholder: '여기에 이름을 입력하거나 붙여넣으세요...\n홍길동\n김철수\n@twitch_user',
    onePerLine: '한 줄에 한 명씩',
    lines: '줄',
    filters: '필터',
    allowDuplicates: '중복 허용',
    winnerCount: '당첨자 수',
    autoRemove: '당첨자 자동 제거',
    blacklist: '블랙리스트 (제외 대상)',
    blacklistPlaceholder: '제외할 이름 (한 줄에 한 명)...',
    blacklistInfo: '이 사용자들은 추첨에 참여하지 않습니다.',
    sceneEffects: '장면 효과',
    countdown: '카운트다운 (3초)',
    confetti: '승리 컨페티',
    zenMode: '젠 모드 (패널 숨기기)',
    waitingParticipants: '참가자 대기 중...',
    winner: '당첨자',
    reroll: '다시 추첨',
    history: '현재 세션 기록',
    noWinnersYet: '아직 당첨자가 없습니다...',
    startGiveaway: '추첨 시작',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
