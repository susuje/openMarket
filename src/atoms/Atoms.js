import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const userTokenState = atom({
  key: 'userTokenState',
  default: '',
  effects_UNSTABLE: [persistAtom],
})
export const userTypeState = atom({
  key: 'userTypeState',
  default: '',
  effects_UNSTABLE: [persistAtom],
})

export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

// 계정 이름 관리용 전역 상태
export const myUserName = atom({
  key: 'myUserName',
  default: '',
  effects_UNSTABLE: [persistAtom],
})
