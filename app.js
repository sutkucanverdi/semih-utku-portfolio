/* ==========================================================================
   SEMIH UTKU CANVERDI — FLUID INTERACTIVE PORTFOLIO SCRIPT
   ========================================================================== */

(() => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. BILINGUAL DICTIONARY (EXACT, UN-EXAGGERATED CV TEXTS)
     -------------------------------------------------------------------------- */
  const TEXTS = {
    tr: {
      'nav.exp': 'Deneyim',
      'nav.proj': 'Projeler',
      'nav.demo': 'İnteraktif Modeller',
      'nav.edu': 'Eğitim & Yetenekler',
      'nav.cv': 'CV',
      'nav.contact': 'İletişim',
      'hero.tag': 'Software Engineering · Çankaya University',
      'hero.summary': "Sistemin tamamını kurmayı seven bir yazılım mühendisliği öğrencisiyim: backend servisleri, web arayüzleri, veri hatları ve makine öğrenmesi modelleri. En çok yapay zeka ve fintech ilgimi çekiyor. Bir de konservatuvar geçmişli bir piyanistim.",
      'piano.idleKind': 'Bir tuşa bas',
      'piano.idleTitle': 'Her tuş bir yetenek ya da bir iş.',
      'piano.idleLine': 'Beyaz tuşlar teknolojiler, siyah tuşlar deneyim ve projeler. Klavyenden de çalabilirsin.',
      'piano.idleLineTouch': 'Beyaz tuşlar teknolojiler, siyah tuşlar deneyim ve projeler.',
      'piano.play': 'Çal',
      'piano.hint': 'Çal\'a basınca gamın üstünde gerçek sağ el parmak numaraları görünür (1 = başparmak, 5 = serçe).',
      'hero.btnExplore': 'Çalışmalarımı İncele',
      'hero.btnCv': 'CV (PDF)',
      'exp.eyebrow': 'WORK EXPERIENCE',
      'exp.title1': 'Deneyim &',
      'exp.title2': 'Araştırma',
      'exp.vistaDate': 'Eylül 2026 – Günümüz',
      'exp.vistaDesc': 'Klasik piyano notaları için optimal parmak pozisyonunu tahmin eden bir derin öğrenme modeli geliştiriyorum; kapsamlı veri ön işleme (data preprocessing), öznitelik çıkarım hatları (feature extraction pipelines), sinir ağı mimarisi tasarımı ve iteratif model eğitimi süreçlerine odaklanıyorum.',
      'exp.teiasDate': 'Temmuz 2026 – Ağustos 2026',
      'exp.teiasDesc': 'Java ve Angular kullanarak kurum içi web uygulamaları geliştirdim ve bakımını üstlendim; backend RESTful API tasarımına, güvenli veritabanı entegrasyonuna ve kurumsal operasyonlar için modüler frontend arayüz bileşenlerine katkıda bulundum.',
      'exp.teamsecDate': 'Temmuz 2025 – Ocak 2026',
      'exp.teamsecDesc': 'FastAPI ve Streamlit kullanarak backend servisleri ile interaktif operasyonel/finansal paneller (dashboards) geliştirdim. Eski (legacy) sistemleri modern React mimarisine taşıdım, Power BI ile veri analizi ve görselleştirme yaptım; PostgreSQL sorgu performansını ve sistem güvenilirliğini artırmak için optimize edilmiş SQL sorguları ve veritabanı indekslemeleri yazdım.',
      'proj.eyebrow': 'SELECTED PROJECTS',
      'proj.title1': 'Seçili',
      'proj.title2': 'Projeler',
      'proj.airType': 'University Project • Machine Learning',
      'proj.airDesc': 'Çevresel veri setlerini analiz etmek, keşifsel veri analizi (EDA) gerçekleştirmek ve uçtan uca veri bilimi iş akışlarını yürütmek üzere Python kullanarak tahminleyici bir makine öğrenmesi modeli geliştirdim.',
      'proj.knightType': 'Algorithms & Graph Traversal',
      'proj.knightDesc': 'Yol bulma mantığı (pathfinding logic), graf gezinme (graph traversal) ve interaktif algoritmik problem çözmeye odaklanan bir algoritma görselleştiricisi tasarladım.',
      'proj.jamType': 'Game Jam Project • AI Agents',
      'proj.jamDesc': 'Unity ve C# kullanarak kısıtlı süre altında oynanabilir bir oyun prototipi geliştirdim; çeşitli arama (search), yol bulma (pathfinding) ve optimizasyon algoritmalarını kullanan yapay zeka ajanları ve temel oynanış mekanikleri uyguladım.',
      'proj.yatType': 'Personal Project • OOP Architecture',
      'proj.yatDesc': 'C# kullanarak sıfırdan interaktif bir zar oyunu uygulaması tasarladım ve geliştirdim; temiz nesne yönelimli mimari (clean OOP), rastgeleleştirilmiş mekanikler, yapılandırılmış durum yönetimi (state management) ve güçlü kullanıcı etkileşimi kurguladım.',
      'demo.eyebrow': 'INTERACTIVE PREVIEW',
      'demo.title1': 'İnteraktif',
      'demo.title2': 'Deneyim',
      'demo.subtitle': 'Üzerinde çalıştığım <strong>VISTA Lab Piyano Parmak Pozisyonu</strong> modelinin ve <strong>Knight Path Finder</strong> algoritmasının sadeleştirilmiş interaktif önizlemesi.',
      'demo.tabPiano': '01. VISTA Lab — Piano Fingering',
      'demo.tabKnight': '02. Knight Path Finder',
      'demo.pianoHint': 'Tuşlara tıklayarak veya örnek sekansı başlatarak nota geçişlerine göre tahmin edilen parmak numaralarını (1: Başparmak → 5: Serçe) görebilirsiniz.',
      'demo.playMotif': '▶ Örnek Sekansı Çalıştır',
      'demo.lblNote': 'Nota',
      'demo.lblFinger': 'Optimal Parmak',
      'demo.lblConf': 'Tahmin Güveni',
      'demo.knightHint': 'Tahta üzerinde herhangi bir kareye tıklayın; başlangıç noktasından (♞) hedefe (★) engellerin etrafından en kısa L-hamleli yol hesaplansın.',
      'demo.btnRandom': 'Rastgele Hedef Seç',
      'demo.btnWalls': 'Engelleri Değiştir',
      'demo.kStart': 'Başlangıç',
      'demo.kTarget': 'Hedef Kare',
      'demo.kMoves': 'En Kısa Yol',
      'demo.kRoute': 'Rota Dizisi',
      'edu.eyebrow': 'EDUCATION, CERTIFICATES & SKILLS',
      'edu.title1': 'Eğitim &',
      'edu.title2': 'Yetkinlikler',
      'edu.eduHeading': 'Eğitim',
      'edu.cankaya': 'Yazılım Mühendisliği (4. Sınıf)',
      'edu.conservatory': 'Müzik / Piyano',
      'edu.highschool': 'Lise Eğitimi',
      'edu.certHeading': 'Sertifika',
      'edu.skillsHeading': 'Teknik Yetenekler',
      'cv.title1': 'Güncel',
      'cv.title2': 'Özgeçmişim',
      'ask.fab': 'Bana sor',
      'ask.title': 'Utku hakkında sor',
      'ask.sub': 'CV’me göre cevap veren bir yapay zeka asistanı.',
      'ask.q1': 'Utku neler üzerinde çalıştı?',
      'ask.q2': 'Hangi teknolojileri kullanıyor?',
      'ask.q3': 'Piyano yapay zeka projesi ne?',
      'ask.placeholder': 'Bir soru yaz…',
      'ask.send': 'Gönder',
      'ask.note': 'Yapay zeka hata yapabilir. Önemli konular için bana e-posta at.',
      'ask.error': 'Şu an cevap veremiyorum, biraz sonra tekrar dene.',
      'ask.limit': 'Bu sohbet için soru sınırına ulaştın. Devamı için bana e-posta atabilirsin.',
      'cv.subtitle': 'Buradan okuyabilir ya da PDF olarak indirebilirsiniz.',
      'cv.openTab': 'Yeni Sekmede Aç ↗',
      'cv.download': 'PDF İndir ↓',
      'contact.eyebrow': 'GET IN TOUCH',
      'contact.title1': 'İletişime',
      'contact.title2': 'Geçin',
      'contact.desc': 'Staj, tam/yarı zamanlı mühendislik pozisyonları veya proje iş birlikleri için bana doğrudan ulaşabilirsiniz.',
    },
    en: {
      'nav.exp': 'Experience',
      'nav.proj': 'Projects',
      'nav.demo': 'Interactive Demos',
      'nav.edu': 'Education & Skills',
      'nav.cv': 'CV',
      'nav.contact': 'Contact',
      'hero.tag': 'Software Engineering · Çankaya University',
      'hero.summary': 'Software engineering student who likes building the whole system: backend services, web interfaces, data pipelines and ML models. Especially drawn to AI and FinTech. Also a conservatory-trained pianist.',
      'piano.idleKind': 'Press a key',
      'piano.idleTitle': 'Every key is a skill or a piece of work.',
      'piano.idleLine': 'White keys are technologies, black keys are experience and projects. Your keyboard works too.',
      'piano.idleLineTouch': 'White keys are technologies, black keys are experience and projects.',
      'piano.play': 'Play',
      'piano.hint': 'Press Play to see real right-hand fingering over the scale (1 = thumb, 5 = pinky).',
      'hero.btnExplore': 'Explore Work',
      'hero.btnCv': 'Résumé (PDF)',
      'exp.eyebrow': 'WORK EXPERIENCE',
      'exp.title1': 'Experience &',
      'exp.title2': 'Research',
      'exp.vistaDate': 'September 2026 – Present',
      'exp.vistaDesc': 'Developing a deep learning model to predict optimal finger positioning for classical piano scores using complex musical datasets. Focusing on comprehensive data preprocessing, feature extraction pipelines, neural network architecture design, and iterative model training workflows.',
      'exp.teiasDate': 'July 2026 – August 2026',
      'exp.teiasDesc': 'Developed and maintained internal web applications using Java and Angular, contributing to backend RESTful API design, database integration, and modular frontend interface components for internal operations.',
      'exp.teamsecDate': 'July 2025 – January 2026',
      'exp.teamsecDesc': 'Built interactive dashboards and backend services using FastAPI and Streamlit. Migrated legacy systems to a modern React stack, performed data analysis and visualization via Power BI, and wrote optimized SQL queries alongside database indexing to improve PostgreSQL execution performance.',
      'proj.eyebrow': 'SELECTED PROJECTS',
      'proj.title1': 'Selected',
      'proj.title2': 'Projects',
      'proj.airType': 'University Project • Machine Learning',
      'proj.airDesc': 'Built a predictive machine learning model utilizing Python to analyze environmental datasets, perform exploratory data analysis, and execute complete data science workflows.',
      'proj.knightType': 'Algorithms & Graph Traversal',
      'proj.knightDesc': 'Designed an algorithm visualizer focusing on pathfinding logic, graph traversal, and interactive problem-solving.',
      'proj.jamType': 'Game Jam Project • AI Agents',
      'proj.jamDesc': 'Developed a playable game prototype using Unity & C#; implemented complex AI agents utilizing a wide range of search, pathfinding, and optimization algorithms.',
      'proj.yatType': 'Personal Project • OOP Architecture',
      'proj.yatDesc': 'Designed and developed an interactive dice game application from scratch using C#, implementing clean object-oriented architecture, randomized mechanics, structured state management, and robust user interaction.',
      'demo.eyebrow': 'INTERACTIVE PREVIEW',
      'demo.title1': 'Interactive',
      'demo.title2': 'Showcase',
      'demo.subtitle': 'A clean interactive preview of my <strong>VISTA Lab Piano Finger Positioning</strong> research and <strong>Knight Path Finder</strong> graph traversal visualizer.',
      'demo.tabPiano': '01. VISTA Lab — Piano Fingering',
      'demo.tabKnight': '02. Knight Path Finder',
      'demo.pianoHint': 'Click any key or run the sample sequence to see predicted finger assignments (1: Thumb → 5: Pinky) across note intervals.',
      'demo.playMotif': '▶ Run Sample Sequence',
      'demo.lblNote': 'Active Note',
      'demo.lblFinger': 'Optimal Finger',
      'demo.lblConf': 'Confidence',
      'demo.knightHint': 'Click any square on the board to compute the shortest L-move path from the Knight (♞) to the target (★) around obstacles.',
      'demo.btnRandom': 'Random Target',
      'demo.btnWalls': 'Shuffle Obstacles',
      'demo.kStart': 'Start Node',
      'demo.kTarget': 'Target Node',
      'demo.kMoves': 'Shortest Path',
      'demo.kRoute': 'Route Sequence',
      'edu.eyebrow': 'EDUCATION, CERTIFICATES & SKILLS',
      'edu.title1': 'Education &',
      'edu.title2': 'Skills',
      'edu.eduHeading': 'Education',
      'edu.cankaya': 'Software Engineering (4th-Year)',
      'edu.conservatory': 'Music / Piano',
      'edu.highschool': 'High School',
      'edu.certHeading': 'Certificates',
      'edu.skillsHeading': 'Technical Skills',
      'cv.title1': 'My',
      'cv.title2': 'Résumé',
      'ask.fab': 'Ask about me',
      'ask.title': 'Ask about Utku',
      'ask.sub': 'An AI assistant that answers from my CV.',
      'ask.q1': 'What has Utku worked on?',
      'ask.q2': 'Which technologies does Utku use?',
      'ask.q3': 'What is the piano AI project?',
      'ask.placeholder': 'Type a question…',
      'ask.send': 'Send',
      'ask.note': 'AI can make mistakes. For anything important, email me.',
      'ask.error': 'I can’t answer right now, please try again in a moment.',
      'ask.limit': 'You’ve reached the question limit for this chat. Feel free to email me for more.',
      'cv.subtitle': 'Read it right here or download it as a PDF.',
      'cv.openTab': 'Open in New Tab ↗',
      'cv.download': 'Download PDF ↓',
      'contact.eyebrow': 'GET IN TOUCH',
      'contact.title1': 'Get in',
      'contact.title2': 'Touch',
      'contact.desc': 'Feel free to reach out directly for software engineering, machine learning roles, or project collaborations.',
    }
  };

  let currentLang = 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const dict = TEXTS[lang];
    const touchOnly = window.matchMedia('(hover: none)').matches;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      let key = el.getAttribute('data-i18n');
      if (key === 'piano.idleLine' && touchOnly) key = 'piano.idleLineTouch';
      if (dict[key]) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const text = dict[el.getAttribute('data-i18n-placeholder')];
      if (text) el.setAttribute('placeholder', text);
    });
    window.SITE_TEXTS = dict;
    document.getElementById('lang-tr')?.classList.toggle('active', lang === 'tr');
    document.getElementById('lang-en')?.classList.toggle('active', lang === 'en');
    renderKnightBoard();
    if (lastKey) renderReadout(lastKey);
  }

  document.getElementById('lang-btn')?.addEventListener('click', () => {
    applyLanguage(currentLang === 'tr' ? 'en' : 'tr');
    try { localStorage.setItem('lang', currentLang); } catch (_) {}
  });

  /* --------------------------------------------------------------------------
     2. OPENING CURTAIN — the name flies from the curtain into the hero
     -------------------------------------------------------------------------- */
  const curtain = document.getElementById('intro-curtain');
  const curtainLine = document.getElementById('curtain-line');
  const curtainTitle = curtain?.querySelector('.curtain-title');
  const heroName = document.getElementById('hero-name');
  const heroPiano = document.getElementById('hero-piano');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function finishIntro() {
    document.body.classList.remove('name-pending');
    curtain?.classList.add('curtain-gone');
    setTimeout(() => heroPiano?.classList.add('is-ready'), 120);
  }

  function liftCurtain() {
    document.body.classList.remove('is-loading');
    initScrollReveal();

    if (!curtain || !curtainTitle || !heroName) {
      finishIntro();
      return;
    }

    // Measure after is-loading is gone, so scrollbar/layout are final
    window.scrollTo(0, 0);
    const from = curtainTitle.getBoundingClientRect();
    const to = heroName.getBoundingClientRect();
    const ratioFrom = from.width / (from.height || 1);
    const ratioTo = to.width / (to.height || 1);
    // Only fly when both names sit on one line (same shape); otherwise just fade
    const canFly = !reduceMotion && to.width > 0 && Math.abs(ratioFrom - ratioTo) / ratioFrom < 0.2;

    if (!canFly) {
      curtain.classList.add('curtain-open', 'curtain-fade');
      setTimeout(finishIntro, 650);
      return;
    }

    const scale = to.width / from.width;
    curtain.classList.add('curtain-open');
    curtainTitle.classList.add('flying');
    curtainTitle.style.transform = `translate(${to.left - from.left}px, ${to.top - from.top}px) scale(${scale})`;

    let done = false;
    const land = () => {
      if (done) return;
      done = true;
      finishIntro();
    };
    curtainTitle.addEventListener('transitionend', land, { once: true });
    setTimeout(land, 1250);
  }

  window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
      if (curtainLine) curtainLine.style.width = '100%';
    });
    setTimeout(liftCurtain, 1000);
  });

  /* --------------------------------------------------------------------------
     2b. HERO PIANO — white keys are skills, black keys are work
     -------------------------------------------------------------------------- */
  const WHITE_KEYS = [
    { n: 'C4', f: 261.63, k: 'KeyZ', label: 'Python',
      tr: 'En çok konuştuğum dil: modeller, scriptler, API\'ler.',
      en: 'The language I speak most: models, scripts, APIs.' },
    { n: 'D4', f: 293.66, k: 'KeyX', label: 'PyTorch',
      tr: 'VISTA Lab\'deki parmaklama modeli burada eğitiliyor.',
      en: 'Where the fingering model at VISTA Lab gets trained.' },
    { n: 'E4', f: 329.63, k: 'KeyC', label: 'Machine Learning',
      tr: 'Air Quality projesinde EDA\'dan tahmine kadar uçtan uca.',
      en: 'End to end on Air Quality, from EDA to prediction.' },
    { n: 'F4', f: 349.23, k: 'KeyV', label: 'Java',
      tr: 'TEİAŞ\'ta kurum içi uygulamaların backend tarafı.',
      en: 'The backend side of internal apps at TEİAŞ.' },
    { n: 'G4', f: 392.0, k: 'KeyB', label: 'Spring Boot',
      tr: 'RESTful API\'ler ve veritabanı entegrasyonu.',
      en: 'RESTful APIs and database integration.' },
    { n: 'A4', f: 440.0, k: 'KeyN', label: 'Angular',
      tr: 'TEİAŞ\'ta modüler arayüz bileşenleri.',
      en: 'Modular interface components at TEİAŞ.' },
    { n: 'B4', f: 493.88, k: 'KeyM', label: 'FastAPI',
      tr: 'TeamSec\'te backend servisleri ve dashboard API\'leri.',
      en: 'Backend services and dashboard APIs at TeamSec.' },
    { n: 'C5', f: 523.25, k: 'KeyQ', label: 'React',
      tr: 'TeamSec\'te legacy sistemleri React\'e taşıdım.',
      en: 'Migrated legacy systems to React at TeamSec.' },
    { n: 'D5', f: 587.33, k: 'KeyW', label: 'PostgreSQL',
      tr: 'İndeksleme ve sorgu optimizasyonuyla daha hızlı sorgular.',
      en: 'Faster queries through indexing and query tuning.' },
    { n: 'E5', f: 659.25, k: 'KeyE', label: 'Power BI',
      tr: 'Veriyi okunur hale getirmek: analiz ve görselleştirme.',
      en: 'Making data readable: analysis and visualization.' },
    { n: 'F5', f: 698.46, k: 'KeyR', label: 'C#',
      tr: 'YatDice ve MağaraJam: OOP ve oyun mantığı.',
      en: 'YatDice and MağaraJam: OOP and game logic.' },
    { n: 'G5', f: 783.99, k: 'KeyT', label: 'Unity',
      tr: 'Game jam\'de kısıtlı sürede oynanabilir prototip.',
      en: 'A playable prototype under game-jam time pressure.' },
    { n: 'A5', f: 880.0, k: 'KeyY', label: 'C / C++',
      tr: 'Veri yapıları ve algoritmalar tarafının dili.',
      en: 'The language of my data structures & algorithms work.' },
    { n: 'B5', f: 987.77, k: 'KeyU', label: 'Docker & Git',
      tr: 'Çalışan şeyi her yerde aynı şekilde çalıştırmak.',
      en: 'Making what works run the same everywhere.' }
  ];

  // `after` = index of the white key this black key sits after
  const BLACK_KEYS = [
    { n: 'C♯4', f: 277.18, k: 'KeyS', after: 0, label: 'VISTA Lab',
      kindTr: 'Araştırma · Eylül 2026 –', kindEn: 'Research · Sep 2026 –',
      tr: 'Klasik piyano notaları için optimal parmak pozisyonunu tahmin eden derin öğrenme modeli.',
      en: 'A deep learning model that predicts optimal finger positions for classical piano scores.' },
    { n: 'D♯4', f: 311.13, k: 'KeyD', after: 1, label: 'TEİAŞ',
      kindTr: 'Staj · Tem – Ağu 2026', kindEn: 'Internship · Jul – Aug 2026',
      tr: 'Java ve Angular ile kurum içi web uygulamaları.',
      en: 'Internal web applications with Java and Angular.' },
    { n: 'F♯4', f: 369.99, k: 'KeyG', after: 3, label: 'TeamSec',
      kindTr: 'Deneyim · Tem 2025 – Oca 2026', kindEn: 'Experience · Jul 2025 – Jan 2026',
      tr: 'Finansal ve operasyonel paneller, FastAPI servisleri, React geçişi, PostgreSQL optimizasyonu.',
      en: 'Financial and operational dashboards, FastAPI services, a React migration, PostgreSQL tuning.' },
    { n: 'G♯4', f: 415.3, k: 'KeyH', after: 4, label: 'Air Quality',
      kindTr: 'Proje · Makine Öğrenmesi', kindEn: 'Project · Machine Learning',
      tr: 'Çevresel veri setleri üzerinde tahminleyici model.',
      en: 'A predictive model on environmental datasets.' },
    { n: 'A♯4', f: 466.16, k: 'KeyJ', after: 5, label: 'Knight Path',
      kindTr: 'Proje · Algoritmalar', kindEn: 'Project · Algorithms',
      tr: 'At hamleleriyle en kısa yolu bulan graf gezinme görselleştiricisi.',
      en: 'A graph traversal visualizer for shortest knight paths.' },
    { n: 'C♯5', f: 554.37, k: 'Digit2', after: 7, label: 'MağaraJam',
      kindTr: 'Game Jam · AI Ajanları', kindEn: 'Game Jam · AI Agents',
      tr: 'Unity ile arama ve yol bulma kullanan yapay zeka ajanları.',
      en: 'AI agents using search and pathfinding, built in Unity.' },
    { n: 'D♯5', f: 622.25, k: 'Digit3', after: 8, label: 'YatDice',
      kindTr: 'Kişisel Proje · C#', kindEn: 'Personal Project · C#',
      tr: 'Sıfırdan, temiz OOP mimarisiyle bir zar oyunu.',
      en: 'A dice game from scratch with clean OOP architecture.' },
    { n: 'F♯5', f: 739.99, k: 'Digit5', after: 10, label: 'HEALTH-AI',
      kindTr: 'Sertifika · Mayıs 2026', kindEn: 'Certificate · May 2026',
      tr: 'Erasmus+ / AB destekli HEALTH-AI projesi başarı sertifikası.',
      en: 'Certificate of Achievement, Erasmus+ / EU funded HEALTH-AI project.' },
    { n: 'G♯5', f: 830.61, k: 'Digit6', after: 11, label: 'Çankaya',
      kindTr: 'Eğitim · 2023 –', kindEn: 'Education · 2023 –',
      tr: 'Çankaya Üniversitesi, Yazılım Mühendisliği, 4. sınıf.',
      en: 'Çankaya University, Software Engineering, 4th year.' },
    { n: 'A♯5', f: 932.33, k: 'Digit7', after: 12, label: 'Konservatuvar',
      kindTr: 'Piyano · 2017 – 2021', kindEn: 'Piano · 2017 – 2021',
      tr: 'Süleymanpaşa Belediyesi Konservatuvarı. Bu klavye buradan geliyor.',
      en: 'Süleymanpaşa Municipality Conservatory. This keyboard comes from here.' }
  ];

  const heroKeysEl = document.getElementById('hero-keys');
  const roNote = document.getElementById('ro-note');
  const roKind = document.getElementById('ro-kind');
  const roTitle = document.getElementById('ro-title');
  const roLine = document.getElementById('ro-line');
  const readoutEl = heroPiano?.querySelector('.piano-readout');
  const keyEls = new Map(); // note name -> button
  const keyByCode = new Map(); // KeyboardEvent.code -> key data
  let lastKey = null;

  // Soft piano-like voice: two partials, fast attack, long exponential decay, gentle lowpass
  let pianoCtx = null;
  let pianoOut = null;
  function playPianoNote(freq) {
    try {
      if (!pianoCtx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        pianoCtx = new AC();
        pianoOut = pianoCtx.createGain();
        pianoOut.gain.value = 0.5;
        const lp = pianoCtx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 3200;
        pianoOut.connect(lp);
        lp.connect(pianoCtx.destination);
      }
      if (pianoCtx.state === 'suspended') pianoCtx.resume();
      const t = pianoCtx.currentTime;
      [[1, 'triangle', 0.32], [2, 'sine', 0.08], [3, 'sine', 0.03]].forEach(([mult, type, peak]) => {
        const osc = pianoCtx.createOscillator();
        const g = pianoCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq * mult, t);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(peak, t + 0.008);
        g.gain.exponentialRampToValueAtTime(peak * 0.35, t + 0.25);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
        osc.connect(g);
        g.connect(pianoOut);
        osc.start(t);
        osc.stop(t + 1.85);
      });
    } catch (_) {}
  }

  function renderReadout(key, finger) {
    if (!key || !roNote) return;
    const isBlack = 'kindTr' in key;
    roNote.textContent = key.n;
    roKind.textContent = isBlack
      ? (currentLang === 'tr' ? key.kindTr : key.kindEn)
      : (finger ? `${currentLang === 'tr' ? 'Parmak' : 'Finger'} ${finger}` : (currentLang === 'tr' ? 'Yetenek' : 'Skill'));
    roTitle.textContent = key.label;
    roLine.textContent = currentLang === 'tr' ? key.tr : key.en;
    readoutEl?.classList.add('flash');
    clearTimeout(renderReadout.t);
    renderReadout.t = setTimeout(() => readoutEl?.classList.remove('flash'), 400);
  }

  function pressKey(key, finger) {
    const el = keyEls.get(key.n);
    if (!el) return;
    playPianoNote(key.f);
    lastKey = key;
    renderReadout(key, finger);
    el.classList.add('down');
    if (finger) {
      el.querySelector('.pk-finger').textContent = finger;
      el.classList.add('show-finger');
    }
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('down'), 220);
    clearTimeout(el._ft);
    if (finger) el._ft = setTimeout(() => el.classList.remove('show-finger'), 900);
  }

  function buildHeroKeys() {
    if (!heroKeysEl) return;
    const all = [...WHITE_KEYS.map((k) => ({ ...k, black: false })), ...BLACK_KEYS.map((k) => ({ ...k, black: true }))];
    all.forEach((key, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `pk ${key.black ? 'pk-black' : 'pk-white'}`;
      btn.setAttribute('aria-label', `${key.n} — ${key.label}`);
      btn.style.setProperty('--d', `${key.black ? 300 + i * 18 : i * 32}ms`);
      if (key.black) btn.style.left = `calc(100% / 14 * ${key.after + 1})`; // centred via margin-left in CSS
      btn.innerHTML = `<span class="pk-finger" aria-hidden="true"></span><span class="pk-label">${key.label}</span>`;
      btn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        pressKey(key);
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          pressKey(key);
        }
      });
      heroKeysEl.appendChild(btn);
      keyEls.set(key.n, btn);
      keyByCode.set(key.k, key);
    });
  }
  buildHeroKeys();

  // Play from the computer keyboard: Z–M / Q–U are white keys, S D G H J / 2 3 5 6 7 black
  window.addEventListener('keydown', (e) => {
    if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement?.isContentEditable) return;
    const key = keyByCode.get(e.code);
    if (!key) return;
    const rect = heroPiano?.getBoundingClientRect();
    if (!rect || rect.bottom < 0 || rect.top > window.innerHeight) return; // only while visible
    pressKey(key);
  });

  // C major scale up (RH 1-2-3-1-2-3-4-5), then the arpeggio back down (5-3-2-1)
  const MOTIF = [
    ['C4', 1], ['D4', 2], ['E4', 3], ['F4', 1], ['G4', 2], ['A4', 3], ['B4', 4], ['C5', 5],
    ['G4', 3], ['E4', 2], ['C4', 1]
  ];
  const playBtn = document.getElementById('hero-play-btn');
  let motifTimers = [];
  playBtn?.addEventListener('click', () => {
    motifTimers.forEach(clearTimeout);
    playBtn.classList.add('playing');
    motifTimers = MOTIF.map(([note, finger], i) => setTimeout(() => {
      const key = WHITE_KEYS.find((k) => k.n === note);
      if (key) pressKey(key, finger);
    }, i < 8 ? i * 260 : 7 * 260 + (i - 7) * 340));
    motifTimers.push(setTimeout(() => playBtn.classList.remove('playing'), 8 * 260 + 3 * 340 + 400));
  });

  /* --------------------------------------------------------------------------
     3. MAGNETIC ELEMENTS & DIRECTIONAL CARD SHEEN
     -------------------------------------------------------------------------- */
  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let prevMx = mx;
  let prevMy = my;
  let mvx = 0;
  let mvy = 0;

  window.addEventListener('mousemove', (e) => {
    mvx = e.clientX - mx;
    mvy = e.clientY - my;
    mx = e.clientX;
    my = e.clientY;
  });

  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + rectHeight(r) / 2);
      el.style.transform = `translate(${dx * 0.14}px, ${dy * 0.14}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  function rectHeight(r) {
    return r.height || 1;
  }

  document.querySelectorAll('.interactive-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const pct = ((e.clientX - r.left) / (r.width || 1)) * 100;
      card.style.setProperty('--sheen-pos', `${pct.toFixed(1)}%`);
    });
  });

  /* --------------------------------------------------------------------------
     4. ULTRA-SMOOTH 144FPS SILK COMET TRAIL & SUBTLE DUST (ZERO LAG)
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById('interactive-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d', { alpha: true });
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    // Pure LERP trail (never overshoots or explodes)
    const TRAIL_LENGTH = 18;
    const trail = Array.from({ length: TRAIL_LENGTH }, () => ({ x: mx, y: my }));

    // Lightweight ambient floating specks (react gently when mouse passes nearby)
    const SPECK_COUNT = 32;
    const specks = Array.from({ length: SPECK_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      size: Math.random() * 1.4 + 0.6,
      alpha: Math.random() * 0.35 + 0.15
    }));

    function drawCanvas() {
      ctx.clearRect(0, 0, w, h);

      // 1. Subtle ambient specks with gentle mouse breeze
      for (let i = 0; i < specks.length; i++) {
        const s = specks[i];
        const dx = s.x - mx;
        const dy = s.y - my;
        const distSq = dx * dx + dy * dy;

        if (distSq < 19600 && distSq > 4) {
          const dist = Math.sqrt(distSq);
          const push = (140 - dist) / 140;
          s.vx += (dx / dist) * push * 0.08;
          s.vy += (dy / dist) * push * 0.08;
        }

        s.vx *= 0.97;
        s.vy *= 0.97;
        s.x += s.vx + 0.08;
        s.y += s.vy - 0.05;

        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;

        ctx.fillStyle = `rgba(243, 229, 194, ${s.alpha})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }

      // 2. Update silk trail positions strictly via stable LERP (0 overshoot)
      trail[0].x += (mx - trail[0].x) * 0.45;
      trail[0].y += (my - trail[0].y) * 0.45;

      for (let i = 1; i < TRAIL_LENGTH; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.42;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.42;
      }

      // 3. Draw sleek tapered silk stroke only when moving
      const totalLen = Math.hypot(trail[0].x - trail[TRAIL_LENGTH - 1].x, trail[0].y - trail[TRAIL_LENGTH - 1].y);
      if (totalLen > 1.5) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 0; i < TRAIL_LENGTH - 1; i++) {
          const ratio = 1 - i / TRAIL_LENGTH;
          ctx.beginPath();
          ctx.moveTo(trail[i].x, trail[i].y);
          ctx.lineTo(trail[i + 1].x, trail[i + 1].y);
          ctx.strokeStyle = `rgba(214, 184, 114, ${(ratio * 0.48).toFixed(3)})`;
          ctx.lineWidth = ratio * 2.2;
          ctx.stroke();
        }
      }

      requestAnimationFrame(drawCanvas);
    }
    requestAnimationFrame(drawCanvas);
  }

  /* --------------------------------------------------------------------------
     5. TABBED INTERACTIVE SHOWCASE (PIANO & KNIGHT PATH FINDER)
     -------------------------------------------------------------------------- */
  const stageTabs = document.querySelectorAll('.stage-tab');
  const stagePiano = document.getElementById('stage-piano');
  const stageKnight = document.getElementById('stage-knight');

  stageTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      stageTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-stage');
      stagePiano?.classList.toggle('active-pane', target === 'piano');
      stageKnight?.classList.toggle('active-pane', target === 'knight');
    });
  });

  // Piano Fingering Preview
  const notes = [
    { note: 'C4', freq: 261.6, fNum: 1, tr: '1 — Başparmak', en: '1 — Thumb', conf: '95%' },
    { note: 'D4', freq: 293.7, fNum: 2, tr: '2 — İşaret', en: '2 — Index', conf: '92%' },
    { note: 'E4', freq: 329.6, fNum: 3, tr: '3 — Orta', en: '3 — Middle', conf: '91%' },
    { note: 'F4', freq: 349.2, fNum: 1, tr: '1 — Başparmak Geçişi', en: '1 — Thumb Under', conf: '89%' },
    { note: 'G4', freq: 392.0, fNum: 2, tr: '2 — İşaret', en: '2 — Index', conf: '94%' },
    { note: 'A4', freq: 440.0, fNum: 3, tr: '3 — Orta', en: '3 — Middle', conf: '93%' },
    { note: 'B4', freq: 493.9, fNum: 4, tr: '4 — Yüzük', en: '4 — Ring', conf: '90%' },
    { note: 'C5', freq: 523.3, fNum: 5, tr: '5 — Serçe', en: '5 — Pinky', conf: '94%' },
    { note: 'D5', freq: 587.3, fNum: 4, tr: '4 — Yüzük', en: '4 — Ring', conf: '88%' },
    { note: 'E5', freq: 659.3, fNum: 5, tr: '5 — Serçe', en: '5 — Pinky', conf: '95%' }
  ];

  let audioCtx = null;
  function playNoteTone(freq) {
    try {
      if (!audioCtx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AC();
      }
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.9);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.95);
    } catch (_) {}
  }

  const pianoContainer = document.getElementById('piano-keys');
  const pNoteEl = document.getElementById('p-note');
  const pFingerEl = document.getElementById('p-finger');
  const pConfEl = document.getElementById('p-conf');

  function activateKey(i) {
    const item = notes[i];
    if (!item || !pianoContainer) return;
    playNoteTone(item.freq);

    const keys = pianoContainer.querySelectorAll('.p-key');
    keys.forEach((k, idx) => k.classList.toggle('active', idx === i));

    if (pNoteEl) pNoteEl.textContent = `${item.note} (${item.freq} Hz)`;
    if (pFingerEl) pFingerEl.textContent = currentLang === 'tr' ? item.tr : item.en;
    if (pConfEl) pConfEl.textContent = item.conf;

    setTimeout(() => keys[i]?.classList.remove('active'), 380);
  }

  if (pianoContainer) {
    notes.forEach((n, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'p-key';
      btn.innerHTML = `<span class="p-finger-tag">P${n.fNum}</span><span>${n.note}</span>`;
      btn.addEventListener('click', () => activateKey(idx));
      pianoContainer.appendChild(btn);
    });
  }

  document.getElementById('run-sequence-btn')?.addEventListener('click', () => {
    const seq = [0, 1, 2, 3, 4, 5, 6, 7, 5, 4, 2, 0];
    seq.forEach((nIdx, step) => {
      setTimeout(() => activateKey(nIdx), step * 230);
    });
  });

  // Knight Path Finder Preview
  const boardEl = document.getElementById('knight-board');
  const kStartEl = document.getElementById('k-start');
  const kTargetEl = document.getElementById('k-target');
  const kMovesEl = document.getElementById('k-moves');
  const kRouteEl = document.getElementById('k-route');

  const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const startNode = { r: 7, c: 1 }; // B1
  let targetNode = { r: 1, c: 6 };  // G7
  let walls = new Set(['3,3', '3,4', '4,3', '2,5']);

  function cellName(r, c) {
    return `${files[c]}${8 - r}`;
  }

  function findKnightPath(start, target) {
    const dirs = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
    const queue = [[start]];
    const seen = new Set([`${start.r},${start.c}`]);

    while (queue.length) {
      const path = queue.shift();
      const cur = path[path.length - 1];
      if (cur.r === target.r && cur.c === target.c) return { path, seen };

      for (const [dr, dc] of dirs) {
        const nr = cur.r + dr;
        const nc = cur.c + dc;
        const k = `${nr},${nc}`;
        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8 && !seen.has(k) && !walls.has(k)) {
          seen.add(k);
          queue.push([...path, { r: nr, c: nc }]);
        }
      }
    }
    return { path: [start], seen };
  }

  function renderKnightBoard() {
    if (!boardEl) return;
    boardEl.innerHTML = '';

    const { path, seen } = findKnightPath(startNode, targetNode);
    const pathMap = new Map(path.map((p, idx) => [`${p.r},${p.c}`, idx]));

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        const key = `${r},${c}`;
        btn.className = `k-cell ${(r + c) % 2 === 1 ? 'dark' : ''}`;

        if (r === startNode.r && c === startNode.c) {
          btn.classList.add('start');
          btn.textContent = '♞';
        } else if (r === targetNode.r && c === targetNode.c) {
          btn.classList.add('target');
          btn.textContent = '★';
        } else if (walls.has(key)) {
          btn.classList.add('wall');
          btn.textContent = '✕';
        } else if (pathMap.has(key)) {
          btn.classList.add('path');
          btn.textContent = pathMap.get(key);
        } else if (seen.has(key)) {
          btn.classList.add('visited');
          btn.textContent = cellName(r, c);
        } else {
          btn.textContent = cellName(r, c);
        }

        btn.addEventListener('click', () => {
          if (walls.has(key) || (r === startNode.r && c === startNode.c)) return;
          targetNode = { r, c };
          renderKnightBoard();
        });

        boardEl.appendChild(btn);
      }
    }

    if (kStartEl) kStartEl.textContent = cellName(startNode.r, startNode.c);
    if (kTargetEl) kTargetEl.textContent = cellName(targetNode.r, targetNode.c);
    if (kMovesEl) {
      const m = Math.max(0, path.length - 1);
      kMovesEl.textContent = currentLang === 'tr' ? `${m} Hamle` : `${m} Moves`;
    }
    if (kRouteEl) {
      kRouteEl.textContent = path.map((p) => cellName(p.r, p.c)).join(' → ');
    }
  }
  renderKnightBoard();

  document.getElementById('knight-random-btn')?.addEventListener('click', () => {
    let r = 0;
    let c = 0;
    do {
      r = Math.floor(Math.random() * 8);
      c = Math.floor(Math.random() * 8);
    } while ((r === startNode.r && c === startNode.c) || walls.has(`${r},${c}`));
    targetNode = { r, c };
    renderKnightBoard();
  });

  document.getElementById('knight-walls-btn')?.addEventListener('click', () => {
    walls = new Set();
    while (walls.size < 5) {
      const r = Math.floor(Math.random() * 8);
      const c = Math.floor(Math.random() * 8);
      if ((r !== startNode.r || c !== startNode.c) && (r !== targetNode.r || c !== targetNode.c)) {
        walls.add(`${r},${c}`);
      }
    }
    renderKnightBoard();
  });

  /* --------------------------------------------------------------------------
     6. ORIGINAL UPLOADED PDF CV SWITCHER
     -------------------------------------------------------------------------- */
  const cvTabs = document.querySelectorAll('.cv-tab');
  const cvIframe = document.getElementById('cv-iframe');
  const cvOpenNew = document.getElementById('cv-open-new');
  const cvDownload = document.getElementById('cv-download-link');
  const cvLabel = document.getElementById('cv-active-label');

  cvTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      cvTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const pdfPath = tab.getAttribute('data-pdf');
      if (cvIframe) cvIframe.src = `${pdfPath}#toolbar=0&navpanes=0`;
      if (cvOpenNew) cvOpenNew.href = pdfPath;
      if (cvDownload) cvDownload.href = pdfPath;
      if (cvLabel) cvLabel.textContent = `${tab.textContent.trim()} — Semih_Utku_Canverdi.pdf`;
    });
  });

  /* --------------------------------------------------------------------------
     7. SCROLL PROGRESS & SMOOTH REVEALS
     -------------------------------------------------------------------------- */
  const scrollBar = document.getElementById('scroll-progress');
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
            setTimeout(() => entry.target.classList.add('visible'), delay);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  window.addEventListener('scroll', () => {
    const top = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollBar && max > 0) {
      scrollBar.style.width = `${(top / max) * 100}%`;
    }

    let current = '';
    sections.forEach((sec) => {
      if (top >= sec.offsetTop - 180) current = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });
  /* --------------------------------------------------------------------------
     8. INITIAL LANGUAGE — English by default, remembers a switch to Turkish
     -------------------------------------------------------------------------- */
  let savedLang = null;
  try { savedLang = localStorage.getItem('lang'); } catch (_) {}
  applyLanguage(savedLang === 'tr' ? 'tr' : 'en');
})();
