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
  title: ['grade'],
  paths: [
    {
      d:
        'M12,17.27 L17.17,20.39 C17.55,20.62 18.02,20.28 17.92,19.85 L16.55,13.97 L21.11,10.02 C21.44,9.72999999 21.27,9.17999999 20.82,9.13999999 L14.81,8.62999999 L12.46,3.08999996 C12.29,2.67999996 11.71,2.67999996 11.54,3.08999996 L9.18999999,8.62999999 L3.17999996,9.13999999 C2.73999996,9.17999999 2.55999996,9.72999999 2.89999996,10.02 L7.45999998,13.97 L6.08999998,19.85 C5.98999997,20.28 6.45999998,20.62 6.83999998,20.39 L12,17.27 Z',
      id: 'ActionsGradeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'grade',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsGradeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsGradeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsGradeIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsGradeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
