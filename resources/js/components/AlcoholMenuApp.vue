<script setup>
const bottle = ['1 Botol'];
const singlePackage = ['1 Botol', '2 Mixer', '1 Kacang Bawang', '1 Buah Segar'];
const unlimitedPackage = ['3 Botol', '6 Mixer', '2 Kacang Bawang', '1 Buah Segar'];
const unlimitedWithLocal = [...unlimitedPackage, '1 Botol Local'];
const bottleGroupAliases = {
    'Blue Agave': 'Vibe Blue Agave',
    Codigo: 'Tequila Codigo',
};

const getBottleGroupName = (name) => {
    const baseName = name.replace(/^(Single|Unlimited)\s+/, '');

    return bottleGroupAliases[baseName] ?? baseName;
};

const groupItemsByBottle = (items) => Object.values(items.reduce((groups, item) => {
    const groupName = getBottleGroupName(item.name);

    groups[groupName] ??= {
        name: groupName,
        items: [],
    };

    groups[groupName].items.push(item);

    return groups;
}, {}));

const menuSections = [
    {
        number: '01',
        title: 'Vibe Series',
        kicker: 'Local Favorite',
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1000',
        items: [
            ['Vibe', 'Rp 800.000', bottle],
            ['Single Vibe', 'Rp 1.100.000', singlePackage],
            ['Unlimited Vibe', 'Rp 3.200.000', unlimitedPackage],
        ],
    },
    {
        number: '02',
        title: 'Vibe Blue Agave',
        kicker: 'Blue Agave Selection',
        image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1000',
        items: [
            ['Vibe Blue Agave', 'Rp 1.400.000', bottle],
            ['Single Vibe Blue Agave', 'Rp 1.650.000', singlePackage],
            ['Unlimited Blue Agave', 'Rp 4.100.000', unlimitedPackage],
        ],
    },
    {
        number: '03',
        title: 'Royal Brewhouse Selection',
        kicker: 'Red, Black, Gold',
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1000',
        items: [
            ['Red Royal Brewhouse', 'Rp 1.400.000', bottle],
            ['Single Red Royal Brewhouse', 'Rp 1.550.000', singlePackage],
            ['Unlimited Red Royal Brewhouse', 'Rp 3.950.000', unlimitedPackage],
            ['Black Royal Brewhouse', 'Rp 1.900.000', bottle],
            ['Single Black Royal Brewhouse', 'Rp 2.000.000', singlePackage],
            ['Unlimited Black Royal Brewhouse', 'Rp 4.800.000', unlimitedWithLocal],
            ['Gold Royal Brewhouse', 'Rp 2.000.000', bottle],
            ['Single Gold Royal Brewhouse', 'Rp 2.150.000', singlePackage],
            ['Unlimited Gold Royal Brewhouse', 'Rp 5.750.000', unlimitedWithLocal],
        ],
    },
    {
        number: '04',
        title: 'Whisky & Bourbon',
        kicker: 'Classic Bottle Service',
        image: 'https://images.pexels.com/photos/372959/pexels-photo-372959.jpeg?auto=compress&cs=tinysrgb&w=1000',
        items: [
            ['Red Label', 'Rp 1.900.000', bottle],
            ['Single Red Label', 'Rp 2.000.000', singlePackage],
            ['Unlimited Red Label', 'Rp 4.800.000', unlimitedWithLocal],
            ['Black Label', 'Rp 2.000.000', bottle],
            ['Single Black Label', 'Rp 2.150.000', singlePackage],
            ['Unlimited Black Label', 'Rp 5.750.000', unlimitedWithLocal],
            ['Jack Daniel', 'Rp 1.600.000', bottle],
            ['Unlimited Jack Daniel', 'Rp 5.750.000', unlimitedWithLocal],
            ['Jameson', 'Rp 1.900.000', bottle],
            ['Single Jameson', 'Rp 2.000.000', singlePackage],
            ['Unlimited Jameson', 'Rp 5.000.000', unlimitedWithLocal],
            ['Chivas Regal 12', 'Rp 2.000.000', bottle],
            ['Single Chivas Regal 12', 'Rp 2.150.000', singlePackage],
            ['Unlimited Chivas Regal 12', 'Rp 5.750.000', unlimitedWithLocal],
        ],
        compact: true,
    },
    {
        number: '05',
        title: 'The Single Malts',
        kicker: 'Premium Malt Whisky',
        image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1000',
        items: [
            ['Singleton 12', 'Rp 2.500.000', bottle],
            ['Single Singleton 12', 'Rp 2.900.000', singlePackage],
            ['Unlimited Singleton 12', 'Rp 7.500.000', unlimitedWithLocal],
            ['Macallan 12', 'Rp 3.800.000', bottle],
            ['Single Macallan 12', 'Rp 4.300.000', singlePackage],
            ['Unlimited Macallan 12', 'Rp 12.250.000', unlimitedWithLocal],
            ['Glenfiddich 12', 'Rp 2.200.000', bottle],
            ['Single Glenfiddich 12', 'Rp 2.500.000', singlePackage],
            ['Unlimited Glenfiddich 12', 'Rp 6.000.000', unlimitedWithLocal],
        ],
    },
    {
        number: '06',
        title: 'Cognac & Luxury',
        kicker: 'VSOP Selection',
        image: 'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1000',
        items: [
            ['Martell VSOP', 'Rp 2.950.000', bottle],
            ['Single Martell VSOP', 'Rp 3.500.000', singlePackage],
            ['Unlimited Martell VSOP', 'Rp 8.600.000', unlimitedWithLocal],
            ['Hennessy VSOP', 'Rp 2.950.000', bottle],
            ['Single Hennessy VSOP', 'Rp 3.500.000', singlePackage],
            ['Unlimited Hennessy VSOP', 'Rp 8.600.000', unlimitedWithLocal],
        ],
    },
    {
        number: '07',
        title: 'Spirits & Wine',
        kicker: 'Tequila, Vodka, Rare Bottle',
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1000',
        items: [
            ['Clase Azul Reposado', 'Rp 10.000.000', []],
            ['Tequila Jose Cuervo', 'Rp 2.000.000', bottle],
            ['Single Tequila Jose Cuervo', 'Rp 2.150.000', singlePackage],
            ['Unlimited Tequila Jose Cuervo', 'Rp 5.750.000', unlimitedWithLocal],
            ['Tequila Codigo', 'Rp 2.800.000', bottle],
            ['Single Tequila Codigo', 'Rp 3.000.000', singlePackage],
            ['Unlimited Codigo', 'Rp 8.300.000', unlimitedWithLocal],
            ['ORO Tequila', 'Rp 800.000', bottle],
            ['Single ORO Tequila', 'Rp 1.100.000', singlePackage],
            ['Unlimited ORO Tequila', 'Rp 3.200.000', unlimitedPackage],
            ['Single Grey Goose', 'Rp 2.500.000', singlePackage],
            ['Unlimited Grey Goose', 'Rp 5.750.000', unlimitedWithLocal],
        ],
        compact: true,
    },
    {
        number: '08',
        title: 'Wine Selection',
        kicker: 'Sweet, Smooth, Celebration',
        image: 'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1000',
        items: [
            ['Baileys', 'Rp 1.500.000', []],
            ['Sababay Mistelle', 'Rp 900.000', []],
            ["Sababay Moscato D'bali", 'Rp 800.000', []],
            ['Sababay Lambrusco', 'Rp 860.000', []],
        ],
    },
].map((section) => ({
    ...section,
    groups: groupItemsByBottle(section.items.map(([name, price, includes]) => ({ name, price, includes }))),
}));
</script>

<template>
    <main class="alcohol-menu min-h-screen px-3 py-5 text-[#f8ecd0] sm:px-6 sm:py-8 lg:px-10">
        <section class="mx-auto mb-6 max-w-5xl text-center print:hidden sm:mb-8">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#c89949] sm:text-xs sm:tracking-[0.35em]">Premium Beverage Menu</p>
            <h1 class="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-5xl">HAPPUP ANTASARI LOUNGE & BAR</h1>
            <p class="mt-3 text-sm text-[#cbb99a]">Minuman beralkohol premium untuk malam istimewa Anda</p>
        </section>

        <div class="mx-auto grid max-w-[1320px] gap-5 sm:gap-8 xl:grid-cols-2">
            <section class="beverage-page cover-page">
                <div class="page-frame"></div>
                <div class="brand-wordmark relative z-10 mx-auto mt-6 sm:mt-10">HAPPUP KARAOKE</div>
                <div class="relative z-10 mt-auto pb-6 text-center sm:pb-14">
                    <p class="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#d9ad5c] sm:text-xs sm:tracking-[0.35em]">Selamat Datang</p>
                    <h2 class="mt-4 font-serif text-4xl font-bold uppercase leading-none text-white sm:mt-5 sm:text-6xl">Premium Beverage Menu</h2>
                    <p class="mx-auto mt-5 max-w-md text-lg italic leading-7 text-[#e7d5b5]">"Nikmati setiap tegukan dengan pengalaman terbaik, hanya untuk Anda."</p>
                    <p class="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#cbb99a] sm:text-base sm:leading-7">Dengan suasana mewah dan pelayanan premium, kami menghadirkan pilihan minuman terbaik untuk menemani malam istimewa Anda.</p>
                    <div class="mx-auto mt-7 flex w-fit max-w-full flex-wrap items-center justify-center gap-3 border-y border-[#d9ad5c]/50 px-4 py-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#d9ad5c] sm:mt-9 sm:gap-4 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.28em]">
                        <span>Vibe</span>
                        <span class="h-1 w-1 rounded-full bg-[#d9ad5c]"></span>
                        <span>Whisky</span>
                        <span class="h-1 w-1 rounded-full bg-[#d9ad5c]"></span>
                        <span>Wine</span>
                    </div>
                </div>
            </section>

            <section
                v-for="section in menuSections"
                :key="section.number"
                class="beverage-page menu-page"
                :class="{ 'compact-page': section.compact }"
            >
                <div class="page-frame"></div>
                <header class="relative z-10 flex items-start justify-between gap-5">
                    <div>
                        <p class="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#c89949] sm:text-xs sm:tracking-[0.32em]">{{ section.kicker }}</p>
                        <h2 class="mt-2 font-serif text-3xl font-bold uppercase leading-none text-white sm:mt-3 sm:text-5xl">{{ section.title }}</h2>
                    </div>
                    <span class="page-number">{{ section.number }}</span>
                </header>

                <div class="page-visual relative z-10 mt-6 overflow-hidden border border-[#d9ad5c]/35 bg-black/30 sm:mt-8">
                    <img :src="section.image" :alt="section.title" class="h-36 w-full object-cover opacity-80 sm:h-44">
                    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.72))]"></div>
                    <div class="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                        <p class="max-w-xs text-xs leading-5 text-[#f3dfb8] sm:text-sm sm:leading-6">Elegant luxury selection with premium service and curated package inclusions.</p>
                        <div class="h-14 w-14 border border-[#d9ad5c] bg-[#d9ad5c]/15 text-center font-serif text-3xl leading-[3.4rem] text-[#ffd987]">{{ section.number }}</div>
                    </div>
                </div>

                <div class="product-grid relative z-10 mt-5 sm:mt-7">
                    <article
                        v-for="group in section.groups"
                        :key="group.name"
                        class="bottle-group"
                    >
                        <h3 class="bottle-group-title">{{ group.name }}</h3>
                        <div class="package-list">
                            <div
                                v-for="item in group.items"
                                :key="item.name"
                                class="product-card"
                            >
                                <div class="grid grid-cols-[1fr_auto] gap-3">
                                    <h4>{{ item.name }}</h4>
                                    <strong>{{ item.price }}</strong>
                                </div>
                                <ul v-if="item.includes.length">
                                    <li v-for="include in item.includes" :key="include">{{ include }}</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>

                <p class="relative z-10 mt-auto pt-7 text-center text-[0.68rem] uppercase tracking-[0.2em] text-[#c89949] sm:text-xs">
                    21+ only. Please drink responsibly.
                </p>
            </section>
        </div>
    </main>
</template>

<style scoped>
.alcohol-menu {
    background:
        radial-gradient(circle at 18% 0%, rgba(216, 169, 79, 0.17), transparent 28%),
        radial-gradient(circle at 86% 16%, rgba(102, 34, 38, 0.28), transparent 30%),
        radial-gradient(circle at 50% 96%, rgba(18, 35, 62, 0.32), transparent 34%),
        linear-gradient(180deg, #100909 0%, #050505 100%);
}

.beverage-page {
    position: relative;
    isolation: isolate;
    display: flex;
    width: 100%;
    min-height: auto;
    overflow: hidden;
    background:
        linear-gradient(135deg, rgba(113, 25, 36, 0.22), transparent 34%),
        radial-gradient(circle at 52% 12%, rgba(216, 169, 79, 0.16), transparent 24%),
        linear-gradient(145deg, #15100f 0%, #070606 100%);
    border: 1px solid rgba(216, 169, 79, 0.38);
    box-shadow: 0 18px 52px rgba(0, 0, 0, 0.42);
    padding: 1.5rem;
}

.beverage-page::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;
    background-image:
        linear-gradient(90deg, rgba(216, 169, 79, 0.05) 1px, transparent 1px),
        linear-gradient(180deg, rgba(216, 169, 79, 0.04) 1px, transparent 1px);
    background-size: 38px 38px;
    opacity: 0.34;
}

.beverage-page::after {
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

.page-number {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    flex: 0 0 auto;
    border: 1px solid rgba(216, 169, 79, 0.62);
    color: #ffd987;
    font-family: var(--font-serif);
    font-size: 1.35rem;
    line-height: 1;
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

.product-grid {
    display: grid;
    gap: 0.7rem;
}

.bottle-group {
    border: 1px solid rgba(216, 169, 79, 0.24);
    background:
        linear-gradient(135deg, rgba(216, 169, 79, 0.1), transparent 36%),
        rgba(5, 5, 5, 0.34);
    padding: 0.85rem;
}

.bottle-group-title {
    border-bottom: 1px solid rgba(216, 169, 79, 0.26);
    color: #ffd987;
    font-family: var(--font-serif);
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.2;
    padding-bottom: 0.58rem;
}

.package-list {
    display: grid;
    gap: 0.62rem;
    margin-top: 0.68rem;
}

.product-card {
    border-bottom: 1px solid rgba(216, 169, 79, 0.16);
    padding-bottom: 0.62rem;
}

.product-card:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.product-card h4 {
    min-width: 0;
    color: rgba(255, 249, 232, 0.94);
    font-size: 0.85rem;
    font-weight: 700;
    line-height: 1.25;
    overflow-wrap: anywhere;
}

.product-card strong {
    color: #e4b45f;
    font-size: 0.78rem;
    font-weight: 800;
    line-height: 1.25;
    text-align: right;
    white-space: nowrap;
}

.product-card ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 0.45rem;
    margin-top: 0.65rem;
    color: #cbb99a;
    font-size: 0.68rem;
    line-height: 1.2;
}

.product-card li {
    border: 1px solid rgba(216, 169, 79, 0.18);
    background: rgba(216, 169, 79, 0.08);
    padding: 0.22rem 0.42rem;
}

@media (min-width: 640px) {
    .beverage-page {
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

    .product-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.78rem;
    }

    .compact-page .product-grid {
        gap: 0.5rem;
    }

    .compact-page .bottle-group {
        padding: 0.62rem;
    }

    .compact-page .bottle-group-title {
        font-size: 0.82rem;
        padding-bottom: 0.42rem;
    }

    .compact-page .package-list {
        gap: 0.45rem;
        margin-top: 0.48rem;
    }

    .compact-page .product-card h4 {
        font-size: 0.75rem;
    }

    .compact-page .product-card strong {
        font-size: 0.7rem;
    }

    .compact-page .product-card ul {
        gap: 0.25rem;
        margin-top: 0.45rem;
        font-size: 0.58rem;
    }

    .product-card h4 {
        font-size: 0.9rem;
    }

    .product-card strong {
        font-size: 0.82rem;
    }

}

@media (max-width: 420px) {
    .beverage-page {
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

    .product-card .grid {
        grid-template-columns: minmax(0, 1fr);
        gap: 0.25rem;
    }

    .product-card strong {
        text-align: left;
    }
}

@media print {
    .alcohol-menu {
        background: #fff;
        padding: 0;
    }

    .beverage-page {
        width: 210mm;
        min-height: 297mm;
        box-shadow: none;
        break-after: page;
        page-break-after: always;
    }
}
</style>
