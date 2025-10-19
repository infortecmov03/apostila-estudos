// Sistema de Progresso com localStorage
document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
    initializeFilters();
    initializeProgress();
    initializeLessons();
    initializeGoTopButton();
    initializeBibleVerses();
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
    initializeBibleVerses();
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

// Sistema de Versículos Bíblicos Interativos
function initializeBibleVerses() {
    const tooltip = document.getElementById('bibleTooltip');
    if (!tooltip) return;
    
    let touchTimer;
    let currentVerse = null;
    
    // Versículos com classe bible-verse
    const bibleVerses = document.querySelectorAll('.bible-verse, .verse-ref');
    
    bibleVerses.forEach(verse => {
        // Eventos para mouse
        verse.addEventListener('mouseenter', handleVerseHover);
        verse.addEventListener('mouseleave', handleVerseLeave);
        
        // Eventos para touch
        verse.addEventListener('touchstart', handleVerseTouchStart);
        verse.addEventListener('touchend', handleVerseTouchEnd);
        verse.addEventListener('touchcancel', handleVerseTouchCancel);
        
        // Clique para dispositivos com mouse
        verse.addEventListener('click', handleVerseClick);
    });
    
    function handleVerseHover(e) {
        if (isTouchDevice()) return;
        showVerseTooltip(e.target, e.clientX, e.clientY);
    }
    
    function handleVerseLeave() {
        if (isTouchDevice()) return;
        hideVerseTooltip();
    }
    
    function handleVerseTouchStart(e) {
        currentVerse = e.target;
        touchTimer = setTimeout(() => {
            const touch = e.touches[0];
            showVerseTooltip(currentVerse, touch.clientX, touch.clientY);
        }, 500); // 500ms de hold
    }
    
    function handleVerseTouchEnd() {
        clearTimeout(touchTimer);
        // Pequeno delay para permitir clique
        setTimeout(hideVerseTooltip, 100);
    }
    
    function handleVerseTouchCancel() {
        clearTimeout(touchTimer);
        hideVerseTooltip();
    }
    
    function handleVerseClick(e) {
        if (!isTouchDevice()) {
            // Para desktop, mostrar tooltip no clique também
            showVerseTooltip(e.target, e.clientX, e.clientY);
            
            // Auto-esconder após 5 segundos
            setTimeout(hideVerseTooltip, 5000);
        }
    }
    
    function showVerseTooltip(element, x, y) {
        const reference = element.dataset.ref || element.textContent;
        const verseText = getBibleVerse(reference);
        const bookInfo = getBookInfo(reference.split('.')[0]);
        
        tooltip.innerHTML = `
            <div class="verse-ref">${reference}</div>
            <div class="verse-text">${verseText}</div>
            <div class="version">${bookInfo.name} - ACF</div>
        `;
        
        // Posicionar tooltip
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
        tooltip.classList.add('show');
    }
    
    function hideVerseTooltip() {
        tooltip.classList.remove('show');
    }
    
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
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
    alert('Sistema de Referências Bíblicas:\n\n• Passe o mouse sobre qualquer versículo para ver o texto\n• Em dispositivos touch, segure o versículo\n• Clique para manter o tooltip visível\n\nTotal de referências disponíveis: ' + Object.keys(bibleVerses).length);
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