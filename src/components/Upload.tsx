"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

const Upload = () => {
  const [resource, setResource] = useState();
  return (
    <div>
      {/* "ybcprqbt6x32lbizmj8k" */}
      <div className="h-[200px]  w-[500px] relative">
        <Image
          src="http://res.cloudinary.com/dzyirbtnn/image/upload/v1722505961/fydb6bkcqxhmuovyk1bj.png"
          objectFit="cover"
          layout="fill"
          alt="Picture of the author"
        />
      </div>
      <CldUploadWidget
        uploadPreset="ookym76f"
        onSuccess={(result, { widget }) => {
          console.log(result);
          setResource(result); // { public_id, secure_url, etc }
          widget.close();
        }}
      >
        {({ open }) => {
          function handleOnClick() {
            setResource(null);
            open();
          }
          return <button onClick={handleOnClick}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </div>
  );
};

export default Upload;
