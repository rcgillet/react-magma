import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  "width": "24px",
  "height": "24px",
  "viewBox": "0 0 24 24",
  "version": "1.1",
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "title": [
    "connect_without_contact"
  ],
  "paths": [
    {
      "d": "M6.99999996,3.99999996 C6.99999996,2.88999996 6.10999998,1.99999996 4.99999996,1.99999996 C3.88999997,1.99999996 2.99999996,2.88999996 2.99999996,3.99999996 C2.99999996,5.10999997 3.88999997,5.99999996 4.99999996,5.99999996 C6.10999998,5.99999996 6.99999996,5.10999997 6.99999996,3.99999996 Z M10.19,4.49999997 L10.19,4.49999997 C9.77999999,4.49999997 9.42999999,4.74999997 9.26999999,5.12999997 C8.82999999,6.22999998 7.75999998,6.99999997 6.49999996,6.99999997 L3.49999996,6.99999997 C2.66999996,6.99999997 1.99999996,7.66999998 1.99999996,8.49999997 L1.99999996,11 L7.99999996,11 L7.99999996,8.73999999 C9.42999999,8.28999998 10.58,7.20999998 11.12,5.82999997 C11.38,5.18999997 10.88,4.49999997 10.19,4.49999997 Z M19,17 C20.11,17 21,16.11 21,15 C21,13.89 20.11,13 19,13 C17.89,13 17,13.89 17,15 C17,16.11 17.89,17 19,17 Z M20.5,18 L17.5,18 C16.24,18 15.17,17.23 14.73,16.13 C14.58,15.75 14.22,15.5 13.81,15.5 L13.81,15.5 C13.12,15.5 12.62,16.19 12.87,16.83 C13.42,18.21 14.56,19.29 15.99,19.74 L15.99,22 L21.99,22 L21.99,19.5 C22,18.67 21.33,18 20.5,18 Z M17.25,11.09 C17.25,11.09 17.25,11.08 17.26,11.09 C16.2,11.36 15.36,12.2 15.09,13.26 C15.09,13.26 15.09,13.25 15.09,13.25 C14.98,13.68 14.58,14 14.11,14 C13.56,14 13.11,13.55 13.11,13 C13.11,12.95 13.13,12.86 13.13,12.86 C13.56,11.01 15.02,9.54999999 16.88,9.12999999 C16.92,9.12999999 16.96,9.11999999 17,9.11999999 C17.55,9.11999999 18,9.56999999 18,10.12 C18,10.58 17.68,10.98 17.25,11.09 Z M18,6.05999997 C18,6.56999998 17.63,6.97999998 17.14,7.04999998 C17.14,7.04999998 17.14,7.04999998 17.14,7.04999998 C13.95,7.43999998 11.44,9.95999999 11.05,13.15 C11.05,13.15 11.05,13.15 11.05,13.15 C10.98,13.63 10.56,14 10.06,14 C9.50999999,14 9.05999999,13.55 9.05999999,13 C9.05999999,12.98 9.05999999,12.96 9.05999999,12.94 C9.05999999,12.93 9.05999999,12.92 9.05999999,12.91 C9.55999999,8.78999999 12.85,5.52999997 16.98,5.05999997 C16.98,5.05999997 16.99,5.05999997 16.99,5.05999997 C17.55,5.05999997 18,5.50999997 18,6.05999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "connect_without_contact",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd",
      "masks": [
        {
          "id": "mask-2",
          "fill": "white",
          "uses": [
            {
              "xlink:href": "#path-1"
            }
          ]
        }
      ],
      "uses": [
        {
          "id": "Combined-Shape",
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const SocialConnectWithoutContactIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    