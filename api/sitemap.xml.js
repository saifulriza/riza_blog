module.exports = (req, res) => {
  let data;
  http.get('blog.json', (res) => {
    data = res;
  })
// res.setHeader('Content-Type', 'application/xml');
res.send(data, data.data);
}