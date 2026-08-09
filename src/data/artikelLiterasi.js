import {
  faUsers,
  faLandmark,
  faStarAndCrescent,
} from '@fortawesome/free-solid-svg-icons'

const articles = [
  {
    id: 'sosial',
    icon: faUsers,
    title: 'Sosial',
    subtitle: 'Literasi Digital dalam Kehidupan Sosial',
    desc: 'Mencakup kemampuan menggunakan media sosial secara bijak, memahami etika berkomunikasi online, serta melindungi diri dari cyberbullying dan ujaran kebencian.',
    points: [
      'Etika berkomunikasi di media sosial dan platform digital',
      'Pencegahan cyberbullying dan ujaran kebencian',
      'Literasi informasi: memilah berita hoaks dan fakta',
    ],
    radius: 'rounded-sm',
    contentFull: [
      {
        heading: 'Mengapa Literasi Sosial Digital Penting?',
        body: 'Di era digital, interaksi sosial telah bergeser dari tatap muka ke ruang virtual. Media sosial seperti Instagram, TikTok, Twitter, dan Facebook telah menjadi ruang publik baru tempat masyarakat berinteraksi, berbagi informasi, dan membentuk opini. Tanpa literasi digital yang memadai, masyarakat rentan terhadap berbagai risiko seperti penyebaran informasi palsu (hoaks), ujaran kebencian, dan cyberbullying.',
      },
      {
        heading: 'Etika Berkomunikasi di Dunia Maya',
        body: 'Berkomunikasi di dunia maya memerlukan etika yang tidak kalah penting dibanding komunikasi tatap muka. Sayangnya, anonimitas di internet seringkali membuat orang melupakan sopan santun. Literasi digital sosial mengajarkan pentingnya menggunakan bahasa yang santun, tidak menyebarkan konten provokatif, serta menghormati privasi dan pendapat orang lain.',
      },
      {
        heading: 'Melindungi Diri dari Cyberbullying',
        body: 'Cyberbullying atau perundungan siber adalah tindakan agresif yang dilakukan secara berulang melalui media digital. Bentuknya bisa berupa komentar kasar, penyebaran rumor, pengucilan, atau impersonasi. Literasi digital membekali individu dengan kemampuan mengenali, menghindari, dan melaporkan tindakan cyberbullying.',
      },
      {
        heading: 'Dampak Media Sosial terhadap Kesehatan Mental',
        body: 'Penggunaan media sosial yang berlebihan telah dikaitkan dengan peningkatan kecemasan, depresi, dan gangguan tidur, terutama di kalangan remaja. Fenomena FOMO (Fear Of Missing Out) dan perbandingan sosial yang tidak sehat seringkali menjadi pemicu. Literasi digital membantu pengguna memahami batasan sehat dalam bermedia sosial.',
      },
    ],
    photos: [
      { src: 'https://picsum.photos/seed/social1/800/600', alt: 'Interaksi sosial digital', radius: 'rounded-xl' },
      { src: 'https://picsum.photos/seed/social2/800/600', alt: 'Komunikasi digital', radius: 'rounded-sm' },
      { src: 'https://picsum.photos/seed/social3/800/600', alt: 'Keamanan online', radius: 'rounded-lg' },
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'kebudayaan',
    icon: faLandmark,
    title: 'Kebudayaan',
    subtitle: 'Teknologi untuk Pelestarian Budaya',
    desc: 'Berperan penting menjaga warisan budaya di tengah arus globalisasi melalui digitalisasi naskah kuno hingga promosi seni tradisional.',
    points: [
      'Digitalisasi naskah kuno dan warisan budaya tak benda',
      'Promosi seni dan budaya lokal melalui platform digital',
      'Menjaga identitas budaya di era globalisasi digital',
    ],
    radius: 'rounded-lg',
    contentFull: [
      {
        heading: 'Digitalisasi: Menyelamatkan Warisan Leluhur',
        body: 'Indonesia memiliki kekayaan budaya yang luar biasa — dari naskah kuno, prasasti, hingga tradisi lisan yang diwariskan turun-temurun. Sayangnya, banyak warisan ini terancam punah karena faktor usia, bencana alam, atau kurangnya dokumentasi. Teknologi digital membuka peluang besar melalui digitalisasi naskah kuno dan pembuatan arsip digital yang dapat diakses generasi mendatang.',
      },
      {
        heading: 'Promosi Seni & Budaya di Platform Digital',
        body: 'Platform seperti YouTube, Instagram, dan TikTok telah menjadi panggung baru bagi seniman tradisional untuk menampilkan karya mereka ke audiens global. Tari tradisional, musik daerah, dan kerajinan tangan kini dapat dinikmati oleh siapa saja di seluruh dunia.',
      },
      {
        heading: 'Membangun Komunitas Budaya Berbasis Teknologi',
        body: 'Komunitas virtual berbasis minat budaya kini bermunculan di berbagai platform. Dari grup Facebook penggemar batik hingga server Discord yang membahas sejarah Nusantara, teknologi memfasilitasi terbentuknya ruang diskusi dan kolaborasi lintas daerah.',
      },
      {
        heading: 'Tantangan: Antara Globalisasi dan Identitas Lokal',
        body: 'Di satu sisi, globalisasi digital membuka akses ke budaya global. Namun arus budaya asing yang deras dapat mengikis identitas lokal. Literasi digital kebudayaan mengajarkan keseimbangan: terbuka terhadap budaya global namun tetap bangga melestarikan warisan budaya sendiri.',
      },
    ],
    photos: [
      { src: 'https://picsum.photos/seed/culture1/800/600', alt: 'Budaya tradisional', radius: 'rounded-lg' },
      { src: 'https://picsum.photos/seed/culture2/800/600', alt: 'Warisan seni budaya', radius: 'rounded-sm' },
      { src: 'https://picsum.photos/seed/culture3/800/600', alt: 'Tarian budaya Indonesia', radius: 'rounded-xl' },
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'keagamaan',
    icon: faStarAndCrescent,
    title: 'Keagamaan',
    subtitle: 'Teknologi sebagai Sarana Syiar & Belajar Agama',
    desc: 'Membantu masyarakat memanfaatkan teknologi untuk memperdalam spiritualitas secara sehat dan bertanggung jawab.',
    points: [
      'Mengakses sumber belajar agama yang kredibel secara online',
      'Etika berdakwah dan menyebarkan konten keagamaan di internet',
      'Memanfaatkan aplikasi dan platform untuk ibadah sehari-hari',
    ],
    radius: 'rounded-xl',
    contentFull: [
      {
        heading: 'Belajar Agama di Era Digital',
        body: 'Dahulu, belajar agama terbatas pada kitab fisik dan majelis taklim. Kini, smartphone telah menjadi "perpustakaan berjalan" yang menyediakan akses ke ribuan kitab, ceramah, dan kajian online. Aplikasi Quran digital, jadwal sholat, dan platform streaming kajian memudahkan umat untuk terus belajar kapan saja dan di mana saja.',
      },
      {
        heading: 'Memilih Sumber Belajar yang Kredibel',
        body: 'Kemudahan akses juga membawa tantangan: tidak semua konten keagamaan di internet berasal dari sumber yang kredibel. Maraknya ustadz "dadakan" di media sosial menjadi ancaman serius. Literasi digital keagamaan mengajarkan umat untuk kritis, mengecek kredibilitas penyampai, dan mengutamakan rujukan dari lembaga yang diakui.',
      },
      {
        heading: 'Etika Berdakwah di Media Sosial',
        body: 'Berdakwah di era digital memerlukan pendekatan berbeda. Konten harus dikemas menarik, ringkas, dan mudah dipahami. Yang tak kalah penting: dakwah harus disampaikan dengan hikmah dan kasih sayang, bukan dengan celaan. Konten keagamaan yang provokatif justru kontraproduktif dan memecah belah.',
      },
      {
        heading: 'Menghindari Radikalisme Online',
        body: 'Internet juga menjadi lahan subur bagi kelompok radikal untuk menyebarkan ideologi mereka, terutama menyasar anak muda. Literasi digital keagamaan membekali masyarakat dengan kemampuan mengenali ciri-ciri konten radikal: ajakan kekerasan, klaim kebenaran tunggal, dan ujaran kebencian terhadap kelompok lain.',
      },
    ],
    photos: [
      { src: 'https://picsum.photos/seed/religion1/800/600', alt: 'Spiritualitas keagamaan', radius: 'rounded-sm' },
      { src: 'https://picsum.photos/seed/religion2/800/600', alt: 'Ibadah dan peribadatan', radius: 'rounded-xl' },
      { src: 'https://picsum.photos/seed/religion3/800/600', alt: 'Kedamaian dalam beragama', radius: 'rounded-md' },
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
]
export default articles
