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
    "text_rotation_none"
  ],
  "paths": [
    {
      "d": "M20.65,17.65 L18.86,15.86 C18.54,15.54 18,15.76 18,16.21 L18,17 L5.99999997,17 C5.44999997,17 4.99999997,17.45 4.99999997,18 C4.99999997,18.55 5.44999997,19 5.99999997,19 L18,19 L18,19.79 C18,20.24 18.54,20.46 18.85,20.14 L20.64,18.35 C20.84,18.16 20.84,17.84 20.65,17.65 L20.65,17.65 Z M9.49999999,11.8 L14.5,11.8 L15.16,13.4 C15.31,13.76 15.66,14 16.05,14 C16.74,14 17.2,13.29 16.93,12.66 L13.05,3.68999997 C12.87,3.26999996 12.46,2.99999996 12,2.99999996 C11.54,2.99999996 11.13,3.26999996 10.95,3.68999997 L7.06999998,12.66 C6.79999998,13.29 7.26999998,14 7.95999998,14 C8.34999998,14 8.69999999,13.76 8.84999999,13.4 L9.49999999,11.8 Z M12,4.97999997 L13.87,9.99999999 L10.13,9.99999999 L12,4.97999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "text_rotation_none",
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

export const ActionsTextRotationNoneIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    