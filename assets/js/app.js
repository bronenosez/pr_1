(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const body = document.body;

  /* ------------------------------------------------------------
     Content data
     ------------------------------------------------------------ */

  const products = {
    hydra: {
      brand: "LUMÉA LAB",
      name: "Hydra Veil",
      volume: "30 ml",
      price: "6 900 ₽",
      image: "assets/img/product-hydra.jpg",
      badge: "Бестселлер",
      desc: "Увлажняющая сыворотка с пятью формами гиалуроновой кислоты. Возвращает коже плотность, снимает ощущение стянутости и подготавливает её к следующим шагам ухода.",
      tags: ["Гиалуроновая кислота", "Пантенол", "Трегалоза", "Без ароматизаторов"],
      composition: "Aqua, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Panthenol, Trehalose, Glycerin, Ectoin, Allantoin, Sodium PCA, Citric Acid.",
      protocol: ["Нанесите 4–5 капель на влажную кожу после очищения.", "Распределите по лицу и шее, не растирая.", "Сверху — крем Barrier Reset для фиксации влаги.", "Используйте утром и вечером. SPF днём обязателен."],
      review: { author: "Марина, 34 года", text: "Беру второй флакон. Кожа перестала «скрипеть» после умывания уже на первой неделе." },
      service: "skin-reset"
    },
    barrier: {
      brand: "DERMA/9",
      name: "Barrier Reset",
      volume: "50 ml",
      price: "5 400 ₽",
      image: "assets/img/product-barrier.jpg",
      badge: "Для чувствительной кожи",
      desc: "Восстанавливающий крем с церамидами NP и ниацинамидом 4%. Помогает укрепить барьер, уменьшить реактивность и покраснения.",
      tags: ["Церамиды NP", "Ниацинамид 4%", "Сквалан", "Фрагранс-фри"],
      composition: "Aqua, Glycerin, Squalane, Niacinamide, Ceramide NP, Ceramide AP, Phytosphingosine, Cholesterol, Panthenol, Sodium Hyaluronate, Carbomer.",
      protocol: ["Наносите утром и вечером на очищенную кожу.", "Достаточно горошины на лицо, распределите лёгкими движениями.", "При выраженной сухости используйте более плотный слой вечером.", "Хорошо сочетается с Hydra Veil и SPF."],
      review: { author: "Ольга, 29 лет", text: "Единственный крем, после которого не щиплет. Ниацинамид здесь не раздражает." },
      service: "cleaning"
    },
    retinal: {
      brand: "LUMÉA LAB",
      name: "Retinal Night",
      volume: "30 ml",
      price: "8 200 ₽",
      image: "assets/img/product-retinal.jpg",
      badge: "После консультации",
      desc: "Ночная сыворотка с ретиналем 0,1% в инкапсулированной форме. Деликатно обновляет кожу и улучшает тон — без агрессивного старта.",
      tags: ["Ретиналь 0,1%", "Бисаболол", "Сквалан", "Инкапсуляция"],
      composition: "Caprylic/Capric Triglyceride, Squalane, Retinal, Bisabolol, Tocopherol, Lecithin, Helianthus Annuus Seed Oil, Glycine Soja Oil.",
      protocol: ["Начинайте с 2 раз в неделю, на сухую кожу.", "Нанесите 2–3 капли, избегая области вокруг глаз.", "Вечером после сыворотки обязательно используйте крем.", "Днём — SPF 50. Не сочетайте в один вечер с кислотами и скрабами."],
      review: { author: "Екатерина, 41 год", text: "Вводила по схеме Анны, без шелушения. К третьей неделе тон стал ровнее." },
      service: "prx",
      requiresConsult: true
    },
    spf: {
      brand: "UVÉA",
      name: "Sun Veil SPF 50",
      volume: "50 ml",
      price: "4 900 ₽",
      image: "assets/img/product-spf.jpg",
      badge: "Ежедневно",
      desc: "Невесомый солнцезащитный флюид с широким спектром UVA/UVB. Не оставляет белого следа, не скатывается и подходит под макияж.",
      tags: ["SPF 50", "UVA/UVB", "Витамин E", "Без белого следа"],
      composition: "Aqua, Homosalate, Octocrylene, Butyl Methoxydibenzoylmethane, Ethylhexyl Salicylate, Tocopheryl Acetate, Glycerin, Silica, Sodium Hyaluronate.",
      protocol: ["Наносите утром на кожу лица и шеи за 15 минут до выхода.", "Рекомендуемая норма — 1,2 мл (около двух линий по фаланге пальца).", "Обновляйте каждые 2–3 часа при пребывании на солнце.", "Используйте круглый год, независимо от погоды."],
      review: { author: "Алина, 26 лет", text: "На комбинированной коже не блестит и отлично сидит под тоном." },
      service: "skin-reset"
    }
  };

  const services = {
    "skin-reset": {
      name: "Skin Reset",
      subtitle: "Комплексный уход с диагностикой",
      duration: "90 минут",
      price: "8 500 ₽",
      image: "assets/img/service-main.jpg",
      tagline: "Кожа, которой снова спокойно",
      intro: "Базовый протокол для тех, кто хочет вернуть коже ресурс, а не просто «почистить лицо». Начинаем с диагностики, подбираем активы и завершаем защитой.",
      indications: ["Тусклый тон", "Обезвоженность", "Стресс и недосып", "Подготовка к событиям"],
      steps: ["Диагностика и обсуждение ухода", "Деликатное очищение и ферментная маска", "Активная сыворотка под задачу кожи", "Массаж и финальный SPF"],
      products: ["hydra", "barrier"]
    },
    cleaning: {
      name: "Атравматичная чистка",
      subtitle: "Деликатное очищение пор",
      duration: "60 минут",
      price: "6 200 ₽",
      image: "assets/img/service-detail.jpg",
      tagline: "Чисто, но без боли",
      intro: "Мягкий протокол очищения без агрессивного давления на кожу. Удаляем загрязнения, успокаиваем покраснения и восстанавливаем барьер.",
      indications: ["Расширенные поры", "Чёрные точки", "Комбинированная кожа", "Тусклый цвет лица"],
      steps: ["Очищение и размягчение кожи", "Деликатное очищение пор", "Успокаивающая маска", "Восстанавливающий крем и SPF"],
      products: ["barrier", "hydra"]
    },
    biorevitalization: {
      name: "Биоревитализация",
      subtitle: "Плотность и глубокое увлажнение",
      duration: "45 минут",
      price: "12 000 ₽",
      image: "assets/img/service-detail.jpg",
      tagline: "Влага там, где она нужна",
      intro: "Инъекционный протокол для выраженной обезвоженности и снижения тургора. Проводится только врачом после очной консультации и оценки показаний.",
      indications: ["Сильная сухость", "Мелкие морщины", "Снижение тургора", "Тусклая кожа"],
      steps: ["Консультация и оценка противопоказаний", "Анестезия и подготовка кожи", "Введение препарата", "Восстанавливающий уход"],
      products: ["hydra", "barrier"]
    },
    "prx": {
      name: "PRX-T33",
      subtitle: "Тон, плотность и сияние",
      duration: "40 минут",
      price: "7 900 ₽",
      image: "assets/img/service-main.jpg",
      tagline: "Обновление без шелушения",
      intro: "Биоревитализирующий пилинг на основе TCA. Работает с тоном и плотностью кожи, не вызывая выраженного шелушения. Протокол подбирается индивидуально.",
      indications: ["Постакне", "Неравномерный тон", "Возрастные изменения", "Снижение упругости"],
      steps: ["Диагностика и очищение", "Нанесение состава по протоколу", "Нейтрализация и успокаивающий уход", "Домашняя поддержка барьера"],
      products: ["retinal", "barrier"]
    }
  };

  const articles = {
    barrier: {
      image: "assets/img/blog-barrier.jpg",
      category: "Барьер",
      title: "Почему кожа «капризничает» осенью — и как вернуть ей спокойствие за 14 дней",
      meta: "Схема ухода · 8 минут · 12.11.2026",
      body: `
        <p>Покраснения, стянутость, странная реакция на привычный крем — осенью кожа часто ведёт себя иначе. Дело не в «слабом иммунитете» и не в том, что вы что-то делаете не так. Чаще всего это про барьер.</p>
        <h3>Что ломает барьер</h3>
        <p>Резкая смена температур, сухой воздух от отопления, слишком частые кислоты и агрессивное очищение. Даже любимый скраб может стать лишним, если кожа уже в стрессе.</p>
        <h3>Схема на 14 дней</h3>
        <p>Утром — только мягкое очищение, увлажняющая сыворотка и SPF. Вечером — крем с церамидами и ниацинамидом. Активы (кислоты, ретиноиды) на время убираем или сокращаем до одного раза в неделю.</p>
        <div class="article-modal__quote">Хорошая кожа — не про количество баночек, а про предсказуемость ухода.</div>
        <h3>Когда идти к врачу</h3>
        <p>Если через две недели покраснения усиливаются, появляется зуд или высыпания, не стоит продолжать эксперименты. Лучше прийти на диагностику: иногда за реактивностью стоит дерматит, который требует другого подхода.</p>
      `,
      products: ["barrier", "hydra"]
    },
    evening: {
      image: "assets/img/blog-retinoids.jpg",
      category: "Ритуалы",
      title: "Вечерний уход: пять минут, которые меняют кожу",
      meta: "Ритуалы · 6 минут · 08.11.2026",
      body: `
        <p>Вечерний уход не обязан быть многоступенчатым. Задача вечера — снять день с кожи и дать ей то, что она не получила утром. Для этого достаточно трёх шагов и пяти минут.</p>
        <h3>Шаг первый: очищение</h3>
        <p>Если днём был SPF или макияж, начните с масла, затем — с мягкого геля. Так вы не растягиваете очищение до трёх ватных дисков.</p>
        <h3>Шаг второй: восстановление</h3>
        <p>Сыворотка с гиалуроновой кислотой на влажную кожу и крем с церамидами сверху. Если используете ретиноид — именно сейчас, а крем станет его «подушкой».</p>
        <h3>Шаг третий: тишина</h3>
        <p>Дайте крему впитаться пару минут, не наносите сверху ещё пять средств. Коже тоже нужен воздух. А привычка «намазать побольше» часто работает против вас.</p>
        <div class="article-modal__quote">Уход должен быть настолько простым, чтобы его хотелось повторять.</div>
      `,
      products: ["hydra", "barrier"]
    },
    spf: {
      image: "assets/img/blog-spf.jpg",
      category: "Защита",
      title: "SPF в ноябре: привычка, а не сезон",
      meta: "Защита · 4 минуты · 02.11.2026",
      body: `
        <p>В ноябре солнце кажется безобидным: небо серое, футболки спрятаны, отпуск далеко. Но UVA-излучение проникает через облака и стекло — и продолжает работать с пигментацией и коллагеном весь год.</p>
        <h3>Когда наносить</h3>
        <p>Каждое утро, если вы выходите на улицу или сидите у окна. В помещении без окон SPF не нужен. На улице обновляйте защиту каждые 2–3 часа, дома — по необходимости.</p>
        <h3>Сколько нужно</h3>
        <p>Для лица и шеи — около 1,2 мл. Это больше, чем кажется: примерно две линии продукта по фаланге указательного пальца. Наносите до выхода и не забывайте про уши и шею.</p>
        <div class="article-modal__quote">SPF — единственный продукт, который нужен всем. Даже тем, кто «никогда не загорает».</div>
      `,
      products: ["spf", "hydra"]
    }
  };

  const modalMap = {
    consult: "consult-modal",
    booking: "booking-modal",
    product: "product-modal",
    service: "service-modal",
    article: "article-modal"
  };

  let lastFocused = null;
  let activeModal = null;
  let currentProductKey = null;
  let cartCount = 0;
  let selectedDate = null;
  let selectedTime = null;

  /* ------------------------------------------------------------
     Helpers
     ------------------------------------------------------------ */

  const plural = (n, one, few, many) => {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return one;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
    return many;
  };

  const pad = (n) => String(n).padStart(2, "0");
  const isoDate = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const weekdayShort = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  const monthShort = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

  function upcomingDays(count) {
    const arr = [];
    const now = new Date();
    for (let i = 1; i <= count; i += 1) {
      const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
      arr.push({
        date,
        iso: isoDate(date),
        weekday: weekdayShort[date.getDay()],
        day: date.getDate(),
        month: monthShort[date.getMonth()]
      });
    }
    return arr;
  }

  let toastTimer;
  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3400);
  }

  /* ------------------------------------------------------------
     Header & mobile navigation
     ------------------------------------------------------------ */

  const header = $(".site-header");
  const onScroll = () => {
    if (window.scrollY > 24) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const mobileMenu = $("#mobile-menu");
  const menuToggle = $(".menu-toggle:not(.menu-toggle--close)");
  const menuClose = $(".menu-toggle--close");

  function openMenu() {
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    body.classList.add("is-locked");
  }
  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    if (!activeModal) body.classList.remove("is-locked");
  }
  menuToggle?.addEventListener("click", openMenu);
  menuClose?.addEventListener("click", closeMenu);
  $$(".mobile-menu a").forEach((link) => link.addEventListener("click", closeMenu));

  /* ------------------------------------------------------------
     Modals
     ------------------------------------------------------------ */

  function resetModal(modal) {
    const formWrap = $("[data-form-wrap]", modal);
    const success = $("[data-success]", modal);
    const form = $("form", modal);
    if (formWrap) formWrap.hidden = false;
    if (success) success.hidden = true;
    if (form) form.reset();
    const preview = $("#upload-preview");
    const uploadLabel = $(".upload__label");
    if (preview) preview.hidden = true;
    if (uploadLabel) uploadLabel.hidden = false;
  }

  function focusables(container) {
    return $$('a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', container)
      .filter((el) => el.offsetParent !== null);
  }

  function openModal(key) {
    const modal = document.getElementById(modalMap[key] || key);
    if (!modal) return;
    if (activeModal && activeModal !== modal) {
      activeModal.classList.remove("is-open");
      activeModal.setAttribute("aria-hidden", "true");
    }
    closeMenu();
    resetModal(modal);
    if (key === "booking") {
      setBookingDate(selectedDate);
      setBookingTime(selectedTime || "12:00");
    }
    lastFocused = document.activeElement;
    activeModal = modal;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("is-locked");
    window.setTimeout(() => {
      const closeButton = $(".modal__close", modal);
      (closeButton || focusables(modal)[0])?.focus({ preventScroll: true });
    }, 80);
  }

  function closeModal(modal = activeModal) {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    activeModal = null;
    if (!mobileMenu?.classList.contains("is-open")) body.classList.remove("is-locked");
    lastFocused?.focus?.({ preventScroll: true });
  }

  $$("[data-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.open;
      if (key === "booking") prepareBookingOpen();
      openModal(key);
    });
  });

  $$("[data-close]").forEach((button) => {
    button.addEventListener("click", () => closeModal(button.closest(".modal")));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (activeModal) closeModal();
      else if (mobileMenu?.classList.contains("is-open")) closeMenu();
      return;
    }
    if (event.key !== "Tab" || !activeModal) return;
    const items = focusables(activeModal);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  /* ------------------------------------------------------------
     Catalog filter
     ------------------------------------------------------------ */

  const productCards = $$(".product-card");
  const filterButtons = $$(".filter-pill");
  const catalogCount = $("#catalog-count");

  function updateCatalogCount(visible) {
    if (!catalogCount) return;
    catalogCount.textContent = `${String(visible).padStart(2, "0")} ${plural(visible, "средство", "средства", "средств")}`;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => {
        item.classList.toggle("is-active", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });
      const filter = button.dataset.filter;
      let visible = 0;
      productCards.forEach((card) => {
        const tags = (card.dataset.tags || "").split(" ");
        const matches = filter === "all" || tags.includes(filter);
        card.hidden = !matches;
        if (matches) {
          visible += 1;
          card.style.animation = "none";
          void card.offsetHeight;
          card.style.animation = "";
        }
      });
      updateCatalogCount(visible);
    });
  });

  /* ------------------------------------------------------------
     Favourites & cart
     ------------------------------------------------------------ */

  $$(".favorite-button").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-active");
      const active = button.classList.contains("is-active");
      showToast(active ? "Добавлено в избранное" : "Убрано из избранного");
    });
  });

  function updateCart() {
    const bagCount = $(".bag-count");
    const bagButton = $(".bag-button");
    if (bagCount) {
      bagCount.textContent = String(cartCount);
      bagCount.dataset.count = String(cartCount);
    }
    if (bagButton) {
      bagButton.setAttribute("aria-label", `Корзина, товаров: ${cartCount}`);
    }
  }

  function addToCart(key, sourceButton) {
    const product = products[key];
    if (!product) return;
    cartCount += 1;
    updateCart();
    const card = sourceButton?.closest(".product-card");
    const image = $("img", card || document)?.src || "";
    if (navigator.vibrate) {
      // A tiny tactile confirmation on supported devices.
      navigator.vibrate(8);
    }
    showToast(`${product.name} добавлен в корзину`);
  }

  $$("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add, button));
  });

  $(".bag-button")?.addEventListener("click", () => {
    showToast(cartCount ? `В корзине ${cartCount} ${plural(cartCount, "товар", "товара", "товаров")}. В демо оплата недоступна.` : "Корзина пока пуста. Начните с подбора или каталога.");
  });

  /* ------------------------------------------------------------
     Booking dates
     ------------------------------------------------------------ */

  const miniDates = $("#mini-dates");
  const bookingDates = $("#booking-dates");
  const bookingTimes = $("#booking-times");
  const bookingForm = $("#booking-form");
  const bookingSuccessText = $("#booking-success-text");

  const miniDays = upcomingDays(5);
  miniDays.forEach((day) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mini-date";
    button.dataset.bookingDate = day.iso;
    button.innerHTML = `<span>${day.weekday}</span><strong>${day.day}</strong>`;
    miniDates?.appendChild(button);
  });

  const bookDays = upcomingDays(8);
  bookDays.forEach((day, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "date-chip";
    button.dataset.date = day.iso;
    button.innerHTML = `<span>${day.weekday} · ${day.month}</span><strong>${day.day}</strong>`;
    if (index === 0) button.classList.add("is-active");
    bookingDates?.appendChild(button);
  });

  selectedDate = bookDays[0]?.iso || null;
  selectedTime = "12:00";

  function setBookingDate(iso) {
    selectedDate = iso;
    $$(".date-chip").forEach((chip) => chip.classList.toggle("is-active", chip.dataset.date === iso));
    $$(".mini-date").forEach((chip) => chip.classList.toggle("is-active", chip.dataset.bookingDate === iso));
  }

  function setBookingTime(time) {
    selectedTime = time;
    $$("#booking-times button").forEach((chip) => chip.classList.toggle("is-active", chip.dataset.time === time));
  }

  setBookingDate(selectedDate);
  setBookingTime(selectedTime);

  bookingDates?.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-date]");
    if (!chip) return;
    setBookingDate(chip.dataset.date);
  });

  bookingTimes?.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-time]");
    if (!chip) return;
    setBookingTime(chip.dataset.time);
  });

  function prepareBookingOpen() {
    if (bookingForm) bookingForm.reset();
    const success = $("#booking-modal [data-success]");
    const formWrap = $("#booking-modal [data-form-wrap]");
    if (success) success.hidden = true;
    if (formWrap) formWrap.hidden = false;
    setBookingDate(selectedDate || bookDays[0]?.iso);
    setBookingTime(selectedTime || "12:00");
  }

  function prefillProcedure(serviceKey) {
    const select = $('#booking-form select[name="procedure"]');
    if (!select) return;
    const indexMap = { "skin-reset": 0, cleaning: 1, biorevitalization: 2, prx: 3 };
    if (serviceKey in indexMap) select.selectedIndex = indexMap[serviceKey];
  }

  $$("[data-booking-time]").forEach((button) => {
    button.addEventListener("click", () => {
      setBookingTime(button.dataset.bookingTime);
      openModal("booking");
    });
  });

  $$("[data-booking-date]").forEach((button) => {
    button.addEventListener("click", () => {
      setBookingDate(button.dataset.bookingDate);
      openModal("booking");
    });
  });

  /* ------------------------------------------------------------
     Product quick view
     ------------------------------------------------------------ */

  function productMarkup(key) {
    const product = products[key];
    if (!product) return "";
    const action = product.requiresConsult
      ? `<button class="btn btn--dark" type="button" data-modal-consult="${key}"><span>Купить после консультации</span><span class="btn__icon"><svg class="icon"><use href="#i-lock"></use></svg></span></button>`
      : `<button class="btn btn--dark" type="button" data-modal-add="${key}"><span>Добавить в корзину</span><span class="btn__icon"><svg class="icon"><use href="#i-bag"></use></svg></span></button>`;
    return `
      <div class="product-modal__media">
        <span class="product-badge">${product.badge}</span>
        <img src="${product.image}" width="900" height="1200" alt="${product.name} — ${product.brand}">
      </div>
      <div class="product-modal__body">
        <div class="product-modal__brand"><span>${product.brand}</span><span>${product.volume}</span></div>
        <h2 id="product-modal-title">${product.name}</h2>
        <p class="product-modal__desc">${product.desc}</p>
        <div class="product-modal__price"><strong>${product.price}</strong><span>В наличии · доставка 1–2 дня</span></div>
        <div class="product-modal__tags">${product.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="product-accordion">
          <details>
            <summary>Состав <svg class="icon"><use href="#i-chevron"></use></svg></summary>
            <div class="product-accordion__content">${product.composition}</div>
          </details>
          <details>
            <summary>Протокол применения <svg class="icon"><use href="#i-chevron"></use></svg></summary>
            <div class="product-accordion__content"><ol>${product.protocol.map((step) => `<li>${step}</li>`).join("")}</ol></div>
          </details>
        </div>
        <div class="product-modal__review">
          <div class="product-modal__review-head">
            <span class="stars"><svg class="icon"><use href="#i-star"></use></svg><svg class="icon"><use href="#i-star"></use></svg><svg class="icon"><use href="#i-star"></use></svg><svg class="icon"><use href="#i-star"></use></svg><svg class="icon"><use href="#i-star"></use></svg></span>
            <span>${product.review.author}</span>
          </div>
          <p>«${product.review.text}»</p>
        </div>
        <div class="product-modal__actions">${action}</div>
        <button class="product-modal__service-link" type="button" data-service="${product.service}">Подходящая процедура в кабинете <svg class="icon"><use href="#i-arrow-up"></use></svg></button>
      </div>
    `;
  }

  function openProduct(key) {
    const content = $("#product-modal-content");
    if (!content || !products[key]) return;
    currentProductKey = key;
    content.innerHTML = productMarkup(key);
    openModal("product");
  }

  $$("[data-product]").forEach((button) => {
    button.addEventListener("click", () => openProduct(button.dataset.product));
  });

  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-modal-add]");
    if (addButton) {
      const key = addButton.dataset.modalAdd;
      cartCount += 1;
      updateCart();
      showToast(`${products[key].name} добавлен в корзину`);
      closeModal(addButton.closest(".modal"));
      return;
    }
    const consultButton = event.target.closest("[data-modal-consult]");
    if (consultButton) {
      const key = consultButton.dataset.modalConsult;
      const product = products[key];
      closeModal(consultButton.closest(".modal"));
      openConsultForProduct(product);
    }
  });

  function openConsultForProduct(product) {
    openModal("consult");
    const select = $('#consult-form select[name="concern"]');
    if (select && product) {
      const option = [...select.options].find((opt) => opt.textContent.includes("Возрастные"));
      if (option) select.value = option.value;
    }
    const message = $('#consult-form textarea[name="message"]');
    if (message && product) {
      message.value = `Интересует ${product.name}. Хочу понять, подходит ли мне это средство и как встроить его в уход.`;
    }
  }

  $$("[data-consult-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = Object.values(products).find((item) => item.name === button.dataset.consultProduct);
      openConsultForProduct(product);
    });
  });

  /* ------------------------------------------------------------
     Service detail
     ------------------------------------------------------------ */

  function serviceMarkup(key) {
    const service = services[key];
    if (!service) return "";
    return `
      <div class="service-modal__media">
        <img src="${service.image}" width="1200" height="1600" alt="${service.name} — процедура в кабинете LUMÉA">
        <div class="service-modal__media-copy"><span>LUMÉA · кабинет</span><p>${service.tagline}</p></div>
      </div>
      <div class="service-modal__body">
        <p class="eyebrow">Процедура <span></span> ${service.duration}</p>
        <h2 id="service-modal-title">${service.name}</h2>
        <p class="service-modal__intro">${service.intro}</p>
        <div class="service-modal__info"><span>${service.subtitle}</span><span>${service.duration}</span><span>Диагностика включена</span></div>
        <div class="service-modal__section">
          <h3>Показания</h3>
          <p>${service.indications.join(" · ")}</p>
        </div>
        <div class="service-modal__section">
          <h3>Как проходит</h3>
          <ol>${service.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        </div>
        <div class="service-modal__section">
          <h3>Рекомендуемый домашний уход</h3>
          <div class="service-homecare">
            ${service.products.map((productKey) => `<button type="button" data-product="${productKey}"><img src="${products[productKey].image}" alt="" width="56" height="56"><span>${products[productKey].name}</span></button>`).join("")}
          </div>
        </div>
        <div class="service-modal__actions">
          <span class="price">${service.price}</span>
          <button class="btn btn--dark" type="button" data-book-service="${key}"><span>Записаться</span><span class="btn__icon"><svg class="icon"><use href="#i-arrow"></use></svg></span></button>
        </div>
      </div>
    `;
  }

  function openService(key) {
    const content = $("#service-modal-content");
    if (!content || !services[key]) return;
    content.innerHTML = serviceMarkup(key);
    openModal("service");
  }

  $$("[data-service]").forEach((button) => {
    button.addEventListener("click", () => openService(button.dataset.service));
  });

  document.addEventListener("click", (event) => {
    const productLink = event.target.closest(".service-homecare [data-product]");
    if (productLink) {
      openProduct(productLink.dataset.product);
      return;
    }
    const bookButton = event.target.closest("[data-book-service]");
    if (bookButton) {
      const key = bookButton.dataset.bookService;
      closeModal(bookButton.closest(".modal"));
      prepareBookingOpen();
      openModal("booking");
      prefillProcedure(key);
    }
  });

  // Service links rendered inside the product modal.
  document.addEventListener("click", (event) => {
    const serviceLink = event.target.closest(".product-modal__service-link[data-service]");
    if (serviceLink) openService(serviceLink.dataset.service);
  });

  /* ------------------------------------------------------------
     Articles
     ------------------------------------------------------------ */

  function openArticle(key) {
    if (key === "all") {
      showToast("В концепте собраны три материала. Листайте журнал ниже.");
      $("#journal")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const article = articles[key];
    const content = $("#article-modal-content");
    if (!article || !content) return;
    content.innerHTML = `
      <div class="article-modal__hero"><img src="${article.image}" width="1400" height="800" alt="${article.title}"></div>
      <div class="article-modal__content">
        <p class="article-meta">${article.category} <span>·</span> ${article.meta}</p>
        <h2 id="article-modal-title">${article.title}</h2>
        <div class="article-modal__body">${article.body}</div>
        <div class="article-modal__products">
          ${article.products.map((key) => `<button type="button" data-product="${key}"><img src="${products[key].image}" alt="" width="60" height="60"><span>${products[key].name} · ${products[key].price}</span></button>`).join("")}
        </div>
        <div class="article-modal__cta">
          <p>Не уверены, подходит ли это вашей коже?</p>
          <button class="btn btn--dark" type="button" data-open="consult"><span>Спросить косметолога</span><span class="btn__icon"><svg class="icon"><use href="#i-arrow"></use></svg></span></button>
        </div>
      </div>
    `;
    openModal("article");
  }

  $$("[data-article]").forEach((button) => {
    button.addEventListener("click", () => openArticle(button.dataset.article));
  });

  // Buttons rendered inside article modals need the global data-open handler.
  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open]");
    if (!openButton || !openButton.closest(".modal")) return;
    const key = openButton.dataset.open;
    if (key === "booking") prepareBookingOpen();
    openModal(key);
  });

  // Product links inside the article modal.
  document.addEventListener("click", (event) => {
    const productLink = event.target.closest(".article-modal__products [data-product]");
    if (productLink) openProduct(productLink.dataset.product);
  });

  /* ------------------------------------------------------------
     Forms
     ------------------------------------------------------------ */

  $("#consult-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const modal = form.closest(".modal");
    const formWrap = $("[data-form-wrap]", modal);
    const success = $("[data-success]", modal);
    if (formWrap) formWrap.hidden = true;
    if (success) success.hidden = false;
    const panel = $(".modal__panel", modal);
    panel?.scrollTo({ top: 0, behavior: "smooth" });
    $(".modal__success .eyebrow", modal)?.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  $("#booking-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!selectedDate || !selectedTime) {
      showToast("Выберите дату и время визита");
      return;
    }
    const dateObject = new Date(`${selectedDate}T12:00:00`);
    const dateLabel = `${dateObject.getDate()} ${monthShort[dateObject.getMonth()]}`;
    if (bookingSuccessText) {
      bookingSuccessText.textContent = `Ждём вас ${dateLabel} в ${selectedTime}. Администратор подтвердит запись сообщением в течение 15 минут.`;
    }
    const modal = form.closest(".modal");
    const formWrap = $("[data-form-wrap]", modal);
    const success = $("[data-success]", modal);
    if (formWrap) formWrap.hidden = true;
    if (success) success.hidden = false;
    $(".modal__panel", modal)?.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ------------------------------------------------------------
     Photo upload
     ------------------------------------------------------------ */

  const photoInput = $("#skin-photo");
  const uploadPreview = $("#upload-preview");
  const uploadName = $("#upload-name");
  const uploadRemove = $("#upload-remove");
  const uploadLabel = $(".upload__label");
  let photoUrl = null;

  photoInput?.addEventListener("change", () => {
    const file = photoInput.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Прикрепите, пожалуйста, изображение");
      photoInput.value = "";
      return;
    }
    const image = $("img", uploadPreview);
    if (photoUrl) URL.revokeObjectURL(photoUrl);
    photoUrl = URL.createObjectURL(file);
    if (image) image.src = photoUrl;
    if (uploadName) uploadName.textContent = file.name;
    if (uploadPreview) uploadPreview.hidden = false;
    if (uploadLabel) uploadLabel.hidden = true;
  });

  uploadRemove?.addEventListener("click", () => {
    if (photoUrl) URL.revokeObjectURL(photoUrl);
    photoUrl = null;
    if (photoInput) photoInput.value = "";
    if (uploadPreview) uploadPreview.hidden = true;
    if (uploadLabel) uploadLabel.hidden = false;
  });

  /* ------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------ */

  const revealItems = $$(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  /* Give non-linked social links a graceful demo behaviour. */
  $$('.footer__social a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast(`${link.textContent.trim()} — ссылка появится в полной версии`);
    });
  });
})();
