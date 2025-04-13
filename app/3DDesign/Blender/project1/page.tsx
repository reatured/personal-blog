export default function Project1Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-medium text-gray-200">
          Modelling with Google Map Data
        </h1>
        <div className="text-gray-400">
          <p>
            Large scale wall poster designed by combining two different Google
            Map datasets and implementing 3D model data in Blender.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-medium text-gray-300">Project Details</h2>
        <div className="space-y-4">
          <p>
            For this project, I implemented 3D model data in two different
            styles into Blender. By adding various lighting techniques and
            effects, I was able to create astonishing visual representations of
            different cities.
          </p>

          <p>The process involved:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Extracting and combining data from two different Google Map
              datasets
            </li>
            <li>Importing the data into Blender and creating 3D models</li>
            <li>
              Applying two distinct visual styles to showcase the cities' unique
              characteristics
            </li>
            <li>
              Experimenting with lighting, shadows, and atmospheric effects to
              enhance depth and realism
            </li>
            <li>
              Rendering high-quality images suitable for large-scale wall
              posters
            </li>
          </ul>

          <p>
            The result is a series of striking cityscapes that blend
            cartographic accuracy with artistic interpretation, creating
            visually captivating representations of urban environments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1646525087584-R170PYIBR5ZM4ETLW1GA/Cologne5.jpeg"
            alt="Cologne cityscape"
            className="h-auto w-full"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1646525087574-P1VGAPTQFKTL7X07366B/Macau5.jpeg"
            alt="Macau cityscape"
            className="h-auto w-full"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1646525088175-V7S5CZZAWOEFLVM9GZLJ/New-York18.jpeg"
            alt="New York cityscape"
            className="h-auto w-full"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1646525088261-NA2SZD6GO0YRTGOPJ16I/San-Francisco4.jpeg"
            alt="San Francisco cityscape"
            className="h-auto w-full"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-300">Featured Cities</h3>
          <p>
            The project showcases four distinct cities, each with its unique
            urban layout and architectural character:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Cologne:</strong> Highlighting the city's blend of
              historic architecture and modern development along the Rhine
              River.
            </li>
            <li>
              <strong>Macau:</strong> Capturing the dense urban landscape and
              the iconic casinos that define this former Portuguese colony.
            </li>
            <li>
              <strong>New York:</strong> Emphasizing the grid-like street
              pattern and the towering skyscrapers of Manhattan.
            </li>
            <li>
              <strong>San Francisco:</strong> Illustrating the city's famous
              hills, bay, and diverse neighborhood layouts.
            </li>
          </ul>
          <p>
            Each cityscape is rendered with attention to detail, showcasing the
            unique topography, street patterns, and architectural features that
            make these urban environments distinct and recognizable.
          </p>
        </div>
      </div>
    </div>
  );
}
