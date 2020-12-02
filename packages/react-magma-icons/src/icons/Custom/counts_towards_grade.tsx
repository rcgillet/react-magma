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
  title: ['counts_towards_grade'],
  paths: [
    {
      d:
        'M12,2 C6.42857143,2 2,6.42857143 2,12 C2,17.5714286 6.42857143,22 12,22 C17.5714286,22 22,17.5714286 22,12 C22,6.42857143 17.5714286,2 12,2 Z M11.7777035,11.7797595 L14.9078433,11.7797595 L14.9078433,15.8705284 C14.4005423,16.0360308 13.9229309,16.1520607 13.4749949,16.2186215 C13.0270588,16.2851823 12.5692355,16.3184622 12.1015111,16.3184622 C10.9106129,16.3184622 10.0012624,15.9685736 9.37343236,15.268786 C8.74560233,14.5689984 8.43169202,13.5643055 8.43169202,12.2546772 C8.43169202,10.9810278 8.79597189,9.98802782 9.52454256,9.27564762 C10.2531132,8.56326741 11.2632028,8.20708265 12.5548417,8.20708265 C13.3643647,8.20708265 14.1450929,8.36898481 14.8970498,8.692794 L14.3411801,10.0311986 C13.7655193,9.74336822 13.1664813,9.59945518 12.5440481,9.59945518 C11.8208743,9.59945518 11.2416243,9.84230843 10.8062808,10.3280222 C10.3709374,10.813736 10.1532689,11.4667414 10.1532689,12.287058 C10.1532689,13.1433534 10.3286629,13.7972582 10.6794562,14.2487921 C11.0302495,14.7003261 11.5402413,14.9260896 12.209447,14.9260896 C12.5584413,14.9260896 12.9128271,14.8901114 13.2726151,14.8181538 L13.2726151,13.172132 L11.7777035,13.172132 L11.7777035,11.7797595 Z',
      id: 'CustomCountsTowardsGradeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'counts_towards_grade',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CustomCountsTowardsGradeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CustomCountsTowardsGradeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CustomCountsTowardsGradeIcon-path-1',
        },
      ],
    },
  ],
};

export const CustomCountsTowardsGradeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
