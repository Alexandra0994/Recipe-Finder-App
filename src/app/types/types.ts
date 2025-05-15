export type RecipeDetail = {
  title: string;
  extendedIngredients: { original: string }[];
  readyInMinutes: number;
  servings: number;
  summary: string;
};
export type Recipe = {
  id: number;
  title: string;
  image: string;
  error?: string;
};
export type RecipeSearchParams = {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
};
