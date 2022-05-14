
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '宝贝小曹的520礼物',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '简单的抽奖', },
    { key: 's', wording: '一点点用心', },
    { key: 'd', wording: '就可以制造多一分惊喜', },
  ],
  // 最终解释权归属人
  owner: '飞飞',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 4500,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: 'OLAY小白瓶', alias: 'OLAY小白瓶', image: '/images/1.png',  description: ' "抗糖小白瓶，让皮肤白里更透光" ' },
  { key: 'w', name: '冰感夏季防晒衣', alias: '防晒衣', image: '/images/2.png',  description: '“实用又百搭，再也不怕夏天晒黑~”' },
  { key: 'e', name: '夏季拼接甜美连衣裙', alias: '连衣裙', image: '/images/3.png',  description: ' "嫩嫩的，尊的很好看！"' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“想给你唱一百首情歌”' },
  { key: 't', name: 'Dior星空套装', alias: 'Dior星空', image: '/images/5.png',  description: ' "百变唇妆，精美雕琢"' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: 'UR购物券：¥1,000', alias: 'UR', image: '/images/7.png',  description: '“UR！买！”' },
  { key: 'i', name: 'Dyson美发套装', alias: '戴森', image: '/images/8.png',  description: '"不同造型需求，全面满足"' },
];
