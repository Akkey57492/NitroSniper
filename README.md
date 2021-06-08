# NitroSniper
discord.giftが含まれるメッセージが送信された場合コンソールに表示 + デスクトップ通知

# 使用ライブラリ
node.js
discord.js
node-notifier

# デスクトップ通知
```javascript
notifier.notify({
	title: "Nitro hit",
  message: "DiscordNitroのギフトURLを検知しました。"
})
```
