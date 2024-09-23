import React from "react";
import Leftside from "@/components/Singleitem/Leftside";
import RightSide from "@/components/Singleitem/RightSide";
function page() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Leftside/></div>
          <div><RightSide/></div>
      </div>
    </section>
  );
}

export default page;
