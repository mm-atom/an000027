const test = require('ava');

const { default: a } = require('../dist/index');

test('get use info', async (t) => {
	const openid = 'oKfhfv7QXT_wCfoJnVUp84y7pxrU';
	const r = await a(openid);
	// {"subscribe":1,"openid":"oKfhfv7QXT_wCfoJnVUp84y7pxrU","nickname":"农民工","sex":1,"language":"zh_CN","city":"郑州","province":"河南","country":"中国","headimgurl":"http://thirdwx.qlogo.cn/mmopen/uFrggbk3l6KDysVYg20sCUJjegv406lxo0scEn7ugUQUVYkogOEziaEYTDvqWrHlfU1y4hneMKnUMtNxgzJRH2w9kCX1ib147j/132","subscribe_time":1574848277,"remark":"","groupid":0,"tagid_list":[],"subscribe_scene":"ADD_SCENE_QR_CODE","qr_scene":0,"qr_scene_str":""}
	t.is(r.sex, 1);
});
