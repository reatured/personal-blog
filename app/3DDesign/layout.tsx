import React from 'react';
import Link from 'next/link';
import { TabGroup } from '#/ui/tab-group';
import { Softwares } from '../../lib/Projects';

export default function Layout({ children }: { children: React.ReactNode }) {
  const softwares = Softwares;
  return (
    <div className="space-y-8">
      <div className="space-y-5 text-white">
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

      <div className="space-y-8">{children}</div>
    </div>
  );
}
