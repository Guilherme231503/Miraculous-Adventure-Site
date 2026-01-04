// --- Classes de Componentes ---
// --- Registro de Temas (Theme Registry) ---
const themeRegistry = {
    'default': {
        name: "Miraculous (Padrão)",
        desc: "O tema clássico escuro inspirado nas caixas de Miraculous.",
        icon: "Miraculous_Logo.png",
        css: {
            '--mc-bg': '#383838',
            '--mc-panel': '#48494a',
            '--mc-border-light': '#8b8b8b',
            '--mc-border-dark': '#1e1e1f',
            '--mc-header-red': '#b71c1c',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #000000',
            '--mc-title-gold': '#ffd700',
            '--mc-btn-bg': '#7d7d7d',
            '--mc-btn-border-light': '#aeb0b2',
            '--mc-btn-border-dark': '#3a3a3b',
            '--mc-green-btn': '#3c8527',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/cubes.png')"
        }
    },
    'ladybug': {
        name: "Miraculous da Joaninha (Criação)",
        desc: "Vermelho vibrante com detalhes pretos. Sorte e Criação.",
        icon: "ladybug_logo.png",
        css: {
            '--mc-bg': '#8a0f0f',
            '--mc-panel': '#d32f2f',
            '--mc-border-light': '#ff6659',
            '--mc-border-dark': '#9a0007',
            '--mc-header-red': '#212121',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #000000',
            '--mc-title-gold': '#212121',
            '--mc-btn-bg': '#b71c1c',
            '--mc-btn-border-light': '#f05545',
            '--mc-btn-border-dark': '#7f0000',
            '--mc-green-btn': '#212121',
            '--mc-green-btn-hover': '#000000',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')"
        }
    },
    'cat': {
        name: "Miraculous do Gato (Destruição)",
        desc: "Preto profundo com neon verde. Cataclismo!",
        icon: "cat_logo.png",
        css: {
            '--mc-bg': '#121212',
            '--mc-panel': '#212121',
            '--mc-border-light': '#484848',
            '--mc-border-dark': '#000000',
            '--mc-header-red': '#00c853',
            '--mc-text': '#e0e0e0',
            '--mc-text-shadow': '2px 2px 0px #000',
            '--mc-title-gold': '#69f0ae',
            '--mc-btn-bg': '#424242',
            '--mc-btn-border-light': '#6d6d6d',
            '--mc-btn-border-dark': '#1b1b1b',
            '--mc-green-btn': '#00e676',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/dark-leather.png')"
        }
    },
    'butterfly': {
        name: "Miraculous da Borboleta (Transmissão)",
        desc: "Roxo misterioso e elegante.",
        icon: "butterfly_logo.png",
        css: {
            '--mc-bg': '#311b92',
            '--mc-panel': '#512da8',
            '--mc-border-light': '#7c43bd',
            '--mc-border-dark': '#311b92',
            '--mc-header-red': '#d1c4e9',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #000',
            '--mc-title-gold': '#b39ddb',
            '--mc-btn-bg': '#4527a0',
            '--mc-btn-border-light': '#7953d2',
            '--mc-btn-border-dark': '#000070',
            '--mc-green-btn': '#7b1fa2',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/stardust.png')"
        }
    },
    'turtle': {
        name: "Miraculous da Tartaruga (Proteção)",
        desc: "Verde jade robusto e defensivo.",
        icon: "turtle_logo.png",
        css: {
            '--mc-bg': '#1b5e20',
            '--mc-panel': '#2e7d32',
            '--mc-border-light': '#60ad5e',
            '--mc-border-dark': '#005005',
            '--mc-header-red': '#cddc39',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #000',
            '--mc-title-gold': '#f0f4c3',
            '--mc-btn-bg': '#388e3c',
            '--mc-btn-border-light': '#6abf69',
            '--mc-btn-border-dark': '#00600f',
            '--mc-green-btn': '#8bc34a',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/hexellence.png')"
        }
    },
    'fox': {
        name: "Miraculous da Raposa (Ilusão)",
        desc: "Laranja vibrante, branco e ilusões.",
        icon: "fox_logo.png",
        css: {
            '--mc-bg': '#bf360c',
            '--mc-panel': '#e64a19',
            '--mc-border-light': '#ff7d47',
            '--mc-border-dark': '#ac0800',
            '--mc-header-red': '#ffffff',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #3e2723',
            // Sombra marrom para suavizar
            '--mc-title-gold': '#ffcc80',
            '--mc-btn-bg': '#d84315',
            '--mc-btn-border-light': '#ff7543',
            '--mc-btn-border-dark': '#9f0000',
            '--mc-green-btn': '#ff9800',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/diagmonds-light.png')"
        }
    },
    'bee': {
        name: "Miraculous da Abelha (Submissão)",
        desc: "Amarelo ouro e preto. Ferroada Venenosa!",
        icon: "bee_logo.png",
        css: {
            '--mc-bg': '#ff6f00',
            // Laranja amarelado escuro para fundo
            '--mc-panel': '#ffc107',
            // Amarelo principal
            '--mc-border-light': '#ffecb3',
            // Amarelo claro
            '--mc-border-dark': '#c49000',
            // Ouro escuro
            '--mc-header-red': '#212121',
            '--mc-text': '#212121',
            // TEXTO ESCURO PARA LEITURA
            '--mc-text-shadow': 'none',
            // Sem sombra preta no texto escuro
            '--mc-title-gold': '#000000',
            '--mc-btn-bg': '#ffca28',
            '--mc-btn-border-light': '#fff350',
            '--mc-btn-border-dark': '#c79a00',
            '--mc-green-btn': '#212121',
            // Botão preto
            '--mc-green-border-light': '#484848',
            '--mc-green-border-dark': '#000000',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/honey_im_subtle.png')"
        }
    },
    'peacock': {
        name: "Miraculous do Pavão (Emoção)",
        desc: "Azul real e turquesa. Amok!",
        icon: "peacock_logo.png",
        css: {
            '--mc-bg': '#002171',
            '--mc-panel': '#0d47a1',
            '--mc-border-light': '#5472d3',
            '--mc-border-dark': '#002171',
            '--mc-header-red': '#ec407a',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #000',
            '--mc-title-gold': '#80d8ff',
            '--mc-btn-bg': '#1565c0',
            '--mc-btn-border-light': '#5e92f3',
            '--mc-btn-border-dark': '#003c8f',
            '--mc-green-btn': '#00bcd4',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/argyle.png')"
        }
    },
    'mouse': {
        name: "Miraculous do Rato (Multiplicação)",
        desc: "Cinza fofo e rosa pastel.",
        icon: "mouse_logo.png",
        css: {
            '--mc-bg': '#424242',
            '--mc-panel': '#757575',
            '--mc-border-light': '#a4a4a4',
            '--mc-border-dark': '#494949',
            '--mc-header-red': '#f48fb1',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #212121',
            '--mc-title-gold': '#fce4ec',
            '--mc-btn-bg': '#9e9e9e',
            '--mc-btn-border-light': '#cfcfcf',
            '--mc-btn-border-dark': '#707070',
            '--mc-green-btn': '#ec407a',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/tiny-check.png')"
        }
    },
    'ox': {
        name: "Miraculous do Boi (Determinação)",
        desc: "Azul marinho sólido e forte.",
        icon: "ox_logo.png",
        css: {
            '--mc-bg': '#000051',
            '--mc-panel': '#1a237e',
            '--mc-border-light': '#534bae',
            '--mc-border-dark': '#000051',
            '--mc-header-red': '#ffca28',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #000',
            '--mc-title-gold': '#fff59d',
            '--mc-btn-bg': '#283593',
            '--mc-btn-border-light': '#5f5fc4',
            '--mc-btn-border-dark': '#001064',
            '--mc-green-btn': '#3949ab',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')"
        }
    },
    'tiger': {
        name: "Miraculous do Tigre (Exaltação)",
        desc: "Magenta punk e rebeldia.",
        icon: "tiger_logo.png",
        css: {
            '--mc-bg': '#560027',
            '--mc-panel': '#880e4f',
            '--mc-border-light': '#bc477b',
            '--mc-border-dark': '#560027',
            '--mc-header-red': '#f8bbd0',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #000',
            '--mc-title-gold': '#ff80ab',
            '--mc-btn-bg': '#ad1457',
            '--mc-btn-border-light': '#e35183',
            '--mc-btn-border-dark': '#78002e',
            '--mc-green-btn': '#c2185b',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/zigzag.png')"
        }
    },
    'rabbit': {
        name: "Miraculous do Coelho (Evolução)",
        desc: "Branco gelo e ciano. Viagem no tempo.",
        icon: "rabbit_logo.png",
        css: {
            '--mc-bg': '#90a4ae',
            // Fundo um pouco mais escuro para contraste
            '--mc-panel': '#eceff1',
            // Painel muito claro
            '--mc-border-light': '#ffffff',
            '--mc-border-dark': '#b0bec5',
            '--mc-header-red': '#00bcd4',
            '--mc-text': '#37474f',
            // TEXTO ESCURO
            '--mc-text-shadow': 'none',
            // Sem sombra preta
            '--mc-title-gold': '#006064',
            '--mc-btn-bg': '#cfd8dc',
            '--mc-btn-border-light': '#ffffff',
            '--mc-btn-border-dark': '#9ea7aa',
            '--mc-green-btn': '#26c6da',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/white-wall.png')"
        }
    },
    'dragon': {
        name: "Miraculous do Dragão (Perfeição)",
        desc: "Vermelho sangue e dourado imperial.",
        icon: "dragon_logo.png",
        css: {
            '--mc-bg': '#7f0000',
            '--mc-panel': '#b71c1c',
            '--mc-border-light': '#f05545',
            '--mc-border-dark': '#7f0000',
            '--mc-header-red': '#ffd700',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #000',
            '--mc-title-gold': '#ffea00',
            '--mc-btn-bg': '#c62828',
            '--mc-btn-border-light': '#ff5f52',
            '--mc-btn-border-dark': '#8e0000',
            '--mc-green-btn': '#d32f2f',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/scales.png')"
        }
    },
    'snake': {
        name: "Miraculous da Cobra (Intuição)",
        desc: "Verde esmeralda e escamas.",
        icon: "snake_logo.png",
        css: {
            '--mc-bg': '#004d40',
            '--mc-panel': '#00695c',
            '--mc-border-light': '#439889',
            '--mc-border-dark': '#003d33',
            '--mc-header-red': '#64ffda',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #000',
            '--mc-title-gold': '#a7ffeb',
            '--mc-btn-bg': '#00796b',
            '--mc-btn-border-light': '#48a999',
            '--mc-btn-border-dark': '#004c40',
            '--mc-green-btn': '#00bfa5',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/snake-skin.png')"
        }
    },
    'horse': {
        name: "Miraculous do Cavalo (Migração)",
        desc: "Couro marrom e estilo steampunk.",
        icon: "horse_logo.png",
        css: {
            '--mc-bg': '#3e2723',
            '--mc-panel': '#5d4037',
            '--mc-border-light': '#8b6b61',
            '--mc-border-dark': '#321911',
            '--mc-header-red': '#ffffff',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #000',
            '--mc-title-gold': '#d7ccc8',
            '--mc-btn-bg': '#6d4c41',
            '--mc-btn-border-light': '#9c786c',
            '--mc-btn-border-dark': '#40241a',
            '--mc-green-btn': '#8d6e63',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/leather.png')"
        }
    },
    'goat': {
        name: "Miraculous da Cabra (Paixão)",
        desc: "Monocromático artístico.",
        icon: "goat_logo.png",
        css: {
            '--mc-bg': '#000000',
            '--mc-panel': '#212121',
            '--mc-border-light': '#484848',
            '--mc-border-dark': '#000000',
            '--mc-header-red': '#ffffff',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': 'none',
            '--mc-title-gold': '#e0e0e0',
            '--mc-btn-bg': '#424242',
            '--mc-btn-border-light': '#6d6d6d',
            '--mc-btn-border-dark': '#1b1b1b',
            '--mc-green-btn': '#616161',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/triangles.png')"
        }
    },
    'monkey': {
        name: "Miraculous do Macaco (Derrisão)",
        desc: "Marrom divertido e amarelo banana.",
        icon: "monkey_logo.png",
        css: {
            '--mc-bg': '#4e342e',
            '--mc-panel': '#795548',
            '--mc-border-light': '#a98274',
            '--mc-border-dark': '#4b2c20',
            '--mc-header-red': '#ffeb3b',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #3e2723',
            '--mc-title-gold': '#fff9c4',
            '--mc-btn-bg': '#8d6e63',
            '--mc-btn-border-light': '#be9c91',
            '--mc-btn-border-dark': '#5f4339',
            '--mc-green-btn': '#fdd835',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/wood.png')"
        }
    },
    'rooster': {
        name: "Miraculous do Galo (Pretensão)",
        desc: "Laranja solar e amanhecer.",
        icon: "rooster_logo.png",
        css: {
            '--mc-bg': '#bf360c',
            '--mc-panel': '#ff5722',
            '--mc-border-light': '#ff8a50',
            '--mc-border-dark': '#c41c00',
            '--mc-header-red': '#ffcc80',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #bf360c',
            '--mc-title-gold': '#ffd180',
            '--mc-btn-bg': '#f4511e',
            '--mc-btn-border-light': '#ff844c',
            '--mc-btn-border-dark': '#b91400',
            '--mc-green-btn': '#ffab91',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/cartographer.png')"
        }
    },
    'dog': {
        name: "Miraculous do Cachorro (Adoração)",
        desc: "Tons de terra e lealdade.",
        icon: "dog_logo.png",
        css: {
            '--mc-bg': '#5d4037',
            '--mc-panel': '#8d6e63',
            '--mc-border-light': '#be9c91',
            '--mc-border-dark': '#5f4339',
            '--mc-header-red': '#ffccbc',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #3e2723',
            '--mc-title-gold': '#ffe0b2',
            '--mc-btn-bg': '#a1887f',
            '--mc-btn-border-light': '#d3b8ae',
            '--mc-btn-border-dark': '#725b53',
            '--mc-green-btn': '#d7ccc8',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')"
        }
    },
    'pig': {
        name: "Miraculous do Porco (Júbilo)",
        desc: "Rosa radiante e feliz.",
        icon: "pig_logo.png",
        css: {
            '--mc-bg': '#c2185b',
            '--mc-panel': '#f06292',
            '--mc-border-light': '#ff94c2',
            '--mc-border-dark': '#ba2d65',
            '--mc-header-red': '#f8bbd0',
            '--mc-text': '#ffffff',
            '--mc-text-shadow': '2px 2px 0px #880e4f',
            '--mc-title-gold': '#ffebee',
            '--mc-btn-bg': '#ec407a',
            '--mc-btn-border-light': '#ff77a9',
            '--mc-btn-border-dark': '#b4004e',
            '--mc-green-btn': '#f48fb1',
            '--mc-bg-image': "url('https://www.transparenttextures.com/patterns/circles.png')"
        }
    }
};


class AddonBase {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }
    clear() {
        this.container.innerHTML = '';
    }
    render() {}
}

class AddonInfo extends AddonBase {
    constructor(containerId, data) {
        super(containerId);
        this.data = data;
    }
    setData(data) {
        this.data = data;
    }
    render() {
        if (!this.data) return;
        this.clear();

        // Verifica se a imagem principal existe
        let imgHtml = this.data.image ? `<img src="${this.data.image}" onerror="this.style.display='none'" style="max-width:100%; border:4px solid #000; margin-bottom:20px;">`: '';

        const html = `
        <div class="ore-panel" style="text-align: center;">

        <div class="header-with-flag">
        <h1>${this.data.title}</h1>
        <img src="${this.data.flagImg}" class="lang-flag" alt="Language Flag">
        </div>

        <div>${imgHtml}</div>

        <div style="font-size: 1.3rem; line-height: 1.6; white-space: pre-line; text-align: left; margin-bottom: 20px;">
        ${this.data.text}
        </div>

        <a href="${this.data.discordLink}" target="_blank" class="mc-button discord-btn">
        <img src="discord_pixel.png" class="discord-icon" alt="DS">
        ${this.data.discordText}
        </a>
        <a href="${this.data.youtubeLink}" target="_blank" class="mc-button youtube-btn">
        <img src="youtube_pixel.png" class="youtube-icon" alt="DS">
        ${this.data.youtubeText}
        </a>
        </div>
        `;
        this.container.innerHTML = html;
    }
}


class AddonMiraculousExistentes extends AddonBase {
    constructor(containerId, list, labels) {
        super(containerId);
        this.miraculousList = list;
        this.labels = labels;
    }
    setData(list, labels) {
        this.miraculousList = list;
        this.labels = labels;
    }
    render() {
        if (!this.miraculousList) return;
        this.clear();
        let cardsHtml = '';
        this.miraculousList.forEach(m => {
            // Placeholder para imagens quebradas
            const errorImg = "this.src='https://via.placeholder.com/64?text=?'";

            cardsHtml += `
            <div class="ore-panel info-card">
            <h2>${m.name}</h2>
            <div class="kv-grid">
            <div class="kv-item">
            <img src="${m.imgKwami}" alt="Kwami" onerror="${errorImg}">
            <p>${m.kwamiName}</p>
            </div>
            <div class="kv-item">
            <img src="${m.imgMiraculous}" alt="Joia" onerror="${errorImg}">
            <p>${this.labels.jewel}</p>
            </div>
            <div class="kv-item">
            <img src="${m.imgSuit}" alt="Traje" onerror="${errorImg}">
            <p>${this.labels.suit}</p>
            </div>
            </div>
            <div class="stat-box">
            <span class="stat-label">${this.labels.concept}:</span>
            <div class="stat-value">${m.concept}</div>
            </div>
            <div class="stat-box">
            <span class="stat-label">${this.labels.food}:</span>
            <div class="stat-value">${m.food}</div>
            </div>
            <div class="stat-box">
            <span class="stat-label">${this.labels.power}:</span>
            <div class="stat-value">${m.powerInfo}</div>
            </div>
            <details style="margin-top:10px; cursor:pointer;">
            <summary class="mc-button" style="width:100%; text-align:center; font-size:1rem;">${this.labels.moreInfo}</summary>
            <div style="margin-top:10px; background:rgba(0,0,0,0.2); padding:10px;">
            <p><strong style="color:#ffd700">${this.labels.jewelCharged}:</strong> ${m.jewelInfo}</p>
            <hr style="border-color:#555; margin:5px 0;">
            <p><strong style="color:#aaa">${this.labels.jewelCamo}:</strong> ${m.camouflagedInfo}</p>
            </div>
            </details>
            </div>
            `;
        });
        const wrapper = `
        <div style="text-align:center; margin-bottom:20px;">
        <h1>${this.labels.pageTitle}</h1>
        <p style="font-size: 1.2rem; color: #ccc;">${this.labels.pageSubtitle}</p>
        </div>
        <div class="miraculous-grid">
        ${cardsHtml}
        </div>
        `;
        this.container.innerHTML = wrapper;
    }
}

class AddonDownload extends AddonBase {
    constructor(containerId, data) {
        super(containerId);
        this.data = data;
    }
    setData(data) {
        this.data = data;
    }
    render() {
        if (!this.data) return;
        this.clear();
        const html = `
        <div class="ore-panel" style="text-align:center;">
        <h1>${this.data.title}</h1>
        <p style="font-size:1.4rem; margin-bottom:20px;">${this.data.subtitle}</p>
        <a href="${this.data.link}" class="mc-button primary" target="_blank" style="margin-bottom: 30px; display:inline-block; transform: scale(1.2);">
        ${this.data.buttonText}
        </a>
        <div style="margin-top: 40px; text-align:left; background: rgba(0,0,0,0.2); padding: 15px; border: 2px dashed #555;">
        <h2>${this.data.installTitle}</h2>
        <p style="margin-bottom:10px; white-space: pre-line;">${this.data.installText}</p>
        </div>
        </div>
        `;
        this.container.innerHTML = html;
    }
}

// --- Gerenciador de Idiomas (Sem Fetch) ---
class AddonCredits extends AddonBase {
    constructor(containerId, data, memberList) {
        super(containerId);
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.members = memberList; // A lista de nomes vem separada para não duplicar
    }

    // Atualiza apenas os textos traduzíveis, mantém a lista de membros
    updateData(data) {
        this.title = data.title;
        this.subtitle = data.subtitle;
    }

    render() {
        this.clear();

        let membersHtml = '';
        this.members.forEach(member => {
            // Usa uma imagem padrão se não tiver img definida
            const img = member.img ? member.img: 'https://via.placeholder.com/80?text=Skin';

            membersHtml += `
            <div class="credit-card">
            <img src="${img}" class="credit-avatar" alt="${member.name}">
            <div class="credit-name">${member.name}</div>
            <div class="credit-role">${member.role}</div>
            </div>
            `;
        });

        const html = `
        <div class="ore-panel">
        <h1 style="text-align:center;">${this.title}</h1>
        <p style="text-align:center; color:#ccc;">${this.subtitle}</p>
        <div class="credits-grid">
        ${membersHtml}
        </div>
        </div>
        `;
        this.container.innerHTML = html;
    }
}
class AddonThemes extends AddonBase {
    constructor(containerId, appInstance) {
        super(containerId);
        this.app = appInstance;
    }

    render() {
        this.clear();

        // Pega os textos traduzidos do App
        const txt = this.app.data.themes;

        let themesHtml = '';

        // Loop pelos temas registrados
        for (const [key, theme] of Object.entries(themeRegistry)) {
            const isCurrent = localStorage.getItem('mc_theme') === key || (key === 'default' && !localStorage.getItem('mc_theme'));

            const activeClass = isCurrent ? 'theme-current': '';
            // Usa as variáveis traduzidas para os botões
            const btnText = isCurrent ? txt.selected: txt.apply;
            const btnClass = isCurrent ? 'mc-button': 'mc-button primary';
            const icon = theme.icon || 'https://via.placeholder.com/64';

            themesHtml += `
            <div class="theme-card ${activeClass}">
            <img src="${icon}" class="theme-icon" onerror="this.src='https://via.placeholder.com/64'">
            <h3>${theme.name}</h3>
            <p>${theme.desc}</p>
            <button class="${btnClass}" onclick="app.applyTheme('${key}')" style="margin-top:10px;">
            ${btnText}
            </button>
            </div>
            `;
        }

        const html = `
        <div class="ore-panel">
        <h1 style="text-align:center;">${txt.title}</h1>
        <p style="text-align:center; margin-bottom: 20px;">${txt.subtitle}</p>
        <div class="miraculous-grid">
        ${themesHtml}
        </div>
        </div>
        `;
        this.container.innerHTML = html;
    }
}

class AddonNews extends AddonBase {
    constructor(containerId, appInstance) {
        super(containerId);
        this.app = appInstance;
        this.newsData = null;
        this.hasFetched = false;
    }

    fetchNews() {
        // Adiciona um timestamp na URL para evitar cache agressivo do navegador se mudar o JSON
        fetch(`news.json?t=${new Date().getTime()}`)
            .then(response => {
                if (!response.ok) throw new Error("404");
                return response.json();
            })
            .then(data => {
                this.newsData = data;
                this.hasFetched = true;
                this.render();
            })
            .catch(err => {
                console.error("Erro ao buscar news.json", err);
                this.newsData = []; 
                this.hasFetched = true;
                this.render();
            });
    }

    // Método auxiliar para escolher o idioma certo dentro do objeto JSON
    getLocalizedContent(contentObj) {
        if (typeof contentObj === 'string') return contentObj; // Caso antigo (string direta)
        if (!contentObj) return "";

        const lang = this.app.langManager.currentLang; // Pega o idioma salvo no passo 2

        // 1. Tenta o idioma exato (ex: pt_BR)
        if (contentObj[lang]) return contentObj[lang];
        
        // 2. Fallback para Inglês (en_US)
        if (contentObj['en_US']) return contentObj['en_US'];

        // 3. Fallback para o primeiro que encontrar
        const keys = Object.keys(contentObj);
        return keys.length > 0 ? contentObj[keys[0]] : "";
    }

    render() {
        this.clear();
        const txt = this.app.data.news; 

        if (!this.hasFetched) {
            this.container.innerHTML = `<div class="ore-panel"><h2 style="text-align:center;">Loading...</h2></div>`;
            this.fetchNews();
            return;
        }

        if (!this.newsData || this.newsData.length === 0) {
            this.container.innerHTML = `
                <div class="ore-panel" style="text-align:center; padding: 40px;">
                    <h2 style="color: #ccc;">${txt.empty}</h2>
                    <img src="https://via.placeholder.com/128?text=:(" style="margin-top:20px; opacity:0.5; border-radius:50%;">
                </div>
            `;
            return;
        }

        let newsHtml = '';
        
        this.newsData.forEach(item => {
            const imgHtml = item.Image ? 
                `<img src="${item.Image}" style="width:100%; height:200px; object-fit:cover; border-bottom: 2px solid var(--mc-border-dark);">` 
                : '';

            // Processa a tradução
            const title = this.getLocalizedContent(item.Title);
            const desc = this.getLocalizedContent(item.Description);

            newsHtml += `
                <div class="ore-panel" style="padding:0; overflow:hidden; display:flex; flex-direction:column; margin-bottom: 20px;">
                    ${imgHtml}
                    <div style="padding: 15px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:10px;">
                            <h2 style="margin:0; color: var(--mc-header-red); text-shadow: 1px 1px 0 #000;">${title}</h2>
                            <span style="font-size:0.8rem; background:rgba(0,0,0,0.5); padding:2px 8px; border-radius:4px; color:#fff;">${item.Date}</span>
                        </div>
                        
                        <div style="color: var(--mc-text); margin-bottom:10px; line-height:1.5;">
                            ${desc}
                        </div>
                    </div>
                </div>
            `;
        });

        this.container.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto;">
                <div class="ore-panel" style="text-align:center; margin-bottom:20px;">
                    <h1>${txt.pageTitle}</h1>
                </div>
                ${newsHtml}
            </div>
        `;
    }
}


class LanguageManager {
    constructor() {
        this.creditsList = [{
            name: "🕷 Spider 🕷",
            role: "Criador | Creator | Creador",
            img: "spider430.png"
        },
            {
                name: "hazedzxc™",
                role: "Desenvolvedor | Developer | Desarrollador",
                img: "hazedzxa.png"
            },
            {
                name: "Guilherme",
                role: "Desenvolvedor | Developer | Desarrollador",
                img: "guilherme________..png"
            }];
        // Aqui definimos os dados diretamente para não depender de arquivos externos
        this.translations = {
            'pt_BR': {
                navbar: {
                    about: "Sobre o Addon",
                    miraculous: "Miraculous",
                    credits: "Créditos",
                    news: "Novidades",
                    themes: "Temas",
                    download: "Download"
                },
                themes: {
                    title: "Seletor de Temas",
                    subtitle: "Personalize a aparência do site.",
                    selected: "Selecionado",
                    apply: "Aplicar"
                },
                news: {
                    tabName: "Novidades",
                    pageTitle: "Últimas Atualizações",
                    empty: "Não tem nada por aqui :(",
                    readMore: "Ler mais",
                    error: "Erro ao carregar notícias."
                },
                info: {
                    title: "Sobre Miraculous Adventure",
                    text: "<p>Bem-vindo ao <strong>Miraculous Adventure</strong>! Este addon traz o universo de Ladybug e Cat Noir para dentro do seu Minecraft Bedrock Edition.</p><br><p>Com sistemas de transformação, kwamis interativos e habilidades especiais fiéis ao desenho, você poderá proteger Paris (ou seu mundo) dos vilões.</p>",
                    flagImg: "br_flag.png",
                    // Sua imagem da bandeira do Brasil
                    discordLink: "https://discord.gg/WWGFjfpzw",
                    discordText: "Entrar no Discord",
                    youtubeLink: "https://youtube.com/@ismacraft_mc",
                    youtubeText: "Ver no YouTube",
                    image: "Miraculous_Logo.png"
                },
                creditsPage: {
                    title: "Créditos & Equipe ",
                    subtitle: "Quem fez esse addon acontecer"
                },
                miraculous: {
                    labels: {
                        pageTitle: "Miraculous Disponíveis",
                        pageSubtitle: "Escolha seu poder e transforme-se!",
                        jewel: "Joia",
                        suit: "Traje",
                        concept: "Conceito",
                        food: "Comida do Kwami",
                        power: "Poder Especial",
                        moreInfo: "Mais Informações",
                        jewelCharged: "Joia Carregada",
                        jewelCamo: "Joia Camuflada"
                    },
                    list: [{
                        name: "Queen Bee / Vesperia (Abelha)",
                        kwamiName: "Pollen",
                        concept: "Ação",
                        food: "Mel",
                        powerInfo: "Veneno (Venom): Imobiliza o alvo instantaneamente.",
                        jewelInfo: "Pente de cabelo dourado com detalhes de abelha.",
                        camouflagedInfo: "Pente de cabelo prateado simples.",
                        imgKwami: "pollen.png",
                        imgMiraculous: "bee_miraculous.png",
                        imgSuit: "bee_suit.png"
                    },
                        {
                            name: "Minotaurox (Touro)",
                            kwamiName: "Stompp",
                            concept: "Determinação",
                            food: "Ervas / Vegetais",
                            powerInfo: "Resistência (Resistance): Torna o usuário invulnerável a ataques físicos e superpoderes.",
                            jewelInfo: "Septo (Piercing de nariz) dourado.",
                            camouflagedInfo: "Septo preto/escuro.",
                            imgKwami: "stompp.png",
                            imgMiraculous: "ox_miraculous.png",
                            imgSuit: "ox_suit.png"
                        },
                        {
                            name: "Caprikid (Cabra)",
                            kwamiName: "Ziggy",
                            concept: "Paixão",
                            food: "Vegetais",
                            powerInfo: "Gênese (Genesis): Cria qualquer objeto não mágico através de um desenho.",
                            jewelInfo: "Presilhas de cabelo pretas com chifres.",
                            camouflagedInfo: "Presilhas brancas simples.",
                            imgKwami: "ziggy.png",
                            imgMiraculous: "goat_miraculous.png",
                            imgSuit: "goat_suit.png"
                        },
                        {
                            name: "Mayura / Argos (Pavão)",
                            kwamiName: "Duusu",
                            concept: "Emoção",
                            food: "Sementes",
                            powerInfo: "Amokização: Cria sentimonstros a partir das emoções de alguém.",
                            jewelInfo: "Broche em formato de cauda de pavão.",
                            camouflagedInfo: "Broche azul simples.",
                            imgKwami: "duusu.png",
                            imgMiraculous: "peacock_miraculous.png",
                            imgSuit: "peacock_suit.png"
                        },
                        {
                            name: "Hawk Moth / Shadow Moth (Borboleta)",
                            kwamiName: "Nooroo",
                            concept: "Transmissão",
                            food: "Néctar / Açúcar",
                            powerInfo: "Akumatização: Concede superpoderes a outras pessoas através de borboletas (Akumas).",
                            jewelInfo: "Broche em formato de borboleta.",
                            camouflagedInfo: "Broche oval roxo/prateado.",
                            imgKwami: "nooroo.png",
                            imgMiraculous: "butterfly_miraculous.png",
                            imgSuit: "butterfly_suit.png"
                        },
                        {
                            name: "Ryuko (Dragão)",
                            kwamiName: "Longg",
                            concept: "Perfeição",
                            food: "Melancia / Frutas",
                            powerInfo: "Dragão de Água, Vento ou Raio: Transforma o usuário no elemento escolhido.",
                            jewelInfo: "Gargantilha vermelha com um pingente redondo.",
                            camouflagedInfo: "Gargantilha preta.",
                            imgKwami: "longg.png",
                            imgMiraculous: "dragon_miraculous.png",
                            imgSuit: "dragon_suit.png"
                        },
                        {
                            name: "Bunnyx (Coelho)",
                            kwamiName: "Fluff",
                            concept: "Evolução",
                            food: "Cenouras",
                            powerInfo: "Toca (Burrow): Cria portais para viajar no tempo e no espaço.",
                            jewelInfo: "Relógio de bolso prateado.",
                            camouflagedInfo: "Relógio de bolso azulado/branco.",
                            imgKwami: "fluff.png",
                            imgMiraculous: "rabbit_miraculous.png",
                            imgSuit: "rabbit_suit.png"
                        },
                        {
                            name: "Rooster Bold (Galo)",
                            kwamiName: "Orikko",
                            concept: "Pretensões",
                            food: "Grãos",
                            powerInfo: "Sublimação (Sublimation): Permite ao usuário escolher qualquer habilidade específica que desejar.",
                            jewelInfo: "Anel de polegar dourado.",
                            camouflagedInfo: "Anel de polegar preto.",
                            imgKwami: "orikko.png",
                            imgMiraculous: "rooster_miraculous.png",
                            imgSuit: "rooster_suit.png"
                        },
                        {
                            name: "Viperion (Cobra)",
                            kwamiName: "Sass",
                            concept: "Intuição",
                            food: "Ovos",
                            powerInfo: "Segunda Chance (Second Chance): Permite marcar um ponto no tempo e retornar a ele.",
                            jewelInfo: "Pulseira de ouro em formato de cobra.",
                            camouflagedInfo: "Pulseira de prata com escamas verdes.",
                            imgKwami: "sass.png",
                            imgMiraculous: "snake_miraculous.png",
                            imgSuit: "snake_suit.png"
                        }]
                },
                download: {
                    title: "Download Addon",
                    subtitle: "Baixe a versão mais recente do Miraculous Adventure.",
                    link: "https://www.mediafire.com/file/4x2qx9untxp3sct/Miraculous_Adventure_V1.8.35.mcaddon/file",
                    buttonText: "BAIXAR .MCADDON",
                    installTitle: "Como Instalar",
                    installText: "1. Baixe o arquivo .mcaddon acima.<br>2. Clique no arquivo.<br>3. Ative o pacote de comportamento e textura."
                }
            },
            'en_US': {
                navbar: {
                    about: "About the Addon",
                    miraculous: "Miraculous",
                    credits: "Credits",
                    news: "News",
                    themes: "Themes",
                    download: "Download"
                },
                themes: {
                    title: "Theme Selector",
                    subtitle: "Customize the site appearance.",
                    selected: "Selected",
                    apply: "Apply"
                },
                news: {
                    tabName: "News",
                    pageTitle: "Latest Updates",
                    empty: "Nothing here yet :(",
                    readMore: "Read more",
                    error: "Error loading news."
                },
                info: {
                    title: "About Miraculous Adventure",
                    text: "<p>Welcome to <strong>Miraculous Adventure</strong>! This addon brings the Ladybug and Cat Noir universe into your Minecraft Bedrock Edition.</p><br><p>With transformation systems, interactive kwamis, and special abilities faithful to the show, you can protect Paris (or your world) from villains.</p>",
                    flagImg: "us_flag.png",
                    // Sua imagem da bandeira do Brasil
                    discordLink: "https://discord.gg/WWGFjfpzw",
                    discordText: "Join Discord",
                    youtubeLink: "https://youtube.com/@ismacraft_mc",
                    youtubeText: "See on Youtube",
                    image: "Miraculous_Logo.png"
                },
                creditsPage: {
                    title: "Credits & Team",
                    subtitle: "Who made this addon happen"
                },
                miraculous: {
                    labels: {
                        pageTitle: "Available Miraculous",
                        pageSubtitle: "Choose your power and transform!",
                        jewel: "Jewel",
                        suit: "Suit",
                        concept: "Concept",
                        food: "Kwami Food",
                        power: "Special Power",
                        moreInfo: "More Info",
                        jewelCharged: "Charged Jewel",
                        jewelCamo: "Camouflaged Jewel"
                    },
                    list: [{
                        name: "Queen Bee / Vesperia (Bee)",
                        kwamiName: "Pollen",
                        concept: "Action",
                        food: "Honey",
                        powerInfo: "Venom: Immobilizes the target instantly.",
                        jewelInfo: "Golden hair comb with bee details.",
                        camouflagedInfo: "Simple silver hair comb.",
                        imgKwami: "pollen.png",
                        imgMiraculous: "bee_miraculous.png",
                        imgSuit: "bee_suit.png"
                    },
                        {
                            name: "Minotaurox (Ox)",
                            kwamiName: "Stompp",
                            concept: "Determination",
                            food: "Herbs / Vegetables",
                            powerInfo: "Resistance: Makes the user invulnerable to physical attacks and superpowers.",
                            jewelInfo: "Golden nose ring (Septum).",
                            camouflagedInfo: "Black/dark nose ring.",
                            imgKwami: "stompp.png",
                            imgMiraculous: "ox_miraculous.png",
                            imgSuit: "ox_suit.png"
                        },
                        {
                            name: "Caprikid (Goat)",
                            kwamiName: "Ziggy",
                            concept: "Passion",
                            food: "Vegetables",
                            powerInfo: "Genesis: Creates any non-magical object via a drawing.",
                            jewelInfo: "Black hair clips with horns.",
                            camouflagedInfo: "Simple white hair clips.",
                            imgKwami: "ziggy.png",
                            imgMiraculous: "goat_miraculous.png",
                            imgSuit: "goat_suit.png"
                        },
                        {
                            name: "Mayura / Argos (Peacock)",
                            kwamiName: "Duusu",
                            concept: "Emotion",
                            food: "Seeds",
                            powerInfo: "Amokization: Creates sentimonsters from someone's emotions.",
                            jewelInfo: "Brooch shaped like a peacock tail.",
                            camouflagedInfo: "Simple blue brooch.",
                            imgKwami: "duusu.png",
                            imgMiraculous: "peacock_miraculous.png",
                            imgSuit: "peacock_suit.png"
                        },
                        {
                            name: "Hawk Moth / Shadow Moth (Butterfly)",
                            kwamiName: "Nooroo",
                            concept: "Transmission",
                            food: "Nectar / Sugar",
                            powerInfo: "Akumatization: Grants superpowers to others via butterflies (Akumas).",
                            jewelInfo: "Butterfly-shaped brooch.",
                            camouflagedInfo: "Purple/silver oval brooch.",
                            imgKwami: "nooroo.png",
                            imgMiraculous: "butterfly_miraculous.png",
                            imgSuit: "butterfly_suit.png"
                        },
                        {
                            name: "Ryuko (Dragon)",
                            kwamiName: "Longg",
                            concept: "Perfection",
                            food: "Watermelon / Fruits",
                            powerInfo: "Water, Wind, or Lightning Dragon: Transforms the user into the chosen element.",
                            jewelInfo: "Red choker with a round pendant.",
                            camouflagedInfo: "Black choker.",
                            imgKwami: "longg.png",
                            imgMiraculous: "dragon_miraculous.png",
                            imgSuit: "dragon_suit.png"
                        },
                        {
                            name: "Bunnyx (Rabbit)",
                            kwamiName: "Fluff",
                            concept: "Evolution",
                            food: "Carrots",
                            powerInfo: "Burrow: Creates portals to travel through time and space.",
                            jewelInfo: "Silver pocket watch.",
                            camouflagedInfo: "Blue/white pocket watch.",
                            imgKwami: "fluff.png",
                            imgMiraculous: "rabbit_miraculous.png",
                            imgSuit: "rabbit_suit.png"
                        },
                        {
                            name: "Rooster Bold (Rooster)",
                            kwamiName: "Orikko",
                            concept: "Pretension",
                            food: "Grains / Seeds",
                            powerInfo: "Sublimation: Allows the user to choose any specific ability they desire.",
                            jewelInfo: "Golden thumb ring.",
                            camouflagedInfo: "Black thumb ring.",
                            imgKwami: "orikko.png",
                            imgMiraculous: "rooster_miraculous.png",
                            imgSuit: "rooster_suit.png"
                        },
                        {
                            name: "Viperion (Snake)",
                            kwamiName: "Sass",
                            concept: "Intuition",
                            food: "Eggs",
                            powerInfo: "Second Chance: Allows marking a point in time and returning to it.",
                            jewelInfo: "Gold snake-shaped bracelet.",
                            camouflagedInfo: "Silver bracelet with green scales.",
                            imgKwami: "sass.png",
                            imgMiraculous: "snake_miraculous.png",
                            imgSuit: "snake_suit.png"
                        }]
                },
                download: {
                    title: "Download Addon",
                    subtitle: "Download the latest version of Miraculous Adventure.",
                    link: "https://www.mediafire.com/file/4x2qx9untxp3sct/Miraculous_Adventure_V1.8.35.mcaddon/file",
                    buttonText: "DOWNLOAD .MCADDON",
                    installTitle: "How to Install",
                    installText: "1. Download the .mcaddon file above.<br>2. Click on the file.<br>3. Activate the behavior and resource packs."
                }
            },
            'es_ES': {
                navbar: {
                    about: "Sobre el Addon",
                    miraculous: "Miraculous",
                    credits: "Créditos",
                    news: "Novedades",
                    themes: "Temas",
                    download: "Descargar"
                },
                themes: {
                    title: "Selector de Temas",
                    subtitle: "Personaliza la apariencia del sitio.",
                    selected: "Seleccionado",
                    apply: "Aplicar"
                },
                news: {
                    tabName: "Novedades",
                    pageTitle: "Últimas Actualizaciones",
                    empty: "No hay nada por aquí :(",
                    readMore: "Leer más",
                    error: "Error al cargar noticias."
                },
                info: {
                    title: "Sobre Miraculous Adventure",
                    text: "<p>¡Bienvenido a <strong>Miraculous Adventure</strong>! Este addon trae el universo de Ladybug y Cat Noir a tu Minecraft Bedrock Edition.</p><br><p>Con sistemas de transformación, kwamis interactivos y habilidades especiales fieles a la serie, podrás proteger París (o tu mundo) de los villanos.</p>",
                    flagImg: "es_flag.png",
                    // Sua imagem da bandeira do Brasil
                    discordLink: "https://discord.gg/WWGFjfpzw",
                    discordText: "Únete a Discord",
                    youtubeLink: "https://youtube.com/@ismacraft_mc",
                    youtubeText: "Ver en YouTube",
                    image: "Miraculous_Logo.png"
                },
                creditsPage: {
                    title: "Créditos y equipo ",
                    subtitle: "Quién hizo que este complemento sucediera"
                },
                miraculous: {
                    labels: {
                        pageTitle: "Miraculous Disponibles",
                        pageSubtitle: "¡Elige tu poder y transfórmate!",
                        jewel: "Joya",
                        suit: "Traje",
                        concept: "Concepto",
                        food: "Comida del Kwami",
                        power: "Poder Especial",
                        moreInfo: "Más Información",
                        jewelCharged: "Joya Cargada",
                        jewelCamo: "Joya Camuflada"
                    },
                    list: [{
                        name: "Queen Bee / Vesperia (Abeja)",
                        kwamiName: "Pollen",
                        concept: "Acción",
                        food: "Miel",
                        powerInfo: "Veneno (Venom): Inmoviliza al objetivo instantáneamente.",
                        jewelInfo: "Peineta dorada con detalles de abeja.",
                        camouflagedInfo: "Peineta plateada simple.",
                        imgKwami: "pollen.png",
                        imgMiraculous: "bee_miraculous.png",
                        imgSuit: "bee_suit.png"
                    },
                        {
                            name: "Minotaurox (Buey)",
                            kwamiName: "Stompp",
                            concept: "Determinación",
                            food: "Hierbas / Vegetales",
                            powerInfo: "Resistencia (Resistance): Hace al usuario invulnerable a ataques físicos y superpoderes.",
                            jewelInfo: "Aro de nariz (Septum) dorado.",
                            camouflagedInfo: "Aro de nariz negro/oscuro.",
                            imgKwami: "stompp.png",
                            imgMiraculous: "ox_miraculous.png",
                            imgSuit: "ox_suit.png"
                        },
                        {
                            name: "Caprikid (Cabra)",
                            kwamiName: "Ziggy",
                            concept: "Pasión",
                            food: "Vegetales",
                            powerInfo: "Génesis (Genesis): Crea cualquier objeto no mágico a través de un dibujo.",
                            jewelInfo: "Horquillas negras con cuernos.",
                            camouflagedInfo: "Horquillas blancas simples.",
                            imgKwami: "ziggy.png",
                            imgMiraculous: "goat_miraculous.png",
                            imgSuit: "goat_suit.png"
                        },
                        {
                            name: "Mayura / Argos (Pavo Real)",
                            kwamiName: "Duusu",
                            concept: "Emoción",
                            food: "Semillas",
                            powerInfo: "Amokización: Crea sentimonstruos a partir de las emociones de alguien.",
                            jewelInfo: "Broche en forma de cola de pavo real.",
                            camouflagedInfo: "Broche azul simple.",
                            imgKwami: "duusu.png",
                            imgMiraculous: "peacock_miraculous.png",
                            imgSuit: "peacock_suit.png"
                        },
                        {
                            name: "Hawk Moth / Shadow Moth (Mariposa)",
                            kwamiName: "Nooroo",
                            concept: "Transmisión",
                            food: "Néctar / Azúcar",
                            powerInfo: "Akumatización: Otorga superpoderes a otras personas a través de mariposas (Akumas).",
                            jewelInfo: "Broche en forma de mariposa.",
                            camouflagedInfo: "Broche ovalado morado/plateado.",
                            imgKwami: "nooroo.png",
                            imgMiraculous: "butterfly_miraculous.png",
                            imgSuit: "butterfly_suit.png"
                        },
                        {
                            name: "Ryuko (Dragón)",
                            kwamiName: "Longg",
                            concept: "Perfección",
                            food: "Sandía / Frutas",
                            powerInfo: "Dragón de Agua, Viento o Rayo: Transforma al usuario en el elemento elegido.",
                            jewelInfo: "Gargantilla roja con un colgante redondo.",
                            camouflagedInfo: "Gargantilla negra.",
                            imgKwami: "longg.png",
                            imgMiraculous: "dragon_miraculous.png",
                            imgSuit: "dragon_suit.png"
                        },
                        {
                            name: "Bunnyx (Conejo)",
                            kwamiName: "Fluff",
                            concept: "Evolución",
                            food: "Zanahorias",
                            powerInfo: "Madriguera (Burrow): Crea portales para viajar en el tiempo y el espacio.",
                            jewelInfo: "Reloj de bolsillo plateado.",
                            camouflagedInfo: "Reloj de bolsillo azulado/blanco.",
                            imgKwami: "fluff.png",
                            imgMiraculous: "rabbit_miraculous.png",
                            imgSuit: "rabbit_suit.png"
                        },
                        {
                            name: "Rooster Bold (Gallo)",
                            kwamiName: "Orikko",
                            concept: "Pretensión",
                            food: "Granos",
                            powerInfo: "Sublimación (Sublimation): Permite al usuario elegir cualquier habilidad específica que desee.",
                            jewelInfo: "Anillo de pulgar dorado.",
                            camouflagedInfo: "Anillo de pulgar negro.",
                            imgKwami: "orikko.png",
                            imgMiraculous: "rooster_miraculous.png",
                            imgSuit: "rooster_suit.png"
                        },
                        {
                            name: "Viperion (Serpiente)",
                            kwamiName: "Sass",
                            concept: "Intuición",
                            food: "Huevos",
                            powerInfo: "Segunda Oportunidad (Second Chance): Permite marcar un punto en el tiempo y regresar a él.",
                            jewelInfo: "Brazalete de oro con forma de serpiente.",
                            camouflagedInfo: "Brazalete de plata con escamas verdes.",
                            imgKwami: "sass.png",
                            imgMiraculous: "snake_miraculous.png",
                            imgSuit: "snake_suit.png"
                        }]
                },
                download: {
                    title: "Descargar Addon",
                    subtitle: "Descarga la versión más reciente de Miraculous Adventure.",
                    link: "https://www.mediafire.com/file/4x2qx9untxp3sct/Miraculous_Adventure_V1.8.35.mcaddon/file",
                    buttonText: "DESCARGAR .MCADDON",
                    installTitle: "Cómo Instalar",
                    installText: "1. Descarga el archivo .mcaddon arriba.<br>2. Haz clic en el archivo.<br>3. Activa el paquete de comportamiento y recursos."
                }
            }
        };
    }
    getCreditsList() {
        return this.creditsList;
    }
    // Método síncrono agora, pois os dados estão na memória
// Dentro da classe LanguageManager
load() {
    const userLang = navigator.language.replace('-', '_');
    
    // Define qual código de idioma será usado
    let selectedLang = 'pt_BR'; // Padrão

    if (this.translations[userLang]) {
        selectedLang = userLang;
    } else if (userLang.startsWith('pt')) {
        selectedLang = 'pt_BR';
    } else if (userLang.startsWith('es')) {
        selectedLang = 'es_ES';
    } else {
        // Se for inglês ou outro, tenta en_US, senão cai no pt_BR
        selectedLang = this.translations['en_US'] ? 'en_US' : 'pt_BR';
    }

    // SALVA O IDIOMA ATUAL NESSA PROPRIEDADE
    this.currentLang = selectedLang; 

    return this.translations[selectedLang];
}

}

// --- Aplicação Principal ---
class PluginManager {
    constructor(app) {
        this.app = app;
        this.plugins = [];
    }

    register(plugin) {
        // Define um logo padrão se não houver
        plugin.logo = plugin.logo || 'https://via.placeholder.com/64?text=PLG';

        console.log(`[PluginManager] Carregando: ${plugin.name}`);
        this.plugins.push(plugin);

        // Inicializa o plugin
        if (plugin.init) {
            plugin.init(this.app);
        }

        // Se a página de plugins estiver aberta, força uma atualização visual
        if (this.app.currentPage === 'plugin-manager' && this.app.pages['plugin-manager']) {
            this.app.pages['plugin-manager'].render();
        }
    }

    trigger(hookName, data) {
        this.plugins.forEach(plugin => {
            if (plugin[hookName]) {
                try {
                    plugin[hookName](this.app, data);
                } catch (e) {
                    console.error(`Erro no plugin ${plugin.name}:`, e);
                }
            }
        });
    }
}

// --- Classe App Atualizada ---
class App {
    constructor() {
        this.containerId = 'content-area';
        this.langManager = new LanguageManager();
        this.data = null;
        this.pages = {};
        this.currentPage = 'sobre';
        this.currentTheme = 'default';
        this.pluginManager = new PluginManager(this);
    }

    init() {
        this.loadSavedTheme();
        this.data = this.langManager.load();

        // 1. Disparar hooks de pré-configuração (O PluginLoaderUI age aqui)
        this.pluginManager.trigger('onBeforeSetup',
            this);

        this.updateNavbar();
        this.setupPages();

        // 2. Disparar hooks de pós-configuração
        this.pluginManager.trigger('onAfterSetup',
            this.data);
    }

    loadSavedTheme() {
        const saved = localStorage.getItem('mc_theme') || 'default';
        this.applyTheme(saved,
            false);
    }

    injectRawCSS(cssContent) {
        let styleTag = document.getElementById('dynamic-theme-style');
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'dynamic-theme-style';
            document.head.appendChild(styleTag);
        }
        styleTag.innerHTML = cssContent;
    }

    applyTheme(themeKey, render = true) {
        const theme = themeRegistry[themeKey];
        if (!theme) return;
        const root = document.documentElement;
        Object.keys(theme.css).forEach(prop => {
            root.style.setProperty(prop, theme.css[prop]);
        });
        this.injectRawCSS(theme.rawCSS || "");
        localStorage.setItem('mc_theme', themeKey);
        this.currentTheme = themeKey;
        if (render && this.currentPage === 'temas') this.pages['temas'].render();
    }

    updateNavbar() {
        // Verifica se os elementos existem antes de atualizar para evitar erros
        const ids = {
            'nav-about': this.data.navbar.about,
            'nav-mira': this.data.navbar.miraculous,
            'nav-cred': this.data.navbar.credits,
            'nav-news': this.data.navbar.news,
            'nav-theme': this.data.navbar.themes,
            'nav-down': this.data.navbar.download
        };
        for (let id in ids) {
            const el = document.getElementById(id);
            if (el) el.textContent = ids[id];
        }
    }

    setupPages() {
        const members = this.langManager.getCreditsList();
        // Adiciona as páginas padrão sem sobrescrever as páginas de plugins já adicionadas
        this.pages = {
            ...this.pages,
            sobre: new AddonInfo(this.containerId, this.data.info),
            miraculous: new AddonMiraculousExistentes(this.containerId, this.data.miraculous.list, this.data.miraculous.labels),
            creditos: new AddonCredits(this.containerId, this.data.creditsPage, members),
            novidades: new AddonNews(this.containerId, this),
            temas: new AddonThemes(this.containerId, this),
            download: new AddonDownload(this.containerId, this.data.download)
        };
    }

    addPage(slug, pageInstance, buttonTitle) {
        this.pages[slug] = pageInstance;
        const navUl = document.querySelector('nav ul');
        if (navUl) {
            const li = document.createElement('li');
            li.innerHTML = `<button id="nav-${slug}" onclick="app.navigate('${slug}')">${buttonTitle}</button>`;
            navUl.appendChild(li);
        }
    }

    navigate(pageName) {
        this.pluginManager.trigger('onNavigate', pageName);
        const nav = document.getElementById('navbar');
        if (nav) nav.classList.remove('active');

        // 1. Reseta a cor de todos os botões para branco
        document.querySelectorAll('nav button').forEach(btn => btn.style.color = 'white');

        // 2. Busca o botão que faz a chamada para esta página específica
        // Isso ignora IDs e foca na função que o botão executa
        const allButtons = document.querySelectorAll('nav button');
        allButtons.forEach(btn => {
            if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${pageName}'`)) {
                btn.style.color = '#ffd700'; // Aplica o amarelo
            }
        });

        if (this.pages[pageName]) {
            this.currentPage = pageName;
            this.pages[pageName].render();
        } else {
            console.error(`Página "${pageName}" não encontrada no registro.`);
        }
    }

}


//Plugins Aqui!!
const PluginLoaderUI = {
    name: "System: Plugin Manager",
    version: "1.2.0",
    logo: "plugin_logo.png",
    desc: "System plugin for plugin management.",
    author: "System",

    // --- Sistema de Tradução Interno do Plugin ---
    translations: {
        'pt_BR': {
            pageTitle: "Gerenciador de Plugins",
            pageSubtitle: "Instale extensões .js externas ou via Link URL",
            viaLink: "Via Link (URL)",
            viaFile: "Via Arquivo (.js)",
            placeholderUrl: "https://exemplo.com/plugin.js",
            btnLoadUrl: "Carregar URL",
            btnLoadFile: "Carregar Arquivo",
            installedPlugins: "Plugins Instalados",
            active: "ATIVO",
            noDesc: "Sem descrição.",
            alertUrlEmpty: "Digite uma URL válida!",
            alertUrlSuccess: "Plugin via URL carregado com sucesso!",
            alertUrlFail: "Falha ao carregar plugin. Verifique a URL ou CORS.",
            alertFileEmpty: "Selecione um arquivo .js!",
            alertFileSuccess: "Arquivo carregado: ",
            alertFileError: "Erro ao executar script: "
        },
        'en_US': {
            pageTitle: "Plugin Manager",
            pageSubtitle: "Install external .js extensions via File or URL",
            viaLink: "Via Link (URL)",
            viaFile: "Via File (.js)",
            placeholderUrl: "https://example.com/plugin.js",
            btnLoadUrl: "Load URL",
            btnLoadFile: "Load File",
            installedPlugins: "Installed Plugins",
            active: "ACTIVE",
            noDesc: "No description.",
            alertUrlEmpty: "Please enter a valid URL!",
            alertUrlSuccess: "URL Plugin loaded successfully!",
            alertUrlFail: "Failed to load plugin. Check URL or CORS.",
            alertFileEmpty: "Please select a .js file!",
            alertFileSuccess: "File loaded: ",
            alertFileError: "Error executing script: "
        },
        'es_ES': {
            pageTitle: "Gestor de Plugins",
            pageSubtitle: "Instalar extensiones .js externas o vía URL",
            viaLink: "Vía Enlace (URL)",
            viaFile: "Vía Archivo (.js)",
            placeholderUrl: "https://ejemplo.com/plugin.js",
            btnLoadUrl: "Cargar URL",
            btnLoadFile: "Cargar Archivo",
            installedPlugins: "Plugins Instalados",
            active: "ACTIVO",
            noDesc: "Sin descripción.",
            alertUrlEmpty: "¡Introduce una URL válida!",
            alertUrlSuccess: "¡Plugin vía URL cargado con éxito!",
            alertUrlFail: "Fallo al cargar plugin. Revisa URL o CORS.",
            alertFileEmpty: "¡Selecciona un archivo .js!",
            alertFileSuccess: "Archivo cargado: ",
            alertFileError: "Error al ejecutar script: "
        }
    },

    // Função auxiliar para pegar texto baseada no navegador
    t: function(key) {
        // Tenta pegar idioma do navegador ou usa pt_BR como fallback
        const userLang = navigator.language.replace('-', '_');
        const langInfo = this.translations[userLang] || this.translations['pt_BR'];
        return langInfo[key] || key;
    },
    // ---------------------------------------------

    onBeforeSetup: function(app) {
        // Referência local para usar dentro da classe
        const self = this;

        // 1. Cria a Classe da Página de Gerenciamento
        class PluginManagerPage extends AddonBase {
            constructor(containerId, appInstance) {
                super(containerId);
                this.app = appInstance;
            }

            render() {
                // Gera a lista de cartões dos plugins ativos
                let pluginsListHtml = '';
                this.app.pluginManager.plugins.forEach(p => {
                    pluginsListHtml += `
                    <div class="ore-panel" style="display:flex; align-items:center; gap:15px; padding:10px;">
                    <img src="${p.logo}" style="width:64px; height:64px; border:2px solid #000; object-fit:contain; background:rgba(0,0,0,0.3);">
                    <div style="flex:1;">
                    <h3 style="margin:0; color: gold;">${p.name} <span style="font-size:0.8rem; color:#aaa;">v${p.version || '1.0'}</span></h3>
                    <p style="font-size:0.9rem; color:#ccc;">${p.desc || self.t('noDesc')}</p>
                    </div>
                    <div style="background:#2e7d32; color:white; padding:5px 10px; border:1px solid #fff; font-size:0.8rem;">${self.t('active')}</div>
                    </div>
                    `;
                });

                // HTML da Página usando self.t() para tradução
                this.container.innerHTML = `
                <div class="ore-panel">
                <div style="text-align:center; border-bottom:2px solid #555; margin-bottom:20px; padding-bottom:10px;">
                <h1>${self.t('pageTitle')}</h1>
                <p>${self.t('pageSubtitle')}</p>
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; margin-bottom:30px;">

                <div class="stat-box">
                <h3>${self.t('viaLink')}</h3>
                <input type="text" id="plugin-url-input" placeholder="${self.t('placeholderUrl')}"
                style="width:100%; padding:8px; margin:10px 0; background:#222; border:1px solid #555; color:#fff;">
                <button class="mc-button primary" onclick="PluginLoaderUI.loadFromUrl()">${self.t('btnLoadUrl')}</button>
                </div>

                <div class="stat-box">
                <h3>${self.t('viaFile')}</h3>
                <input type="file" id="plugin-file-input"
                style="width:100%; padding:8px; margin:10px 0; color:#fff;">
                <button class="mc-button primary" onclick="PluginLoaderUI.loadFromFile()">${self.t('btnLoadFile')}</button>
                </div>
                </div>

                <h2>${self.t('installedPlugins')} (${this.app.pluginManager.plugins.length})</h2>
                <div style="display:flex; flex-direction:column; gap:10px;">
                ${pluginsListHtml}
                </div>
                </div>
                `;
            }
        }

        // 2. Adiciona a página ao App
        app.addPage('plugin-manager', new PluginManagerPage(app.containerId, app), "Plugins");
    },

    // --- Funções Utilitárias para Carregar Scripts ---

    loadFromUrl: function() {
        const url = document.getElementById('plugin-url-input').value;
        if (!url) return alert(this.t('alertUrlEmpty'));

        const script = document.createElement('script');
        script.src = url;
        script.onload = () => alert(this.t('alertUrlSuccess'));
        script.onerror = () => alert(this.t('alertUrlFail'));
        document.body.appendChild(script);
    },

    loadFromFile: function() {
        const fileInput = document.getElementById('plugin-file-input');
        const file = fileInput.files[0];
        if (!file) return alert(this.t('alertFileEmpty'));

        const reader = new FileReader();
        reader.onload = (e) => {
            // Use arrow function para manter 'this' se necessário, mas aqui 'this' pode variar no callback
            const scriptContent = e.target.result;
            try {
                const script = document.createElement('script');
                script.textContent = scriptContent;
                document.body.appendChild(script);
                // Acessa PluginLoaderUI diretamente para garantir acesso ao 't' dentro do callback
                alert(PluginLoaderUI.t('alertFileSuccess') + file.name);
            } catch (err) {
                alert(PluginLoaderUI.t('alertFileError') + err.message);
            }
        };
        reader.readAsText(file);
    }
};


// IMPORTANTE: Expor as funções globais para o HTML conseguir chamar o onclick
// --- Inicialização ---
// --- Inicialização Segura ---
// Altere o final do seu script para isso:

// --- Inicialização Segura ---
// --- Inicialização Final ---
const app = new App();
window.app = app;
window.PluginLoaderUI = PluginLoaderUI;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Registra o Plugin ANTES do init
    app.pluginManager.register(PluginLoaderUI);

    try {
        // 2. Inicializa o App (isso vai disparar o hook que cria a página do plugin)
        app.init();

        // 3. Navega com segurança
        setTimeout(() => {
            app.navigate('sobre');
        }, 150);
    } catch (err) {
        console.error("Falha na inicialização:", err);
    }
});


function toggleMenu() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
}