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
    "person_remove_alt_1"
  ],
  "paths": [
    {
      "d": "M14,7.99999997 C14,5.78999997 12.21,3.99999997 9.99999997,3.99999997 C7.78999998,3.99999997 5.99999997,5.78999997 5.99999997,7.99999997 C5.99999997,10.21 7.78999998,12 9.99999997,12 C12.21,12 14,10.21 14,7.99999997 Z M1.99999996,18 L1.99999996,19 C1.99999996,19.55 2.44999996,20 2.99999996,20 L17,20 C17.55,20 18,19.55 18,19 L18,18 C18,15.34 12.67,14 9.99999996,14 C7.32999998,14 1.99999996,15.34 1.99999996,18 Z M18,9.99999999 L22,9.99999999 C22.55,9.99999999 23,10.45 23,11 L23,11 C23,11.55 22.55,12 22,12 L18,12 C17.45,12 17,11.55 17,11 L17,11 C17,10.45 17.45,9.99999999 18,9.99999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "person_remove_alt_1",
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

export const SocialPersonRemoveAlt1Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    