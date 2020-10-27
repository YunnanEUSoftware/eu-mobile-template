
var apiUrl = {

  /* ------ 登录接口路由 ----- */

    LOGIN_OPENIDLOGIN: 'login/openIdLogin',               	// 微信登录

  

  /* ------ 公共接口 --------- */


  /* ------ 个人中心 --------- */

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