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
    "stairs"
  ],
  "paths": [
    {
      "d": "M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M17,7.99999998 L15.58,7.99999998 L15.58,11.33 L13,11.33 L13,14.66 L10.42,14.66 L10.45,18 L6.99999997,18 C6.44999998,18 5.99999997,17.55 5.99999997,17 C5.99999997,16.45 6.44999998,16 6.99999997,16 L8.41999999,16 L8.41999999,12.67 L11,12.67 L11,9.32999999 L13.58,9.32999999 L13.58,5.99999998 L17,5.99999998 C17.55,5.99999998 18,6.44999998 18,6.99999998 C18,7.54999998 17.55,7.99999998 17,7.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "stairs",
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

export const PlacesStairsIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    