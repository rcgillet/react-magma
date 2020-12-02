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
    "category"
  ],
  "paths": [
    {
      "d": "M17.5,13 C19.9852814,13 22,15.0147186 22,17.5 C22,19.9852814 19.9852814,22 17.5,22 C15.0147186,22 13,19.9852814 13,17.5 C13,15.0147186 15.0147186,13 17.5,13 Z M9.99999996,13.5 C10.55,13.5 11,13.95 11,14.5 L11,14.5 L11,20.5 C11,21.05 10.55,21.5 9.99999996,21.5 L9.99999996,21.5 L3.99999996,21.5 C3.44999996,21.5 2.99999996,21.05 2.99999996,20.5 L2.99999996,20.5 L2.99999996,14.5 C2.99999996,13.95 3.44999996,13.5 3.99999996,13.5 L3.99999996,13.5 Z M11.15,3.39999996 C11.54,2.75999996 12.46,2.75999996 12.85,3.39999996 L12.85,3.39999996 L16.56,9.47999999 C16.97,10.14 16.49,11 15.71,11 L15.71,11 L8.27999998,11 C7.49999998,11 7.01999998,10.14 7.42999998,9.47999999 L7.42999998,9.47999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "category",
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

export const MapsCategoryIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    