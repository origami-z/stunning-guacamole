import { APP_CSS, APP_FILE } from "../constants";

export const APP_TEMPLATE_F = {
  [APP_FILE]: `import {
  Button,
  FlexItem,
  SaltProvider,
  StackLayout,
  H1,
  H2,
  Text,
  Link,
  FlexLayout,
  Card,
} from '@salt-ds/core';
import { FormField, Input } from '@salt-ds/lab';
import * as React from 'react';

import './App.css';

const logo2 = (
  <svg
    width="240"
    height="32"
    viewBox="0 0 240 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="SGLogo"
  >
    <text x="0" y="24" fontSize="24px" fill="var(--logo-text-color)">
      Stunning Guacamole
    </text>
  </svg>
);

export default function App() {
  return (
    <StackLayout gap={0}>
      <FlexItem className="section odd">
        <FlexLayout justify="space-between">
          {logo2}
          <Button>Login</Button>
        </FlexLayout>
        <H1>
          Welcome to our new product to{' '}
          <span className="text-highlight">boost your productivity</span>
        </H1>

        <Button variant="cta">Contact Us</Button>
      </FlexItem>
      <FlexItem className="section even">
        <H2>
          We offer <span className="text-highlight">fantastic product</span>
        </H2>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </FlexItem>
      <FlexItem className="section odd">
        <Card>
          <StackLayout gap={1}>
            <H2>Get in touch</H2>
            <FormField label="name">
              <Input />
            </FormField>
            <FormField label="email">
              <Input type="email" />
            </FormField>
            <FlexItem>
              <Button variant="cta">Submit</Button>
            </FlexItem>
          </StackLayout>
        </Card>
      </FlexItem>
    </StackLayout>
  );
}
`,
  [APP_CSS]: `.SGLogo {
  --logo-text-color: var(--salt-content-primary-foreground);
}

.section {
  padding: calc(var(--salt-spacing-100) * 4);
}

.section.odd {
  background: black;
  --salt-content-primary-foreground: var(--salt-color-white);
}

.section.odd .saltCard{
  --salt-content-primary-foreground: var(--salt-palette-neutral-primary-foreground);
}

.text-highlight {
  color: var(--salt-actionable-cta-background);
}
`,
};
