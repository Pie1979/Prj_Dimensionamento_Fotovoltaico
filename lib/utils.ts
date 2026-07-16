import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Classi condivise per i due pulsanti azione su mobile (stessa altezza e proporzioni). */
export const actionBtnBase =
  'box-border flex h-[4.25rem] w-full flex-1 flex-col items-center justify-center gap-1 rounded-2xl border-2 px-4 py-0 text-base font-semibold leading-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 sm:h-11 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-2 sm:rounded-full sm:border-2 sm:px-5 sm:py-2 sm:text-sm';

export const actionBtnTitleRow = 'flex h-6 w-full items-center justify-center gap-2.5 sm:w-auto';
