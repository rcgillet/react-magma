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
    "brightness_5"
  ],
  "paths": [
    {
      "d": "M20,15.31 L22.6,12.71 C22.99,12.32 22.99,11.69 22.6,11.3 L20,8.68999999 L20,4.99999997 C20,4.44999997 19.55,3.99999997 19,3.99999997 L15.31,3.99999997 L12.71,1.39999996 C12.32,1.00999995 11.69,1.00999995 11.3,1.39999996 L8.68999999,3.99999997 L4.99999997,3.99999997 C4.44999997,3.99999997 3.99999997,4.44999997 3.99999997,4.99999997 L3.99999997,8.68999999 L1.39999996,11.29 C1.00999995,11.68 1.00999995,12.31 1.39999996,12.7 L3.99999997,15.3 L3.99999997,19 C3.99999997,19.55 4.44999997,20 4.99999997,20 L8.68999999,20 L11.29,22.6 C11.68,22.99 12.31,22.99 12.7,22.6 L15.3,20 L19,20 C19.55,20 20,19.55 20,19 L20,15.31 Z M12,18 C8.68999999,18 5.99999998,15.31 5.99999998,12 C5.99999998,8.68999999 8.68999999,5.99999998 12,5.99999998 C15.31,5.99999998 18,8.68999999 18,12 C18,15.31 15.31,18 12,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "brightness_5",
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

export const ImageBrightness5Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    