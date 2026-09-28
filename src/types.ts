export interface Member {
  name: string;
  avatarChar: string;
  bgColor: string;
  textColor?: string;
  role?: string;
}

export interface LocationInfo {
  id: 'bali' | 'germany' | 'lisbon' | 'eastern';
  name: string;
  country: string;
  timezone: string;
  tag: string;
  offsetHours: number;
  image: string;
  imageAlt: string;
  members: Member[];
  lat: number;
  lng: number;
  activityNotes: {
    night: string;
    morning: string;
    afternoon: string;
    evening: string;
  };
}

export interface InfluenceHotspot {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  url: string;
  left: string;
  top: string;
  width: string;
  height: string;
  isCircle?: boolean;
  category: string;
  nonClickable?: boolean;
  hoverTooltipText?: string;
  note?: string;
}

export interface ConstellationOption {
  id: 'everyone' | 'eu-na' | 'eu-bali' | 'bali-na';
  name: string;
  memberCount: number;
  tagline: string;
  quote: string;
  description: string;
  targetUtcHour: number;
  times: {
    bali?: string;
    germany?: string;
    portugal?: string;
    eastern?: string;
  };
  members: Member[];
  summaryDetail: string;
}
