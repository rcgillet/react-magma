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
  title: ['facebook'],
  paths: [
    {
      d:
        'M20.8932292,2 C21.1970486,2 21.4574653,2.10850694 21.6744792,2.32552083 C21.8914931,2.54253472 22,2.80295139 22,3.10677083 L22,20.8932292 C22,21.1970486 21.8914931,21.4574653 21.6744792,21.6744792 C21.4574653,21.8914931 21.1970486,22 20.8932292,22 L15.8020833,22 L15.8020833,14.2526042 L18.3932292,14.2526042 L18.7838542,11.2317708 L15.8020833,11.2317708 L15.8020833,9.3046875 C15.8020833,8.81857639 15.9040799,8.45399306 16.1080729,8.2109375 C16.312066,7.96788194 16.7092014,7.84635417 17.2994792,7.84635417 L18.8880208,7.83333333 L18.8880208,5.13802083 C18.3411458,5.05989583 17.5685764,5.02083333 16.5703125,5.02083333 C15.3897569,5.02083333 14.4457465,5.36805556 13.7382812,6.0625 C13.030816,6.75694444 12.6770833,7.73784722 12.6770833,9.00520833 L12.6770833,11.2317708 L10.0729167,11.2317708 L10.0729167,14.2526042 L12.6770833,14.2526042 L12.6770833,22 L3.10677083,22 C2.80295139,22 2.54253472,21.8914931 2.32552083,21.6744792 C2.10850694,21.4574653 2,21.1970486 2,20.8932292 L2,3.10677083 C2,2.80295139 2.10850694,2.54253472 2.32552083,2.32552083 C2.54253472,2.10850694 2.80295139,2 3.10677083,2 L20.8932292,2 Z',
      id: 'CompaniesFacebookIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'facebook',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CompaniesFacebookIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CompaniesFacebookIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Shape',
          fill: '#000000',
          xlinkHref: '#CompaniesFacebookIcon-path-1',
        },
      ],
    },
  ],
};

export const CompaniesFacebookIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
