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
        console.log("Body : ", body);
        console.log("Body[0] : ", body[0]);
        var posts = JSON.parse(body[0]);
        console.log("post : ", posts);
        const xml = `<?xml version="1.0" encoding="UTF-8" ?>
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
        res.setHeader("Content-Type", "application/xml");
        res.send(xml);
      });
    })
    .on("error", function (e) {
      res.send(e);
      console.log("Got an error: ", e);
    });
  // res.setHeader('Content-Type', 'application/xml')
};
