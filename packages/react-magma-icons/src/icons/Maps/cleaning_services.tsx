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
    "cleaning_services"
  ],
  "paths": [
    {
      "d": "M16,11 L15,11 L15,3.99999995 C15,2.33999996 13.66,0.999999954 12,0.999999954 L12,0.999999954 C10.34,0.999999954 8.99999996,2.33999996 8.99999996,3.99999995 L8.99999996,11 L7.99999996,11 C5.23999997,11 2.99999996,13.24 2.99999996,16 L2.99999996,21 C2.99999996,22.1 3.89999997,23 4.99999996,23 L19,23 C20.1,23 21,22.1 21,21 L21,16 C21,13.24 18.76,11 16,11 Z M19,21 L17,21 L17,18 C17,17.45 16.55,17 16,17 C15.45,17 15,17.45 15,18 L15,21 L13,21 L13,18 C13,17.45 12.55,17 12,17 C11.45,17 11,17.45 11,18 L11,21 L8.99999997,21 L8.99999997,18 C8.99999997,17.45 8.54999999,17 7.99999997,17 C7.44999998,17 6.99999997,17.45 6.99999997,18 L6.99999997,21 L4.99999997,21 L4.99999997,16 C4.99999997,14.35 6.34999998,13 7.99999997,13 L16,13 C17.65,13 19,14.35 19,16 L19,21 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "cleaning_services",
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

export const MapsCleaningServicesIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    