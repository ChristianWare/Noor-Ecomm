import Banner from "@/components/Banner";
import NewArrival from "@/components/NewArrival";
import { client } from "@/lib/SanityClient";
import { groq } from "next-sanity";

const newArrivalQuery = groq`*[_type == 'product' && position == 'New Arrivals'] {
  ...
} | order(_createdAt asc)`;

const HomePage = async () => {
  const newArrivalProducts = await client.fetch(newArrivalQuery);

  return (
    <div>
      <Banner />
      <NewArrival products={newArrivalProducts} />
      
    </div>
  );
};
export default HomePage;
