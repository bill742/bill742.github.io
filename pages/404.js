import { Heading } from '@chakra-ui/react';
import Layout from 'components/Layout';
import SiteHeading from 'components/Sections/SiteHeading';

export default function Custom404() {
  return (
    <Layout>
      <SiteHeading />
      <Heading as="h2" size="lg">
        404 - Page Not Found
      </Heading>
    </Layout>
  )
}
