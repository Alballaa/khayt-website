/* ============================================================
   KHAYT — landing interactions + bilingual (EN / AR, RTL)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- i18n dictionary ---------- */
  var DICT = {
    'nav.screens':   { en: 'Screens', ar: 'الشاشات' },
    'nav.features':  { en: 'Features', ar: 'المزايا' },
    'nav.languages': { en: 'Languages', ar: 'اللغات' },
    'nav.oss':       { en: 'Open Source', ar: 'مفتوح المصدر' },
    'nav.download':  { en: 'Download', ar: 'تحميل' },
    'hero.pill':  { en: 'Free to use · Source available', ar: 'مجاني للاستخدام · المصدر متاح' },
    'hero.h1':    { en: 'Run your print shop like a studio', ar: 'أدِر مطبعتك ثلاثية الأبعاد كأنها استوديو' },
    'hero.sub':   { en: 'The all-in-one production desk for 3D print shops.', ar: 'مكتب الإنتاج المتكامل لمطابع الطباعة ثلاثية الأبعاد.' },
    'hero.desc':  { en: 'Kanban queue, smart costing, ZATCA invoices, live printer API, filament inventory, and deep analytics. Simple or Professional mode — you choose. All offline, all free.', ar: 'لوحة كانبان، تسعير ذكي، فواتير متوافقة مع هيئة الزكاة، ربط مباشر بالطابعات، مخزون الخيوط، وتحليلات متعمّقة. وضع بسيط أو احترافي — الخيار لك. كل ذلك دون اتصال ومجاناً.' },
    'hero.dl':    { en: 'Download Free', ar: 'حمّل مجاناً' },
    'hero.github':{ en: 'View on GitHub', ar: 'عرض على GitHub' },
    'hero.os':    { en: 'No account · No telemetry', ar: 'بدون حساب · بدون تتبّع' },
    'hero.live':  { en: '3 printers live', ar: '٣ طابعات تعمل الآن' },
    'gal.eyebrow':{ en: 'See it in action', ar: 'شاهده أثناء العمل' },
    'gal.h2':     { en: 'Every screen, purpose-built', ar: 'كل شاشة مصمّمة لغرضها' },
    'gal.lede':   { en: 'One app runs the whole shop — quoting, production, invoicing, inventory and the numbers behind it all. These are real screens, not mockups.', ar: 'تطبيق واحد يدير المطبعة بالكامل — التسعير والإنتاج والفوترة والمخزون والأرقام خلفها جميعاً. هذه شاشات حقيقية وليست تصاميم وهمية.' },
    'tab.queue':      { en: 'Production Queue', ar: 'قائمة الإنتاج' },
    'tab.dashboard':  { en: 'Dashboard', ar: 'لوحة التحكم' },
    'tab.calculator': { en: 'Calculator', ar: 'الحاسبة' },
    'tab.orders':     { en: 'Orders Log', ar: 'سجل الطلبات' },
    'tab.inventory':  { en: 'Inventory', ar: 'المخزون' },
    'tab.analytics':  { en: 'Analytics', ar: 'التحليلات' },
    'tab.clients':    { en: 'Clients', ar: 'العملاء' },
    'feat.eyebrow':{ en: 'Everything you need', ar: 'كل ما تحتاجه' },
    'feat.h2':     { en: 'Built for print shop owners', ar: 'مصمّم لأصحاب المطابع' },
    'feat.lede':   { en: 'One app handles your entire workflow — from first quote to final invoice, entirely offline.', ar: 'تطبيق واحد يدير سير عملك بالكامل — من أول عرض سعر إلى آخر فاتورة، دون اتصال تماماً.' },
    'lang.eyebrow':{ en: '7 languages', ar: '٧ لغات' },
    'lang.h2':     { en: 'Built for global makers', ar: 'مصمّم لصُنّاع العالم' },
    'lang.lede':   { en: 'Full Arabic RTL layout is a core design decision — not an afterthought. Khayt also ships in German, Spanish, French, Chinese and Japanese, with instant switching from anywhere in the app.', ar: 'دعم العربية من اليمين إلى اليسار قرار تصميمي أساسي، وليس إضافة لاحقة. يأتي خيط أيضاً بالألمانية والإسبانية والفرنسية والصينية واليابانية، مع تبديل فوري من أي مكان في التطبيق.' },
    'lang.li1':{ en: 'Arabic RTL layout throughout the entire app', ar: 'تخطيط عربي من اليمين لليسار في كامل التطبيق' },
    'lang.li2':{ en: 'ZATCA invoices in bilingual Arabic & English', ar: 'فواتير هيئة الزكاة ثنائية اللغة عربي وإنجليزي' },
    'lang.li3':{ en: 'Instant language switch, no restart needed', ar: 'تبديل فوري للّغة دون إعادة تشغيل' },
    'flip.lab':{ en: 'Live invoice preview', ar: 'معاينة فاتورة حيّة' },
    'oss.eyebrow':{ en: 'Source available', ar: 'المصدر متاح' },
    'oss.h2':    { en: 'Free to use.<br>Yours to inspect.', ar: 'مجاني للاستخدام.<br>وملكك لتفحّصه.' },
    'oss.lede':  { en: 'Khayt is free to use and will remain free. The source is on GitHub — read it, fork it, modify it for your own shop. Licensed under MIT + Commons Clause (no reselling). If it helps your business, consider sponsoring.', ar: 'خيط مجاني وسيبقى مجانياً. المصدر على GitHub — اقرأه وانسخه وعدّله لمطبعتك. مرخّص بموجب MIT + Commons Clause (دون إعادة بيع). إن ساعد عملك فكّر في الدعم.' },
    'oss.star':   { en: 'Star on GitHub', ar: 'أضِف نجمة على GitHub' },
    'oss.sponsor':{ en: 'Sponsor', ar: 'ادعم' },
    'stat.free': { en: 'Free to use', ar: 'مجاني للاستخدام' },
    'stat.langs':{ en: 'Languages', ar: 'لغات' },
    'stat.subs': { en: 'Subscriptions', ar: 'اشتراكات' },
    'stat.keep': { en: 'Yours to keep', ar: 'ملك لك للأبد' },
    'dl.eyebrow':{ en: 'Download Khayt v2.1.0', ar: 'حمّل خيط v2.1.0' },
    'dl.h2':     { en: 'Set up shop in two minutes', ar: 'جهّز مطبعتك في دقيقتين' },
    'dl.lede':   { en: 'Free for everyone. No account. No telemetry. Your data stays on your device.', ar: 'مجاني للجميع. بدون حساب. بدون تتبّع. بياناتك تبقى على جهازك.' },
    'dl.mac':    { en: 'Signed & Notarized — opens cleanly', ar: 'موقّع وموثّق — يفتح بسلاسة' },
    'dl.win':    { en: 'Built-in auto-updater', ar: 'محدّث تلقائي مدمج' },
    'dl.linux':  { en: 'Runs anywhere, no install', ar: 'يعمل في أي مكان دون تثبيت' },
    'dl.dmg':    { en: 'Download .dmg', ar: 'حمّل .dmg' },
    'dl.exe':    { en: 'Installer (.exe)', ar: 'المثبّت (.exe)' },
    'dl.portable':{ en: 'Portable (.exe)', ar: 'نسخة محمولة (.exe)' },
    'dl.deb':    { en: 'Debian / Ubuntu (.deb)', ar: 'دبيان / أوبنتو (.deb)' },
    'dl.latest': { en: 'v2.1.0 latest', ar: 'v2.1.0 الأحدث' },
    'dl.srcavail':{ en: 'Source available', ar: 'المصدر متاح' },
    'dl.notel':  { en: 'No telemetry', ar: 'بدون تتبّع' },
    'dl.allrel': { en: 'All releases on GitHub →', ar: 'كل الإصدارات على GitHub ←' },
    'foot.desc':    { en: 'The all-in-one production desk for 3D print shops — quoting, queue, invoicing and inventory, entirely offline.', ar: 'مكتب الإنتاج المتكامل لمطابع الطباعة ثلاثية الأبعاد — التسعير والقائمة والفوترة والمخزون، دون اتصال تماماً.' },
    'foot.product': { en: 'Product', ar: 'المنتج' },
    'foot.project': { en: 'Project', ar: 'المشروع' },
    'foot.releases':{ en: 'Releases', ar: 'الإصدارات' },
    'foot.license': { en: 'License', ar: 'الرخصة' },
    'foot.made':    { en: 'Made with ♥ for the 3D printing community · Built with the help of AI', ar: 'صُنع بحب لمجتمع الطباعة ثلاثية الأبعاد · بُني بمساعدة الذكاء الاصطناعي' }
  };

  /* ---------- Feature grid ---------- */
  var FEATURES = [
    { t: { en: 'Kanban Production Queue', ar: 'قائمة إنتاج كانبان' }, d: { en: 'Drag orders across Pending → Printing → Post-Processing → QC → Done. Per-machine views, shift checklists, failure photo capture and part-level colour assignment.', ar: 'اسحب الطلبات عبر: قيد الانتظار ← الطباعة ← المعالجة ← الفحص ← مكتمل. عروض لكل طابعة، قوائم بدء الوردية، التقاط صور الأعطال وتعيين ألوان القطع.' },
      i: '<rect x="3" y="4" width="5" height="16" rx="1.4"/><rect x="9.5" y="4" width="5" height="11" rx="1.4"/><rect x="16" y="4" width="5" height="8" rx="1.4"/>' },
    { t: { en: 'Smart Cost Calculator', ar: 'حاسبة تكلفة ذكية' }, d: { en: 'Multi-part cart with a live breakdown: material, machine time, electricity, labour, overhead, failure rate and margin. FDM, Resin and multi-material AMS/MMU costing.', ar: 'سلة متعددة القطع بتفصيل مباشر: المادة، وقت التشغيل، الكهرباء، العمالة، المصاريف، نسبة الفشل والهامش. تسعير FDM والراتنج والمواد المتعددة AMS/MMU.' },
      i: '<rect x="4" y="2.5" width="16" height="19" rx="2"/><path d="M8 7h8M8 11h2M14 11h2M8 15h2M14 15h2"/>' },
    { t: { en: 'ZATCA-Compliant Invoicing', ar: 'فوترة متوافقة مع هيئة الزكاة' }, d: { en: 'Phase 1 e-invoices with TLV QR codes, proforma invoices, milestone billing and quote approval pages. GAZT VAT export, gift cards and store credit.', ar: 'فواتير المرحلة الأولى برمز QR، فواتير مبدئية، فوترة بالمراحل وصفحات اعتماد العروض. تصدير ضريبة القيمة المضافة، بطاقات الهدايا والرصيد.' },
      i: '<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2V3z"/><path d="M9 8h6M9 12h6"/>' },
    { t: { en: 'Live Printer API', ar: 'ربط مباشر بالطابعات' }, d: { en: 'Connect OctoPrint, Moonraker (Klipper), Bambu Lab, PrusaLink, Duet and Repetier. Real-time temperature and print progress, right inside the queue.', ar: 'اربط OctoPrint وMoonraker وBambu Lab وPrusaLink وDuet وRepetier. حرارة وتقدّم الطباعة لحظياً داخل القائمة.' },
      i: '<rect x="4" y="4" width="16" height="11" rx="2"/><path d="M8 19h8M12 15v4"/><circle cx="12" cy="9.5" r="2.4"/>' },
    { t: { en: 'Inventory Management', ar: 'إدارة المخزون' }, d: { en: 'Track FDM spools and Resin bottles with auto-deduction on completion, drying logs, smart reorder alerts with draft POs, price history and overcommit warnings.', ar: 'تتبّع خيوط FDM وزجاجات الراتنج مع الخصم التلقائي عند الإكمال، سجلات التجفيف، تنبيهات إعادة الطلب بأوامر شراء، سجل الأسعار وتنبيهات التجاوز.' },
      i: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3"/>' },
    { t: { en: 'Analytics & Break-Even', ar: 'تحليلات ونقطة التعادل' }, d: { en: 'Revenue, machine P&L, operator performance, retention, production heatmap, cost trends and end-of-day PDF reports. Break-even card and NPS surveys.', ar: 'الإيرادات، أرباح كل آلة، أداء المشغّلين، الاحتفاظ، خريطة حرارية للإنتاج، اتجاهات التكلفة وتقارير PDF لنهاية اليوم. بطاقة التعادل واستبيانات الرضا.' },
      i: '<path d="M4 20V4M4 20h16"/><path d="M7 16l3-4 3 2 4-7"/>' },
    { t: { en: 'Client CRM & Loyalty', ar: 'علاقات العملاء والولاء' }, d: { en: 'Profiles with credit limits, multi-currency, bilingual VAT details, loyalty tiers with automatic discounts, portal QR tracking, waiting-list funnel and intake forms.', ar: 'ملفات بحدود ائتمانية، تعدد العملات، تفاصيل ضريبية ثنائية اللغة، مستويات ولاء بخصومات تلقائية، بوابة بتتبّع QR، قمع قائمة الانتظار ونماذج الاستقبال.' },
      i: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 6.5a3 3 0 0 1 0 5.6M18 20a5.5 5.5 0 0 0-3-4.9"/>' },
    { t: { en: 'Expenses & Accounting', ar: 'المصاريف والمحاسبة' }, d: { en: 'Recurring expenses, budget tracking, receipt attachments, purchase orders with partial receiving and double-entry accounting CSV export.', ar: 'مصاريف متكررة، تتبّع الميزانية، إرفاق الإيصالات، أوامر شراء باستلام جزئي وتصدير محاسبي مزدوج القيد.' },
      i: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M7 15h4"/>' },
    { t: { en: 'Integrations & Access', ar: 'التكاملات والوصول' }, d: { en: 'Salla/Zid webhooks, Telegram notifications, iCal feed and a public intake form. Embedded LAN REST API, auto-updater and operator PIN lock with Admin/Tech/Sales roles.', ar: 'ويب هوك لسلة وزد، إشعارات تيليجرام، تقويم iCal ونموذج استقبال عام. واجهة REST محلية، محدّث تلقائي وقفل PIN بأدوار مدير/فني/مبيعات.' },
      i: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8 15.8 7M8.2 13.2 15.8 17"/>' }
  ];

  /* ---------- Screen gallery data ---------- */
  var SCREENS = {
    queue:      { name: { en: 'Production Queue', ar: 'قائمة الإنتاج' }, cap: { en: 'Kanban production queue', ar: 'قائمة إنتاج كانبان' }, text: { en: 'Drag orders across Pending → Printing → Post-Processing → QC → Done. Per-machine queue views, shift-start checklists, print-failure photo capture, on-hold with reason, and part-level colour assignment.', ar: 'اسحب الطلبات عبر المراحل من قيد الانتظار إلى مكتمل. عروض لكل طابعة، قوائم بدء الوردية، التقاط صور الأعطال، الإيقاف المؤقت بسبب، وتعيين ألوان القطع.' } },
    dashboard:  { name: { en: 'Dashboard', ar: 'لوحة التحكم' }, cap: { en: 'Your shop at a glance', ar: 'مطبعتك في لمحة' }, text: { en: 'Active orders, today\u2019s revenue, outstanding balances, pipeline value and days-to-clear-queue — with a monthly revenue goal forecast and live machine-load breakdown.', ar: 'الطلبات النشطة، إيرادات اليوم، الأرصدة المستحقة، قيمة المسار وأيام تفريغ القائمة — مع توقّع هدف الإيرادات الشهري وتوزيع حِمل الآلات لحظياً.' } },
    calculator: { name: { en: 'Calculator', ar: 'الحاسبة' }, cap: { en: 'Quote with confidence, not guesswork', ar: 'سعّر بثقة لا بالتخمين' }, text: { en: 'A multi-part cart costs material, machine time, electricity, labour, overhead, failure rate and margin in real time — for both FDM (grams) and Resin (mL), with G-code / 3MF auto-extraction.', ar: 'سلة متعددة القطع تحسب المادة ووقت التشغيل والكهرباء والعمالة والمصاريف ونسبة الفشل والهامش لحظياً — لكل من FDM بالغرام والراتنج بالمل، مع استخراج تلقائي من G-code و3MF.' } },
    orders:     { name: { en: 'Orders Log', ar: 'سجل الطلبات' }, cap: { en: 'From quote to paid, in one log', ar: 'من العرض إلى السداد في سجل واحد' }, text: { en: 'Every order tracked end-to-end with ZATCA Phase 1 e-invoices, TLV QR codes, proforma invoices, milestone billing, PDF export and WhatsApp or email delivery.', ar: 'كل طلب متتبّع من البداية للنهاية بفواتير المرحلة الأولى ورمز QR وفواتير مبدئية وفوترة بالمراحل وتصدير PDF وإرسال عبر واتساب أو البريد.' } },
    inventory:  { name: { en: 'Inventory', ar: 'المخزون' }, cap: { en: 'Never start a print you can\u2019t finish', ar: 'لا تبدأ طباعة لا يمكنك إكمالها' }, text: { en: 'Track FDM spools and Resin bottles with auto-deduction on completion, FIFO cost, smart reorder alerts with draft purchase orders, drying logs and price history.', ar: 'تتبّع خيوط FDM وزجاجات الراتنج مع الخصم التلقائي عند الإكمال، تكلفة FIFO، تنبيهات إعادة طلب ذكية بأوامر شراء، سجلات التجفيف وسجل الأسعار.' } },
    analytics:  { name: { en: 'Analytics', ar: 'التحليلات' }, cap: { en: 'Know exactly where the money goes', ar: 'اعرف أين يذهب المال بالضبط' }, text: { en: 'Revenue trends, machine P&L, operator performance, filament usage, retention and a production heatmap — in Simple or Professional reporting modes, with end-of-day PDFs.', ar: 'اتجاهات الإيرادات، أرباح كل آلة، أداء المشغّلين، استهلاك الخيوط، الاحتفاظ وخريطة حرارية للإنتاج — بوضع بسيط أو احترافي، مع تقارير PDF لنهاية اليوم.' } },
    clients:    { name: { en: 'Clients', ar: 'العملاء' }, cap: { en: 'Turn buyers into regulars', ar: 'حوّل المشترين إلى عملاء دائمين' }, text: { en: 'Client profiles with credit limits, multi-currency, loyalty tiers with automatic discounts, a live customer portal with QR order tracking and an aged-receivables report.', ar: 'ملفات عملاء بحدود ائتمانية وتعدد عملات ومستويات ولاء بخصومات تلقائية، بوابة عملاء حيّة بتتبّع QR وتقرير الذمم المدينة.' } }
  };

  var lang = 'en', curKey = 'queue';

  function buildFeatures() {
    var grid = document.getElementById('featGrid');
    if (!grid) return;
    var html = '';
    for (var k = 0; k < FEATURES.length; k++) {
      var f = FEATURES[k];
      var n = (k + 1 < 10 ? '0' : '') + (k + 1);
      html += '<article class="feat">' +
        '<span class="num">' + n + '</span>' +
        '<div class="feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + f.i + '</svg></div>' +
        '<h3>' + f.t[lang] + '</h3><p>' + f.d[lang] + '</p></article>';
    }
    grid.innerHTML = html;
  }

  function buildTitle(name) { return 'Khayt — <b>' + name + '</b>'; }

  function paintCaption() {
    var s = SCREENS[curKey]; if (!s) return;
    var title = document.getElementById('galTitle');
    var capT = document.getElementById('capTitle');
    var capP = document.getElementById('capText');
    if (title) title.innerHTML = buildTitle(s.name[lang]);
    if (capT) capT.textContent = s.cap[lang];
    if (capP) capP.textContent = s.text[lang];
  }

  function applyLang(next) {
    lang = (next === 'ar') ? 'ar' : 'en';
    var html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    // static strings
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (DICT[key]) nodes[i].textContent = DICT[key][lang];
    }
    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlNodes.length; j++) {
      var hk = htmlNodes[j].getAttribute('data-i18n-html');
      if (DICT[hk]) htmlNodes[j].innerHTML = DICT[hk][lang];
    }
    buildFeatures();
    paintCaption();
    // nav toggle label
    var btn = document.getElementById('navLang');
    if (btn) btn.innerHTML = lang === 'ar' ? '<span>🌐</span> English' : '<span>🌐</span> العربية';
    // flip the invoice preview to match
    var card = document.getElementById('flipCard');
    var sw = document.getElementById('flipSwitch');
    if (card && sw) setFlip(card, sw, lang === 'ar');
    try { localStorage.setItem('khayt-lang', lang); } catch (e) {}
  }

  /* ---------- Screen gallery ---------- */
  function tabs() {
    var bar = document.getElementById('tabs');
    if (!bar) return;
    var img = document.getElementById('galImg');
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.tab');
      if (!btn) return;
      var key = btn.getAttribute('data-key');
      if (!SCREENS[key]) return;
      curKey = key;
      var all = bar.querySelectorAll('.tab');
      for (var i = 0; i < all.length; i++) all[i].setAttribute('aria-selected', 'false');
      btn.setAttribute('aria-selected', 'true');
      img.style.opacity = '0';
      setTimeout(function () {
        img.src = 'screenshots/screenshot-' + key + '.png';
        img.alt = 'Khayt ' + SCREENS[key].name.en + ' screenshot';
        img.style.opacity = '1';
      }, 180);
      paintCaption();
    });
  }

  /* ---------- Bilingual flip card ---------- */
  function flip() {
    var sw = document.getElementById('flipSwitch');
    var card = document.getElementById('flipCard');
    if (!sw || !card) return;
    sw.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      setFlip(card, sw, btn.getAttribute('data-side') === 'back');
    });
  }
  function setFlip(card, sw, back) {
    card.classList.toggle('flipped', back);
    var btns = sw.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++)
      btns[i].classList.toggle('on', (btns[i].getAttribute('data-side') === 'back') === back);
  }

  /* ---------- Nav: scroll state + mobile menu ---------- */
  function nav() {
    var el = document.getElementById('nav');
    var burger = document.getElementById('burger');
    function onScroll() { el.classList.toggle('scrolled', window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (burger) burger.addEventListener('click', function () { el.classList.toggle('open'); });
    var links = document.getElementById('navLinks');
    if (links) links.addEventListener('click', function (e) { if (e.target.tagName === 'A') el.classList.remove('open'); });
  }

  /* ---------- Language toggle ---------- */
  function langToggle() {
    var btn = document.getElementById('navLang');
    if (!btn) return;
    btn.addEventListener('click', function () { applyLang(lang === 'ar' ? 'en' : 'ar'); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = 'en';
    try { saved = localStorage.getItem('khayt-lang') || 'en'; } catch (e) {}
    tabs();
    flip();
    nav();
    langToggle();
    applyLang(saved);
  });
})();
