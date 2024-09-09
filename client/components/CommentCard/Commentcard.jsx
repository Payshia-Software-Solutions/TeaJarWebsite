import React from "react";

function Commentcard() {
  return (
    <div className="container max-w-lg mx-auto bg-[#353D32] px-6 py-4 rounded-2xl">
      <p className="text-lg  mb-6  text-white leading-8 mt-8 text-start">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        lorem nulla. Donec consequat urna a tortor sagittis lobortis.
      </p>

      <div className="flex items-center mb-6">
        <img
          src="https://randomuser.me/api/portraits/men/97.jpg"
          alt="Avatar"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <p className="text-lg font-medium text-white">John Doe</p>
          <p className="text-gray-500">2 hours ago</p>
        </div>
      </div>
    </div>
  );
}

export default Commentcard;
