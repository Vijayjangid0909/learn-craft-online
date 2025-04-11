
import { Link } from "react-router-dom";

type FooterLinksProps = {
  title: string;
  links: Array<{
    to: string;
    label: string;
  }>;
};

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.to}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
