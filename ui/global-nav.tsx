/**
 * Global Navigation Component
 *
 * This component provides the main navigation for the portfolio website.
 * It features a responsive sidebar that collapses into a mobile menu on smaller screens.
 *
 * Features:
 * - Responsive design with mobile menu toggle
 * - Active state highlighting for current route
 * - Collapsible sidebar on desktop
 * - Mobile-friendly hamburger menu
 *
 * @component
 */

'use client';

import {
  Categories,
  type Category,
  type SubCategory,
  type Project,
} from '#/lib/project';
import { NextLogoDark } from '#/ui/next-logo';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useState } from 'react';

/**
 * Main Global Navigation Component
 *
 * @returns {JSX.Element} The global navigation sidebar
 */
export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      {/* Logo/Brand Section */}
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <h3 className="text-lg font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            Lingyi Zhou Portfolio
          </h3>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-400" />
        ) : (
          <Bars3Icon className="block w-6 text-gray-400" />
        )}
      </button>

      {/* Navigation Menu */}
      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pb-24 pt-5">
          {Categories.map((category) => (
            <div key={category.slug}>
              {/* Category Title */}
              <GlobalNavItem
                item={{
                  name: category.name,
                  slug: category.slug,
                }}
                close={close}
                isTitle={true}
              />

              {/* Sub-categories */}
              <div className="space-y-1">
                {category.subCategories.map((subCategory) => (
                  <div key={subCategory.slug}>
                    {/* Sub-category Title */}
                    <GlobalNavItem
                      item={{
                        name: subCategory.name,
                        slug: `${category.slug}/${subCategory.slug}`,
                      }}
                      close={close}
                      isTitle={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

/**
 * Individual Navigation Item Component
 *
 * @param {Object} props - Component props
 * @param {Item} props.item - Navigation item data
 * @param {Function} props.close - Function to close mobile menu
 * @param {boolean} [props.isTitle=false] - Whether this is a section title
 * @returns {JSX.Element} A navigation link with appropriate styling
 */
function GlobalNavItem({
  item,
  close,
  isTitle = false,
}: {
  item: { name: string; slug: string };
  close: () => false | void;
  isTitle?: boolean;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={
        !isTitle
          ? clsx(
              'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
              {
                'text-gray-400 hover:bg-gray-800': !isActive,
                'text-white': isActive,
              },
            )
          : clsx(
              'block rounded-md px-3 py-2 text-sm font-medium hover:text-blue-500',
              {
                'text-blue-400 hover:bg-gray-600': !isActive,
                'bg-gray-600 text-blue-500': isActive,
              },
            )
      }
    >
      {item.name}
    </Link>
  );
}
