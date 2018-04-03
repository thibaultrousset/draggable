
const droppable = new Draggable.Swappable(document.querySelectorAll('.drag'), {
  draggable: '.dropzone',
  droppable: '.drag',
});

droppable.on('droppable:over', () => console.log('droppable:over'));
droppable.on('droppable:out', () => console.log('droppable:out'));
