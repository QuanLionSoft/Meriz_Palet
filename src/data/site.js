// Site genelinde kullanılan sabit bilgiler. Boş bırakılan alanlar sitede gösterilmez.
export const site = {
  name: 'Meriz Palet',
  // TODO: Eski koddaki telefon (46454651489465153) sahteydi, o yüzden boş bırakıldı.
  phone: '',
  // TODO: Ülke kodlu, sadece rakam: ör. '905551112233'. Boşsa WhatsApp butonu çıkmaz.
  whatsapp: '',
  email: 'meriz_palet55@gmail.com',
  instagram: '', // TODO: tam profil adresi
  facebook: '', // TODO: tam sayfa adresi
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23989.81794243858!2d36.31323744474742!3d41.2712743694441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4087d87f84ef2cf9%3A0xb601b63f03548d3e!2zNTUwNzAgxLBsa2FkxLFtL1NhbXN1bg!5e0!3m2!1str!2str!4v1691302932760!5m2!1str!2str',
};

export const navLinks = [
  { label: 'Ürünlerimiz', to: '/urunler' },
  { label: 'Belgelerimiz', to: '/belgelerimiz' },
  { label: 'Blog', to: '/blog' },
  { label: 'S.S.S.', to: '/sss' },
  { label: 'İletişim', href: '#iletisim', cta: true }, // vurgulu düğme, en sonda
];

// Ana sayfa başlığı. Metinler eski sitedeki slayt yazılarından (yazım hatası düzeltildi).
export const hero = {
  pre: "Türkiye'nin",
  mark: 'En Kaliteli',
  post: 'Paletleri',
  lead: 'Türkiye geneline hizmet veriyoruz. Ürünlerimizin boyutları standarttır.',
};

// TODO: Gerçek metinle değiştir. Şu an eski koddaki Lorem ipsum yer tutucusu.
export const aboutText = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi consectetur earum ex molestiae mollitia nemo, quae quaerat quia quidem sint tenetur velit.',
];

// TODO: Gerçek soru-cevaplarla değiştir. Şu an yer tutucu.
export const faqs = [
  {
    q: 'Soru 1',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    q: 'Soru 2',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    q: 'Soru 3',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
