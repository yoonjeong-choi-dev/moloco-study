import React, { FC, useEffect, useRef } from "react";

export interface ListItem {
  id: number;
}

export interface ListItems {
  listItems?: Array<ListItem>;
}

const ListCreator: FC<ListItems> = ({listItems}: ListItems) => {
  let renderItems = useRef<Array<JSX.Element> | undefined>();
  useEffect(() => {
    console.log('ListCreator is rendered');
    renderItems.current = listItems?.map((item, idx) => {
      return <div key={item.id}>{item.id}</div>
    });
  }, [listItems]);

  return (
    <React.Fragment>
      {renderItems.current}
    </React.Fragment>
  );
}

export default React.memo(ListCreator);