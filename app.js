document.addEventListener('DOMContentLoaded', () => {
  const socialLinks = [
    { label: 'WhatsApp', href: 'https://wa.me/6282148004822', icon: 'whatsapp' },
    { label: 'Facebook', href: 'https://www.facebook.com/happup.samarinda.antasari', icon: 'facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com/happup.samarinda.antasari/', icon: 'instagram' },
  ];
  const visuals = {
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
  let menuPages = [
    { number: '01', title: 'Signature Menu', kicker: 'Recommended Menu', image: visuals.signature, featured: true, items: recommended.map((name) => ({ name, price: 'Recommended' })) },
    { number: '02', title: 'Nasi Goreng', image: visuals.friedRice, items: [['Nasi Cap Cay', 'Rp56.000'], ['Nasi Goreng Ayam', 'Rp56.000'], ['Nasi Goreng Hongkong', 'Rp56.000'], ['Nasi Goreng Ikan Asin', 'Rp56.000'], ['Nasi Goreng Jawa', 'Rp56.000'], ['Nasi Goreng Seafood', 'Rp62.000'], ['Nasi Goreng Original', 'Rp56.000'], ['Nasi Goreng Spesial', 'Rp56.000'], ['Nasi Goreng Sosis', 'Rp56.000'], ['Nasi Goreng Cumi', 'Rp56.000'], ['Nasi Goreng Udang', 'Rp56.000'], ['Nasi Putih', 'Rp23.000']] },
    { number: '03', title: 'Mie & Kwetiaw', image: visuals.noodle, items: [['Mie Goreng', 'Rp56.000'], ['Mie Goreng Spesial', 'Rp56.000'], ['Mie Goreng Udang', 'Rp56.000'], ['Mie Goreng Jawa', 'Rp56.000'], ['Mie Goreng Seafood', 'Rp62.000'], ['Mie Kuah Spesial', 'Rp56.000'], ['Mi Godok', 'Rp53.000'], ['Indomie Telur Kornet "Internet"', 'Rp45.000'], ['Kwetiaw Goreng Spesial', 'Rp56.000'], ['Kwetiaw Goreng Seafood', 'Rp62.000'], ['Bihun Goreng Spesial', 'Rp56.000'], ['Bihun Goreng Seafood', 'Rp62.000']] },
    { number: '04', title: 'Hot Snack', image: visuals.snack, compact: true, items: [['Chicken Nugget', 'Rp50.000'], ['Chicken Wings', 'Rp62.000'], ['Kentang Goreng', 'Rp50.000'], ['Sosis Goreng', 'Rp62.000'], ['Onion Ring', 'Rp44.000'], ['Pisang Keju', 'Rp37.000'], ['Pisang Keju Coklat', 'Rp37.000'], ['Snack Kombinasi', 'Rp87.000'], ['Cireng', 'Rp37.000'], ['Tempe Mendoan', 'Rp44.000'], ['Tahu Bakso Goreng', 'Rp50.000'], ['Tahu Cabe Garam', 'Rp44.000'], ['Telur Dadar', 'Rp19.000'], ['Telur Mata Sapi', 'Rp19.000'], ['Paru Goreng Crispy', 'Rp83.000'], ['Paru Goreng Pedas', 'Rp83.000'], ['Nachos Cheese', 'Rp58.000'], ['Ote-Ote', 'Rp50.000'], ['Pempek', 'Rp50.000']] },
    { number: '05', title: 'Food', image: visuals.mainFood, compact: true, items: [['Sop Iga Sapi', 'Rp154.000'], ['Ayam Goreng Tepung', 'Rp58.000'], ['Ayam Goreng Kering', 'Rp58.000'], ['Ayam Goreng Mentega', 'Rp58.000'], ['Ayam Asam Manis', 'Rp58.000'], ['Ayam Saos Inggris', 'Rp58.000'], ['Ayam Saos Teriyaki', 'Rp58.000'], ['Ayam Lada Hitam', 'Rp58.000'], ['Sapi Lada Hitam', 'Rp87.000'], ['Udang Goreng Tepung', 'Rp75.000'], ['Udang Mayonaise', 'Rp75.000'], ['Udang Saos Tiram', 'Rp75.000'], ['Udang Asam Manis', 'Rp75.000'], ['Udang Saos Inggris', 'Rp75.000'], ['Udang Saos Mentega', 'Rp75.000'], ['Udang Saos Teriyaki', 'Rp75.000'], ['Cumi Asam Manis', 'Rp68.000'], ['Cumi Saos Tiram', 'Rp68.000'], ['Cumi Goreng Kering', 'Rp68.000'], ['Cumi Saos Teriyaki', 'Rp68.000'], ['Cumi Saos Inggris', 'Rp68.000'], ['Cumi Saos Mentega', 'Rp68.000'], ['Fu Yung Hai', 'Rp56.000'], ['Cap Cay Goreng', 'Rp56.000'], ['Cap Cay Kuah', 'Rp56.000']] },
    { number: '06', title: 'Salad & Dessert', image: visuals.dessert, items: [['Salad Buah', 'Rp87.000'], ['Buah Segar', 'Rp87.000'], ['Buah Segar Spesial', 'Rp160.000'], ['Ice Cream Buah', 'Rp56.000']] },
    { number: '07', title: 'Cancimen', image: visuals.candy, items: [['Frozz', 'Rp25.000'], ['Hexos', 'Rp17.000'], ['Chunky Bar', 'Rp56.000'], ['Cadbury 145gr', 'Rp80.000'], ['SilverQueen', 'Rp43.000'], ['Delfi 125gr', 'Rp80.000'], ['Kacang Bawang', 'Rp37.000'], ['Pringles', 'Rp55.000'], ['Chitato', 'Rp32.000'], ['Qtela', 'Rp35.000']] },
    { number: '08', title: 'Jus & Milkshake', image: visuals.juice, items: [['Jus Alpokat', 'Rp44.000'], ['Jus Apel', 'Rp44.000'], ['Jus Jeruk', 'Rp44.000'], ['Jus Mangga', 'Rp44.000'], ['Jus Melon', 'Rp44.000'], ['Jus Semangka', 'Rp44.000'], ['Jus Tomat', 'Rp44.000'], ['Jus Sirsak', 'Rp44.000'], ['Jeruk Murni', 'Rp44.000'], ['Milk Shake Coklat', 'Rp47.000'], ['Milk Shake Strawberry', 'Rp47.000'], ['Milk Shake Vanilla', 'Rp47.000']] },
    { number: '09', title: 'Soft Drink', image: visuals.softDrink, items: [['Coca-Cola Can', 'Rp25.000'], ['Coca-Cola Pitcher', 'Rp92.000'], ['Fanta Merah Can', 'Rp25.000'], ['Fanta Merah Pitcher', 'Rp92.000'], ['Greensands', 'Rp25.000'], ['Pokka Green Tea', 'Rp32.000'], ['Soda Gembira', 'Rp44.000'], ['Sprite Can', 'Rp25.000'], ['Sprite Pitcher', 'Rp92.000'], ['Fanta Susu', 'Rp37.000'], ['Krating Daeng', 'Rp32.000'], ['Pocari Sweat', 'Rp25.000'], ['Pulpy Orange', 'Rp25.000'], ['Yakult', 'Rp10.000']] },
    { number: '10', title: 'Drink & Coffee', image: visuals.coffee, compact: true, items: [['Air Mineral', 'Rp20.000'], ['Milo Hot', 'Rp37.000'], ['Milo Ice', 'Rp37.000'], ['Es Jeruk', 'Rp44.000'], ['Es Jeruk Nipis', 'Rp44.000'], ['Teh Hot', 'Rp23.000'], ['Es Teh', 'Rp23.000'], ['Jeruk Hot', 'Rp38.700'], ['Jeruk Nipis Hot', 'Rp44.000'], ['Lemon Tea Hot', 'Rp32.000'], ['Lemon Tea Ice', 'Rp32.000'], ['Lemon Tea Pitcher', 'Rp92.000'], ['Susu Putih Hot', 'Rp32.000'], ['Susu Putih Ice', 'Rp32.000'], ['Susu Coklat Hot', 'Rp32.000'], ['Teh Pitcher', 'Rp92.000'], ['Cappuccino', 'Rp35.000'], ['Kopi', 'Rp30.000']] },
  ].map((page) => ({ ...page, items: page.items.map((item) => Array.isArray(item) ? { name: item[0], price: item[1] } : item) }));

  const iconSvgs = {
    whatsapp: '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"/><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"/></svg>',
    facebook: '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>',
    instagram: '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"/><path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8   c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"/><path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8   c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7 0,5 2.2,5 5V20.8z"/></g></svg>',
  };

  const app = document.getElementById('app');
  let currentCategory = 'All';
  let searchTerm = '';

  const uniqueCategories = ['All', ...menuPages.map(p => p.title)];

  const socialHtml = socialLinks.map(link => `<a href="${link.href}" target="_blank" rel="noreferrer" aria-label="${link.label}" title="${link.label}">${iconSvgs[link.icon] || ''}</a>`).join('');
  const pageItemHtml = (item) => `<div class="menu-row"><span class="menu-name">${item.name}</span><span class="menu-price">${item.price}</span></div>`;
  const pageHtml = (page) => `
    <section class="a4-page menu-page">
      <div class="page-frame"></div>
      <header class="page-header">
        <div>
          <p class="text-small font-semibold uppercase tracking-tight text-gold">${page.kicker || 'Happup Antasari'}</p>
          <h2 class="mt-2 font-serif text-3xl font-bold uppercase leading-tight text-white">${page.title}</h2>
        </div>
        <span class="page-number">${page.number}</span>
      </header>
      <div class="page-visual">
        <img src="${page.image}" alt="${page.title}">
        <div class="visual-overlay"></div>
        <div class="visual-footer">
          <p>Premium lounge dining selection for room service and shared moments.</p>
          <div class="badge">H</div>
        </div>
      </div>
      <div class="menu-section">
        <div class="flex justify-between border-top-bottom pb-3 text-small font-bold uppercase tracking-tight text-gold" style="display:grid;grid-template-columns:minmax(0,1fr) auto;">
          <span>Menu</span>
          <span>Harga</span>
        </div>
        <div class="menu-list${page.compact ? ' menu-list-compact' : ''}${page.featured ? ' signature-list' : ''}">
          ${page.items.map(pageItemHtml).join('')}
        </div>
      </div>
      <footer class="social-links">
        ${socialHtml}
      </footer>
    </section>`;

  function render() {
    const filteredPages = menuPages.filter(page => {
      const matchesCategory = currentCategory === 'All' || page.title === currentCategory;
      if (!matchesCategory) return false;
      if (!searchTerm) return true;
      const term = searchTerm.toLowerCase();
      return page.items.some(i => i.name.toLowerCase().includes(term));
    });

    app.innerHTML = `
      <section class="mx-auto mb-6 max-w-5xl text-center print-hidden sm-mb-8">
        <p class="text-small font-semibold uppercase tracking-tight text-gold">A4 Portrait Menu Book</p>
        <h1 class="mt-3 font-serif text-3xl font-bold uppercase leading-tight text-white">HAPPUP ANTASARI</h1>
        <p class="mt-3 text-sm text-soft">Elegant Premium Karaoke Lounge</p>
        <div class="mt-4" style="display:flex;justify-content:center;gap:0.75rem;align-items:center;">
          <label class="text-small text-soft" for="category-select">Filter:</label>
          <select id="category-select" style="padding:0.45rem;border-radius:8px;background:rgba(0,0,0,0.4);border:1px solid rgba(216,169,79,0.25);color:#f3dfb8;">
            ${uniqueCategories.map(c => `<option value="${c}">${c}</option>`).join('')}
          </select>
          <input id="search-input" placeholder="Cari menu..." style="padding:0.45rem;border-radius:8px;background:rgba(0,0,0,0.4);border:1px solid rgba(216,169,79,0.18);color:#f3dfb8;" />
        </div>
      </section>
      <div class="mx-auto grid gap-5 gap-8 grid-cols-2" style="max-width: 82.5rem;">
        <section class="a4-page cover-page">
          <div class="lounge-glow"></div>
          <div class="page-frame"></div>
          <div class="brand-wordmark">HAPPUP KARAOKE</div>
          <div class="mt-auto pb-6 text-center">
            <p class="text-small font-semibold uppercase tracking-sm text-glow">Happup Antasari</p>
            <h2 class="mt-4 font-serif text-4xl font-bold uppercase leading-tight text-white">Premium Karaoke</h2>
            <p class="mx-auto mt-5 max-w-sm text-lg leading-7 text-soft">Premium Karaoke & Lounge Experience</p>
            <div class="flex flex-wrap items-center justify-center gap-3 border-top-bottom px-4 py-3 text-small uppercase tracking-sm text-glow" style="border-color: rgba(217, 173, 92, 0.5);">
              <span>Mic</span>
              <span class="h-1 w-1 rounded-full" style="background:#d9ad5c; display:inline-block;"></span>
              <span>Cocktail</span>
              <span class="h-1 w-1 rounded-full" style="background:#d9ad5c; display:inline-block;"></span>
              <span>Lounge</span>
            </div>
            <div class="social-links">
              ${socialHtml}
            </div>
          </div>
        </section>
        ${filteredPages.map(pageHtml).join('')}
        <section class="a4-page cover-page" style="position:relative;">
          <div class="page-frame"></div>
          <img src="${visuals.back}" alt="Karaoke lounge room" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.30;">
          <div style="position:absolute; inset:0; background: radial-gradient(circle at center, rgba(216,169,79,0.2), transparent 38%), linear-gradient(180deg, rgba(13,9,7,0.72), #090706 78%);"></div>
          <div class="relative" style="z-index:10; margin:auto; max-width:28rem; text-align:center;">
            <div class="brand-wordmark" style="margin:0 auto;">HAPPUP KARAOKE</div>
            <p class="mt-10 text-xs font-semibold uppercase tracking-lg text-glow">Thank You</p>
            <h2 class="mt-5 font-serif text-4xl font-bold uppercase leading-tight text-white">Thank You For Singing With Us</h2>
            <div class="mt-10" style="display:grid; gap:0.75rem; color:#e8d4b0; font-size:1rem; font-weight:500;">
              <p>Happup Antasari</p>
              <p>Premium Karaoke & Lounge Experience</p>
            </div>
            <div class="social-links">
              ${socialHtml}
            </div>
          </div>
        </section>
      </div>`;

    // attach controls
    const select = document.getElementById('category-select');
    const search = document.getElementById('search-input');
    if (select) {
      select.value = currentCategory;
      select.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        render();
      });
    }
    if (search) {
      search.value = searchTerm;
      let timeout;
      search.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          searchTerm = e.target.value.trim();
          render();
        }, 200);
      });
    }
  }

  render();
});
