import React, { useContext } from 'react';
import { StoreContext } from '@contexts/Store';

import { ControlsContainer } from './styles';
import TextInput, { TextInputAddon } from '../TextInput';

const Controls = () => {
  const [state, setters] = useContext(StoreContext);
  return (
    <ControlsContainer>
      <section className='control-section'>
        <h3 className='control-section-heading'>
          Elements
        </h3>
        <div className='control-row'>
          <h4 className='title'>Size</h4>
            <TextInput
              className='control'
              name='elementHeight'
              append={<TextInputAddon>h</TextInputAddon>}
              placeholder='Height'
            />
            <TextInput
              className='control'
              name='elementWidth'
              append={<TextInputAddon>w</TextInputAddon>}
              placeholder='Width'
            />
        </div>
        <div className='control-row'>
          <h4 className='title'>Border</h4>
            <TextInput
              className='control'
              name='elementBorderRadius'
              append={<TextInputAddon>r</TextInputAddon>}
              placeholder='Radius'
            />
            <TextInput
              className='control'
              name='elementBorderWidth'
              append={<TextInputAddon>w</TextInputAddon>}
              placeholder='Width'
            />
        </div>
      </section>
      <section className='control-section'>
        <h3 className='control-section-heading'>
          Colors
        </h3>
        <div className='control-row'>
          <h4 className='title'>Background Color</h4>
          <TextInput
            className='control'
            name='elementBackgroundColor'
            value='#F4F4F4'
            placeholder='Background Color'
          />
        </div>
        <div className='control-row'>
          <h4 className='title'>Border Color</h4>
          <TextInput
            className='control'
            name='elementBorderColor'
            value='#F4F4F4'
            placeholder='Border Color'
          />
        </div>
      </section>
      <section className='control-section'>
        <h3 className='control-section-heading'>
          Shadows
        </h3>
        <div className='control-row'>
          <h4 className='title'>Offset</h4>
          <TextInput
            className='control'
            name='elementShadowOffsetX'
            placeholder='Offset X'
          />
          <TextInput
            className='control'
            name='elementShadowOffsetY'
            placeholder='Offset Y'
          />
        </div>
        <div className='control-row'>
          <h4 className='title'>Blur</h4>
          <TextInput
            className='control'
            name='elementShadowBlur'
            type='number'
            placeholder='Blur'
          />
        </div>
        <div className='control-row'>
          <h4 className='title'>Spread</h4>
          <TextInput
            className='control'
            name='elementShadowSpread'
            type='number'
            placeholder='Spread'
          />
        </div>
        <div className='control-row'>
          <h4 className='title'>Shadow Color</h4>
          <TextInput
            className='control'
            name='elementShadowColor'
            value='#EBEBEB'
          />
        </div>
      </section>
    </ControlsContainer>
  );
}

export default Controls;
