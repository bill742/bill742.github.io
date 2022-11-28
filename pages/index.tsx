import { SkipNavContent } from '@chakra-ui/skip-nav';
import Layout from '../components/Layout';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Portfolio from '../components/Sections/Portfolio';
import Skills from '../components/Sections/Skills';

export default function Home() {
  return (
    <Layout>
      <SkipNavContent />
      <About />

      <Skills />

      {process.env.NEXT_PUBLIC_ALLOW_PORTFOLIO && <Portfolio />}

      <Contact />
    </Layout>
  );
}
