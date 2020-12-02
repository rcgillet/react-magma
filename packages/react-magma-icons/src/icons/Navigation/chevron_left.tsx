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
    "chevron_left"
  ],
  "paths": [
    {
      "d": "M14.71,6.70999998 C14.32,6.31999998 13.69,6.31999998 13.3,6.70999998 L8.70999999,11.3 C8.31999998,11.69 8.31999998,12.32 8.70999999,12.71 L13.3,17.3 C13.69,17.69 14.32,17.69 14.71,17.3 C15.1,16.91 15.1,16.28 14.71,15.89 L10.83,12 L14.71,8.11999998 C15.1,7.72999998 15.09,7.08999998 14.71,6.70999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "chevron_left",
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

export const NavigationChevronLeftIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    