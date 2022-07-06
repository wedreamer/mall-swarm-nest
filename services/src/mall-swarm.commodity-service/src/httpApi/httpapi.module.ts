/*
https://docs.nestjs.com/modules
*/

import { ApplicationModule } from '@application/application.module';
import { Module } from '@nestjs/common';
import { CommodityController } from './commodity.controller';

@Module({
    imports: [ApplicationModule],
    controllers: [CommodityController],
    providers: [],
})
export class HttpApiModule {}
