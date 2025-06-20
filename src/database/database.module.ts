import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { desencriptarRSAIslas29 } from './settings-database';
import { ENTITIES } from 'src/common/constants/entities';
import config from 'src/environment/config';
@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (_confiService: ConfigType<typeof config>) => {
        const { host, port, database /*, schema */ } =
          _confiService.database.sqlServer;
        const typeorm_config: TypeOrmModuleOptions = {
          name: 'con1',
          type: 'mssql',
          host: _confiService.database.sqlServer.host,
          port: _confiService.database.sqlServer.port,
          username: _confiService.database.sqlServer.username,
          password: _confiService.database.sqlServer.password,          
          database: _confiService.database.sqlServer.database,
          schema: _confiService.database.sqlServer.schema, //comentar para produccion
          synchronize: _confiService.database.sqlServer.synchronize, //comentar para produccion
          dropSchema: _confiService.database.sqlServer.dropSchema, //comentar para produccion
          entities: ENTITIES,
          requestTimeout: 60000, // 30 seconds
          options: {
            encrypt: true,
            enableArithAbort: false,
            trustServerCertificate: true, //comentar para produccion
          },
        };
        return typeorm_config;
      },
      inject: [config.KEY],
      imports: undefined,
    }),
  ],
})
export class DataBaseModule {}
