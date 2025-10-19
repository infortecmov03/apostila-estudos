
// SISTEMA DE SEGURANÇA AVANÇADO - PROTEGE CONTRA IFRAMES, DEVTOOLS E AMEAÇAS
(function() {
    'use strict';
    
    console.log('🛡️  Sistema de Segurança Ativado - Protegendo Conteúdo Bíblico');
    
    // 1. PROTEÇÃO CONTRA IFRAMES (CLICKJACKING)
    if (window.self !== window.top) {
        window.top.location.href = window.self.location.href;
        throw new Error('Acesso via iframe não permitido');
    }
    
    // 2. PROTEÇÃO CONTRA DEVTOOLS
    const devToolsDetection = {
        init() {
            this.checkWindowSize();
            this.checkDebugger();
            this.checkConsole();
            this.monitorResize();
        },
        
        checkWindowSize() {
            const widthThreshold = window.outerWidth - window.innerWidth > 100;
            const heightThreshold = window.outerHeight - window.innerHeight > 100;
            
            if (widthThreshold || heightThreshold) {
                this.handleViolation('DevTools detectado via tamanho da janela');
            }
        },
        
        checkDebugger() {
            const startTime = Date.now();
            debugger;
            const endTime = Date.now();
            
            if (endTime - startTime > 100) {
                this.handleViolation('Debugger detectado');
            }
        },
        
        checkConsole() {
            const originalConsole = {
                log: console.log,
                warn: console.warn,
                error: console.error
            };
            
            console.log = function() {
                originalConsole.log.apply(console, arguments);
                devToolsDetection.handleViolation('Console acessado');
            };
            
            console.warn = function() {
                originalConsole.warn.apply(console, arguments);
                devToolsDetection.handleViolation('Console acessado');
            };
            
            console.error = function() {
                originalConsole.error.apply(console, arguments);
                devToolsDetection.handleViolation('Console acessado');
            };
        },
        
        monitorResize() {
            let lastWidth = window.innerWidth;
            let lastHeight = window.innerHeight;
            
            setInterval(() => {
                if (window.innerWidth !== lastWidth || window.innerHeight !== lastHeight) {
                    this.checkWindowSize();
                    lastWidth = window.innerWidth;
                    lastHeight = window.innerHeight;
                }
            }, 1000);
        },
        
        handleViolation(reason) {
            console.warn('⚠️  Aviso de Segurança:', reason);
            // Não bloqueia, apenas registra e alerta
            this.showSecurityWarning();
        },
        
        showSecurityWarning() {
            const warning = document.createElement('div');
            warning.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                background: #ff4444;
                color: white;
                padding: 10px;
                border-radius: 5px;
                z-index: 10000;
                font-family: Arial, sans-serif;
                font-size: 12px;
                max-width: 300px;
            `;
            warning.textContent = '⚠️ Atividade suspeita detectada';
            document.body.appendChild(warning);
            
            setTimeout(() => {
                if (document.body.contains(warning)) {
                    document.body.removeChild(warning);
                }
            }, 5000);
        }
    };

    // 3. PROTEÇÃO CONTRA CÓPIA NÃO AUTORIZADA
    const copyProtection = {
        init() {
            this.disableRightClick();
            this.disableTextSelection();
            this.disableKeyboardCopy();
            this.protectImages();
        },
        
        disableRightClick() {
            document.addEventListener('contextmenu', (e) => {
                if (this.isProtectedContent(e.target)) {
                    e.preventDefault();
                    this.showCopyWarning();
                    return false;
                }
            });
        },
        
        disableTextSelection() {
            document.addEventListener('selectstart', (e) => {
                if (this.isProtectedContent(e.target)) {
                    e.preventDefault();
                    return false;
                }
            });
        },
        
        disableKeyboardCopy() {
            document.addEventListener('keydown', (e) => {
                if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C' || e.key === 'x' || e.key === 'X')) {
                    if (this.isProtectedContent(document.activeElement)) {
                        e.preventDefault();
                        this.showCopyWarning();
                        return false;
                    }
                }
                
                // Bloqueio F12, Ctrl+Shift+I, etc.
                if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) {
                    e.preventDefault();
                    return false;
                }
            });
        },
        
        protectImages() {
            document.addEventListener('dragstart', (e) => {
                if (e.target.tagName === 'IMG') {
                    e.preventDefault();
                    return false;
                }
            });
        },
        
        isProtectedContent(element) {
            // Protege apenas conteúdo bíblico específico
            const protectedSelectors = [
                '.bible-verse',
                '.verse-ref',
                '.lesson-content',
                '.bible-diagram',
                '.lesson-part'
            ];
            
            return protectedSelectors.some(selector => 
                element.closest(selector) || 
                element.classList.contains(selector.replace('.', ''))
            );
        },
        
        showCopyWarning() {
            this.showNotification('© Conteúdo protegido. Respeite os direitos autorais.');
        },
        
        showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 20px;
                border-radius: 10px;
                z-index: 10000;
                font-family: Arial, sans-serif;
                text-align: center;
                max-width: 300px;
            `;
            notification.innerHTML = `
                <div style="font-size: 24px; margin-bottom: 10px;">⚠️</div>
                <div>${message}</div>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 3000);
        }
    };

    // 4. DETECÇÃO DE BOTS E SCRIPTS MALICIOSOS
    const botDetection = {
        init() {
            this.checkAutomation();
            this.monitorBehavior();
        },
        
        checkAutomation() {
            // Detecta Selenium, Puppeteer, etc.
            if (navigator.webdriver || 
                window.callPhantom || 
                window._phantom || 
                window.phantom) {
                this.handleBotDetection();
            }
            
            // Verifica propriedades do navegador
            const props = ['__webdriver_evaluate', '__selenium_evaluate', '__webdriver_script_function'];
            if (props.some(prop => window[prop])) {
                this.handleBotDetection();
            }
        },
        
        monitorBehavior() {
            let rapidClicks = 0;
            let lastClickTime = 0;
            
            document.addEventListener('click', (e) => {
                const now = Date.now();
                if (now - lastClickTime < 100) {
                    rapidClicks++;
                    if (rapidClicks > 5) {
                        this.handleBotDetection();
                    }
                } else {
                    rapidClicks = 0;
                }
                lastClickTime = now;
            });
        },
        
        handleBotDetection() {
            console.warn('🤖 Possível bot detectado');
            // Pode adicionar redirecionamento ou outras ações aqui
        }
    };

    // 5. PROTECÇÃO DE DIREITOS AUTORAIS
    const copyrightProtection = {
        init() {
            this.addWatermark();
            this.protectMetadata();
        },
        
        addWatermark() {
            // Adiciona marca d'água transparente
            const watermark = document.createElement('div');
            watermark.style.cssText = `
                position: fixed;
                bottom: 10px;
                right: 10px;
                background: rgba(0,0,0,0.7);
                color: white;
                padding: 5px 10px;
                border-radius: 3px;
                font-size: 10px;
                z-index: 9999;
                pointer-events: none;
                opacity: 0.8;
                font-family: Arial, sans-serif;
            `;
            watermark.textContent = '© Igreja Evangélica Assembleia de Deus - Ndlavela';
            document.body.appendChild(watermark);
        },
        
        protectMetadata() {
            // Protege metadados da página
            Object.defineProperty(document, 'title', {
                set: function(value) {
                    // Permite alteração mas mantém referência
                    const originalTitle = 'Apostila de Batismo - IEAD Baixa Ndlavela';
                    return Object.getOwnPropertyDescriptor(document, 'title').set.call(
                        this, value.includes('©') ? value : value + ' © IEAD Baixa Ndlavela'
                    );
                },
                get: function() {
                    return Object.getOwnPropertyDescriptor(document, 'title').get.call(this);
                }
            });
        }
    };

    // 6. SISTEMA DE MONITORAMENTO
    const securityMonitor = {
        init() {
            this.logSecurityEvents();
            this.monitorNetwork();
        },
        
        logSecurityEvents() {
            const events = ['copy', 'cut', 'paste', 'keydown', 'keyup', 'keypress'];
            events.forEach(event => {
                document.addEventListener(event, (e) => {
                    if (copyProtection.isProtectedContent(e.target)) {
                        console.log(`🔒 Evento de segurança: ${event} em conteúdo protegido`);
                    }
                });
            });
        },
        
        monitorNetwork() {
            // Detecta tentativas de fetch/XMLHttpRequest externos
            const originalFetch = window.fetch;
            window.fetch = function(...args) {
                console.log('🌐 Fetch detectado:', args[0]);
                return originalFetch.apply(this, args);
            };
        }
    };

    // INICIALIZAR TODOS OS SISTEMAS DE SEGURANÇA
    try {
        devToolsDetection.init();
        copyProtection.init();
        botDetection.init();
        copyrightProtection.init();
        securityMonitor.init();
        
        console.log('✅ Todos os sistemas de segurança foram inicializados');
        
    } catch (error) {
        console.error('❌ Erro na inicialização do sistema de segurança:', error);
    }

    // PROTEÇÃO CONTRA REMOÇÃO DE SCRIPTS
    let securityCheckInterval = setInterval(() => {
        if (!window.devToolsDetection || !window.copyProtection) {
            console.warn('⚠️ Tentativa de remoção de segurança detectada');
            location.reload();
        }
    }, 5000);

    // EXPOR FUNÇÕES PARA USO EXTERNO (OPCIONAL)
    window.SecuritySystem = {
        devToolsDetection,
        copyProtection,
        botDetection,
        copyrightProtection,
        securityMonitor
    };

})();
