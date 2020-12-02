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
  title: ['replay'],
  paths: [
    {
      d:
        'M12,4.99999997 L12,2.20999996 C12,1.75999996 11.46,1.53999996 11.15,1.85999996 L7.34999998,5.64999997 C7.14999998,5.84999997 7.14999998,6.15999998 7.34999998,6.35999998 L11.14,10.15 C11.46,10.46 12,10.24 12,9.78999999 L12,6.99999998 C15.73,6.99999998 18.68,10.42 17.86,14.29 C17.39,16.56 15.55,18.39 13.29,18.86 C9.71999999,19.61 6.53999998,17.16 6.05999998,13.85 C5.98999997,13.37 5.56999997,13 5.07999997,13 C4.47999997,13 3.99999997,13.53 4.07999997,14.13 C4.69999997,18.52 8.87999999,21.77 13.61,20.85 C16.73,20.24 19.24,17.73 19.85,14.61 C20.84,9.47999999 16.94,4.99999997 12,4.99999997 Z',
      id: 'AVReplayIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'replay',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVReplayIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVReplayIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVReplayIcon-path-1',
        },
      ],
    },
  ],
};

export const AVReplayIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
