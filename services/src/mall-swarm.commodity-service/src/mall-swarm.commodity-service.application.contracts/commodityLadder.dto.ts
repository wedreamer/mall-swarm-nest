import { EntityDto } from "@shared/abp.ddd/app.contracts/EntityDto";

export class CommodityLadderDto extends EntityDto<number> {
    // 商品id
    commodityId: number;
    // 满足的商品数量
    fullCount: number;
    // 折扣
    discount: string;
    // 折后价格
    price: string;
}
