import * as http from "http";
import { app } from "./app";
import { hostname } from "os";

const server = http.createServer(app);

const port = process.env.SERVER_PORT;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});