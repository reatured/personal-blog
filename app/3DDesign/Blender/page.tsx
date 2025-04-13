import React from 'react';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Blender Projects</h1>
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
                  src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1646525087584-R170PYIBR5ZM4ETLW1GA/Cologne5.jpeg?format=1000w"
                  alt="Blender Project 1"
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
                  src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/1616029881555-0U2KGLSOEM1ONKQB6X2E/CH243+Pic6.jpg?content-type=image%2Fjpeg"
                  alt="Blender Project 2"
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

            {/* Project 3 */}
            <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <img
                  src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/1590806202203-0KVBKWYEMEAY48QHPSGH/Bear+Image+7.png?content-type=image%2Fpng"
                  alt="Blender Project 3"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-200">Project 3</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Description of the third project
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <img
                  src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/9b7c6dd4-3676-4fc1-8834-21296877e85e/%E6%94%AF%E6%9E%B6%E6%B8%B2%E6%9F%93%E5%9B%BE4.png?content-type=image%2Fpng"
                  alt="Blender Project 4"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-200">Project 4</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Description of the fourth project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
