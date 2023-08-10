const http = require('http');
const fs = require('fs');

const port = 7777;

const app = http.createServer((req, res, next) => {
  console.log('running for the first time ');

  // routing /user
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    console.log('hit');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html> <head><title>Node server </title> </head>');
    res.write(`<body>
    <h1>Hello from first node server</h1>
    <form action ="/create-user" method="POST">
    <label htmlFor="inputMessage">Enter Your Name</label>
    <input type='text' placeholder=' enter here ' name='inputMessage' />
    <button>Submit</button>
    </form>
    </body>
    `);
    res.write('</html>');
    res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    // catch incoming data
    const body = [];

    // collect data
    req.on('data', chunks => {
      body.push(chunks);
    });

    // when data stream ends
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();

      //   extract data from parsedBody
      const [nameEle, message] = parsedBody.split('=');

      // write it in file
      fs.writeFile('message.txt', message, error => {
        res.statusCode = 302; //redirecting code
        res.setHeader('Location', '/');
        res.end();
      });
    });
  }
  if (url === '/user') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Assignment</title></head>');
    res.write(
      '<body><h1> User List</h1> <ul><li>dummy1</li><li>dummy2</li></ul></body>'
    );
    res.write('</html>');
    res.end();
  }
});

app.listen(port, e => {
  console.log('Server Started !');
});
