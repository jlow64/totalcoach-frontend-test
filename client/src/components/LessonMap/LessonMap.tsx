import ActionButton from 'components/ActionButton';
import { LessonDescription, MapBox, Map, MapUIBox, MapUI } from './style';

type LessonLabel = {
  icon: number;
  label: string;
};
const mockLessonMapInfo: Array<LessonLabel> = [
  { icon: 2, label: 'Putting' },
  { icon: 2, label: 'Back' },
  { icon: 2, label: 'Performance' },
  { icon: 2, label: 'Left swing' },
  { icon: 2, label: 'Putting' },
  { icon: 2, label: 'Putting' },
];

const LessonMap = () => {
  const description =
    'Tap on the area of the lesson map to see what lessons have been taught in that area.';
  // We will create 3 sections, a description, canvas map, UI elements
  // To create a truly interactive map would take longer than the current amount
  // of time dedicated, so a placehold image is used for this feature temporarily
  // Mapbox or leaflet would be good libraries to explore this feature
  return (
    <MapBox>
      <LessonDescription>{description}</LessonDescription>

      <Map src="/lesson-map.png" />
      <MapUIBox>
        {mockLessonMapInfo.map((element: LessonLabel) => {
          return (
            <MapUI>
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
