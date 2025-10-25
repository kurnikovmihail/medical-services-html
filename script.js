/**
 * ----------------------------------------------------------------
 * БЛОК 1: ДАННЫЕ
 * ----------------------------------------------------------------
 * Здесь мы храним все данные (тексты, картинки) в виде
 * массивов. Это удобно, потому что HTML-структура будет
 * создаваться автоматически на их основе.
 *
 * ВАЖНО: Убедитесь, что пути к картинкам (img) и их
 * имена НАПИСАНЫ ПРАВИЛЬНО. В Ubuntu "grandMa.png"
 * и "grandma.png" - это РАЗНЫЕ файлы.
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
 * Это "точка входа" нашего скрипта.
 * Мы "говорим" браузеру: "Эй, как только ты полностью
 * загрузишь всю HTML-разметку (событие 'DOMContentLoaded'),
 * выполни, пожалуйста, вот этот код".
 *
 * ЭТО И ЕСТЬ ИСПРАВЛЕНИЕ: весь наш код теперь
 * находится внутри этого "слушателя", поэтому он
 * гарантированно запустится ПОСЛЕ загрузки HTML.
 */

window.addEventListener("DOMContentLoaded", () => {
  // --- Состояние ---
  // Переменная, которая хранит, мобильная ли у нас версия
  // `true` - мобильная, `false` - десктоп
  // Мы определяем ее один раз при загрузке.
  let isMobile = window.innerWidth < 640;

  // --- Ссылки на HTML-элементы ---
  // Теперь мы "захватываем" элементы HTML по их ID.
  // Это работает, потому что DOM уже загружен.
  const mainHeader = document.getElementById("main-header");
  const servicesContainer = document.getElementById("services-container");
  const otherServicesContainer = document.getElementById(
    "other-services-container"
  );
  const docsContainer = document.getElementById("docs-container");

  // --- Функции рендеринга (Отрисовки) ---

  // Рендерим заголовок
  function renderHeader() {
    mainHeader.textContent = isMobile ? "Мед. услуги" : "Медицинские услуги";
  }

  // Рендерим 3 карточки услуг
  function renderServices() {
    servicesContainer.innerHTML = ""; // Очищаем контейнер
    services.forEach((item) => {
      const title = isMobile ? item.mobileTitle : item.title;
      const text = isMobile ? item.mobileText : item.text;
      const button = isMobile ? item.mobileButton : item.button;

      const cardHTML = `
        <div class="min-w-3xs relative overflow-hidden rounded-l shadow-md hover:shadow-xl transition-shadow duration-300 group h-64">
          <img
            src="${item.img}"
            alt="${title}"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="p-5">
            <div
              class="absolute inset-0 from-black/70 to-black/20 flex flex-col justify-between p-4"
              style="
                background: linear-gradient(
                    0deg,
                    rgba(41, 45, 58, 0.6),
                    rgba(41, 45, 58, 0.6)
                  ),
                  linear-gradient(
                    228.47deg,
                    rgba(242, 101, 49, 0.4) 9.44%,
                    rgba(0, 121, 52, 0.4) 89.9%
                  );
              "
            >
              <h2 class="text-white font-semibold text-lg drop-shadow-md">
                ${title}
              </h2>
              <p class="text-gray-100 text-sm leading-snug">
                ${text}
              </p>
              <button
                class="self-start bg-orange-600 text-white font-medium px-5 py-1.5 rounded-full text-sm shadow-sm hover:bg-orange-500 transition-colors"
              >
                ${button}
              </button>
            </div>
          </div>
        </div>
      `;
    servicesContainer.innerHTML += cardHTML;
  });
}

  // Рендерим блок "Другие услуги"
  function renderOtherServices() {
    const contentHTML = `
      <p class="text-xs font-bold mb-3 text-gray-400">
        ДРУГИЕ МЕДИЦИНСКИЕ УСЛУГИ
      </p>
      <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
        <span>
          ${isMobile ? "" : "УЗИ • "}УЗИ дома –
          <span class="text-orange-600">бесплатный выезд</span>
        </span>
        ${isMobile ? "<br />" : ""}
        <span>
          ${isMobile ? "" : "• ЭКГ • "}ЭКГ дома –
          <span class="text-orange-600">бесплатный выезд</span><br
        /></span>
        ${isMobile ? "<span>Кольпоскопия <br /></span>" : ""}
        <span>
          ${
            isMobile
              ? "Лечение Сургитрон"
              : "Лечение Сургитрон • Кольпоскопия"
          }<br
        /></span>
        <a href="#" class="text-green-800 font-bold hover:underline">
          ${
            isMobile
              ? "Все медуслуги Гемотест (35) →"
              : "Все медицинские услуги Гемотест (35) →"
          }
        </a>
      </p>
    `;
    otherServicesContainer.innerHTML = contentHTML;
  }

  // Рендерим 5 блоков "документов"
  function renderDocs() {
    docsContainer.innerHTML = ""; // Очищаем контейнер
    docs.forEach((item, i) => {
      const title = isMobile ? item.mobileTitle : item.title;
      const text = isMobile ? item.mobileText : item.text;
      const bgColor = i % 2 === 0 ? "bg-[#fff7d6]" : "bg-[#fffcef]";

      const docHTML = `
        <div
          class="flex items-center sm:flex-col text-left sm:text-center justify-start py-8 px-4 transition-colors ${bgColor}"
        >
          <img
            src="${item.img}"
            alt="${title}"
            class="w-16 h-16 sm:w-16 sm:h-16 mb-0 sm:mb-3 mr-4 sm:mr-0 rounded-full object-cover"
          />
          <div class="flex-1">
            <p
              class="text-green-800 font-semibold text-base sm:text-lg leading-tight mb-1"
            >
              ${title}
            </p>
            <p class="text-sm text-gray-800">
              ${text}
            </p>
          </div>
        </div>
      `;
      docsContainer.innerHTML += docHTML;
    });
}

  // --- Главная логика ---

  // Функция, которая полностью обновляет всю страницу
  function renderAll() {
    renderHeader();
    renderServices();
    renderOtherServices();
    renderDocs();
  }

  // Функция, которая следит за изменением размера окна
  function handleResize() {
    // 640px - это порог 'sm' в Tailwind
    const newIsMobile = window.innerWidth < 640;

    // Если состояние изменилось (был десктоп -> стал мобильный, или наоборот)
    if (newIsMobile !== isMobile) {
      isMobile = newIsMobile; // Обновляем состояние
      renderAll(); // Перерисовываем всю страницу
    }
  }

  // --- ЗАПУСК ---
  // 1. Выполняем первую отрисовку, как только DOM загрузился
  renderAll();

  // 2. Вешаем "слушатель" на изменение размера окна,
  // чтобы страница стала адаптивной
  window.addEventListener("resize", handleResize);
});