import { notFound } from 'next/navigation';
import { factoryTourData } from '@/lib/factoryTourData';
import FactoryTourLayout from '@/components/FactoryTourLayout';

export async function generateStaticParams() {
  return factoryTourData.map((item) => ({
    id: item.id,
  }));
}

export default function FactoryTourPage({ params }: { params: { id: string } }) {
  const data = factoryTourData.find((item) => item.id === params.id);

  if (!data) {
    notFound();
  }

  return (
    <FactoryTourLayout
      pointNumber={data.pointNumber}
      titleEn={data.titleEn}
      titleJa={data.titleJa}
      content={data.content}
    />
  );
}
