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
  title: ['record_voice_over'],
  paths: [
    {
      d:
        'M8.99999995,15 C11.67,15 17,16.34 17,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L16,21 L1.99999995,21 C1.44999996,21 0.999999954,20.55 0.999999954,20 L0.999999954,20 L0.999999954,19 C0.999999954,16.34 6.32999998,15 8.99999995,15 Z M19.18,2.88999996 C19.67,2.39999996 20.51,2.43999996 20.93,2.98999996 C23.69,6.63999998 23.68,11.47 20.93,15.01 C20.51,15.56 19.68,15.6 19.19,15.11 L19.19,15.11 L19.16,15.08 C18.77,14.69 18.7,14.07 19.02,13.62 C21.01,10.78 21.02,7.10999998 19.05,4.36999997 C18.72,3.90999997 18.78,3.28999996 19.18,2.88999996 Z M8.99999997,4.99999997 C11.209139,4.99999997 13,6.79086098 13,8.99999997 C13,11.209139 11.209139,13 8.99999997,13 C6.79086098,13 4.99999997,11.209139 4.99999997,8.99999997 C4.99999997,6.79086098 6.79086098,4.99999997 8.99999997,4.99999997 Z M15.71,6.39999998 C16.3,5.80999997 17.3,5.94999997 17.68,6.68999998 C18.46,8.19999998 18.46,9.89999999 17.7,11.35 C17.32,12.08 16.33,12.2 15.75,11.62 L15.75,11.62 L15.72,11.59 C15.36,11.23 15.28,10.7 15.47,10.23 C15.79,9.43999999 15.79,8.55999999 15.47,7.76999998 C15.28,7.29999998 15.36,6.75999998 15.7,6.40999998 L15.7,6.40999998 Z',
      id: 'ActionsRecordVoiceOverIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'record_voice_over',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsRecordVoiceOverIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsRecordVoiceOverIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsRecordVoiceOverIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsRecordVoiceOverIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
