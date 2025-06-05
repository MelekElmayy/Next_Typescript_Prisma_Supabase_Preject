import db from "@/utils/db";
import { redirect } from "next/navigation";


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


export const fetchAllProducts = ({search= ''}: {search:string}) => {
  return db.product.findMany({
    where: {
        OR:[
          {name: {contains:search, mode: 'insensitive'}},
          {company: {contains:search, mode: 'insensitive'}}
        ]
    }, 
    orderBy: {
      createdAt: "desc",
    },
  });
};


export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    }
  });


  return product; // Make sure to return the product when found
};


