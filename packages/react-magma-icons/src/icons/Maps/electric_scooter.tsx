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
    "electric_scooter"
  ],
  "paths": [
    {
      "d": "M11,18 L17,21 L13,21 L13,23 L6.99999998,20 L11,20 L11,18 Z M15.89,0.999999954 C16.82,0.999999954 17.63,1.64999996 17.84,2.55999996 L17.84,2.55999996 L19.74,11 L19,11 C16.79,11 15,12.79 15,15 L15,15 L15,16 L7.81999998,16 C7.39999998,17.16 6.29999998,18 4.99999997,18 C3.15999996,18 1.69999996,16.34 2.04999996,14.44 C2.26999996,13.26 3.21999996,12.29 4.39999997,12.06 C5.95999997,11.76 7.33999998,12.66 7.81999998,14 L7.81999998,14 L13.09,14 C13.47,11.73 15.12,9.89999999 17.28,9.24999999 L17.28,9.24999999 L17.29,9.24999999 L15.89,2.99999995 L13,2.99999995 C12.45,2.99999995 12,2.54999996 12,1.99999995 C12,1.44999996 12.45,0.999999954 13,0.999999954 L13,0.999999954 Z M19,12 C20.66,12 22,13.34 22,15 C22,16.66 20.66,18 19,18 C17.34,18 16,16.66 16,15 C16,13.34 17.34,12 19,12 Z M4.99999997,14 C4.44999997,14 3.99999997,14.45 3.99999997,15 C3.99999997,15.55 4.44999997,16 4.99999997,16 C5.54999997,16 5.99999997,15.55 5.99999997,15 C5.99999997,14.45 5.54999997,14 4.99999997,14 Z M19,14 C18.45,14 18,14.45 18,15 C18,15.55 18.45,16 19,16 C19.55,16 20,15.55 20,15 C20,14.45 19.55,14 19,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "electric_scooter",
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

export const MapsElectricScooterIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    