/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/client";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db } from "../../firebase";
import firebase from "firebase";

export const InputBox = () => {
  const [session] = useSession();
  const [text, setText] = useState<string>("");

  const submitForm = (e) => {
    // prevent form reload the page
    e.preventDefault();
    if (text) {
      db.collection("posts").add({
        message: text,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setText("");
    }
  };
  // const addImageToPost = (e) => {

  // }
  return (
    <>
      <div className="p-2 mt-6 font-medium text-gray-500 bg-white rounded-2xl shadow-md">
        <div className="flex flex-row items-center p-4 space-x-4">
          <Image
            className="rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
            alt=""
          />
          <form className="flex flex-1" onSubmit={submitForm}>
            <input
              className="flex-grow px-5 h-12 bg-gray-100 rounded-full focus:outline-none"
              type="text"
              placeholder={`What's on your mind ${session.user.name}？`}
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
            <button hidden type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-evenly p-3 border-t">
          <div className="inputIcon">
            <VideoCameraIcon className="h-7 text-red-500" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
          </div>
          <div className="inputIcon">
            <CameraIcon className="h-7 text-green-400" />
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
            {/* <input onChange={()=>addImageToPost} type="file" hidden /> */}
          </div>
          <div className="inputIcon">
            <EmojiHappyIcon className="h-7 text-yellow-300" />
            <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
          </div>
        </div>
      </div>
    </>
  );
};
