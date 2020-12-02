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
  title: ['new_releases'],
  paths: [
    {
      d:
        'M22.42,11.34 L20.56,9.21999999 L20.82,6.40999998 C20.87,5.90999997 20.53,5.44999997 20.05,5.33999997 L17.29,4.70999997 L15.85,2.27999996 C15.59,1.84999996 15.06,1.66999996 14.6,1.86999996 L12,2.99999996 L9.40999999,1.88999996 C8.94999999,1.68999996 8.40999999,1.86999996 8.15999998,2.29999996 L6.70999998,4.71999997 L3.95999997,5.33999997 C3.46999996,5.44999997 3.12999996,5.89999997 3.17999996,6.40999998 L3.43999996,9.20999999 L1.57999996,11.34 C1.24999996,11.72 1.24999996,12.28 1.57999996,12.66 L3.43999996,14.78 L3.17999996,17.6 C3.12999996,18.1 3.46999996,18.56 3.94999997,18.67 L6.70999998,19.3 L8.14999998,21.72 C8.40999999,22.15 8.93999999,22.33 9.40999999,22.13 L12,21 L14.59,22.11 C15.05,22.31 15.59,22.13 15.84,21.7 L17.28,19.27 L20.04,18.64 C20.53,18.53 20.86,18.07 20.81,17.57 L20.55,14.76 L22.41,12.64 C22.75,12.28 22.75,11.72 22.42,11.34 L22.42,11.34 Z M13,17 L11,17 L11,15 L13,15 L13,17 Z M12,13 C11.45,13 11,12.55 11,12 L11,7.99999998 C11,7.44999998 11.45,6.99999998 12,6.99999998 C12.55,6.99999998 13,7.44999998 13,7.99999998 L13,12 C13,12.55 12.55,13 12,13 Z',
      id: 'AVNewReleasesIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'new_releases',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVNewReleasesIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVNewReleasesIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVNewReleasesIcon-path-1',
        },
      ],
    },
  ],
};

export const AVNewReleasesIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
