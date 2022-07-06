import { CommodityDto } from './commodity.dto';
import { CommodityAttributeValueDto } from './commodityAttributeValue.dto';
import { CommodityFullReductionDto } from './commodityFullReduction.dto';
import { CommodityLadderDto } from './commodityLadder.dto';
import { CommodityPriceDto } from './commodityPrice.dto';
import { CommoditySkuStockDto } from './commoditySkuStock.dto';

export class CommodityParamDto extends CommodityDto {
    private readonly commodityLadders: CommodityLadderDto[];
    // 商品阶梯价格设置
    private readonly productLadderList: CommodityLadderDto[];
    // 商品满减价格设置
    private readonly productFullReductionList: CommodityFullReductionDto[];
    // 商品会员价格设置
    private readonly memberPriceList: CommodityPriceDto[];
    // 商品的 sku 库存信息
    private readonly skuStockList: CommoditySkuStockDto[];
    // 商品参数及自定义规格属性
    private readonly commodityAttributeList: CommodityAttributeValueDto[];
    // todo: 专题和商品关系
    // private readonly subjectProductRelationList: CmsSubjectProductRelation[];
    // todo: 优选专区和商品的关系
    // private readonly prefrenceAreaProductRelationList: CmsPrefrenceAreaProductRelation[];
}
