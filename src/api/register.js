import request from '@/utils/request'
/**
 * @description 注册
 */
export function register(data) {
    return request({
        url: `/user/register`,
        method: 'post',
        data
    })
}
/**
 * @description 获取验证码
 */
export function getCode(phone){
    return request({
        url:`/user/sendVerificationCode?phone=${phone}`,
        method:'get'
    })
}