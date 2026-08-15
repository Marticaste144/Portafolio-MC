import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ProjectsList } from "./components/ProjectsList";
import { Stack } from "./components/Stack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <ProjectsList />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
