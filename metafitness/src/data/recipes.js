export const recipes = [
  {
    id: 'omelete_brots_queijo',
    nome: 'Omelete de brócolis e queijo',
    refeicao: 'café da manhã',
    tempo_preparo_min: 10,
    custo_por_porcao: 'baixo',
    porcao_g: 250,
    macros: {kcal: 350, proteina_g: 30, carbo_g: 6, gordura_g: 22},
    alergenicos: ['lactose', 'ovos'],
    tags: ['high-protein', 'low-carb', 'brasileira'],
    ingredientes: ['2 ovos', '1/2 xíc. brócolis picado', '30g queijo minas', '1 col. chá azeite', 'sal e pimenta'],
    modo_preparo: [
      'Refogue brócolis no azeite.',
      'Bata ovos com sal/pimenta, adicione queijo.',
      'Despeje na frigideira, cozinhe até firmar.'
    ],
    foto_url: 'cdn://rec/omelete_brots.jpg'
  },
  {
    id: 'overnight_oats_frutas',
    nome: 'Overnight oats com frutas',
    refeicao: 'café da manhã',
    tempo_preparo_min: 5,
    custo_por_porcao: 'baixo',
    porcao_g: 300,
    macros: {kcal: 280, proteina_g: 12, carbo_g: 45, gordura_g: 7},
    alergenicos: ['glúten', 'lactose'],
    tags: ['veg', 'budget'],
    ingredientes: ['1/2 xíc. aveia', '1 xíc. leite', 'frutas a gosto'],
    modo_preparo: ['Misture tudo e deixe na geladeira à noite.'],
    foto_url: 'cdn://rec/overnight_oats.jpg'
  }
];
