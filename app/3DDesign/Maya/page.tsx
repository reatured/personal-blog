import React from 'react';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Maya Projects</h1>
      <div className="space-y-10 text-white">
        <div className="space-y-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Projects
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Project 1 */}
            <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/1630450019654-9M9R9FB3ZX2HT422LH0W/Glass+Clip2.png?content-type=image%2Fpng"
                  alt="Maya Project 1"
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

            {/* Project 2 */}
            <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/1909711d-87a8-4ae4-91f7-2d5a9baeef8b/Canon+Animation.gif?content-type=image%2Fgif"
                  alt="Maya Project 2"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-200">Project 2</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Description of the second project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
