export default [
  // ---------------------------政府模块----------------------------
  // ----------------------------------------------------------------标的物管理---start-----------------------------------------------------------------------------
  // ------------------------规自局标的物管理---------------------------------------------
  {
    path: '/landManagement',
    name: 'LandManagement',
    component: () =>
      import('@/views/government_module/landManagement_zero/landManagement/index.vue') // 标的物管理
  },

  {
    path: '/landManagementAdd',
    name: 'LandManagementAdd',
    meta: {
      routeName: '添加'
    },
    component: () =>
      import('@/views/government_module/landManagement_zero/landManagement/landManagementAdd.vue') // 标的物添加
  },
  {
    path: '/landManagementDetails',
    name: 'LandManagementDetails',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/government_module/landManagement_zero/landManagement/landManagementDetails.vue'
      ) // 标的物详情
  },
  {
    path: '/auctionRecord',
    name: 'AuctionRecord',
    meta: {
      routeName: '竞拍记录'
    },
    component: () =>
      import('@/views/government_module/landManagement_zero/landManagement/auctionRecord.vue') // 竞拍记录
  },
  // ------------------------规自局土拍保证金管理---------------------------
  {
    path: '/landMargin',
    name: 'LandMargin',
    component: () => import('@/views/government_module/landManagement_zero/landMargin/index.vue') // 土拍保证金管理
  },
  {
    path: '/landMarginDetails',
    name: 'LandMarginDetails',
    meta: {
      routeName: '土拍保证金详情'
    },
    component: () =>
      import('@/views/government_module/landManagement_zero/landMargin/landMarginDetails.vue') // 土拍保证金详情
  },
  // --------------------------规自局成交通知书-----------------------------
  {
    path: '/transactionNoticeGov',
    name: 'TransactionNoticeGov',
    component: () =>
      import('@/views/government_module/landManagement_zero/transactionNoticeGov/index.vue') // 规自局成交通知书首页
  },
  {
    path: '/transactionNoticeGovDetails',
    name: 'TransactionNoticeGovDetails',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/government_module/landManagement_zero/transactionNoticeGov/transactionNoticeGovDetails.vue'
      ) // 规自局成交通知书详情
  },
  {
    path: '/transactionNoticeGovSign',
    name: 'TransactionNoticeGovSign',
    meta: {
      routeName: '签约'
    },
    component: () =>
      import(
        '@/views/government_module/landManagement_zero/transactionNoticeGov/transactionNoticeGovSign.vue'
      ) // 规自局成交通知书详情
  },

  // -----------------------------规自局土地出让合同------------------------
  {
    path: '/landContractGov',
    name: 'LandContractGov',
    component: () =>
      import('@/views/government_module/landManagement_zero/landContractGov/index.vue') // 规自局土地出让合同首页
  },
  {
    path: '/landContractGovApproval',
    name: 'LandContractGovApproval',
    component: () =>
      import(
        '@/views/government_module/landManagement_zero/landContractGov/landContractGovApproval.vue'
      ) // 规自局土地出让合同审批页面
  },
  // ----------------------------------------------------------------标的物管理---end-----------------------------------------------------------------------------
  // ---------------------------------证件审批--------------------建设用地规划阶段证件审批-----------------
  {
    path: '/projectFilesApprovalList',
    name: 'ProjectFilesApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/government_module/constructionLandPlan_one/projectFilesApprovalList.vue') // 发改委审批---立项文件审批列表
  },
  {
    path: '/projectFilesApproval',
    name: 'ProjectFilesApproval',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import('@/views/government_module/constructionLandPlan_one/projectFilesApproval.vue') // 发改委审批---立项文件审批页面
  },
  {
    path: '/landPlanLicenseApprovalList',
    name: 'LandPlanLicenseApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/government_module/constructionLandPlan_one/landPlanLicenseApprovalList.vue') // 规自局审批---建设用地规划许可证审批列表
  },
  {
    path: '/landPlanLicenseApproval',
    name: 'LandPlanLicenseApproval',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import('@/views/government_module/constructionLandPlan_one/landPlanLicenseApproval.vue') // 规自局审批---建设用地规划许可证审批页面审批页面
  },

  {
    path: '/landApprovalApprovalList',
    name: 'LandApprovalApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/government_module/constructionLandPlan_one/landApprovalApprovalList.vue') // 规自局审批---建设用地批准书审批列表
  },
  {
    path: '/landApprovalApproval',
    name: 'LandApprovalApproval',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import('@/views/government_module/constructionLandPlan_one/landApprovalApproval.vue') // 规自局审批---建设用地批准书审批页面
  },
  // ----------------------------------------------------------不动产权证-------申请阶段----start-----------------------------------------------------------------------
  // -----------------------------税务局---------------------------------
  {
    path: '/deedTaxPaymentGov',
    name: 'DeedTaxPaymentGov',
    component: () =>
      import('@/views/government_module/realEstateCertificate_two/deedTaxPayment/index.vue') // 契税完税证明首页
  },
  {
    path: '/deedTaxPaymentApproval',
    name: 'DeedTaxPaymentApproval',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/government_module/realEstateCertificate_two/deedTaxPayment/deedTaxPaymentApproval.vue'
      ) // 契税完税证明审批页
  },
  {
    path: '/deedTaxPaymentDetails',
    name: 'DeedTaxPaymentDetails',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/government_module/realEstateCertificate_two/deedTaxPayment/deedTaxPaymentDetails.vue'
      ) // 契税完税证明详情页
  },
  // ---------------------------规自局土地出让金收据------------------------
  {
    path: '/landMoneyReceiptGov',
    name: 'LandMoneyReceiptGov',
    component: () =>
      import('@/views/government_module/realEstateCertificate_two/landMoneyReceiptGov/index.vue') // 规自局土地出让金收据首页
  },
  {
    path: '/landMoneyReceiptGovApproval',
    name: 'LandMoneyReceiptGovApproval',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/government_module/realEstateCertificate_two/landMoneyReceiptGov/landMoneyReceiptGovApproval.vue'
      ) // 规自局土地出让金收据审批页
  },
  // --------------------------规自局不动产权证-地块----------------------------------
  {
    path: '/realEstateCertificateGov',
    name: 'RealEstateCertificateGov',
    component: () =>
      import('@/views/government_module/realEstateCertificate_two/realEstateCertificate/index.vue') // 规自局不动产权证-地块首页
  },
  {
    path: '/realEstateCertificateApproval',
    name: 'RealEstateCertificateApproval',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/government_module/realEstateCertificate_two/realEstateCertificate/realEstateCertificateApproval.vue'
      ) // 规自局不动产权证-地块审批页
  },
  {
    path: '/realEstateCertificateDetails',
    name: 'RealEstateCertificateDetails',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/government_module/realEstateCertificate_two/realEstateCertificate/realEstateCertificateDetails.vue'
      ) // 规自局不动产权证-地块详情页
  },
  // ----------------------------------------------------------不动产权证-------申请阶段----end-----------------------------------------------------------------------
  // ----------------------------------------------------------建设工程规划许可证-------申请阶段----start-----------------------------------------------------------------------
  // --------------建委  节能审查意见书
  {
    path: '/jwEnergyAudit',
    name: 'JwEnergyAudit',
    component: () => import('@/views/government_module/constructionProjectPlan_three/energyAudit') // 节能审查意见书---列表页
  },
  {
    path: '/jwEnergyAuditDetails',
    name: 'JwEnergyAuditDetails',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/energyAudit/energyAuditDetails.vue'
      ) // 节能审查意见书---详情页
  },
  // --------------环境局  环境影响报告书审批意见
  {
    path: '/hjInfluence',
    name: 'HjInfluence',
    component: () => import('@/views/government_module/constructionProjectPlan_three/influence') // 环境影响报告书审批意见---列表页
  },
  {
    path: '/hjInfluenceDetails',
    name: 'HjInfluenceDetails',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/influence/influenceDetails.vue'
      ) // 环境影响报告书审批意见---详情页
  },
  // --------------林水局  水土保持方案报告审批意见
  {
    path: '/lsjWaterApproval',
    name: 'LsjWaterApproval',
    component: () => import('@/views/government_module/constructionProjectPlan_three/waterApproval') // 水土保持方案报告审批意见---列表页
  },
  {
    path: '/lsWaterApprovalDetails',
    name: 'LsWaterApprovalDetails',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/waterApproval/waterApprovalDetails.vue'
      ) // 水土保持方案报告审批意见---详情页
  },

  // --------------日照分析报告
  {
    path: '/sunshineAnalysisReportListGov',
    name: 'SunshineAnalysisReportListGov',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/sunshineAnalysisReport/approvalList.vue'
      ) // 规自局日照分析报告---列表页
  },
  {
    path: '/sunshineAnalysisReportDetailsGov',
    name: 'SunshineAnalysisReportDetailsGov',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/sunshineAnalysisReport/approvalDetails.vue'
      ) // 规自局日照分析报告---详情页
  },
  // --------------交通影响评价
  {
    path: '/trafficImpactApprovalListGov',
    name: 'TrafficImpactApprovalListGov',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/trafficImpact/approvalList.vue'
      ) // 交通支队--交通影响评价---列表页
  },
  {
    path: '/trafficImpactApprovalGov',
    name: 'TrafficImpactApprovalGov',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import('@/views/government_module/constructionProjectPlan_three/trafficImpact/approval.vue') // 交通支队--交通影响评价---审批页
  },
  {
    path: '/trafficImpactApprovalDetailGov',
    name: 'TrafficImpactApprovalDetailGov',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import('@/views/government_module/constructionProjectPlan_three/trafficImpact/approval.vue') // 交通支队--交通影响评价---详情页
  },
  // --------------人防工程面积审批意见
  {
    path: '/defenceProjectAreaListGov',
    name: 'DefenceProjectAreaListGov',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/defenceProjectArea/approvalList.vue'
      ) // 人防办--人防工程面积审批意见---列表页
  },
  {
    path: '/defenceProjectAreaApprovalGov',
    name: 'DefenceProjectAreaApprovalGov',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/defenceProjectArea/approval.vue'
      ) // 人防办--人防工程面积审批意见---审批页
  },
  {
    path: '/defenceProjectAreaApprovalDetailGov',
    name: 'DefenceProjectAreaApprovalDetailGov',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/defenceProjectArea/approvalDetail.vue'
      ) // 人防办--人防工程面积审批意见---详情页
  },
  // --------------设计方案批复
  {
    path: '/designProposalApprovalListGov',
    name: 'DesignProposalApprovalListGov',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/designProposalApproval/approvalList.vue'
      ) // 规自局设计方案批复---列表页
  },
  {
    path: '/designProposalApprovalGov',
    name: 'DesignProposalApprovalGov',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/designProposalApproval/approval.vue'
      ) // 规自局设计方案批复---审批页
  },
  {
    path: '/designProposalApprovalDetailGov',
    name: 'DesignProposalApprovalDetailGov',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/designProposalApproval/approvalDetail.vue'
      ) // 规自局设计方案批复---详情页
  },
  // --------------初步设计方案批复
  {
    path: '/preliminaryDesignSchemeListGov',
    name: 'PreliminaryDesignSchemeListGov',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/preliminaryDesignScheme/approvalList.vue'
      ) // 初步设计方案批复---规自局审批---列表页
  },
  {
    path: '/preliminaryDesignSchemeGov',
    name: 'PreliminaryDesignSchemeGov',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/preliminaryDesignScheme/approval.vue'
      ) // 初步设计方案批复---规自局---审批页
  },
  {
    path: '/preliminaryDesignSchemeDetailGov',
    name: 'PreliminaryDesignSchemeDetailGov',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/preliminaryDesignScheme/approvalDetail.vue'
      ) // 初步设计方案批复---规自局---详情页
  },
  {
    path: '/preliminaryDesignSchemeListMoreDepartmentsGov',
    name: 'PreliminaryDesignSchemeListMoreDepartmentsGov',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/preliminaryDesignScheme/approvalListMoreDepartments.vue'
      ) // 初步设计联合审查---多部门---列表页
  },
  {
    path: '/preliminaryDesignSchemeMoreDepartmentsGov',
    name: 'PreliminaryDesignSchemeMoreDepartmentsGov',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/preliminaryDesignScheme/approvalMoreDepartments.vue'
      ) // 初步设计联合审查---多部门---审批页
  },
  {
    path: '/preliminaryDesignSchemeMoreDepartmentsDetailGov',
    name: 'PreliminaryDesignSchemeMoreDepartmentsDetailGov',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/preliminaryDesignScheme/approvalMoreDepartmentDetail.vue'
      ) // 初步设计联合审查---多部门---详情页
  },
  // --------------建设工程规划许可证
  {
    path: '/constructionProjectApprovalListGov',
    name: 'ConstructionProjectApprovalListGov',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/constructionProject/approvalList.vue'
      ) // 建设工程规划许可证---规自局审批---列表页
  },
  {
    path: '/constructionProjectApprovalGov',
    name: 'ConstructionProjectApprovalGov',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/constructionProject/approval.vue'
      ) // 建设工程规划许可证---规自局---审批页
  },
  {
    path: '/constructionProjectApprovalDetailGov',
    name: 'ConstructionProjectApprovalDetailGov',
    meta: {
      routeName: '详情'
    },
    component: () =>
      import(
        '@/views/government_module/constructionProjectPlan_three/constructionProject/approvalDetail.vue'
      ) // 建设工程规划许可证---规自局---详情页
  },
  // ----------------------------------------------------------------------施工许可证-------start-----------------------------------------------------------------------
  // ---------------------1_施工图审查----------------------
  // ---------建设项目设计卫生审查
  {
    path: '/CPDHRIndex',
    name: 'CPDHRIndex',
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/1_constructionDrawingReview/CPDHRIndex.vue'
      ) // 施工图审查(建设项目设计卫生审查)首页
  },
  {
    path: '/CPDHRApproval',
    name: 'CPDHRApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/1_constructionDrawingReview/CPDHRApproval.vue'
      ) // 施工图审查(建设项目设计卫生审查)审批页
  },
  {
    path: '/CPDHRDetails',
    name: 'CPDHRDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/1_constructionDrawingReview/CPDHRApproval.vue'
      ) // 施工图审查(建设项目设计卫生审查)详情页
  },
  // ---------施工图审查-备案
  {
    path: '/CDRIndex',
    name: 'CDRIndex',
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/1_constructionDrawingReview/CDRIndex.vue'
      ) // 施工图审查(备案)首页
  },
  {
    path: '/CDRApproval',
    name: 'CDRApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/1_constructionDrawingReview/CDRApproval.vue'
      ) // 施工图审查(备案)审批页
  },
  {
    path: '/CDRDetails',
    name: 'CDRDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/1_constructionDrawingReview/CDRApproval.vue'
      ) // 施工图审查(备案)详情页
  },
  // -----------建设工程消防设计审核
  {
    path: '/CPFIndex',
    name: 'CPFIndex',
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/3_constructionProjectFile/index.vue'
      ) // 建设工程消防设计审核首页
  },
  {
    path: '/CPFApproval',
    name: 'CPFApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/3_constructionProjectFile/CPFApproval.vue'
      ) // 建设工程消防设计审核审批页
  },
  {
    path: '/CPFDetails',
    name: 'CPFDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/3_constructionProjectFile/CPFApproval.vue'
      ) // 建设工程消防设计审核详情页
  },
  // -----------建设工程人防设计审核
  {
    path: '/CPCIndex',
    name: 'CPCIndex',
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/4_constructionProjectCivil/index.vue'
      ) // 建设工程消防设计审核首页
  },
  {
    path: '/CPCApproval',
    name: 'CPCApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/4_constructionProjectCivil/CPCApproval.vue'
      ) // 建设工程人防设计审核审批页
  },
  {
    path: '/CPCDetails',
    name: 'CPCDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/4_constructionProjectCivil/CPCApproval.vue'
      ) // 建设工程人防设计审核详情页
  },
  // -----------建设工程受监
  {
    path: '/CPCustodyIndex',
    name: 'CPCustodyIndex',
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/5_constructionProjectCustody/index.vue'
      ) // 建设工程受监首页
  },
  {
    path: '/CPCustodyDetails',
    name: 'CPCustodyDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/5_constructionProjectCustody/CPCustodyApproval.vue'
      ) // 建设工程受监详情页
  },
  // -----------人防工程受监
  {
    path: '/CPPADIndex',
    name: 'CPPADIndex',
    component: () =>
      import('@/views/government_module/constructionPermit_four/6_constructionProjectPAD/index.vue') // 人防工程受监首页
  },
  {
    path: '/CPPADDetails',
    name: 'CPPADDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/6_constructionProjectPAD/CPPADApproval.vue'
      ) // 人防工程受监详情页
  },
  // -----------施工许可证
  {
    path: '/CPIndex',
    name: 'CPIndex',
    component: () =>
      import('@/views/government_module/constructionPermit_four/7_constructionPermit/index.vue') // 施工许可证首页
  },
  {
    path: '/CPApproval',
    name: 'CPApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/7_constructionPermit/CPApproval.vue'
      ) // 施工许可证审批页
  },
  {
    path: '/CPDetails',
    name: 'CPDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/7_constructionPermit/CPApproval.vue'
      ) // 施工许可证详情页
  },
  // -----------地名使用批准书
  {
    path: '/placeNameIndex',
    name: 'PlaceNameIndex',
    component: () =>
      import('@/views/government_module/constructionPermit_four/8_placeNameApproval/index.vue') // 地名使用批准书首页
  },
  {
    path: '/placeNameApprovalGov',
    name: 'PlaceNameApprovalGov',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/8_placeNameApproval/placeNameApproval.vue'
      ) // 地名使用批准书审批页
  },
  {
    path: '/placeNameDetailsGov',
    name: 'PlaceNameDetailsGov',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/constructionPermit_four/8_placeNameApproval/placeNameApproval.vue'
      ) // 地名使用批准书详情页
  },
  // ----------------------------------------------------------------------施工许可证-------end-----------------------------------------------------------------------
  // ----------------------------------------------------------预售许可证阶段-------申请阶段----start-----------------------------------------------------------------------
  // ------------测绘成果报告书备案(房管局)
  {
    path: '/gmSurveyDrawing',
    name: 'GmSurveyDrawing',
    component: () => import('@/views/government_module/presaleLicense/surveyDrawing')
  },
  {
    path: '/gmSurveyDrawingDetail',
    name: 'GmSurveyDrawingDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/government_module/presaleLicense/surveyDrawing/drawingDetail.vue')
  },
  // ------------预售许可证(房管局)
  {
    path: '/gmPresaleLiceses',
    name: 'GmPresaleLiceses',
    component: () => import('@/views/government_module/presaleLicense/presaleLiceses')
  },
  {
    path: '/gmPresaleLicesesDetail',
    name: 'GmPresaleLicesesDetail',
    component: () =>
      import('@/views/government_module/presaleLicense/presaleLiceses/presaleLicesesDetail')
  },
  // ------------商品房买卖合同样本(市场监督管理局)
  {
    path: '/gmSampleContract',
    name: 'GmSampleContract',
    component: () => import('@/views/government_module/presaleLicense/sampleContract')
  },
  {
    path: '/gmSampleContractDetail',
    name: 'GmSampleContractDetail',
    component: () => import('@/views/government_module/presaleLicense/sampleContract/detail')
  },

  // ----------------------------------------------------------预售许可证阶段-------申请阶段----end-----------------------------------------------------------------------
  // ----------------------------------------------------------组合贷-------申请阶段----start-----------------------------------------------------------------------
  // ------------公积金中心 委贷合作审批
  {
    path: '/fundEntrustedLoan',
    name: 'FundEntrustedLoan',
    component: () =>
      import('@/views/government_module/portfolioLoan/accumulationFund/entrustedLoan')
  },
  {
    path: '/fundEntrustedLoanDetail',
    name: 'FundEntrustedLoanDetail',
    component: () =>
      import('@/views/government_module/portfolioLoan/accumulationFund/entrustedLoan/detail')
  },
  // ------------公积金中心 合作银行
  {
    path: '/fundCooperativeBank',
    name: 'FundCooperativeBank',
    component: () =>
      import('@/views/government_module/portfolioLoan/accumulationFund/cooperativeBank')
  },
  {
    path: '/fundCooperativeBankAdd',
    name: 'FundCooperativeBankAdd',
    meta: { routeName: '添加' },
    component: () =>
      import('@/views/government_module/portfolioLoan/accumulationFund/cooperativeBank/addBank') // 添加
  },
  // ----------------------------------------------------------预售许可证阶段-------申请阶段----end-----------------------------------------------------------------------
  // ----------------------------------------------------------------------中间验收-------start-----------------------------------------------------------------------
  // ------------灰线验收
  {
    path: '/GLAIndex',
    name: 'GLAIndex',
    component: () =>
      import('@/views/government_module/middleAcceptance_six/1_grayLineAcceptance/index.vue') // 灰线验收首页
  },
  {
    path: '/GLADetails',
    name: 'GLADetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/middleAcceptance_six/1_grayLineAcceptance/grayLineAcceptanceApproval.vue'
      ) // 灰线验收详情页
  },
  // ------------桩基验收
  {
    path: '/PMAIndex',
    name: 'PMAIndex',
    component: () =>
      import('@/views/government_module/middleAcceptance_six/2_plieMachineAcceptance/index.vue') // 桩基验收首页
  },
  {
    path: '/PMADetails',
    name: 'PMADetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/middleAcceptance_six/2_plieMachineAcceptance/plieMachineAcceptanceApproval.vue'
      ) // 桩基验收详情页
  },
  // ------------基坑验收
  {
    path: '/FPAIndex',
    name: 'FPAIndex',
    component: () =>
      import('@/views/government_module/middleAcceptance_six/3_foundationPitAcceptance/index.vue') // 基坑验收首页
  },
  {
    path: '/FPADetails',
    name: 'FPADetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/middleAcceptance_six/3_foundationPitAcceptance/foundationPitAcceptanceApproval.vue'
      ) // 基坑验收详情页
  },
  // ------------结构验收
  {
    path: '/SAIndex',
    name: 'SAIndex',
    component: () =>
      import('@/views/government_module/middleAcceptance_six/4_structureAcceptance/index.vue') // 结构验收首页
  },
  {
    path: '/SADetails',
    name: 'SADetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/middleAcceptance_six/4_structureAcceptance/structureAcceptanceApproval.vue'
      ) // 结构验收详情页
  },
  // ------------竣工验收
  {
    path: '/CAIndex',
    name: 'CAIndex',
    component: () =>
      import('@/views/government_module/middleAcceptance_six/5_completionAcceptance/index.vue') // 竣工验收首页
  },
  {
    path: '/CADetails',
    name: 'CADetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/middleAcceptance_six/5_completionAcceptance/completionAcceptanceApproval.vue'
      ) // 竣工验收详情页
  },
  // ------------正负零零验收
  {
    path: '/PNZZAIndex',
    name: 'PNZZAIndex',
    component: () =>
      import(
        '@/views/government_module/middleAcceptance_six/6_positiveNegativeZZAcceptance/index.vue'
      ) // 正负零零验收首页
  },
  {
    path: '/PNZZADetails',
    name: 'PNZZADetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/middleAcceptance_six/6_positiveNegativeZZAcceptance/positiveNegativeZZAcceptanceApproval.vue'
      ) // 正负零零验收详情页
  },
  // ----------------------------------------------------------------------中间验收-------end-----------------------------------------------------------------------

  // ------------------------------------------------------  综合验收第一阶段   ---  start  -------------------------------------------------------------
  // ------------交通验收
  {
    path: '/trafficAcceptanceApprovalList',
    name: 'TrafficAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/government_module/comprehensiveOne_ seven/trafficAcceptance_one/approvalList.vue'
      ) // 交通验收审批列表
  },
  {
    path: '/trafficAcceptanceApproval',
    name: 'TrafficAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/trafficAcceptance_one/approval.vue') // 交通验收审批页
  },
  {
    path: '/trafficAcceptanceApprovalDetail',
    name: 'TrafficAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/trafficAcceptance_one/approval.vue') // 交通验收详情页
  },
  // ------------规划验收--规自局
  {
    path: '/planingAcceptanceApprovalList',
    name: 'PlaningAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/planingAcceptance/approvalList.vue') // 规划验收审批列表
  },
  {
    path: '/planingAcceptanceApproval',
    name: 'PlaningAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/planingAcceptance/approval.vue') // 规划验收审批页
  },
  {
    path: '/planingAcceptanceApprovalDetail',
    name: 'PlaningAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/planingAcceptance/approval.vue') // 规划验详情批页
  },
  // ------------绿化验收--园文局
  {
    path: '/greeningAcceptanceApprovalList',
    name: 'GreeningAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/government_module/comprehensiveOne_ seven/greeningAcceptance/approvalList.vue'
      ) // 绿化验收审批列表
  },
  {
    path: '/greeningAcceptanceApproval',
    name: 'GreeningAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/greeningAcceptance/approval.vue') // 园文局绿化验收审批页
  },
  {
    path: '/greeningAcceptanceApprovalDetail',
    name: 'GreeningAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/greeningAcceptance/approval.vue') // 园文局绿化验收详情页
  },
  // ------------防雷验收--气象局
  {
    path: '/protectiveRayAcceptanceApprovalList',
    name: 'ProtectiveRayAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/government_module/comprehensiveOne_ seven/protectiveRayAcceptance/approvalList.vue'
      ) // 防雷验收审批列表
  },
  {
    path: '/protectiveRayAcceptanceApproval',
    name: 'ProtectiveRayAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/government_module/comprehensiveOne_ seven/protectiveRayAcceptance/approval.vue'
      ) // 气象局防雷验收审批页
  },
  {
    path: '/protectiveRayAcceptanceApprovalDetail',
    name: 'ProtectiveRayAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/comprehensiveOne_ seven/protectiveRayAcceptance/approval.vue'
      ) // 气象局防雷验收详情页
  },
  // ------------水土保持设施验收--林水局
  {
    path: '/waterLandAcceptanceApprovalList',
    name: 'WaterLandAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import(
        '@/views/government_module/comprehensiveOne_ seven/waterLandAcceptance/approvalList.vue'
      ) // 水土保持设施验收审批列表
  },
  {
    path: '/waterLandAcceptanceApproval',
    name: 'WaterLandAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/waterLandAcceptance/approval.vue') // 林水局水土保持设施验收审批页
  },
  {
    path: '/waterLandAcceptanceApprovalDetail',
    name: 'WaterLandAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/waterLandAcceptance/approval.vue') // 林水局水土保持设施验收详情页
  },
  // ------------消防验收--建委
  {
    path: '/fireAcceptanceApprovalList',
    name: 'FireAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/fireAcceptance/approvalList.vue') // 消防验收审批列表
  },
  {
    path: '/fireAcceptanceApproval',
    name: 'FireAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/fireAcceptance/approval.vue') // 消防验收审批页
  },
  {
    path: '/fireAcceptanceApprovalDetail',
    name: 'FireAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/fireAcceptance/approval.vue') // 消防验收详情页
  },
  // ------------人防工程竣工验收--人防办
  {
    path: '/projectCompletionAcceptanceApprovalList',
    name: 'ProjectCompletionAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/projectCompletion/approvalList.vue') // 人防工程竣工验收审批列表
  },
  {
    path: '/projectCompletionAcceptanceApproval',
    name: 'ProjectCompletionAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/projectCompletion/approval.vue') // 人防工程竣工验收审批页
  },
  {
    path: '/projectCompletionAcceptanceApprovalDetail',
    name: 'ProjectCompletionAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/projectCompletion/approval.vue') // 人防工程竣工验收详情页
  },
  // ------------《人防工程质监验收》--保障中心
  {
    path: '/projectQualityAcceptanceApprovalList',
    name: 'ProjectQualityAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/projectQuality/approvalList.vue') // 人防工程质监验收审批列表
  },
  {
    path: '/projectQualityAcceptanceApproval',
    name: 'ProjectQualityAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/projectQuality/approval.vue') // 人防工程质监验收审批页
  },
  {
    path: '/projectQualityAcceptanceApprovalDetail',
    name: 'ProjectQualityAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/projectQuality/approval.vue') // 人防工程质监验收详情页
  },
  // ------------地名标志验收--民政局
  {
    path: '/landMarkAcceptanceApprovalList',
    name: 'LandMarkAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/landMark/approvalList.vue') // 地名标志验收审批列表
  },
  {
    path: '/landMarkAcceptanceApproval',
    name: 'LandMarkAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/landMark/approval.vue') // 地名标志验收审批页
  },
  {
    path: '/landMarkAcceptanceApprovalDetail',
    name: 'LandMarkAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/landMark/approval.vue') // 地名标志验收详情页
  },
  // ------------卫生验收--卫健委
  {
    path: '/healthAcceptanceApprovalList',
    name: 'HealthAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/healthAcceptance/approvalList.vue') // 卫生验收审批列表
  },
  {
    path: '/healthAcceptanceApproval',
    name: 'HealthAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/healthAcceptance/approval.vue') // 卫生验收审批页
  },
  {
    path: '/healthAcceptanceApprovalDetail',
    name: 'HealthAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/healthAcceptance/approval.vue') // 卫生验收详情页
  },
  // ------------邮政设施验收--邮政局
  {
    path: '/postalAcceptanceApprovalList',
    name: 'PostalAcceptanceApprovalList',
    meta: {
      keepalive: true
    },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/postalAcceptance/approvalList.vue') // 邮政设施验收审批列表
  },
  {
    path: '/postalAcceptanceApproval',
    name: 'PostalAcceptanceApproval',
    meta: { routeName: '审批' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/postalAcceptance/approval.vue') // 邮政设施验收审批页
  },
  {
    path: '/postalAcceptanceApprovalDetail',
    name: 'PostalAcceptanceApprovalDetail',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/government_module/comprehensiveOne_ seven/postalAcceptance/approval.vue') // 邮政设施验收详情页
  },
  // ------------------------------------------------------  综合验收第一阶段   ---  end  ---------------------------------------------------------------
  // ------------------------------------------------------  综合验收第二阶段   ---  start  -------------------------------------------------------------
  // ------------房产实测绘
  {
    path: '/REMIndex',
    name: 'REMIndex',
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/1_realEstateMapping/index.vue'
      ) // 房产实测绘首页
  },
  {
    path: '/REMDetails',
    name: 'REMDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/1_realEstateMapping/realEstateMappingApproval.vue'
      ) // 房产实测绘详情页
  },
  // ------------物业维修基金
  {
    path: '/PMFIndex',
    name: 'PMFIndex',
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/2_propertyMaintenanceFund/index.vue'
      ) // 物业维修基金首页
  },
  {
    path: '/PMFApproval',
    name: 'PMFApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/2_propertyMaintenanceFund/propertyMaintenanceFundApproval.vue'
      ) // 物业维修基金审批页
  },
  {
    path: '/PMFDetails',
    name: 'PMFDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/2_propertyMaintenanceFund/propertyMaintenanceFundApproval.vue'
      ) // 物业维修基金详情页
  },
  // ------------竣工验收备案
  {
    path: '/CARIndex',
    name: 'CARIndex',
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/3_completionAcceptanceRecord/index.vue'
      ) // 竣工验收备案首页
  },
  {
    path: '/CARApproval',
    name: 'CARApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/3_completionAcceptanceRecord/CARApproval.vue'
      ) // 竣工验收备案审批页
  },
  {
    path: '/CARDetails',
    name: 'CARDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/3_completionAcceptanceRecord/CARApproval.vue'
      ) // 竣工验收备案详情页
  },
  // ------------宗地测绘报告
  {
    path: '/LSRIndex',
    name: 'LSRIndex',
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/4_landSurveyReport/index.vue'
      ) // 宗地测绘报告备案首页
  },
  {
    path: '/LSRDetails',
    name: 'LSRDetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/4_landSurveyReport/landSurveyReportApproval.vue'
      ) // 宗地测绘报告备案详情页
  },
  // ------------用地复核验收
  {
    path: '/SRAIndex',
    name: 'SRAIndex',
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/5_siteReviewAcceptance/index.vue'
      ) // 用地复核验收备案首页
  },
  {
    path: '/SRAApproval',
    name: 'SRAApproval',
    meta: { routeName: '审批' },
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/5_siteReviewAcceptance/SRAApproval.vue'
      ) // 用地复核验收备案审批页
  },
  {
    path: '/SRADetails',
    name: 'SRADetails',
    meta: { routeName: '详情' },
    component: () =>
      import(
        '@/views/government_module/comprehensiveAcceptance_seven_2/5_siteReviewAcceptance/SRAApproval.vue'
      ) // 用地复核验收备案详情页
  },
  // ------------------------------------------------------  综合验收第二阶段   ---  end  ---------------------------------------------------------------
  // ------------------------------------------------------  不动产权证 (房源)  ---  start  ---------------------------------------------------------------
  {
    path: '/realEstateRecord',
    name: 'RealEstateRecord',
    component: () => import('@/views/government_module/RealEstate')
  },
  {
    path: '/realEstateRecordApply',
    name: 'RealEstateRecordApply',
    meta: { routeName: '审批' },
    component: () => import('@/views/government_module/RealEstate/apply.vue')
  },
  // ------------------------------------------------------  不动产权证 (房源)   ---  end  ---------------------------------------------------------------
  // ------------------------------------------------------  契税管理  ---  start  ---------------------------------------------------------------
  {
    path: '/taxation',
    name: 'Taxation',
    component: () => import('@/views/government_module/delivery/taxation')
  },
  {
    path: '/taxationApply',
    name: 'TaxationApply',
    meta: { routeName: '审批' },
    component: () => import('@/views/government_module/delivery/taxation/apply.vue')
  },
  // ------------------------------------------------------  契税管理   ---  end  ---------------------------------------------------------------
  // ------------------------------------------------------  建设项目开发贷款监管  ---  start  ---------------------------------------------------------------
  {
    path: '/loanSupervision',
    name: 'LoanSupervision',
    component: () => import('@/views/government_module/delivery/loanSupervision')
  },
  {
    path: '/loanSupervisionIn',
    name: 'LoanSupervisionIn',
    meta: { routeName: '查看' },
    component: () => import('@/views/government_module/delivery/loanSupervision/inspect.vue')
  },
  // ------------------------------------------------------  建设项目开发贷款监管   ---  end  ---------------------------------------------------------------
  // ------------------------------------------------------  商品房预售款监管  ---  start  ---------------------------------------------------------------
  {
    path: '/saleSupervision',
    name: 'SaleSupervision',
    component: () => import('@/views/government_module/delivery/saleSupervision')
  },
  {
    path: '/saleSupervisionIn',
    name: 'SaleSupervisionIn',
    meta: { routeName: '查看' },
    component: () => import('@/views/government_module/delivery/saleSupervision/inspect.vue')
  },
  // ------------------------------------------------------  商品房预售款监管   ---  end  ---------------------------------------------------------------
  // ------------------------------------------------------  购房阶段   ---  start  ---------------------------------------------------------------
  // ------------抵押登记
  {
    path: '/mortgageReg',
    name: 'MortgageReg',
    component: () => import('@/views/government_module/housePurchase/mortgageReg')
  },
  {
    path: '/mortgageRegApp',
    name: 'MortgageRegApp',
    meta: { routeName: '审批' },
    component: () => import('@/views/government_module/housePurchase/mortgageReg/approval.vue')
  },
  // ------------公积金贷款审批
  {
    path: '/providentFund',
    name: 'ProvidentFund',
    component: () => import('@/views/government_module/housePurchase/providentFund')
  },
  {
    path: '/providentFundApp',
    name: 'ProvidentFundApp',
    meta: { routeName: '审批' },
    component: () => import('@/views/government_module/housePurchase/providentFund/approval.vue')
  },
  // ------------商品房买卖合同备案
  {
    path: '/businessContract',
    name: 'BusinessContract',
    component: () => import('@/views/government_module/housePurchase/businessContract')
  },
  {
    path: '/businessContractDe',
    name: 'BusinessContractDe',
    meta: { routeName: '详情' },
    component: () => import('@/views/government_module/housePurchase/businessContract/see.vue')
  }
  // ------------------------------------------------------  购房阶段   ---  end  ---------------------------------------------------------------
]
