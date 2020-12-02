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
    "emoji_food_beverage"
  ],
  "paths": [
    {
      "d": "M19,19 C19.55,19 20,19.45 20,20 C20,20.55 19.55,21 19,21 L19,21 L2.99999996,21 C2.44999996,21 1.99999996,20.55 1.99999996,20 C1.99999996,19.45 2.44999996,19 2.99999996,19 L2.99999996,19 Z M7.99999997,2.99999996 L7.99999997,5.39999997 L6.18999998,6.84999998 C6.06999998,6.93999998 5.99999997,7.08999998 5.99999997,7.23999998 L5.99999997,7.23999998 L5.99999997,11.5 C5.99999997,11.78 6.21999998,12 6.49999997,12 L6.49999997,12 L10.5,12 C10.78,12 11,11.78 11,11.5 L11,11.5 L11,7.23999998 C11,7.08999998 10.93,6.93999998 10.81,6.84999998 L10.81,6.84999998 L8.99999997,5.39999997 L8.99999997,2.99999996 L20,2.99999996 C21.1,2.99999996 22,3.89999997 22,4.99999996 L22,4.99999996 L22,7.99999996 C22,9.09999999 21.1,9.99999996 20,9.99999996 L20,9.99999996 L18,9.99999996 L18,13 C18,15.21 16.21,17 14,17 L14,17 L7.99999997,17 C5.78999997,17 3.99999997,15.21 3.99999997,13 L3.99999997,13 L3.99999997,4.99999996 C3.99999997,3.89999997 4.89999997,2.99999996 5.99999997,2.99999996 L5.99999997,2.99999996 L7.99999997,2.99999996 Z M20,4.99999997 L18,4.99999997 L18,7.99999997 L20,7.99999997 L20,4.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "emoji_food_beverage",
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

export const SocialEmojiFoodBeverageIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    