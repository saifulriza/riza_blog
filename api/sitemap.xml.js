module.exports = (req, res) => {
  let data;
  http.get('https://riza-blog-7mays5ci9.vercel.app/blog.json', (res) => {
    data = res | 'gagal';
  })
// res.setHeader('Content-Type', 'application/xml');
res.send(data);
}