import posts from "./../src/routes/blog/_posts";

module.exports = (req, res) => {
  const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <url><loc>https://xn--e28h.my.id/</loc><priority>0.85</priority></url>
        <url><loc>https://xn--e28h.my.id/about</loc><priority>0.85</priority></url>
        <url><loc>https://xn--e28h.my.id/blog</loc><priority>0.85</priority></url>
        <url><loc>https://xn--e28h.my.id/link</loc><priority>0.85</priority></url>
    ${posts
      .map(function (post) {
        return `<url>
                 <loc>${"https://xn--e28h.my.id/blog/" + post.slug}</loc>
                 <priority>0.69</priority>
            </url>`;
      })
      .join("")}
    </urlset>
`;
  const xml = render(posts);
  res.setHeader("Content-Type", "application/xml");
  res.send(xml);
  // res.setHeader('Content-Type', 'application/xml')
};
