﻿# To-Do-ap
クローン
git clone https://github.com/moamoamoko/To-Do-ap.git

作業する場合はdevelopブランチで作業をし、ますdevelopブランチにコミットして本番環境（main）にプルリクエストをする

gitコマンドまとめ

git init	リポジトリを新規作成
git clone	リポジトリをコピー
git gc	リポジトリを最適化
git pull	リモートリポジトリの変更点をローカルリポジトリにマージ
git push	ローカルリポジトリの変更点をリモートリポジトリにマージ
git add	コミット対象のファイルを登録
git commit	変更されたファイルをコミット（ローカルリポジトリに変更内容を入れ込む）
git commit -m "メッセージ内容"　コミットの際はこっちがおすすめ
git reset	直前のコミットを取消
git revert	特定のコミットを取消
git tag	コミットにタグを付ける
git log	コミット履歴を表示
git status	作業ツリー内の差分ファイルを表示
git diff	ファイル内の差分箇所を表示
git mv	ファイルを移動／ファイル名を変更
git stash	作業ツリーの状態を一時的に保存
git branch	ブランチの作成／一覧表示
git checkout	処理対象ブランチの切り替え
git merge	別のブランチから変更点をマージ
git rebase	派生元ブランチに変更点をマージ
