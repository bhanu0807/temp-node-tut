const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("This is our short history");
  }

  res.end(
    `<h1>Oops!</h1>
    <p>The page you are looking seems doesnt exist now</p>
    <a href="/">go to home</a>`
  );
});
server.listen(2000);