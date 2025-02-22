import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 28 28',
  paths: [
    {
      d:
        'M14,0A14,14,0,1,0,28,14,14,14,0,0,0,14,0Zm0,25.38A11.38,11.38,0,1,1,25.38,14,11.39,11.39,0,0,1,14,25.38ZM8.75,8.75h3.5v10.5H8.75Zm7,0h3.5v10.5h-3.5Z',
    },
  ],
};

export const PauseIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
