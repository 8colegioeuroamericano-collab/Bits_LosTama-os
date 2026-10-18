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

  // 2. Interactive Student Evaluation Simulators
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
      modalTitle.innerText = 'Proyecto Web de Adilene • Componentes y Periféricos';
      contentHtml = `
        <div style="background:#0a192f; border:1px solid #1e3a8a; border-radius:12px; padding:1.5rem; color:#e2e8f0;">
          <h4 style="color:#fbbf24; font-size:1.15rem; margin-bottom:0.75rem;">🌟 Lo que Adilene le explicó a Gemini:</h4>
          <p style="font-style:italic; margin-bottom:1rem; color:#94a3b8;">
            "Aprendí que la computadora tiene partes que podemos tocar como el teclado y el ratón para meter datos (periféricos de entrada), y la pantalla e impresora para ver los resultados (salida). El CPU es el cerebro que piensa todo."
          </p>
          <div style="background:#112240; padding:1rem; border-radius:8px; margin-bottom:1rem;">
            <p style="font-weight:bold; color:#38bdf8; margin-bottom:0.5rem;">🤖 Código Web Estructurado por Gemini para Adilene:</p>
            <pre style="background:#020617; padding:0.75rem; border-radius:6px; font-size:0.8rem; overflow-x:auto; color:#a7f3d0;">
&lt;section class="tarjeta-adilene"&gt;
  &lt;h2&gt;Mis Periféricos Favoritos&lt;/h2&gt;
  &lt;ul&gt;
    &lt;li&gt;⌨️ Teclado: Escribo las tareas&lt;/li&gt;
    &lt;li&gt;🖱️ Mouse: Apunto y selecciono&lt;/li&gt;
    &lt;li&gt;🖥️ Monitor: Veo mis avances&lt;/li&gt;
  &lt;/ul&gt;
&lt;/section&gt;</pre>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="color:#10b981; font-weight:700;">✅ Estado: Evaluada con éxito (18/10/2026)</span>
            <span style="font-size:0.85rem; color:#94a3b8;">Sede: Zirándaro</span>
          </div>
        </div>
      `;
    } else if (studentName === 'Aylani') {
      modalTitle.innerText = 'Proyecto Web de Aylani • Software vs Hardware';
      contentHtml = `
        <div style="background:#0a192f; border:1px solid #065f46; border-radius:12px; padding:1.5rem; color:#e2e8f0;">
          <h4 style="color:#34d399; font-size:1.15rem; margin-bottom:0.75rem;">🌟 Lo que Aylani le explicó a Gemini:</h4>
          <p style="font-style:italic; margin-bottom:1rem; color:#94a3b8;">
            "El hardware es todo lo duro que se puede golpear o tocar en una máquina, y el software es el alma, como Windows, los navegadores y los juegos que corren dentro."
          </p>
          <div style="background:#112240; padding:1rem; border-radius:8px; margin-bottom:1rem;">
            <p style="font-weight:bold; color:#38bdf8; margin-bottom:0.5rem;">🤖 Código Web Estructurado por Gemini para Aylani:</p>
            <pre style="background:#020617; padding:0.75rem; border-radius:6px; font-size:0.8rem; overflow-x:auto; color:#a7f3d0;">
&lt;div class="software-hardware-duo"&gt;
  &lt;div class="caja-hw"&gt;Hardware: Gabinete, Pantalla, Bocinas&lt;/div&gt;
  &lt;div class="caja-sw"&gt;Software: Windows, Google Chrome, Paint&lt;/div&gt;
&lt;/div&gt;</pre>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="color:#10b981; font-weight:700;">✅ Estado: Evaluada con éxito (18/10/2026)</span>
            <span style="font-size:0.85rem; color:#94a3b8;">Sede: Zirándaro</span>
          </div>
        </div>
      `;
    } else if (studentName === 'Ronaldo') {
      modalTitle.innerText = 'Proyecto Web de Ronaldo • La Cosecha Digital';
      contentHtml = `
        <div style="background:#0a192f; border:1px solid #0e7490; border-radius:12px; padding:1.5rem; color:#e2e8f0;">
          <h4 style="color:#38bdf8; font-size:1.15rem; margin-bottom:0.75rem;">🌟 Lo que Ronaldo le explicó a Gemini:</h4>
          <p style="font-style:italic; margin-bottom:1rem; color:#94a3b8;">
            "1 Bit es como un solo granito de maíz. Con 8 granitos hacemos 1 mazorca completa que es 1 Byte. Con 1,000 mazorcas llenamos 1 costal que es 1 Kilobyte. Con 1,000 costales cargamos la camioneta que es 1 Megabyte, y con 1,000 camionetas llenamos la bodega que es 1 Gigabyte."
          </p>
          <div style="background:#112240; padding:1rem; border-radius:8px; margin-bottom:1rem;">
            <p style="font-weight:bold; color:#38bdf8; margin-bottom:0.5rem;">🤖 Código Web Estructurado por Gemini para Ronaldo:</p>
            <pre style="background:#020617; padding:0.75rem; border-radius:6px; font-size:0.8rem; overflow-x:auto; color:#a7f3d0;">
&lt;div class="cosecha-ronaldo"&gt;
  &lt;span&gt;🌽 1 Byte = 8 Bits&lt;/span&gt;
  &lt;span&gt;🌾 1 KB = 1,000 Bytes&lt;/span&gt;
  &lt;span&gt;🛻 1 MB = 1,000 KB&lt;/span&gt;
  &lt;span&gt;🏢 1 GB = 1,000 MB&lt;/span&gt;
&lt;/div&gt;</pre>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="color:#10b981; font-weight:700;">✅ Estado: Evaluado con éxito (18/10/2026)</span>
            <span style="font-size:0.85rem; color:#94a3b8;">Sede: Zirándaro</span>
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
    });
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) modalEl.style.display = 'none';
    });
  }

  // 3. PWA Installation Handling
  let deferredPrompt;
  const pwaInstallBtn = document.getElementById('btn-pwa-install');

  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent default mini-infobar
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

  // 4. Service Worker Registration
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
