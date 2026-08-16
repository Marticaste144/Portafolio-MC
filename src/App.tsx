import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ProjectsList } from "./components/ProjectsList";
import { Stack } from "./components/Stack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <ProjectsList />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
