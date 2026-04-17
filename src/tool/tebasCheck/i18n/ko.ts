import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'isp-blockage-detector';
const title = 'ISP 웹사이트 차단 감지기 Tebas Check';
const description = '스페인 ISP가 Cloudflare 공유 IP를 부당하게 차단하는 것을 감지하기 위한 진단 도구입니다.';

const faqData = [
  {
    question: 'Tebas-Check란 무엇인가요?',
    answer: '불법 방송 접속을 막기 위해 스페인에서 사법적으로 차단된 알려진 Cloudflare IP에 연결을 시도하는 진단 도구입니다. 문제는 공유 IP를 차단함으로써 수천 개의 합법적인 웹사이트까지 함께 "망가뜨린다"는 점입니다.',
  },
  {
    question: '왜 내 ISP가 Cloudflare IP를 차단하나요?',
    answer: '보호된 콘텐츠를 전송하는 것으로 의심되는 서버의 IP를 ISP가 차단해야 하는 동적인 예방 조치 때문입니다. Cloudflare(CDN)를 사용하면 많은 웹사이트가 동일한 IP를 공유하게 되어, 무고한 사용자들에게 부수적인 피해를 입힙니다.',
  },
  {
    question: '테스트는 어떻게 작동하나요?',
    answer: '차단된 것으로 표시된 IP로부터 작은 리소스를 로드하려고 시도합니다. 해당 IP에서만 "타임아웃" 또는 연결 재설정으로 인해 연결이 실패하면, 이는 ISP가 IP 필터링을 적용하고 있다는 명확한 신호입니다.',
  },
  {
    question: '이 차단을 우회할 수 있나요?',
    answer: 'IP 차단은 DNS만 변경해서는 우회하기 어렵습니다. 해결책은 일반적으로 VPN, Tor 브라우저를 사용하거나, Cloudflare가 방문하려는 합법적인 서비스에 새 IP를 할당할 때까지 기다리는 것입니다.',
  },
];

const howToData = [
  {
    name: 'VPN 또는 프록시 비활성화',
    text: '테스트의 정확성을 위해 중간 단계 없이 라우터의 직접 연결(광랜 또는 4G/5G)을 사용해야 합니다.',
  },
  {
    name: '스캔 시작',
    text: '진단 버튼을 클릭하세요. 도구가 차단 의심을 받는 IP에 테스트 패킷을 보냅니다.',
  },
  {
    name: '결과 해석',
    text: '결과가 빨간색으로 표시되면 해당 IP에 접속할 수 없음을 의미합니다. 초록색이면 트래픽이 정상적으로 흐르고 있는 것입니다.',
  },
  {
    name: '보고서 생성',
    text: 'ISP가 합법적인 서비스를 차단하고 있는 경우, 결과를 사용하여 해당 사례를 ISP에 신고할 수 있습니다.',
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

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 배경',
  bibliography: [
    {
      name: 'Cloudflare: IP 차단 이해하기',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: '스페인 동적 차단 규정',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: '왜 갑자기 모든 것이 멈췄나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>"예방적 정의"</strong>의 놀라운 세계에 오신 것을 환영합니다. 일요일 오후에 합법적인 웹사이트 로딩은 멈췄는데 트위터는 완벽하게 작동한다면, 당신은 아마도 불법 축구 중계와의 전쟁에서 발생한 부수적인 피해자일 것입니다.',
    },
    {
      type: 'paragraph',
      html: '스페인에서 판사들은 특정 스포츠 단체에 "레드 버튼"을 부여했습니다. 이 버튼을 통해 그들은 매 분마다 직접적인 사법 감독 없이도 실시간으로 IP 주소를 차단할 수 있습니다. 문제는 그들이 축제장의 사격 게임처럼 아무 데나 쏘아대어, "불법 경기"뿐만 아니라 병원, 대학교, 혹은 당신이 즐겨 찾는 요리 블로그가 입주해 있는 공유 서버를 자주 맞춘다는 점입니다.',
    },
    {
      type: 'title',
      text: '불타는 건물 이론',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '초고층 빌딩의 4B호실에서 불법 스트리밍이 방송되고 있다고 상상해 보세요. 논리적인 해결책은 4B호의 문을 두드리고 전기를 끊는 것이겠죠?',
    },
    {
      type: 'paragraph',
      html: '하지만 아닙니다. 현재의 해결책은 <strong>건물 전체의 기초를 폭파하는 것</strong>입니다.',
    },
    {
      type: 'paragraph',
      html: 'Cloudflare와 같은 서비스의 IP를 차단함으로써 인터넷 제공업체는 해적판 서버만 잡는 것이 아니라, 그 디지털 주소를 공유하던 다른 50,000개의 합법적인 웹사이트도 함께 중단시킵니다. 만약 당신이 일하거나 공부하고 있었는데 그 웹사이트가 해당 IP를 사용했다면, 정말 안타깝게도 부수적인 피해를 입은 것입니다. 주범에게 항의해 보세요.',
    },
    {
      type: 'title',
      text: '이 진단 도구는 정확히 무엇을 하나요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 도구는 ISP가 선택적인 IP 주소 차단을 적용하고 있는지 확인하기 위해 세 단계의 기술적 분석을 수행합니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Google 핑 테스트',
          description: '연결이 살아있는지 확인합니다. Google이 로드되지 않는다면 Wi-Fi 요금을 내지 않은 것이 문제일 수 있습니다. 이것은 기본 연결 테스트입니다.',
        },
        {
          title: 'Cloudflare 핑 테스트',
          description: '1.1.1.1에 접속을 시도합니다. 이는 스페인 차단의 "탄광 속 카나리아"와 같으며 사법 차단의 주요 표적입니다.',
        },
        {
          title: '판정',
          description: 'Google은 작동하는데 Cloudflare가 실패한다면 명확합니다. 당신의 ISP가 Cloudflare에 대해 선택적인 IP 차단을 적용하고 있는 것입니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '동적 차단의 영향',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '오탐지',
          description: '기업 웹사이트, 개인 블로그 및 정부 서비스가 승인되지 않은 스트리밍 서버와 IP를 공유하는 경우 작동이 멈출 수 있습니다.',
        },
        {
          title: 'IP 필터링',
          description: 'DNS 차단과 달리 IP 필터링은 네트워크 수준에서 연결을 차단하므로 DNS 변경만으로는 문제를 해결하기에 부족합니다.',
        },
        {
          title: '투명성 부족',
          description: '종종 사용자는 문제가 자신의 연결 문제인지 아니면 ISP의 활성화된 차단 때문인지 알지 못한 채 "타임아웃" 오류만 보게 됩니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '누구도 대답하고 싶어 하지 않는 질문들',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>이것을 사용하는 것이 불법인가요?</strong> 아니요. 서버에 핑을 보내는 것은 상점 유리창을 들여다보는 것만큼이나 합법적입니다. 이 도구는 수동적인 네트워크 진단입니다. 암호를 해독하거나 비밀번호를 크랙하거나 보호된 콘텐츠에 액세스하지 않습니다. 단지 왜 평소 이용하던 웹사이트에 접속할 수 없는지 알려줄 뿐입니다.',
        '<strong>어떻게 해결하나요?</strong> 활성화된 차단이 있는 경우 DNS 변경은 더 이상 도움이 되지 않습니다(그들은 모든 기술을 알고 있습니다). 현재 유일한 실질적인 해결책은 <strong>VPN</strong>입니다. 트래픽을 암호화하면 ISP는 사용자가 무엇을 요청하는지 확인할 수 없으므로 "선택적으로"(또는 실수로) 차단할 수 없게 됩니다.',
      ],
    },
    {
      type: 'title',
      text: '스트리머 모드 / OBS 위젯',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '스트리머이신가요? 방송에서 실시간 검열 상태를 보여주고 싶으신가요? 투명 배경(크로마키 준비 완료)과 5분마다 자동 새로고침되는 특별한 울트라 미니멀리즘 모드를 만들었습니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>1단계:</strong> OBS에서 새로운 <strong>브라우저</strong> 소스를 추가합니다.',
        '<strong>2단계:</strong> 이 URL을 사용하세요: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>3단계:</strong> 완료! 당신의 연결 상태가 깨끗한지 아니면 사법적 공격을 받고 있는지를 나타내는 커다란 아이콘(초록/빨강)이 나타납니다.',
      ],
    },
    {
      type: 'tip',
      title: '법적 고지',
      html: '<p>이 도구는 어떤 스포츠 단체와도 관련이 없으며, 보호된 콘텐츠에 대한 액세스를 용이하게 하지 않으며, 기술적 보호 조치(DRM)를 우회하지 않습니다. 단지 사용자의 인터넷 연결이 인위적으로 저하되었음을 알려줄 뿐입니다.</p>',
    },
  ],
  ui: {
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 자료 및 배경',
    scanning: '매트릭스 스캔 중...',
    seekingBlocks: '회선 내 콘크리트 차단물 탐색 중...',
    blockedTitle: '차단 중...',
    blockedDiagnosis: '진단: "선택적 검열"',
    blockedReason: 'ISP에서 간섭을 감지했습니다. Cloudflare 또는 DNS가 조작되고 있습니다.',
    noInternetTitle: '연결 없음',
    noInternetReason: '인터넷에 접속할 수 없는 것 같습니다. 케이블이나 요금 미납 여부를 확인하세요.',
    successTitle: '당신은 자유입니다',
    successReason: '당신의 연결은 깨끗해 보입니다. 글로벌 차단이 있더라도 당신에게는 영향을 미치지 않습니다.',
    retryBtn: '사법 당국을 다시 도발하기',
    authorNoteTitle: '저자 노트:',
    authorNoteText: '제가 테바스의 "검은 손"의 영향을 받지 않아 이 유틸리티를 완전히 테스트해보지 못했습니다. 진단 개선을 도와주고 싶으시다면 연락주세요.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: '라우터와 협상 중...',
    statusDodging: '법원 회람 피하는 중...',
    statusCheckingPirate: '당신이 해적인지 확인 중(찡긋)...',
    statusPinging: '존재 여부를 확인하기 위해 Google에 핑 보내는 중...',
    statusConsulting: '공유 IP 오라클에 문의 중...',
    statusCheckingFee: '테바스가 자영업자 회비를 냈는지 확인 중...',
    statusCalculating: '복권 당첨 확률 계산 중...',
    statusDeciphering: 'ISP 계약 해독 시도 중...',
    logStarted: "자율 프로토콜 'TEBAS_WATCH' 시작 중...",
    logDetecting: '> ISP 및 기본 연결 감지 중...',
    logIspFound: '> 감지된 ISP: ',
    logConnError: '> 기본 연결 오류',
    logDnsCross: '> DNS 데이터 크로스 체크(DoH vs 로컬) 실행 중...',
    logDnsGoogle: '> 실제 DNS (Google): ',
    logDnsPoisoned: '> 경고: 오염된 DNS 감지됨.',
    logDnsNoDoh: '> DoH를 사용할 수 없어 DNS 크로스 체크를 건너뜁니다.',
    logLaunchingProbes: '> 중요 대상에 프로브 실행 중...',
    logIpBlocked: '> 대상 {ip}: 응답 없음 (IP 차단 의심)',
    logIpActive: '> 대상 {ip}: 활성',
    logAlertInterference: '!!! 사법적 간섭 경고 !!!',
    logNoInternet: '인터넷 액세스 불가',
    logClean: '깨끗한 연결. 즐기세요.',
    logDiagError: '진단 오류',
  },
};
