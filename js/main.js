/**
 * main.js
 * Renders content from data.js into the page and wires up
 * navigation, mobile menu, and small progressive-enhancement behavior.
 * No frameworks, no build step — safe to open directly or host as-is.
 */

(function () {
  "use strict";

  const STATUS_LABEL = {
    "hands-on": "Hands-on",
    learning: "Learning",
    planned: "Planned",
    "in-progress": "In progress",
    completed: "Completed",
    unconfirmed: "Status: to confirm",
  };

  function el(tag, opts = {}, children = []) {
    const node = document.createElement(tag);
    if (opts.class) node.className = opts.class;
    if (opts.attrs) {
      Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
    }
    if (opts.text) node.textContent = opts.text;
    if (opts.html) node.innerHTML = opts.html;
    children.forEach((c) => c && node.appendChild(c));
    return node;
  }

  /* ---------------------------------------------------------------- */
  /* About: info panel                                                 */
  /* ---------------------------------------------------------------- */
  function renderInfoPanel() {
    const dl = document.getElementById("infoPanel");
    if (!dl) return;
    const rows = [
      ["University", "Menoufia University"],
      ["Department", SITE.department],
      ["Career Focus", "SOC Analyst"],
      ["Expected Graduation", SITE.graduation],
      ["Learning Approach", "Hands-on Practice"],
    ];
    rows.forEach(([label, value]) => {
      const row = el("div", { class: "row" }, [
        el("dt", { text: label }),
        el("dd", { text: value }),
      ]);
      dl.appendChild(row);
    });

    if (typeof LANGUAGES !== "undefined" && LANGUAGES.length) {
      const langRow = el("div", { class: "row" }, [
        el("dt", { text: "Languages" }),
        el(
          "dd",
          { text: LANGUAGES.map((l) => `${l.name} (${l.level})`).join(" · ") }
        ),
      ]);
      dl.appendChild(langRow);
    }
  }

  /* ---------------------------------------------------------------- */
  /* Skills                                                             */
  /* ---------------------------------------------------------------- */
  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;
    SKILLS.forEach((cat) => {
      const badges = el(
        "div",
        { class: "skill-badges" },
        cat.items.map((item) =>
          el("span", {
            class: "badge",
            attrs: { "data-status": item.status },
            html: `<span class="badge-dot" aria-hidden="true"></span>${item.name} — <span style="color:inherit">${STATUS_LABEL[item.status]}</span>`,
          })
        )
      );
      const panel = el("div", { class: "skill-panel reveal" }, [
        el("h3", { text: cat.category }),
        badges,
      ]);
      grid.appendChild(panel);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Learning journey                                                   */
  /* ---------------------------------------------------------------- */
  function renderJourney() {
    const list = document.getElementById("journeyList");
    if (!list) return;
    JOURNEY.forEach((step, i) => {
      const item = el("li", { class: "journey-item reveal" }, [
        el("span", { class: "journey-index", text: String(i + 1).padStart(2, "0") }),
        el("h3", { text: step.title }),
        el("p", { text: step.description }),
      ]);
      list.appendChild(item);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Projects                                                           */
  /* ---------------------------------------------------------------- */
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    PROJECTS.forEach((project, i) => {
      const tags = el(
        "div",
        { class: "tech-tags" },
        project.tech.map((t) => el("span", { class: "tech-tag", text: t }))
      );

      const actions = el("div", { class: "project-actions" });

      if (project.plannedFeatures && project.plannedFeatures.length) {
        const toggleId = `details-${i}`;
        const toggleBtn = el("button", {
          class: "btn btn-secondary",
          attrs: { type: "button", "aria-expanded": "false", "aria-controls": toggleId },
          text: "View Details",
        });
        const details = el("div", {
          class: "details-panel",
          attrs: { id: toggleId, hidden: "" },
        });
        details.appendChild(el("p", { text: "Planned features:" }));
        details.appendChild(
          el(
            "ul",
            {},
            project.plannedFeatures.map((f) => el("li", { text: f }))
          )
        );
        toggleBtn.addEventListener("click", () => {
          const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
          toggleBtn.setAttribute("aria-expanded", String(!expanded));
          toggleBtn.textContent = expanded ? "View Details" : "Hide Details";
          if (expanded) details.setAttribute("hidden", "");
          else details.removeAttribute("hidden");
        });
        actions.appendChild(toggleBtn);

        if (project.github) {
          actions.appendChild(
            el("a", {
              class: "btn btn-secondary",
              attrs: { href: project.github, target: "_blank", rel: "noopener noreferrer" },
              text: "GitHub",
            })
          );
        }

        const card = el("div", { class: "project-card reveal" }, [
          el("span", { class: "status-pill", attrs: { "data-status": project.status }, text: STATUS_LABEL[project.status] || project.status }),
          el("h3", { text: project.title }),
          el("p", { class: "desc", text: project.description }),
          tags,
          actions,
          details,
        ]);
        grid.appendChild(card);
        return;
      }

      if (project.github) {
        actions.appendChild(
          el("a", {
            class: "btn btn-secondary",
            attrs: { href: project.github, target: "_blank", rel: "noopener noreferrer" },
            text: "GitHub",
          })
        );
      } else {
        actions.appendChild(
          el("span", {
            class: "btn btn-disabled",
            attrs: { "aria-disabled": "true", title: "Repository not published yet" },
            text: "GitHub — Coming Soon",
          })
        );
      }

      const card = el("div", { class: "project-card reveal" }, [
        el("span", { class: "status-pill", attrs: { "data-status": project.status }, text: STATUS_LABEL[project.status] || project.status }),
        el("h3", { text: project.title }),
        el("p", { class: "desc", text: project.description }),
        tags,
        actions,
      ]);
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Certifications                                                      */
  /* ---------------------------------------------------------------- */
  function renderCertifications() {
    const list = document.getElementById("certList");
    if (!list) return;
    CERTIFICATIONS.forEach((cert) => {
      const row = el("div", { class: "cert-row reveal" }, [
        el("div", {}, [
          el("div", { class: "cert-name", text: cert.name }),
          el("div", { class: "cert-provider", text: cert.provider }),
        ]),
        el("span", { class: "status-pill", attrs: { "data-status": cert.status === "unconfirmed" ? "planned" : cert.status }, text: STATUS_LABEL[cert.status] || cert.status }),
        el("span", { class: "cert-date", text: cert.date || "—" }),
      ]);
      list.appendChild(row);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Write-ups                                                           */
  /* ---------------------------------------------------------------- */
  function renderWriteups() {
    const grid = document.getElementById("writeupsGrid");
    if (!grid) return;
    WRITEUPS.forEach((w) => {
      const card = el("div", { class: "writeup-card reveal" }, [
        el("span", { class: "writeup-category", text: w.category }),
        el("h3", { text: w.title }),
        el("p", { text: w.description }),
        w.link
          ? el("a", { class: "btn btn-secondary", attrs: { href: w.link, target: "_blank", rel: "noopener noreferrer" }, text: "Read" })
          : el("span", { class: "btn btn-disabled", attrs: { "aria-disabled": "true" }, text: w.status }),
      ]);
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Contact panel + footer + nav links (LinkedIn / GitHub / Email)     */
  /* ---------------------------------------------------------------- */
  function renderContactAndLinks() {
    const linkedinCta = document.getElementById("linkedinCta");
    if (linkedinCta) linkedinCta.href = SITE.linkedin;

    const panel = document.getElementById("contactPanel");
    if (panel) {
      const linkedin = el("a", {
        class: "contact-link",
        attrs: { href: SITE.linkedin, target: "_blank", rel: "noopener noreferrer" },
        html: `<span>LinkedIn<small>Professional profile</small></span><span aria-hidden="true">↗</span>`,
      });
      panel.appendChild(linkedin);

      if (SITE.github) {
        panel.appendChild(
          el("a", {
            class: "contact-link",
            attrs: { href: SITE.github, target: "_blank", rel: "noopener noreferrer" },
            html: `<span>GitHub<small>Code & project repositories</small></span><span aria-hidden="true">↗</span>`,
          })
        );
      } else {
        panel.appendChild(
          el("span", {
            class: "contact-link",
            attrs: { "aria-disabled": "true" },
            html: `<span>GitHub<small>Coming soon — profile not created yet</small></span>`,
          })
        );
      }

      if (SITE.email) {
        panel.appendChild(
          el("a", {
            class: "contact-link",
            attrs: { href: `mailto:${SITE.email}` },
            html: `<span>Email<small>${SITE.email}</small></span><span aria-hidden="true">↗</span>`,
          })
        );
      } else {
        panel.appendChild(
          el("span", {
            class: "contact-link",
            attrs: { "aria-disabled": "true" },
            html: `<span>Email<small>Not published yet — use LinkedIn</small></span>`,
          })
        );
      }
    }

    const footerLinks = document.getElementById("footerLinks");
    if (footerLinks) {
      footerLinks.appendChild(
        el("a", { attrs: { href: SITE.linkedin, target: "_blank", rel: "noopener noreferrer" }, text: "LinkedIn" })
      );
      if (SITE.github) {
        footerLinks.appendChild(
          el("a", { attrs: { href: SITE.github, target: "_blank", rel: "noopener noreferrer" }, text: "GitHub" })
        );
      } else {
        footerLinks.appendChild(el("span", { attrs: { "aria-disabled": "true" }, text: "GitHub (soon)" }));
      }
    }

    const copyright = document.getElementById("copyright");
    if (copyright) {
      copyright.textContent = `© ${new Date().getFullYear()} ${SITE.name}. Built with intent, not templates.`;
    }
  }

  /* ---------------------------------------------------------------- */
  /* Mobile nav                                                          */
  /* ---------------------------------------------------------------- */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Active-section highlighting
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navAnchors = Array.from(links.querySelectorAll("a"));
    if ("IntersectionObserver" in window && sections.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navAnchors.forEach((a) => a.classList.remove("active"));
            const match = navAnchors.find((a) => a.getAttribute("href") === `#${entry.target.id}`);
            if (match) match.classList.add("active");
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach((s) => observer.observe(s));
    }
  }

  /* ---------------------------------------------------------------- */
  /* Scroll reveal (restrained, respects reduced motion)                */
  /* ---------------------------------------------------------------- */
  function initReveal() {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = document.querySelectorAll(".reveal");
    if (prefersReduced || !("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((i) => observer.observe(i));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderInfoPanel();
    renderSkills();
    renderJourney();
    renderProjects();
    renderCertifications();
    renderWriteups();
    renderContactAndLinks();
    initNav();
    initReveal();
  });
})();
