import React from "react";
const Contacts = ({ user }) => {
  // console.log(user)
  const { user_name, user_photo_url } = user;
  // console.log(user)
  return (
    <div>
      <div className="flex items-center hover:bg-[#E4E6E9] cursor-pointer">
        <div
          className="w-11 h-11 bg-gray-300 m-3 rounded-full "
          style={{
            background: `url(${user_photo_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex items-center justify-center">
          <p>{user_name}</p>
          <p className="ml-6 text-[#23a4fa] font-bold ">Follow</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
