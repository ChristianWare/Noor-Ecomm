"use client";

import Image from "next/image";
import { ProductProps } from "../../type";
import Price from "./Price";
import { urlFor } from "@/lib/SanityClient";
import { PortableText } from "@portabletext/react";
import { RichText } from "./RichText";

interface Props {
  product: ProductProps;
}

const ProductInfo = ({ product }: Props) => {
  const percentageOff =
    ((product?.rowprice - product?.price) / product?.rowprice) * 100;

  return (
    <div className='flex flex-col gap-5'>
      <h2 className='text-4xl font-semibold'>{product?.title}</h2>
      <Image
        src={urlFor(product?.image).url()}
        alt='product image'
        className='w-full h-full object-contain'
        width={500}
        height={500}
      />
      <div className='flex flex-col items-center gap-4'>
        <p className='text-lg font-normal text-gray-500 line-through'>
          <Price amount={product?.rowprice} />
        </p>

        <Price amount={product?.price} className='text-lg font-bold' />

        <p className='text-sm'>
          <Price
            className='bg-green-700 text-white px-2 rounded-md'
            amount={product?.rowprice - product?.price}
          />{" "}
          {percentageOff.toFixed(2)}% off
        </p>
        <p className='text-sm tracking-wide text-gray-600'>
          {product?.description}
        </p>
        <p className='text-sm text-gray-500'>Be the first to leave a review.</p>
        <button className='w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg rounded-md'>
          Add to Cart
        </button>

        <PortableText value={product?.body} components={RichText} />
      </div>
    </div>
  );
};
export default ProductInfo;
