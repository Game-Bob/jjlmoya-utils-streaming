import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: '计算器如何安排广告休息？', answer: '它会将内容分钟数与所选间隔比较，并把休息安排在该时间点之后第一个可用的分段边界。休息不会切断分段。' },
  { question: '内容区块应使用什么格式？', answer: '每行输入一个区块，格式为名称 | 分钟，例如 开场 | 15。输入顺序就是节目流程。' },
  { question: '为什么休息时间可能晚于间隔？', answer: '计算器会保留区块边界。如果一个长区块跨过了间隔，休息会移到下一个边界，并显示这个偏差。' },
  { question: '它是否遵循某个平台的广告规则？', answer: '不遵循。这是根据你的间隔、休息时长和节目结构生成的计划模型。请检查平台、合同和所在地区的最新规则。' },
  { question: '结束时间包含休息吗？', answer: '包含。内容时间和广告时间会分开显示，但结束时间会加上所有计划中的休息。' },
];
const howTo = [
  { name: '设置开始时间和休息规则', text: '选择开始时间、预计内容分钟数、休息间隔和每次休息的时长。' },
  { name: '输入节目流程', text: '每个区块按 名称 | 分钟 输入，在主持人可以自然停顿的位置设置边界。' },
  { name: '阅读时间轨道', text: '查看休息位置、增加的时间，以及长区块是否让目标时间发生延后。' },
  { name: '复制制作流程表', text: '检查警告，然后为制作人、版主或场景笔记复制带时间的列表。' },
];
const seo: SEOSection[] = [
  { type: 'title', text: '围绕节目安排广告休息', level: 2 },
  { type: 'paragraph', html: '直播节目有两种时间：内容所用的分钟数，以及包含休息的真实时钟。这款计算器根据节目流程、间隔和休息时长同时显示两种时间，并计算结束时间。' },
  { type: 'paragraph', html: '当内容时钟达到间隔时，休息会放在下一个合适的区块边界。直播前，你可以移动或缩短区块，也可以明确接受时间偏移。' },
  { type: 'title', text: '把区块边界作为制作信号', level: 2 },
  { type: 'paragraph', html: '开场之后、主题切换、比赛结束或计划中的中断，通常都是合适的休息点。一个很长的区块没有安全停顿点，警告会把这个编辑决定呈现出来。' },
  { type: 'list', items: ['把长访谈拆成欢迎、对话和提问。', '把结束语作为最后一个区块。', '将内容分钟数与包含广告的结束时间比较。', '把流程表交给负责启动休息的人。'] },
  { type: 'title', text: '理解三个时间信号', level: 2 },
  { type: 'table', headers: ['信号', '含义', '行动'], rows: [['内容', '流程表中的分钟数', '确认节目时长符合承诺'], ['广告时间', '休息增加的分钟数', '告知主持人和制作团队'], ['播出结束', '开始时间加内容和休息', '预留正确的演播室或交接时间']] },
  { type: 'tip', title: '不是平台保证', html: '结果是一份本地节目流程表。它不会启动广告，也无法确认观众看到的内容、合同或法规要求。请检查目标平台的最新条件。' },
  { type: 'title', text: '让流程表适合控制室使用', level: 2 },
  { type: 'paragraph', html: '阅读警告后再复制流程表。时间点可以帮助准备场景、提醒版主并保护重要节目段落。如果没有生成休息，请添加有编辑意义的边界。' },
  { type: 'tip', title: '彩排后检查真实时钟', html: '对话和技术转场往往会变长。把计算结果作为基础，并在彩排后更新各区块分钟数。' },
];
export const content = makeContent({
  slug: 'stream-ad-break-schedule-calculator',
  title: '直播广告休息时间表计算器',
  description: '将直播节目流程转换为广告休息时间表，并计算实际播出结束时间。',
  ui: {
    startTimeLabel: '直播开始时间', startTimeHint: '直播何时开始', streamDurationLabel: '预计内容分钟数', streamDurationHint: '不含休息的节目时长', cadenceLabel: '休息间隔', cadenceHint: '在这些内容分钟后安排休息', breakLengthLabel: '休息时长', breakLengthHint: '加入直播时钟的分钟数', segmentsLabel: '节目流程', segmentsHint: '每行一个区块：名称 | 分钟', presetsLabel: '从节目结构开始', presetQuick: '两小时直播', presetLong: '长时活动', presetInterview: '访谈直播', scheduleLabel: '播出时间轨道', scheduleHint: '休息会放在间隔之后第一个可用的边界。', contentTotalLabel: '内容', adsTotalLabel: '广告时间', plannedEndLabel: '播出结束', breaksLabel: '休息', stateReady: '边界可用', stateWarning: '检查时间冲突', stateEmpty: '添加节目流程', stateReadyText: '这份时间表可以作为第一版制作流程表交给团队。', stateWarningText: '存在无效行，或间隔没有遇到自然的区块边界。', stateEmptyText: '添加至少两个区块，计算器才能在它们之间安排休息。', copyLabel: '复制流程表', resetLabel: '恢复示例', copiedLabel: '流程表已复制', copyErrorLabel: '复制被阻止。请选中时间表并手动复制。', segmentKind: '内容', breakKind: '广告休息', minutesShort: '分钟', noEntriesText: '时间轨道会显示在这里。', invalidLineText: '请检查第 {lines} 行。格式为 名称 | 分钟。', plannedMismatchText: '节目流程与预计时长相差 {difference}。', boundaryWarningText: '间隔在一个区块内部达到，因此没有安排休息。请添加边界或拆分区块。'
  }, seo, faq, howTo,
});
