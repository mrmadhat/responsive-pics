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
(window.wpackioresponsivePicsfocalpointJsonp=window.wpackioresponsivePicsfocalpointJsonp||[]).push([[0],[function(i,t,e){e(1),e(2),i.exports=e(3)},function(i,t,e){var o="responsivePicsdist".replace(/[^a-zA-Z0-9_-]/g,"");e.p=window["__wpackIo".concat(o)]},function(i,t){var e,o,n,a,d,c,s,p;e=jQuery,p={init:function(i){p.wrapper=a,p.picker=c,p.point=d,p.position=i,p.positionFocalPoint(i),p.setEventListeners()},setEventListeners:function(){p.picker.on("click",p.setFocalPoint),"function"==typeof e.ui.draggable&&p.point.draggable({cursor:"move",start:p.startDrag,drag:p.dragging,stop:p.stopDrag,containment:p.wrapper})},positionFocalPoint:function(i){p.point.css({left:"".concat(i.x,"%"),top:"".concat(i.y,"%"),position:"absolute"})},setFocalPoint:function(i){s.removeAttr("disabled");var t=i.offsetY-p.point.height()/2,e=i.offsetX-p.point.width()/2;p.position.x=Number(e/p.picker.width()*100).toFixed(2),p.position.y=Number(t/p.picker.height()*100).toFixed(2),p.positionFocalPoint(p.position)},startDrag:function(i){e("body").addClass("focal-point-dragging"),s.removeAttr("disabled")},dragging:function(i){p.position.x=Number(i.target.offsetLeft/p.picker.width()*100).toFixed(2),p.position.y=Number(i.target.offsetTop/p.picker.height()*100).toFixed(2)},stopDrag:function(i){e("body").removeClass("focal-point-dragging"),p.positionFocalPoint(p.position)}},e(document).ready((function(){var i=function(i,t){var e=wp.media.template("attachment-details-focal-point"),o=i.find(".thumbnail"),p=o.find("img");e&&o.length&&p.length&&(o.prepend(e),i.find(".image-focal"),a=i.find(".image-focal__wrapper"),d=i.find(".image-focal__point"),c=i.find(".image-focal__clickarea"),p.prependTo(a),n=a.find("img"));var l=wp.media.template("attachment-save-focal-point"),r=i.find(".attachment-actions");l&&(r.append(l),s=i.find("button.save-attachment-focal-point"))},t=function(){a.css({width:"".concat(n.width(),"px")})},l=function(i){var a=i.get("focalPoint");p.init(a),e(window).on("resize",t),n.on("load",(function(i){t(),p.init(a)})),s.on("click",(function(t){t.preventDefault(),function(i){var t,n,a,d={x:p.position.x,y:p.position.y};i.set({focalPoint:d}),e.ajax({url:null===(t=wp)||void 0===t||null===(n=t.ajax)||void 0===n||null===(a=n.settings)||void 0===a?void 0:a.url,method:"POST",data:{action:"save_focal_point",attachment:null==i?void 0:i.attributes}}).done((function(i){o.update()})).fail((function(i,t){console.log("save focal point error",i)})).always((function(){s.attr("disabled","disabled")}))}(i)}))},r=function(i){var t=i.model.get("type"),e=i.model.get("focalPoint");"image"===t&&(p.position=e,p.positionFocalPoint(e))},f=wp.media.view.Attachment.Details.TwoColumn;f&&(wp.media.view.Attachment.Details.TwoColumn=f.extend({initialize:function(){o=this,this.model.on("change:focalPoint",this.change,this)},render:function(){wp.media.view.Attachment.prototype.render.apply(this,arguments),this.model.get("id");var t=this.model.get("type");"image"===t&&(i(this.$el),l(this.model))},change:function(){r(this)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}})),console.log(wp.media.view),wp.media.view.EditImage;var m=wp.media.view.EditImage.Details;m&&(wp.media.view.EditImage.Details=m.extend({initialize:function(i){console.log("EditImage.Details initialize"),o=this,this.frame=i.frame,wp.media.view.EditImage.prototype.initialize.apply(this,arguments),this.model.on("change:focalPoint",this.change,this)},loadEditor:function(){console.log("EditImage.Details loadEditor"),wp.media.view.EditImage.prototype.loadEditor.apply(this,arguments),e(document).one("image-editor-ui-ready",this.imageLoaded)},imageLoaded:function(){e(document).off("image-editor-ui-ready",this.imageLoaded);var i=o.model.get("id");"image"===o.model.get("type")&&(function(i,t){var e=wp.media.template("image-edit-focal-point"),o=i.find("#imgedit-crop-".concat(t));e&&o.length&&(o.append(e),a=o,d=i.find(".image-focal__point"),c=i.find(".image-focal__clickarea"),n=a.find("img"));var p=wp.media.template("attachment-save-focal-point"),l=i.find(".imgedit-submit");p&&(l.append(p),s=i.find("button.save-attachment-focal-point"))}(o.$el,i),l(o.model))},back:function(){this.frame.content.mode("edit-metadata")},change:function(){r(this)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}}))}))},function(i,t,e){}],[[0,1]]]);
//# sourceMappingURL=admin-8e9a412e.js.map