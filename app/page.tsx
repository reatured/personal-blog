import { demos } from '#/lib/demos';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Lingyi Zhou</h1>

      <div className="space-y-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          About Me
        </div>
        <div className="rounded-lg bg-gray-900 px-5 py-3">
          <p className="text-gray-300">
            I am a passionate 3D artist and game designer with expertise in
            various 3D software including Blender, Maya, Houdini, and Cinema 4D.
            My work focuses on creating immersive experiences through 3D design
            and interactive game development. I enjoy exploring the intersection
            of art and technology, pushing creative boundaries in both visual
            storytelling and interactive media.
          </p>
        </div>
      </div>
      <div className="space-y-10 text-white">
        {demos.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.name}
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        {item.name}
                      </div>

                      {item.description ? (
                        <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
