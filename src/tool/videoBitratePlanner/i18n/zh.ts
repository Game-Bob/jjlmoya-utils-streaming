import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'zh',
  slug: 'video-bitrate-storage-planner',
  title: '视频码率与存储规划器',
  description: '估算直播或录制所需的视频存储空间、帧时间和实用码率等级。',
  ui: {
    presetLabel: '从场景开始', presetFast: '快速网页直播', presetUpload: '日常直播', presetArchive: '4K 存档', resolutionLabel: '分辨率', frameRateLabel: '帧率', codecLabel: '编码器', bitrateLabel: '视频码率', durationLabel: '会话时长', copiesLabel: '保存副本', minutesLabel: '分钟', copiesShort: '副本', h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: '编码器效率会改变质量判断，但不会改变存储空间的算术结果。', sceneLabel: '从信号到存储', signalSource: '画面', codecGate: '编码', storageReel: '存储', qualityEstimate: '质量判断', storageEstimate: '预计存储', perCopy: '单个副本', allCopies: '全部副本', perHour: '每小时', frameTime: '帧时间', dataPerFrame: '每帧数据', comparisonLabel: '存储对比', lean: '轻量', balanced: '均衡', crisp: '清晰', qualityLean: '轻量省空间', qualityBalanced: '均衡信号', qualityStrong: '细节充足', qualityExcellent: '余量充足', qualityAggressive: '强压缩', qualityGuidance: '用于比较设置的视觉估算。', capacityLight: '存储占用较小', capacityMedium: '中等存储占用', capacityHeavy: '存储占用较大', capacityNote: '容量状态根据上方显示的副本总数计算。', reset: '重置数值', localNote: '在此浏览器本地运行，不会上传内容。', assumptionTitle: '查看计算假设', assumptionText: '存储使用十进制 GB 和输入的视频码率计算。不包含音频、容器开销、可变码率峰值或文件系统空间。', warningText: '质量等级是规划参考。运动、颗粒、关键帧、编码器预设、平台转码和网络余量都会改变真实结果。', readyText: '修改数值即可重新绘制信号。', calculateAria: '更新视频计划',
  },
  faq: [
    { question: '这个规划器会上传或检查我的视频吗？', answer: '不会。它只使用你在浏览器中输入的数值，不会上传文件、检查摄像头或查询直播服务。' },
    { question: '存储空间如何计算？', answer: '将码率乘以时长，再除以 8 把比特换算为字节。结果使用十进制 GB，并乘以保存副本的数量。' },
    { question: '质量判断是什么意思？', answer: '这是根据像素、每秒帧数、码率和宽泛的编码器效率系数得出的参考值。运动和编码器设置也会影响结果，因此它不是画质保证。' },
    { question: '为什么分辨率或帧率变化后，相同码率的含义也会变化？', answer: '更高分辨率包含更多像素，更高帧率每秒发送更多画面。更多视觉信息需要共享同一个码率。' },
    { question: '可以把结果当作平台要求吗？', answer: '请把它用于容量规划和方案比较。平台要求会变化，因此应查看目标平台最新的编码指南，并为直播保留上传余量。' },
  ],
  howTo: [
    { name: '选择画面格式', text: '选择与你准备制作的直播或录制相符的分辨率和帧率。' },
    { name: '设置编码信号', text: '选择编码器并输入 Mbps 格式的视频码率。不确定时可以先使用预设。' },
    { name: '描述会话', text: '输入分钟数和需要保存、剪辑或交付的副本数量。' },
    { name: '查看取舍', text: '比较轻量、均衡和清晰等级，提前了解录制前的存储变化。' },
  ],
  seo: [
    { type: 'title', text: '在直播或录制前估算视频存储空间', level: 2 },
    { type: 'paragraph', html: '视频码率计算器适合需要制定实际存储计划的录制会话。输入码率、时长和副本数量，然后比较同一画面格式下的三种信号等级。' },
    { type: 'title', text: '规划器会计算什么', level: 3 },
    { type: 'list', items: ['<strong>存储空间:</strong> 码率乘以时间，从比特换算为十进制 GB，再乘以副本数量。', '<strong>帧时间:</strong> 根据所选 FPS 计算每帧可用的毫秒数，并估算每帧数据。', '<strong>质量判断:</strong> 根据编码器效率系数调整后的每帧像素对比。'] },
    { type: 'title', text: '分辨率和 FPS 如何改变取舍', level: 3 },
    { type: 'paragraph', html: '分辨率会增加每帧的像素数量，FPS 会增加每秒的帧数。如果码率不变，每帧能分到的数据就会减少，压缩压力也会增加。' },
    { type: 'tip', title: '为直播保留网络余量', html: '不要把视频码率视为网络连接的全部容量。应为音频、协议和网络波动留出空间，并使用与真实直播运动情况相近的场景进行测试。' },
    { type: 'title', text: '最终设置请参考平台指南', level: 3 },
    { type: 'paragraph', html: '本规划器不绑定特定平台。YouTube 会按照分辨率和帧率发布码率范围。请使用目标平台的最新规则验证这里建立的方案。' },
    { type: 'title', text: '为什么存储结果只是估算', level: 3 },
    { type: 'paragraph', html: '名义码率无法描述最终文件中的每个字节。可变码率、音频、容器元数据、关键帧、转码和系统单位都可能改变最终大小。正式制作前应保留实际测试文件，并用它核对容量。' },
  ],
});
