export const getAllProducts = () => {
  return [
    {
      id: 'SYMA-001',
      slug: 'syma-x25pro',
      name: "SYMA X25PRO QR Quadcopter",
      category: `Drone`,
      categorySlug: 'syma',
      price: 1_714_500,
      stock: 50,
      imageUrl: '/assets/images/drone-X25PRO.jpg',
      description: `
        <ul class="list-disc pl-5">
          <li>Kamera dengan resolusi <strong>1 MP</strong> untuk pengalaman visual memadai.</li>
          <li>Dilengkapi <strong>GPS</strong> dan mode altitude hold untuk stabilitas optimal.</li>
          <li><strong>Frekuensi</strong>: 2.4G untuk kendali jarak jauh.</li>
          <li><strong>Waktu terbang</strong> hingga 12 menit untuk eksplorasi udara yang memuaskan.</li>
          <li><strong>360° 3D Flip</strong> untuk manuver akrobatik yang mengagumkan.</li>
          <li><strong>Waktu pengisian</strong>: 150 menit.</li>
          <li><strong>Jarak kendali</strong> hingga 70 meter.</li>
          <li>Baterai: 7.4V 1000 mAh Li-ion.</li>
        </ul>
      `
    },
    {
      id: 'SYMA-002',
      slug: 'syma-x8pro',
      name: "SYMA X8PRO RC Quadcopter",
      category: `Drone`,
      categorySlug: 'syma',
      price: 2_017_500,
      stock: 5,
      imageUrl: `/assets/images/drone-X8PRO.jpg`,
      description: `
        <ul class="list-disc pl-5">
          <li>Drone dengan <strong>desain ergonomis</strong> yang nyaman digunakan.</li>
          <li>Fitur <strong>durable</strong> untuk ketahanan dalam berbagai kondisi.</li>
          <li>Dilengkapi teknologi stabilisasi untuk <strong>kontrol optimal</strong>.</li>
          <li>Cocok untuk <strong>pemula</strong> maupun profesional yang ingin eksplorasi udara.</li>
        </ul>
      `
    },
    {
      id: 'Autel-003',
      slug: 'autel-evo-lite',
      name: "Autel Evo Lite+ Standard Arctic White",
      category: `Drone`,
      categorySlug: 'autel',
      price: 18_850_000,
      stock: 0,
      imageUrl: `/assets/images/drone-Autel.jpg`,
      description: `
        <ul class="list-disc pl-5">
          <li><strong>Desain premium</strong> dengan warna Arctic White yang elegan.</li>
          <li>Dibangun dengan material berkualitas tinggi untuk <strong>daya tahan lama</strong>.</li>
          <li>Kamera canggih untuk <strong>foto dan video udara</strong> profesional.</li>
          <li>Fitur navigasi modern untuk pengalaman penerbangan terbaik.</li>
        </ul>
      `
    },
    {
      id: 'DJI-004',
      slug: 'dji-matrice',
      name: "DJI Matrice 30T Drone",
      category: `Drone`,
      categorySlug: 'dji',
      price: 132_070_000,
      stock: 5,
      imageUrl: `/assets/images/drone-DJI-Matrice.jpg`,
      description: `
        <ul class="list-disc pl-5">
          <li><strong>Drone kelas profesional</strong> dengan fitur terkini.</li>
          <li>Desain <strong>tangguh dan tahan lama</strong> untuk berbagai kondisi lingkungan.</li>
          <li>Kamera dengan <strong>resolusi tinggi</strong> untuk detail gambar luar biasa.</li>
          <li>Dilengkapi <strong>teknologi keamanan</strong> untuk penerbangan yang aman dan stabil.</li>
        </ul>
      `
    },
    {
      id: 'DJI-005',
      slug: 'dji-dock-matrice',
      name: "DJI Dock Matrice 30T Package",
      category: `Drone`,
      categorySlug: 'dji',
      price: 531_190_000,
      stock: 0,
      imageUrl: `/assets/images/drone-DJI-Dock-Matrice-30T.jpg`,
      description: `
        <ul class="list-disc pl-5">
          <li><strong>Paket lengkap</strong> dengan docking system untuk operasional efisien.</li>
          <li>Dirancang untuk <strong>kebutuhan industri dan profesional</strong>.</li>
          <li>Kamera resolusi tinggi untuk <strong>pengawasan udara</strong>.</li>
          <li><strong>Desain modular</strong> memudahkan perawatan dan pembaruan perangkat.</li>
        </ul>
      `
    },
  ]
};
