// src/index.ts
import { Context, Schema } from 'koishi'

export const name = 'answer-book'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context, config: Config) {
  // 注册 answerbook 命令，不需要任何参数
  ctx.command('answerbook', '获取答案之书的神秘答案')
    .action(async ({ session }) => {
      try {
        // 调用答案之书 API
        const response = await ctx.http.get('https://uapis.cn/api/v1/answerbook/ask', {
          params: {
            question: '给我一个随机的答案'
          }
        })

        // 返回答案文本
        return response.answer || '答案之书暂时无法回答，请稍后再试'
      } catch (error) {
        console.error('答案之书 API 调用失败:', error)
        return '答案之书遇到了一些问题，请稍后再试'
      }
    })
}
