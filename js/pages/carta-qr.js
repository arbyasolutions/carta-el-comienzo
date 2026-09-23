(() => {
  const carta = window.CARTA_QR;
  const nav = document.querySelector("#carta-nav");
  const content = document.querySelector("#carta-contenido");
  const modal = document.querySelector("#carta-modal");
  const modalContent = document.querySelector("#ficha-contenido");
  const closeButtons = document.querySelectorAll("[data-cerrar-modal]");
  let lastTrigger = null;
  let ownsHistoryEntry = false;
  let dragStart = null;

  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const photoPath = (photo, small = false) => {
    return `assets/img/carta/${photo}${small ? "-720" : ""}.jpg`;
  };

  const imageMarkup = (item, className = "", eager = false) => {
    if (!item.photo) {
      return "";
    }

    const alt = escapeHtml(item.name);
    const load = eager ? "" : ' loading="lazy"';
    const src = photoPath(item.photo);

    return `<img class="${className}" src="${src}" srcset="${photoPath(item.photo, true)} 720w, ${src} 1400w" sizes="(min-width: 900px) 33vw, 100vw" width="1400" height="933"${load} alt="${alt}" />`;
  };

  const stickerMarkup = (label, className = "") =>
    `<span class="carta-pegatina ${className}">${escapeHtml(label)}</span>`;

  const medalMarkup = (medals = [], compact = false) => {
    if (!medals.length) {
      return "";
    }

    const className = [
      "carta-medallas",
      compact ? "carta-medallas--compactas" : "",
      !compact && medals.length > 1 ? "carta-medallas--dobles" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return `<span class="${className}">${medals
      .map((medal, index) => {
        const ribbons = compact
          ? ""
          : '<path d="M17 46 25 72 34 53Z" fill="#e459c7" stroke="#000" stroke-width="3"/><path d="m31 52 10 20 7-28Z" fill="#22c7c0" stroke="#000" stroke-width="3"/>';
        const viewBox = compact ? "0 0 64 64" : "0 0 64 76";
        const band = compact ? "" : `<b>${escapeHtml(medal)}</b>`;
        const gradientId = `carta-medalla-dorada-${index}`;

        return `<span class="carta-medalla" aria-label="${escapeHtml(medal)}"><svg viewBox="${viewBox}" aria-hidden="true"><defs><radialGradient id="${gradientId}" cx="30%" cy="24%" r="76%"><stop offset="0" stop-color="#fff6a8"/><stop offset="0.34" stop-color="#ffd62c"/><stop offset="0.76" stop-color="#e89a00"/><stop offset="1" stop-color="#b96800"/></radialGradient></defs>${ribbons}<circle cx="32" cy="29" r="25" fill="url(#${gradientId})" stroke="#000" stroke-width="4" stroke-dasharray="4 2"/><circle cx="25" cy="21" r="13" fill="#fff" opacity="0.26"/><path d="M19 20c-5 6-6 17-1 24M45 20c5 6 6 17 1 24" fill="none" stroke="#000" stroke-width="2"/><path d="m18 24 5 2m-6 5 5 1m-3 6 5-1m21-13-5 2m6 5-5 1m3 6-5-1" stroke="#000" stroke-width="2" stroke-linecap="round"/><path d="m32 15 4.1 8.2 9 .9-6.5 6.3 1.5 8.9-8-4.2-8 4.2 1.5-8.9-6.5-6.3 9-.9Z" fill="#000"/></svg>${band}</span>`;
      })
      .join("")}</span>`;
  };

  const priceMarkup = (price) =>
    price ? `<strong class="carta-precio">${escapeHtml(price)}</strong>` : "";

  const itemMarkup = (item, sectionName, options = {}) => {
    const showPhoto = Boolean(item.photo) && !options.hidePhoto;
    const description = item.description
      ? `<p class="carta-fila__descripcion">${escapeHtml(item.description)}</p>`
      : "";
    const award = item.award
      ? stickerMarkup(item.award, "carta-pegatina--premio")
      : "";
    const photo = showPhoto
      ? `<span class="carta-fila__visual">${imageMarkup(item, "carta-fila__imagen")}${medalMarkup(item.medals, true)}</span>`
      : "";
    const price = priceMarkup(item.price);
    const inner = `${photo}<span class="carta-fila__texto"><b>${escapeHtml(item.name)}</b>${description}${award}${showPhoto ? price : ""}</span>${showPhoto ? "" : price}`;

    if (item.photo) {
      const photoClass = showPhoto ? " carta-fila--con-foto" : "";

      return `<button class="carta-fila${photoClass}" type="button" data-ficha="${escapeHtml(sectionName)}" data-nombre="${escapeHtml(item.name)}">${inner}</button>`;
    }

    return `<article class="carta-fila">${inner}</article>`;
  };

  const groupMarkup = (group, sectionName) => {
    const title = group.title ? `<h3>${escapeHtml(group.title)}</h3>` : "";
    const intro = group.intro
      ? `<p class="carta-grupo__intro">${escapeHtml(group.intro)}</p>`
      : "";
    const items = group.items
      .map((item) =>
        typeof item === "string"
          ? `<article class="carta-fila"><span class="carta-fila__texto"><b>${escapeHtml(item)}</b></span></article>`
          : itemMarkup(item, sectionName),
      )
      .join("");
    return `<div class="carta-grupo">${title}${intro}<div class="carta-lista">${items}</div></div>`;
  };

  const burgerMarkup = (burger) => {
    const photo = burger.photo
      ? imageMarkup(burger, "carta-burger__imagen")
      : `<div class="carta-burger__poster" style="--poster: ${escapeHtml(burger.poster)}"><span>${escapeHtml(burger.name)}</span></div>`;
    const visual = `<div class="carta-burger__visual">${photo}${medalMarkup(burger.medals)}</div>`;
    const awards = (burger.awards || [])
      .map((award) => stickerMarkup(award, "carta-pegatina--premio"))
      .join("");
    const tag = burger.tag
      ? `<p class="carta-burger__tag">${escapeHtml(burger.tag)}</p>`
      : "";
    const newSticker = burger.isNew
      ? stickerMarkup(
          "NEW",
          `carta-pegatina--new${burger.medals?.length ? " carta-pegatina--new--with-medals" : ""}`,
        )
      : "";
    const canOpen = burger.photo || burger.poster;
    const interactive = canOpen ? ' data-ficha="burger"' : "";
    const element = canOpen ? "button" : "article";
    const type = canOpen ? ' type="button"' : "";

    return `<${element} class="carta-burger"${type}${interactive} data-nombre="${escapeHtml(burger.name)}">${visual}${newSticker}<div class="carta-burger__cuerpo">${tag}<h3>${escapeHtml(burger.name)}</h3><p>${escapeHtml(burger.ingredients)}</p><div class="carta-burger__pie">${priceMarkup(burger.price)}${awards}</div></div></${element}>`;
  };

  const menuRows = (items, isSupplement) =>
    items
      .map((item) => {
        if (typeof item === "string") {
          return `<li>${escapeHtml(item)}</li>`;
        }

        return `<li>${escapeHtml(item.name)} <strong>${escapeHtml(item.price)}</strong></li>`;
      })
      .join("");

  const menuMarkup = (section) => `
    <article class="carta-menu">
      <div class="carta-menu__cabecera">
        <strong>${escapeHtml(section.price)}</strong>
        <span>${escapeHtml(section.schedule)}</span>
      </div>
      <p class="carta-menu__incluye">${escapeHtml(section.includes)}</p>
      <div class="carta-menu__columnas">
        <section><h3>Primeros</h3><ul>${menuRows(section.primeros)}</ul></section>
        <section><h3>Segundos</h3><ul>${menuRows(section.segundos)}</ul></section>
        <section><h3>Segundos con suplemento</h3><ul>${menuRows(section.suplementes || section.suplementos, true)}</ul></section>
        <section><h3>Postres</h3><ul>${menuRows(section.postres)}</ul></section>
      </div>
    </article>`;

  const featuredCakeMarkup = (cake, section) => `
    <article class="carta-tarta-destacada">
      <button class="carta-tarta-destacada__aro" type="button" data-ficha="${escapeHtml(section.name)}" data-nombre="${escapeHtml(cake.name)}">
        ${imageMarkup(cake, "carta-tarta-destacada__imagen")}
        ${medalMarkup(cake.medals)}
      </button>
      <div class="carta-tarta-destacada__texto">
        <p>${escapeHtml(cake.award)}</p>
        <h3>${escapeHtml(cake.name)}</h3>
        ${priceMarkup(cake.price)}
        <a class="carta-boton carta-boton--encargo" href="tel:${carta.telefono.replaceAll(" ", "")}">Encargar</a>
      </div>
    </article>`;

  // La carta del QR usa el rosa neón de la casa para el menú del día: el
  // naranja de los datos es el de la web y aquí saturaba demasiado.
  const QR_ACCENTS = { menu: "#e459c7" };
  const accentFor = (section) => QR_ACCENTS[section.id] || section.color;

  const sectionMarkup = (section) => {
    const intro = section.intro
      ? `<p class="carta-seccion__intro">${escapeHtml(section.intro)}</p>`
      : "";
    const order =
      section.order && section.id !== "tartas"
        ? `<a class="carta-boton carta-boton--encargo" href="tel:${carta.telefono.replaceAll(" ", "")}">Encargar</a>`
        : "";
    const featuredCake =
      section.id === "tartas"
        ? section.items.find(
            (item) => item.name === "Tarta cremosa El Comienzo",
          )
        : null;
    const listItems = featuredCake
      ? section.items.filter((item) => item !== featuredCake)
      : section.items || [];
    const list = `<div class="carta-lista-principal">${listItems.map((item) => itemMarkup(item, section.name, { hidePhoto: Boolean(featuredCake) })).join("")}${(section.groups || []).map((group) => groupMarkup(group, section.name)).join("")}</div>`;
    const body =
      section.type === "menu"
        ? menuMarkup(section)
        : `${featuredCake ? featuredCakeMarkup(featuredCake, section) : ""}${list}`;

    return `<section class="carta-seccion carta-seccion--${section.id}" id="${section.id}" style="--acento: ${accentFor(section)}" aria-labelledby="${section.id}-titulo"><div class="carta-goteo js-carta-drips" aria-hidden="true"></div><header class="carta-seccion__cabecera"><h2 id="${section.id}-titulo">${escapeHtml(section.name)}</h2>${intro}${order}</header>${body}</section>`;
  };

  const sectionsById = new Map(
    carta.sections.map((section) => [section.id, section]),
  );
  const inicioCards = [
    {
      id: "burgers",
      name: "Burgers",
      color: "#ffba00",
      photo: "burger-black-edition",
      detail: "Nueva: Black Edition",
      isNew: true,
    },
    { id: "entrantes", photo: "nachos-pulled" },
    { id: "carnes", photo: "chuleton" },
    { id: "menu", detail: "16,90 € · L a V", photo: "local-mesas-donut" },
    { id: "arroces", photo: "arroz-chuleton", detail: "Por encargo" },
    { id: "postres", photo: "torrija" },
    { id: "tartas", photo: "tarta-el-comienzo", detail: "Por encargo" },
    { id: "desayunos", detail: "Desde 3 €", poster: "#ffba00" },
    { id: "bebidas", photo: "tercio-el-comienzo", beer: true },
    { id: "vinoteca", detail: "Ribera · Rioja · Albariño", poster: "#a93bff" },
  ].map((card) => ({
    ...card,
    section: sectionsById.get(card.id) || {
      name: card.name,
      color: card.color,
    },
  }));
  const inicioCardMarkup = (card) => {
    const name = card.name || card.section.name;
    const visual = card.photo
      ? imageMarkup(
          { name, photo: card.photo },
          "carta-inicio__imagen",
          card.id === "burgers",
        )
      : `<span class="carta-inicio__poster" style="--poster: ${card.poster}"></span>`;
    const newSticker = card.isNew
      ? stickerMarkup("NEW", "carta-pegatina--new")
      : "";
    const detail = card.detail
      ? `<small>${escapeHtml(card.detail)}</small>`
      : "";
    const beerClass = card.beer ? " carta-inicio__tarjeta--cerveza" : "";

    return `<button class="carta-inicio__tarjeta${beerClass}" type="button" data-seccion="${card.id}" style="--acento: ${accentFor({ id: card.id, color: card.section.color })}">${visual}${newSticker}<span class="carta-inicio__texto"><b>${escapeHtml(name)}</b>${detail}</span></button>`;
  };
  const inicio = `<section class="carta-seccion carta-inicio" id="inicio" style="--acento: var(--rosa)" aria-labelledby="inicio-titulo"><div class="carta-goteo js-carta-drips" aria-hidden="true"></div><header class="carta-seccion__cabecera"><h2 id="inicio-titulo">Nuestra carta</h2></header><div class="carta-inicio__grid">${inicioCards.map(inicioCardMarkup).join("")}</div></section>`;
  const orderedBurgers = [...carta.burgers].sort(
    (first, second) => Number(second.isNew) - Number(first.isNew),
  );
  const burgerSection = `<section class="carta-seccion carta-seccion--burgers" id="burgers" style="--acento: var(--amarillo)" aria-labelledby="burgers-titulo"><div class="carta-goteo js-carta-drips" aria-hidden="true"></div><header class="carta-seccion__cabecera"><h2 id="burgers-titulo">Burgers</h2><p class="carta-seccion__intro">Todas incluyen patatas fritas naturales y se pueden adaptar sin gluten.</p></header><div class="carta-burgers">${orderedBurgers.map(burgerMarkup).join("")}</div></section>`;
  const navItems = [
    { id: "inicio", name: "Inicio" },
    { id: "burgers", name: "Burgers" },
    ...carta.sections.map(({ id, name }) => ({ id, name })),
  ];

  nav.innerHTML = navItems
    .map(
      (item) =>
        `<a href="#${item.id}" data-nav="${item.id}">${escapeHtml(item.name)}</a>`,
    )
    .join("");
  content.innerHTML =
    inicio + burgerSection + carta.sections.map(sectionMarkup).join("");

  document.querySelectorAll(".js-carta-drips").forEach((drip, index) => {
    const section = drip.closest(".carta-seccion");
    const color = getComputedStyle(section).getPropertyValue("--acento").trim();

    window.Drips.make(drip, color, 41 + index);
  });

  const everyItem = [
    ...carta.burgers.map((item) => ({ ...item, section: "Burgers" })),
    ...carta.sections.flatMap((section) => [
      ...(section.items || []).map((item) => ({
        ...item,
        section: section.name,
      })),
    ]),
  ];

  const openModal = (name, trigger) => {
    const item = everyItem.find((candidate) => candidate.name === name);

    if (!item || (!item.photo && !item.poster)) {
      return;
    }

    lastTrigger = trigger;
    const photos = item.photo
      ? (item.gallery || [item.photo])
          .map((photo, index) =>
            imageMarkup(
              { ...item, photo, gallery: null },
              "carta-modal__imagen",
              index === 0,
            ),
          )
          .join("")
      : `<div class="carta-modal__poster" style="--poster: ${escapeHtml(item.poster)}">${escapeHtml(item.name)}</div>`;
    const award = item.award || (item.awards || []).join(" · ");
    modalContent.innerHTML = `<div class="carta-modal__fotos">${photos}${medalMarkup(item.medals)}</div><div class="carta-modal__texto"><p>${escapeHtml(item.section)}</p><h2 id="ficha-nombre">${escapeHtml(item.name)}</h2>${item.description ? `<p>${escapeHtml(item.description)}</p>` : ""}${item.ingredients ? `<p>${escapeHtml(item.ingredients)}</p>` : ""}${award ? stickerMarkup(award, "carta-pegatina--premio") : ""}${priceMarkup(item.price)}</div>`;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("carta-modal-abierta");
    requestAnimationFrame(() => modal.classList.add("is-visible"));
    modal.querySelector(".carta-modal__ficha").focus();

    if (!history.state?.cartaFicha) {
      history.pushState({ cartaFicha: true }, "");
      ownsHistoryEntry = true;
    }
  };

  const closeModal = (returnFocus = true, fromHistory = false) => {
    if (modal.hidden) {
      return;
    }

    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("carta-modal-abierta");
    window.setTimeout(() => {
      modal.hidden = true;
      modalContent.innerHTML = "";
    }, 220);

    if (returnFocus && lastTrigger) {
      lastTrigger.focus();
    }

    if (ownsHistoryEntry && !fromHistory) {
      ownsHistoryEntry = false;
      history.back();
    }

    if (fromHistory) {
      ownsHistoryEntry = false;
    }
  };

  content.addEventListener("click", (event) => {
    const sectionTrigger = event.target.closest("[data-seccion]");

    if (sectionTrigger) {
      const id = sectionTrigger.dataset.seccion;

      history.replaceState(history.state, "", `#${id}`);
      beginNavigationLock(id);
      showActiveNav(id);
      scrollToSection(id);
      return;
    }

    const trigger = event.target.closest("[data-ficha]");

    if (trigger) {
      openModal(trigger.dataset.nombre, trigger);
    }
  });

  closeButtons.forEach((button) =>
    button.addEventListener("click", () => closeModal()),
  );
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
  window.addEventListener("popstate", () => closeModal(true, true));

  modal.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".carta-modal__ficha")) {
      dragStart = {
        y: event.clientY,
        sheet: event.target.closest(".carta-modal__ficha"),
      };
    }
  });
  modal.addEventListener("pointermove", (event) => {
    if (!dragStart) {
      return;
    }

    const distance = Math.max(0, event.clientY - dragStart.y);
    dragStart.sheet.style.transform = `translateY(${distance}px)`;
  });
  modal.addEventListener("pointerup", (event) => {
    if (!dragStart) {
      return;
    }

    const distance = event.clientY - dragStart.y;
    dragStart.sheet.style.transform = "";
    dragStart = null;

    if (distance > 110) {
      closeModal();
    }
  });

  const navLinks = [...nav.querySelectorAll("a")];
  const navigation = nav.closest(".carta-nav");
  let activeNavigationId = "";
  let lockedNavigationId = null;
  let navigationLockTimer = null;
  const updateNavigationHeight = () => {
    document.documentElement.style.setProperty(
      "--altura-nav-carta",
      `${navigation.offsetHeight}px`,
    );
  };

  const sectionTargetOffset = () =>
    window.matchMedia("(min-width: 900px)").matches
      ? 20
      : navigation.offsetHeight + 10;

  const releaseNavigationLock = () => {
    lockedNavigationId = null;
    navigationLockTimer = null;
    requestActiveNavSync();
  };

  const keepNavigationLocked = (id, delay = 160) => {
    lockedNavigationId = id;
    window.clearTimeout(navigationLockTimer);
    navigationLockTimer = window.setTimeout(releaseNavigationLock, delay);
  };

  const beginNavigationLock = (id) => {
    keepNavigationLocked(id, 700);
  };

  const scrollToSection = (id, behavior = "smooth") => {
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    const offset = sectionTargetOffset();
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior });

    window.setTimeout(
      () => {
        keepNavigationLocked(id);
        const correctedTop =
          section.getBoundingClientRect().top + window.scrollY - offset;

        if (Math.abs(window.scrollY - correctedTop) > 2) {
          window.scrollTo({ top: correctedTop, behavior: "auto" });
        }
      },
      behavior === "smooth" ? 480 : 0,
    );
  };

  nav.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-nav]");

    if (!link) {
      return;
    }

    event.preventDefault();
    const id = link.dataset.nav;
    history.replaceState(history.state, "", `#${id}`);
    beginNavigationLock(id);
    showActiveNav(id);
    scrollToSection(id);
  });

  const showActiveNav = (id) => {
    const changed = id !== activeNavigationId;

    navLinks.forEach((link) => {
      const active = link.dataset.nav === id;
      link.classList.toggle("is-active", active);

      if (active) {
        link.setAttribute("aria-current", "true");

        if (changed && !window.matchMedia("(min-width: 900px)").matches) {
          const left =
            link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2;

          nav.scrollTo({
            left,
            behavior: "smooth",
          });
        }
      } else {
        link.removeAttribute("aria-current");
      }
    });

    activeNavigationId = id;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { rootMargin: "-25% 0px -65% 0px", threshold: 0.01 },
  );

  document
    .querySelectorAll(".carta-seccion")
    .forEach((section) => observer.observe(section));

  let scrollFrame = null;
  const syncActiveNav = () => {
    scrollFrame = null;

    if (lockedNavigationId) {
      showActiveNav(lockedNavigationId);
      return;
    }

    const offset = sectionTargetOffset() + 80;
    let activeId = "inicio";

    document.querySelectorAll(".carta-seccion").forEach((section) => {
      if (section.getBoundingClientRect().top <= offset) {
        activeId = section.id;
      }
    });

    showActiveNav(activeId);
  };

  const requestActiveNavSync = () => {
    if (scrollFrame !== null) {
      return;
    }

    scrollFrame = requestAnimationFrame(syncActiveNav);
  };

  window.addEventListener(
    "scroll",
    () => {
      if (lockedNavigationId) {
        keepNavigationLocked(lockedNavigationId);
      }

      requestActiveNavSync();
    },
    { passive: true },
  );
  window.addEventListener("resize", requestActiveNavSync);
  updateNavigationHeight();
  new ResizeObserver(updateNavigationHeight).observe(navigation);
  requestActiveNavSync();
})();
