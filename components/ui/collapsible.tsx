'use client';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

type CollapsibleProps = {
  header: string;
} & React.ComponentProps<"div">

export default function CollapsibleComponent({ header, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}      
      className="space-y-2 transition-all h-max duration-700 ease-in-out"
    >
      <div className="flex border shadow-sm rounded-md items-center w-full bg-grey justify-between space-x-4 p-2 shadow-shadow">
        <h4 className="text-sm font-medium">{header}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="tab" className='w-[1.5rem] h-[1.5rem] bg-shadow text-accent'>
            <ChevronUp />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent
        className={`space-y-2 overflow-hidden flex flex-col gap-1 ${isOpen ? 'pt-8' : ''}`}
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
