import { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { CrossIcon, ShieldCloseIcon } from 'lucide-react';

type ModalProps = {
  isVisible: boolean;
  closeModal?: () => void;
  className?: string;
} & React.ComponentProps<'dialog'>;

export default function Modal({
  isVisible,
  closeModal,
  children,
  className,
}: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function handleKeyDown(event: { key: string; preventDefault: () => void }) {
      // if (isVisible && event.key === 'Escape') {
      //   event.preventDefault(); // Prevent the default behavior of the escape key
      //   // Optionally, you can add additional logic here before closing the modal
      //   location.pathname.includes('dashboard') && !isLoggedIn ? null : modal?.current?.close();
      // }
    }
    if (isVisible) {
      modal.current?.showModal();
      // Disable window scroll
      document.body.style.overflowY = 'hidden';
      // Add event listener when the modal is opened
      // document.addEventListener('keydown', handleKeyDown);
    } else {
      modal.current?.close();
    }
    // Remove event listener when the modal is closed or unmounted
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  return (
    <dialog
      className={`rounded-md p-10 ${className}`}
      onClose={closeModal}
      ref={modal}
    >
      <aside className={''}>
        {children}
        <Button
          variant={'ghost'}
          size={'sm'}
          className={`max-w-max absolute top-2 right-2`}
          onClick={() => {
            closeModal && closeModal();
            modal?.current?.close();
          }}
        >
          <ShieldCloseIcon />
        </Button>
      </aside>
    </dialog>
  );
}
