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
    "self_improvement"
  ],
  "paths": [
    {
      "d": "M12.53,8.99999999 C13.12,8.99999999 13.68,9.25999999 14.06,9.72999999 L14.06,9.72999999 L15.4,11.33 C16.66,12.83 18.27,13.75 20.15,13.96 C20.64,14.01 21,14.44 21,14.94 L21,14.94 L20.9930696,15.0580208 C20.9290222,15.5990222 20.43,15.996 19.87,15.94 C17.57,15.66 15.56,14.55 14,12.75 L14,12.75 L14,15 L17.87,16.55 C18.68,16.87 19.16,17.74 18.95,18.63 C18.75,19.46 17.95,20 17.1,20 L17.1,20 L9.99999996,20 L9.99999996,19.5 C9.99999996,18.67 10.67,18 11.5,18 L11.5,18 L14.5,18 C14.78,18 15,17.78 15,17.5 C15,17.22 14.78,17 14.5,17 L14.5,17 L11.5,17 C10.12,17 8.99999996,18.12 8.99999996,19.5 L8.99999996,19.5 L8.99999996,20 L6.78999998,20 C5.73999997,20 4.90999997,19.1 5.00999997,18.03 C5.07999997,17.33 5.58999997,16.76 6.23999998,16.5 L6.23999998,16.5 L9.99999996,15 L9.99999996,12.75 C8.44999999,14.55 6.42999998,15.67 4.12999997,15.94 C3.52999996,16.01 2.99999996,15.54 2.99999996,14.94 L2.99999996,14.94 L3.00629036,14.8259945 C3.05621298,14.3760355 3.3984615,14.0053846 3.85999997,13.95 C5.73999997,13.74 7.35999998,12.82 8.60999999,11.32 L8.60999999,11.32 L9.94999999,9.71999999 C10.33,9.25999999 10.89,8.99999999 11.48,8.99999999 L11.48,8.99999999 Z M12,3.99999997 C13.1045695,3.99999997 14,4.89543047 14,5.99999997 C14,7.10456948 13.1045695,7.99999997 12,7.99999997 C10.8954305,7.99999997 9.99999999,7.10456948 9.99999999,5.99999997 C9.99999999,4.89543047 10.8954305,3.99999997 12,3.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "self_improvement",
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

export const SocialSelfImprovementIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    