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
    "mobile_screen_share"
  ],
  "paths": [
    {
      "d": "M17,0.999999954 L6.99999998,0.999999954 C5.89999997,0.999999954 5.00999997,1.89999996 5.00999997,2.99999995 L5.00999997,21 C5.00999997,22.1 5.89999997,23 6.99999998,23 L17,23 C18.1,23 19,22.1 19,21 L19,2.99999995 C19,1.89999996 18.1,0.999999954 17,0.999999954 Z M17,19 L6.99999998,19 L6.99999998,4.99999997 L17,4.99999997 L17,19 Z M12.8,13.22 L12.8,14.97 L15.61,12.35 C15.82,12.15 15.82,11.82 15.61,11.62 L12.8,8.99999999 L12.8,10.7 C9.68999999,11.13 8.44999999,13.26 7.99999998,15.4 C9.10999999,13.9 10.58,13.22 12.8,13.22 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "mobile_screen_share",
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

export const CommunicationMobileScreenShareIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    