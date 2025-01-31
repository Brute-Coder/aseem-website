import Navbar from "@/components/Navbar";
import AboutTeacher from "@/components/About-Teacher"
import SocialLinks from "@/components/Social-Links";
import Footer from "@/components/Footer";
import Books from "@/components/Books";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Floating from "@/components/Floating";


export default function Home() {
  return (
    <main>
      <Floating />
      <Navbar />
      <Hero />
      <AboutTeacher />
      <Books />
      <Courses />
      <SocialLinks />
      <Footer />
    </main>
  );
}
