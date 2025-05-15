import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-800 mb-2 ">Our Recipes</h1>
        <p className="text-gray-600">Find delicious recipes for any occasion</p>
        <hr className="w-full h-1 bg-green-500 my-4 border-none" />
        {children}
      </div>
    </div>
  );
}
