import React from "react";

export function AuthorPage({ data }) {
  const { author, stories } = data;
  return (
    <div>
      <p>Author name is {author.name}, they have written the following stories:</p>
      <ul>
        {stories.map(story => (
          <li><a href={story.url}>{story.headline}</a></li>
        ))}
      </ul>
    </div>
  );
}