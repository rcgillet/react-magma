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
  title: ['fiber_manual_record'],
  paths: [],
  polygons: [],
  groups: [
    {
      id: 'fiber_manual_record',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVFiberManualRecordIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVFiberManualRecordIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVFiberManualRecordIcon-path-1',
        },
      ],
    },
  ],
};

export const AVFiberManualRecordIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
