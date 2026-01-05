// Map holiday slugs to their AI-generated images
import arcticSlopes from '@/assets/destinations/arctic-slopes.jpg';
import boliviaDeathRoad from '@/assets/destinations/bolivia-death-road.jpg';
import congoGorilla from '@/assets/destinations/congo-gorilla.jpg';
import mauritaniaTrain from '@/assets/destinations/mauritania-train.jpg';
import socotraDragontrees from '@/assets/destinations/socotra-dragontrees.jpg';
import turkmenistanCrater from '@/assets/destinations/turkmenistan-crater.jpg';
import papuaTribe from '@/assets/destinations/papua-tribe.jpg';
import russiaKolyma from '@/assets/destinations/russia-kolyma.jpg';
import bhutanTigernest from '@/assets/destinations/bhutan-tigernest.jpg';
import antarcticaExpedition from '@/assets/destinations/antarctica-expedition.jpg';
import maldivesPrivate from '@/assets/destinations/maldives-private.jpg';
import ethiopiaVolcano from '@/assets/destinations/ethiopia-volcano.jpg';
import greenlandIceberg from '@/assets/destinations/greenland-iceberg.jpg';
import mongoliaEagle from '@/assets/destinations/mongolia-eagle.jpg';
import northKorea from '@/assets/destinations/north-korea.jpg';

export const destinationImages: Record<string, string> = {
  'arctic-unnamed-slopes': arcticSlopes,
  'bolivia-death-road': boliviaDeathRoad,
  'congo-gorilla-trek': congoGorilla,
  'mauritania-iron-train': mauritaniaTrain,
  'yemen-socotra': socotraDragontrees,
  'turkmenistan-gates-hell': turkmenistanCrater,
  'indonesia-tribe-encounter': papuaTribe,
  'russia-magadan-road': russiaKolyma,
  'bhutan-tiger-nest': bhutanTigernest,
  'antarctica-crossing': antarcticaExpedition,
  'maldives-private-island': maldivesPrivate,
  'ethiopia-danakil': ethiopiaVolcano,
  'greenland-iceberg-kayak': greenlandIceberg,
  'mongolia-eagle-hunters': mongoliaEagle,
  'north-korea-marathon': northKorea,
};

export const getDestinationImage = (slug: string): string | undefined => {
  return destinationImages[slug];
};
