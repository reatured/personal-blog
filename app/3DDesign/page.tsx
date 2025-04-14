import React from 'react';

export default function Page() {
  return (
    <div className="space-y-16">
      {/* Blender Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-xl font-medium text-gray-300">Blender</h1>
          <p className="text-sm text-gray-400">
            3D modeling and animation projects created with Blender
          </p>
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
        </div>
      </div>

      {/* Maya Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-xl font-medium text-gray-300">Maya</h1>
          <p className="text-sm text-gray-400">
            3D projects created with Autodesk Maya
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Project 1 */}
          <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
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
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
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

      {/* Houdini Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-xl font-medium text-gray-300">Houdini</h1>
          <p className="text-sm text-gray-400">
            Procedural 3D and VFX projects created with Houdini
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Project 1 */}
          <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
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

      {/* Cinema 4D Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-xl font-medium text-gray-300">Cinema 4D</h1>
          <p className="text-sm text-gray-400">
            Motion graphics and 3D projects created with Cinema 4D
          </p>
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
  );
}
