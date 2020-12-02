import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  title: ['hd'],
  paths: [
    {
      d:
        'M19,2.99999996 L4.99999996,2.99999996 C3.88999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.88999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M10.25,15 C9.83999999,15 9.49999997,14.66 9.49999997,14.25 L9.49999997,13 L7.49999997,13 L7.49999997,14.25 C7.49999997,14.66 7.15999998,15 6.74999998,15 C6.33999998,15 5.99999997,14.66 5.99999997,14.25 L5.99999997,9.74999999 C5.99999997,9.33999999 6.33999998,8.99999999 6.74999998,8.99999999 C7.15999998,8.99999999 7.49999997,9.33999999 7.49999997,9.74999999 L7.49999997,11.5 L9.49999997,11.5 L9.49999997,9.74999999 C9.49999997,9.33999999 9.83999999,8.99999999 10.25,8.99999999 C10.66,8.99999999 11,9.33999999 11,9.74999999 L11,14.25 C11,14.66 10.66,15 10.25,15 Z M13.5,8.99999999 L17,8.99999999 C17.55,8.99999999 18,9.44999999 18,9.99999999 L18,14 C18,14.55 17.55,15 17,15 L13.5,15 C13.22,15 13,14.78 13,14.5 L13,9.49999999 C13,9.21999999 13.22,8.99999999 13.5,8.99999999 Z M14.5,13.5 L16.5,13.5 L16.5,10.5 L14.5,10.5 L14.5,13.5 Z',
      id: 'AVHdIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'hd',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVHdIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVHdIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVHdIcon-path-1',
        },
      ],
    },
  ],
};

export const AVHdIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
