// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className=" bg-slate-500 text-white text-3xl p-4 text-center">
      User: {userid}
    </div>
  );
}

export default User;
