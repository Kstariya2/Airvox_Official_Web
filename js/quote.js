/* ═══════════════════════════════════════════
   QUOTE FORM — Submit & Modal Integration
   ═══════════════════════════════════════════ */

const API_BASE = "http://localhost:3001/api";

(function() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const submitBtn = form.querySelector(".btn-submit");
  const originalBtnText = submitBtn ? submitBtn.textContent : "SEND INQUIRY →";

  /* ── Build Modal HTML ── */
  const modalHTML = `
    <div class="quote-modal-overlay" id="quoteModal">
      <div class="quote-modal">
        <button class="quote-modal-close" id="modalClose">✕</button>
        <div class="quote-modal-icon" id="modalIcon"></div>
        <h3 class="quote-modal-title" id="modalTitle"></h3>
        <p class="quote-modal-subtitle" id="modalSubtitle"></p>
        <p class="quote-modal-message" id="modalMessage"></p>
        <button class="quote-modal-btn" id="modalBtn"></button>
        <div class="quote-modal-timer" id="modalTimer">
          <div class="quote-modal-timer-bar" id="modalTimerBar"></div>
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const overlay = document.getElementById("quoteModal");
  const modalIcon = document.getElementById("modalIcon");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalMessage = document.getElementById("modalMessage");
  const modalBtn = document.getElementById("modalBtn");
  const modalClose = document.getElementById("modalClose");
  const modalTimer = document.getElementById("modalTimer");
  const modalTimerBar = document.getElementById("modalTimerBar");

  let autoCloseTimeout = null;

  /* ── Show Modal ── */
  function showModal(type) {
    /* Reset classes */
    modalIcon.className = "quote-modal-icon";
    modalTitle.className = "quote-modal-title";
    modalBtn.className = "quote-modal-btn";

    if (type === "success") {
      modalIcon.classList.add("success");
      modalIcon.innerHTML = "✓";
      modalTitle.classList.add("success");
      modalTitle.textContent = "Thank You!";
      modalSubtitle.textContent = "✅ Request Submitted Successfully";
      modalMessage.innerHTML = "Your quote request has been submitted successfully.<br>Our logistics team will review your request and contact you shortly.";
      modalBtn.classList.add("success");
      modalBtn.textContent = "Submit Another Request";
      modalTimer.style.display = "block";

      /* Restart timer animation */
      modalTimerBar.style.animation = "none";
      void modalTimerBar.offsetHeight; /* force reflow */
      modalTimerBar.style.animation = "timerShrink 5s linear forwards";

      /* Auto-close after 5 seconds */
      clearTimeout(autoCloseTimeout);
      autoCloseTimeout = setTimeout(hideModal, 5000);
    } else {
      modalIcon.classList.add("error");
      modalIcon.innerHTML = "✕";
      modalTitle.classList.add("error");
      modalTitle.textContent = "Submission Failed";
      modalSubtitle.textContent = "❌ Something Went Wrong";
      modalMessage.innerHTML = "We couldn't process your request right now.<br>Please try again later or contact support.";
      modalBtn.classList.add("error");
      modalBtn.textContent = "Try Again";
      modalTimer.style.display = "none";
      clearTimeout(autoCloseTimeout);
    }

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  /* ── Hide Modal ── */
  function hideModal() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    clearTimeout(autoCloseTimeout);
  }

  /* ── Modal Events ── */
  modalClose.addEventListener("click", hideModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) hideModal();
  });
  modalBtn.addEventListener("click", () => {
    hideModal();
    if (modalBtn.classList.contains("success")) {
      form.reset();
      clearValidation();
    }
  });

  /* ── Escape key ── */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) hideModal();
  });

  /* ── Client-Side Validation ── */
  function validateForm() {
    let valid = true;
    clearValidation();

    const fields = [
      { name: "fullName", msg: "Full name is required" },
      { name: "email", msg: "Email is required" },
      { name: "origin", msg: "Origin is required" },
      { name: "destination", msg: "Destination is required" },
      { name: "serviceType", msg: "Service type is required" }
    ];

    fields.forEach(f => {
      const input = form.querySelector(`[name="${f.name}"]`);
      if (!input) return;
      const val = input.value.trim();
      if (!val) {
        markInvalid(input, f.msg);
        valid = false;
      }
    });

    /* Email format check */
    const emailInput = form.querySelector('[name="email"]');
    if (emailInput && emailInput.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        markInvalid(emailInput, "Please enter a valid email");
        valid = false;
      }
    }

    return valid;
  }

  function markInvalid(input, message) {
    input.classList.add("invalid");
    const err = document.createElement("div");
    err.className = "field-error";
    err.textContent = message;
    input.parentNode.appendChild(err);
  }

  function clearValidation() {
    form.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
    form.querySelectorAll(".field-error").forEach(el => el.remove());
  }

  /* ── Form Submit Handler ── */
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    /* Gather form data */
    const formData = {
      fullName: form.querySelector('[name="fullName"]').value.trim(),
      company: (form.querySelector('[name="company"]')?.value || "").trim(),
      email: form.querySelector('[name="email"]').value.trim(),
      phone: (form.querySelector('[name="phone"]')?.value || "").trim(),
      origin: form.querySelector('[name="origin"]').value.trim(),
      destination: form.querySelector('[name="destination"]').value.trim(),
      serviceType: form.querySelector('[name="serviceType"]').value.trim(),
      shipmentDetails: (form.querySelector('[name="shipmentDetails"]')?.value || "").trim()
    };

    /* Loading state */
    submitBtn.disabled = true;
    submitBtn.classList.add("loading");
    submitBtn.textContent = "Submitting Request...";

    try {
      const response = await fetch(`${API_BASE}/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showModal("success");
        form.reset();
        clearValidation();
      } else {
        showModal("error");
      }
    } catch (err) {
      console.error("Quote submission error:", err);
      showModal("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove("loading");
      submitBtn.textContent = originalBtnText;
    }
  });

  /* ── Clear validation on input ── */
  form.querySelectorAll("input, select, textarea").forEach(el => {
    el.addEventListener("input", () => {
      el.classList.remove("invalid");
      const err = el.parentNode.querySelector(".field-error");
      if (err) err.remove();
    });
  });

})();
