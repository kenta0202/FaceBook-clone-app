import React from "react";
import { StoryCard } from "./StoryCard";

const stories = [
  {
    name: "Sonny Saghaaaaaaaaaaaaaaaaaaaaaa",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "B",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "D",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "E",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "F",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];
export const Stories = () => {
  return (
    <div className="flex flex-row justify-center mx-auto space-x-3">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};
