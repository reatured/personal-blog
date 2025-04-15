import { Categories, Category, SubCategory, Project } from './project';

export function findCategory(slug: string): Category | undefined {
  return Categories.find((category) => category.slug === slug);
}

export function findSubCategory(
  categorySlug: string,
  subCategorySlug: string
): {
  category: Category;
  subCategory: SubCategory;
} | undefined {
  const category = findCategory(categorySlug);
  
  if (!category) return undefined;
  
  const subCategory = category.subCategories.find(
    (sub) => sub.slug === subCategorySlug
  );
  
  if (!subCategory) return undefined;
  
  return { category, subCategory };
}

export function findProject(
  categorySlug: string,
  subCategorySlug: string,
  projectSlug: string
): {
  category: Category;
  subCategory: SubCategory;
  project: Project;
} | undefined {
  const result = findSubCategory(categorySlug, subCategorySlug);
  
  if (!result) return undefined;
  
  const project = result.subCategory.projects.find(
    (proj) => proj.slug === projectSlug
  );
  
  if (!project) return undefined;
  
  return { ...result, project };
}

export function getAllCategories(): Category[] {
  return Categories;
}

export function getAllSubCategories(): {
  category: Category;
  subCategory: SubCategory;
}[] {
  const results: { category: Category; subCategory: SubCategory }[] = [];
  
  Categories.forEach((category) => {
    category.subCategories.forEach((subCategory) => {
      results.push({ category, subCategory });
    });
  });
  
  return results;
}

export function getAllProjects(): {
  category: Category;
  subCategory: SubCategory;
  project: Project;
}[] {
  const results: { category: Category; subCategory: SubCategory; project: Project }[] = [];
  
  Categories.forEach((category) => {
    category.subCategories.forEach((subCategory) => {
      subCategory.projects.forEach((project) => {
        results.push({ category, subCategory, project });
      });
    });
  });
  
  return results;
} 