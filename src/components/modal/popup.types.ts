import { ReactNode } from 'react';

export interface PopupProps {
  title: string;
  isOpen: boolean;
  onClose: Function;
  action: Function;
  children: ReactNode;
}
export interface PopupContainerStyleProps {}
