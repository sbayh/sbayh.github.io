var posts=["2025/08/13/hello-world/","2025/08/14/hexo搭建博客网站/","2025/08/14/hexo的安装及部署/","2025/08/14/python及pycharm的安装和激活/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };