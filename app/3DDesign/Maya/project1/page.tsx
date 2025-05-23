import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Glass Clip</h1>
      <p className="text-gray-300">
        Product design with for home decoration hardware
      </p>
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/1630450019654-9M9R9FB3ZX2HT422LH0W/Glass+Clip2.png?content-type=image%2Fpng"
          alt="Glass Clip"
          width={1920}
          height={1080}
          className="object-contain"
        />
      </div>
    </div>
  );
}
