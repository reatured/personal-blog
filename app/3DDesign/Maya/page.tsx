import React from 'react';
import { ProjectCard, SoftwareCard } from '../page';
import { Softwares } from '../../../lib/Projects';

export default function Page() {
  const software = Softwares.find((software) => software.slug === 'Maya');
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Maya Projects</h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {software?.projects.map((project: any) => (
          <ProjectCard
            key={project.id}
            project={project}
            softwareSlug={software?.slug}
          />
        ))}
      </div>
    </div>
  );
}
