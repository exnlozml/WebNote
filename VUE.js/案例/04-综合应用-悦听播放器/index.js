/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果

  2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/
var app = new Vue ({
    el:"#player",
    data:{
        // 查询关键字
        query:"",
        // 歌曲数组
        musicList:[],
        // 歌曲地址
        musicUrl:"",
        // 歌曲封面
        musicCover:"",
        // 评论数组
        musicComment:[],
        // 播放动画状态
        isPlaying:false,
        // 遮罩层的显示状态
        isShow:false,
        // mv地址
        mvUrl:""
    },
    methods:{
        // 歌曲搜索
        searchMusic:function () {
            axios.get("https://autumnfish.cn/search?keywords="+this.query)
            .then(response => {
                // console.log(response);
                this.musicList = response.data.result.songs;
                console.log(this.musicList);
            },
            function(err) {})
        },
        // 歌曲播放
        playMusic:function(musicId) {
            // 获取歌曲地址
            axios.get("https://autumnfish.cn/song/url?id="+musicId)
            .then(response => {
                // console.log(response.data.data[0].url);
                this.musicUrl = response.data.data[0].url;
            },
            err => {})
            // 歌曲详情获取
            axios.get("https://autumnfish.cn/song/detail?ids="+musicId)
            .then(res => {
              // console.log(res.data.songs[0].al.picUrl);
              this.musicCover = res.data.songs[0].al.picUrl;
            },
            err => {})
            // 歌曲评论获取
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId)
            .then(res => {
              console.log(res.data.hotComments);
              this.musicComment = res.data.hotComments;
            },err => {})
        },
        // 播放音乐
        play:function() {
          this.isPlaying = true;
        },
        // 暂停音乐
        pause:function() {
          this.isPlaying = false;
        },
        // 播放MV
        playMv:function(mvid) {
          axios.get("https://autumnfish.cn/mv/url?id="+mvid)
          .then(res => {
            console.log(res.data.data.url);
            this.isShow = true;
            this.mvUrl = res.data.data.url;
          },
          err => {})
        },
        // 隐藏
        hide:function() {
          this.isShow=false;
          this.mvUrl="";
        }
        
        

    }
    
})