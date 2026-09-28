import { ConstellationOption } from '../types';
import { MEMBERS } from './locations';

export const CONSTELLATIONS: ConstellationOption[] = [
  {
    id: 'everyone',
    name: 'EVERYONE',
    memberCount: 8,
    tagline: '“Our shared window”',
    quote: '“Our shared window is small, but it exists!” All 8 participants can gather concurrently.',
    description: 'All 8 members meet concurrently across Bali, Europe, and Eastern North America.',
    targetUtcHour: 13,
    times: {
      bali: '8 – 10 PM',
      germany: '2 – 4 PM',
      portugal: '1 – 3 PM',
      eastern: '8 – 10 AM'
    },
    members: [
      MEMBERS.bec,
      MEMBERS.varun,
      MEMBERS.laurin,
      MEMBERS.arsham,
      MEMBERS.vesta,
      MEMBERS.justin,
      MEMBERS.isaac,
      MEMBERS.river
    ],
    summaryDetail: 'In this sweet spot, Bec is closing her day in Ubud (9:00 PM WITA), Germany & Portugal are in warm afternoon flow (2:00 PM & 1:00 PM), and Eastern N. America gathers over morning breakfast (8:00 AM EDT).'
  },
  {
    id: 'eu-na',
    name: 'EUROPE + N. AMERICA',
    memberCount: 7,
    tagline: '“Afternoon/ evening & Working hours”',
    quote: 'Wide open 7-hour bridge of possible meetings times across the Atlantic.',
    description: 'Wide open 7-hour bridge of possible meetings times between Europe and North America.',
    targetUtcHour: 15,
    times: {
      portugal: '2 – 9 PM',
      germany: '3 – 10 PM',
      eastern: '9 AM – 4 PM'
    },
    members: [
      MEMBERS.vesta,
      MEMBERS.varun,
      MEMBERS.laurin,
      MEMBERS.arsham,
      MEMBERS.justin,
      MEMBERS.isaac,
      MEMBERS.river
    ],
    summaryDetail: 'Portugal & Germany are in peak afternoon/early evening (3:00 – 8:00 PM); Eastern N. America has its entire productive midday window (10:00 AM – 3:00 PM EDT).'
  },
  {
    id: 'eu-bali',
    name: 'EUROPE + BALI',
    memberCount: 5,
    tagline: '“Morning meets sunset”',
    quote: 'Bali enjoys evening tea while Europe moves through productive morning & lunch hours.',
    description: 'Bali enjoys evening tea while Europe moves through productive morning & lunch hours.',
    targetUtcHour: 10,
    times: {
      bali: '4 – 8 PM',
      germany: '10 AM – 2 PM',
      portugal: '9 AM – 1 PM'
    },
    members: [
      MEMBERS.bec,
      MEMBERS.varun,
      MEMBERS.laurin,
      MEMBERS.arsham,
      MEMBERS.vesta
    ],
    summaryDetail: 'Morning in Portugal (9 AM) and Germany (10 AM) coincides seamlessly with late afternoon & evening sunset across Ubud, Bali (4:00 – 8:00 PM WITA).'
  },
  {
    id: 'bali-na',
    name: 'BALI + N. AMERICA',
    memberCount: 4,
    tagline: '“Antipodal alignment”',
    quote: 'Morning in Bali and post-dinner evening in North America.',
    description: 'Morning in Bali and post-dinner evening in North America.',
    targetUtcHour: 23,
    times: {
      bali: '7 – 10 AM',
      eastern: '7 – 10 PM'
    },
    members: [
      MEMBERS.bec,
      MEMBERS.justin,
      MEMBERS.isaac,
      MEMBERS.river
    ],
    summaryDetail: 'Morning in Bali (7:00 – 9:00 AM) aligns harmoniously with evening winding down in Eastern North America (7:00 – 9:00 PM previous evening).'
  }
];
