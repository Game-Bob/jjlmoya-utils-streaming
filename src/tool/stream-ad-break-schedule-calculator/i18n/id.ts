import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: 'Bagaimana kalkulator menempatkan jeda iklan?', answer: 'Kalkulator membandingkan menit konten dengan interval yang dipilih, lalu menempatkan jeda pada batas segmen pertama yang tersedia. Segmen tidak pernah dipotong.' },
  { question: 'Format apa yang digunakan untuk blok konten?', answer: 'Masukkan satu blok per baris dengan format Nama | menit, misalnya Pembukaan | 15. Urutannya menjadi rundown.' },
  { question: 'Mengapa jeda bisa lebih lambat dari interval?', answer: 'Kalkulator menghormati batas segmen. Jika satu segmen melewati interval, jeda dipindahkan ke batas berikutnya dan ketegangan itu ditandai.' },
  { question: 'Apakah ini mengikuti aturan iklan platform?', answer: 'Tidak. Ini adalah model perencanaan berdasarkan interval, durasi jeda, dan struktur acara Anda. Periksa aturan platform, kontrak, dan wilayah tujuan yang terbaru.' },
  { question: 'Apakah waktu selesai sudah termasuk jeda?', answer: 'Ya. Menit konten dan waktu iklan ditampilkan terpisah, tetapi waktu selesai menjumlahkan semua jeda yang direncanakan.' },
];
const howTo = [
  { name: 'Atur mulai dan aturan jeda', text: 'Pilih waktu mulai, menit konten, interval antarkerja jeda, dan durasi setiap jeda.' },
  { name: 'Masukkan rundown', text: 'Tulis setiap blok sebagai Nama | menit. Buat batas di tempat pembawa acara dapat berhenti secara alami.' },
  { name: 'Baca rel waktu', text: 'Lihat lokasi jeda, waktu yang ditambahkan, dan apakah segmen panjang menggeser target.' },
  { name: 'Salin lembar produksi', text: 'Periksa peringatan lalu salin daftar waktu untuk produser, moderator, atau catatan adegan.' },
];
const seo: SEOSection[] = [
  { type: 'title', text: 'Rencanakan jeda di sekitar acara', level: 2 },
  { type: 'paragraph', html: 'Siaran langsung memiliki dua jam: menit untuk konten dan waktu nyata yang mencakup jeda. Kalkulator ini menampilkan keduanya dan menghitung waktu selesai dari rundown, interval, serta durasi jeda.' },
  { type: 'paragraph', html: 'Saat menit konten mencapai interval, jeda ditempatkan pada batas yang sesuai berikutnya. Anda dapat memindahkan atau memendekkan blok sebelum siaran, atau menerima keterlambatan dengan sadar.' },
  { type: 'title', text: 'Gunakan batas segmen sebagai tanda produksi', level: 2 },
  { type: 'paragraph', html: 'Waktu yang baik biasanya muncul setelah pembukaan, pergantian topik, pertandingan, atau interupsi yang sudah direncanakan. Satu blok panjang tidak memberi titik aman; peringatan mengubah masalah editorial itu menjadi keputusan.' },
  { type: 'list', items: ['Bagi wawancara panjang menjadi pembukaan, percakapan, dan pertanyaan.', 'Simpan penutup sebagai blok terakhir.', 'Bandingkan menit konten dengan waktu selesai yang sudah termasuk iklan.', 'Berikan lembar ini kepada orang yang menjalankan jeda.'] },
  { type: 'title', text: 'Baca tiga sinyal waktu', level: 2 },
  { type: 'table', headers: ['Sinyal', 'Arti', 'Tindakan'], rows: [['Konten', 'Menit dalam rundown', 'Pastikan durasi editorial sesuai janji'], ['Waktu iklan', 'Menit tambahan dari jeda', 'Beri tahu pembawa acara dan produksi'], ['Selesai tayang', 'Mulai ditambah konten dan jeda', 'Pesan waktu studio atau serah terima yang benar']] },
  { type: 'tip', title: 'Ini bukan jaminan platform', html: 'Hasilnya adalah rundown lokal. Kalkulator tidak menjalankan iklan dan tidak memastikan iklan yang dilihat penonton, kontrak, atau aturan. Periksa ketentuan tujuan terbaru.' },
  { type: 'title', text: 'Buat rencana yang berguna di ruang kontrol', level: 2 },
  { type: 'paragraph', html: 'Salin rencana setelah membaca peringatan. Waktu yang jelas membantu menyiapkan adegan, memberi tahu moderator, dan melindungi bagian penting acara. Jika jeda tidak muncul, buat batas editorial yang masuk akal.' },
  { type: 'tip', title: 'Periksa jam setelah latihan', html: 'Percakapan dan transisi teknis sering bertambah panjang. Gunakan hasil ini sebagai dasar, lalu perbarui menit setelah latihan.' },
];
export const content = makeContent({
  slug: 'kalkulator-jadwal-jeda-iklan-stream',
  title: 'Kalkulator jadwal jeda iklan siaran langsung',
  description: 'Ubah rundown siaran langsung menjadi jadwal jeda iklan dan hitung waktu selesai yang sebenarnya.',
  ui: {
    startTimeLabel: 'Waktu mulai siaran', startTimeHint: 'Kapan siaran dimulai', streamDurationLabel: 'Menit konten yang direncanakan', streamDurationHint: 'Durasi acara tanpa jeda', cadenceLabel: 'Interval jeda', cadenceHint: 'Tempatkan jeda setelah menit konten ini', breakLengthLabel: 'Durasi jeda', breakLengthHint: 'Menit yang ditambahkan ke jam siaran', segmentsLabel: 'Rundown', segmentsHint: 'Satu baris per blok: Nama | menit', presetsLabel: 'Mulai dengan bentuk acara', presetQuick: 'Siaran dua jam', presetLong: 'Acara panjang', presetInterview: 'Siaran wawancara', scheduleLabel: 'Rel waktu tayang', scheduleHint: 'Jeda ditempatkan pada batas pertama yang tersedia setelah interval.', contentTotalLabel: 'Konten', adsTotalLabel: 'Waktu iklan', plannedEndLabel: 'Selesai tayang', breaksLabel: 'Jeda', stateReady: 'Batas siap digunakan', stateWarning: 'Periksa ketegangan waktu', stateEmpty: 'Tambahkan rundown', stateReadyText: 'Jadwal ini dapat diberikan kepada produser sebagai rundown awal.', stateWarningText: 'Ada baris yang tidak valid atau interval tidak bertemu batas alami.', stateEmptyText: 'Tambahkan setidaknya dua blok agar jeda dapat ditempatkan di antaranya.', copyLabel: 'Salin rundown', resetLabel: 'Pulihkan contoh', copiedLabel: 'Rundown disalin', copyErrorLabel: 'Penyalinan diblokir. Pilih jadwal lalu salin secara manual.', segmentKind: 'Konten', breakKind: 'Jeda iklan', minutesShort: 'mnt', noEntriesText: 'Rel waktu Anda akan muncul di sini.', invalidLineText: 'Periksa baris {lines}. Gunakan Nama | menit.', plannedMismatchText: 'Rundown berbeda dari durasi rencana sebesar {difference}.', boundaryWarningText: 'Tidak ada jeda: interval tercapai di dalam satu blok. Tambahkan batas atau pecah blok tersebut.'
  }, seo, faq, howTo,
});
