export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; slug: string; items: Item[] }[] = [
  {
    name: '3D Design',
    slug: '3DDesign',
    items: [
      // {
      //   name: '3D Design',
      //   slug: '3DDesign',
      //   description: 'Explore my 3D design projects and creations',
      // },
      {
        name: 'Blender',
        slug: '3DDesign/Blender',
        description: '3D modeling and animation projects created with Blender',
      },
      {
        name: 'Maya',
        slug: '3DDesign/Maya',
        description: '3D projects created with Autodesk Maya',
      },
      {
        name: 'Houdini',
        slug: '3DDesign/Houdini',
        description: 'Procedural 3D and VFX projects created with Houdini',
      },
      {
        name: 'Cinema 4D',
        slug: '3DDesign/Cinema4D',
        description: 'Motion graphics and 3D projects created with Cinema 4D',
      },
    ],
  },
  {
    name: 'Game Design',
    slug: 'GameDesign',
    items: [
      // {
      //   name: 'Game Design',
      //   slug: 'GameDesign',
      //   description: 'Explore my game design projects and prototypes',
      // },
      {
        name: 'Just Another Day',
        slug: 'GameDesign/JustAnotherDay',
        description: 'A narrative-driven game about daily life choices',
      },
      {
        name: 'No Job Too Big',
        slug: 'GameDesign/NoJobTooBig',
        description: 'A puzzle-platformer game about overcoming challenges',
      },
    ],
  },
  {
    name: '2D Design',
    slug: '2DDesign',
    items: [
      // {
      //   name: '2D Design',
      //   slug: '2DDesign',
      //   description: 'Explore my 2D design and illustration projects',
      // },
      {
        name: 'Catalogue Design',
        slug: '2DDesign/Catalogue',
        description: 'Explore my catalogue and publication design projects',
      },
      {
        name: 'Creative Coding',
        slug: '2DDesign/CreativeCoding',
        description: 'Explore my creative coding and generative art projects',
      },
    ],
  },
  {
    name: 'Application Development',
    slug: 'AppDev',
    items: [
      // {
      //   name: 'Application Development',
      //   slug: 'AppDev',
      //   description: 'Explore my application development projects',
      // },
    ],
  },
  // {
  //   name: 'Layouts',
  //   slug: 'Layouts',
  //   items: [
  //     {
  //       name: '3D Design',
  //       slug: 'layouts',
  //       description: 'Create UI that is shared across routes',
  //     },
  //     {
  //       name: 'Grouped Layouts',
  //       slug: 'route-groups',
  //       description: 'Organize routes without affecting URL paths',
  //     },
  //     {
  //       name: 'Parallel Routes',
  //       slug: 'parallel-routes',
  //       description: 'Render multiple pages in the same layout',
  //     },
  //   ],
  // },
  // {
  //   name: 'File Conventions',
  //   slug: 'FileConventions',
  //   items: [
  //     {
  //       name: 'Loading',
  //       slug: 'loading',
  //       description:
  //         'Create meaningful Loading UI for specific parts of an app',
  //     },
  //     {
  //       name: 'Error',
  //       slug: 'error-handling',
  //       description: 'Create Error UI for specific parts of an app',
  //     },
  //     {
  //       name: 'Not Found',
  //       slug: 'not-found',
  //       description: 'Create Not Found UI for specific parts of an app',
  //     },
  //   ],
  // },
  // {
  //   name: 'Data Fetching',
  //   slug: 'DataFetching',
  //   items: [
  //     {
  //       name: 'Streaming with Suspense',
  //       slug: 'streaming',
  //       description:
  //         'Streaming data fetching from the server with React Suspense',
  //     },
  //     {
  //       name: 'Static Data',
  //       slug: 'ssg',
  //       description: 'Generate static pages',
  //     },
  //     {
  //       name: 'Dynamic Data',
  //       slug: 'ssr',
  //       description: 'Server-render pages',
  //     },
  //     {
  //       name: 'Incremental Static Regeneration',
  //       slug: 'isr',
  //       description: 'Get the best of both worlds between static & dynamic',
  //     },
  //   ],
  // },
  // {
  //   name: 'Components',
  //   slug: 'Components',
  //   items: [
  //     {
  //       name: 'Client Context',
  //       slug: 'context',
  //       description:
  //         'Pass context between Client Components that cross Server/Client Component boundary',
  //     },
  //   ],
  // },
  // {
  //   name: 'Misc',
  //   slug: 'Misc',
  //   items: [
  //     {
  //       name: 'Patterns',
  //       slug: 'patterns',
  //       description: 'A collection of useful App Router patterns',
  //     },
  //     {
  //       name: 'Client Component Hooks',
  //       slug: 'hooks',
  //       description: 'Preview the routing hooks available in Client Components',
  //     },
  //     {
  //       name: 'CSS and CSS-in-JS',
  //       slug: 'styling',
  //       description: 'Preview the supported styling solutions',
  //     },
  //   ],
  // },
];
