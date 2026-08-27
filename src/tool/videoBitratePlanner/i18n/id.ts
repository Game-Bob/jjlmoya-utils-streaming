import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'id',
  slug: 'perencana-bitrate-penyimpanan-video',
  title: 'Perencana Bitrate dan Penyimpanan Video',
  description: 'Perkirakan penyimpanan video, waktu frame, dan tingkat bitrate praktis untuk streaming atau rekaman.',
  ui: {
    presetLabel: 'Mulai dengan sebuah adegan', presetFast: 'Streaming web cepat', presetUpload: 'Live harian', presetArchive: 'Arsip 4K', resolutionLabel: 'Resolusi', frameRateLabel: 'Frame per detik', codecLabel: 'Codec', bitrateLabel: 'Bitrate video', durationLabel: 'Durasi sesi', copiesLabel: 'Salinan yang disimpan', minutesLabel: 'menit', copiesShort: 'salinan', h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: 'Efisiensi codec mengubah penilaian kualitas, bukan hitungan penyimpanan.', sceneLabel: 'Sinyal ke penyimpanan', signalSource: 'Gambar', codecGate: 'Encoding', storageReel: 'Penyimpanan', qualityEstimate: 'Penilaian kualitas', storageEstimate: 'Perkiraan penyimpanan', perCopy: 'Satu salinan', allCopies: 'Semua salinan', perHour: 'Per jam', frameTime: 'Waktu frame', dataPerFrame: 'Data per frame', comparisonLabel: 'Perbandingan penyimpanan', lean: 'Ringan', balanced: 'Seimbang', crisp: 'Tajam', qualityLean: 'Ringan dan hemat', qualityBalanced: 'Sinyal seimbang', qualityStrong: 'Detail kuat', qualityExcellent: 'Ruang sangat lega', qualityAggressive: 'Kompresi agresif', qualityGuidance: 'Perkiraan visual untuk membandingkan pengaturan.', capacityLight: 'Jejak penyimpanan ringan', capacityMedium: 'Jejak penyimpanan sedang', capacityHeavy: 'Jejak penyimpanan berat', capacityNote: 'Status kapasitas berdasarkan total salinan di atas.', reset: 'Atur ulang nilai', localNote: 'Berjalan lokal di browser ini. Tidak ada yang diunggah.', assumptionTitle: 'Baca asumsi', assumptionText: 'Penyimpanan memakai gigabyte desimal dan bitrate video yang dimasukkan. Audio, overhead container, lonjakan bitrate variabel, dan padding sistem file tidak ditambahkan.', warningText: 'Tingkat kualitas adalah perkiraan perencanaan. Gerakan, grain, keyframe, preset encoder, transcoding platform, dan cadangan jaringan dapat mengubah hasil nyata.', readyText: 'Ubah nilai untuk menggambar ulang sinyal.', calculateAria: 'Perbarui rencana video',
  },
  faq: [
    { question: 'Apakah perencana ini mengunggah atau memeriksa video saya?', answer: 'Tidak. Perencana hanya memakai nilai yang Anda masukkan di browser. Tidak ada file yang diunggah, kamera yang diperiksa, atau layanan streaming yang dipanggil.' },
    { question: 'Bagaimana penyimpanan dihitung?', answer: 'Bitrate dikalikan durasi lalu dibagi delapan untuk mengubah bit menjadi byte. Hasilnya memakai gigabyte desimal dan dikalikan dengan jumlah salinan.' },
    { question: 'Apa arti penilaian kualitas?', answer: 'Ini adalah aturan praktis berdasarkan piksel, frame per detik, bitrate, dan faktor efisiensi codec yang luas. Ini bukan janji kualitas visual karena gerakan dan pengaturan encoder juga berpengaruh.' },
    { question: 'Mengapa bitrate yang sama berubah saat resolusi atau frame rate berubah?', answer: 'Resolusi lebih tinggi memiliki lebih banyak piksel dan frame rate lebih tinggi mengirim lebih banyak frame tiap detik. Lebih banyak informasi visual memakai bitrate yang sama.' },
    { question: 'Bisakah hasil ini dianggap sebagai syarat platform?', answer: 'Gunakan untuk merencanakan kapasitas dan membandingkan skenario. Syarat platform dapat berubah, jadi periksa panduan encoder terbaru dan sisakan ruang upload untuk live stream.' },
  ],
  howTo: [
    { name: 'Pilih format gambar', text: 'Pilih resolusi dan frame rate yang sesuai dengan streaming atau rekaman yang akan dibuat.' },
    { name: 'Atur sinyal encoding', text: 'Pilih codec lalu masukkan bitrate video dalam megabit per detik. Gunakan preset sebagai titik awal.' },
    { name: 'Jelaskan sesi', text: 'Masukkan durasi dalam menit dan jumlah salinan yang ingin disimpan, diedit, atau dikirim.' },
    { name: 'Baca pertukarannya', text: 'Bandingkan tingkat ringan, seimbang, dan tajam untuk melihat perubahan penyimpanan sebelum mulai.' },
  ],
  seo: [
    { type: 'title', text: 'Perkirakan penyimpanan video sebelum streaming atau merekam', level: 2 },
    { type: 'paragraph', html: 'Kalkulator bitrate video membantu saat sesi rekaman memerlukan rencana penyimpanan yang realistis. Masukkan bitrate, durasi, dan salinan, lalu bandingkan tiga tingkat sinyal untuk format gambar yang sama.' },
    { type: 'title', text: 'Yang dihitung perencana', level: 3 },
    { type: 'list', items: ['<strong>Penyimpanan:</strong> bitrate dikali waktu, diubah dari bit menjadi gigabyte desimal, lalu dikali jumlah salinan.', '<strong>Waktu frame:</strong> milidetik yang tersedia untuk setiap frame pada FPS yang dipilih dan perkiraan data per frame.', '<strong>Penilaian kualitas:</strong> perbandingan piksel per frame yang disesuaikan dengan faktor efisiensi codec.'] },
    { type: 'title', text: 'Bagaimana resolusi dan FPS mengubah pertukaran', level: 3 },
    { type: 'paragraph', html: 'Resolusi menambah jumlah piksel pada setiap frame dan FPS menambah jumlah frame tiap detik. Jika bitrate tetap, setiap frame menerima lebih sedikit data dan kompresi menjadi lebih berat.' },
    { type: 'tip', title: 'Sisakan ruang untuk live stream', html: 'Anggap bitrate video sebagai beban utama, bukan seluruh kapasitas koneksi. Sisakan ruang untuk audio, protokol, dan perubahan jaringan, lalu uji adegan dengan gerakan serupa.' },
    { type: 'title', text: 'Gunakan panduan platform untuk pengaturan akhir', level: 3 },
    { type: 'paragraph', html: 'Perencana ini tidak terikat platform. YouTube menerbitkan rentang bitrate menurut resolusi dan frame rate. Gunakan aturan terbaru tujuan Anda untuk memvalidasi skenario di sini.' },
    { type: 'title', text: 'Mengapa hasil penyimpanan adalah perkiraan', level: 3 },
    { type: 'paragraph', html: 'Bitrate nominal tidak menjelaskan setiap byte file akhir. Bitrate variabel, audio, metadata container, keyframe, transcoding, dan satuan sistem dapat mengubah ukuran akhir.' },
  ],
});
