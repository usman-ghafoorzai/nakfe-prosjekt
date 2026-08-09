"use client";

import { useEffect, useId, useRef } from "react";
import type { DonationContent } from "@/types/donation";

type DonationDialogProps = {
  content: DonationContent;
  isOpen: boolean;
  onClose: () => void;
};

export const donationDialogId = "donation-dialog";

export default function DonationDialog({
  content,
  isOpen,
  onClose,
}: DonationDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      id={donationDialogId}
      aria-describedby={descriptionId}
      aria-labelledby={headingId}
      className="fixed inset-0 m-auto w-[min(calc(100vw-2rem),36rem)] max-w-none bg-transparent p-0 text-stone-950 backdrop:bg-stone-950/75"
      onCancel={onClose}
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[calc(100dvh-2rem)] overflow-y-auto border-t-8 border-red-700 bg-[#f7f1e8] px-5 pb-6 pt-7 shadow-2xl shadow-stone-950/35 sm:px-8 sm:pb-8 sm:pt-9">
        <button
          type="button"
          aria-label={content.closeLabel}
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center border-2 border-stone-950 bg-white text-2xl font-black leading-none text-stone-950 outline-none transition duration-200 ease-out hover:bg-stone-950 hover:text-white focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0 sm:right-6 sm:top-6"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="pr-14 sm:pr-16">
          <h2
            id={headingId}
            className="text-3xl font-black leading-[0.98] tracking-[-0.055em] text-stone-950 sm:text-4xl"
          >
            {content.title}
          </h2>
        </div>

        <p
          id={descriptionId}
          className="mt-5 max-w-lg text-base font-semibold leading-7 text-stone-700"
        >
          {content.introduction}
        </p>

        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {content.fields.map((field) => (
            <div
              key={field.id}
              className="min-w-0 border-l-[6px] border-red-700 bg-white px-4 py-4 shadow-sm shadow-stone-950/5"
            >
              <dt className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
                {field.label}
              </dt>
              <dd className="mt-2 break-words text-xl font-black leading-tight tracking-[-0.025em] text-stone-950 sm:text-2xl">
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </dialog>
  );
}
