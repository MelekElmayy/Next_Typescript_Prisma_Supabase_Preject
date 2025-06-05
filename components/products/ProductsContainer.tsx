import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({search});
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      {/** Header */}
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>

          <div className="flex gap-x-4">
            <Button
              asChild
              variant={layout === "grid" ? "default" : "ghost"}
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>

            <Button
              asChild
              variant={layout === "list" ? "default" : "ghost"}
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuLayoutList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>

      {/** Products */}
      <div className="mt-8">
        {totalProducts === 0 ? (
          <h5>Sorry, no products matched your search...</h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}

export default ProductsContainer;