import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">
        Chess Pieces Used in Virtual Reality
      </h1>
      <p className="text-gray-300">Implementation of chess pieces in Unity</p>
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1578119718134-7RJ2ZYJRJLY8FE7EIC7O/Chess+Scene+Finished+View2+20-01-04.png?format=2500w"
          alt="Chess Pieces Used in Virtual Reality"
          width={2500}
          height={2500}
          className="object-contain"
        />
      </div>
    </div>
  );
}
