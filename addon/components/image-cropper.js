import Ember from 'ember';
import layout from '../templates/components/image-cropper';

export default Ember.Component.extend({
  //cropper configs
  previewClass: '.cropper-preview',
  cropperContainer: '.cropper-container > img',
  aspectRatio: 16 / 9,
  crop: null,
  strict: true,
  responsive: true,
  checkImageOrigin: true,
  background: true,
  modal: true,
  guides: true,
  highlight: true,
  autoCrop: true,
  autoCropArea: 0.8,
  dragDrop: true,
  movable: true,
  resizable: true,
  zoomable: true,
  mouseWheelZoom: true,
  touchDragZoom: true,
  rotateable: true,
  minContainerWidth: 200,
  minContainerHeight: 100,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  build: null,
  built: null,
  dragStart: null,
  dragMove: null,
  dragEnd: null,
  zoomin: null,
  zoomout: null,

  //initialize cropper on did insert element
  initImageCropper: Ember.on('didInsertElement', function() {
    var _this = this;

    _this.$().imagesLoaded(function() {
      _this.$(_this.get('cropperContainer')).cropper({
        aspectRatio: _this.get('aspectRatio'),
        crop: _this.get('crop'),
        preview: _this.get('previewClass'),
        strict: _this.get('strict'),
        responsive: _this.get('responsive'),
        checkImageOrigin: _this.get('checkImageOrigin'),
        background: _this.get('background'),
        modal: _this.get('modal'),
        guides: _this.get('guides'),
        highlight: _this.get('highlight'),
        autoCrop: _this.get('autoCrop'),
        autoCropArea: _this.get('autoCropArea'),
        dragDrop: _this.get('dragDrop'),
        movable: _this.get('movable'),
        resizable: _this.get('resizable'),
        zoomable: _this.get('zoomable'),
        mouseWheelZoom: _this.get('mouseWheelZoom'),
        touchDragZoom: _this.get('touchDragZoom'),
        rotateable: _this.get('rotateable'),
        minContainerWidth: _this.get('minContainerWidth'),
        minContainerHeight: _this.get('minContainerHeight'),
        minCropBoxWidth: _this.get('minCropBoxWidth'),
        minCropBoxHeight: _this.get('minCropBoxHeight'),
        build: _this.get('build'),
        built: _this.get('built'),
        dragStart: _this.get('dragStart'),
        dragMove: _this.get('dragMove'),
        dragEnd: _this.get('dragEnd'),
        zoomin: _this.get('zoomin'),
        zoomout: _this.get('zoomout')
      });
    });
  })
});
