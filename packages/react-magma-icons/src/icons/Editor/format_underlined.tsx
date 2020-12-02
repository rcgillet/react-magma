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
    "format_underlined"
  ],
  "paths": [
    {
      "d": "M12.79,16.95 C15.82,16.56 18,13.84 18,10.79 L18,4.24999997 C18,3.55999996 17.44,2.99999996 16.75,2.99999996 C16.06,2.99999996 15.5,3.55999996 15.5,4.24999997 L15.5,10.9 C15.5,12.57 14.37,14.09 12.73,14.42 C10.48,14.89 8.49999998,13.17 8.49999998,11 L8.49999998,4.24999997 C8.49999998,3.55999996 7.93999998,2.99999996 7.24999998,2.99999996 C6.55999998,2.99999996 5.99999998,3.55999996 5.99999998,4.24999997 L5.99999998,11 C5.99999998,14.57 9.12999999,17.42 12.79,16.95 Z M4.99999997,20 C4.99999997,20.55 5.44999997,21 5.99999997,21 L18,21 C18.55,21 19,20.55 19,20 C19,19.45 18.55,19 18,19 L5.99999997,19 C5.44999997,19 4.99999997,19.45 4.99999997,20 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "format_underlined",
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

export const EditorFormatUnderlinedIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    