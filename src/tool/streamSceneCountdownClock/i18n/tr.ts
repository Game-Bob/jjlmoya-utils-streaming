import { makeContent } from './locale-factory';

export const content = makeContent({
  language: 'tr',
  slug: 'obs-yayin-sahnesi-geri-sayim',
  title: 'Yayın sahnesi geri sayımı',
  description: 'Yayına başlama, BRB, raid ve molalar için yayıncı odaklı bir geri sayım ekranı oluşturun.',
  ui: {
    sceneLabel: 'Hangi sahneyi hazırlıyorsunuz?', sceneBrb: 'BRB', sceneStarting: 'Az sonra başlıyor', sceneRaid: 'Raid', sceneIntermission: 'Mola', sceneTitleLabel: 'Zamanlayıcının üstünde ne görünsün?', sceneTitlePlaceholder: 'Az sonra başlıyor', designLabel: 'Sahnenizin havası nasıl olsun?', designAurora: 'Aurora sisi', designType: 'Kinetik tipografi', designPulse: 'Darbeli ışıma', designGlitch: 'Glitch sinyali', designSunset: 'Güneş parlaması', accentColorLabel: 'Vurgu rengi', glowColorLabel: 'Işıma rengi', messageLabel: 'İzleyicileriniz ne bilmeli?', messagePlaceholder: '5 dakika içinde döneceğim', durationLabel: 'Ne kadar zamana ihtiyacınız var?', duration60: '1 dk', duration300: '5 dk', duration600: '10 dk', durationCustom: 'Özel', secondsLabel: 'saniye', startLabel: 'Bu sinyal ne zaman başlasın?', startNow: 'Şimdi başlat', scheduleTime: 'Zaman planla', timeLabel: 'Yerel saatte kaçta başlasın?', startAction: 'Sinyalimi yayına al', focusAction: 'Sahnemi göster', exitFocusAction: 'Sahne görünümünden çık', resetAction: 'Sinyali sıfırla', flowText: 'Yayıncı sizsiniz: olanı seçin, gereken süreyi ayarlayın ve sinyalinizi yayına alın.', obsTitle: 'Bu sahneyi OBS içine koyun', obsText: 'Bağlantıyı kopyalayın, OBS içinde Browser Source ekleyin ve yapıştırın. STREAMING parametresi kontroller olmadan temiz tam ekran sahnesini otomatik açar.', obsStepCopy: 'Bu bağlantıyı kopyala', obsStepAdd: 'OBS içine Browser Source ekle', obsStepPaste: 'Yapıştır ve tuval boyutuna uyarla', copyUrlAction: 'OBS bağlantısını kopyala', copiedUrlText: 'OBS bağlantısı kopyalandı', streamUrlAria: 'Oluşturulan OBS yayın URL\'si', previewTitle: 'Sahne görünümünü seçin', previewHint: 'Kullanmak için önizlemeye tıklayın', previewAria: 'Sahne görünümü önizlemeleri', stageEyebrow: 'Yayın ekranı', stageCaption: 'Sonraki sahneniz hazır', readyBadge: 'Hazır', waitingBadge: 'Bekliyor', liveBadge: 'Canlı sinyal', endedBadge: 'Bitti', readyText: 'Ekranı kontrol edin ve sahneniz hazır olduğunda sinyali başlatın.', waitingText: 'Canlı geri sayım planlanan yerel saatte başlayacak.', liveText: 'Sahne değişimi hazır olana kadar bu ekranı görünür tutun.', endedText: 'Sinyal sona erdi. Sıfırlayın veya yeni bir sahne hazırlayın.', remainingLabel: 'Sahnede kalan süre', startTimeLabel: 'Başlangıç', endTimeLabel: 'Bitiş', progressLabel: 'Sahne ilerlemesi', assumptionTitle: 'Zaman notu', assumptionText: 'Planlanan saatler cihazınızın saatini kullanır. Zamanlayıcı görsel bir sinyaldir; OBS, Twitch, sohbet veya kodlayıcıyı senkronize etmez.', warningTitle: 'Sahne sinyali olarak kullanın', warningText: 'Uyuyan bir sekme, değişen sistem saati veya yayın gecikmesi ekrandaki zamanın yayından farklı görünmesine neden olabilir. Değiştirmeden önce canlı sahneyi kontrol edin.', invalidTime: 'Yerel saati HH:MM biçiminde girin.', clockAria: 'Geri sayımda kalan süre', statusAria: 'Geri sayım durumu',
  },
  faq: [
    { question: 'Bu geri sayım OBS veya Twitch\'e bağlanır mı?', answer: 'Hayır. OBS, Twitch, sohbet veya yayın sunucusunu kontrol etmeyen bağımsız bir zamanlayıcıdır. Sahnemi göster seçeneğiyle ekranı doldurun ve bu görünümü Browser Source olarak yakalayın.' },
    { question: 'Geri sayımı OBS içinde doğrudan nasıl kullanırım?', answer: 'Aracı yayın parametresi ve ayarlarıyla birlikte OBS Browser Source olarak ekleyin. Örnek: ?STREAMING&scene=starting&duration=300&design=aurora&title=Az%20sonra%20başlıyor. Kontroller kaybolur ve geri sayım kaynak alanını doldurur.' },
    { question: 'Başlangıç saatini planlarsam ne olur?', answer: 'Saat seçtiğiniz yerel zamana kadar bekler, ardından sahne süresini geri sayar. Geçmiş bir saat sonraki günün aynı planına taşınır.' },
    { question: 'Kendi mesajımı kullanabilir miyim?', answer: 'Evet. Yayıncı olarak dönüş saati, sıradaki adım veya raid mesajı gibi izleyicilerin görmesini istediğiniz kısa sinyali yazabilirsiniz.' },
    { question: 'Sahne hazır ayarları neyi değiştirir?', answer: 'Yayın anını adlandırır ve sahnenin bir bakışta anlaşılmasını sağlar. Zaman hesabı, süre ve platform bağlantısı değişmez.' },
    { question: 'Bitiş zamanı kesin midir?', answer: 'Cihazınızın yerel saati ve girdiğiniz süreyle hesaplanır. Tarayıcı uykusu, duraklatılmış sekme veya saat değişikliği görünür güncellemeyi etkileyebilir. Bu bir hazırlık göstergesidir, yayın senkronizasyonu garantisi değildir.' },
  ],
  howTo: [
    { name: 'Sahne anını seçin', text: 'Az sonra başlıyor, BRB, Raid veya Mola seçeneklerinden izleyicilerin göreceği anı seçin.' },
    { name: 'Yayıncı sinyalinizi yazın', text: 'Sonraki sahneyi hazırlarken izleyicilerin okuyacağı kısa mesajı girin.' },
    { name: 'Süreyi veya saati ayarlayın', text: 'Hazır bir süre seçin veya kendi sürenizi girin. Hemen başlayın ya da yerel bir saat planlayın.' },
    { name: 'Durumu okuyun', text: 'Sahne değişimine ne zaman karar vereceğinizi anlamak için büyük saati ve durum etiketini kullanın.' },
  ],
  seo: [
    { type: 'title', text: 'Bir bakışta okunan yayın sahnesi sinyali hazırlayın', level: 2 },
    { type: 'paragraph', html: 'Geri sayım, Az sonra başlıyor, BRB, raid veya mola sahnenize net bir dönüş noktası verir. Ne yaptığınızı yazın, gereken süreyi ayarlayın ve hazırlık sırasında büyük zamanlayıcıyı görünür bırakın.' },
    { type: 'title', text: 'Sahne saati neyi hesaplar', level: 3 },
    { type: 'list', items: ['<strong>Anında sinyal:</strong> yayına aldığınız anda başlar ve seçilen süreyi geri sayar.', '<strong>Planlı sinyal:</strong> yerel saati bekler ve ardından sahne süresini başlatır.', '<strong>Sahne durumu:</strong> hazır, bekliyor, canlı ve bitti durumlarını ayırarak sonraki eylemi gösterir.'] },
    { type: 'title', text: 'Kullanışlı bir sahne süresi seçin', level: 3 },
    { type: 'paragraph', html: 'Kaynak değiştirirken veya kısa bir kesintiyi çözerken kısa süre kullanın. Konuk, oyun ya da teknik yeniden başlatma hazırlıyorsanız daha uzun süre seçin. Mesajınız, zamanlayıcının tek başına anlatamadığı bilgiyi vermelidir.' },
    { type: 'tip', title: 'Dönüşü somutlaştırın', html: 'Genel bir söz yerine "20:30\'da final için dönüyorum" veya "Raid hazırlanıyor" yazın. İzleyiciler ne kadar bekleyeceklerini ve nedenini anlar.' },
    { type: 'title', text: 'Saat neden çevrimdışı çalışır', level: 3 },
    { type: 'paragraph', html: 'Saatin kanalınıza veya yayın yazılımınıza erişmesi gerekmez. Metin ve zaman tarayıcıda kalır, bu nedenle hazırlık sahnesi olarak kullanılabilir. Yayından önce OBS içindeki kaynak görünümünü ve sahne geçişini kontrol edin.' },
    { type: 'title', text: 'Hazır sahneyi OBS\'ye gönderin', level: 3 },
    { type: 'paragraph', html: '<strong>OBS bağlantısını kopyala</strong> düğmesine basın, yayın sahnenize Browser Source ekleyin, bağlantıyı yapıştırın ve tuval çözünürlüğünü ayarlayın. <code>?STREAMING</code> kontrolleri olmayan temiz tam ekran sahnesini otomatik başlatır.' },
    { type: 'title', text: 'Görünümü kanalınıza uydurun', level: 3 },
    { type: 'paragraph', html: 'Beş farklı kompozisyon arasından seçim yapın: Aurora sisi atmosferik halka, Kinetik tipografi büyük rakamlar, Darbeli ışıma genişleyen dalgalar, Glitch sinyali keskin yayın enerjisi, Güneş parlaması ise sıcak bir ufuk oluşturur. Önizlemeyi seçip renkleri ayarlayın.' },
    { type: 'list', items: ['<strong>Sahne:</strong> Az sonra başlıyor, BRB, raid veya molayı gösterir.', '<strong>Başlık:</strong> varsayılan satırı kendi başlığınızla değiştirir.', '<strong>Mesaj:</strong> izleyicilerin okuması gereken bilgiyi ekler.', '<strong>Süre ve saat:</strong> başlangıcı ve görünür kalma süresini belirler.'] },
    { type: 'paragraph', html: 'URL\'yi kendiniz oluşturursanız <code>?STREAMING&amp;scene=raid&amp;title=Raid%20hazırlanıyor&amp;design=pulse</code> kullanabilirsiniz. Oluşturucu süreyi, mesajı ve özel renkleri otomatik ekler.' },
    { type: 'title', text: 'Bitiş saatini hazırlık göstergesi olarak okuyun', level: 3 },
    { type: 'paragraph', html: 'Bitiş saati cihazınızın saati ve seçtiğiniz süreyle hesaplanır. Yayının herkese aynı anda ulaşacağını garanti etmez. Değişim bir konuğa, bağlantıya veya yayın geçişine bağlıysa biraz pay bırakın.' },
  ],
});
