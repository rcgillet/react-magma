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
    "sports_rugby"
  ],
  "paths": [
    {
      "d": "M20.49,3.50999996 C19.93,2.94999996 18.34,2.53999996 16.33,2.53999996 C13.25,2.53999996 9.17999999,3.49999996 6.34999998,6.32999998 C1.65999996,11.03 2.09999996,19.07 3.50999996,20.49 C4.06999997,21.05 5.65999997,21.46 7.66999998,21.46 C10.75,21.46 14.82,20.5 17.65,17.67 C22.34,12.97 21.9,4.92999997 20.49,3.50999996 Z M7.75999998,7.75999998 C10.4,5.11999997 14.11,4.63999997 15.79,4.56999997 C13.74,5.50999997 11.33,7.01999998 9.17999999,9.17999999 C7.01999998,11.34 5.50999997,13.76 4.56999997,15.81 C4.65999997,13.33 5.43999997,10.07 7.75999998,7.75999998 Z M16.24,16.24 C13.6,18.88 9.88999999,19.36 8.20999998,19.43 C10.26,18.49 12.67,16.98 14.82,14.82 C16.98,12.66 18.49,10.24 19.44,8.18999998 C19.34,10.67 18.56,13.93 16.24,16.24 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "sports_rugby",
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

export const SocialSportsRugbyIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    