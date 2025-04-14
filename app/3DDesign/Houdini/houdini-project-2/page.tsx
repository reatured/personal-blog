import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Donut</h1>
      <p className="text-gray-300">
        Procedural modelling, rendered with motion blur
      </p>
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/648a2ce7-1b35-4092-8906-b092872d9704/DonutRender..jpg?format=750w"
          alt="Donut"
          width={750}
          height={750}
          className="object-contain"
        />
      </div>
    </div>
  );
}
