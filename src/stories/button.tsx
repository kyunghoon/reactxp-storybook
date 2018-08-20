import * as RX from 'reactxp';
import CenterDecorator from '../views/centerdecorator';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number, select, array } from '@storybook/addon-knobs';

storiesOf('Button', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withKnobs)
  .add('Button', withInfo('Default Button Component')(() => (
    <RX.Button onPress={action('button pressed')}>{text('Button Text', 'Hello World')}</RX.Button>
  )));
