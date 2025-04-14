//make it looks like the layout structure, that have categories include ["Blender", "Maya", "Houdini", "Cinema 4d"]

import React from 'react';
import Link from 'next/link';
import { TabGroup } from '#/ui/tab-group';
import { Softwares } from '../../lib/Projects';

const categories = [
  {
    name: 'Blender',
    slug: 'Blender',
    description: '3D modeling and animation projects created with Blender',
  },
  {
    name: 'Maya',
    slug: 'Maya',
    description: '3D projects created with Autodesk Maya',
  },
  {
    name: 'Houdini',
    slug: 'Houdini',
    description: 'Procedural 3D and VFX projects created with Houdini',
  },
  {
    name: 'Cinema 4D',
    slug: 'Cinema4D',
    description: 'Motion graphics and 3D projects created with Cinema 4D',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const softwares = Softwares;
  return (
    <div className="space-y-8">
      <div className="space-y-10 text-white">
        <div className="space-y-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Software
          </div>

          <TabGroup
            path="/3DDesign"
            items={[
              {
                text: 'All',
              },
              ...softwares.map((category) => ({
                text: category.name,
                slug: category.slug,
              })),
            ]}
          />
        </div>
      </div>

      <div className="space-y-8">{children}</div>
    </div>
  );
}
