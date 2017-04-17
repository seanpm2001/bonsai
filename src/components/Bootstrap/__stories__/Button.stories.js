/**
 * @flow
 */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button, {DropdownToggleButton, CloseButton} from '../Button';

const alertOnClick = (e) => alert('Clicked me!');

storiesOf('Bootstrap/Button', module)
  .add('With onClick', () => (
    <Button onClick={alertOnClick}>
      Click Me!
    </Button>
  ))
  .add('Disabled', () => (
    <Button onClick={alertOnClick} disabled={true}>
      Click Me!
    </Button>
  ))
  .add('Success', () => (
    <Button onClick={alertOnClick} color="success">
      Click Me!
    </Button>
  ))
  .add('Disabled Success', () => (
    <Button onClick={alertOnClick} disabled={true} color="success">
      Click Me!
    </Button>
  ));

const closeContainerStyle = {
  background: '#ddd',
  height: '100px',
  width: '100px',
};

storiesOf('Bootstrap/CloseButton', module)
  .add('With onClick', () => (
    <div style={closeContainerStyle}>
      <CloseButton onClick={(e) => alert('Closed!')} />
    </div>
  ))
  .add('Disabled', () => (
    <div style={closeContainerStyle}>
      <CloseButton onClick={alertOnClick} disabled={true} />
    </div>
  ));
