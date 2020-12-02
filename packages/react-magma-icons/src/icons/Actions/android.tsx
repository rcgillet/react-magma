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
    "android"
  ],
  "paths": [
    {
      "d": "M5.99999997,18 C5.99999997,18.55 6.44999998,19 6.99999997,19 L7.99999997,19 L7.99999997,22.5 C7.99999997,23.33 8.66999999,24 9.49999997,24 C10.33,24 11,23.33 11,22.5 L11,19 L13,19 L13,22.5 C13,23.33 13.67,24 14.5,24 C15.33,24 16,23.33 16,22.5 L16,19 L17,19 C17.55,19 18,18.55 18,18 L18,7.99999998 L5.99999997,7.99999998 L5.99999997,18 Z M3.49999996,7.99999998 C2.66999996,7.99999998 1.99999996,8.66999999 1.99999996,9.49999998 L1.99999996,16.5 C1.99999996,17.33 2.66999996,18 3.49999996,18 C4.32999997,18 4.99999996,17.33 4.99999996,16.5 L4.99999996,9.49999998 C4.99999996,8.66999999 4.32999997,7.99999998 3.49999996,7.99999998 Z M20.5,7.99999998 C19.67,7.99999998 19,8.66999999 19,9.49999998 L19,16.5 C19,17.33 19.67,18 20.5,18 C21.33,18 22,17.33 22,16.5 L22,9.49999998 C22,8.66999999 21.33,7.99999998 20.5,7.99999998 Z M15.53,2.15999996 L16.83,0.859999954 C17.03,0.659999953 17.03,0.349999951 16.83,0.149999951 C16.63,-0.0500000502 16.32,-0.0500000502 16.12,0.149999951 L14.64,1.62999996 C13.85,1.22999996 12.95,0.99999995 12,0.99999995 C11.04,0.99999995 10.14,1.22999996 9.33999999,1.62999996 L7.84999998,0.149999951 C7.64999998,-0.0500000502 7.33999998,-0.0500000502 7.13999998,0.149999951 C6.93999998,0.349999951 6.93999998,0.659999953 7.13999998,0.859999954 L8.44999999,2.16999996 C6.96999998,3.25999996 5.99999997,5.00999997 5.99999997,6.99999995 L18,6.99999995 C18,5.00999997 17.03,3.24999996 15.53,2.15999996 L15.53,2.15999996 Z M9.99999999,4.99999997 L8.99999999,4.99999997 L8.99999999,3.99999997 L9.99999999,3.99999997 L9.99999999,4.99999997 Z M15,4.99999997 L14,4.99999997 L14,3.99999997 L15,3.99999997 L15,4.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "android",
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

export const ActionsAndroidIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    