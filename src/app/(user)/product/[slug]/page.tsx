import Container from "@/components/Container";
import { client } from "@/lib/SanityClient";
import { groq } from "next-sanity";

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'product] {
        slug
    }`;

  const slugs: any = await client.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug?.slug?.current);
  return slugRoutes?.map((slug: string) => ({
    slug,
  }));
};

const SinglePage = ({ params }: Props) => {
  return (
    <div>
      <Container>
        <h1>you!!!!!</h1>
      </Container>
    </div>
  );
};
export default SinglePage;
