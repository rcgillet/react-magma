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
    "emoji_emotions"
  ],
  "paths": [
    {
      "d": "M11.99,1.99999996 C6.46999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.46999998,22 11.99,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 11.99,1.99999996 Z M8.49999998,7.99999998 C9.32999999,7.99999998 9.99999998,8.66999999 9.99999998,9.49999998 C9.99999998,10.33 9.32999999,11 8.49999998,11 C7.66999998,11 6.99999998,10.33 6.99999998,9.49999998 C6.99999998,8.66999999 7.66999998,7.99999998 8.49999998,7.99999998 Z M16.71,14.72 C15.8,16.67 14.04,18 12,18 C9.95999999,18 8.19999998,16.67 7.28999998,14.72 C7.12999998,14.39 7.36999998,14 7.73999998,14 L16.26,14 C16.63,14 16.87,14.39 16.71,14.72 Z M15.5,11 C14.67,11 14,10.33 14,9.49999998 C14,8.66999999 14.67,7.99999998 15.5,7.99999998 C16.33,7.99999998 17,8.66999999 17,9.49999998 C17,10.33 16.33,11 15.5,11 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "emoji_emotions",
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

export const SocialEmojiEmotionsIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    