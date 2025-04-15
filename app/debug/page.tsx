import { Categories } from '#/lib/project';
import Link from 'next/link';

export default function DebugPage() {
  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold">Debug Page - Data Validation</h1>
      
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">All Categories:</h2>
        <ul className="pl-6 list-disc">
          {Categories.map((category) => (
            <li key={category.slug} className="mb-4">
              <div>
                <span className="font-medium">{category.name}</span>
                <span className="ml-2 text-gray-400">({category.slug})</span>
                <Link href={`/${category.slug}`} className="ml-2 text-blue-400 underline">View Page</Link>
              </div>
              
              {category.subCategories.length > 0 && (
                <div className="mt-2 ml-4">
                  <h3 className="text-md font-medium">Subcategories:</h3>
                  <ul className="pl-6 list-disc">
                    {category.subCategories.map((subcategory) => (
                      <li key={subcategory.slug} className="mb-2">
                        <div>
                          <span className="font-medium">{subcategory.name}</span>
                          <span className="ml-2 text-gray-400">({subcategory.slug})</span>
                          <Link href={`/${category.slug}/${subcategory.slug}`} className="ml-2 text-blue-400 underline">View Page</Link>
                        </div>
                        
                        {subcategory.projects.length > 0 && (
                          <div className="mt-1 ml-4">
                            <h4 className="text-sm font-medium">Projects:</h4>
                            <ul className="pl-6 list-disc">
                              {subcategory.projects.map((project) => (
                                <li key={project.id} className="text-sm">
                                  <span>{project.name}</span>
                                  <span className="ml-2 text-gray-400">({project.slug})</span>
                                  <Link href={`/${category.slug}/${subcategory.slug}/${project.slug}`} className="ml-2 text-blue-400 underline">View Page</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 