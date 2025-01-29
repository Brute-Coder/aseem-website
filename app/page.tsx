import Navbar from "@/components/Navbar";
import AboutTeacher from "@/components/About-Teacher"
import SocialLinks from "@/components/Social-Links";
import Footer from "@/components/Footer";
import Books from "@/components/Books";
import Courses from "@/components/Courses";


export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutTeacher />
      <Books />
      <Courses />
      <SocialLinks />
      <Footer />
    </main>
  );
}
