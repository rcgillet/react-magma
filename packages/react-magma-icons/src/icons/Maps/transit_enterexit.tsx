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
    "transit_enterexit"
  ],
  "paths": [
    {
      "d": "M14.5,18 L7.99999997,18 C6.89999998,18 5.99999997,17.1 5.99999997,16 L5.99999997,9.49999999 C5.99999997,8.66999999 6.66999998,7.99999998 7.49999997,7.99999998 C8.32999998,7.99999998 8.99999997,8.66999999 8.99999997,9.49999999 L8.99999997,12.77 L14.95,6.99999998 C15.52,6.44999998 16.43,6.45999998 16.99,7.01999998 C17.55,7.57999998 17.55,8.48999999 17,9.05999999 L11.15,15 L14.5,15 C15.33,15 16,15.67 16,16.5 C16,17.33 15.33,18 14.5,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "transit_enterexit",
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

export const MapsTransitEnterexitIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    