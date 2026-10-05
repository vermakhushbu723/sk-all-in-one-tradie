// Update these details with the real business information
export const site = {
  name: 'SK All In One Tradie',
  tagline: 'Wall & Floor Tiling | Painting',
  phone: '+61 400 000 000',
  phoneHref: 'tel:+61400000000',
  whatsapp: '61400000000',
  whatsappText: 'Hi SK All In One Tradie, I would like a quote for',
  email: 'info@skallinonetradie.com',
  address: 'Servicing all suburbs across your city',
  hours: 'Mon - Sat : 7:00 AM - 6:00 PM',
  mapQuery: 'Sydney NSW',
  socials: {
    facebook: '#',
    instagram: '#',
  },
}

export const whatsappLink = (text = site.whatsappText) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', dropdown: true },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]
