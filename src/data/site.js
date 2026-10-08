// Site genelinde kullanılan sabit bilgiler.
export const site = {
  name: 'Meriz Palet',
  slogan: 'Sağlam Tahta, Sağlam Ticaret',
  phone: '+90 362 999 00 55',
  phoneDisplay: '0362 999 00 55',
  whatsapp: '905555555555',
  whatsappDisplay: '+90 555 555 55 55',
  email: 'meriz_palet55@gmail.com',
  email2: 'info@merizpalet.com.tr',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  linkedin: '',
  address: 'İlkadım / Samsun - Organize Sanayi Bölgesi, 19 Mayıs Mah. 1234 Sk. No:55',
  workingHours: 'Pzt - Cmt: 08:00 - 18:30',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3d23989.81794243858!2d36.31323744474742!3d41.2712743694441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4087d87f84ef2cf9%3A0xb601b63f03548d3e!2zNTUwNzAgxLBsa2FkxLFtL1NhbXN1bg!5e0!3m2!1str!2str!4v1691302932760!5m2!1str!2str',
  stats: [
    { value: '15+', label: 'Yıllık Tecrübe', sub: 'Samsun merkezli üretim' },
    { value: '50K+', label: 'Aylık Üretim', sub: 'Adet palet kapasitesi' },
    { value: '81', label: 'İle Sevkiyat', sub: 'Türkiye geneli' },
    { value: '%100', label: 'Müşteri Memnuniyeti', sub: 'Kalite odaklı' },
  ],
};

export const navLinks = [
  { label: 'Ürünlerimiz', to: '/urunler' },
  { label: 'Hizmetler', href: '#hizmetler', anchor: true },
  { label: 'Belgelerimiz', to: '/belgelerimiz' },
  { label: 'Blog', to: '/blog' },
  { label: 'S.S.S.', to: '/sss' },
  { label: 'İletişim', href: '#iletisim', cta: true },
];

export const hero = {
  pre: "Türkiye'nin",
  mark: 'En Kaliteli',
  post: 'Paletleri',
  lead: 'Samsun merkezli üretim tesisimizden Türkiye geneline: EPAL standartlarında Euro palet, CP palet ve özel ölçü paletler. Isıl işlemli, ihracat uyumlu.',
  bullets: ['ISPM-15 Isıl İşlemli', 'EPAL Standart', 'Özel Ölçü Üretim', 'Aynı Gün Sevkiyat'],
};

export const aboutText = [
  'Meriz Palet, Samsun Organize Sanayi Bölgesi’nde 15 yılı aşkın tecrübesiyle ahşap palet üretiminde uzmanlaşmış bir aile şirketidir. Günde yüzlerce, ayda on binlerce paleti aynı kalite standardında üretiyoruz.',
  'Tüm ürünlerimiz fırınlanmış çam kerestesinden üretilir, isteğe bağlı olarak ISPM-15 ısıl işlem sertifikalı olarak ihracat paleti olarak hazırlanır. EPAL, EUR, CP1-CP9 ve özel ölçülerde üretim yapıyoruz. Kalın, orta ve ince tip seçenekleriyle her yükün ihtiyacına uygun çözüm sunuyoruz.',
  'Amacımız sadece palet satmak değil, lojistik maliyetlerinizi düşürecek en doğru paleti birlikte bulmak. Ücretsiz keşif, hızlı teklif ve Türkiye geneli sevkiyat ile yanınızdayız.',
];

export const features = [
  {
    icon: 'shield',
    title: 'ISPM-15 Isıl İşlem',
    desc: 'İhracat için zorunlu ısıl işlemli paletler. HT damgalı, barkodlu, sertifikalı.',
  },
  {
    icon: 'ruler',
    title: 'Standart & Özel Ölçü',
    desc: '80x60’tan 130x114’e kadar tüm EPAL/CP ölçüler + projenize özel üretim.',
  },
  {
    icon: 'truck',
    title: 'Türkiye Geneli Sevkiyat',
    desc: 'Samsun’dan 81 ile. Tır bazlı, parsiyel ve acil teslimat seçenekleri.',
  },
  {
    icon: 'leaf',
    title: 'Sürdürülebilir Ahşap',
    desc: 'FSC uyumlu tedarik, fırınlanmış kereste, uzun ömürlü ve tamir edilebilir yapı.',
  },
  {
    icon: 'badge',
    title: 'Kalite Kontrol',
    desc: 'Her parti üretim öncesi nem ölçümü, çivi kontrolü ve yük testi.',
  },
  {
    icon: 'support',
    title: 'Teknik Destek',
    desc: 'Yükünüze göre doğru paleti seçiyoruz. Ücretsiz danışmanlık ve numune.',
  },
];

export const services = [
  {
    title: 'Euro Palet Üretimi',
    desc: 'EPAL ve EUR standartlarında 80x120, 100x120, 120x80 gibi en çok kullanılan ölçüler. 6 ve 9 takozlu seçenekler.',
    image: 'https://ik.imagekit.io/lgf1wyqnvg/urun/urun1.jpg?updatedAt=1690966644024',
  },
  {
    title: 'CP Palet Üretimi',
    desc: 'Kimyasal endüstrisi için CP1’den CP9’a kadar tüm tipler. 100x120 CP1, 80x120 CP2, 114x114 CP3 ve diğerleri.',
    image: 'https://ik.imagekit.io/lgf1wyqnvg/urun/urun13.jpg?updatedAt=1690966643608',
  },
  {
    title: 'Özel Ölçü Palet',
    desc: 'Makinenize, raf sisteminize veya ürününüze göre özel tasarım. 4 tarafı kapalı, 2 tarafı açık, tek kullanımlık veya ağır hizmet tipi.',
    image: 'https://ik.imagekit.io/lgf1wyqnvg/urun/urun9.jpg?updatedAt=1690966649194',
  },
  {
    title: 'Palet Tamiri & Geri Alım',
    desc: 'Kullanılmış paletlerin tamiri, zımpara ve takoz değişimi. İkinci el palet alım-satımı ile maliyetlerinizi düşürün.',
    image: 'https://ik.imagekit.io/lgf1wyqnvg/urun/urun7.jpg?updatedAt=1690966646969',
  },
];

export const processSteps = [
  { step: '01', title: 'İhtiyacı Dinliyoruz', desc: 'Yük ağırlığı, istifleme, ihracat durumu ve adet bilgisini alıyoruz.' },
  { step: '02', title: 'En Doğru Ölçüyü Öneriyoruz', desc: 'Standart mı özel mi? En ekonomik ve güvenli çözümü hesaplıyoruz.' },
  { step: '03', title: 'Üretip Sevk Ediyoruz', desc: 'Onay sonrası üretim, kalite kontrol ve Türkiye geneli teslimat.' },
];

export const faqs = [
  {
    q: 'Hangi ölçülerde palet üretiyorsunuz?',
    a: '80x60, 80x120, 100x120, 120x100, 110x110, 114x114, 110x130 başta olmak üzere EPAL ve CP1-CP9 standartlarının tamamı ve özel ölçüler. Projenize göre 60x40 cm’den 130x130 cm’e kadar üretim yapabiliyoruz.',
  },
  {
    q: 'ISPM-15 ısıl işlemli palet nedir? İhracat için gerekli mi?',
    a: 'Evet, ahşap paletle ihracat yapıyorsanız ISPM-15 ısıl işlem zorunludur. Paletler 56°C’de 30 dakika fırınlanır, HT damgası ve sertifika verilir. Meriz Palet tüm ihracat paletlerini sertifikalı olarak teslim eder.',
  },
  {
    q: 'Minimum sipariş miktarı var mı? Samsun dışına gönderiyor musunuz?',
    a: 'Minimum sipariş 50 adettir. Tır bazında (500+ adet) çok daha avantajlı fiyat veririz. Türkiye’nin 81 iline anlaşmalı nakliye ile gönderim yapıyoruz. Samsun içi kendi araçlarımızla aynı gün teslimat mümkün.',
  },
  {
    q: 'Paletlerin taşıma kapasitesi nedir?',
    a: 'Tipine göre değişir: İnce tip 500-750 kg, orta tip 1000-1250 kg, kalın tip ve Euro palet 1500 kg statik, 1000 kg dinamik taşıma kapasitesine sahiptir. CP paletler 1250-1500 kg arasıdır. Yükünüze göre doğru tipi öneriyoruz.',
  },
  {
    q: 'Teklif ne kadar sürede gelir?',
    a: 'WhatsApp veya form üzerinden ölçü, adet ve teslim yerini iletirseniz 30 dakika içinde net fiyat ve teslim tarihi veriyoruz. Acil ihtiyaçlar için telefonla arayabilirsiniz.',
  },
  {
    q: 'İkinci el palet alıyor musunuz?',
    a: 'Evet, kullanılabilir durumdaki Euro ve CP paletleri geri alıyoruz. Fotoğraf göndermeniz yeterli. Ayrıca tamir hizmetimizle mevcut paletlerinizi yenileyerek maliyetlerinizi düşürebilirsiniz.',
  },
];

export const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Lojistik Müdürü, Samsun Gıda A.Ş.',
    text: '2 yıldır tüm palet ihtiyacımızı Meriz’den alıyoruz. Ölçüler milimetrik, sevkiyat zamanında. İhracat paletlerinde hiç sorun yaşamadık.',
  },
  {
    name: 'Elif Demir',
    role: 'Satın Alma, Karadeniz Kimya',
    text: 'CP3 ve CP9 paletlerde özel ölçü ihtiyacımız vardı. Numuneyi 2 günde hazırlayıp onayımıza sundular. Kalite gerçekten üst düzey.',
  },
  {
    name: 'Murat Kaya',
    role: 'Depo Yöneticisi, E-Ticaret Firması',
    text: 'Fiyat/performans olarak en iyisi. 100x120 orta tip paletler raflarımıza tam uydu. Tamir hizmeti de büyük avantaj.',
  },
];

export const documents = [
  { title: 'ISPM-15 Isıl İşlem Sertifikası', type: 'Sertifika', year: '2024', desc: 'T.C. Tarım ve Orman Bakanlığı onaylı ısıl işlem operatör belgesi.' },
  { title: 'EPAL Lisans Belgesi', type: 'Lisans', year: '2024', desc: 'Avrupa Palet Birliği kalite standartlarına uygun üretim lisansı.' },
  { title: 'ISO 9001:2015 Kalite Yönetim', type: 'Sertifika', year: '2023', desc: 'Kalite yönetim sistemi sertifikası.' },
  { title: 'Fumigasyon Uygunluk Belgesi', type: 'Belge', year: '2024', desc: 'İhracat paletleri için fumigasyon ve işaretleme uygunluğu.' },
  { title: 'İş Güvenliği Belgesi', type: 'Belge', year: '2024', desc: 'Çalışan güvenliği ve üretim tesisi uygunluk belgesi.' },
  { title: 'Kapasite Raporu', type: 'Rapor', year: '2024', desc: 'Samsun Ticaret ve Sanayi Odası kapasite raporu.' },
];

export const blogPosts = [
  {
    id: 1,
    slug: 'euro-palet-olculeri-nedir',
    title: 'Euro Palet Ölçüleri Nedir? EPAL Standartları',
    excerpt: '80x120 Euro palet neden standart oldu? EPAL, EUR ve tek kullanımlık palet farkları, taşıma kapasiteleri ve doğru seçim rehberi.',
    date: '2024-12-10',
    category: 'Rehber',
    image: 'https://ik.imagekit.io/lgf1wyqnvg/urun/urun1.jpg?updatedAt=1690966644024',
    content: `
Euro palet denince akla ilk gelen 80x120 cm ölçüsüdür. Bu ölçü, Avrupa'da tren vagonları ve TIR'ların iç genişliğine göre optimize edilmiştir. EPAL (European Pallet Association) lisanslı paletler, 78 çivi, 11 tahta ve 9 takozdan oluşur ve 1500 kg statik yük taşır.

Meriz Palet olarak EPAL standartlarında üretim yapıyoruz. 80x60, 80x120, 100x120 ve 120x100 en çok talep gören ölçülerimiz. İhracat yapacaksanız mutlaka ISPM-15 ısıl işlemli palet tercih etmelisiniz.
    `,
  },
  {
    id: 2,
    slug: 'cp-palet-tipleri-cp1-cp9',
    title: 'CP Palet Tipleri: CP1’den CP9’a Kadar Rehber',
    excerpt: 'Kimyasal endüstrisi için geliştirilen CP paletlerin ölçüleri, kullanım alanları ve EPAL paletlerden farkları.',
    date: '2024-11-28',
    category: 'Teknik',
    image: 'https://ik.imagekit.io/lgf1wyqnvg/urun/urun13.jpg?updatedAt=1690966643608',
    content: `
CP paletler, kimya sektörü için VCI (Verband der Chemischen Industrie) tarafından standardize edilmiştir. CP1 (100x120) en yaygın olanıdır ve çuval, varil taşımada kullanılır. CP2 (80x120) ve CP3 (114x114) ise sıvı ve toz kimyasallar için idealdir.

Tüm CP paletler 4 girişli olup forklift ve transpalet ile her yönden alınabilir. Meriz Palet CP1-CP9 arası tüm tipleri stoklu üretir.
    `,
  },
  {
    id: 3,
    slug: 'ispm15-isil-islem-nedir',
    title: 'ISPM-15 Isıl İşlem Nedir? İhracat Paletinde Neden Zorunlu?',
    excerpt: 'Ahşap ambalaj malzemelerinde uluslararası bitki sağlığı standardı ISPM-15, HT damgası ve ihracat süreci.',
    date: '2024-11-15',
    category: 'İhracat',
    image: 'https://ik.imagekit.io/lgf1wyqnvg/urun/urun5.jpg?updatedAt=1690966646835',
    content: `
ISPM-15, ahşap ambalaj malzemelerinin zararlı organizmalardan arındırılması için geliştirilmiş uluslararası bir standarttır. Paletler 56°C çekirdek sıcaklığında 30 dakika fırınlanır ve üzerine IPPC damgası vurulur.

HT (Heat Treatment) damgası olmayan paletle yapılan ihracatlar gümrükten geri döner ve yüksek cezalar uygulanır. Meriz Palet, Tarım Bakanlığı onaylı ısıl işlem fırınına sahiptir.
    `,
  },
];
