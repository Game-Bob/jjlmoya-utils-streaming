import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'tr',
  slug: 'video-bitrate-depolama-planlayici',
  title: 'Video Bit Hızı ve Depolama Planlayıcısı',
  description: 'Yayın veya kayıt için video depolamasını, kare süresini ve pratik bit hızı seviyelerini tahmin edin.',
  ui: {
    presetLabel: 'Bir sahneyle başlayın', presetFast: 'Hızlı web yayını', presetUpload: 'Günlük canlı yayın', presetArchive: '4K arşiv', resolutionLabel: 'Çözünürlük', frameRateLabel: 'Kare hızı', codecLabel: 'Kodek', bitrateLabel: 'Video bit hızı', durationLabel: 'Oturum süresi', copiesLabel: 'Saklanan kopyalar', minutesLabel: 'dakika', copiesShort: 'kopya', h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: 'Kodek verimliliği kalite yorumunu değiştirir, depolama hesabını değiştirmez.', sceneLabel: 'Sinyalden depolamaya', signalSource: 'Görüntü', codecGate: 'Kodlama', storageReel: 'Depolama', qualityEstimate: 'Kalite yorumu', storageEstimate: 'Tahmini depolama', perCopy: 'Bir kopya', allCopies: 'Tüm kopyalar', perHour: 'Saat başına', frameTime: 'Kare süresi', dataPerFrame: 'Kare başına veri', comparisonLabel: 'Depolama karşılaştırması', lean: 'Hafif', balanced: 'Dengeli', crisp: 'Keskin', qualityLean: 'Hafif ve ekonomik', qualityBalanced: 'Dengeli sinyal', qualityStrong: 'Güçlü ayrıntı', qualityExcellent: 'Geniş pay', qualityAggressive: 'Agresif sıkıştırma', qualityGuidance: 'Ayarları karşılaştırmak için görsel bir tahmin.', capacityLight: 'Hafif depolama yükü', capacityMedium: 'Orta depolama yükü', capacityHeavy: 'Yüksek depolama yükü', capacityNote: 'Kapasite durumu yukarıdaki toplam kopyalara göre belirlenir.', reset: 'Değerleri sıfırla', localNote: 'Bu tarayıcıda yerel çalışır. Hiçbir şey yüklenmez.', assumptionTitle: 'Varsayımları okuyun', assumptionText: 'Depolama, girilen video bit hızını ve ondalık gigabaytları kullanır. Ses, kapsayıcı ek yükü, değişken bit hızı tepe değerleri ve dosya sistemi payı eklenmez.', warningText: 'Kalite seviyeleri planlama ölçütleridir. Hareket, gren, anahtar kareler, kodlayıcı ön ayarları, platform dönüştürmesi ve ağ payı gerçek sonucu değiştirebilir.', readyText: 'Sinyali yeniden çizmek için bir değeri değiştirin.', calculateAria: 'Video planını güncelle',
  },
  faq: [
    { question: 'Bu planlayıcı videomu yükler veya inceler mi?', answer: 'Hayır. Yalnızca tarayıcıya girdiğiniz değerleri kullanır. Dosya yüklemez, kamerayı incelemez ve yayın hizmetine bağlanmaz.' },
    { question: 'Depolama nasıl hesaplanır?', answer: 'Bit hızı süreyle çarpılır ve bitleri bayta çevirmek için sekize bölünür. Sonuç ondalık gigabayt olarak gösterilir ve kopya sayısıyla çarpılır.' },
    { question: 'Kalite yorumu ne anlama gelir?', answer: 'Piksel, saniyedeki kare, bit hızı ve genel bir kodek verimlilik katsayısına dayanan pratik bir ölçüttür. Hareket ve kodlayıcı ayarları da önemli olduğu için görüntü kalitesi garantisi değildir.' },
    { question: 'Aynı bit hızı farklı çözünürlük veya kare hızında neden değişir?', answer: 'Yüksek çözünürlükte daha fazla piksel, yüksek kare hızında saniyede daha fazla kare vardır. Daha fazla görsel bilgi aynı bit hızını paylaşır.' },
    { question: 'Sonucu bir platform şartı olarak kullanabilir miyim?', answer: 'Kapasite planlamak ve senaryoları karşılaştırmak için kullanın. Platform şartları değişebilir; güncel kodlayıcı rehberini kontrol edin ve canlı yayın için yükleme payı bırakın.' },
  ],
  howTo: [
    { name: 'Görüntü biçimini seçin', text: 'Planladığınız yayın veya kayda uygun çözünürlük ve kare hızını seçin.' },
    { name: 'Kodlama sinyalini ayarlayın', text: 'Kodeği seçin ve video bit hızını saniyede megabit olarak girin. Başlangıç için bir ön ayar kullanabilirsiniz.' },
    { name: 'Oturumu tanımlayın', text: 'Süreyi dakika olarak ve saklamak, düzenlemek veya teslim etmek istediğiniz kopya sayısını girin.' },
    { name: 'Değiş tokuşu okuyun', text: 'Kayıttan önce hafif, dengeli ve keskin seviyelerin depolamayı nasıl değiştirdiğini karşılaştırın.' },
  ],
  seo: [
    { type: 'title', text: 'Yayın veya kayıt öncesinde video depolamasını tahmin edin', level: 2 },
    { type: 'paragraph', html: 'Video bit hızı hesaplayıcısı, bir kayıt oturumu için gerçekçi depolama planı gerektiğinde yardımcı olur. Bit hızını, süreyi ve kopyaları girin; aynı görüntü biçimi için üç sinyal seviyesini karşılaştırın.' },
    { type: 'title', text: 'Planlayıcının hesapladıkları', level: 3 },
    { type: 'list', items: ['<strong>Depolama:</strong> bit hızı zamanla çarpılır, bitten ondalık gigabayta çevrilir ve kopya sayısıyla çarpılır.', '<strong>Kare süresi:</strong> seçilen FPS değerinde her kare için kullanılabilen milisaniye ve kare başına veri tahmini.', '<strong>Kalite yorumu:</strong> kodek verimlilik katsayısıyla ayarlanmış kare başına piksel karşılaştırması.'] },
    { type: 'title', text: 'Çözünürlük ve FPS değiş tokuşu nasıl etkiler', level: 3 },
    { type: 'paragraph', html: 'Çözünürlük her karedeki piksel sayısını, FPS ise saniyedeki kare sayısını artırır. Bit hızı sabit kalırsa her kareye daha az veri düşer ve sıkıştırma zorlaşır.' },
    { type: 'tip', title: 'Canlı yayın için pay bırakın', html: 'Video bit hızını bağlantının tamamı olarak görmeyin. Ses, protokol ve ağ değişimleri için alan bırakın ve gerçek yayına benzer hareket içeren bir sahneyi test edin.' },
    { type: 'title', text: 'Son ayar için platform rehberini kullanın', level: 3 },
    { type: 'paragraph', html: 'Bu planlayıcı platformdan bağımsızdır. YouTube çözünürlük ve kare hızına göre bit hızı aralıkları yayımlar. Burada oluşturduğunuz senaryoyu hedef platformun güncel kurallarıyla doğrulayın.' },
    { type: 'title', text: 'Depolama sonucu neden tahmindir', level: 3 },
    { type: 'paragraph', html: 'Nominal bit hızı son dosyadaki her baytı açıklamaz. Değişken bit hızı, ses, kapsayıcı meta verileri, anahtar kareler, dönüştürme ve sistem birimleri son boyutu değiştirebilir.' },
  ],
});
