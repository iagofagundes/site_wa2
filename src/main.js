const whatsapp = 'https://wa.me/5548999517376'
const logoUrl = 'https://site2.com.br/sites_midias/site_4551_logo_69a11c8ccee69_1772166284.jpg'
const message = (text) => `${whatsapp}?text=${encodeURIComponent(text)}`
const eventVideos = [
  ['7C948935-8A47-4C1D-A305-64031063D755.mp4', 'Estrutura que impressiona'],
  ['IMG_4473.MOV', 'Energia lá em cima'],
  ['IMG_6481.MOV', 'Luz para cada momento'],
  ['IMG_6482.MOV', 'Produção em movimento'],
  ['IMG_6529.MOV', 'Palco pronto para a festa'],
  ['IMG_6532.MOV', 'A pista acontece aqui'],
  ['IMG_7189.MOV', 'Experiências WA'],
  ['IMG_7191.MOV', 'Mais um evento entregue'],
]
const services = [
  ['01', 'Sonorização', 'Trabalhamos com sistema de som da marca Tyger, um equipamento já bem utilizado em nossos eventos. Nossa estrutura também conta com mesas PM5D, LS9, X32 e M32 para entregar controle, presença, potência e clareza em cada momento.'],
  ['02', 'Iluminação', 'Criamos cenários completos com mesa MA, ribalta, Bean Semi Y, Mac Aura, PAR LED, mini brut e strobo para transformar o ambiente e acompanhar a energia da festa.'],
  ['03', 'Palcos & estruturas', 'Montagem segura e personalizada para o palco que o seu evento merece.'],
  ['04', 'Camarotes', 'Áreas VIP com conforto, privacidade e uma experiência especial para seus convidados.'],
  ['05', 'Painel de LED', 'Telas de alta definição para conteúdo, logos e transmissões ao vivo que impressionam.'],
  ['06', 'Serviço completo', 'Do planejamento à execução: uma solução integrada para você aproveitar o momento.'],
]

document.querySelector('#app').innerHTML = `
  <header class="site-header"><a class="brand" href="#top" aria-label="WA Eventos, início"><img class="brand-logo" src="${logoUrl}" alt="WA Eventos - Tijucas SC"><span class="brand-lockup"><span class="brand-name">EVENTOS</span><small>TIJUCAS · SC</small></span></a><nav class="nav-links" aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#sobre">Sobre nós</a><a href="#eventos">Eventos</a><a href="#contato">Contato</a></nav><a class="header-cta" href="${message('Olá! Visitei o site e quero um orçamento para meu evento.')}"><span>Orçamento rápido</span><span aria-hidden="true">↗</span></a></header>
  <main id="top">
    <section class="hero" aria-labelledby="hero-title"><div class="hero-glow"></div><div class="hero-copy reveal"><p class="eyebrow"><span class="eyebrow-dot"></span> Experiências que ficam</p><h1 id="hero-title">O seu evento<br><em>no próximo nível.</em></h1><p class="hero-text">Som, luz e estrutura para transformar boas ideias em momentos inesquecíveis.</p><div class="hero-actions"><a class="button button-primary" href="${message('Olá! Visitei o site e quero um orçamento para meu evento.')}">Fale com a WA <span>↗</span></a><a class="text-link" href="#servicos">Conheça nossos serviços <span>↓</span></a></div></div><div class="hero-note reveal"><span>WA / 2026</span><span>TIJUCAS · SC</span></div><div class="hero-visual reveal" aria-hidden="true"><div class="visual-image"></div><span class="visual-label">LET'S<br>MAKE<br>NOISE</span><div class="visual-caption"><span>Produção completa</span><strong>01 — 06</strong></div></div><div class="scroll-cue"><span></span> role para explorar</div></section>
    <section class="services section" id="servicos" aria-labelledby="services-title"><div class="section-intro reveal"><p class="eyebrow">O que fazemos</p><h2 id="services-title">Tudo para a<br><em>festa acontecer.</em></h2></div><div class="section-side reveal"><span class="big-number">06</span><p>frentes para criar uma experiência completa, do primeiro briefing ao último aplauso.</p></div><div class="services-grid">${services.map(([number, title, description]) => `<article class="service-card reveal"><span class="card-number">${number}</span><div><h3>${title}</h3><p>${description}</p><a href="${message(`Gostaria de saber mais sobre ${title.toLowerCase()} para meu evento.`)}" aria-label="Solicitar orçamento de ${title}">Solicitar orçamento <span>↗</span></a></div></article>`).join('')}</div></section>
    <section class="about section" id="sobre" aria-labelledby="about-title"><div class="about-image reveal"><div class="about-stamp">DESDE<br>2004</div></div><div class="about-copy reveal"><p class="eyebrow">Por trás da experiência</p><h2 id="about-title">A gente cuida<br>de <em>cada detalhe.</em></h2><p>A WA EVENTOS é referência em soluções completas para eventos em Tijucas e região. Reunimos equipamentos modernos, equipe especializada e atendimento próximo para transformar a sua ideia em realidade.</p><p>Na sonorização, contamos com sistema Tyger e mesas PM5D, LS9, X32 e M32, equipamentos já bem utilizados nos nossos eventos. Na iluminação, temos mesa MA, ribalta, Bean Semi Y, Mac Aura, PAR LED, mini brut e strobo para criar o clima certo em cada produção.</p><p>Você imagina o momento. A gente faz ele acontecer.</p><a class="text-link dark-link" href="${message('Olá! Quero conhecer melhor o trabalho da WA EVENTOS.')}">Conheça a WA EVENTOS <span>↗</span></a></div></section>
    <section class="events section" id="eventos" aria-labelledby="events-title"><div class="section-intro reveal"><p class="eyebrow">Na prática</p><h2 id="events-title">A festa vista<br>de <em>dentro.</em></h2></div><div class="section-side reveal"><span class="big-number">+07</span><p>registros de eventos reais produzidos pela WA. Dê o play e sinta a energia.</p></div><div class="video-grid">${eventVideos.map(([file, title], index) => `<article class="video-card reveal"><video controls preload="metadata" playsinline muted><source src="/imgs/${file}"></video><div class="video-info"><span>0${index + 1}</span><strong>${title}</strong></div></article>`).join('')}</div></section>
    <section class="contact section" id="contato" aria-labelledby="contact-title"><p class="eyebrow">Vamos criar juntos</p><h2 id="contact-title">Seu próximo evento<br>começa com um <em>oi.</em></h2><a class="contact-link" href="${message('Olá! Quero um orçamento para meu próximo evento.')}">Chamar no WhatsApp <span>↗</span></a><div class="contact-meta"><span>WA EVENTOS</span><span>Rua 13 de Maio, 160 · Centro<br>Tijucas · SC · 88200-000</span><a href="tel:+5548999517376">(48) 99951-7376</a></div></section>
  </main><footer><span>WA <strong>EVENTOS</strong></span><span>Som. Luz. Experiência.</span><span>© 2026 WA Eventos</span></footer><a class="floating-whatsapp" href="${message('Olá! Gostaria de informações sobre os serviços da WA EVENTOS.') }" aria-label="Falar com a WA Eventos no WhatsApp">◔</a>
`

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible') }), { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
