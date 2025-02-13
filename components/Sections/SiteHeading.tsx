import { Heading } from '@chakra-ui/react';

export default function SiteHeading() {
  return (
    <section>
        <Heading as="h1" textStyle="h1" variant="header">
          Bill Dean
        </Heading>
        <Heading as="h2" size="lg" variant="header">
          Front-End Web Developer
        </Heading>
      </section>
  )
}
