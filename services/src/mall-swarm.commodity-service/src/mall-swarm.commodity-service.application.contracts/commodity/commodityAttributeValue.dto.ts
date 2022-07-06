import { EntityDto } from "@shared/abp.ddd/app.contracts/EntityDto";

export class CommodityAttributeValueDto extends EntityDto<number> {
    productId: number;
    productAttributeId: number;
    value: string;
}