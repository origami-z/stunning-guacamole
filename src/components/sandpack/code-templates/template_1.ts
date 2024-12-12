import { APP_FILE, APP_CSS } from "../constants";

export const APP_TEMPLATE_1 = {
  [APP_FILE]: `import { Button, SaltProvider, StackLayout, FlexLayout, Tooltip, ListBox, Option } from '@salt-ds/core';
import { InfoIcon, ThumbsUpIcon, ThumbsDownIcon } from '@salt-ds/icons';

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
      <ListBox bordered multiselect defaultSelected={[shortColorData[1]]}>
        {shortColorData.map(c => (<Option value={c} key={c}>{c}</Option>))}
      </ListBox>
      <FlexLayout align="center">
        <Button variant="cta">
          <ThumbsUpIcon /> CTA
        </Button>
        <Button variant="primary">
          Primary
        </Button>
        <Tooltip open content="Tooltip" status="warning">
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
