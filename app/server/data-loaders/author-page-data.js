/* eslint-disable no-unused-vars */
import { Author } from "@quintype/framework/server/api-client";
import { storyToCacheKey } from "@quintype/framework/server/caching";

export function loadAuthorPageData(client, authorId, config)  {
    const params = {
      "item-type": "story",
      limit: 10,
      offset: 0
    };
  
    const authorStories = Author.getAuthorCollection(client, authorId, params).then(({ items }) =>
      items.map(({ story }) => story)
    );
  
    const author = Author.getAuthor(client, authorId);
  
    return Promise.all([author, authorStories])
      .then(([author, stories]) => {
        return {
          author: author.asJson(),
          stories,
          cacheKeys: stories.map(story => storyToCacheKey(config["publisher-id"], story))
        };
      })
      .catch(error => {
        console.log("in error", error);
      });
  }