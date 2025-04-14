import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Generative Art</h1>
      <p className="text-gray-300">
        Procedural generative art created with Cinema 4D
      </p>
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/a5737306-9478-4ae4-b173-2482e58da178/+5600_SP23_Loop_15_Lingyi_Zhou+2.gif?content-type=image%2Fgif"
          alt="Generative Art"
          width={1920}
          height={1080}
          className="object-contain"
        />
      </div>
    </div>
  );
}
