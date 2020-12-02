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
    "history_edu"
  ],
  "paths": [
    {
      "d": "M8.99999999,4.99999997 L8.99999999,5.37999997 C8.16999998,5.04999997 7.27999998,4.87999997 6.38999998,4.87999997 C4.96999997,4.87999997 3.54999996,5.30999997 2.33999996,6.16999998 C1.82999996,6.52999998 1.76999996,7.25999998 2.20999996,7.69999998 L4.77999997,10.27 L5.88999997,10.27 L5.88999997,11.38 C6.74999998,12.24 7.86999998,12.69 8.99999999,12.74 L8.99999999,15 L6.99999998,15 C6.44999998,15 5.99999998,15.45 5.99999998,16 L5.99999998,18 C5.99999998,19.1 6.89999998,20 7.99999998,20 L18,20 C19.66,20 21,18.66 21,17 L21,4.99999997 C21,4.44999997 20.55,3.99999997 20,3.99999997 L9.99999999,3.99999997 C9.44999999,3.99999997 8.99999999,4.44999997 8.99999999,4.99999997 Z M7.88999998,10.41 L7.88999998,8.25999998 L5.60999997,8.25999998 L4.56999997,7.21999998 C5.13999997,6.99999998 5.75999997,6.87999998 6.38999998,6.87999998 C7.72999998,6.87999998 8.97999999,7.39999998 9.92999999,8.33999998 L11.34,9.74999999 L11.14,9.94999999 C10.63,10.46 9.94999999,10.75 9.21999999,10.75 C8.74999999,10.75 8.28999998,10.63 7.88999998,10.41 Z M19,17 C19,17.55 18.55,18 18,18 C17.45,18 17,17.55 17,17 L17,16 C17,15.45 16.55,15 16,15 L11,15 L11,12.41 C11.57,12.18 12.1,11.84 12.56,11.38 L12.76,11.18 L15.59,14 L17,14 L17,12.59 L11,6.61999998 L11,5.99999998 L19,5.99999998 L19,17 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "history_edu",
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

export const SocialHistoryEduIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    