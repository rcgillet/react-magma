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
    "sports_golf"
  ],
  "paths": [
    {
      "d": "M16,17 C16.55,17 17,17.45 17,18 C17,18.55 16.55,19 16,19 L16,19 L15,19 C13.9,19 13,19.9 13,21 L13,21 L13,22 L11,22 L11,21 C11,19.9 10.1,19 8.99999998,19 L8.99999998,19 L7.99999998,19 C7.44999998,19 6.99999998,18.55 6.99999998,18 C6.99999998,17.45 7.44999998,17 7.99999998,17 L7.99999998,17 Z M12,1.99999996 C15.87,1.99999996 19,5.12999997 19,8.99999996 C19,12.87 15.87,16 12,16 C8.12999998,16 4.99999997,12.87 4.99999997,8.99999996 C4.99999997,5.12999997 8.12999998,1.99999996 12,1.99999996 Z M12,3.99999997 C9.23999999,3.99999997 6.99999998,6.23999998 6.99999998,8.99999997 C6.99999998,11.76 9.23999999,14 12,14 C14.76,14 17,11.76 17,8.99999997 C17,6.23999998 14.76,3.99999997 12,3.99999997 Z M9.99999999,6.99999998 C10.5522847,6.99999998 11,7.44771523 11,7.99999998 C11,8.55228474 10.5522847,8.99999998 9.99999999,8.99999998 C9.44771524,8.99999998 8.99999999,8.55228474 8.99999999,7.99999998 C8.99999999,7.44771523 9.44771524,6.99999998 9.99999999,6.99999998 Z M14,6.99999998 C14.5522848,6.99999998 15,7.44771523 15,7.99999998 C15,8.55228474 14.5522848,8.99999998 14,8.99999998 C13.4477153,8.99999998 13,8.55228474 13,7.99999998 C13,7.44771523 13.4477153,6.99999998 14,6.99999998 Z M12,4.99999997 C12.5522848,4.99999997 13,5.44771522 13,5.99999997 C13,6.55228473 12.5522848,6.99999997 12,6.99999997 C11.4477152,6.99999997 11,6.55228473 11,5.99999997 C11,5.44771522 11.4477152,4.99999997 12,4.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "sports_golf",
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

export const SocialSportsGolfIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    