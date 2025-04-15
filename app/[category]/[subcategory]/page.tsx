/**
 * Subcategory Page
 * 
 * This page displays all projects for a specific subcategory within a category.
 * It is a dynamic route that uses the category and subcategory slugs from the URL
 * to fetch and display the relevant content.
 * 
 * Route: /[category]/[subcategory]
 * Example: /3DDesign/Blender
 */

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { findSubCategory, getAllSubCategories, findCategory } from '#/lib/project-utils';
import { Categories } from '#/lib/project';

/**
 * SubCategoryPage component
 * 
 * @param params - Object containing route parameters
 * @param params.category - The slug of the category
 * @param params.subcategory - The slug of the subcategory
 * @returns The rendered subcategory page with projects list
 */
export default async function SubCategoryPage({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  // Debug logging
  console.log('Params received:', params);
  console.log('Available categories:', Categories.map(c => c.slug));
  
  const categoryData = findCategory(params.category);
  console.log('Category found:', categoryData ? categoryData.name : 'Not found');
  
  if (categoryData) {
    console.log('Available subcategories:', categoryData.subCategories.map(s => s.slug));
  }
  
  // Find the category and subcategory data using utility function
  const result = findSubCategory(params.category, params.subcategory);
  console.log('Subcategory result:', result ? `Found ${result.subCategory.name}` : 'Not found');
  
  // If category or subcategory not found, return 404 page
  if (!result) {
    notFound();
  }
  
  // Destructure the result to get category and subcategory data
  const { category, subCategory: subcategory } = result;

  return (
    <div className="space-y-8">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-2">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-300">
          Home
        </Link>
        <span className="text-gray-600">/</span>
        <Link
          href={`/${category.slug}`}
          className="text-sm text-gray-400 hover:text-gray-300"
        >
          {category.name}
        </Link>
        <span className="text-gray-600">/</span>
        <span className="text-sm text-gray-200">{subcategory.name}</span>
      </div>

      {/* Subcategory header */}
      <h1 className="text-2xl font-medium text-gray-200">{subcategory.name}</h1>
      <p className="text-gray-300">{subcategory.description}</p>

      {/* Featured image (if available) */}
      {subcategory.imageUrl && (
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          <Image
            src={subcategory.imageUrl}
            alt={subcategory.name}
            fill
            className={`object-cover ${
              subcategory.imageRatio === 'portrait' ? 'object-top' : 'object-center'
            }`}
          />
        </div>
      )}

      {/* Projects grid */}
      <div className="space-y-6">
        <h2 className="text-xl font-medium text-gray-200">Projects</h2>
        {subcategory.projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Map through projects and create a card for each */}
            {subcategory.projects.map((project) => (
              <Link
                href={`/${category.slug}/${subcategory.slug}/${project.slug}`}
                key={project.id}
                className="group overflow-hidden rounded-lg bg-gray-800 transition hover:bg-gray-700"
              >
                {/* Project image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    className={`object-cover transition duration-300 group-hover:scale-105 ${
                      project.imageRatio === 'portrait' ? 'object-top' : 'object-center'
                    }`}
                  />
                </div>
                {/* Project details */}
                <div className="p-4">
                  <h3 className="font-medium text-gray-200 group-hover:text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{project.description}</p>
                  {/* Software tag */}
                  {project.software && (
                    <span className="mt-2 inline-block rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300">
                      {project.software}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No projects available yet.</p>
        )}
      </div>
    </div>
  );
}

/**
 * Generate static parameters for all subcategory pages
 * 
 * This function is used by Next.js at build time to pre-render all 
 * subcategory pages as static HTML. It improves performance by
 * avoiding server-side rendering for these pages.
 * 
 * @returns An array of objects with category and subcategory slugs
 */
export function generateStaticParams() {
  return getAllSubCategories().map(({ category, subCategory }) => ({
    category: category.slug,
    subcategory: subCategory.slug,
  }));
} 