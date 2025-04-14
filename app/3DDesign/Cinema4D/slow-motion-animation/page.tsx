import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Action Scene</h1>
      <p className="text-gray-300">
        A dramatic slow-motion scene featuring a girl skillfully dodging a
        bullet.
      </p>
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          src="https://images.squarespace-cdn.com/content/5df7337598a1771a4a73ef26/5fb32f43-fb18-4d4b-b882-3f0309a8cf87/Project+View.jpg?content-type=image%2Fjpeg"
          alt="Action Scene"
          width={1920}
          height={1080}
          className="object-contain"
        />
      </div>
    </div>
  );
}
