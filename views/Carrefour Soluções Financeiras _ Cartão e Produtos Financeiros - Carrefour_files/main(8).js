AUI.add("liferay-portlet-dynamic-data-mapping",function(k){var r=k.Array;var d=k.Lang;var o=k.FormBuilderField;var m=k.getBody();var p=k.instanceOf;var h=d.isObject;var n=k.config.FormValidator;var t=["label","predefinedValue","tip"];var i={checkbox:["readOnly"],separator:["readOnly","required","predefinedValue","indexType"],DEFAULT:["readOnly"]};var j="";var s={attributeList:j,nodeName:j};var e="]]>";var a="<![CDATA[";var b=" ";var f="<{nodeName}{attributeList}></{nodeName}>";var g={dataType:1,indexType:1,localizable:1,multiple:1,name:1,options:1,readOnly:1,repeatable:1,required:1,showLabel:1,type:1,width:1};n.STRINGS.structureFieldName='\u0050\u006f\u0072\u0020\u0066\u0061\u0076\u006f\u0072\u002c\u0020\u0069\u006e\u0073\u0069\u0072\u0061\u0020\u0073\u006f\u006d\u0065\u006e\u0074\u0065\u0020\u0063\u0061\u0072\u0061\u0063\u0074\u0065\u0072\u0065\u0073\u0020\u0061\u006c\u0066\u0061\u006e\u0075\u006d\u00e9\u0072\u0069\u0063\u006f\u0073\u002e';n.RULES.structureFieldName=function(u){return(/^[\w\-]+$/).test(u)};var c=k.Component.create({ATTRS:{localizationMap:{validator:h,value:{}}},NAME:"availableField",EXTENDS:k.FormBuilderAvailableField});k.LiferayAvailableField=c;var l=k.Component.create({ATTRS:{availableFields:{validator:h,valueFn:function(){return l.AVAILABLE_FIELDS.DEFAULT}},portletNamespace:{value:j},portletResourceNamespace:{value:j},translationManager:{validator:h,value:{}},validator:{setter:function(w){var u=this;var v=k.merge({rules:{name:{required:true,structureFieldName:true}},fieldStrings:{name:{required:'\u0045\u0073\u0074\u0065\u0020\u0063\u0061\u006d\u0070\u006f\u0020\u00e9\u0020\u006f\u0062\u0072\u0069\u0067\u0061\u0074\u00f3\u0072\u0069\u006f\u002e'}}},w);return v},value:{}},strings:{value:{addNode:'\u0041\u0064\u0069\u0063\u0069\u006f\u006e\u0061\u0072\u0020\u0063\u0061\u006d\u0070\u006f',button:'\u0042\u006f\u0074\u00e3\u006f',buttonType:'\u0054\u0069\u0070\u006f\u0020\u0064\u006f\u0020\u0062\u006f\u0074\u00e3\u006f',close:'\u0046\u0065\u0063\u0068\u0061\u0072',deleteFieldsMessage:'\u0056\u006f\u0063\u00ea\u0020\u0074\u0065\u006d\u0020\u0063\u0065\u0072\u0074\u0065\u007a\u0061\u0020\u0071\u0075\u0065\u0020\u0071\u0075\u0065\u0072\u0020\u0065\u0078\u0063\u006c\u0075\u0069\u0072\u0020\u006f\u0073\u0020\u0069\u0074\u0065\u006e\u0073\u0020\u0073\u0065\u006c\u0065\u0063\u0069\u006f\u006e\u0061\u0064\u006f\u0073\u003f\u0020\u0045\u006c\u0065\u0073\u0020\u0073\u0065\u0072\u00e3\u006f\u0020\u0065\u0078\u0063\u006c\u0075\u00ed\u0064\u006f\u0073\u0020\u0069\u006d\u0065\u0064\u0069\u0061\u0074\u0061\u006d\u0065\u006e\u0074\u0065\u002e',duplicateMessage:'\u0044\u0075\u0070\u006c\u0069\u0063\u0061\u0072',editMessage:'\u0045\u0064\u0069\u0074\u0061\u0072',label:'\u0045\u0074\u0069\u0071\u0075\u0065\u0074\u0061\u0020\u0064\u006f\u0020\u0063\u0061\u006d\u0070\u006f',large:'\u0047\u0072\u0061\u006e\u0064\u0065',localizable:'\u004c\u006f\u0063\u0061\u006c\u0069\u007a\u00e1\u0076\u0065\u006c',medium:'\u004d\u00e9\u0064\u0069\u006f',multiple:'\u004d\u00fa\u006c\u0074\u0069\u0070\u006c\u006f',name:'\u004e\u006f\u006d\u0065',no:'\u004e\u00e3\u006f',options:'\u004f\u0070\u00e7\u00f5\u0065\u0073',predefinedValue:'\u0056\u0061\u006c\u006f\u0072\u0020\u0070\u0072\u0065\u0064\u0065\u0066\u0069\u006e\u0069\u0064\u006f',propertyName:'\u004e\u006f\u006d\u0065\u0020\u0064\u0065\u0020\u0070\u0072\u006f\u0070\u0072\u0069\u0065\u0064\u0061\u0064\u0065',required:'\u004f\u0062\u0072\u0069\u0067\u0061\u0074\u00f3\u0072\u0069\u006f',reset:'\u005a\u0065\u0072\u0061\u0072',save:'\u0053\u0061\u006c\u0076\u0061\u0072',settings:'\u0043\u006f\u006e\u0066\u0069\u0067\u0075\u0072\u0061\u00e7\u00f5\u0065\u0073',showLabel:'\u004d\u006f\u0073\u0074\u0072\u0061\u0072\u0020\u0065\u0074\u0069\u0071\u0075\u0065\u0074\u0061',small:'\u0050\u0065\u0071\u0075\u0065\u006e\u006f',submit:'\u0053\u0075\u0062\u006d\u0065\u0074\u0065\u0072',tip:'\u0044\u0069\u0063\u0061',type:'\u0054\u0069\u0070\u006f',value:'\u0056\u0061\u006c\u006f\u0072',width:'\u004c\u0061\u0072\u0067\u0075\u0072\u0061',yes:'\u0053\u0069\u006d'}}},EXTENDS:k.FormBuilder,NAME:"liferayformbuilder",prototype:{initializer:function(){var u=this;u.LOCALIZABLE_FIELD_ATTRS=k.Array(t);u.MAP_HIDDEN_FIELD_ATTRS=k.clone(i);var v=u.translationManager=new Liferay.TranslationManager(u.get("translationManager"));u.after("render",function(w){v.render()});u.addTarget(Liferay.Util.getOpener().Liferay);u._toggleInputDirection(v.get("defaultLocale"))},bindUI:function(){var u=this;l.superclass.bindUI.apply(u,arguments);u.translationManager.after("defaultLocaleChange",u._onDefaultLocaleChange,u);u.translationManager.after("editingLocaleChange",u._afterEditingLocaleChange,u)},createField:function(){var u=this;var v=l.superclass.createField.apply(u,arguments);v.set("readOnlyAttributes",u._getReadOnlyFieldAttributes(v));v.set("strings",u.get("strings"));return v},getContentXSD:function(){var u=this;return window[u.get("portletNamespace")+"getContentXSD"]()},getFieldLocalizedValue:function(z,w,v){var u=this;var y=z.get("localizationMap");var x=k.Object.getValue(y,[v,w])||z.get(w);return u.normalizeValue(x)},getXSD:function(){var u=this;var x=[];var w=u.translationManager;var y=w.get("editingLocale");u._updateFieldsLocalizationMap(y);var v=u._createDynamicNode("root",{"available-locales":w.get("availableLocales").join(),"default-locale":w.get("defaultLocale")});x.push(v.openTag);u.get("fields").each(function(A,z,B){u._appendStructureTypeElementAndMetaData(A,x)});x.push(v.closeTag);return x.join(j)},normalizeValue:function(v){var u=this;if(d.isUndefined(v)){v=j}return v},_afterEditingLocaleChange:function(w){var u=this;var v=u.editingField;if(v){v.set("readOnlyAttributes",u._getReadOnlyFieldAttributes(v))}u._updateFieldsLocalizationMap(w.prevVal);u._syncFieldsLocaleUI(w.newVal);u._toggleInputDirection(w.newVal)},_appendStructureChildren:function(w,v){var u=this;w.get("fields").each(function(y,x,z){u._appendStructureTypeElementAndMetaData(y,v)})},_appendStructureFieldOptionsBuffer:function(x,v){var u=this;var w=x.get("options");if(w){r.each(w,function(A,z,B){var y=A.name;if(!y){y=k.FormBuilderField.buildFieldName("option")}var C=u._createDynamicNode("dynamic-element",{name:y,type:"option",value:Liferay.Util.escapeHTML(A.value)});v.push(C.openTag);u._appendStructureOptionMetaData(A,v);v.push(C.closeTag)})}},_appendStructureOptionMetaData:function(w,v){var u=this;var x=w.localizationMap;var y=u._createDynamicNode("entry",{name:"label"});k.each(x,function(B,z,D){if(h(B)){var A=u._createDynamicNode("meta-data",{locale:z});var C=u.normalizeValue(B.label);v.push(A.openTag,y.openTag,a+C+e,y.closeTag,A.closeTag)}})},_appendStructureTypeElementAndMetaData:function(y,w){var v=this;var x=v._createDynamicNode("dynamic-element",{dataType:y.get("dataType"),fieldNamespace:y.get("fieldNamespace"),indexType:y.get("indexType"),localizable:y.get("localizable"),multiple:y.get("multiple"),name:y.get("name"),readOnly:y.get("readOnly"),repeatable:y.get("repeatable"),required:y.get("required"),showLabel:y.get("showLabel"),type:y.get("type"),width:y.get("width")});w.push(x.openTag);v._appendStructureFieldOptionsBuffer(y,w);v._appendStructureChildren(y,w);var u=v.translationManager.get("availableLocales");r.each(u,function(z,C,B){var A=v._createDynamicNode("meta-data",{locale:z});w.push(A.openTag);r.each(y.getProperties(),function(D,I,H){var E=D.attributeName;if(!g[E]){var G=v._createDynamicNode("entry",{name:E});var F=v.getFieldLocalizedValue(y,E,z);if((E==="predefinedValue")&&p(y,k.FormBuilderMultipleChoiceField)){F=k.JSON.stringify(r(F))}w.push(G.openTag,a+F+e,G.closeTag)}});w.push(A.closeTag)});w.push(x.closeTag)},_createDynamicNode:function(y,v){var u=this;var w=[];var x=[];if(!y){y="dynamic-element"}s.attributeList=j;s.nodeName=y;if(v){k.each(v,function(A,z,B){if(A!==undefined){w.push([z,'="',A,'" '].join(j))}});s.attributeList=b+w.join(j)}x=d.sub(f,s);x=x.replace(/\s?(>)(<)/,"$1$1$2$2").split(/></);return{closeTag:x[1],openTag:x[0]}},_getReadOnlyFieldAttributes:function(y){var u=this;var w=u.translationManager;var x=w.get("editingLocale");var v=y.get("readOnlyAttributes");if(x===w.get("defaultLocale")){r.removeItem(v,"name")}else{if(r.indexOf(v,"name")===-1){v.push("name")}}return v},_onDefaultLocaleChange:function(A){var w=this;var v=w.get("fields");var z=A.newVal;var x=w.translationManager;var u=x.get("availableLocales");if(u.indexOf(z)<0){var y={fields:v,newVal:z,prevVal:A.prevVal};x.addAvailableLocale(z);w._updateLocalizationMaps(y)}},_onPropertyModelChange:function(u){var D=this;var x=u.changed;var B=u.target.get("attributeName");var z=D.editingField;var A=z.get("readOnlyAttributes");if(x.hasOwnProperty("value")&&(k.Array.indexOf(A,"name")===-1)){if(B==="name"){z.set("autoGeneratedName",u.autoGeneratedName===true)}else{if((B==="label")&&z.get("autoGeneratedName")){var w=D.translationManager;if(w.get("editingLocale")===w.get("defaultLocale")){var C=x.value.newVal;z.set("name",C);var v=D.propertyList.get("data");var y=v.filter(function(F,E,G){return(F.get("attributeName")==="name")});if(y.length){y[0].set("value",z.get("name"),{autoGeneratedName:true})}}}}}},_renderSettings:function(){var u=this;l.superclass._renderSettings.apply(u,arguments);u.propertyList.on("model:change",u._onPropertyModelChange,u)},_setAvailableFields:function(w){var v=this;var u=r.map(w,function(y,x,z){return k.instanceOf(y,k.AvailableField)?y:new k.LiferayAvailableField(y)});u.sort(function(y,x){return k.ArraySort.compare(y.get("label"),x.get("label"))});return u},_syncFieldOptionsLocaleUI:function(x,v){var u=this;var w=x.get("options");r.each(w,function(A,z,C){var B=A.localizationMap;if(h(B)){var y=B[v];if(h(y)){A.label=y.label}}});x.set("options",w)},_syncFieldsLocaleUI:function(w,v){var u=this;v=v||u.get("fields");v.each(function(B,z,y){if(p(B,k.FormBuilderMultipleChoiceField)){u._syncFieldOptionsLocaleUI(B,w)}var A=B.get("localizationMap");var x=A[w];if(h(A)&&h(x)){r.each(u.LOCALIZABLE_FIELD_ATTRS,function(D,C,E){B.set(D,x[D])});u._syncUniqueField(B)}if(u.editingField===B){u.propertyList.set("data",B.getProperties())}u._syncFieldsLocaleUI(w,B.get("fields"))})},_toggleInputDirection:function(u){var v=(Liferay.Language.direction[u]==="rtl");m.toggleClass("form-builder-ltr-inputs",!v);m.toggleClass("form-builder-rtl-inputs",v)},_updateFieldOptionsLocalizationMap:function(x,v){var u=this;var w=x.get("options");r.each(w,function(z,y,B){var A=z.localizationMap;if(!h(A)){A={}}A[v]={label:z.label};z.localizationMap=A});x.set("options",w)},_updateFieldsLocalizationMap:function(w,v){var u=this;v=v||u.get("fields");v.each(function(y,x,A){var z={};z[w]=y.getAttrs(u.LOCALIZABLE_FIELD_ATTRS);y.set("localizationMap",k.mix(z,y.get("localizationMap")));if(p(y,k.FormBuilderMultipleChoiceField)){u._updateFieldOptionsLocalizationMap(y,w)}u._updateFieldsLocalizationMap(w,y.get("fields"))})},_updateLocalizationMaps:function(x){var v=this;var u=x.fields;var w=x.newVal;var y=x.prevVal;r.each(u._items,function(C){var z=C.get("fields");var B=C.get("localizationMap");var A={fields:z,newVal:w,prevVal:y};B[w]=B[y];v._updateLocalizationMaps(A)})}},normalizeKey:function(u){k.each(u,function(w,v,x){if(!k.Text.Unicode.test(w,"L")&&!k.Text.Unicode.test(w,"N")&&!k.Text.Unicode.test(w,"Pd")){u=u.replace(w,b)}});return u.replace(/\s/g,"_")}});l.DEFAULT_ICON_CLASS="icon-fb-custom-field";var q={DEFAULT:[{fieldLabel:'\u0042\u006f\u0074\u00e3\u006f',iconClass:"form-builder-field-icon form-builder-field-icon-button",label:'\u0042\u006f\u0074\u00e3\u006f',type:"button"},{fieldLabel:'\u0043\u0068\u0065\u0063\u006b\u0062\u006f\u0078',iconClass:"icon-fb-boolean",label:'\u0043\u0068\u0065\u0063\u006b\u0062\u006f\u0078',type:"checkbox"},{fieldLabel:'\u0046\u0069\u0065\u006c\u0064\u0073\u0065\u0074',iconClass:"form-builder-field-icon form-builder-field-icon-fieldset",label:'\u0046\u0069\u0065\u006c\u0064\u0073\u0065\u0074',type:"fieldset"},{fieldLabel:'\u0043\u0061\u0069\u0078\u0061\u0020\u0064\u0065\u0020\u0074\u0065\u0078\u0074\u006f',iconClass:"icon-fb-text",label:'\u0043\u0061\u0069\u0078\u0061\u0020\u0064\u0065\u0020\u0074\u0065\u0078\u0074\u006f',type:"text"},{fieldLabel:'\u00c1\u0072\u0065\u0061\u0020\u0064\u0065\u0020\u0074\u0065\u0078\u0074\u006f\u0020\u0028\u0048\u0054\u004d\u004c\u0029',iconClass:"icon-fb-text-box",label:'\u00c1\u0072\u0065\u0061\u0020\u0064\u0065\u0020\u0074\u0065\u0078\u0074\u006f\u0020\u0028\u0048\u0054\u004d\u004c\u0029',type:"textarea"},{fieldLabel:'\u0042\u006f\u0074\u00f5\u0065\u0073\u0020\u0064\u006f\u0020\u0074\u0069\u0070\u006f\u0020\u0072\u00e1\u0064\u0069\u006f',iconClass:"icon-fb-radio",label:'\u0042\u006f\u0074\u00f5\u0065\u0073\u0020\u0064\u006f\u0020\u0074\u0069\u0070\u006f\u0020\u0072\u00e1\u0064\u0069\u006f',type:"radio"},{fieldLabel:'\u0053\u0065\u006c\u0065\u0063\u0069\u006f\u006e\u0061\u0072\u0020\u006f\u0070\u00e7\u00e3\u006f',iconClass:"icon-fb-select",label:'\u0053\u0065\u006c\u0065\u0063\u0069\u006f\u006e\u0061\u0072\u0020\u006f\u0070\u00e7\u00e3\u006f',type:"select"}],DDM_STRUCTURE:[{hiddenAttributes:i.checkbox,iconClass:"icon-fb-boolean",label:'\u0056\u0065\u0072\u0064\u0061\u0064\u0065\u0069\u0072\u006f\u002f\u0066\u0061\u006c\u0073\u006f',type:"checkbox"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-calendar",label:'\u0044\u0061\u0074\u0061',type:"ddm-date"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-decimal",label:'\u0044\u0065\u0063\u0069\u006d\u0061\u006c',type:"ddm-decimal"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-file-text",label:'\u0044\u006f\u0063\u0075\u006d\u0065\u006e\u0074\u006f\u0073\u0020\u0065\u0020\u004d\u00ed\u0064\u0069\u0061\u0073',type:"ddm-documentlibrary"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-edit-sign",label:'\u0048\u0054\u004d\u004c',type:"ddm-text-html"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-integer",label:'\u0049\u006e\u0074\u0065\u0069\u0072\u006f',type:"ddm-integer"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-link",label:'\u0041\u0073\u0073\u006f\u0063\u0069\u0061\u0072\u0020\u00e0\u0020\u0070\u00e1\u0067\u0069\u006e\u0061',type:"ddm-link-to-page"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-number",label:'\u004e\u00fa\u006d\u0065\u0072\u006f',type:"ddm-number"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-radio",label:'\u0052\u0061\u0064\u0069\u006f',type:"radio"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-select",label:'\u0053\u0065\u006c\u0065\u0063\u0069\u006f\u006e\u0061\u0072',type:"select"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-text",label:'\u0054\u0065\u0078\u0074\u006f',type:"text"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-text-box",label:'\u0043\u0061\u0069\u0078\u0061\u0020\u0064\u0065\u0020\u0074\u0065\u0078\u0074\u006f',type:"textarea"}],DDM_TEMPLATE:[{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-paragraph",label:'\u0050\u0061\u0072\u00e1\u0067\u0072\u0061\u0066\u006f',type:"ddm-paragraph"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-separator",label:'\u0053\u0065\u0070\u0061\u0072\u0061\u0064\u006f\u0072',type:"ddm-separator"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-fieldset",label:'\u0046\u0069\u0065\u006c\u0064\u0073\u0065\u0074',type:"fieldset"}],WCM_STRUCTURE:[{hiddenAttributes:i.DEFAULT,iconClass:"icon-picture",label:'\u0049\u006d\u0061\u0067\u0065\u006d',type:"wcm-image"},{hiddenAttributes:i.separator,iconClass:"icon-fb-separator",label:'\u0053\u0065\u0070\u0061\u0072\u0061\u0064\u006f\u0072',type:"ddm-separator"}]};q.WCM_STRUCTURE=q.WCM_STRUCTURE.concat(q.DDM_STRUCTURE);l.AVAILABLE_FIELDS=q;Liferay.FormBuilder=l},"",{requires:["arraysort","aui-form-builder","aui-form-validator","aui-text-unicode","json","liferay-menu","liferay-translation-manager","liferay-util-window","text"]});