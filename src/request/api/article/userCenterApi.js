import base from '../base'
import axios from '../../http'
import qs from 'qs'

const userCenterApi = {
  // ---------------------------------------------用户中心接口----------------------------------------------
  // 签章管理 查询签章信息
  apiSignPicture () {
    return axios.post(`${base.dev}/sign/getSignPicture`)
  },
  // 个人签章申请业务接口
  apiApplyPersonalSign (params) {
    return axios.post(`${base.dev}/sign/applyPersonalSign`, params)
  },
  // 用户中心 信息管理
  apiUserCore () {
    return axios.post(`${base.user}/sysOperator/getOperInfo`)
  },
  // 用户中心 企业信息上传
  apiUserLogoUpdate (params) {
    return axios.post(`${base.user}/sysOperator/saveDeptLogo`, qs.stringify(params))
  }
}

export default userCenterApi
