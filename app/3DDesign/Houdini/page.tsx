import React from 'react';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Houdini Projects</h1>
      <div className="space-y-10 text-white">
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Project 1 */}
            <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/086317e7-514d-4abe-b8ce-277a0d48dd33/QQ%E6%88%AA%E5%9B%BE20220104202214.png?content-type=image%2Fpng"
                  alt="Houdini Project 1"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-200">Project 1</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Description of the first project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
