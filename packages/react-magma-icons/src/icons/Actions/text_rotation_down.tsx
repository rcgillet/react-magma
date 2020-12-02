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
    "text_rotation_down"
  ],
  "paths": [
    {
      "d": "M6.34999998,19.65 L8.13999998,17.86 C8.45999999,17.54 8.23999998,17 7.78999998,17 L6.99999998,17 L6.99999998,4.99999997 C6.99999998,4.44999997 6.54999998,3.99999997 5.99999997,3.99999997 C5.44999997,3.99999997 4.99999997,4.44999997 4.99999997,4.99999997 L4.99999997,17 L4.20999997,17 C3.75999997,17 3.53999996,17.54 3.85999997,17.85 L5.64999997,19.64 C5.83999997,19.84 6.15999998,19.84 6.34999998,19.65 L6.34999998,19.65 Z M12.2,8.49999999 L12.2,13.5 L10.6,14.16 C10.24,14.31 9.99999999,14.66 9.99999999,15.05 C9.99999999,15.74 10.71,16.2 11.34,15.93 L20.31,12.05 C20.73,11.87 21,11.46 21,11 C21,10.54 20.73,10.13 20.31,9.94999999 L11.34,6.06999998 C10.71,5.79999997 9.99999999,6.26999998 9.99999999,6.95999998 C9.99999999,7.34999998 10.24,7.69999998 10.6,7.84999998 L12.2,8.49999999 L12.2,8.49999999 Z M19.02,11 L14,12.87 L14,9.12999999 L19.02,11 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "text_rotation_down",
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

export const ActionsTextRotationDownIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    