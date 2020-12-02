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
    "sports_esports"
  ],
  "paths": [
    {
      "d": "M21.58,16.09 L20.49,8.42999999 C20.21,6.45999998 18.52,4.99999997 16.53,4.99999997 L7.46999998,4.99999997 C5.47999997,4.99999997 3.78999997,6.45999998 3.50999996,8.42999999 L2.41999996,16.09 C2.19999996,17.63 3.38999996,19 4.93999997,19 L4.93999997,19 C5.61999997,19 6.25999998,18.73 6.73999998,18.25 L8.99999999,16 L15,16 L17.25,18.25 C17.73,18.73 18.38,19 19.05,19 L19.05,19 C20.61,19 21.8,17.63 21.58,16.09 Z M11,11 L8.99999997,11 L8.99999997,13 L7.99999997,13 L7.99999997,11 L5.99999997,11 L5.99999997,9.99999998 L7.99999997,9.99999998 L7.99999997,7.99999998 L8.99999997,7.99999998 L8.99999997,9.99999998 L11,9.99999998 L11,11 Z M15,9.99999998 C14.45,9.99999998 14,9.54999999 14,8.99999998 C14,8.44999999 14.45,7.99999998 15,7.99999998 C15.55,7.99999998 16,8.44999999 16,8.99999998 C16,9.54999999 15.55,9.99999998 15,9.99999998 Z M17,13 C16.45,13 16,12.55 16,12 C16,11.45 16.45,11 17,11 C17.55,11 18,11.45 18,12 C18,12.55 17.55,13 17,13 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "sports_esports",
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

export const SocialSportsEsportsIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    