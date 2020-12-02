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
    "architecture"
  ],
  "paths": [
    {
      "d": "M9.22999999,10.88 C9.71999999,11.35 10.32,11.69 11,11.86 L11,11.86 L8.22999998,19.46 L6.60999998,21 L6.35999998,18.78 Z M14.77,10.88 L17.65,18.78 L17.39,21 L15.77,19.46 L13,11.86 C13.67,11.69 14.28,11.35 14.77,10.88 L14.77,10.88 Z M12,2.99999996 L12.116199,3.00676017 C12.6119898,3.06479588 13,3.48928568 13,3.99999996 L13,3.99999996 L13,5.17999997 C14.34,5.65999997 15.24,7.03999998 14.94,8.59999999 C14.71,9.77999999 13.74,10.73 12.56,10.95 C10.66,11.3 8.99999999,9.83999999 8.99999999,7.99999996 C8.99999999,6.69999998 9.83999999,5.59999997 11,5.17999997 L11,5.17999997 L11,3.99999996 C11,3.44999996 11.45,2.99999996 12,2.99999996 L12,2.99999996 Z M12,6.99999998 C11.45,6.99999998 11,7.44999998 11,7.99999998 C11,8.54999999 11.45,8.99999998 12,8.99999998 C12.55,8.99999998 13,8.54999999 13,7.99999998 C13,7.44999998 12.55,6.99999998 12,6.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "architecture",
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

export const SocialArchitectureIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    