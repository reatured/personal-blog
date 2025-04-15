import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { findProject, getAllProjects } from '#/lib/project-utils';

export default async function ProjectPage({
  params,
}: {
  params: { category: string; subcategory: string; project: string };
}) {
  const result = findProject(params.category, params.subcategory, params.project);
  
  if (!result) {
    notFound();
  }
  
  const { category, subCategory, project } = result;

  return (
    <div className="space-y-8">
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
        <Link
          href={`/${category.slug}/${subCategory.slug}`}
          className="text-sm text-gray-400 hover:text-gray-300"
        >
          {subCategory.name}
        </Link>
        <span className="text-gray-600">/</span>
        <span className="text-sm text-gray-200">{project.name}</span>
      </div>

      <h1 className="text-2xl font-medium text-gray-200">{project.name}</h1>
      
      {project.software && (
        <div className="inline-block rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300">
          {project.software}
        </div>
      )}
      
      <p className="text-gray-300">{project.description}</p>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className={`object-cover ${
            project.imageRatio === 'portrait' ? 'object-top' : 'object-center'
          }`}
          priority
        />
      </div>

      {/* Add more project details here */}
      <div className="space-y-6">
        <h2 className="text-xl font-medium text-gray-200">Project Details</h2>
        <p className="text-gray-300">
          This is a showcase of my work on {project.name}. 
          {project.highlight && " This is one of my highlighted projects."}
        </p>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between pt-6">
        <Link
          href={`/${category.slug}/${subCategory.slug}`}
          className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
        >
          Back to {subCategory.name}
        </Link>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getAllProjects().map(({ category, subCategory, project }) => ({
    category: category.slug,
    subcategory: subCategory.slug,
    project: project.slug,
  }));
} 