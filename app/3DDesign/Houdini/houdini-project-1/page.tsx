import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Fluid Simulation</h1>
      <p className="text-gray-300">Fluid simulation animation</p>
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/086317e7-514d-4abe-b8ce-277a0d48dd33/QQ%E6%88%AA%E5%9B%BE20220104202214.png?content-type=image%2Fpng"
          alt="Fluid Simulation"
          width={1920}
          height={1080}
          className="object-contain"
        />
      </div>
    </div>
  );
}
