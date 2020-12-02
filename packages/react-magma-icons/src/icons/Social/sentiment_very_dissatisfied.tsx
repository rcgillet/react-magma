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
    "sentiment_very_dissatisfied"
  ],
  "paths": [
    {
      "d": "M12,13.5 C9.96999999,13.5 8.19999998,14.61 7.24999998,16.25 C7.05999998,16.58 7.30999998,17 7.68999998,17 L16.31,17 C16.69,17 16.94,16.58 16.75,16.25 C15.8,14.61 14.03,13.5 12,13.5 Z M8.34999998,11.47 L8.87999999,10.94 L9.40999999,11.47 C9.69999999,11.76 10.18,11.76 10.47,11.47 C10.76,11.18 10.76,10.7 10.47,10.41 L9.93999999,9.87999999 L10.47,9.34999999 C10.76,9.05999999 10.76,8.57999999 10.47,8.28999998 C10.18,7.99999998 9.69999999,7.99999998 9.40999999,8.28999998 L8.87999999,8.81999999 L8.34999998,8.28999998 C8.05999998,7.99999998 7.57999998,7.99999998 7.28999998,8.28999998 C6.99999998,8.57999999 6.99999998,9.05999999 7.28999998,9.34999999 L7.81999998,9.87999999 L7.28999998,10.41 C6.99999998,10.7 6.99999998,11.18 7.28999998,11.47 C7.57999998,11.76 8.05999998,11.76 8.34999998,11.47 Z M11.99,1.99999996 C6.46999998,1.99999996 1.99999996,6.46999998 1.99999996,12 C1.99999996,17.53 6.46999998,22 11.99,22 C17.51,22 22,17.53 22,12 C22,6.46999998 17.52,1.99999996 11.99,1.99999996 Z M12,20 C7.57999998,20 3.99999997,16.42 3.99999997,12 C3.99999997,7.57999998 7.57999998,3.99999997 12,3.99999997 C16.42,3.99999997 20,7.57999998 20,12 C20,16.42 16.42,20 12,20 Z M15.65,8.28999998 L15.12,8.81999999 L14.59,8.28999998 C14.3,7.99999998 13.82,7.99999998 13.53,8.28999998 C13.24,8.57999999 13.24,9.05999999 13.53,9.34999999 L14.06,9.87999999 L13.53,10.41 C13.24,10.7 13.24,11.18 13.53,11.47 C13.82,11.76 14.3,11.76 14.59,11.47 L15.12,10.94 L15.65,11.47 C15.94,11.76 16.42,11.76 16.71,11.47 C17,11.18 17,10.7 16.71,10.41 L16.18,9.87999999 L16.71,9.34999999 C17,9.05999999 17,8.57999999 16.71,8.28999998 C16.42,7.99999998 15.94,7.99999998 15.65,8.28999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "sentiment_very_dissatisfied",
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

export const SocialSentimentVeryDissatisfiedIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    