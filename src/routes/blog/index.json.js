import { posts } from "./_posts.js";
const contents = JSON.stringify(
  posts.map((post) => ({
    slug: post.slug,
  }))
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  res.end(contents);
}
