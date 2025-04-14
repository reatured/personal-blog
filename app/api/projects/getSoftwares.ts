// provide two function, getSoftware and getProject
// the database in the lib/Projects.ts
import { Softwares } from '#/lib/Projects';

//get all softwares data from the Project database
export async function getSoftwares({ parent }: { parent?: string } = {}) {
  if (parent) {
    return Softwares.find((software) => software.slug === parent);
  }

  return Softwares;
}

//get a software data from the Project database by slug
export async function getSoftwareBySlug(slug: string) {
  return Softwares.find((software) => software.slug === slug);
}
