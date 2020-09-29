import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
  return {
    title: post.title,
    description: post.description,
    slug: post.slug,
    excerpt: post.excerpt,
    printDate: post.printDate,
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
