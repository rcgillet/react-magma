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
  title: ['attach_money'],
  paths: [
    {
      d:
        'M11.8,10.9 C9.52999999,10.31 8.79999999,9.69999999 8.79999999,8.74999999 C8.79999999,7.65999998 9.80999999,6.89999998 11.5,6.89999998 C12.92,6.89999998 13.63,7.43999998 13.89,8.29999998 C14.01,8.69999999 14.34,8.99999996 14.76,8.99999996 L15.06,8.99999996 C15.72,8.99999996 16.19,8.34999998 15.96,7.72999998 C15.54,6.54999998 14.56,5.56999997 13,5.18999997 L13,4.49999996 C13,3.66999997 12.33,2.99999996 11.5,2.99999996 C10.67,2.99999996 9.99999998,3.66999997 9.99999998,4.49999996 L9.99999998,5.15999997 C8.05999998,5.57999997 6.49999998,6.83999998 6.49999998,8.76999999 C6.49999998,11.08 8.40999999,12.23 11.2,12.9 C13.7,13.5 14.2,14.38 14.2,15.31 C14.2,16 13.71,17.1 11.5,17.1 C9.84999999,17.1 8.99999998,16.51 8.66999999,15.67 C8.51999999,15.28 8.17999998,15 7.76999998,15 L7.48999998,15 C6.81999998,15 6.34999998,15.68 6.59999998,16.3 C7.16999998,17.69 8.49999998,18.51 9.99999998,18.83 L9.99999998,19.5 C9.99999998,20.33 10.67,21 11.5,21 C12.33,21 13,20.33 13,19.5 L13,18.85 C14.95,18.48 16.5,17.35 16.5,15.3 C16.5,12.46 14.07,11.49 11.8,10.9 Z',
      id: 'EditorAttachMoneyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'attach_money',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorAttachMoneyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorAttachMoneyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorAttachMoneyIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorAttachMoneyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
