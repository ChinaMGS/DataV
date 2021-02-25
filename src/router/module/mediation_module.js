export default [
  // ---------------------------中介模块----------------------------

  // -----------------------------------------------建设工程规划许可证----start-----------------------------------------------
  // ---------------节能审查---------------
  {
    path: '/mediationEnergyAudit',
    name: 'MediationEnergyAudit',
    component: () => import('@/views/mediation_module/constructionProjectPlan_three/energyAudit') // 节能审查 政府审批中介
  },
  {
    path: '/mediationEnergyAuditDetails',
    name: 'MediationEnergyAuditDetails',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/mediation_module/constructionProjectPlan_three/energyAudit/energyAuditDetails.vue'
      ) // 节能审查 详情  政府审批中介
  },
  // ---------------环境影响报告书审批意见---------------
  {
    path: '/mediationInfluence',
    name: 'MediationInfluence',
    component: () => import('@/views/mediation_module/constructionProjectPlan_three/influence') // 水土保持方案报告
  },
  {
    path: '/mediationInfluenceDe',
    name: 'MediationInfluenceDe',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import('@/views/mediation_module/constructionProjectPlan_three/influence/influenceD.vue') // 环境影响报告书 详情
  },
  // ---------------水土保持方案报告---------------
  {
    path: '/mediationWaterPresentation',
    name: 'MediationWaterPresentation',
    component: () =>
      import('@/views/mediation_module/constructionProjectPlan_three/WaterPresentation') // 水土保持方案报告
  },
  {
    path: '/mediationWaterPresentationDe',
    name: 'MediationWaterPresentationDe',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/mediation_module/constructionProjectPlan_three/WaterPresentation/WaterPresentationD.vue'
      ) // 水土保持方案报告 详情
  },
  // ---------------日照分析报告---------------
  {
    path: '/mediationSunshineAnalysisReport',
    name: 'MediationSunshineAnalysisReport',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/mediation_module/constructionProjectPlan_three/sunshineAnalysisReport/index.vue'
      ) // 日照分析报告列表页
  },
  {
    path: '/mediationSunshineAnalysisReportApproval',
    name: 'MediationSunshineAnalysisReportApproval',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/mediation_module/constructionProjectPlan_three/sunshineAnalysisReport/approval.vue'
      ) // 日照分析报告审批页
  },
  {
    path: '/mediationSunshineAnalysisReportApprovalDetail',
    name: 'MediationSunshineAnalysisReportApprovalDetail',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/mediation_module/constructionProjectPlan_three/sunshineAnalysisReport/approval.vue'
      ) // 日照分析报告详情页
  },
  // ---------------交通影响评价---------------
  {
    path: '/mediationTrafficImpact',
    name: 'MediationTrafficImpact',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/mediation_module/constructionProjectPlan_three/trafficImpact/index.vue') // 交通影响评价报告列表页
  },
  {
    path: '/mediationTrafficImpactApproval',
    name: 'MediationTrafficImpactApproval',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import('@/views/mediation_module/constructionProjectPlan_three/trafficImpact/approval.vue') // 交通影响评价报告审批页
  },
  {
    path: '/mediationTrafficImpactApprovalDetail',
    name: 'MediationTrafficImpactApprovalDetail',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/mediation_module/constructionProjectPlan_three/trafficImpact/approvalDetail.vue'
      ) // 交通影响评价报告详情页
  },
  // -----------------------------------------------建设工程规划许可证----end-----------------------------------------------
  // -----------------------------------------------预售许可证阶段----start-----------------------------------------------
  // ---------测绘成果报告书-----------------
  {
    path: '/presaleSurveyDrawing',
    name: 'PresaleSurveyDrawing',
    component: () => import('@/views/mediation_module/presaleLicense/surveyDrawing')
  },
  {
    path: '/presaleSurveyDrawingDetail',
    name: 'PresaleSurveyDrawingDetail',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import('@/views/mediation_module/presaleLicense/surveyDrawing/surveyDrawingDetail.vue')
  },
  // -----------------------------------------------预售许可证阶段----end-----------------------------------------------
  // -----------------------------------------------施工许可证----start-----------------------------------------------
  // ---------施工图审查---------
  {
    path: '/mediationCDR',
    name: 'MediationCDR',
    component: () =>
      import(
        '@/views/mediation_module/constructionPermit_four/1_constructionDrawingReview/index.vue'
      ) // 施工图审查首页
  },
  {
    path: '/mediationCDRApproval',
    name: 'MediationCDRApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/constructionPermit_four/1_constructionDrawingReview/constructionDrawingReviewApproval.vue'
      ) // 施工图审查审批页
  },
  {
    path: '/MediationCDRDetails',
    name: 'MediationCDRDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/constructionPermit_four/1_constructionDrawingReview/constructionDrawingReviewApproval.vue'
      ) // 施工图审查详情页
  },
  // ----------施工图变更----------
  {
    path: '/mediationCDCApproval',
    name: 'MediationCDCApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/constructionPermit_four/2_constructionDrawingChange/constructionDrawingChangeApproval.vue'
      ) // 施工图变更审批页
  },
  {
    path: '/MediationCDCDetails',
    name: 'MediationCDCDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/constructionPermit_four/2_constructionDrawingChange/constructionDrawingChangeApproval.vue'
      ) // 施工图变更详情页
  },
  // ----------质监站建设工程受监----------
  {
    path: '/mediationCPC',
    name: 'MediationCPC',
    component: () =>
      import(
        '@/views/mediation_module/constructionPermit_four/5_constructionProjectCustody/index.vue'
      ) // 建设工程受监首页
  },
  {
    path: '/mediationCPCApproval',
    name: 'MediationCPCpproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/constructionPermit_four/5_constructionProjectCustody/constructionProjectCustodyApproval.vue'
      ) // 建设工程受监审批页
  },
  {
    path: '/MediationCPCDetails',
    name: 'MediationCPCDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/constructionPermit_four/5_constructionProjectCustody/constructionProjectCustodyApproval.vue'
      ) // 建设工程受监详情页
  },
  // ----------保障中心人防工程受监----------
  {
    path: '/mediationCPPAD',
    name: 'MediationCPPAD',
    component: () =>
      import('@/views/mediation_module/constructionPermit_four/6_constructionProjectPAD/index.vue') // 人防工程受监首页
  },
  {
    path: '/mediationCPPADApproval',
    name: 'MediationCPPADApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/constructionPermit_four/6_constructionProjectPAD/constructionProjectPADApproval.vue'
      ) // 人防工程受监审批页
  },
  {
    path: '/MediationCPPADDetails',
    name: 'MediationCPPADDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/constructionPermit_four/6_constructionProjectPAD/constructionProjectPADApproval.vue'
      ) // 人防工程受监详情页
  },
  // -----------------------------------------------施工许可证----end-------------------------------------------------
  // -----------------------------------------------中间验收----start-----------------------------------------------
  // ---------灰线验收---------
  {
    path: '/mediationGLA',
    name: 'MediationGLA',
    component: () =>
      import('@/views/mediation_module/middleAcceptance_six/1_grayLineAcceptance/index.vue') // 灰线验收首页
  },
  {
    path: '/mediationGLAApproval',
    name: 'MediationGLAApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/1_grayLineAcceptance/grayLineAcceptanceApproval.vue'
      ) // 灰线验收审批页
  },
  {
    path: '/MediationGLADetails',
    name: 'MediationGLADetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/1_grayLineAcceptance/grayLineAcceptanceApproval.vue'
      ) // 灰线验收详情页
  },
  // ---------桩基验收---------
  {
    path: '/mediationPMA',
    name: 'MediationPMA',
    component: () =>
      import('@/views/mediation_module/middleAcceptance_six/2_plieMachineAcceptance/index.vue') // 桩基验收首页
  },
  {
    path: '/mediationPMAApproval',
    name: 'MediationPMAApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/2_plieMachineAcceptance/plieMachineAcceptanceApproval.vue'
      ) // 桩基验收审批页
  },
  {
    path: '/MediationPMADetails',
    name: 'MediationPMADetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/2_plieMachineAcceptance/plieMachineAcceptanceApproval.vue'
      ) // 桩基验收详情页
  },
  // ---------基坑验收---------
  {
    path: '/mediationFPA',
    name: 'MediationFPA',
    component: () =>
      import('@/views/mediation_module/middleAcceptance_six/3_foundationPitAcceptance/index.vue') // 基坑验收首页
  },
  {
    path: '/mediationFPAApproval',
    name: 'MediationFPAApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/3_foundationPitAcceptance/foundationPitAcceptance.vue'
      ) // 基坑验收审批页
  },
  {
    path: '/MediationFPADetails',
    name: 'MediationFPADetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/3_foundationPitAcceptance/foundationPitAcceptance.vue'
      ) // 基坑验收详情页
  },
  // ---------结构验收---------
  {
    path: '/mediationSA',
    name: 'MediationSA',
    component: () =>
      import('@/views/mediation_module/middleAcceptance_six/4_structureAcceptance/index.vue') // 结构验收首页
  },
  {
    path: '/mediationSAApproval',
    name: 'MediationSAApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/4_structureAcceptance/structureAcceptance.vue'
      ) // 结构验收审批页
  },
  {
    path: '/MediationSADetails',
    name: 'MediationSADetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/4_structureAcceptance/structureAcceptance.vue'
      ) // 结构验收详情页
  },
  // ---------竣工验收---------
  {
    path: '/mediationCA',
    name: 'MediationCA',
    component: () =>
      import('@/views/mediation_module/middleAcceptance_six/5_completionAcceptance/index.vue') // 竣工验收首页
  },
  {
    path: '/mediationCApproval',
    name: 'MediationCApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/5_completionAcceptance/completionAcceptance.vue'
      ) // 竣工验收审批页
  },
  {
    path: '/MediationCDetails',
    name: 'MediationCDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/5_completionAcceptance/completionAcceptance.vue'
      ) // 竣工验收详情页
  },
  // ---------正负零零验收---------
  {
    path: '/mediationPNZZA',
    name: 'MediationPNZZA',
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/6_positiveNegativeZZAcceptance/index.vue'
      ) // 正负零零验收首页
  },
  {
    path: '/mediationPNZZApproval',
    name: 'MediationPNZZApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/6_positiveNegativeZZAcceptance/positiveNegativeZZAcceptance.vue'
      ) // 正负零零验收审批页
  },
  {
    path: '/MediationPNZZDetails',
    name: 'MediationPNZZDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/middleAcceptance_six/6_positiveNegativeZZAcceptance/positiveNegativeZZAcceptance.vue'
      ) // 正负零零验收详情页
  },
  // ------------------------------------------------------  综合验收第一阶段   ---  start  -------------------------------------------------------------
  // ---------规划验收---------
  {
    path: '/mediationPlaningAcceptanceApprovalList',
    name: 'MediationPlaningAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/planingAcceptance/approvalList.vue') // 规划验收审批列表
  },
  {
    path: '/mediationPlaningAcceptanceApproval',
    name: 'MediationPlaningAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/planingAcceptance/approval.vue') // 规划验收审批页
  },
  {
    path: '/mediationPlaningAcceptanceApprovalDetail',
    name: 'MediationPlaningAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/planingAcceptance/approval.vue') // 规划验收详情页
  },
  // ---------绿化验收---------
  {
    path: '/mediationGreeningAcceptanceApprovalList',
    name: 'MediationGreeningAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/greeningAcceptance/approvalList.vue') // 绿化验收审批列表
  },
  {
    path: '/mediationGreeningAcceptanceApproval',
    name: 'MediationGreeningAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/greeningAcceptance/approval.vue') // 园文局绿化验收审批页
  },
  {
    path: '/mediationGreeningAcceptanceApprovalDetail',
    name: 'MediationGreeningAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/greeningAcceptance/approval.vue') // 园文局绿化验收详情页
  },
  // ---------防雷验收---------
  {
    path: '/mediationProtectiveRayAcceptanceApprovalList',
    name: 'MediationProtectiveRayAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/mediation_module/comprehensiveOne_ seven/protectiveRayAcceptance/approvalList.vue'
      ) // 防雷验收审批列表
  },
  {
    path: '/mediationProtectiveRayAcceptanceApproval',
    name: 'MediationProtectiveRayAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/comprehensiveOne_ seven/protectiveRayAcceptance/approval.vue'
      ) // 气象局防雷验收审批页
  },
  {
    path: '/mediationProtectiveRayAcceptanceApprovalDetail',
    name: 'MediationProtectiveRayAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/comprehensiveOne_ seven/protectiveRayAcceptance/approval.vue'
      ) // 气象局防雷验收详情页
  },
  // ---------室内空气质量检测---------
  {
    path: '/mediationIndoorAirAcceptanceApprovalList',
    name: 'MediationIndoorAirAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/indoorAir/approvalList.vue') // 室内空气质量检测审批列表
  },
  {
    path: '/mediationIndoorAirAcceptanceApproval',
    name: 'MediationIndoorAirAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/indoorAir/approval.vue') // 中介---审批页
  },
  {
    path: '/mediationIndoorAirAcceptanceApprovalDetail',
    name: 'MediationIndoorAirAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/indoorAir/approval.vue') // 中介---详情页
  },
  // ---------生活用水水质检测验收---------
  {
    path: '/mediationLifeWaterAcceptanceApprovalList',
    name: 'MediationLifeWaterAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/lifeWater/approvalList.vue') // 生活用水水质检测验收
  },
  {
    path: '/mediationLifeWaterAcceptanceApproval',
    name: 'MediationLifeWaterAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/lifeWater/approval.vue') // 中介---审批页
  },
  // ---------消防验收---------
  {
    path: '/mediationFireAcceptanceApprovalList',
    name: 'MediationFireAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/fireAcceptance/approvalList.vue') // 消防验收---审批列表
  },
  {
    path: '/mediationFireAcceptanceApproval',
    name: 'MediationFireAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/mediation_module/comprehensiveOne_ seven/fireAcceptance/approval.vue') // 中介---审批页
  },
  // ------------------------------------------------------  综合验收第一阶段   ---  end  ---------------------------------------------------------------
  // ------------------------------------------------------  综合验收第二阶段   ---  start  -------------------------------------------------------------
  // ---------房屋测绘成果报告书---------
  {
    path: '/mediationREM',
    name: 'MediationREM',
    component: () =>
      import(
        '@/views/mediation_module/comprehensiveAcceptance_seven_2/1_realEstateMapping/index.vue'
      ) // 房屋测绘成果报告书首页
  },
  {
    path: '/mediationREMApproval',
    name: 'MediationREMApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/comprehensiveAcceptance_seven_2/1_realEstateMapping/realEstateMappingApproval.vue'
      ) // 房屋测绘成果报告书审批页
  },
  {
    path: '/MediationREMDetails',
    name: 'MediationREMDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/comprehensiveAcceptance_seven_2/1_realEstateMapping/realEstateMappingApproval.vue'
      ) // 房屋测绘成果报告书详情页
  },
  // ---------宗地测绘报告---------
  {
    path: '/mediationLSR',
    name: 'MediationLSR',
    component: () =>
      import(
        '@/views/mediation_module/comprehensiveAcceptance_seven_2/4_landSurveyReport/index.vue'
      ) // 宗地测绘报告首页
  },
  {
    path: '/landSurveyReportApproval',
    name: 'LandSurveyReportApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/mediation_module/comprehensiveAcceptance_seven_2/4_landSurveyReport/landSurveyReportApproval.vue'
      ) // 宗地测绘报告审批页
  },
  {
    path: '/MediationLSRDetails',
    name: 'MediationLSRDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/mediation_module/comprehensiveAcceptance_seven_2/4_landSurveyReport/landSurveyReportApproval.vue'
      ) // 宗地测绘报告详情页
  }
  // ------------------------------------------------------  综合验收第二阶段   ---  end  ---------------------------------------------------------------
]
