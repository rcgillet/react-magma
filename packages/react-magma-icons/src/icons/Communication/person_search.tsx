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
    "person_search"
  ],
  "paths": [
    {
      "d": "M12.03,16.54 C11.68,13.91 13.9,11.7 16.53,12.04 C18.19,12.25 19.57,13.56 19.91,15.2 C20.13,16.25 19.9,17.22 19.43,18.02 L19.43,18.02 L21.28,19.89 C21.67,20.28 21.67,20.91 21.28,21.3 L21.28,21.3 L21.1859582,21.383077 C20.7944971,21.6876923 20.23,21.66 19.87,21.3 L19.87,21.3 L18.01,19.44 C17.21,19.91 16.24,20.14 15.19,19.92 C13.55,19.58 12.25,18.2 12.03,16.54 Z M10.1719018,14.005599 L10.35,14.01 C10.31,14.11 9.06999999,17.24 11.54,20 L11.54,20 L2.99999996,20 C2.44999996,20 1.99999996,19.55 1.99999996,19 L1.99999996,19 L1.99999996,18 C1.99999996,15.27 7.61999998,13.91 10.35,14.01 Z M16,14 C14.9,14 14,14.9 14,16 C14,17.1 14.9,18 16,18 C17.1,18 18,17.1 18,16 C18,14.9 17.1,14 16,14 Z M9.99999997,3.99999997 C12.209139,3.99999997 14,5.79086097 14,7.99999997 C14,10.209139 12.209139,12 9.99999997,12 C7.79086098,12 5.99999997,10.209139 5.99999997,7.99999997 C5.99999997,5.79086097 7.79086098,3.99999997 9.99999997,3.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "person_search",
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

export const CommunicationPersonSearchIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    