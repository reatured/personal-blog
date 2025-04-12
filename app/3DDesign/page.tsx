import React from 'react';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">3D Design</h1>

      <div className="space-y-10 text-white">
        <div className="space-y-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Projects
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800">
              <div className="font-medium text-gray-200 group-hover:text-gray-50">
                Coming Soon
              </div>
              <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                Exciting 3D design projects will be showcased here soon.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
