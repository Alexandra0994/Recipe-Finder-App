'use client';
import { useActionState } from 'react';
import { createUseParams } from '../actions/createUseParams';
import { Search } from 'lucide-react';

export default function SearchForm() {
  const [state, formAction, pending] = useActionState(createUseParams, null);

  return (
    <form
      action={formAction}
      className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="query"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            What would you like to cook?
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="query"
              name="query"
              placeholder="e.g., pasta, chicken, salad"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="cuisine"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Cuisine type
          </label>
          <select
            id="cuisine"
            name="cuisine"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Select cuisine</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="maxTime"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Maximum preparation time (minutes)
          </label>
          <input
            type="number"
            id="maxTime"
            name="maxTime"
            min="1"
            placeholder="e.g., 30"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          <div
            className={`text-red-500 text-sm transition-opacity duration-300 ${
              state?.error ? 'opacity-100' : 'opacity-0 h-0'
            }`}
          >
            {state?.error ?? ''}
          </div>
        </div>
        <button
          disabled={pending}
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          {pending ? 'Searching...' : 'Next'}
        </button>
      </div>
    </form>
  );
}
