
import Link from 'next/link';

export default function Start() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to LightCode!</h1>
      <p className="text-lg mb-8">Your one-stop solution for all your editing needs.</p>
      <Link href="/image-editing">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Get Started with Image Editing
        </button>
      </Link>
      <Link href="/video-editing">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
          Explore Video Editing Services
        </button>
      </Link>
    </div>
  );
}