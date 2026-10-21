(function () {
  "use strict";

  if (window.CresarisI18n) return;

  var STORAGE_KEY = "cresaris-lang";
  var SUPPORTED = ["ru", "en", "kk"];
  var MESSAGES = {
  "ru": {
    "common.langLabel": "Язык сайта",
    "nav.open": "Открыть меню",
    "nav.close": "Закрыть меню",
    "form.error.name": "Укажите имя.",
    "form.error.company": "Укажите компанию.",
    "form.error.email.required": "Укажите email.",
    "form.error.email.format": "Проверьте формат email.",
    "form.error.amount": "Выберите диапазон суммы.",
    "form.error.sector": "Выберите сектор.",
    "form.error.consent": "Необходимо согласие на обработку данных.",
    "form.status.check": "Проверьте отмеченные поля.",
    "form.status.mailto": "Открываем почтовый клиент. Если он не открылся, напишите на invest.capital.center@gmail.com.",
    "form.status.sending": "Отправляем заявку...",
    "form.status.sent": "Спасибо. Заявка получена. Мы вернёмся в течение двух рабочих дней.",
    "form.status.failed": "Не удалось отправить форму. Напишите нам напрямую на invest.capital.center@gmail.com.",
    "mail.subject": "Заявка на финансирование: {company}",
    "mail.name": "Имя",
    "mail.company": "Компания",
    "mail.email": "Email",
    "mail.phone": "Телефон / Telegram",
    "mail.amount": "Сумма проекта",
    "mail.sector": "Сектор",
    "mail.message": "О проекте",
    "mail.notProvided": "не указан",
    "mail.notSpecified": "не указано",
    "mail.site": "Отправлено с сайта Cresaris Group."
  },
  "en": {
    "Перейти к содержанию": "Skip to content",
    "Навигация": "Navigation",
    "Практика": "Practice",
    "Условия": "Terms",
    "Процесс": "Process",
    "Секторы": "Sectors",
    "Вопросы": "Questions",
    "Обсудить проект": "Discuss a project",
    "Как мы работаем": "How we work",
    "Запросить звонок": "Request a call",
    "Запросить условия": "Request terms",
    "Запросить pipeline": "Request pipeline",
    "Telegram — по запросу": "Telegram on request",
    "На главную": "Back to home",
    "Политика конфиденциальности": "Privacy Policy",
    "Правовая информация": "Legal Information",
    "О нас": "About",
    "Фондам": "For funds",
    "Услуги": "Services",
    "Параметры": "Terms",
    "Компания": "Company",
    "Связь": "Contact",
    "Языки": "Languages",
    "Русский · Қазақша · English": "Russian · Kazakh · English",
    "© 2026 Cresaris Group. Astana, Kazakhstan.": "© 2026 Cresaris Group. Astana, Kazakhstan.",
    "При расхождении языковых версий приоритет имеет русская версия.": "If the language versions diverge, the Russian version prevails.",
    "Обновлено: 21 октября 2026 года": "Updated: 21 October 2026",
    "AIFC": "AIFC",
    "Astana · AIFC": "Astana · AIFC",
    "Astana · Kazakhstan": "Astana · Kazakhstan",
    "nav.home": "Cresaris Group — home",
    "nav.main": "Main navigation",
    "nav.mobile": "Mobile navigation",
    "nav.footer": "Footer navigation",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "nav.fullSite": "Cresaris Group — full site",
    "common.langLabel": "Site language",
    "common.tagline": "Cross-border capital.<br>Institutional discipline.",
    "home.globe.aria": "Interactive capital routes globe: Astana, Moscow, London, Hong Kong, Frankfurt, Dubai and Singapore",
    "home.about.factsAria": "Key facts",
    "Astana · AIFC · Cross-border capital": "Astana · AIFC · Cross-border capital",
    "home.hero.title": "Charting the <em>route</em> of capital.",
    "Cresaris Group — брокерский дом, который соединяет бизнес с иностранными институциональными фондами. От первичного анализа до первого транша.": "Cresaris Group is a brokerage house connecting businesses with international institutional funds, from first review to first tranche.",
    "NDA before data": "NDA before data",
    "KYC / AML by design": "KYC / AML by design",
    "English law structuring": "English law structuring",
    "Capital routes": "Capital routes",
    "Source → structure → capital": "Source → structure → capital",
    "Целевой размер": "Target size",
    "Структура": "Structure",
    "Стоимость капитала": "Cost of capital",
    "Горизонт": "Horizon",
    "6 траншей": "6 tranches",
    "5–8%": "5–8%",
    "до 5 лет": "up to 5 years",
    "Institutional capital": "Institutional capital",
    "Project finance": "Project finance",
    "Cross-border structuring": "Cross-border structuring",
    "Due diligence": "Due diligence",
    "Astana": "Astana",
    "Moscow": "Moscow",
    "London": "London",
    "Hong Kong": "Hong Kong",
    "Dubai": "Dubai",
    "Singapore": "Singapore",
    "Позиция": "Position",
    "home.about.title": "We do not promise capital.<br>We make the project <em>ready for it.</em>",
    "Институциональный инвестор видит тысячи проектов. До инвестиционного комитета доходят единицы. Наша работа — сократить этот путь и снять вопросы, которые обычно остаются без ответа.": "An institutional investor sees thousands of projects. Only a few reach the investment committee. Our job is to shorten that path and answer the questions that usually go unanswered.",
    "Cresaris Group работает на стороне проекта: проверяет экономику, собирает структуру, готовит data room и ведёт сделку до закрытия. Мы не заменяем фонд и не принимаем инвестиционное решение — мы делаем так, чтобы это решение стало возможным.": "Cresaris Group works on the project side: it tests the economics, assembles the structure, prepares the data room and manages the deal through closing. We do not replace the fund or make the investment decision. We make that decision possible.",
    "Посмотреть процесс": "View the process",
    "Фокус": "Focus",
    "Сделки от $35 млн": "Deals from $35M",
    "География": "Geography",
    "Центральная Азия · Евразия · международные юрисдикции": "Central Asia · Eurasia · international jurisdictions",
    "Принцип": "Principle",
    "Compliance before capital": "Compliance before capital",
    "«Капитал приходит туда, где снижена неопределённость».": "“Capital flows where uncertainty is reduced.”",
    "Cresaris Group · Investment philosophy": "Cresaris Group · Investment philosophy",
    "home.practice.title": "From idea to tranche: <em>six functions.</em>",
    "Закрываем разрыв между проектом и требованиями институционального инвестора. Работаем как внешний investment desk — до, во время и после сделки.": "We close the gap between a project and the requirements of an institutional investor. We work as an external investment desk before, during and after the deal.",
    "Pre-screening": "Pre-screening",
    "Проверяем экономику проекта, модель, обеспеченность и реалистичность сроков. Отсекаем то, что не пройдёт инвестиционный комитет.": "We test the project economics, model, security and timeline. We screen out what will not pass the investment committee.",
    "Structuring": "Structuring",
    "Собираем финансовую и юридическую архитектуру: инструмент, транши, ковенанты, денежный поток и юрисдикцию.": "We build the financial and legal architecture: instrument, tranches, covenants, cash flow and jurisdiction.",
    "Fund matching": "Fund matching",
    "Подбираем фонды и family offices под сектор, чек и риск-профиль. Работаем с профилем инвестора, а не с массовой рассылкой.": "We match funds and family offices to the sector, ticket size and risk profile. We work with the investor profile, not a mass mailing.",
    "Координируем финансовый, юридический и технический аудит. Готовим data room и отвечаем на вопросы инвесторов.": "We coordinate financial, legal and technical due diligence. We prepare the data room and answer investor questions.",
    "Execution": "Execution",
    "Ведём переговоры, term sheet, документацию и закрытие. Сопровождаем KYC/AML и банковский комплаенс.": "We manage negotiations, the term sheet, documentation and closing. We support KYC/AML and bank compliance.",
    "Monitoring": "Monitoring",
    "Помогаем с отчётностью и контролем исполнения после первого транша. Остаёмся рядом до финальной выборки.": "We help with reporting and performance control after the first tranche. We stay involved through the final drawdown.",
    "Рамка": "Framework",
    "home.terms.title": "A structure the <em>investor understands.</em>",
    "Ориентировочные параметры рамочной сделки. Финальные условия фиксируются в term sheet после due diligence и комплаенса.": "Indicative parameters of a framework transaction. Final terms are fixed in the term sheet after due diligence and compliance.",
    "Indicative terms": "Indicative terms",
    "Мы не подгоняем проект под шаблон. Сумма, график и обеспечение собираются вокруг денежного потока и риска конкретного проекта.": "We do not force a project into a template. The amount, schedule and security are built around the cash flow and risk of the specific project.",
    "Целевой размер проекта": "Target project size",
    "Инструмент": "Instrument",
    "Unsecured targeted investment": "Unsecured targeted investment",
    "Срок": "Term",
    "5–8% годовых": "5–8% per annum",
    "Выборка": "Drawdown",
    "6 равных траншей": "6 equal tranches",
    "Первый транш": "First tranche",
    "1–1,5 месяца после закрытия": "1–1.5 months after closing",
    "Начало выплат": "First repayment",
    "через 3–6 месяцев": "in 3–6 months",
    "Комиссия за организацию": "Arrangement fee",
    "3% (USD)": "3% (USD)",
    "Аванс на структурирование": "Structuring retainer",
    "от $50 000": "from $50,000",
    "Параметры носят ориентировочный характер и не являются офертой. Сумма аванса, график, комиссии и обеспечительные условия зависят от масштаба и сложности сделки и раскрываются до подписания. Финансирование не гарантируется и предоставляется исключительно по решению инвестора.": "The parameters are indicative and do not constitute an offer. The retainer, schedule, fees and security terms depend on the scale and complexity of the transaction and are disclosed before signing. Financing is not guaranteed and is provided solely at the investor's discretion.",
    "home.process.title": "Five steps. <em>One route.</em>",
    "Прозрачный процесс с понятными точками контроля. На каждом этапе вы знаете, что происходит, кто принимает решение и что нужно сделать дальше.": "A transparent process with clear control points. At every stage you know what is happening, who decides and what needs to happen next.",
    "Знакомство и NDA": "Introduction and NDA",
    "1–2 недели": "1–2 weeks",
    "Обсуждаем проект, цели и параметры. Подписываем NDA до передачи чувствительных данных.": "We discuss the project, goals and parameters. We sign an NDA before sharing sensitive data.",
    "Анализируем модель, рынок, команду и структуру. Даём заключение: идём дальше или нет.": "We analyse the model, market, team and structure. We give a clear view: proceed or stop.",
    "Структурирование": "Structuring",
    "2–4 недели": "2–4 weeks",
    "Формируем term sheet, финансовую модель, схему траншей и пакет документов для инвестора.": "We prepare the term sheet, financial model, tranche schedule and investor document pack.",
    "Due diligence и compliance": "Due diligence and compliance",
    "4–8 недель": "4–8 weeks",
    "Проходим аудит, KYC/AML, санкционный скрининг и инвестиционный комитет фонда.": "We go through audit, KYC/AML, sanctions screening and the fund's investment committee.",
    "Закрытие и первый транш": "Closing and first tranche",
    "1–1,5 месяца": "1–1.5 months",
    "Подписываем документы, открываем счёт и сопровождаем перевод. После закрытия — отчётность и мониторинг.": "We sign the documents, open the account and support the transfer. After closing: reporting and monitoring.",
    "Сроки ориентировочные и зависят от готовности проекта, скорости комплаенса и решения инвестиционного комитета.": "Timelines are indicative and depend on project readiness, compliance speed and the investment committee's decision.",
    "home.sectors.title": "We speak the <em>investor's language.</em>",
    "Фокусируемся на капиталоёмких проектах с понятной экономикой и спросом на международном рынке.": "We focus on capital-intensive projects with clear economics and international market demand.",
    "Энергетика и инфраструктура": "Energy and infrastructure",
    "Генерация, сети, промышленная инфраструктура и проекты устойчивого развития.": "Generation, grids, industrial infrastructure and sustainable development projects.",
    "Агропромышленный комплекс": "Agribusiness",
    "Переработка, хранение, ирригация и экспортные цепочки с добавленной стоимостью.": "Processing, storage, irrigation and value-added export chains.",
    "Логистика и транспорт": "Logistics and transport",
    "Транспортные коридоры, терминалы, склады и сервисы на маршрутах Евразии.": "Transport corridors, terminals, warehouses and services along Eurasian routes.",
    "Промышленность": "Industry",
    "Производство, локализация, импортозамещение и промышленная кооперация.": "Manufacturing, localisation, import substitution and industrial cooperation.",
    "Горнодобывающий сектор": "Mining",
    "Добыча, переработка и сервисная инфраструктура для сырьевых проектов.": "Extraction, processing and service infrastructure for resource projects.",
    "Недвижимость и девелопмент": "Real estate and development",
    "Коммерческие объекты, индустриальные парки и проекты с арендным потоком.": "Commercial assets, industrial parks and income-producing projects.",
    "Юрисдикция": "Jurisdiction",
    "home.jurisdiction.title": "Astana is not the periphery.<br><em>It is the crossroads.</em>",
    "Международный финансовый центр «Астана» работает по принципам английского права, с собственным судом и регулятором AFSA. Здесь встречаются капитал из Европы, Ближнего Востока и Азии и проекты Центральной Азии.": "The Astana International Financial Centre operates on English law principles, with its own court and the AFSA regulator. Capital from Europe, the Middle East and Asia meets Central Asian projects here.",
    "Для инвестора это означает привычную правовую среду и понятную структуру сделки. Для проекта — доступ к международному капиталу без потери локальной экспертизы.": "For the investor, this means a familiar legal environment and a clear transaction structure. For the project, access to international capital without losing local expertise.",
    "Публичный реестр AFSA": "AFSA public register",
    "управляющих фондами и активами в AIFC": "fund and asset managers in AIFC",
    "объём активов под управлением": "assets under management",
    "английское право и собственный суд": "English law and its own court",
    "Источник: данные AIFC, конец 2025 года. Проверка лицензий и разрешённых видов деятельности контрагентов — в публичном реестре AFSA. Cresaris Group не является органом AIFC.": "Source: AIFC data, end-2025. Licences and permitted activities of counterparties should be checked in the AFSA public register. Cresaris Group is not an AIFC body.",
    "Стороны сделки": "Transaction parties",
    "home.who.title": "Two sides. <em>One interest.</em>",
    "Для проектов": "For projects",
    "Если у вас есть экономика, а не только идея.": "If you have economics, not just an idea.",
    "Проект от $35 млн с понятным денежным потоком": "A project from $35M with a clear cash flow",
    "Готовность к аудиту, KYC/AML и раскрытию бенефициаров": "Readiness for audit, KYC/AML and beneficiary disclosure",
    "Собственник или sponsor с mandate на переговоры": "An owner or sponsor with a mandate to negotiate",
    "Горизонт финансирования до 5 лет": "Financing horizon of up to 5 years",
    "Для фондов": "For funds",
    "Если вы ищете сделки в Центральной Азии.": "If you are looking for deals in Central Asia.",
    "Локальный sourcing и первичный отбор": "Local sourcing and initial screening",
    "Секторная экспертиза и доступ к sponsor'ам": "Sector expertise and access to sponsors",
    "Сопровождение до closing и после": "Support through closing and beyond",
    "Прозрачный data room и compliance-файл": "A transparent data room and compliance file",
    "Финансирование": "Financing",
    "home.funds.title": "International funds",
    "Работаем с международными фондами и институциональными инвесторами. Состав пула формируется под каждую сделку.": "We work with international funds and institutional investors. The pool is assembled for each transaction.",
    "home.faq.title": "The essentials, <em>briefly.</em>",
    "Если вашего вопроса нет в списке, напишите нам. Ответим честно — даже если ответ «не подходит».": "If your question is not listed, write to us. We will answer honestly, even if the answer is no.",
    "Какие проекты вы рассматриваете?": "What projects do you consider?",
    "Проекты от $35 млн с понятной бизнес-моделью и горизонтом до 5 лет. Приоритет — энергетика, инфраструктура, АПК, логистика, промышленность, горнодобыча и недвижимость. Решение по каждому проекту индивидуально.": "Projects from $35M with a clear business model and a horizon of up to 5 years. Priority: energy, infrastructure, agribusiness, logistics, industry, mining and real estate. Each project is assessed individually.",
    "Гарантируете ли вы финансирование?": "Do you guarantee financing?",
    "Нет. Решение принимает инвестор после due diligence, KYC/AML и инвестиционного комитета. Мы отвечаем за качество подготовки и процесс, но не за решение фонда. Любые обещания гарантированного капитала — повод насторожиться.": "No. The investor decides after due diligence, KYC/AML and the investment committee. We are responsible for the quality of preparation and the process, not for the fund's decision. Any promise of guaranteed capital should be treated with caution.",
    "Работаете ли вы с проектами из России?": "Do you work with projects from Russia?",
    "Каждая юрисдикция и структура проверяются на соответствие применимому праву, санкционным режимам и политикам фондов. Решение принимается индивидуально; гарантий нет. Мы не обходим ограничения и не структурируем сделки, направленные на их нарушение.": "Each jurisdiction and structure is checked for compliance with applicable law, sanctions regimes and fund policies. Decisions are made individually; there are no guarantees. We do not circumvent restrictions or structure transactions intended to breach them.",
    "Какие документы нужны на старте?": "What documents are needed at the start?",
    "Краткий teaser, финансовая модель или бюджет, юридические документы по проекту и информация о бенефициарах. Полный список раскрывается после NDA и зависит от стадии проекта.": "A short teaser, financial model or budget, project legal documents and information on beneficiaries. The full list is disclosed after the NDA and depends on the project stage.",
    "Сколько стоит сопровождение?": "How much does support cost?",
    "Комиссия за организацию — 3% от суммы сделки (USD). Аванс на анализ и структурирование — от $50 000. Точные условия фиксируются в договоре; расходы на аудит и юридическое сопровождение обсуждаются отдельно.": "The arrangement fee is 3% of the transaction amount (USD). The retainer for analysis and structuring is from $50,000. Final terms are fixed in the agreement; audit and legal costs are discussed separately.",
    "Сколько занимает сделка?": "How long does a transaction take?",
    "Ориентировочно от 3 до 6 месяцев — в зависимости от готовности проекта, скорости due diligence и комплаенса. Первый транш обычно поступает через 1–1,5 месяца после закрытия.": "Approximately 3 to 6 months, depending on project readiness, due diligence and compliance speed. The first tranche usually arrives 1–1.5 months after closing.",
    "Кто ваши инвесторы?": "Who are your investors?",
    "Международные фонды и институциональные инвесторы. Конкретный пул формируется под сделку; имена и мандаты раскрываются в процессе, в рамках NDA.": "International funds and institutional investors. The specific pool is assembled for each transaction; names and mandates are disclosed during the process under NDA.",
    "Как обеспечивается конфиденциальность?": "How is confidentiality maintained?",
    "NDA до передачи чувствительных данных, ограниченный data room и доступ по принципу need-to-know. Мы не публикуем проекты и не передаём материалы третьим лицам без письменного согласия.": "An NDA before sensitive data, a restricted data room and need-to-know access. We do not publish projects or share materials with third parties without written consent.",
    "Контакт": "Contact",
    "home.contact.title": "Tell us about the project.<br><em>Let us start with the essentials.</em>",
    "Коротко опишите проект и ожидаемую сумму. Мы вернёмся в течение двух рабочих дней и предложим следующий шаг.": "Briefly describe the project and the expected amount. We will respond within two business days and suggest the next step.",
    "Астана, Международный финансовый центр «Астана»": "Astana, Astana International Financial Centre",
    "Материалы передаются только после NDA. Мы не запрашиваем предоплату через мессенджеры и не ведём переговоры вне официальных каналов.": "Materials are shared only after an NDA. We do not request prepayment via messengers and do not negotiate outside official channels.",
    "Имя": "Name",
    "Телефон или Telegram": "Phone or Telegram",
    "Сумма проекта": "Project amount",
    "Сектор": "Sector",
    "О проекте": "About the project",
    "Как к вам обращаться": "How should we address you?",
    "Название компании": "Company name",
    "Стадия, география, цель финансирования": "Stage, geography, financing purpose",
    "Выберите диапазон": "Select a range",
    "Выберите сектор": "Select a sector",
    "до $35 млн": "up to $35M",
    "$35–100 млн": "$35–100M",
    "$100–500 млн": "$100–500M",
    "$500 млн — $1,5 млрд": "$500M–$1.5B",
    "более $1,5 млрд": "over $1.5B",
    "пока не определена": "not yet determined",
    "Другое": "Other",
    "form.consent": "I agree to the <a href=\"privacy.html\">Privacy Policy</a> and to the processing of my data to respond to my request.",
    "Отправить заявку": "Send request",
    "Отправка не является офертой или гарантией финансирования. Все сделки проходят due diligence и комплаенс.": "Submitting this form is not an offer or a guarantee of financing. All transactions are subject to due diligence and compliance.",
    "form.name.placeholder": "How should we address you?",
    "form.company.placeholder": "Company name",
    "form.message.placeholder": "Stage, geography, financing purpose",
    "form.error.name": "Enter your name.",
    "form.error.company": "Enter your company.",
    "form.error.email.required": "Enter your email.",
    "form.error.email.format": "Check the email format.",
    "form.error.amount": "Select an amount range.",
    "form.error.sector": "Select a sector.",
    "form.error.consent": "Consent to data processing is required.",
    "form.status.check": "Check the highlighted fields.",
    "form.status.mailto": "Opening your email client. If it does not open, write to invest.capital.center@gmail.com.",
    "form.status.sending": "Sending your request...",
    "form.status.sent": "Thank you. Your request has been received. We will respond within two business days.",
    "form.status.failed": "We could not send the form. Write to us directly at invest.capital.center@gmail.com.",
    "mail.subject": "Financing request — {company}",
    "mail.name": "Name",
    "mail.company": "Company",
    "mail.email": "Email",
    "mail.phone": "Phone / Telegram",
    "mail.amount": "Project amount",
    "mail.sector": "Sector",
    "mail.message": "About the project",
    "mail.notProvided": "not provided",
    "mail.notSpecified": "not specified",
    "mail.site": "Sent from the Cresaris Group website.",
    "Cresaris Group не является инвестиционным фондом, банком или биржей. Информация на сайте не является офертой, инвестиционной рекомендацией или гарантией финансирования. Все сделки подлежат due diligence, KYC/AML и одобрению инвестора. Регуляторный статус компании и лицензии контрагентов раскрываются по запросу.": "Cresaris Group is not an investment fund, bank or exchange. The information on this website is not an offer, investment recommendation or guarantee of financing. All transactions are subject to due diligence, KYC/AML and investor approval. The company's regulatory status and counterparty licences are disclosed on request.",
    "Cresaris Group не является инвестиционным фондом, банком или биржей. Информация на сайте не является офертой, инвестиционной рекомендацией или гарантией финансирования. Все сделки подлежат due diligence, KYC/AML и одобрению инвестора.": "Cresaris Group is not an investment fund, bank or exchange. The information on this website is not an offer, investment recommendation or guarantee of financing. All transactions are subject to due diligence, KYC/AML and investor approval.",
    "Политика конфиденциальности — Cresaris Group": "Privacy Policy — Cresaris Group",
    "Как Cresaris Group обрабатывает и защищает персональные данные, полученные через сайт.": "How Cresaris Group processes and protects personal data received through the website.",
    "1. Общие положения": "1. General provisions",
    "Настоящая политика описывает, как Cresaris Group (далее — «Cresaris Group», «мы») собирает, использует и защищает информацию, которую вы передаёте через сайт cresaris.group, по электронной почте или в рамках первичного обсуждения проекта.": "This policy describes how Cresaris Group (the “Company”, “we”) collects, uses and protects information you provide through the cresaris.group website, by email or during an initial project discussion.",
    "2. Какие данные мы получаем": "2. What data we receive",
    "Мы обрабатываем только те данные, которые вы предоставляете добровольно:": "We process only the data you provide voluntarily:",
    "имя, компания, должность;": "name, company, position;",
    "email, телефон или аккаунт в мессенджере;": "email, phone or messenger account;",
    "сведения о проекте, его стадии, географии и ожидаемой сумме финансирования;": "information about the project, its stage, geography and expected financing amount;",
    "иные материалы, которые вы направляете для предварительного анализа.": "other materials you send for preliminary review.",
    "Хостинг-провайдер может автоматически фиксировать технические данные: IP-адрес, тип браузера, время запроса и адрес страницы. Сайт не использует рекламные трекеры. Технические cookies могут применяться для корректной работы сайта.": "The hosting provider may automatically log technical data: IP address, browser type, request time and page URL. The website does not use advertising trackers. Technical cookies may be used for the website to function correctly.",
    "3. Зачем мы используем данные": "3. Why we use data",
    "чтобы ответить на ваш запрос и обсудить проект;": "to respond to your request and discuss the project;",
    "чтобы провести первичный анализ и подготовить предложение о сотрудничестве;": "to conduct an initial analysis and prepare a cooperation proposal;",
    "чтобы выполнить требования KYC/AML и применимого законодательства после начала работы;": "to meet KYC/AML and applicable legal requirements after work begins;",
    "чтобы улучшать сайт и качество коммуникации.": "to improve the website and the quality of communication.",
    "4. Правовые основания": "4. Legal bases",
    "Обработка осуществляется на основании вашего согласия, наших законных интересов (ответ на запрос, развитие бизнеса) и требований законодательства, включая комплаенс-обязанности.": "Processing is based on your consent, our legitimate interests (responding to a request, business development) and legal requirements, including compliance obligations.",
    "5. Передача данных": "5. Data sharing",
    "Мы не продаём персональные данные. Доступ к материалам проекта может быть предоставлен потенциальным инвесторам и профессиональным консультантам только после подписания NDA и с вашего согласия. Мы также можем привлекать поставщиков услуг (хостинг, IT, аудит), которые обязаны обеспечивать конфиденциальность. Передача государственным органам возможна только в случаях, предусмотренных законом.": "We do not sell personal data. Access to project materials may be given to potential investors and professional advisers only after an NDA is signed and with your consent. We may also engage service providers (hosting, IT, audit) who are required to maintain confidentiality. Disclosure to public authorities is possible only where required by law.",
    "6. Срок хранения": "6. Retention",
    "Мы храним данные столько, сколько необходимо для целей обработки, исполнения договора и соблюдения законодательных требований. После этого данные удаляются или обезличиваются.": "We retain data for as long as necessary for the purposes of processing, performance of a contract and compliance with legal requirements. After that, data is deleted or anonymised.",
    "7. Ваши права": "7. Your rights",
    "privacy.rights": "You have the right to request access to your data, its correction or deletion, to withdraw consent to processing and to object to the use of data. To do so, write to <a href=\"mailto:invest.capital.center@gmail.com\">invest.capital.center@gmail.com</a>. We will respond within a reasonable period established by applicable law.",
    "8. Безопасность": "8. Security",
    "Мы ограничиваем доступ к данным, используем защищённые каналы передачи и организационные меры защиты. При этом ни один способ передачи или хранения информации не обеспечивает абсолютной безопасности.": "We restrict access to data, use secure transmission channels and organisational safeguards. However, no method of transmitting or storing information provides absolute security.",
    "9. Контакты": "9. Contacts",
    "privacy.contacts": "For data processing matters: <a href=\"mailto:invest.capital.center@gmail.com\">invest.capital.center@gmail.com</a>. Address: Astana, Astana International Financial Centre, Republic of Kazakhstan.",
    "10. Изменения": "10. Changes",
    "Мы можем обновлять эту политику. Актуальная версия всегда размещается на этой странице. Дата последнего обновления указана в начале документа.": "We may update this policy. The current version is always published on this page. The date of the last update is shown at the beginning of the document.",
    "Правовая информация — Cresaris Group": "Legal Information — Cresaris Group",
    "Правовая информация об услугах Cresaris Group: характер сайта, комплаенс, ограничения и порядок работы.": "Legal information about Cresaris Group services: nature of the website, compliance, limitations and working procedure.",
    "1. Информационный характер сайта": "1. Nature of the website",
    "Сайт cresaris.group содержит общую информацию о деятельности Cresaris Group, подходе к работе и ориентировочных параметрах финансирования. Материалы сайта не являются публичной офертой, инвестиционной рекомендацией, финансовой консультацией или предложением заключить договор.": "The cresaris.group website contains general information about Cresaris Group's activities, approach and indicative financing parameters. The materials on the website are not a public offer, investment recommendation, financial advice or an offer to conclude an agreement.",
    "2. Отсутствие гарантии финансирования": "2. No guarantee of financing",
    "Cresaris Group не гарантирует предоставление финансирования. Решение о сделке принимает инвестор по итогам due diligence, KYC/AML, санкционного скрининга и инвестиционного комитета. Любые сроки, суммы, ставки и структуры, указанные на сайте, носят ориентировочный характер и могут быть изменены.": "Cresaris Group does not guarantee the provision of financing. The decision on a transaction is made by the investor following due diligence, KYC/AML, sanctions screening and the investment committee. Any timelines, amounts, rates and structures indicated on the website are indicative and may change.",
    "3. Кто может обращаться": "3. Who may apply",
    "Мы работаем с компаниями и project sponsors, действующими в правовом поле, готовыми раскрыть бенефициаров и пройти комплаенс. Мы вправе отказать в рассмотрении проекта без объяснения причин, в том числе при наличии регуляторных, санкционных или репутационных рисков.": "We work with companies and project sponsors operating within the legal framework, ready to disclose beneficiaries and complete compliance. We may decline to consider a project without giving reasons, including where regulatory, sanctions or reputational risks exist.",
    "4. Комплаенс и санкции": "4. Compliance and sanctions",
    "Все сделки проверяются на соответствие применимому праву, санкционным режимам и политикам инвесторов. Мы не участвуем в схемах, направленных на обход ограничений, сокрытие бенефициаров или легализацию доходов. Перечень необходимых документов определяется индивидуально.": "All transactions are checked for compliance with applicable law, sanctions regimes and investor policies. We do not participate in schemes aimed at circumventing restrictions, concealing beneficiaries or laundering proceeds. The list of required documents is determined individually.",
    "5. Услуги и договор": "5. Services and agreement",
    "Услуги оказываются только на основании отдельного письменного договора. Параметры вознаграждения, аванса, распределения расходов, конфиденциальности и ответственности фиксируются в договоре и приложениях к нему. Информация на сайте не заменяет условия такого договора.": "Services are provided only under a separate written agreement. The terms of remuneration, retainer, cost allocation, confidentiality and liability are fixed in the agreement and its annexes. Information on the website does not replace the terms of such agreement.",
    "6. Интеллектуальная собственность": "6. Intellectual property",
    "Тексты, дизайн, логотип, графика и иные материалы сайта принадлежат Cresaris Group или используются на законных основаниях. Копирование и коммерческое использование материалов без письменного согласия не допускаются.": "The texts, design, logo, graphics and other materials on the website belong to Cresaris Group or are used on lawful grounds. Copying and commercial use of materials without written consent are not permitted.",
    "7. Ограничение ответственности": "7. Limitation of liability",
    "Мы стремимся поддерживать информацию актуальной, но не гарантируем полноту и точность всех материалов. Cresaris Group не несёт ответственности за решения, принятые на основании информации с сайта, а также за действия третьих лиц и внешних ресурсов, на которые ведут ссылки.": "We strive to keep information current but do not guarantee the completeness or accuracy of all materials. Cresaris Group is not liable for decisions made on the basis of information from the website, or for the actions of third parties and external resources linked to it.",
    "8. Внешние ссылки": "8. External links",
    "Сайт может содержать ссылки на AIFC, AFSA и другие ресурсы. Мы не контролируем их содержание и не отвечаем за их актуальность. Проверка лицензий и разрешённых видов деятельности контрагентов проводится в публичных реестрах.": "The website may contain links to AIFC, AFSA and other resources. We do not control their content and are not responsible for its currency. Licences and permitted activities of counterparties should be checked in public registers.",
    "9. Применимое право": "9. Governing law",
    "Настоящая информация регулируется законодательством Республики Казахстан. Для отдельных сделок, структурируемых в юрисдикции МФЦА, может применяться английское право и юрисдикция судов МФЦА — в соответствии с условиями конкретного договора.": "This information is governed by the law of the Republic of Kazakhstan. For certain transactions structured in the AIFC jurisdiction, English law and AIFC court jurisdiction may apply in accordance with the terms of the specific agreement.",
    "terms.contacts": "Questions about legal information: <a href=\"mailto:invest.capital.center@gmail.com\">invest.capital.center@gmail.com</a>. Address: Astana, Astana International Financial Centre, Republic of Kazakhstan.",
    "Cresaris Group — онлайн-визитка": "Cresaris Group — online card",
    "Онлайн-визитка Cresaris Group: капитал для проектов от $35 млн. Брокерский дом в Астане, AIFC — от первичного анализа до первого транша.": "Cresaris Group online card: capital for projects from $35M. Brokerage house in Astana, AIFC, from first review to first tranche.",
    "Брокерский дом · Cross-border capital": "Brokerage house · Cross-border capital",
    "card.title": "Capital for projects <em>from&nbsp;$35&nbsp;M.</em>",
    "Соединяем бизнес в Евразии с иностранными институциональными фондами — от первичного анализа до первого транша.": "We connect businesses across Eurasia with international institutional funds, from first review to first tranche.",
    "Размер сделки": "Transaction size",
    "Полная презентация": "Full presentation",
    "Не является офертой или гарантией финансирования. Все сделки проходят due diligence и комплаенс.": "This is not an offer or a guarantee of financing. All transactions are subject to due diligence and compliance."
  },
  "kk": {
    "Перейти к содержанию": "Мазмұнға өту",
    "Навигация": "Навигация",
    "Практика": "Тәжірибе",
    "Условия": "Шарттар",
    "Процесс": "Процесс",
    "Секторы": "Секторлар",
    "Вопросы": "Сұрақтар",
    "Обсудить проект": "Жобаны талқылау",
    "Как мы работаем": "Біз қалай жұмыс істейміз",
    "Запросить звонок": "Қоңырау сұрау",
    "Запросить условия": "Шарттарды сұрау",
    "Запросить pipeline": "Pipeline сұрау",
    "Telegram — по запросу": "Telegram сұраныс бойынша",
    "На главную": "Басты бетке",
    "Политика конфиденциальности": "Құпиялылық саясаты",
    "Правовая информация": "Құқықтық ақпарат",
    "О нас": "Біз туралы",
    "Фондам": "Қорларға",
    "Услуги": "Қызметтер",
    "Параметры": "Параметрлер",
    "Компания": "Компания",
    "Связь": "Байланыс",
    "Языки": "Тілдер",
    "Русский · Қазақша · English": "Орыс · Қазақ · Ағылшын",
    "© 2026 Cresaris Group. Astana, Kazakhstan.": "© 2026 Cresaris Group. Астана, Қазақстан.",
    "При расхождении языковых версий приоритет имеет русская версия.": "Тілдік нұсқалар арасында айырмашылық болса, орыс тіліндегі нұсқа басым болады.",
    "Обновлено: 21 октября 2026 года": "Жаңартылды: 2026 жылғы 21 қазан",
    "AIFC": "AIFC",
    "Astana · AIFC": "Астана · AIFC",
    "Astana · Kazakhstan": "Астана · Қазақстан",
    "nav.home": "Cresaris Group — басты бет",
    "nav.main": "Негізгі навигация",
    "nav.mobile": "Мобильді навигация",
    "nav.footer": "Төменгі навигация",
    "nav.open": "Мәзірді ашу",
    "nav.close": "Мәзірді жабу",
    "nav.fullSite": "Cresaris Group — толық сайт",
    "common.langLabel": "Сайт тілі",
    "common.tagline": "Трансшекаралық капитал.<br>Институционалдық тәртіп.",
    "home.globe.aria": "Капитал бағыттарының интерактивті глобусы: Астана, Мәскеу, Лондон, Гонконг, Франкфурт, Дубай және Сингапур",
    "home.about.factsAria": "Негізгі фактілер",
    "Astana · AIFC · Cross-border capital": "Астана · AIFC · Трансшекаралық капитал",
    "home.hero.title": "Капиталдың <em>бағытын</em> саламыз.",
    "Cresaris Group — брокерский дом, который соединяет бизнес с иностранными институциональными фондами. От первичного анализа до первого транша.": "Cresaris Group — бизнесті шетелдік институционалдық қорлармен байланыстыратын брокерлік үй. Алғашқы талдаудан бірінші траншқа дейін.",
    "NDA before data": "Деректерге дейін NDA",
    "KYC / AML by design": "KYC / AML бастапқы жобада",
    "English law structuring": "Ағылшын құқығы бойынша құрылымдау",
    "Capital routes": "Капитал бағыттары",
    "Source → structure → capital": "Көз → құрылым → капитал",
    "Целевой размер": "Мақсатты көлем",
    "Структура": "Құрылым",
    "Стоимость капитала": "Капитал құны",
    "Горизонт": "Мерзім",
    "6 траншей": "6 транш",
    "5–8%": "5–8%",
    "до 5 лет": "5 жылға дейін",
    "Institutional capital": "Институционалдық капитал",
    "Project finance": "Жобаны қаржыландыру",
    "Cross-border structuring": "Трансшекаралық құрылымдау",
    "Due diligence": "Due diligence",
    "Astana": "Астана",
    "Moscow": "Мәскеу",
    "London": "Лондон",
    "Hong Kong": "Гонконг",
    "Dubai": "Дубай",
    "Singapore": "Сингапур",
    "Позиция": "Ұстаным",
    "home.about.title": "Біз капиталға уәде бермейміз.<br>Жобаны <em>оған дайын</em> етеміз.",
    "Институциональный инвестор видит тысячи проектов. До инвестиционного комитета доходят единицы. Наша работа — сократить этот путь и снять вопросы, которые обычно остаются без ответа.": "Институционалдық инвестор мыңдаған жобаны көреді. Инвестициялық комитетке тек бірнешеуі жетеді. Біздің жұмысымыз — бұл жолды қысқартып, әдетте жауапсыз қалатын сұрақтарды ашу.",
    "Cresaris Group работает на стороне проекта: проверяет экономику, собирает структуру, готовит data room и ведёт сделку до закрытия. Мы не заменяем фонд и не принимаем инвестиционное решение — мы делаем так, чтобы это решение стало возможным.": "Cresaris Group жоба тарапында жұмыс істейді: экономиканы тексереді, құрылымды жинайды, data room дайындайды және мәмілені жабылуға дейін жүргізеді. Біз қорды алмастырмаймыз және инвестициялық шешім қабылдамаймыз. Біз бұл шешімді мүмкін етеміз.",
    "Посмотреть процесс": "Процесті көру",
    "Фокус": "Фокус",
    "Сделки от $35 млн": "$35 млн бастап мәмілелер",
    "География": "География",
    "Центральная Азия · Евразия · международные юрисдикции": "Орталық Азия · Еуразия · халықаралық юрисдикциялар",
    "Принцип": "Қағида",
    "Compliance before capital": "Капиталдан бұрын комплаенс",
    "«Капитал приходит туда, где снижена неопределённость».": "«Капитал белгісіздік азайған жерге келеді».",
    "Cresaris Group · Investment philosophy": "Cresaris Group · Investment philosophy",
    "home.practice.title": "Идеядан траншқа дейін: <em>алты функция.</em>",
    "Закрываем разрыв между проектом и требованиями институционального инвестора. Работаем как внешний investment desk — до, во время и после сделки.": "Жоба мен институционалдық инвестордың талаптары арасындағы алшақтықты жабамыз. Мәмілеге дейін, кезінде және кейін сыртқы investment desk ретінде жұмыс істейміз.",
    "Pre-screening": "Алдын ала іріктеу",
    "Проверяем экономику проекта, модель, обеспеченность и реалистичность сроков. Отсекаем то, что не пройдёт инвестиционный комитет.": "Жобаның экономикасын, моделін, қамтамасыз етілуін және мерзімдерінің шынайылығын тексереміз. Инвестициялық комитеттен өтпейтінін алып тастаймыз.",
    "Structuring": "Құрылымдау",
    "Собираем финансовую и юридическую архитектуру: инструмент, транши, ковенанты, денежный поток и юрисдикцию.": "Қаржылық және құқықтық архитектураны жинаймыз: құрал, транштар, ковенанттар, ақша ағыны және юрисдикция.",
    "Fund matching": "Қорларды сәйкестендіру",
    "Подбираем фонды и family offices под сектор, чек и риск-профиль. Работаем с профилем инвестора, а не с массовой рассылкой.": "Қорлар мен family offices-ті секторға, чекке және тәуекел профиліне сәйкестендіреміз. Жаппай таратылыммен емес, инвестор профилімен жұмыс істейміз.",
    "Координируем финансовый, юридический и технический аудит. Готовим data room и отвечаем на вопросы инвесторов.": "Қаржылық, құқықтық және техникалық due diligence-ті үйлестіреміз. Data room дайындап, инвесторлардың сұрақтарына жауап береміз.",
    "Execution": "Орындау",
    "Ведём переговоры, term sheet, документацию и закрытие. Сопровождаем KYC/AML и банковский комплаенс.": "Келіссөздерді, term sheet, құжаттаманы және closing-ті жүргіземіз. KYC/AML және банктік комплаенсті сүйемелдейміз.",
    "Monitoring": "Мониторинг",
    "Помогаем с отчётностью и контролем исполнения после первого транша. Остаёмся рядом до финальной выборки.": "Бірінші транштан кейін есептілік пен орындалуды бақылауға көмектесеміз. Соңғы іріктеуге дейін жанымызда боламыз.",
    "Рамка": "Шеңбер",
    "home.terms.title": "Инвестор <em>түсінетін құрылым.</em>",
    "Ориентировочные параметры рамочной сделки. Финальные условия фиксируются в term sheet после due diligence и комплаенса.": "Негіздемелік мәміленің индикативтік параметрлері. Соңғы шарттар due diligence және комплаенстен кейін term sheet-те бекітіледі.",
    "Indicative terms": "Индикативтік шарттар",
    "Мы не подгоняем проект под шаблон. Сумма, график и обеспечение собираются вокруг денежного потока и риска конкретного проекта.": "Жобаны қалыпқа күштеп салмаймыз. Сома, кесте және қамтамасыз ету нақты жобаның ақша ағыны мен тәуекеліне қарай құрылады.",
    "Целевой размер проекта": "Жобаның мақсатты көлемі",
    "Инструмент": "Құрал",
    "Unsecured targeted investment": "Қамтамасыз етілмеген мақсатты инвестиция",
    "Срок": "Мерзім",
    "5–8% годовых": "жылдық 5–8%",
    "Выборка": "Іріктеу",
    "6 равных траншей": "6 тең транш",
    "Первый транш": "Бірінші транш",
    "1–1,5 месяца после закрытия": "жабылғаннан кейін 1–1,5 ай",
    "Начало выплат": "Төлемдердің басталуы",
    "через 3–6 месяцев": "3–6 айдан кейін",
    "Комиссия за организацию": "Ұйымдастыру комиссиясы",
    "3% (USD)": "3% (USD)",
    "Аванс на структурирование": "Құрылымдау авансы",
    "от $50 000": "$50 000 бастап",
    "Параметры носят ориентировочный характер и не являются офертой. Сумма аванса, график, комиссии и обеспечительные условия зависят от масштаба и сложности сделки и раскрываются до подписания. Финансирование не гарантируется и предоставляется исключительно по решению инвестора.": "Параметрлер индикативтік сипатта және оферта болып табылмайды. Аванс мөлшері, кесте, комиссиялар және қамтамасыз ету шарттары мәміленің ауқымы мен күрделілігіне байланысты және қол қоюға дейін ашылады. Қаржыландыруға кепілдік берілмейді және тек инвестордың шешімімен ұсынылады.",
    "home.process.title": "Бес қадам. <em>Бір бағыт.</em>",
    "Прозрачный процесс с понятными точками контроля. На каждом этапе вы знаете, что происходит, кто принимает решение и что нужно сделать дальше.": "Бақылау нүктелері анық ашық процесс. Әр кезеңде не болып жатқанын, кім шешім қабылдайтынын және әрі қарай не істеу керектігін білесіз.",
    "Знакомство и NDA": "Танысу және NDA",
    "1–2 недели": "1–2 апта",
    "Обсуждаем проект, цели и параметры. Подписываем NDA до передачи чувствительных данных.": "Жобаны, мақсаттарды және параметрлерді талқылаймыз. Сезімтал деректерді бермес бұрын NDA жасаймыз.",
    "Анализируем модель, рынок, команду и структуру. Даём заключение: идём дальше или нет.": "Модельді, нарықты, команданы және құрылымды талдаймыз. Анық қорытынды береміз: әрі қарай жүреміз бе, жоқ па.",
    "Структурирование": "Құрылымдау",
    "2–4 недели": "2–4 апта",
    "Формируем term sheet, финансовую модель, схему траншей и пакет документов для инвестора.": "Term sheet, қаржылық модель, транш кестесі және инвесторға арналған құжаттар пакетін дайындаймыз.",
    "Due diligence и compliance": "Due diligence және комплаенс",
    "4–8 недель": "4–8 апта",
    "Проходим аудит, KYC/AML, санкционный скрининг и инвестиционный комитет фонда.": "Аудиттен, KYC/AML, санкциялық скринингтен және қордың инвестициялық комитетінен өтеміз.",
    "Закрытие и первый транш": "Жабылу және бірінші транш",
    "1–1,5 месяца": "1–1,5 ай",
    "Подписываем документы, открываем счёт и сопровождаем перевод. После закрытия — отчётность и мониторинг.": "Құжаттарға қол қоямыз, шот ашамыз және аударымды сүйемелдейміз. Жабылғаннан кейін: есептілік және мониторинг.",
    "Сроки ориентировочные и зависят от готовности проекта, скорости комплаенса и решения инвестиционного комитета.": "Мерзімдер индикативтік және жобаның дайындығына, комплаенс жылдамдығына және инвестициялық комитеттің шешіміне байланысты.",
    "home.sectors.title": "Инвестордың <em>тілінде сөйлейміз.</em>",
    "Фокусируемся на капиталоёмких проектах с понятной экономикой и спросом на международном рынке.": "Экономикасы түсінікті және халықаралық нарықта сұранысы бар капиталды қажет ететін жобаларға назар аударамыз.",
    "Энергетика и инфраструктура": "Энергетика және инфрақұрылым",
    "Генерация, сети, промышленная инфраструктура и проекты устойчивого развития.": "Генерация, желілер, өнеркәсіптік инфрақұрылым және тұрақты даму жобалары.",
    "Агропромышленный комплекс": "Агроөнеркәсіптік кешен",
    "Переработка, хранение, ирригация и экспортные цепочки с добавленной стоимостью.": "Қайта өңдеу, сақтау, ирригация және қосылған құны бар экспорттық тізбектер.",
    "Логистика и транспорт": "Логистика және көлік",
    "Транспортные коридоры, терминалы, склады и сервисы на маршрутах Евразии.": "Көлік дәліздері, терминалдар, қоймалар және Еуразия бағыттарындағы сервистер.",
    "Промышленность": "Өнеркәсіп",
    "Производство, локализация, импортозамещение и промышленная кооперация.": "Өндіріс, локализация, импортты алмастыру және өнеркәсіптік кооперация.",
    "Горнодобывающий сектор": "Тау-кен секторы",
    "Добыча, переработка и сервисная инфраструктура для сырьевых проектов.": "Шикізат жобалары үшін өндіру, қайта өңдеу және сервистік инфрақұрылым.",
    "Недвижимость и девелопмент": "Жылжымайтын мүлік және девелопмент",
    "Коммерческие объекты, индустриальные парки и проекты с арендным потоком.": "Коммерциялық нысандар, индустриялық парктер және жалдау ағыны бар жобалар.",
    "Юрисдикция": "Юрисдикция",
    "home.jurisdiction.title": "Астана — шет емес.<br><em>Бұл — тоғыспа.</em>",
    "Международный финансовый центр «Астана» работает по принципам английского права, с собственным судом и регулятором AFSA. Здесь встречаются капитал из Европы, Ближнего Востока и Азии и проекты Центральной Азии.": "«Астана» халықаралық қаржы орталығы ағылшын құқығының қағидаттарымен, өз сотымен және AFSA реттеушісімен жұмыс істейді. Мұнда Еуропа, Таяу Шығыс және Азия капиталы Орталық Азия жобаларымен кездеседі.",
    "Для инвестора это означает привычную правовую среду и понятную структуру сделки. Для проекта — доступ к международному капиталу без потери локальной экспертизы.": "Инвестор үшін бұл таныс құқықтық орта және түсінікті мәміле құрылымы деген сөз. Жоба үшін жергілікті сараптаманы жоғалтпай халықаралық капиталға қолжетімділік.",
    "Публичный реестр AFSA": "AFSA жария тізілімі",
    "управляющих фондами и активами в AIFC": "AIFC-тегі қорлар мен активтерді басқарушылар",
    "объём активов под управлением": "басқарылатын активтер көлемі",
    "английское право и собственный суд": "ағылшын құқығы және жеке сот",
    "Источник: данные AIFC, конец 2025 года. Проверка лицензий и разрешённых видов деятельности контрагентов — в публичном реестре AFSA. Cresaris Group не является органом AIFC.": "Дереккөз: AIFC деректері, 2025 жылдың соңы. Контрагенттердің лицензиялары мен рұқсат етілген қызмет түрлерін AFSA жария тізілімінде тексеру қажет. Cresaris Group AIFC органы емес.",
    "Стороны сделки": "Мәміле тараптары",
    "home.who.title": "Екі тарап. <em>Бір мүдде.</em>",
    "Для проектов": "Жобалар үшін",
    "Если у вас есть экономика, а не только идея.": "Егер сізде тек идея емес, экономика болса.",
    "Проект от $35 млн с понятным денежным потоком": "$35 млн бастап ақша ағыны түсінікті жоба",
    "Готовность к аудиту, KYC/AML и раскрытию бенефициаров": "Аудитке, KYC/AML-ге және бенефициарларды ашуға дайындық",
    "Собственник или sponsor с mandate на переговоры": "Келіссөздерге мандаты бар меншік иесі немесе sponsor",
    "Горизонт финансирования до 5 лет": "5 жылға дейінгі қаржыландыру мерзімі",
    "Для фондов": "Қорлар үшін",
    "Если вы ищете сделки в Центральной Азии.": "Егер Орталық Азияда мәміле іздесеңіз.",
    "Локальный sourcing и первичный отбор": "Жергілікті sourcing және бастапқы іріктеу",
    "Секторная экспертиза и доступ к sponsor'ам": "Секторлық сараптама және sponsor-ларға қолжетімділік",
    "Сопровождение до closing и после": "Closing-ке дейін және кейін сүйемелдеу",
    "Прозрачный data room и compliance-файл": "Ашық data room және compliance-файл",
    "Финансирование": "Қаржыландыру",
    "home.funds.title": "Халықаралық қорлар",
    "Работаем с международными фондами и институциональными инвесторами. Состав пула формируется под каждую сделку.": "Халықаралық қорлармен және институционалдық инвесторлармен жұмыс істейміз. Пул әр мәміле үшін қалыптасады.",
    "home.faq.title": "Бастысы <em>қысқаша.</em>",
    "Если вашего вопроса нет в списке, напишите нам. Ответим честно — даже если ответ «не подходит».": "Сұрағыңыз тізімде болмаса, бізге жазыңыз. Жауап «сәйкес келмейді» болса да, адал жауап береміз.",
    "Какие проекты вы рассматриваете?": "Қандай жобаларды қарастырасыздар?",
    "Проекты от $35 млн с понятной бизнес-моделью и горизонтом до 5 лет. Приоритет — энергетика, инфраструктура, АПК, логистика, промышленность, горнодобыча и недвижимость. Решение по каждому проекту индивидуально.": "$35 млн бастап бизнес-моделі түсінікті және мерзімі 5 жылға дейінгі жобалар. Басымдық: энергетика, инфрақұрылым, АӨК, логистика, өнеркәсіп, тау-кен және жылжымайтын мүлік. Әр жоба жеке қарастырылады.",
    "Гарантируете ли вы финансирование?": "Қаржыландыруға кепілдік бересіздер ме?",
    "Нет. Решение принимает инвестор после due diligence, KYC/AML и инвестиционного комитета. Мы отвечаем за качество подготовки и процесс, но не за решение фонда. Любые обещания гарантированного капитала — повод насторожиться.": "Жоқ. Шешімді инвестор due diligence, KYC/AML және инвестициялық комитеттен кейін қабылдайды. Біз дайындық сапасы мен процесс үшін жауап береміз, қордың шешімі үшін емес. Кепілді капитал туралы кез келген уәде сақтық танытуға себеп.",
    "Работаете ли вы с проектами из России?": "Ресейден келген жобалармен жұмыс істейсіздер ме?",
    "Каждая юрисдикция и структура проверяются на соответствие применимому праву, санкционным режимам и политикам фондов. Решение принимается индивидуально; гарантий нет. Мы не обходим ограничения и не структурируем сделки, направленные на их нарушение.": "Әр юрисдикция мен құрылым қолданыстағы құқыққа, санкциялық режимдерге және қор саясаттарына сәйкестігі тұрғысынан тексеріледі. Шешім жеке қабылданады; кепілдік жоқ. Біз шектеулерді айналып өтпейміз және оларды бұзуға бағытталған мәмілелерді құрылымдамаймыз.",
    "Какие документы нужны на старте?": "Бастапқыда қандай құжаттар қажет?",
    "Краткий teaser, финансовая модель или бюджет, юридические документы по проекту и информация о бенефициарах. Полный список раскрывается после NDA и зависит от стадии проекта.": "Қысқа teaser, қаржылық модель немесе бюджет, жобаның құқықтық құжаттары және бенефициарлар туралы ақпарат. Толық тізім NDA-дан кейін ашылады және жобаның кезеңіне байланысты.",
    "Сколько стоит сопровождение?": "Сүйемелдеу қанша тұрады?",
    "Комиссия за организацию — 3% от суммы сделки (USD). Аванс на анализ и структурирование — от $50 000. Точные условия фиксируются в договоре; расходы на аудит и юридическое сопровождение обсуждаются отдельно.": "Ұйымдастыру комиссиясы — мәміле сомасының 3% (USD). Талдау және құрылымдау авансы — $50 000 бастап. Нақты шарттар шартта бекітіледі; аудит және заңдық сүйемелдеу шығындары бөлек талқыланады.",
    "Сколько занимает сделка?": "Мәміле қанша уақыт алады?",
    "Ориентировочно от 3 до 6 месяцев — в зависимости от готовности проекта, скорости due diligence и комплаенса. Первый транш обычно поступает через 1–1,5 месяца после закрытия.": "Шамамен 3–6 ай, жобаның дайындығына, due diligence және комплаенс жылдамдығына байланысты. Бірінші транш әдетте жабылғаннан кейін 1–1,5 айдан соң келеді.",
    "Кто ваши инвесторы?": "Сіздің инвесторларыңыз кімдер?",
    "Международные фонды и институциональные инвесторы. Конкретный пул формируется под сделку; имена и мандаты раскрываются в процессе, в рамках NDA.": "Халықаралық қорлар және институционалдық инвесторлар. Нақты пул әр мәміле үшін қалыптасады; атаулар мен мандаттар NDA шеңберінде процесс барысында ашылады.",
    "Как обеспечивается конфиденциальность?": "Құпиялылық қалай қамтамасыз етіледі?",
    "NDA до передачи чувствительных данных, ограниченный data room и доступ по принципу need-to-know. Мы не публикуем проекты и не передаём материалы третьим лицам без письменного согласия.": "Сезімтал деректерге дейін NDA, шектеулі data room және need-to-know қағидаты бойынша қолжетімділік. Жобаларды жарияламаймыз және материалдарды жазбаша келісімсіз үшінші тараптарға бермейміз.",
    "Контакт": "Байланыс",
    "home.contact.title": "Жоба туралы айтыңыз.<br><em>Бастысынан бастайық.</em>",
    "Коротко опишите проект и ожидаемую сумму. Мы вернёмся в течение двух рабочих дней и предложим следующий шаг.": "Жобаны және күтілетін соманы қысқаша сипаттаңыз. Екі жұмыс күні ішінде жауап беріп, келесі қадамды ұсынамыз.",
    "Астана, Международный финансовый центр «Астана»": "Астана, «Астана» халықаралық қаржы орталығы",
    "Материалы передаются только после NDA. Мы не запрашиваем предоплату через мессенджеры и не ведём переговоры вне официальных каналов.": "Материалдар тек NDA-дан кейін беріледі. Біз мессенджерлер арқылы алдын ала төлем сұрамаймыз және ресми арналардан тыс келіссөз жүргізбейміз.",
    "Имя": "Аты",
    "Телефон или Telegram": "Телефон немесе Telegram",
    "Сумма проекта": "Жоба сомасы",
    "Сектор": "Сектор",
    "О проекте": "Жоба туралы",
    "Как к вам обращаться": "Сізге қалай жүгінуіміз керек?",
    "Название компании": "Компания атауы",
    "Стадия, география, цель финансирования": "Кезеңі, географиясы, қаржыландыру мақсаты",
    "Выберите диапазон": "Аралықты таңдаңыз",
    "Выберите сектор": "Секторды таңдаңыз",
    "до $35 млн": "$35 млн дейін",
    "$35–100 млн": "$35–100 млн",
    "$100–500 млн": "$100–500 млн",
    "$500 млн — $1,5 млрд": "$500 млн — $1,5 млрд",
    "более $1,5 млрд": "$1,5 млрд астам",
    "пока не определена": "әлі анықталмаған",
    "Другое": "Басқа",
    "form.consent": "Мен <a href=\"privacy.html\">құпиялылық саясатымен</a> және сұранысыма жауап беру үшін деректерді өңдеумен келісемін.",
    "Отправить заявку": "Өтінім жіберу",
    "Отправка не является офертой или гарантией финансирования. Все сделки проходят due diligence и комплаенс.": "Жіберу оферта немесе қаржыландыру кепілдігі болып табылмайды. Барлық мәмілелер due diligence және комплаенстен өтеді.",
    "form.name.placeholder": "Сізге қалай жүгінуіміз керек?",
    "form.company.placeholder": "Компания атауы",
    "form.message.placeholder": "Кезеңі, географиясы, қаржыландыру мақсаты",
    "form.error.name": "Атыңызды енгізіңіз.",
    "form.error.company": "Компанияңызды енгізіңіз.",
    "form.error.email.required": "Email енгізіңіз.",
    "form.error.email.format": "Email пішімін тексеріңіз.",
    "form.error.amount": "Сома аралығын таңдаңыз.",
    "form.error.sector": "Секторды таңдаңыз.",
    "form.error.consent": "Деректерді өңдеуге келісім қажет.",
    "form.status.check": "Белгіленген өрістерді тексеріңіз.",
    "form.status.mailto": "Пошта клиентін ашамыз. Егер ол ашылмаса, invest.capital.center@gmail.com мекенжайына жазыңыз.",
    "form.status.sending": "Өтінім жіберілуде...",
    "form.status.sent": "Рақмет. Өтінім қабылданды. Екі жұмыс күні ішінде жауап береміз.",
    "form.status.failed": "Форманы жіберу мүмкін болмады. Бізге тікелей invest.capital.center@gmail.com мекенжайына жазыңыз.",
    "mail.subject": "Қаржыландыруға өтінім — {company}",
    "mail.name": "Аты",
    "mail.company": "Компания",
    "mail.email": "Email",
    "mail.phone": "Телефон / Telegram",
    "mail.amount": "Жоба сомасы",
    "mail.sector": "Сектор",
    "mail.message": "Жоба туралы",
    "mail.notProvided": "көрсетілмеген",
    "mail.notSpecified": "көрсетілмеген",
    "mail.site": "Cresaris Group сайтынан жіберілді.",
    "Cresaris Group не является инвестиционным фондом, банком или биржей. Информация на сайте не является офертой, инвестиционной рекомендацией или гарантией финансирования. Все сделки подлежат due diligence, KYC/AML и одобрению инвестора. Регуляторный статус компании и лицензии контрагентов раскрываются по запросу.": "Cresaris Group инвестициялық қор, банк немесе биржа болып табылмайды. Сайттағы ақпарат оферта, инвестициялық ұсыным немесе қаржыландыру кепілдігі болып табылмайды. Барлық мәмілелер due diligence, KYC/AML және инвестордың мақұлдауына жатады. Компанияның реттеушілік мәртебесі мен контрагенттердің лицензиялары сұраныс бойынша ашылады.",
    "Cresaris Group не является инвестиционным фондом, банком или биржей. Информация на сайте не является офертой, инвестиционной рекомендацией или гарантией финансирования. Все сделки подлежат due diligence, KYC/AML и одобрению инвестора.": "Cresaris Group инвестициялық қор, банк немесе биржа болып табылмайды. Сайттағы ақпарат оферта, инвестициялық ұсыным немесе қаржыландыру кепілдігі болып табылмайды. Барлық мәмілелер due diligence, KYC/AML және инвестордың мақұлдауына жатады.",
    "Политика конфиденциальности — Cresaris Group": "Құпиялылық саясаты — Cresaris Group",
    "Как Cresaris Group обрабатывает и защищает персональные данные, полученные через сайт.": "Cresaris Group сайт арқылы алынған жеке деректерді қалай өңдейді және қорғайды.",
    "1. Общие положения": "1. Жалпы ережелер",
    "Настоящая политика описывает, как Cresaris Group (далее — «Cresaris Group», «мы») собирает, использует и защищает информацию, которую вы передаёте через сайт cresaris.group, по электронной почте или в рамках первичного обсуждения проекта.": "Бұл саясат Cresaris Group («Cresaris Group», «біз») cresaris.group сайты, электрондық пошта немесе жобаны алғашқы талқылау барысында берген ақпаратты қалай жинайтынын, пайдаланатынын және қорғайтынын сипаттайды.",
    "2. Какие данные мы получаем": "2. Қандай деректерді аламыз",
    "Мы обрабатываем только те данные, которые вы предоставляете добровольно:": "Біз тек өз еркіңізбен ұсынған деректерді өңдейміз:",
    "имя, компания, должность;": "аты, компания, лауазымы;",
    "email, телефон или аккаунт в мессенджере;": "email, телефон немесе мессенджер аккаунты;",
    "сведения о проекте, его стадии, географии и ожидаемой сумме финансирования;": "жоба туралы мәліметтер, оның кезеңі, географиясы және күтілетін қаржыландыру сомасы;",
    "иные материалы, которые вы направляете для предварительного анализа.": "алдын ала талдау үшін жіберген өзге материалдар.",
    "Хостинг-провайдер может автоматически фиксировать технические данные: IP-адрес, тип браузера, время запроса и адрес страницы. Сайт не использует рекламные трекеры. Технические cookies могут применяться для корректной работы сайта.": "Хостинг-провайдер техникалық деректерді автоматты түрде тіркеуі мүмкін: IP-мекенжай, браузер түрі, сұраныс уақыты және бет мекенжайы. Сайт жарнамалық трекерлерді пайдаланбайды. Техникалық cookies сайттың дұрыс жұмысы үшін қолданылуы мүмкін.",
    "3. Зачем мы используем данные": "3. Деректерді не үшін пайдаланамыз",
    "чтобы ответить на ваш запрос и обсудить проект;": "сұранысыңызға жауап беру және жобаны талқылау үшін;",
    "чтобы провести первичный анализ и подготовить предложение о сотрудничестве;": "алғашқы талдау жүргізу және ынтымақтастық ұсынысын дайындау үшін;",
    "чтобы выполнить требования KYC/AML и применимого законодательства после начала работы;": "жұмыс басталғаннан кейін KYC/AML және қолданыстағы заңнама талаптарын орындау үшін;",
    "чтобы улучшать сайт и качество коммуникации.": "сайтты және коммуникация сапасын жақсарту үшін.",
    "4. Правовые основания": "4. Құқықтық негіздер",
    "Обработка осуществляется на основании вашего согласия, наших законных интересов (ответ на запрос, развитие бизнеса) и требований законодательства, включая комплаенс-обязанности.": "Өңдеу сіздің келісіміңіз, біздің заңды мүдделеріміз (сұранысқа жауап, бизнесті дамыту) және комплаенс міндеттемелерін қоса алғанда, заңнама талаптары негізінде жүзеге асырылады.",
    "5. Передача данных": "5. Деректерді беру",
    "Мы не продаём персональные данные. Доступ к материалам проекта может быть предоставлен потенциальным инвесторам и профессиональным консультантам только после подписания NDA и с вашего согласия. Мы также можем привлекать поставщиков услуг (хостинг, IT, аудит), которые обязаны обеспечивать конфиденциальность. Передача государственным органам возможна только в случаях, предусмотренных законом.": "Біз жеке деректерді сатпаймыз. Жоба материалдарына қолжетімділік әлеуетті инвесторлар мен кәсіби кеңесшілерге тек NDA жасалғаннан кейін және сіздің келісіміңізбен берілуі мүмкін. Сондай-ақ құпиялылықты қамтамасыз етуге міндетті қызмет провайдерлерін (хостинг, IT, аудит) тартуымыз мүмкін. Мемлекеттік органдарға беру тек заңда қарастырылған жағдайларда мүмкін.",
    "6. Срок хранения": "6. Сақтау мерзімі",
    "Мы храним данные столько, сколько необходимо для целей обработки, исполнения договора и соблюдения законодательных требований. После этого данные удаляются или обезличиваются.": "Біз деректерді өңдеу мақсаттары, шартты орындау және заңнамалық талаптарды сақтау үшін қажетті уақытқа дейін сақтаймыз. Одан кейін деректер жойылады немесе иесіздендіріледі.",
    "7. Ваши права": "7. Сіздің құқықтарыңыз",
    "privacy.rights": "Сіз өз деректеріңізге қолжетімділікті, оларды түзетуді немесе жоюды сұрауға, өңдеуге берген келісімді қайтарып алуға және деректерді пайдалануға қарсылық білдіруге құқылысыз. Ол үшін <a href=\"mailto:invest.capital.center@gmail.com\">invest.capital.center@gmail.com</a> мекенжайына жазыңыз. Қолданыстағы құқықта белгіленген ақылға қонымды мерзімде жауап береміз.",
    "8. Безопасность": "8. Қауіпсіздік",
    "Мы ограничиваем доступ к данным, используем защищённые каналы передачи и организационные меры защиты. При этом ни один способ передачи или хранения информации не обеспечивает абсолютной безопасности.": "Біз деректерге қолжетімділікті шектейміз, қорғалған беру арналарын және ұйымдастырушылық қорғау шараларын қолданамыз. Алайда ақпаратты берудің немесе сақтаудың ешбір әдісі абсолютті қауіпсіздікті қамтамасыз етпейді.",
    "9. Контакты": "9. Байланыс",
    "privacy.contacts": "Деректерді өңдеу мәселелері бойынша: <a href=\"mailto:invest.capital.center@gmail.com\">invest.capital.center@gmail.com</a>. Мекенжай: Астана, «Астана» халықаралық қаржы орталығы, Қазақстан Республикасы.",
    "10. Изменения": "10. Өзгерістер",
    "Мы можем обновлять эту политику. Актуальная версия всегда размещается на этой странице. Дата последнего обновления указана в начале документа.": "Біз бұл саясатты жаңартуымыз мүмкін. Өзекті нұсқа әрқашан осы бетте орналасады. Соңғы жаңарту күні құжаттың басында көрсетіледі.",
    "Правовая информация — Cresaris Group": "Құқықтық ақпарат — Cresaris Group",
    "Правовая информация об услугах Cresaris Group: характер сайта, комплаенс, ограничения и порядок работы.": "Cresaris Group қызметтері туралы құқықтық ақпарат: сайттың сипаты, комплаенс, шектеулер және жұмыс тәртібі.",
    "1. Информационный характер сайта": "1. Сайттың ақпараттық сипаты",
    "Сайт cresaris.group содержит общую информацию о деятельности Cresaris Group, подходе к работе и ориентировочных параметрах финансирования. Материалы сайта не являются публичной офертой, инвестиционной рекомендацией, финансовой консультацией или предложением заключить договор.": "cresaris.group сайты Cresaris Group қызметі, жұмыс тәсілі және қаржыландырудың индикативтік параметрлері туралы жалпы ақпаратты қамтиды. Сайт материалдары жария оферта, инвестициялық ұсыным, қаржылық кеңес немесе шарт жасасу ұсынысы болып табылмайды.",
    "2. Отсутствие гарантии финансирования": "2. Қаржыландыруға кепілдіктің болмауы",
    "Cresaris Group не гарантирует предоставление финансирования. Решение о сделке принимает инвестор по итогам due diligence, KYC/AML, санкционного скрининга и инвестиционного комитета. Любые сроки, суммы, ставки и структуры, указанные на сайте, носят ориентировочный характер и могут быть изменены.": "Cresaris Group қаржыландыру беруге кепілдік бермейді. Мәміле туралы шешімді инвестор due diligence, KYC/AML, санкциялық скрининг және инвестициялық комитет нәтижелері бойынша қабылдайды. Сайтта көрсетілген кез келген мерзім, сома, мөлшерлеме және құрылым индикативтік сипатта және өзгертілуі мүмкін.",
    "3. Кто может обращаться": "3. Кімдер жүгіне алады",
    "Мы работаем с компаниями и project sponsors, действующими в правовом поле, готовыми раскрыть бенефициаров и пройти комплаенс. Мы вправе отказать в рассмотрении проекта без объяснения причин, в том числе при наличии регуляторных, санкционных или репутационных рисков.": "Біз құқықтық өрісте әрекет ететін, бенефициарларды ашуға және комплаенстен өтуге дайын компаниялармен және project sponsors-тармен жұмыс істейміз. Себебін түсіндірмей-ақ жобаны қарастырудан бас тартуға құқылымыз, оның ішінде реттеушілік, санкциялық немесе беделдік тәуекелдер болған жағдайда.",
    "4. Комплаенс и санкции": "4. Комплаенс және санкциялар",
    "Все сделки проверяются на соответствие применимому праву, санкционным режимам и политикам инвесторов. Мы не участвуем в схемах, направленных на обход ограничений, сокрытие бенефициаров или легализацию доходов. Перечень необходимых документов определяется индивидуально.": "Барлық мәмілелер қолданыстағы құқыққа, санкциялық режимдерге және инвесторлардың саясаттарына сәйкестігі тұрғысынан тексеріледі. Біз шектеулерді айналып өтуге, бенефициарларды жасыруға немесе табысты заңдастыруға бағытталған схемаларға қатыспаймыз. Қажетті құжаттар тізімі жеке анықталады.",
    "5. Услуги и договор": "5. Қызметтер және шарт",
    "Услуги оказываются только на основании отдельного письменного договора. Параметры вознаграждения, аванса, распределения расходов, конфиденциальности и ответственности фиксируются в договоре и приложениях к нему. Информация на сайте не заменяет условия такого договора.": "Қызметтер тек жеке жазбаша шарт негізінде көрсетіледі. Сыйақы, аванс, шығындарды бөлу, құпиялылық және жауапкершілік шарттары шартта және оның қосымшаларында бекітіледі. Сайттағы ақпарат мұндай шарттың талаптарын алмастырмайды.",
    "6. Интеллектуальная собственность": "6. Зияткерлік меншік",
    "Тексты, дизайн, логотип, графика и иные материалы сайта принадлежат Cresaris Group или используются на законных основаниях. Копирование и коммерческое использование материалов без письменного согласия не допускаются.": "Сайттың мәтіндері, дизайны, логотипі, графикасы және өзге материалдары Cresaris Group-қа тиесілі немесе заңды негізде пайдаланылады. Материалдарды жазбаша келісімсіз көшіру және коммерциялық пайдалануға жол берілмейді.",
    "7. Ограничение ответственности": "7. Жауапкершілікті шектеу",
    "Мы стремимся поддерживать информацию актуальной, но не гарантируем полноту и точность всех материалов. Cresaris Group не несёт ответственности за решения, принятые на основании информации с сайта, а также за действия третьих лиц и внешних ресурсов, на которые ведут ссылки.": "Біз ақпаратты өзекті ұстауға тырысамыз, бірақ барлық материалдардың толықтығы мен дәлдігіне кепілдік бермейміз. Cresaris Group сайттағы ақпарат негізінде қабылданған шешімдер үшін, сондай-ақ үшінші тараптар мен сілтемелер арқылы өтетін сыртқы ресурстардың әрекеттері үшін жауапты емес.",
    "8. Внешние ссылки": "8. Сыртқы сілтемелер",
    "Сайт может содержать ссылки на AIFC, AFSA и другие ресурсы. Мы не контролируем их содержание и не отвечаем за их актуальность. Проверка лицензий и разрешённых видов деятельности контрагентов проводится в публичных реестрах.": "Сайтта AIFC, AFSA және басқа ресурстарға сілтемелер болуы мүмкін. Біз олардың мазмұнын бақыламаймыз және өзектілігі үшін жауапты емеспіз. Контрагенттердің лицензиялары мен рұқсат етілген қызмет түрлері жария тізілімдерде тексеріледі.",
    "9. Применимое право": "9. Қолданылатын құқық",
    "Настоящая информация регулируется законодательством Республики Казахстан. Для отдельных сделок, структурируемых в юрисдикции МФЦА, может применяться английское право и юрисдикция судов МФЦА — в соответствии с условиями конкретного договора.": "Бұл ақпарат Қазақстан Республикасының заңнамасымен реттеледі. AIFC юрисдикциясында құрылымдалатын жекелеген мәмілелер үшін нақты шарттың талаптарына сәйкес ағылшын құқығы және AIFC соттарының юрисдикциясы қолданылуы мүмкін.",
    "terms.contacts": "Құқықтық ақпарат бойынша сұрақтар: <a href=\"mailto:invest.capital.center@gmail.com\">invest.capital.center@gmail.com</a>. Мекенжай: Астана, «Астана» халықаралық қаржы орталығы, Қазақстан Республикасы.",
    "Cresaris Group — онлайн-визитка": "Cresaris Group — онлайн визитка",
    "Онлайн-визитка Cresaris Group: капитал для проектов от $35 млн. Брокерский дом в Астане, AIFC — от первичного анализа до первого транша.": "Cresaris Group онлайн визиткасы: $35 млн бастап жобаларға капитал. Астанадағы брокерлік үй, AIFC — алғашқы талдаудан бірінші траншқа дейін.",
    "Брокерский дом · Cross-border capital": "Брокерлік үй · Cross-border capital",
    "card.title": "Жобаларға <em>$35&nbsp;млн-нан&nbsp;бастап капитал.</em>",
    "Соединяем бизнес в Евразии с иностранными институциональными фондами — от первичного анализа до первого транша.": "Еуразиядағы бизнесті шетелдік институционалдық қорлармен байланыстырамыз: алғашқы талдаудан бірінші траншқа дейін.",
    "Размер сделки": "Мәміле мөлшері",
    "Полная презентация": "Толық презентация",
    "Не является офертой или гарантией финансирования. Все сделки проходят due diligence и комплаенс.": "Оферта немесе қаржыландыру кепілдігі болып табылмайды. Барлық мәмілелер due diligence және комплаенстен өтеді."
  }
};
  var PAGE_META = {
  "home": {
    "ru": {
      "title": "Cresaris Group — капитал для проектов от $35 млн | Astana",
      "description": "Cresaris Group — брокерский дом в Астане. Помогаем бизнесу привлекать финансирование от иностранных институциональных фондов: от первичного анализа до первого транша.",
      "ogTitle": "Cresaris Group — маршрут капитала",
      "ogDescription": "Соединяем проекты в Евразии с иностранными институциональными фондами. Целевой размер сделки — от $35 млн до $1,5 млрд.",
      "imageAlt": "Cresaris Group — маршрут капитала",
      "ogLocale": "ru_RU"
    },
    "en": {
      "title": "Cresaris Group — capital for projects from $35M | Astana",
      "description": "Cresaris Group is a brokerage house in Astana. We help businesses raise financing from international institutional funds, from first review to first tranche.",
      "ogTitle": "Cresaris Group — the route of capital",
      "ogDescription": "We connect projects across Eurasia with international institutional funds. Target transaction size: $35M to $1.5B.",
      "imageAlt": "Cresaris Group — the route of capital",
      "ogLocale": "en_US"
    },
    "kk": {
      "title": "Cresaris Group — $35 млн бастап жобаларға капитал | Astana",
      "description": "Cresaris Group — Астанадағы брокерлік үй. Бизнеске шетелдік институционалдық қорлардан қаржыландыру тартуға көмектесеміз: алғашқы талдаудан бірінші траншқа дейін.",
      "ogTitle": "Cresaris Group — капитал бағыты",
      "ogDescription": "Еуразиядағы жобаларды шетелдік институционалдық қорлармен байланыстырамыз. Мәміленің мақсатты мөлшері — $35 млн-нан $1,5 млрд-қа дейін.",
      "imageAlt": "Cresaris Group — капитал бағыты",
      "ogLocale": "kk_KZ"
    }
  },
  "privacy": {
    "ru": {
      "title": "Политика конфиденциальности — Cresaris Group",
      "description": "Как Cresaris Group обрабатывает и защищает персональные данные, полученные через сайт."
    },
    "en": {
      "title": "Privacy Policy — Cresaris Group",
      "description": "How Cresaris Group processes and protects personal data received through the website."
    },
    "kk": {
      "title": "Құпиялылық саясаты — Cresaris Group",
      "description": "Cresaris Group сайт арқылы алынған жеке деректерді қалай өңдейді және қорғайды."
    }
  },
  "terms": {
    "ru": {
      "title": "Правовая информация — Cresaris Group",
      "description": "Правовая информация об услугах Cresaris Group: характер сайта, комплаенс, ограничения и порядок работы."
    },
    "en": {
      "title": "Legal Information — Cresaris Group",
      "description": "Legal information about Cresaris Group services: nature of the website, compliance, limitations and working procedure."
    },
    "kk": {
      "title": "Құқықтық ақпарат — Cresaris Group",
      "description": "Cresaris Group қызметтері туралы құқықтық ақпарат: сайттың сипаты, комплаенс, шектеулер және жұмыс тәртібі."
    }
  },
  "card": {
    "ru": {
      "title": "Cresaris Group — онлайн-визитка",
      "description": "Онлайн-визитка Cresaris Group: капитал для проектов от $35 млн. Брокерский дом в Астане, AIFC — от первичного анализа до первого транша.",
      "ogTitle": "Cresaris Group — онлайн-визитка",
      "ogDescription": "Капитал для проектов от $35 млн. Брокерский дом в Астане, AIFC.",
      "imageAlt": "Cresaris Group — маршрут капитала",
      "ogLocale": "ru_RU"
    },
    "en": {
      "title": "Cresaris Group — online card",
      "description": "Cresaris Group online card: capital for projects from $35M. Brokerage house in Astana, AIFC, from first review to first tranche.",
      "ogTitle": "Cresaris Group — online card",
      "ogDescription": "Capital for projects from $35M. Brokerage house in Astana, AIFC.",
      "imageAlt": "Cresaris Group — the route of capital",
      "ogLocale": "en_US"
    },
    "kk": {
      "title": "Cresaris Group — онлайн визитка",
      "description": "Cresaris Group онлайн визиткасы: $35 млн бастап жобаларға капитал. Астанадағы брокерлік үй, AIFC — алғашқы талдаудан бірінші траншқа дейін.",
      "ogTitle": "Cresaris Group — онлайн визитка",
      "ogDescription": "$35 млн бастап жобаларға капитал. Астанадағы брокерлік үй, AIFC.",
      "imageAlt": "Cresaris Group — капитал бағыты",
      "ogLocale": "kk_KZ"
    }
  }
};

  var currentLang = "ru";
  var htmlRecords = [];
  var attrRecords = [];
  var textRecords = [];

  function getLang() {
    return currentLang;
  }

  function t(key, vars) {
    var table = MESSAGES[currentLang] || {};
    var value = table[key] || key;
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        value = value.split("{" + name + "}").join(String(vars[name]));
      });
    }
    return value;
  }

  function setMeta(selector, value) {
    if (!value) return;
    var el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  }

  function applyMeta(lang) {
    var page = document.body.getAttribute("data-page") || "home";
    var meta = PAGE_META[page] && PAGE_META[page][lang];
    if (!meta) return;

    if (meta.title) document.title = meta.title;
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.ogTitle);
    setMeta('meta[property="og:description"]', meta.ogDescription);
    setMeta('meta[property="og:image:alt"]', meta.imageAlt);
    setMeta('meta[property="og:locale"]', meta.ogLocale);
  }

  function collectRecords() {
    htmlRecords = [];
    attrRecords = [];
    textRecords = [];

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      htmlRecords.push({ el: el, original: el.innerHTML, key: el.getAttribute("data-i18n-html") });
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-placeholder], [data-i18n-aria-label], [data-i18n-title], [data-i18n-alt]"), function (el) {
      [
        ["data-i18n-placeholder", "placeholder"],
        ["data-i18n-aria-label", "aria-label"],
        ["data-i18n-title", "title"],
        ["data-i18n-alt", "alt"]
      ].forEach(function (pair) {
        var key = el.getAttribute(pair[0]);
        if (key) {
          attrRecords.push({ el: el, attr: pair[1], original: el.getAttribute(pair[1]) || "", key: key });
        }
      });
    });

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var value = node.nodeValue;
        if (!value || !value.trim()) return NodeFilter.FILTER_REJECT;
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("script, style, svg, [data-i18n-skip], [data-i18n-html]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    while (walker.nextNode()) {
      var node = walker.currentNode;
      var raw = node.nodeValue;
      var key = raw.trim();
      var enValue = MESSAGES.en && MESSAGES.en[key];
      var kkValue = MESSAGES.kk && MESSAGES.kk[key];
      if (!enValue && !kkValue) continue;
      textRecords.push({
        node: node,
        original: raw,
        key: key,
        leading: raw.match(/^\s*/)[0],
        trailing: raw.match(/\s*$/)[0]
      });
    }
  }

  function applyHtml(lang) {
    htmlRecords.forEach(function (record) {
      if (lang === "ru") {
        record.el.innerHTML = record.original;
      } else {
        var value = MESSAGES[lang] && MESSAGES[lang][record.key];
        if (value) record.el.innerHTML = value;
      }
    });
  }

  function applyAttrs(lang) {
    attrRecords.forEach(function (record) {
      if (lang === "ru") {
        record.el.setAttribute(record.attr, record.original);
      } else {
        var value = MESSAGES[lang] && MESSAGES[lang][record.key];
        if (value) record.el.setAttribute(record.attr, value);
      }
    });

    document.querySelectorAll(".lang-switch").forEach(function (el) {
      el.setAttribute("aria-label", t("common.langLabel"));
    });
  }

  function applyText(lang) {
    textRecords.forEach(function (record) {
      if (lang === "ru") {
        record.node.nodeValue = record.original;
      } else {
        var value = MESSAGES[lang] && MESSAGES[lang][record.key];
        if (value) record.node.nodeValue = record.leading + value + record.trailing;
      }
    });
  }

  function updateSwitches(lang) {
    document.querySelectorAll(".lang-btn").forEach(function (button) {
      var active = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function updateUrl(lang) {
    try {
      var url = new URL(window.location.href);
      if (lang === "ru") {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", lang);
      }
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (error) {
      // Ignore URL updates on file:// and restricted contexts.
    }
  }

  function applyLanguage(lang, persist) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "ru";
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    applyMeta(lang);
    applyHtml(lang);
    applyAttrs(lang);
    applyText(lang);
    updateSwitches(lang);

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch (error) {
        // Storage can be unavailable in private or file contexts.
      }
    }

    updateUrl(lang);
    document.dispatchEvent(new CustomEvent("cresaris:languagechange", { detail: { lang: lang } }));
  }

  function setLang(lang) {
    applyLanguage(lang, true);
  }

  function initialLang() {
    var params = new URLSearchParams(window.location.search);
    var requested = params.get("lang");
    if (requested && SUPPORTED.indexOf(requested) !== -1) return requested;
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (error) {
      // Ignore storage errors.
    }
    return "ru";
  }

  function init() {
    collectRecords();
    applyLanguage(initialLang(), false);

    document.querySelectorAll(".lang-btn").forEach(function (button) {
      button.addEventListener("click", function () {
        setLang(button.getAttribute("data-lang"));
      });
    });
  }

  window.CresarisI18n = {
    t: t,
    getLang: getLang,
    setLang: setLang,
    apply: applyLanguage
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
