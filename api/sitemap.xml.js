module.exports = (req, res) => {
  const https = require("https");
  var url = "https://xn--e28h.my.id/blog.json";

  https
    .get(url, function (resp) {
      var body = "";

      resp.on("data", function (chunk) {
        body += chunk;
      });

      resp.on("end", function () {
        var posts = JSON.parse(body);
        const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map(function (post) {
        return `<url>
                 <loc>${"https://xn--e28h.my.id/blog/" + post.slug}</loc>
            </url>`;
      })
      .join("")}
    </urlset>
`;
        const xml = render(posts);
        res.setHeader("Content-Type", "application/xml");
        res.send(xml);
        console.log("Got a response: ", posts.picture);
      });
    })
    .on("error", function (e) {
      res.send(e);
      console.log("Got an error: ", e);
    });
  // res.setHeader('Content-Type', 'application/xml')
};
