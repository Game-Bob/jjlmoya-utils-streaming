import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: '계산기는 광고 휴식을 어떻게 배치하나요?', answer: '선택한 간격과 콘텐츠 시간을 비교한 뒤 그 시점 이후 처음 가능한 세그먼트 경계에 휴식을 배치합니다. 세그먼트 중간을 자르지 않습니다.' },
  { question: '콘텐츠 블록은 어떤 형식으로 입력하나요?', answer: '한 줄에 하나씩 이름 | 분 형식으로 입력하세요. 예: Opening | 15. 입력 순서가 진행표가 됩니다.' },
  { question: '휴식이 간격보다 늦어질 수 있는 이유는 무엇인가요?', answer: '계산기는 세그먼트 경계를 지킵니다. 긴 세그먼트가 간격을 넘으면 다음 경계로 휴식을 옮기고 그 차이를 표시합니다.' },
  { question: '특정 플랫폼의 광고 규칙을 따르나요?', answer: '아닙니다. 입력한 간격, 휴식 길이, 방송 구조를 바탕으로 한 계획 모델입니다. 플랫폼, 계약, 지역의 최신 규칙을 확인하세요.' },
  { question: '종료 시각에 휴식 시간이 포함되나요?', answer: '네. 콘텐츠 시간과 광고 시간은 따로 보여 주지만 종료 시각에는 계획한 모든 휴식이 포함됩니다.' },
];
const howTo = [
  { name: '시작 시각과 규칙 설정', text: '시작 시각, 콘텐츠 분량, 휴식 간격, 휴식 길이를 선택합니다.' },
  { name: '진행표 입력', text: '각 블록을 이름 | 분 형식으로 작성하고 진행자가 자연스럽게 멈출 수 있는 곳에 경계를 둡니다.' },
  { name: '시간 레일 확인', text: '휴식 위치, 추가 시간, 긴 블록 때문에 생기는 지연을 확인합니다.' },
  { name: '제작용 진행표 복사', text: '경고를 확인한 뒤 제작자, 모더레이터, 장면 노트에 사용할 시간 목록을 복사합니다.' },
];
const seo: SEOSection[] = [
  { type: 'title', text: '방송을 자르지 않는 휴식 계획', level: 2 },
  { type: 'paragraph', html: '라이브 방송에는 콘텐츠에 쓰는 시간과 휴식을 포함한 실제 시각이라는 두 개의 시계가 있습니다. 이 계산기는 진행표, 간격, 휴식 길이로 두 시간을 함께 보여 주고 종료 시각을 계산합니다.' },
  { type: 'paragraph', html: '콘텐츠 시간이 간격에 도달하면 다음에 사용할 수 있는 세그먼트 경계에 휴식을 둡니다. 방송 전에 블록을 옮기거나 줄일지, 지연을 받아들일지 판단할 수 있습니다.' },
  { type: 'title', text: '세그먼트 경계를 제작 신호로 사용하기', level: 2 },
  { type: 'paragraph', html: '인사말 뒤, 주제 전환, 경기, 예정된 중단은 좋은 휴식 지점입니다. 긴 블록 하나만 있으면 안전한 지점이 없으므로 경고가 편집 결정을 보여 줍니다.' },
  { type: 'list', items: ['긴 인터뷰를 인사말, 대화, 질문으로 나눕니다.', '마무리 인사를 마지막 블록으로 둡니다.', '광고 시간을 포함한 종료 시각과 콘텐츠 시간을 비교합니다.', '휴식을 실행할 담당자에게 진행표를 전달합니다.'] },
  { type: 'title', text: '세 가지 시간 신호 읽기', level: 2 },
  { type: 'table', headers: ['신호', '의미', '행동'], rows: [['콘텐츠', '진행표의 분량', '약속한 방송 시간에 맞는지 확인'], ['광고 시간', '휴식으로 늘어난 시간', '진행자와 제작진에게 알림'], ['방송 종료', '시작과 콘텐츠와 휴식의 합', '스튜디오와 인계 시간을 확보']] },
  { type: 'tip', title: '플랫폼 보장이 아닙니다', html: '결과는 로컬 진행표입니다. 광고를 실행하지 않으며 시청자에게 광고가 보이는지, 계약이나 규정을 보증하지 않습니다. 목적지의 최신 조건을 확인하세요.' },
  { type: 'title', text: '컨트롤룸에서 쓰기 좋은 계획 만들기', level: 2 },
  { type: 'paragraph', html: '경고를 확인한 뒤 계획을 복사하세요. 시각 정보는 장면 준비, 모더레이터 알림, 중요한 방송 구간 보호에 도움이 됩니다. 휴식이 없다면 의미 있는 편집 경계를 추가하세요.' },
  { type: 'tip', title: '리허설 뒤 실제 시간을 확인하기', html: '대화와 기술 전환은 길어질 수 있습니다. 계산 결과를 기준으로 삼고 리허설 뒤 블록 시간을 갱신하세요.' },
];
export const content = makeContent({
  slug: 'stream-ad-break-schedule-calculator',
  title: '라이브 방송 광고 휴식 일정 계산기',
  description: '라이브 방송 진행표를 광고 휴식 일정으로 바꾸고 실제 종료 시각을 계산합니다.',
  ui: {
    startTimeLabel: '라이브 시작 시각', startTimeHint: '방송이 시작되는 시각', streamDurationLabel: '예상 콘텐츠 시간', streamDurationHint: '휴식 전 방송 시간', cadenceLabel: '휴식 간격', cadenceHint: '이 콘텐츠 시간 뒤에 휴식을 배치', breakLengthLabel: '휴식 길이', breakLengthHint: '방송 시계에 추가되는 시간', segmentsLabel: '진행표', segmentsHint: '한 줄에 한 블록: 이름 | 분', presetsLabel: '방송 형태로 시작', presetQuick: '두 시간 방송', presetLong: '장시간 이벤트', presetInterview: '인터뷰 방송', scheduleLabel: '방송 시간 레일', scheduleHint: '휴식은 간격 이후 처음 가능한 경계에 놓입니다.', contentTotalLabel: '콘텐츠', adsTotalLabel: '광고 시간', plannedEndLabel: '방송 종료', breaksLabel: '휴식', stateReady: '사용 가능한 경계', stateWarning: '시간 긴장 확인', stateEmpty: '진행표 추가', stateReadyText: '이 일정은 제작을 위한 첫 진행표로 전달할 수 있습니다.', stateWarningText: '잘못된 줄이 있거나 간격이 자연스러운 경계와 맞지 않습니다.', stateEmptyText: '두 개 이상의 블록을 추가하면 사이에 휴식을 배치할 수 있습니다.', copyLabel: '진행표 복사', resetLabel: '예시 복원', copiedLabel: '진행표를 복사했습니다', copyErrorLabel: '복사가 차단되었습니다. 일정을 선택해 직접 복사하세요.', segmentKind: '콘텐츠', breakKind: '광고 휴식', minutesShort: '분', noEntriesText: '여기에 시간 레일이 표시됩니다.', invalidLineText: '{lines}번째 줄을 확인하세요. 이름 | 분 형식을 사용합니다.', plannedMismatchText: '진행표가 예상 시간에서 {difference}만큼 다릅니다.', boundaryWarningText: '한 블록 안에서 간격에 도달해 휴식을 배치하지 않았습니다. 경계를 추가하거나 블록을 나누세요.'
  }, seo, faq, howTo,
});
