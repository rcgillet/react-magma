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
    "group"
  ],
  "paths": [
    {
      "d": "M16,11 C17.66,11 18.99,9.65999999 18.99,7.99999997 C18.99,6.33999998 17.66,4.99999997 16,4.99999997 C14.34,4.99999997 13,6.33999998 13,7.99999997 C13,9.65999999 14.34,11 16,11 Z M7.99999997,11 C9.65999999,11 10.99,9.65999999 10.99,7.99999997 C10.99,6.33999998 9.65999999,4.99999997 7.99999997,4.99999997 C6.33999998,4.99999997 4.99999997,6.33999998 4.99999997,7.99999997 C4.99999997,9.65999999 6.33999998,11 7.99999997,11 Z M7.99999995,13 C5.66999997,13 0.999999954,14.17 0.999999954,16.5 L0.999999954,18 C0.999999954,18.55 1.44999996,19 1.99999995,19 L14,19 C14.55,19 15,18.55 15,18 L15,16.5 C15,14.17 10.33,13 7.99999995,13 Z M16,13 C15.71,13 15.38,13.02 15.03,13.05 C15.05,13.06 15.06,13.08 15.07,13.09 C16.21,13.92 17,15.03 17,16.5 L17,18 C17,18.35 16.93,18.69 16.82,19 L22,19 C22.55,19 23,18.55 23,18 L23,16.5 C23,14.17 18.33,13 16,13 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "group",
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

export const SocialGroupIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    