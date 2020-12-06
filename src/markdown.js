import all from "../markdown/*.md";
import _ from "lodash";


///////////////////////////////////////////
// Data you want available every post
const global = {
  name: "Author Name",
};

///////////////////////////////////////////
export const posts = _.chain(all) // begin a chain
  .map(transform) // transform the shape of each post
  .orderBy("date", "desc") // sort by date descending
  .value(); // convert chain back to array

// function for reshaping each post
function transform({ filename, html, metadata }) {
  // the permalink is the filename with the '.md' ending removed
  const permalink = filename.replace(/\.md$/, "");

  // convert date string into a proper `Date`
  const date = new Date(metadata.date);

  // return the new shape
  return { ...metadata, filename, html, permalink, date, global };
}

// provide a way to find a post by permalink
export function findPost(permalink) {
  // use lodash to find by field name:
  const stuff =  _.find(posts, { permalink });
  return stuff
}
