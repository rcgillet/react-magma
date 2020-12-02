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
    "sports_football"
  ],
  "paths": [
    {
      "d": "M3.01999996,15.62 L8.37999998,20.98 C5.96999997,21.07 4.03999997,20.66 3.68999997,20.31 C3.33999996,19.96 2.93999996,18.04 3.01999996,15.62 L3.01999996,15.62 Z M13.08,3.27999996 L20.71,10.91 C20.29,13.24 19.36,15.69 17.53,17.53 C15.7,19.37 13.25,20.3 10.91,20.71 L10.91,20.71 L3.27999996,13.08 C3.69999997,10.75 4.62999997,8.29999998 6.45999998,6.45999998 C8.28999998,4.61999997 10.75,3.69999997 13.08,3.27999996 L13.08,3.27999996 Z M14.8,9.19999999 C14.41,8.80999999 13.79,8.80999999 13.4,9.19999999 L13.4,9.19999999 L9.19999999,13.4 C8.80999999,13.79 8.80999999,14.41 9.19999999,14.8 C9.58999999,15.19 10.21,15.19 10.6,14.8 L10.6,14.8 L14.8,10.6 C15.19,10.21 15.19,9.58999999 14.8,9.19999999 Z M15.62,3.01999996 C18.03,2.92999996 19.96,3.33999996 20.31,3.68999997 C20.66,4.03999997 21.06,5.95999997 20.98,8.37999998 L20.98,8.37999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "sports_football",
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

export const SocialSportsFootballIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    