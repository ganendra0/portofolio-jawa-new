# 🚀 Portfolio Website - Modern & Professional

Portfolio website yang modern dan profesional dengan desain bersih, responsif, dan dominan warna biru. Dibuat khusus untuk pelajar/mahasiswa di bidang teknologi dan IT yang fokus pada web development, IoT, dan software development.

## ✨ Fitur Utama

### 🎨 Desain & UI/UX
- **Dynamic Island Navbar** 🆕: Navbar dengan efek seperti Dynamic Island di iPhone
  - Expanded mode saat di atas halaman (full menu)
  - Compact pill shape saat scroll (hanya logo)
  - Hover untuk menampilkan menu sementara
  - Smooth transitions dengan cubic-bezier easing
  - Glassmorphism effect dengan backdrop blur
- **Modern & Clean Design**: Desain minimalis dengan fokus pada konten
- **Blue Theme**: Dominan warna biru dengan aksen cyan dan gradien yang menarik
- **Fully Responsive**: Tampil sempurna di semua perangkat (mobile, tablet, desktop)
- **Smooth Animations**: Animasi halus untuk hover effects, scroll, dan transitions
- **Grid Pattern Background**: Background dengan pattern grid untuk efek tech-forward

### 📱 Sections

1. **Hero Section**
   - Nama lengkap dengan gradient text effect
   - Tagline profesional
   - Animated code window visual
   - CTA buttons (Download CV & Contact Me)
   - Floating decorative elements
   - Scroll indicator

2. **About Me**
   - Profile image dengan border effects
   - Deskripsi singkat dengan tone profesional namun santai
   - Statistics counter (Projects, Technologies, Certificates)
   - Decorative icons

3. **Skills**
   - **Programming Languages** dengan progress bars
   - **Frameworks & Libraries** dengan tag display
   - **Tools & Technologies** dengan tag display
   - Hover effects pada setiap skill card

4. **Projects**
   - Filter buttons (All, Web App, IoT, Mobile App)
   - Project cards dengan thumbnail
   - Hover overlay dengan link buttons
   - Category badges
   - Technology tags
   - Smooth filtering animations

5. **Certificates**
   - Grid layout untuk sertifikat
   - Modal popup untuk preview gambar
   - Badge icons (Certificate, Trophy, Star)
   - Hover effects dan transformations

6. **Contact**
   - Contact information cards
   - Working contact form
   - Social media links (GitHub, LinkedIn, Instagram, Twitter)
   - Form validation

7. **Footer**
   - Copyright information
   - Back to top button

### 🛠️ Teknologi yang Digunakan

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **JavaScript**: Vanilla JS untuk interaktivitas
- **Font Awesome**: Icons library
- **Google Fonts**: Sora & JetBrains Mono

### ⚡ Dynamic Island Navbar - Cara Kerja

**Dynamic Island Navbar** terinspirasi dari iPhone 14 Pro's Dynamic Island, dengan 3 mode berbeda:

1. **Expanded Mode** (Saat di Top):
   - Navbar lebar penuh dengan semua menu items
   - Posisi: top-0 (menempel di atas)
   - Background: Glassmorphism dengan backdrop blur
   
2. **Compact Mode** (Saat Scroll):
   - Navbar menyusut menjadi pill shape (hanya logo)
   - Posisi: top-6 (floating dengan jarak dari atas)
   - Animasi smooth dengan cubic-bezier easing
   
3. **Hover Expand** (Hover saat Compact):
   - Hover di navbar → menu muncul kembali
   - Leave → kembali compact setelah 300ms
   - Perfect untuk akses cepat navigasi

**Keunggulan:**
- ✨ Lebih modern dan unique
- 📱 Space-efficient saat scroll
- 🎯 Easy access dengan hover
- 🌊 Smooth transitions
- 💎 Premium look & feel

## 📦 Struktur File

```
portfolio/
│
├── portfolio.html      # File HTML utama
├── script.js          # JavaScript untuk interaktivitas
└── README.md          # Dokumentasi
```

## 🚀 Cara Menggunakan

### 1. Download Files
Download semua file yang diperlukan:
- `portfolio.html`
- `script.js`

### 2. Buka Website
Cukup buka file `portfolio.html` di browser Anda. Tidak perlu instalasi atau server khusus!

### 3. Kustomisasi Konten

#### Mengubah Informasi Personal

**Nama dan Tagline** (di Hero Section):
```html
<h1 class="text-5xl lg:text-7xl font-bold leading-tight">
    <span class="text-slate-900">Halo, Saya</span>
    <br/>
    <span class="gradient-text">Nama Lengkap</span>  <!-- Ubah di sini -->
</h1>
```

**Foto Profile**:
Ganti URL gambar di About Section:
```html
<img src="URL_FOTO_ANDA" alt="Profile">
```

**Email, Phone, Location**:
Update di Contact Section:
```html
<p class="text-slate-900 font-medium">your.email@example.com</p>
<p class="text-slate-900 font-medium">+62 812-3456-7890</p>
```

**Social Media Links**:
```html
<a href="https://github.com/username">...</a>
<a href="https://linkedin.com/in/username">...</a>
```

#### Menambah/Mengubah Projects

Copy dan paste struktur project card ini, lalu sesuaikan:

```html
<div class="project-card group" data-category="web">  <!-- Category: web, iot, atau mobile -->
    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div class="relative overflow-hidden aspect-video">
            <img src="URL_GAMBAR" alt="Project Name">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                <a href="DEMO_URL" class="...">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="GITHUB_URL" class="...">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
        <div class="p-6">
            <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                Category Name
            </span>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Project Title</h3>
            <p class="text-slate-600 mb-4">Project description...</p>
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg">Tech 1</span>
                <span class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg">Tech 2</span>
            </div>
        </div>
    </div>
</div>
```

#### Menambah Certificates

```html
<div class="certificate-item group cursor-pointer" data-image="URL_GAMBAR_SERTIFIKAT">
    <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2">
        <div class="relative aspect-[4/3] overflow-hidden">
            <img src="URL_GAMBAR_SERTIFIKAT" alt="Certificate Name">
            <div class="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-certificate text-white text-xl"></i>
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Certificate Title</h3>
            <p class="text-slate-400 text-sm mb-1">Issuer Name</p>
            <p class="text-slate-500 text-sm">Month Year</p>
        </div>
    </div>
</div>
```

#### Mengubah Skills & Percentage

Ubah nilai persentase di Skills Section:
```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Skill Name</span>
        <span class="skill-level">85%</span>  <!-- Ubah % -->
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="--progress: 85%"></div>  <!-- Ubah % -->
    </div>
</div>
```

### 4. Upload CV File

Untuk tombol Download CV, buat file CV Anda dan update href:
```html
<a href="path/to/your-cv.pdf" download class="...">
    <i class="fas fa-download"></i>
    Download CV
</a>
```

### 5. Setup Contact Form

Saat ini form menggunakan alert sederhana. Untuk production:

1. **Email Service (Recommended)**:
   - Gunakan [EmailJS](https://www.emailjs.com/)
   - Atau [Formspree](https://formspree.io/)

2. **Backend API**:
   ```javascript
   fetch('/api/contact', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
   })
   ```

## 🎨 Kustomisasi Warna

Jika ingin mengubah color scheme, edit di bagian `tailwind.config`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary': {
                    // Ubah nilai hex di sini
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                }
            }
        }
    }
}
```

## 📱 Responsiveness

Website sudah fully responsive dengan breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Tips

1. **Optimize Images**:
   - Compress gambar sebelum upload
   - Gunakan format WebP untuk ukuran lebih kecil
   - Recommended size: Projects (600x400), Profile (600x600)

2. **Lazy Loading**:
   Tambahkan `loading="lazy"` pada tag img:
   ```html
   <img src="..." alt="..." loading="lazy">
   ```

3. **Minify Code**:
   Untuk production, minify HTML, CSS, dan JS menggunakan tools seperti:
   - [HTML Minifier](https://www.willpeavy.com/tools/minifier/)
   - [UglifyJS](https://github.com/mishoo/UglifyJS)

## 🌐 Deploy Website

### GitHub Pages (Gratis)
1. Create repository di GitHub
2. Upload files
3. Settings → Pages → Deploy from main branch
4. Website akan live di `https://username.github.io/repo-name`

### Netlify (Gratis)
1. Drag & drop folder ke [Netlify](https://www.netlify.com/)
2. Website langsung live dengan custom domain gratis

### Vercel (Gratis)
1. Import project ke [Vercel](https://vercel.com/)
2. Deploy otomatis dengan setiap push

## 📝 Checklist Sebelum Deploy

- [ ] Ganti semua placeholder text dengan informasi asli
- [ ] Upload foto profile dan project thumbnails
- [ ] Update semua links (GitHub, LinkedIn, dll)
- [ ] Upload file CV
- [ ] Test form contact
- [ ] Compress dan optimize images
- [ ] Test di berbagai devices dan browsers
- [ ] Setup analytics (Google Analytics optional)

## 🆘 Troubleshooting

**Problem**: Animasi tidak berjalan smooth
- **Solution**: Pastikan browser support CSS transitions dan transforms

**Problem**: Modal tidak menutup
- **Solution**: Check console untuk JavaScript errors

**Problem**: Mobile menu tidak toggle
- **Solution**: Pastikan script.js ter-load dengan benar

**Problem**: Filter projects tidak berfungsi
- **Solution**: Pastikan data-category attribute sesuai dengan data-filter value

## 📄 License

Free to use untuk personal dan commercial projects.

## 🤝 Contributing

Jika menemukan bug atau ingin menambah fitur:
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📧 Support

Jika ada pertanyaan atau butuh bantuan:
- Open issue di repository
- Email: your.email@example.com

## 🎉 Credits

- **Tailwind CSS**: https://tailwindcss.com/
- **Font Awesome**: https://fontawesome.com/
- **Google Fonts**: https://fonts.google.com/

---

**Built with ❤️ using Tailwind CSS & Vanilla JavaScript**

Selamat menggunakan dan semoga sukses dengan portfolio website Anda! 🚀
# portofolio-jawa-new
