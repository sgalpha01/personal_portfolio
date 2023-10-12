import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import { competitiveSites } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function SocialMedia(props) {
  return (
    <div className="social-media-div">
      <div className="social-icons">
        {socialMediaLinks.map((media) => (
          <a
            href={media.link}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </a>
        ))}
      </div>

      <div className="competitive-icons">
        {competitiveSites.competitiveSites.map((site) => (
          <a
            href={site.profileLink}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
            style={site.style}
          >
            <span
              className={`iconify`}
              data-icon={site.iconifyClassname}
            ></span>
          </a>
        ))}
      </div>
    </div>
  );
}
