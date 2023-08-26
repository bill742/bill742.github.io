import { Icon, ListItem, UnorderedList } from '@chakra-ui/react';
import { FC, memo, useState } from 'react';

import Link from 'next/link';
import { iconType } from 'types/iconTypes';

const IconLink: FC<{ hasLink: boolean; iconInfos: Array<iconType> }> = memo(
  ({ hasLink, iconInfos }) => {
    const iconItems = iconInfos.map((icon) => {
      return (
        <ListItem key={icon.id}>
          {hasLink && (
            <Link href={icon.link || ''} passHref aria-label={icon.label}>
              <Icon as={icon.icon} boxSize={icon.size} role={icon.role} />
            </Link>
          )}

          {!hasLink && (
            <Icon
              as={icon.icon}
              boxSize={icon.size}
              role={icon.role}
              aria-label={icon.label}
            />
          )}
        </ListItem>
      );
    });

    return (
      <UnorderedList
        listStyleType="none"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        columnGap="3rem"
        rowGap="2rem"
      >
        {iconItems}
      </UnorderedList>
    );
  },
);

IconLink.displayName = 'IconLink';

export default IconLink;
