import { Box, Typography, styled } from '@mui/material';

export const MapBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const LessonDescription = styled(Typography)`
  height: 100px;
  display: flex;
  font-family: var(--main-font);
  font-weight: 700;
  color: var(--black);
  letter-spacing: var(--letter-space);
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2rem;
`;

export const Map = styled('img')`
  width: 100%;
  height: auto;
`;

export const MapUIBox = styled(Box)`
  display: flex;
`;

export const MapUI = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-family: var(--main-font);
  font-weight: 600;
  color: var(--black);
  letter-spacing: var(--letter-space);
`;
