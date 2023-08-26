import { Heading } from '@chakra-ui/react';
import IconLink from 'components/IconLink';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiGraphql,
  SiJest,
  SiPlaywright,
} from 'react-icons/si';

export default function Skills() {
  const iconSize = '3.75rem';
  const iconRole = 'img';
  const stackIcons = [
    {
      icon: SiHtml5,
      id: 1,
      label: 'HTML',
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiCss3,
      id: 2,
      label: 'CSS',
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiJavascript,
      id: 3,
      label: 'JavaScript',
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiReact,
      id: 4,
      label: 'React',
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiTypescript,
      id: 5,
      label: 'TypeScript',
      role: iconRole,
      size: iconSize,
    },

    {
      icon: SiNextdotjs,
      id: 6,
      label: 'NextJS',
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiGraphql,
      id: 7,
      label: 'GraphQL',
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiJest,
      id: 8,
      label: 'Jest',
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiPlaywright,
      id: 9,
      label: 'Playwright',
      role: iconRole,
      size: iconSize,
    },
  ];

  return (
    <section id="stack">
      <Heading as="h3">My Current Stack</Heading>

      <IconLink hasLink={false} iconInfos={stackIcons} />
    </section>
  );
}

Skills.displayName = 'Skills';
