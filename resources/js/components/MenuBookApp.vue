<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buku Menu Happy Puppy Antasari</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f3f4f6;
            color: #333;
            max-width: 540px; /* Membuat layout terkunci seperti tampilan aplikasi HP */
            margin: 0 auto;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            min-height: 100vh;
            background-color: #ffffff;
        }

        /* Top Bar & Branding */
        .top-banner {
            width: 100%;
            height: 140px;
            background: url('https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600') no-repeat center center;
            background-size: cover;
        }
        .brand-section {
            text-align: center;
            padding: 15px 10px;
            background: #ffffff;
            border-bottom: 1px solid #eee;
        }
        .brand-title {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-size: 1.8rem;
            margin-bottom: 2px;
            color: #222;
        }
        .brand-subtitle {
            font-size: 0.8rem;
            color: #888;
            letter-spacing: 1px;
        }

        /* Kategori Menu / Nav Bar */
        .category-container {
            position: sticky;
            top: 0;
            background: #f8f9fa;
            z-index: 999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 12px 15px;
            border-bottom: 1px solid #eef0f2;
        }
        .search-box {
            display: flex;
            align-items: center;
            gap: 10px;
            background: #ffffff;
            border-radius: 999px;
            padding: 8px 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            border: 1px solid #e8ebee;
        }
        .search-icon {
            color: #666;
            font-size: 1rem;
        }
        .search-input {
            border: none;
            outline: none;
            width: 100%;
            font-size: 0.95rem;
            color: #333;
            background: transparent;
        }
        .category-scroll {
            display: flex;
            gap: 14px;
            overflow-x: auto;
            white-space: nowrap;
            width: 100%;
            scrollbar-width: none; /* Sembunyikan scrollbar Firefox */
        }
        .category-scroll::-webkit-scrollbar {
            display: none; /* Sembunyikan scrollbar Chrome/Safari */
        }
        .category-item {
            color: #777;
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            padding-bottom: 4px;
            border-bottom: 2px solid transparent;
            transition: all 0.2s ease;
            background: none;
            border: none;
        }
        .category-item.active {
            color: #e05345;
            border-bottom: 2px solid #e05345;
        }

        /* Highlight / Feature Card */
        .highlight-container {
            padding: 15px;
        }
        .highlight-card {
            background: #ffffff;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border: 1px solid #eaeaea;
            text-align: center;
            padding-bottom: 15px;
        }
        .highlight-img {
            width: 100%;
            height: 120px;
            background: url('https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600') no-repeat center center;
            background-size: cover;
            border-radius: 24px 24px 0 0;
        }
        .highlight-title {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-size: 1.4rem;
            margin-top: 15px;
            color: #333;
        }
        .highlight-subtitle {
            font-size: 0.8rem;
            color: #777;
        }

        /* List Menu */
        .menu-list-container {
            padding: 0 15px 30px 15px;
        }
        .menu-group-title {
            font-size: 1rem;
            font-weight: 700;
            margin: 24px 0 8px;
            color: #2a2a2a;
        }
        .menu-card {
            display: flex;
            align-items: center;
            background: #ffffff;
            padding: 12px 0;
            border-bottom: 1px solid #f1f1f1;
        }
        .menu-thumb {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 15px;
            background-color: #eee;
        }
        .menu-details {
            flex-grow: 1;
        }
        .menu-title {
            font-size: 0.95rem;
            font-weight: 600;
            color: #222;
            margin-bottom: 2px;
        }
        .menu-desc {
            font-size: 0.78rem;
            color: #888;
            margin-bottom: 0;
            line-height: 1.2;
        }
        .menu-price {
            font-size: 0.95rem;
            font-weight: 600;
            color: #e05345;
            text-align: right;
            padding-left: 10px;
        }
    </style>
</head>
<body>

    <div class="top-banner"></div>

    <div class="brand-section">
        <div class="brand-title">Happy Puppy Antasari</div>
        <div class="brand-subtitle">Karaoke - Bar - Cafe</div>
    </div>

    <div class="category-container">
        <div class="search-box">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="search" class="search-input" placeholder="Cari menu..." aria-label="Cari menu" oninput="searchMenu(this.value)">
        </div>
        <div class="category-scroll">
            <button class="category-item active" onclick="switchCategory('all', this)">Semua</button>
            <button class="category-item" onclick="switchCategory('nasi-goreng', this)">Nasi Goreng</button>
            <button class="category-item" onclick="switchCategory('mie-kwetiaw', this)">Mie & Kwetiaw</button>
            <button class="category-item" onclick="switchCategory('hot-snack', this)">Hot Snack</button>
            <button class="category-item" onclick="switchCategory('food', this)">Food</button>
            <button class="category-item" onclick="switchCategory('salad-dessert', this)">Salad & Dessert</button>
            <button class="category-item" onclick="switchCategory('cancimen', this)">Cancimen</button>
            <button class="category-item" onclick="switchCategory('jus-milkshake', this)">Jus & Milkshake</button>
            <button class="category-item" onclick="switchCategory('soft-drink', this)">Soft Drink</button>
            <button class="category-item" onclick="switchCategory('drink-coffee', this)">Drink & Coffee</button>
        </div>
    </div>

    <div class="highlight-container">
        <div class="highlight-card">
            <div class="highlight-img"></div>
            <div class="highlight-title">✨ Menu Pilihan Terbaik</div>
            <div class="highlight-subtitle">Dibuat segar dengan bahan premium pilihan</div>
        </div>
    </div>

    <div class="menu-list-container">
        
        <div class="menu-group" id="nasi-goreng">
            <div class="menu-group-title">Nasi Goreng & Nasi Putih</div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Cap Cay</div><div class="menu-desc">Nasi dengan sayuran capcay segar melimpah</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Goreng Ayam</div><div class="menu-desc">Nasi goreng gurih dengan suwiran ayam</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Goreng Hongkong</div><div class="menu-desc">Nasi goreng putih khas Hongkong oriental</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Goreng Ikan Asin</div><div class="menu-desc">Aroma ikan asin yang menggugah selera</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Goreng Jawa</div><div class="menu-desc">Nasi goreng manis gurih bumbu jawa tradisional</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Goreng Seafood</div><div class="menu-desc">Kombinasi udang dan cumi segar</div></div><div class="menu-price">Rp62.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Goreng Original</div><div class="menu-desc">Rasa klasik standar yang selalu disukai</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Goreng Spesial</div><div class="menu-desc">Komplit dengan telur dan ekstra topping</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Goreng Sosis</div><div class="menu-desc">Potongan sosis premium melimpah</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Goreng Cumi</div><div class="menu-desc">Topping cumi kenyal empuk gurih</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Goreng Udang</div><div class="menu-desc">Udang segar manis gurih manis</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nasi Putih</div><div class="menu-desc">Nasi putih hangat pulen</div></div><div class="menu-price">Rp23.000</div></div>
        </div>

        <div class="menu-group" id="mie-kwetiaw">
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Mie Goreng</div><div class="menu-desc">Mie goreng bumbu kecap gurih</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Mie Goreng Spesial</div><div class="menu-desc">Mie goreng dengan tambahan telur mata sapi</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Mie Goreng Udang</div><div class="menu-desc">Mie goreng dengan topping udang segar</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Mie Goreng Jawa</div><div class="menu-desc">Mie dengan kuah nyemek khas Jawa</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Mie Goreng Seafood</div><div class="menu-desc">Mie goreng isi cumi, udang dan bakso ikan</div></div><div class="menu-price">Rp62.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Mie Kuah Spesial</div><div class="menu-desc">Kuah hangat bumbu rempah spesial</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Mi Godok</div><div class="menu-desc">Mie rebus tradisional bumbu gurih kemiri</div></div><div class="menu-price">Rp53.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Indomie Telur Kornet (“Internet”)</div><div class="menu-desc">Kombinasi legendaris favorit semua kalangan</div></div><div class="menu-price">Rp45.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Kwetiaw Goreng Spesial</div><div class="menu-desc">Kwetiaw kenyal gurih dengan isian lengkap</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Kwetiaw Goreng Seafood</div><div class="menu-desc">Kwetiaw lezat dengan udang dan cumi segar</div></div><div class="menu-price">Rp62.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Bihun Goreng Spesial</div><div class="menu-desc">Bihun lembut dengan cita rasa gurih khas</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Bihun Goreng Seafood</div><div class="menu-desc">Bihun goreng dengan aneka hidangan laut</div></div><div class="menu-price">Rp62.000</div></div>
        </div>

        <div class="menu-group" id="hot-snack">
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Chicken Nugget</div><div class="menu-desc">Nugget ayam goreng krispi</div></div><div class="menu-price">Rp50.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Chicken Wings</div><div class="menu-desc">Sayap ayam berbumbu saus spesial</div></div><div class="menu-price">Rp62.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Kentang Goreng</div><div class="menu-desc">French fries renyah dengan taburan garam</div></div><div class="menu-price">Rp50.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Sosis Goreng</div><div class="menu-desc">Sosis sapi goreng ukuran besar</div></div><div class="menu-price">Rp62.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Onion Ring</div><div class="menu-desc">Bawang bombay goreng tepung renyah</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Pisang Keju</div><div class="menu-desc">Pisang goreng manis dengan parutan keju</div></div><div class="menu-price">Rp37.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Pisang Keju Coklat</div><div class="menu-desc">Manis gurih perpaduan meses dan keju</div></div><div class="menu-price">Rp37.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Snack Kombinasi</div><div class="menu-desc">Platter isi aneka snack goreng untuk sharing</div></div><div class="menu-price">Rp87.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Cireng</div><div class="menu-desc">Cireng hangat kenyal dengan bumbu rujak</div></div><div class="menu-price">Rp37.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Tempe Mendoan</div><div class="menu-desc">Tempe tepung lebar khas Banyumas ditambah sambal kecap</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Tahu Bakso Goreng</div><div class="menu-desc">Tahu isi bakso daging padat gurih</div></div><div class="menu-price">Rp50.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Tahu Cabe Garam</div><div class="menu-desc">Tahu krispi potong dadu bumbu pedas asin</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Telur Dadar</div><div class="menu-desc">Telur dadar goreng gurih ala rumahan</div></div><div class="menu-price">Rp19.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Telur Mata Sapi</div><div class="menu-desc">Telur ceplok matang / setengah matang</div></div><div class="menu-price">Rp19.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Paru Goreng Crispy</div><div class="menu-desc">Paru sapi iris tipis goreng garing renyah</div></div><div class="menu-price">Rp83.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Paru Goreng Pedas</div><div class="menu-desc">Paru goreng empuk tumis sambal balado</div></div><div class="menu-price">Rp83.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Nachos Cheese</div><div class="menu-desc">Kripik jagung renyah dengan siraman saus keju</div></div><div class="menu-price">Rp58.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Ote-Ote</div><div class="menu-desc">Bakwan sayur goreng hangat garing</div></div><div class="menu-price">Rp50.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Pempek</div><div class="menu-desc">Pempek ikan asli disajikan dengan kuah cuko mantap</div></div><div class="menu-price">Rp50.000</div></div>
        </div>

        <div class="menu-group" id="food">
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Sop Iga Sapi</div><div class="menu-desc">Iga sapi empuk dengan kuah kaldu bening gurih</div></div><div class="menu-price">Rp154.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Ayam Goreng Tepung</div><div class="menu-desc">Ayam krispi gaya oriental</div></div><div class="menu-price">Rp58.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Ayam Goreng Kering</div><div class="menu-desc">Ayam goreng bumbu tradisional tanpa tepung</div></div><div class="menu-price">Rp58.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Ayam Goreng Mentega</div><div class="menu-desc">Ayam goreng berbalut saus mentega gurih manis</div></div><div class="menu-price">Rp58.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Ayam Asam Manis</div><div class="menu-desc">Potongan ayam fillet saus asam manis segar</div></div><div class="menu-price">Rp58.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Ayam Saos Inggris</div><div class="menu-desc">Cita rasa gurih harum saus inggris</div></div><div class="menu-price">Rp58.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Ayam Saos Teriyaki</div><div class="menu-desc">Ayam fillet bumbu teriyaki manis ala jepang</div></div><div class="menu-price">Rp58.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Ayam Lada Hitam</div><div class="menu-desc">Pedas hangat bumbu lada hitam meresap</div></div><div class="menu-price">Rp58.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Sapi Lada Hitam</div><div class="menu-desc">Daging sapi pilihan berpadu saus lada hitam</div></div><div class="menu-price">Rp87.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Udang Goreng Tepung</div><div class="menu-desc">Udang krispi renyah di luar, lembut di dalam</div></div><div class="menu-price">Rp75.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Udang Mayonaise</div><div class="menu-desc">Udang goreng crispy dilumuri mayo manis gurih</div></div><div class="menu-price">Rp75.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Udang Saos Tiram</div><div class="menu-desc">Udang tumis saus tiram gurih pekat</div></div><div class="menu-price">Rp75.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Udang Asam Manis</div><div class="menu-desc">Udang segar dengan balutan saus asam manis nanas</div></div><div class="menu-price">Rp75.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Udang Saos Inggris</div><div class="menu-desc">Cita rasa gurih saus inggris berpadu kelezatan udang</div></div><div class="menu-price">Rp75.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Udang Saos Mentega</div><div class="menu-desc">Tumis udang mentega wangi gurih</div></div><div class="menu-price">Rp75.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Udang Saos Teriyaki</div><div class="menu-desc">Udang dengan saus teriyaki gurih oriental</div></div><div class="menu-price">Rp75.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Cumi Asam Manis</div><div class="menu-desc">Cumi kenyal segar bertabur saus asam manis</div></div><div class="menu-price">Rp68.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Cumi Saos Tiram</div><div class="menu-desc">Cumi tumis bumbu saus tiram kental</div></div><div class="menu-price">Rp68.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Cumi Goreng Kering</div><div class="menu-desc">Cumi goreng renyah bumbu bawang ketumbar</div></div><div class="menu-price">Rp68.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Cumi Saos Teriyaki</div><div class="menu-desc">Cumi berbalut bumbu teriyaki jepang manis</div></div><div class="menu-price">Rp68.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Cumi Saos Inggris</div><div class="menu-desc">Cumi tumis dengan worcestershire sauce wangi</div></div><div class="menu-price">Rp68.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Cumi Saos Mentega</div><div class="menu-desc">Cumi wangi saus mentega bawang</div></div><div class="menu-price">Rp68.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Fu Yung Hai</div><div class="menu-desc">Telur dadar tebal isi sayur & daging siram saus tomat</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Cap Cay Goreng</div><div class="menu-desc">Aneka sayur tumis kental gurih oriental</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Cap Cay Kuah</div><div class="menu-desc">Sayuran segar dengan kuah kaldu hangat melimpah</div></div><div class="menu-price">Rp56.000</div></div>
        </div>

        <div class="menu-group" id="salad-dessert">
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Salad Buah</div><div class="menu-desc">Potongan buah segar saus mayo manis tabur keju</div></div><div class="menu-price">Rp87.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Buah Segar</div><div class="menu-desc">Platter buah potong dingin segar</div></div><div class="menu-price">Rp87.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Buah Segar Spesial</div><div class="menu-desc">Porsi besar buah premium pilihan lengkap</div></div><div class="menu-price">Rp160.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Ice Cream Buah</div><div class="menu-desc">Es krim lembut dipadu buah segar manis</div></div><div class="menu-price">Rp56.000</div></div>
        </div>

        <div class="menu-group" id="cancimen">
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1581798459219-318e76ae11b7?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Frozz</div><div class="menu-desc">Permen mint penyegar mulut bebas gula</div></div><div class="menu-price">Rp25.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1581798459219-318e76ae11b7?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Hexos</div><div class="menu-desc">Permen pelega tenggorokan rasa mint lemon</div></div><div class="menu-price">Rp17.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1581798459219-318e76ae11b7?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Chunky Bar</div><div class="menu-desc">Cokelat chunky isi kacang mete renyah</div></div><div class="menu-price">Rp56.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1581798459219-318e76ae11b7?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Cadbury 145gr</div><div class="menu-desc">Cokelat susu lembut ukuran besar pas untuk dinikmati</div></div><div class="menu-price">Rp80.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1581798459219-318e76ae11b7?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">SilverQueen</div><div class="menu-desc">Cokelat batangan ikonik dengan kacang almond/mete</div></div><div class="menu-price">Rp43.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1581798459219-318e76ae11b7?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Delfi 125gr</div><div class="menu-desc">Cokelat premium citarasa khas eropa</div></div><div class="menu-price">Rp80.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1581798459219-318e76ae11b7?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Kacang Bawang</div><div class="menu-desc">Camilan kacang bawang gurih garing</div></div><div class="menu-price">Rp37.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1581798459219-318e76ae11b7?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Pringles</div><div class="menu-desc">Keripik kentang tabung rasa original/BBQ</div></div><div class="menu-price">Rp55.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1581798459219-318e76ae11b7?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Chitato</div><div class="menu-desc">Keripik kentang bergelombang rasa sapi panggang</div></div><div class="menu-price">Rp32.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1581798459219-318e76ae11b7?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Qtela</div><div class="menu-desc">Keripik singkong tradisional renyah rasa bawang</div></div><div class="menu-price">Rp35.000</div></div>
        </div>

        <div class="menu-group" id="jus-milkshake">
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Jus Alpokat</div><div class="menu-desc">Jus alpukat kental dengan saus cokelat manis</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Jus Apel</div><div class="menu-desc">Ekstrak apel segar murni dingin</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Jus Jeruk</div><div class="menu-desc">Kaya vitamin C dari jeruk peras murni</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Jus Mangga</div><div class="menu-desc">Jus mangga manis harum tekstur lembut</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Jus Melon</div><div class="menu-desc">Melon hijau manis di-blender halus</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Jus Semangka</div><div class="menu-desc">Semangka merah kaya air sangat menyegarkan</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Jus Tomat</div><div class="menu-desc">Jus tomat merah segar sehat bergizi</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Jus Sirsak</div><div class="menu-desc">Sirsak putih rasa manis asam khas menyegarkan</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Jeruk Murni</div><div class="menu-desc">100% perasan jeruk asli dingin tanpa air tambahan</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Milk Shake Coklat</div><div class="menu-desc">Susu kocok cokelat premium dengan ice cream top</div></div><div class="menu-price">Rp47.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Milk Shake Strawberry</div><div class="menu-desc">Rasa strawberry manis asam creamy</div></div><div class="menu-price">Rp47.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Milk Shake Vanilla</div><div class="menu-desc">Aroma vanila lembut manis susu klasik</div></div><div class="menu-price">Rp47.000</div></div>
        </div>

        <div class="menu-group" id="soft-drink">
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Coca-Cola Can</div><div class="menu-desc">Minuman bersoda segar kemasan kaleng</div></div><div class="menu-price">Rp25.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Coca-Cola Pitcher</div><div class="menu-desc">Porsi teko besar pas untuk dinikmati bersama</div></div><div class="menu-price">Rp92.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Fanta Merah Can</div><div class="menu-desc">Soda rasa buah stroberi kemasan kaleng</div></div><div class="menu-price">Rp25.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Fanta Merah Pitcher</div><div class="menu-desc">Fanta porsi pitcher besar sharing</div></div><div class="menu-price">Rp92.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Greensands</div><div class="menu-desc">Minuman soda shandy rasa apel jeruk segar</div></div><div class="menu-price">Rp25.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Pokka Green Tea</div><div class="menu-desc">Teh hijau melati jepang kaleng segar</div></div><div class="menu-price">Rp32.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Soda Gembira</div><div class="menu-desc">Campuran susu kental manis, sirup merah, dan air soda</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Sprite Can</div><div class="menu-desc">Soda jernih rasa lemon kemasan kaleng</div></div><div class="menu-price">Rp25.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Sprite Pitcher</div><div class="menu-desc">Sprite ukuran pitcher teko besar</div></div><div class="menu-price">Rp92.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Fanta Susu</div><div class="menu-desc">Kombinasi fanta merah dicampur susu kental manis</div></div><div class="menu-price">Rp37.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Krating Daeng</div><div class="menu-desc">Minuman energi berstamina botol</div></div><div class="menu-price">Rp32.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Pocari Sweat</div><div class="menu-desc">Minuman isotonik pengganti ion tubuh kaleng</div></div><div class="menu-price">Rp25.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Pulpy Orange</div><div class="menu-desc">Minuman rasa jeruk dengan bulir buah asli</div></div><div class="menu-price">Rp25.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Yakult</div><div class="menu-desc">Minuman susu fermentasi baik untuk usus</div></div><div class="menu-price">Rp10.000</div></div>
        </div>

        <div class="menu-group" id="drink-coffee">
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Air Mineral</div><div class="menu-desc">Air minum mineral botol dingin / biasa</div></div><div class="menu-price">Rp20.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Milo Hot</div><div class="menu-desc">Minuman cokelat milo seduh hangat padat gizi</div></div><div class="menu-price">Rp37.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Milo Ice</div><div class="menu-desc">Milo kocok dingin es menyegarkan</div></div><div class="menu-price">Rp37.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Es Jeruk</div><div class="menu-desc">Perasan jeruk manis disajikan dingin es</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Es Jeruk Nipis</div><div class="menu-desc">Perasan jeruk nipis asam manis dingin segar</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Teh Hot</div><div class="menu-desc">Seduhan teh hitam wangi hangat murni</div></div><div class="menu-price">Rp23.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Es Teh</div><div class="menu-desc">Es teh manis pelepas dahaga favorit kasual</div></div><div class="menu-price">Rp23.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Jeruk Hot</div><div class="menu-desc">Jeruk peras hangat manis alami</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Jeruk Nipis Hot</div><div class="menu-desc">Seduhan jeruk nipis hangat pas di tenggorokan</div></div><div class="menu-price">Rp44.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Lemon Tea Hot</div><div class="menu-desc">Perpaduan teh dan lemon hangat harum</div></div><div class="menu-price">Rp32.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Lemon Tea Ice</div><div class="menu-desc">Teh lemon dingin segar asam manis</div></div><div class="menu-price">Rp32.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Lemon Tea Pitcher</div><div class="menu-desc">Lemon tea porsi teko besar sharing rame-rame</div></div><div class="menu-price">Rp92.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Susu Putih Hot</div><div class="menu-desc">Susu putih murni seduh hangat kenyamanan murni</div></div><div class="menu-price">Rp32.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Susu Putih Ice</div><div class="menu-desc">Es susu putih manis dingin</div></div><div class="menu-price">Rp32.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Susu Coklat Hot</div><div class="menu-desc">Susu cokelat hangat manis lezat manis</div></div><div class="menu-price">Rp32.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Susu Coklat Ice</div><div class="menu-desc">Es susu cokelat segar digemari</div></div><div class="menu-price">Rp32.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Teh Pitcher</div><div class="menu-desc">Satu pitcher teko es teh manis besar</div></div><div class="menu-price">Rp92.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Cappuccino</div><div class="menu-desc">Kopi cappuccino espresso kental foam tebal</div></div><div class="menu-price">Rp35.000</div></div>
            <div class="menu-card"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=120" class="menu-thumb"><div class="menu-details"><div class="menu-title">Kopi</div><div class="menu-desc">Kopi hitam mantap seduh tradisional aromatik</div></div><div class="menu-price">Rp30.000</div></div>
        </div>

    </div>

    <script>
        let currentCategory = 'all';

        function switchCategory(categoryId, element) {
            currentCategory = categoryId;
            const items = document.querySelectorAll('.category-item');
            items.forEach(item => item.classList.remove('active'));
            if (element) {
                element.classList.add('active');
            }

            // Kosongkan input search saat memilih kategori
            const searchInput = document.querySelector('.search-input');
            if (searchInput && searchInput.value.trim() === '') {
                searchInput.value = '';
            }

            const groups = document.querySelectorAll('.menu-group');
            groups.forEach(group => {
                if (categoryId === 'all') {
                    group.style.display = 'block';
                } else {
                    group.style.display = group.id === categoryId ? 'block' : 'none';
                }
                group.querySelectorAll('.menu-card').forEach(card => {
                    card.style.display = 'flex';
                });
            });
        }

        function searchMenu(value) {
            const keyword = value.trim().toLowerCase();
            if (!keyword) {
                switchCategory(currentCategory, document.querySelector('.category-item.active'));
                return;
            }

            document.querySelectorAll('.category-item').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.menu-group').forEach(group => {
                let groupHasMatch = false;
                group.querySelectorAll('.menu-card').forEach(card => {
                    const text = card.textContent.toLowerCase();
                    const match = text.includes(keyword);
                    card.style.display = match ? 'flex' : 'none';
                    if (match) {
                        groupHasMatch = true;
                    }
                });
                group.style.display = groupHasMatch ? 'block' : 'none';
            });
        }

        const groupLabels = {
            'nasi-goreng': 'Nasi Goreng & Nasi Putih',
            'mie-kwetiaw': 'Mie & Kwetiaw',
            'hot-snack': 'Hot Snack',
            'food': 'Food',
            'salad-dessert': 'Salad & Dessert',
            'cancimen': 'Cancimen',
            'jus-milkshake': 'Jus & Milkshake',
            'soft-drink': 'Soft Drink',
            'drink-coffee': 'Drink & Coffee'
        };

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.menu-group').forEach(group => {
                if (!group.querySelector('.menu-group-title')) {
                    const title = document.createElement('div');
                    title.className = 'menu-group-title';
                    title.textContent = groupLabels[group.id] || 'Menu';
                    group.insertBefore(title, group.firstChild);
                }
            });
        });
    </script>
</body>
</html>