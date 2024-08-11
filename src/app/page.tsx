import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] flex justify-center items-center">
      <h2 className="text-6xl text-center font-bold bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent">Component Dump 🗑️</h2>
    </div>
  );
}
