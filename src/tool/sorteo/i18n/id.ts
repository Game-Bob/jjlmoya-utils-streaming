import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'pengundi-nama-acak';
const title = 'Pengundi Nama Acak untuk Streaming';
const description =
  'Pilih pemenang secara acak dari daftar nama. Alat giveaway gratis, cepat, dan visual untuk Twitch, YouTube, dan acara lainnya.';

const faqData = [
  {
    question: 'Apakah pengundian ini benar-benar acak?',
    answer:
      'Ya, kami menggunakan algoritma keacakan kriptografi browser (Web Crypto API) untuk memastikan bahwa setiap peserta memiliki probabilitas menang yang sama persis, tanpa bias atau manipulasi.',
  },
  {
    question: 'Bisakah saya menggunakan pengundian ini di Twitch atau YouTube?',
    answer:
      'Tentu saja. Sebagai alat berbasis web, Anda dapat menangkap jendela dengan OBS atau membagikan layar Anda secara langsung. Desain bersih dan animasinya dirancang agar penonton dapat melihat prosesnya dengan transparansi total.',
  },
  {
    question: 'Bagaimana cara mencegah seseorang berpartisipasi dua kali?',
    answer:
      'Alat ini memiliki fungsi "pembersihan duplikat" otomatis yang mendeteksi nama yang identik atau nama dengan variasi spasi kecil untuk memastikan setiap orang nyata hanya dihitung satu kali.',
  },
  {
    question: 'Bisakah saya memilih beberapa pemenang sekaligus?',
    answer:
      'Ya, Anda dapat mengonfigurasi jumlah pemenang yang diinginkan sebelum mengklik tombol. Alat ini akan mencantumkan pemenang dengan jelas sehingga Anda dapat menyebutkan nama mereka dalam siaran langsung Anda.',
  },
  {
    question: 'Berapa banyak nama yang bisa saya tambahkan ke daftar?',
    answer:
      'Tidak ada batasan ketat yang diberlakukan oleh alat ini. Kami telah mengoptimalkan mesin untuk menangani daftar ribuan peserta tanpa masalah performa, menjadikannya ideal bahkan untuk giveaway besar.',
  },
  {
    question: 'Apakah data saya atau daftar peserta disimpan?',
    answer:
      'Tidak, tidak pernah. Privasi Anda adalah prioritas utama. Seluruh proses pengundian berjalan secara lokal di browser web Anda. Nama-nama yang Anda masukkan tidak pernah dikirim ke server kami atau disimpan dalam database apa pun.',
  },
];

const howToData = [
  {
    name: 'Siapkan daftar peserta',
    text: 'Salin daftar nama dari chat Anda, Excel, atau media sosial dan tempelkan ke dalam kotak teks.',
  },
  {
    name: 'Konfigurasi opsi giveaway',
    text: 'Pilih berapa banyak pemenang yang Anda butuhkan dan apakah Anda ingin memfilter duplikat atau nama kosong.',
  },
  {
    name: 'Luncurkan "tangan jujur"',
    text: 'Klik tombol undi. Animasi visual akan menjaga ketegangan sebelum mengungkapkan pemenangnya.',
  },
  {
    name: 'Umumkan hasil',
    text: 'Salin nama pemenang untuk dibagikan di media sosial atau chat streaming Anda.',
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

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi Teknis',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Algoritma Fisher-Yates Shuffle',
      url: 'https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Pengundi Nama Acak dan Daftar Peserta Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bingung bagaimana cara melakukan giveaway online secara cepat, aman, dan transparan total? Alat <strong>Pengundi Nama</strong> gratis kami adalah solusi terbaik untuk memilih pemenang secara acak dalam hitungan detik. Didesain agar sederhana, visual, dan efektif, alat ini sempurna untuk skenario apa pun di mana Anda membutuhkan "tangan jujur" digital.',
    },
    {
      type: 'paragraph',
      html: 'Baik Anda mengelola kontes di media sosial, giveaway besar di saluran streaming Anda, atau sekadar memutuskan siapa yang membuang sampah hari ini, pemilih acak kami menjamin ketidakberpihakan total berkat algoritma kriptografi modern. <strong>Tanpa manipulasi, tanpa bias, hanya keacakan murni.</strong>'
    },
    {
      type: 'title',
      text: 'Contoh Penggunaan',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Giveaway Media Sosial',
          description: 'Ideal untuk kontes Instagram, Twitter (X), atau Facebook. Cukup salin nama dari komentar dan tempelkan untuk memilih pemenang yang adil. Alat ini secara otomatis menghapus duplikat.',
        },
        {
          title: 'Streaming Twitch / YouTube',
          description: 'Berkat Mode Studio kami dengan animasi halus dan suara yang terintegrasi, Anda dapat membagikan layar Anda secara langsung di OBS dan memberikan pertunjukan visual yang menarik bagi penonton sambil memilih pemenang secara langsung.',
        },
        {
          title: 'Dinamika Kelas dan Tim',
          description: 'Guru dan pemimpin tim dapat menggunakannya untuk membentuk kelompok acak, memilih siapa yang presentasi duluan, atau membagi tugas secara acak dengan transparansi total dan tanpa pilih kasih.',
        },
        {
          title: 'Tukar Kado (Secret Santa) dan Acara',
          description: 'Sederhanakan pengorganisiran acara keluarga, giveaway kantor, atau Tukar Kado dengan memilih nama secara acak instan tanpa perlu kertas atau logistik yang rumit.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Mengapa alat kami berbeda?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kriptografi Nyata:</strong> Kami menggunakan Web Crypto API browser (standar W3C) alih-alih generator acak semu yang lemah. Setiap pengundian tidak memihak secara matematis.',
        '<strong>Tanpa Penyimpanan:</strong> Data Anda tidak pernah meninggalkan browser Anda. Kami tidak menjual daftar, kami tidak memprofilkan Anda, kami tidak menyimpan apa pun. Pemrosesan murni secara lokal.',
        '<strong>Desain Visual:</strong> Mode Cinema dan animasi menjadikan setiap giveaway sebagai acara yang tak terlupakan. Sempurna untuk tangkapan OBS atau siaran langsung.',
        '<strong>Penanganan Duplikat:</strong> Secara otomatis mendeteksi nama yang berulang atau varian (spasi tambahan, huruf besar-kecil, dll.) untuk memastikan setiap orang nyata hanya dihitung satu kali.',
      ],
    },
    {
      type: 'title',
      text: 'Cara menggunakan giveaway langkah demi langkah',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Langkah 1 - Masukkan peserta:</strong> Tempelkan daftar nama Anda ke dalam kotak teks utama. Alat ini secara otomatis mendeteksi setiap ganti baris sebagai peserta yang berbeda. Ada duplikat? Tidak masalah, alat ini akan menghapusnya.',
        '<strong>Langkah 2 - Sesuaikan:</strong> Di tab pengaturan Anda dapat mengaktifkan hitung mundur untuk menciptakan ketegangan, efek konfeti untuk merayakan, atau mengaktifkan "daftar hitam" untuk mengecualikan nama tertentu.',
        '<strong>Langkah 3 - Undi!</strong> Klik tombol utama dan mesin kami akan menghasilkan pilihan acak yang aman secara kriptografi. Pemenang akan ditampilkan dengan jelas dan berkesan.',
      ],
    },
    {
      type: 'title',
      text: 'Entri Berbobot: Berikan Keuntungan kepada Peserta Tertentu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ingin memberi penghargaan kepada subscriber setia Anda atau memberi lebih banyak peluang kepada peserta tertentu? Sistem <strong>Entri Berbobot</strong> kami unik dan memungkinkan Anda untuk memberikan "bobot" atau pengganda pada nama mana pun tanpa harus menulisnya berkali-kali.',
    },
    {
      type: 'tip',
      title: 'Cara memberikan bobot pada nama',
      html: '<p>Gunakan tanda bintang (*) atau "x" diikuti dengan jumlah partisipasi. Contoh:</p><ul><li><strong>"Budi * 5"</strong> - Budi berkompetisi seolah-olah dia adalah 5 orang</li><li><strong>"Siti x 10"</strong> - Siti memiliki peluang 10 kali lebih besar</li><li><strong>"Joko"</strong> - Tanpa simbol = 1 entri reguler</li></ul><p>Ini sempurna untuk giveaway di mana Anda ingin memberikan keuntungan kepada subscriber VIP atau pengguna spesial.</p>',
    },
    {
      type: 'title',
      text: 'Privasi dan Keamanan Total',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Berbeda dengan alat online lainnya, <strong>kami tidak menyimpan data Anda</strong>. Semua pemrosesan nama dan eksekusi pengundian terjadi secara lokal di browser Anda sendiri. Daftar peserta Anda tidak pernah dikirim melalui jaringan atau disimpan di server eksternal mana pun.',
    },
    {
      type: 'paragraph',
      html: '<strong>Apa artinya ini?</strong> Daftar peserta Anda adalah milik Anda sepenuhnya. Begitu tab ditutup, data akan hilang. Tanpa cookie pelacakan, tanpa profil pengguna, tanpa basis data terpusat. Jaminan privasi maksimal untuk Anda dan mereka yang berpartisipasi dalam giveaway Anda.',
    },
    {
      type: 'title',
      text: 'Transparansi Matematis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beberapa orang mungkin bertanya: "Bagaimana jika Anda memanipulasi hasilnya?" Jawabannya sederhana: <strong>kami tidak bisa</strong>. Kode pengundian bersifat deterministik dan kriptografis. Tanpa variabel tersembunyi, tanpa pengaturan di belakang layar.',
    },
    {
      type: 'paragraph',
      html: 'Setiap pemenang adalah hasil langsung dari algoritma Fisher-Yates Shuffle yang diterapkan pada daftar Anda, menggunakan entropi kriptografi nyata. Jika Anda ingin mengaudit prosesnya, kode tersedia di GitHub untuk pemeriksaan publik.',
    },
  ],
  ui: {
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi Teknis',
    title: 'Giveaway Acak',
    totalParticipants: 'Total Peserta Unik',
    ready: 'SIAP',
    participants: 'Peserta',
    settings: 'Pengaturan',
    importFile: 'Impor File',
    clearAll: 'Hapus semua',
    placeholder: 'Ketik atau tempel nama di sini...\nBudi Santoso\nSiti Aminah\n@user_twitch',
    onePerLine: '1 peserta per baris',
    lines: 'baris',
    filters: 'Filter',
    allowDuplicates: 'Izinkan Duplikat',
    winnerCount: 'Jumlah Pemenang',
    autoRemove: 'Hapus Pemenang Otomatis',
    blacklist: 'Daftar Hitam (Pengecualian)',
    blacklistPlaceholder: 'Nama yang dilarang (satu per baris)...',
    blacklistInfo: 'Pengguna ini tidak akan masuk dalam pengundian.',
    sceneEffects: 'Efek Adegan',
    countdown: 'Hitung Mundur (3d)',
    confetti: 'Konfeti Kemenangan',
    zenMode: 'Mode Zen (Sembunyikan Panel)',
    waitingParticipants: 'Menunggu peserta...',
    winner: 'PEMENANG',
    reroll: 'Undi Ulang',
    history: 'Riwayat sesi ini',
    noWinnersYet: 'Belum ada pemenang...',
    startGiveaway: 'Mulai Giveaway',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
