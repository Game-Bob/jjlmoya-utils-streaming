import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'rastgele-isim-secici';
const title = 'Streaming için Rastgele İsim Seçici';
const description =
  'İsim listesinden rastgele bir kazanan seçin. Twitch, YouTube ve etkinlikler için ücretsiz, hızlı ve görsel çekiliş aracı.';

const faqData = [
  {
    question: 'Bu çekiliş gerçekten rastgele mi?',
    answer:
      'Evet, her katılımcının herhangi bir önyargı veya manipülasyon olmaksızın tam olarak aynı kazanma olasılığına sahip olmasını sağlamak için tarayıcının kriptografik rastgelelik algoritmasını (Web Crypto API) kullanıyoruz.',
  },
  {
    question: 'Bu çekiliş aracını Twitch veya YouTube\'da kullanabilir miyim?',
    answer:
      'Kesinlikle. Bir web aracı olarak, pencereyi OBS ile yakalayabilir veya ekranınızı doğrudan paylaşabilirsiniz. Temiz tasarımı ve animasyonları, izleyicilerin süreci tam bir şeffaflıkla görebilmesi için tasarlanmıştır.',
  },
  {
    question: 'Bir kişinin iki kez katılmasını nasıl önlerim?',
    answer:
      'Araç, her gerçek kişinin yalnızca bir kez sayılmasını sağlamak için aynı isimleri veya küçük boşluk varyasyonlarına sahip isimleri tespit eden otomatik bir "mükerrer temizleme" işlevine sahiptir.',
  },
  {
    question: 'Aynı anda birkaç kazanan çekebilir miyim?',
    answer:
      'Evet, düğmeye tıklamadan önce istediğiniz kazanan sayısını yapılandırabilirsiniz. Araç, şanslı kişileri canlı yayınınızda belirtebilmeniz için net bir şekilde listeleyecektir.',
  },
  {
    question: 'Listeye kaç isim ekleyebilirim?',
    answer:
      'Araç tarafından uygulanan katı bir sınır yoktur. Motoru, binlerce katılımcıdan oluşan listeleri performans sorunu olmadan işleyecek şekilde optimize ettik; bu da onu kitlesel çekilişler için bile ideal kılar.',
  },
  {
    question: 'Verilerim veya katılımcı listesi kaydediliyor mu?',
    answer:
      'Hayır, asla. Gizliliğiniz her şeyden önce gelir. Tüm çekiliş süreci web tarayıcınızda yerel olarak çalışır. Girdiğiniz isimler asla sunucularımıza gönderilmez veya herhangi bir veritabanında saklanmaz.',
  },
];

const howToData = [
  {
    name: 'Katılımcı listesini hazırlayın',
    text: 'Sohbetenizden, Excel\'den veya sosyal ağdan isim listesini kopyalayın ve metin kutusuna yapıştırın.',
  },
  {
    name: 'Çekiliş seçeneklerini yapılandırın',
    text: 'Kaç kazanana ihtiyacınız olduğunu ve mükerrerleri veya boş isimleri filtrelemek isteyip istemediğinizi seçin.',
  },
  {
    name: 'Çekilişi başlatın',
    text: 'Çekiliş düğmesine tıklayın. Görsel bir animasyon, kazanan açıklanmadan önce heyecanı koruyacaktır.',
  },
  {
    name: 'Sonuçları duyurun',
    text: 'Kazananların isimlerini sosyal ağlarınızda veya yayın sohbetinizde paylaşmak için kopyalayın.',
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

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Fisher-Yates Karıştırma Algoritması',
      url: 'https://tr.wikipedia.org/wiki/Fisher-Yates_kar%C4%B1%C5%9Ft%C4%B1rma_algoritmas%C4%B1',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Online Rastgele İsim Seçici ve Katılımcı Listesi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Online bir çekilişi hızlı, güvenli ve tamamen şeffaf bir şekilde nasıl yapacağınızı mı merak ediyorsunuz? Ücretsiz <strong>İsim Seçici</strong> aracımız, saniyeler içinde rastgele bir kazanan seçmek için mükemmel bir çözümdür. Basit, görsel ve etkili olacak şekilde tasarlanmıştır; dijital bir "adil seçime" ihtiyaç duyduğunuz her durum için idealdir.',
    },
    {
      type: 'paragraph',
      html: 'İster sosyal ağlarda bir yarışma yönetiyor olun, ister yayın kanalınızda kitlesel bir çekiliş yapın, ister sadece bugün çöpü kimin çıkaracağına karar verin, rastgele seçicimiz modern kriptografik algoritmalar sayesinde tam tarafsızlığı garanti eder. <strong>Manipülasyon yok, taraf tutma yok, sadece saf rastgelelik.</strong>'
    },
    {
      type: 'title',
      text: 'Kullanım Örnekleri',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sosyal Medya Çekilişleri',
          description: 'Instagram, Twitter (X) veya Facebook yarışmaları için idealdir. Sadece yorumlardan isimleri kopyalayın ve adil bir kazanan seçmek için yapıştırın. Araç mükerrerleri otomatik olarak kaldırır.',
        },
        {
          title: 'Twitch / YouTube Yayını',
          description: 'Pürüzsüz animasyonlar ve entegre seslere sahip Stüdyo Modumuz sayesinde ekranınızı doğrudan OBS\'de paylaşabilir ve canlı kazananları seçerken izleyicilerinize heyecan verici bir görsel şov sunabilirsiniz.',
        },
        {
          title: 'Sınıf ve Takım Dinamikleri',
          description: 'Öğretmenler ve takım liderleri, rastgele gruplar oluşturmak, ilk kimin sunum yapacağını seçmek veya tam şeffaflıkla ve kayırmacılık yapmadan görevleri rastgele atamak için kullanabilirler.',
        },
        {
          title: 'Noel Baba Çekilişi ve Etkinlikler',
          description: 'Kağıtlara veya karmaşık lojistiklere ihtiyaç duymadan anında rastgele isim seçerek aile etkinliklerinin, ofis çekilişlerinin veya Noel Baba çekilişlerinin organizasyonunu basitleştirin.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Aracımız Neden Farklı?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Gerçek Kriptografi:</strong> Zayıf sözde rastgele üreteçler yerine tarayıcının Web Crypto API\'sini (W3C standardı) kullanıyoruz. Her çekiliş matematiksel olarak tarafsızdır.',
        '<strong>Depolama Yok:</strong> Verileriniz asla tarayıcınızdan çıkmaz. Liste satmıyoruz, profilinizi çıkarmıyoruz, hiçbir şeyi saklamıyoruz. Tamamen yerel işleme.',
        '<strong>Görsel Tasarım:</strong> Sinema modu ve animasyonlar her çekilişi unutulmaz bir etkinlik haline getirir. OBS yakalama veya canlı yayın için mükemmeldir.',
        '<strong>Mükerrer Yönetimi:</strong> Her gerçek kişinin yalnızca bir kez sayılmasını sağlamak için yinelenen isimleri veya varyasyonları (ekstra boşluklar, büyük/küçük harf vb.) otomatik olarak tespit eder.',
      ],
    },
    {
      type: 'title',
      text: 'Adım Adım Çekiliş Nasıl Kullanılır?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Adım 1 - Katılımcıları girin:</strong> İsim listenizi ana metin kutusuna yapıştırın. Araç, her satır sonunu otomatik olarak farklı bir katılımcı olarak algılar. Mükerrer mi var? Sorun değil, araç onları kaldırır.',
        '<strong>Adım 2 - Özelleştirin:</strong> Ayarlar sekmesinde heyecan yaratmak için geri sayımı, kutlamak için konfeti efektini etkinleştirebilir veya belirli isimleri hariç tutmak için "kara listeyi" etkinleştirebilirsiniz.',
        '<strong>Adım 3 - Çekilişi başlatın!</strong> Ana düğmeye tıklayın ve motorumuz kriptografik olarak güvenli rastgele bir seçim oluşturacaktır. Kazananlar net ve akılda kalıcı bir şekilde görüntülenecektir.',
      ],
    },
    {
      type: 'title',
      text: 'Ağırlıklı Girişler: Bazı Katılımcılara Avantaj Sağlayın',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En sadık abonelerinizi ödüllendirmek veya belirli katılımcılara daha fazla fırsat mı vermek istiyorsunuz? <strong>Ağırlıklı Girişler</strong> sistemimiz benzersizdir ve herhangi bir isme, onu birden çok kez yazmak zorunda kalmadan bir "ağırlık" veya çarpan atamanıza olanak tanır.',
    },
    {
      type: 'tip',
      title: 'İsimlere ağırlık nasıl atanır?',
      html: '<p>Yıldız simgesi (*) veya "x" ve ardından katılım sayısını kullanın. Örnekler:</p><ul><li><strong>"Can * 5"</strong> - Can sanki 5 kişiymiş gibi yarışır</li><li><strong>"Ayşe x 10"</strong> - Ayşe\'nin 10 kat daha fazla şansı olur</li><li><strong>"Ali"</strong> - Sembol yok = 1 normal giriş</li></ul><p>Bu, VIP abonelere veya özel kullanıcılara avantaj sağlamak istediğiniz çekilişler için mükemmeldir.</p>',
    },
    {
      type: 'title',
      text: 'Tam Gizlilik ve Güvenlik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Diğer çevrimiçi araçların aksine, <strong>verilerinizi saklamıyoruz</strong>. İsimlerin tüm işlemleri ve çekilişin yürütülmesi yerel olarak kendi tarayıcınızda gerçekleşir. Katılımcı listeleriniz asla ağ üzerinden iletilmez veya herhangi bir harici sunucuda saklanmaz.',
    },
    {
      type: 'paragraph',
      html: '<strong>Bu ne anlama geliyor?</strong> Katılımcı listeniz sizindir ve sadece sizedir. Sekmeyi kapattığınızda veriler kaybolur. Takip çerezleri yok, kullanıcı profilleri yok, merkezi veritabanı yok. Siz ve çekilişlerinize katılanlar için maksimum gizlilik garantisi.',
    },
    {
      type: 'title',
      text: 'Matematiksel Şeffaflık',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bazıları şunu merak edebilir: "Ya sonuçları manipüle ederseniz?" Cevap basit: <strong>yapamayız</strong>. Çekiliş kodu deterministik ve kriptografiktir. Gizli değişkenler yok, sahne arkası oyunlar yok.',
    },
    {
      type: 'paragraph',
      html: 'Her kazanan, gerçek kriptografik entropi kullanılarak listenize uygulanan Fisher-Yates Karıştırma algoritmasının doğrudan sonucudur. Süreci denetlemek isterseniz, kod kamuya açık inceleme için GitHub\'da mevcuttur.',
    },
  ],
  ui: {
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Teknik Referanslar',
    title: 'Rastgele Çekiliş',
    totalParticipants: 'Toplam Benzersiz Katılımcı',
    ready: 'HAZIR',
    participants: 'Katılımcılar',
    settings: 'Ayarlar',
    importFile: 'Dosya İçe Aktar',
    clearAll: 'Tümünü temizle',
    placeholder: 'İsimleri buraya yazın veya yapıştırın...\nAhmet Yılmaz\nAyşe Kaya\n@twitch_kullanicisi',
    onePerLine: 'Her satıra 1 katılımcı',
    lines: 'satır',
    filters: 'Filtreler',
    allowDuplicates: 'Mükerrerlere İzin Ver',
    winnerCount: 'Kazanan Sayısı',
    autoRemove: 'Kazananı Otomatik Kaldır',
    blacklist: 'Kara Liste (Hariç Tut)',
    blacklistPlaceholder: 'Yasaklı isimler (her satıra bir tane)...',
    blacklistInfo: 'Bu kullanıcılar çekilişe girmeyecektir.',
    sceneEffects: 'Sahne Efektleri',
    countdown: 'Geri Sayım (3s)',
    confetti: 'Zafer Konfetisi',
    zenMode: 'Zen Modu (Paneli Gizle)',
    waitingParticipants: 'Katılımcılar bekleniyor...',
    winner: 'KAZANAN',
    reroll: 'Yeniden Çek',
    history: 'Bu oturumun geçmişi',
    noWinnersYet: 'Henüz kazanan yok...',
    startGiveaway: 'Çekilişi Başlat',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
