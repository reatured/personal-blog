'use client';

import { demos, type Item } from '#/lib/demos';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useState } from 'react';

/**
 * GlobalNav component renders a navigation bar for the application.
 * It includes a logo, a menu button for mobile view, and a list of demo sections.
 */
export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      {/* Logo and title link */}
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          {/* <div className="h-7 w-7 rounded-full">
            <NextLogoDark />
          </div> */}

          <h3 className="text-lg font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            Lingyi Zhou Portfolio
          </h3>
        </Link>
      </div>

      {/* Mobile menu button */}
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

      {/* Navigation items */}
      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pb-24 pt-5">
          {demos.map((section) => {
            return (
              <div key={section.name}>
                {/* <Link href={`/${section.slug}`}>
                  <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                    <div>{section.name}</div>
                  </div>
                </Link> */}

                <GlobalNavItem
                  key={section.slug}
                  item={section}
                  close={close}
                  isTitle={true}
                />

                <div className="space-y-1">
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

/**
 * GlobalNavItem component represents a single navigation item in the GlobalNav.
 * @param item - The navigation item data.
 * @param close - Function to close the navigation menu.
 */
function GlobalNavItem({
  item,
  close,
  isTitle = false,
}: {
  item: Item;
  close: () => false | void;
  isTitle?: boolean;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
          'text-lg uppercase text-gray-200': isTitle,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
