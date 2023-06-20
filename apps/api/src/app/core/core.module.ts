import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from "../config/config.module";
import { ConfigService } from "../config/config.service";


@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => configService.mongoConfig,
      inject: [ConfigService],
    })
  ]
})
export class CoreModule {}
