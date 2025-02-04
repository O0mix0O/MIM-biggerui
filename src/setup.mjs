export function setup(ctx) {

  ctx.settings.section('UI Size').add({
    type: 'number',
    name: 'ui-size',
    label: 'UI Size',
    hint: '1 or 2',
    default: 0, // Default value: no changes (-1 means "disabled")
    min: 0, // Minimum value
    max: 20, // Maximum value
    onChange: (value, previousValue) => {
      console.log(`UI opacity changed from ${previousValue} to ${value}`);
      changeSize(value); // Apply the new opacity setting
    }
  });

  // Apply the opacity setting
  const changeSize = (opacitySetting) => {
    const fileNumber = opacitySetting * 5;

    ctx.loadStylesheet(`styles/style${fileNumber}.css`);
  };

  // Apply the opacity setting once the DOM is fully loaded (initial application)
  ctx.onInterfaceReady(() => {
    const initialOpacitySetting = ctx.settings.section('UI Size').get('ui-size');
    console.log('Applying UI opacity setting...');
    changeSize(initialOpacitySetting); // Apply the initial opacity setting
  });
}
