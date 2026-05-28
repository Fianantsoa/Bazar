function sendPrompt(msg) {
    // placeholder pour intégration chat/support
    console.log('Prompt:', msg);
    alert(msg);
}

const i18n = {
    fr: {
        nav_how: 'Comment ça marche', nav_start: 'Démarrer', hero_badge: 'MADAGASCAR & AFRIQUE',
        hero_title: 'Crée ta boutique en ligne — professionnelle et simple.',
        hero_sub: 'Ajoute des produits, organise-les en catégories, et partage des liens courts sur Facebook et TikTok. Paiement à la livraison — pas de friction pour tes clients.',
        hero_primary: 'Créer ma boutique', hero_secondary: 'Voir un exemple', stat_1n: '5 min', stat_1l: 'Pour ouvrir ta boutique',
        stat_2n: '0 Ar', stat_2l: 'Pour commencer', stat_3n: '1 lien', stat_3l: 'À partager partout', card_fast: 'Rapide & Gratuit',
        card_desc: 'Boutique prête en 5 minutes. Copie le lien produit et colle-le dans ta bio ou tes publications.', card_cta: 'Essayer gratuitement',
        how_title: 'Comment ça marche', how_sub: 'Trois étapes simples pour vendre via les réseaux sociaux', step1_title: 'Créer ta boutique',
        step1_desc: 'Inscription rapide, personnalisation du profil et logo.', step2_title: 'Ajouter des produits', step2_desc: 'Chaque produit a son lien court et son QR code.',
        step3_title: 'Recevoir des commandes', step3_desc: 'Formulaire simple pour récupérer les infos de livraison. Paiement à la livraison.',
        feat_title: 'Fonctionnalités', feat_sub: 'Des outils pensés pour les vendeurs Facebook & TikTok', feat1_title: 'Liens partageables',
        feat1_desc: 'Copie en un clic et colle dans ta bio ou description.', feat2_title: 'Gestion du stock', feat2_desc: 'Alerte quand le stock est bas et suivi facile.',
        feat3_title: 'Interface mobile', feat3_desc: 'Gère tout depuis ton téléphone, rapide et ergonomique.', feat4_title: 'WhatsApp & Notifications',
        feat4_desc: 'Messages préremplis pour accélérer la confirmation des commandes.', pricing_title: 'Tarifs', pricing_sub: 'Commence gratuitement, passe à un plan quand tu veux',
        free_name: 'GRATUIT', free_price: '0 Ar', free_desc: 'Pour toujours — idéal pour débuter', free_li1: "Jusqu'à 10 produits", free_li2: 'Page vitrine', free_li3: 'Formulaire de commande', free_cta: 'Essayer',
        starter_name: 'STARTER', starter_price: '5 000 Ar / mois', starter_desc: '60% des vendeurs commencent ici', starter_li1: "Jusqu'à 50 produits", starter_li2: 'QR codes', starter_li3: 'Notifications WhatsApp', starter_li4: 'Analytics', starter_cta: 'Choisir Starter',
        pro_name: 'PRO', pro_price: '15 000 Ar / mois', pro_desc: 'Pour boutiques qui veulent scaler', pro_li1: 'Produits illimités', pro_li2: 'Catalogue PDF automatique', pro_li3: 'Variantes produit', pro_cta: 'Passer à Pro',
        test_title: 'Témoignages', test_sub: 'Ils ont essayé Bazar', test1_quote: '"Avant Bazar, je notais toutes mes commandes sur Facebook. Maintenant tout est centralisé et rapide."', test1_author: 'Rachna M. — Vendeuse de robes',
        test2_quote: '"Les liens produits dans mes posts ont multiplié mes ventes. Très simple à utiliser."', test2_author: 'Sammy T. — Accessoires', footer_text: "© 2026 Bazar.app — Conçu pour les vendeurs de Madagascar et d'Afrique. Aucune carte requise pour commencer · Paiement à la livraison"
    },
    en: {
        nav_how: 'How it works', nav_start: 'Get started', hero_badge: 'MADAGASCAR & AFRICA',
        hero_title: 'Create your online store — professional and simple.',
        hero_sub: 'Add products, organize them into categories, and share short links on Facebook and TikTok. Cash on delivery — no friction for your customers.',
        hero_primary: 'Create my store', hero_secondary: 'See an example', stat_1n: '5 min', stat_1l: 'To launch your store',
        stat_2n: '$0', stat_2l: 'To get started', stat_3n: '1 link', stat_3l: 'To share everywhere', card_fast: 'Fast & Free',
        card_desc: 'Store ready in 5 minutes. Copy the product link and paste it in your bio or posts.', card_cta: 'Try for free',
        how_title: 'How it works', how_sub: 'Three simple steps to sell through social media', step1_title: 'Create your store',
        step1_desc: 'Quick sign-up, profile and logo customization.', step2_title: 'Add products', step2_desc: 'Each product gets a short link and a QR code.',
        step3_title: 'Receive orders', step3_desc: 'Simple form to collect delivery details. Cash on delivery.',
        feat_title: 'Features', feat_sub: 'Tools designed for Facebook & TikTok sellers', feat1_title: 'Shareable links',
        feat1_desc: 'Copy in one click and paste into your bio or description.', feat2_title: 'Stock management', feat2_desc: 'Low-stock alerts and easy tracking.',
        feat3_title: 'Mobile interface', feat3_desc: 'Manage everything from your phone, fast and ergonomic.', feat4_title: 'WhatsApp & notifications',
        feat4_desc: 'Pre-filled messages to speed up order confirmation.', pricing_title: 'Pricing', pricing_sub: 'Start free, upgrade when you want',
        free_name: 'FREE', free_price: '$0', free_desc: 'Forever — ideal to get started', free_li1: 'Up to 10 products', free_li2: 'Storefront page', free_li3: 'Order form', free_cta: 'Try it',
        starter_name: 'STARTER', starter_price: '5,000 Ar / month', starter_desc: '60% of sellers start here', starter_li1: 'Up to 50 products', starter_li2: 'QR codes', starter_li3: 'WhatsApp notifications', starter_li4: 'Analytics', starter_cta: 'Choose Starter',
        pro_name: 'PRO', pro_price: '15,000 Ar / month', pro_desc: 'For stores that want to scale', pro_li1: 'Unlimited products', pro_li2: 'Automatic PDF catalog', pro_li3: 'Product variants', pro_cta: 'Go Pro',
        test_title: 'Testimonials', test_sub: 'They tried Bazar', test1_quote: '"Before Bazar, I wrote down all my orders on Facebook. Now everything is centralized and fast."', test1_author: 'Rachna M. — Dress seller',
        test2_quote: '"Product links in my posts multiplied my sales. Very easy to use."', test2_author: 'Sammy T. — Accessories', footer_text: '© 2026 Bazar.app — Built for sellers in Madagascar and Africa. No card required to start · Cash on delivery'
    }
};

const langButton = document.querySelector('[data-lang-switch]');
const i18nNodes = document.querySelectorAll('[data-i18n]');

function applyLanguage(lang) {
    const dict = i18n[lang] || i18n.fr;
    document.documentElement.lang = lang;
    i18nNodes.forEach((el) => {
        const key = el.dataset.i18n;
        if (dict[key]) el.textContent = dict[key];
    });
    if (langButton) {
        langButton.textContent = lang === 'fr' ? 'EN' : 'FR';
        langButton.setAttribute('aria-pressed', String(lang === 'en'));
        langButton.dataset.currentLang = lang;
    }
    localStorage.setItem('bazar-lang', lang);
}

langButton?.addEventListener('click', () => {
    const nextLang = document.documentElement.lang === 'fr' ? 'en' : 'fr';
    applyLanguage(nextLang);
});

applyLanguage(localStorage.getItem('bazar-lang') || 'fr');

(function () {
    // reveal on scroll
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
        const els = document.querySelectorAll('[data-reveal]');
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.classList.add('reveal');
                    requestAnimationFrame(() => el.classList.add('visible'));
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.12 });
        els.forEach(el => io.observe(el));
    }

    // ripple effect
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.btn');
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    }, { passive: true });
})();