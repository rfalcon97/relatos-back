import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      sqlServer: {
        host: process.env.HOST_DB,
        port: parseInt(process.env.PORT_DB, 10),
        username: process.env.USER_DB,
        password: process.env.PASS_DB,
        database: process.env.BASE_DB,
        schema: process.env.SCHEMA_DB,
        synchronize: process.env.SYNCRONIZE_DB === 'true',
        dropSchema: process.env.DROPSCHEMA_DB === 'true',
      },
    }, 
    port: process.env.PORT,
  };
});
