import { Flex, Heading } from '@chakra-ui/react';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import IconLink from 'components/IconLink';
import { memo } from 'react';

const Contact = memo(() => {
  const iconSize = '3.75rem';
  const iconRole = 'img';
  const contactIcons = [
    {
      icon: SiGithub,
      id: 1,
      label: 'GitHub',
      link: 'https://github.com/bill742',
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiLinkedin,
      id: 2,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/bill742',
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiGmail,
      id: 3,
      label: 'Gmail',
      link: 'mailto:742designs@gmail.com',
      role: iconRole,
      size: iconSize,
    },
  ];

  return (
    <section id="contact">
      <Heading as="h3">Contact</Heading>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        columnGap="3rem"
        rowGap="2rem"
      >
        <IconLink hasLink={true} iconInfos={contactIcons} />
      </Flex>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
