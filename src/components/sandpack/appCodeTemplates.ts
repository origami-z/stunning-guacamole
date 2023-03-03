export const APP_TEMPLATE_1 = `import { Button, SaltProvider, StackLayout, FlexLayout, Tooltip } from '@salt-ds/core';
import { InfoIcon, ThumbsUpIcon, ThumbsDownIcon } from '@salt-ds/icons';
import { List } from '@salt-ds/lab';

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
      <List source={shortColorData} selected={shortColorData[3]} />
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
`;

export const APP_TEMPLATE_2 = `import { StackLayout } from '@salt-ds/core';
import { Dropdown, Toolbar, ToolbarButton, ToolbarField } from '@salt-ds/lab';
import {
  Grid,
  GridColumn,
  RowSelectionCheckboxColumn,
} from '@salt-ds/data-grid';
import {
  ExportIcon,
  NotificationIcon,
  ShareIcon,
  TearOutIcon,
} from '@salt-ds/icons';

const ToolbarSample = () => {
  const typeData = ['Open', 'Close', 'Discarded', 'Resolved'];
  const rangeData = [
    'Today',
    'Yesterday',
    'Last Week',
    'Last Month',
    'Last Year',
  ];

  const logItemName = (buttonName: string) =>
    console.log(\`\${buttonName} button clicked'\`);

  return (
    <Toolbar id="toolbar-default">
      <ToolbarField label="Range">
        <Dropdown
          defaultSelected={rangeData[0]}
          source={rangeData}
          style={{ width: 100 }}
        />
      </ToolbarField>
      <ToolbarField label="Type">
        <Dropdown
          defaultSelected={typeData[0]}
          source={typeData}
          style={{ width: 90 }}
        />
      </ToolbarField>
      <ToolbarButton onClick={() => logItemName('export')}>
        <ExportIcon /> Export
      </ToolbarButton>
      <ToolbarButton onClick={() => logItemName('share')}>
        <ShareIcon /> Share
      </ToolbarButton>
      <ToolbarButton onClick={() => logItemName('alerts')}>
        <NotificationIcon /> Set Alerts
      </ToolbarButton>
      <ToolbarButton onClick={() => logItemName('expand')}>
        <TearOutIcon /> Expand
      </ToolbarButton>
    </Toolbar>
  );
};

const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
];

const columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function App() {
  return (
    <StackLayout>
      <ToolbarSample />
      <Grid
        rowData={rowData}
        style={{
          height: 'var(--grid-total-height)',
          width: 'var(--grid-total-width)',
        }}
        selectedRowIdxs={[1]}
      >
        <RowSelectionCheckboxColumn id="rowSelector" />
        {columnDefs.map((cd) => (
          <GridColumn
            key={cd.field}
            id={cd.field}
            name={capitalizeFirstLetter(cd.field)}
            getValue={(r) => r[cd.field]}
          />
        ))}
      </Grid>
    </StackLayout>
  );
}
`;
