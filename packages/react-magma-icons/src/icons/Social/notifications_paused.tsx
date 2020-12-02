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
    "notifications_paused"
  ],
  "paths": [
    {
      "d": "M12,22 C13.1,22 14,21.1 14,20 L9.99999999,20 C9.99999999,21.1 10.89,22 12,22 Z M19.29,17.29 L18,16 L18,11 C18,7.92999998 16.36,5.35999997 13.5,4.67999997 L13.5,3.99999996 C13.5,3.16999996 12.83,2.49999996 12,2.49999996 C11.17,2.49999996 10.5,3.16999996 10.5,3.99999996 L10.5,4.67999997 C7.62999998,5.35999997 5.99999997,7.91999998 5.99999997,11 L5.99999997,16 L4.70999997,17.29 C4.07999997,17.92 4.51999997,19 5.40999997,19 L18.58,19 C19.48,19 19.92,17.92 19.29,17.29 Z M14.5,9.32999999 C14.5,9.63999999 14.39,9.92999999 14.2,10.17 L11.7,13.2 L13.6,13.2 C14.1,13.2 14.5,13.6 14.5,14.1 C14.5,14.6 14.1,15 13.6,15 L10.82,15 C10.09,15 9.49999999,14.41 9.49999999,13.68 L9.49999999,13.67 C9.49999999,13.36 9.60999999,13.07 9.79999999,12.83 L12.3,9.79999999 L10.4,9.79999999 C9.89999999,9.79999999 9.49999999,9.39999999 9.49999999,8.89999999 C9.49999999,8.39999999 9.89999999,7.99999998 10.4,7.99999998 L13.18,7.99999998 C13.91,7.99999998 14.5,8.58999999 14.5,9.32999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "notifications_paused",
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

export const SocialNotificationsPausedIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    