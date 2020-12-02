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
    "dehaze"
  ],
  "paths": [
    {
      "d": "M1.99999996,17 C1.99999996,17.55 2.44999996,18 2.99999996,18 L21,18 C21.55,18 22,17.55 22,17 C22,16.45 21.55,16 21,16 L2.99999996,16 C2.44999996,16 1.99999996,16.45 1.99999996,17 Z M1.99999996,12 C1.99999996,12.55 2.44999996,13 2.99999996,13 L21,13 C21.55,13 22,12.55 22,12 C22,11.45 21.55,11 21,11 L2.99999996,11 C2.44999996,11 1.99999996,11.45 1.99999996,12 Z M1.99999996,6.99999998 C1.99999996,7.54999998 2.44999996,7.99999998 2.99999996,7.99999998 L21,7.99999998 C21.55,7.99999998 22,7.54999998 22,6.99999998 C22,6.44999998 21.55,5.99999998 21,5.99999998 L2.99999996,5.99999998 C2.44999996,5.99999998 1.99999996,6.44999998 1.99999996,6.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "dehaze",
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

export const ImageDehazeIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    