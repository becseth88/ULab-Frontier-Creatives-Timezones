import { LocationInfo } from '../types';

export const MEMBERS = {
  bec: { name: 'Bec', avatarChar: 'B', bgColor: '#FF6B6B', textColor: '#ffffff' },
  varun: { name: 'Varun', avatarChar: 'V', bgColor: '#EF4444', textColor: '#ffffff' },
  laurin: { name: 'Laurin', avatarChar: 'L', bgColor: '#14B8A6', textColor: '#ffffff' },
  arsham: { name: 'Arsham', avatarChar: 'A', bgColor: '#8B5CF6', textColor: '#ffffff' },
  vesta: { name: 'Vesta', avatarChar: 'V', bgColor: '#A855F7', textColor: '#ffffff' },
  justin: { name: 'Justin', avatarChar: 'J', bgColor: '#192943', textColor: '#ffffff' },
  isaac: { name: 'Isaac', avatarChar: 'I', bgColor: '#0284C7', textColor: '#ffffff' },
  river: { name: 'River', avatarChar: 'R', bgColor: '#F59E0B', textColor: '#ffffff' }
};

export const LOCATIONS: LocationInfo[] = [
  {
    id: 'bali',
    name: 'Ubud, Bali',
    country: 'Indonesia',
    timezone: 'Asia/Makassar',
    tag: 'WITA',
    offsetHours: 8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACyiayI3jnlooKn4D3Z2jRTEQV-CWCui-XAdme3l8PUlFbMJs4PJUC75OW1t0h1QcBMDKrIQjNK4j5yXfOlHsFv4SytItPKilMHtN9QBzmT_ys_YxpLND97aGLvNsnUVMJk2M_YPdNS9lfZTTSmbeEMq6W6n93X36c_iZrJQTEvuujafr_UoiqbjAyz9KCWEzn1Zj9vYjo1BAfT58-LMJUE7-t0de9YJ75ElM0QvGJ_36azEHQg48',
    imageAlt: 'Ubud Bali lush rice terraces and palms in mist',
    members: [MEMBERS.bec],
    lat: -8.5069,
    lng: 115.2625,
    activityNotes: {
      night: 'Deep in evening reflection (or sleeping)',
      morning: 'Morning jungle meditation & movement',
      afternoon: 'Creative studio work & presencing',
      evening: 'Evening tea and reflective stillness'
    }
  },
  {
    id: 'germany',
    name: 'Germany',
    country: 'Germany',
    timezone: 'Europe/Berlin',
    tag: 'CEST',
    offsetHours: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY7MMqYiUlxEppoXeD_WmHXrwsJ53NpxsruxRGYyOv4NRDuDDA78RwarjEGqSRO-fS6TyR72Sl7Z_GVlyfWGzeFkC8J1up8zcgyo5PogFnzuFEKJp0pryiZD9X5njkBJPuS4ABtODqVOhlBlWMDppgEtAY5MvLU8JkIXwIrSfXzbrAX_KIT3dXOIoWzIRps0bYajxv41DNs-vIuhJXPCq65BmGQdQzRWKFQxHTgNSnPBJCn8ndcyI',
    imageAlt: 'German misty Black Forest with sunbeams',
    members: [MEMBERS.varun, MEMBERS.laurin, MEMBERS.arsham],
    lat: 52.52,
    lng: 13.405,
    activityNotes: {
      night: 'Resting in peaceful evening quiet',
      morning: 'Morning coffee & collaborative sync',
      afternoon: 'Active midday focus & systems design',
      evening: 'Dusk contemplative inquiry'
    }
  },
  {
    id: 'lisbon',
    name: 'Portugal',
    country: 'Portugal',
    timezone: 'Europe/Lisbon',
    tag: 'WEST',
    offsetHours: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKpdk1_PADPvRKCV0RI2am0T7jiphKteWWgQy6xrytwoo7XHmJ8pb2geyS9fDdJ9OxKf5OxwQVVbYD61zpvo3CcWduED3kN5MHhV7DmvfQ9PaQV-xbs-g3XZbWyT7QJf_3t7Zu9E4VUmGk7JayiI_9NcF1pk8t1kxe3ZpawoxcCoA5mm3x59vG53GMTbIQePagmt5vqohxtky2qYfcwNi-bZ2K_YSOgZfW7HiSBKVM9TryNgtYmGY',
    imageAlt: 'Portugal coastal hills overlooking ocean',
    members: [MEMBERS.vesta],
    lat: 38.7223,
    lng: -9.1393,
    activityNotes: {
      night: 'Atlantic night breeze and restorative rest',
      morning: 'Coastal morning journaling',
      afternoon: 'In bright afternoon rhythm',
      evening: 'Sunset reflections overlooking the ocean'
    }
  },
  {
    id: 'eastern',
    name: 'Eastern N. America',
    country: 'US & Canada',
    timezone: 'America/New_York',
    tag: 'EDT',
    offsetHours: -4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9IPwimDl9ce9vGsmibtq2S_9FQIOFdrMJ3erABABM7dwd1K1Pk2jTkX00aM9e-VO81hQ1ZJGj7RhOdRGniZ2qmYOGb5CUDxDINL_OLYxGcXR0Tv7brWlsQuB0V56TrCME8jkIuIihtZqdxqWYGhqIKnwiXdRH1bWvIfxgJl0pT7WO3AFI4fm0G7rWB1wvKBdaLirYV9aBMOWCsWU7FhmF2riInNPyEgWKz5VH49a4mdkvOJJeqA0',
    imageAlt: 'Northeastern coast calm shoreline',
    members: [MEMBERS.justin, MEMBERS.isaac, MEMBERS.river],
    lat: 40.7128,
    lng: -74.006,
    activityNotes: {
      night: 'Sleeping under eastern North American skies',
      morning: 'Starting the morning inquiry',
      afternoon: 'Full stride creative generation',
      evening: 'Evening wrap-up and synthesis'
    }
  }
];
