import RecentUpcomingElections from './RecentUpcomingElections';
import ElectionDisorderCoverage from "./ElectionDisorderCoverage"


function ElectionUpdateSection() {
  
  return (
        <section className="w-screen flex justify-center py-16 bg-black/5">

            <div className="md:w-[1104px] flex flex-col md:flex-row md:space-x-16 space-y-16">
                <div className="md:w-1/2">
                    <RecentUpcomingElections />
                </div>
                <div className="md:w-1/2">
                    <ElectionDisorderCoverage /> 
                </div>               
            </div>
            
        </section>
  );
}

export default ElectionUpdateSection;
