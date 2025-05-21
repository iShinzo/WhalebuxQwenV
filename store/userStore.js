import { create } from 'zustand'

export const useUserStore = create(set => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),

  coinBalance: 0,
  wbuxBalance: 0,
  miningLevel: 1,
  upgradeLevels: { base: 1, rate: 1, time: 1 },
  boosts: [],
  referralCount: 0,

  loginWithWallet: async (address) => {
    console.log("Logging in with wallet:", address)
    set({
      user: { wallet: address },
      coinBalance: 5000,
      wbuxBalance: 0.5,
      miningLevel: 1,
      referralCount: 3
    })
    return { wallet: address }
  },

  updateBalances: (coins, wbux) => set({ coinBalance: coins, wbuxBalance: wbux })
}))