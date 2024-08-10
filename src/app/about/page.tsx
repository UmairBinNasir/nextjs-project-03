import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-between p-2">
      <h1 className="text-3xl p-2 text-purple-500 font-extrabold stroke-slate-400">
        About Us
      </h1>
        <p className="w-fit">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          deserunt eveniet fuga saepe? Maiores doloremque odit repudiandae!
          Quaerat explicabo eveniet fugit! Quas aperiam modi ut velit nam
          debitis accusamus possimus fugit quasi. Dolorem eligendi hic
          laudantium magnam quod? Unde doloremque omnis nisi aliquam obcaecati
          magni laborum at eveniet sunt beatae numquam totam, natus quo
          consectetur veritatis molestiae id deleniti veniam minus iste
          distinctio quam animi?
        </p>
        <img className="pt-5 rounded-full" src="/bg.avif" alt="" />
    </div>
  );
}

export default page;
