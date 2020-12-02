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
    "golf_course"
  ],
  "paths": [
    {
      "d": "M8.99999997,3.59999997 C8.99999997,2.85999996 9.77999999,2.37999996 10.45,2.70999996 L10.45,2.70999996 L15.21,5.03999997 C15.95,5.39999997 15.95,6.45999998 15.22,6.82999998 L15.22,6.82999998 L11,8.97999999 L11,18.03 C13.84,18.19 16,19.01 16,20 C16,21.1 13.31,22 9.99999997,22 C6.68999998,22 3.99999997,21.1 3.99999997,20 C3.99999997,19.26 5.20999997,18.62 6.99999997,18.27 L6.99999997,18.27 L6.99999997,19 C6.99999997,19.55 7.44999998,20 7.99999997,20 C8.54999999,20 8.99999997,19.55 8.99999997,19 L8.99999997,19 Z M19.5,18 C20.3284272,18 21,18.6715729 21,19.5 C21,20.3284272 20.3284272,21 19.5,21 C18.6715729,21 18,20.3284272 18,19.5 C18,18.6715729 18.6715729,18 19.5,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "golf_course",
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

export const PlacesGolfCourseIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    