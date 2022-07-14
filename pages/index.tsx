import Layout from '../components/Layout';
import About from '../components/Sections/About';
import Skills from '../components/Sections/Skills';

export default function Home() {
  return (
    <Layout>
      <About />
      <Skills />
    </Layout>
  );
}
