import { styled, Box, Typography, Chip, Avatar } from '@mui/material';
import type { FeedCardStatus } from 'src/types/components.type';

type CardColorType = {
  [K in FeedCardStatus]: string;
};
// Created a mapping object for the feed card status to map to color codes
const cardColors: CardColorType = {
  lesson: 'var(--hazy-green)',
  program: 'var(--gentle-blue)',
  misc: 'var(--warm-yellow)',
  activity: 'var(--lilac)',
};

export const CardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 25px;
  background: var(--easy-white);
  padding: 1.2rem;
  gap: 1rem;
  justify-content: space-around;
  min-width: 350px;
`;

// Contains the Title and coach pill elements
export const CardHeader = styled(Box)<{ status: FeedCardStatus }>`
  display: flex;
  justify-content: space-between;
  border-left: 3px solid ${(props) => cardColors[props.status]};
  padding-left: 5px;
  gap: 1.2rem;
`;

export const CardTitle = styled(Typography)`
  color: var(--black);
  font-family: var(--main-font);
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.9px;
`;

export const ChipContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const CardChip = styled(Chip)`
  font-family: var(--main-font);
  height: 20px;
  border-radius: 5px;
  background: var(--light-grey);
  font-weight: 600;
  padding: 0 0.2rem;
`;

export const CardBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardAvatar = styled(Avatar)`
  background: var(--easy-white);
  color: var(--black);
  width: 1.5rem;
  height: 1.5rem;
`;

export const CardFooter = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
`;

export const FooterRow = styled(Box)`
  display: flex;
  align-items: center;
  font-size: 0.65rem;
  color: var(--black);
  letter-spacing: -0.8px;
  gap: 0.5rem;
  white-space: nowrap;
`;
