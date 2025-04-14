//database for my projects. It saves the project name, description, and image url, and the software used to create it.

export type Project = {
  id: number;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  software: string;
  imageRatio: 'square' | 'landscape' | 'portrait';
  highlight: boolean;
};
export const Softwares: {
  name: string;
  slug: string;
  description: string;
  projects: Project[];
}[] = [
  {
    name: 'Blender',
    slug: 'Blender',
    description: '3D modeling and animation projects created with Blender',
    projects: [
      {
        id: 1,
        slug: 'project1',
        name: 'Modelling with Google Map Data',
        description:
          'Large scale wall poster designed by combining two different Google Map datasets and implementing 3D model data in Blender.',
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1646525087584-R170PYIBR5ZM4ETLW1GA/Cologne5.jpeg?format=1000w',
        software: 'Blender',
        imageRatio: 'square',
        highlight: false,
      },
      {
        id: 2,
        slug: 'project2',
        name: 'Cartoon Shader',
        description: 'Modelling objects and coloring them with cartoon shader.',
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/a0fc2f8f-c051-45b2-be66-1af75ae39598/Wnad+Demo+GIF.gif?format=750w',
        software: 'Blender',
        imageRatio: 'square',
        highlight: false,
      },
      {
        id: 3,
        slug: 'project3',
        name: 'Teddy Bear',
        description:
          'Hair modelling with particle system based on real teddy bear toy',
        imageUrl:
          'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/1590806202203-0KVBKWYEMEAY48QHPSGH/Bear+Image+7.png?content-type=image%2Fpng',
        software: 'Blender',
        imageRatio: 'square',
        highlight: false,
      },
      {
        id: 4,
        slug: 'project4',
        name: 'Customized Hardware',
        description:
          'Industrial design with customized home decoration hardwares.',
        imageUrl:
          'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/9b7c6dd4-3676-4fc1-8834-21296877e85e/%E6%94%AF%E6%9E%B6%E6%B8%B2%E6%9F%93%E5%9B%BE4.png?content-type=image%2Fpng',
        software: 'Blender',
        imageRatio: 'square',
        highlight: false,
      },
    ],
  },
  {
    name: 'Maya',
    slug: 'Maya',
    description: '3D projects created with Autodesk Maya',
    projects: [
      {
        id: 1,
        slug: 'project1',
        name: 'Glass Clip',
        description: 'Product design with for home decoration hardware',
        imageUrl:
          'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/1630450019654-9M9R9FB3ZX2HT422LH0W/Glass+Clip2.png?content-type=image%2Fpng',
        software: 'Maya',
        imageRatio: 'landscape',
        highlight: false,
      },
      {
        id: 2,
        slug: 'project2',
        name: 'Canon Animation',
        description: 'Idling animation of a canon',
        imageUrl:
          'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/1909711d-87a8-4ae4-91f7-2d5a9baeef8b/Canon+Animation.gif?content-type=image%2Fgif',
        software: 'Maya',
        imageRatio: 'landscape',
        highlight: false,
      },
    ],
  },
  {
    name: 'Houdini',
    slug: 'Houdini',
    description: 'Procedural 3D and VFX projects created with Houdini',
    projects: [
      {
        id: 1,
        slug: 'houdini-project-1',
        name: 'Houdini Project 1',
        description: 'Description of the first project',
        imageUrl:
          'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/086317e7-514d-4abe-b8ce-277a0d48dd33/QQ%E6%88%AA%E5%9B%BE20220104202214.png?content-type=image%2Fpng',
        software: 'Houdini',
        imageRatio: 'square',
        highlight: false,
      },
    ],
  },
  {
    name: 'Cinema 4D',
    slug: 'Cinema4D',
    description: 'Motion graphics and 3D projects created with Cinema 4D',
    projects: [
      {
        id: 1,
        slug: 'generative-art',
        name: 'Generative Art',
        description: 'Procedural generative art created with Cinema 4D',
        imageUrl:
          'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/a5737306-9478-4ae4-b173-2482e58da178/+5600_SP23_Loop_15_Lingyi_Zhou+2.gif?content-type=image%2Fgif',
        software: 'Cinema 4D',
        imageRatio: 'square',
        highlight: false,
      },
      {
        id: 2,
        slug: 'slow-motion-animation',
        name: 'Slow Motion Animation',
        description:
          'A dramatic slow-motion scene featuring a girl skillfully dodging a bullet.',
        imageUrl:
          'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/5fb32f43-fb18-4d4b-b882-3f0309a8cf87/Project+View.jpg?content-type=image%2Fjpeg',
        software: 'Cinema 4D',
        imageRatio: 'square',
        highlight: false,
      },
    ],
  },
  {
    name: 'Fusion 360',
    slug: 'Fusion360',
    description: '3D design and engineering projects created with Fusion 360',
    projects: [
      {
        id: 1,
        slug: 'fusion360-project-1',
        name: 'Fusion 360 Project 1',
        description: 'Description of the first project',
        imageUrl:
          'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/086317e7-514d-4abe-b8ce-277a0d48dd33/QQ%E6%88%AA%E5%9B%BE20220104202214.png?content-type=image%2Fpng',
        software: 'Fusion 360',
        imageRatio: 'square',
        highlight: false,
      },
    ],
  },
];
