const AlertSettings = {
  POSITION: 'fixed',
  WIDTH: 'max-content',
  HEIGHT: 'max-content',
  LEFT: '50%',
  TOP: '50%',
  TRANSFORM: 'translate(-50%, -50%)',
  PADDING: '30px 30px',
  FONT_SIZE: '20px',
  TEXT_ALIGN: 'center',
  BACKGROUND_COLOR: 'rgba( 0, 0, 0, 0.60 )',
  COLOR:'white',
  BOX_SHADOW: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 );',
  BORDER: '1px solid rgba( 255, 255, 255, 0.18 )',
  BORDER_RADIUS: '10px',
  Z_INDEX: 1000,
  SHOW_TIME: '3000',
};

export const showAlert = (message) => {
  const elementContainer = document.createElement('div');

  elementContainer.style.position = AlertSettings.POSITION;
  elementContainer.style.width = AlertSettings.WIDTH;
  elementContainer.style.height = AlertSettings.HEIGHT;
  elementContainer.style.transform = AlertSettings.TRANSFORM;
  elementContainer.style.left = AlertSettings.LEFT;
  elementContainer.style.top = AlertSettings.TOP;
  elementContainer.style.padding = AlertSettings.PADDING;
  elementContainer.style.fontSize = AlertSettings.FONT_SIZE;
  elementContainer.style.textAlign = AlertSettings.TEXT_ALIGN;
  elementContainer.style.backgroundColor = AlertSettings.BACKGROUND_COLOR;
  elementContainer.style.color = AlertSettings.COLOR;
  elementContainer.style.boxShadow = AlertSettings.BOX_SHADOW;
  elementContainer.style.border = AlertSettings.BORDER;
  elementContainer.style.borderRadius = AlertSettings.BORDER_RADIUS;
  elementContainer.style.zIndex = AlertSettings.Z_INDEX;

  elementContainer.textContent = message;

  document.body.append(elementContainer);

  setTimeout(() => {
    elementContainer.remove();
  }, AlertSettings.SHOW_TIME);
};
