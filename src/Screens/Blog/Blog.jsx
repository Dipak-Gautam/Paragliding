import React from "react";
import { CgSmileSad } from "react-icons/cg";

const Blog = () => {
  return (
    <div className="p-3 md:mx-20 h-[45vh] flex items-center justify-center">
      <div className="flex">
        <div className="text-red-500 text-9xl">
          <CgSmileSad />
        </div>
        <div className="my-auto mx-3 text-2xl  font-bold">
          Sorry there are no Blogs to show
        </div>
      </div>
    </div>
  );
};

export default Blog;
