import React from 'react'
import ElectionInfo from './ElectionInfo'

type Props = {}

const electionProps = {
  TotalAccredictedVoters: 500,
  TotalVotesCount: 500,
  TotalValidVotes: 500,
  TotalRejectedVotes: 500,
};

export default function LgaResults({}: Props) {
  return (
    <div>
      <div className='flex justify-between'>
        <h2>LGA votes and top emerged candidates</h2>
        <span className='text-green-600'>Total of 19 local government areas</span>
      </div>
      <div>
        <h2 className="font-bold">LGA</h2>
        <div className="flex gap-10">
          <span>voting status</span>
          <span>election status</span>
        </div>
      </div>
      <ElectionInfo props={electionProps} />
      <div>
        
      </div>
    </div>
  )
}