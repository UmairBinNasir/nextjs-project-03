import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-between p-2">
      <h1 className="text-3xl p-2 text-purple-500 font-extrabold stroke-slate-400">
        Blogs
      </h1>
      <div className="flex w-11/12 space-y-7 flex-wrap">
        <div>
          <h1 className="text-2xl">Blog 01</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            esse voluptatibus optio vero officiis voluptatem fuga molestias sed
            molestiae, quod beatae, nam sapiente?
          </p>
        </div>
        <div>
          <h1 className="text-2xl">Blog 02</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            esse voluptatibus optio vero officiis voluptatem fuga molestias sed
            molestiae, quod beatae, nam sapiente?
          </p>
        </div>
        <div>
          <h1 className="text-2xl">Blog 03</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            esse voluptatibus optio vero officiis voluptatem fuga molestias sed
            molestiae, quod beatae, nam sapiente?
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
