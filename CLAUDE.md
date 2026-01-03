# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 概要

このプロジェクトはmkizka向けのESLintルールを提供するパッケージです。TypeScript/JavaScript向けの設定とReact向けの設定を提供しています。

## 開発コマンド

```bash
# 依存関係のインストール
pnpm install

# ビルド
pnpm build

# 型チェック
pnpm typecheck

# リント
pnpm lint

# テスト実行
pnpm test

# フォーマット（リント修正とPrettier）
pnpm format

# ESLint設定プレビュー
pnpm preview
```

## アーキテクチャ

- `src/index.ts`: メインエントリーポイント、configs.typescriptとconfigs.reactをエクスポート
- `src/typescript.ts`: TypeScript向けのESLint設定、厳格な型チェックとimportルールを含む
- `src/react.ts`: React向けのESLint設定、React Hooksルールを含む
- `src/types.ts`: 共通の型定義

## 設定の構造

- ESLint Flat Configを使用
- TypeScript設定: 基本ルール + 型チェック + import整理
- React設定: React推奨ルール + JSX Runtime + Hooks
- テストファイルでは一部ルールを緩和

## ビルド出力

- `dist/`: TypeScriptコンパイル済みファイル
- CJS/ESM対応、型定義ファイル付き
