import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Page() {
  const { selectedMenu } = useContext(AppContext);
  return (
    <div className="flex justify-center items-center h-64 font-bold text-2xl">
      {selectedMenu}
    </div>
  );
}
