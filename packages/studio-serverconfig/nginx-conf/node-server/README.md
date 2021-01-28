###多个node server，测试nginx负载均衡

按照nginx.conf配置，
当访问8001端口，会按照权重代理到这三个server上，返回不同的内容
