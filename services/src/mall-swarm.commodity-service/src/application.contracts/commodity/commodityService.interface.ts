import { CommodityDto } from './commodity.dto';
import { CommodityParamDto } from './commodity-create.dto';
import { CommodityResultDto } from './commodityResult.dto';

export interface ICommodityService {
    // 创建商品
    create(input: CommodityParamDto): Promise<CommodityDto>;
    // 根据商品获取更新信息
    getUpdateInfo(id: number): Promise<CommodityResultDto>;
    // 更新商品
    update(id: number, input: CommodityParamDto): Promise<void>;
    // 分页查询
    list(productQueryParam: CommodityParamDto, page: number, size: number): Promise<CommodityDto[]>;
    // 根据商品名称或者货号模糊查询
    list(keyword: string): Promise<CommodityDto[]>;
    // 批量修改审核状态
    // TODO： verifyStatus -> enum
    updateVerifyStatus(ids: number[], verifyStatus: number, detail: string): Promise<void>;
    // 批量修改商品上架状态
    updatePublishStatus(ids: number[], publishStatus: number): Promise<void>;
    // 批量修改商品推荐状态
    updateRecommendStatus(ids: number[], recommendStatus: number): Promise<void>;
    // 批量修改新品状态
    updateNewStatus(ids: number[], newStatus: number): Promise<void>;
    // 批量删除商品
    delete(ids: string[]): Promise<void>;
}
