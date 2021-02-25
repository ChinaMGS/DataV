export default [
  // ---------------------------银行模块----------------------------
  // // ----------------------------信誉分政策-------------------------------
  {
    path: '/creditScoreBank',
    name: 'CreditScoreBank',
    component: () => import('@/views/bank_module/creditPolicy') // 信誉分首页
  },
  {
    path: '/addCreditBank',
    name: 'AddCreditBank',
    meta: {
      routeName: '添加'
    },
    component: () => import('@/views/bank_module/creditPolicy/addCredit.vue') // 信誉分首页
  },
  {
    path: '/creditDetailBank',
    name: 'CreditDetailBank',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/bank_module/creditPolicy/creditDetail.vue') // 信誉分首页
  },

  // ------------------------------------------------------------项目贷款----start------------------------------------------------------------------
  // ---------------------银行支行 项目贷款授信额度合同
  {
    path: '/bankCreditLineContract',
    name: 'BankCreditLineContract',
    component: () => import('@/views/bank_module/projectLoan/bankBranch/creditLineContract.vue') // 信誉分首页
  },
  {
    path: '/bankCreditLineContractDetail',
    name: 'BankCreditLineContractDetail',
    meta: {
      routeName: '审批'
    },
    component: () =>
      import('@/views/bank_module/projectLoan/bankBranch/creditLineContractDetail.vue') // 信誉分首页
  },
  // ---------------------银行分行 综合授信报告
  {
    path: '/bankCreditbReport',
    name: 'BankCreditbReport',
    component: () => import('@/views/bank_module/projectLoan/subBranch/creditReport.vue') // 信誉分首页
  },
  {
    path: '/bankCreditReportDetail',
    name: 'BankCreditReportDetail',
    meta: {
      routeName: '审批'
    },
    component: () => import('@/views/bank_module/projectLoan/subBranch/creditReportDetail.vue') // 信誉分首页
  },
  // ------------------------------------------------------------项目贷款----end------------------------------------------------------------------
  // ------------------------------------------------------------合作银行审批----start------------------------------------------------------------------
  // ---------------------银行分行 合作银行审批
  {
    path: '/approvalCooperativeBank',
    name: 'ApprovalCooperativeBank',
    component: () => import('@/views/bank_module/portfolioLoan/approvalCooperativeBank') // 首页
  },
  {
    path: '/approvalCooperativeBankDetail',
    name: 'ApprovalCooperativeBankDetail',
    meta: {
      routeName: '审批'
    },
    component: () => import('@/views/bank_module/portfolioLoan/approvalCooperativeBank/detail.vue')
  },
  // ---------------------银行分行 机构管理
  {
    path: '/organizationalManagement',
    name: 'OrganizationalManagement',
    component: () => import('@/views/bank_module/portfolioLoan/organizationalManagement')
  },
  {
    path: '/organizationalManagementAdd',
    name: 'OrganizationalManagementAdd',
    meta: {
      routeName: '添加'
    },
    component: () =>
      import('@/views/bank_module/portfolioLoan/organizationalManagement/addOrganization.vue') // 添加
  },
  {
    path: '/organizationalManagementDetail',
    name: 'OrganizationalManagementDetail',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/bank_module/portfolioLoan/organizationalManagement/detail.vue') // 详情
  },
  // ------------------------------------------------------------合作银行审批----end------------------------------------------------------------------
  // ------------------------------------------------------------资金监管账户----start------------------------------------------------------------------
  {
    path: '/capitalSupervision',
    name: 'CapitalSupervision',
    component: () => import('@/views/bank_module/capitalSupervision/index.vue') // 列表
  },
  {
    path: '/capitalSupervisionDetail',
    name: 'CapitalSupervisionDetail',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/bank_module/capitalSupervision/detail.vue') // 详情
  },
  // ------------------------------------------------------------资金监管账户----end------------------------------------------------------------------
  // ------------------------------------------------------------摇号保证金管理----start------------------------------------------------------------------
  {
    path: '/marginManagement',
    name: 'MarginManagement',
    component: () => import('@/views/bank_module/marginManagement/index.vue') // 列表
  },
  {
    path: '/marginManageDetail',
    name: 'MarginManageDetail',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/bank_module/marginManagement/detail.vue') // 详情
  },
  // ------------------------------------------------------------摇号保证金管理----end------------------------------------------------------------------
  // ------------------------------------------------------------贷款普适性方案----start---------------------------------------------------------------
  {
    path: '/universalLoanProgram',
    name: 'UniversalLoanProgram',
    component: () => import('@/views/bank_module/universalLoanProgram/index.vue') // 贷款普适性方案首页
  },
  {
    path: '/universalLoanProgramAdd',
    name: 'UniversalLoanProgramAdd',
    meta: { routeName: '添加' },
    component: () => import('@/views/bank_module/universalLoanProgram/universalLoanProgramAdd.vue') // 贷款普适性方案添加
  },
  {
    path: '/universalLoanProgramModify',
    name: 'UniversalLoanProgramModify',
    meta: { routeName: '编辑' },
    component: () => import('@/views/bank_module/universalLoanProgram/universalLoanProgramAdd.vue') // 贷款普适性方案编辑
  },
  {
    path: '/universalLoanProgramDetails',
    name: 'UniversalLoanProgramDetails',
    meta: { routeName: '详情' },
    component: () =>
      import('@/views/bank_module/universalLoanProgram/universalLoanProgramDetails.vue') // 贷款普适性方案详情
  },
  // ------------------------------------------------------------贷款普适性方案----end---------------------------------------------------------------
  // ------------------------------------------------------  建设项目开发贷款监管 --start  ---------------------------------------------------------------
  // ---------------------------建设项目开发贷款备案(分行)
  {
    path: '/loanSupervisionr',
    name: 'LoanSupervisionr',
    component: () => import('@/views/bank_module/delivery/loanSupervisionr')
  },
  {
    path: '/loanSupervisionrIn',
    name: 'LoanSupervisionrIn',
    meta: { routeName: '备案' },
    component: () => import('@/views/bank_module/delivery/loanSupervisionr/inspect.vue')
  },
  // ---------------------------建设项目开发贷款发放(支行)
  {
    path: '/loanSupervisions',
    name: 'LoanSupervisions',
    component: () => import('@/views/bank_module/delivery/loanSupervisions')
  },
  {
    path: '/loanSupervisionsIn',
    name: 'LoanSupervisionsIn',
    meta: { routeName: '维护' },
    component: () => import('@/views/bank_module/delivery/loanSupervisions/inspect.vue')
  },
  // ------------------------------------------------------  建设项目开发贷款监管   ---  end  ---------------------------------------------------------------
  // ------------------------------------------------------  商品房预售款监管  ---  start  ---------------------------------------------------------------
  // ---------------------------商品房预售款监管备案(分行)
  {
    path: '/saleSupervisionr',
    name: 'SaleSupervisionr',
    component: () => import('@/views/bank_module/delivery/saleSupervisionr')
  },
  {
    path: '/saleSupervisionrIn',
    name: 'SaleSupervisionrIn',
    meta: { routeName: '备案' },
    component: () => import('@/views/bank_module/delivery/saleSupervisionr/inspect.vue')
  },
  // ---------------------------商品房预售款监管支取(支行)
  {
    path: '/saleSupervisions',
    name: 'SaleSupervisions',
    component: () => import('@/views/bank_module/delivery/saleSupervisions')
  },
  {
    path: '/saleSupervisionsIn',
    name: 'SaleSupervisionsIn',
    meta: { routeName: '维护' },
    component: () => import('@/views/bank_module/delivery/saleSupervisions/inspect.vue')
  },
  // ------------------------------------------------------  商品房预售款监管   ---  end  ---------------------------------------------------------------
  // ------------------------------------------------------------商业贷款----start------------------------------------------------------------------
  {
    path: '/prequalificationLoans',
    name: 'PrequalificationLoans',
    component: () => import('@/views/bank_module/homesLoans/prequalificationLoans/index.vue') // 贷款资格预审
  },
  {
    path: '/prequalificationLoansApproval',
    name: 'PrequalificationLoansApproval',
    meta: { routeName: '审批' },
    component: () => import('@/views/bank_module/homesLoans/prequalificationLoans/details.vue') // 贷款资格预审审批页
  },
  {
    path: '/prequalificationLoansDetails',
    name: 'PrequalificationLoansDetails',
    meta: { routeName: '详情' },
    component: () => import('@/views/bank_module/homesLoans/prequalificationLoans/details.vue') // 贷款资格预审详情页
  },
  {
    path: '/loanInitialApproval',
    name: 'LoanInitialApproval',
    component: () => import('@/views/bank_module/homesLoans/loanInitialApproval/index.vue') // 支行贷款初审
  },
  {
    path: '/loanInitialApprovalApproval',
    name: 'LoanInitialApprovalApproval',
    meta: { routeName: '审批' },
    component: () => import('@/views/bank_module/homesLoans/loanInitialApproval/details.vue') // 支行贷款初审审批页
  },
  {
    path: '/loanInitialApprovalDetails',
    name: 'LoanInitialApprovalDetails',
    meta: { routeName: '详情' },
    component: () => import('@/views/bank_module/homesLoans/loanInitialApproval/details.vue') // 支行贷款初审详情页
  },
  {
    path: '/loanApproval',
    name: 'LoanApproval',
    component: () => import('@/views/bank_module/homesLoans/loanApproval/index.vue') // 分行二审
  },
  {
    path: '/loanApprovalApproval',
    name: 'LoanApprovalApproval',
    meta: { routeName: '审批' },
    component: () => import('@/views/bank_module/homesLoans/loanApproval/details.vue') // 分行二审审批页
  },
  {
    path: '/loanApprovalDetails',
    name: 'LoanApprovalDetails',
    meta: { routeName: '详情' },
    component: () => import('@/views/bank_module/homesLoans/loanApproval/details.vue') // 分行二审详情页
  },
  {
    path: '/entrustedApproval',
    name: 'EntrustedApproval',
    component: () => import('@/views/bank_module/homesLoans/entrustedApproval/index.vue') // 委贷审批
  },
  {
    path: '/entrustedApprovalApproval',
    name: 'EntrustedApprovalApproval',
    meta: { routeName: '审批' },
    component: () => import('@/views/bank_module/homesLoans/entrustedApproval/details.vue') // 委贷审批审批页
  },
  {
    path: '/entrustedApprovalDetails',
    name: 'EntrustedApprovalDetails',
    meta: { routeName: '详情' },
    component: () => import('@/views/bank_module/homesLoans/entrustedApproval/details.vue') // 委贷审批详情页
  }
  // ------------------------------------------------------------商业贷款----end------------------------------------------------------------------
]
