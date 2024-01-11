import reliabilityImg from '@/public/reliability.jpg';
import Hero from '@/components/hero';
export default function ReliabiltyPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt='welding'
      title='Super hight reliability'
    />
  );
}