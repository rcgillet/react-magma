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
    "directions_transit"
  ],
  "paths": [
    {
      "d": "M12,1.99999996 C7.57999998,1.99999996 3.99999997,2.49999996 3.99999997,5.99999996 L3.99999997,15.5 C3.99999997,17.43 5.56999997,19 7.49999997,19 L6.34999998,20.15 C6.03999998,20.46 6.25999998,21 6.70999998,21 L17.3,21 C17.75,21 17.97,20.46 17.65,20.15 L16.5,19 C18.43,19 20,17.43 20,15.5 L20,5.99999996 C20,2.49999996 16.42,1.99999996 12,1.99999996 Z M7.49999997,17 C6.66999998,17 5.99999997,16.33 5.99999997,15.5 C5.99999997,14.67 6.66999998,14 7.49999997,14 C8.32999998,14 8.99999997,14.67 8.99999997,15.5 C8.99999997,16.33 8.32999998,17 7.49999997,17 Z M11,11 L5.99999997,11 L5.99999997,5.99999998 L11,5.99999998 L11,11 Z M16.5,17 C15.67,17 15,16.33 15,15.5 C15,14.67 15.67,14 16.5,14 C17.33,14 18,14.67 18,15.5 C18,16.33 17.33,17 16.5,17 Z M18,11 L13,11 L13,5.99999998 L18,5.99999998 L18,11 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "directions_transit",
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

export const MapsDirectionsTransitIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    