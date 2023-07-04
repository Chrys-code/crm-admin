import React, { FC, PropsWithChildren, useEffect } from 'react';
import { PopupProps } from './popup.types';
import { modalStyles } from './helpers';
import Modal from 'react-modal';
import { PopupActions, PopupContainer } from './popup.styles';
import Button from '../base/button';

const Popup: FC<PopupProps> = ({
  title,
  isOpen,
  onClose,
  action,
  children,
}: PropsWithChildren<PopupProps>): JSX.Element => {
  useEffect((): (() => void) => {
    const closeOnClickOutside = (e: MouseEvent) => {
      // @ts-ignore
      if (e.target.classList.contains('ReactModal__Overlay')) {
        onClose();
      }
    };

    document.addEventListener('click', (e: MouseEvent) =>
      closeOnClickOutside(e)
    );

    return (): void => {
      document.removeEventListener('click', (e: MouseEvent) =>
        closeOnClickOutside(e)
      );
    };
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={(): Function => onClose}
      style={modalStyles}
      shouldCloseOnOverlayClick
      shouldFocusAfterRender
      shouldReturnFocusAfterClose
      shouldCloseOnEsc
    >
      <PopupContainer>
        <span>{title}</span>
        {children}
        <PopupActions>
          <Button onClick={() => onClose()}>Close</Button>
          <Button onClick={() => action()}>Done</Button>
        </PopupActions>
      </PopupContainer>
    </Modal>
  );
};
export default Popup;
