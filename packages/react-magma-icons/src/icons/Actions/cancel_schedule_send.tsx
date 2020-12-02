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
    "cancel_schedule_send"
  ],
  "paths": [
    {
      "d": "M1.00999995,4.50999997 C1.00999995,3.79999997 1.73999996,3.30999996 2.39999996,3.59999997 L2.39999996,3.59999997 L15.26,9.10999999 C15.67,9.03999999 16.08,8.99999999 16.5,8.99999999 C20.64,8.99999999 24,12.36 24,16.5 C24,20.64 20.64,24.0000001 16.5,24.0000001 C12.71,24.0000001 9.58999999,21.19 9.07999999,17.54 L9.07999999,17.54 L2.39999996,20.4 C1.73999996,20.68 1.00999995,20.2 1.00999995,19.48 L1.00999995,19.48 L0.999999954,14.8 C0.999999954,14.33 1.32999996,13.93 1.77999996,13.83 L1.77999996,13.83 L9.99999995,12 L1.77999996,10.18 C1.32999996,10.08 0.999999954,9.66999999 0.999999954,9.19999999 L0.999999954,9.19999999 Z M16.5,11 C13.47,11 11,13.47 11,16.5 C11,19.53 13.47,22 16.5,22 C19.53,22 22,19.53 22,16.5 C22,13.47 19.53,11 16.5,11 Z M14.38,14.38 C14.58,14.18 14.89,14.18 15.09,14.38 L15.09,14.38 L16.5,15.79 L17.91,14.38 C18.11,14.18 18.42,14.18 18.62,14.38 C18.82,14.57 18.82,14.89 18.62,15.09 L18.62,15.09 L17.21,16.5 L18.62,17.91 C18.82,18.11 18.82,18.42 18.62,18.62 C18.42,18.82 18.11,18.82 17.91,18.62 L17.91,18.62 L16.5,17.21 L15.09,18.62 C14.89,18.82 14.58,18.82 14.38,18.62 C14.18,18.42 14.18,18.11 14.38,17.91 L14.38,17.91 L15.79,16.5 L14.38,15.09 C14.18,14.89 14.18,14.58 14.38,14.38 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "cancel_schedule_send",
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

export const ActionsCancelScheduleSendIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    