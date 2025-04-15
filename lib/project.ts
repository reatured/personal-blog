//organize projects data. Structured by category => sub-category => project

//define project type
export type Project = {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  software: string;
  imageRatio: 'square' | 'landscape' | 'portrait';
  highlight: boolean;
};

//define sub-category type
export type SubCategory = {
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageRatio: 'square' | 'landscape' | 'portrait';
  projects: Project[];
};

//define category type
export type Category = {
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageRatio: 'square' | 'landscape' | 'portrait';
  subCategories: SubCategory[];
};

//adding data by category
export const Categories: Category[] = [
  {
    name: '3D Design',
    slug: '3DDesign',
    description: '3D Design and Modeling Projects',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
    imageRatio: 'landscape',
    subCategories: [
      {
        name: 'Blender',
        slug: 'Blender',
        description: '3D modeling and animation projects created with Blender',
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
        imageRatio: 'landscape',
        projects: [
          {
            id: 1,
            name: 'Modelling with Google Map Data',
            slug: 'project1',
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
            name: 'Cartoon Shader',
            slug: 'project2',
            description: 'Modelling and Coloring with Toon Shader in Blender',
            imageUrl:
              'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/a0fc2f8f-c051-45b2-be66-1af75ae39598/Wnad+Demo+GIF.gif?format=2500w',
            software: 'Blender',
            imageRatio: 'square',
            highlight: false,
          },
          {
            id: 3,
            name: 'Teddy Bear',
            slug: 'project3',
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
            name: 'Procedural Modelling',
            slug: 'project4',
            description: 'Procedural modelling using graph nodes in Blender',
            imageUrl:
              'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/7ab94758-9d5a-4a27-ba56-ec09d5d1a733/rendered1.png?format=750w',
            software: 'Blender',
            imageRatio: 'square',
            highlight: false,
          },
          {
            id: 5,
            name: 'Chess Pieces Used in Virtual Reality',
            slug: 'project5',
            description: 'Implementation of chess pieces in Unity',
            imageUrl:
              'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1578119718134-7RJ2ZYJRJLY8FE7EIC7O/Chess+Scene+Finished+View2+20-01-04.png?format=2500w',
            software: 'Blender',
            imageRatio: 'square',
            highlight: false,
          },
          {
            id: 6,
            name: 'Bowling Scene',
            slug: 'project6',
            description: 'Modelled and rendered a bowling scene in Blender',
            imageUrl:
              'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1581452484247-CNUOZA0EX4P4CNGDUDKN/3.1+Bowling+Scene.png?format=750w',
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
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1616029865192-RB2DYMLFP61LAXMNK5BE/CH243+Pic7.jpg?format=750w',
        imageRatio: 'square',
        projects: [
          {
            id: 1,
            name: 'Glass Clip',
            slug: 'project1',
            description: 'Product design with for home decoration hardware',
            imageUrl:
              'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/1630450019654-9M9R9FB3ZX2HT422LH0W/Glass+Clip2.png?content-type=image%2Fpng',
            software: 'Maya',
            imageRatio: 'landscape',
            highlight: false,
          },
          {
            id: 2,
            name: 'Canon Animation',
            slug: 'project2',
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
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
        imageRatio: 'landscape',
        projects: [
          {
            id: 1,
            name: 'Fluid Simulation',
            slug: 'houdini-project-1',
            description: 'Fluid simulation animation',
            imageUrl:
              'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/086317e7-514d-4abe-b8ce-277a0d48dd33/QQ%E6%88%AA%E5%9B%BE20220104202214.png?content-type=image%2Fpng',
            software: 'Houdini',
            imageRatio: 'square',
            highlight: false,
          },
          {
            id: 2,
            name: 'Donut',
            slug: 'houdini-project-2',
            description: 'Procedural modelling, rendered with motion blur',
            imageUrl:
              'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/648a2ce7-1b35-4092-8906-b092872d9704/DonutRender..jpg?format=750w',
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
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
        imageRatio: 'landscape',
        projects: [
          {
            id: 1,
            name: 'Generative Art',
            slug: 'generative-art',
            description: 'Procedural generative art created with Cinema 4D',
            imageUrl:
              'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/a5737306-9478-4ae4-b173-2482e58da178/+5600_SP23_Loop_15_Lingyi_Zhou+2.gif?content-type=image%2Fgif',
            software: 'Cinema 4D',
            imageRatio: 'square',
            highlight: false,
          },
          {
            id: 2,
            name: 'Action Scene',
            slug: 'slow-motion-animation',
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
        description:
          '3D design and engineering projects created with Fusion 360',
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
        imageRatio: 'landscape',
        projects: [
          {
            id: 1,
            name: 'Product Model',
            slug: 'project1',
            description: 'Shelf Bracket Modelling to Product Production',
            imageUrl:
              'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/9b7c6dd4-3676-4fc1-8834-21296877e85e/%E6%94%AF%E6%9E%B6%E6%B8%B2%E6%9F%93%E5%9B%BE4.png?content-type=image%2Fpng',
            software: 'Fusion 360',
            imageRatio: 'square',
            highlight: false,
          },
        ],
      },
    ],
  },
  {
    name: 'Game Design',
    slug: 'GameDesign',
    description: 'Game Design and Development Projects',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
    imageRatio: 'landscape',
    subCategories: [
      {
        name: 'Just Another Day',
        slug: 'JustAnotherDay',
        description: 'A narrative-driven game about daily life choices',
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
        imageRatio: 'landscape',
        projects: [],
      },
      {
        name: 'No Job Too Big',
        slug: 'NoJobTooBig',
        description: 'A puzzle-platformer game about overcoming challenges',
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
        imageRatio: 'landscape',
        projects: [],
      },
    ],
  },
  {
    name: '2D Design',
    slug: '2DDesign',
    description: '2D Design and Illustration Projects',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
    imageRatio: 'landscape',
    subCategories: [
      {
        name: 'Catalogue Design',
        slug: 'Catalogue',
        description: 'Explore my catalogue and publication design projects',
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
        imageRatio: 'landscape',
        projects: [],
      },
      {
        name: 'Creative Coding',
        slug: 'CreativeCoding',
        description: 'Explore my creative coding and generative art projects',
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
        imageRatio: 'landscape',
        projects: [],
      },
    ],
  },
  {
    name: 'Latest',
    slug: 'latest',
    description: 'Latest Projects Updates',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
    imageRatio: 'landscape',
    subCategories: [
      {
        name: 'Latest',
        slug: 'latest',
        description: 'Latest Projects',
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590811603300-7CGFL48UXIG9EZ9P52EC/Bear+Image+6.png?format=1500w',
        imageRatio: 'landscape',
        projects: [
          {
            id: 1,
            name: 'Product Model',
            slug: 'project1',
            description: 'Shelf Bracket Modelling to Product Production',
            imageUrl:
              'https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/9b7c6dd4-3676-4fc1-8834-21296877e85e/%E6%94%AF%E6%9E%B6%E6%B8%B2%E6%9F%93%E5%9B%BE4.png?content-type=image%2Fpng',
            software: 'Fusion 360',
            imageRatio: 'square',
            highlight: false,
          },
        ],
      },
    ],
  },
];
