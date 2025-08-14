var posts=["2025/08/13/hello-world/","2025/08/14/python及pycharm的安装和激活/","2025/08/14/hexo的安装及部署/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };