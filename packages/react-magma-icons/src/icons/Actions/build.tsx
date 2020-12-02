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
  title: ['build'],
  paths: [
    {
      d:
        'M12.09,2.90999996 C10.08,0.899999954 7.06999998,0.489999952 4.64999997,1.66999996 L8.27999998,5.29999997 C8.66999999,5.68999997 8.66999999,6.31999998 8.27999998,6.70999998 L6.68999998,8.29999998 C6.29999998,8.69999999 5.66999997,8.69999999 5.27999997,8.29999998 L1.64999996,4.66999997 C0.479999952,7.09999998 0.889999954,10.09 2.89999996,12.1 C4.75999997,13.96 7.47999998,14.45 9.78999999,13.58 L17.75,21.54 C18.78,22.57 20.44,22.57 21.46,21.54 C22.49,20.51 22.49,18.85 21.46,17.83 L13.54,9.89999999 C14.46,7.55999998 13.98,4.79999997 12.09,2.90999996 Z',
      id: 'ActionsBuildIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'build',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsBuildIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsBuildIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsBuildIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsBuildIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
