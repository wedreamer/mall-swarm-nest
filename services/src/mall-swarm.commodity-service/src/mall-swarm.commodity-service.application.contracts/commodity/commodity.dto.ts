import { EntityDto } from '@shared/abp.ddd/app.contracts/EntityDto'

export class CommodityDto extends EntityDto<number> {
    brandId: string;
    productCategoryId: string;
    feightTemplateId: string;
    productAttributeCategoryId: string;
    name: string;
    pic: string;
    productSn: string;
    // TODO: number -> enum
    deleteStatus: number;
    // TODO: number -> enum
    publishStatus: number;
    // TODO: number -> enum
    newStatus: number;
    // TODO: number -> enum
    recommandStatus: number;
    // TODO: number -> enum
    verifyStatus: number;
    sort: number;
    sale: number;
    // TODO: number -> BigDecimal
    price: number;
    promotionPrice: number;
    giftGrade: number;
    usePointLimit: number;
    subTitle: string;
    originalPrice: number;
    stock: number;
    lowStock: number;
    unit: string;
    weight: number;
    previewStatus: number;
    serviceIds: string;
    keywords: string;
    note: string;
    albumPics: string;
    detailTitle: string;
    promotionStartTime: Date;
    promotionEndTime: Date;
    promotionPerLimit: number;
    promotionType: number;
    brandName: string;
    productCategoryName: string;
    description: string;
    detailDesc: string;
    detailHtml: string;
    detailMobileHtml: string;
    serialVersionUID: number;
}
