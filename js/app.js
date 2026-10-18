// Manhattan School PWA - Main Application Script
document.addEventListener('DOMContentLoaded', () => {
  // 1. Tab Switching System
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function switchTab(targetTabId) {
    tabButtons.forEach(btn => {
      const isTarget = btn.getAttribute('data-tab') === targetTabId;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    tabPanels.forEach(panel => {
      const isTarget = panel.id === targetTabId;
      panel.classList.toggle('active', isTarget);
    });

    // Update URL hash without jump
    if (history.pushState) {
      history.pushState(null, null, `#${targetTabId}`);
    } else {
      location.hash = `#${targetTabId}`;
    }

    // Scroll smoothly to main top
    const mainEl = document.querySelector('main.main-content');
    if (mainEl && window.scrollY > 180) {
      mainEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      switchTab(targetId);
    });
  });

  // Handle direct hash navigation
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(initialHash)) {
    switchTab(initialHash);
  }

  // 2. Interactive Student Evaluation Simulators & Modal Preview
  const previewButtons = document.querySelectorAll('.btn-preview-student');
  previewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const student = e.currentTarget.getAttribute('data-student');
      openStudentModal(student);
    });
  });

  function openStudentModal(studentName) {
    const modal = document.getElementById('student-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    if (!modal) return;

    let contentHtml = '';
    if (studentName === 'Adilene') {
      modalTitle.innerText = 'Proyecto de Adilene. B — Fundamentos de Computación & Hardware';
      contentHtml = `
        <div style="background:#ffffff; border:1px solid #dbeafe; border-radius:12px; padding:1.25rem; color:#0f172a; box-shadow:0 4px 16px rgba(15,43,76,0.06);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
            <div>
              <h4 style="color:#163b65; font-size:1.15rem; font-weight:700;">🌟 Autoría: Adilene. B</h4>
              <p style="font-size:0.85rem; color:#64748b;">Clase de Fundamentos de Computación • 18 de Octubre de 2026</p>
            </div>
            <a href="evaluaciones/evaluacion_adilene.html" target="_blank" class="btn btn-primary" style="padding:0.45rem 1rem; font-size:0.85rem;">
              <span>↗️</span> Abrir Web en Pantalla Completa
            </a>
          </div>

          <div style="background:#f8fafc; padding:1rem; border-radius:8px; margin-bottom:1rem; border-left:4px solid #163b65; border:1px solid #e2e8f0; border-left-width:4px;">
            <p style="font-weight:bold; color:#163b65; font-size:0.85rem; margin-bottom:0.25rem;">Explicación de Adilene a Gemini:</p>
            <p style="font-style:italic; font-size:0.9rem; color:#334155;">
              "La computadora tiene dos partes fundamentales: el Hardware que podemos tocar físicamente y el Software que son los programas. Además aprendí los bits, bytes y las partes del gabinete."
            </p>
          </div>

          <div style="border-radius:8px; overflow:hidden; border:1px solid #e2e8f0; background:#f8fafc; margin-bottom:1rem;">
            <div style="background:#f1f5f9; padding:0.5rem 0.75rem; font-size:0.8rem; color:#475569; display:flex; justify-content:space-between; border-bottom:1px solid #e2e8f0;">
              <span>🖥️ Vista Previa Interactiva de su Página</span>
              <span style="color:#059669; font-weight:700;">● En Vivo</span>
            </div>
            <iframe src="evaluaciones/evaluacion_adilene.html" style="width:100%; height:450px; border:none; display:block;" title="Página Web de Adilene. B"></iframe>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
            <span style="color:#059669; font-weight:700;">✅ Archivo: evaluaciones/evaluacion_adilene.html</span>
            <span style="color:#64748b;">Sede: Zirándaro de los Chávez</span>
          </div>
        </div>
      `;
    } else if (studentName === 'Aylani') {
      modalTitle.innerText = 'Proyecto de Aylani. B — Hardware, Software y Componentes';
      contentHtml = `
        <div style="background:#ffffff; border:1px solid #a7f3d0; border-radius:12px; padding:1.25rem; color:#0f172a; box-shadow:0 4px 16px rgba(15,43,76,0.06);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
            <div>
              <h4 style="color:#059669; font-size:1.15rem; font-weight:700;">🌟 Autoría: Aylani. B</h4>
              <p style="font-size:0.85rem; color:#64748b;">Apuntes Interactivos de Computación • 18 de Octubre de 2026</p>
            </div>
            <a href="evaluaciones/evaluacion_aylani.html" target="_blank" class="btn btn-primary" style="padding:0.45rem 1rem; font-size:0.85rem; background:linear-gradient(135deg, #059669, #047857);">
              <span>↗️</span> Abrir Web en Pantalla Completa
            </a>
          </div>

          <div style="background:#f8fafc; padding:1rem; border-radius:8px; margin-bottom:1rem; border-left:4px solid #059669; border:1px solid #e2e8f0; border-left-width:4px;">
            <p style="font-weight:bold; color:#059669; font-size:0.85rem; margin-bottom:0.25rem;">Explicación de Aylani a Gemini:</p>
            <p style="font-style:italic; font-size:0.9rem; color:#334155;">
              "El hardware es lo tangible, lo que podemos conectar y armar como teclado y procesador. El software son los programas, el sistema operativo y las aplicaciones que dan vida a la máquina."
            </p>
          </div>

          <div style="border-radius:8px; overflow:hidden; border:1px solid #e2e8f0; background:#f8fafc; margin-bottom:1rem;">
            <div style="background:#f1f5f9; padding:0.5rem 0.75rem; font-size:0.8rem; color:#475569; display:flex; justify-content:space-between; border-bottom:1px solid #e2e8f0;">
              <span>🖥️ Vista Previa Interactiva de su Página</span>
              <span style="color:#059669; font-weight:700;">● En Vivo</span>
            </div>
            <iframe src="evaluaciones/evaluacion_aylani.html" style="width:100%; height:450px; border:none; display:block;" title="Página Web de Aylani. B"></iframe>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
            <span style="color:#059669; font-weight:700;">✅ Archivo: evaluaciones/evaluacion_aylani.html</span>
            <span style="color:#64748b;">Sede: Zirándaro de los Chávez</span>
          </div>
        </div>
      `;
    } else if (studentName === 'Ronaldo') {
      modalTitle.innerText = 'Proyecto de Ronaldo Pineda Andaya — MiClaseTech & Unidades de Medida';
      contentHtml = `
        <div style="background:#ffffff; border:1px solid #fecdd3; border-radius:12px; padding:1.25rem; color:#0f172a; box-shadow:0 4px 16px rgba(15,43,76,0.06);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
            <div>
              <h4 style="color:#e11d48; font-size:1.15rem; font-weight:700;">🌟 Autoría: Ronaldo Pineda Andaya</h4>
              <p style="font-size:0.85rem; color:#64748b;">Evaluación de Clase MiClaseTech • 18 de Octubre de 2026</p>
            </div>
            <a href="evaluaciones/evaluacion_ronaldo.html" target="_blank" class="btn btn-red" style="padding:0.45rem 1rem; font-size:0.85rem;">
              <span>↗️</span> Abrir Web en Pantalla Completa
            </a>
          </div>

          <div style="background:#f8fafc; padding:1rem; border-radius:8px; margin-bottom:1rem; border-left:4px solid #e11d48; border:1px solid #e2e8f0; border-left-width:4px;">
            <p style="font-weight:bold; color:#e11d48; font-size:0.85rem; margin-bottom:0.25rem;">Explicación de Ronaldo a Gemini:</p>
            <p style="font-style:italic; font-size:0.9rem; color:#334155;">
              "Aprendimos hardware interno y externo, periféricos, software y las unidades de medida: 1 Bit, Byte (8 bits), KB (1,000 bytes), MB (1,000 KB), GB (1,000 MB) y el transporte de datos."
            </p>
          </div>

          <div style="border-radius:8px; overflow:hidden; border:1px solid #e2e8f0; background:#f8fafc; margin-bottom:1rem;">
            <div style="background:#f1f5f9; padding:0.5rem 0.75rem; font-size:0.8rem; color:#475569; display:flex; justify-content:space-between; border-bottom:1px solid #e2e8f0;">
              <span>🖥️ Vista Previa Interactiva de su Página</span>
              <span style="color:#059669; font-weight:700;">● En Vivo</span>
            </div>
            <iframe src="evaluaciones/evaluacion_ronaldo.html" style="width:100%; height:450px; border:none; display:block;" title="Página Web de Ronaldo Pineda Andaya"></iframe>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
            <span style="color:#059669; font-weight:700;">✅ Archivo: evaluaciones/evaluacion_ronaldo.html</span>
            <span style="color:#64748b;">Sede: Zirándaro de los Chávez</span>
          </div>
        </div>
      `;
    }

    modalContent.innerHTML = contentHtml;
    modal.style.display = 'flex';
  }

  // Close modal logic
  const closeModalBtn = document.getElementById('modal-close-btn');
  const modalEl = document.getElementById('student-modal');
  if (closeModalBtn && modalEl) {
    closeModalBtn.addEventListener('click', () => {
      modalEl.style.display = 'none';
      const iframe = modalEl.querySelector('iframe');
      if (iframe) iframe.src = 'about:blank';
    });
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) {
        modalEl.style.display = 'none';
        const iframe = modalEl.querySelector('iframe');
        if (iframe) iframe.src = 'about:blank';
      }
    });
  }

  // 3. Live Showcase Tab Switcher
  const showcaseTabs = document.querySelectorAll('.showcase-tab-btn');
  const showcaseIframe = document.getElementById('showcase-iframe');
  const showcaseTitle = document.getElementById('showcase-student-title');
  const showcaseLink = document.getElementById('showcase-external-link');

  showcaseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      showcaseTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const fileUrl = tab.getAttribute('data-url');
      const studentName = tab.getAttribute('data-name');

      if (showcaseIframe) showcaseIframe.src = fileUrl;
      if (showcaseTitle) showcaseTitle.innerText = `Página Web de ${studentName}`;
      if (showcaseLink) showcaseLink.href = fileUrl;
    });
  });

  // 4. PWA Installation Handling
  let deferredPrompt;
  const pwaInstallBtn = document.getElementById('btn-pwa-install');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (pwaInstallBtn) {
      pwaInstallBtn.style.display = 'inline-flex';
    }
  });

  if (pwaInstallBtn) {
    pwaInstallBtn.addEventListener('click', async () => {
      if (!deferredPrompt) {
        alert('Para instalar esta aplicación, pulsa el menú de tu navegador y selecciona "Agregar a la pantalla principal" o "Instalar".');
        return;
      }
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`PWA Install Choice outcome: ${outcome}`);
      deferredPrompt = null;
      pwaInstallBtn.style.display = 'none';
    });
  }

  window.addEventListener('appinstalled', () => {
    console.log('Manhattan School PWA instalada exitosamente');
    if (pwaInstallBtn) pwaInstallBtn.style.display = 'none';
  });

  // 5. Service Worker Registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('Service Worker registrado con éxito:', reg.scope);
      })
      .catch((err) => {
        console.log('Fallo en el registro del Service Worker:', err);
      });
  }
});
