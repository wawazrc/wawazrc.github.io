<script setup>
import { computed, ref } from 'vue';

const socialLinks = [
    {
        label: 'WhatsApp',
        href: 'https://wa.me/6282148004822',
        iconSrc: '/images/whatsapp.svg',
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/happup.samarinda.antasari',
        iconSrc: '/images/facebook.svg',
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/happup.samarinda.antasari/',
        iconSrc: '/images/instagram.svg',
    },
];

const visuals = {
    cover: 'https://images.pexels.com/photos/3394210/pexels-photo-3394210.jpeg?auto=compress&cs=tinysrgb&w=1200',
    signature: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1200',
    friedRice: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1000',
    noodle: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1000',
    snack: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1000',
    mainFood: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1000',
    dessert: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1000',
    candy: 'https://images.pexels.com/photos/4791261/pexels-photo-4791261.jpeg?auto=compress&cs=tinysrgb&w=1000',
    juice: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1000',
    softDrink: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=1000',
    coffee: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1000',
    back: 'https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

const recommended = [
    'Nasi Goreng Seafood',
    'Sop Iga Sapi',
    'Chicken Wings',
    'Udang Mayonaise',
    'Salad Buah Spesial',
];

const menuPages = [
    {
        number: '01',
        title: 'Signature Menu',
        kicker: 'Recommended Menu',
        image: visuals.signature,
        featured: true,
        items: recommended.map((name) => ({ name, price: 'Recommended' })),
    },
    {
        number: '02',
        title: 'Nasi Goreng',
        image: visuals.friedRice,
        items: [
            ['Nasi Cap Cay', 'Rp56.000'],
            ['Nasi Goreng Ayam', 'Rp56.000'],
            ['Nasi Goreng Hongkong', 'Rp56.000'],
            ['Nasi Goreng Ikan Asin', 'Rp56.000'],
            ['Nasi Goreng Jawa', 'Rp56.000'],
            ['Nasi Goreng Seafood', 'Rp62.000'],
            ['Nasi Goreng Original', 'Rp56.000'],
            ['Nasi Goreng Spesial', 'Rp56.000'],
            ['Nasi Goreng Sosis', 'Rp56.000'],
            ['Nasi Goreng Cumi', 'Rp56.000'],
            ['Nasi Goreng Udang', 'Rp56.000'],
            ['Nasi Putih', 'Rp23.000'],
        ],
    },
    {
        number: '03',
        title: 'Mie & Kwetiaw',
        image: visuals.noodle,
        items: [
            ['Mie Goreng', 'Rp56.000'],
            ['Mie Goreng Spesial', 'Rp56.000'],
            ['Mie Goreng Udang', 'Rp56.000'],
            ['Mie Goreng Jawa', 'Rp56.000'],
            ['Mie Goreng Seafood', 'Rp62.000'],
            ['Mie Kuah Spesial', 'Rp56.000'],
            ['Mi Godok', 'Rp53.000'],
            ['Indomie Telur Kornet "Internet"', 'Rp45.000'],
            ['Kwetiaw Goreng Spesial', 'Rp56.000'],
            ['Kwetiaw Goreng Seafood', 'Rp62.000'],
            ['Bihun Goreng Spesial', 'Rp56.000'],
            ['Bihun Goreng Seafood', 'Rp62.000'],
        ],
    },
    {
        number: '04',
        title: 'Hot Snack',
        image: visuals.snack,
        compact: true,
        items: [
            ['Chicken Nugget', 'Rp50.000'],
            ['Chicken Wings', 'Rp62.000'],
            ['Kentang Goreng', 'Rp50.000'],
            ['Sosis Goreng', 'Rp62.000'],
            ['Onion Ring', 'Rp44.000'],
            ['Pisang Keju', 'Rp37.000'],
            ['Pisang Keju Coklat', 'Rp37.000'],
            ['Snack Kombinasi', 'Rp87.000'],
            ['Cireng', 'Rp37.000'],
            ['Tempe Mendoan', 'Rp44.000'],
            ['Tahu Bakso Goreng', 'Rp50.000'],
            ['Tahu Cabe Garam', 'Rp44.000'],
            ['Telur Dadar', 'Rp19.000'],
            ['Telur Mata Sapi', 'Rp19.000'],
            ['Paru Goreng Crispy', 'Rp83.000'],
            ['Paru Goreng Pedas', 'Rp83.000'],
            ['Nachos Cheese', 'Rp58.000'],
            ['Ote-Ote', 'Rp50.000'],
            ['Pempek', 'Rp50.000'],
        ],
    },
    {
        number: '05',
        title: 'Food',
        image: visuals.mainFood,
        compact: true,
        items: [
            ['Sop Iga Sapi', 'Rp154.000'],
            ['Ayam Goreng Tepung', 'Rp58.000'],
            ['Ayam Goreng Kering', 'Rp58.000'],
            ['Ayam Goreng Mentega', 'Rp58.000'],
            ['Ayam Asam Manis', 'Rp58.000'],
            ['Ayam Saos Inggris', 'Rp58.000'],
            ['Ayam Saos Teriyaki', 'Rp58.000'],
            ['Ayam Lada Hitam', 'Rp58.000'],
            ['Sapi Lada Hitam', 'Rp87.000'],
            ['Udang Goreng Tepung', 'Rp75.000'],
            ['Udang Mayonaise', 'Rp75.000'],
            ['Udang Saos Tiram', 'Rp75.000'],
            ['Udang Asam Manis', 'Rp75.000'],
            ['Udang Saos Inggris', 'Rp75.000'],
            ['Udang Saos Mentega', 'Rp75.000'],
            ['Udang Saos Teriyaki', 'Rp75.000'],
            ['Cumi Asam Manis', 'Rp68.000'],
            ['Cumi Saos Tiram', 'Rp68.000'],
            ['Cumi Goreng Kering', 'Rp68.000'],
            ['Cumi Saos Teriyaki', 'Rp68.000'],
            ['Cumi Saos Inggris', 'Rp68.000'],
            ['Cumi Saos Mentega', 'Rp68.000'],
            ['Fu Yung Hai', 'Rp56.000'],
            ['Cap Cay Goreng', 'Rp56.000'],
            ['Cap Cay Kuah', 'Rp56.000'],
        ],
    },
    {
        number: '06',
        title: 'Salad & Dessert',
        image: visuals.dessert,
        items: [
            ['Salad Buah', 'Rp87.000'],
            ['Buah Segar', 'Rp87.000'],
            ['Buah Segar Spesial', 'Rp160.000'],
            ['Ice Cream Buah', 'Rp56.000'],
        ],
    },
    {
        number: '07',
        title: 'Cancimen',
        image: visuals.candy,
        items: [
            ['Frozz', 'Rp25.000'],
            ['Hexos', 'Rp17.000'],
            ['Chunky Bar', 'Rp56.000'],
            ['Cadbury 145gr', 'Rp80.000'],
            ['SilverQueen', 'Rp43.000'],
            ['Delfi 125gr', 'Rp80.000'],
            ['Kacang Bawang', 'Rp37.000'],
            ['Pringles', 'Rp55.000'],
            ['Chitato', 'Rp32.000'],
            ['Qtela', 'Rp35.000'],
        ],
    },
    {
        number: '08',
        title: 'Jus & Milkshake',
        image: visuals.juice,
        items: [
            ['Jus Alpokat', 'Rp44.000'],
            ['Jus Apel', 'Rp44.000'],
            ['Jus Jeruk', 'Rp44.000'],
            ['Jus Mangga', 'Rp44.000'],
            ['Jus Melon', 'Rp44.000'],
            ['Jus Semangka', 'Rp44.000'],
            ['Jus Tomat', 'Rp44.000'],
            ['Jus Sirsak', 'Rp44.000'],
            ['Jeruk Murni', 'Rp44.000'],
            ['Milk Shake Coklat', 'Rp47.000'],
            ['Milk Shake Strawberry', 'Rp47.000'],
            ['Milk Shake Vanilla', 'Rp47.000'],
        ],
    },
    {
        number: '09',
        title: 'Soft Drink',
        image: visuals.softDrink,
        items: [
            ['Coca-Cola Can', 'Rp25.000'],
            ['Coca-Cola Pitcher', 'Rp92.000'],
            ['Fanta Merah Can', 'Rp25.000'],
            ['Fanta Merah Pitcher', 'Rp92.000'],
            ['Greensands', 'Rp25.000'],
            ['Pokka Green Tea', 'Rp32.000'],
            ['Soda Gembira', 'Rp44.000'],
            ['Sprite Can', 'Rp25.000'],
            ['Sprite Pitcher', 'Rp92.000'],
            ['Fanta Susu', 'Rp37.000'],
            ['Krating Daeng', 'Rp32.000'],
            ['Pocari Sweat', 'Rp25.000'],
            ['Pulpy Orange', 'Rp25.000'],
            ['Yakult', 'Rp10.000'],
        ],
    },
    {
        number: '10',
        title: 'Drink & Coffee',
        image: visuals.coffee,
        compact: true,
        items: [
            ['Air Mineral', 'Rp20.000'],
            ['Milo Hot', 'Rp37.000'],
            ['Milo Ice', 'Rp37.000'],
            ['Es Jeruk', 'Rp44.000'],
            ['Es Jeruk Nipis', 'Rp44.000'],
            ['Teh Hot', 'Rp23.000'],
            ['Es Teh', 'Rp23.000'],
            ['Jeruk Hot', 'Rp38.700'],
            ['Jeruk Nipis Hot', 'Rp44.000'],
            ['Lemon Tea Hot', 'Rp32.000'],
            ['Lemon Tea Ice', 'Rp32.000'],
            ['Lemon Tea Pitcher', 'Rp92.000'],
            ['Susu Putih Hot', 'Rp32.000'],
            ['Susu Putih Ice', 'Rp32.000'],
            ['Susu Coklat Hot', 'Rp32.000'],
            ['Susu Coklat Ice', 'Rp32.000'],
            ['Teh Pitcher', 'Rp92.000'],
            ['Cappuccino', 'Rp35.000'],
            ['Kopi', 'Rp30.000'],
        ],
    },
].map((page) => ({
    ...page,
    items: page.items.map((item) => (Array.isArray(item) ? { name: item[0], price: item[1] } : item)),
}));

const cart = ref([]);

const parsePrice = (price) => {
    const amount = Number(String(price).replace(/[^\d]/g, ''));

    return Number.isFinite(amount) ? amount : 0;
};

const formatRupiah = (amount) => new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
}).format(amount);

const cartTotal = computed(() => cart.value.reduce((total, item) => total + (item.amount * item.quantity), 0));
const cartCount = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0));

const addToCart = (item, category) => {
    const selectedItem = cart.value.find((cartItem) => cartItem.name === item.name && cartItem.category === category);

    if (selectedItem) {
        selectedItem.quantity += 1;
        return;
    }

    cart.value.push({
        name: item.name,
        price: item.price,
        amount: parsePrice(item.price),
        category,
        quantity: 1,
    });
};

const changeQuantity = (item, amount) => {
    item.quantity += amount;

    if (item.quantity <= 0) {
        cart.value = cart.value.filter((cartItem) => cartItem !== item);
    }
};

const clearCart = () => {
    cart.value = [];
};

const orderText = computed(() => [
    'Halo Happup Antasari, saya ingin order:',
    ...cart.value.map((item, index) => `${index + 1}. ${item.name} (${item.category}) x${item.quantity} - ${item.price}`),
    `Total estimasi: ${formatRupiah(cartTotal.value)}`,
    'Nama:',
    'Room :',
].join('\n'));

const orderUrl = computed(() => `https://wa.me/6282148004822?text=${encodeURIComponent(orderText.value)}`);
</script>

<template>
    <main class="menu-book min-h-screen bg-[#100c0a] px-3 py-5 text-[#f8ecd0] sm:px-6 sm:py-8 lg:px-10">
        <section class="mx-auto mb-6 max-w-5xl text-center print:hidden sm:mb-8">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#c89949] sm:text-xs sm:tracking-[0.35em]">A4 Portrait Menu Book</p>
            <h1 class="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-5xl">HAPPUP ANTASARI</h1>
            <p class="mt-3 text-sm text-[#cbb99a]">Elegant Premium Karaoke Lounge</p>
        </section>

        <div class="mx-auto grid max-w-[1320px] gap-5 sm:gap-8 xl:grid-cols-2">
            <section class="a4-page cover-page">
                <div class="lounge-glow"></div>
                <div class="page-frame"></div>
                <div class="brand-wordmark relative z-10 mx-auto mt-6 sm:mt-10">HAPPUP KARAOKE</div>
                <div class="relative z-10 mt-auto pb-6 text-center sm:pb-14">
                    <p class="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#d9ad5c] sm:text-xs sm:tracking-[0.35em]">Happup Antasari</p>
                    <h2 class="mt-4 font-serif text-4xl font-bold uppercase leading-none text-white sm:mt-5 sm:text-6xl">Premium Karaoke</h2>
                    <p class="mx-auto mt-5 max-w-sm text-lg leading-7 text-[#e7d5b5]">Premium Karaoke & Lounge Experience</p>
                    <div class="mx-auto mt-7 flex w-fit max-w-full flex-wrap items-center justify-center gap-3 border-y border-[#d9ad5c]/50 px-4 py-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#d9ad5c] sm:mt-9 sm:gap-4 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.28em]">
                        <span>Mic</span>
                        <span class="h-1 w-1 rounded-full bg-[#d9ad5c]"></span>
                        <span>Cocktail</span>
                        <span class="h-1 w-1 rounded-full bg-[#d9ad5c]"></span>
                        <span>Lounge</span>
                    </div>
                    <div class="social-links mt-7">
                        <a
                            v-for="link in socialLinks"
                            :key="link.label"
                            :href="link.href"
                            target="_blank"
                            rel="noreferrer"
                            :aria-label="link.label"
                            :title="link.label"
                        >
                            <span v-if="link.iconSrc" class="social-icon-mask" :style="{ '--icon-src': `url(${link.iconSrc})` }" aria-hidden="true"></span>
                            <svg v-else viewBox="0 0 32 32" aria-hidden="true">
                                <path :d="link.icon" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section
                v-for="page in menuPages"
                :key="page.number"
                class="a4-page menu-page"
            >
                <div class="page-frame"></div>
                <header class="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                    <div>
                        <p class="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#c89949] sm:text-xs sm:tracking-[0.32em]">{{ page.kicker ?? 'Happup Antasari' }}</p>
                        <h2 class="mt-2 font-serif text-3xl font-bold uppercase leading-none text-white sm:mt-3 sm:text-5xl">{{ page.title }}</h2>
                    </div>
                    <span class="page-number">{{ page.number }}</span>
                </header>

                <div class="page-visual relative z-10 mt-6 overflow-hidden border border-[#d9ad5c]/35 bg-black/30 sm:mt-8">
                    <img :src="page.image" :alt="page.title" class="h-36 w-full object-cover opacity-80 sm:h-48">
                    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.65))]"></div>
                    <div class="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 sm:gap-4 sm:p-5">
                        <p class="max-w-xs text-xs leading-5 text-[#f3dfb8] sm:text-sm sm:leading-6">Premium lounge dining selection for room service and shared moments.</p>
                        <div class="h-14 w-14 rounded-full border border-[#d9ad5c] bg-[#d9ad5c]/15 text-center font-serif text-3xl leading-[3.4rem] text-[#ffd987]">H</div>
                    </div>
                </div>

                <div class="relative z-10 mt-5 sm:mt-7">
                    <div class="mb-3 grid grid-cols-[1fr_auto] border-b border-[#d9ad5c]/45 pb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d9ad5c] sm:text-xs sm:tracking-[0.24em]">
                        <span>Menu</span>
                        <span>Harga</span>
                    </div>

                    <div
                        class="menu-list"
                        :class="{ 'menu-list-compact': page.compact, 'signature-list': page.featured }"
                    >
                        <div
                            v-for="item in page.items"
                            :key="item.name"
                            class="menu-row"
                        >
                            <span class="menu-name">{{ item.name }}</span>
                            <span class="menu-price">{{ item.price }}</span>
                            <button
                                type="button"
                                class="add-item-button print:hidden"
                                :aria-label="`Tambah ${item.name} ke keranjang`"
                                @click="addToCart(item, page.title)"
                            >
                                + Add
                            </button>
                        </div>
                    </div>
                </div>

                <footer class="social-links relative z-10 mt-auto pt-6">
                    <a
                        v-for="link in socialLinks"
                        :key="link.label"
                        :href="link.href"
                        target="_blank"
                        rel="noreferrer"
                        :aria-label="link.label"
                        :title="link.label"
                    >
                        <span v-if="link.iconSrc" class="social-icon-mask" :style="{ '--icon-src': `url(${link.iconSrc})` }" aria-hidden="true"></span>
                        <svg v-else viewBox="0 0 32 32" aria-hidden="true">
                            <path :d="link.icon" />
                        </svg>
                    </a>
                </footer>
            </section>

            <section class="a4-page cover-page">
                <div class="page-frame"></div>
                <img :src="visuals.back" alt="Karaoke lounge room" class="absolute inset-0 h-full w-full object-cover opacity-30">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,169,79,0.2),transparent_38%),linear-gradient(180deg,rgba(13,9,7,0.72),#090706_78%)]"></div>
                <div class="relative z-10 m-auto max-w-md text-center">
                    <div class="brand-wordmark mx-auto">HAPPUP KARAOKE</div>
                    <p class="mt-10 text-xs font-semibold uppercase tracking-[0.35em] text-[#d9ad5c] sm:mt-12">Thank You</p>
                    <h2 class="mt-5 font-serif text-4xl font-bold uppercase leading-none text-white sm:text-5xl">Thank You For Singing With Us</h2>
                    <div class="mt-10 space-y-3 text-base font-medium text-[#e8d4b0]">
                        <p>Happup Antasari</p>
                        <p>Premium Karaoke & Lounge Experience</p>
                    </div>
                    <div class="social-links mt-9">
                        <a
                            v-for="link in socialLinks"
                            :key="link.label"
                            :href="link.href"
                            target="_blank"
                            rel="noreferrer"
                            :aria-label="link.label"
                            :title="link.label"
                        >
                            <span v-if="link.iconSrc" class="social-icon-mask" :style="{ '--icon-src': `url(${link.iconSrc})` }" aria-hidden="true"></span>
                            <svg v-else viewBox="0 0 32 32" aria-hidden="true">
                                <path :d="link.icon" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>

        <aside class="cart-panel print:hidden" aria-label="Keranjang pesanan">
            <div class="cart-panel-header">
                <div>
                    <p class="cart-kicker">Keranjang</p>
                    <h2>Order Items</h2>
                </div>
                <span class="cart-count">{{ cartCount }}</span>
            </div>

            <div v-if="cart.length" class="cart-items">
                <div
                    v-for="item in cart"
                    :key="`${item.category}-${item.name}`"
                    class="cart-item"
                >
                    <div>
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.price }} - {{ item.category }}</p>
                    </div>
                    <div class="quantity-control" aria-label="Atur jumlah item">
                        <button type="button" :aria-label="`Kurangi ${item.name}`" @click="changeQuantity(item, -1)">-</button>
                        <span>{{ item.quantity }}</span>
                        <button type="button" :aria-label="`Tambah ${item.name}`" @click="changeQuantity(item, 1)">+</button>
                    </div>
                </div>
            </div>

            <p v-else class="empty-cart">Belum ada item. Pilih menu lalu tekan Add.</p>

            <div class="cart-total">
                <span>Total estimasi</span>
                <strong>{{ formatRupiah(cartTotal) }}</strong>
            </div>

            <div class="cart-actions">
                <button type="button" class="clear-cart-button" :disabled="!cart.length" @click="clearCart">Clear</button>
                <a
                    class="order-button"
                    :class="{ 'is-disabled': !cart.length }"
                    :href="cart.length ? orderUrl : undefined"
                    target="_blank"
                    rel="noreferrer"
                    :aria-disabled="!cart.length"
                >
                    Order
                </a>
            </div>
        </aside>
    </main>
</template>

<style scoped>
.menu-book {
    background:
        radial-gradient(circle at 20% 0%, rgba(216, 169, 79, 0.18), transparent 28%),
        radial-gradient(circle at 84% 18%, rgba(120, 66, 28, 0.2), transparent 28%),
        linear-gradient(180deg, #160f0b 0%, #090706 100%);
}

.a4-page {
    position: relative;
    isolation: isolate;
    display: flex;
    width: 100%;
    min-height: auto;
    overflow: hidden;
    background:
        radial-gradient(circle at 50% 18%, rgba(216, 169, 79, 0.18), transparent 24%),
        linear-gradient(145deg, #17110e 0%, #090706 100%);
    border: 1px solid rgba(216, 169, 79, 0.36);
    box-shadow: 0 18px 52px rgba(0, 0, 0, 0.42);
    padding: 1.5rem;
}

.a4-page::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;
    background-image:
        linear-gradient(90deg, rgba(216, 169, 79, 0.05) 1px, transparent 1px),
        linear-gradient(180deg, rgba(216, 169, 79, 0.04) 1px, transparent 1px);
    background-size: 38px 38px;
    opacity: 0.35;
}

.a4-page::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(110deg, transparent 0%, rgba(255, 233, 170, 0.08) 42%, transparent 48%);
    pointer-events: none;
}

.cover-page {
    flex-direction: column;
    min-height: min(760px, calc(100svh - 2.5rem));
}

.menu-page {
    flex-direction: column;
}

.page-frame {
    position: absolute;
    inset: 0.8rem;
    border: 1px solid rgba(216, 169, 79, 0.5);
    pointer-events: none;
}

.page-frame::before,
.page-frame::after {
    content: '';
    position: absolute;
    width: 4rem;
    height: 4rem;
    border: 1px solid rgba(216, 169, 79, 0.35);
}

.page-frame::before {
    left: 0.8rem;
    top: 0.8rem;
    border-right: 0;
    border-bottom: 0;
}

.page-frame::after {
    right: 0.8rem;
    bottom: 0.8rem;
    border-left: 0;
    border-top: 0;
}

.lounge-glow {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 50% 12%, rgba(255, 210, 129, 0.34), transparent 14%),
        radial-gradient(circle at 18% 32%, rgba(216, 169, 79, 0.25), transparent 17%),
        radial-gradient(circle at 82% 34%, rgba(216, 169, 79, 0.24), transparent 17%);
    filter: blur(2px);
}

.brand-wordmark {
    width: fit-content;
    max-width: 100%;
    border: 1px solid rgba(216, 169, 79, 0.5);
    background: rgba(6, 5, 4, 0.5);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
    color: #ffd987;
    font-family: var(--font-serif);
    font-size: clamp(1.7rem, 7vw, 3.5rem);
    font-weight: 800;
    letter-spacing: 0;
    line-height: 1;
    padding: 1.1rem 1.4rem;
    text-align: center;
}

.page-number {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border: 1px solid rgba(216, 169, 79, 0.62);
    color: #ffd987;
    font-family: var(--font-serif);
    font-size: 1.35rem;
    line-height: 1;
}

.menu-list {
    display: grid;
    gap: 0.58rem;
}

.menu-list-compact {
    grid-template-columns: 1fr;
    row-gap: 0.48rem;
}

.signature-list {
    gap: 0.72rem;
    margin-top: 1.2rem;
}

.menu-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto auto;
    align-items: baseline;
    gap: 0.75rem;
    border-bottom: 1px solid rgba(216, 169, 79, 0.18);
    padding-bottom: 0.48rem;
}

.menu-name {
    min-width: 0;
    color: rgba(255, 249, 232, 0.92);
    font-size: 0.78rem;
    font-weight: 500;
    line-height: 1.3;
    overflow-wrap: anywhere;
}

.menu-price {
    color: #e4b45f;
    font-size: 0.76rem;
    font-weight: 700;
    white-space: nowrap;
}

.add-item-button {
    align-self: center;
    border: 1px solid rgba(216, 169, 79, 0.52);
    background: rgba(216, 169, 79, 0.12);
    color: #ffd987;
    font-size: 0.66rem;
    font-weight: 800;
    line-height: 1;
    min-height: 1.8rem;
    padding: 0 0.58rem;
    transition:
        background-color 160ms ease,
        border-color 160ms ease,
        transform 160ms ease;
}

.add-item-button:hover {
    border-color: rgba(255, 217, 135, 0.9);
    background: rgba(216, 169, 79, 0.24);
    transform: translateY(-1px);
}

.signature-list .menu-row {
    border: 1px solid rgba(216, 169, 79, 0.28);
    background: rgba(216, 169, 79, 0.08);
    padding: 0.78rem 0.86rem;
}

.signature-list .menu-name::before {
    content: '*';
    margin-right: 0.6rem;
    color: #ffd987;
}

.social-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.65rem;
}

.social-links a {
    display: grid;
    place-items: center;
    width: 2.55rem;
    height: 2.55rem;
    border: 1px solid rgba(216, 169, 79, 0.58);
    border-radius: 999px;
    background: rgba(216, 169, 79, 0.08);
    color: #ffd987;
    text-decoration: none;
    transition:
        background-color 160ms ease,
        border-color 160ms ease,
        transform 160ms ease;
}

.social-links a:hover {
    border-color: rgba(255, 217, 135, 0.9);
    background: rgba(216, 169, 79, 0.2);
    color: #ffd987;
    transform: translateY(-1px);
}

.social-links svg {
    width: 1.12rem;
    height: 1.12rem;
    fill: currentColor;
}

.social-icon-mask {
    display: block;
    width: 1.12rem;
    height: 1.12rem;
    background: currentColor;
    mask: var(--icon-src) center / contain no-repeat;
    -webkit-mask: var(--icon-src) center / contain no-repeat;
}

.cart-panel {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 30;
    width: min(calc(100vw - 2rem), 24rem);
    max-height: min(78svh, 38rem);
    overflow: auto;
    border: 1px solid rgba(216, 169, 79, 0.45);
    background: rgba(10, 7, 6, 0.94);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55);
    color: #f8ecd0;
    padding: 1rem;
}

.cart-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border-bottom: 1px solid rgba(216, 169, 79, 0.22);
    padding-bottom: 0.8rem;
}

.cart-kicker {
    color: #c89949;
    font-size: 0.64rem;
    font-weight: 800;
    letter-spacing: 0;
    text-transform: uppercase;
}

.cart-panel h2 {
    color: #fff;
    font-family: var(--font-serif);
    font-size: 1.35rem;
    font-weight: 800;
    line-height: 1.15;
    margin-top: 0.18rem;
}

.cart-count {
    display: grid;
    place-items: center;
    width: 2.4rem;
    height: 2.4rem;
    border: 1px solid rgba(216, 169, 79, 0.58);
    color: #ffd987;
    font-weight: 900;
}

.cart-items {
    display: grid;
    gap: 0.72rem;
    margin-top: 0.9rem;
}

.cart-item {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 0.75rem;
    border-bottom: 1px solid rgba(216, 169, 79, 0.14);
    padding-bottom: 0.72rem;
}

.cart-item h3 {
    color: #fff9e8;
    font-size: 0.85rem;
    font-weight: 800;
    line-height: 1.25;
}

.cart-item p {
    color: #cbb99a;
    font-size: 0.68rem;
    line-height: 1.35;
    margin-top: 0.18rem;
}

.quantity-control {
    display: grid;
    grid-template-columns: 1.8rem 1.8rem 1.8rem;
    align-items: center;
    border: 1px solid rgba(216, 169, 79, 0.28);
}

.quantity-control button {
    height: 1.8rem;
    color: #ffd987;
    font-weight: 900;
}

.quantity-control span {
    color: #fff;
    font-size: 0.8rem;
    font-weight: 800;
    text-align: center;
}

.empty-cart {
    border: 1px solid rgba(216, 169, 79, 0.18);
    color: #cbb99a;
    font-size: 0.78rem;
    line-height: 1.45;
    margin-top: 0.9rem;
    padding: 0.86rem;
}

.cart-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border-top: 1px solid rgba(216, 169, 79, 0.24);
    margin-top: 0.9rem;
    padding-top: 0.88rem;
}

.cart-total span {
    color: #cbb99a;
    font-size: 0.74rem;
    font-weight: 700;
}

.cart-total strong {
    color: #ffd987;
    font-size: 1rem;
    font-weight: 900;
}

.cart-actions {
    display: grid;
    grid-template-columns: 0.75fr 1.25fr;
    gap: 0.65rem;
    margin-top: 0.9rem;
}

.clear-cart-button,
.order-button {
    display: grid;
    min-height: 2.55rem;
    place-items: center;
    border: 1px solid rgba(216, 169, 79, 0.48);
    font-size: 0.78rem;
    font-weight: 900;
    text-decoration: none;
}

.clear-cart-button {
    color: #f8ecd0;
}

.clear-cart-button:disabled,
.order-button.is-disabled {
    cursor: not-allowed;
    opacity: 0.45;
}

.order-button {
    background: #d9ad5c;
    color: #130d09;
}

@media (min-width: 640px) {
    .a4-page {
        padding: 3rem;
    }

    .cover-page {
        min-height: 1040px;
    }

    .menu-page {
        min-height: 1040px;
        aspect-ratio: 210 / 297;
    }

    .page-frame {
        inset: 1.35rem;
    }

    .page-frame::before,
    .page-frame::after {
        width: 7rem;
        height: 7rem;
    }

    .page-number {
        width: 4rem;
        height: 4rem;
        font-size: 1.8rem;
    }

    .menu-list {
        gap: 0.8rem;
    }

    .menu-list-compact {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 1.4rem;
        row-gap: 0.58rem;
    }

    .signature-list {
        gap: 1rem;
        margin-top: 2rem;
    }

    .menu-row {
        gap: 1rem;
        padding-bottom: 0.65rem;
    }

    .menu-name {
        font-size: 0.95rem;
        line-height: 1.35;
    }

    .menu-price {
        font-size: 0.9rem;
    }

    .add-item-button {
        font-size: 0.72rem;
        min-height: 2rem;
        padding: 0 0.72rem;
    }

    .signature-list .menu-row {
        padding: 1rem 1.1rem;
    }

    .social-links a {
        width: 2.75rem;
        height: 2.75rem;
    }

    .social-links svg,
    .social-icon-mask {
        width: 1.2rem;
        height: 1.2rem;
    }
}

@media (max-width: 420px) {
    .a4-page {
        padding: 1.2rem;
    }

    .page-frame {
        inset: 0.55rem;
    }

    .page-frame::before,
    .page-frame::after {
        width: 3rem;
        height: 3rem;
    }

    .page-visual .rounded-full {
        display: none;
    }

    .menu-row {
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 0.18rem;
    }

    .menu-price {
        justify-self: start;
    }

    .add-item-button {
        grid-column: 2;
        grid-row: 1 / span 2;
        justify-self: end;
    }
}

@media (max-width: 520px) {
    .cart-panel {
        left: 0.75rem;
        right: 0.75rem;
        bottom: 0.75rem;
        width: auto;
        max-height: 52svh;
    }
}

@media print {
    .menu-book {
        background: #fff;
        padding: 0;
    }

    .a4-page {
        width: 210mm;
        min-height: 297mm;
        box-shadow: none;
        break-after: page;
        page-break-after: always;
    }
}
</style>
