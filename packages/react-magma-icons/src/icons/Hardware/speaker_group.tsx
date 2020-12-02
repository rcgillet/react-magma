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
    "speaker_group"
  ],
  "paths": [
    {
      "d": "M4.99999997,4.99999997 C5.54999997,4.99999997 5.99999997,5.44999997 5.99999997,5.99999997 L5.99999997,5.99999997 L5.99999997,20 C5.99999997,20.55 6.44999998,21 6.99999997,21 L6.99999997,21 L15,21 C15.55,21 16,21.45 16,22 C16,22.55 15.55,23 15,23 L15,23 L5.99999997,23 C4.88999997,23 3.99999997,22.1 3.99999997,21 L3.99999997,21 L3.99999997,5.99999997 C3.99999997,5.44999997 4.44999997,4.99999997 4.99999997,4.99999997 Z M18.2,0.999999954 C19.19,0.999999954 20,1.80999996 20,2.79999996 L20,2.79999996 L20,17.2 C20,18.19 19.19,19 18.2,19 L18.2,19 L9.79999999,18.99 C8.80999999,18.99 7.99999998,18.19 7.99999998,17.2 L7.99999998,17.2 L7.99999998,2.79999996 C7.99999998,1.80999996 8.80999999,0.999999954 9.79999999,0.999999954 L9.79999999,0.999999954 Z M14,8.49999999 C11.79,8.49999999 9.99999999,10.29 9.99999999,12.5 C9.99999999,14.71 11.79,16.5 14,16.5 C16.21,16.5 18,14.71 18,12.5 C18,10.29 16.21,8.49999999 14,8.49999999 Z M14,9.99999999 C15.3807119,9.99999999 16.5,11.1192881 16.5,12.5 C16.5,13.8807119 15.3807119,15 14,15 C12.6192881,15 11.5,13.8807119 11.5,12.5 C11.5,11.1192881 12.6192881,9.99999999 14,9.99999999 Z M14,2.99999996 C12.9,2.99999996 12,3.88999997 12,4.99999996 C12,6.10999998 12.9,6.99999996 14,6.99999996 C15.1,6.99999996 16,6.10999998 16,4.99999996 C16,3.88999997 15.1,2.99999996 14,2.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "speaker_group",
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

export const HardwareSpeakerGroupIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    