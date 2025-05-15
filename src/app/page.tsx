import SearchForm from 'app/components/SearchForm';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Recipe Finder
          </h1>
          <p className="text-gray-600">
            Find delicious recipes for any occasion
          </p>
        </div>
        <Suspense fallback={<Loading />}>
          <SearchForm />
        </Suspense>
      </main>
    </div>
  );
}
