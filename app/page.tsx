import ElectionDataSection from "@/components/home/ElectionDataSection";
import ElectionUpdateSection from "@/components/home/ElectionUpdateSection";
import EyeWitnesses from "@/components/home/EyeWitnesses";
import FAQSection from "@/components/home/FAQSection";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Initiatives from "@/components/home/Initiatives";
import JoinCommunitySection from "@/components/home/JoinCommunitySection";
import NewsAndReports from "@/components/home/NewsAndReports";
import OurInitiative from "@/components/home/OurInitiative";
import OurMission from "@/components/home/OurMission";
import StayInformed from "@/components/home/StayInformed";

export default function Home() {

  return (
    <main className="bg-[#F7F7F7]">
      <Header />
      <ElectionUpdateSection />
      <JoinCommunitySection />
      <StayInformed />
      <OurMission />
      <Initiatives />
      <EyeWitnesses />
      <ElectionDataSection />
      <NewsAndReports />
      <FAQSection />
      <Footer />
    </main>
  );
}
