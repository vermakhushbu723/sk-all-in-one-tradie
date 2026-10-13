import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { site } from '../../data/site'

const links = [
  { icon: FaFacebookF, label: 'Facebook', href: site.socials.facebook },
  { icon: FaInstagram, label: 'Instagram', href: site.socials.instagram },
]

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`socials ${className}`}>
      {links.map(({ icon: Icon, label, href }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
          <Icon />
        </a>
      ))}
    </div>
  )
}
