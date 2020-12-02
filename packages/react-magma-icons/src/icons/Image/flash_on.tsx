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
    "flash_on"
  ],
  "paths": [
    {
      "d": "M6.99999998,2.99999996 L6.99999998,12 C6.99999998,12.55 7.44999998,13 7.99999998,13 L9.99999998,13 L9.99999998,20.15 C9.99999998,20.66 10.67,20.84 10.93,20.4 L16.12,11.5 C16.51,10.83 16.03,9.99999996 15.26,9.99999996 L13,9.99999996 L15.49,3.34999996 C15.74,2.69999996 15.26,1.99999996 14.56,1.99999996 L7.99999998,1.99999996 C7.44999998,1.99999996 6.99999998,2.44999996 6.99999998,2.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "flash_on",
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

export const ImageFlashOnIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    