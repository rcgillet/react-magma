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
    "toys"
  ],
  "paths": [
    {
      "d": "M12,12 C12,8.99999998 14.5,6.49999998 17.5,6.49999998 C20.07,6.49999998 22.27,8.32999998 22.85,10.74 C23,11.38 22.53,12 21.88,12 L12,12 Z M12,12 C12,15 9.49999999,17.5 6.49999998,17.5 C3.92999997,17.5 1.72999996,15.67 1.14999995,13.26 C0.999999954,12.62 1.46999996,12 2.11999996,12 L12,12 Z M12,12 C8.99999998,12 6.49999998,9.49999999 6.49999998,6.49999998 C6.49999998,3.92999997 8.32999998,1.72999996 10.74,1.14999995 C11.38,0.999999954 12,1.46999996 12,2.11999996 L12,12 Z M12,12 C15,12 17.5,14.5 17.5,17.5 C17.5,20.07 15.67,22.27 13.26,22.85 C12.62,23 12,22.53 12,21.88 L12,12 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "toys",
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
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const HardwareToysIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    