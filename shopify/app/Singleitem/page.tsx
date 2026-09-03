import React from "react";
import Leftside from "@/components/Singleitem/Leftside";
import RightSide from "@/components/Singleitem/RightSide";
import Rightsidebar from "@/components/Rightsidebar";

function page() {
  return (
    <section className="bg-white mt-5">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 my-12 md:my-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Leftside />
        </div>
        <div>
          <RightSide />
        </div>
      </div>
    </section>
  );
}

export default page;
