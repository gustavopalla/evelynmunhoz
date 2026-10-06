type Pair = readonly [string, string];

export interface Copy {
  nav: readonly string[];
  navCta: string;
  heroYear: string;
  contactReply: string;
  contactNav: string;
  heroAvail: string;
  heroTitleA: string;
  heroTitleEm: string;
  heroTitleB: string;
  heroSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  brandsLabel: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  steps: readonly Pair[];
  nichesTitle: string;
  videosTitle: string;
  videosMore: string;
  photosTitle: string;
  pkgTitle: string;
  pkgSub: string;
  pkgFeatured: string;
  select: string;
  selected: string;
  from: string;
  onRequest: string;
  testiTitle: string;
  faqTitle: string;
  contactTitle: string;
  contactSub: string;
  fName: string;
  fNamePh: string;
  fBrand: string;
  fBrandPh: string;
  fEmailPh: string;
  fPkg: string;
  pkgNone: string;
  fMsg: string;
  fMsgPh: string;
  fSubmit: string;
  errReq: string;
  errEmail: string;
  sentTitle: string;
  sentBody: string;
  sentAgain: string;
  modalBody: string;
  modalCta: string;
  /** [name, description, image placeholder] */
  niches: readonly (readonly [string, string, string])[];
  /** [title, tag, niche, duration] */
  videos: readonly (readonly [string, string, string, string])[];
  photos: readonly string[];
  /** [label, title, subtitle, price, items] */
  packages: readonly (readonly [string, string, string, string, readonly string[]])[];
  /** [text, name, role] */
  testimonials: readonly (readonly [string, string, string])[];
  faqs: readonly Pair[];
}

export const COPY: Copy = {
  nav: ["Sobre", "Nichos", "Vídeos", "Fotos", "Pacotes", "Depoimentos"],
  navCta: "Solicitar proposta",
  heroYear: "Portfólio 2026",
  contactReply: "Resposta em até 48h",
  contactNav: "Contato",
  heroAvail: "Criadora de conteúdo UGC",
  heroTitleA: "Vídeos e fotos para marcas de",
  heroTitleEm: "beleza, moda",
  heroTitleB: "e lifestyle.",
  heroSub:
    "Sou Evelyn Munhoz. Roteirizo, gravo e edito conteúdo para anúncios, Reels e TikTok, com luz natural e linguagem de quem usa o produto de verdade.",
  ctaPrimary: "Solicitar proposta",
  ctaSecondary: "Ver portfólio",
  brandsLabel: "Marcas com quem já criei",
  aboutTitle: "Prazer, Evelyn.",
  aboutP1:
    "Comecei gravando minha própria rotina de beleza e hoje produzo para marcas que querem um conteúdo que não pareça propaganda. Cada vídeo parte de um roteiro feito para o objetivo da campanha: apresentar um lançamento, explicar um produto ou vender em anúncio.",
  aboutP2: "Você recebe os arquivos editados, com legenda e no formato certo para cada canal.",
  steps: [
    ["Briefing", "Produto, público e objetivo da campanha."],
    ["Roteiro", "Enviado para sua aprovação antes de gravar."],
    ["Gravação", "Captação vertical em 4K."],
    ["Entrega", "Edição, legendas e uma rodada de ajustes."],
  ],
  nichesTitle: "Nichos em que crio",
  videosTitle: "Vídeos em destaque",
  videosMore: "Ver mais no Instagram",
  photosTitle: "Fotos de produto & lifestyle",
  pkgTitle: "Pacotes & valores",
  pkgSub: "Pacotes personalizados sob consulta.",
  pkgFeatured: "Mais escolhido",
  select: "Selecionar",
  selected: "Selecionado ✓",
  from: "A partir de",
  onRequest: "Sob consulta",
  testiTitle: "O que dizem as marcas",
  faqTitle: "Perguntas frequentes",
  contactTitle: "Vamos criar juntas?",
  contactSub:
    "Conte sobre sua marca e o que você precisa. Respondo com uma proposta em até 48h.",
  fName: "Seu nome",
  fNamePh: "Ex: Ana Souza",
  fBrand: "Marca / empresa",
  fBrandPh: "Ex: Bloom Skincare",
  fEmailPh: "voce@marca.com",
  fPkg: "Pacote de interesse",
  pkgNone: "Ainda não sei",
  fMsg: "Sobre o projeto",
  fMsgPh: "Produto, prazo, onde o conteúdo será usado…",
  fSubmit: "Enviar proposta",
  errReq: "Preencha este campo",
  errEmail: "Informe um e-mail válido",
  sentTitle: "Recebido!",
  sentBody: "Obrigada pelo contato. Respondo em até 48h com uma proposta.",
  sentAgain: "Enviar outra mensagem",
  modalBody:
    "Roteiro, gravação e edição por Evelyn. Entregue em 9:16 com legendas, pronto para orgânico e anúncios.",
  modalCta: "Quero um vídeo assim",
  niches: [
    ["Beleza & Maquiagem", "Tutoriais, GRWM e reviews honestos de make.", "close-up maquiagem"],
    ["Skincare", "Rotinas, texturas e antes/depois com luz natural.", "textura skincare"],
    ["Moda & Looks", "Provadores, looks do dia e detalhes de peças.", "look do dia"],
    ["Lifestyle", "Rotina real, café, casa e bem-estar.", "rotina lifestyle"],
  ],
  videos: [
    ["Test drive no carro novo", "Automotivo", "Automotivo", "0:16"],
    ["Frios fatiados na hora", "Review de loja", "Varejo & Food", "0:20"],
    ["Meu delivery de japa preferido", "Food", "Food & Delivery", "1:20"],
    ["Drink e bate-papo no evento", "Lifestyle", "Bebidas", "1:28"],
    ["Último dia do festival de comidas", "Cobertura de evento", "Eventos", "2:34"],
  ],
  photos: [
    "produto em mãos · 4:5",
    "flat lay · 1:1",
    "textura · 4:5",
    "look detalhe · 4:5",
    "café & rotina · 1:1",
    "embalagem · 4:5",
  ],
  packages: [
    [
      "Essencial",
      "1 vídeo UGC",
      "Ideal para testar",
      "R$ 350",
      [
        "Vídeo em alta resolução (9:16)",
        "Roteiro e edição inclusos",
        "1 rodada de ajustes",
        "Direitos de uso por 30 dias",
      ],
    ],
    [
      "Combo",
      "3 vídeos UGC",
      "Para campanhas e testes A/B",
      "R$ 900",
      ["3 vídeos em 9:16", "3 variações de gancho", "Legendas embutidas", "Direitos de uso por 60 dias"],
    ],
    [
      "Mensal",
      "5 vídeos + 10 fotos",
      "Presença constante",
      "R$ 1.600",
      ["5 vídeos em 9:16", "10 fotos 4:5 / 1:1", "Planejamento de pauta", "Direitos de uso por 90 dias"],
    ],
  ],
  testimonials: [
    [
      "O conteúdo da Evelyn virou nosso anúncio com melhor desempenho do trimestre. Natural, bonito e no tom certo.",
      "Nome da cliente",
      "Marketing, marca de skincare",
    ],
    [
      "Briefing entendido de primeira, entrega antes do prazo e um olhar estético impecável.",
      "Nome da cliente",
      "Head de conteúdo, marca de moda",
    ],
    [
      "Parece conversa de amiga. Era exatamente o que nossa comunidade queria ver.",
      "Nome da cliente",
      "Fundadora, marca de beleza",
    ],
  ],
  faqs: [
    [
      "Qual é o prazo de entrega?",
      "Em média 7 dias úteis após o recebimento do produto e aprovação do roteiro. Prazos expressos sob consulta.",
    ],
    [
      "Preciso enviar o produto?",
      "Sim. O produto é enviado para mim e não precisa ser devolvido, salvo combinado diferente.",
    ],
    [
      "Os vídeos aparecem no meu perfil?",
      "UGC é conteúdo para a sua marca usar. Publicação no meu perfil pode ser combinada à parte.",
    ],
    [
      "Posso usar o conteúdo em anúncios?",
      "Sim. Todos os pacotes incluem direitos de uso; períodos maiores ou uso em mídia paga estendida são negociados.",
    ],
    [
      "Quantas rodadas de ajustes estão incluídas?",
      "Uma rodada de ajustes de edição por vídeo. Regravações por mudança de briefing são orçadas à parte.",
    ],
  ],
};

export const NAV_HREFS = [
  "#sobre",
  "#nichos",
  "#videos",
  "#fotos",
  "#pacotes",
  "#depoimentos",
] as const;

/** Files in /public/videos, in the same order as `videos` in COPY. */
export const VIDEO_FILES = [1, 2, 3, 4, 5].map((n) => ({
  src: `/videos/video-${n}.mp4`,
  poster: `/videos/video-${n}.jpg`,
}));

export const SHOW_PRICES = true;
export const EMAIL = "evelynmunhoz59@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/evelyn_munhooz";
export const INSTAGRAM_HANDLE = "@evelyn_munhooz";
