var posts=["2025/08/19/AI大模型创业/","2025/08/14/AI嵌入式的商机/","2025/08/13/hello-world/","2025/08/14/hexo搭建博客网站/","2025/08/23/AI创业用户需求及盈利方式/","2025/08/14/hexo的安装及部署/","2025/08/14/python及pycharm的安装和激活/","2025/08/14/vip视频破解python/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };