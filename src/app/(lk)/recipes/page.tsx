import Link from 'next/link';
import { getRecipes } from 'app/lib/api';
import { Recipe } from '@/types/types';
export default async function RecipesPage() {
  const recipes = await getRecipes({
    query: '',
    cuisine: '',
    maxReadyTime: '',
  });
  return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Recipes</h1>
        {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {recipes.map((recipe: Recipe) => (
              <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
                <div className="block border rounded shadow hover:shadow-lg transition">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-40 object-cover rounded-t"
                  />
                  <div className="p-2">{recipe.title}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
  );
}
