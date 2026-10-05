import {
  FaTableCellsLarge,
  FaPaintRoller,
  FaShower,
  FaKitchenSet,
  FaBorderAll,
  FaHouseChimney,
  FaUmbrellaBeach,
  FaRulerCombined,
  FaHouse,
  FaBuilding,
  FaDoorOpen,
  FaFillDrip,
  FaComments,
  FaHammer,
  FaLayerGroup,
  FaClipboardCheck,
  FaBroom,
  FaSprayCan,
} from 'react-icons/fa6'

export const services = [
  {
    slug: 'wall-floor-tiling',
    title: 'Wall & Floor Tiling',
    short: 'Tiling',
    icon: FaTableCellsLarge,
    category: 'tiling',
    image: '/images/bathroom-tub.jpg',
    banner: '/images/floor-corridor.jpg',
    gallery: ['/images/shower-marble.jpg', '/images/kitchen-floor.jpg', '/images/bathroom-green.jpg', '/images/splashback.jpg'],
    excerpt:
      'Precision wall and floor tiling for bathrooms, kitchens, living areas and outdoor spaces with level surfaces and clean grout lines.',
    intro:
      'Tiles are only as good as the hands that lay them. We prepare every surface properly, set out each layout to suit the room and finish with straight, consistent grout lines so your tiles look sharp and last for decades.',
    body:
      'From a small splashback to a full home floor, we work with ceramic, porcelain, natural stone, mosaic and large format tiles. Every job includes surface preparation, levelling, cutting, sealing and a full clean up, so you get a finished space ready to enjoy.',
    highlights: ['Free on-site measure', 'Waterproofing ready', 'Laser levelled layouts', 'Clean, sealed grout'],
    stats: [
      { value: '300+', label: 'Rooms tiled' },
      { value: '10+', label: 'Years tiling' },
      { value: '7 yr', label: 'Workmanship warranty' },
    ],
    subServices: [
      { icon: FaShower, title: 'Bathroom Tiling', desc: 'Shower walls, floors, niches and full bathroom renovations.' },
      { icon: FaKitchenSet, title: 'Kitchen Splashbacks', desc: 'Subway, mosaic and feature splashbacks cut to perfection.' },
      { icon: FaBorderAll, title: 'Feature Walls', desc: 'Statement walls with stone, mosaic or patterned tiles.' },
      { icon: FaHouseChimney, title: 'Living Area Floors', desc: 'Large format porcelain floors across open plan living.' },
      { icon: FaUmbrellaBeach, title: 'Outdoor & Patio', desc: 'Slip resistant tiles for patios, alfresco and pool areas.' },
      { icon: FaRulerCombined, title: 'Floor Levelling', desc: 'Screeding and levelling so every tile sits perfectly flat.' },
    ],
    benefits: [
      'Ceramic, porcelain, stone, marble and mosaic tiles',
      'Accurate cutting around corners, niches and fixtures',
      'Matching or contrasting grout colours to suit your design',
      'Silicone sealing to wet areas for long lasting protection',
      'Old tile removal and full surface preparation',
      'Tidy worksite and full clean up after every job',
    ],
    process: [
      { icon: FaComments, title: 'Consult & Measure', desc: 'We visit, measure the area and discuss tile choices.' },
      { icon: FaHammer, title: 'Surface Prep', desc: 'Remove old tiles, repair and level the substrate.' },
      { icon: FaLayerGroup, title: 'Set Out & Lay', desc: 'Plan the layout and lay every tile true and level.' },
      { icon: FaClipboardCheck, title: 'Grout & Seal', desc: 'Grout, seal, clean and walk you through the result.' },
    ],
    faqs: [
      {
        q: 'How long does it take to tile a bathroom?',
        a: 'A standard bathroom usually takes 3 to 5 working days depending on size, tile type and whether old tiles need removing.',
      },
      {
        q: 'Can you tile over existing tiles?',
        a: 'Sometimes, if the existing tiles are firmly bonded and level. We inspect first and recommend removal if it is the better long term option.',
      },
      {
        q: 'Do you supply the tiles?',
        a: 'You can choose your own tiles or we can recommend and source quality tiles from trusted local suppliers at trade prices.',
      },
      {
        q: 'Which tiles are best for floors?',
        a: 'Porcelain is the most durable choice for floors. For wet and outdoor areas we recommend a slip resistant rating suited to the space.',
      },
    ],
  },
  {
    slug: 'painting',
    title: 'Painting',
    short: 'Painting',
    icon: FaPaintRoller,
    category: 'painting',
    image: '/images/painter-1.jpg',
    banner: '/images/interior-living.jpg',
    gallery: ['/images/interior-blue.jpg', '/images/exterior-colour.jpg', '/images/fresh-room.jpg', '/images/interior-white.jpg'],
    excerpt:
      'Interior and exterior painting with proper preparation, premium paints and a smooth, even finish that lasts for years.',
    intro:
      'A great paint job is ninety percent preparation. We patch, sand and prime before a single coat goes on, then apply premium paints with care to give you crisp cut in lines and a flawless, even finish.',
    body:
      'Whether it is a single feature wall, a full interior repaint or refreshing the outside of your home, we protect your floors and furniture, work cleanly and leave every room ready to live in. We use quality low odour paints that stand up to everyday life.',
    highlights: ['Premium low odour paints', 'Full surface preparation', 'Furniture & floor protection', 'Colour advice included'],
    stats: [
      { value: '250+', label: 'Homes painted' },
      { value: '10+', label: 'Years painting' },
      { value: '5 yr', label: 'Workmanship warranty' },
    ],
    subServices: [
      { icon: FaHouse, title: 'Interior Painting', desc: 'Walls, ceilings, doors and trims in every room.' },
      { icon: FaBuilding, title: 'Exterior Painting', desc: 'Weather resistant coatings for walls, eaves and fascia.' },
      { icon: FaDoorOpen, title: 'Doors & Trims', desc: 'Smooth enamel finishes on doors, frames and skirting.' },
      { icon: FaFillDrip, title: 'Feature Walls', desc: 'Bold colour statements that bring a room to life.' },
      { icon: FaBroom, title: 'Patch & Repair', desc: 'Crack filling, plaster repair and sanding before painting.' },
      { icon: FaSprayCan, title: 'Fences & Decks', desc: 'Stain and paint for timber fences, decks and pergolas.' },
    ],
    benefits: [
      'Quality paints from trusted, leading brands',
      'Crack filling, sanding and priming before painting',
      'Sharp cut in lines between walls, ceilings and trims',
      'Floors and furniture fully covered and protected',
      'Low odour paints so you can stay comfortable at home',
      'Final inspection and touch ups before handover',
    ],
    process: [
      { icon: FaComments, title: 'Colour Consult', desc: 'Discuss colours, finishes and the scope of work.' },
      { icon: FaBroom, title: 'Protect & Prepare', desc: 'Cover surfaces, patch, sand and prime the walls.' },
      { icon: FaPaintRoller, title: 'Apply Coats', desc: 'Two even coats of premium paint, cut in by hand.' },
      { icon: FaClipboardCheck, title: 'Inspect & Handover', desc: 'Touch ups, clean up and a final walkthrough.' },
    ],
    faqs: [
      {
        q: 'How many coats of paint do you apply?',
        a: 'We apply a primer where needed followed by two full coats of top coat for even colour and lasting durability.',
      },
      {
        q: 'Do I need to move my furniture?',
        a: 'We move and cover furniture for you. Just remove small valuables and fragile items before we start.',
      },
      {
        q: 'How long does an interior repaint take?',
        a: 'Most single rooms take 1 to 2 days and an average home interior takes around 4 to 7 days depending on size and prep.',
      },
      {
        q: 'Can you help me choose colours?',
        a: 'Yes. We offer colour advice and can arrange sample pots so you can see the colours in your own light before deciding.',
      },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
