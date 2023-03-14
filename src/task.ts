import { Category, getCategories } from './mockedApi';

export interface CategoryListElement {
  name: string;
  id: number;
  image: string;
  order: number;
  children: CategoryListElement[];
  showOnHome: boolean;
}

const getOrderByTitle = (
  category: Category,
  toShowOnHome?: number[]
): number => {
  if (category.Title && category.Title.includes('#')) {
    if (toShowOnHome) {
      toShowOnHome.push(category.id);
    }

    return parseInt(category.Title.split('#')[0]);
  }

  return parseInt(category.Title);
};

const getCategoryOrder = (
  category: Category,
  toShowOnHome?: number[]
): number => {
  let order = getOrderByTitle(category, toShowOnHome);

  if (isNaN(order)) {
    order = category.id;
  }

  return order;
};

const getCategoryListElement = (
  category: Category,
  children: CategoryListElement[],
  toShowOnHome?: number[]
) => {
  return {
    id: category.id,
    image: category.MetaTagDescription,
    name: category.name,
    order: getCategoryOrder(category, toShowOnHome),
    children,
    showOnHome: false,
  };
};

const sortCategoryByOrder = (
  category_a: CategoryListElement,
  category_b: CategoryListElement
) => category_a.order - category_b.order;

const processCategory = (
  category: Category,
  toShowOnHome?: number[]
): CategoryListElement => {
  const children = category.children?.map((child) => processCategory(child));
  const sortedChildren = children?.sort(sortCategoryByOrder) ?? [];

  return getCategoryListElement(category, sortedChildren, toShowOnHome);
};

export const categoryTree = async (): Promise<CategoryListElement[]> => {
  const res = await getCategories();

  if (!res.data) {
    return [];
  }

  const toShowOnHome: number[] = [];

  const result = res.data.map((category) =>
    processCategory(category, toShowOnHome)
  );
  result.sort(sortCategoryByOrder);

  if (result.length <= 5) {
    result.forEach((a) => (a.showOnHome = true));
  } else if (toShowOnHome.length > 0) {
    result.forEach((x) => (x.showOnHome = toShowOnHome.includes(x.id)));
  } else {
    result.forEach((x, index) => (x.showOnHome = index < 3));
  }

  return result;
};
