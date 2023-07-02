import React, { FC, PropsWithChildren } from 'react';
import { ListContainer } from './list.styles';
import { ListItemType, ListProps } from './list.types';
import Link from './components/link/link';
import Button from './components/button/button';
import { useLocation, Location } from 'react-router-dom';

const List: FC<ListProps> = ({
  items,
  itemType = 'link',
}: PropsWithChildren<ListProps>): JSX.Element => {
  const location: Location = useLocation();

  const renderLinkList = (items: ListItemType[]): JSX.Element => {
    const listItems: JSX.Element[] = items.map(
      (item: ListItemType, i: number): JSX.Element => (
        <Link key={i} item={item} location={location} />
      )
    );

    return <ListContainer>{listItems}</ListContainer>;
  };

  const renderButtonList = (items: ListItemType[]): JSX.Element => {
    const listItems: JSX.Element[] = items.map(
      (item: ListItemType, i: number): JSX.Element => (
        <Button key={i} item={item} />
      )
    );

    return <ListContainer>{listItems}</ListContainer>;
  };

  if (itemType === 'button') {
    return <>{renderButtonList(items)}</>;
  }

  return <>{renderLinkList(items)}</>;
};
export default List;
