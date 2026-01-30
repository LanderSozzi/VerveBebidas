
export type Category = 'Todas' | 'Frutas' | 'Cremosas' | 'Detox' | 'Alcoólicas' | 'Energia';

export interface ExtraIngredient {
  id: string;
  name: string;
  price: number;
  image?: string;
}

export interface Drink {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  ingredients: string[];
  preparation?: string;
  origin?: string;
}

export interface CartItem extends Drink {
  quantity: number;
  selectedExtras: ExtraIngredient[];
  totalPricePerUnit: number;
}

export interface RecommendationResponse {
  drinkName: string;
  reason: string;
  suggestedAddon: string;
}
