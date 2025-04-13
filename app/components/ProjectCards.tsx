import React from 'react';
import Link from 'next/link';

function truncateDescription(description: string, maxWords: number) {
  const words = description.split(' ');
  return words.length > maxWords
    ? words.slice(0, maxWords).join(' ') + '...'
    : description;
}

export function ProjectCard({
  project,
  softwareSlug,
}: {
  project: any;
  softwareSlug: string;
}) {
  return (
    <Link
      href={`/3DDesign/${softwareSlug}/${project.slug}`}
      className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4"
    >
      <div
        className={`relative w-full overflow-hidden rounded-lg ${project.imageRatio === 'square' ? 'aspect-square' : project.imageRatio === 'landscape' ? 'aspect-[16/9]' : 'aspect-[9/16]'}`}
      >
        <img
          src={project.imageUrl}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-200">{project.name}</h3>
        <p className="mt-1 text-xs text-gray-400">
          {truncateDescription(project.description, 10)}
        </p>
      </div>
    </Link>
  );
}

export const SoftwareCard = ({ software }: { software: any }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-medium text-gray-300">{software.name}</h1>
      <p className="text-sm text-gray-400">{software.description}</p>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        {software.projects.map((project: any) => (
          <ProjectCard
            key={project.id}
            project={project}
            softwareSlug={software.slug}
          />
        ))}
      </div>
    </div>
  );
};
