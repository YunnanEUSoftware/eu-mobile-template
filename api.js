
var apiUrl = {
  /* ------ 登录接口路由 ----- */

    LOGIN_OPENIDLOGIN: 'login/openIdLogin',               	// 微信登录
    COMMON_GETIMAGECODE: 'common/getImageCode',           	// 获取图片验证码
    COMMON_GETMESSAGECODE: 'common/getMessageCode',       	// 发送验证码
    COMMON_FORGETPASSWORD: 'common/forGetPassWord',       	// 忘记密码
    MOBILE_STAFFLOGIN: 'login/staffLogin',                	// 用户登录
    COMMON_GETNATIONLIST: 'common/getEmployeeEthnicityList',// 获取雇员端民族列表
    COMMON_GETBANKLIST: 'common/getEmployeeBankList',       // 获取雇员端银行列表
  

  /* ------ 公共接口 --------- */

    HOME_GETMENULIST: 'home/getMenuList',                 // 工作人员权限列表
    PUBLIC_BANK: 'public/bank',                           // 银行列表
    PUBLIC_TYPESUBSIDY: 'public/typeSubsidy',             // 补助类型
    PUBLIC_QUERYROLELIST: 'public/queryRoleList',         // 查询当前工作人员的角色列表
    PUBLIC_GETUSERPOWER: 'public/getUserPower',           // 查询当前工作人员的记账本权限  
    COMMON_CHECKUSERID: 'common/checkUserId',             // 身份证姓名校验

  /* ------ 个人中心 --------- */

    GETUSER_INFO: 'personalCenter/getStaffSmallInfo',               // 基本信息
    GETUSER_USERINFO: 'personalCenter/getStaffAllInfo',             // 个人信息
    UPDATELOGINKEY: 'personalCenter/updateLoginKey',                // 修改密码

    

  //--------------------------------------------- HRS(彩云劳服) ---------------------------------------------

  AGREEMENT_AGREEMENTEMPLOYEELIST: 'employeeResign/agreementEmployeeList',                           // 【雇员离职】协议及协议下雇员列表
  AGREEMENT_INSERTORDER: 'employeeResign/insertEmployeeResignOrder',                            // 【雇员离职】新增雇员离职订单
  AGREEMENT_POSITION: 'employee/position',                                                     // 【雇员入职】查询岗位
  AGREEMENT_EMPLOYEEONBOARDING: 'employee/employeeOnBoarding',                                  // 【雇员入职】雇员入职
  EMPLOYEE_GETIDCARD: 'common/employeeInfoQuery',                                  // 【雇员入职】图片识别
  

  //--------------------------------------------- HRH(彩云用工) ---------------------------------------------

    // 雇员考勤

    PEWORKMANAGE_GETLISTTYPE: 'pEWorkManage/getListType',                                       // 【记录考勤】查询考勤类型
    PEWORKMANAGE_GETLISTWORKREORDGROUP: 'pEWorkManage/getListWorkRecordGroup',                  // 【记录考勤】查询考勤组
    PEWORKMANAGE_GETLISTWORKREORDGROUPEMPLOYEE: 'pEWorkManage/getListWorkRecordGroupEmployee',  // 【记录考勤】查询考勤组下的雇员列表
    PEWORKMANAGE_IUPEWORK: 'pEWorkManage/iUPEWork',                                             // 【记录考勤】提交记录考勤
    PEWORKMANAGE_GETLISTWORKREORDGROUPBYRECORD: 'pEWorkManage/getListWorkRecordGroupByRecord',  // 【打卡考勤】查询考勤组
    PEWORKMANAGE_GETLISTEMPLOYEE: 'pEWorkManage/getListEmployee',                               // 【打卡考勤】查询员工列表
    PEWORKMANAGE_GROUPAIDALL: 'pEWorkManage/iPEWorkByWorkRecordGroupAidAll',                    // 【打卡考勤】全部上班、全部休息
    PEWORKMANAGE_GROUPAID: 'pEWorkManage/iPEWorkByWorkRecordGroupAid',                          // 【打卡考勤】单个上班下班
    PEWORKMANAGE_GETLISTEMPLOYEEHISTORY: 'pEWorkManage/getListEmployeeHistory',                 // 【考勤历史】查询员工列表
    PEWORKMANAGE_GETLISTPEWORKHISTORY: 'pEWorkManage/getListPEWorkHistory',                     // 【考勤历史】查询出雇员的考勤记录

    // 雇员收支

    PEFEEMANAGE_GETLISTAGREEMENT: 'pEFeeManage/getListAgreement',                               // 【记录收入】查询协议列表
    PEFEEMANAGE_GETLISTTYPEISIN: 'pEFeeManage/getListTypeIsIn',                                 // 【记录收入】查询收入类型
    PEFEEMANAGE_GETLISTWORKRECORDGROUP: 'pEFeeManage/getListWorkRecordGroup',                   // 【记录收入】查询考勤组
    PEFEEMANAGE_GETLISTWORKRECORDGROUPEMPLOYEE: 'pEFeeManage/getListWorkRecordGroupEmployee',   // 【记录收入】查询考勤组下的雇员
    PEFEEMANAGE_IPEFEEISIN: 'pEFeeManage/iPEFeeIsIn',                                           // 【记录收入】提交雇员收入
    PEFEEMANAGE_GETLISTTYPEISOUT: 'pEFeeManage/getListTypeIsOut',                               // 【记录支出】查询支出类型
    PEFEEMANAGE_IPEFEEISOUT: 'pEFeeManage/iPEFeeIsOut',                                         // 【记录支出】提交雇员支出
    PEFEEMANAGE_GETLISTWORKRECORDGROUPNEW: 'pEFeeManage/getListWorkRecordGroupNew',             // 【收支历史】查询考勤组
    PEFEEMANAGE_GETLISTEMPLOYEE: 'pEFeeManage/getListEmployee',                                 // 【收支历史】查询考勤组下面的所有人
    PEFEEMANAGE_GETLISTPEFEE: 'pEFeeManage/getListPEFee',                                       // 【收支历史】查询这个雇员的收支历史

    // 预支工资

    SALARYADVANCE_GETLISTWORKRECORDGROUP: 'salaryAdvance/getListWorkRecordGroup',                // 【预支工资】查询考勤组
    SALARYADVANCE_GETLISTWORKRECORDGROUPEMPLOYEE: 'salaryAdvance/getListWorkRecordGroupEmployee',// 【预支工资】查询考勤组下的雇员
    SALARYADVANCE_IUPEFEE: 'salaryAdvance/iUPEFee',                                              // 【预支工资】提交工资预支
    SALARYADVANCE_GETFILE: 'salaryAdvance/getFile',                                              // 【预支工资】上传凭证
    SALARYADVANCE_GETLISTWORKRECORDGROUPNEW: 'salaryAdvance/getListWorkRecordGroupNew',          // 【预支历史】查询考勤组
    SALARYADVANCE_GETLISTEMPLOYEE: 'salaryAdvance/getListEmployee',                              // 【预支历史】查询出考勤组下面的所有人
    SALARYADVANCE_GETLISTPEFEE: 'salaryAdvance/getListPEFee',                                    // 【预支历史】查询出这个雇员的工资预支历史
    
    EMPLOYEERESIGN_EMPLOYEELIST: 'employeeResign/agreementEmployeeList',                         // 【雇员离职】协议及协议下雇员列表
    EMPLOYEERESIGN_RESIGNORDER: 'employeeResign/insertEmployeeResignOrder',                      // 【预支历史】新增雇员离职订单


  //--------------------------------------------- HRE(彩云用工) ---------------------------------------------

  // 雇员信息采集

  COLLECTION_GETLISTEMPLOYEESTATE: 'collection/getListEmployeeState',  // 获取雇员历史列表
  COLLECTION_EMPLOYEELISTQUERY: 'collection/employeeList',             // 获取雇员历史列表
    // COLLECTION_EMPLOYEEDELETE: 'collection/employeeDelete',         // 删除雇员信息

  COLLECTION_HUNTERLIST: 'collection/getListHunter',              // 工头列表
  COLLECTION_EMPLOYEEINFOQUERY: 'collection/employeeInfoQuery',   // 获取雇员详细信息
  COLLECTION_CARDINFO: 'collection/cardInfo',                     // 获取身份证照片信息
  COLLECTION_BANKCARDINFO: 'collection/bankCardInfo',             // 获取银行卡照片信息
  COLLECTION_EMPLOYEEINFOIU: 'collection/employeeInfoIu' ,        // 新增/修改雇员信息

  // 补助记录

    SUBSIDY_FOREMANLISTQUERY: 'subsidy/foremanListQuery',                // 工头列表
    SUBSIDY_FOREMANSUBSIDEYINSERT: 'subsidy/foremanSubsidyInsert',       // 新增工头补助
    SUBSIDY_FOREMANSUBSIDEYLISTQUERY: 'subsidy/foremanSubsidyListQuery', // 工头补助列表
    SUBSIDY_FOREMANSUBSIDEYDELETE: 'subsidy/foremanSubsidyDelete',       // 删除补助

  // 入职确认

    // ENTRY_CUSTOMERLISTQUERY: 'entry/customerListQuery',                  // 公司列表
  ENTRY_CUSTOMERAGREEMENTLIST: 'entry/getListPosition',          // 协议列表
  ENTRY_EMPLOYEEIDINFOQUERY: 'entry/employeeInfoQuery',              // 查询雇员信息
  ENTRY_ENTRYCONFIRM: 'entry/entryConfirm',                            // 确认入职

  // 岗位详情

  POSITION_GETLISTPOSITION: 'position/getListPosition',             // 岗位列表
  POSITION_GETPOSITIONDETAIL: 'position/getPositionDetail',         // 岗位详情
  POSITION_GETSIGNATURE: 'position/getSignature',                   // 获取签名
  
  // 中介推广

  GETHUNTEREXTENDLIST: 'hunterExtend/getHunterExtendList',             // 获取工作人员推广列表
  GETHUNTEREXTENDINFO: 'hunterExtend/getHunterExtendInfo',             // 获取工作人员推广信息

  // 借款审核

  FEELOANCHECK_GETLISTFEELOAN: 'feeLoanCheck/getListFeeLoan',            // 待审核借款列表
  FEELOANCHECK_GETFEELOAN: 'feeLoanCheck/getFeeLoan',                    // 获取借款详情
  FEELOANCHECK_UFEELOAN: 'feeLoanCheck/uFeeLoan',                        // 审核
  FEELOANCHECK_GETLISTFEELOANHISTORY: 'feeLoanCheck/getListFeeLoanHistory', // 借款审核历史
  FEELOANCHECK_GETFEELOANHISTORY: 'feeLoanCheck/getFeeLoanHistory',      // 获取单个借款历史详情

  // 现场招聘

  RECRUITMENT_GETLISTRECRUITMENT: 'recruitmentLive/getListRecruitment',               // 【我的招聘】查询出本人发起和作为工作人员的现场招聘
  RECRUITMENT_GETRECRUITMENT: 'recruitmentLive/getRecruitment',                       // 【我的招聘】查询出招聘详情
  RECRUITMENT_IUAGREEMENT: 'recruitmentLive/iURecruitmentLive',                       // 【我的招聘】新增和修改招聘
  RECRUITMENT_STOPRECRUITMENT: 'recruitmentLive/updateStateRecruitment',              // 【我的招聘】招聘结束、确认发布、删除
  // RECRUITMENT_GETLISTAGREEMENTGROUP: 'position/getListPosition',
  RECRUITMENT_GETLISTAGREEMENTGROUP: 'recruitmentLive/getListPosition',         // 【我的招聘】查询出所有的招聘岗位
  RECRUITMENT_IUAGREEMENTGROUP: 'recruitmentLive/iURuleAndInterest',                   // 【我的招聘】给现场招聘的岗位设置规则及利益占比
  RECRUITMENT_MYAGREEMENTGROUP: 'recruitmentLive/myPosition',                   // 【我的招聘】已选的工作岗位列表
  RECRUITMENT_GETLISTSTAFF: 'recruitmentLive/getListStaff',                           // 【我的招聘】查询出招聘工作人员
  RECRUITMENT_IURRCRUITMENTSTAFF: 'recruitmentLive/iURecruitmentStaff',               // 【我的招聘】选入工作人员
  // RECRUITMENT_GETFILE: 'recruitmentLive/getFile',                                     // 【我的招聘】获取工作情况地址

  RECRUITMENTHISTORY_GETLISTRECRUITMENT: 'recruitmentLiveHistory/getListRecruitment', // 【招聘历史】查询出本人发起和作为工作人员的现场招聘
  RECRUITMENTHISTORY_GETRECRUITMENT: 'recruitmentLiveHistory/getRecruitment',         // 【招聘历史】通过查询出招聘详情
  RECRUITMENTHISTORY_GETLISTRECRUITMENTAGREEMENTGROUP: 'recruitmentLiveHistory/getListRecruitmentPosition', // 【招聘历史】查看确认后的招聘岗位
  RECRUITMENTHISTORY_GETRDETAIL: 'recruitmentLiveHistory/getRecruitmentPositionDetail', // 【招聘历史】查看招聘完成后的岗位设置
  RECRUITMENTHISTORY_GETLISTRECRUITMENTAGREEMENTGROUPSTAFF: 'recruitmentLiveHistory/getListRecruitmentPositionStaff', // 【招聘历史】查询出岗位下的招聘工作人员

  RECRUITMENTCOLLECTION_GETLISTAGREEMENTGROUP: 'recruitmentCollection/getListAgreementGroup', // 【信息采集】获取这个工作人员负责招聘的岗位列表
  RECRUITMENTCOLLECTION_BANKCARDINFO: 'recruitmentCollection/bankCardInfo',                   // 【信息采集】识别银行卡信息
  RECRUITMENTCOLLECTION_CARDINFO: 'recruitmentCollection/cardInfo',                           // 【信息采集】识别身份证
  RECRUITMENTCOLLECTION_EMPLOYEEINFOIU: 'recruitmentCollection/employeeInfoIu',               // 【信息采集】新增/修改雇员信息


  //--------------------------------------------- BUDGET(彩云内务) ---------------------------------------------

  // 支出记账
    BOKKEEPING_GETWECHATORDERTYPEANDSTATE: 'bookkeeping/getWeChatOrderTypeAndState',  // 获取订单查询参数
    BOKKEEPING_GETORDERLIST_BYMONTH: 'bookkeeping/getOrderListByMonth',               //获取订单列表
    BOKKEEPING_GETWECHATINDEX: 'bookkeeping/getWeChatIndex',                          //获取新增转账页面初始化参数
    BOKKEEPING_SETORDER: 'bookkeeping/setOrder',                                      //新增一笔拨款
    BOKKEEPING_GETORDERINFOWECHAT: 'bookkeeping/getOrderInfoWeChat',                  //查询支付详情
    BOKKEEPING_FILEUPLOAD: 'bookkeeping/fileUpload',                                  //凭证文件上传
    BOKKEEPING_SETVOUCHERSPARAM: 'bookkeeping/setVouchersParam',                      //上传凭证文件码

  // 审核
    AUDIT_GETAUDITLIST: 'audit/getAuditList',                                         //获取待审核列表
    AUDIT_PASS: 'audit/pass',                                                         //通过审核
    AUDIT_REFUSE: 'audit/refuse',                                                     //审核不通过

  // 部门收款账户处理
    ACCOUNT_GETACCOUNTINDEX: 'account/getAccountIndex',                                //初始化页面
    ACCOUNT_GETACCOUNTINFOLIST: 'account/getAccountInfoList',                          //获取账户信息列表
    ACCOUNT_FILEUPLOAD: 'account/fileUpload',                                          //上传二维码
    ACCOUNT_SETACCOUNT: 'account/setAccount',                                          //新增或修改账户信息
    ACCOUNT_ACCOUNTDELETE: 'account/accountDelete',                                    //删除收款渠道

  // 个人中心

    USERINFO_QUERYUSERINFO: 'userinfo/queryUserInfo',                                  // 查询工头信息
    USERINFO_UPDATEUSERINFO: 'userinfo/updateUserInfo',                                // 修改个人信息

  //---------------------------------------------- HRSRW(彩云记工) -------------------------------------------

  EMPLOYEE_GETEMPLOYEELIST: 'employee/getEmployeeList',          // 获取雇员列表
  WXRECORDFEE_GETBATCHFEETYPE: 'wxRecordFee/getBatchFeeType',    // 获取批量操作中的费用类型
  WXRECORDWORK_BATCHWORK: 'wxRecordWork/batchWork',              // 批量新增考勤
  WXRECORDWORK_COUNTMONEY: 'wxRecordWork/countMoney',            // 批量工资计算统计
  WXRECORDFEE_COUNTFEE: 'wxRecordFee/countFee',                  // 批量费用计算统计
  WXRECORDFEE_BATCHLOAN: 'wxRecordFee/batchLoan',                // 批量新增借款
  WXRECORDFEE_BATCHFEE: 'wxRecordFee/batchFee',                  // 批量新增费用

  // 考勤组管理

  EMPLOYEEMANGE_GETEMPLOYEELIST: 'employeeMange/getEmployeeList',          // 雇员列表
  EMPLOYEEMANGE_SETEMPLOYEESTOP: 'employeeMange/setEmployeeStop',          // 雇员离职或复职


  // 工作考勤

  WXHOME_GETWORKGROUPLIST: 'wxHome/getWorkGroupList',          // 考勤组列表

  WXCHECKWORK_GETCHECKWORKLIST: 'wxCheckWork/getCheckWorkList',// 考勤人员列表
  WXCHECKWORK_CHECKWORK: 'wxCheckWork/checkWork',              // 打考勤

  // 工作记录

  WXRECORDWORK_GETWORKEMPLOYEELIST: 'wxRecordWork/getWorkEmployeeList', // 记录人员列表

  WXRECORDWORK_SETRECORDWORK: 'wxRecordWork/setRecordWork',             // 新增或修改记工信息
  WXRECORDWORK_GETEAWORKLIST: 'wxRecordWork/getEAWorkList',             // 记工历史列表
  WXRECORDWORK_DELETEEAWORK: 'wxRecordWork/deleteEAWork',               // 删除考勤工资
  WXRECORDWORK_UNDOEAWORK: 'wxRecordWork/undoEAWork',                   // 撤销考勤工资
  WXRECORDWORK_SUBMITEAWORK: 'wxRecordWork/submitEAWork',               // 提交考勤工资

  // 收支记录

  WXRECORDFEE_GETFEEEMPLOYEELIST: 'wxRecordFee/getFeeEmployeeList',     // 工作人员列表
  WXRECORDFEE_SETRECORDFEELOAN: 'wxRecordFee/setRecordFeeLoan',         // 新增或修改借款
  WXRECORDFEE_FILEUPLOAD: 'wxRecordFee/fileUpload',                     // 上传借款凭证
  WXRECORDFEE_SETRECORDFEE: 'wxRecordFee/setRecordFee',                 // 新增或修改一般性记账
  WXRECORDFEE_GETFEETYPELIST: 'wxRecordFee/getFeeTypeList',             // 费用类型列表

  WXRECORDFEE_GETFEELIST: 'wxRecordFee/getFeeList',                     // 收支列表
  WXRECORDFEE_SUBMITFEE: 'wxRecordFee/submitFee',                       // 提交收支单
  WXRECORDFEE_UNDOFEE: 'wxRecordFee/undoFee',                           // 撤销收支单
  WXRECORDFEE_DELETEFEE: 'wxRecordFee/deleteFee',                       // 删除收支单
}

export default {
	apiUrl,
	memberObj:{
			token:'',
	    },
	setMemberObj(data){
		this.memberObj = Object.assign({},this.memberObj,data) 
	}
}