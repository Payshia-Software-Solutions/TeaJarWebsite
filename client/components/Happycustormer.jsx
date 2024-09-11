import React from "react";
import Commentcard from "@/components/CommentCard/Commentcard";
import { Italiana, Julius_Sans_One } from "@next/font/google";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});
const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});

function Happycustormer() {
  return (
    <section className="bg-babout">
      <div className=" text-white text-center  ">
        <div className={italiana.className}>
          <h2 className=" text-white  text-[40px] font-normal">
            Happy Custormer
          </h2>
        </div>
        <div className={juliusSansOne.className}>
          <p className="leading-8  text-[18px]">
            Hear what our customers have to say about us
          </p>
        </div>
      </div>
      <div className="p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Commentcard></Commentcard>
          <Commentcard></Commentcard>
          <Commentcard></Commentcard>
        </div>
      </div>
    </section>
  );
}

export default Happycustormer;
