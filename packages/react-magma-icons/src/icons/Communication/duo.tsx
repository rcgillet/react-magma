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
    "duo"
  ],
  "paths": [
    {
      "d": "M20,1.99999996 L12,1.99999996 C6.37999998,1.99999996 1.99999996,6.65999998 1.99999996,12.28 C1.99999996,17.5 6.48999998,22 11.72,22 C17.39,22 22,17.62 22,12 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M17,15 L14,13 L14,15 L6.99999998,15 L6.99999998,8.99999999 L14,8.99999999 L14,11 L17,8.99999999 L17,15 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "duo",
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

export const CommunicationDuoIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    