import { createI18n } from 'vue-i18n'

export const numberFormat = new Intl.NumberFormat('en')

export const languageOptionList = [
  { value: 'en-US', label: 'English' },
  { value: 'ko-KR', label: 'Korean' },
  { value: 'zh-CN', label: 'Chinese (Simplified)' },
  { value: 'zh-TW', label: 'Chinese (Traditional)' },
]

export const i18n = createI18n({
  legacy: false,
  locale: 'en-US',
  messages: {
    'en-US': {
      hello: 'Hello, nice to meet you👋',
      s_won: '{0} won',
    },
    'zh-CN': {
      hello: '你好，幸会👋',
      s_won: '{0}韩元',
    },
    'zh-TW': {
      hello: '你好，幸會👋',
      s_won: '{0}韓元',
    },
    'ko-KR': {
      hello: '안녕하세요, 만나서 반갑습니다👋',
      s_won: '{0}원',
    },
  },
})
