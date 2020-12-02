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
    "keyboard_arrow_right"
  ],
  "paths": [
    {
      "d": "M9.28999999,15.88 L13.17,12 L9.28999999,8.11999998 C8.89999999,7.72999998 8.89999999,7.09999998 9.28999999,6.70999998 C9.67999999,6.31999998 10.31,6.31999998 10.7,6.70999998 L15.29,11.3 C15.68,11.69 15.68,12.32 15.29,12.71 L10.7,17.3 C10.31,17.69 9.67999999,17.69 9.28999999,17.3 C8.90999999,16.91 8.89999999,16.27 9.28999999,15.88 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "keyboard_arrow_right",
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
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const HardwareKeyboardArrowRightIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    