export type Language = 'pt' | 'en';

export const investment = {
  pt: {
    label: "Investimento",
    title: "Pacotes Exclusivos",
    categories: [
      {
        title: "Social Media",
        subtitle: "Pacotes exclusivos de gestão",
        packages: [
          { name: "Essential", description: "Para marcas que precisam de constância.", features: ["Estratégia Social Media", "4 posts", "Design & Copy", "Foto de Perfil", "Agendamento de posts"] },
          { name: "Signature", bestSeller: true, description: "Crescimento e posicionamento.", features: ["Estratégia Social Media", "8 posts", "Design & Copy", "Foto de Perfil", "Agendamento de posts"] },
          { name: "Elite", description: "Full-service exclusivo.", features: ["Estratégia Social Media", "16 posts", "Design & Copy", "Foto de Perfil", "Agendamento de posts", "Edição de Reels", "Suporte Prioritário"] }
        ]
      },
      {
        title: "Identidade Visual",
        subtitle: "Construa uma marca inesquecível",
        packages: [
          { name: "Select", description: "Essencialidade e clareza.", features: ["Logo Principal", "Paleta de cores", "Tipografia", "Foto de perfil personalizada"] },
          { name: "Advanced", bestSeller: true, description: "Evolução visual.", features: ["Logo Principal", "Logo alternativa", "Paleta de cores", "Tipografia", "Foto de perfil personalizada", "Manual de Marca", "1 Aplicação"] },
          { name: "Prestige", description: "Universo visual completo.", features: ["Logo Principal", "Logo alternativa", "Paleta de cores", "Tipografia", "Foto de perfil personalizada", "Manual de Marca", "Pattern, ilustração ou personagem", "3 aplicações"] }
        ]
      },
      {
        title: "Ilustração Vetorial",
        subtitle: "Arte & Exclusividade",
        packages: [
          { name: "Bespoke Assets", description: "Elementos visuais exclusivos.", features: ["Criação de ícones", "Mascotes e Personagens", "Elementos de apoio", "Entrega em vetor"] },
          { name: "Patterns & Surface", bestSeller: true, description: "Estamparia de alto padrão.", features: ["Estampas corridas/localizadas", "Patterns para embalagem", "Harmonia cromática", "Entrega em vetor"] },
          { name: "Editorial", description: "Narrativas visuais.", features: ["Ilustração para livros/revistas", "Capas", "Infográficos", "Direção de arte", "Entrega em vetor"] }
        ]
      },
      {
        title: "High-End Retouching",
        subtitle: "Pós-Produção Premium",
        packages: [
          { name: "Correction", description: "Aprimoramento técnico.", features: ["Correção de cor/luz", "Limpeza de fundo", "Ajuste de nitidez", "Tratamento de pele natural"] },
          { name: "Creative Manipulation", bestSeller: true, description: "Transformação completa.", features: ["Remoção de pessoas/objetos", "Fusão de imagens", "Color Grading", "Criação de ambiência"] },
          { name: "Restoration", description: "Recuperação de memórias.", features: ["Restauração", "Colorização digital", "Reconstrução", "Upscaling IA"] }
        ]
      }
    ]
  },
  en: {
    label: "Investment",
    title: "Exclusive Packages",
    categories: [
      {
        title: "Social Media",
        subtitle: "Exclusive management packages",
        packages: [
          { name: "Essential", description: "For brands that need consistency.", features: ["Social Media Strategy", "4 posts", "Design & Copy", "Profile Picture", "Post Scheduling"] },
          { name: "Signature", bestSeller: true, description: "Growth and positioning.", features: ["Social Media Strategy", "8 posts", "Design & Copy", "Profile Picture", "Post Scheduling"] },
          { name: "Elite", description: "Exclusive full-service.", features: ["Social Media Strategy", "16 posts", "Design & Copy", "Profile Picture", "Post Scheduling", "Reels Editing", "Priority Support"] }
        ]
      },
      {
        title: "Visual Identity",
        subtitle: "Build an unforgettable brand",
        packages: [
          { name: "Select", description: "Essentiality and clarity.", features: ["Main Logo", "Color Palette", "Typography", "Custom Profile Picture"] },
          { name: "Advanced", bestSeller: true, description: "Visual evolution.", features: ["Main Logo", "Alternative Logo", "Color Palette", "Typography", "Custom Profile Picture", "Brand Manual", "1 Application"] },
          { name: "Prestige", description: "Complete visual universe.", features: ["Main Logo", "Alternative Logo", "Color Palette", "Typography", "Custom Profile Picture", "Brand Manual", "Pattern, illustration or mascot", "3 Applications"] }
        ]
      },
      {
        title: "Vector Illustration",
        subtitle: "Art & Exclusivity",
        packages: [
          { name: "Bespoke Assets", description: "Exclusive visual elements.", features: ["Icon Creation", "Mascots & Characters", "Support Elements", "Vector Delivery"] },
          { name: "Patterns & Surface", bestSeller: true, description: "High-end patterns.", features: ["Continuous/placed prints", "Packaging patterns", "Chromatic harmony", "Vector Delivery"] },
          { name: "Editorial", description: "Visual narratives.", features: ["Illustration for books/magazines", "Covers", "Infographics", "Art direction", "Vector Delivery"] }
        ]
      },
      {
        title: "High-End Retouching",
        subtitle: "Premium Post-Production",
        packages: [
          { name: "Correction", description: "Technical enhancement.", features: ["Color/light correction", "Background cleanup", "Sharpness adjustment", "Natural skin treatment"] },
          { name: "Creative Manipulation", bestSeller: true, description: "Complete transformation.", features: ["People/object removal", "Image fusion", "Color Grading", "Environment creation"] },
          { name: "Restoration", description: "Memory recovery.", features: ["Restoration", "Digital colorization", "Reconstruction", "AI Upscaling"] }
        ]
      }
    ]
  }
};
export const caseStudies = [
  {
    id: 'yaguar-branding',
    title: 'YAGUAR',
    category: 'Visual Identity & Art Direction',
    description: 'O nome YAGUAR nasce da raiz etimológica indígena (do tupi-guarani yaguara), que significa "fera", e em uma interpretação folclórica e popular difundida ela significaria "aquela que mata com um salto". Essa origem ancestral foi traduzida para o posicionamento da marca de forma metafórica e poderosa: a mulher YAGUAR é aquela que domina qualquer ambiente no momento em que entra. Ela não precisa de excessos; sua presença é magnética, precisa e fatal.',
    descriptionEn: 'The name YAGUAR is born from the indigenous etymological root (from Tupi-Guarani yaguara), which means "beast", and in a widespread popular and folkloric interpretation it means "she who kills with one leap". This ancestral origin was translated into the brand\'s positioning in a metaphorical and powerful way: the YAGUAR woman is the one who dominates any environment the moment she enters. She does not need excesses; her presence is magnetic, precise, and fatal.',
    cover: 'https://static.wixstatic.com/media/c92460_d46428669e5c4876b3387a1a063a189e~mv2.png',
    images: [
      'https://static.wixstatic.com/media/c92460_d46428669e5c4876b3387a1a063a189e~mv2.png',
      'https://static.wixstatic.com/media/c92460_83324b24c92944438113a67555a95cac~mv2.png',
      'https://static.wixstatic.com/media/c92460_ee314c599342468eb3a5360b72c55584~mv2.png',
      'https://static.wixstatic.com/media/c92460_5ca2baa1f5d9447aa4dd20863799b11b~mv2.png',
      'https://static.wixstatic.com/media/c92460_c263aef7481d413c8fb8b31342b0ec5a~mv2.png',
      'https://static.wixstatic.com/media/c92460_8548defa2e9a4fecad0f09d6ca2173c7~mv2.png',
      'https://static.wixstatic.com/media/c92460_326b6537c75b45cb8a8af4006343118e~mv2.png',
      'https://static.wixstatic.com/media/c92460_a453aa1058a543e79af1116ba5baecdc~mv2.png'
    ]
  },
  {
    id: 'clinica-dermatologica',
    title: 'Clínica Dermatológica',
    category: 'Social Media',
    description: 'Gestão estratégica de redes sociais focada em transmitir a pureza e a seriedade da dermatologia, combinando tons suaves com tipografia clínica moderna.',
    descriptionEn: 'Strategic social media management focused on conveying the purity and seriousness of dermatology, combining soft tones with modern clinical typography.',
    cover: 'https://static.wixstatic.com/media/c92460_16a8aebf27d743cf8b9417b07fd6e53e~mv2.png',
    images: [
      'https://static.wixstatic.com/media/c92460_16a8aebf27d743cf8b9417b07fd6e53e~mv2.png',
      'https://static.wixstatic.com/media/c92460_a9425d71596f40308ee8ee9a4a431f87~mv2.png',
      'https://static.wixstatic.com/media/c92460_405bf15440c645ff8a894dcdf1680526~mv2.png'
    ]
  },
  {
    id: 'psicologa-andressa',
    title: 'Psicóloga Andressa',
    category: 'Rebranding',
    description: 'Um rebranding completo que posiciona a profissional como referência em acolhimento e técnica.',
    descriptionEn: 'A complete rebranding that positions the professional as a reference in warmth and technique.',
    cover: 'https://static.wixstatic.com/media/c92460_89a833311e80423ba99392e3d6cc5ff2~mv2.jpg',
    images: [
      'https://static.wixstatic.com/media/c92460_89a833311e80423ba99392e3d6cc5ff2~mv2.jpg',
      'https://static.wixstatic.com/media/c92460_92051f73b9dc42209bb72d5dcde0d177~mv2.jpg'
    ]
  },
  {
    id: 'joalheria-essencia',
    title: 'Joalheria Essência',
    category: 'Identidade Visual',
    description: 'A Essência Jewelry nasce da intersecção entre a riqueza natural do Brasil e o design minimalista contemporâneo.',
    descriptionEn: 'Essência Jewelry is born from the intersection of Brazil\'s natural richness and contemporary minimalist design.',
    cover: 'https://static.wixstatic.com/media/c92460_c6c987f7eda840c3b7a2becc3db8fcb7~mv2.png',
    images: [
      'https://static.wixstatic.com/media/c92460_c6c987f7eda840c3b7a2becc3db8fcb7~mv2.png',
      'https://static.wixstatic.com/media/c92460_dde73af6a51a44f2adda8d7ab65504e1~mv2.png',
      'https://static.wixstatic.com/media/c92460_9f8a8cf3b71744e79e02945ba0af1893~mv2.png',
      'https://static.wixstatic.com/media/c92460_84c966a55fb14099ba91c7de3d6341fd~mv2.png',
      'https://static.wixstatic.com/media/c92460_767307459a744a0fbab9e4035e6187e8~mv2.png',
      'https://static.wixstatic.com/media/c92460_79dc4dd38303480db8aa1c9c51b68e54~mv2.png',
      'https://static.wixstatic.com/media/c92460_985b1691294345a9b493e90ec9183aba~mv2.png',
      'https://static.wixstatic.com/media/c92460_d3a9e0d7111141b693b0833bd40d7dbe~mv2.png'
    ]
  },
  {
    id: 'monique-advogada',
    title: 'Monique Advogada',
    category: 'Social Media',
    description: 'Posicionamento digital para advocacia moderna.',
    descriptionEn: 'Digital positioning for modern law practice.',
    cover: 'https://static.wixstatic.com/media/c92460_b46951af909c4c67aad8f70a142b4793~mv2.png',
    images: [
      'https://static.wixstatic.com/media/c92460_b46951af909c4c67aad8f70a142b4793~mv2.png',
      'https://static.wixstatic.com/media/c92460_1fd27151c8e446b882bd7e930b63975b~mv2.png',
      'https://static.wixstatic.com/media/c92460_7eaae219fbf44c6f8402b24c3ab77ccf~mv2.png',
      'https://static.wixstatic.com/media/c92460_b27516307a23430cae6ec28fc4884c2c~mv2.png'
    ]
  },
  {
    id: 'aurea-beauty',
    title: 'AUREA Beauty & Spa',
    category: 'Identidade Visual',
    description: 'Uma identidade visual que funde a precisão matemática da Proporção Áurea com a sofisticação do \'Quiet Luxury\', criando uma marca sensorial e atemporal.',
    descriptionEn: 'A visual identity that merges the mathematical precision of the Golden Ratio with the sophistication of \'Quiet Luxury\', creating a sensory and timeless brand.',
    cover: 'https://static.wixstatic.com/media/c92460_8d0a7c41a00e44d0a0841f9e3586a437~mv2.png',
    images: [
      'https://static.wixstatic.com/media/c92460_8d0a7c41a00e44d0a0841f9e3586a437~mv2.png',
      'https://static.wixstatic.com/media/c92460_25fe62b454e74479b91de694524d4190~mv2.png',
      'https://static.wixstatic.com/media/c92460_7aa4a74fdb5f4428af868e086de57967~mv2.png',
      'https://static.wixstatic.com/media/c92460_8d0a7c41a00e44d0a0841f9e3586a437~mv2.png',
      'https://static.wixstatic.com/media/c92460_5a2f779b86734059bef0d7ce5544c553~mv2.png',
      'https://static.wixstatic.com/media/c92460_10ba65eb3ce74cbdb99bf14ccb6be95e~mv2.png',
      'https://static.wixstatic.com/media/c92460_975a9324cba1416d92ffc4acac82d719~mv2.png',
      'https://static.wixstatic.com/media/c92460_8d279a716a7d40c48d64ea0926acd6ed~mv2.png',
      'https://static.wixstatic.com/media/c92460_9eaeeba5edd84592ac562d2b1fe066a7~mv2.png',
      'https://static.wixstatic.com/media/c92460_210e1b9ab6b54d7fae6ac721dbad194d~mv2.png',
      'https://static.wixstatic.com/media/c92460_da9d9189e8ee472eaffb80aa71c18421~mv2.png',
      'https://static.wixstatic.com/media/c92460_ada5c02e920748648ed3470262047837~mv2.png',
      'https://static.wixstatic.com/media/c92460_6e2dcc1fd5044432b0afc250ef68c638~mv2.png'
    ]
  }
];

export const content = {
  pt: {
    nav: {
      about: "Expertise",
      services: "Soluções",
      portfolio: "Portfólio",
      investment: "Investimento",
      contact: "Consultoria",
    },
    hero: {
      eyebrow: "Strategic Elegance",
      titleItalic: "Estratégia e Estética",
      titleRest: "para Marcas Líderes",
      description: "O estúdio Monique Gavlak Design é especializado em Identidade Visual, Social Media e Direção de Arte para marcas que buscam excelência e sofisticação.",
      cta: "Agendar Consultoria",
    },
    marquee: [
      "Identidade Visual", "Social Media", "Posicionamento", "Branding de Luxo", "Premium Brands", "Elegant Design", "Estratégia Digital", "Corporate Clean", "Luxury Experience"
    ],
    about: {
      label: "A Designer",
      title: "Monique Gavlak",
      description: "Especialista em criar atmosferas visuais que comunicam valor, exclusividade e excelência. Meu objetivo é transformar a essência da sua marca em um design que não apenas atrai, mas fascina clientes premium.",
      stats: [
        { value: 5, label: "anos de experiência", symbol: "+" },
        { value: 100, label: "marcas transformadas", symbol: "+" },
        { value: 100, label: "Atuação remota e global", symbol: "%" },
      ]
    },
    specialties: {
      label: "Especialidades",
      items: [
        {
          title: "I. Curadoria Visual",
          description: "Direção Artística & Conceitual. Definição precisa do tom de voz para transmitir autoridade."
        },
        {
          title: "II. Narrativa Estratégica",
          description: "Estruturação de narrativas que comunicam missão e valores, criando conexões emocionais."
        },
        {
          title: "III. Growth & Performance",
          description: "Análise de métricas e dados para garantir um crescimento real e focado na conversão."
        }
      ]
    },
    services: {
      label: "Serviços",
      title: "Soluções Sob Medida",
      subtitle: "Aplicando Design para estruturar posicionamentos sólidos.",
      items: [
        {
          title: "Identidade Visual",
          description: "Criação de logotipos, paletas de cores, tipografia e diretrizes de marca completas que expressam sofisticação."
        },
        {
          title: "Social Media Design",
          description: "Templates, grids e direção de arte para mídias sociais que posicionam sua marca como líder e referência."
        },
        {
          title: "Posicionamento Estratégico",
          description: "Consultoria para alinhar sua comunicação visual ao público de alto padrão que você deseja atingir."
        },
        {
          title: "Ilustração, Retouch & IA",
          description: "Ilustração Vetorial, High-End Retouching, Aprimoramento de Imagens com IA para elevar o nível das suas fotos e produtos."
        }
      ]
    },
    portfolio: {
      title: "Visual Curation | Navegue pelos projetos",
      viewGallery: "Galeria de Projetos"
    },
    contact: {
      label: "Let's Talk",
      title: "Vamos criar algo extraordinário?",
      description: "Você merece um design que comunica o verdadeiro valor do seu negócio.",
      button: "Fale comigo no WhatsApp",
    },
    footer: {
      rights: "Visual Strategist and Premium Brand Manager | © 2026 Monique Gavlak. All rights reserved."
    }
  },
  en: {
    nav: {
      about: "Expertise",
      services: "Solutions",
      portfolio: "Portfolio",
      investment: "Investment",
      contact: "Consulting",
    },
    hero: {
      eyebrow: "Strategic Elegance",
      titleItalic: "Strategy and Aesthetics",
      titleRest: "for Leading Brands",
      description: "Monique Gavlak Design Studio specializes in Visual Identity, Social Media and Art Direction for brands seeking excellence and sophistication.",
      cta: "Book Consultation",
    },
    marquee: [
      "Visual Identity", "Social Media", "Positioning", "Luxury Branding", "Premium Brands", "Elegant Design", "Digital Strategy", "Corporate Clean", "Luxury Experience"
    ],
    about: {
      label: "The Designer",
      title: "Monique Gavlak",
      description: "Specialized in creating visual atmospheres that communicate value, exclusivity, and excellence. My goal is to transform your brand's essence into a design that not only attracts but fascinates premium clients.",
      stats: [
        { value: 5, label: "years of experience", symbol: "+" },
        { value: 100, label: "brands transformed", symbol: "+" },
        { value: 100, label: "Remote and global", symbol: "%" },
      ]
    },
    specialties: {
      label: "Specialties",
      items: [
        {
          title: "I. Visual Curation",
          description: "Artistic & Conceptual Direction. Precise definition of the tone of voice to convey authority."
        },
        {
          title: "II. Strategic Narrative",
          description: "Structuring narratives that communicate mission and values, creating emotional connections."
        },
        {
          title: "III. Growth & Performance",
          description: "Metrics and data analysis to ensure real growth focused on conversion."
        }
      ]
    },
    services: {
      label: "Services",
      title: "Bespoke Solutions",
      subtitle: "Applying Design to structure solid positionings.",
      items: [
        {
          title: "Visual Identity",
          description: "Creation of logos, color palettes, typography, and comprehensive brand guidelines that express sophistication."
        },
        {
          title: "Social Media Design",
          description: "Templates, grids, and art direction for social media that position your brand as a leader and reference."
        },
        {
          title: "Strategic Positioning",
          description: "Consulting to align your visual communication with the high-end audience you wish to target."
        },
        {
          title: "Illustration, Retouch & AI",
          description: "Vector Illustration, High-End Retouching, AI Image Enhancement to elevate the level of your photos and products."
        }
      ]
    },
    portfolio: {
      title: "Visual Curation | Browse Projects",
      viewGallery: "Project Gallery"
    },
    contact: {
      label: "Let's Talk",
      title: "Let's create something extraordinary?",
      description: "You deserve a design that communicates the real value of your business.",
      button: "Message me on WhatsApp",
    },
    footer: {
      rights: "Visual Strategist and Premium Brand Manager | © 2026 Monique Gavlak. All rights reserved."
    }
  }
};
