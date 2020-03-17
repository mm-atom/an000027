# 微信-公众号用户基本信息

## 配置

* 需在项目下的mm`.json文件中配置`wx.appid`，`wx.appsecret`。
* wx.appid：小程序唯一凭证，即 AppID。
* wx.appsecret：小程序唯一凭证密钥，即 AppSecret。

```json
{
	"wx": {
		"getopenid": true,
		"getuserinfo": false,
		"appid": "xxx",
		"appsecret": "xxx"
	}
}
```

注意:如果配置`getuserinfo`为`true`,则在服务中直接可以通过消息体中的`wxuserinfo`拿到微信用户的个人信息,这种方式只适用于一些公众号不需要用户关注仍然可以获取用户信息的情况,在这种情况下用户查看页面的时候会弹出一个获取用户信息的提示,用户同意后才能继续操作,相对来说,用户体验差.多数情况下,请确保配置`"getuserinfo": false`.这样用户在无感知的情况下就可以查看该公众号的所有信息.但是这种情况需要**用户关注该公众号**,否则使用该原子操作将无法获取到用户的个人信息.

参数

参数openid值在服务中可以从服务参数中`message.wxuserinfo.openid`直接拿到(如为get请求则为`message.query.wxuserinfo.openid`),无须特别处理.

## 小程序用户信息获取

当前原子操作为公众号用户信息的获取,如果是小程序项目,请使用[获取用户的基本信息](https://npmjs.com/package/@mmstudio/an000028)
