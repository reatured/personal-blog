import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { findCategory, getAllCategories } from '#/lib/project-utils';
import { Categories } from '#/lib/project';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  // Debug logging
  console.log('Category params received:', params);
  console.log('All available categories:', Categories.map(c => c.slug).join(', '));
  
  const category = findCategory(params.category);
  console.log('Category found:', category ? category.name : 'Not found');
  
  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-300">
          Home
        </Link>
        <span className="text-gray-600">/</span>
        <span className="text-sm text-gray-200">{category.name}</span>
      </div>

      <h1 className="text-2xl font-medium text-gray-200">{category.name}</h1>
      <p className="text-gray-300">{category.description}</p>

      {category.imageUrl && (
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            className={`object-cover ${
              category.imageRatio === 'portrait' ? 'object-top' : 'object-center'
            }`}
          />
        </div>
      )}

      <div className="space-y-6">
        <h2 className="text-xl font-medium text-gray-200">Subcategories</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {category.subCategories.map((subCategory) => (
            <Link
              href={`/${category.slug}/${subCategory.slug}`}
              key={subCategory.slug}
              className="group overflow-hidden rounded-lg bg-gray-800 transition hover:bg-gray-700"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={subCategory.imageUrl}
                  alt={subCategory.name}
                  fill
                  className={`object-cover transition duration-300 group-hover:scale-105 ${
                    subCategory.imageRatio === 'portrait' ? 'object-top' : 'object-center'
                  }`}
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-200 group-hover:text-white">
                  {subCategory.name}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{subCategory.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: category.slug,
  }));
} 