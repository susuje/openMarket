import axios from 'axios'

const URL = 'https://openmarket.weniv.co.kr'

// 기본 인스턴스
export const BaseInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
