/* ═══════════════════════════════════════════
   BAZAR.APP — script.js V3
   - i18n FR/EN complet
   - Reveal on scroll (IntersectionObserver)
   - Ripple effect
   - Signup handler
   - Smooth scroll helpers
═══════════════════════════════════════════ */

// ── i18n ──────────────────────────────────
const i18n = {
  fr: {
    nav_how: 'Comment ça marche', nav_pricing: 'Tarifs', nav_start: 'Démarrer',
    hero_badge: 'MADAGASCAR & AFRIQUE',
    hero_title_1: 'Ta boutique en ligne.', hero_title_2: 'Un lien.', hero_title_3: " C'est tout.",
    hero_sub: "Crée ta boutique en 5 minutes. Partage tes produits sur Facebook et TikTok. Reçois tes commandes de façon organisée — sans caisse, sans stress.",
    hero_cta1: "Créer ma boutique — c'est gratuit", hero_cta2: 'Voir comment ça marche',
    stat_1n: '5 min', stat_1l: 'Pour ouvrir ta boutique',
    stat_2n: '0 Ar', stat_2l: 'Pour commencer',
    stat_3n: '1 lien', stat_3l: 'À partager partout',
    proof_label: 'Partageable sur',
    how_title: 'Comment ça marche', how_sub: 'Trois étapes pour commencer à vendre',
    step1_title: 'Crée ta boutique', step1_desc: "Inscription en 2 minutes. Ajoute ton logo, ta description et ton numéro WhatsApp. Ta boutique a son URL unique.",
    step2_title: 'Ajoute tes produits', step2_desc: "Photos, prix, stock. Chaque produit génère un lien court et un QR code prêt à partager.",
    step3_title: 'Reçois tes commandes', step3_desc: "Les clients commandent via un formulaire simple. Tu vois tout dans ton tableau de bord et tu les contactes en un clic.",
    feat_title: 'Tout ce qu\'il te faut', feat_sub: 'Des outils pensés pour les vendeurs de réseaux sociaux',
    feat1_title: 'Liens partageables', feat1_desc: "Un lien court par produit. Copié en un clic pour Facebook, TikTok ou WhatsApp. Belle prévisualisation automatique.",
    feat2_title: 'Gestion du stock', feat2_desc: "Alerte automatique quand un produit est presque épuisé. Statuts : Disponible, Rupture, Archivé.",
    feat3_title: 'QR Code produit', feat3_desc: "Idéal pour les marchés physiques. Le client scanne et commande directement depuis son téléphone.",
    feat4_title: 'Catalogue PDF auto', feat4_desc: "Génère un PDF professionnel de tous tes produits à partager dans les groupes Facebook.",
    feat5_title: 'WhatsApp intégré', feat5_desc: "Message pré-rempli automatique avec les détails de chaque commande. Confirmation en un clic.",
    feat6_title: 'Analytics simples', feat6_desc: "Vois combien de fois ton lien a été cliqué et d'où viennent tes visiteurs. Facebook, TikTok, WhatsApp.",
    test_title: 'Ils vendent avec Bazar', test_sub: 'De vrais vendeurs, de vrais résultats',
    test1_quote: '"Avant Bazar, je notais toutes mes commandes dans la messagerie Facebook. Maintenant tout est centralisé et je rate zéro vente."',
    test1_name: 'Rachna M.', test1_role: ' — Vendeuse de robes, Antananarivo',
    test2_quote: '"Les liens produits dans mes TikToks ont multiplié mes commandes par 3. Mes clients commandent directement sans m\'envoyer de DM."',
    test2_name: 'Sammy T.', test2_role: ' — Accessoires & bijoux',
    test3_quote: '"Le QR code sur mes étiquettes au marché, c\'est la meilleure idée. Les clients scannent et commandent même quand je ne suis pas là."',
    test3_name: 'Fanja H.', test3_role: ' — Épices & produits locaux',
    pricing_title: 'Des prix adaptés à Madagascar', pricing_sub: '14 jours gratuits — toutes fonctionnalités — aucune carte requise',
    ptl_1_label: 'Inscription', ptl_1_sub: 'Gratuite, sans carte',
    ptl_2_label: "14 jours d'essai", ptl_2_sub: 'Accès Pro complet',
    ptl_3_label: 'Email rappel J−3', ptl_3_sub: 'Avant la fin',
    ptl_4_label: 'Jour 15 → Starter', ptl_4_sub: 'Résiliable à tout moment',
    trial_badge: 'ESSAI GRATUIT', trial_price: '0 Ar', trial_period: 'pendant 14 jours',
    trial_desc: 'Toutes les fonctionnalités Pro débloquées. Aucune carte bancaire requise.',
    trial_li1: 'Produits illimités', trial_li2: 'QR codes + catalogue PDF',
    trial_li3: 'WhatsApp + notifications', trial_li4: 'Analytics complets',
    trial_li5: 'Variantes produit', trial_li6: 'Export CSV',
    trial_cta: "Commencer l'essai gratuit →",
    starter_auto_badge: "Automatique après l'essai",
    starter_name: 'STARTER', starter_price: '5 000 Ar', starter_period: '/ mois', starter_desc: "Plan par défaut à la fin de l'essai. Résiliable à tout moment.",
    starter_li1: "Jusqu'à 50 produits", starter_li2: 'QR codes produits', starter_li3: 'Notifications WhatsApp', starter_li4: 'Analytics basiques', starter_li5: 'Export CSV des commandes',
    starter_li6: 'Catalogue PDF (Pro)', starter_li7: 'Variantes produit (Pro)', starter_cta: 'Plan par défaut',
    pro_name: 'PRO', pro_price: '15 000 Ar', pro_period: '/ mois', pro_desc: 'Pour boutiques à fort volume. Upgrade depuis Starter à tout moment.',
    pro_li1: 'Produits illimités', pro_li2: 'Catalogue PDF automatique', pro_li3: 'Variantes taille / couleur', pro_li4: 'Panier multi-produit', pro_li5: 'Historique client auto', pro_li6: 'Support prioritaire', pro_cta: 'Passer à Pro',
    pricing_note: "Après les 14 jours d'essai, le compte passe automatiquement au plan Starter (5 000 Ar/mois). Un email de rappel est envoyé 3 jours avant. Résiliation possible à tout moment depuis le tableau de bord — sans frais.",
    cta_title: 'Prêt à vendre mieux ?',
    cta_sub: "Rejoins les vendeurs qui ont déjà transformé leur page Facebook en vraie boutique professionnelle.",
    cta_placeholder: 'ton@email.com',
    cta_btn: 'Créer ma boutique gratuitement →',
    cta_hint: 'Boutique prête en 5 minutes · Gratuit pour toujours',
    footer_text: "© 2026 Bazar.app — Conçu pour les vendeurs de Madagascar et d'Afrique.",
  },
  en: {
    nav_how: 'How it works', nav_pricing: 'Pricing', nav_start: 'Get started',
    hero_badge: 'MADAGASCAR & AFRICA',
    hero_title_1: 'Your online store.', hero_title_2: 'One link.', hero_title_3: " That's it.",
    hero_sub: "Create your store in 5 minutes. Share products on Facebook and TikTok. Receive orders in an organized way — no payment hassle.",
    hero_cta1: "Create my store — it's free", hero_cta2: 'See how it works',
    stat_1n: '5 min', stat_1l: 'To launch your store',
    stat_2n: '$0', stat_2l: 'To get started',
    stat_3n: '1 link', stat_3l: 'To share everywhere',
    proof_label: 'Shareable on',
    how_title: 'How it works', how_sub: 'Three steps to start selling',
    step1_title: 'Create your store', step1_desc: "Sign up in 2 minutes. Add your logo, description and WhatsApp number. Your store gets a unique URL.",
    step2_title: 'Add your products', step2_desc: "Photos, price, stock. Each product gets a short link and a QR code ready to share.",
    step3_title: 'Receive orders', step3_desc: "Customers order through a simple form. You see everything in your dashboard and contact them in one click.",
    feat_title: 'Everything you need', feat_sub: 'Tools designed for Facebook & TikTok sellers',
    feat1_title: 'Shareable links', feat1_desc: "A short link per product. Copied in one click for Facebook, TikTok or WhatsApp. Beautiful auto-preview.",
    feat2_title: 'Stock management', feat2_desc: "Automatic alert when a product is almost out of stock. Statuses: Available, Out of stock, Archived.",
    feat3_title: 'Product QR Code', feat3_desc: "Great for physical markets. The customer scans and orders directly from their phone.",
    feat4_title: 'Auto PDF catalog', feat4_desc: "Generate a professional PDF of all your products to share in Facebook groups.",
    feat5_title: 'Built-in WhatsApp', feat5_desc: "Auto pre-filled message with each order's details. Confirmation in one click.",
    feat6_title: 'Simple analytics', feat6_desc: "See how many times your link was clicked and where visitors come from. Facebook, TikTok, WhatsApp.",
    test_title: 'Selling with Bazar', test_sub: 'Real sellers, real results',
    test1_quote: '"Before Bazar, I tracked all my orders in Facebook messages. Now everything is centralized and I miss zero sales."',
    test1_name: 'Rachna M.', test1_role: ' — Dress seller, Antananarivo',
    test2_quote: '"Product links in my TikToks tripled my orders. Customers order directly without sending me DMs."',
    test2_name: 'Sammy T.', test2_role: ' — Accessories & jewelry',
    test3_quote: '"The QR code on my market labels is the best idea. Customers scan and order even when I\'m not there."',
    test3_name: 'Fanja H.', test3_role: ' — Spices & local products',
    pricing_title: 'Pricing built for Madagascar', pricing_sub: '14 days free — all features — no card required',
    ptl_1_label: 'Sign up', ptl_1_sub: 'Free, no card',
    ptl_2_label: '14-day trial', ptl_2_sub: 'Full Pro access',
    ptl_3_label: 'Reminder email D−3', ptl_3_sub: 'Before it ends',
    ptl_4_label: 'Day 15 → Starter', ptl_4_sub: 'Cancel anytime',
    trial_badge: 'FREE TRIAL', trial_price: '$0', trial_period: 'for 14 days',
    trial_desc: 'All Pro features unlocked. No credit card required.',
    trial_li1: 'Unlimited products', trial_li2: 'QR codes + PDF catalog',
    trial_li3: 'WhatsApp + notifications', trial_li4: 'Full analytics',
    trial_li5: 'Product variants', trial_li6: 'CSV export',
    trial_cta: 'Start free trial →',
    starter_auto_badge: 'Automatic after trial',
    starter_name: 'STARTER', starter_price: '5,000 Ar', starter_period: '/ month', starter_desc: 'Default plan after trial. Cancel anytime.',
    starter_li1: 'Up to 50 products', starter_li2: 'Product QR codes', starter_li3: 'WhatsApp notifications', starter_li4: 'Basic analytics', starter_li5: 'CSV order export',
    starter_li6: 'PDF catalog (Pro)', starter_li7: 'Product variants (Pro)', starter_cta: 'Default plan',
    pro_name: 'PRO', pro_price: '15,000 Ar', pro_period: '/ month', pro_desc: 'For high-volume stores. Upgrade from Starter anytime.',
    pro_li1: 'Unlimited products', pro_li2: 'Automatic PDF catalog', pro_li3: 'Size / color variants', pro_li4: 'Multi-product cart', pro_li5: 'Auto customer history', pro_li6: 'Priority support', pro_cta: 'Go Pro',
    pricing_note: 'After the 14-day trial, account automatically switches to Starter plan (5,000 Ar/month). A reminder email is sent 3 days before. Cancel anytime from your dashboard — no fees.',
    cta_title: 'Ready to sell better?',
    cta_sub: "Join sellers who have already turned their Facebook page into a real professional store.",
    cta_placeholder: 'your@email.com',
    cta_btn: 'Create my store for free →',
    cta_hint: 'Store ready in 5 minutes · Free forever',
    footer_text: '© 2026 Bazar.app — Built for sellers in Madagascar and Africa.',
  }
};

// ── Apply language ─────────────────────────
function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.fr;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  const btn = document.querySelector('[data-lang-switch]');
  if (btn) {
    btn.textContent = lang === 'fr' ? 'EN' : 'FR';
    btn.dataset.currentLang = lang;
  }

  try { localStorage.setItem('bazar-lang', lang); } catch(_) {}
}

const langBtn = document.querySelector('[data-lang-switch]');
langBtn?.addEventListener('click', () => {
  const next = document.documentElement.lang === 'fr' ? 'en' : 'fr';
  applyLanguage(next);
});

let savedLang = 'fr';
try { savedLang = localStorage.getItem('bazar-lang') || 'fr'; } catch(_) {}
applyLanguage(savedLang);

// ── Reveal on scroll ───────────────────────
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('reveal');
      requestAnimationFrame(() => e.target.classList.add('visible'));
      obs.unobserve(e.target);
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();

// ── Ripple on buttons ──────────────────────
document.addEventListener('click', e => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const r = document.createElement('span');
  r.className = 'ripple';
  const s = Math.max(rect.width, rect.height);
  r.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX-rect.left-s/2}px;top:${e.clientY-rect.top-s/2}px`;
  btn.appendChild(r);
  setTimeout(() => r.remove(), 700);
}, { passive: true });

// ── Scroll helpers ─────────────────────────
function scrollToSignup() {
  document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
}

// ── Signup handler ─────────────────────────
function handleSignup(btn) {
  const input = document.querySelector('.cta-email');
  const email = input ? input.value.trim() : '';
  if (!email || !email.includes('@')) {
    input?.focus();
    input?.style.setProperty('border-color', '#e53e3e');
    setTimeout(() => input?.style.removeProperty('border-color'), 1800);
    return;
  }
  const orig = btn.textContent;
  btn.textContent = '✓ C\'est parti !';
  btn.disabled = true;
  setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 2500);
  // TODO: connecter à l'API d'inscription
  console.log('Signup:', email);
}

// ── Close mobile menu on nav link click ───
document.querySelectorAll('.mobile-panel a, .mobile-panel button').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('.mobile-menu')?.removeAttribute('open');
  });
});
