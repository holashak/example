export type Category = 'Human' | 'Landscape' | 'Notes'

export type Project = {
  slug: string
  title: string
  category: 'Human' | 'Landscape'
  location: string
  year: number
  coverAlt: string
  introduction: string
  tags: string[]
  images: { src: string; alt: string }[]
}

export const site = {
  name: 'ALEX MORROW',
  descriptor: 'Human & Landscape Photographer',
  title: 'Alex Morrow — Human & Landscape Photography',
  description: 'Documentary photographs of people, landscape, and everyday life.',
  email: 'hello@alexmorrow.example',
  instagram: 'https://www.instagram.com/',
  placeholderNote: 'ALEX MORROW is a fictional placeholder identity intended to be replaced.',
}

const image = (slug: string, n: number, alt: string) => ({ src: `${import.meta.env.BASE_URL}images/${slug}-${String(n).padStart(2, '0')}.jpg`, alt })

export const projects: Project[] = [
  {
    slug: 'small-hours', title: 'Small Hours', category: 'Human', location: 'Melbourne', year: 2026,
    coverAlt: 'A solitary figure crossing a quiet city street before sunrise.', tags: ['People', 'Evening', 'Film'],
    introduction: 'A study of the city before it fully wakes: bakers opening shutters, cleaners finishing their shifts, and strangers moving through pools of artificial light.',
    images: [image('small-hours', 1, 'A solitary figure crossing a quiet city street before sunrise.'), image('small-hours', 2, 'A baker lifts a metal shutter into the blue hour.'), image('small-hours', 3, 'A cleaner pauses beneath fluorescent light on an empty footpath.'), image('small-hours', 4, 'A cyclist passes a lit corner shop before dawn.')],
  },
  {
    slug: 'between-stops', title: 'Between Stops', category: 'Human', location: 'Melbourne', year: 2025,
    coverAlt: 'Passengers seen through the layered reflections of a tram window.', tags: ['People', 'Roads', 'Film'],
    introduction: 'Short encounters made on platforms, trams, and suburban buses, where public space briefly becomes a shared room.',
    images: [image('between-stops', 1, 'Passengers seen through layered reflections of a tram window.'), image('between-stops', 2, 'A passenger reads beside a rain-streaked bus window.'), image('between-stops', 3, 'Two people wait under a suburban platform shelter.'), image('between-stops', 4, 'A tram disappears around a bend at dusk.')],
  },
  {
    slug: 'sunday-rooms', title: 'Sunday Rooms', category: 'Human', location: 'Regional Victoria', year: 2025,
    coverAlt: 'A family table illuminated by soft afternoon window light.', tags: ['Home', 'People', 'Film'],
    introduction: 'Portraits of domestic rituals and the small gestures that turn rooms into records of a life.',
    images: [image('sunday-rooms', 1, 'A family table illuminated by soft afternoon window light.'), image('sunday-rooms', 2, 'A hand rests on a patterned tablecloth after lunch.'), image('sunday-rooms', 3, 'A child stands in a doorway with a stripe of sunlight.'), image('sunday-rooms', 4, 'An empty kitchen settles into the late afternoon.')],
  },
  {
    slug: 'open-country', title: 'Open Country', category: 'Landscape', location: 'Victoria', year: 2026,
    coverAlt: 'Dry grassland stretching toward a low mountain range beneath pale clouds.', tags: ['Place', 'Roads', 'Weather'],
    introduction: 'Long roads, spare horizons, and the quiet architecture of land shaped by weather, work, and distance.',
    images: [image('open-country', 1, 'Dry grassland stretching toward a low mountain range beneath pale clouds.'), image('open-country', 2, 'A narrow road cuts through pale winter fields.'), image('open-country', 3, 'Fence posts recede toward a distant ridge.'), image('open-country', 4, 'A stand of trees holds the last light above open pasture.')],
  },
  {
    slug: 'weather-line', title: 'Weather Line', category: 'Landscape', location: 'Tasmania', year: 2025,
    coverAlt: 'A dark weather front moving over a forested ridge.', tags: ['Weather', 'Place', 'Film'],
    introduction: 'Photographs made at the edge of changing weather, when familiar terrain becomes briefly uncertain.',
    images: [image('weather-line', 1, 'A dark weather front moving over a forested ridge.'), image('weather-line', 2, 'Rain gathers on a road beside a low mountain pass.'), image('weather-line', 3, 'Mist lifts from a dark stand of eucalyptus.'), image('weather-line', 4, 'A single farmhouse sits beneath a broken sky.')],
  },
  {
    slug: 'edge-of-water', title: 'Edge of Water', category: 'Landscape', location: 'New South Wales', year: 2024,
    coverAlt: 'A quiet shoreline at dusk with a distant figure near the water.', tags: ['Coast', 'Place', 'Evening'],
    introduction: 'Coastal observations about erosion, repetition, and the places where human traces meet the tide.',
    images: [image('edge-of-water', 1, 'A quiet shoreline at dusk with a distant figure near the water.'), image('edge-of-water', 2, 'Foam gathers around dark rocks on a low tide.'), image('edge-of-water', 3, 'A weathered path ends at a grey coastal inlet.'), image('edge-of-water', 4, 'A distant swimmer crosses a strip of evening water.')],
  },
]

export type JournalEntry = { slug: string; title: string; date: string; year: number; summary: string; body: string[]; tags: string[] }

export const journal: JournalEntry[] = [
  { slug: 'on-waiting', title: 'On Waiting', date: 'April 18, 2026', year: 2026, summary: 'Why the most useful part of photographing strangers often happens before the frame appears.', tags: ['People', 'Notes'], body: ['Most photographs begin before the camera is raised. I return to the same corners, learn the pace of the light, and wait long enough to stop feeling like a visitor.', 'Waiting is not passive. It is a way of paying attention without demanding that the street perform. The frame arrives when gesture, distance, and light briefly agree.'] },
  { slug: 'walking-without-a-map', title: 'Walking Without a Map', date: 'January 9, 2026', year: 2026, summary: 'Notes on leaving efficient routes behind and allowing a place to set the pace.', tags: ['Roads', 'Place', 'Notes'], body: ['A map is excellent at getting me somewhere, but photography usually begins when getting somewhere is no longer the point. I follow sound, weather, and the shape of the next block.', 'The resulting walk is inefficient and often unremarkable. That is precisely its value: attention settles on ordinary things that a destination would have made invisible.'] },
  { slug: 'what-the-weather-leaves-behind', title: 'What the Weather Leaves Behind', date: 'October 2, 2025', year: 2025, summary: 'Reading a landscape through wet roads, bent grass, and the light after a storm.', tags: ['Weather', 'Place', 'Notes'], body: ['I am less interested in photographing the storm than in photographing its evidence. Water gathers in wheel ruts, trees hold a different posture, and distances sharpen as the air clears.', 'These small changes make the land feel newly legible. The photograph becomes a record of what has passed and what the surface has chosen to keep.'] },
]

export const archive = { years: ['2026', '2025', '2024'], tags: ['People', 'Place', 'Weather', 'Roads', 'Home', 'Coast', 'Evening', 'Film'], categories: ['Human', 'Landscape', 'Notes'] }
