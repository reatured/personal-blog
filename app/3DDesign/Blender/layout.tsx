'use client';
import React from 'react';
import Link from 'next/link';
import { TabGroup } from '#/ui/tab-group';
import { usePathname } from 'next/navigation'; // Import usePathname instead

const projects = [
  {
    name: 'Modelling with Google Map Data',
    slug: 'project1',
    description: 'Description for Project 1 goes here',
  },
  {
    name: 'Coat Hook',
    slug: 'project2',
    description: 'Description for Project 2 goes here',
  },
  {
    name: 'Teddy Bear',
    slug: 'project3',
    description: 'Description for Project 3 goes here',
  },
  {
    name: 'Shelf Bracket',
    slug: 'project4',
    description: 'Description for Project 4 goes here',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  // Add the "use client" directive at the top of your component

  const pathname = usePathname();
  const isParentPage = pathname === '/3DDesign/Blender';
  return (
    <div className="space-y-8">
      {!isParentPage && ( // Render menu only if not on parent page
        <div className="space-y-10 text-white">
          <div className="space-y-5">
            <TabGroup
              path="/3DDesign/Blender"
              items={[
                {
                  text: 'All',
                },
                ...projects.map((project) => ({
                  text: project.name,
                  slug: project.slug,
                })),
              ]}
            />
          </div>
        </div>
      )}

      <div className="space-y-8">{children}</div>
    </div>
  );
}
