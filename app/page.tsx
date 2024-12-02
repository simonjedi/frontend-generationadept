import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Image
        src="/generation-adept-intelligence-for-humans.png"
        alt="Generation Adept Intelligence for Humans"
        width={400}
        height={0}
        layout="intrinsic"
      />
    </div>
  );
}
