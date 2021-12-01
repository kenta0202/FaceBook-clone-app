/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/client";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../../firebase";
import firebase from "firebase";

export const InputBox = () => {
  const [session] = useSession();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const filepickerRef = useRef<HTMLInputElement | null>(null);
  const [imageToPost, setImageToPost] = useState<string | ArrayBuffer>(null);

  const sendPost = (e: FormEvent<HTMLFormElement>) => {
    // prevent form reload the page
    e.preventDefault();
    if (!inputRef.current.value) return;

    void db
      .collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        console.log(typeof imageToPost);
        if (imageToPost) {
          console.log(doc.id);
          const uploadTask = firebase
            .storage()
            .ref()
            .child(`posts/${doc.id}`)
            .putString(imageToPost as string, "data_url");
          console.log(uploadTask);
          removeImage();

          uploadTask.on(
            "state_change",
            (snapshot) => {
              console.log("snapshot", snapshot);
            },
            (error) => {
              console.error(error);
            },
            () => {
              //When the upload completes
              void storage
                .ref(`posts/${doc.id}`)
                .getDownloadURL()
                .then((url) => {
                  void db
                    .collection("posts")
                    .doc(doc.id)
                    .set({ postImage: url }, { merge: true });
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };
  const addImageToPost = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      setImageToPost(readerEvent.target.result as React.SetStateAction<string>);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };
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
          <form className="flex flex-1" onSubmit={sendPost}>
            <input
              className="flex-grow px-5 h-12 bg-gray-100 rounded-full focus:outline-none"
              type="text"
              placeholder={`What's on your mind ${session.user.name}？`}
              ref={inputRef}
            />
            <button hidden type="submit">
              Submit
            </button>
          </form>
          {imageToPost && (
            <>
              <div
                onClick={removeImage}
                className="flex flex-col filter hover:brightness-110 duration-150 transform hover:scale-105 cursor-pointer tansition"
              >
                <img
                  className="object-contain h-8"
                  src={imageToPost as string}
                  alt=""
                />
                <p className="text-xs text-center text-red-500">Remove</p>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-evenly p-3 border-t">
          <div className="inputIcon">
            <VideoCameraIcon className="h-7 text-red-500" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
          </div>

          <div
            className="inputIcon"
            onClick={() => filepickerRef.current.click()}
          >
            <CameraIcon className="h-7 text-green-400" />
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
            <input
              ref={filepickerRef}
              onChange={addImageToPost}
              type="file"
              hidden
            />
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
