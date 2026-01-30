
import { Drink, ExtraIngredient } from './types';

export const EXTRA_INGREDIENTS: ExtraIngredient[] = [
  { 
    id: 'ex1', 
    name: 'Whey Protein', 
    price: 4.50, 
    image: 'https://images.unsplash.com/photo-1593095191070-9a0439588f36?q=80&w=200&auto=format&fit=crop' 
  },
  { 
    id: 'ex2', 
    name: 'Mel Orgânico', 
    price: 2.00, 
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=200&auto=format&fit=crop' 
  },
  { 
    id: 'ex3', 
    name: 'Sementes de Chia', 
    price: 1.50, 
    image: 'https://images.unsplash.com/photo-1588605273724-818239b8b170?q=80&w=200&auto=format&fit=crop' 
  }
];

export const DRINKS: Drink[] = [
  {
    id: '1',
    name: 'Morango Bliss',
    description: 'Mistura cremosa de morangos orgânicos frescos e leite integral com um toque de baunilha.',
    price: 12.99,
    category: 'Frutas',
    image: 'https://images.unsplash.com/photo-1543648973-1eb94fa2eeef?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    ingredients: ['Morangos Frescos', 'Leite Integral', 'Extrato de Baunilha', 'Mel Orgânico', 'Iogurte Grego'],
    preparation: 'Os morangos são selecionados manualmente e batidos em alta velocidade com iogurte grego e leite resfriado a 4°C para garantir a textura aveludada característica.',
    origin: 'Morangos provenientes de fazendas familiares em Atibaia, SP, colhidos diariamente ao amanhecer.'
  },
  {
    id: '2',
    name: 'Paraíso de Choco-Nozes',
    description: 'Rico chocolate amargo misturado com pasta de amendoim e bananas congeladas.',
    price: 14.50,
    category: 'Cremosas',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    ingredients: ['Chocolate 70% Amargo', 'Pasta de Amendoim Cremosa', 'Bananas Congeladas', 'Leite de Amêndoas', 'Nibs de Cacau'],
    preparation: 'Utilizamos um blend de cacau belga derretido em banho-maria antes de ser batido com bananas nanicas ultra-congeladas para uma densidade similar ao gelato.',
    origin: 'Cacau sustentável da região da Transamazônica e amendoins selecionados do interior de São Paulo.'
  },
  {
    id: '3',
    name: 'Revive Verde',
    description: 'Uma mistura detox refrescante de espinafre, maçã verde e gengibre.',
    price: 11.00,
    category: 'Detox',
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    ingredients: ['Espinafre Baby', 'Maçã Verde Granny Smith', 'Gengibre Fresco', 'Raspas de Limão', 'Sementes de Chia', 'Pepino'],
    preparation: 'Prensado a frio para preservar todas as enzimas e nutrientes, finalizado com sementes de chia ativadas por 15 minutos.',
    origin: 'Folhas colhidas em sistema de hidroponia local, garantindo pureza e frescor máximo.'
  },
  {
    id: '4',
    name: 'Brisa Tropical',
    description: 'Manga, abacaxi e maracujá batidos com água de coco pura.',
    price: 13.25,
    category: 'Frutas',
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    ingredients: ['Manga Alphonso', 'Abacaxi Pérola', 'Maracujá Fresco', 'Água de Coco', 'Suco de Lima'],
    preparation: 'As polpas são extraídas na hora e misturadas com água de coco natural gelada, sem adição de açúcares refinados.',
    origin: 'Mangas e abacaxis selecionados do Vale do São Francisco, conhecidos por sua doçura natural única.'
  },
  {
    id: '5',
    name: 'Shake de Espresso',
    description: 'Dose dupla de café Arábica batido com sorvete de baunilha e caramelo.',
    price: 15.00,
    category: 'Energia',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    ingredients: ['Espresso Duplo Arábica', 'Sorvete de Baunilha Premium', 'Xarope de Caramelo Artesanal', 'Chantilly', 'Canela em Pó'],
    preparation: 'Café moído na hora e extraído em 30 segundos, batido imediatamente com sorvete artesanal para criar um contraste de temperatura perfeito.',
    origin: 'Grãos selecionados de altitude da região da Mantiqueira de Minas, com notas de chocolate e castanhas.'
  },
  {
    id: '6',
    name: 'Frutas Silvestres',
    description: 'Mirtilos e amoras com um toque de hortelã e limão siciliano.',
    price: 12.50,
    category: 'Frutas',
    image: 'https://images.unsplash.com/photo-1497534446932-c946e7316ad1?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    ingredients: ['Mirtilos Silvestres', 'Amoras Frescas', 'Hortelã do Quintal', 'Suco de Limão Siciliano', 'Água com Gás'],
    preparation: 'As frutas são maceradas levemente para liberar os sucos e depois batidas com gelo triturado e hortelã fresca para um frescor explosivo.',
    origin: 'Mirtilos e amoras importados da Patagônia chilena durante a safra e mantidos em congelamento rápido.'
  },
  {
    id: '7',
    name: 'Margarita Sunset',
    description: 'Tequila premium batida com morango e o clássico toque cítrico.',
    price: 18.00,
    category: 'Alcoólicas',
    image: 'https://images.unsplash.com/photo-1458945037814-389ec6994cbd?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    ingredients: ['Tequila Reposado', 'Morangos Macerados', 'Suco de Lima', 'Triple Sec', 'Néctar de Agave', 'Borda de Sal'],
    preparation: 'Shaker vigoroso com gelo cristalino, filtragem dupla e finalização com uma crosta de sal marinho e raspas de lima.',
    origin: 'Tequila 100% agave azul proveniente de Jalisco, México, envelhecida por 6 meses.'
  },
  {
    id: '8',
    name: 'Punch de Proteína',
    description: 'Whey protein, aveia e tâmaras para a recuperação pós-treino perfeita.',
    price: 16.50,
    category: 'Energia',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    ingredients: ['Whey Protein Isolado', 'Aveia em Flocos', 'Tâmaras Medjool', 'Banana Congelada', 'Iogurte Grego Light'],
    preparation: 'A aveia é deixada de molho por 12 horas para facilitar a digestão antes de ser batida com as tâmaras e o isolado proteico.',
    origin: 'Tâmaras Medjool premium importadas de Israel e Whey Protein de alta biodisponibilidade.'
  }
];
