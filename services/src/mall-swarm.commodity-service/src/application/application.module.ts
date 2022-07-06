/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ApplicationContractsModule } from 'src/application.contracts/application-contracts.module';
import { CommodityService } from './commodity.service';

@Module({
    imports: [
        ApplicationContractsModule
    ],
    controllers: [],
    providers: [CommodityService],
})
export class ApplicationModule {}
