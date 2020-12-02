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
  title: ['extra_credit'],
  paths: [
    {
      d:
        'M16.8082271,7.10757617 C19.1113352,7.10757617 21.0721555,8.66070719 21.8471929,10.5983008 L21.8471929,10.5983008 L19.4303964,10.5983008 C18.837505,9.7682528 17.8858226,9.2468751 16.8082271,9.2468751 C15.0106048,9.2468751 13.5540479,10.6850952 13.5540479,12.4821063 C13.5540479,14.2791174 15.011216,15.7283396 16.8082271,15.7283396 C18.0789707,15.7283396 19.1773479,15.0266496 19.7127838,13.9197152 L19.7127838,13.9197152 L22,13.9197152 C21.3624889,16.1341952 19.2824791,17.8755845 16.8082271,17.8755845 C13.8272669,17.8755845 11.4110816,15.4783472 11.4110816,12.497387 C11.4110816,9.51642676 13.8272669,7.10757617 16.8082271,7.10757617 Z M9.19660157,7 L9.19660157,8.93759359 L3.93759359,8.93759359 L3.93759359,11.4283488 L7.81278078,11.4283488 L7.81278078,13.3659424 L3.93759359,13.3659424 L3.93759359,15.8566975 L9.19660157,15.8566975 L9.19660157,17.7942911 L2,17.7942911 L2,7 L9.19660157,7 Z',
      id: 'CustomExtraCreditIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'extra_credit',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CustomExtraCreditIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CustomExtraCreditIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CustomExtraCreditIcon-path-1',
        },
      ],
    },
  ],
};

export const CustomExtraCreditIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
