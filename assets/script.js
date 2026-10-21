(function () {
  "use strict";

  const doc = document;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const t = function (key, vars) {
    return window.CresarisI18n ? window.CresarisI18n.t(key, vars) : key;
  };

  const header = doc.getElementById("site-header");
  if (header) {
    const setScrolled = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
  }

  const toggle = doc.querySelector(".menu-toggle");
  const mobileMenu = doc.getElementById("mobile-menu");

  if (toggle && mobileMenu) {
    let lastFocus = null;
    const supportsInert = "inert" in mobileMenu;

    if (supportsInert) mobileMenu.inert = true;

    const menuFocusables = function () {
      return [toggle].concat(Array.from(mobileMenu.querySelectorAll("a, button")));
    };

    const openMenu = function () {
      lastFocus = doc.activeElement;
      doc.body.classList.add("menu-open");
      if (supportsInert) mobileMenu.inert = false;
      mobileMenu.classList.add("is-open");
      mobileMenu.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", t("nav.close"));
      const first = mobileMenu.querySelector("a");
      if (first) {
        window.requestAnimationFrame(function () {
          first.focus();
        });
      }
    };

    const closeMenu = function () {
      doc.body.classList.remove("menu-open");
      mobileMenu.classList.remove("is-open");
      mobileMenu.setAttribute("aria-hidden", "true");
      if (supportsInert) mobileMenu.inert = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", t("nav.open"));
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    };

    toggle.addEventListener("click", function () {
      if (doc.body.classList.contains("menu-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileMenu.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });

    doc.addEventListener("keydown", function (event) {
      if (!doc.body.classList.contains("menu-open")) return;

      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key === "Tab") {
        const focusables = menuFocusables();
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && doc.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && doc.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1100 && doc.body.classList.contains("menu-open")) closeMenu();
    });

    doc.addEventListener("cresaris:languagechange", function () {
      const labelKey = doc.body.classList.contains("menu-open") ? "nav.close" : "nav.open";
      toggle.setAttribute("aria-label", t(labelKey));
    });
  }

  const revealItems = doc.querySelectorAll(".reveal");

  if (revealItems.length) {
    if (!reduceMotion && "IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

      revealItems.forEach(function (item) {
        revealObserver.observe(item);
      });
    } else {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
    }
  }

  const navLinks = Array.from(doc.querySelectorAll(".site-nav a"));
  const navSections = navLinks
    .map(function (link) {
      const id = link.getAttribute("href");
      return id && id.charAt(0) === "#" ? doc.querySelector(id) : null;
    })
    .filter(Boolean);

  if (navLinks.length && navSections.length) {
    let navTick = false;

    const updateActiveNav = function () {
      const marker = window.scrollY + 140;
      const contact = doc.getElementById("contact");
      let currentId = "";

      navSections.forEach(function (section) {
        if (section.offsetTop <= marker) currentId = "#" + section.id;
      });

      if (contact && contact.offsetTop <= marker) currentId = "";

      navLinks.forEach(function (link) {
        const isActive = link.getAttribute("href") === currentId;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });

      navTick = false;
    };

    window.addEventListener("scroll", function () {
      if (!navTick) {
        navTick = true;
        window.requestAnimationFrame(updateActiveNav);
      }
    }, { passive: true });

    updateActiveNav();
  }

  const clock = doc.querySelector("[data-astana-time]");
  if (clock) {
    const locales = { ru: "ru-RU", en: "en-GB", kk: "kk-KZ" };
    const makeFormatter = function () {
      const lang = window.CresarisI18n ? window.CresarisI18n.getLang() : "ru";
      return new Intl.DateTimeFormat(locales[lang] || "ru-RU", {
        timeZone: "Asia/Almaty",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
    };
    let formatter = makeFormatter();

    const tick = function () {
      clock.textContent = formatter.format(new Date());
    };

    tick();
    window.setInterval(tick, 30000);

    doc.addEventListener("cresaris:languagechange", function () {
      formatter = makeFormatter();
      tick();
    });
  }

  const hero = doc.querySelector(".hero");
  if (hero && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    let heroTick = false;
    let pointerX = 0;
    let pointerY = 0;

    hero.addEventListener("pointermove", function (event) {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (heroTick) return;
      heroTick = true;

      window.requestAnimationFrame(function () {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty("--mx", (pointerX - rect.left) + "px");
        hero.style.setProperty("--my", (pointerY - rect.top) + "px");
        heroTick = false;
      });
    });
  }

  const globe = doc.querySelector("[data-globe]");
  const globeCard = doc.querySelector("[data-route-card]");

  if (globe && globeCard && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    const SVG_NS = "http://www.w3.org/2000/svg";
    const RAD = Math.PI / 180;
    const DEG = 180 / Math.PI;
    const CX = 300;
    const CY = 300;
    const R = 250;
    const MIN_PITCH = -75 * RAD;
    const MAX_PITCH = 75 * RAD;

    const cities = [
      { id: "astana", label: "ASTANA", lat: 51.1694, lon: 71.4491, anchor: "start", dx: 12, dy: -12, hub: true },
      { id: "moscow", label: "MOSCOW", lat: 55.7558, lon: 37.6173, anchor: "middle", dx: 0, dy: -18 },
      { id: "london", label: "LONDON", lat: 51.5072, lon: -0.1276, anchor: "end", dx: -12, dy: 18 },
      { id: "hongkong", label: "HONG KONG", lat: 22.3193, lon: 114.1694, anchor: "end", dx: -12, dy: -14 },
      { id: "frankfurt", label: "FRANKFURT", lat: 50.1109, lon: 8.6821, anchor: "start", dx: 12, dy: 22 },
      { id: "dubai", label: "DUBAI", lat: 25.2048, lon: 55.2708, anchor: "start", dx: 12, dy: 16 },
      { id: "singapore", label: "SINGAPORE", lat: 1.3521, lon: 103.8198, anchor: "end", dx: -12, dy: 18 }
    ];

    const hub = cities[0];
    const gridGroup = globe.querySelector("[data-globe-grid]");
    const routeGroup = globe.querySelector("[data-globe-routes]");
    const cityGroup = globe.querySelector("[data-globe-cities]");
    const labelGroup = globe.querySelector("[data-globe-labels]");

    if (gridGroup && routeGroup && cityGroup && labelGroup) {
      let yaw = 40 * RAD;
      let pitch = 30 * RAD;
      let dragging = false;
      let pointerId = null;
      let lastX = 0;
      let lastY = 0;
      let lastMoveAt = 0;
      let velocityX = 0;
      let velocityY = 0;
      let inertiaFrame = 0;
      let renderFrame = 0;

      const project = function (lat, lon) {
        const phi = lat * RAD;
        const lambda = lon * RAD - yaw;
        const cosPhi = Math.cos(phi);
        const sinPhi = Math.sin(phi);
        const cosLambda = Math.cos(lambda);
        const sinLambda = Math.sin(lambda);
        const cosPitch = Math.cos(pitch);
        const sinPitch = Math.sin(pitch);
        return {
          x: CX + R * cosPhi * sinLambda,
          y: CY - R * (cosPitch * sinPhi - sinPitch * cosPhi * cosLambda),
          z: sinPitch * sinPhi + cosPitch * cosPhi * cosLambda
        };
      };

      const buildPath = function (points) {
        let d = "";
        let active = false;

        points.forEach(function (point) {
          if (point.z > 0.002) {
            d += (active ? "L" : "M") + point.x.toFixed(1) + " " + point.y.toFixed(1);
            active = true;
          } else {
            active = false;
          }
        });

        return d;
      };

      const toVector = function (lat, lon) {
        const phi = lat * RAD;
        const lambda = lon * RAD;
        const cosPhi = Math.cos(phi);
        return {
          x: cosPhi * Math.cos(lambda),
          y: cosPhi * Math.sin(lambda),
          z: Math.sin(phi)
        };
      };

      const routePoints = function (from, to) {
        const a = toVector(from.lat, from.lon);
        const b = toVector(to.lat, to.lon);
        const dot = Math.max(-1, Math.min(1, a.x * b.x + a.y * b.y + a.z * b.z));
        const omega = Math.acos(dot);
        const sinOmega = Math.sin(omega);
        const points = [];
        const steps = 96;

        for (let i = 0; i <= steps; i += 1) {
          const t = i / steps;
          let vector;

          if (sinOmega < 0.0001) {
            vector = a;
          } else {
            const scaleA = Math.sin((1 - t) * omega) / sinOmega;
            const scaleB = Math.sin(t * omega) / sinOmega;
            vector = {
              x: a.x * scaleA + b.x * scaleB,
              y: a.y * scaleA + b.y * scaleB,
              z: a.z * scaleA + b.z * scaleB
            };
          }

          const lat = Math.atan2(vector.z, Math.sqrt(vector.x * vector.x + vector.y * vector.y)) * DEG;
          const lon = Math.atan2(vector.y, vector.x) * DEG;
          points.push(project(lat, lon));
        }

        return points;
      };

      const gridItems = [];

      for (let lon = -180; lon < 180; lon += 30) {
        const path = doc.createElementNS(SVG_NS, "path");
        gridGroup.appendChild(path);
        gridItems.push({ el: path, type: "meridian", value: lon });
      }

      for (let lat = -75; lat <= 75; lat += 30) {
        const path = doc.createElementNS(SVG_NS, "path");
        if (lat === 0) path.setAttribute("class", "is-equator");
        gridGroup.appendChild(path);
        gridItems.push({ el: path, type: "parallel", value: lat });
      }

      const routeItems = cities.slice(1).map(function (city) {
        const path = doc.createElementNS(SVG_NS, "path");
        routeGroup.appendChild(path);
        return { el: path, city: city };
      });

      const cityItems = cities.map(function (city) {
        const group = doc.createElementNS(SVG_NS, "g");
        group.setAttribute("class", "globe-city" + (city.hub ? " is-hub" : ""));

        const halo = doc.createElementNS(SVG_NS, "circle");
        halo.setAttribute("class", "globe-city-halo");
        halo.setAttribute("r", city.hub ? "14" : "9");

        const dot = doc.createElementNS(SVG_NS, "circle");
        dot.setAttribute("class", "globe-city-dot");
        dot.setAttribute("r", city.hub ? "5" : "4");

        group.appendChild(halo);
        group.appendChild(dot);
        cityGroup.appendChild(group);

        const label = doc.createElementNS(SVG_NS, "text");
        if (city.hub) label.setAttribute("class", "is-hub");
        label.textContent = city.label;
        labelGroup.appendChild(label);

        return { city: city, group: group, label: label };
      });

      const draw = function () {
        gridItems.forEach(function (item) {
          const points = [];

          if (item.type === "meridian") {
            for (let lat = -90; lat <= 90; lat += 3) points.push(project(lat, item.value));
          } else {
            for (let lon = -180; lon <= 180; lon += 3) points.push(project(item.value, lon));
          }

          item.el.setAttribute("d", buildPath(points));
        });

        routeItems.forEach(function (item) {
          item.el.setAttribute("d", buildPath(routePoints(hub, item.city)));
        });

        cityItems.forEach(function (item) {
          const point = project(item.city.lat, item.city.lon);
          const visible = point.z > 0.01;
          item.group.classList.toggle("is-hidden", !visible);
          item.label.classList.toggle("is-hidden", !visible);

          if (!visible) return;

          item.group.setAttribute("transform", "translate(" + point.x.toFixed(1) + " " + point.y.toFixed(1) + ")");

          let anchor = item.city.anchor;
          if (point.x > 500) {
            anchor = "end";
          } else if (point.x < 100) {
            anchor = "start";
          }

          let offset = item.city.dx;
          if (anchor !== item.city.anchor) {
            offset = anchor === "end" ? -10 : 10;
          }

          const labelX = Math.max(12, Math.min(588, point.x + offset));
          const labelY = Math.max(18, Math.min(588, point.y + item.city.dy));

          item.label.setAttribute("x", labelX.toFixed(1));
          item.label.setAttribute("y", labelY.toFixed(1));
          item.label.setAttribute("text-anchor", anchor);
        });
      };

      const scheduleRender = function () {
        if (renderFrame) return;
        renderFrame = window.requestAnimationFrame(function () {
          renderFrame = 0;
          draw();
        });
      };

      const stopInertia = function () {
        if (!inertiaFrame) return;
        window.cancelAnimationFrame(inertiaFrame);
        inertiaFrame = 0;
      };

      const startInertia = function () {
        stopInertia();

        const step = function () {
          if (dragging) {
            inertiaFrame = 0;
            return;
          }

          if (Math.abs(velocityX) < 0.00005 && Math.abs(velocityY) < 0.00005) {
            inertiaFrame = 0;
            return;
          }

          yaw += velocityX;
          pitch = Math.max(MIN_PITCH, Math.min(MAX_PITCH, pitch + velocityY));
          velocityX *= 0.93;
          velocityY *= 0.93;
          draw();
          inertiaFrame = window.requestAnimationFrame(step);
        };

        inertiaFrame = window.requestAnimationFrame(step);
      };

      const endDrag = function (event) {
        if (!dragging || (event && event.pointerId !== pointerId)) return;

        dragging = false;
        pointerId = null;
        globeCard.classList.remove("is-dragging");

        if (Date.now() - lastMoveAt > 90) {
          velocityX = 0;
          velocityY = 0;
        }

        if (globe.hasPointerCapture && event && globe.hasPointerCapture(event.pointerId)) {
          globe.releasePointerCapture(event.pointerId);
        }

        startInertia();
      };

      globe.addEventListener("pointerdown", function (event) {
        if (event.button !== 0 || event.pointerType === "touch") return;

        dragging = true;
        pointerId = event.pointerId;
        lastX = event.clientX;
        lastY = event.clientY;
        lastMoveAt = Date.now();
        velocityX = 0;
        velocityY = 0;
        stopInertia();
        globeCard.classList.add("is-dragging");

        if (globe.setPointerCapture) globe.setPointerCapture(event.pointerId);
        event.preventDefault();
      });

      globe.addEventListener("pointermove", function (event) {
        if (!dragging || event.pointerId !== pointerId) return;

        const dx = event.clientX - lastX;
        const dy = event.clientY - lastY;
        lastX = event.clientX;
        lastY = event.clientY;
        lastMoveAt = Date.now();

        yaw -= dx * 0.006;
        pitch = Math.max(MIN_PITCH, Math.min(MAX_PITCH, pitch + dy * 0.006));
        velocityX = -dx * 0.006;
        velocityY = dy * 0.006;

        if (pitch === MIN_PITCH || pitch === MAX_PITCH) velocityY = 0;

        scheduleRender();
        event.preventDefault();
      });

      globe.addEventListener("pointerup", endDrag);
      globe.addEventListener("pointercancel", endDrag);
      globe.addEventListener("lostpointercapture", endDrag);

      draw();
      globeCard.classList.add("is-interactive");
    }
  }

  const faqItems = Array.from(doc.querySelectorAll(".faq-item"));
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  const form = doc.getElementById("contact-form");
  if (form) {
    const status = doc.getElementById("form-status");
    const submitButton = form.querySelector(".btn-submit");
    const FORM_ENDPOINT = "";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const fields = {
      name: form.elements.name,
      company: form.elements.company,
      email: form.elements.email,
      amount: form.elements.amount,
      sector: form.elements.sector,
      consent: form.elements.consent
    };

    const setFieldError = function (key, message) {
      const field = fields[key];
      const error = doc.getElementById(key + "-error");
      if (!field || !error) return;
      error.textContent = message || "";
      const wrapper = field.closest(".field");
      if (wrapper) wrapper.classList.toggle("has-error", Boolean(message));
      field.setAttribute("aria-invalid", message ? "true" : "false");
      if (message && error.id) field.setAttribute("aria-describedby", error.id);
    };

    const clearFieldError = function (key) {
      setFieldError(key, "");
    };

    Object.keys(fields).forEach(function (key) {
      const field = fields[key];
      if (!field) return;
      const eventName = field.type === "checkbox" || field.tagName === "SELECT" ? "change" : "input";
      field.addEventListener(eventName, function () {
        clearFieldError(key);
        if (status) {
          status.textContent = "";
          status.classList.remove("is-error");
        }
      });
    });

    doc.addEventListener("cresaris:languagechange", function () {
      Object.keys(fields).forEach(clearFieldError);
      if (status) {
        status.textContent = "";
        status.classList.remove("is-error");
      }
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      let firstInvalid = null;
      const errors = [];

      const name = fields.name.value.trim();
      const company = fields.company.value.trim();
      const email = fields.email.value.trim();
      const phone = form.elements.phone.value.trim();
      const amount = fields.amount.value;
      const sector = fields.sector.value;
      const message = form.elements.message.value.trim();

      if (!name) {
        errors.push("name");
        setFieldError("name", t("form.error.name"));
      } else {
        setFieldError("name", "");
      }

      if (!company) {
        errors.push("company");
        setFieldError("company", t("form.error.company"));
      } else {
        setFieldError("company", "");
      }

      if (!email) {
        errors.push("email");
        setFieldError("email", t("form.error.email.required"));
      } else if (!emailPattern.test(email)) {
        errors.push("email");
        setFieldError("email", t("form.error.email.format"));
      } else {
        setFieldError("email", "");
      }

      if (!amount) {
        errors.push("amount");
        setFieldError("amount", t("form.error.amount"));
      } else {
        setFieldError("amount", "");
      }

      if (!sector) {
        errors.push("sector");
        setFieldError("sector", t("form.error.sector"));
      } else {
        setFieldError("sector", "");
      }

      if (!fields.consent.checked) {
        errors.push("consent");
        setFieldError("consent", t("form.error.consent"));
      } else {
        setFieldError("consent", "");
      }

      if (errors.length) {
        firstInvalid = fields[errors[0]];
        if (status) {
          status.textContent = t("form.status.check");
          status.classList.add("is-error");
        }
        if (firstInvalid && typeof firstInvalid.focus === "function") firstInvalid.focus();
        return;
      }

      const payload = {
        name: name,
        company: company,
        email: email,
        phone: phone,
        amount: amount,
        sector: sector,
        message: message
      };

      const resetStatus = function () {
        if (!status) return;
        status.textContent = "";
        status.classList.remove("is-error");
      };

      if (!FORM_ENDPOINT) {
        const amountLabel = fields.amount.options[fields.amount.selectedIndex].text;
        const sectorLabel = fields.sector.options[fields.sector.selectedIndex].text;
        const subject = t("mail.subject", { company: company });
        const body = [
          t("mail.name") + ": " + name,
          t("mail.company") + ": " + company,
          t("mail.email") + ": " + email,
          t("mail.phone") + ": " + (phone || t("mail.notProvided")),
          t("mail.amount") + ": " + amountLabel,
          t("mail.sector") + ": " + sectorLabel,
          t("mail.message") + ": " + (message || t("mail.notSpecified")),
          "",
          t("mail.site")
        ].join("\n");

        const mailto = "mailto:invest.capital.center@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        window.location.href = mailto;
        resetStatus();
        if (status) status.textContent = t("form.status.mailto");
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
      }
      if (status) status.textContent = t("form.status.sending");

      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Request failed");
          form.reset();
          resetStatus();
          if (status) status.textContent = t("form.status.sent");
        })
        .catch(function () {
          if (status) {
            status.textContent = t("form.status.failed");
            status.classList.add("is-error");
          }
        })
        .finally(function () {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.removeAttribute("aria-busy");
          }
        });
    });
  }
})();
