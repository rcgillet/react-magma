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
  title: ['wb_cloudy'],
  paths: [
    {
      d:
        'M18.5952,10.1184 C17.9328,6.80639998 15.024,4.31999997 11.5296,4.31999997 C8.75519999,4.31999997 6.34559998,5.89439997 5.14559997,8.19839998 C2.25599996,8.50559999 0.00959995004,10.9536 0.00959995004,13.92 C0.00959995004,17.0976 2.59199996,19.68 5.76959997,19.68 L18.2496,19.68 C20.8992,19.68 23.0496,17.5296 23.0496,14.88 C23.0496,12.3456 21.0816,10.2912 18.5952,10.1184 Z',
      id: 'ImageWbCloudyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'wb_cloudy',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageWbCloudyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageWbCloudyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageWbCloudyIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageWbCloudyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
