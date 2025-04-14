'use client';
import React from 'react';
import Link from 'next/link';
import { TabGroup } from '#/ui/tab-group';
import { usePathname } from 'next/navigation';
import { Softwares } from '../../lib/Projects';
import { SoftwareCard } from '../components/softwareSection';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const isParentPage = pathSegments.length <= 3; // /3DDesign or /3DDesign/Blender
  const currentSoftware = pathSegments[2]; // Get the software name from the path
  const currentSoftwareData = Softwares.find(
    (software) => software.slug === currentSoftware,
  );

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
            ...Softwares.map((category) => ({
              text: category.name,
              slug: category.slug,
            })),
          ]}
        />
      </div>

      {currentSoftware && currentSoftwareData && (
        <div className="space-y-5 text-white">
          <div className="block md:hidden">
            {pathSegments.length > 3 ? (
              <TabGroup
                path={`/3DDesign/${currentSoftware}`}
                items={[
                  {
                    text: 'All',
                  },
                  ...(currentSoftwareData.projects?.map(
                    (project: { name: string; slug: string }) => ({
                      text: project.name,
                      slug: project.slug,
                    }),
                  ) || []),
                ]}
              />
            ) : (
              <SoftwareCard
                key={currentSoftwareData.name}
                software={currentSoftwareData}
              />
            )}
          </div>
          <div className="hidden md:block">
            <SoftwareCard
              key={currentSoftwareData.name}
              software={currentSoftwareData}
            />
          </div>
        </div>
      )}

      <div className="space-y-8">{children}</div>
    </div>
  );
}
