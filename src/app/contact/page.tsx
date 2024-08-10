"use client";

import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  return (
    <div className="md:mx-[35%] items-center justify-center w-full md:w-96">
      <h1 className="text-3xl text-center text-purple-400 p-5">Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        ipsam, modi eaque blanditiis neque accusantium, a fuga animi vero
        architecto asperiores reprehenderit consequuntur! Delectus, nulla
        repudiandae nemo voluptates ullam id quo cum modi a minus, maiores
        nesciunt corrupti similique earum ab soluta.
      </p>
      <button
        className="border-2 border-purple-400 px-3 py-2 my-5 rounded-lg hover:bg-slate-800"
        type="button"
        onClick={() => router.push("/services/contactform")}
      >
        Contact Form
      </button>
    </div>
  );
}
