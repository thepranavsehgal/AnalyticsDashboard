import React from "react";
import { Link } from "react-router-dom";

import * as Icon from "react-feather";

export default function BackButton() {
  return (
    <>
      <div className="fixed bottom-3 end-3">
        <Link
          to="/"
          className="back-button h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"
        >
          <Icon.ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
