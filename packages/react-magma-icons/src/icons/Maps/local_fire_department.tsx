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
  title: ['local_fire_department'],
  paths: [
    {
      d:
        'M13.15352,1.49663996 L13.2306844,1.49868736 C13.5101333,1.5284444 13.7433333,1.79733329 13.67,2.11999996 C12.32,8.04999998 17.91,8.26999998 19.48,12.35 C20.6,15.03 19.84,18.11 17.76,20.04 C16.3236,21.3548 14.459776,21.930272 12.5811654,21.9946836 L12.28448,22.00064 C11.79,22.0036 11.296,21.972 10.81,21.91 C9.10999999,21.69 4.37999997,19.97 3.99999997,14.37 C3.99999997,11.84 4.68999997,10.16 5.36999997,9.11999999 C5.47235291,8.96823528 5.62328717,8.90117646 5.7731223,8.90079787 L5.84771827,8.90608181 C6.09453285,8.94166089 6.31529409,9.15411764 6.27999998,9.45999999 C6.11999998,10.87 6.30999998,12.84 8.11999998,14.21 C8.21176469,14.2805882 8.31183389,14.3107613 8.4088744,14.3096377 L8.48090982,14.3030694 C8.76536331,14.2544637 8.99705881,13.9447059 8.86999999,13.62 C6.67999998,7.99999998 9.28999999,3.70999997 12.92,1.56999996 C12.996,1.52399996 13.0756,1.50079996 13.15352,1.49663996 Z M12.49,9.97999999 L12.3922266,10.2580852 C11.7246875,12.3567188 12.89625,13.6995833 12.58,15.07 C12.38,15.99 11.64,17.03 10.2,17.38 C11.0923077,18.1123077 11.9694675,18.4138462 12.7539918,18.4066728 L12.8999856,18.4017398 C14.5901405,18.3026775 15.8138462,16.7628846 15.76,15.06 C15.76,13.02 12.82,11.85 12.49,9.97999999 L12.49,9.97999999 Z',
      id: 'MapsLocalFireDepartmentIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'local_fire_department',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLocalFireDepartmentIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLocalFireDepartmentIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLocalFireDepartmentIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLocalFireDepartmentIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
