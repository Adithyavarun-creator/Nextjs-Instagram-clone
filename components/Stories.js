import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
    }));
    //console.log({ suggestions });
    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200
    border rounded-sm overflow-x-scroll scrollbar-thin 
    scrollbar-thumb-black"
    >
      {suggestions.map((profile) => (
        <Story
          key={profile.avatar}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
