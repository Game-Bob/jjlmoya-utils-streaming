import { makeContent } from './locale-factory';

export const content = makeContent({
  language: 'zh',
  slug: 'stream-scene-countdown-clock',
  title: '直播场景倒计时',
  description: '为直播开始前、BRB、Raid 和休息场景制作专为主播设计的倒计时画面。',
  ui: {
    sceneLabel: '你正在设置哪个场景？', sceneBrb: 'BRB', sceneStarting: '即将开始', sceneRaid: 'Raid', sceneIntermission: '休息', sceneTitleLabel: '计时器上方显示什么？', sceneTitlePlaceholder: '即将开始', designLabel: '场景应该有什么氛围？', designAurora: '极光薄雾', designType: '动感文字', designPulse: '脉冲光晕', designGlitch: '故障信号', designSunset: '日落闪光', accentColorLabel: '强调色', glowColorLabel: '发光色', messageLabel: '你希望观众知道什么？', messagePlaceholder: '5 分钟后回来', durationLabel: '你需要多长时间？', duration60: '1 分钟', duration300: '5 分钟', duration600: '10 分钟', durationCustom: '自定义', secondsLabel: '秒', startLabel: '这个提示何时开始？', startNow: '立即开始', scheduleTime: '安排时间', timeLabel: '按当地时间何时开始？', startAction: '让我的提示上线', focusAction: '显示我的场景', exitFocusAction: '退出场景视图', resetAction: '重置提示', flowText: '你是主播：选择直播时刻，设置需要的时间，然后让提示上线。', obsTitle: '将此场景放入 OBS', obsText: '复制链接，在 OBS 中添加浏览器源并粘贴链接。使用 STREAMING 后会自动打开没有控制栏的干净全屏场景。', obsStepCopy: '复制此链接', obsStepAdd: '在 OBS 中添加浏览器源', obsStepPaste: '粘贴并匹配画布尺寸', copyUrlAction: '复制 OBS 链接', copiedUrlText: 'OBS 链接已复制', streamUrlAria: '已生成的 OBS 直播 URL', previewTitle: '选择场景外观', previewHint: '点击预览即可使用', previewAria: '场景设计预览', stageEyebrow: '直播画面', stageCaption: '你的下一个场景已准备好', readyBadge: '准备好了', waitingBadge: '等待中', liveBadge: '直播提示', endedBadge: '已结束', readyText: '查看画面，准备好后开始提示。', waitingText: '直播倒计时将在安排的当地时间开始。', liveText: '在场景切换准备好之前保持此画面显示。', endedText: '提示已结束。重置它或设置新的场景。', remainingLabel: '场景剩余时间', startTimeLabel: '开始', endTimeLabel: '结束', progressLabel: '场景进度', assumptionTitle: '时间说明', assumptionText: '安排的时间使用设备时钟。计时器是视觉提示，不会同步 OBS、Twitch、聊天或编码器。', warningTitle: '将它作为场景提示', warningText: '休眠标签页、系统时间变化或直播延迟可能导致画面时间与实际直播不同。切换前请检查直播场景。', invalidTime: '请输入 HH:MM 格式的当地时间。', clockAria: '倒计时剩余时间', statusAria: '倒计时状态',
  },
  faq: [
    { question: '这个倒计时会连接 OBS 或 Twitch 吗？', answer: '不会。这是独立计时器，不会控制 OBS、Twitch、聊天或直播服务器。使用显示我的场景填满画面，然后把它作为浏览器源捕获。' },
    { question: '如何在 OBS 中直接使用倒计时？', answer: '将带有直播参数和设置的工具 URL 添加为 OBS 浏览器源，例如 ?STREAMING&scene=starting&duration=300&design=aurora&title=即将%20开始。控制栏会消失，倒计时会填满源区域。' },
    { question: '安排开始时间后会发生什么？', answer: '时钟会等到选择的当地时间，然后开始倒计时场景时长。已经过去的时间会被视为第二天的下一次发生时间。' },
    { question: '可以使用自定义消息吗？', answer: '可以。作为主播，你可以写下希望观众看到的简短提示，例如回来时间、下一步或 Raid 消息。' },
    { question: '场景预设会改变什么？', answer: '预设会标记直播时刻，让场景一眼就能看懂。计时计算、时长和平台连接不会改变。' },
    { question: '结束时间准确吗？', answer: '结束时间根据浏览器本地时钟和输入的时长计算。浏览器休眠、暂停标签页或时钟变化可能影响画面更新，因此它是准备参考，不是直播同步保证。' },
  ],
  howTo: [
    { name: '选择场景时刻', text: '选择即将开始、BRB、Raid 或休息，为观众标记当前场景。' },
    { name: '写下主播提示', text: '输入观众在你准备下一个场景时需要阅读的简短消息。' },
    { name: '设置时长或时间', text: '选择常用时长或输入自定义时长。立即开始，或安排一个当地时间。' },
    { name: '查看状态', text: '使用大号时钟和状态标签决定何时切换直播场景。' },
  ],
  seo: [
    { type: 'title', text: '制作一眼就能读懂的直播场景提示', level: 2 },
    { type: 'paragraph', html: '倒计时可以为即将开始、BRB、Raid 或休息场景提供清晰的回归时间。写下你正在准备什么，设置需要的时长，并在准备直播时保留大号计时器。' },
    { type: 'title', text: '场景时钟会计算什么', level: 3 },
    { type: 'list', items: ['<strong>立即提示:</strong> 上线后立即开始，并倒计时选择的时长。', '<strong>安排提示:</strong> 等待当地时间，然后开始场景时长。', '<strong>场景状态:</strong> 区分准备好、等待、直播和结束，让下一步行动清楚可见。'] },
    { type: 'title', text: '如何选择实用的场景时长', level: 3 },
    { type: 'paragraph', html: '切换来源或处理短暂中断时使用较短时长。准备嘉宾、游戏或技术重启时选择更长时长。消息应该补充计时器本身无法表达的信息。' },
    { type: 'tip', title: '具体说明回来时做什么', html: '不要只写"马上回来"，可以写"20:30 回来打决赛"或"正在准备 Raid"。观众就能知道等待多久以及原因。' },
    { type: 'title', text: '为什么计时器保持离线', level: 3 },
    { type: 'paragraph', html: '时钟不需要访问你的频道或直播软件。文字和时间都在浏览器中处理，因此适合作为准备场景。直播前仍应在 OBS 中检查源的显示和场景切换。' },
    { type: 'title', text: '将完成的场景发送到 OBS', level: 3 },
    { type: 'paragraph', html: '点击<strong>复制 OBS 链接</strong>，在直播场景中添加浏览器源，粘贴链接并匹配画布分辨率。使用 <code>?STREAMING</code> 会自动打开没有控制栏的干净全屏场景。' },
    { type: 'title', text: '选择适合频道的设计', level: 3 },
    { type: 'paragraph', html: '五种构图各不相同：极光薄雾使用有氛围感的圆环，动感文字使用超大数字，脉冲光晕使用扩散波纹，故障信号带来锐利的广播能量，日落闪光创造温暖地平线。选择预览后还可以调整颜色。' },
    { type: 'list', items: ['<strong>场景:</strong> 标记即将开始、BRB、Raid 或休息。', '<strong>标题:</strong> 用自己的标题替换默认场景文字。', '<strong>消息:</strong> 添加观众需要阅读的补充提示。', '<strong>时长和时间:</strong> 控制场景何时开始以及显示多久。'] },
    { type: 'paragraph', html: '如果手动创建 URL，可以使用 <code>?STREAMING&amp;scene=raid&amp;title=正在%20准备%20Raid&amp;design=pulse</code>。生成器会自动加入时长、消息和自定义颜色。' },
    { type: 'title', text: '把结束时间当作准备参考', level: 3 },
    { type: 'paragraph', html: '结束时间由设备时钟和选择的时长计算。它不保证直播会在同一时刻到达每位观众。如果切换依赖嘉宾、连接或直播转场，请留出一点余量。' },
  ],
});
