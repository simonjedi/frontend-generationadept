import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Image
        src="/your-image-path.jpg" // Replace with your image path
        alt="Centered Image"
        width={300} // Set the desired width
        height={0} // Height is ignored when layout is intrinsic
        layout="intrinsic" // Ensures the aspect ratio is maintained
        priority
      />
    </div>
  );
}
