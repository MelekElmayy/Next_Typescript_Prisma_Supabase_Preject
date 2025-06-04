import db from "@/utils/db";



export const fetchFeaturedProducts = async () => {
  try {
    const products = await db.product.findMany({
      where: {
        featured: true,
      },
    });
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};



export const fetchAllProducts = () => {
  return db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
