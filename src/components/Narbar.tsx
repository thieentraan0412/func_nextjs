"use client";
import { Session } from "inspector";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import './css/navbar.css'
const Narbar = () => {
  const { data: session, status: sessionStatus } = useSession();
  const pathname = usePathname();
  return (
    <header>
      <div className="p-5">
        <div className="flex gap-4 pb-5">
          <div className="h-8 w-8 flex justify-center items-center">
            <img
              className="w-full h-8 inline-block"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-[14px] font-semibold">tran van thien</p>
            <p className="text-[10px] font-extralight">thientran@gmail.com</p>
          </div>
          <div className="h-8 w-8 float-right">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskwlbkm5Bn_dDE5y4YU1FotDakBIHpIZwKw&s"
              alt=""
            />
          </div>
        </div>

        <div className="searchBox flex justify-center items-center">
          <input
            className="searchInput"
            type="text"
            name=""
            placeholder="Search something"
          />
          <button className="searchButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 29 29"
              fill="none"
              className="ml-[9.5px] "
            >
              <g clip-path="url(#clip0_2_17)">
                <g filter="url(#filter0_d_2_17)">
                  <path
                    d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    shape-rendering="crispEdges"
                  ></path>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_2_17"
                  x="-0.418549"
                  y="3.70435"
                  width="29.7139"
                  height="29.7139"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_17"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_17"
                    result="shape"
                  ></feBlend>
                </filter>
                <clipPath id="clip0_2_17">
                  <rect
                    width="28.0702"
                    height="28.0702"
                    fill="white"
                    transform="translate(0.403503 0.526367)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Narbar;

// {pathname !== "/login" && pathname !== "/register" && (
//   <div>
//     <div className="">
//         <div className="flex justify-between">
//           <div className="">Home</div>
//           <ul className="flex gap-4">
//             <Link href={"/dashboard"}>
//               <li>Note</li>
//             </Link>

//           </ul>
//         </div>
//       </div>
//   </div>
//   )}
// {sessionStatus === "authenticated" ? (
//   <div
//     onClick={() => {
//       signOut();
//     }}
//   >
//     <li>LogOut</li>
//   </div>
// ) : (
//   <ul className="flex gap-4">
//     <Link href={"/login"}>
//       <li>Login</li>
//     </Link>
//     <Link href={"/register"}>
//       <li>Register</li>
//     </Link>
//   </ul>
// )}
