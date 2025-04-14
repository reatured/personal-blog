import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Product Model</h1>
      <p className="text-gray-300">
        Shelf Bracket Modelling to Product Production
      </p>
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/9b7c6dd4-3676-4fc1-8834-21296877e85e/%E6%94%AF%E6%9E%B6%E6%B8%B2%E6%9F%93%E5%9B%BE4.png?content-type=image%2Fpng"
          alt="Product Model"
          width={1920}
          height={1080}
          className="object-contain"
        />
      </div>
    </div>
  );
}
