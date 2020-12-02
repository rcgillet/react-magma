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
    "push_pin"
  ],
  "paths": [
    {
      "d": "M19,12.87 C19,12.4 18.66,12.02 18.2,11.89 C16.93,11.54 16,10.38 16,8.99999996 L16,3.99999996 L17,3.99999996 C17.55,3.99999996 18,3.54999996 18,2.99999996 C18,2.44999996 17.55,1.99999996 17,1.99999996 L6.99999997,1.99999996 C6.44999998,1.99999996 5.99999997,2.44999996 5.99999997,2.99999996 C5.99999997,3.54999996 6.44999998,3.99999996 6.99999997,3.99999996 L7.99999997,3.99999996 L7.99999997,8.99999996 C7.99999997,10.38 7.06999998,11.54 5.79999997,11.89 C5.33999997,12.02 4.99999997,12.4 4.99999997,12.87 L4.99999997,13 C4.99999997,13.55 5.44999997,14 5.99999997,14 L10.98,14 L11,21 C11,21.55 11.45,22 12,22 C12.55,22 13,21.55 13,21 L12.98,14 L18,14 C18.55,14 19,13.55 19,13 L19,12.87 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "push_pin",
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

export const ContentPushPinIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    