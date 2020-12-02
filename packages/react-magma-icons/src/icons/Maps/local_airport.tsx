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
    "local_airport"
  ],
  "paths": [
    {
      "d": "M21.48,13.7 L13.5,8.99999996 L13.5,3.49999996 C13.5,2.66999996 12.83,1.99999996 12,1.99999996 C11.17,1.99999996 10.5,2.66999996 10.5,3.49999996 L10.5,8.99999996 L2.51999996,13.7 C2.19999996,13.88 1.99999996,14.23 1.99999996,14.6 C1.99999996,15.3 2.66999996,15.8 3.33999996,15.61 L10.5,13.51 L10.5,19 L8.23999998,20.35 C8.08999998,20.44 7.99999996,20.61 7.99999996,20.78 L7.99999996,21.28 L7.99999996,21.28 L7.99999996,21.36 C7.99999996,21.69 8.30999998,21.93 8.61999999,21.85 L11.54,21.12 L12,21 L12.38,21.09 C12.38,21.09 12.38,21.09 12.38,21.09 L12.8,21.2 L14.7,21.68 L14.7,21.68 L15.37,21.85 C15.69,21.93 15.99,21.69 15.99,21.36 L15.99,20.99 C15.99,20.99 15.99,20.99 15.99,20.99 L15.99,20.78 C15.99,20.6 15.9,20.44 15.75,20.35 L13.5,19 L13.5,13.5 L20.66,15.6 C21.33,15.8 22,15.3 22,14.6 C22,14.23 21.8,13.88 21.48,13.7 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "local_airport",
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

export const MapsLocalAirportIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    