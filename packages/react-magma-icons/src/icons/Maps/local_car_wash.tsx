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
    "local_car_wash"
  ],
  "paths": [
    {
      "d": "M17,4.99999997 C17.83,4.99999997 18.5,4.32999997 18.5,3.49999996 C18.5,2.83999996 17.84,1.85999996 17.39,1.27999996 C17.19,1.01999995 16.8,1.01999995 16.6,1.27999996 C16.16,1.85999996 15.5,2.83999996 15.5,3.49999996 C15.5,4.32999997 16.17,4.99999997 17,4.99999997 Z M12,4.99999997 C12.83,4.99999997 13.5,4.32999997 13.5,3.49999996 C13.5,2.83999996 12.84,1.85999996 12.39,1.27999996 C12.19,1.01999995 11.8,1.01999995 11.6,1.27999996 C11.16,1.85999996 10.5,2.83999996 10.5,3.49999996 C10.5,4.32999997 11.17,4.99999997 12,4.99999997 L12,4.99999997 Z M6.99999997,4.99999997 C7.82999998,4.99999997 8.49999997,4.32999997 8.49999997,3.49999996 C8.49999997,2.83999996 7.83999998,1.85999996 7.38999998,1.27999996 C7.18999998,1.01999995 6.79999998,1.01999995 6.59999998,1.27999996 C6.15999998,1.85999996 5.49999997,2.83999996 5.49999997,3.49999996 C5.49999997,4.32999997 6.16999998,4.99999997 6.99999997,4.99999997 Z M18.92,8.00999998 C18.72,7.41999998 18.16,6.99999998 17.5,6.99999998 L6.49999996,6.99999998 C5.83999997,6.99999998 5.28999997,7.41999998 5.07999997,8.00999998 L3.10999996,13.68 C3.03999996,13.89 2.99999996,14.11 2.99999996,14.34 L2.99999996,21.5 C2.99999996,22.33 3.66999997,23 4.49999996,23 C5.32999997,23 5.99999996,22.33 5.99999996,21.5 L5.99999996,21 L18,21 L18,21.5 C18,22.32 18.67,23 19.5,23 C20.32,23 21,22.33 21,21.5 L21,14.34 C21,14.12 20.96,13.89 20.89,13.68 L18.92,8.00999998 Z M6.49999997,18 C5.66999997,18 4.99999997,17.33 4.99999997,16.5 C4.99999997,15.67 5.66999997,15 6.49999997,15 C7.32999998,15 7.99999997,15.67 7.99999997,16.5 C7.99999997,17.33 7.32999998,18 6.49999997,18 Z M17.5,18 C16.67,18 16,17.33 16,16.5 C16,15.67 16.67,15 17.5,15 C18.33,15 19,15.67 19,16.5 C19,17.33 18.33,18 17.5,18 Z M4.99999997,13 L6.26999998,9.17999999 C6.40999998,8.77999999 6.78999998,8.49999999 7.21999998,8.49999999 L16.78,8.49999999 C17.21,8.49999999 17.59,8.77999999 17.73,9.17999999 L19,13 L4.99999997,13 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "local_car_wash",
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

export const MapsLocalCarWashIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    