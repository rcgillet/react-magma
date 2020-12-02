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
    "backspace"
  ],
  "paths": [
    {
      "d": "M22,2.99999996 L6.99999998,2.99999996 C6.30999998,2.99999996 5.76999997,3.34999996 5.40999997,3.87999997 L0.369999952,11.45 C0.149999951,11.79 0.149999951,12.22 0.369999952,12.56 L5.40999997,20.12 C5.76999997,20.64 6.30999998,21 6.99999998,21 L22,21 C23.1,21 24,20.1 24,19 L24,4.99999996 C24,3.89999997 23.1,2.99999996 22,2.99999996 Z M18.3,16.3 C17.91,16.69 17.28,16.69 16.89,16.3 L14,13.41 L11.11,16.3 C10.72,16.69 10.09,16.69 9.69999999,16.3 C9.30999999,15.91 9.30999999,15.28 9.69999999,14.89 L12.59,12 L9.69999999,9.10999999 C9.30999999,8.71999999 9.30999999,8.08999998 9.69999999,7.69999998 C10.09,7.30999998 10.72,7.30999998 11.11,7.69999998 L14,10.59 L16.89,7.69999998 C17.28,7.30999998 17.91,7.30999998 18.3,7.69999998 C18.69,8.08999998 18.69,8.71999999 18.3,9.10999999 L15.41,12 L18.3,14.89 C18.68,15.27 18.68,15.91 18.3,16.3 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "backspace",
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

export const ContentBackspaceIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    