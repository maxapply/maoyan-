Page({

  // 1.页面初始化数据
  data: {
    // 当前类名的初始化
    ac: "hot",
    // 热映的电影
    hots: [],
  },

  // 2.事件的执行函数
  // 分析：
  //    1. 组件注册点击事件
  //    2. 知道现在点击是哪个组件？自定义属性
  //    3. 把点击的是哪个，设置setData 在初始化数据的ac上；
  change(e) {
    // console.log(e.target.dataset.ac);
    this.setData({
      ac: e.target.dataset.ac
    });

  },




  // 3.生命周期函数 数据请求
  // 
  onLoad() {
    var that = this;
    wx.request({
      url: "https://wx.maoyan.com/mmdb/movie/v2/list/hot.json",
      method: "GET",
      data: {
        limit: 12,
        offset: 0,
        ct: "北京", // city 北京
      },
      success: function(res) {
        // 数据请求成功了！！没有开发阶段配置，为什么成功？
        // 管理后台进行 线上配置 request 合法域名 月5次
        // console.log(res.data);
        // 模拟数据了：假设这是返回的数据
        var list = [{
            img: "https://static.botue.com/maoyan/movie-1.jpg",
            name: "侏罗纪世界1",
            type: "动作,冒险,科幻",
            actor: "主演: 克里斯·帕拉特,布莱丝·达拉斯·霍华德,泰德·拉文",
            count: "今天205家影院放映4445场",
            extra: 8.5
          },
          {
            img: "https://static.botue.com/maoyan/movie-1.jpg",
            name: "侏罗纪世界2",
            type: "动作,冒险,科幻",
            actor: "主演: 克里斯·帕拉特,布莱丝·达拉斯·霍华德,泰德·拉文",
            count: "今天205家影院放映4445场",
            extra: 8.5
          },
          {
            img: "https://static.botue.com/maoyan/movie-1.jpg",
            name: "侏罗纪世界3",
            type: "动作,冒险,科幻",
            actor: "主演: 克里斯·帕拉特,布莱丝·达拉斯·霍华德,泰德·拉文",
            count: "今天205家影院放映4445场",
            extra: 8.5
          },
          {
            img: "https://static.botue.com/maoyan/movie-1.jpg",
            name: "侏罗纪世界4",
            type: "动作,冒险,科幻",
            actor: "主演: 克里斯·帕拉特,布莱丝·达拉斯·霍华德,泰德·拉文",
            count: "今天205家影院放映4445场",
            extra: 8.5
          },
        ];

        // 设置在初始化数据：
        that.setData({
          hots: list
        });

      }
    });

  }






});