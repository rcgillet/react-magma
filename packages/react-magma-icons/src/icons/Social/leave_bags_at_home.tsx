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
    "leave_bags_at_home"
  ],
  "paths": [
    {
      "d": "M11.86,9.02999999 C11.91,9.01999999 11.95,8.99999996 12,8.99999996 C12.41,8.99999996 12.75,9.33999999 12.75,9.74999999 L12.75,9.91999999 L14.5,11.67 L14.5,9.74999999 C14.5,9.33999999 14.84,8.99999996 15.25,8.99999996 C15.66,8.99999996 16,9.33999999 16,9.74999999 L16,13.17 L19,16.17 L19,7.99999996 C19,6.89999998 18.1,5.99999996 17,5.99999996 L15,5.99999996 L15,2.99999996 C15,2.44999996 14.55,1.99999996 14,1.99999996 L9.99999999,1.99999996 C9.44999999,1.99999996 8.99999999,2.44999996 8.99999999,2.99999996 L8.99999999,5.99999996 L8.82999999,5.99999996 L11.86,9.02999999 Z M11,3.99999997 L13,3.99999997 L13,5.99999997 L11,5.99999997 L11,3.99999997 Z M20.49,20.49 L3.50999996,3.50999996 C3.11999996,3.11999996 2.48999996,3.11999996 2.09999996,3.50999996 C1.70999996,3.89999997 1.70999996,4.52999997 2.09999996,4.91999997 L5.01999997,7.83999998 C5.01999997,7.89999998 4.99999997,7.94999998 4.99999997,7.99999998 L4.99999997,19 C4.99999997,20.1 5.89999997,21 6.99999998,21 C6.99999998,21.55 7.44999998,22 7.99999998,22 C8.54999999,22 8.99999999,21.55 8.99999999,21 L15,21 C15,21.55 15.45,22 16,22 C16.55,22 17,21.55 17,21 C17.34,21 17.65,20.91 17.93,20.76 L19.07,21.9 C19.46,22.29 20.09,22.29 20.48,21.9 C20.88,21.51 20.88,20.88 20.49,20.49 Z M8.74999999,18 C8.33999998,18 7.99999998,17.66 7.99999998,17.25 L7.99999998,10.83 L9.49999998,12.33 L9.49999998,17.25 C9.49999998,17.66 9.15999999,18 8.74999999,18 Z M12,18 C11.59,18 11.25,17.66 11.25,17.25 L11.25,14.08 L12.75,15.58 L12.75,17.25 C12.75,17.66 12.41,18 12,18 Z M14.52,17.35 L15.15,17.98 C14.82,17.93 14.57,17.68 14.52,17.35 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "leave_bags_at_home",
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

export const SocialLeaveBagsAtHomeIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    