import Card from "@/components/Card";
import Newsletter from "@/components/Newsletter";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Slider />
      <Card />
      <Offer />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
