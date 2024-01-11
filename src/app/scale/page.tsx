import sclaleImg from '@/public/scale.jpg';
import Hero from '@/components/hero';
export default function ScalePage() {
  return (
    <Hero
      imgData={sclaleImg}
      imgAlt='steel factory'
      title='Scale your app to infinity'
    />
  );
}