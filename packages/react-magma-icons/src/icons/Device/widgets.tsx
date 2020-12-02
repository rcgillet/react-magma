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
    "widgets"
  ],
  "paths": [
    {
      "d": "M13,14 L13,20 C13,20.55 13.45,21 14,21 L20,21 C20.55,21 21,20.55 21,20 L21,14 C21,13.45 20.55,13 20,13 L14,13 C13.45,13 13,13.45 13,14 Z M3.99999996,21 L9.99999996,21 C10.55,21 11,20.55 11,20 L11,14 C11,13.45 10.55,13 9.99999996,13 L3.99999996,13 C3.44999996,13 2.99999996,13.45 2.99999996,14 L2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999996,21 Z M2.99999996,3.99999996 L2.99999996,9.99999996 C2.99999996,10.55 3.44999996,11 3.99999996,11 L9.99999996,11 C10.55,11 11,10.55 11,9.99999996 L11,3.99999996 C11,3.44999996 10.55,2.99999996 9.99999996,2.99999996 L3.99999996,2.99999996 C3.44999996,2.99999996 2.99999996,3.44999996 2.99999996,3.99999996 Z M15.95,2.39999996 L11.7,6.63999998 C11.31,7.02999998 11.31,7.65999998 11.7,8.04999998 L15.95,12.3 C16.34,12.69 16.97,12.69 17.36,12.3 L21.61,8.04999998 C22,7.65999998 22,7.02999998 21.61,6.63999998 L17.37,2.39999996 C16.98,2.00999996 16.34,2.00999996 15.95,2.39999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "widgets",
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

export const DeviceWidgetsIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    