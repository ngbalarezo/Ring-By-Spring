import {Elysia} from 'elysia';
import { configureUsersRoutes } from './controller/user.controller';
import { configurePostsRoutes } from './controller/post.controller';

const PORT = process.env['LISTEN_PORT'];
console.log(`Listening on port ${PORT}`);
const STATIC_ROOT='./dist/frontend/browser';

new Elysia()
  .get('/*', async (context) => {
    console.log('Static: ', context.path);
    const staticFile = Bun.file(`./${STATIC_ROOT}/${context.path}`);
    const fallBackFile = Bun.file(`./${STATIC_ROOT}/index.html`);
    return (await staticFile.exists()) ? staticFile : fallBackFile;
  })
  .group("/api/users", configureUsersRoutes)
  .group('/api/posts', configurePostsRoutes)
  .listen(PORT);
