import Navbar from "@/components/navbar";
import Index from "@/components/index";
import Footer from "@/components/footer";
import BookSlider from "@/components/bookslider";
import EdukoSlider from "@/components/bookslider2"; // Import druhého slideru
import AboutEdukoSection from "@/components/AboutEdukoSection";
import TeachingMaterials from "@/components/TeachingMaterials";

export default function Home() {
  return (
    <div className="bg-[#064E3B] text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content area grows to fill space */}
      <div className="flex-grow">
        <Index />

        {/* První slider */}
        <BookSlider />

        {/* Druhý slider vložený pod první */}
        <EdukoSlider />
      </div>

      {/* TeachingMaterials section */}
      <div className="">
        <TeachingMaterials />
      </div>

      {/* AboutEdukoSection */}
      <AboutEdukoSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
