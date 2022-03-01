# Git命令
### 配置Git的全局设置
##### 查看当前用户
```bash
git config --list // 查看配置
git config user.name // 目标用户名
git config user.email // 目标邮箱名
```
##### 设置全局用户
```bash
git config --global user.name "your name"
git config --global user.email "your email address"
```
当然，你还可以直接修改git的配置文件的方式来进行修改。
打开全局的.gitconfig文件的命令为：vi ~/.gitconfig; 然后在文件中直接修改即可。

### 克隆远程库
```bash
git clone <url> // 克隆远程版本库
git init // 初始化本地版本库
```

### 代码更新及提交
```bash
git pull origin master
git add -A
git commit -m 'auto commit' // 单引号里面是描述信息
git push origin master
```

### 查看提交历史
```bash
git log // 会按提交时间列出所有的更新（包括作者名字和电子邮件，提交时间，提交说明），最近的更新排在最上面。
git log -3 // 最近三次的提交记录
git log -p // 常用-p选项展开每次提交的内容差异
git log -p -2  // 最近两次提交内容差异

git blame <file> // 以列表方式查看指定文件的提交历史
```

### 合并与衍合
```javascript
git merge <branch> // 合并指定分支到当前分支
git rebase <branch> // 衍合指定分支到当前分支
```

### 分支与标签
```bash
git branch // 显示所有本地分支
git checkout <branch/tag> // 切换到指定分支或标签
git branch <new-branch> // 创建新分支
git branch -d <branch> // 删除本地分支
git tag // 列出所有本地标签
git tag <tagname> // 基于最新提交创建标签
git tag -d <tagname> // 删除标签
```

### 远程操作
```bash
git remote -v // 查看远程版本库信息
git remote show <remote> // 查看指定远程版本库信息
git remote add <remote> <url> // 添加远程版本库

git fetch <remote> // 从远程库获取代码
git pull <remote> <branch> // 下载代码及快速合并
git push <remote> <branch> // 上传代码及快速合并
git push <remote> :<branch/tag-name> // 删除远程分支或标签

git push --tags // 上传所有标签
```

### 修改和提交
```bash
git status // 查看状态
git diff // 查看历史变更内容
git add . // 跟踪所有改动过的文件
git add <file> // 跟踪指定的文件
git mv <old> <new> // 文件改名
git rm <file> // 删除文件
git rm --cached <file> // 停止跟踪文件但不删除
git commit -m "commit message" // 提交所有更新过的文件
git commit --amend // 修改最后一次提交
```

### 撤销
```bash
git reset --hard HEAD // 撤销工作目录中所有未提交文件的修改内容
git checkout HEAD <file> // 撤销指定的未提交文件的修改内容
git revert <commit> // 撤销指定的提交
```

### 添加（git add）提交（git commit）后撤销
```bash
# git add 添加多余文件
git reset HEAD  // 如果后面什么都不跟的话 就是上一次add 里面的全部撤销了
git reset HEAD xxx/xxx/xxx.js  // 对某个文件进行撤销

# git commit 错误提交
git log 查看节点 
然后
git reset commit_id （回退到上一个 提交的节点 代码还是原来你修改的） 
git reset –hard commit_id （回退到上一个commit节点， 代码也发生了改变，变成上一次的）
```

### 本地修改的文件还原
```bash
# 单个文件还原
git checkout + 文件名

# 整个目录
git checkout .(这个点要加上的)
```

### 暂存
```bash
git stash        // 代码暂存

git stash pop    // 吐出暂存

git stash list   // 查看暂存栈

git stash clear  // 栈清空
```
