<script>
const outlet = {
  name: 'Happy Puppy Antasari',
  tagline: 'Happy Puppy Antasari',
  address: 'Jl. P Antasari No.2, Air Putih, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75124',
  logo: '/images/happup-antasari-logo.jpeg',
  whatsappUrl: 'https://wa.me/6282148004822',
  instagramUrl: 'https://www.instagram.com/happup.samarinda.antasari/',
  facebookUrl: 'https://www.facebook.com/happup.samarinda.antasari/',
};

const getOnlineMenuImage = (name) => {
  const lowerName = name.toLowerCase();
  const seed = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const keywordRules = [
    ['mie', 'fried noodles'],
    ['kwetiaw', 'fried noodles'],
    ['bihun', 'fried noodles'],
    ['indomie', 'instant noodles'],
    ['chicken wings', 'chicken wings'],
    ['chicken nugget', 'chicken nuggets'],
    ['kentang', 'french fries'],
    ['sosis', 'fried sausage'],
    ['onion ring', 'onion rings'],
    ['pisang', 'banana dessert'],
    ['nachos', 'nachos'],
    ['cireng', 'fried snack'],
    ['tempe', 'fried tempeh'],
    ['tahu', 'fried tofu'],
    ['telur', 'omelette'],
    ['paru', 'fried beef'],
    ['pempek', 'fish cake'],
    ['sop iga', 'beef rib soup'],
    ['ayam', 'fried chicken'],
    ['sapi', 'beef dish'],
    ['udang', 'shrimp dish'],
    ['cumi', 'squid dish'],
    ['fu yung hai', 'omelette'],
    ['cap cay', 'stir fry vegetables'],
    ['salad', 'fruit salad'],
    ['buah', 'fresh fruit'],
    ['ice cream', 'ice cream'],
    ['frozz', 'candy'],
    ['hexos', 'mint candy'],
    ['chunky', 'chocolate bar'],
    ['cadbury', 'chocolate bar'],
    ['silverqueen', 'chocolate bar'],
    ['delfi', 'chocolate bar'],
    ['kacang', 'peanuts'],
    ['pringles', 'potato chips'],
    ['chitato', 'potato chips'],
    ['qtela', 'cassava chips'],
    ['milk shake', 'milkshake'],
    ['coca-cola', 'soft drink'],
    ['fanta', 'soft drink'],
    ['sprite', 'soft drink'],
    ['greensands', 'soft drink'],
    ['pokka', 'green tea drink'],
    ['soda', 'soft drink'],
    ['krating', 'energy drink'],
    ['pocari', 'sports drink'],
    ['pulpy', 'orange juice'],
    ['yakult', 'yogurt drink'],
    ['air mineral', 'mineral water'],
    ['milo', 'chocolate milk'],
    ['teh', 'iced tea'],
    ['jeruk', 'orange juice'],
    ['susu', 'milk'],
    ['cappuccino', 'cappuccino'],
    ['kopi', 'coffee'],
    ['rokok', 'cigarette pack'],
    ['marlboro', 'cigarette pack'],
    ['marboro', 'cigarette pack'],
    ['sampoerna', 'cigarette pack'],
    ['la ', 'cigarette pack'],
    ['esse', 'cigarette pack'],
    ['korek', 'lighter'],
  ];

  const matchedRule = keywordRules.find(([keyword]) => lowerName.includes(keyword));
  const query = (matchedRule ? matchedRule[1] : 'restaurant food').replace(/\s+/g, ',');

  return `https://loremflickr.com/160/160/${encodeURIComponent(query)}?lock=${encodeURIComponent(seed)}`;
};

const createItem = (name, price, icon, image = null) => ({
  name,
  price,
  icon,
  image: image || getOnlineMenuImage(name),
  description: `${name} - ${new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price)}`,
});

const menuCategories = [
  {
    id: 'nasi',
    label: 'Nasi Goreng',
    items: [
      createItem('Nasi Cap Cay', 56000, 'NC'),
      createItem('Nasi Goreng Ayam', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Hongkong', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Ikan Asin', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Jawa', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Seafood', 62000, 'NS', '/images/Nasi-goreng-seafood.jpg'),
      createItem('Nasi Goreng Original', 56000, 'NO', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Spesial', 56000, 'NS', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Sosis', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Cumi', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Udang', 56000, 'NG', '/images/Nasi Goreng.png'),
    ],
  },
  {
    id: 'mie',
    label: 'Mie & Kwetiaw',
    items: [
      createItem('Mie Goreng', 56000, 'MG'),
      createItem('Mie Goreng Spesial', 56000, 'MG'),
      createItem('Mie Goreng Udang', 56000, 'MG'),
      createItem('Mie Goreng Jawa', 56000, 'MG'),
      createItem('Mie Goreng Seafood', 62000, 'MS'),
      createItem('Mie Kuah Spesial', 56000, 'MK'),
      createItem('Mi Godok', 53000, 'MG'),
      createItem('Indomie Telur Kornet ("Internet")', 45000, 'IT'),
      createItem('Kwetiaw Goreng Spesial', 56000, 'KG'),
      createItem('Kwetiaw Goreng Seafood', 62000, 'KG'),
      createItem('Bihun Goreng Spesial', 56000, 'BG'),
      createItem('Bihun Goreng Seafood', 62000, 'BG'),
    ],
  },
  {
    id: 'snack',
    label: 'Snack',
    items: [
      createItem('Chicken Nugget', 50000, 'CN'),
      createItem('Chicken Wings', 62000, 'CW'),
      createItem('Kentang Goreng', 50000, 'KG'),
      createItem('Sosis Goreng', 62000, 'SG'),
      createItem('Onion Ring', 44000, 'OR'),
      createItem('Pisang Keju', 37000, 'PK'),
      createItem('Pisang Keju Coklat', 37000, 'PK'),
      createItem('Snack Kombinasi', 87000, 'SK'),
      createItem('Cireng', 37000, 'CR'),
      createItem('Tempe Mendoan', 44000, 'TM'),
      createItem('Tahu Bakso Goreng', 50000, 'TB'),
      createItem('Tahu Cabe Garam', 44000, 'TC'),
      createItem('Telur Dadar', 19000, 'TD'),
      createItem('Telur Mata Sapi', 19000, 'TM'),
      createItem('Paru Goreng Crispy', 83000, 'PC'),
      createItem('Paru Goreng Pedas', 83000, 'PP'),
      createItem('Nachos Cheese', 58000, 'NC'),
      createItem('Ote-Ote', 50000, 'OO'),
      createItem('Pempek', 50000, 'PM'),
    ],
  },
  {
    id: 'food',
    label: 'Food',
    items: [
      createItem('Sop Iga Sapi', 154000, 'SI'),
      createItem('Ayam Goreng Tepung', 58000, 'AG'),
      createItem('Ayam Goreng Kering', 58000, 'AG'),
      createItem('Ayam Goreng Mentega', 58000, 'AG'),
      createItem('Ayam Asam Manis', 58000, 'AA'),
      createItem('Ayam Saos Inggris', 58000, 'AI'),
      createItem('Ayam Saos Teriyaki', 58000, 'AT'),
      createItem('Ayam Lada Hitam', 58000, 'AL'),
      createItem('Sapi Lada Hitam', 87000, 'SL'),
      createItem('Udang Goreng Tepung', 75000, 'UG'),
      createItem('Udang Mayonaise', 75000, 'UM'),
      createItem('Udang Saos Tiram', 75000, 'UT'),
      createItem('Udang Asam Manis', 75000, 'UA'),
      createItem('Udang Saos Inggris', 75000, 'UI'),
      createItem('Udang Saos Mentega', 75000, 'UM'),
      createItem('Udang Saos Teriyaki', 75000, 'UT'),
      createItem('Cumi Asam Manis', 68000, 'CA'),
      createItem('Cumi Saos Tiram', 68000, 'CT'),
      createItem('Cumi Goreng Kering', 68000, 'CG'),
      createItem('Cumi Saos Teriyaki', 68000, 'CT'),
      createItem('Cumi Saos Inggris', 68000, 'CI'),
      createItem('Cumi Saos Mentega', 68000, 'CM'),
      createItem('Fu Yung Hai', 56000, 'FY'),
      createItem('Cap Cay Goreng', 56000, 'CC'),
      createItem('Cap Cay Kuah', 56000, 'CC'),
    ],
  },
  {
    id: 'salad',
    label: 'Salad & Buah',
    items: [
      createItem('Salad Buah', 87000, 'SB'),
      createItem('Buah Segar', 87000, 'BS'),
      createItem('Buah Segar Spesial', 160000, 'BS'),
      createItem('Ice Cream Buah', 56000, 'IC'),
    ],
  },
  {
    id: 'cancimen',
    label: 'Cancimen',
    items: [
      createItem('Frozz', 25000, 'FR'),
      createItem('Hexos', 17000, 'HX'),
      createItem('Chunky Bar', 56000, 'CB'),
      createItem('Cadbury 145gr', 80000, 'CD'),
      createItem('SilverQueen', 43000, 'SQ'),
      createItem('Delfi 125gr', 80000, 'DF'),
      createItem('Kacang Bawang', 37000, 'KB'),
      createItem('Pringles', 55000, 'PR'),
      createItem('Chitato', 32000, 'CH'),
      createItem('Qtela', 35000, 'QT'),
    ],
  },
  {
    id: 'juice',
    label: 'Jus & Milkshake',
    items: [
      createItem('Jus Alpokat', 44000, 'JA', '/images/Jus Alpukat.png'),
      createItem('Jus Apel', 44000, 'JA', '/images/Jus Apel.png'),
      createItem('Jus Jeruk', 44000, 'JJ', '/images/Jus Jeruk.png'),
      createItem('Jus Mangga', 44000, 'JM', '/images/Jus Mangga.png'),
      createItem('Jus Melon', 44000, 'JM', '/images/Jus Melon.png'),
      createItem('Jus Semangka', 44000, 'JS', '/images/Jus Semangka.png'),
      createItem('Jeruk Murni', 44000, 'JM', '/images/Jus Jeruk.png'),
      createItem('Milk Shake Coklat', 47000, 'MC'),
      createItem('Milk Shake Strawberry', 47000, 'MS'),
      createItem('Milk Shake Vanilla', 47000, 'MV'),
    ],
  },
  {
    id: 'softdrink',
    label: 'Soft Drink',
    items: [
      createItem('Coca-Cola Can', 25000, 'CC'),
      createItem('Coca-Cola Pitcher', 92000, 'CP'),
      createItem('Fanta Merah Can', 25000, 'FC'),
      createItem('Fanta Merah Pitcher', 92000, 'FP'),
      createItem('Greensands', 25000, 'GS'),
      createItem('Pokka Green Tea', 32000, 'PG'),
      createItem('Soda Gembira', 44000, 'SG'),
      createItem('Sprite Can', 25000, 'SC'),
      createItem('Sprite Pitcher', 92000, 'SP'),
      createItem('Fanta Susu', 37000, 'FS'),
      createItem('Krating Daeng', 32000, 'KD'),
      createItem('Pocari Sweat', 25000, 'PS'),
      createItem('Pulpy Orange', 25000, 'PO'),
      createItem('Yakult', 10000, 'YK'),
    ],
  },
  {
    id: 'drink',
    label: 'Drink & Coffee',
    items: [
      createItem('Air Mineral', 20000, 'AM'),
      createItem('Milo Hot', 37000, 'MH'),
      createItem('Milo Ice', 37000, 'MI'),
      createItem('Es Jeruk', 44000, 'EJ'),
      createItem('Es Jeruk Nipis', 44000, 'EN'),
      createItem('Teh Hot', 23000, 'TH'),
      createItem('Es Teh', 23000, 'ET'),
      createItem('Jeruk Hot', 44000, 'JH'),
      createItem('Jeruk Nipis Hot', 44000, 'JN'),
      createItem('Lemon Tea Hot', 32000, 'LH'),
      createItem('Lemon Tea Ice', 32000, 'LI'),
      createItem('Lemon Tea Pitcher', 92000, 'LP'),
      createItem('Susu Putih Hot', 32000, 'SH'),
      createItem('Susu Putih Ice', 32000, 'SI'),
      createItem('Susu Coklat Hot', 32000, 'CH'),
      createItem('Susu Coklat Ice', 32000, 'CI'),
      createItem('Teh Pitcher', 92000, 'TP'),
      createItem('Cappuccino', 35000, 'CP'),
      createItem('Kopi', 30000, 'KP'),
    ],
  },
  {
    id: 'rokok',
    label: 'Rokok',
    items: [
      createItem('Rokok Veev', 170000, 'RV'),
      createItem('Avolution', 80000, 'AV'),
      createItem('Avolution Menthol', 80000, 'AM'),
      createItem('LA Light', 80000, 'LA'),
      createItem('LA Light Menthol', 80000, 'LM'),
      createItem('Marboro Black Menthol', 80000, 'MB'),
      createItem('Marboro Light', 80000, 'ML'),
      createItem('Marboro Merah', 80000, 'MM'),
      createItem('Sampoerna A Mild', 80000, 'SA'),
      createItem('Sampoerna A Mild Menthol', 80000, 'SM'),
      createItem('Marlboro Ice Brust', 80000, 'MI'),
      createItem('La Ice', 80000, 'LI'),
      createItem('Esse Change Grape', 80000, 'EG'),
      createItem('Marlboro Filter Black', 80000, 'MF'),
      createItem('Korek Api Happy Puppy', 20000, 'KA'),
    ],
  },
];

const roomGroups = [
  {
    label: 'Lantai 1',
    rooms: ['Room 11', 'Room 12', 'Room 14', 'Room 116', 'Room 117', 'Room 118', 'Room 119', 'Room 101', 'Room 102'],
  },
  {
    label: 'Lantai 2',
    rooms: ['Room 21', 'Room 22', 'Room 23', 'Room 24', 'Room 125', 'Room 126', 'Room 127', 'Room 128', 'Room 129', 'Room 201', 'Room 202', 'Room 203', 'Room 204'],
  },
  {
    label: 'Lantai 3',
    rooms: ['Room 31', 'Room 32', 'Room 33', 'Room 34', 'Room 136', 'Room 137', 'Room 138', 'Room 139', 'Room 301', 'Room 302', 'Room 303', 'Room 304'],
  },
];

export default {
  name: 'MenuHappup',
  data() {
    return {
      activeCategoryId: 'nasi',
      cart: [],
      isCartOpen: false,
      selectedRoom: '',
      outlet,
      menuCategories,
      roomGroups,
    };
  },
  computed: {
    activeCategory() {
      return this.menuCategories.find((category) => category.id === this.activeCategoryId);
    },
    cartTotal() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    cartCount() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    groupedCartItems() {
      return this.cart;
    },
  },
  methods: {
    formatRupiah(amount) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      }).format(amount);
    },
    scrollCategories(direction) {
      const slider = this.$refs.categorySlider;

      if (!slider) {
        return;
      }

      slider.scrollBy({
        left: direction * Math.round(slider.clientWidth * 0.75),
        behavior: 'smooth',
      });
    },
    setCategory(categoryId, event) {
      this.activeCategoryId = categoryId;

      if (event?.currentTarget) {
        this.$nextTick(() => {
          event.currentTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        });
      }
    },
    handleMenuImageError(menuItem) {
      menuItem.image = null;
    },
    addToCart(menuItem) {
      if (!this.selectedRoom) {
        window.alert('Mohon pilih nomor Room Karaoke terlebih dahulu sebelum memilih menu.');
        return;
      }

      const existingItem = this.cart.find((item) => item.name === menuItem.name);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      this.cart.push({
        ...menuItem,
        quantity: 1,
      });
    },
    openCartModal() {
      this.isCartOpen = true;
    },
    closeCartModal() {
      this.isCartOpen = false;
    },
    submitOrderViaWhatsApp() {
      if (!this.selectedRoom) {
        window.alert('Mohon pilih nomor Room Karaoke Anda terlebih dahulu!');
        return;
      }

      const itemSummary = this.groupedCartItems
        .map((item) => `- ${item.name} (x${item.quantity})`)
        .join('\n');

      const orderText = [
        'Halo Happy Puppy Antasari, saya ingin memesan menu kamar:',
        '',
        'DETAIL ROOM:',
        `- Nomor Kamar: ${this.selectedRoom}`,
        '',
        'DAFTAR PESANAN:',
        itemSummary,
        '',
        `TOTAL PEMBAYARAN: ${this.formatRupiah(this.cartTotal)}`,
        '',
        'Mohon diproses langsung ke kamar kami ya, terima kasih!',
      ].join('\n');

      window.open(`${this.outlet.whatsappUrl}?text=${encodeURIComponent(orderText)}`, '_blank');

      this.cart = [];
      this.selectedRoom = '';
      this.closeCartModal();
    },
  },
};
</script>

<template>
  <main class="menu-page">
    <section
      class="menu-banner"
      aria-label="Banner menu Happy Puppy Antasari"
    >
      <div class="banner-content">
        <img
          :src="'/images/Logohappup.png'"
          alt="Happy Puppy"
          class="banner-logo"
        >
        <p class="subtitle">{{ outlet.tagline }}</p>
        <h1 class="main-title">
          Menu <span>Happup Antasari</span>
        </h1>
        <p class="address">
          {{ outlet.address }}
        </p>
      </div>
    </section>

    <section class="container">
      <section class="room-picker-card" aria-labelledby="room-picker-title">
        <div class="room-picker-copy">
          <span class="room-step">Langkah 1</span>
          <h2 id="room-picker-title">Pilih Room Karaoke</h2>
          <p>Nomor room wajib dipilih sebelum menambahkan menu ke keranjang.</p>
        </div>

        <label class="room-select-group room-select-inline" for="pageRoomNumber">
          <span>Nomor Room</span>
          <select id="pageRoomNumber" v-model="selectedRoom">
            <option value="">-- Pilih Nomor Room --</option>
            <optgroup
              v-for="group in roomGroups"
              :key="group.label"
              :label="group.label"
            >
              <option
                v-for="room in group.rooms"
                :key="room"
                :value="room"
              >
                {{ room }}
              </option>
            </optgroup>
          </select>
        </label>
      </section>

      <div class="menu-tabs-shell">
        <button
          type="button"
          class="tab-scroll-btn"
          aria-label="Geser kategori ke kiri"
          @click="scrollCategories(-1)"
        >
          &lt;
        </button>

        <nav
          ref="categorySlider"
          class="menu-tabs"
          aria-label="Kategori menu"
        >
          <button
            v-for="category in menuCategories"
            :key="category.id"
            type="button"
            class="tab-btn"
            :class="{ active: activeCategoryId === category.id }"
            @click="setCategory(category.id, $event)"
          >
            {{ category.label }}
          </button>
        </nav>

        <button
          type="button"
          class="tab-scroll-btn"
          aria-label="Geser kategori ke kanan"
          @click="scrollCategories(1)"
        >
          &gt;
        </button>
      </div>

      <section class="menu-container active">
        <article
          v-for="item in activeCategory.items"
          :key="item.name"
          class="menu-item"
        >
          <div class="menu-img-circle">
            <img
              v-if="item.image"
              :src="item.image"
              alt=""
              class="menu-img"
              @error="handleMenuImageError(item)"
            >
            <span v-else>{{ item.icon }}</span>
          </div>
          <div class="menu-details">
            <div class="menu-title-row">
              <h2 class="menu-name">{{ item.name }}</h2>
              <span class="menu-price">{{ formatRupiah(item.price) }}</span>
            </div>
            <div class="menu-desc-row">
              <p class="menu-description">{{ item.description }}</p>
              <button
                type="button"
                class="btn-add-cart"
                :disabled="!selectedRoom"
                @click="addToCart(item)"
              >
                {{ selectedRoom ? '+ Add' : 'Pilih Room' }}
              </button>
            </div>
          </div>
        </article>
      </section>

      <footer class="footer-note">
        <img
          :src="outlet.logo"
          :alt="outlet.name"
          class="footer-logo"
        >
        <p>
          &copy; 2026 {{ outlet.name }}. All Rights Reserved.
          <br>
          {{ outlet.tagline }}
        </p>
        <div class="social-links">
          <a :href="outlet.whatsappUrl" target="_blank" rel="noreferrer">
            <img :src="'/images/whatsapp.svg'" alt="" class="social-icon">
            WhatsApp
          </a>
          <a :href="outlet.instagramUrl" target="_blank" rel="noreferrer">
            <img :src="'/images/instagram.svg'" alt="" class="social-icon">
            Instagram
          </a>
          <a :href="outlet.facebookUrl" target="_blank" rel="noreferrer">
            <img :src="'/images/facebook.svg'" alt="" class="social-icon">
            Facebook
          </a>
        </div>
      </footer>
    </section>

    <button
      v-if="cartCount"
      type="button"
      class="floating-cart"
      @click="openCartModal"
    >
      Lihat Keranjang
      <span class="cart-count">{{ cartCount }}</span>
    </button>

    <div
      v-if="isCartOpen"
      class="cart-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      <div class="modal-content">
        <h2 id="cart-title" class="modal-title">Keranjang Belanja</h2>

        <div class="cart-room-summary">
          Room: <span>{{ selectedRoom }}</span>
        </div>

        <div class="cart-items-list">
          <div
            v-for="item in groupedCartItems"
            :key="item.name"
            class="cart-item-row"
          >
            <span>{{ item.name }} x{{ item.quantity }}</span>
            <span>{{ formatRupiah(item.price * item.quantity) }}</span>
          </div>
        </div>

        <div class="total-price-box">
          Total: <span>{{ formatRupiah(cartTotal) }}</span>
        </div>

        <button
          type="button"
          class="btn-action btn-order"
          @click="submitOrderViaWhatsApp"
        >
          Pesan Lewat WhatsApp
        </button>
        <button
          type="button"
          class="btn-action btn-close"
          @click="closeCartModal"
        >
          Tutup
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.menu-page {
  --primary-color: #178a4b;
  --primary-hover: #0f6f3b;
  --dark-color: #212529;
  --light-bg: #f7f2ea;
  --gray-bg: #f8f9fa;
  --text-muted: #7f8890;
  --border-color: #eedcdc;

  min-height: 100vh;
  background:
    linear-gradient(rgba(255, 252, 247, 0.9), rgba(255, 252, 247, 0.88)),
    repeating-linear-gradient(
      90deg,
      rgba(76, 42, 20, 0.18) 0,
      rgba(76, 42, 20, 0.18) 2px,
      rgba(141, 86, 45, 0.13) 2px,
      rgba(141, 86, 45, 0.13) 18px,
      rgba(92, 51, 25, 0.15) 18px,
      rgba(92, 51, 25, 0.15) 34px
    ),
    linear-gradient(135deg, #7c4b28 0%, #b57942 48%, #5d351b 100%);
  background-attachment: fixed;
  background-color: var(--light-bg);
  color: var(--dark-color);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.5;
  padding-bottom: 100px;
  width: 100%;
}

.container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 20px;
  width: 100%;
}

.subtitle {
  color: rgba(255, 255, 255, 0.88);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin: 0 0 10px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
  text-transform: uppercase;
}

.main-title {
  color: #fff;
  font-family: "Amatic SC", Inter, sans-serif;
  font-size: clamp(28px, 4.8vw, 58px);
  font-weight: 700;
  line-height: 0.95;
  margin: 0 0 18px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.55);
}

.main-title span {
  color: #8ff0b1;
}

.address {
  color: rgba(255, 255, 255, 0.9);
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(13px, 1.3vw, 16px);
  font-style: italic;
  margin: 0;
  max-width: 680px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

.menu-banner {
  align-items: center;
  aspect-ratio: 16 / 2;
  background-image: url("/images/Bgweb.jpeg");
  background-position: center 70%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0;
  box-shadow: 0 24px 60px rgba(20, 42, 28, 0.2);
  display: flex;
  height: auto;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
}

.menu-banner::before {
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.42) 44%, rgba(0, 0, 0, 0.08) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.28) 68%, rgba(0, 0, 0, 0.48) 100%);
  content: "";
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.menu-banner::after {
  background: linear-gradient(180deg, rgba(247, 242, 234, 0) 0%, rgba(247, 242, 234, 0.86) 100%);
  bottom: 0;
  content: "";
  height: 88px;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
}

.banner-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1280px;
  padding: 18px 20px 30px;
  position: absolute;
  inset: 0;
  width: 100%;
  z-index: 2;
}

.banner-logo {
  border-radius: 12px;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.24);
  height: clamp(36px, 4.8vw, 58px);
  margin-bottom: 10px;
  object-fit: contain;
  width: max-content;
}

.room-info-box {
  background-color: var(--gray-bg);
  border: 1px dashed var(--border-color);
  border-radius: 8px;
  margin-bottom: 40px;
  padding: 25px;
  text-align: center;
}

.room-info-box h2 {
  color: var(--primary-color);
  font-size: 18px;
  letter-spacing: 1px;
  margin: 0 0 10px;
  text-transform: uppercase;
}

.room-info-box p {
  color: var(--text-muted);
  font-size: 14px;
  margin: 0 0 15px;
}

.room-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.room-floor {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  font-size: 13px;
  padding: 10px 15px;
  text-align: left;
  width: min(100%, 340px);
}

.room-floor strong,
.room-floor span {
  display: block;
}

.room-floor span {
  color: var(--text-muted);
  margin-top: 6px;
}

.room-picker-card {
  align-items: center;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(23, 138, 75, 0.14);
  border-radius: 8px;
  box-shadow: 0 16px 40px rgba(20, 42, 28, 0.1);
  display: flex;
  gap: 24px;
  justify-content: space-between;
  margin-top: 36px;
  padding: 22px;
}

.room-picker-copy {
  min-width: 0;
}

.room-step {
  color: var(--primary-color);
  display: block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.room-picker-copy h2 {
  color: var(--dark-color);
  font-size: 22px;
  line-height: 1.2;
  margin: 0 0 6px;
}

.room-picker-copy p {
  color: var(--text-muted);
  font-size: 14px;
  margin: 0;
}

.room-select-inline {
  flex: 0 0 min(360px, 46%);
  margin-bottom: 0;
}

.menu-tabs-shell {
  align-items: center;
  display: flex;
  gap: 12px;
  margin-top: 30px;
  margin-bottom: 45px;
  position: relative;
}

.menu-tabs {
  display: flex;
  flex: 1;
  gap: 10px;
  overflow-x: auto;
  padding: 8px 2px 16px;
  scroll-behavior: smooth;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  white-space: nowrap;
}

.menu-tabs::-webkit-scrollbar {
  display: none;
}

.tab-scroll-btn {
  align-items: center;
  background: #fff;
  border: 1px solid rgba(23, 138, 75, 0.18);
  border-radius: 999px;
  box-shadow: 0 8px 20px rgba(20, 42, 28, 0.08);
  color: var(--primary-color);
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  font-size: 18px;
  font-weight: 800;
  height: 40px;
  justify-content: center;
  transition: all 0.25s;
  width: 40px;
}

.tab-scroll-btn:hover {
  background: var(--primary-color);
  color: #fff;
  transform: translateY(-1px);
}

.tab-btn {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(23, 138, 75, 0.14);
  border-radius: 999px;
  box-shadow: 0 6px 18px rgba(20, 42, 28, 0.06);
  color: var(--dark-color);
  cursor: pointer;
  flex: 0 0 auto;
  font: 600 16px Inter, sans-serif;
  padding: 11px 20px;
  position: relative;
  scroll-snap-align: center;
  transition: all 0.25s;
}

.tab-btn:hover,
.tab-btn.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
  transform: translateY(-1px);
}

.tab-btn.active::after {
  display: none;
}

.menu-container {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.menu-item {
  align-items: center;
  border-bottom: 1px dashed #e2e8f0;
  display: flex;
  padding: 15px 0;
  transition: transform 0.3s;
}

.menu-item:hover {
  transform: translateY(-2px);
}

.menu-img-circle {
  align-items: center;
  background-color: var(--gray-bg);
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex: 0 0 auto;
  font-size: 18px;
  font-weight: 800;
  height: 70px;
  justify-content: center;
  margin-right: 20px;
  overflow: hidden;
  text-align: center;
  width: 70px;
}

.menu-img-circle span {
  line-height: 1;
}

.menu-img {
  border-radius: 50%;
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.menu-details {
  flex: 1;
  min-width: 0;
}

.menu-title-row,
.menu-desc-row,
.cart-item-row {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
}

.menu-name {
  color: var(--dark-color);
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.menu-price {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
  white-space: nowrap;
}

.menu-description {
  color: var(--text-muted);
  font-size: 14px;
  font-style: italic;
  margin: 0;
}

.btn-add-cart {
  background-color: transparent;
  border: 1px solid var(--primary-color);
  border-radius: 20px;
  color: var(--primary-color);
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 600;
  margin-left: 12px;
  padding: 4px 12px;
  transition: all 0.3s;
}

.btn-add-cart:hover {
  background-color: var(--primary-color);
  color: #fff;
}

.btn-add-cart:disabled {
  border-color: #cbd5e1;
  color: #94a3b8;
  cursor: not-allowed;
}

.btn-add-cart:disabled:hover {
  background-color: transparent;
  color: #94a3b8;
}

.floating-cart {
  background-color: var(--primary-color);
  border: none;
  border-radius: 30px;
  bottom: 30px;
  box-shadow: 0 8px 25px rgba(206, 18, 18, 0.3);
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  padding: 15px 25px;
  position: fixed;
  right: 30px;
  transition: background-color 0.3s;
  z-index: 999;
}

.floating-cart:hover {
  background-color: var(--primary-hover);
}

.cart-count {
  background-color: #fff;
  border-radius: 50%;
  color: var(--primary-color);
  font-size: 12px;
  font-weight: 700;
  margin-left: 8px;
  padding: 2px 8px;
}

.cart-modal {
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 20px;
  position: fixed;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  color: var(--dark-color);
  max-width: 500px;
  padding: 30px;
  width: 100%;
}

.modal-title {
  border-bottom: 2px solid var(--gray-bg);
  color: var(--dark-color);
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 20px;
  padding-bottom: 10px;
}

.room-select-group {
  display: block;
  margin-bottom: 20px;
}

.room-select-group span {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.room-select-group select {
  background-color: var(--gray-bg);
  border: 1px solid #ddd;
  border-radius: 6px;
  color: var(--dark-color);
  font-size: 15px;
  outline: none;
  padding: 12px;
  width: 100%;
}

.cart-room-summary {
  background: var(--gray-bg);
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 18px;
  padding: 12px 14px;
}

.cart-room-summary span {
  color: var(--primary-color);
}

.cart-items-list {
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  max-height: 200px;
  overflow-y: auto;
  padding-bottom: 10px;
}

.cart-item-row {
  font-size: 15px;
  gap: 16px;
  margin-bottom: 12px;
}

.total-price-box {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: right;
}

.total-price-box span {
  color: var(--primary-color);
}

.btn-action {
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  padding: 14px;
  width: 100%;
}

.btn-order {
  background-color: #25d366;
  color: #fff;
}

.btn-order:hover {
  background-color: #1cbd55;
}

.btn-close {
  background-color: var(--gray-bg);
  color: var(--dark-color);
}

.btn-close:hover {
  background-color: #e2e8f0;
}

.footer-note {
  border-top: 1px solid #eee;
  color: var(--text-muted);
  font-size: 14px;
  margin-top: 60px;
  padding-top: 20px;
  text-align: center;
}

.footer-logo {
  border-radius: 10px;
  display: block;
  height: 52px;
  margin: 0 auto 12px;
  object-fit: contain;
  width: auto;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 16px;
}

.social-links a {
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 999px;
  color: var(--primary-color);
  display: inline-flex;
  gap: 8px;
  font-weight: 700;
  padding: 8px 14px;
  text-decoration: none;
}

.social-icon {
  display: block;
  height: 18px;
  width: 18px;
}

.social-links a:hover {
  background: var(--primary-color);
  color: #fff;
}

@media (max-width: 768px) {
  .menu-banner {
    background-position: center 42%;
  }

  .banner-content {
    padding-bottom: 32px;
    padding-top: 20px;
  }

  .banner-logo {
    display: none;
  }

  .menu-container {
    gap: 15px;
    grid-template-columns: 1fr;
  }

  .room-picker-card {
    align-items: stretch;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
    padding: 18px;
  }

  .room-select-inline {
    flex-basis: auto;
    width: 100%;
  }

  .menu-tabs-shell {
    gap: 8px;
    margin-bottom: 32px;
    margin-top: 28px;
  }

  .tab-btn {
    font-size: 14px;
    padding: 10px 16px;
  }

  .tab-scroll-btn {
    height: 36px;
    width: 36px;
  }

  .main-title {
    font-size: 28px;
    margin-bottom: 0;
  }

  .address {
    display: none;
  }
}

@media (max-width: 520px) {
  .subtitle {
    display: none;
  }

  .address {
    font-size: 14px;
  }

  .container {
    padding: 0 14px;
  }

  .menu-tabs-shell {
    gap: 6px;
  }

  .tab-scroll-btn {
    height: 34px;
    width: 34px;
  }

  .menu-title-row,
  .menu-desc-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .menu-price,
  .btn-add-cart {
    margin-left: 0;
  }

  .floating-cart {
    bottom: 16px;
    left: 16px;
    right: 16px;
  }
}
</style>
