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
    "desktop_access_disabled"
  ],
  "paths": [
    {
      "d": "M0.309999951,1.99999996 C-0.0800000503,2.38999996 -0.0800000503,3.01999996 0.309999951,3.40999996 L0.999999954,4.08999997 L0.999999954,16 C0.999999954,17.1 1.89999996,18 2.99999996,18 L9.99999999,18 L9.99999999,20 L8.99999999,20 C8.44999999,20 7.99999998,20.45 7.99999998,21 C7.99999998,21.55 8.44999999,22 8.99999999,22 L15,22 C15.55,22 16,21.55 16,21 C16,20.45 15.55,20 15,20 L14,20 L14,18 L14.9,18 L20.19,23.29 C20.58,23.68 21.21,23.68 21.6,23.29 C21.99,22.9 21.99,22.27 21.6,21.88 L1.71999996,1.99999996 C1.32999996,1.60999996 0.699999953,1.60999996 0.309999951,1.99999996 Z M2.98999996,15 L2.98999996,6.08999998 L12.9,16 L3.98999996,16 C3.43999996,16 2.98999996,15.55 2.98999996,15 Z M4.54999997,1.99999996 L6.54999997,3.99999996 L20,3.99999996 C20.55,3.99999996 21,4.44999997 21,4.99999996 L21,15 C21,15.55 20.55,16 20,16 L18.55,16 L20.55,18 L20.99,18 C22.09,18 22.99,17.1 22.99,16 L22.99,3.99999996 C22.99,2.89999996 22.09,1.99999996 20.99,1.99999996 L4.54999997,1.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "desktop_access_disabled",
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

export const CommunicationDesktopAccessDisabledIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    