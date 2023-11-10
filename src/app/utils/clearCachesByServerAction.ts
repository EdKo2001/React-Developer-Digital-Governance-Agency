"use server";
import { revalidatePath } from "next/cache";

const clearCachesByServerAction = async (path?: string) => {
  try {
    path && revalidatePath(path);
  } catch (error) {
    console.error("clearCachesByServerAction=> ", error);
  }
};

export default clearCachesByServerAction;
