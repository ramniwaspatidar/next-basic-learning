"use client";

import Script from "next/script";
export default function GetGeoLocation() {
  return (
    <div>
      <h1> get user location</h1>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("on load location");
        }}
      ></Script>
    </div>
  );
}
