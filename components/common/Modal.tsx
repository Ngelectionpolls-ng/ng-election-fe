'use client';

import { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

type ModalProps = {
  isVisible: boolean;
  closeModal?: () => void;
  className?: string;
  btnClass?: string;
} & React.ComponentProps<'dialog'>;

export default function Modal({
  isVisible,
  closeModal,
  children,
  btnClass,
  className,
}: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isVisible) {
      modal.current?.showModal();
      // Disable window scroll
      document.body.style.overflowY = 'hidden';
    } else {
      modal.current?.close();
      // Re-enable window scroll when modal closes
      document.body.style.overflowY = 'auto';
    }

    // Cleanup in case modal is closed by other means
    return () => {
    document.body.style.overflowY = 'auto';
    };
  }, [isVisible]);

  return (
    <dialog
      className={`rounded-md ${className}`}
      onClose={closeModal}
      ref={modal}
    >
      <aside className="flex flex-col gap-4">
        {children}
        <Button
          variant={'ghost'}
          size={'sm'}
          className={`max-w-max absolute top-2 right-2 ${btnClass}`}
          onClick={() => {
            closeModal && closeModal();
            modal?.current?.close();
          }}
        >
          <X />
        </Button>
      </aside>
    </dialog>
  );
}
