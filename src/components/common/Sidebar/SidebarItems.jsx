import React from 'react';

import SidebarItemMain from './SidebarItemMain';
import SidebarItemChildren from './SidebarItemChildren';

function SidebarItems({ item, classNames }) {
  if (item.children) {
    return <SidebarItemChildren item={item} classNames={classNames} />;
  } else {
    return <SidebarItemMain item={item} classNames={classNames} />;
  }
}
export default SidebarItems;
