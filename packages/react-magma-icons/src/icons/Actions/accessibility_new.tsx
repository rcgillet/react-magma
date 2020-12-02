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
    "accessibility_new"
  ],
  "paths": [
    {
      "d": "M20.75,6.98999998 C20.61,6.43999998 20.06,6.11999998 19.51,6.23999998 C17.13,6.76999998 14.48,6.99999998 12,6.99999998 C9.51999999,6.99999998 6.86999998,6.76999998 4.48999997,6.23999998 C3.93999997,6.11999998 3.38999996,6.43999998 3.24999996,6.98999998 C3.10999996,7.54999998 3.44999996,8.11999998 3.99999997,8.24999998 C5.60999997,8.60999999 7.34999998,8.85999999 8.99999999,8.99999999 L8.99999999,21 C8.99999999,21.55 9.44999999,22 9.99999999,22 C10.55,22 11,21.55 11,21 L11,16 L13,16 L13,21 C13,21.55 13.45,22 14,22 C14.55,22 15,21.55 15,21 L15,8.99999999 C16.65,8.85999999 18.39,8.60999999 19.99,8.24999998 C20.55,8.11999998 20.89,7.54999998 20.75,6.98999998 Z M12,5.99999996 C13.1,5.99999996 14,5.09999997 14,3.99999996 C14,2.89999996 13.1,1.99999996 12,1.99999996 C10.9,1.99999996 9.99999999,2.89999996 9.99999999,3.99999996 C9.99999999,5.09999997 10.9,5.99999996 12,5.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "accessibility_new",
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

export const ActionsAccessibilityNewIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    