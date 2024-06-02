import { useEffect } from 'react';
import type { LayoutVariant, FeedCardInfo } from 'src/types/components.type';
import {
  CardChip,
  CardContainer,
  CardFooter,
  CardHeader,
  CardTitle,
  ChipContainer,
  CardBox,
  FooterRow,
  CardAvatar,
} from './style';
import ActionButton from 'components/ActionButton';

/* 
A card component needs the following:
- title: string;
- coaches: Array<string>;
- status: Array<string>;
- timeStart: Date;
- timeEnd: Date;
- location: string;
- height: string | number;
- width: string | number;

Future considerations would be routing the enter button to individual invites.
If this is the case perhaps a unique ID for each feed card must be provided
*/

type CardProps = FeedCardInfo & {
  width: string | number;
  height: string | number;
  variant: LayoutVariant;
};

const Card = ({
  title,
  coaches,
  status,
  timeStart,
  timeEnd,
  location,
  width,
  height,
  variant,
}: CardProps) => {
  useEffect(() => {
    console.log(status);
  }, []);

  return (
    <CardContainer width={width} height={height}>
      <CardHeader status={status}>
        <CardBox>
          <CardTitle variant="h6">{title}</CardTitle>
          <ChipContainer>
            {coaches.map((coach: string) => (
              <CardChip label={coach} />
            ))}
          </ChipContainer>
        </CardBox>
        {/* Added breakpoints for smaller screen sizes */}
        <CardBox
          sx={{
            display: {
              sm: 'flex',
              md: variant === 'horizontal' ? 'flex' : 'none',
            },
          }}
        >
          <ActionButton
            src="/right-arrow.svg"
            alt="Click to find more info on the event"
          />
        </CardBox>
      </CardHeader>
      <CardFooter flexDirection={variant === 'horizontal' ? 'column' : 'row'}>
        <CardBox>
          <FooterRow sx={{ fontWeight: 700 }}>
            <CardAvatar src="/time-icon.svg" alt="datetime" />
            {`${timeStart as string} - ${timeEnd as string}`}
          </FooterRow>
          <FooterRow sx={{ fontWeight: 600 }}>
            <CardAvatar src="/place-icon.svg" alt="location" />
            {location}
          </FooterRow>
        </CardBox>
        {/* Added breakpoints for smaller screen sizes */}
        <CardBox
          sx={{
            display: {
              xs: 'none',
              md: variant === 'vertical' ? 'flex' : 'none',
            },
          }}
        >
          <ActionButton
            src="/right-arrow.svg"
            alt="Click to find more info on the event"
          />
        </CardBox>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
