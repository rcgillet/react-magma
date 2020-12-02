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
    "sports_baseball"
  ],
  "paths": [
    {
      "d": "M12,1.99999996 C14.63,1.99999996 17.01,3.01999996 18.79,4.66999997 C15.97,5.90999997 14,8.71999999 14,12 C14,15.28 15.97,18.09 18.79,19.33 C17.01,20.98 14.63,22 12,22 C9.36999999,22 6.98999998,20.98 5.20999997,19.33 C8.02999998,18.09 9.99999999,15.28 9.99999999,12 C9.99999999,8.71999999 8.02999998,5.90999997 5.20999997,4.66999997 C6.98999998,3.01999996 9.36999999,1.99999996 12,1.99999996 Z M3.80999997,6.27999998 C6.22999998,7.04999998 7.99999996,9.31999999 7.99999996,12 C7.99999996,14.68 6.22999998,16.95 3.80999997,17.72 C2.66999996,16.1 1.99999996,14.13 1.99999996,12 C1.99999996,9.86999999 2.66999996,7.89999998 3.80999997,6.27999998 Z M20.19,6.27999998 C21.33,7.89999998 22,9.86999999 22,12 C22,14.13 21.33,16.1 20.19,17.72 C17.77,16.95 16,14.68 16,12 C16,9.31999999 17.77,7.04999998 20.19,6.27999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "sports_baseball",
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

export const SocialSportsBaseballIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    