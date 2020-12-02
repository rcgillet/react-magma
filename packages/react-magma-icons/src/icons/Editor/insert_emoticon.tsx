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
    "insert_emoticon"
  ],
  "paths": [
    {
      "d": "M11.99,1.99999996 C6.46999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.46999998,22 11.99,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 11.99,1.99999996 Z M12,20 C7.57999998,20 3.99999997,16.42 3.99999997,12 C3.99999997,7.57999998 7.57999998,3.99999997 12,3.99999997 C16.42,3.99999997 20,7.57999998 20,12 C20,16.42 16.42,20 12,20 Z M15.5,11 C16.33,11 17,10.33 17,9.49999998 C17,8.66999999 16.33,7.99999998 15.5,7.99999998 C14.67,7.99999998 14,8.66999999 14,9.49999998 C14,10.33 14.67,11 15.5,11 Z M8.49999998,11 C9.32999999,11 9.99999998,10.33 9.99999998,9.49999998 C9.99999998,8.66999999 9.32999999,7.99999998 8.49999998,7.99999998 C7.66999998,7.99999998 6.99999998,8.66999999 6.99999998,9.49999998 C6.99999998,10.33 7.66999998,11 8.49999998,11 Z M12,17.5 C14.03,17.5 15.8,16.39 16.75,14.75 C16.94,14.42 16.7,14 16.31,14 L7.68999998,14 C7.30999998,14 7.05999998,14.42 7.24999998,14.75 C8.19999998,16.39 9.96999999,17.5 12,17.5 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "insert_emoticon",
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

export const EditorInsertEmoticonIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    