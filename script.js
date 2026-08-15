

document.addEventListener('DOMContentLoaded', () => {

 
    const proyectos = [
        {
            id: 'proyecto-01',
            titulo: "Identidad Visual Marca JVAC",
            categoria: "identidad",
            categoriaLabel: "Identidad Visual",
            descripcion: "Desarrollo de identidad de marca completa, sistema tipográfico, paleta de colores ajustada, brand mascot, mascot logo, character logo.",
            imagenPrincipal: "assets/Untitled design (1).png",
            galeria: [
                "assets/6B9BF37E-919B-4641-B8BD-440134683A12.png",
                "assets/Untitled design.png","assets/Untitled design (2).png", "assets/Paleta.png"
                
            ],
            cliente: "Cliente Confidencial",
            anio: "2026",
            servicios: ["Branding", "Logotipo", "Manual de Marca", "brand mascot", "mascot logo"],
            herramientas: ["Figma", "Inkscape"]
        },
        {
            id: 'proyecto-02',
            titulo: "Identidad Visual Marca Rachet",
            categoria: "Identidad",
            categoriaLabel: "Identidad Visual",
            descripcion:  "Desarrollo de identidad de marca completa, sistema tipográfico, paleta de colores ajustada, brand mascot, mascot logo, character logo.",
            imagenPrincipal: "assets/Untitled (11).png",
            galeria: [
                "assets/Untitled (12).png","assets/3CF46A49-5840-4903-8FB2-93AD858EDFB8.png","assets/E01338C1-927E-4F77-BC3B-4A13019A2575.jpg","assets/scene_2026-07-22.png","assets/IMG_3823.PNG","assets/Untitled (11).png"
            ],
            cliente: "Cliente Confidencial",
            anio: "2026",
            servicios: ["Branding", "Logotipo", "Manual de Marca", "brand mascot", "mascot logo"],
            herramientas: ["Figma", "Inkscape"]
        },
        {
            id: 'proyecto-03',
            titulo: "Campaña Gráfica Redes Sociales",
            categoria: "diseno-digital",
            categoriaLabel: "Diseño Digital",
            descripcion: "Estrategia de comunicación visual y diseño de piezas para redes sociales orientadas a posicionamiento contemporáneo de marca.",
            imagenPrincipal: "assets/IMG_4830.PNG",
            galeria: [ "assets/IMG_4830.PNG","assets/C66A2B59-3861-4FBE-913C-5398C3ED8438.png","assets/A9755C2C-480A-48B0-9759-19B22C28D229.png",   ,"assets/A9755C2C-480A-48B0-9759-19B22C28D229.png"         ],
            cliente: "12 BARRTIOS,@12barrios en todas las redes sociales",
            año: "2026",
            servicios: ["Social Media Design", "Banners", "Motion Graphics"],
            herramientas: ["Photoshop", "Fotografia", "Figma",]
        },
        {
            id: 'proyecto-04',
            titulo: "Producción & Edición Audiovisual",
            categoria: "multimedia",
            categoriaLabel: "Multimedia",
            descripcion: "Generación de contenido audiovisual corto, edición de video promocional y corrección de color para plataformas digitales.",
            imagenPrincipal: "assets/projects/proyecto-04.jpg",
            galeria: [
                "assets/projects/proyecto-04.jpg"
            ],
            cliente: "Proyecto Cultural",
            anio: "2025",
            servicios: ["Dirección de Video", "Edición Audiovisual", "Color Grading"],
            herramientas: ["Premiere Pro", "After Effects", "Lightroom"]
        },
        {
            id: 'proyecto-05',
            titulo: "Rediseño de Sistema de Logotipos",
            categoria: "identidad",
            categoriaLabel: "Identidad Visual",
            descripcion: "Rediseño conceptual de imagotipo y síntesis gráfica para adaptar una marca tradicional a entornos de comunicación digital moderna.",
            imagenPrincipal: "assets/projects/proyecto-05.jpg",
            galeria: [
                "assets/projects/proyecto-05.jpg"
            ],
            cliente: "JVAC Studio",
            anio: "2026",
            servicios: ["Rediseño de Logo", "Vectorización", "Iconografía"],
            herramientas: ["Illustrator"]
        },
        {
            id: 'proyecto-06',
            titulo: "Landing Page de Conversión",
            categoria: "web",
            categoriaLabel: "Diseño & Desarrollo Web",
            descripcion: "Diseño de interfaz limpia y optimizada para la captación de clientes con microinteracciones y arquitectura visual clara.",
            imagenPrincipal: "assets/projects/proyecto-06.jpg",
            galeria: [
                "assets/projects/proyecto-06.jpg"
            ],
            cliente: "Startup Digital",
            anio: "2026",
            servicios: ["Landing Page", "Desarrollo Web"],
            herramientas: ["HTML5", "CSS3", "JavaScript"]
        }
    ];

    const portfolioGrid = document.getElementById('portfolioGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    function renderProjects(categoryFilter = 'todos') {
        if (!portfolioGrid) return;
        portfolioGrid.innerHTML = '';

        const proyectosFiltrados = categoryFilter === 'todos' 
            ? proyectos 
            : proyectos.filter(p => p.categoria === categoryFilter);

        if (proyectosFiltrados.length === 0) {
            portfolioGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; opacity: 0.7; padding: 40px 0;">No hay proyectos disponibles en esta categoría por el momento.</p>';
            return;
        }

        proyectosFiltrados.forEach(proyecto => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('data-id', proyecto.id);

            card.innerHTML = `
                <div class="project-thumb">
                    <img src="${proyecto.imagenPrincipal}" alt="${proyecto.titulo}" onerror="this.onerror=null; this.src='assets/img/yo.jpg';">
                    <div class="project-overlay">
                        <span class="project-view-btn">VER PROYECTO &rarr;</span>
                    </div>
                </div>
                <div class="project-details">
                    <span class="project-category">${proyecto.categoriaLabel}</span>
                    <h3 class="project-title">${proyecto.titulo}</h3>
                    <p class="project-desc">${proyecto.descripcion}</p>
                    <div class="project-meta">
                        <span>${proyecto.cliente}</span>
                        <span>${proyecto.anio}</span>
                    </div>
                </div>
            `;

            // Evento para abrir modal al hacer click
            card.addEventListener('click', () => openProjectModal(proyecto));
            portfolioGrid.appendChild(card);
        });
    }

   
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            renderProjects(filterValue);
        });
    });


    renderProjects();
    const projectModal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalOverlay = document.getElementById('modalOverlay');

    function openProjectModal(proyecto) {
        if (!projectModal || !modalContent) return;

        const serviciosHTML = proyecto.servicios.map(s => `<li>${s}</li>`).join('');
        const herramientasHTML = proyecto.herramientas.map(h => `<span class="tool-chip">${h}</span>`).join(' ');
        
        const galeriaHTML = proyecto.galeria.map(img => 
            `<img src="${img}" alt="${proyecto.titulo}" onerror="this.onerror=null; this.src='assets/img/yo.jpg';">`
        ).join('');

        modalContent.innerHTML = `
            <div class="modal-header">
                <span class="modal-category">${proyecto.categoriaLabel}</span>
                <h2 class="modal-title">${proyecto.titulo}</h2>
            </div>

            <div class="modal-meta-grid">
                <div class="meta-item">
                    <strong>CLIENTE</strong>
                    <span>${proyecto.cliente}</span>
                </div>
                <div class="meta-item">
                    <strong>AÑO</strong>
                    <span>${proyecto.anio}</span>
                </div>
                <div class="meta-item">
                    <strong>CATEGORÍA</strong>
                    <span>${proyecto.categoriaLabel}</span>
                </div>
            </div>

            <p class="modal-body-text">${proyecto.descripcion}</p>

            <div style="margin-bottom: 24px;">
                <strong style="display:block; font-size: 0.8rem; margin-bottom: 8px; color: var(--color-navy);">SERVICIOS REALIZADOS:</strong>
                <ul class="service-list" style="margin-bottom: 20px;">${serviciosHTML}</ul>
            </div>

            <div style="margin-bottom: 30px;">
                <strong style="display:block; font-size: 0.8rem; margin-bottom: 12px; color: var(--color-navy);">HERRAMIENTAS UTILIZADAS:</strong>
                <div style="display:flex; flex-wrap:wrap; gap:8px;">${herramientasHTML}</div>
            </div>

            <div class="modal-gallery">
                ${galeriaHTML}
            </div>

            <button class="btn btn-secondary btn-block" id="modalBottomCloseBtn">CERRAR PROYECTO</button>
        `;

        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Escuchar botón de cierre inferior
        const bottomCloseBtn = document.getElementById('modalBottomCloseBtn');
        if (bottomCloseBtn) {
            bottomCloseBtn.addEventListener('click', closeProjectModal);
        }
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove('active');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeProjectModal);

    // Cierre con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

   
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                showFormStatus('Por favor completa todos los campos obligatorios (*).', 'error');
                return;
            }

            // Cambiar estado del botón
            submitBtn.disabled = true;
            submitBtn.querySelector('span').textContent = 'ENVIANDO...';

           
            const actionUrl = contactForm.getAttribute('action');

            try {
                if (actionUrl.includes('YOUR_FORM_ENDPOINT')) {
                    
                    setTimeout(() => {
                        showFormStatus('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', 'success');
                        contactForm.reset();
                        submitBtn.disabled = false;
                        submitBtn.querySelector('span').textContent = 'ENVIANDO PROYECTO';
                    }, 1200);
                } else {
                  
                    const formData = new FormData(contactForm);
                    const response = await fetch(actionUrl, {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    });

                    if (response.ok) {
                        showFormStatus('¡Mensaje enviado con éxito! Gracias por escribir a JVAC.', 'success');
                        contactForm.reset();
                    } else {
                        showFormStatus('Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.', 'error');
                    }
                    submitBtn.disabled = false;
                    submitBtn.querySelector('span').textContent = 'ENVIANDO PROYECTO';
                }
            } catch (error) {
                showFormStatus('Ocurrió un error de red. Intenta más tarde.', 'error');
                submitBtn.disabled = false;
                submitBtn.querySelector('span').textContent = 'ENVIANDO PROYECTO';
            }
        });
    }

    function showFormStatus(msg, type) {
        if (!formStatus) return;
        formStatus.textContent = msg;
        formStatus.className = `form-status ${type}`;
    }

   
    const cursor = document.getElementById('customCursor');
    const follower = document.getElementById('cursorFollower');

    if (cursor && follower && window.matchMedia('(pointer: fine)').matches) {
        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });

      
        function animateCursor() {
            posX += (mouseX - posX) * 0.15;
            posY += (mouseY - posY) * 0.15;

            follower.style.left = `${posX}px`;
            follower.style.top = `${posY}px`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

       
        const interactiveElements = document.querySelectorAll('a, button, .project-card, input, select, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    }
});