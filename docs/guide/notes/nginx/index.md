### Nginx

[Nginx](www.nginx.org) 
[学习视频](https://www.bilibili.com/video/BV1ZU4y1m7GL?p=13&vd_source=1472e13516e808f46c31979a0955b5f0)

### 什么是Nginx
- Nginx(engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供IMAP/POP3/SMTP服务。-- 引用百度百科
- 主要功能反向代理
- 通过配置文件可以实现集群和负载均衡
- 静态资源虚拟化

#### 常见的服务器
- MS IIS ---------------------- asp.net
- Weblogic, Jbos ----------- 传统行业 ERP/物流/电信/金融
- Tomcat, Jetty -------------- J2EE
- Apache, Nginx ------------ 静态服务, 反向代理
- Netty ------------------------- 高性能服务器编程

#### 什么是正向代理
- 客户端请求目标服务器之间的一个代理服务器
- 请求会先经过代理服务器，然后再转发请求到目标服务器，获得内容后最后响应给客户端

#### 什么是反向代理
- 用户请求目标服务器，由代理服务器决定访问哪个ip

#### Nginx 的进程模型
- master进程：主进程
- worker进程： 工作进程

#### nginx.conf 配置
> main ------- 全局配置
>> event --- 配置工作模式以及连接数
>> http ----- http模块相关配置
>>> server -------- 虚拟主机配置，可以有多个
>>>> location --- 路由规则，表达式
>>>> upstream - 集群，内网服务器（负载均衡也放到这里面）
