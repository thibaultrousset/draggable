

const draggable = new Draggable.Draggable(document.querySelectorAll('ul'), {
  draggable: 'li',
});

draggable.on('drag:start', () => draggable.removeContainer());
draggable.on('drag:move',  () => console.log('drag:move'));
draggable.on('drag:stop',  () => console.log('drag:stop'));


