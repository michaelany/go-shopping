import {create, StateCreator} from 'zustand'
import {devtools} from 'zustand/middleware'

import {createCartSlice, ICartSlice} from '#modules'

export type TState = ICartSlice

export type TCreateSlice<T> = StateCreator<TState, [], [], T>

export const useStore = create<TState>()(
  devtools((...a) => ({
    ...createCartSlice(...a),
  }))
)
