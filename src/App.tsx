import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f7f3ec]">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
