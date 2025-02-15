import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 27.34 27.34',
  paths: [
    {
      d:
        'M12,17.38A1.41,1.41,0,0,1,11,17a6.69,6.69,0,0,1,0-9.44l5.25-5.25a6.68,6.68,0,0,1,9.44,9.44l-2.4,2.4a1.43,1.43,0,0,1-2,0,1.41,1.41,0,0,1,0-2l2.4-2.4a3.83,3.83,0,0,0-5.42-5.42L13,9.54A3.84,3.84,0,0,0,13,15a1.41,1.41,0,0,1,0,2,1.38,1.38,0,0,1-1,.41Z',
      transform: 'translate(-0.33 -0.33)',
    },
    {
      d:
        'M7,27.67A6.67,6.67,0,0,1,2.28,16.28l2.4-2.4a1.43,1.43,0,0,1,2,0,1.41,1.41,0,0,1,0,2l-2.4,2.4a3.83,3.83,0,0,0,5.42,5.42L15,18.46A3.84,3.84,0,0,0,15,13a1.41,1.41,0,0,1,0-2,1.43,1.43,0,0,1,2,0,6.69,6.69,0,0,1,0,9.44l-5.25,5.25a6.63,6.63,0,0,1-4.72,2Z',
      transform: 'translate(-0.33 -0.33)',
    },
  ],
};

export const LinkIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
