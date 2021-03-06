import React, { useContext } from 'react';

import { StoreContext, ActionType } from '@contexts/Store';
import { ColorInput, ColorChangeEvent } from '@components/ColorInput';
import { ColorSectionIcon } from '@components/icons';

const ColorControls = () => {
  const { state, updateState } = useContext(StoreContext);

  const handleElementUpdate = (e: React.ChangeEvent<HTMLInputElement> | ColorChangeEvent) => {
    const { name, value } =
      typeof (e as React.ChangeEvent<HTMLInputElement>).target !== 'undefined'
        ? (e as React.ChangeEvent<HTMLInputElement>).target
        : (e as ColorChangeEvent);

    if (name === 'playAreaBackground') {
      updateState({
        type: ActionType.UpdatePlayArea,
        payload: {
          key: 'backgroundColor',
          value: value,
        },
      });
    } else {
      updateState({
        type: ActionType.UpdateElement,
        payload: {
          key: name,
          value: value,
        },
      });
    }
  };

  return (
    <section className='control-section'>
      <h3 className='control-section-heading'>
        <ColorSectionIcon />
        <span>Colors</span>
      </h3>
      <div className='control-row'>
        <h4 className='title'>Element Background</h4>
        <ColorInput
          className='control'
          onChange={handleElementUpdate}
          name='backgroundColor'
          value={state.element.backgroundColor}
          placeholder='Background Color'
        />
      </div>
      <div className='control-row'>
        <h4 className='title'>Element Border</h4>
        <ColorInput
          className='control'
          onChange={handleElementUpdate}
          name='borderColor'
          value={state.element.borderColor}
          placeholder='Border Color'
        />
      </div>
      <div className='control-row'>
        <h4 className='title'>Page Background</h4>
        <ColorInput
          className='control'
          onChange={handleElementUpdate}
          name='playAreaBackground'
          value={state.playArea.backgroundColor}
          placeholder='Background Color'
        />
      </div>
    </section>
  );
};

export default ColorControls;
