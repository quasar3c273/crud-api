import {ServerResponse} from "http";
import {host, port} from "../consts";
import {server} from "../index";

const startServerListen = () => {
  server.on('error', (error: Error, response: ServerResponse) => {
    response.statusCode = 500;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Internal Server Error');
    console.error(`Server error: ${error}`);
  });

  server.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
  });
}

export default startServerListen