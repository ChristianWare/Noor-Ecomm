import Link from "next/link";
import { ProductProps } from "../../type";

interface Props {
  product: ProductProps;
}

const Product = ({ product }: Props) => {
  return (
    <div>
      <div>
        <div>
          <Link href='/'>Hey</Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
