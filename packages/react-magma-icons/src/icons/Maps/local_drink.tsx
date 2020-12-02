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
    "local_drink"
  ],
  "paths": [
    {
      "d": "M5.22999997,1.99999996 C4.03999997,1.99999996 3.10999996,3.03999996 3.23999996,4.21999997 L5.00999997,20.23 C5.12999997,21.23 5.96999997,22 6.99999998,22 L17,22 C18.03,22 18.87,21.23 18.99,20.23 L20.76,4.21999997 C20.89,3.03999996 19.96,1.99999996 18.77,1.99999996 L5.22999997,1.99999996 Z M12,19 C10.34,19 8.99999999,17.66 8.99999999,16 C8.99999999,14.45 10.81,12.05 11.62,11.06 C11.82,10.81 12.19,10.81 12.39,11.06 C13.2,12.06 15.01,14.45 15.01,16 C15,17.66 13.66,19 12,19 L12,19 Z M18.33,7.99999997 L5.66999997,7.99999997 L5.34999997,5.10999997 C5.28999997,4.51999997 5.74999997,3.99999997 6.34999998,3.99999997 L17.65,3.99999997 C18.24,3.99999997 18.71,4.51999997 18.64,5.10999997 L18.33,7.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "local_drink",
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

export const MapsLocalDrinkIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    