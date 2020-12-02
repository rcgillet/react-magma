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
    "phonelink_ring"
  ],
  "paths": [
    {
      "d": "M14,0.999999954 L3.99999996,0.999999954 C2.89999996,0.999999954 1.99999996,1.89999996 1.99999996,2.99999995 L1.99999996,21 C1.99999996,22.1 2.89999996,23 3.99999996,23 L14,23 C15.1,23 16,22.1 16,21 L16,2.99999995 C16,1.89999996 15.1,0.999999954 14,0.999999954 Z M14,20 L3.99999997,20 L3.99999997,3.99999997 L14,3.99999997 L14,20 Z M20.63,8.25999998 C20.37,7.93999998 19.89,7.89999998 19.59,8.19999998 L19.56,8.22999998 C19.31,8.47999999 19.3,8.87999999 19.51,9.15999999 C20.77,10.8 20.76,13.03 19.49,14.73 C19.28,15.01 19.3,15.4 19.54,15.65 L19.59,15.7 C19.88,15.99 20.35,15.96 20.62,15.65 C22.42,13.52 22.42,10.46 20.63,8.25999998 L20.63,8.25999998 Z M17.42,10.37 L17.36,10.43 C17.16,10.63 17.1,10.93 17.21,11.19 C17.42,11.68 17.42,12.22 17.21,12.71 C17.1,12.97 17.16,13.27 17.36,13.47 L17.44,13.55 C17.76,13.87 18.31,13.8 18.53,13.4 C19.02,12.51 19.02,11.46 18.52,10.54 C18.3,10.12 17.75,10.04 17.42,10.37 L17.42,10.37 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "phonelink_ring",
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

export const CommunicationPhonelinkRingIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    