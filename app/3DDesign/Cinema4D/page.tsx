import React from 'react';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Cinema 4D Projects</h1>
      <div className="space-y-10 text-white">
        <div className="space-y-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Projects
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Project 1 */}
            <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <img
                  src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/a5737306-9478-4ae4-b173-2482e58da178/+5600_SP23_Loop_15_Lingyi_Zhou+2.gif?content-type=image%2Fgif"
                  alt="Cinema 4D Project 1"
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
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <img
                  src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/5fb32f43-fb18-4d4b-b882-3f0309a8cf87/Project+View.jpg?content-type=image%2Fjpeg"
                  alt="Cinema 4D Project 2"
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
