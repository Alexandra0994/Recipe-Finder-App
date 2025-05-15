'use server';
import { redirect } from 'next/navigation';

export async function createUseParams(
  _state: { error: string } | null,
  formData: FormData
): Promise<{ error: string } | null> {
  const query = formData.get('query')?.toString();
  const cuisine = formData.get('cuisine')?.toString();
  const maxTime = formData.get('maxTime')?.toString();

  const nothingFilled = !query && !cuisine && !maxTime;

  if (nothingFilled) {
    return { error: 'Please fill at least one field' };
  }

  const params = new URLSearchParams();
  if (query) params.append('query', query);
  if (cuisine) params.append('cuisine', cuisine);
  if (maxTime) params.append('maxReadyTime', maxTime);

  redirect(`/recipes?${params.toString()}`);
}
