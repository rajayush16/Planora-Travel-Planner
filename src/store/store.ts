import { create } from "zustand";
import {
  AuthSlice,
  createAuthSlice,
} from "./slices";
import { createScrapingSlice, ScrapingSlice } from "./slices/scraping-slices";

type StoreState = AuthSlice & ScrapingSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createAuthSlice(...a),
  ...createScrapingSlice(...a),
}));