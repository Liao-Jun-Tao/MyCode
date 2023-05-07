| Git 命令 | 功能描述 |
| --- | --- |
| **创建版本库** |  |
| `git init` | 在当前目录新建一个Git代码库 |
| `git init [project-name]` | 新建一个目录，将其初始化为Git代码库 |
| `git clone [url]` | 下载一个项目和它的整个代码历史 |
| **配置** |  |
| `git config --list` | 显示当前的Git配置 |
| `git config -e [--global]` | 编辑Git配置文件 |
| `git config [--global] user.name "[name]"` | 设置提交代码时的用户信息 |
| `git config [--global] user.email "[email address]"` | 设置提交代码时的用户信息 |
| **查看信息** |  |
| `git status` | 查看状态 |
| `git diff` | 查看变更内容 |
| **暂存区** |  |
| `git add [file1] [file2]` | 添加指定文件到暂存区 |
| `git add [dir]` | 添加指定目录到暂存区，包括子目录 |
| `git add` | 添加当前目录的所有文件到暂存区 |
| `git add -p` | 添加每个变化前，都会要求确认，对于同一个文件的多处变化，可以实现分次提交 |
| **删除文件** |  |
| `git rm [file1] [file2]` | 删除工作区文件，并且将这次删除放入暂存区 |
| `git rm --cached [file]` | 停止追踪指定文件，但该文件会保留在工作区 |
| **重命名文件** |  |
| `git mv [file-original] [file-renamed]` | 改名文件，并且将这个改名放入暂存区 |
| **提交** |  |
| `git commit -m [message]` | 提交暂存区到仓库区 |
| `git commit [file1] [file2] ... -m [message]` | 提交暂存区的指定文件到仓库区 |
| `git commit -a` | 提交工作区自上次commit之后的变化，直接到仓库区 |
| `git commit -v` | 提交时显示所有diff信息 |
| `git commit --amend -m [message]` | 使用一次新的commit，替代上一次提交。如果代码没有任何新变化，则用来改写上一次commit的提交信息 |
| `git commit --amend [file1] [file2]` | 重做上一次commit，并包括指定文件的新变化 |
| **分支管理** |  |
| `git branch` | 显示所有本地分支 |
| `git branch -r` | 列出所有远程分支 |
| `git branch -a` | 列出所有本地分支和远程分支 |
| `git branch [branch-name]` | 新建一个分支，但依然停留在当前分支 |
| `git branch --track [branch] [remote-branch]` | 新建一个分支，与指定的远程分支建立追踪关系 |
| `git branch -d [branch-name]` | 删除分支 |
| `git push origin --delete [branch-name]` | 删除远程分支 |
| `git branch -dr [remote/branch]` | 删除远程分支 |
| `git checkout -b [branch]` | 新建一个分支，并切换到该分支 |
| `git checkout [branch-name]` | 切换到指定分支，并更新工作区 |
| `git checkout -` | 切换到上一个分支 |
| `git branch --set-upstream [branch] [remote-branch]` | 建立追踪关系，在现有分支与指定的远程分支之间 |
| **合并与衍合** |  |
| `git merge [branch]` | 合并指定分支到当前分支 |
| `git rebase <branch>` | 衍合指定分支到当前分支 |
