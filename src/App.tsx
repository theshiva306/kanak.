"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = Math.min(noCount * 12 + 20, 220);
      

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Hawwwww",
      "itnaa rudeee?",
      "apne bande ko aise bolte hai?",
      "yeh hai manners?",
      "kanakkkkkk😭😭",
      "PLEASE babyyy",
      "sorrrryyyy",
      "Gussa mt ho aap?",
      "sorrryyy naaa😭😭",
      "abhii tk sadd ho?",
      "kl aaungaa maii",
      "kaan pakad kr sorry bolu?",
      "pleaseee kanak😭😭",
      "Am i not good?",
      "bbayyy😭😭",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
  <div className="flex min-h-screen flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
    {yesPressed ? (
      <>
        <img
          className="w-50 h-auto mx-auto rounded-2xl shadow-lg"
          src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
        />
        <div className="my-4 text-2xl sm:text-4xl font-bold drop-shadow-md">
          awww soo sweett.😋..can i eat you?
        </div>
      </>
    ) : (
      <>
        <img
          className="h-[200px] rounded-2xl shadow-lg mx-auto"
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGI2cG9jaDB6ZXQzeW5yMXJxcW1kbGxhOHFvZXRneHI2cGJ6am0wcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jr5pq4goFbdzB7x1mo/giphy.gif"
        />
        <h1 className="my-4 text-2xl sm:text-4xl font-bold drop-shadow-md">
          Do u love me kanak? 🙄
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 transition-all duration-300"
            style={{ fontSize: yesButtonSize }}
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>
          <button
            onClick={handleNoClick}
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 transition-all duration-300"
          >
            {noCount === 0 ? "No" : getNoButtonText()}
          </button>
        </div>
      </>
    )}
  </div>
);
}
