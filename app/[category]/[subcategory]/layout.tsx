/**
 * Subcategory Layout
 * 
 * This layout is applied to all pages under a specific subcategory.
 * It adds a secondary TabGroup navigation at the top showing all projects in the current subcategory.
 */

import React from 'react';
import { TabGroup } from '#/ui/tab-group';
import { findSubCategory } from '#/lib/project-utils';
import { notFound } from 'next/navigation';

export default async function SubcategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string; subcategory: string };
}) {
  // Find the subcategory data using utility function
  const result = findSubCategory(params.category, params.subcategory);
  
  // If subcategory not found, return 404 page
  if (!result) {
    notFound();
  }
  
  const { category, subCategory } = result;
  
  // Only show project tabs if there are projects
  if (subCategory.projects.length === 0) {
    return <>{children}</>;
  }
  
  // Create tab items from projects
  const tabItems = [
    {
      text: 'All Projects',
      slug: '',
    },
    ...subCategory.projects.map((project) => ({
      text: project.name,
      slug: project.slug,
    })),
  ];

  return (
    <div className="space-y-8">
      {/* Secondary TabGroup for project navigation */}
      <div className="flex justify-left">
        <TabGroup
          path={`/${params.category}/${params.subcategory}`}
          items={tabItems}
        />
      </div>
      
      {/* Render the child page (either subcategory page or project page) */}
      {children}
    </div>
  );
} 