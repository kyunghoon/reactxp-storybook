import '@storybook/addon-knobs/register';
import '@storybook/addon-links/register';
import '@storybook/addon-actions/register';
import registerScissors from 'storybook-addon-scissors';
import devices from './devices.json';
import '@storybook/addon-notes/register';
registerScissors(devices);
