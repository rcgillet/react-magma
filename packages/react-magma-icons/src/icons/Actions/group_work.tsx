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
    "group_work"
  ],
  "paths": [
    {
      "d": "M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M7.99999997,17.5 C6.61999998,17.5 5.49999997,16.38 5.49999997,15 C5.49999997,13.62 6.61999998,12.5 7.99999997,12.5 C9.37999999,12.5 10.5,13.62 10.5,15 C10.5,16.38 9.37999999,17.5 7.99999997,17.5 Z M9.49999999,7.99999997 C9.49999999,6.61999998 10.62,5.49999997 12,5.49999997 C13.38,5.49999997 14.5,6.61999998 14.5,7.99999997 C14.5,9.37999999 13.38,10.5 12,10.5 C10.62,10.5 9.49999999,9.37999999 9.49999999,7.99999997 Z M16,17.5 C14.62,17.5 13.5,16.38 13.5,15 C13.5,13.62 14.62,12.5 16,12.5 C17.38,12.5 18.5,13.62 18.5,15 C18.5,16.38 17.38,17.5 16,17.5 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "group_work",
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

export const ActionsGroupWorkIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    