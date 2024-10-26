import newsImg from '@/public/assets/images/bg-2.png';
import { newsReportImg } from '@/public/assets/images/home';

export const dummyNewsArr = [
  {
    id: 1,
    src: newsImg,
    poolingUnit: 'poolingUnit',
    localGovt: 'localGovt',
    state: 'state',
    impressions: 40,
    title:
      'Protest is ongoing. No Labour Party supporter would be allowed to vote in this ward.',
    status: 'status',
    createdAt: '2023-02-01T18:57:48.921Z',
  },
  {
    id: 2,
    src: newsImg,
    poolingUnit: 'poolingUnit',
    localGovt: 'localGovt',
    state: 'state',
    impressions: 10,
    title:
      'Protest is ongoing. No Labour Party supporter would be allowed to vote in this ward.',
    status: 'status',
    createdAt: '2023-08-17T18:57:48.921Z',
  },
  {
    id: 3,
    src: newsImg,
    poolingUnit: 'poolingUnit',
    localGovt: 'localGovt',
    state: 'state',
    impressions: 4,
    title:
      'Protest is ongoing. No Labour Party supporter would be allowed to vote in this ward.',
    status: 'status',
    createdAt: '2023-05-27T18:57:48.921Z',
  },
  {
    id: 4,
    src: newsImg,
    poolingUnit: 'poolingUnit',
    localGovt: 'localGovt',
    state: 'state',
    impressions: 40,
    title:
      'Protest is ongoing. No Labour Party supporter would be allowed to vote in this ward.',
    status: 'status',
    createdAt: '2023-04-10T18:57:48.921Z',
  },
  {
    id: 5,
    src: newsImg,
    poolingUnit: 'poolingUnit',
    localGovt: 'localGovt',
    state: 'state',
    impressions: 40,
    title:
      'Protest is ongoing. No Labour Party supporter would be allowed to vote in this ward.',
    status: 'status',
    createdAt: '2024-09-12T12:33:48.921Z',
  },
  {
    id: 6,
    src: newsImg,
    poolingUnit: 'poolingUnit',
    localGovt: 'localGovt',
    state: 'state',
    impressions: 40,
    title:
      'Protest is ongoing. No Labour Party supporter would be allowed to vote in this ward.',
    status: 'status',
    createdAt: '2024-09-13T12:33:48.921Z',
  },
  {
    id: 7,
    src: newsImg,
    poolingUnit: 'poolingUnit',
    localGovt: 'localGovt',
    state: 'state',
    impressions: 40,
    title:
      'Protest is ongoing. No Labour Party supporter would be allowed to vote in this ward.',
    status: 'status',
    createdAt: '2024-09-13T11:33:48.921Z',
  },
];

export const partyArr = [
  { label: 'All Progressives Congress', value: 'APC' },
  { label: 'Peoples Democratic Party', value: 'PDP' },
  { label: 'Labour Party', value: 'LP' },
  { label: 'Social Democratic Party', value: 'SDP' },
  { label: 'All Progressives Grand Alliance', value: 'APGA' },
  { label: 'Young Progressives Party', value: 'YPP' },
  { label: 'New Nigeria Peoples Party', value: 'NNPP' },
  { label: 'Action Democratic Party', value: 'ADP' },
  { label: 'African Action Congress', value: 'AAC' },
  { label: 'Accord Party', value: 'AP' },
];

export const resultData = [
  {
    contestantName: 'foo',
    party: 'PDP',
    votesNo: 5000,
    image: newsReportImg,
  },
  {
    contestantName: 'foo',
    party: 'PDP',
    votesNo: 4000,
    image: newsReportImg,
  },
  {
    contestantName: 'foo',
    party: 'PDP',
    votesNo: 2000,
    image: newsReportImg,
  },
  {
    contestantName: 'foo',
    party: 'PDP',
    votesNo: 4,
    image: newsReportImg,
  },
];

export const resultData2 = [
  {
    contestantName: 'foo',
    party: 'PDP',
    votesNo: 23000,
    image: newsReportImg,
    progress: { percent: 80, setPercent: () => {} },
  },
  {
    contestantName: 'foo',
    party: 'PDP',
    votesNo: 6423,
    image: newsReportImg,
    progress: { percent: 60, setPercent: () => {} },
  },
  {
    contestantName: 'foo',
    party: 'PDP',
    votesNo: 2333,
    image: newsReportImg,
    progress: { percent: 30, setPercent: () => {} },
  },
  {
    contestantName: 'foo',
    party: 'PDP',
    votesNo: 1023,
    image: newsReportImg,
    progress: { percent: 12, setPercent: () => {} },
  },
];

export const pullingUnitData = [
  {
    electionInfo: {
      totalRegisteredVoters: 500,
      totalAccredictedVoters: 500,
      totalVotesCount: 500,
      totalValidVotes: 500,
      totalRejectedVotes: 500,
    },
    candidates: [
      {
        contestantName: 'foo',
        party: 'foo',
        votesNo: 30,
        image: newsReportImg,
      },
      {
        contestantName: 'foo',
        party: 'foo',
        votesNo: 30,
        image: newsReportImg,
      },
      {
        contestantName: 'foo',
        party: 'foo',
        votesNo: 30,
        image: newsReportImg,
      },
    ],
    issues: " There was an attack in this polling unit. It was reported that some armed men arrived in groups of three on a bike and started threatening voters to vote for a particular candidate. As reported by the eye witnesses, the voters  where forced into voting for the candidate of the All                      progressive congress party (APC)",
  },
];
