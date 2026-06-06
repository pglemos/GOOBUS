export type PageVideo = {
  id: string;
  section: string;
  title: string;
  subtitle: string;
  bullets: string[];
  image: string;
  label: string;
};

export const pageVideos: PageVideo[] = [
  {
    id: "home",
    section: "Institucional",
    title: "Transporte sob medida para empresas, grupos e eventos",
    subtitle:
      "Planejamento de rota, veículo adequado e atendimento direto para cada viagem.",
    bullets: ["Fretamento", "Turismo", "Romarias", "Transfers"],
    image: "site-assets/seg-aeroportos.jpg",
    label: "Página inicial",
  },
  {
    id: "empresa",
    section: "Institucional",
    title: "Transporte de pessoas com planejamento e responsabilidade",
    subtitle:
      "A GOOBUS organiza operações para empresas, escolas, igrejas, eventos e agências.",
    bullets: ["Confiança", "Operação", "Segurança", "Osasco SP"],
    image: "site-assets/seg-empresas.jpg",
    label: "Empresa",
  },
  {
    id: "servicos",
    section: "Serviços",
    title: "Um serviço para cada tipo de viagem em grupo",
    subtitle:
      "Soluções para rotina corporativa, turismo, eventos, escolas, produções e traslados.",
    bullets: ["8 linhas de serviço", "Orçamento sob medida", "Logística completa"],
    image: "site-assets/op-planejamento-rota.jpg",
    label: "Serviços",
  },
  {
    id: "frota",
    section: "Frota",
    title: "A frota certa para o tamanho do seu grupo",
    subtitle:
      "Ônibus, micro-ônibus e vans indicados conforme roteiro, passageiros e bagagens.",
    bullets: ["Ônibus", "Micro-ônibus", "Van executiva", "Conforto"],
    image: "site-assets/frota-real-onibus-executivo-20260606.jpg",
    label: "Frota",
  },
  {
    id: "orcamento",
    section: "Conversão",
    title: "Conte sua rota. A GOOBUS cuida da solução de transporte",
    subtitle:
      "Um fluxo em etapas para receber dados completos e acelerar o retorno comercial.",
    bullets: ["Serviço", "Trajeto", "Grupo", "Contato"],
    image: "site-assets/op-planejamento-rota.jpg",
    label: "Orçamento",
  },
  {
    id: "contato",
    section: "Contato",
    title: "Estamos prontos para planejar sua viagem",
    subtitle:
      "WhatsApp, endereço e formulário organizados para atendimento rápido.",
    bullets: ["WhatsApp", "Mapa", "Mensagem"],
    image: "site-assets/seg-aeroportos.jpg",
    label: "Contato",
  },
  {
    id: "privacidade",
    section: "LGPD",
    title: "Privacidade clara para quem solicita orçamento",
    subtitle:
      "Dados, finalidade, retenção e canais de atendimento apresentados com transparência.",
    bullets: ["LGPD", "Consentimento", "Direitos", "Canal oficial"],
    image: "site-assets/op-inspecao-seguranca.jpg",
    label: "Privacidade",
  },
  {
    id: "aluguel-de-onibus",
    section: "Serviço",
    title: "O veículo certo para cada trajeto",
    subtitle:
      "Locação de ônibus, micro-ônibus e vans para viagens em grupo de qualquer porte.",
    bullets: ["Locação", "Rota", "Motorista", "Bagageiro"],
    image: "site-assets/seg-aeroportos.jpg",
    label: "Aluguel de ônibus",
  },
  {
    id: "fretamento-corporativo",
    section: "Serviço",
    title: "Transporte corporativo com rotina previsível",
    subtitle:
      "Rotas, turnos e embarques planejados para colaboradores e eventos empresariais.",
    bullets: ["Funcionários", "Turnos", "RH", "Pontualidade"],
    image: "site-assets/seg-empresas.jpg",
    label: "Fretamento corporativo",
  },
  {
    id: "turismo-excursoes",
    section: "Serviço",
    title: "Viaje em grupo com conforto, do embarque ao retorno",
    subtitle:
      "Passeios, excursões e viagens com roteiro, paradas e veículo alinhados ao grupo.",
    bullets: ["Passeios", "Excursões", "Bate-volta", "Roteiro"],
    image: "site-assets/seg-turismo.jpg",
    label: "Turismo e excursões",
  },
  {
    id: "romarias",
    section: "Serviço",
    title: "Transporte acolhedor para grupos de fé",
    subtitle:
      "Romarias, retiros e encontros religiosos com embarques organizados e atenção ao grupo.",
    bullets: ["Igrejas", "Retiros", "Santuários", "Ida e volta"],
    image: "site-assets/seg-romarias.jpg",
    label: "Romarias",
  },
  {
    id: "eventos",
    section: "Serviço",
    title: "Logística para eventos, congressos e associações",
    subtitle:
      "Deslocamento de participantes com horários, pontos e rotas definidos antes do evento.",
    bullets: ["Congressos", "Feiras", "Convenções", "Delegações"],
    image: "site-assets/seg-eventos.jpg",
    label: "Eventos",
  },
  {
    id: "escolas-formaturas",
    section: "Serviço",
    title: "Transporte planejado para a jornada acadêmica",
    subtitle:
      "Excursões pedagógicas, visitas técnicas e formaturas com atenção aos responsáveis.",
    bullets: ["Escolas", "Formaturas", "Visitas técnicas", "Responsáveis"],
    image: "site-assets/seg-escolas.jpg",
    label: "Escolas e formaturas",
  },
  {
    id: "bandas-producoes",
    section: "Serviço",
    title: "Transporte alinhado à agenda do palco",
    subtitle:
      "Artistas, equipes e equipamentos com logística pensada para shows e festivais.",
    bullets: ["Shows", "Turnês", "Equipamentos", "Cronograma"],
    image: "site-assets/seg-bandas.jpg",
    label: "Bandas e produções",
  },
  {
    id: "transfers",
    section: "Serviço",
    title: "Do aeroporto ao destino com organização e conforto",
    subtitle:
      "Transfers, hotéis, receptivo e city tour com veículo adequado a pessoas e bagagens.",
    bullets: ["Aeroporto", "Hotel", "City tour", "Bagagens"],
    image: "site-assets/seg-aeroportos.jpg",
    label: "Transfers",
  },
];
