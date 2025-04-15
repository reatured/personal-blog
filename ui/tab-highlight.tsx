/**
 * TabHighlight Component
 * 
 * A subtle highlighting component that uses CSS transitions.
 * Used within the TabGroup component to provide visual feedback.
 */

'use client';

import { usePathname } from 'next/navigation';

export function TabHighlight({ slug }: { slug: string }) {
  const pathname = usePathname();
  const isActive = pathname.endsWith(slug);
  
  return isActive ? (
    <div 
      className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 transition-all duration-300"
    />
  ) : null;
} 