import React from "react";

function ProfilePage() {
  return (
    <>
      <div className="bagHeading mt-[4.5rem] flex justify-between items-end px-6 py-5 drop-shadow-2xl border-b-2 border-color-secondary/5 md:mb-5">
        <h1 className="text-2xl text-color-secondary tracking-normal font-medium xl:px-10">
          Account
        </h1>
        <p className="text-color-secondary tracking-normal font-medium underline opacity-60 hover:opacity-80">
          logout
        </p>
      </div>
    </>
  );
}

export default ProfilePage;
