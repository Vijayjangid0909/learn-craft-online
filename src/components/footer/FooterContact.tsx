
import { Mail, MapPin, Phone } from "lucide-react";

const FooterContact = () => {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">
        Contact Info
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <MapPin className="h-5 w-5 mr-3 text-accent1" />
          <span>123 Coding Street, Tech Valley, CA 94025</span>
        </li>
        <li className="flex items-center">
          <Phone className="h-5 w-5 mr-3 text-accent1" />
          <span>+91 8949906332</span>
        </li>
        <li className="flex items-center">
          <Mail className="h-5 w-5 mr-3 text-accent1" />
          <span>vijay@snapfolio.tech</span>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
