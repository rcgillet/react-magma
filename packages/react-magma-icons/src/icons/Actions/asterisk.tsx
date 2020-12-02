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
  title: ['asterisk'],
  paths: [
    {
      d:
        'M13.483871,5.22580645 L12.5698925,10.172043 C12.5698925,10.3512554 12.6594973,10.4408602 12.8387097,10.4408602 C12.9462371,10.4408602 13.2150516,10.2437296 13.6451613,9.84946237 L16.7634409,6.94623656 C17.4444478,6.30107204 18.1612866,5.97849462 18.9139785,5.97849462 C20.0967801,5.97849462 20.688172,6.49820269 20.688172,7.53763441 C20.688172,8.57706613 19.9892543,9.36558871 18.5913978,9.90322581 L14.5591398,11.4086022 C13.9498177,11.6594995 13.6451613,11.8745511 13.6451613,12.0537634 C13.6451613,12.1971333 13.9498177,12.394264 14.5591398,12.6451613 L18.5913978,14.1505376 C19.9892543,14.6881747 20.688172,15.4587763 20.688172,16.4623656 C20.688172,17.5376398 20.0967801,18.0752688 18.9139785,18.0752688 C18.1612866,18.0752688 17.4444478,17.7526914 16.7634409,17.1075269 L13.6451613,14.2043011 C13.2150516,13.8100339 12.9462371,13.6129032 12.8387097,13.6129032 C12.6594973,13.6129032 12.5698925,13.7025081 12.5698925,13.8817204 L12.5698925,14.0967742 L12.6774194,14.7419355 L13.483871,18.827957 C13.5555559,19.1863817 13.5913978,19.4910382 13.5913978,19.7419355 C13.5913978,21.2473194 13,22 11.8172043,22 C10.6344027,22 10.0430108,21.2473194 10.0430108,19.7419355 C10.0430108,19.4551957 10.0788527,19.1505392 10.1505376,18.827957 L11.0107527,14.7419355 C11.0824376,14.3835108 11.1182796,14.1146962 11.1182796,13.9354839 C11.1182796,13.720429 11.0286747,13.6129032 10.8494624,13.6129032 C10.7419349,13.6129032 10.4731204,13.8100339 10.0430108,14.2043011 L6.92473118,17.1075269 C6.24372419,17.7526914 5.50896452,18.0752688 4.72043011,18.0752688 C3.57347097,18.0752688 3,17.5555608 3,16.516129 C3,15.4766973 3.69891774,14.6881747 5.09677419,14.1505376 L9.07526882,12.6451613 C9.68459086,12.394264 9.98924731,12.1971333 9.98924731,12.0537634 C9.98924731,11.8387086 9.68459086,11.623657 9.07526882,11.4086022 L5.09677419,9.90322581 C3.69891774,9.36558871 3,8.5949871 3,7.59139785 C3,6.55196613 3.59139194,6.03225806 4.77419355,6.03225806 C5.56272796,6.03225806 6.27956667,6.33691452 6.92473118,6.94623656 L10.0430108,9.84946237 C10.4731204,10.2437296 10.7419349,10.4408602 10.8494624,10.4408602 C11.0286747,10.4408602 11.1182796,10.3333344 11.1182796,10.1182796 C11.1182796,9.9390672 11.0824376,9.67025269 11.0107527,9.31182796 L10.1505376,5.22580645 C10.0788527,4.90322419 10.0430108,4.59856774 10.0430108,4.31182796 C10.0430108,2.77060161 10.6344027,2 11.8172043,2 C13,2 13.5913978,2.77060161 13.5913978,4.31182796 C13.5913978,4.56272527 13.5555559,4.86738172 13.483871,5.22580645 Z',
      id: 'ActionsAsteriskIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'asterisk',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAsteriskIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAsteriskIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: '*',
          fill: '#000000',
          xlinkHref: '#ActionsAsteriskIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAsteriskIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
