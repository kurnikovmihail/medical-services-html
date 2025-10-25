/**
 * ----------------------------------------------------------------
 * БЛОК 1: ДАННЫЕ
 * ----------------------------------------------------------------
 */

const services = [
  {
    img: "./assets/grandMa.png",
    title: "Анализы дома",
    text: "Бесплатный выезд. Для детей и взрослых. Удобно и быстро.",
    button: "Бесплатно",
    mobileButton: "Бесплатно",
    mobileTitle: "Анализы дома",
    mobileText: "Бесплатный выезд. Для детей и взрослых.",
  },
  {
    img: "./assets/wals.png",
    title: "МРТ",
    text: "Запись на магнитно-резонансную томографию.8 видов скрининга.",
    button: "От 1 690 Р",
    mobileButton: "От 1 690 Р",
    mobileTitle: "МРТ",
    mobileText: "Запись на магнитно- резонансную томографию. 8 видов скрининга",
  },
  {
    img: "./assets/hands.png",
    title: "Срочные анализы CITO",
    text: "Быстрая диагностика в день обращения. Более 30 видов анализов.",
    button: "Результаты в 14:00",
    mobileButton: "Найти отделение",
    mobileTitle: "Срочные анализы CITO",
    mobileText: "Быстрая диагностика в день обращения. Более 30 видов анализов",
  },
];

const docs = [
  {
    img: "./assets/rerb.png",
    title: "Справка в налоговую (ФНС)",
    text: "для оформления налогового вычета",
    mobileTitle: "Справка в налоговую",
    mobileText: "для оформления налогового вычета",
  },
  {
    img: "./assets/sapports.png",
    title: "Бесплатная консультация",
    text: "врача Гемотест по телефону",
    mobileTitle: "Бесплатная консультация врача",
    mobileText: "по телефону",
  },
  {
    img: "./assets/map.png",
    title: "Расшифровка результатов",
    text: "из других лабораторий",
    mobileTitle: "Расшифровка результатов",
    mobileText: "из других лабораторий",
  },
  {
    img: "./assets/sales.png",
    title: "Бонусная программа",
    text: "«Копите на здоровье»",
    mobileTitle: "Бонусы",
    mobileText: "«Копите на здоровье»",
  },
  {
    img: "./assets/brain.png",
    title: "Второе мнение в онкологии",
    text: "от экспертов мирового уровня",
    mobileTitle: "Второе мнение",
    mobileText: "от онкоэкспертов мирового уровня ",
  },
];


/**
 * ----------------------------------------------------------------
 * БЛОК 2: ГЛАВНЫЙ ИСПОЛНЯЕМЫЙ КОД
 * ----------------------------------------------------------------
 */

window.addEventListener("DOMContentLoaded", () => {
  let isMobile = window.innerWidth < 640;

  const mainHeader = document.getElementById("main-header");
  const servicesContainer = document.getElementById("services-container");
  const otherServicesContainer = document.getElementById("other-services-container");
  const docsContainer = document.getElementById("docs-container");

  function renderHeader() {
    mainHeader.textContent = isMobile ? "Мед. услуги" : "Медицинские услуги";
  }

  function renderServices() {
    servicesContainer.innerHTML = "";
    services.forEach((item) => {
      const title = isMobile ? item.mobileTitle : item.title;
      const text = isMobile ? item.mobileText : item.text;
      const button = isMobile ? item.mobileButton : item.button;

      const cardHTML = `
        <div class="service-card">
          <img src="${item.img}" alt="${title}" class="service-card-img" />
          <div class="service-card-overlay">
              <h2 class="service-card-title">${title}</h2>
              <p class="service-card-text">${text}</p>
              <button class="service-card-button">${button}</button>
          </div>
        </div>
      `;
      servicesContainer.innerHTML += cardHTML;
    });
  }

  function renderOtherServices() {
    const contentHTML = `
      <p class="other-services-subtitle">
        ДРУГИЕ МЕДИЦИНСКИЕ УСЛУГИ
      </p>
      <p class="other-services-text">
        <span>
          ${isMobile ? "" : "УЗИ • "}УЗИ дома –
          <span class="highlight-orange">бесплатный выезд</span>
        </span>
        ${isMobile ? "<br />" : ""}
        <span>
          ${isMobile ? "" : "• ЭКГ • "}ЭКГ дома –
          <span class="highlight-orange">бесплатный выезд</span><br/>
        </span>
        ${isMobile ? "<span>Кольпоскопия <br /></span>" : ""}
        <span>
          ${isMobile ? "Лечение Сургитрон" : "Лечение Сургитрон • Кольпоскопия"}<br/>
        </span>
        <a href="#" class="other-services-link">
          ${isMobile ? "Все медуслуги Гемотест (35) →" : "Все медицинские услуги Гемотест (35) →"}
        </a>
      </p>
    `;
    otherServicesContainer.innerHTML = contentHTML;
  }

  function renderDocs() {
    docsContainer.innerHTML = "";
    docs.forEach((item, i) => {
      const title = isMobile ? item.mobileTitle : item.title;
      const text = isMobile ? item.mobileText : item.text;
      // Используем классы вместо инлайн-стилей
      const bgClass = i % 2 === 0 ? "doc-block-light" : "doc-block-darker";

      const docHTML = `
        <div class="doc-block ${bgClass}">
          <img src="${item.img}" alt="${title}" class="doc-block-img" />
          <div class="doc-block-content">
            <p class="doc-block-title">${title}</p>
            <p class="doc-block-text">${text}</p>
          </div>
        </div>
      `;
      docsContainer.innerHTML += docHTML;
    });
  }

  function renderAll() {
    renderHeader();
    renderServices();
    renderOtherServices();
    renderDocs();
  }

  function handleResize() {
    const newIsMobile = window.innerWidth < 640;
    if (newIsMobile !== isMobile) {
      isMobile = newIsMobile;
      renderAll();
    }
  }

  renderAll();
  window.addEventListener("resize", handleResize);
});