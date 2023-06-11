### Docker 简单使用

- #### 镜像搜索

```bash
# 通过命令查看
1. docker search [image name]
# 通过hub网站查看
2. https://hub.docker.com/
```

- #### 镜像下载 并 运行 (Nginx为例)
```bash

# 下载nginx镜像，没有指定版本则下载最新版本 docker pull [image name]
1. docker pull nginx

# 创建容器并运行
2. docker run --name my-nginx -d -p 8080:80 nginx

# 查看正在运行容器（运行可以查到名为：my-nginx容器）
3. docker ps

# 进入my-nginx容器
4. docker exec -it my-nginx /bin/bash

# 进入容器内的 usr/share/nginx/hmtl 目录并修改index.html文件
5. cd usr/share/nginx/html
6. echo 'Hello world !!!' > index.html

# 通过cat 查看修改内容
7. cat index.html

```

- #### 基于容器创建一个新的镜像
```bash
# -a : 提交的镜像作者
# -c : 使用Dockerfile指令来创建镜像
# -m : 提交时的说明文字
# -p : 在commit时，将容器暂停

docker commit -m "This is my nginx image" -a "akram" my-nginx:v1
```

- #### 查看自制镜像
```bash
docker images my-nginx:v1
```

- #### 导出镜像 & 导入镜像
```bash
# 导出镜像
docker save -o my-nginx.tar my-nginx:v1

# 导入镜像
docker load -i my-nginx.tar
```

- #### 容器与镜像删除
```bash
# 删除容器 docker rm -f [容器名]
docker rm -f nginx

# 删除镜像 docker rmi [镜像名]
docker rmi nginx
```

- #### Docker 容器文件上传与下载
上传：
```bash
# 上传命令
docker cp [OPTIONS] SRC_PATH CONTAINER:DEST_PATH 

# 参数说明
OPTIONS： 可选参数为 -L，表示保持源目标中的链接；
SRC_PATH：为主机中要上传到容器的文件路径；
CONTAINER：为容器ID或容器名称；
DEST_PATH：为要存放上传文件的容器路径；

# 例如：windows系统下【F盘下的material】文件夹上传到 【my-nginx】容器【home】目录下
docker cp F:/Code/gitlab/material/ my-nginx:/home/
```
下载：

```bash
# 下载命令为：
docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH

# 参数说明：
OPTIONS： 可选参数为 -L，表示保持源目标中的链接；
CONTAINER：为容器ID或容器名称；
SRC_PATH：为容器的文件路径；
DEST_PATH：为存放下载文件的主机目录路径；

# 例如：表示下载 redis 容器中路径为 /data/temp.txt 的文件到主键目录 /home/ 中。
docker cp redis:/data/temp.txt /home/ 
```