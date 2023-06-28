import React, { FC, PropsWithChildren } from 'react';
import { SidebarContainer } from './sidebar.styles';
import { SidebarProps } from './sidebar.types';
import { Link } from 'react-router-dom';

const Sidebar: FC<
  SidebarProps
> = ({}: PropsWithChildren<SidebarProps>): JSX.Element => {
  return (
    <SidebarContainer>
      <ul>
        <li>
          <Link to="/">
            <a>
              <span>Home</span>
            </a>
          </Link>{' '}
        </li>
        <li>
          <Link to="/users">
            <a>
              <span>Users</span>
            </a>
          </Link>{' '}
        </li>
      </ul>
    </SidebarContainer>
  );
};
export default Sidebar;
