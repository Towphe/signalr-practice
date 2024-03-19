import connect from 'connect';
import serveStatic from 'serve-static';

const port = 8080;

connect()
    .use(serveStatic('./'))
    .listen(port, () => {
        // commands on startup
        console.log(`Server running on ${port}`);
    });