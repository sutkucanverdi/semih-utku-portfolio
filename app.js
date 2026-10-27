/* ==========================================================================
   SEMIH UTKU CANVERDI — INTERACTIVE NEURAL PORTFOLIO ENGINE
   ========================================================================== */

(() => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. BILINGUAL DICTIONARY (TR / EN)
     -------------------------------------------------------------------------- */
  const I18N = {
    tr: {
      'preloader.skip': 'Girişi Geç',
      'nav.role': 'AI & Software Architect',
      'nav.overview': 'Genel Bakış',
      'nav.lab': 'Neural Lab',
      'nav.experience': 'Deneyim',
      'nav.projects': 'Projeler',
      'nav.skills': 'Yetenek & Eğitim',
      'nav.contact': 'İletişim',
      'hero.badge': 'VISTA LAB DEEP LEARNING RESEARCHER • HEALTH-AI (EU)',
      'hero.titleLine1': 'Zeki Sistemler,',
      'hero.titleHighlight': 'Derin Öğrenme',
      'hero.titleLine2': '& Algoritmik Mimari.',
      'hero.description': 'Merhaba, ben <strong>Semih Utku Canverdi</strong>. Çankaya Üniversitesi 4. sınıf Yazılım Mühendisliği öğrencisi ve <strong>VISTA Lab</strong> bünyesinde derin öğrenme araştırmacısıyım. Klasik piyano konservatuvar geçmişimi <strong>PyTorch</strong> tabanlı sinir ağı modelleriyle birleştiriyor; ölçeklenebilir backend servisleri (FastAPI, Java, PostgreSQL) ve otonom algoritmalar geliştiriyorum.',
      'hero.ctaLab': 'Canlı AI Laboratuvarını Dene',
      'hero.ctaProjects': 'Seçkin Projeler',
      'hero.ctaCv': 'CV İncele / İndir',
      'hero.tensorLabel': 'ETKİLEŞİMLİ TENSÖR TOPOLOJİSİ (FAREYİ GEZDİRİN)',
      'hero.cardFocusKey': 'Odak Alanı',
      'hero.cardFocusVal': 'Deep Learning, Symbolic Music AI & Backend',
      'hero.cardLabKey': 'Aktif Araştırma',
      'hero.cardStackKey': 'Çekirdek Stack',
      'hero.cardCertKey': 'Avrupa Fonlu Sertifika',
      'hero.metricYear': 'Sınıf Yazılım Müh.',
      'hero.metricExp': 'Kurumsal & Lab Deneyimi',
      'hero.metricPiano': 'Konservatuvar Piyano',
      'hero.scrollPrompt': 'AŞAĞI KAYDIR & KEŞFET',
      'lab.tag': 'ETKİLEŞİMLİ YAPAY ZEKA & ALGORİTMA LABORATUVARI',
      'lab.title1': 'Sadece Okumayın —',
      'lab.title2': 'Modellerimi Canlı Test Edin.',
      'lab.subtitle': "VISTA Lab'deki klasik piyano parmak pozisyonu derin öğrenme araştırmamın ve algoritmik yol bulma (Knight Path Finder) çalışmalarımın tarayıcı içinde çalışan canlı simülasyonları.",
      'lab.pianoTitle': 'Deep Learning Piano Finger Positioning',
      'lab.audioReady': 'WEB AUDIO SYNTH AKTİF',
      'lab.pianoDesc': 'Klasik piyano eserlerinde (nota dizisi, aralık mesafesi ve biyomekanik el kısıtları) en uygun parmak numarasını (1: Başparmak → 5: Serçe Parmak) tahmin eden sinir ağı hattı. Tuşlara tıklayın veya hazır bir klasik motif çalıştırın:',
      'lab.inputNote': 'AKTİF NOTA / FREKANS',
      'lab.predFinger': 'TAHMİN EDİLEN PARMAK',
      'lab.confidence': 'MODEL GÜVENİ (SOFTMAX)',
      'lab.biomechCost': 'BİYOMEKANİK MALİYET',
      'lab.runBach': 'Bach Motifini Çalıştır (Neural Sequence)',
      'lab.runChopin': 'Chopin Arpej Analizi',
      'lab.knightTitle': 'Knight Path Finder & Search Visualizer',
      'lab.knightDesc': '<strong>Knight Path Finder</strong> ve <strong>MağaraJam AI</strong> projelerimdeki graf gezinme (graph traversal) ve engel aşma algoritması. Tahtada herhangi bir hedef kareye tıklayın; otonom ajan engellerin etrafından en kısa L-hamleli yolu gerçek zamanlı hesaplasın:',
      'lab.startPos': 'BAŞLANGIÇ DÜĞÜMÜ',
      'lab.targetPos': 'HEDEF DÜĞÜM',
      'lab.OptimalMoves': 'MİNİMUM HAMLE',
      'lab.visitedNodes': 'TARANAN DÜĞÜMLER',
      'lab.optimalRoute': 'OPTİMAL VEKTÖR ROTASI',
      'lab.randomTarget': 'Rastgele Hedef & Çöz',
      'lab.shuffleWalls': 'Engelleri Yeniden Dağıt',
      'exp.tag': 'KARİYER & ARAŞTIRMA GEÇMİŞİ',
      'exp.title1': 'Akademik Araştırma &',
      'exp.title2': 'Endüstriyel Mühendislik.',
      'exp.vistaDate': 'Eylül 2026 — Günümüz',
      'exp.vistaType': 'DERİN ÖĞRENME ARAŞTIRMASI',
      'exp.vistaRole': 'Deep Learning Researcher',
      'exp.vistaDesc': 'Karmaşık müzik veri setlerini kullanarak klasik piyano notaları için <strong>optimal parmak pozisyonunu tahmin eden</strong> ileri düzey bir derin öğrenme modeli geliştiriyorum. Kapsamlı veri ön işleme (data preprocessing), öznitelik çıkarım hatları (feature extraction pipelines), sinir ağı mimarisi tasarımı ve iteratif model eğitimi iş akışlarına liderlik ediyorum.',
      'exp.teiasDate': 'Temmuz 2026 — Ağustos 2026',
      'exp.teiasType': 'KURUMSAL YAZILIM MÜHENDİSLİĞİ',
      'exp.teiasRole': 'Software Engineering Intern',
      'exp.teiasDesc': 'Kurumsal operasyonlar için kritik öneme sahip (mission-critical) iç web uygulamalarının <strong>Java</strong> ve <strong>Angular</strong> kullanılarak geliştirilmesi ve bakımında görev aldım. Backend <strong>RESTful API</strong> mimarisi tasarımına, güvenli veritabanı entegrasyonuna ve modüler frontend arayüz bileşenlerine doğrudan katkı sağladım.',
      'exp.teamsecDate': 'Temmuz 2025 — Ocak 2026',
      'exp.teamsecType': 'BACKEND & VERİ MÜHENDİSLİĞİ',
      'exp.teamsecRole': 'Software & Data Engineer',
      'exp.teamsecDesc': '<strong>FastAPI</strong> ve <strong>Streamlit</strong> kullanarak güçlü backend servisleri ile interaktif finansal ve operasyonel veri panelleri (dashboards) inşa ettim. Eski (legacy) sistemleri modern <strong>React.js</strong> mimarisine taşıdım, <strong>Power BI</strong> ile yapılandırılmış veri analizi gerçekleştirdim ve <strong>PostgreSQL</strong> sorgu/indeksleme optimizasyonlarıyla veritabanı çalışma performansını ve sistem güvenilirliğini artırdım.',
      'proj.tag': 'SEÇKİN MÜHENDİSLİK & AI PROJELERİ',
      'proj.title1': 'Üretim Kalitesinde',
      'proj.title2': 'Kod & Araştırma.',
      'proj.filterAll': 'Tümü',
      'proj.filterAi': 'AI & Veri Bilimi',
      'proj.filterAlgo': 'Algoritma & Oyun AI',
      'proj.filterSys': 'Sistem & Mimari',
      'proj.p1Title': 'Neural Piano Finger Positioning',
      'proj.p1Desc': 'Klasik piyano partisyonlarında nota dizilerini, el anatomisi kısıtlarını ve geçiş maliyetlerini analiz ederek en doğru parmak numaralandırmasını tahmin eden derin öğrenme mimarisi.',
      'proj.p1H1': 'Sembolik müzik verisi ön işleme & çok boyutlu öznitelik çıkarımı',
      'proj.p1H2': 'Sekans tabanlı sinir ağı eğitimi ve doğrulama boru hattı',
      'proj.tryDemo': 'Canlı Simülasyon',
      'proj.p2Title': 'Air Quality Prediction Engine',
      'proj.p2Desc': 'Çevresel sensör ve atmosfer veri setlerini analiz ederek hava kalitesi indeksini yüksek doğrulukla tahmin eden uçtan uca makine öğrenmesi ve veri bilimi projesi.',
      'proj.p2H1': 'Kapsamlı Keşifsel Veri Analizi (EDA), aykırı değer temizliği ve korelasyon matrisleri',
      'proj.p2H2': 'Regresyon ve topluluk (ensemble) modelleri ile hiperparametre optimizasyonu',
      'proj.p3Title': 'Knight Path Finder',
      'proj.p3Desc': 'Graf gezinme (graph traversal), en kısa yol bulma mantığı ve interaktif algoritmik problem çözmeye odaklanan görsel algoritma analiz ve simülasyon aracı.',
      'proj.p3H1': 'BFS ve sezgisel (heuristic) durum uzayı araması ile optimal hamle garantisi',
      'proj.p3H2': 'Adım adım düğüm keşfi ve rota görselleştirme motoru',
      'proj.p4Title': 'MağaraJam — Autonomous AI & Game Prototype',
      'proj.p4Desc': 'Kısıtlı sürede Unity ve C# kullanılarak geliştirilen; geniş kapsamlı arama (search), yol bulma (pathfinding) ve optimizasyon algoritmalarını kullanan karmaşık yapay zeka ajanlarına sahip oynanabilir prototip.',
      'proj.p4H1': 'Gerçek zamanlı karar ağaçları, otonom ajan navigasyonu ve oyun mekaniği mimarisi',
      'proj.p4H2': 'Modüler C# bileşen tasarımı ve yüksek kare hızı (FPS) optimizasyonu',
      'proj.p5Title': 'YatDice — State-Driven Interactive Engine',
      'proj.p5Desc': 'C# kullanılarak sıfırdan tasarlanan; temiz nesne yönelimli mimari (Clean OOP), olasılıksal mekanikler ve yapılandırılmış durum yönetimi (state management) içeren interaktif uygulama.',
      'proj.p5H1': 'SOLID prensiplerine uygun, genişletilebilir oyun/uygulama durum makinesi',
      'proj.p5H2': 'Deterministik olmayan zar olasılık hesaplayıcısı ve akıcı kullanıcı etkileşimi',
      'proj.p6Title': 'Real-Time Financial & Operational Analytics Suite',
      'proj.p6Desc': 'FastAPI, Streamlit ve React.js kullanılarak geliştirilen; yüksek hacimli verileri işleyen, indeksleme ile hızlandırılmış PostgreSQL sorguları ve Power BI görselleştirmeleri sunan kurumsal analitik mimari.',
      'proj.p6H1': 'Legacy sistemlerin modern React.js ve asenkron FastAPI servislerine dönüşümü',
      'proj.p6H2': 'B-Tree / kompozit veritabanı indeksleme ile sorgu sürelerinde yüksek iyileştirme',
      'proj.expDetails': 'Deneyim Detayı',
      'cred.tag': 'TEKNİK MİMARİ, AKADEMİ & SERTİFİKALAR',
      'cred.title1': 'Çok Disiplinli',
      'cred.title2': 'Mühendislik Yetkinliği.',
      'cred.certTitle': 'HEALTH-AI Project',
      'cred.certDesc': 'Avrupa Birliği ve Erasmus+ tarafından fonlanan <strong>HEALTH-AI</strong> projesi kapsamında sağlıkta yapay zeka uygulamaları ve veri odaklı sistemler üzerine Başarı Sertifikası (Certificate of Achievement).',
      'cred.eduTag': 'AKADEMİK & SANATSAL TEMEL',
      'cred.eduTitle': 'Eğitim Geçmişi',
      'cred.eduCankaya': 'Yazılım Mühendisliği Lisans (B.Sc. Software Engineering — 4. Sınıf)',
      'cred.eduCons': 'Müzik / Klasik Piyano Eğitimi (VISTA Lab AI araştırmasının sanatsal temeli)',
      'cred.eduHigh': 'Lise Eğitimi',
      'cred.skillsTitle': 'Dil, Framework ve Mimari Yetkinlikler',
      'cred.skillsHint': 'KARTLARIN ÜZERİNDE GEZİNİN',
      'cred.catAi': 'AI, Deep Learning & Veri',
      'cred.catBackend': 'Backend & Veritabanı Mimarisi',
      'cred.catSys': 'Algoritma, Oyun & Frontend',
      'contact.badge': 'AÇIK POZİSYONLAR & ARAŞTIRMA İŞ BİRLİKLERİNE UYGUN',
      'contact.title1': 'Bir Sonraki Zeki Sistemi',
      'contact.title2': 'Birlikte İnşa Edelim.',
      'contact.desc': 'Yapay zeka / derin öğrenme mühendisliği, ölçeklenebilir backend mimarileri veya Ar-Ge projeleri için doğrudan iletişime geçebilirsiniz.',
      'contact.copy': 'Kopyala',
      'contact.phoneLbl': 'TELEFON',
      'contact.socialLbl': 'AĞLAR',
      'contact.formTitle': 'Hızlı Mesaj Gönder',
      'contact.nameLabel': 'Adınız / Kurum',
      'contact.emailLabel': 'E-Posta Adresiniz',
      'contact.topicLabel': 'Konu',
      'contact.optAi': 'AI / Machine Learning Mühendisliği',
      'contact.optSoft': 'Yazılım & Backend Mühendisliği',
      'contact.optRes': 'Akademik / Ar-Ge İş Birliği',
      'contact.optOther': 'Diğer Tanışma & Proje',
      'contact.msgLabel': 'Mesajınız',
      'contact.sendBtn': 'Mesajı Hazırla & Gönder',
      'modal.printBtn': 'PDF Olarak Yazdır / Kaydet'
    },
    en: {
      'preloader.skip': 'Skip Intro',
      'nav.role': 'AI & Software Architect',
      'nav.overview': 'Overview',
      'nav.lab': 'Neural Lab',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills & Education',
      'nav.contact': 'Contact',
      'hero.badge': 'VISTA LAB DEEP LEARNING RESEARCHER • HEALTH-AI (EU)',
      'hero.titleLine1': 'Intelligent Systems,',
      'hero.titleHighlight': 'Deep Learning',
      'hero.titleLine2': '& Algorithmic Precision.',
      'hero.description': 'Hello, I am <strong>Semih Utku Canverdi</strong> — a 4th-year Software Engineering student at Çankaya University and Deep Learning Researcher at <strong>VISTA Lab</strong>. I fuse my classical piano conservatory background with <strong>PyTorch</strong> neural network pipelines, scalable backend architectures (FastAPI, Java, PostgreSQL), and autonomous algorithms.',
      'hero.ctaLab': 'Launch Live AI Lab',
      'hero.ctaProjects': 'Featured Projects',
      'hero.ctaCv': 'View / Download CV',
      'hero.tensorLabel': 'INTERACTIVE TENSOR TOPOLOGY (HOVER MOUSE)',
      'hero.cardFocusKey': 'Core Focus',
      'hero.cardFocusVal': 'Deep Learning, Symbolic Music AI & Backend',
      'hero.cardLabKey': 'Active Research',
      'hero.cardStackKey': 'Primary Stack',
      'hero.cardCertKey': 'EU Certification',
      'hero.metricYear': 'Year Software Eng.',
      'hero.metricExp': 'Industry & Lab Roles',
      'hero.metricPiano': 'Conservatory Piano',
      'hero.scrollPrompt': 'SCROLL TO EXPLORE',
      'lab.tag': 'INTERACTIVE AI & ALGORITHMIC SANDBOX',
      'lab.title1': "Don't Just Read —",
      'lab.title2': 'Experience the Models Live.',
      'lab.subtitle': 'Interactive in-browser simulations of my VISTA Lab deep learning research on classical piano finger positioning and my Knight Path Finder graph traversal engine.',
      'lab.pianoTitle': 'Deep Learning Piano Finger Positioning',
      'lab.audioReady': 'WEB AUDIO SYNTH READY',
      'lab.pianoDesc': 'Neural network pipeline predicting optimal finger assignments (1: Thumb → 5: Pinky) for classical piano scores based on pitch intervals and biomechanical constraints. Click keys or run a classical phrase:',
      'lab.inputNote': 'ACTIVE PITCH / FREQ',
      'lab.predFinger': 'PREDICTED FINGER',
      'lab.confidence': 'MODEL CONFIDENCE',
      'lab.biomechCost': 'BIOMECHANICAL COST',
      'lab.runBach': 'Run Bach Motif (Neural Sequence)',
      'lab.runChopin': 'Run Chopin Arpeggio Analysis',
      'lab.knightTitle': 'Knight Path Finder & Search Visualizer',
      'lab.knightDesc': 'Graph traversal and obstacle-avoidance algorithm from my <strong>Knight Path Finder</strong> and <strong>MağaraJam AI</strong> projects. Click any target cell on the board to compute the shortest L-move trajectory in real time:',
      'lab.startPos': 'ORIGIN NODE',
      'lab.targetPos': 'TARGET NODE',
      'lab.OptimalMoves': 'MINIMUM MOVES',
      'lab.visitedNodes': 'EXPLORED NODES',
      'lab.optimalRoute': 'OPTIMAL VECTOR ROUTE',
      'lab.randomTarget': 'Random Target & Solve',
      'lab.shuffleWalls': 'Regenerate Obstacles',
      'exp.tag': 'CAREER & RESEARCH TIMELINE',
      'exp.title1': 'Academic Research &',
      'exp.title2': 'Production Engineering.',
      'exp.vistaDate': 'September 2026 — Present',
      'exp.vistaType': 'DEEP LEARNING RESEARCH',
      'exp.vistaRole': 'Deep Learning Researcher',
      'exp.vistaDesc': 'Developing an advanced deep learning model to <strong>predict optimal finger positioning for classical piano scores</strong> using complex musical datasets. Leading comprehensive data preprocessing, feature extraction pipelines, neural network architecture design, and iterative model training workflows.',
      'exp.teiasDate': 'July 2026 — August 2026',
      'exp.teiasType': 'ENTERPRISE SOFTWARE ENGINEERING',
      'exp.teiasRole': 'Software Engineering Intern',
      'exp.teiasDesc': 'Developed and maintained internal mission-critical web applications using <strong>Java</strong> and <strong>Angular</strong>, contributing directly to backend <strong>RESTful API</strong> design, secure database integration, and modular frontend interface components.',
      'exp.teamsecDate': 'July 2025 — January 2026',
      'exp.teamsecType': 'BACKEND & DATA ENGINEERING',
      'exp.teamsecRole': 'Software & Data Engineer',
      'exp.teamsecDesc': 'Engineered robust backend services and interactive financial/operational dashboards using <strong>FastAPI</strong> and <strong>Streamlit</strong>. Migrated legacy systems to a modern <strong>React.js</strong> stack, performed structured data analysis via <strong>Power BI</strong>, and wrote optimized SQL queries with database indexing to boost <strong>PostgreSQL</strong> execution performance.',
      'proj.tag': 'SELECTED ENGINEERING & AI WORKS',
      'proj.title1': 'Production-Grade',
      'proj.title2': 'Code & Research.',
      'proj.filterAll': 'All Works',
      'proj.filterAi': 'AI & Data Science',
      'proj.filterAlgo': 'Algorithms & Game AI',
      'proj.filterSys': 'Systems & Architecture',
      'proj.p1Title': 'Neural Piano Finger Positioning',
      'proj.p1Desc': 'Deep learning architecture analyzing musical score sequences, hand anatomy constraints, and biomechanical transition costs to predict optimal piano fingering.',
      'proj.p1H1': 'Symbolic music data preprocessing & multidimensional feature extraction',
      'proj.p1H2': 'Sequence-based neural network training and validation pipeline',
      'proj.tryDemo': 'Live Simulation',
      'proj.p2Title': 'Air Quality Prediction Engine',
      'proj.p2Desc': 'End-to-end predictive machine learning pipeline utilizing Python to analyze environmental datasets, perform exploratory data analysis, and forecast air quality metrics.',
      'proj.p2H1': 'Comprehensive Exploratory Data Analysis (EDA), outlier removal, and correlation matrices',
      'proj.p2H2': 'Regression & ensemble modeling with hyperparameter optimization',
      'proj.p3Title': 'Knight Path Finder',
      'proj.p3Desc': 'Interactive algorithm visualizer focusing on graph traversal, shortest-path logic, and algorithmic problem-solving across constrained state spaces.',
      'proj.p3H1': 'BFS and heuristic state-space search guaranteeing optimal move sequences',
      'proj.p3H2': 'Real-time step-by-step node discovery and route visualization engine',
      'proj.p4Title': 'MağaraJam — Autonomous AI & Game Prototype',
      'proj.p4Desc': 'Playable game prototype built with Unity & C# featuring complex autonomous AI agents utilizing search, pathfinding, and optimization algorithms.',
      'proj.p4H1': 'Real-time decision trees, autonomous agent navigation, and core gameplay mechanics',
      'proj.p4H2': 'Modular C# component architecture and high-framerate performance',
      'proj.p5Title': 'YatDice — State-Driven Interactive Engine',
      'proj.p5Desc': 'Interactive dice game application engineered from scratch in C#, implementing clean object-oriented architecture, randomized mechanics, and structured state management.',
      'proj.p5H1': 'Extensible state machine adhering to SOLID and Clean OOP principles',
      'proj.p5H2': 'Probabilistic mechanics engine and responsive user interaction layer',
      'proj.p6Title': 'Real-Time Financial & Operational Analytics Suite',
      'proj.p6Desc': 'Enterprise analytics stack built with FastAPI, Streamlit, and React.js featuring index-accelerated PostgreSQL queries and interactive Power BI reporting.',
      'proj.p6H1': 'Migration of legacy modules into modern React.js and async FastAPI services',
      'proj.p6H2': 'B-Tree & composite PostgreSQL indexing for high-speed query execution',
      'proj.expDetails': 'Experience Details',
      'cred.tag': 'TECHNICAL ARCHITECTURE, ACADEMIA & CERTIFICATES',
      'cred.title1': 'Multidisciplinary',
      'cred.title2': 'Engineering Mastery.',
      'cred.certTitle': 'HEALTH-AI Project',
      'cred.certDesc': 'Certificate of Achievement awarded under the <strong>Erasmus+ / European Union Funded HEALTH-AI Project</strong> for artificial intelligence in healthcare and data-driven systems.',
      'cred.eduTag': 'ACADEMIC & ARTISTIC FOUNDATION',
      'cred.eduTitle': 'Education',
      'cred.eduCankaya': 'B.Sc. in Software Engineering (4th-Year Senior Student)',
      'cred.eduCons': 'Classical Music & Piano Training (Artistic foundation for VISTA Lab AI research)',
      'cred.eduHigh': 'High School Diploma',
      'cred.skillsTitle': 'Languages, Frameworks & Architectural Stack',
      'cred.skillsHint': 'HOVER CARDS TO INTERACT',
      'cred.catAi': 'AI, Deep Learning & Data',
      'cred.catBackend': 'Backend & Database Systems',
      'cred.catSys': 'Algorithms, Game AI & Frontend',
      'contact.badge': 'AVAILABLE FOR AI & SOFTWARE ENGINEERING ROLES',
      'contact.title1': "Let's Architect the Next",
      'contact.title2': 'Intelligent System.',
      'contact.desc': 'Reach out directly for Machine Learning / Deep Learning roles, Backend & Systems Engineering positions, or research collaborations.',
      'contact.copy': 'Copy',
      'contact.phoneLbl': 'PHONE',
      'contact.socialLbl': 'NETWORKS',
      'contact.formTitle': 'Send a Direct Message',
      'contact.nameLabel': 'Your Name / Organization',
      'contact.emailLabel': 'Your Email',
      'contact.topicLabel': 'Subject',
      'contact.optAi': 'AI / Machine Learning Engineering',
      'contact.optSoft': 'Software & Backend Engineering',
      'contact.optRes': 'Academic / R&D Collaboration',
      'contact.optOther': 'General Inquiry',
      'contact.msgLabel': 'Message',
      'contact.sendBtn': 'Compose & Send Message',
      'modal.printBtn': 'Print / Save as PDF'
    }
  };

  let currentLang = 'tr';

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    const trBtn = document.getElementById('lang-tr');
    const enBtn = document.getElementById('lang-en');
    if (trBtn && enBtn) {
      trBtn.classList.toggle('active-lang', lang === 'tr');
      enBtn.classList.toggle('active-lang', lang === 'en');
    }
  }

  /* --------------------------------------------------------------------------
     2. CINEMATIC PRELOADER SEQUENCE
     -------------------------------------------------------------------------- */
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloader-bar');
  const preloaderCounter = document.getElementById('preloader-counter');
  const preloaderLog = document.getElementById('preloader-log');
  const skipBtn = document.getElementById('skip-preloader');

  const bootLogs = [
    '> INITIALIZING PYTORCH TENSOR GRAPH...',
    '> LOADING VISTA LAB ACOUSTIC NEURAL PIPELINE...',
    '> CALIBRATING KNIGHT PATHFINDER BFS ENGINE...',
    '> MOUNTING FASTAPI & POSTGRESQL TELEMETRY...',
    '> NEURAL INTERFACE READY. WELCOME.'
  ];

  let preloadProgress = 0;
  let preloadFinished = false;

  function finishPreloader() {
    if (preloadFinished) return;
    preloadFinished = true;
    if (preloaderBar) preloaderBar.style.width = '100%';
    if (preloaderCounter) preloaderCounter.textContent = '100%';
    if (preloaderLog) preloaderLog.textContent = bootLogs[bootLogs.length - 1];

    setTimeout(() => {
      preloader.classList.add('loaded');
      document.body.classList.remove('loading');
      triggerInitialReveals();
    }, 180);

    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1350);
  }

  const preloadInterval = setInterval(() => {
    preloadProgress += Math.floor(Math.random() * 7) + 4;
    if (preloadProgress >= 100) {
      preloadProgress = 100;
      clearInterval(preloadInterval);
      finishPreloader();
      return;
    }
    if (preloaderBar) preloaderBar.style.width = `${preloadProgress}%`;
    if (preloaderCounter) {
      preloaderCounter.textContent = `${String(preloadProgress).padStart(2, '0')}%`;
    }
    const logIdx = Math.min(
      bootLogs.length - 1,
      Math.floor((preloadProgress / 100) * bootLogs.length)
    );
    if (preloaderLog) preloaderLog.textContent = bootLogs[logIdx];
  }, 55);

  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      clearInterval(preloadInterval);
      finishPreloader();
    });
  }

  /* --------------------------------------------------------------------------
     3. CUSTOM MAGNETIC CURSOR & 3D CARD SPOTLIGHT / TILT
     -------------------------------------------------------------------------- */
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  const cursorLabel = document.getElementById('cursor-label');
  const cursorGlow = document.getElementById('cursor-ambient-glow');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;

    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }
    if (cursorGlow) {
      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;
    }
    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  // Magnetic & Cursor Hover Label
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
      const label = el.getAttribute('data-cursor') || 'VIEW';
      if (cursorLabel) cursorLabel.textContent = label;
    });

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${relX * 0.18}px, ${relY * 0.18}px)`;
    });

    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
      el.style.transform = '';
    });
  });

  // 3D Tilt & Radial Spotlight on Cards
  document.querySelectorAll('.tilt-card').forEach((card) => {
    const maxTilt = parseFloat(card.getAttribute('data-tilt-max') || '6');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const pctX = (x / rect.width) - 0.5;
      const pctY = (y / rect.height) - 0.5;
      const rotY = pctX * maxTilt * 2;
      const rotX = -pctY * maxTilt * 2;

      card.style.transform = `perspective(1100px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg)';
    });
  });

  /* --------------------------------------------------------------------------
     4. INTERACTIVE BACKGROUND NEURAL CONSTELLATION CANVAS
     -------------------------------------------------------------------------- */
  const bgCanvas = document.getElementById('neural-canvas');
  if (bgCanvas) {
    const ctx = bgCanvas.getContext('2d');
    let width = (bgCanvas.width = window.innerWidth);
    let height = (bgCanvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = bgCanvas.width = window.innerWidth;
      height = bgCanvas.height = window.innerHeight;
    });

    const nodeCount = Math.min(75, Math.floor((width * height) / 22000));
    const nodes = [];
    const pulses = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.8 + 1,
        gold: Math.random() > 0.35
      });
    }

    // Click shockwave
    window.addEventListener('click', (e) => {
      nodes.forEach((n) => {
        const dx = n.x - e.clientX;
        const dy = n.y - e.clientY;
        const dist = Math.hypot(dx, dy);
        if (dist < 260 && dist > 1) {
          const force = (260 - dist) / 260;
          n.vx += (dx / dist) * force * 2.4;
          n.vy += (dy / dist) * force * 2.4;
        }
      });
    });

    function renderNeuralBg() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        // Dampen velocity softly
        a.vx *= 0.995;
        a.vy *= 0.995;
        if (Math.abs(a.vx) < 0.15) a.vx += (Math.random() - 0.5) * 0.08;
        if (Math.abs(a.vy) < 0.15) a.vy += (Math.random() - 0.5) * 0.08;

        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        // Mouse interaction
        const mdx = mouseX - a.x;
        const mdy = mouseY - a.y;
        const mDist = Math.hypot(mdx, mdy);

        if (mDist < 190) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouseX, mouseY);
          const alpha = (1 - mDist / 190) * 0.38;
          ctx.strokeStyle = a.gold
            ? `rgba(212, 175, 55, ${alpha})`
            : `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }

        // Node-to-node synapses
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 145) {
            const alpha = (1 - dist / 145) * 0.2;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();

            if (Math.random() < 0.0005 && pulses.length < 18) {
              pulses.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, t: 0 });
            }
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = a.gold ? 'rgba(246, 231, 184, 0.75)' : 'rgba(56, 189, 248, 0.7)';
        ctx.fill();
      }

      // Draw synaptic pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += 0.03;
        if (p.t >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const px = p.ax + (p.bx - p.ax) * p.t;
        const py = p.ay + (p.by - p.ay) * p.t;
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = '#f6e7b8';
        ctx.fill();
      }

      requestAnimationFrame(renderNeuralBg);
    }
    requestAnimationFrame(renderNeuralBg);
  }

  /* --------------------------------------------------------------------------
     5. HERO 3D TENSOR TOPOLOGY VISUALIZER (#hero-tensor-canvas)
     -------------------------------------------------------------------------- */
  const tensorCanvas = document.getElementById('hero-tensor-canvas');
  if (tensorCanvas) {
    const tCtx = tensorCanvas.getContext('2d');
    const layers = [4, 6, 6, 5];
    const layerNodes = [];
    const signals = [];

    function buildTensorNodes() {
      layerNodes.length = 0;
      const w = tensorCanvas.width;
      const h = tensorCanvas.height;
      const padX = 52;
      const usableW = w - padX * 2;

      layers.forEach((count, lIdx) => {
        const x = padX + (usableW / (layers.length - 1)) * lIdx;
        const col = [];
        for (let i = 0; i < count; i++) {
          const y = ((h - 44) / (count - 1)) * i + 22;
          col.push({ x, y, act: Math.random() });
        }
        layerNodes.push(col);
      });
    }
    buildTensorNodes();

    let tensorHoverX = 210;
    let tensorHoverY = 110;
    tensorCanvas.addEventListener('mousemove', (e) => {
      const r = tensorCanvas.getBoundingClientRect();
      tensorHoverX = ((e.clientX - r.left) / r.width) * tensorCanvas.width;
      tensorHoverY = ((e.clientY - r.top) / r.height) * tensorCanvas.height;
      if (signals.length < 25) {
        const l = Math.floor(Math.random() * (layers.length - 1));
        const a = layerNodes[l][Math.floor(Math.random() * layerNodes[l].length)];
        const b = layerNodes[l + 1][Math.floor(Math.random() * layerNodes[l + 1].length)];
        signals.push({ a, b, t: 0 });
      }
    });

    function renderTensorCanvas() {
      tCtx.clearRect(0, 0, tensorCanvas.width, tensorCanvas.height);

      if (Math.random() < 0.14 && signals.length < 18) {
        const l = Math.floor(Math.random() * (layers.length - 1));
        const a = layerNodes[l][Math.floor(Math.random() * layerNodes[l].length)];
        const b = layerNodes[l + 1][Math.floor(Math.random() * layerNodes[l + 1].length)];
        signals.push({ a, b, t: 0 });
      }

      // Draw edges
      for (let l = 0; l < layerNodes.length - 1; l++) {
        for (const n1 of layerNodes[l]) {
          for (const n2 of layerNodes[l + 1]) {
            tCtx.beginPath();
            tCtx.moveTo(n1.x, n1.y);
            tCtx.lineTo(n2.x, n2.y);
            tCtx.strokeStyle = 'rgba(212, 175, 55, 0.13)';
            tCtx.lineWidth = 0.8;
            tCtx.stroke();
          }
        }
      }

      // Draw signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.t += 0.04;
        if (s.t >= 1) {
          s.b.act = 1;
          signals.splice(i, 1);
          continue;
        }
        const sx = s.a.x + (s.b.x - s.a.x) * s.t;
        const sy = s.a.y + (s.b.y - s.a.y) * s.t;
        tCtx.beginPath();
        tCtx.arc(sx, sy, 2.6, 0, Math.PI * 2);
        tCtx.fillStyle = '#38bdf8';
        tCtx.fill();
      }

      // Draw nodes
      for (let l = 0; l < layerNodes.length; l++) {
        for (const n of layerNodes[l]) {
          n.act *= 0.96;
          const dist = Math.hypot(n.x - tensorHoverX, n.y - tensorHoverY);
          const boost = dist < 65 ? (1 - dist / 65) : 0;
          const radius = 5 + boost * 3 + n.act * 2;

          tCtx.beginPath();
          tCtx.arc(n.x, n.y, radius, 0, Math.PI * 2);
          tCtx.fillStyle = l === layerNodes.length - 1
            ? '#d4af37'
            : (n.act > 0.3 || boost > 0.3 ? '#f6e7b8' : '#1e293b');
          tCtx.strokeStyle = '#d4af37';
          tCtx.lineWidth = 1.4;
          tCtx.fill();
          tCtx.stroke();
        }
      }

      requestAnimationFrame(renderTensorCanvas);
    }
    requestAnimationFrame(renderTensorCanvas);
  }

  /* --------------------------------------------------------------------------
     6. LAB MODULE 1: VISTA LAB DEEP LEARNING PIANO FINGERING + WEB AUDIO
     -------------------------------------------------------------------------- */
  const pianoNotes = [
    { note: 'C4', freq: 261.63, finger: 1, fingerTR: '#1 (Başparmak)', fingerEN: '#1 (Thumb)', probs: [94, 4, 1, 1, 0], cost: '0.09 (Optimal)' },
    { note: 'D4', freq: 293.66, finger: 2, fingerTR: '#2 (İşaret)', fingerEN: '#2 (Index)', probs: [5, 91, 3, 1, 0], cost: '0.11 (Optimal)' },
    { note: 'E4', freq: 329.63, finger: 3, fingerTR: '#3 (Orta)', fingerEN: '#3 (Middle)', probs: [2, 6, 89, 2, 1], cost: '0.12 (Optimal)' },
    { note: 'F4', freq: 349.23, finger: 1, fingerTR: '#1 (Başparmak Geçişi)', fingerEN: '#1 (Thumb Under)', probs: [86, 4, 7, 2, 1], cost: '0.18 (Thumb-Under)' },
    { note: 'G4', freq: 392.00, finger: 2, fingerTR: '#2 (İşaret)', fingerEN: '#2 (Index)', probs: [4, 92, 3, 1, 0], cost: '0.10 (Optimal)' },
    { note: 'A4', freq: 440.00, finger: 3, fingerTR: '#3 (Orta)', fingerEN: '#3 (Middle)', probs: [1, 5, 90, 3, 1], cost: '0.11 (Optimal)' },
    { note: 'B4', freq: 493.88, finger: 4, fingerTR: '#4 (Yüzük)', fingerEN: '#4 (Ring)', probs: [1, 2, 6, 88, 3], cost: '0.15 (Anatomical)' },
    { note: 'C5', freq: 523.25, finger: 5, fingerTR: '#5 (Serçe)', fingerEN: '#5 (Pinky)', probs: [0, 1, 3, 5, 91], cost: '0.12 (Optimal)' },
    { note: 'D5', freq: 587.33, finger: 4, fingerTR: '#4 (Yüzük)', fingerEN: '#4 (Ring)', probs: [1, 3, 8, 84, 4], cost: '0.16 (Stretch)' },
    { note: 'E5', freq: 659.25, finger: 5, fingerTR: '#5 (Serçe)', fingerEN: '#5 (Pinky)', probs: [0, 1, 2, 4, 93], cost: '0.10 (Optimal)' }
  ];

  let audioCtx = null;

  function playPianoTone(freq) {
    try {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContextClass();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const now = audioCtx.currentTime;
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, now);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.22, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 1.1);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(audioCtx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.15);
      osc2.stop(now + 1.15);
    } catch (_) {
      // Ignore if browser blocks audio before interaction
    }
  }

  const keyboardEl = document.getElementById('piano-keyboard');
  const noteDisp = document.getElementById('piano-note-display');
  const fingerDisp = document.getElementById('piano-finger-display');
  const confDisp = document.getElementById('piano-conf-display');
  const costDisp = document.getElementById('piano-cost-display');

  function triggerPianoKey(idx) {
    const item = pianoNotes[idx];
    if (!item) return;

    playPianoTone(item.freq);

    const allKeys = keyboardEl.querySelectorAll('.piano-key');
    allKeys.forEach((k, i) => {
      k.classList.toggle('active-key', i === idx);
    });

    if (noteDisp) noteDisp.textContent = `${item.note} • ${item.freq.toFixed(1)} Hz`;
    if (fingerDisp) {
      fingerDisp.textContent = currentLang === 'tr' ? item.fingerTR : item.fingerEN;
    }
    const maxProb = Math.max(...item.probs);
    if (confDisp) confDisp.textContent = `${(maxProb + 0.4).toFixed(1)}%`;
    if (costDisp) costDisp.textContent = item.cost;

    for (let f = 1; f <= 5; f++) {
      const pVal = item.probs[f - 1];
      const bar = document.getElementById(`prob-bar-${f}`);
      const lbl = document.getElementById(`prob-val-${f}`);
      if (bar) {
        bar.style.width = `${pVal}%`;
        bar.classList.toggle('active', f === item.finger);
      }
      if (lbl) lbl.textContent = `${pVal}%`;
    }

    setTimeout(() => {
      if (allKeys[idx]) allKeys[idx].classList.remove('active-key');
    }, 420);
  }

  if (keyboardEl) {
    pianoNotes.forEach((item, idx) => {
      const keyBtn = document.createElement('button');
      keyBtn.type = 'button';
      keyBtn.className = 'piano-key';
      keyBtn.innerHTML = `
        <span class="key-finger-badge">P${item.finger}</span>
        <span>${item.note}</span>
      `;
      keyBtn.addEventListener('click', () => triggerPianoKey(idx));
      keyboardEl.appendChild(keyBtn);
    });
  }

  let seqTimers = [];
  function runPianoSequence(indices, tempoMs = 260) {
    seqTimers.forEach((t) => clearTimeout(t));
    seqTimers = [];
    indices.forEach((noteIdx, step) => {
      const timer = setTimeout(() => {
        triggerPianoKey(noteIdx);
      }, step * tempoMs);
      seqTimers.push(timer);
    });
  }

  const bachBtn = document.getElementById('play-bach-btn');
  const chopinBtn = document.getElementById('play-chopin-btn');
  if (bachBtn) {
    bachBtn.addEventListener('click', () => {
      runPianoSequence([0, 2, 4, 7, 9, 7, 4, 2, 0], 240);
    });
  }
  if (chopinBtn) {
    chopinBtn.addEventListener('click', () => {
      runPianoSequence([0, 3, 4, 7, 6, 4, 2, 5, 7], 220);
    });
  }

  /* --------------------------------------------------------------------------
     7. LAB MODULE 2: KNIGHT PATH FINDER & GRAPH TRAVERSAL VISUALIZER
     -------------------------------------------------------------------------- */
  const knightGridEl = document.getElementById('knight-grid');
  const startValEl = document.getElementById('knight-start-val');
  const targetValEl = document.getElementById('knight-target-val');
  const movesValEl = document.getElementById('knight-moves-val');
  const visitedValEl = document.getElementById('knight-visited-val');
  const routeBadgesEl = document.getElementById('knight-route-badges');

  const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const knightStart = { r: 7, c: 1 }; // B1
  let knightTarget = { r: 1, c: 6 };  // G7
  let obstacles = new Set(['3,3', '3,4', '4,3', '2,5', '5,2']);

  function toCoordName(r, c) {
    return `${cols[c]}${8 - r}`;
  }

  function solveKnightBFS(start, target) {
    const moves = [
      [-2, -1], [-2, 1], [-1, -2], [-1, 2],
      [1, -2], [1, 2], [2, -1], [2, 1]
    ];
    const queue = [[start]];
    const visited = new Set([`${start.r},${start.c}`]);
    const visitedOrder = [];

    while (queue.length > 0) {
      const path = queue.shift();
      const curr = path[path.length - 1];
      visitedOrder.push(curr);

      if (curr.r === target.r && curr.c === target.c) {
        return { path, visitedOrder };
      }

      for (const [dr, dc] of moves) {
        const nr = curr.r + dr;
        const nc = curr.c + dc;
        const key = `${nr},${nc}`;
        if (
          nr >= 0 && nr < 8 &&
          nc >= 0 && nc < 8 &&
          !visited.has(key) &&
          !obstacles.has(key)
        ) {
          visited.add(key);
          queue.push([...path, { r: nr, c: nc }]);
        }
      }
    }
    return { path: [start], visitedOrder };
  }

  function renderKnightBoard() {
    if (!knightGridEl) return;
    knightGridEl.innerHTML = '';

    const { path, visitedOrder } = solveKnightBFS(knightStart, knightTarget);
    const pathSet = new Set(path.map((p) => `${p.r},${p.c}`));
    const visitedSet = new Set(visitedOrder.map((p) => `${p.r},${p.c}`));

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const cell = document.createElement('button');
        cell.type = 'button';
        const isDark = (r + c) % 2 === 1;
        const key = `${r},${c}`;
        cell.className = `chess-cell ${isDark ? 'dark-cell' : ''}`;

        if (r === knightStart.r && c === knightStart.c) {
          cell.classList.add('cell-start');
          cell.textContent = '♞';
        } else if (r === knightTarget.r && c === knightTarget.c) {
          cell.classList.add('cell-target');
          cell.textContent = '★';
        } else if (obstacles.has(key)) {
          cell.classList.add('cell-obstacle');
          cell.textContent = '✕';
        } else if (pathSet.has(key)) {
          const stepIndex = path.findIndex((p) => p.r === r && p.c === c);
          cell.classList.add('cell-path');
          cell.textContent = stepIndex;
        } else if (visitedSet.has(key)) {
          cell.classList.add('cell-visited');
          cell.textContent = toCoordName(r, c);
        } else {
          cell.textContent = toCoordName(r, c);
        }

        cell.addEventListener('click', () => {
          if (obstacles.has(key) || (r === knightStart.r && c === knightStart.c)) return;
          knightTarget = { r, c };
          renderKnightBoard();
        });

        knightGridEl.appendChild(cell);
      }
    }

    if (startValEl) startValEl.textContent = `${toCoordName(knightStart.r, knightStart.c)} (${knightStart.c}, ${7 - knightStart.r})`;
    if (targetValEl) targetValEl.textContent = `${toCoordName(knightTarget.r, knightTarget.c)} (${knightTarget.c}, ${7 - knightTarget.r})`;
    if (movesValEl) {
      const mCount = Math.max(0, path.length - 1);
      movesValEl.textContent = currentLang === 'tr' ? `${mCount} Hamle` : `${mCount} Moves`;
    }
    if (visitedValEl) visitedValEl.textContent = `${visitedOrder.length} / 64`;

    if (routeBadgesEl) {
      routeBadgesEl.innerHTML = path
        .map((p) => `<span class="route-step">${toCoordName(p.r, p.c)}</span>`)
        .join(' → ');
    }
  }

  renderKnightBoard();

  const randomKnightBtn = document.getElementById('random-knight-btn');
  const toggleObstaclesBtn = document.getElementById('toggle-obstacles-btn');

  if (randomKnightBtn) {
    randomKnightBtn.addEventListener('click', () => {
      let nr = 0;
      let nc = 0;
      do {
        nr = Math.floor(Math.random() * 8);
        nc = Math.floor(Math.random() * 8);
      } while (
        (nr === knightStart.r && nc === knightStart.c) ||
        obstacles.has(`${nr},${nc}`)
      );
      knightTarget = { r: nr, c: nc };
      renderKnightBoard();
    });
  }

  if (toggleObstaclesBtn) {
    toggleObstaclesBtn.addEventListener('click', () => {
      obstacles = new Set();
      while (obstacles.size < 6) {
        const r = Math.floor(Math.random() * 8);
        const c = Math.floor(Math.random() * 8);
        if (
          (r !== knightStart.r || c !== knightStart.c) &&
          (r !== knightTarget.r || c !== knightTarget.c)
        ) {
          obstacles.add(`${r},${c}`);
        }
      }
      renderKnightBoard();
    });
  }

  /* --------------------------------------------------------------------------
     8. SCROLL PROGRESS, REVEAL ON SCROLL & ACTIVE NAV LINK
     -------------------------------------------------------------------------- */
  const progressBar = document.getElementById('scroll-progress-bar');
  const revealEls = document.querySelectorAll('.reveal-up');
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function triggerInitialReveals() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
            setTimeout(() => {
              entry.target.classList.add('in-view');
            }, delay);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${pct}%`;

    let currentSec = 'hero';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 220;
      if (scrollTop >= top) {
        currentSec = sec.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentSec}`);
    });
  });

  /* --------------------------------------------------------------------------
     9. PROJECT FILTERING, LANGUAGE TOGGLE, CV MODAL & TOAST
     -------------------------------------------------------------------------- */
  // Language switch
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'tr' ? 'en' : 'tr');
      renderKnightBoard();
    });
  }

  // Project filter tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        const show = filter === 'all' || cat === filter;
        card.classList.toggle('hidden-card', !show);
      });
    });
  });

  // Toast helper
  const toastEl = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  let toastTimer = null;

  function showToast(msg) {
    if (!toastEl || !toastText) return;
    toastText.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3000);
  }

  // Copy email buttons
  document.querySelectorAll('.copy-email-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const email = btn.getAttribute('data-email') || 'utkucnvrdi@gmail.com';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email);
      }
      showToast(
        currentLang === 'tr'
          ? `E-posta kopyalandı: ${email}`
          : `Email copied to clipboard: ${email}`
      );
    });
  });

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const topic = document.getElementById('sender-topic').value;
      const msg = document.getElementById('sender-msg').value.trim();

      const subject = encodeURIComponent(`[Portfolio] ${topic} — ${name}`);
      const body = encodeURIComponent(`From: ${name} (${email})\nTopic: ${topic}\n\n${msg}`);
      window.location.href = `mailto:utkucnvrdi@gmail.com?subject=${subject}&body=${body}`;

      showToast(
        currentLang === 'tr'
          ? 'E-posta istemciniz mesajınızla birlikte açılıyor!'
          : 'Opening your email client with the prepared message!'
      );
    });
  }

  // CV Modal & Multi-Track Summaries (from his 4 CV variants)
  const cvModal = document.getElementById('cv-modal');
  const openCvBtn = document.getElementById('open-cv-modal');
  const closeCvBtn = document.getElementById('close-cv-modal');
  const printCvBtn = document.getElementById('print-cv-btn');
  const cvSummaryEl = document.getElementById('cv-dynamic-summary');
  const cvTrackBtns = document.querySelectorAll('.cv-track-btn');

  const trackSummaries = {
    ai: '4th-year Software Engineering student focused on deep learning, neural network architectures, and data-driven systems. Developing advanced neural pipelines for symbolic music finger positioning at VISTA Lab, alongside predictive machine learning workflows and EU-funded HEALTH-AI certification.',
    backend: '4th-year Software Engineering student with a strong foundation in software development, system architecture, and performance optimization. Experienced in building robust backend services, scalable web applications, and data-driven systems with FastAPI, Java, Spring Boot, React, and PostgreSQL.',
    gamedev: '4th-year Software Engineering student focused on game development, algorithmic problem-solving, and AI-driven systems. Passionate about designing core gameplay mechanics, autonomous AI agents, pathfinding logic, and clean software architectures using Unity, C#, and Python.'
  };

  if (openCvBtn && cvModal) {
    openCvBtn.addEventListener('click', () => {
      cvModal.classList.add('open');
      cvModal.setAttribute('aria-hidden', 'false');
    });
  }

  if (closeCvBtn && cvModal) {
    closeCvBtn.addEventListener('click', () => {
      cvModal.classList.remove('open');
      cvModal.setAttribute('aria-hidden', 'true');
    });
  }

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        cvModal.classList.remove('open');
        cvModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  cvTrackBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      cvTrackBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const track = btn.getAttribute('data-track');
      if (cvSummaryEl && trackSummaries[track]) {
        cvSummaryEl.textContent = trackSummaries[track];
      }
    });
  });

  if (printCvBtn) {
    printCvBtn.addEventListener('click', () => {
      window.print();
    });
  }
})();
