import { create } from "zustand";

const useDirection = create(set => ({
  direction: "ltr",
  setDirection: dir => set(() => ({ direction: dir })),
}));

export default useDirection;
