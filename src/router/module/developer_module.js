export default [
  // ---------------------------开发商模块----------------------------
  // // ----------------------------开发商土拍报名-------------------------------
  {
    path: '/bidWay',
    name: 'BidWay',
    component: () => import('@/views/developer_module/recordBidType/bidWay.vue') // 竞买方式选择页面
  },
  {
    path: '/writeBidder',
    name: 'WriteBidder',
    meta: {
      routeName: '填写竞买人信息'
    },
    component: () => import('@/views/developer_module/recordBidType/writeBidder.vue') // 竞买记录--信息确认--填写竞买人信息 unionBiddeverify
  },
  {
    path: '/unionBiddeverify',
    name: 'UnionBiddeverify',
    meta: {
      routeName: '信息确认'
    },
    component: () => import('@/views/developer_module/recordBidType/unionBiddeverify.vue') // 联合竞买，信息确认，主申请人确认和最终确认
  },
  {
    path: '/partnerSure',
    name: 'PartnerSure',
    meta: {
      routeName: '信息确认'
    },
    component: () => import('@/views/developer_module/recordBidType/partnerSure.vue') // 竞买合伙人确认
  },
  {
    path: '/jointBiddingSetupCompany',
    name: 'JointBiddingSetupCompany',
    meta: {
      routeName: '竞买记录'
    },
    component: () => import('@/views/developer_module/recordBidType/jointBiddingSetupCompany.vue') // 联合竞买选择选择是否成立新公司
  },
  {
    path: '/unionSignature',
    name: 'UnionSignature',
    meta: {
      routeName: '联合竞买协议签章'
    },
    component: () => import('@/views/developer_module/recordBidType/unionSignature.vue') // 联合竞买协议签章,成立新公司
  },
  {
    path: '/unincorporatedCompany',
    name: 'UnincorporatedCompany',
    meta: {
      routeName: '联合竞买协议签章'
    },
    component: () =>
      import('@/views/developer_module/recordBidType/common/unincorporatedCompany.vue') // 联合竞买协议签章，未成立新公司
  },
  {
    path: '/unionBiddingDetail',
    name: 'UnionBiddingDetail',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/developer_module/recordBidType/unionBiddingDetail.vue') // 联合竞买详情
  },
  {
    path: '/singleBiddingDetail',
    name: 'SingleBiddingDetail',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/developer_module/recordBidType/singleBiddingDetail.vue') // 单独竞买详情
  },
  {
    path: '/biddingRecord',
    name: 'BiddingRecord',
    meta: {
      keepalive: true
    },
    component: () => import('@/views/developer_module/recordBidType/biddingRecord.vue') // 开发商竞买记录
  },
  // --------------------  项目进程  -------------------------------------------------
  {
    path: '/projectProcess',
    name: 'ProjectProcess',
    component: () => import('@/views/developer_module/projectProcess') // 项目进程首页
  },
  {
    path: '/projectMaintain',
    name: 'ProjectMaintain',
    meta: {
      routeName: '合作维护'
    },
    component: () => import('@/views/developer_module/projectProcess/maintain') // 合作维护
  },
  // --------------------开发商标的物管理-------------------------------------------------
  {
    path: '/subjectMatterManagement',
    name: 'SubjectMatterManagement',
    meta: {
      routeName: '标的物管理',
      keepalive: true
    },
    component: () =>
      import('@/views/developer_module/companyLandManagement/subjectMatterManagement.vue') // 开发商标的物管理
  },
  {
    path: '/attentionList',
    name: 'AttentionList',
    meta: {
      keepalive: true
    },
    component: () => import('@/views/developer_module/companyLandManagement/attentionList.vue') // 开发商标的物关注列表
  },
  {
    path: '/companyLandInfo',
    name: 'CompanyLandInfo',
    meta: {
      routeName: '标的物详情'
    },
    component: () => import('@/views/developer_module/companyLandManagement/companyLandInfo.vue') // 开发商标的物详情
  },
  // -----------------------------------开发商拍卖----------------------------------------------------
  {
    path: '/auctionCircusee',
    name: 'AuctionCircusee',
    meta: {
      routeName: '竞拍'
    },
    component: () => import('@/views/developer_module/auction/auctionCircusee.vue') // 无资格围观页面
  },
  {
    path: '/auctionAwait',
    name: 'AuctionAwait',
    component: () => import('@/views/developer_module/auction/auctionAwait.vue') // 开发商竞买拍卖页面
  },
  // ------------------------------------------------------------标的物管理----start------------------------------------------------------------------
  // ----------------------------开发商保证金管理-----------------------------------------
  {
    path: '/landMarginDev',
    name: 'LandMarginDev',
    meta: {
      keepalive: true
    },
    component: () => import('@/views/developer_module/landManagement_zero/landMarginDev/index.vue') // 土拍保证金管理
  },
  {
    path: '/landMarginDevDetails',
    name: 'LandMarginDevDetails',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import('@/views/developer_module/landManagement_zero/landMarginDev/landMarginDevDetails.vue') // 土拍保证金详情
  },
  // -----------------------------开发商土地出让合同------------------------
  {
    path: '/landContractDev',
    name: 'LandContractDev',
    component: () =>
      import('@/views/developer_module/landManagement_zero/landContractDev/index.vue') // 开发商土地出让合同首页
  },
  {
    path: '/landContractDevApply',
    name: 'LandContractDevApply',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/developer_module/landManagement_zero/landContractDev/landContractDevApply.vue'
      ) // 开发商土地出让合同申请页面
  },
  // --------------------------开发商成交通知书-----------------------------
  {
    path: '/transactionNoticeDev',
    name: 'TransactionNoticeDev',
    component: () =>
      import('@/views/developer_module/landManagement_zero/transactionNoticeDev/index.vue') // 开发商成交通知书首页
  },
  {
    path: '/transactionNoticeDevDetails',
    name: 'TransactionNoticeDevDetails',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/developer_module/landManagement_zero/transactionNoticeDev/transactionNoticeDevDetails.vue'
      ) // 开发商成交通知书详情
  },
  {
    path: '/transactionNoticeDevSign',
    name: 'TransactionNoticeDevSign',
    meta: {
      routeName: '签章'
    },
    component: () =>
      import(
        '@/views/developer_module/landManagement_zero/transactionNoticeDev/transactionNoticeDevSign.vue'
      ) // 开发商成交通知书详签章
  },
  // ------------------------------------------------------------标的物管理----end------------------------------------------------------------------
  // ------------------------------------------------证件申领--------------------------------------------------
  // ------------------建设用地规划申领----------大龙----------constructionLandPlan_one
  {
    path: '/projectFiles',
    name: 'ProjectFiles',
    component: () => import('@/views/developer_module/constructionLandPlan_one/projectFiles.vue') // 建设用地规划申领-----立项文件
  },
  {
    path: '/landApproval',
    name: 'LandApproval',
    component: () => import('@/views/developer_module/constructionLandPlan_one/landApproval.vue') // 建设用地规划申领-----建设用地批准书
  },
  {
    path: '/landPlanLicense',
    name: 'LandPlanLicense',
    component: () => import('@/views/developer_module/constructionLandPlan_one/landPlanLicense.vue') // 建设用地规划申领-----建设用地规划许可证
  },
  // --------------------------------------------------------不动产权证---------申领阶段---start----------------------------------------------------
  {
    path: '/deedTaxPayment',
    name: 'DeedTaxPayment',
    component: () =>
      import('@/views/developer_module/realEstateCertificate_two/deedTaxPayment/index.vue') // 契税完税证明
  },
  {
    path: '/landMoneyReceipt',
    name: 'LandMoneyReceipt',
    component: () =>
      import('@/views/developer_module/realEstateCertificate_two/landMoneyReceipt/index.vue') // 土地出让金收据
  },
  {
    path: '/realEstateCertificate',
    name: 'RealEstateCertificate',
    component: () =>
      import('@/views/developer_module/realEstateCertificate_two/realEstateCertificate/index.vue') // 不动产权证
  },
  // --------------------------------------------------------不动产权证---------申领阶段---end----------------------------------------------------

  // ------------------------------------------------------  项目贷款   ---  start  ------------------------------------------------
  // -----------------项目贷款------------------
  {
    path: '/projectLoan',
    name: 'ProjectLoan',
    component: () => import('@/views/developer_module/projectLoan')
  },
  // ------------------------------------------------------  项目贷款   ---  end  ------------------------------------------------

  // ------------------------------------------------------  预售许可证阶段   ---  start  ------------------------------------------------
  // -----------------测绘成果报告书------------------
  {
    path: '/surveyDrawing',
    name: 'SurveyDrawing',
    component: () => import('@/views/developer_module/presaleLicense/surveyDrawing')
  },
  // -----------------预售许可证------------------
  {
    path: '/presaleLiceses',
    name: 'PresaleLiceses',
    component: () => import('@/views/developer_module/presaleLicense/presaleLiceses'),
    children: []
  },
  // 详情界面
  {
    path: '/presaleLicesesChildrenT',
    name: 'PresaleLicesesChildrenT',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import('@/views/developer_module/presaleLicense/presaleLiceses/childrenTable.vue')
  },
  // ------------------------------------------------------  预售许可证阶段   ---  end  ------------------------------------------------
  // ------------------------------------------------------  组合贷   ---  start  ------------------------------------------------
  // -------------------委贷合作--------------------
  {
    path: '/entrustedLoan',
    name: 'EntrustedLoan',
    component: () => import('@/views/developer_module/portfolioLoan/entrustedLoan')
  },
  {
    path: '/entrustedLoanDetail',
    name: 'EntrustedLoanDetail',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/developer_module/portfolioLoan/entrustedLoan/detail')
  },
  // -------------------商业合作银行--------------------

  {
    path: '/cooperativeBank',
    name: 'CooperativeBank',
    component: () => import('@/views/developer_module/portfolioLoan/cooperativeBank')
  },
  {
    path: '/cooperativeBankDetail',
    name: 'CooperativeBankDetail',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/developer_module/portfolioLoan/cooperativeBank/detail')
  },
  // ------------------------------------------------------  组合贷   ---  end  ------------------------------------------------
  // ------------------------------------------------------  建设工程规划许可证阶段   ---  start  ------------------------------------------------
  {
    path: '/energyAudit',
    name: 'EnergyAudit',
    component: () => import('@/views/developer_module/constructionProjectPlanning/EnergyAudit') // 节能审查意见书
  },
  {
    path: '/environEffectReport',
    name: 'EnvironEffectReport',
    component: () => import('@/views/developer_module/constructionProjectPlanning/environEffect') // 环境影响报告书
  },
  {
    path: '/soilWaterReport',
    name: 'SoilWaterReport',
    component: () => import('@/views/developer_module/constructionProjectPlanning/soilWaterReport') // 水土保持方案报告审批意见
  },
  {
    path: '/sunshineAnalysisReport',
    name: 'SunshineAnalysisReport',
    component: () =>
      import(
        '@/views/developer_module/constructionProjectPlanning/sunshineAnalysisReport/index.vue'
      ) // 日照分析报告
  },
  {
    path: '/trafficImpact',
    name: 'TrafficImpact',
    component: () =>
      import('@/views/developer_module/constructionProjectPlanning/trafficImpact/index.vue') // 交通影响评价审批意见
  },
  {
    path: '/defenceProjectArea',
    name: 'DefenceProjectArea',
    component: () =>
      import('@/views/developer_module/constructionProjectPlanning/defenceProjectArea/index.vue') // 人防工程面积审批意见
  },
  {
    path: '/designProposalApproval',
    name: 'DesignProposalApproval',
    component: () =>
      import(
        '@/views/developer_module/constructionProjectPlanning/designProposalApproval/index.vue'
      ) // 设计方案批复
  },
  {
    path: '/preliminaryDesignScheme',
    name: 'PreliminaryDesignScheme',
    component: () =>
      import(
        '@/views/developer_module/constructionProjectPlanning/preliminaryDesignScheme/index.vue'
      ) // 初步设计方案批复/建设工程规划许可证
  },
  // ------------------------------------------------------  建设工程规划许可证阶段   ---  end  ------------------------------------------------
  // ------------------------------------------------------  施工许可证   ---  start  -----------------------------------------------------------
  // -------------------施工图审批--------------------
  {
    path: '/constructionDrawingReview',
    name: 'ConstructionDrawingReview',
    component: () =>
      import(
        '@/views/developer_module/constructionPermit_four/1_constructionDrawingReview/index.vue'
      ) // 施工图审查
  },
  // -------------------施工图变更--------------------
  {
    path: '/constructionDrawingChange',
    name: 'ConstructionDrawingChange',
    component: () =>
      import(
        '@/views/developer_module/constructionPermit_four/2_constructionDrawingChange/index.vue'
      ) // 施工图变更
  },
  {
    path: '/constructionDrawingChangeApply',
    name: 'ConstructionDrawingChangeApply',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/developer_module/constructionPermit_four/2_constructionDrawingChange/constructionDrawingChangeApply.vue'
      ) // 施工图变更详情
  },
  // ------------------建设工程消防设计审核-------------
  {
    path: '/constructionProjectFile',
    name: 'ConstructionProjectFile',
    component: () =>
      import('@/views/developer_module/constructionPermit_four/3_constructionProjectFile/index.vue') // 建设工程消防审计审核
  },
  // ------------------建设工程人防设计审核-------------
  {
    path: '/constructionProjectCivil',
    name: 'ConstructionProjectCivil',
    component: () =>
      import(
        '@/views/developer_module/constructionPermit_four/4_constructionProjectCivil/index.vue'
      ) // 建设工程人防审计审核
  },
  // ------------------建设工程受监-------------
  {
    path: '/constructionProjectCustody',
    name: 'ConstructionProjectCustody',
    component: () =>
      import(
        '@/views/developer_module/constructionPermit_four/5_constructionProjectCustody/index.vue'
      ) // 建设工程受监审核
  },
  // ------------------人防工程受监-------------
  {
    path: '/constructionProjectPAD',
    name: 'ConstructionProjectPAD',
    component: () =>
      import('@/views/developer_module/constructionPermit_four/6_constructionProjectPAD/index.vue') // 人防工程受监审核
  },
  // ------------------施工许可证-------------
  {
    path: '/constructionPermit',
    name: 'ConstructionPermit',
    component: () =>
      import('@/views/developer_module/constructionPermit_four/7_constructionPermit/index.vue') // 施工许可证
  },
  // ------------------地名使用批准书-------------
  {
    path: '/placeNameApproval',
    name: 'PlaceNameApproval',
    component: () =>
      import('@/views/developer_module/constructionPermit_four/8_placeNameApproval/index.vue') // 地名使用批准书
  },
  // ------------------------------------------------------  施工许可证   ---  end  -------------------------------------------------------------
  // ------------------------------------------------------  中间验收   ---  start  -----------------------------------------------------------
  // -------------------灰线验收--------------------
  {
    path: '/grayLineAcceptance',
    name: 'GrayLineAcceptance',
    component: () =>
      import('@/views/developer_module/middleAcceptance_six/1_grayLineAcceptance/index.vue') // 灰线验收
  },
  // -------------------桩机验收--------------------
  {
    path: '/plieMachineAcceptance',
    name: 'PlieMachineAcceptance',
    component: () =>
      import('@/views/developer_module/middleAcceptance_six/2_plieMachineAcceptance/index.vue') // 桩机验收
  },
  // -------------------基坑验收--------------------
  {
    path: '/foundationPitAcceptance',
    name: 'FoundationPitAcceptance',
    component: () =>
      import('@/views/developer_module/middleAcceptance_six/3_foundationPitAcceptance/index.vue') // 基坑验收
  },
  // -------------------结构验收--------------------
  {
    path: '/structureAcceptance',
    name: 'StructureAcceptance',
    component: () =>
      import('@/views/developer_module/middleAcceptance_six/4_structureAcceptance/index.vue') // 结构验收
  },
  // -------------------竣工验收--------------------
  {
    path: '/completionAcceptance',
    name: 'CompletionAcceptance',
    component: () =>
      import('@/views/developer_module/middleAcceptance_six/5_completionAcceptance/index.vue') // 竣工验收
  },
  // -------------------正负零零验收--------------------
  {
    path: '/positiveNegativeZZAcceptance',
    name: 'PositiveNegativeZZAcceptance',
    component: () =>
      import(
        '@/views/developer_module/middleAcceptance_six/6_positiveNegativeZZAcceptance/index.vue'
      ) // 正负零零验收
  },
  // ------------------------------------------------------  中间验收   ---  end  -------------------------------------------------------------
  // ------------------------------------------------------  综合验收第一阶段   ---  start  -------------------------------------------------------------
  // -------------------交通验收--------------------
  {
    path: '/trafficAcceptance',
    name: 'TrafficAcceptance',
    component: () =>
      import('@/views/developer_module/comprehensiveOne_ seven/trafficAcceptance_one/index.vue') // 交通验收
  },
  // -------------------规划验收--------------------
  {
    path: '/planingAcceptance',
    name: 'PlaningAcceptance',
    component: () =>
      import('@/views/developer_module/comprehensiveOne_ seven/planingAcceptance/index.vue') // 规划验收
  },
  // -------------------绿化验收--------------------
  {
    path: '/greeningAcceptance',
    name: 'GreeningAcceptance',
    component: () =>
      import('@/views/developer_module/comprehensiveOne_ seven/greeningAcceptance/index.vue') // 绿化验收
  },
  // -------------------防雷验收--------------------
  {
    path: '/protectiveRayAcceptance',
    name: 'ProtectiveRayAcceptance',
    component: () =>
      import('@/views/developer_module/comprehensiveOne_ seven/protectiveRayAcceptance/index.vue') // 防雷验收
  },
  // -------------------水土保持设施验收--------------------
  {
    path: '/waterLandAcceptance',
    name: 'WaterLandAcceptance',
    component: () =>
      import('@/views/developer_module/comprehensiveOne_ seven/waterLandAcceptance/index.vue') // 水土保持设施验收
  },
  // -------------------室内空气质量检测--------------------
  {
    path: '/indoorAirAcceptance',
    name: 'IndoorAirAcceptance',
    component: () => import('@/views/developer_module/comprehensiveOne_ seven/indoorAir/index.vue') // 室内空气质量检测
  },
  // -------------------生活用水水质检测验收--------------------
  {
    path: '/lifeWaterAcceptance',
    name: 'LifeWaterAcceptance',
    component: () => import('@/views/developer_module/comprehensiveOne_ seven/lifeWater/index.vue') // 生活用水水质检测验收
  },
  // -------------------卫生验收--------------------
  {
    path: '/healthAcceptance',
    name: 'HealthAcceptance',
    component: () =>
      import('@/views/developer_module/comprehensiveOne_ seven/healthAcceptance/index.vue') // 卫生验收
  },
  // -------------------消防验收--------------------
  {
    path: '/fireAcceptance',
    name: 'FireAcceptance',
    component: () =>
      import('@/views/developer_module/comprehensiveOne_ seven/fireAcceptance/index.vue') // 消防验收
  },
  // -------------------人防工程竣工验收--------------------
  {
    path: '/projectCompletionAcceptance',
    name: 'ProjectCompletionAcceptance',
    component: () =>
      import('@/views/developer_module/comprehensiveOne_ seven/projectCompletion/index.vue') // 人防工程竣工验收
  },
  // -------------------《人防工程质监验收》--------------------
  {
    path: '/projectQualityAcceptance',
    name: 'ProjectQualityAcceptance',
    component: () =>
      import('@/views/developer_module/comprehensiveOne_ seven/projectQuality/index.vue') // 《人防工程质监验收》
  },
  // -------------------地名标志验收--------------------
  {
    path: '/landMarkAcceptance',
    name: 'LandMarkAcceptance',
    component: () => import('@/views/developer_module/comprehensiveOne_ seven/landMark/index.vue') // 地名标志验收
  },
  // -------------------邮政设施验收--------------------
  {
    path: '/postalAcceptance',
    name: 'PostalAcceptance',
    component: () =>
      import('@/views/developer_module/comprehensiveOne_ seven/postalAcceptance/index.vue') // 邮政设施验收
  },
  // ------------------------------------------------------  综合验收第一阶段   ---  end  ---------------------------------------------------------------

  // ------------------------------------------------------  综合验收第二阶段   ---  start  -----------------------------------------------------------
  // -------------------房产实测绘--------------------
  {
    path: '/realEstateMapping',
    name: 'RealEstateMapping',
    component: () =>
      import(
        '@/views/developer_module/comprehensiveAcceptance_seven_2/1_realEstateMapping/index.vue'
      ) // 房产实测绘
  },
  // -------------------物业维修基金--------------------
  {
    path: '/propertyMaintenanceFund',
    name: 'PropertyMaintenanceFund',
    component: () =>
      import(
        '@/views/developer_module/comprehensiveAcceptance_seven_2/2_propertyMaintenanceFund/index.vue'
      ) // 物业维修基金
  },
  // -------------------竣工验收备案--------------------
  {
    path: '/completionAcceptanceRecord',
    name: 'CompletionAcceptanceRecord',
    component: () =>
      import(
        '@/views/developer_module/comprehensiveAcceptance_seven_2/3_completionAcceptanceRecord/index.vue'
      ) // 竣工验收备案
  },
  // -------------------宗地测绘报告--------------------
  {
    path: '/landSurveyReport',
    name: 'LandSurveyReport',
    component: () =>
      import(
        '@/views/developer_module/comprehensiveAcceptance_seven_2/4_landSurveyReport/index.vue'
      ) // 宗地测绘报告
  },
  // -------------------用地复核验收--------------------
  {
    path: '/siteReviewAcceptance',
    name: 'SiteReviewAcceptance',
    component: () =>
      import(
        '@/views/developer_module/comprehensiveAcceptance_seven_2/5_siteReviewAcceptance/index.vue'
      ) // 用地复核验收
  },
  // ------------------------------------------------------  综合验收第二阶段   ---  end  -------------------------------------------------------------
  // ------------------------------------------------------  楼盘管理   ---  start  -------------------------------------------------------------
  // -------------------楼盘管理首页----------------
  {
    path: '/buildingManagement',
    name: 'BuildingManagement',
    component: () =>
      import('@/views/developer_module/propertyManagement/buildingManagement/index.vue') // 楼盘管理首页
  },
  // -------------------楼盘相册----------------
  {
    path: '/buildingPhotoAlbum/:communityId',
    name: 'BuildingPhotoAlbum',
    component: () =>
      import('@/views/developer_module/propertyManagement/buildingPhotoAlbum/index.vue') // 楼盘相册
  },
  // -------------------其他信息----------------
  {
    path: '/otherInformation/:communityId',
    name: 'OtherInformation',
    component: () =>
      import('@/views/developer_module/propertyManagement/otherInformation/index.vue') // 其他信息
  },
  // -------------------楼盘资讯--------------------
  {
    path: '/propertyInfo',
    name: 'PropertyInfo',
    component: () => import('@/views/developer_module/propertyManagement/propertyInfo') // 楼盘资讯首页
  },
  {
    path: '/releaseProperty',
    name: 'ReleaseProperty',
    meta: {
      routeName: '发布'
    },
    component: () =>
      import('@/views/developer_module/propertyManagement/propertyInfo/releaseProperty') // 楼盘资讯 发布
  },
  {
    path: '/propertyInfoDetail',
    name: 'PropertyInfoDetail',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/developer_module/propertyManagement/propertyInfo/detail') // // 楼盘资讯 详情
  },
  // -------------------楼盘户型--------------------
  {
    path: '/propertyHomeType/:communityId',
    name: 'PropertyHomeType',
    component: () => import('@/views/developer_module/propertyManagement/homeType') // 楼盘户型首页
  },
  {
    path: '/propertyHomeEdit',
    name: 'PropertyHomeEdit',
    meta: { routeName: '添加' },
    component: () => import('@/views/developer_module/propertyManagement/homeType/edit') // 楼盘户型首页
  },
  // -------------------物业合作--------------------
  {
    path: '/propertyCooperation/:communityId',
    name: 'PropertyCooperation',
    component: () =>
      import('@/views/developer_module/propertyManagement/propertyCooperation/index.vue') // 物业合作首页
  },
  // -----------------  房源销售管理   ---  start
  {
    path: '/houseSealesManagement/:communityId',
    name: 'HouseSealesManagement',
    meta: { routeName: '房源销售管理', keepalive: true },
    component: () => import('@/views/developer_module/houseManagement/houseSalesManagement.vue') // 房源销售管理
  },
  {
    path: '/houseSalesDetails',
    name: 'HouseSalesDetails',
    meta: { routeName: '房源销售管理' },
    component: () => import('@/views/developer_module/houseManagement/houseSalesDetails.vue') // 房源详情
  },
  // ------------------  房源销售管理   ---  end
  // ------------------  房源交房管理   ---  start
  {
    path: '/houseDistrictManagement/:communityId',
    name: 'HouseDistrictManagement',
    meta: { routeName: '房源交房管理', keepalive: true },
    component: () => import('@/views/developer_module/houseManagement/houseDistrictManagement.vue') // 房源交房管理
  },
  {
    path: '/houseDistrictDetails',
    name: 'HouseDistrictDetails',
    meta: { routeName: '房源交房管理' },
    component: () => import('@/views/developer_module/houseManagement/houseDistrictDetails.vue') // 房源详情
  },
  // ------------------  房源交房管理   ---  end
  // ------------------  销售管理   ---  start
  {
    path: '/salesManagement',
    name: 'SalesManagement',
    meta: { routeName: '销售管理', keepalive: true },
    component: () => import('@/views/developer_module/houseManagement/salesManagement') // 房源交房管理
  },
  {
    path: '/addSalesManagement',
    name: 'AddSalesManagement',
    meta: { routeName: '付款期限添加' },
    component: () =>
      import('@/views/developer_module/houseManagement/salesManagement/addSalesManagement.vue') // 房源详情
  },
  {
    path: '/paymentDetails',
    name: 'PaymentDetails',
    meta: { routeName: '付款期限详情' },
    component: () =>
      import('@/views/developer_module/houseManagement/salesManagement/paymentDetails.vue') // 付款期限详情
  },
  {
    path: '/paymentLog',
    name: 'PaymentLog',
    meta: { routeName: '付款期限维护记录' },
    component: () =>
      import('@/views/developer_module/houseManagement/salesManagement/paymentLog.vue') // 付款期限维护记录
  },
  {
    path: '/addPayment',
    name: 'AddPayment',
    meta: { routeName: '营销政策添加' },
    component: () =>
      import('@/views/developer_module/houseManagement/salesManagement/addPayment.vue') // 营销政策添加
  },
  // ------------------  销售管理   ---  end
  // -------------------------------------  房源评价   ---  start  ----------------------------------
  {
    path: '/housingEvaluation/:communityId',
    name: 'HousingEvaluation',
    component: () =>
      import('@/views/developer_module/propertyManagement/HousingEvaluation/index.vue'), // 房源评价
    children: [
      {
        path: 'tableList',
        name: 'HousingEvaluationTableList',
        meta: { routeName: '房源评价' },
        component: () =>
          import('@/views/developer_module/propertyManagement/HousingEvaluation/tableList.vue') // 列表页
      },
      {
        path: 'details',
        name: 'HousingEvaluationDetails',
        meta: { routeName: '详情' },
        component: () =>
          import('@/views/developer_module/propertyManagement/HousingEvaluation/details.vue') // 详情
      },
      {
        path: 'dealWith',
        name: 'HousingEvaluationDealWith',
        meta: { routeName: '处理' },
        component: () =>
          import('@/views/developer_module/propertyManagement/HousingEvaluation/details.vue') // 处理
      },
      {
        path: 'evaluation',
        name: 'HousingEvaluationEvaluation',
        meta: { routeName: '评价' },
        component: () =>
          import('@/views/developer_module/propertyManagement/HousingEvaluation/details.vue') // 评价
      }
    ]
  }
  // ------------------------------------------------------  楼盘管理   ---  end  -------------------------------------------------------------
]
