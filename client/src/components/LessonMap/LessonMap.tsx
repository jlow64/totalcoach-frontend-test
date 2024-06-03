import { useQuery } from '@tanstack/react-query';
import { getLessonMapUI } from 'src/api';
import ActionButton from 'components/ActionButton';
import { LessonDescription, MapBox, Map, MapUIBox, MapUI } from './style';
import { Skeleton } from '@mui/material';

type LessonLabel = {
  icon: number;
  label: string;
};

const LessonMap = () => {
  const description =
    'Tap on the area of the lesson map to see what lessons have been taught in that area.';
  // We will create 3 sections, a description, canvas map, UI elements
  // To create a truly interactive map would take longer than the current amount
  // of time dedicated, so a placehold image is used for this feature temporarily
  // Mapbox or leaflet would be good libraries to explore this feature
  const { isLoading, data } = useQuery({
    queryKey: ['LessonMap'],
    queryFn: getLessonMapUI,
  });
  return !data || isLoading ? (
    <Skeleton variant="rounded" animation="wave" width="100%" height="100%" />
  ) : (
    <MapBox>
      <LessonDescription>{description}</LessonDescription>
      <Map src="/lesson-map.png" />
      <MapUIBox>
        {data.map((element: LessonLabel, index: number) => {
          return (
            <MapUI key={`${element.label}-${index}`}>
              {/* This button allows a callback prop to override onClick */}
              <ActionButton text={`${element.icon}`} />
              {element.label}
            </MapUI>
          );
        })}
      </MapUIBox>
    </MapBox>
  );
};

export default LessonMap;
