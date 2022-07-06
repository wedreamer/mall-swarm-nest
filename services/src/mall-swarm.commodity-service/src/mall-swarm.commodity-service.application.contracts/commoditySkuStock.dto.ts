import { EntityDto } from "@shared/abp.ddd/app.contracts/EntityDto";

export class CommoditySkuStockDto extends EntityDto<number> {
    commodityId: number;
    skuCode: number;
    price: string;
    stock: number;
    lowStock: number;
    pic: string;
    sale: number;
    promotionPrice: string;
    lockStock: number;
    spData: string;
}