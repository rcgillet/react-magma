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
  title: ['speaker'],
  paths: [
    {
      d:
        'M17,1.99999996 L6.99999997,1.99999996 C5.89999997,1.99999996 4.99999997,2.89999996 4.99999997,3.99999996 L4.99999997,20 C4.99999997,21.1 5.89999997,21.99 6.99999997,21.99 L17,22 C18.1,22 19,21.1 19,20 L19,3.99999996 C19,2.89999996 18.1,1.99999996 17,1.99999996 Z M12,3.99999997 C13.1,3.99999997 14,4.89999997 14,5.99999997 C14,7.09999998 13.1,7.99999997 12,7.99999997 C10.89,7.99999997 9.99999999,7.09999998 9.99999999,5.99999997 C9.99999999,4.89999997 10.89,3.99999997 12,3.99999997 Z M12,20 C9.23999999,20 6.99999998,17.76 6.99999998,15 C6.99999998,12.24 9.23999999,9.99999999 12,9.99999999 C14.76,9.99999999 17,12.24 17,15 C17,17.76 14.76,20 12,20 Z M12,12 C10.34,12 8.99999999,13.34 8.99999999,15 C8.99999999,16.66 10.34,18 12,18 C13.66,18 15,16.66 15,15 C15,13.34 13.66,12 12,12 Z',
      id: 'HardwareSpeakerIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'speaker',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareSpeakerIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareSpeakerIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareSpeakerIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareSpeakerIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
