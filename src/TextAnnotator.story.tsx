import { storiesOf } from '@storybook/react';
import React from 'react';
import TextAnnotator from '../src/TextAnnotator';

storiesOf('TextAnnotator', module).add('Demo', () => {
  return <TextAnnotator />;
});
