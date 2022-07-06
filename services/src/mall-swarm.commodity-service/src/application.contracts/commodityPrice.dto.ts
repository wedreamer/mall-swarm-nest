import { EntityDto } from "@shared/abp.ddd/app.contracts/EntityDto";

export class CommodityPriceDto extends EntityDto<number> {
    commodityId: number;
    memberLevelId: number;
    memberPrice: string;
    memberLevelName: string;
}