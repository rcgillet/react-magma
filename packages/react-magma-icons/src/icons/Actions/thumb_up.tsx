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
    "thumb_up"
  ],
  "paths": [
    {
      "d": "M13.12,2.05999996 C13.7,1.46999996 14.64,1.46999996 15.23,2.04999996 C15.59,2.40999996 15.74,2.91999996 15.64,3.41999996 L15.64,3.41999996 L14.69,7.99999998 L20.34,7.99999998 C22.49,7.99999998 23.94,10.2 23.1,12.18 L23.1,12.18 L19.84,19.79 C19.52,20.52 18.8,21 18,21 L18,21 L8.99999998,21 C7.89999998,21 6.99999998,20.1 6.99999998,19 L6.99999998,19 L6.99999998,9.00999999 C6.99999998,8.47999999 7.20999998,7.96999998 7.57999998,7.59999998 L7.57999998,7.59999998 Z M2.99999995,8.99999999 C4.09999997,8.99999999 4.99999995,9.89999999 4.99999995,11 L4.99999995,11 L4.99999995,19 C4.99999995,20.1 4.09999997,21 2.99999995,21 C1.89999996,21 0.999999954,20.1 0.999999954,19 L0.999999954,19 L0.999999954,11 C0.999999954,9.89999999 1.89999996,8.99999999 2.99999995,8.99999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "thumb_up",
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

export const ActionsThumbUpIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    