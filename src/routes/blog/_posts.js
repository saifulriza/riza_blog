import _ from "lodash";
import all from "./posts/*.md";

export const posts = _.chain(all) // begin a chain
  // .map(transform) // transform the shape of each post
  .orderBy("date", "desc") // sort by date descending
  .value(); // convert chain back to array

export const pages = _.chunk(posts, 5);

// // function for reshaping each post
// function transform({slug, html, metadata}) {
//   // the permalink is the filename with the '.md' ending removed
//   const filename = slug

//   // convert date string into a proper `Date`
//   const date = new Date(metadata.date)

//   // return the new shape
//   return {...metadata, filename, html, permalink, date}
// }

// provide a way to find a post by permalink
export function findPost(slug) {
  // use lodash to find by field name:
  return _.find(posts, { slug });
}
