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
    "smoking_rooms"
  ],
  "paths": [
    {
      "d": "M15.5,16 L3.49999996,16 C2.66999996,16 1.99999996,16.67 1.99999996,17.5 C1.99999996,18.33 2.66999996,19 3.49999996,19 L15.5,19 C16.33,19 17,18.33 17,17.5 C17,16.67 16.33,16 15.5,16 Z M18.85,7.72999998 C19.47,7.11999998 19.85,6.27999998 19.85,5.34999997 C19.85,3.83999997 18.85,2.55999996 17.47,2.13999996 C16.99,1.99999996 16.5,2.35999996 16.5,2.85999996 C16.5,3.18999996 16.71,3.47999996 17.02,3.56999996 C17.79,3.79999997 18.35,4.50999997 18.35,5.34999997 C18.35,6.16999998 17.82,6.85999998 17.08,7.10999998 C16.75,7.21999998 16.5,7.49999998 16.5,7.84999998 L16.5,7.99999998 C16.5,8.36999998 16.77,8.68999999 17.14,8.74999999 C19.07,9.05999999 20.5,10.75 20.5,12.77 L20.5,14.25 C20.5,14.66 20.84,15 21.25,15 C21.66,15 22,14.66 22,14.25 L22,12.76 C22,10.54 20.72,8.61999999 18.85,7.72999998 L18.85,7.72999998 Z M16.03,10.2 L14.73,10.2 C13.71,10.2 12.79,9.46999999 12.66,8.44999999 C12.54,7.49999998 13.12,6.74999998 13.96,6.51999998 C14.28,6.42999998 14.5,6.13999998 14.5,5.79999997 C14.5,5.30999997 14.04,4.93999997 13.57,5.07999997 C12.15,5.48999997 11.12,6.80999998 11.15,8.35999998 C11.18,10.2 12.77,11.65 14.61,11.65 L16.03,11.65 C17.08,11.65 18,12.39 18,13.7 L18,14.25 C18,14.66 18.33,15 18.75,15 L18.76,15 C19.17,15 19.51,14.67 19.51,14.25 L19.51,13.36 C19.5,11.55 17.9,10.2 16.03,10.2 Z M18,16 L19.5,16 L19.5,19 L18,19 L18,16 Z M20.5,16 L22,16 L22,19 L20.5,19 L20.5,16 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "smoking_rooms",
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

export const PlacesSmokingRoomsIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    