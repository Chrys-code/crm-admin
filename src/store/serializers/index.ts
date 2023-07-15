export const serializeItemById = (item: any): { [key: string]: any } => {
    return {
        [item._id]: {
            ...item,
        },
    };
}

export const serializeItemsById = (
    items: any[] | null
): { [key: string]: any } => {
    let serializedItems: { [key: string]: any } = {};

    if (items && items.length) {
        items.forEach(
            (item: any) => (serializedItems[item._id] = { ...item })
        );
    }

    return serializedItems;
};
