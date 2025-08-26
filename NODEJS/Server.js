// const http = require('http');
// const server=http.createServer((req, res) => {
//   res.setHeader('Content-Type','text/plain');
//   res.statusCode = 200;
//   res.end('Hello Royal Harsh\n');
// });
// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


const http = require('http');
const server=http.createServer((req, res) => {
  res.setHeader('Content-Type','text/plain');
  if (req.url=='/'){
    res.statusCode = 200;
  res.end('This is Web Page\n');
  }
  else if(req.url=='/Home'){
    res.statusCode = 200;
  res.end('This is Home Web Page\n');
  }
  else if(req.url=='/About'){
    res.statusCode = 200;
  res.end('This is About Web Page\n');
  }
  else{
    res.statusCode = 404;
  res.end('Page not found\n');
  }
  res.statusCode = 200;
  res.end('Hello Royal Harsh\n');
})

mongoose.connect(process.env.DB_URL)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


server.listen(3000, () => {
  console.log('Server is running on port 3000');
});