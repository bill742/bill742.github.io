import { Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import EmailSvg from '../icons/social/EmailSvg';
import GitHubSvg from '../icons/social/GitHubSvg';
import LinkedInSvg from '../icons/social/LinkedInSvg';

export default function Contact() {
  return (
    <section>
      <Heading as="h3">Contact</Heading>
      <Flex flexDirection="row" justifyContent="space-between">
        <Link href="https://github.com/bill742" passHref={true}>
          <GitHubSvg />
        </Link>

        <Link href="https://www.linkedin.com/in/bill742" passHref={true}>
          <LinkedInSvg />
        </Link>

        <Link href="mailto:742designs@gmail.com" passHref={true}>
          <EmailSvg />
        </Link>
      </Flex>
    </section>
  );
}
