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
  title: ['compass_calibration'],
  paths: [
    {
      d:
        'M12,13 C14.209139,13 16,14.790861 16,17 C16,19.209139 14.209139,21 12,21 C9.79086099,21 7.99999998,19.209139 7.99999998,17 C7.99999998,14.790861 9.79086099,13 12,13 Z M12,2.99999996 C15.51,2.99999996 18.72,4.27999997 21.18,6.39999998 C21.63,6.77999998 21.67,7.45999998 21.25,7.87999998 L21.25,7.87999998 L17.65,11.48 C17.3,11.84 16.74,11.87 16.34,11.56 C15.14,10.63 13.64,10.07 12,10.07 C10.37,10.07 8.85999999,10.63 7.65999998,11.57 C7.25999998,11.88 6.69999998,11.85 6.33999998,11.49 L6.33999998,11.49 L2.73999996,7.88999998 C2.31999996,7.46999998 2.35999996,6.78999998 2.79999996,6.40999998 C5.27999997,4.28999997 8.48999999,2.99999996 12,2.99999996 Z',
      id: 'MapsCompassCalibrationIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'compass_calibration',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsCompassCalibrationIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsCompassCalibrationIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsCompassCalibrationIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsCompassCalibrationIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
