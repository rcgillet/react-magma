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
    "arrow_drop_down"
  ],
  "paths": [
    {
      "d": "M16,10.5000546 C16,10.6353858 15.950562,10.752634 15.8516886,10.8517991 L12.3517438,14.3517438 C12.2528704,14.4506172 12.1356222,14.500054 12,14.500054 C11.8643765,14.500054 11.7471284,14.4506172 11.6482549,14.3517438 L8.14831016,10.8517991 C8.04943672,10.7529256 8,10.6356775 8,10.5000546 C8,10.3644317 8.04943672,10.2471836 8.14831016,10.1483102 C8.2471836,10.0494367 8.36443175,10 8.50005461,10 L15.4999441,10 C15.6352753,10 15.7525235,10.0494367 15.8516886,10.1483102 C15.9508537,10.2471836 16.0002904,10.3644317 16,10.5000546 L16,10.5000546 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "arrow_drop_down",
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
          "id": "Shape",
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const NavigationArrowDropDownIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    