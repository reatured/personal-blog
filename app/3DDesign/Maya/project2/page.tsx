import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Canon Animation</h1>
      <p className="text-gray-300">Idling animation of a canon</p>
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/1909711d-87a8-4ae4-91f7-2d5a9baeef8b/Canon+Animation.gif?content-type=image%2Fgif"
          alt="Canon Animation"
          width={1920}
          height={1080}
          className="object-contain"
        />
      </div>
    </div>
  );
}
