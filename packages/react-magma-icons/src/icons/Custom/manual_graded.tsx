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
    "manual_graded"
  ],
  "paths": [
    {
      "d": "M12,2 C6.42857143,2 2,6.42857143 2,12 C2,17.5714286 6.42857143,22 12,22 C17.5714286,22 22,17.5714286 22,12 C22,6.42857143 17.5714286,2 12,2 Z M11.0704667,16.2105263 L9.17079564,10.020405 L9.12222451,10.020405 C9.19058422,11.279663 9.22476357,12.1197553 9.22476357,12.5407072 L9.22476357,16.2105263 L7.72985197,16.2105263 L7.72985197,8.3204153 L10.0072985,8.3204153 L11.8745888,14.3540296 L11.9069696,14.3540296 L13.8875925,8.3204153 L16.1650391,8.3204153 L16.1650391,16.2105263 L14.605366,16.2105263 L14.605366,12.4759457 C14.605366,12.2996496 14.6080643,12.0963725 14.6134611,11.8661081 C14.618858,11.6358438 14.6431433,11.0242134 14.6863178,10.0311986 L14.6377467,10.0311986 L12.6031558,16.2105263 L11.0704667,16.2105263 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "manual_graded",
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

export const CustomManualGradedIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    