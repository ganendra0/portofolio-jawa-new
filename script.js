// Dynamic Island Navbar Effect
const navbar = document.getElementById('navbar');
const navbarContainer = document.getElementById('navbarContainer');
const desktopMenu = document.getElementById('desktopMenu');
let lastScroll = 0;
let hoverTimeout;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        // Scrolled - Compact Dynamic Island Mode
        navbarContainer.classList.add('compact');
    } else {
        // At top - Expanded Mode
        navbarContainer.classList.remove('compact');
    }
    
    lastScroll = currentScroll;
});

// Hover effect on navbar when scrolled (show menu temporarily)
navbarContainer.addEventListener('mouseenter', () => {
    if (window.pageYOffset > 100) {
        clearTimeout(hoverTimeout);
        navbarContainer.classList.remove('compact');
    }
});

navbarContainer.addEventListener('mouseleave', () => {
    if (window.pageYOffset > 100) {
        hoverTimeout = setTimeout(() => {
            navbarContainer.classList.add('compact');
        }, 300);
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Toggle icon
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    }
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-link');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-cyan-400', 'bg-white/10');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-cyan-400', 'bg-white/10');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30');
            btn.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
        });
        button.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200');
        button.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30');
        
        // Filter projects
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                // Add fade-in animation
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Certificate Modal
const certificateItems = document.querySelectorAll('.certificate-item');
const certificateModal = document.getElementById('certificateModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

certificateItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.getAttribute('data-image');
        modalImage.src = imageSrc;
        certificateModal.classList.remove('hidden');
        certificateModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    certificateModal.classList.add('hidden');
    certificateModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
});

certificateModal.addEventListener('click', (e) => {
    if (e.target === certificateModal) {
        certificateModal.classList.add('hidden');
        certificateModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Show success message (you can replace this with actual form submission)
    alert('Terima kasih! Pesan Anda telah diterima. Saya akan segera menghubungi Anda.');
    
    // Reset form
    contactForm.reset();
    
    // In production, you would send this data to a server:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('Pesan berhasil dikirim!');
    //     contactForm.reset();
    // })
    // .catch(error => {
    //     alert('Terjadi kesalahan. Silakan coba lagi.');
    // });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Typing Effect for Hero Section (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on hero title
// window.addEventListener('load', () => {
//     const heroName = document.querySelector('.hero-name .name-last');
//     if (heroName) {
//         const originalText = heroName.textContent;
//         typeWriter(heroName, originalText, 100);
//     }
// });

// Parallax Effect on Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.orb-1, .orb-2');
    
    parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Scroll Progress Indicator (Optional)
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // You can create a progress bar element and update its width
    // const progressBar = document.getElementById('scrollProgress');
    // if (progressBar) {
    //     progressBar.style.width = scrollPercent + '%';
    // }
}

window.addEventListener('scroll', updateScrollProgress);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Prevent default behavior for download CV link (update with actual file path)
document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', (e) => {
        // If you have an actual CV file, remove preventDefault
        // and update the href attribute with the file path
        // e.preventDefault();
        // alert('CV file akan segera didownload. Pastikan untuk menambahkan file CV Anda!');
    });
});

// Console Easter Egg
console.log('%c🚀 Hello, Developer!', 'color: #3b82f6; font-size: 24px; font-weight: bold;');
console.log('%cTertarik dengan kode website ini?', 'color: #64748b; font-size: 14px;');
console.log('%cBuild with ❤️ using Tailwind CSS & Vanilla JavaScript', 'color: #06b6d4; font-size: 12px;');
console.log('%c⭐ Star this project on GitHub!', 'color: #10b981; font-size: 14px; font-weight: bold;');
