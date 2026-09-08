import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: 'Hesaplayıcı reklam arasını nasıl yerleştirir?', answer: 'Seçilen aralığı içerik dakikalarıyla karşılaştırır ve bu noktadan sonraki ilk uygun bölüm sınırına ara koyar. Bir bölüm ortadan kesilmez.' },
  { question: 'İçerik blokları hangi biçimde girilir?', answer: 'Her satıra Ad | dakika biçiminde bir blok yazın; örneğin Açılış | 15. Sıra yayın akışını oluşturur.' },
  { question: 'Ara neden aralıktan sonra gerçekleşebilir?', answer: 'Hesaplayıcı blok sınırlarına uyar. Uzun bir blok aralığı aşarsa ara sonraki sınıra taşınır ve bu fark işaretlenir.' },
  { question: 'Bu, bir platformun reklam kuralını mı izler?', answer: 'Hayır. Bu, sizin aralığınız, ara süreniz ve yayın yapınıza göre çalışan bir planlama modelidir. Platformun, sözleşmenin ve bölgenin güncel kurallarını kontrol edin.' },
  { question: 'Bitiş saati araları içerir mi?', answer: 'Evet. İçerik süresi ve reklam süresi ayrı gösterilir, ancak bitiş saati planlanan tüm araları toplar.' },
];
const howTo = [
  { name: 'Başlangıcı ve ara kurallarını ayarlayın', text: 'Başlangıç saatini, planlanan içerik dakikalarını, aralık süresini ve her aranın uzunluğunu seçin.' },
  { name: 'Yayın akışını girin', text: 'Her bloğu Ad | dakika olarak yazın. Sunucunun doğal biçimde durabileceği yerlere sınır koyun.' },
  { name: 'Zaman şeridini okuyun', text: 'Araların yerini, ekledikleri süreyi ve uzun bir bloğun hedefi geciktirip geciktirmediğini görün.' },
  { name: 'Prodüksiyon planını kopyalayın', text: 'Uyarıları kontrol edin, ardından saat listesini yapımcı, moderatör veya sahne notları için kopyalayın.' },
];
const seo: SEOSection[] = [
  { type: 'title', text: 'Araları yayının çevresinde planlayın', level: 2 },
  { type: 'paragraph', html: 'Canlı yayının iki saati vardır: içeriğe ayrılan dakikalar ve araları içeren gerçek saat. Bu hesaplayıcı akış, aralık ve ara süresinden iki zamanı da gösterir ve bitişi hesaplar.' },
  { type: 'paragraph', html: 'İçerik saati aralığa ulaştığında ara, sonraki uygun bölüm sınırına yerleştirilir. Yayından önce bir bloğu taşıyabilir, kısaltabilir veya gecikmeyi bilinçli biçimde kabul edebilirsiniz.' },
  { type: 'title', text: 'Bölüm sınırlarını prodüksiyon işareti yapın', level: 2 },
  { type: 'paragraph', html: 'İyi ara noktaları açılış, konu değişimi, maç veya planlı kesintiden sonra gelir. Tek ve uzun bir blok güvenli bir durak sunmaz; uyarı bu editoryal kararı görünür kılar.' },
  { type: 'list', items: ['Uzun bir röportajı karşılama, sohbet ve sorulara bölün.', 'Kapanışı son blok olarak bırakın.', 'Reklamları içeren bitiş saatiyle içerik dakikalarını karşılaştırın.', 'Planı araları başlatacak kişiye verin.'] },
  { type: 'title', text: 'Üç zaman sinyalini okuyun', level: 2 },
  { type: 'table', headers: ['Sinyal', 'Anlamı', 'Eylem'], rows: [['İçerik', 'Akışınızdaki dakikalar', 'Editoryal sürenin vaat edilen zamana uyduğunu kontrol edin'], ['Reklam süresi', 'Araların eklediği dakikalar', 'Sunucuyu ve prodüksiyonu bilgilendirin'], ['Yayının sonu', 'Başlangıç ve içerik ve araların toplamı', 'Stüdyo ya da devir zamanını ayırın']] },
  { type: 'tip', title: 'Platform garantisi değildir', html: 'Sonuç yerel bir yayın akışıdır. Reklam başlatmaz, izleyicinin ne göreceğini veya sözleşme ve mevzuata uygunluğu doğrulamaz. Hedef platformun güncel koşullarını kontrol edin.' },
  { type: 'title', text: 'Planı kontrol odasında kullanılabilir yapın', level: 2 },
  { type: 'paragraph', html: 'Uyarıları okuduktan sonra planı kopyalayın. Saatler sahneleri hazırlamaya, moderatörleri uyarmaya ve önemli bir bölümü korumaya yardım eder. Ara yoksa doğal bir editoryal sınır ekleyin.' },
  { type: 'tip', title: 'Prova sonrası gerçek saati kontrol edin', html: 'Konuşmalar ve teknik geçişler uzayabilir. Hesabı temel alın ve prova sonrasında blok dakikalarını güncelleyin.' },
];
export const content = makeContent({
  slug: 'yayin-reklam-arasi-zamanlayici',
  title: 'Canlı yayın reklam arası planlayıcı',
  description: 'Canlı yayın akışınızı reklam arası programına dönüştürün ve gerçek bitiş saatini hesaplayın.',
  ui: {
    startTimeLabel: 'Canlı başlangıç saati', startTimeHint: 'Yayın ne zaman başlıyor', streamDurationLabel: 'Planlanan içerik dakikaları', streamDurationHint: 'Aralar olmadan program süresi', cadenceLabel: 'Ara aralığı', cadenceHint: 'Bu içerik dakikasından sonra ara yerleştir', breakLengthLabel: 'Ara süresi', breakLengthHint: 'Yayın saatine eklenen dakikalar', segmentsLabel: 'Yayın akışı', segmentsHint: 'Her satırda bir blok: Ad | dakika', presetsLabel: 'Bir yayın yapısıyla başlayın', presetQuick: 'İki saatlik yayın', presetLong: 'Uzun etkinlik', presetInterview: 'Röportaj yayını', scheduleLabel: 'Yayın zaman şeridi', scheduleHint: 'Aralar, aralıktan sonraki ilk uygun sınıra yerleşir.', contentTotalLabel: 'İçerik', adsTotalLabel: 'Reklam süresi', plannedEndLabel: 'Yayın sonu', breaksLabel: 'Aralar', stateReady: 'Kullanılabilir sınırlar', stateWarning: 'Zaman gerilimini inceleyin', stateEmpty: 'Akış ekleyin', stateReadyText: 'Bu program ilk prodüksiyon akışı olarak ekibe verilebilir.', stateWarningText: 'Bir satır geçersiz veya aralık doğal bir bölüm sınırına denk gelmiyor.', stateEmptyText: 'Araya bir durak koymak için en az iki blok ekleyin.', copyLabel: 'Akışı kopyala', resetLabel: 'Örneği geri yükle', copiedLabel: 'Akış kopyalandı', copyErrorLabel: 'Kopyalama engellendi. Programı seçip elle kopyalayın.', segmentKind: 'İçerik', breakKind: 'Reklam arası', minutesShort: 'dk', noEntriesText: 'Zaman şeridiniz burada görünecek.', invalidLineText: '{lines} satırını kontrol edin. Ad | dakika kullanın.', plannedMismatchText: 'Akış, planlanan süreden {difference} kadar farklı.', boundaryWarningText: 'Aralık tek bir bloğun içinde dolduğu için ara eklenmedi. Sınır ekleyin veya bloğu bölün.'
  }, seo, faq, howTo,
});
