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
  FaScrewdriverWrench,
  FaWrench,
  FaToolbox,
  FaStairs,
  FaTree,
  FaFaucetDrip,
  FaFaucet,
  FaFireFlameSimple,
  FaToilet,
  FaDroplet,
  FaHelmetSafety,
  FaMagnifyingGlass,
  FaPencil,
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
    slug: 'painting-decorating',
    title: 'Painting & Decorating',
    short: 'Painting',
    icon: FaPaintRoller,
    category: 'painting',
    image: '/images/painter-1.jpg',
    banner: '/images/interior-living.jpg',
    gallery: ['/images/interior-blue.jpg', '/images/exterior-colour.jpg', '/images/fresh-room.jpg', '/images/interior-white.jpg'],
    excerpt:
      'Interior and exterior painting, feature walls and decorating with proper preparation, premium paints and a smooth, lasting finish.',
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
  {
    slug: 'carpentry',
    title: 'Carpentry',
    short: 'Carpentry',
    icon: FaHammer,
    category: 'carpentry',
    image: '/images/carpenter-plane.jpg',
    banner: '/images/carpentry-tools.jpg',
    gallery: ['/images/deck-finished.jpg', '/images/kitchen-cabinets.jpg', '/images/stairs-spiral.jpg', '/images/wood-sanding.jpg'],
    excerpt:
      'Custom carpentry for decks, doors, cabinets, shelving and repairs, built strong, square and finished with care.',
    intro:
      'Good carpentry is about accuracy and patience. We measure twice, cut once and build every piece to sit square, open smoothly and last for years, whether it is a new deck or a sticking door.',
    body:
      'From outdoor decks and pergolas to built in wardrobes, kitchen cabinetry, skirting and architraves, we handle new work and repairs across the home. We use quality timber and hardware, and finish every job ready for paint or stain.',
    highlights: ['Custom built to measure', 'Quality timber & hardware', 'Indoor & outdoor work', 'Repairs and new builds'],
    stats: [
      { value: '200+', label: 'Carpentry jobs' },
      { value: '10+', label: 'Years experience' },
      { value: '5 yr', label: 'Workmanship warranty' },
    ],
    subServices: [
      { icon: FaTree, title: 'Decks & Pergolas', desc: 'Timber and composite decks, pergolas and outdoor steps.' },
      { icon: FaDoorOpen, title: 'Doors & Frames', desc: 'Door hanging, frames, locks and sticking door repairs.' },
      { icon: FaToolbox, title: 'Cabinets & Wardrobes', desc: 'Built in wardrobes, cabinetry and storage solutions.' },
      { icon: FaStairs, title: 'Stairs & Railings', desc: 'Stair repairs, treads, handrails and balustrades.' },
      { icon: FaRulerCombined, title: 'Skirting & Architraves', desc: 'Neat trim work that finishes every room properly.' },
      { icon: FaScrewdriverWrench, title: 'General Repairs', desc: 'Rotten timber, loose boards and handyman carpentry.' },
    ],
    benefits: [
      'Hardwood, pine and engineered timber options',
      'Precise measuring and square, level installation',
      'Treated timber for outdoor and wet areas',
      'Quality hinges, runners and hardware fitted',
      'Sanded and ready for paint, stain or oil',
      'Off cuts removed and site left clean',
    ],
    process: [
      { icon: FaComments, title: 'Discuss & Measure', desc: 'We inspect the space and take accurate measurements.' },
      { icon: FaPencil, title: 'Design & Quote', desc: 'Agree on timber, design and a clear fixed price.' },
      { icon: FaHammer, title: 'Build & Install', desc: 'Cut, assemble and fit everything square and solid.' },
      { icon: FaClipboardCheck, title: 'Finish & Handover', desc: 'Sand, finish, clean up and walk you through it.' },
    ],
    faqs: [
      {
        q: 'Do you build custom decks?',
        a: 'Yes. We design and build timber and composite decks to suit your yard, including steps, balustrades and pergolas.',
      },
      {
        q: 'Can you fix doors that stick or will not close?',
        a: 'Yes. We plane, rehang and adjust doors, replace hinges and fit new locks and handles.',
      },
      {
        q: 'Do you build built in wardrobes?',
        a: 'We build custom wardrobes and storage with shelves, drawers and hanging space made to fit your room.',
      },
      {
        q: 'Can you paint the carpentry work as well?',
        a: 'Absolutely. As an all in one tradie we can finish your new carpentry with painting or staining.',
      },
    ],
  },
  {
    slug: 'plumbing',
    title: 'Plumbing',
    short: 'Plumbing',
    icon: FaFaucetDrip,
    category: 'plumbing',
    image: '/images/plumber-wrenches.jpg',
    banner: '/images/copper-fittings.jpg',
    gallery: ['/images/kitchen-mixer.jpg', '/images/shower-head.jpg', '/images/bath-mixer.jpg', '/images/pipe-valve.jpg'],
    excerpt:
      'Reliable plumbing for leaks, taps, toilets, hot water and bathroom or kitchen fit offs, done neatly and to code.',
    intro:
      'Plumbing problems never wait for a convenient time. We turn up when we say we will, find the cause quickly and fix it properly, so the same issue does not come back next month.',
    body:
      'We handle everyday repairs like leaking taps, blocked drains and running toilets, along with installing new mixers, showers, vanities and hot water systems. For renovations we coordinate plumbing with our tiling work so your bathroom or kitchen comes together smoothly.',
    highlights: ['Fast leak repairs', 'Taps, toilets & showers', 'Hot water systems', 'Renovation fit offs'],
    stats: [
      { value: '400+', label: 'Plumbing jobs' },
      { value: 'Same', label: 'Day callouts' },
      { value: '5 yr', label: 'Workmanship warranty' },
    ],
    subServices: [
      { icon: FaDroplet, title: 'Leak Detection & Repair', desc: 'Find and fix leaking pipes, taps and fittings fast.' },
      { icon: FaFaucet, title: 'Taps & Mixers', desc: 'Repair or install kitchen, laundry and bathroom taps.' },
      { icon: FaToilet, title: 'Toilets & Cisterns', desc: 'Running toilets, cistern repairs and replacements.' },
      { icon: FaShower, title: 'Showers & Vanities', desc: 'Shower, bath and vanity installation and fit offs.' },
      { icon: FaFireFlameSimple, title: 'Hot Water Systems', desc: 'Repairs and replacement of gas and electric units.' },
      { icon: FaWrench, title: 'Blocked Drains', desc: 'Clearing blocked sinks, showers and drains.' },
    ],
    benefits: [
      'Upfront pricing before any work begins',
      'Quality brand name tapware and fittings',
      'Work completed to plumbing code and standards',
      'Plumbing coordinated with tiling for renovations',
      'Floors and fixtures protected while we work',
      'Everything tested for leaks before we leave',
    ],
    process: [
      { icon: FaComments, title: 'Tell Us The Issue', desc: 'Call or message us with what is happening.' },
      { icon: FaMagnifyingGlass, title: 'Inspect & Diagnose', desc: 'We find the cause and explain the fix and cost.' },
      { icon: FaWrench, title: 'Repair or Install', desc: 'Fix it properly with quality parts and fittings.' },
      { icon: FaHelmetSafety, title: 'Test & Clean Up', desc: 'Pressure test, check for leaks and tidy the area.' },
    ],
    faqs: [
      {
        q: 'Do you handle emergency leaks?',
        a: 'Yes. Call us straight away. We prioritise active leaks and can often attend the same day.',
      },
      {
        q: 'Can you install new tapware I have bought?',
        a: 'Yes. We can install customer supplied taps, mixers and showers, or recommend quality options for you.',
      },
      {
        q: 'Do you replace hot water systems?',
        a: 'We repair and replace electric and gas hot water units and help you choose the right size for your home.',
      },
      {
        q: 'Can you do plumbing for my bathroom renovation?',
        a: 'Yes. We handle the plumbing rough in and fit off alongside our tiling, so one team manages the whole job.',
      },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
