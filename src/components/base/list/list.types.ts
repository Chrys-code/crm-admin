export type ListItemType = { label: string; action: string | Function };

export interface ListProps {
  items: ListItemType[];
  itemType: 'link' | 'button';
}
