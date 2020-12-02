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
    "app_blocking"
  ],
  "paths": [
    {
      "d": "M17,0.999999954 C18.1,0.999999954 19,1.89999996 19,2.99999995 L19,2.99999995 L19,6.99999995 L17,6.99999995 L17,5.99999995 L6.99999997,5.99999995 L6.99999997,18 L17,18 L17,17 L19,17 L19,21 C19,22.1 18.1,23 17,23 L17,23 L6.99999997,23 C5.89999997,23 4.99999997,22.1 4.99999997,21 L4.99999997,21 L4.99999997,2.99999995 C4.99999997,1.89999996 5.89999997,0.999999954 6.99999997,0.999999954 L6.99999997,0.999999954 Z M18,7.99999998 C20.21,7.99999998 22,9.78999999 22,12 C22,14.21 20.21,16 18,16 C15.79,16 14,14.21 14,12 C14,9.78999999 15.79,7.99999998 18,7.99999998 Z M20.21,10.85 L16.85,14.21 C17.2,14.39 17.58,14.5 18,14.5 C19.38,14.5 20.5,13.38 20.5,12 C20.5,11.58 20.39,11.2 20.21,10.85 L20.21,10.85 Z M18,9.49999999 C16.62,9.49999999 15.5,10.62 15.5,12 C15.5,12.42 15.61,12.8 15.79,13.15 L15.79,13.15 L19.15,9.78999999 C18.8,9.60999999 18.42,9.49999999 18,9.49999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "app_blocking",
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

export const ActionsAppBlockingIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    