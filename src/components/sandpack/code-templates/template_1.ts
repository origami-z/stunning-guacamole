import { APP_FILE, APP_CSS } from "../constants";

export const APP_TEMPLATE_1 = {
  [APP_FILE]: `import { Button, SaltProvider, StackLayout, FlexLayout, Tooltip } from '@salt-ds/core';
import { InfoIcon, ThumbsUpIcon, ThumbsDownIcon } from '@salt-ds/icons';
import { List } from '@salt-ds/lab';

import './App.css';

const shortColorData = [
  'Baby blue',
  'Black',
  'Blue',
  'Brown',
  'Green',
  'Orange',
  'Pink',
  'Purple',
  'Red',
  'White',
  'Yellow',
];

export default function App(): JSX.Element {
  return (
    <StackLayout>
      <List 
        source={shortColorData}
        selected={[shortColorData[3], shortColorData[5]]} 
        selectionStrategy="multiple"
      />
      <FlexLayout align="center">
        <Button variant="cta">
          <ThumbsUpIcon /> CTA
        </Button>
        <Button variant="primary">
          Primary
        </Button>
        <Tooltip open content="Tooltip">
          <Button variant="secondary">
            <InfoIcon /> Secondary
          </Button>
        </Tooltip>
      </FlexLayout>
    </StackLayout>
  )
}
`,
  [APP_CSS]: "",
};
