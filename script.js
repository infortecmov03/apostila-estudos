// Sistema de Progresso com localStorage
document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
    initializeFilters();
    initializeProgress();
    initializeLessons();
    initializeGoTopButton();
    initializeBibleVersesWithOverlay(); // Usar a versão corrigida para mobile
});

// Menu Hamburger
function initializeMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const sidebarNav = document.querySelector('.sidebar-nav');
    const closeSidebar = document.querySelector('.close-sidebar');
    
    if (hamburgerIcon && sidebarNav && closeSidebar) {
        hamburgerIcon.addEventListener('click', function() {
            this.classList.toggle('active');
            sidebarNav.classList.toggle('active');
        });
        
        closeSidebar.addEventListener('click', function() {
            hamburgerIcon.classList.remove('active');
            sidebarNav.classList.remove('active');
        });
        
        // Fechar menu ao clicar em um link
        document.querySelectorAll('.sidebar-menu a').forEach(link => {
            link.addEventListener('click', function() {
                hamburgerIcon.classList.remove('active');
                sidebarNav.classList.remove('active');
            });
        });
        
        // Botão para voltar à página inicial
        const navHome = document.querySelector('.nav-home');
        if (navHome) {
            navHome.addEventListener('click', function(e) {
                e.preventDefault();
                const lessonContent = document.getElementById('lesson-content');
                if (lessonContent) {
                    lessonContent.classList.remove('active');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
}

// Filtros de classe
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterBtns.forEach(b => b.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            filterLessons(filter);
        });
    });
}

function filterLessons(filter) {
    const classCategories = document.querySelectorAll('.class-category');
    
    classCategories.forEach(category => {
        if (filter === 'all' || category.id === `${filter}-section`) {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });
}

// Sistema de Progresso
function initializeProgress() {
    updateProgressBar();
    
    // Configurar clique nos status das lições
    document.querySelectorAll('.lesson-status').forEach(status => {
        status.addEventListener('click', function() {
            const lessonNum = this.dataset.lesson;
            toggleLessonStatus(lessonNum);
        });
    });
    
    // Botão para reiniciar progresso
    const resetProgressBtn = document.getElementById('reset-progress');
    if (resetProgressBtn) {
        resetProgressBtn.addEventListener('click', function() {
            if (confirm('Tem certeza que deseja reiniciar todo o seu progresso? Esta ação não pode ser desfeita.')) {
                localStorage.removeItem('startedLessons');
                localStorage.removeItem('completedLessons');
                updateProgressBar();
                alert('Progresso reiniciado com sucesso!');
            }
        });
    }
}

function updateProgressBar() {
    const completedLessons = getCompletedLessons();
    const totalLessons = 20;
    const progress = (completedLessons.length / totalLessons) * 100;
    
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const completedLessonsSpan = document.getElementById('completedLessons');
    const totalLessonsSpan = document.getElementById('totalLessons');
    
    if (progressFill && progressText && completedLessonsSpan && totalLessonsSpan) {
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
        completedLessonsSpan.textContent = completedLessons.length;
        totalLessonsSpan.textContent = totalLessons;
        
        // Atualizar status visual das lições
        document.querySelectorAll('.lesson-status').forEach(status => {
            const lessonNum = status.dataset.lesson;
            if (completedLessons.includes(lessonNum)) {
                status.classList.add('completed');
                status.classList.remove('started');
            } else if (getStartedLessons().includes(lessonNum)) {
                status.classList.add('started');
                status.classList.remove('completed');
            } else {
                status.classList.remove('started', 'completed');
            }
        });
    }
}

function getCompletedLessons() {
    return JSON.parse(localStorage.getItem('completedLessons') || '[]');
}

function getStartedLessons() {
    return JSON.parse(localStorage.getItem('startedLessons') || '[]');
}

function toggleLessonStatus(lessonNum) {
    const completedLessons = getCompletedLessons();
    const startedLessons = getStartedLessons();
    
    if (completedLessons.includes(lessonNum)) {
        // Se já está completada, marcar como não iniciada
        const completedIndex = completedLessons.indexOf(lessonNum);
        completedLessons.splice(completedIndex, 1);
        
        const startedIndex = startedLessons.indexOf(lessonNum);
        if (startedIndex >= 0) startedLessons.splice(startedIndex, 1);
        
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
        localStorage.setItem('startedLessons', JSON.stringify(startedLessons));
    } else if (startedLessons.includes(lessonNum)) {
        // Se está em andamento, marcar como completada
        completedLessons.push(lessonNum);
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    } else {
        // Se não iniciada, marcar como em andamento
        startedLessons.push(lessonNum);
        localStorage.setItem('startedLessons', JSON.stringify(startedLessons));
    }
    
    updateProgressBar();
}

// Sistema de Lições
function initializeLessons() {
    // Configurar clique nos títulos das lições
    document.querySelectorAll('.class-title').forEach(title => {
        title.addEventListener('click', function() {
            const lessonNum = this.dataset.lesson;
            loadLesson(lessonNum);
        });
    });
}

function loadLesson(lessonNum) {
    const lessonContent = document.getElementById('lesson-content');
    if (!lessonContent) return;
    
    const lessonData = getLessonData(lessonNum);
    
    lessonContent.innerHTML = `
        <div class="lesson-header">
            <h2>Lição ${lessonNum}: ${lessonData.title}</h2>
            <div class="lesson-meta">
                <span class="bible-refs"><i class="fas fa-bible"></i> ${lessonData.references}</span>
                <span class="duration"><i class="far fa-clock"></i> ${lessonData.duration}</span>
            </div>
        </div>
        <div class="lesson-body">
            ${lessonData.content}
        </div>
        <div class="lesson-actions">
            <button class="btn btn-secondary" onclick="closeLesson()">
                <i class="fas fa-arrow-left"></i> Voltar para Lições
            </button>
            <button class="btn btn-primary" onclick="markLessonCompleted(${lessonNum})">
                <i class="fas fa-check"></i> Marcar como Concluída
            </button>
        </div>
    `;
    
    lessonContent.classList.add('active');
    lessonContent.scrollIntoView({ behavior: 'smooth' });
    
    // Marcar como iniciada se ainda não estiver
    const startedLessons = getStartedLessons();
    if (!startedLessons.includes(lessonNum)) {
        startedLessons.push(lessonNum);
        localStorage.setItem('startedLessons', JSON.stringify(startedLessons));
        updateProgressBar();
    }
    
    // Reinicializar os versículos para a nova lição
    initializeBibleVersesWithOverlay();
}

function closeLesson() {
    const lessonContent = document.getElementById('lesson-content');
    if (lessonContent) {
        lessonContent.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function markLessonCompleted(lessonNum) {
    const completedLessons = getCompletedLessons();
    if (!completedLessons.includes(lessonNum.toString())) {
        completedLessons.push(lessonNum.toString());
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
        updateProgressBar();
        alert('Lição marcada como concluída!');
        closeLesson();
    } else {
        alert('Esta lição já estava marcada como concluída.');
    }
}

// Botão Voltar ao Topo
function initializeGoTopButton() {
    const goTopBtn = document.getElementById('goTopBtn');
    if (!goTopBtn) return;
    
    // Mostrar/ocultar botão quando rolar a página
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            goTopBtn.style.display = 'block';
        } else {
            goTopBtn.style.display = 'none';
        }
    });
    
    // Rolar para o topo quando clicar no botão
    goTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Adicionar estilos mobile dinamicamente
function addMobileStyles() {
    if (!document.getElementById('mobile-bible-styles')) {
        const mobileStyles = `
            /* Estilos para tooltip no mobile */
            .bible-tooltip.show {
                position: fixed !important;
                left: 50% !important;
                top: 50% !important;
                transform: translate(-50%, -50%) !important;
                z-index: 10000 !important;
                max-width: 90vw !important;
                max-height: 80vh !important;
                overflow: auto !important;
                background: white !important;
                border: 2px solid #2c3e50 !important;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
                padding: 20px !important;
                border-radius: 10px !important;
                color: #333 !important;
                font-family: Arial, sans-serif !important;
            }

            .bible-tooltip .verse-ref {
                font-weight: bold !important;
                font-size: 18px !important;
                color: #2c3e50 !important;
                margin-bottom: 15px !important;
                text-align: center !important;
                border-bottom: 1px solid #eee !important;
                padding-bottom: 10px !important;
            }

            .bible-tooltip .verse-text {
                font-size: 16px !important;
                line-height: 1.6 !important;
                color: #333 !important;
                margin: 15px 0 !important;
                text-align: left !important;
            }

            .bible-tooltip .version {
                font-size: 14px !important;
                color: #666 !important;
                text-align: center !important;
                margin-top: 15px !important;
                font-style: italic !important;
            }

            /* Overlay para tooltip no mobile */
            .bible-tooltip-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                z-index: 9999;
                display: none;
            }

            .bible-tooltip-overlay.active {
                display: block;
            }

            /* Botão de fechar no mobile */
            .close-tooltip {
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
                font-weight: bold;
                color: #666;
                font-size: 20px;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: #f8f9fa;
                border: 1px solid #ddd;
                z-index: 10001;
            }

            .close-tooltip:hover {
                background: #e9ecef;
                color: #333;
            }

            /* Melhorar visibilidade dos versículos no mobile */
            .bible-verse, .verse-ref {
                cursor: pointer;
                padding: 2px 4px;
                border-radius: 3px;
                transition: background-color 0.2s;
                color: #2c3e50;
                font-weight: bold;
            }

            .bible-verse:hover, .verse-ref:hover {
                background-color: #e8f4fd;
            }

            @media (max-width: 768px) {
                .bible-verse, .verse-ref {
                    padding: 4px 6px;
                    background-color: #f8f9fa;
                    border-radius: 4px;
                }
            }
        `;
        
        const styleElement = document.createElement('style');
        styleElement.id = 'mobile-bible-styles';
        styleElement.textContent = mobileStyles;
        document.head.appendChild(styleElement);
    }
}

// Sistema de Versículos Bíblicos Interativos - CORRIGIDO PARA MOBILE
function initializeBibleVersesWithOverlay() {
    addMobileStyles();
    
    // Criar overlay se não existir
    if (!document.getElementById('bibleTooltipOverlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'bibleTooltipOverlay';
        overlay.className = 'bible-tooltip-overlay';
        document.body.appendChild(overlay);
    }
    
    const tooltip = document.getElementById('bibleTooltip');
    const overlay = document.getElementById('bibleTooltipOverlay');
    
    if (!tooltip) return;
    
    let touchTimer;
    let currentVerse = null;
    let isTouchDeviceFlag = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Garantir que o tooltip tenha os estilos básicos
    tooltip.style.display = 'none';
    tooltip.style.position = 'absolute';
    tooltip.style.background = 'white';
    tooltip.style.border = '1px solid #ccc';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    tooltip.style.zIndex = '1000';
    tooltip.style.maxWidth = '300px';
    tooltip.style.color = '#333';
    tooltip.style.fontFamily = 'Arial, sans-serif';
    
    // Versículos com classe bible-verse
    const bibleVerses = document.querySelectorAll('.bible-verse, .verse-ref');
    
    // Limpar event listeners antigos
    bibleVerses.forEach(verse => {
        // Remover listeners antigos
        const newVerse = verse.cloneNode(true);
        verse.parentNode.replaceChild(newVerse, verse);
    });

    // Re-selecionar os versículos após o clone
    const refreshedBibleVerses = document.querySelectorAll('.bible-verse, .verse-ref');
    
    refreshedBibleVerses.forEach(verse => {
        // Adicionar novos event listeners
        verse.addEventListener('mouseenter', handleVerseHover);
        verse.addEventListener('mouseleave', handleVerseLeave);
        verse.addEventListener('touchstart', handleVerseTouchStart);
        verse.addEventListener('touchend', handleVerseTouchEnd);
        verse.addEventListener('touchcancel', handleVerseTouchCancel);
        verse.addEventListener('click', handleVerseClick);
    });
    
    function handleVerseHover(e) {
        if (isTouchDeviceFlag) return;
        showVerseTooltip(e.target, e.clientX, e.clientY);
    }
    
    function handleVerseLeave() {
        if (isTouchDeviceFlag) return;
        hideVerseTooltip();
    }
    
    function handleVerseTouchStart(e) {
        e.preventDefault();
        currentVerse = e.target;
        
        // Limpar timer anterior se existir
        clearTimeout(touchTimer);
        
        touchTimer = setTimeout(() => {
            const touch = e.touches[0];
            showVerseTooltip(currentVerse, touch.clientX, touch.clientY);
        }, 400);
    }
    
    function handleVerseTouchEnd(e) {
        e.preventDefault();
        clearTimeout(touchTimer);
        
        // No mobile, mostrar tooltip no toque rápido também
        if (!tooltip.classList.contains('show')) {
            const touch = e.changedTouches[0];
            showVerseTooltip(currentVerse, touch.clientX, touch.clientY);
        } else {
            // Se já está mostrando, esconder no segundo toque
            hideVerseTooltip();
        }
    }
    
    function handleVerseTouchCancel() {
        clearTimeout(touchTimer);
        hideVerseTooltip();
    }
    
    function handleVerseClick(e) {
        if (!isTouchDeviceFlag) {
            e.preventDefault();
            showVerseTooltip(e.target, e.clientX, e.clientY);
            setTimeout(hideVerseTooltip, 5000);
        }
    }
    
    function showVerseTooltip(element, x, y) {
        const reference = element.dataset.ref || element.textContent.trim();
        const verseText = getBibleVerse(reference);
        
        if (!verseText) {
            console.log('Versículo não encontrado:', reference);
            return;
        }
        
        const bookInfo = getBookInfo(reference.split('.')[0]);
        
        tooltip.innerHTML = `
            <div class="close-tooltip" onclick="hideVerseTooltip()">✕</div>
            <div class="verse-ref"><strong>${reference}</strong></div>
            <div class="verse-text">${verseText}</div>
            <div class="version">${bookInfo.name} - ACF</div>
        `;
        
        if (isTouchDeviceFlag) {
            // Para mobile - centralizar com overlay
            tooltip.style.position = 'fixed';
            tooltip.style.left = '50%';
            tooltip.style.top = '50%';
            tooltip.style.transform = 'translate(-50%, -50%)';
            tooltip.style.zIndex = '10000';
            tooltip.style.maxWidth = '90vw';
            tooltip.style.maxHeight = '80vh';
            tooltip.style.overflow = 'auto';
            tooltip.style.padding = '20px';
            tooltip.style.background = 'white';
            tooltip.style.border = '2px solid #2c3e50';
            tooltip.style.borderRadius = '10px';
            tooltip.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            tooltip.style.color = '#333';
            tooltip.style.fontFamily = 'Arial, sans-serif';
            
            // Mostrar overlay
            overlay.classList.add('active');
        } else {
            // Para desktop - posicionar próximo ao mouse
            tooltip.style.position = 'absolute';
            const rect = tooltip.getBoundingClientRect();
            let posX = x + 10;
            let posY = y + 10;
            
            // Ajustar se sair da tela
            if (posX + rect.width > window.innerWidth) {
                posX = x - rect.width - 10;
            }
            if (posY + rect.height > window.innerHeight) {
                posY = y - rect.height - 10;
            }
            
            tooltip.style.left = posX + 'px';
            tooltip.style.top = posY + 'px';
            tooltip.style.transform = 'none';
            tooltip.style.zIndex = '1000';
        }
        
        tooltip.style.display = 'block';
        tooltip.classList.add('show');
        
        // Adicionar evento para fechar tooltip ao clicar fora (mobile)
        if (isTouchDeviceFlag) {
            setTimeout(() => {
                document.addEventListener('click', closeTooltipOnClickOutside, true);
            }, 100);
        }
    }
    
    function closeTooltipOnClickOutside(e) {
        if (tooltip && !tooltip.contains(e.target) && !e.target.classList.contains('bible-verse') && !e.target.classList.contains('verse-ref')) {
            hideVerseTooltip();
            document.removeEventListener('click', closeTooltipOnClickOutside, true);
        }
    }
    
    function hideVerseTooltip() {
        if (tooltip) {
            tooltip.style.display = 'none';
            tooltip.classList.remove('show');
        }
        if (overlay) {
            overlay.classList.remove('active');
        }
        document.removeEventListener('click', closeTooltipOnClickOutside, true);
    }
    
    // Fechar tooltip ao clicar no overlay
    overlay.addEventListener('click', hideVerseTooltip);
    
    // Também adicionar função global para ser chamada de outros lugares
    window.hideVerseTooltip = hideVerseTooltip;
}

// Função auxiliar para verificar se é dispositivo touch
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Funções de navegação
function navigateTo(url) {
    if (url.startsWith('#')) {
        // Navegação interna
        const element = document.querySelector(url);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Navegação para outra página
        window.location.href = url;
    }
}

function showBibleReferences() {
    alert('Sistema de Referências Bíblicas:\n\n• Passe o mouse sobre qualquer versículo para ver o texto\n• Em dispositivos touch, toque no versículo\n• Toque novamente para fechar\n\nTotal de referências disponíveis: ' + Object.keys(bibleVerses).length);
}

function showDiagrams() {
    alert('Diagramas Disponíveis:\n\n• Caminho da Salvação\n• Controle na Vida Cristã\n• Fruto do Espírito\n• Estrutura da Igreja\n• Linha do Tempo Escatológica\n• E muitos outros...\n\nTotal: 12 diagramas interativos');
}

function showBibleVersion() {
    alert('Versão Bíblica Utilizada:\n\nAlmeida Corrigida Fiel (ACF)\n\nEsta é uma versão fiel aos textos originais em hebraico e grego, mantendo a precisão das traduções.');
}

// Funções do Footer
function showHelp() {
    alert('Para ajuda, entre em contato com seu monitor ou líder espiritual.\n\nTelefone: [Número da Igreja]\nEmail: [Email da Igreja]');
}

function showAbout() {
    alert('Apostila de Estudo para Batismo de Novos Convertidos\n\nDesenvolvida pela Igreja Evangélica Assembleia de Deus da Baixa - Congregação de Ndlavela, Moçambique.\n\nAno 2016 | Editor: SICARROFIC\n\nEsta apostila visa preparar novos convertidos para o batismo e vida cristã.');
}

// Função para imprimir todas as lições
const printAllBtn = document.getElementById('print-all');
if (printAllBtn) {
    printAllBtn.addEventListener('click', function() {
        if (confirm('Esta funcionalidade imprimirá todas as lições. Certifique-se de que sua impressora está configurada.')) {
            window.print();
        }
    });
}

// Dados das lições (conteúdo simplificado para demonstração)
function getLessonData(lessonNum) {
    const lessons = {
        1: {
            title: "Salvação e o Senhorio de Cristo",
            references: "20 referências bíblicas",
            duration: "30 minutos",
            content: `
                <div class="lesson-part">
                    <h3>A Obra de Cristo no Calvário - RECONCILIAÇÃO</h3>
                    <p>A Separação entre Deus e os homens é resultado do pecado</p>
                    <p>Estávamos longe mas pelo seu sangue chegamos perto</p>
                </div>
                <div class="lesson-part">
                    <h3>PASSOS PARA A SALVAÇÃO</h3>
                    <p>1. Ouvir a Palavra<br>2. Crer em Cristo<br>3. Receber Jesus<br>4. Novo Nascimento</p>
                </div>
            `
        },
        // ... outras lições (conteúdo completo no arquivo principal)
    };
    
    return lessons[lessonNum] || {
        title: "Lição em Desenvolvimento",
        references: "Aguardando conteúdo",
        duration: "Em breve",
        content: `<p>O conteúdo desta lição está sendo preparado e estará disponível em breve.</p>`
    };
}

// Manter a função original para compatibilidade
function initializeBibleVerses() {
    initializeBibleVersesWithOverlay();
}