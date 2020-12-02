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
  title: ['cloud_off'],
  paths: [
    {
      d:
        'M24,15 C24,12.36 21.95,10.22 19.35,10.04 C18.67,6.58999998 15.64,3.99999997 12,3.99999997 C10.67,3.99999997 9.42999999,4.35999997 8.34999998,4.96999997 L9.83999999,6.45999998 C10.51,6.16999998 11.23,5.99999997 12,5.99999997 C15.04,5.99999997 17.5,8.45999999 17.5,11.5 L17.5,12 L19,12 C20.66,12 22,13.34 22,15 C22,15.99 21.52,16.85 20.79,17.4 L22.2,18.81 C23.29,17.89 24,16.54 24,15 Z M3.70999997,4.55999997 C3.31999996,4.94999997 3.31999996,5.57999997 3.70999997,5.96999997 L5.76999997,8.02999998 L5.34999997,8.02999998 C2.06999996,8.37999998 -0.410000052,11.37 0.0599999502,14.82 C0.459999952,17.84 3.18999996,20 6.21999998,20 L17.73,20 L19.02,21.29 C19.41,21.68 20.04,21.68 20.43,21.29 C20.82,20.9 20.82,20.27 20.43,19.88 L5.11999997,4.55999997 C4.72999997,4.16999997 4.09999997,4.16999997 3.70999997,4.55999997 Z M5.99999996,18 C3.78999997,18 1.99999996,16.21 1.99999996,14 C1.99999996,11.79 3.78999997,9.99999999 5.99999996,9.99999999 L7.72999998,9.99999999 L15.73,18 L5.99999996,18 Z',
      id: 'FileCloudOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'cloud_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'FileCloudOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#FileCloudOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#FileCloudOffIcon-path-1',
        },
      ],
    },
  ],
};

export const FileCloudOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
