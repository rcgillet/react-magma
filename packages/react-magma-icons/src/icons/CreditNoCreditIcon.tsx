import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 28 28',
  paths: [
    {
      d:
        'M14,0A13.91,13.91,0,0,0,0,14,13.91,13.91,0,0,0,14,28,13.91,13.91,0,0,0,28,14,13.91,13.91,0,0,0,14,0Zm.92,10.64a2.37,2.37,0,0,0-2,1,4.6,4.6,0,0,0-.73,2.77c0,2.46.92,3.7,2.77,3.7a8.72,8.72,0,0,0,2.82-.59v2a7.81,7.81,0,0,1-3,.57A4.61,4.61,0,0,1,11,18.58a6.18,6.18,0,0,1-1.28-4.19,6.82,6.82,0,0,1,.63-3,4.58,4.58,0,0,1,1.8-2,5.32,5.32,0,0,1,2.75-.69,7.44,7.44,0,0,1,3.24.78l-.76,1.9c-.41-.19-.83-.36-1.25-.51a3.55,3.55,0,0,0-1.23-.22Z',
    },
  ],
};

export const CreditNoCreditIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
