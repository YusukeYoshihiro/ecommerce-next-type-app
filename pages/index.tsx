import type { InferGetStaticPropsType } from 'next';
import { getAllProducts } from '@framework/product';
import { getConfig } from 'framework/shopify/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero, Marquee } from '@components/ui';


export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Grid>
        {products.slice(0, 3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
        )}
      </Grid>
      <Hero
        headline='Title Store'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum reiciendis debitis, quam recusandae pariatur sunt et iure, necessitatibus sapiente laboriosam provident error fuga illum dolorum facere expedita cumque porro.
        '
      />
      <Marquee>
        {products.slice(0, 3).map(product =>
          <ProductCard
            variant='slim'
            key={product.id}
            product={product}
          />
        )}
      </Marquee>
      <Grid layout='B'>
        {products.slice(0, 3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
        )}
      </Grid>
      <Marquee variant='secondary'>
        {products.slice(0, 3).map(product =>
          <ProductCard
            variant='slim'
            key={product.id}
            product={product}
          />
        )}
      </Marquee>
    </>
  )
}

Home.Layout = Layout;