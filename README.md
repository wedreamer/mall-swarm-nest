# mall-swarm-nest

[mall-swarm](https://www.macrozheng.com) Node 版本, 基于 [Nest](https://nestjs.com), DDD 实践参考 [Abp](https://abp.io).

## 相关计划

- [ ] 商品模块
  - [ ] 商品管理
  - [ ] 商品分类管理
  - [ ] 商品类型管理
  - [ ] 品牌管理

- [ ] 订单模块
  - [ ] 订单管理
  - [ ] 订单设置
  - [ ] 退货申请处理
  - [ ] 退货原因设置

- [ ] 营销模块
  - [ ] 秒杀活动管理
  - [ ] 优惠价管理
  - [ ] 品牌推荐管理
  - [ ] 新品推荐管理
  - [ ] 人气推荐管理
  - [ ] 专题推荐管理
  - [ ] 首页推荐管理

## 数据库

- mysql
- mongodb

## 基础设施
> 参考 Abp, [相关文档](https://docs.abp.io/zh-Hans/abp/latest/Background-Jobs)
- [ ] 后台服务
- [ ] 事件总线
- [ ] 种子数据
- [ ] 分布式锁
- [ ] 虚拟文件系统
- [ ] 审计日志
- [ ] 数据过滤
- [ ] 当前用户
- [ ] 对象到对象的映射
- [ ] 邮件发送
- [ ] BLOB 存储
- [ ] 文本模板
- [ ] GUID 生成
- [ ] 时钟

## 架构

- 模块化
- 领域驱动设计
- 多租户
- 微服务架构

## [服务基本分层](https://docs.abp.io/zh-Hans/abp/latest/Best-Practices/Module-Architecture)

![整体架构](https://raw.githubusercontent.com/abpframework/abp/rel-5.3/docs/zh-Hans/images/module-layers-and-packages.jpg)

- application
> application 包依赖于 Domain 模块和 application.contracts 模块.
- application.contracts
> application contract 模块依赖于 domain.shared 模块.
- dbMigrator
> 数据相关迁移
- domain
> 包含实体, 仓储接口,领域服务接口及其实现和其他领域对象.
- domain.shared
> 包含常量,枚举和其他类型, 它不能包含实体,存储库,域服务或任何其他业务对象. 可以安全地与模块中的所有层使用. 此模块也可以与第三方客户端使用.
- httpApi
> 只依赖于 application.contracts 包. 不要依赖 application 包. 为每个应用服务创建一个 Controller (通常通过实现其接口). 这些控制器使用应用服务接口来委托操作. 它根据需要配置路由, HTTP方法和其他与Web相关的东西.
- httpApi.client
> 这些客户端服务将应用服务接口实现远程端点的客户端. 仅依赖于 application.Contracts 包.
- typeorm
> 为每个orm/数据库集成创建一个独立的集成模块, 比如 typeorm 和 typemongo. 例如, 创建一个抽象 typeorm 集成的 CompanyName.ModuleName.Typeorm 模块. ORM 集成模块依赖于 Domain 模块. 为每个主要的库创建一个独立的集成模块, 在不影响其他模块的情况下可以被另一个库替换.