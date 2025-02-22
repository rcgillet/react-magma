import * as React from 'react';
import styled from '../../theme/styled';
import { CardContext } from './';
import { Heading } from '../Heading';
import { TypographyColor, TypographyVisualStyle } from '../Typography';

/**
 * @children required
 */
export interface CardHeadingProps
  extends React.LabelHTMLAttributes<HTMLHeadingElement> {
  /**
   * Number to indicate which level heading will render (e.g. h1, h2 etc.)
   * @default 4
   */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  isInverse?: boolean;
  testId?: string;
}

const StyledCardHeading = styled(Heading)`
  margin-top: 0;
`;

export const CardHeading = React.forwardRef<
  HTMLHeadingElement,
  CardHeadingProps
>((props, ref) => {
  const { headingLevel, children, ...other } = props;

  const context = React.useContext(CardContext);

  return (
    <StyledCardHeading
      {...other}
      color={TypographyColor.default}
      isInverse={context.isInverse || props.isInverse}
      level={headingLevel ? headingLevel : 4}
      ref={ref}
      testId={props.testId}
      visualStyle={TypographyVisualStyle.headingSmall}
    >
      {children}
    </StyledCardHeading>
  );
});
