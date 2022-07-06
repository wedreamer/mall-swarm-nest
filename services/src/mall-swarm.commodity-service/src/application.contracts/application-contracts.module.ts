/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AbstractCommodityService } from './commodity/abstractCommodityService';

@Module({
    imports: [],
    controllers: [],
    providers: [],
    exports: [AbstractCommodityService],
})
export class ApplicationContractsModule {}
