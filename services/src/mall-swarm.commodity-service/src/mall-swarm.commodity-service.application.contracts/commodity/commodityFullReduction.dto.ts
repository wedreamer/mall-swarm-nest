import { EntityDto } from "@shared/abp.ddd/app.contracts/EntityDto";

export class CommodityFullReductionDto extends EntityDto<number> {
    productId: number;
    fullPrice: string;
    reducePrice: string;
}