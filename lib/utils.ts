import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Comparison function for sorting objects by date.
 * @param a - The first object to compare.
 * @param b - The second object to compare.
 * @param dateKey - The key of the date property in the objects.
 * @returns A negative number if `a` should come before `b`, a positive number if `a` should come after `b`, or 0 if they are equal.
 */
export const sortByDate = <T extends Record<string, any>>(dateKey: string) => {
  return (a: T, b: T): number => {
    const dateA = new Date(a[dateKey]);
    const dateB = new Date(b[dateKey]);
    return dateA.getTime() - dateB.getTime();
  };
};
