export default function Project2Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-medium text-gray-200">Cartoon Shader</h1>
        <div className="text-gray-400">
          <p>Modelling and Coloring with Toon Shader in Blender</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-medium text-gray-300">Project Details</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/a0fc2f8f-c051-45b2-be66-1af75ae39598/Wnad+Demo+GIF.gif?format=2500w"
                alt="Cartoon Shader Project"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-200">
                Cartoon Shader Project
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Modelling and Coloring with Toon Shader in Blender
              </p>
            </div>
          </div>
          <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src="https://player.vimeo.com/video/595566707"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-200">Vimeo Video</h3>
              <p className="mt-1 text-sm text-gray-400">
                Video showcasing the project details
              </p>
            </div>
          </div>
          <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/0b1c1a89-d066-4e5b-a24d-c52aef444a33/Cake+Demo+GIF.gif?format=2500w"
                alt="Cake Demo GIF"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-200">
                Cake Demo GIF
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Animated GIF demonstrating the project's details
              </p>
            </div>
          </div>
          <div className="group relative rounded-lg border border-gray-800 bg-gray-900 p-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src="https://player.vimeo.com/video/595566536"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-200">
                Vimeo Video 2
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Another video showcasing the project's details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
