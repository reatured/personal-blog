import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Procedural Modelling</h1>
      <p className="text-gray-300">
        Procedural modelling using graph nodes in Blender
      </p>
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/7ab94758-9d5a-4a27-ba56-ec09d5d1a733/rendered1.png?format=750w"
          alt="Procedural Modelling"
          width={750}
          height={750}
          className="object-contain"
        />
      </div>
    </div>
  );
}
