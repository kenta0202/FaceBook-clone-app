## リモートリポジトリを新しく作成し、push する方法

-
- git remote -v リモート URL を確認
- git remote set-url origin {new url} 新しいリモート URL に変更する
- git add .
- git commit -m "test"
- git push

- git init 「リポジトリを新規作成」.gitignore
- git status 状況を見る
- git log コミット履歴を見る
- git branch ブランチ一覧を表示
- git banch -d ブランチ名 指定ブランチを削除
- git switch ブランチ名　指定ブランチに切り替え
- git switch -c 新しいブランチ名　指定ブランチを作成
- git merge ブランチ名
- git restore . source 戻したい場所
- git restore . --source HEAD~2 2 個前まで戻す
- git add 　作業ツリー（ワーキングツリー）から新たに追加/変更/削除したファイルをインデックスに追加
- git commit インデックスに存在するすべてのファイルをコミット（ローカルリポジトリにマージ）する
- git commit -m "[コミットメッセージ]"
- git reset コミットした後,直前のコミットを取り消す
- git revert [取り消すコミット ID]
-

working tree,working area,作業ツリー,ワーキングディレクトリ
↓add
index
↓commit
ローカルリポジトリ,リポジトリ
↓push
リモートリポジトリ

- メインブランチと別ブランチ
- サーバー上にありチームで共有するリモートリポジトリ（マスターリポジトリ）と、自分のパソコン上で管理するローカルリポジトリ
- git pull [マージ元のリモートリポジトリ名] [マージ先のローカルリポジトリ名]
- git push [マージ先のリモートリポジトリ名] [マージ元のローカルリポジトリ名]
-
