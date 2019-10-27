import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const SubFooter = props => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer">
            <ul>
              <li>
                <strong>Telefon: </strong>
                {props.data.site.siteMetadata.contact.phone}
              </li>
              <li>
                <strong>Mejl: </strong>{" "}
                <a
                  href={`mailto:${props.data.site.siteMetadata.contact.email}`}
                >
                  {props.data.site.siteMetadata.contact.email}
                </a>
              </li>
            </ul>
            <ul className="subFooter-social">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/GOTIS-Gothenburg-Interactive-Solutions-101507494607775/"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://instagram.com/got.interactive.solutions?igshid=1b9dawo2m1fvn"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://instagram.com/got.interactive.solutions?igshid=1b9dawo2m1fvn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <SubFooter data={data} />}
  />
);
