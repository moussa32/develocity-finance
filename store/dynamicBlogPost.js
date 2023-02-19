import { create } from "zustand";

const usePostURL = create(set => ({
  postSlugs: [],
  setPostSlugs: slugs => set(() => ({ postSlugs: slugs })),
}));

export default usePostURL;
