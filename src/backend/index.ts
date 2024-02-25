import {Elysia} from 'elysia'

const PORT = process.env['LISTEN_PORT'];
console.log(`Listening on port ${PORT}`);
new Elysia()
  .get('/', () => 'Hello Elysia')
  .listen(PORT);
