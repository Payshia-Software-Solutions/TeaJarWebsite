import React from 'react'
import Commentcard from "@/components/CommentCard/Commentcard";

function Happycustormer() {
  return (
    <section className="bg-babout">
      <div className="font-italiana text-white text-center  ">
        <h2 className="font-italiana text-white  text-[40px] font-normal">
          Happy Custormer
        </h2>
        <p className="leading-8 font-julius text-[18px]">
          Hear what our customers have to say about us
        </p>
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

export default Happycustormer
