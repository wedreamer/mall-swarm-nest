import { CommodityParamDto } from '@application-contracts/commodity/commodity-create.dto';
import { CommodityDto } from '@application-contracts/commodity/commodity.dto';
import { CommodityService } from '@application/commodity.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class CommodityController {
    constructor(private readonly commodityService: CommodityService) {}

    @Get()
    getHello(): string {
        return this.commodityService.getHello();
    }

    // pipes
    @Post('/')
    async create(input: CommodityParamDto): Promise<CommodityDto> {
        return this.commodityService.create(input);
    }
}
