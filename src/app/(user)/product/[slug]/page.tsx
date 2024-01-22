import Container from "@/components/Container";
import ProductInfo from "@/components/ProductInfo";
import { RichText } from "@/components/RichText";
import { client, urlFor } from "@/lib/SanityClient";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'product'] {
        slug
    }`;

  const slugs: any = await client.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug?.slug?.current);
  return slugRoutes?.map((slug: string) => ({
    slug,
  }));
};

const SinglePage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'product' && slug.current == $slug][0] {
  ...
}`;

  const product = await client.fetch(query, { slug });

  return (
    <div>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4'>
          <div className='h-full xl:col-span-2'>
            {/* <Image
              src={urlFor(product?.image).url()}
              alt='product image'
              className='w-full h-full object-contain'
              width={500}
              height={500}
            /> */}
          </div>
          <div>
            <ProductInfo product={product} />
          </div>
          <div>
            {/* <PortableText value={product?.body} components={RichText}/> */}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default SinglePage;
