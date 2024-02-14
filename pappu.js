require('node:http')
  .createServer((_, res) =>
    res.end(
      `PAPPU 100`,
    ),
  )
  .listen(8080);
