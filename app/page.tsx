import ElectionUpdateSection from "@/components/home/ElectionUpdateSection";
import Header from "@/components/home/Header";
import JoinCommunitySection from "@/components/home/JoinCommunitySection";
import NewsAndReports from "@/components/home/NewsAndReports";
import OurInitiative from "@/components/home/OurInitiative";
import OurMission from "@/components/home/OurMission";

export default function Home() {

  return (
    <main className="bg-[#F7F7F7] pb-20">
      <Header />
      <ElectionUpdateSection />
      <JoinCommunitySection />
      <OurMission />
      <OurInitiative />
      <NewsAndReports />
    </main>
  );
}
