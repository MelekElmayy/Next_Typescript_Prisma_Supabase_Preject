import { formatCurrency } from '@/utils/format';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@prisma/client';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className='mt-12 space-y-6'>
      {products.map((product) => {
        const { name, price, image, company } = product;
        const dollarsAmount = formatCurrency(price);
        const productId = product.id;
        return (
          <article key={productId} className='group relative'>
            <Link href={`/products/${productId}`}>
              <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                <CardContent className='p-6'>
                  <div className='flex flex-col sm:flex-row gap-6'>
                    {/* Image on the left */}
                    <div className='relative h-48 w-full sm:w-48 flex-shrink-0 rounded-md overflow-hidden'>
                      <Image
                        src={image}
                        alt={name}
                        fill
                        sizes='(max-width:640px) 100vw, 200px'
                        priority
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>

                    {/* Content on the right */}
                    <div className='flex-1 flex flex-col justify-between'>
                      <div>
                        <h2 className='text-xl font-semibold capitalize'>{name}</h2>
                        <h4 className='text-muted-foreground mt-1'>{company}</h4>
                      </div>
                      <div className='mt-4 sm:mt-0 flex justify-between items-end'>
                        <p className='text-lg font-medium'>{dollarsAmount}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className='absolute top-4 right-4 z-10'>
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsList;