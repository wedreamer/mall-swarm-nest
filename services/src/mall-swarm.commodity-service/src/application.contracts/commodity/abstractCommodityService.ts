import { CommodityParamDto } from "./commodity-create.dto";
import { CommodityDto } from "./commodity.dto";
import { CommodityResultDto } from "./commodityResult.dto";
import { ICommodityService } from "./commodityService.interface";

export abstract class AbstractCommodityService implements ICommodityService {
    // 创建商品
    abstract create(input: CommodityParamDto): Promise<CommodityDto>;
    // 根据商品获取更新信息
    abstract getUpdateInfo(id: number): Promise<CommodityResultDto>;
    // 更新商品
    abstract update(id: number, input: CommodityParamDto): Promise<void>;
    // 分页查询
    abstract list(productQueryParam: CommodityParamDto, page: number, size: number): Promise<CommodityDto[]>;
    // 根据商品名称或者货号模糊查询
    abstract list(keyword: string): Promise<CommodityDto[]>;
    // 批量修改审核状态
    // TODO： verifyStatus -> enum
    abstract updateVerifyStatus(ids: number[], verifyStatus: number, detail: string): Promise<void>;
    // 批量修改商品上架状态
    abstract updatePublishStatus(ids: number[], publishStatus: number): Promise<void>;
    // 批量修改商品推荐状态
    abstract updateRecommendStatus(ids: number[], recommendStatus: number): Promise<void>;
    // 批量修改新品状态
    abstract updateNewStatus(ids: number[], newStatus: number): Promise<void>;
    // 批量删除商品
    abstract delete(ids: string[]): Promise<void>;
}
