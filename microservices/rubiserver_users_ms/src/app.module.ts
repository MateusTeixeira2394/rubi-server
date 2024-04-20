import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfigService } from './infra/db/mysql.config.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: MysqlConfigService,
      inject: [MysqlConfigService],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
