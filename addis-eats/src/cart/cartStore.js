import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (dish) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(item => item.id === dish.id);
          if (existingItemIndex >= 0) {
            const newItems = [...state.items];
            newItems[existingItemIndex] = {
              ...newItems[existingItemIndex],
              quantity: newItems[existingItemIndex].quantity + 1
            };
            return { items: newItems };
          }
          return { items: [...state.items, { ...dish, quantity: 1 }] };
        });
      },
      
      removeItem: (dish) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(item => item.id === dish.id);
          if (existingItemIndex >= 0) {
            const newItems = [...state.items];
            if (newItems[existingItemIndex].quantity > 1) {
              newItems[existingItemIndex] = {
                ...newItems[existingItemIndex],
                quantity: newItems[existingItemIndex].quantity - 1
              };
              return { items: newItems };
            }
            return { items: state.items.filter(item => item.id !== dish.id) };
          }
          return state;
        });
      },
      
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
