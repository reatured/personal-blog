/**
 * Category Layout
 * 
 * This layout is applied to all pages under a specific category.
 * It adds a TabGroup navigation at the top showing all subcategories in the current category.
 */

import React from 'react';
import { TabGroup } from '#/ui/tab-group';
import { findCategory } from '#/lib/project-utils';
import { notFound } from 'next/navigation';

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string };
}) {
  // Find the category data using utility function
  const category = findCategory(params.category);
  
  // If category not found, return 404 page
  if (!category) {
    notFound();
  }
  
  // Create tab items from subcategories
  const tabItems = [
    {
      text: 'Overview',
      slug: '',
    },
    ...category.subCategories.map((subCategory) => ({
      text: subCategory.name,
      slug: subCategory.slug,
    })),
  ];

  return (
    <div className="space-y-8">
      {/* Dynamic TabGroup for subcategory navigation */}
      <div className="flex justify-left">
        <TabGroup
          path={`/${params.category}`}
          items={tabItems}
        />
      </div>
      
      {/* Render the child page (either category page or subcategory page) */}
      {children}
    </div>
  );
}
