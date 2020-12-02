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
    "contact_support"
  ],
  "paths": [
    {
      "d": "M11.5,1.99999996 C6.80999998,1.99999996 2.99999996,5.80999997 2.99999996,10.5 C2.99999996,15.19 6.80999998,19 11.5,19 L12,19 L12,22 C16.86,19.66 20,15 20,10.5 C20,5.80999997 16.19,1.99999996 11.5,1.99999996 Z M12.5,16.5 L10.5,16.5 L10.5,14.5 L12.5,14.5 L12.5,16.5 Z M12.9,11.72 C12.89,11.73 12.88,11.75 12.87,11.77 C12.82,11.85 12.77,11.93 12.73,12.01 C12.71,12.04 12.7,12.08 12.69,12.12 C12.66,12.19 12.63,12.26 12.61,12.33 C12.54,12.54 12.51,12.76 12.51,13.01 L10.5,13.01 C10.5,12.5 10.58,12.07 10.7,11.71 C10.7,11.7 10.7,11.69 10.71,11.68 C10.72,11.64 10.75,11.62 10.76,11.58 C10.82,11.42 10.89,11.28 10.98,11.14 C11.01,11.09 11.05,11.04 11.08,10.99 C11.11,10.95 11.13,10.9 11.16,10.87 L11.17,10.88 C12.01,9.77999999 13.38,9.43999999 13.49,8.19999998 C13.58,7.21999998 12.88,6.26999998 11.92,6.06999998 C10.88,5.84999997 9.93999999,6.45999998 9.61999999,7.34999998 C9.47999999,7.70999998 9.14999999,7.99999998 8.73999999,7.99999998 L8.53999999,7.99999998 C7.93999998,7.99999998 7.49999998,7.40999998 7.66999998,6.82999998 C8.21999998,5.00999997 10.04,3.73999997 12.1,4.03999997 C13.79,4.28999997 15.14,5.67999997 15.43,7.36999998 C15.87,9.80999999 13.8,10.4 12.9,11.72 L12.9,11.72 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "contact_support",
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

export const ActionsContactSupportIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    