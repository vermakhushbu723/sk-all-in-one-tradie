// Business contact details used across the whole site
export const site = {
  name: 'SK All In One Tradie',
  tagline: 'Tiling | Painting | Carpentry | Plumbing',
  phone: '+61 452 122 060',
  phoneHref: 'tel:+61452122060',
  whatsapp: '61452122060',
  whatsappText: 'Hi SK All In One Tradie, I would like a quote for',
  email: 'skallinonetradie@gmail.com',
  hours: 'Mon - Sat : 7:00 AM - 6:00 PM',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61595091791073',
    instagram: 'https://www.instagram.com/skallinonetradie/',
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
