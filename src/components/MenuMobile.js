import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const MenuMobile = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div
      id="main-menu-mobile"
      className={`main-menu-mobile ${props.active ? "open" : ""}`}
    >
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <ul className="socialIcons">
        <li className="socialIcon-li">
          <a
            target="_blank"
            href="https://www.facebook.com/GOTIS-Gothenburg-Interactive-Solutions-101507494607775/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="socialIcon-li">
          <a
            target="_blank"
            href="https://instagram.com/got.interactive.solutions?igshid=1b9dawo2m1fvn"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="socialIcon-li">
          <a
            target="_blank"
            href="https://instagram.com/got.interactive.solutions?igshid=1b9dawo2m1fvn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <MenuMobile active={props.active} data={data} />}
  />
);
