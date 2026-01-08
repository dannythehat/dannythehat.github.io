// UK Stays property images
import pinwheelTreehouse from '@/assets/uk-stays/pinwheel-treehouse.jpg';
import belleToutLighthouse from '@/assets/uk-stays/belle-tout-lighthouse.jpg';
import airship002 from '@/assets/uk-stays/airship-002.jpg';
import westUskLighthouse from '@/assets/uk-stays/west-usk-lighthouse.jpg';
import fingalShip from '@/assets/uk-stays/fingal-ship.jpg';
import malmaisonPrison from '@/assets/uk-stays/malmaison-prison.jpg';
import hudnallsHideout from '@/assets/uk-stays/hudnalls-hideout.jpg';
import cambridgeLodgeTower from '@/assets/uk-stays/cambridge-lodge-tower.jpg';
import burghIslandHotel from '@/assets/uk-stays/burgh-island-hotel.jpg';

export const ukStayImages: Record<string, string> = {
  'pinwheel-treehouse-dorset': pinwheelTreehouse,
  'belle-tout-lighthouse-sussex': belleToutLighthouse,
  'airship-002-scotland': airship002,
  'west-usk-lighthouse-wales': westUskLighthouse,
  'fingal-floating-hotel-edinburgh': fingalShip,
  'malmaison-oxford-prison': malmaisonPrison,
  'hudnalls-hideout-treehouse': hudnallsHideout,
  'cambridge-lodge-water-tower': cambridgeLodgeTower,
  'burgh-island-hotel-devon': burghIslandHotel,
};

export const getUKStayImage = (stayId: string): string | undefined => {
  return ukStayImages[stayId];
};
