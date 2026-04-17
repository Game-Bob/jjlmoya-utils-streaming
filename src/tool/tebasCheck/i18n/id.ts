import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'detektor-pemblokiran-isp';
const title = 'Detektor Pemblokiran ISP Tebas Check';
const description = 'Alat diagnosis untuk mendeteksi pemblokiran tidak sah terhadap IP Cloudflare bersama oleh ISP Spanyol.';

const faqData = [
  {
    question: 'Apa itu Tebas-Check?',
    answer: 'Ini adalah alat diagnosis yang mencoba menghubungkan ke IP Cloudflare yang diketahui telah diblokir secara hukum di Spanyol untuk mencegah akses ke siaran bajakan. Masalahnya adalah dengan memblokir IP bersama, ribuan situs web sah menjadi "rusak".',
  },
  {
    question: 'Mengapa ISP saya memblokir IP Cloudflare?',
    answer: 'Karena tindakan pencegahan dinamis di mana ISP harus memblokir IP server yang diduga menyiarkan konten yang dilindungi. Dengan menggunakan Cloudflare (CDN), banyak situs web berbagi IP yang sama, menyebabkan kerusakan tambahan pada pengguna yang tidak bersalah.',
  },
  {
    question: 'Bagaimana cara kerja tes ini?',
    answer: 'Kami mencoba memuat sumber daya kecil dari IP yang ditandai sebagai diblokir. Jika koneksi gagal karena "Timeout" atau reset koneksi hanya pada IP tersebut, itu adalah indikator jelas bahwa ISP Anda menerapkan pemfilteran IP.',
  },
  {
    question: 'Bisakah saya melewati blokir ini?',
    answer: 'Pemblokiran IP sulit dilewati hanya dengan mengganti DNS. Solusinya biasanya melibatkan penggunaan VPN, browser Tor, atau menunggu Cloudflare memberikan IP baru ke layanan sah yang ingin Anda kunjungi.',
  },
];

const howToData = [
  {
    name: 'Nonaktifkan VPN atau Proxy',
    text: 'Agar tes akurat, Anda harus menggunakan koneksi langsung router Anda (Fiber atau 4G/5G) tanpa lapisan perantara.',
  },
  {
    name: 'Mulai pemindaian',
    text: 'Klik tombol diagnosis. Alat akan mengirim paket tes ke IP yang dicurigai diblokir.',
  },
  {
    name: 'Interpretasikan hasil',
    text: 'Jika Anda melihat hasil berwarna merah, berarti IP tersebut tidak dapat dijangkau. Jika hijau, lalu lintas Anda mengalir normal.',
  },
  {
    name: 'Buat laporan',
    text: 'Anda dapat menggunakan hasil ini untuk melaporkan insiden ke ISP Anda jika mereka memblokir layanan sah.',
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
  inLanguage: 'id',
};

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Konteks',
  bibliography: [
    {
      name: 'Cloudflare: Memahami Pemblokiran IP',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'Peraturan pemblokiran dinamis Spanyol',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Mengapa semuanya berhenti berfungsi?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Selamat datang di dunia <strong>"Keadilan Preventif"</strong> yang menakjubkan. Jika Anda berada di sini pada Minggu sore dan situs web sah berhenti dimuat sementara Twitter berfungsi dengan sempurna, Anda mungkin adalah korban tambahan dari kampanye melawan siaran sepak bola ilegal.',
    },
    {
      type: 'paragraph',
      html: 'Di Spanyol, hakim telah memberikan "tombol merah" kepada entitas olahraga tertentu. Tombol ini memungkinkan mereka memblokir alamat IP secara real-time tanpa pengawasan yudisial langsung menit demi menit. Masalahnya adalah mereka menembak sembarangan, dan mereka sering menembak server bersama di mana, selain "pertandingan ilegal", rumah sakit, universitas, atau blog memasak favorit Anda berada.',
    },
    {
      type: 'title',
      text: 'Teori Gedung yang Terbakar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bayangkan sebuah siaran ilegal disiarkan dari apartemen 4B di sebuah gedung pencakar langit. Solusi logisnya adalah mengetuk pintu 4B dan memutus aliran listriknya, bukan?',
    },
    {
      type: 'paragraph',
      html: 'Tentu saja tidak. Solusi saat ini adalah <strong>meledakkan fondasi seluruh gedung</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Dengan memblokir IP layanan seperti Cloudflare, penyedia internet tidak hanya menjatuhkan pembajak, tetapi juga 50.000 situs web sah lainnya yang berbagi alamat digital yang sama. Jika Anda sedang bekerja atau belajar dan situs web Anda menggunakan IP tersebut: nasib buruk, kerusakan tambahan. Silakan mengadu ke pembuat senjata.',
    },
    {
      type: 'title',
      text: 'Apa yang dilakukan alat diagnosis ini sebenarnya?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alat ini melakukan analisis teknis dalam tiga langkah untuk mengidentifikasi apakah ISP Anda menerapkan pemblokiran alamat IP selektif:',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ping Google',
          description: 'Kami memeriksa apakah Anda memiliki denyut nadi. Jika Google tidak dimuat, masalahnya adalah Anda belum membayar tagihan Wi-Fi. Ini adalah tes konektivitas dasar.',
        },
        {
          title: 'Ping Cloudflare',
          description: 'Kami mencoba menjangkau 1.1.1.1. Ini adalah "kenari di tambang batu bara" untuk pemblokiran di Spanyol dan target utama pemblokiran yudisial.',
        },
        {
          title: 'Vonis',
          description: 'Jika Google berfungsi dan Cloudflare gagal, sudah sangat jelas: ISP Anda menerapkan pemblokiran IP selektif terhadap Cloudflare.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Dampak Pemblokiran Dinamis',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Positif Palsu',
          description: 'Situs web perusahaan, blog pribadi, dan layanan pemerintah dapat berhenti berfungsi jika mereka berbagi IP dengan server streaming yang tidak sah.',
        },
        {
          title: 'Pemfilteran IP',
          description: 'Berbeda dengan pemblokiran DNS, pemfilteran IP mencegah koneksi di tingkat jaringan, membuat penggantian DNS tidak cukup untuk menyelesaikan masalah.',
        },
        {
          title: 'Kurangnya Transparansi',
          description: 'Seringkali, pengguna hanya melihat kesalahan "Timeout" tanpa mengetahui apakah masalahnya adalah koneksi mereka atau pemblokiran ISP yang aktif.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Pertanyaan yang tidak ingin dijawab oleh siapa pun',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Apakah ilegal menggunakan ini?</strong> Tidak. Melakukan ping ke server sama ilegalnya dengan melihat etalase toko. Alat ini adalah diagnosis jaringan pasif. Alat ini tidak melanggar enkripsi, tidak meretas kata sandi, dan tidak mengakses konten yang dilindungi. Alat ini hanya memberi tahu Anda mengapa Anda tidak dapat mengakses situs web biasa Anda.',
        '<strong>Bagaimana cara memperbaikinya?</strong> Jika Anda memiliki blokir aktif, mengganti DNS tidak lagi membantu (mereka tahu semua triknya). Satu-satunya solusi nyata saat ini adalah <strong>VPN</strong>. Dengan mengenkripsi lalu lintas Anda, ISP Anda tidak dapat melihat apa yang Anda minta atau kepada siapa, dan oleh karena itu tidak dapat memblokir Anda "secara selektif" (atau secara tidak sengaja).',
      ],
    },
    {
      type: 'title',
      text: 'Mode Streamer / Widget OBS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Apakah Anda seorang streamer dan ingin menunjukkan status sensor secara real-time di siaran Anda? Kami telah membuat mode khusus ultra-minimalis, dengan latar belakang transparan (siap-chroma) dan penyegaran otomatis setiap 5 menit.',
    },
    {
      type: 'list',
      items: [
        '<strong>Langkah 1:</strong> Tambahkan sumber <strong>Browser</strong> baru di OBS.',
        '<strong>Langkah 2:</strong> Gunakan URL ini: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>Langkah 3:</strong> Selesai! Ikon besar (Hijau/Merah) akan muncul menunjukkan apakah koneksi Anda bersih atau berada di bawah serangan yudisial.',
      ],
    },
    {
      type: 'tip',
      title: 'Pemberitahuan Hukum',
      html: '<p>Alat ini tidak memiliki afiliasi dengan entitas olahraga mana pun, tidak memfasilitasi akses ke konten yang dilindungi, dan tidak menghindari tindakan perlindungan teknologi (DRM). Alat ini hanya memberi tahu pengguna bahwa koneksi internet mereka diturunkan kualitasnya secara artifisial.</p>',
    },
  ],
  ui: {
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi dan Konteks',
    scanning: 'Memindai matriks...',
    seekingBlocks: 'Mencari blokade beton di serat Anda...',
    blockedTitle: 'MEMBLOKIR...',
    blockedDiagnosis: 'Diagnosis: "Sensor Selektif"',
    blockedReason: 'Kami mendeteksi gangguan pada ISP Anda. Cloudflare atau DNS sedang dimanipulasi.',
    noInternetTitle: 'TIDAK ADA KONEKSI',
    noInternetReason: 'Sepertinya Anda tidak memiliki akses internet. Periksa kabel atau tagihan Anda.',
    successTitle: 'ANDA BEBAS',
    successReason: 'Koneksi Anda terlihat bersih. Jika ada pemblokiran global, itu tidak memengaruhi Anda.',
    retryBtn: 'Provokasi keadilan lagi',
    authorNoteTitle: 'Catatan Penulis:',
    authorNoteText: 'Saya belum bisa menguji utilitas ini sepenuhnya karena saya tidak terkena "tangan hitam" Tebas. Jika Anda ingin membantu saya meningkatkan diagnosis, hubungi saya.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'Bernegosiasi dengan router Anda...',
    statusDodging: 'Menghindari surat edaran pengadilan...',
    statusCheckingPirate: 'Memeriksa apakah Anda bajak laut (kedipan mata)...',
    statusPinging: 'Melakukan ping ke Google untuk melihat apakah Anda ada...',
    statusConsulting: 'Berkonsultasi dengan ramalan IP bersama...',
    statusCheckingFee: 'Memeriksa apakah Tebas membayar biaya mandiri...',
    statusCalculating: 'Menghitung probabilitas memenangkan lotre...',
    statusDeciphering: 'Mencoba menguraikan kontrak ISP Anda...',
    logStarted: "MEMULAI PROTOKOL OTONOM 'TEBAS_WATCH'...",
    logDetecting: '> Mendeteksi ISP dan konektivitas dasar...',
    logIspFound: '> ISP terdeteksi: ',
    logConnError: '> Kesalahan koneksi dasar',
    logDnsCross: '> Mengeksekusi pemeriksaan silang data DNS (DoH vs Lokal)...',
    logDnsGoogle: '> DNS Asli (Google): ',
    logDnsPoisoned: '> WASPADA: DNS beracun terdeteksi.',
    logDnsNoDoh: '> DoH tidak tersedia, melewati pemeriksaan silang DNS.',
    logLaunchingProbes: '> Meluncurkan probe pada target kritis...',
    logIpBlocked: '> Target {ip}: TIDAK ADA RESPON (Dicurigai blokir IP)',
    logIpActive: '> Target {ip}: AKTIF',
    logAlertInterference: '!!! PERINGATAN GANGGUAN YUDISIAL !!!',
    logNoInternet: 'TIDAK ADA AKSES INTERNET',
    logClean: 'KONEKSI BERSIH. NIKMATI.',
    logDiagError: 'KESALAHAN DIAGNOSIS',
  },
};
