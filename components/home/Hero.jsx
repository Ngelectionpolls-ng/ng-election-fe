import Map from "./Map";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from 'contexts/App';
import { GetElectionResult } from "services/results/api";
import { useToast } from "hooks/use-toast"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "components/ui/popover"
import { Input } from "components/ui/input"
import { Button } from "components/ui/button"
import {ChevronDown, Check} from "lucide-react";
import { cn } from "lib/utils"
import { getElection, ellipsify } from "helpers";


function Hero() {
  const {elections, setElections, currentElection, setCurrentElection} = useContext(AppContext);
  const [allElections, getAllElections] = useState([]);
  const [error, setError] = useState(false); 
  const [fetching, setFetching] = useState(false); 
  const {toast} = useToast();    
  const [openElections, setOpenElections] = useState(false);
  const [election, setElection] = useState(currentElection);
  const [value, setValue] = useState(null);
  
  const proccessElections = () => {
    if(elections.length){
        elections.forEach(election => {
            election.label = election.name;
            election.value = election.name;
        });
        console.log("Elections Here", elections);
    }
  }

  const getElectionResult = async (election_id, level) => {

      setError(null);
      setFetching(true);
      const response = await GetElectionResult(election_id, level);
      setFetching(false);

      console.log('Election Result', response);
      if(response.status >= 200 && response.status < 300){            
          //TODO
          
      }else{

          if(response.response.data.message){
              setError(response.response.data.message);
              toast({
                  variant: 'destructive',
                  description: response.response.data.message
              });
          }else{
              toast({
                  variant: 'destructive',
                  description: 'Something went wrong. Please try again'
              });
          }
      }
  }

  useEffect(() => {
    proccessElections();
    if(elections.length){
      getElectionResult(elections[0].id, 'national');
      // getElectionResult("6819272ea5a95723f2e44a5e", "gubernatorial");
    }
  }, [elections]);
  
  return (
    <div className="w-screen" style={{ backgroundColor: "rgba(0,0,0,.3)" }}>
      <div
        className="relative bg-[#F2F2F2] flex flex-col items-center w-full"
        style={{
          backgroundImage: `url('/assets/images/home/background.jpeg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Map />
        <div className="absolute left-[80px] top-[200px] w-[300px] hidden md:block">
          <div className="w-full shadow-2xl">
            <div className="bg-white rounded-tl-xl rounded-tr-xl p-2 border-b-2 border-primary pt-6">
              <h3 className="font-bold text-lg">{elections && elections.length ? (currentElection?.name ?? 'PRESIDENTIAL') : 'PRESIDENTIAL'}</h3>
              <p className="text-sm">Election results</p>
            </div>
            {/* <select className="w-full px-5 text-[11px] py-2 bg-white ">
              <option>Select Year</option>
            </select> */}
            <div className="w-full font-semibold">
               {/* {activeMenu} Page */}
                <Popover open={openElections} onOpenChange={setOpenElections}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openElections}
                            className="w-full justify-between rounded text-black text-xs h-9"
                        >
                            {value
                                ? ellipsify(elections.find((election) => election.value === value)?.label, 40)
                                : "Select an Election"}
                            <ChevronDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder="Select Election" className="h-9" />
                            <CommandList>
                                <CommandEmpty>No elections found.</CommandEmpty>
                                <CommandGroup>
                                    {elections.map((an_election) => (
                                        <CommandItem
                                            key={an_election.id}
                                            value={an_election.value}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue);
                                                setCurrentElection(currentValue, elections);
                                                setOpenElections(false);
                                                getElectionResult(an_election.id, an_election.level ?? 'natioonal')
                                            }}
                                        >
                                        {an_election.label}
                                        <Check
                                            className={cn(
                                            "ml-auto",
                                            value === an_election.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
          </div>
          <div className="bg-white border-l-2 mt-2 border-[#A5E2AC] text-[10px] flex items-center p-2 shadow-md rounded-bl-xl rounded-br-xl">
            Click on a state to view election and report details
          </div>
        </div>
        <div className="md:absolute bottom-4 md:left-[80px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="size-4 bg-primary"></div>Past elections
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="size-4 bg-orange-400"></div>Upcoming elections
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Hero;
