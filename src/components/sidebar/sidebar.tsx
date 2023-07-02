import React, { FC, PropsWithChildren } from 'react';
import { SidebarContainer } from './sidebar.styles';
import List from '../base/list';
import { getMenuOptionsByLocation } from './helpers';
import { ListItemType } from '../base/list/list.types';
import { SidebarProps } from './sidebar.types';

const Sidebar: FC<SidebarProps> = ({
  location,
}: PropsWithChildren<SidebarProps>): JSX.Element => {
  const menuItems: ListItemType[] = getMenuOptionsByLocation(location);

  return (
    <SidebarContainer>
      <List itemType="link" items={menuItems} />
    </SidebarContainer>
  );
};
export default Sidebar;
