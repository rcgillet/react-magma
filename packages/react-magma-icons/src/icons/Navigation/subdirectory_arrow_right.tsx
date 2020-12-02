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
    "subdirectory_arrow_right"
  ],
  "paths": [
    {
      "d": "M18.29,15.71 L13.71,20.29 C13.32,20.68 12.68,20.68 12.29,20.29 C11.9,19.9 11.9,19.26 12.29,18.87 L15.17,16 L4.99999997,16 C4.44999997,16 3.99999997,15.55 3.99999997,15 L3.99999997,4.99999997 C3.99999997,4.44999997 4.44999997,3.99999997 4.99999997,3.99999997 C5.54999997,3.99999997 5.99999997,4.44999997 5.99999997,4.99999997 L5.99999997,14 L15.17,14 L12.29,11.13 C11.9,10.74 11.9,10.1 12.29,9.70999999 C12.68,9.31999999 13.32,9.31999999 13.71,9.70999999 L18.29,14.29 C18.68,14.68 18.68,15.32 18.29,15.71 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "subdirectory_arrow_right",
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

export const NavigationSubdirectoryArrowRightIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    