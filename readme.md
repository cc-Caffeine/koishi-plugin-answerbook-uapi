# koishi-plugin-answerbook-uapi

[![npm](https://img.shields.io/npm/v/koishi-plugin-answerbook-uapi?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-answerbook-uapi)

一个用于 [Koishi](https://koishi.chat) 框架的答案之书插件，调用 uapis.cn API 获取神秘的随机答案。

## 功能

- 提供一个 `answerbook` 命令
- 返回随机的神秘答案
- 无需配置，即装即用

## 安装

```bash
npm install koishi-plugin-answerbook-uapi
```

## 使用

在 Koishi 控制台中安装并启用插件后，在聊天中输入：

```
answerbook
```

或

```
答案之书
```

插件将返回一个随机的神秘答案。

## 配置

本插件无需任何配置即可使用。

## 依赖

- Koishi ^4.15.0

## API

使用 [uapis.cn](https://uapis.cn/docs/api-reference/get-answerbook-ask) 提供的答案之书 API。

## 开源协议

MIT
