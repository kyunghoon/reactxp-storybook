import CenterDecorator from '../views/centerdecorator';
import * as RX from 'reactxp';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('Text', module)
  .addDecorator(CenterDecorator)
  .add('Text', withInfo('Default Text Component')(() => (
    <RX.Text>This is how the default text looks like</RX.Text>
  )));