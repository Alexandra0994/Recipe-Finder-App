import { Recipe, RecipeDetail } from 'app/types/types';
const API_KEY = process.env.SPOONACULAR_API_KEY;
export async function fetchRecipeById(id: string): Promise<RecipeDetail> {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
    {
      cache: 'no-store',
    }
  );
  if (!res.ok) throw new Error('Recipe not found');
  return res.json();
}

export async function getRecipes(
  searchParams: Record<string, string | string[] | undefined>
): Promise<Recipe[]> {
  const get = (key: string) =>
    typeof searchParams[key] === 'string' ? (searchParams[key] as string) : '';
  const query = get('query');
  const cuisine = get('cuisine');
  const maxReadyTime = get('maxReadyTime');
  const urlParams = new URLSearchParams();
  if (query) urlParams.append('query', query);
  if (cuisine) urlParams.append('cuisine', cuisine);
  if (maxReadyTime) urlParams.append('maxReadyTime', maxReadyTime);
  urlParams.append('apiKey', API_KEY || '');
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${urlParams.toString()}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch recipes: ${res.statusText}`);
  }

  const data = await res.json();
  return data.results || [];
}
