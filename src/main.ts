import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { join } from 'path';
import * as express from 'express';
import { ConstantesGenerales } from './common/constants/certificate-constants';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import * as https from 'https';
const httpsOptions = {
  pfx: fs.readFileSync(
    join(__dirname, 'certificates', ConstantesGenerales.NOMBRE_CERTIFICADO),
  ),
  passphrase: ConstantesGenerales.PASSWORD_CERTIFICADO,
};

//// ---------------------------ENCRIPTADO------------------------------
   async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  const logger = new Logger('Server');
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors();
  app.use(
    helmet.hsts({
      maxAge: 31536000,
      preload: true,
      includeSubDomains: true,
    }),
  );
  app.setGlobalPrefix('relatos');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const serverHttps = https.createServer(httpsOptions, server);
  await app.init();
  const puerto = process.env.PORT;
  serverHttps.listen(puerto);
  //app.listen(puerto);
  logger.verbose(`APLICACION EN EL PUERTO =========> ${puerto}`);
}
bootstrap();   

//-----------------------SIN ENCRIPTAR------------------------------
/*   async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('relatos');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(PORT);
  Logger.verbose(`APLICACION ESCUCHANDO EL PUERTO ==> ${PORT}`);
}
bootstrap();  */
  