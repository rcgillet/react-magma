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
    "timer_off"
  ],
  "paths": [
    {
      "d": "M9.99999999,2.99999995 L14,2.99999995 C14.55,2.99999995 15,2.54999996 15,1.99999995 C15,1.44999996 14.55,0.999999954 14,0.999999954 L9.99999999,0.999999954 C9.44999999,0.999999954 8.99999999,1.44999996 8.99999999,1.99999995 C8.99999999,2.54999996 9.44999999,2.99999995 9.99999999,2.99999995 Z M12,7.99999998 C11.49,7.99999998 11.08,8.38999998 11.02,8.88999999 L13,10.86 L13,8.99999998 C13,8.44999999 12.55,7.99999998 12,7.99999998 Z M12,5.99999997 C15.87,5.99999997 19,9.12999999 19,13 C19,14.12 18.73,15.18 18.26,16.12 L19.73,17.59 C20.53,16.25 21,14.68 21,13 C21,10.88 20.26,8.92999999 19.03,7.38999998 L19.78,6.63999998 C20.16,6.25999998 20.17,5.62999997 19.78,5.23999997 L19.77,5.22999997 C19.38,4.83999997 18.76,4.84999997 18.37,5.22999997 L17.62,5.97999997 C16.07,4.73999997 14.12,3.99999997 12,3.99999997 C10.34,3.99999997 8.77999999,4.47999997 7.42999998,5.28999997 L8.87999999,6.73999998 C9.81999999,6.26999998 10.88,5.99999997 12,5.99999997 Z M20.19,20.88 L3.86999997,4.55999997 C3.47999996,4.16999997 2.84999996,4.16999997 2.45999996,4.55999997 C2.06999996,4.94999997 2.06999996,5.57999997 2.45999996,5.96999997 L4.52999997,8.03999998 C3.60999997,9.41999999 3.04999996,11.03 2.99999996,12.76 C2.86999996,17.84 6.93999998,22 12,22 C13.84,22 15.55,21.45 16.98,20.5 L18.77,22.29 C19.16,22.68 19.79,22.68 20.18,22.29 C20.58,21.9 20.58,21.27 20.19,20.88 L20.19,20.88 Z M12,20 C8.12999998,20 4.99999997,16.87 4.99999997,13 C4.99999997,11.71 5.34999997,10.51 5.95999997,9.47999999 L15.53,19.05 C14.49,19.65 13.29,20 12,20 L12,20 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "timer_off",
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

export const ImageTimerOffIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    