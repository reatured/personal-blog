import React from 'react';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Just Another Day</h1>
      <div className="space-y-10 text-white">
        <div className="space-y-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Project Details
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Project content will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
