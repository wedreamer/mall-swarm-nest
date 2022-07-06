import { AbstractCommodityService } from '@application-contracts/commodity/abstractCommodityService';
import { CommodityParamDto } from '@application-contracts/commodity/commodity-create.dto';
import { CommodityDto } from '@application-contracts/commodity/commodity.dto';
import { CommodityResultDto } from '@application-contracts/commodity/commodityResult.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommodityService extends AbstractCommodityService {
    constructor() {
        super();
    }

    create(input: CommodityParamDto): Promise<CommodityDto> {
        throw new Error('Method not implemented.');
    }

    getUpdateInfo(id: number): Promise<CommodityResultDto> {
        throw new Error('Method not implemented.');
    }

    update(id: number, input: CommodityParamDto): Promise<void> {
        throw new Error('Method not implemented.');
    }

    list(productQueryParam: CommodityParamDto, page: number, size: number): Promise<CommodityDto[]>;
    list(keyword: string): Promise<CommodityDto[]>;
    list(
        productQueryParam: unknown,
        page?: unknown,
        size?: unknown,
    ): Promise<import('../application.contracts/commodity/commodity.dto').CommodityDto[]> {
        throw new Error('Method not implemented.');
    }

    updateVerifyStatus(ids: number[], verifyStatus: number, detail: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    updatePublishStatus(ids: number[], publishStatus: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

    updateRecommendStatus(ids: number[], recommendStatus: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

    updateNewStatus(ids: number[], newStatus: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    
    delete(ids: string[]): Promise<void> {
        throw new Error('Method not implemented.');
    }

    getHello(): string {
        return 'Hello World!';
    }
}
