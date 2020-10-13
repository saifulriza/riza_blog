module.exports = (req, res) => {
res.setHeader('Content-Type', 'application/xml');
res.send(`<?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    
      <url><loc>xn--e28h.my.id/</loc><priority>0.85</priority></url>
    
  
      <url><loc>xn--e28h.my.id/about</loc><priority>0.85</priority></url>
    
  
      <url><loc>xn--e28h.my.id/api</loc><priority>0.85</priority></url>
    
  
      <url><loc>xn--e28h.my.id/blog</loc><priority>0.85</priority></url>
    
  
      <url><loc>xn--e28h.my.id/link</loc><priority>0.85</priority></url>
    
    
      <url>
        <loc>xn--e28h.my.id/blog/hello-world</loc>
        <priority>0.69</priority>
      </url>
    
  
      <url>
        <loc>xn--e28h.my.id/blog/hello-world</loc>
        <priority>0.69</priority>
      </url>
    
  </urlset>
  `)
}