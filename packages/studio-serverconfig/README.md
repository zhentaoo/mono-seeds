## 个人服务器配置文件
- nginx配置文件
- 有用的shell脚本

## Linux常用命令
### 网络:

```shell
 ssh user@www.xxxx.com (登录服务器)

 rsync -avz www.conf xxx@www.xxx.com:/etc/nginx/conf.d （远程同步文件）

 tar zxvf node-v0.10.24.tar.gz
```
### nginx:

```shell
 nginx -t （测试nginx配置是否有问题）
 nginx -s reload
```

### pm2:
 pm2 startOrRestart pm2.json
