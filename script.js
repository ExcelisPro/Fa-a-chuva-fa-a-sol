// 1. Dicionário de Idiomas
const translations = {
    pt: {
        "page-title": "Faça Chuva, Faça Sol | Eduardo Fernandes de Freitas",
        "amazon-url": "https://www.amazon.com.br/Fa%C3%A7a-chuva-fa%C3%A7a-sol-reconstru%C3%A7%C3%A3o-ebook/dp/B0H9X47WZT",
        "cover-title-1": "FAÇA CHUVA,",
        "cover-title-2": "FAÇA SOL",
        "hero-title-main": "Faça Chuva,<br>Faça Sol",
        "hero-pretitle": "MEMÓRIAS",
        "hero-subtitle": "Uma história de reconstrução, família e liderança.",
        "btn-buy": "COMPRAR NA AMAZON",
        "availability": "Disponível em Kindle e Paperback.",
        "quote-text": '"Ninguém escolhe a tempestade.<br>Todos escolhem o que fazem depois dela."',
        "label-about-book": "SOBRE O LIVRO",
        "card1-title": "Recomeço",
        "card1-desc": "A coragem de recomeçar depois de perder tudo.",
        "card2-title": "Família",
        "card2-desc": "O alicerce que sustenta cada conquista."
    },
    en: {
        "page-title": "No Matter the Weather | Eduardo Fernandes de Freitas",
        "amazon-url": "https://www.amazon.com.br/No-matter-Weather-reconstruction-leadership-ebook/dp/B0HBB9Z3JT",
        "cover-title-1": "NO MATTER",
        "cover-title-2": "THE WEATHER",
        "hero-title-main": "No Matter<br>the Weather",
        "hero-pretitle": "MEMOIRS",
        "hero-subtitle": "A story of rebuilding, family, and leadership.",
        "btn-buy": "BUY ON AMAZON",
        "availability": "Available on Kindle and Paperback.",
        "quote-text": '"No one chooses the storm.<br>Everyone chooses what they do after it."',
        "label-about-book": "ABOUT THE BOOK",
        "card1-title": "Fresh Starts",
        "card1-desc": "The courage to start over after losing everything.",
        "card2-title": "Family",
        "card2-desc": "The foundation that sustains every achievement."
    }
};

// 2. Gerenciador de Idiomas
function setLanguage(lang) {
    // Atualiza botões do menu
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    if(event) event.target.classList.add('active');

    // Atualiza textos gerais e da capa SVG
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; 
        }
    });

    // Atualiza a imagem da capa para formato JPG
    const coverScene = document.getElementById('cover-scene-img');
    if (coverScene) {
        coverScene.setAttribute('href', `assets/cover-scene-${lang}.jpg`);
    }

    // Atualiza o link dinâmico da Amazon
    const amazonLink = document.getElementById('amazon-link');
    if (amazonLink && translations[lang]["amazon-url"]) {
        amazonLink.href = translations[lang]["amazon-url"];
    }

    // Atualiza a tag HTML principal para SEO
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
}

// 3. Gerenciador de Animações (Scroll Reveal)
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona elementos para animar na rolagem
    document.querySelectorAll('.card, .quote-section').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// 4. Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    // Define idioma inicial
    setLanguage('pt');
});