module.exports = {
  "title": "rjy say",
  "description": "rjy say,是一个关注于互联网、IT技术经验分享的个人独立博客。专注于前端行业最前沿的技术。致力成为具传播力的个人独立博客。",
  "base":'/vBlog/',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://pan.zealsay.com/blog/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": false,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "作者博客",
        "desc": "zealsay说你想说",
        "logo": "https://raw.githubusercontent.com/rjy92/blogImg/main/home/avatar.webp",
        "link": "https://blog.zealsay.com"
      },
      {
        "title": "另一个博客",
        "desc": "vuepress_blog",
        "logo": "https://pan.zealsay.com/blog/logo.png",
        "link": "https://www.zealsay.com"
      },
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "logo": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "zealsay开发指南",
        "desc": "zealsay轻应用脚手架开发指南",
        "logo": "https://pic.zealsay.com/20190909225214850000000.jpg",
        "link": "https://docs.zealsay.com"
      }
    ],
    "valineConfig": {
      "appId": "xxx",// your appId
      "appKey": "xxx", // your appKey
      "avatar": "", //
      "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
      "requiredFields": ['nick', 'mail'], //设置必填项
    },
    "logo": "/logo.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "以和为贵",
    "authorAvatar": "https://raw.githubusercontent.com/rjy92/blogImg/main/home/avatar.webp",
    "record": "你的备案号 ", //icp备案
    "startYear": "2022",
    "info": "一名追求技术喜欢安静的程序猿，目前在北京某互联网公司担任前端开发工程师。",
    "socials":{
      "github" : "https://github.com/rjy92", //github
      "gitlub" : false, //gitlub
      "gitee" : "https://gitee.com/yingjiehanyan", //gitee
      "yuque" : false,//语雀https://www.yuque.com/dashboard
      "csdn" : "https://blog.csdn.net/u012565530?spm=1000.2115.3001.5343", //CSDN
      "jianshu" : false, //简书
      "zhihu" : "https://www.zhihu.com/people/li-ying-94-66-56", //知乎
      "toutiao" : false, //头条
      "juejin": "https://juejin.cn/user/1003188894570430", //掘金
      "segmentfault" : false, //思否
      "wechat" : "你的微信", //微信
      "qq" : "你的QQ" //QQ
    },
    "mottos": [{
      "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
      "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
    },
      {
        "zh": "年轻就是无限的可能。",
        "en": "Youth means limitless possibilities."
      },
      {
        "zh": "真正的梦就是现实的彼岸。",
        "en": "Real dream is the other shore of reality."
      },
      {
        "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
        "en": "Don't worry about the vague future, just strive for the clear present."
      },
      {
        "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
        "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
      }, {
        "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
        "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
      },
      {
        "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
        "en": "Life without regret, we can only do our best to not to regret."
      }
    ],
    "covers": [
      'https://pan.zealsay.com/zealsay/cover/7.jpg',
      'https://pan.zealsay.com/zealsay/cover/1.jpg',
      'https://pan.zealsay.com/zealsay/cover/2.jpg',
      'https://pan.zealsay.com/zealsay/cover/3.jpg',
      'https://pan.zealsay.com/zealsay/cover/4.jpg',
      'https://pan.zealsay.com/zealsay/cover/5.jpg',
      'https://pan.zealsay.com/zealsay/cover/6.jpg'
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": true
  },
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
  plugins: 
  [
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ["whiteCat"],
                clean: true,
                modelStyle: {
                    position: "fixed",
                    right: "65px",
                    bottom: "0px",
                    zIndex: 99999,
                    pointerEvents: 'none'
                }
            }
        ],
        [
            '@vuepress-reco/vuepress-plugin-bgm-player',
            {
              audios: [
                {
                  name: 'LOSER',
                  artist: '최낙타',
                  url: 'https://assets.smallsunnyfox.com/music/3.mp3',
                  cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
                }
              ] ,
              // 是否默认缩小
              autoShrink: true ,
              // 缩小时缩为哪种模式
              shrinkMode: 'float',
              // 悬浮窗样式
              floatStyle:{ bottom: '10px', 'z-index': '999999' }
            }
          ]
    ],
    
}