import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

export function cn(...className: ClassValue[]) {
  return twMerge(clsx(...className));
}
