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
    "text_rotation_angleup"
  ],
  "paths": [
    {
      "d": "M17.61,9.84999999 L18.17,10.41 L9.68999999,18.9 C9.29999999,19.29 9.29999999,19.92 9.68999999,20.31 C10.08,20.7 10.71,20.7 11.1,20.31 L19.59,11.82 L20.15,12.38 C20.46,12.7 21,12.48 21,12.04 L21,9.49999999 C21,9.21999999 20.78,8.99999999 20.5,8.99999999 L17.96,8.99999999 C17.52,8.99999999 17.3,9.53999999 17.61,9.84999999 L17.61,9.84999999 Z M8.47999999,12.75 L12.02,9.20999999 L13.62,9.87999999 C13.98,10.03 14.39,9.94999999 14.67,9.66999999 C15.16,9.17999999 14.99,8.35999998 14.35,8.09999998 L5.25999997,4.49999997 C4.82999997,4.33999997 4.34999997,4.43999997 4.02999997,4.75999997 C3.70999997,5.07999997 3.60999997,5.55999997 3.77999997,5.98999997 L7.38999998,15.08 C7.63999998,15.72 8.46999999,15.89 8.95999999,15.4 C9.23999999,15.12 9.31999999,14.71 9.16999999,14.35 L8.47999999,12.75 Z M7.65999998,11.03 L5.42999997,6.15999998 L10.3,8.38999998 L7.65999998,11.03 L7.65999998,11.03 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "text_rotation_angleup",
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

export const ActionsTextRotationAngleupIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    