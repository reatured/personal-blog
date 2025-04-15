import { demos } from '#/lib/demos';
import Link from 'next/link';
import Image from 'next/image';
import { Softwares } from '#/lib/Projects';
import { SoftwareCard, ProjectCard } from './components/softwareSection';
export default function Page() {
  const latestProjects = Softwares.find(
    (software) => software.name === 'Latest',
  );
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Lingyi Zhou</h1>

      <div className="space-y-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          About Me
        </div>
        <p className="text-gray-300">
          I am a passionate 3D artist and game designer with expertise in
          various 3D software including Blender, Maya, Houdini, and Cinema 4D.
          My work focuses on creating immersive experiences through 3D design
          and interactive game development. I enjoy exploring the intersection
          of art and technology, pushing creative boundaries in both visual
          storytelling and interactive media.
        </p>

        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1576561306691-1NGKKJYVFK23LSYMH2PN/IMG_0777.jpeg?format=750w"
            alt="3D Artwork"
            width={750}
            height={750}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-4"></div>
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Education
        </div>
        <ul className="list-disc space-y-2 pl-5">
          <li className="text-gray-300">
            Design and Technology (M.F.A.) at Parsons School of Design
            (2021-2023)
          </li>
          <li className="text-gray-300">
            Professional Certificate in AR-VR Development and 3D Graphics at New
            York University (2021-2022)
          </li>
          <li className="text-gray-300">
            Design and Development of Digital Games (M.A.) at Teachers College,
            Columbia University. (2019-2021)
          </li>
          <li className="text-gray-300">
            Bachelor of Science degree in Agriculture and Environmental
            Education at University of California, Davis. (2015-2019)
          </li>
          <li className="text-gray-300">
            High School Affiliated to Shanghai Jiao Tong University, Shanghai,
            China. (2012-2015)
          </li>
        </ul>
      </div>
      <div className="space-y-10 text-white">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Latest Update
        </div>

        {latestProjects && <SoftwareCard software={latestProjects} />}

        {demos.map((section) => (
          <div key={section.name} className="space-y-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {section.name}
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {section.items.map((item) => (
                <Link
                  href={`/${item.slug}`}
                  key={item.name}
                  className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                >
                  <div className="font-medium text-gray-200 group-hover:text-gray-50">
                    {item.name}
                  </div>

                  {item.description && (
                    <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                      {item.description}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>hello</div>
    </div>
  );
}
