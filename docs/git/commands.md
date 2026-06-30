---
outline: deep
---

# Git 命令

## Daily（每天都会用）

```bash
git status
```

查看仓库状态。

```bash
git add .
```

添加全部修改。

```bash
git commit -m "feat: xxx"
```

提交。

```bash
git push
```

推送。

```bash
git pull
```

拉取更新。

## 查看历史

```bash
git log
```

完整历史。

```bash
git log --oneline
```

一行显示。
例如：

```
71c8c23 feat: add footer
0f1434d style: update background
```

```bash
git log --graph --oneline --all
```

树状历史。

## 修改最近一次提交

仅修改提交信息：

```bash
git commit --amend -m "新的提交信息"
```

修改文件 + 提交：

```bash
git add .
git commit --amend
```

已经 Push：

```bash
git push --force-with-lease
```

推荐使用 **`--force-with-lease`**，比直接 `--force` 更安全。

::: danger 危险命令
如非特殊情况，不要使用 `git push --force` 命令。
:::

## 修改更早的提交

最近 2 次：

```bash
git rebase -i HEAD~2
```

最近 3 次：

```bash
git rebase -i HEAD~3
```

把：

```
pick
```

改成：

```
reword
```

保存即可修改提交信息。
如果还要修改内容：

```
edit
```

完成：

```bash
git rebase --continue
```

取消：

```bash
git rebase --abort
```

## 查看差异

工作区：

```bash
git diff
```

暂存区：

```bash
git diff --cached
```

两个提交：

```bash
git diff hash1 hash2
```

## 撤销

取消暂存：

```bash
git restore --staged .
```

恢复文件：

```bash
git restore .
```

恢复某个文件：

```bash
git restore App.vue
```

## 分支

查看：

```bash
git branch
```

切换：

```bash
git switch main
```

新建：

```bash
git switch -c dev
```

## 远程仓库

查看：

```bash
git remote -v
```

修改地址：

```bash
git remote set-url origin git@github.com:mcenahle/project.git
```

## 标签（偶尔）

创建：

```bash
git tag v1.0.0
```

推送：

```bash
git push origin v1.0.0
```

全部：

```bash
git push origin --tags
```

## 清理

查看未跟踪文件：

```bash
git clean -n
```

删除：

```bash
git clean -fd
```

## 仓库信息

当前 Commit：

```bash
git rev-parse HEAD
```

当前分支：

```bash
git branch --show-current
```

配置：

```bash
git config --list
```
