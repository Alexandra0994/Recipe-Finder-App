import { fetchRecipeById } from 'app/lib/api';
export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = await fetchRecipeById(id);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="mb-2 text-gray-600">
        ⏱ {recipe.readyInMinutes} mins | 🍽 {recipe.servings} servings
      </p>
      <div
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      />

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-5">
        {recipe.extendedIngredients.map((ing, i) => (
          <li key={i}>{ing.original}</li>
        ))}
      </ul>
    </main>
  );
}
