/*!
 * 
 * ResponsivePics
 * 
 * @author Booreiland
 * @version 1.4.0
 * @link https://responsive.pics
 * @license undefined
 * 
 * Copyright (c) 2022 Booreiland
 * 
 * This software is released under the [MIT License](https://github.com/booreiland/responsive-pics/blob/master/LICENSE)
 */
(window.wpackioresponsivePicsfocalpointJsonp=window.wpackioresponsivePicsfocalpointJsonp||[]).push([[0],[function(t,i,e){e(1),e(2),t.exports=e(3)},function(t,i,e){var a="responsivePicsdist".replace(/[^a-zA-Z0-9_-]/g,"");e.p=window["__wpackIo".concat(a)]},function(t,i){var e,a,n,o,c,d,s,p;e=jQuery,p={init:function(t){p.wrapper=o,p.picker=d,p.point=c,p.positionFocalPoint(t),p.setEventListeners()},setEventListeners:function(){p.picker.on("click",p.setFocalPoint),"function"==typeof e.ui.draggable&&p.point.draggable({cursor:"move",start:p.startDrag,drag:p.dragging,stop:p.stopDrag,containment:p.wrapper})},positionFocalPoint:function(t){p.x=t.x,p.y=t.y,p.point.css({left:"".concat(t.x,"%"),top:"".concat(t.y,"%")})},setFocalPoint:function(t){s.attr("disabled",!1);var i=t.offsetY-p.point.height()/2,e=t.offsetX-p.point.width()/2;p.x=Number(e/p.picker.width()*100).toFixed(2),p.y=Number(i/p.picker.height()*100).toFixed(2),p.positionFocalPoint(p)},startDrag:function(t){e("body").addClass("focal-point-dragging"),s.attr("disabled",!1)},dragging:function(t){p.x=Number(t.target.offsetLeft/p.picker.width()*100).toFixed(2),p.y=Number(t.target.offsetTop/p.picker.height()*100).toFixed(2)},stopDrag:function(t){e("body").removeClass("focal-point-dragging"),p.positionFocalPoint(p)}},e(document).ready((function(){var t=function(t,i){var e=wp.media.template("attachment-select-focal-point"),a=t.find(".thumbnail"),p=a.find("img");e&&a&&p&&(a.prepend(e),t.find(".image-focal"),o=t.find(".image-focal__wrapper"),c=t.find(".image-focal__point"),d=t.find(".image-focal__clickarea"),p.prependTo(o),n=o.find(".details-image"));var l=wp.media.template("attachment-save-focal-point"),f=t.find(".attachment-actions");l&&(f.append(l),s=t.find("button.save-attachment-focal-point"))},i=function(){o.css({width:"".concat(n.width(),"px")})},l=function(t){var o=t.get("focalPoint");e(window).on("resize",i),n.on("load",(function(t){i(),p.init(o)})),s.on("click",(function(i){i.preventDefault(),function(t){var i,n,o,c={x:p.x,y:p.y};t.set({focalPoint:c}),e.ajax({url:null===(i=wp)||void 0===i||null===(n=i.ajax)||void 0===n||null===(o=n.settings)||void 0===o?void 0:o.url,method:"POST",data:{action:"save_focal_point",attachment:null==t?void 0:t.attributes}}).done((function(t){a.update()})).fail((function(t,i){console.log("save focal point error",t)})).always((function(){s.attr("disabled",!0)}))}(t)}))},f=function(t){var i=t.model.get("type"),e=t.model.get("focalPoint");"image"===i&&p.positionFocalPoint(e)},r=wp.media.view.Attachment.Details.TwoColumn;r&&(wp.media.view.Attachment.Details.TwoColumn=r.extend({initialize:function(){a=this,this.model.on("change:focalPoint",this.change,this)},render:function(){wp.media.view.Attachment.prototype.render.apply(this,arguments),this.model.get("id");var i=this.model.get("type");"image"===i&&(t(this.$el),l(this.model))},change:function(){f(this)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}}));var m=wp.media.view.EditImage.Details;m&&(wp.media.view.EditImage.Details=m.extend({initialize:function(t){a=this,this.frame=t.frame,wp.media.view.EditImage.prototype.initialize.apply(this,arguments),e(document).on("image-editor-ui-ready",this.imageLoaded),this.model.on("change:focalPoint",this.change,this)},loadEditor:function(){wp.media.view.EditImage.prototype.loadEditor.apply(this,arguments)},imageLoaded:function(){var t=a.model.get("id");"image"===a.model.get("type")&&(function(t,i){var e=wp.media.template("attachment-select-focal-point"),a=t.find("#image-editor-".concat(i)),p=a.find("img");e&&a&&p&&(t.find(".image-focal"),o=t.find(".image-focal__wrapper"),c=t.find(".image-focal__point"),d=t.find(".image-focal__clickarea"),n=o.find(".details-image"));var l=wp.media.template("attachment-save-focal-point"),f=t.find(".imgedit-submit");l&&(f.append(l),s=t.find("button.save-attachment-focal-point"))}(a.$el,t),l(a.model))},back:function(){this.frame.content.mode("edit-metadata")},change:function(){f(this)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}}))}))},function(t,i,e){}],[[0,1]]]);
//# sourceMappingURL=admin-f658fca5.js.map