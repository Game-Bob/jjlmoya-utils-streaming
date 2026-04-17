import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'isp-engelleme-dedektoru';
const title = 'ISP Engelleme Dedektörü Tebas Check';
const description = 'İspanyol ISP\'leri tarafından Cloudflare paylaşımlı IP\'lerinin yasa dışı olarak engellenmesini tespit etmek için teşhis aracı.';

const faqData = [
  {
    question: 'Tebas-Check nedir?',
    answer: 'Korsan yayınlara erişimi engellemek için İspanya\'da adli olarak engellenen bilinen Cloudflare IP\'lerine bağlanmaya çalışan bir teşhis aracıdır. Sorun, paylaşımlı bir IP\'yi engelleyerek binlerce yasal web sitesinin de "bozulmasıdır".',
  },
  {
    question: 'Neden internet servis sağlayıcım bir Cloudflare IP\'sini engelliyor?',
    answer: 'İnternet servis sağlayıcılarının, korunan içeriği yayınladığı iddia edilen sunucuların IP\'lerini engellemek zorunda olduğu dinamik ihtiyati tedbirler nedeniyle. Cloudflare (CDN) kullanarak birçok web sitesi aynı IP\'yi paylaşır ve bu da masum kullanıcılar için ikincil zarara neden olur.',
  },
  {
    question: 'Test nasıl çalışır?',
    answer: 'Engellenmiş olarak işaretlenen IP\'lerden küçük bir kaynak yüklemeye çalışıyoruz. Bağlantı, yalnızca bu IP\'lerde "Zaman Aşımı" veya bağlantı sıfırlamaları nedeniyle başarısız olursa, bu sağlayıcınızın IP filtreleme uyguladığının açık bir göstergesidir.',
  },
  {
    question: 'Bu engellemeyi aşabilir miyim?',
    answer: 'IP engellemelerini yalnızca DNS değiştirerek aşmak zordur. Çözüm genellikle bir VPN, Tor tarayıcısı kullanmayı veya Cloudflare\'in ziyaret etmeye çalıştığınız yasal hizmete yeni bir IP atamasını beklemeyi içerir.',
  },
];

const howToData = [
  {
    name: 'VPN veya Proxy\'leri Devre Dışı Bırakın',
    text: 'Testin doğru olması için, aracı katmanlar olmadan yönlendiricinizin doğrudan bağlantısını (Fiber veya 4G/5G) kullanmalısınız.',
  },
  {
    name: 'Taramayı başlatın',
    text: 'Teşhis düğmesine tıklayın. Araç, engelleme şüphesi altındaki IP\'lere test paketleri gönderecektir.',
  },
  {
    name: 'Sonuçları yorumlayın',
    text: 'Sonuçları kırmızı renkte görüyorsanız, bu IP\'ye ulaşılamadığı anlamına gelir. Yeşil ise trafiğiniz normal akıyor demektir.',
  },
  {
    name: 'Rapor oluşturun',
    text: 'Yasal hizmetleri engelliyorlarsa, sonuçları olayı sağlayıcınıza bildirmek için kullanabilirsiniz.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar ve Bağlam',
  bibliography: [
    {
      name: 'Cloudflare: IP Engellemesini Anlamak',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'İspanyol dinamik engelleme düzenlemeleri',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Neden her şey çalışmayı durdurdu?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>"Önleyici Adalet"</strong>in harika dünyasına hoş geldiniz. Eğer bir Pazar günü buradaysanız ve yasal web siteleri yüklenmeyi durdururken Twitter mükemmel çalışıyorsa, muhtemelen yasa dışı futbol yayınlarına karşı yürütülen mücadelenin ikincil bir kurbanısınız.',
    },
    {
      type: 'paragraph',
      html: 'İspanya\'da hakimler belirli spor kuruluşlarına bir "kırmızı düğme" verdiler. Bu düğme, onların dakika dakika doğrudan adli denetim olmaksızın IP adreslerini gerçek zamanlı olarak engellemelerine olanak tanıyor. Sorun şu ki, bir lunapark tüfeğiyle nişan alıyorlar ve genellikle "yasa dışı maçların" yanı sıra hastanelerin, üniversitelerin veya en sevdiğiniz yemek bloğunun yaşadığı paylaşımlı sunucuları vuruyorlar.',
    },
    {
      type: 'title',
      text: 'Yanan Bina Teorisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir gökdelenin 4B dairesinden yasa dışı bir yayının yapıldığını hayal edin. Mantıklı çözüm 4B\'nin kapısını çalıp elektriğini kesmek olurdu, değil mi?',
    },
    {
      type: 'paragraph',
      html: 'Hayır, değil. Mevcut çözüm, <strong>tüm binanın temellerini havaya uçurmaktır</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Cloudflare gibi bir hizmetin IP\'sini engelleyerek, internet sağlayıcısı sadece korsanı durdurmakla kalmaz, aynı zamanda aynı dijital adresi paylaşan diğer 50.000 yasal web sitesini de durdurur. Eğer çalışıyor veya ders çalışıyorsanız ve web siteniz bu IP\'yi kullanıyorsa: kötü şans, ikincil zarar. Şikayetinizi baş silah ustasına iletin.',
    },
    {
      type: 'title',
      text: 'Bu teşhis aracı tam olarak ne yapıyor?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu araç, sağlayıcınızın seçici IP adresi engellemesi uygulayıp uygulamadığını belirlemek için üç adımda teknik bir analiz gerçekleştirir:',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Google\'a Ping At',
          description: 'Bir nabzınız olup olmadığını kontrol ediyoruz. Google yüklenmiyorsa, sorun Wi-Fi faturanızı ödememiş olmanızdır. Bu, temel bağlantı testidir.',
        },
        {
          title: 'Cloudflare\'e Ping At',
          description: '1.1.1.1\'e ulaşmaya çalışıyoruz. Bu, İspanya\'daki engellemenin "maden ocağındaki kanaryası"dır ve adli engellemelerin ana hedefidir.',
        },
        {
          title: 'Karar',
          description: 'Google çalışıyor ve Cloudflare başarısız oluyorsa, durum gün gibi ortadadır: Sağlayıcınız Cloudflare\'e seçici IP engellemesi uyguluyor.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Dinamik Engellemenin Etkisi',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Yanlış Pozitifler',
          description: 'Şirket web siteleri, kişisel bloglar ve devlet hizmetleri, yetkisiz bir akış sunucusuyla bir IP\'yi paylaşırlarsa çalışmayı durdurabilir.',
        },
        {
          title: 'IP Filtreleme',
          description: 'DNS engellemesinin aksine, IP filtreleme ağ düzeyinde bağlantıyı engeller, bu da sorunu çözmek için DNS değiştirmenin yetersiz kalmasına neden olur.',
        },
        {
          title: 'Şeffaflık Eksikliği',
          description: 'Genellikle kullanıcı, sorunun kendi bağlantısından mı yoksa aktif bir sağlayıcı engellemesinden mi kaynaklandığını bilmeden yalnızca bir "Zaman Aşımı" hatası görür.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kimsenin Cevaplamak İstemediği Sorular',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bunu kullanmak yasa dışı mı?</strong> Hayır. Bir sunucuya ping atmak, bir mağaza vitrinine bakmak kadar yasaldır. Bu araç pasif bir ağ teşhisidir. Şifrelemeyi kırmaz, parolaları çözmez ve korunan içeriğe erişmez. Sadece neden her zamanki web sitelerinize erişemediğinizi söyler.',
        '<strong>Nasıl düzeltebilirim?</strong> Etkin bir engellemeniz varsa, DNS değiştirmek artık yardımcı olmaz (tüm numaraları biliyorlar). Bugün tek gerçek çözüm bir <strong>VPN</strong>\'dir. Trafiğinizi şifreleyerek, sağlayıcınız ne istediğinizi veya kime sorduğunuzu göremez ve bu nedenle sizi "seçici olarak" (veya yanlışlıkla) engelleyemez.',
      ],
    },
    {
      type: 'title',
      text: 'Yayıncı Modu / OBS Widget\'ı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yayıncı mısınız ve yayınınızda gerçek zamanlı sansür durumunu göstermek mi istiyorsunuz? Şeffaf arka planlı (chroma-handy) ve her 5 dakikada bir otomatik yenileme özelliğine sahip ultra minimalist bir mod oluşturduk.',
    },
    {
      type: 'list',
      items: [
        '<strong>Adım 1:</strong> OBS\'de yeni bir <strong>Tarayıcı</strong> kaynağı ekleyin.',
        '<strong>Adım 2:</strong> Bu URL\'yi kullanın: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>Adım 3:</strong> Bitti! Bağlantınızın temiz mi yoksa adli saldırı altında mı olduğunu gösteren büyük bir simge (Yeşil/Kırmızı) görünecektir.',
      ],
    },
    {
      type: 'tip',
      title: 'Yasal Uyarı',
      html: '<p>Bu aracın herhangi bir spor kuruluşuyla bağlantısı yoktur, korunan içeriğe erişimi kolaylaştırmaz ve teknolojik koruma önlemlerini (DRM) atlatmaz. Sadece kullanıcıyı internet bağlantısının yapay olarak düşürüldüğü konusunda bilgilendirir.</p>',
    },
  ],
  ui: {
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Referanslar ve Bağlam',
    scanning: 'Matris taranıyor...',
    seekingBlocks: 'Fiberinizdeki somut engeller aranıyor...',
    blockedTitle: 'ENGELLENİYOR...',
    blockedDiagnosis: 'Teşhis: "Seçici Sansür"',
    blockedReason: 'Sağlayıcınızda müdahale tespit ettik. Cloudflare veya DNS manipüle ediliyor.',
    noInternetTitle: 'BAĞLANTI YOK',
    noInternetReason: 'İnternet erişiminiz yok gibi görünüyor. Kablonuzu veya faturanızı kontrol edin.',
    successTitle: 'ÖZGÜRSÜNÜZ',
    successReason: 'Bağlantınız temiz görünüyor. Küresel engellemeler varsa bunlar sizi etkilemiyor.',
    retryBtn: 'Adaleti tekrar kışkırtın',
    authorNoteTitle: 'Yazarın Notu:',
    authorNoteText: 'Tebas\'ın "kara eli"nden etkilenmediğim için bu yardımcı programı tam olarak test edemedim. Teşhisi geliştirmeme yardımcı olmak isterseniz benimle iletişime geçin.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'Yönlendiricinizle görüşülüyor...',
    statusDodging: 'Mahkeme genelgesinden kaçılıyor...',
    statusCheckingPirate: 'Korsan olup olmadığınız kontrol ediliyor (göz kırpma)...',
    statusPinging: 'Var olup olmadığınızı görmek için Google\'a ping atılıyor...',
    statusConsulting: 'Paylaşımlı IP kahinine danışılıyor...',
    statusCheckingFee: 'Tebas\'ın serbest çalışan ücretini ödeyip ödemediği kontrol ediliyor...',
    statusCalculating: 'Piyangoyu kazanma olasılığı hesaplanıyor...',
    statusDeciphering: 'Sağlayıcı sözleşmeniz deşifre edilmeye çalışılıyor...',
    logStarted: "OTONOM PROTOKOL 'TEBAS_WATCH' BAŞLATILIYOR...",
    logDetecting: '> Sağlayıcı ve temel bağlantı tespit ediliyor...',
    logIspFound: '> Sağlayıcı tespit edildi: ',
    logConnError: '> Temel bağlantı hatası',
    logDnsCross: '> DNS veri çapraz kontrolü (DoH vs Yerel) yürütülüyor...',
    logDnsGoogle: '> Gerçek DNS (Google): ',
    logDnsPoisoned: '> ALARM: Zehirlenmiş DNS tespit edildi.',
    logDnsNoDoh: '> DoH kullanılamıyor, DNS çapraz kontrolü atlanıyor.',
    logLaunchingProbes: '> Kritik hedefler üzerinde sondalar başlatılıyor...',
    logIpBlocked: '> Hedef {ip}: YANIT YOK (Şüpheli IP engelleme)',
    logIpActive: '> Hedef {ip}: AKTİF',
    logAlertInterference: '!!! ADLİ MÜDAHALE ALARMI !!!',
    logNoInternet: 'İNTERNET ERİŞİMİ YOK',
    logClean: 'TEMİZ BAĞLANTI. KEYFİNİ ÇIKARIN.',
    logDiagError: 'TEŞHİS HATASI',
  },
};
