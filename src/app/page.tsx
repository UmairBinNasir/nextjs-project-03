import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-3xl p-7 text-purple-500 font-extrabold stroke-slate-400">Home</h1>
      <p className="w-96 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas
        eos est, alias deserunt ipsum? Delectus labore natus facilis explicabo
        officiis dolore cum veritatis inventore rerum, ea et dolorem libero.
        Laboriosam architecto sint facilis at rerum.
      </p>
      <Link
        className="border-2 border-purple-500 px-3 py-2 rounded-md mt-5 hover:bg-purple-800"
        target="_blank"
        href="/login"
      >
        Login
      </Link>
    </main>
  );
}