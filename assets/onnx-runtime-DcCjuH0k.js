var A3=Object.defineProperty;var O3=(e,t,r)=>t in e?A3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Rl=(e,t,r)=>O3(e,typeof t!="symbol"?t+"":t,r);/*!
 * ONNX Runtime Web v1.21.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Jp=Object.defineProperty,R3=Object.getOwnPropertyDescriptor,B3=Object.getOwnPropertyNames,N3=Object.prototype.hasOwnProperty,M3=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ee=(e,t)=>()=>(e&&(t=e(e=0)),t),vs=(e,t)=>{for(var r in t)Jp(e,r,{get:t[r],enumerable:!0})},D3=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of B3(t))!N3.call(e,s)&&s!==r&&Jp(e,s,{get:()=>t[s],enumerable:!(a=R3(t,s))||a.enumerable});return e},ro=e=>D3(Jp({},"__esModule",{value:!0}),e),Gn,br,fi,ac,m$,g$=ee(()=>{Gn=new Map,br=[],fi=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Gn.get(e);if(a===void 0)Gn.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let s=br.indexOf(e);s!==-1&&br.splice(s,1);for(let i=0;i<br.length;i++)if(Gn.get(br[i]).priority<=r){br.splice(i,0,e);return}br.push(e)}return}throw new TypeError("not a valid backend")},ac=async e=>{let t=Gn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},m$=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),a=r.length===0?br:r,s,i=[],o=new Set;for(let d of a){let p=await ac(d);typeof p=="string"?i.push({name:d,err:p}):(s||(s=p),s===p&&o.add(d))}if(!s)throw new Error(`no available backend found. ERR: ${i.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of i)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let l=t.filter(d=>o.has(typeof d=="string"?d:d.name));return[s,new Proxy(e,{get:(d,p)=>p==="executionProviders"?l:Reflect.get(d,p)})]}}),P3=ee(()=>{g$()}),y$,U3=ee(()=>{y$="1.21.0"}),Bl,At,_$=ee(()=>{U3(),Bl="warning",At={wasm:{},webgl:{},webgpu:{},versions:{common:y$},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Bl=e}},get logLevel(){return Bl}},Object.defineProperty(At,"logLevel",{enumerable:!0})}),Ue,W3=ee(()=>{_$(),Ue=At}),$$,w$,q3=ee(()=>{$$=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let s,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[3]):(s=e.dims[3],i=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let m=i*s,g=0,y=m,_=m*2,$=-1;o==="RGBA"?(g=0,y=m,_=m*2,$=m*3):o==="RGB"?(g=0,y=m,_=m*2):o==="RBG"&&(g=0,_=m,y=m*2);for(let w=0;w<i;w++)for(let S=0;S<s;S++){let v=(e.data[g++]-p[0])*d[0],b=(e.data[y++]-p[1])*d[1],T=(e.data[_++]-p[2])*d[2],k=$===-1?255:(e.data[$++]-p[3])*d[3];a.fillStyle="rgba("+v+","+b+","+T+","+k+")",a.fillRect(S,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},w$=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let s,i,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[1],o=e.dims[3]):(s=e.dims[3],i=e.dims[2],o=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t==null?void 0:t.norm,p,m;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?m=[0,0,0,0]:typeof d.bias=="number"?m=[d.bias,d.bias,d.bias,d.bias]:(m=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(m[3]=d.bias[3]));let g=i*s;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let y=4,_=0,$=1,w=2,S=3,v=0,b=g,T=g*2,k=-1;l==="RGBA"?(v=0,b=g,T=g*2,k=g*3):l==="RGB"?(v=0,b=g,T=g*2):l==="RBG"&&(v=0,T=g,b=g*2),a=r.createImageData(s,i);for(let C=0;C<i*s;_+=y,$+=y,w+=y,S+=y,C++)a.data[_]=(e.data[v++]-m[0])*p[0],a.data[$]=(e.data[b++]-m[1])*p[1],a.data[w]=(e.data[T++]-m[2])*p[2],a.data[S]=k===-1?255:(e.data[k++]-m[3])*p[3]}else throw new Error("Can not access image data");return a}}),Ss,b$,v$,x$,S$,k$,V3=ee(()=>{Yp(),Ss=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,s=t.norm??{mean:255,bias:0},i,o;typeof s.mean=="number"?i=[s.mean,s.mean,s.mean,s.mean]:i=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?o=[s.bias,s.bias,s.bias,s.bias]:o=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*a,m=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),g=4,y=0,_=1,$=2,w=3,S=0,v=p,b=p*2,T=-1;l==="RGB"&&(g=3,y=0,_=1,$=2,w=-1),d==="RGBA"?T=p*3:d==="RBG"?(S=0,b=p,v=p*2):d==="BGR"&&(b=0,v=p,S=p*2);for(let k=0;k<p;k++,y+=g,$+=g,_+=g,w+=g)m[S++]=(e[y]+o[0])/i[0],m[v++]=(e[_]+o[1])/i[1],m[b++]=(e[$]+o[2])/i[2],T!==-1&&w!==-1&&(m[T++]=(e[w]+o[3])/i[3]);return d==="RGBA"?new Ct("float32",m,[1,4,r,a]):new Ct("float32",m,[1,3,r,a])},b$=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",o,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=m=>typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||m instanceof OffscreenCanvas?m.getContext("2d"):null;if(r){let m=d();m.width=e.width,m.height=e.height;let g=p(m);if(g!=null){let y=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(y=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=y,l.width=_}else l.tensorFormat="RGBA",l.height=y,l.width=_;g.drawImage(e,0,0),o=g.getImageData(0,0,_,y).data}else throw new Error("Can not access image data")}else if(a){let m,g;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(m=t.resizedHeight,g=t.resizedWidth):(m=e.height,g=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=m,l.width=g,t!==void 0){let y=d();y.width=g,y.height=m;let _=p(y);if(_!=null)_.putImageData(e,0,0),o=_.getImageData(0,0,g,m).data;else throw new Error("Can not access image data")}else o=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let m=d();m.width=e.width,m.height=e.height;let g=p(m);if(g!=null){let y=e.height,_=e.width;return g.drawImage(e,0,0,_,y),o=g.getImageData(0,0,_,y).data,l.height=y,l.width=_,Ss(o,l)}else throw new Error("Can not access image data")}else{if(i)return new Promise((m,g)=>{let y=d(),_=p(y);if(!e||!_)return g();let $=new Image;$.crossOrigin="Anonymous",$.src=e,$.onload=()=>{y.width=$.width,y.height=$.height,_.drawImage($,0,0,y.width,y.height);let w=_.getImageData(0,0,y.width,y.height);l.height=y.height,l.width=y.width,m(Ss(w.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Ss(o,l);throw new Error("Input data provided is not supported - aborted tensor creation")},v$=(e,t)=>{let{width:r,height:a,download:s,dispose:i}=t,o=[1,a,r,4];return new Ct({location:"texture",type:"float32",texture:e,dims:o,download:s,dispose:i})},x$=(e,t)=>{let{dataType:r,dims:a,download:s,dispose:i}=t;return new Ct({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:s,dispose:i})},S$=(e,t)=>{let{dataType:r,dims:a,download:s,dispose:i}=t;return new Ct({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:s,dispose:i})},k$=(e,t,r)=>new Ct({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),ui,us,Nl,T$,L3=ee(()=>{ui=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),us=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Nl=!1,T$=()=>{if(!Nl){Nl=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(ui.set("int64",BigInt64Array),us.set(BigInt64Array,"int64")),t&&(ui.set("uint64",BigUint64Array),us.set(BigUint64Array,"uint64")),a?(ui.set("float16",r),us.set(r,"float16")):ui.set("float16",Uint16Array)}}}),C$,I$,G3=ee(()=>{Yp(),C$=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},I$=(e,t)=>{switch(e.location){case"cpu":return new Ct(e.type,e.data,t);case"cpu-pinned":return new Ct({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ct({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ct({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ct({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ct,Yp=ee(()=>{q3(),V3(),L3(),G3(),Ct=class{constructor(e,t,r){T$();let a,s;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,s=e.dims,e.location){case"cpu-pinned":{let o=ui.get(a);if(!o)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,l;if(typeof e=="string")if(a=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let d=ui.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?o=d.from(t,BigInt):o=d.from(t)}else if(t instanceof d)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&d!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")a="string",o=e;else if(d==="boolean")a="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",o=Uint8Array.from(e);else{let d=us.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=d,o=e}if(l===void 0)l=[o.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");s=l,this.cpuData=o,this.dataLocation="cpu"}let i=C$(s);if(this.cpuData&&i!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=s,this.size=i}static async fromImage(e,t){return b$(e,t)}static fromTexture(e,t){return v$(e,t)}static fromGpuBuffer(e,t){return x$(e,t)}static fromMLTensor(e,t){return S$(e,t)}static fromPinnedBuffer(e,t,r){return k$(e,t,r)}toDataURL(e){return $$(this,e)}toImageData(e){return w$(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return I$(this,e)}}}),Jt,E$=ee(()=>{Yp(),Jt=Ct}),_s,Ml,er,Rt,z$=ee(()=>{_$(),_s=(e,t)=>{(typeof At.trace>"u"?!At.wasm.trace:!At.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ml=(e,t)=>{var s;let r=((s=new Error().stack)==null?void 0:s.split(/\r\n|\r|\n/g))||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let o=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(o+=`::${t}`),_s("CPU",o);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},er=e=>{(typeof At.trace>"u"?!At.wasm.trace:!At.trace)||Ml("BEGIN",e)},Rt=e=>{(typeof At.trace>"u"?!At.wasm.trace:!At.trace)||Ml("END",e)}}),A$,H3=ee(()=>{g$(),E$(),z$(),A$=class O${constructor(t){this.handler=t}async run(t,r,a){er();let s={},i={};if(typeof t!="object"||t===null||t instanceof Jt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Jt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);s[p]=null}if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,m=Object.getOwnPropertyNames(r);for(let g of this.outputNames)if(m.indexOf(g)!==-1){let y=r[g];(y===null||y instanceof Jt)&&(p=!0,o=!1,s[g]=y)}if(p){if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(o)for(let p of this.outputNames)s[p]=null;let l=await this.handler.run(t,s,i),d={};for(let p in l)if(Object.hasOwnProperty.call(l,p)){let m=l[p];m instanceof Jt?d[p]=m:d[p]=new Jt(m.type,m.data,m.dims)}return Rt(),d}async release(){return this.handler.dispose()}static async create(t,r,a,s){er();let i,o={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let m=t,g=0,y=t.byteLength;if(typeof r=="object"&&r!==null)o=r;else if(typeof r=="number"){if(g=r,!Number.isSafeInteger(g))throw new RangeError("'byteOffset' must be an integer.");if(g<0||g>=m.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${m.byteLength}).`);if(y=t.byteLength-g,typeof a=="number"){if(y=a,!Number.isSafeInteger(y))throw new RangeError("'byteLength' must be an integer.");if(y<=0||g+y>m.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${m.byteLength-g}].`);if(typeof s=="object"&&s!==null)o=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(m,g,y)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await m$(o),p=await l.createInferenceSessionHandler(i,d);return Rt(),new O$(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),eh,F3=ee(()=>{H3(),eh=A$}),j3=ee(()=>{}),K3=ee(()=>{}),Q3=ee(()=>{}),Z3=ee(()=>{}),R$={};vs(R$,{InferenceSession:()=>eh,TRACE:()=>_s,TRACE_FUNC_BEGIN:()=>er,TRACE_FUNC_END:()=>Rt,Tensor:()=>Jt,env:()=>Ue,registerBackend:()=>fi});var rr=ee(()=>{P3(),W3(),F3(),E$(),j3(),K3(),z$(),Q3(),Z3()}),th=ee(()=>{}),B$={};vs(B$,{default:()=>N$});var Dl,Pl,N$,X3=ee(()=>{var e;Pb(),vi(),rh(),Dl="ort-wasm-proxy-worker",Pl=((e=globalThis.self)==null?void 0:e.name)===Dl,Pl&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":ih(a.wasm).then(()=>{bh(a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})})},s=>{postMessage({type:r,err:s})});break;case"init-ep":{let{epName:s,env:i}=a;vh(i,s).then(()=>{postMessage({type:r})},o=>{postMessage({type:r,err:o})});break}case"copy-from":{let{buffer:s}=a,i=uo(s);postMessage({type:r,out:i});break}case"create":{let{model:s,options:i}=a;xh(s,i).then(o=>{postMessage({type:r,out:o})},o=>{postMessage({type:r,err:o})});break}case"release":Sh(a),postMessage({type:r});break;case"run":{let{sessionId:s,inputIndices:i,inputs:o,outputIndices:l,options:d}=a;kh(s,i,o,l,new Array(l.length).fill(null),d).then(p=>{p.some(m=>m[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:p},Ch([...o,...p]))},p=>{postMessage({type:r,err:p})});break}case"end-profiling":Th(a),postMessage({type:r});break;default:}}catch(s){postMessage({type:r,err:s})}}),N$=Pl?null:t=>new Worker(t??kt,{type:"module",name:Dl})}),M$={};vs(M$,{default:()=>D$});var Ul,Wl,D$,nc,J3=ee(()=>{var e,t;Wl=(Ul=import.meta.url,async function(r={}){var Ln;var a,s,i=r,o=new Promise((n,u)=>{a=n,s=u}),l=typeof window=="object",d=typeof WorkerGlobalScope<"u",p=d&&((Ln=self.name)==null?void 0:Ln.startsWith("em-pthread"));i.mountExternalData=(n,u)=>{n.startsWith("./")&&(n=n.substring(2)),(i.Bd||(i.Bd=new Map)).set(n,u)},i.unmountExternalData=()=>{delete i.Bd};var m=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let g=()=>{let n=(h,c,f)=>(...x)=>{let I=Qe,A=c==null?void 0:c();x=h(...x);let O=c==null?void 0:c();return A!==O&&(h=O,f(A),c=f=null),Qe!=I?new Promise((D,V)=>{Fr={resolve:D,reject:V}}):x},u=h=>async(...c)=>{var f;try{if(i.Cd)throw Error("Session already started");let x=i.Cd={be:c[0],errors:[]},I=await h(...c);if(i.Cd!==x)throw Error("Session mismatch");(f=i.Dd)==null||f.flush();let A=x.errors;if(0<A.length){let O=await Promise.all(A);if(O=O.filter(D=>D),0<O.length)throw Error(O.join(`
`))}return I}finally{i.Cd=null}};i._OrtCreateSession=n(i._OrtCreateSession,()=>i._OrtCreateSession,h=>i._OrtCreateSession=h),i._OrtRun=u(n(i._OrtRun,()=>i._OrtRun,h=>i._OrtRun=h)),i._OrtRunWithBinding=u(n(i._OrtRunWithBinding,()=>i._OrtRunWithBinding,h=>i._OrtRunWithBinding=h)),i._OrtBindInput=n(i._OrtBindInput,()=>i._OrtBindInput,h=>i._OrtBindInput=h),g=void 0};i.jsepInit=(n,u)=>{if(g==null||g(),n==="webgpu"){[i.Dd,i.Rd,i.Vd,i.Hd,i.Ud,i.hc,i.Wd,i.Zd,i.Sd,i.Td,i.Xd]=u;let h=i.Dd;i.jsepRegisterBuffer=(c,f,x,I)=>h.registerBuffer(c,f,x,I),i.jsepGetBuffer=c=>h.getBuffer(c),i.jsepCreateDownloader=(c,f,x)=>h.createDownloader(c,f,x),i.jsepOnCreateSession=c=>{h.onCreateSession(c)},i.jsepOnReleaseSession=c=>{h.onReleaseSession(c)},i.jsepOnRunStart=c=>h.onRunStart(c),i.$d=(c,f)=>{h.upload(c,f)}}else if(n==="webnn"){[i.Dd,i.Yd,i.Id,i.jsepEnsureTensor,i.Jd,i.jsepDownloadTensor]=u,i.jsepReleaseTensorId=i.Id,i.jsepUploadTensor=i.Jd;let h=i.Dd;i.jsepOnRunStart=c=>h.onRunStart(c),i.jsepOnRunEnd=h.onRunEnd.bind(h),i.jsepRegisterMLContext=(c,f)=>{h.registerMLContext(c,f)},i.jsepOnReleaseSession=c=>{h.onReleaseSession(c)},i.jsepCreateMLTensorDownloader=(c,f)=>h.createMLTensorDownloader(c,f),i.jsepRegisterMLTensor=(c,f,x,I)=>h.registerMLTensor(c,f,x,I),i.jsepCreateMLContext=c=>h.createMLContext(c),i.jsepRegisterMLConstant=(c,f,x,I,A)=>h.registerMLConstant(c,f,x,I,A,i.Bd),i.jsepRegisterGraphInput=h.registerGraphInput.bind(h),i.jsepIsGraphInput=h.isGraphInput.bind(h),i.jsepCreateTemporaryTensor=h.createTemporaryTensor.bind(h)}};var y,_,$=Object.assign({},i),w=(n,u)=>{throw u},S="";(l||d)&&(d?S=self.location.href:typeof document<"u"&&document.currentScript&&(S=document.currentScript.src),Ul&&(S=Ul),S=S.startsWith("blob:")?"":S.slice(0,S.replace(/[?#].*/,"").lastIndexOf("/")+1),d&&(_=n=>{var u=new XMLHttpRequest;return u.open("GET",n,!1),u.responseType="arraybuffer",u.send(null),new Uint8Array(u.response)}),y=async n=>{if(fe(n))return new Promise((h,c)=>{var f=new XMLHttpRequest;f.open("GET",n,!0),f.responseType="arraybuffer",f.onload=()=>{f.status==200||f.status==0&&f.response?h(f.response):c(f.status)},f.onerror=c,f.send(null)});var u=await fetch(n,{credentials:"same-origin"});if(u.ok)return u.arrayBuffer();throw Error(u.status+" : "+u.url)});var v=console.log.bind(console),b=console.error.bind(console),T=v,k=b;Object.assign(i,$),$=null;var C,E,z,R,P,q,X,ie,K,J,Z,W,oe,ce=i.wasmBinary,H=!1,fe=n=>n.startsWith("file://");function B(){return C.buffer!=R.buffer&&me(),R}function U(){return C.buffer!=R.buffer&&me(),P}function se(){return C.buffer!=R.buffer&&me(),q}function $e(){return C.buffer!=R.buffer&&me(),X}function N(){return C.buffer!=R.buffer&&me(),ie}function ue(){return C.buffer!=R.buffer&&me(),K}function qe(){return C.buffer!=R.buffer&&me(),J}function De(){return C.buffer!=R.buffer&&me(),oe}if(p){let n=function(u){try{var h=u.data,c=h.yd;if(c==="load"){let f=[];self.onmessage=x=>f.push(x),self.startWorker=()=>{postMessage({yd:"loaded"});for(let x of f)n(x);self.onmessage=n};for(let x of h.Od)i[x]&&!i[x].proxy||(i[x]=(...I)=>{postMessage({yd:"callHandler",Nd:x,args:I})},x=="print"&&(T=i[x]),x=="printErr"&&(k=i[x]));C=h.he,me(),gt(h.ie)}else if(c==="run"){$o(h.xd),Zr(h.xd,0,0,1,0,0),Li(),Gr(h.xd),Ie||(Da(),Ie=!0);try{wo(h.de,h.Fd)}catch(f){if(f!="unwind")throw f}}else h.target!=="setimmediate"&&(c==="checkMailbox"?Ie&&or():c&&(k(`worker: received unknown command ${c}`),k(h)))}catch(f){throw Pa(),f}};var gt,Ie=!1;k=function(...u){u=u.join(" "),console.error(u)},self.alert=function(...u){postMessage({yd:"alert",text:u.join(" "),fe:mr()})},self.onunhandledrejection=u=>{throw u.reason||u},self.onmessage=n}function me(){var n=C.buffer;i.HEAP8=R=new Int8Array(n),i.HEAP16=q=new Int16Array(n),i.HEAPU8=P=new Uint8Array(n),i.HEAPU16=X=new Uint16Array(n),i.HEAP32=ie=new Int32Array(n),i.HEAPU32=K=new Uint32Array(n),i.HEAPF32=J=new Float32Array(n),i.HEAPF64=oe=new Float64Array(n),i.HEAP64=Z=new BigInt64Array(n),i.HEAPU64=W=new BigUint64Array(n)}function st(){p?startWorker(i):M.Bb()}p||(C=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),me());var Nt,yt=0,Mt=null;function Mi(){if(--yt==0&&Mt){var n=Mt;Mt=null,n()}}function Xe(n){throw k(n="Aborted("+n+")"),H=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),s(n),n}function Di(){return{a:{Ta:_o,Va:yo,W:bo,la:vo,b:So,u:ko,R:To,Za:Co,d:Io,pb:ji,g:xo,T:Zi,Ga:Xi,lb:Yi,nb:ea,Ha:ta,Ea:ra,wb:ia,Da:aa,pa:na,mb:sa,jb:oa,Fa:ua,kb:la,Ma:Eo,za:zo,eb:Ao,cb:Ro,ya:No,V:Mo,N:Do,db:Po,ma:Ho,fb:Fo,zb:jo,hb:Ko,qb:Qo,ab:Zo,Aa:Xo,yb:Gr,Ja:Jo,S:Yo,Wa:eu,$:iu,G:au,E:su,m:qr,H:ou,B:du,X:pu,J:hu,v:cu,O:fu,D:mu,t:gu,A:yu,z:_u,w:$u,r:wu,tb:bu,ub:vu,vb:xu,rb:xa,sb:Sa,bb:ka,Oa:ku,La:Cu,y:Iu,ja:Eu,Ba:zu,Ka:Tu,qa:Au,Ia:Ou,ib:Ru,U:Su,fa:Bu,Sa:Nu,gb:Mu,Qa:Du,Pa:Pu,Ab:Ea,Ca:za,ob:Nr,aa:Aa,oa:Oa,xb:Ra,na:Ba,$a:pl,ia:Sl,sa:El,ga:ll,da:yl,ua:Cl,p:ol,e:Hu,c:Lu,ea:ml,f:Fu,n:Ku,k:il,Y:Zu,ka:al,j:ul,wa:fl,Ra:Ol,ca:vl,Ua:Al,P:gl,K:Ju,_:bl,Q:dl,Z:kl,x:Xu,l:Gu,va:wl,i:Vu,h:Qu,ra:zl,ta:Il,o:ju,q:Yu,s:tl,I:rl,C:sl,L:nl,xa:cl,_a:hl,F:xl,Ya:_l,ba:Tl,M:el,Xa:$l,ha:Wu,a:C,Na:Br}}}var Ar={1319426:()=>typeof wasmOffsetConverter<"u",1319483:(n,u,h,c,f)=>{if(i===void 0||!i.Bd)return 1;if((n=Ce(Number(n>>>0))).startsWith("./")&&(n=n.substring(2)),!(n=i.Bd.get(n)))return 2;if(u=Number(u>>>0),h=Number(h>>>0),c=Number(c>>>0),u+h>n.byteLength)return 3;try{let x=n.subarray(u,u+h);switch(f){case 0:U().set(x,c>>>0);break;case 1:i.$d(c,x);break;default:return 4}return 0}catch{return 4}},1320198:(n,u,h)=>{i.Jd(n,U().subarray(u>>>0,u+h>>>0))},1320261:()=>i.Yd(),1320302:n=>{i.Id(n)},1320338:()=>{i.Sd()},1320369:()=>{i.Td()},1320398:()=>{i.Xd()},1320423:n=>i.Rd(n),1320456:n=>i.Vd(n),1320488:(n,u,h)=>{i.Hd(Number(n),Number(u),Number(h),!0)},1320551:(n,u,h)=>{i.Hd(Number(n),Number(u),Number(h))},1320608:n=>{i.hc("Abs",n,void 0)},1320659:n=>{i.hc("Neg",n,void 0)},1320710:n=>{i.hc("Floor",n,void 0)},1320763:n=>{i.hc("Ceil",n,void 0)},1320815:n=>{i.hc("Reciprocal",n,void 0)},1320873:n=>{i.hc("Sqrt",n,void 0)},1320925:n=>{i.hc("Exp",n,void 0)},1320976:n=>{i.hc("Erf",n,void 0)},1321027:n=>{i.hc("Sigmoid",n,void 0)},1321082:(n,u,h)=>{i.hc("HardSigmoid",n,{alpha:u,beta:h})},1321161:n=>{i.hc("Log",n,void 0)},1321212:n=>{i.hc("Sin",n,void 0)},1321263:n=>{i.hc("Cos",n,void 0)},1321314:n=>{i.hc("Tan",n,void 0)},1321365:n=>{i.hc("Asin",n,void 0)},1321417:n=>{i.hc("Acos",n,void 0)},1321469:n=>{i.hc("Atan",n,void 0)},1321521:n=>{i.hc("Sinh",n,void 0)},1321573:n=>{i.hc("Cosh",n,void 0)},1321625:n=>{i.hc("Asinh",n,void 0)},1321678:n=>{i.hc("Acosh",n,void 0)},1321731:n=>{i.hc("Atanh",n,void 0)},1321784:n=>{i.hc("Tanh",n,void 0)},1321836:n=>{i.hc("Not",n,void 0)},1321887:(n,u,h)=>{i.hc("Clip",n,{min:u,max:h})},1321956:n=>{i.hc("Clip",n,void 0)},1322008:(n,u)=>{i.hc("Elu",n,{alpha:u})},1322066:n=>{i.hc("Gelu",n,void 0)},1322118:n=>{i.hc("Relu",n,void 0)},1322170:(n,u)=>{i.hc("LeakyRelu",n,{alpha:u})},1322234:(n,u)=>{i.hc("ThresholdedRelu",n,{alpha:u})},1322304:(n,u)=>{i.hc("Cast",n,{to:u})},1322362:n=>{i.hc("Add",n,void 0)},1322413:n=>{i.hc("Sub",n,void 0)},1322464:n=>{i.hc("Mul",n,void 0)},1322515:n=>{i.hc("Div",n,void 0)},1322566:n=>{i.hc("Pow",n,void 0)},1322617:n=>{i.hc("Equal",n,void 0)},1322670:n=>{i.hc("Greater",n,void 0)},1322725:n=>{i.hc("GreaterOrEqual",n,void 0)},1322787:n=>{i.hc("Less",n,void 0)},1322839:n=>{i.hc("LessOrEqual",n,void 0)},1322898:(n,u,h,c,f)=>{i.hc("ReduceMean",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323073:(n,u,h,c,f)=>{i.hc("ReduceMax",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323247:(n,u,h,c,f)=>{i.hc("ReduceMin",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323421:(n,u,h,c,f)=>{i.hc("ReduceProd",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323596:(n,u,h,c,f)=>{i.hc("ReduceSum",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323770:(n,u,h,c,f)=>{i.hc("ReduceL1",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323943:(n,u,h,c,f)=>{i.hc("ReduceL2",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1324116:(n,u,h,c,f)=>{i.hc("ReduceLogSum",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1324293:(n,u,h,c,f)=>{i.hc("ReduceSumSquare",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1324473:(n,u,h,c,f)=>{i.hc("ReduceLogSumExp",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1324653:n=>{i.hc("Where",n,void 0)},1324706:(n,u,h)=>{i.hc("Transpose",n,{perm:u?Array.from(N().subarray(Number(u)>>>0,Number(h)>>>0)):[]})},1324830:(n,u,h,c)=>{i.hc("DepthToSpace",n,{blocksize:u,mode:Ce(h),format:c?"NHWC":"NCHW"})},1324963:(n,u,h,c)=>{i.hc("DepthToSpace",n,{blocksize:u,mode:Ce(h),format:c?"NHWC":"NCHW"})},1325096:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e,Le)=>{i.hc("ConvTranspose",n,{format:O?"NHWC":"NCHW",autoPad:u,dilations:[h],group:c,kernelShape:[f],pads:[x,I],strides:[A],wIsConst:()=>!!B()[D>>>0],outputPadding:V?Array.from(N().subarray(Number(V)>>>0,Number(Q)>>>0)):[],outputShape:ne?Array.from(N().subarray(Number(ne)>>>0,Number(_e)>>>0)):[],activation:Ce(Le)})},1325529:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("ConvTranspose",n,{format:A?"NHWC":"NCHW",autoPad:u,dilations:Array.from(N().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:c,kernelShape:Array.from(N().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),pads:Array.from(N().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(N().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!B()[O>>>0],outputPadding:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],outputShape:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[],activation:Ce(_e)})},1326190:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e,Le)=>{i.hc("ConvTranspose",n,{format:O?"NHWC":"NCHW",autoPad:u,dilations:[h],group:c,kernelShape:[f],pads:[x,I],strides:[A],wIsConst:()=>!!B()[D>>>0],outputPadding:V?Array.from(N().subarray(Number(V)>>>0,Number(Q)>>>0)):[],outputShape:ne?Array.from(N().subarray(Number(ne)>>>0,Number(_e)>>>0)):[],activation:Ce(Le)})},1326623:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("ConvTranspose",n,{format:A?"NHWC":"NCHW",autoPad:u,dilations:Array.from(N().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:c,kernelShape:Array.from(N().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),pads:Array.from(N().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(N().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!B()[O>>>0],outputPadding:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],outputShape:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[],activation:Ce(_e)})},1327284:(n,u)=>{i.hc("GlobalAveragePool",n,{format:u?"NHWC":"NCHW"})},1327375:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("AveragePool",n,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:h,count_include_pad:c,storage_order:f,dilations:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(N().subarray(Number(A)>>>0,Number(O)>>>0)):[],pads:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],strides:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[]})},1327854:(n,u)=>{i.hc("GlobalAveragePool",n,{format:u?"NHWC":"NCHW"})},1327945:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("AveragePool",n,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:h,count_include_pad:c,storage_order:f,dilations:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(N().subarray(Number(A)>>>0,Number(O)>>>0)):[],pads:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],strides:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[]})},1328424:(n,u)=>{i.hc("GlobalMaxPool",n,{format:u?"NHWC":"NCHW"})},1328511:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("MaxPool",n,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:h,count_include_pad:c,storage_order:f,dilations:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(N().subarray(Number(A)>>>0,Number(O)>>>0)):[],pads:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],strides:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[]})},1328986:(n,u)=>{i.hc("GlobalMaxPool",n,{format:u?"NHWC":"NCHW"})},1329073:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("MaxPool",n,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:h,count_include_pad:c,storage_order:f,dilations:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(N().subarray(Number(A)>>>0,Number(O)>>>0)):[],pads:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],strides:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[]})},1329548:(n,u,h,c,f)=>{i.hc("Gemm",n,{alpha:u,beta:h,transA:c,transB:f})},1329652:n=>{i.hc("MatMul",n,void 0)},1329706:(n,u,h,c)=>{i.hc("ArgMax",n,{keepDims:!!u,selectLastIndex:!!h,axis:c})},1329814:(n,u,h,c)=>{i.hc("ArgMin",n,{keepDims:!!u,selectLastIndex:!!h,axis:c})},1329922:(n,u)=>{i.hc("Softmax",n,{axis:u})},1329985:(n,u)=>{i.hc("Concat",n,{axis:u})},1330045:(n,u,h,c,f)=>{i.hc("Split",n,{axis:u,numOutputs:h,splitSizes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1330201:n=>{i.hc("Expand",n,void 0)},1330255:(n,u)=>{i.hc("Gather",n,{axis:Number(u)})},1330326:(n,u)=>{i.hc("GatherElements",n,{axis:Number(u)})},1330405:(n,u)=>{i.hc("GatherND",n,{batch_dims:Number(u)})},1330484:(n,u,h,c,f,x,I,A,O,D,V)=>{i.hc("Resize",n,{antialias:u,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(c)>>>0)):[],coordinateTransformMode:Ce(f),cubicCoeffA:x,excludeOutside:I,extrapolationValue:A,keepAspectRatioPolicy:Ce(O),mode:Ce(D),nearestMode:Ce(V)})},1330846:(n,u,h,c,f,x,I)=>{i.hc("Slice",n,{starts:u?Array.from(N().subarray(Number(u)>>>0,Number(h)>>>0)):[],ends:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[],axes:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[]})},1331110:n=>{i.hc("Tile",n,void 0)},1331162:(n,u,h)=>{i.hc("InstanceNormalization",n,{epsilon:u,format:h?"NHWC":"NCHW"})},1331276:(n,u,h)=>{i.hc("InstanceNormalization",n,{epsilon:u,format:h?"NHWC":"NCHW"})},1331390:n=>{i.hc("Range",n,void 0)},1331443:(n,u)=>{i.hc("Einsum",n,{equation:Ce(u)})},1331524:(n,u,h,c,f)=>{i.hc("Pad",n,{mode:u,value:h,pads:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1331667:(n,u,h,c,f,x)=>{i.hc("BatchNormalization",n,{epsilon:u,momentum:h,spatial:!!f,trainingMode:!!c,format:x?"NHWC":"NCHW"})},1331836:(n,u,h,c,f,x)=>{i.hc("BatchNormalization",n,{epsilon:u,momentum:h,spatial:!!f,trainingMode:!!c,format:x?"NHWC":"NCHW"})},1332005:(n,u,h)=>{i.hc("CumSum",n,{exclusive:Number(u),reverse:Number(h)})},1332102:(n,u,h)=>{i.hc("DequantizeLinear",n,{axis:u,blockSize:h})},1332192:(n,u,h,c,f)=>{i.hc("GridSample",n,{align_corners:u,mode:Ce(h),padding_mode:Ce(c),format:f?"NHWC":"NCHW"})},1332362:(n,u,h,c,f)=>{i.hc("GridSample",n,{align_corners:u,mode:Ce(h),padding_mode:Ce(c),format:f?"NHWC":"NCHW"})},1332532:(n,u)=>{i.hc("ScatterND",n,{reduction:Ce(u)})},1332617:(n,u,h,c,f,x,I,A,O)=>{i.hc("Attention",n,{numHeads:u,isUnidirectional:h,maskFilterValue:c,scale:f,doRotary:x,qkvHiddenSizes:I?Array.from(N().subarray(Number(A)>>>0,Number(A)+I>>>0)):[],pastPresentShareBuffer:!!O})},1332889:n=>{i.hc("BiasAdd",n,void 0)},1332944:n=>{i.hc("BiasSplitGelu",n,void 0)},1333005:n=>{i.hc("FastGelu",n,void 0)},1333061:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e,Le,qt)=>{i.hc("Conv",n,{format:Q?"NHWC":"NCHW",auto_pad:u,dilations:h?Array.from(N().subarray(Number(h)>>>0,Number(c)>>>0)):[],group:f,kernel_shape:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[],pads:A?Array.from(N().subarray(Number(A)>>>0,Number(O)>>>0)):[],strides:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],w_is_const:()=>!!B()[Number(ne)>>>0],activation:Ce(_e),activation_params:Le?Array.from(qe().subarray(Number(Le)>>>0,Number(qt)>>>0)):[]})},1333645:n=>{i.hc("Gelu",n,void 0)},1333697:(n,u,h,c,f,x,I,A,O)=>{i.hc("GroupQueryAttention",n,{numHeads:u,kvNumHeads:h,scale:c,softcap:f,doRotary:x,rotaryInterleaved:I,smoothSoftmax:A,localWindowSize:O})},1333914:(n,u,h,c)=>{i.hc("LayerNormalization",n,{axis:u,epsilon:h,simplified:!!c})},1334025:(n,u,h,c)=>{i.hc("LayerNormalization",n,{axis:u,epsilon:h,simplified:!!c})},1334136:(n,u,h,c,f,x)=>{i.hc("MatMulNBits",n,{k:u,n:h,accuracyLevel:c,bits:f,blockSize:x})},1334263:(n,u,h,c,f,x)=>{i.hc("MultiHeadAttention",n,{numHeads:u,isUnidirectional:h,maskFilterValue:c,scale:f,doRotary:x})},1334422:(n,u)=>{i.hc("QuickGelu",n,{alpha:u})},1334486:(n,u,h,c,f)=>{i.hc("RotaryEmbedding",n,{interleaved:!!u,numHeads:h,rotaryEmbeddingDim:c,scale:f})},1334625:(n,u,h)=>{i.hc("SkipLayerNormalization",n,{epsilon:u,simplified:!!h})},1334727:(n,u,h)=>{i.hc("SkipLayerNormalization",n,{epsilon:u,simplified:!!h})},1334829:(n,u,h,c)=>{i.hc("GatherBlockQuantized",n,{gatherAxis:u,quantizeAxis:h,blockSize:c})},1334950:n=>{i.Wd(n)},1334984:(n,u)=>i.Zd(Number(n),Number(u),i.Cd.be,i.Cd.errors)};function yo(n,u,h){return ya(async()=>{await i.Ud(Number(n),Number(u),Number(h))})}function _o(){return typeof wasmOffsetConverter<"u"}class Or{constructor(u){Rl(this,"name","ExitStatus");this.message=`Program terminated with exit(${u})`,this.status=u}}var Pi=n=>{n.terminate(),n.onmessage=()=>{}},Rr=[],Ui=n=>{ut.length==0&&(Hi(),Gi(ut[0]));var u=ut.pop();if(!u)return 6;Dt.push(u),_t[n.xd]=u,u.xd=n.xd;var h={yd:"run",de:n.ce,Fd:n.Fd,xd:n.xd};return u.postMessage(h,n.Ld),0},ot=0,ve=(n,u,...h)=>{for(var c=2*h.length,f=re(),x=Jr(8*c),I=x>>>3,A=0;A<h.length;A++){var O=h[A];typeof O=="bigint"?(Z[I+2*A]=1n,Z[I+2*A+1]=O):(Z[I+2*A]=0n,De()[I+2*A+1>>>0]=O)}return n=Ua(n,0,c,x,u),Y(f),n};function Br(n){if(p)return ve(0,1,n);if(z=n,!(0<ot)){for(var u of Dt)Pi(u);for(u of ut)Pi(u);ut=[],Dt=[],_t={},H=!0}w(0,new Or(n))}function Wi(n){if(p)return ve(1,0,n);Nr(n)}var Nr=n=>{if(z=n,p)throw Wi(n),"unwind";Br(n)},ut=[],Dt=[],qi=[],_t={},Vi=n=>{var u=n.xd;delete _t[u],ut.push(n),Dt.splice(Dt.indexOf(n),1),n.xd=0,Wa(u)};function Li(){qi.forEach(n=>n())}var Gi=n=>new Promise(u=>{n.onmessage=f=>{var x=(f=f.data).yd;if(f.Ed&&f.Ed!=mr()){var I=_t[f.Ed];I?I.postMessage(f,f.Ld):k(`Internal error! Worker sent a message "${x}" to target pthread ${f.Ed}, but that thread no longer exists!`)}else x==="checkMailbox"?or():x==="spawnThread"?Ui(f):x==="cleanupThread"?Vi(_t[f.ee]):x==="loaded"?(n.loaded=!0,u(n)):x==="alert"?alert(`Thread ${f.fe}: ${f.text}`):f.target==="setimmediate"?n.postMessage(f):x==="callHandler"?i[f.Nd](...f.args):x&&k(`worker sent an unknown command ${x}`)},n.onerror=f=>{throw k(`worker sent an error! ${f.filename}:${f.lineno}: ${f.message}`),f};var h,c=[];for(h of[])i.propertyIsEnumerable(h)&&c.push(h);n.postMessage({yd:"load",Od:c,he:C,ie:E})});function Hi(){var n=new Worker(import.meta.url.startsWith("file:")?new URL("/beandex/assets/ort.webgpu.bundle.min-CEayb2S6.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});ut.push(n)}var $o=n=>{me();var u=ue()[n+52>>>2>>>0];n=ue()[n+56>>>2>>>0],La(u,u-n),Y(u)},wo=(n,u)=>{ot=0,n=Yr(n,u),0<ot?z=n:Xr(n)},sr=[];function bo(n){var u=new Mr(n>>>=0);if(B()[u.wd+12>>>0]==0){var h=1;B()[u.wd+12>>>0]=h}return h=0,B()[u.wd+13>>>0]=h,sr.push(u),Ha(n),ja(n)}var xt=0,vo=()=>{ae(0,0);var n=sr.pop();Ga(n.Gd),xt=0};class Mr{constructor(u){this.Gd=u,this.wd=u-24}}function xo(n){throw xt||(xt=n>>>0),xt}var Dr=n=>{var u=xt;if(!u)return Wt(0),0;var h=new Mr(u);ue()[h.wd+16>>>2>>>0]=u;var c=ue()[h.wd+4>>>2>>>0];if(!c)return Wt(0),u;for(var f of n){if(f===0||f===c)break;if(Fa(f,c,h.wd+16))return Wt(f),u}return Wt(c),u};function So(){return Dr([])}function ko(n){return Dr([n>>>0])}function To(n,u){return Dr([n>>>0,u>>>0])}var Co=()=>{var n=sr.pop();n||Xe("no exception to throw");var u=n.Gd;if(B()[n.wd+13>>>0]==0){sr.push(n);var h=1;B()[n.wd+13>>>0]=h,h=0,B()[n.wd+12>>>0]=h}throw xt=u};function Io(n,u,h){var c=new Mr(n>>>=0);throw u>>>=0,h>>>=0,ue()[c.wd+16>>>2>>>0]=0,ue()[c.wd+4>>>2>>>0]=u,ue()[c.wd+8>>>2>>>0]=h,xt=n}function Fi(n,u,h,c){return p?ve(2,1,n,u,h,c):ji(n,u,h,c)}function ji(n,u,h,c){if(n>>>=0,h>>>=0,c>>>=0,m===void 0)return 6;var f=[];return p&&f.length===0?Fi(n,u>>>=0,h,c):(n={ce:h,xd:n,Fd:c,Ld:f},p?(n.yd="spawnThread",postMessage(n,f),0):Ui(n))}var Ki=typeof TextDecoder<"u"?new TextDecoder:void 0,Qi=(n,u=0,h=NaN)=>{var c=(u>>>=0)+h;for(h=u;n[h]&&!(h>=c);)++h;if(16<h-u&&n.buffer&&Ki)return Ki.decode(n.buffer instanceof ArrayBuffer?n.subarray(u,h):n.slice(u,h));for(c="";u<h;){var f=n[u++];if(128&f){var x=63&n[u++];if((224&f)==192)c+=String.fromCharCode((31&f)<<6|x);else{var I=63&n[u++];65536>(f=(240&f)==224?(15&f)<<12|x<<6|I:(7&f)<<18|x<<12|I<<6|63&n[u++])?c+=String.fromCharCode(f):(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|1023&f))}}else c+=String.fromCharCode(f)}return c},Ce=(n,u)=>(n>>>=0)?Qi(U(),n,u):"";function Zi(n,u,h){return p?ve(3,1,n,u,h):0}function Xi(n,u){if(p)return ve(4,1,n,u)}var Ji=n=>{for(var u=0,h=0;h<n.length;++h){var c=n.charCodeAt(h);127>=c?u++:2047>=c?u+=2:55296<=c&&57343>=c?(u+=4,++h):u+=3}return u},St=(n,u,h)=>{var c=U();if(u>>>=0,0<h){var f=u;h=u+h-1;for(var x=0;x<n.length;++x){var I=n.charCodeAt(x);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&n.charCodeAt(++x)),127>=I){if(u>=h)break;c[u++>>>0]=I}else{if(2047>=I){if(u+1>=h)break;c[u++>>>0]=192|I>>6}else{if(65535>=I){if(u+2>=h)break;c[u++>>>0]=224|I>>12}else{if(u+3>=h)break;c[u++>>>0]=240|I>>18,c[u++>>>0]=128|I>>12&63}c[u++>>>0]=128|I>>6&63}c[u++>>>0]=128|63&I}}c[u>>>0]=0,n=u-f}else n=0;return n};function Yi(n,u){if(p)return ve(5,1,n,u)}function ea(n,u,h){if(p)return ve(6,1,n,u,h)}function ta(n,u,h){return p?ve(7,1,n,u,h):0}function ra(n,u){if(p)return ve(8,1,n,u)}function ia(n,u,h){if(p)return ve(9,1,n,u,h)}function aa(n,u,h,c){if(p)return ve(10,1,n,u,h,c)}function na(n,u,h,c){if(p)return ve(11,1,n,u,h,c)}function sa(n,u,h,c){if(p)return ve(12,1,n,u,h,c)}function oa(n){if(p)return ve(13,1,n)}function ua(n,u){if(p)return ve(14,1,n,u)}function la(n,u,h){if(p)return ve(15,1,n,u,h)}var da,lt,Eo=()=>Xe(""),Ke=n=>{for(var u="";U()[n>>>0];)u+=da[U()[n++>>>0]];return u},Pr={},Ur={};function Je(n,u,h={}){return function(c,f,x={}){var I=f.name;if(!c)throw new lt(`type "${I}" must have a positive integer typeid pointer`);if(Ur.hasOwnProperty(c)){if(x.Pd)return;throw new lt(`Cannot register type '${I}' twice`)}Ur[c]=f,Pr.hasOwnProperty(c)&&(f=Pr[c],delete Pr[c],f.forEach(A=>A()))}(n,u,h)}var pa=(n,u,h)=>{switch(u){case 1:return h?c=>B()[c>>>0]:c=>U()[c>>>0];case 2:return h?c=>se()[c>>>1>>>0]:c=>$e()[c>>>1>>>0];case 4:return h?c=>N()[c>>>2>>>0]:c=>ue()[c>>>2>>>0];case 8:return h?c=>Z[c>>>3]:c=>W[c>>>3];default:throw new TypeError(`invalid integer width (${u}): ${n}`)}};function zo(n,u,h){h>>>=0,Je(n>>>=0,{name:u=Ke(u>>>0),fromWireType:c=>c,toWireType:function(c,f){if(typeof f!="bigint"&&typeof f!="number")throw f=f===null?"null":(c=typeof f)=="object"||c==="array"||c==="function"?f.toString():""+f,new TypeError(`Cannot convert "${f}" to ${this.name}`);return typeof f=="number"&&(f=BigInt(f)),f},zd:dt,readValueFromPointer:pa(u,h,u.indexOf("u")==-1),Ad:null})}var dt=8;function Ao(n,u,h,c){Je(n>>>=0,{name:u=Ke(u>>>0),fromWireType:function(f){return!!f},toWireType:function(f,x){return x?h:c},zd:dt,readValueFromPointer:function(f){return this.fromWireType(U()[f>>>0])},Ad:null})}var Wr=[],Ye=[];function qr(n){9<(n>>>=0)&&--Ye[n+1]==0&&(Ye[n]=void 0,Wr.push(n))}var Pe=n=>{if(!n)throw new lt("Cannot use deleted val. handle = "+n);return Ye[n]},Ve=n=>{switch(n){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let u=Wr.pop()||Ye.length;return Ye[u]=n,Ye[u+1]=1,u}};function Vr(n){return this.fromWireType(ue()[n>>>2>>>0])}var Oo={name:"emscripten::val",fromWireType:n=>{var u=Pe(n);return qr(n),u},toWireType:(n,u)=>Ve(u),zd:dt,readValueFromPointer:Vr,Ad:null};function Ro(n){return Je(n>>>0,Oo)}var Bo=(n,u)=>{switch(u){case 4:return function(h){return this.fromWireType(qe()[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(De()[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${u}): ${n}`)}};function No(n,u,h){h>>>=0,Je(n>>>=0,{name:u=Ke(u>>>0),fromWireType:c=>c,toWireType:(c,f)=>f,zd:dt,readValueFromPointer:Bo(u,h),Ad:null})}function Mo(n,u,h,c,f){if(n>>>=0,h>>>=0,u=Ke(u>>>0),f===-1&&(f=4294967295),f=A=>A,c===0){var x=32-8*h;f=A=>A<<x>>>x}var I=u.includes("unsigned")?function(A,O){return O>>>0}:function(A,O){return O};Je(n,{name:u,fromWireType:f,toWireType:I,zd:dt,readValueFromPointer:pa(u,h,c!==0),Ad:null})}function Do(n,u,h){function c(x){var I=ue()[x>>>2>>>0];return x=ue()[x+4>>>2>>>0],new f(B().buffer,x,I)}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][u];Je(n>>>=0,{name:h=Ke(h>>>0),fromWireType:c,zd:dt,readValueFromPointer:c},{Pd:!0})}function Po(n,u){Je(n>>>=0,{name:u=Ke(u>>>0),fromWireType:function(h){for(var c,f=ue()[h>>>2>>>0],x=h+4,I=x,A=0;A<=f;++A){var O=x+A;A!=f&&U()[O>>>0]!=0||(I=Ce(I,O-I),c===void 0?c=I:(c+="\0",c+=I),I=O+1)}return Ze(h),c},toWireType:function(h,c){c instanceof ArrayBuffer&&(c=new Uint8Array(c));var f=typeof c=="string";if(!(f||c instanceof Uint8Array||c instanceof Uint8ClampedArray||c instanceof Int8Array))throw new lt("Cannot pass non-string to std::string");var x=f?Ji(c):c.length,I=gr(4+x+1),A=I+4;if(ue()[I>>>2>>>0]=x,f)St(c,A,x+1);else if(f)for(f=0;f<x;++f){var O=c.charCodeAt(f);if(255<O)throw Ze(I),new lt("String has UTF-16 code units that do not fit in 8 bits");U()[A+f>>>0]=O}else for(f=0;f<x;++f)U()[A+f>>>0]=c[f];return h!==null&&h.push(Ze,I),I},zd:dt,readValueFromPointer:Vr,Ad(h){Ze(h)}})}var ha=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Uo=(n,u)=>{for(var h=n>>1,c=h+u/2;!(h>=c)&&$e()[h>>>0];)++h;if(32<(h<<=1)-n&&ha)return ha.decode(U().slice(n,h));for(h="",c=0;!(c>=u/2);++c){var f=se()[n+2*c>>>1>>>0];if(f==0)break;h+=String.fromCharCode(f)}return h},Wo=(n,u,h)=>{if(h??(h=2147483647),2>h)return 0;var c=u;h=(h-=2)<2*n.length?h/2:n.length;for(var f=0;f<h;++f){var x=n.charCodeAt(f);se()[u>>>1>>>0]=x,u+=2}return se()[u>>>1>>>0]=0,u-c},qo=n=>2*n.length,Vo=(n,u)=>{for(var h=0,c="";!(h>=u/4);){var f=N()[n+4*h>>>2>>>0];if(f==0)break;++h,65536<=f?(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|1023&f)):c+=String.fromCharCode(f)}return c},Lo=(n,u,h)=>{if(u>>>=0,h??(h=2147483647),4>h)return 0;var c=u;h=c+h-4;for(var f=0;f<n.length;++f){var x=n.charCodeAt(f);if(55296<=x&&57343>=x&&(x=65536+((1023&x)<<10)|1023&n.charCodeAt(++f)),N()[u>>>2>>>0]=x,(u+=4)+4>h)break}return N()[u>>>2>>>0]=0,u-c},Go=n=>{for(var u=0,h=0;h<n.length;++h){var c=n.charCodeAt(h);55296<=c&&57343>=c&&++h,u+=4}return u};function Ho(n,u,h){if(n>>>=0,u>>>=0,h=Ke(h>>>=0),u===2)var c=Uo,f=Wo,x=qo,I=A=>$e()[A>>>1>>>0];else u===4&&(c=Vo,f=Lo,x=Go,I=A=>ue()[A>>>2>>>0]);Je(n,{name:h,fromWireType:A=>{for(var O,D=ue()[A>>>2>>>0],V=A+4,Q=0;Q<=D;++Q){var ne=A+4+Q*u;Q!=D&&I(ne)!=0||(V=c(V,ne-V),O===void 0?O=V:(O+="\0",O+=V),V=ne+u)}return Ze(A),O},toWireType:(A,O)=>{if(typeof O!="string")throw new lt(`Cannot pass non-string to C++ string type ${h}`);var D=x(O),V=gr(4+D+u);return ue()[V>>>2>>>0]=D/u,f(O,V+4,D+u),A!==null&&A.push(Ze,V),V},zd:dt,readValueFromPointer:Vr,Ad(A){Ze(A)}})}function Fo(n,u){Je(n>>>=0,{Qd:!0,name:u=Ke(u>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function jo(n){Zr(n>>>0,!d,1,!l,131072,!1),Li()}var Lr=n=>{if(!H)try{if(n(),!(0<ot))try{p?Xr(z):Nr(z)}catch(u){u instanceof Or||u=="unwind"||w(0,u)}}catch(u){u instanceof Or||u=="unwind"||w(0,u)}};function Gr(n){n>>>=0,typeof Atomics.ge=="function"&&(Atomics.ge(N(),n>>>2,n).value.then(or),n+=128,Atomics.store(N(),n>>>2,1))}var or=()=>{var n=mr();n&&(Gr(n),Lr(Va))};function Ko(n,u){(n>>>=0)==u>>>0?setTimeout(or):p?postMessage({Ed:n,yd:"checkMailbox"}):(n=_t[n])&&n.postMessage({yd:"checkMailbox"})}var Hr=[];function Qo(n,u,h,c,f){for(u>>>=0,c/=2,Hr.length=c,h=f>>>0>>>3,f=0;f<c;f++)Hr[f]=Z[h+2*f]?Z[h+2*f+1]:De()[h+2*f+1>>>0];return(u?Ar[u]:qu[n])(...Hr)}var Zo=()=>{ot=0};function Xo(n){n>>>=0,p?postMessage({yd:"cleanupThread",ee:n}):Vi(_t[n])}function Jo(n){}var ur=(n,u)=>{var h=Ur[n];if(h===void 0)throw n=Ma(n),h=Ke(n),Ze(n),new lt(`${u} has unknown type ${h}`);return h},ca=(n,u,h)=>{var c=[];return n=n.toWireType(c,h),c.length&&(ue()[u>>>2>>>0]=Ve(c)),n};function Yo(n,u,h){return u>>>=0,h>>>=0,n=Pe(n>>>0),u=ur(u,"emval::as"),ca(u,h,n)}function eu(n,u){return u>>>=0,n=Pe(n>>>0),(u=ur(u,"emval::as")).toWireType(null,n)}var lr=n=>{try{n()}catch(u){Xe(u)}},pt=0,Qe=null,fa=0,dr=[],ma={},ga={},tu=0,Fr=null,ru=[];function ya(n){return function(u){if(!H){if(pt===0){var h=!1,c=!1;u((f=0)=>{if(!H&&(fa=f,h=!0,c)){pt=2,lr(()=>qn(Qe)),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.resume(),f=!1;try{var x=function(){var O=N()[Qe+8>>>2>>>0];return O=M[ga[O]],--ot,O()}()}catch(O){x=O,f=!0}var I=!1;if(!Qe){var A=Fr;A&&(Fr=null,(f?A.reject:A.resolve)(x),I=!0)}if(f&&!I)throw x}}),c=!0,h||(pt=1,Qe=function(){var f=gr(65548),x=f+12;ue()[f>>>2>>>0]=x,ue()[f+4>>>2>>>0]=x+65536,x=dr[0];var I=ma[x];return I===void 0&&(I=tu++,ma[x]=I,ga[I]=x),x=I,N()[f+8>>>2>>>0]=x,f}(),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.pause(),lr(()=>Un(Qe)))}else pt===2?(pt=0,lr(Vn),Ze(Qe),Qe=null,ru.forEach(Lr)):Xe(`invalid state: ${pt}`);return fa}}(u=>{n().then(u)})}function iu(n){return n>>>=0,ya(async()=>{var u=await Pe(n);return Ve(u)})}var pr=[];function au(n,u,h,c){return h>>>=0,c>>>=0,(n=pr[n>>>0])(null,u=Pe(u>>>0),h,c)}var nu={},hr=n=>{var u=nu[n];return u===void 0?Ke(n):u};function su(n,u,h,c,f){return h>>>=0,c>>>=0,f>>>=0,(n=pr[n>>>0])(u=Pe(u>>>0),u[h=hr(h)],c,f)}var _a=()=>typeof globalThis=="object"?globalThis:Function("return this")();function ou(n){return(n>>>=0)==0?Ve(_a()):(n=hr(n),Ve(_a()[n]))}var uu=n=>{var u=pr.length;return pr.push(n),u},lu=(n,u)=>{for(var h=Array(n),c=0;c<n;++c)h[c]=ur(ue()[u+4*c>>>2>>>0],"parameter "+c);return h},$a=(n,u)=>Object.defineProperty(u,"name",{value:n});function du(n,u,h){var c=(u=lu(n,u>>>0)).shift();n--;var f=`return function (obj, func, destructorsRef, args) {
`,x=0,I=[];h===0&&I.push("obj");for(var A=["retType"],O=[c],D=0;D<n;++D)I.push("arg"+D),A.push("argType"+D),O.push(u[D]),f+=`  var arg${D} = argType${D}.readValueFromPointer(args${x?"+"+x:""});
`,x+=u[D].zd;return f+=`  var rv = ${h===1?"new func":"func.call"}(${I.join(", ")});
`,c.Qd||(A.push("emval_returnValue"),O.push(ca),f+=`  return emval_returnValue(retType, destructorsRef, rv);
`),A.push(f+`};
`),n=function(V){var Q=Function;if(!(Q instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof Q} which is not a function`);var ne=$a(Q.name||"unknownFunctionName",function(){});return ne.prototype=Q.prototype,ne=new ne,(V=Q.apply(ne,V))instanceof Object?V:ne}(A)(...O),h=`methodCaller<(${u.map(V=>V.name).join(", ")}) => ${c.name}>`,uu($a(h,n))}function pu(n){return n=hr(n>>>0),Ve(i[n])}function hu(n,u){return u>>>=0,n=Pe(n>>>0),u=Pe(u),Ve(n[u])}function cu(n){9<(n>>>=0)&&(Ye[n+1]+=1)}function fu(){return Ve([])}function mu(n){n=Pe(n>>>0);for(var u=Array(n.length),h=0;h<n.length;h++)u[h]=n[h];return Ve(u)}function gu(n){return Ve(hr(n>>>0))}function yu(){return Ve({})}function _u(n){for(var u=Pe(n>>>=0);u.length;){var h=u.pop();u.pop()(h)}qr(n)}function $u(n,u,h){u>>>=0,h>>>=0,n=Pe(n>>>0),u=Pe(u),h=Pe(h),n[u]=h}function wu(n,u){return u>>>=0,n=(n=ur(n>>>0,"_emval_take_value")).readValueFromPointer(u),Ve(n)}function bu(n,u){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),u>>>=0,n=new Date(1e3*n),N()[u>>>2>>>0]=n.getUTCSeconds(),N()[u+4>>>2>>>0]=n.getUTCMinutes(),N()[u+8>>>2>>>0]=n.getUTCHours(),N()[u+12>>>2>>>0]=n.getUTCDate(),N()[u+16>>>2>>>0]=n.getUTCMonth(),N()[u+20>>>2>>>0]=n.getUTCFullYear()-1900,N()[u+24>>>2>>>0]=n.getUTCDay(),n=(n.getTime()-Date.UTC(n.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,N()[u+28>>>2>>>0]=n}var wa=n=>n%4==0&&(n%100!=0||n%400==0),ba=[0,31,60,91,121,152,182,213,244,274,305,335],va=[0,31,59,90,120,151,181,212,243,273,304,334];function vu(n,u){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),u>>>=0,n=new Date(1e3*n),N()[u>>>2>>>0]=n.getSeconds(),N()[u+4>>>2>>>0]=n.getMinutes(),N()[u+8>>>2>>>0]=n.getHours(),N()[u+12>>>2>>>0]=n.getDate(),N()[u+16>>>2>>>0]=n.getMonth(),N()[u+20>>>2>>>0]=n.getFullYear()-1900,N()[u+24>>>2>>>0]=n.getDay();var h=(wa(n.getFullYear())?ba:va)[n.getMonth()]+n.getDate()-1|0;N()[u+28>>>2>>>0]=h,N()[u+36>>>2>>>0]=-60*n.getTimezoneOffset(),h=new Date(n.getFullYear(),6,1).getTimezoneOffset();var c=new Date(n.getFullYear(),0,1).getTimezoneOffset();n=0|(h!=c&&n.getTimezoneOffset()==Math.min(c,h)),N()[u+32>>>2>>>0]=n}function xu(n){n>>>=0;var u=new Date(N()[n+20>>>2>>>0]+1900,N()[n+16>>>2>>>0],N()[n+12>>>2>>>0],N()[n+8>>>2>>>0],N()[n+4>>>2>>>0],N()[n>>>2>>>0],0),h=N()[n+32>>>2>>>0],c=u.getTimezoneOffset(),f=new Date(u.getFullYear(),6,1).getTimezoneOffset(),x=new Date(u.getFullYear(),0,1).getTimezoneOffset(),I=Math.min(x,f);return 0>h?N()[n+32>>>2>>>0]=+(f!=x&&I==c):0<h!=(I==c)&&(f=Math.max(x,f),u.setTime(u.getTime()+6e4*((0<h?I:f)-c))),N()[n+24>>>2>>>0]=u.getDay(),h=(wa(u.getFullYear())?ba:va)[u.getMonth()]+u.getDate()-1|0,N()[n+28>>>2>>>0]=h,N()[n>>>2>>>0]=u.getSeconds(),N()[n+4>>>2>>>0]=u.getMinutes(),N()[n+8>>>2>>>0]=u.getHours(),N()[n+12>>>2>>>0]=u.getDate(),N()[n+16>>>2>>>0]=u.getMonth(),N()[n+20>>>2>>>0]=u.getYear(),n=u.getTime(),BigInt(isNaN(n)?-1:n/1e3)}function xa(n,u,h,c,f,x,I){return p?ve(16,1,n,u,h,c,f,x,I):-52}function Sa(n,u,h,c,f,x){if(p)return ve(17,1,n,u,h,c,f,x)}var Pt={},Su=()=>performance.timeOrigin+performance.now();function ka(n,u){if(p)return ve(18,1,n,u);if(Pt[n]&&(clearTimeout(Pt[n].id),delete Pt[n]),!u)return 0;var h=setTimeout(()=>{delete Pt[n],Lr(()=>qa(n,performance.timeOrigin+performance.now()))},u);return Pt[n]={id:h,ke:u},0}function ku(n,u,h,c){n>>>=0,u>>>=0,h>>>=0,c>>>=0;var f=new Date().getFullYear(),x=new Date(f,0,1).getTimezoneOffset();f=new Date(f,6,1).getTimezoneOffset();var I=Math.max(x,f);ue()[n>>>2>>>0]=60*I,N()[u>>>2>>>0]=+(x!=f),n=(u=A=>{var O=Math.abs(A);return`UTC${0<=A?"-":"+"}${String(Math.floor(O/60)).padStart(2,"0")}${String(O%60).padStart(2,"0")}`})(x),u=u(f),f<x?(St(n,h,17),St(u,c,17)):(St(n,c,17),St(u,h,17))}var Tu=()=>Date.now();function Cu(n,u,h){return 0<=n&&3>=n?(n===0?n=Date.now():n=performance.timeOrigin+performance.now(),Z[h>>>0>>>3]=BigInt(Math.round(1e6*n)),0):28}var jr=[],Ta=(n,u)=>{jr.length=0;for(var h;h=U()[n++>>>0];){var c=h!=105;u+=(c&=h!=112)&&u%8?4:0,jr.push(h==112?ue()[u>>>2>>>0]:h==106?Z[u>>>3]:h==105?N()[u>>>2>>>0]:De()[u>>>3>>>0]),u+=c?8:4}return jr};function Iu(n,u,h){return n>>>=0,u=Ta(u>>>0,h>>>0),Ar[n](...u)}function Eu(n,u,h){return n>>>=0,u=Ta(u>>>0,h>>>0),Ar[n](...u)}var zu=()=>{};function Au(n,u){return k(Ce(n>>>0,u>>>0))}var Ou=()=>{throw ot+=1,"unwind"};function Ru(){return 4294901760}var Bu=()=>navigator.hardwareConcurrency;function Nu(){return Xe("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Mu(n){n>>>=0;var u=U().length;if(n<=u||4294901760<n)return!1;for(var h=1;4>=h;h*=2){var c=u*(1+.2/h);c=Math.min(c,n+100663296);e:{c=(Math.min(4294901760,65536*Math.ceil(Math.max(n,c)/65536))-C.buffer.byteLength+65535)/65536|0;try{C.grow(c),me();var f=1;break e}catch{}f=void 0}if(f)return!0}return!1}var cr=()=>(Xe("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Ut={},Ca=n=>{n.forEach(u=>{cr()})};function Du(){var n=Error().stack.toString().split(`
`);return n[0]=="Error"&&n.shift(),Ca(n),Ut.Kd=cr(),Ut.ae=n,Ut.Kd}function Pu(n,u,h){if(n>>>=0,u>>>=0,Ut.Kd==n)var c=Ut.ae;else(c=Error().stack.toString().split(`
`))[0]=="Error"&&c.shift(),Ca(c);for(var f=3;c[f]&&cr()!=n;)++f;for(n=0;n<h&&c[n+f];++n)N()[u+4*n>>>2>>>0]=cr();return n}var Kr,Qr={},Ia=()=>{if(!Kr){var n,u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(n in Qr)Qr[n]===void 0?delete u[n]:u[n]=Qr[n];var h=[];for(n in u)h.push(`${n}=${u[n]}`);Kr=h}return Kr};function Ea(n,u){if(p)return ve(19,1,n,u);n>>>=0,u>>>=0;var h=0;return Ia().forEach((c,f)=>{var x=u+h;for(f=ue()[n+4*f>>>2>>>0]=x,x=0;x<c.length;++x)B()[f++>>>0]=c.charCodeAt(x);B()[f>>>0]=0,h+=c.length+1}),0}function za(n,u){if(p)return ve(20,1,n,u);n>>>=0,u>>>=0;var h=Ia();ue()[n>>>2>>>0]=h.length;var c=0;return h.forEach(f=>c+=f.length+1),ue()[u>>>2>>>0]=c,0}function Aa(n){return p?ve(21,1,n):52}function Oa(n,u,h,c){return p?ve(22,1,n,u,h,c):52}function Ra(n,u,h,c){return p?ve(23,1,n,u,h,c):70}var Uu=[null,[],[]];function Ba(n,u,h,c){if(p)return ve(24,1,n,u,h,c);u>>>=0,h>>>=0,c>>>=0;for(var f=0,x=0;x<h;x++){var I=ue()[u>>>2>>>0],A=ue()[u+4>>>2>>>0];u+=8;for(var O=0;O<A;O++){var D=U()[I+O>>>0],V=Uu[n];D===0||D===10?((n===1?T:k)(Qi(V)),V.length=0):V.push(D)}f+=A}return ue()[c>>>2>>>0]=f,0}function Wu(n){return n>>>0}p||function(){for(var n=i.numThreads-1;n--;)Hi();Rr.unshift(()=>{yt++,function(u){p?u():Promise.all(ut.map(Gi)).then(u)}(()=>Mi())})}();for(var Na=Array(256),fr=0;256>fr;++fr)Na[fr]=String.fromCharCode(fr);da=Na,lt=i.BindingError=class extends Error{constructor(n){super(n),this.name="BindingError"}},i.InternalError=class extends Error{constructor(n){super(n),this.name="InternalError"}},Ye.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>Ye.length/2-5-Wr.length;var M,qu=[Br,Wi,Fi,Zi,Xi,Yi,ea,ta,ra,ia,aa,na,sa,oa,ua,la,xa,Sa,ka,Ea,za,Aa,Oa,Ra,Ba];(async function(){function n(c,f){return M=c.exports,M=function(){var x=M,I={};for(let[A,O]of Object.entries(x))I[A]=typeof O=="function"?(...D)=>{dr.push(A);try{return O(...D)}finally{H||(dr.pop(),Qe&&pt===1&&dr.length===0&&(pt=0,ot+=1,lr(Wn),typeof Fibers<"u"&&Fibers.le()))}}:O;return I}(),M=function(){var x=M,I=O=>D=>O(D)>>>0,A=O=>()=>O()>>>0;return(x=Object.assign({},x)).Cb=I(x.Cb),x.fc=A(x.fc),x.ic=I(x.ic),x.vc=I(x.vc),x.wc=A(x.wc),x.Ac=I(x.Ac),x}(),qi.push(M.jc),E=f,Mi(),M}yt++;var u=Di();if(i.instantiateWasm)return new Promise(c=>{i.instantiateWasm(u,(f,x)=>{n(f,x),c(f.exports)})});if(p)return new Promise(c=>{gt=f=>{var x=new WebAssembly.Instance(f,Di());c(n(x,f))}});Nt??(Nt=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",S):S+"ort-wasm-simd-threaded.jsep.wasm":new URL("/beandex/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href);try{var h=await async function(c){var f=Nt;if(!ce&&typeof WebAssembly.instantiateStreaming=="function"&&!fe(f))try{var x=fetch(f,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(x,c)}catch(I){k(`wasm streaming compile failed: ${I}`),k("falling back to ArrayBuffer instantiation")}return async function(I,A){try{var O=await async function(D){if(!ce)try{var V=await y(D);return new Uint8Array(V)}catch{}if(D==Nt&&ce)D=new Uint8Array(ce);else{if(!_)throw"both async and sync fetching of the wasm failed";D=_(D)}return D}(I);return await WebAssembly.instantiate(O,A)}catch(D){k(`failed to asynchronously prepare wasm: ${D}`),Xe(D)}}(f,c)}(u);return n(h.instance,h.module)}catch(c){return s(c),Promise.reject(c)}})();var Ma=n=>(Ma=M.Cb)(n),Da=()=>(Da=M.Db)();i._OrtInit=(n,u)=>(i._OrtInit=M.Eb)(n,u),i._OrtGetLastError=(n,u)=>(i._OrtGetLastError=M.Fb)(n,u),i._OrtCreateSessionOptions=(n,u,h,c,f,x,I,A,O,D)=>(i._OrtCreateSessionOptions=M.Gb)(n,u,h,c,f,x,I,A,O,D),i._OrtAppendExecutionProvider=(n,u)=>(i._OrtAppendExecutionProvider=M.Hb)(n,u),i._OrtAddFreeDimensionOverride=(n,u,h)=>(i._OrtAddFreeDimensionOverride=M.Ib)(n,u,h),i._OrtAddSessionConfigEntry=(n,u,h)=>(i._OrtAddSessionConfigEntry=M.Jb)(n,u,h),i._OrtReleaseSessionOptions=n=>(i._OrtReleaseSessionOptions=M.Kb)(n),i._OrtCreateSession=(n,u,h)=>(i._OrtCreateSession=M.Lb)(n,u,h),i._OrtReleaseSession=n=>(i._OrtReleaseSession=M.Mb)(n),i._OrtGetInputOutputCount=(n,u,h)=>(i._OrtGetInputOutputCount=M.Nb)(n,u,h),i._OrtGetInputName=(n,u)=>(i._OrtGetInputName=M.Ob)(n,u),i._OrtGetOutputName=(n,u)=>(i._OrtGetOutputName=M.Pb)(n,u),i._OrtFree=n=>(i._OrtFree=M.Qb)(n),i._OrtCreateTensor=(n,u,h,c,f,x)=>(i._OrtCreateTensor=M.Rb)(n,u,h,c,f,x),i._OrtGetTensorData=(n,u,h,c,f)=>(i._OrtGetTensorData=M.Sb)(n,u,h,c,f),i._OrtReleaseTensor=n=>(i._OrtReleaseTensor=M.Tb)(n),i._OrtCreateRunOptions=(n,u,h,c)=>(i._OrtCreateRunOptions=M.Ub)(n,u,h,c),i._OrtAddRunConfigEntry=(n,u,h)=>(i._OrtAddRunConfigEntry=M.Vb)(n,u,h),i._OrtReleaseRunOptions=n=>(i._OrtReleaseRunOptions=M.Wb)(n),i._OrtCreateBinding=n=>(i._OrtCreateBinding=M.Xb)(n),i._OrtBindInput=(n,u,h)=>(i._OrtBindInput=M.Yb)(n,u,h),i._OrtBindOutput=(n,u,h,c)=>(i._OrtBindOutput=M.Zb)(n,u,h,c),i._OrtClearBoundOutputs=n=>(i._OrtClearBoundOutputs=M._b)(n),i._OrtReleaseBinding=n=>(i._OrtReleaseBinding=M.$b)(n),i._OrtRunWithBinding=(n,u,h,c,f)=>(i._OrtRunWithBinding=M.ac)(n,u,h,c,f),i._OrtRun=(n,u,h,c,f,x,I,A)=>(i._OrtRun=M.bc)(n,u,h,c,f,x,I,A),i._OrtEndProfiling=n=>(i._OrtEndProfiling=M.cc)(n),i._JsepOutput=(n,u,h)=>(i._JsepOutput=M.dc)(n,u,h),i._JsepGetNodeName=n=>(i._JsepGetNodeName=M.ec)(n);var mr=()=>(mr=M.fc)(),Ze=i._free=n=>(Ze=i._free=M.gc)(n),gr=i._malloc=n=>(gr=i._malloc=M.ic)(n),Zr=(n,u,h,c,f,x)=>(Zr=M.kc)(n,u,h,c,f,x),Pa=()=>(Pa=M.lc)(),Ua=(n,u,h,c,f)=>(Ua=M.mc)(n,u,h,c,f),Wa=n=>(Wa=M.nc)(n),Xr=n=>(Xr=M.oc)(n),qa=(n,u)=>(qa=M.pc)(n,u),Va=()=>(Va=M.qc)(),ae=(n,u)=>(ae=M.rc)(n,u),Wt=n=>(Wt=M.sc)(n),La=(n,u)=>(La=M.tc)(n,u),Y=n=>(Y=M.uc)(n),Jr=n=>(Jr=M.vc)(n),re=()=>(re=M.wc)(),Ga=n=>(Ga=M.xc)(n),Ha=n=>(Ha=M.yc)(n),Fa=(n,u,h)=>(Fa=M.zc)(n,u,h),ja=n=>(ja=M.Ac)(n),Ka=i.dynCall_iii=(n,u,h)=>(Ka=i.dynCall_iii=M.Bc)(n,u,h),Qa=i.dynCall_vi=(n,u)=>(Qa=i.dynCall_vi=M.Cc)(n,u),Yr=i.dynCall_ii=(n,u)=>(Yr=i.dynCall_ii=M.Dc)(n,u),Za=i.dynCall_vii=(n,u,h)=>(Za=i.dynCall_vii=M.Ec)(n,u,h),Xa=i.dynCall_iiii=(n,u,h,c)=>(Xa=i.dynCall_iiii=M.Fc)(n,u,h,c),Ja=i.dynCall_viii=(n,u,h,c)=>(Ja=i.dynCall_viii=M.Gc)(n,u,h,c),Ya=i.dynCall_iiiii=(n,u,h,c,f)=>(Ya=i.dynCall_iiiii=M.Hc)(n,u,h,c,f),en=i.dynCall_viiii=(n,u,h,c,f)=>(en=i.dynCall_viiii=M.Ic)(n,u,h,c,f),tn=i.dynCall_viiiiii=(n,u,h,c,f,x,I)=>(tn=i.dynCall_viiiiii=M.Jc)(n,u,h,c,f,x,I),rn=i.dynCall_viiiiiii=(n,u,h,c,f,x,I,A)=>(rn=i.dynCall_viiiiiii=M.Kc)(n,u,h,c,f,x,I,A),an=i.dynCall_ji=(n,u)=>(an=i.dynCall_ji=M.Lc)(n,u),nn=i.dynCall_v=n=>(nn=i.dynCall_v=M.Mc)(n),sn=i.dynCall_viiiii=(n,u,h,c,f,x)=>(sn=i.dynCall_viiiii=M.Nc)(n,u,h,c,f,x),on=i.dynCall_i=n=>(on=i.dynCall_i=M.Oc)(n),un=i.dynCall_fii=(n,u,h)=>(un=i.dynCall_fii=M.Pc)(n,u,h),ln=i.dynCall_viiiiiiii=(n,u,h,c,f,x,I,A,O)=>(ln=i.dynCall_viiiiiiii=M.Qc)(n,u,h,c,f,x,I,A,O),dn=i.dynCall_viiiiiiiiii=(n,u,h,c,f,x,I,A,O,D,V)=>(dn=i.dynCall_viiiiiiiiii=M.Rc)(n,u,h,c,f,x,I,A,O,D,V),pn=i.dynCall_jiii=(n,u,h,c)=>(pn=i.dynCall_jiii=M.Sc)(n,u,h,c),hn=i.dynCall_dii=(n,u,h)=>(hn=i.dynCall_dii=M.Tc)(n,u,h),cn=i.dynCall_viiiiiiiii=(n,u,h,c,f,x,I,A,O,D)=>(cn=i.dynCall_viiiiiiiii=M.Uc)(n,u,h,c,f,x,I,A,O,D),fn=i.dynCall_viiiiiiiiiii=(n,u,h,c,f,x,I,A,O,D,V,Q)=>(fn=i.dynCall_viiiiiiiiiii=M.Vc)(n,u,h,c,f,x,I,A,O,D,V,Q),mn=i.dynCall_iiiiii=(n,u,h,c,f,x)=>(mn=i.dynCall_iiiiii=M.Wc)(n,u,h,c,f,x),gn=i.dynCall_iij=(n,u,h)=>(gn=i.dynCall_iij=M.Xc)(n,u,h),yn=i.dynCall_iiiiiiiiii=(n,u,h,c,f,x,I,A,O,D)=>(yn=i.dynCall_iiiiiiiiii=M.Yc)(n,u,h,c,f,x,I,A,O,D),_n=i.dynCall_iiiiiiiiiii=(n,u,h,c,f,x,I,A,O,D,V)=>(_n=i.dynCall_iiiiiiiiiii=M.Zc)(n,u,h,c,f,x,I,A,O,D,V),$n=i.dynCall_vij=(n,u,h)=>($n=i.dynCall_vij=M._c)(n,u,h),wn=i.dynCall_iiif=(n,u,h,c)=>(wn=i.dynCall_iiif=M.$c)(n,u,h,c),bn=i.dynCall_iiij=(n,u,h,c)=>(bn=i.dynCall_iiij=M.ad)(n,u,h,c),vn=i.dynCall_fiii=(n,u,h,c)=>(vn=i.dynCall_fiii=M.bd)(n,u,h,c),xn=i.dynCall_viiiiiiiiiiiii=(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>(xn=i.dynCall_viiiiiiiiiiiii=M.cd)(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e),Sn=i.dynCall_vjiii=(n,u,h,c,f)=>(Sn=i.dynCall_vjiii=M.dd)(n,u,h,c,f),kn=i.dynCall_vif=(n,u,h)=>(kn=i.dynCall_vif=M.ed)(n,u,h),Tn=i.dynCall_iiiiiii=(n,u,h,c,f,x,I)=>(Tn=i.dynCall_iiiiiii=M.fd)(n,u,h,c,f,x,I),Cn=i.dynCall_iiiij=(n,u,h,c,f)=>(Cn=i.dynCall_iiiij=M.gd)(n,u,h,c,f),In=i.dynCall_iiiiiiii=(n,u,h,c,f,x,I,A)=>(In=i.dynCall_iiiiiiii=M.hd)(n,u,h,c,f,x,I,A),En=i.dynCall_viiiiiiiiiiii=(n,u,h,c,f,x,I,A,O,D,V,Q,ne)=>(En=i.dynCall_viiiiiiiiiiii=M.id)(n,u,h,c,f,x,I,A,O,D,V,Q,ne),zn=i.dynCall_diii=(n,u,h,c)=>(zn=i.dynCall_diii=M.jd)(n,u,h,c),An=i.dynCall_jiiii=(n,u,h,c,f)=>(An=i.dynCall_jiiii=M.kd)(n,u,h,c,f),On=i.dynCall_viiij=(n,u,h,c,f)=>(On=i.dynCall_viiij=M.ld)(n,u,h,c,f),Rn=i.dynCall_fiiii=(n,u,h,c,f)=>(Rn=i.dynCall_fiiii=M.md)(n,u,h,c,f),Bn=i.dynCall_viiif=(n,u,h,c,f)=>(Bn=i.dynCall_viiif=M.nd)(n,u,h,c,f),Nn=i.dynCall_diiii=(n,u,h,c,f)=>(Nn=i.dynCall_diiii=M.od)(n,u,h,c,f),Mn=i.dynCall_viiid=(n,u,h,c,f)=>(Mn=i.dynCall_viiid=M.pd)(n,u,h,c,f),Dn=i.dynCall_iiiijii=(n,u,h,c,f,x,I)=>(Dn=i.dynCall_iiiijii=M.qd)(n,u,h,c,f,x,I),Pn=i.dynCall_iiiiiij=(n,u,h,c,f,x,I)=>(Pn=i.dynCall_iiiiiij=M.rd)(n,u,h,c,f,x,I),Un=n=>(Un=M.sd)(n),Wn=()=>(Wn=M.td)(),qn=n=>(qn=M.ud)(n),Vn=()=>(Vn=M.vd)();function Vu(n,u,h){var c=re();try{Za(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function Lu(n,u,h){var c=re();try{return Ka(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function Gu(n,u){var h=re();try{Qa(n,u)}catch(c){if(Y(h),c!==c+0)throw c;ae(1,0)}}function Hu(n,u){var h=re();try{return Yr(n,u)}catch(c){if(Y(h),c!==c+0)throw c;ae(1,0)}}function Fu(n,u,h,c){var f=re();try{return Xa(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function ju(n,u,h,c,f){var x=re();try{en(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function Ku(n,u,h,c,f){var x=re();try{return Ya(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function Qu(n,u,h,c){var f=re();try{Ja(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function Zu(n,u,h,c,f,x,I){var A=re();try{return Tn(n,u,h,c,f,x,I)}catch(O){if(Y(A),O!==O+0)throw O;ae(1,0)}}function Xu(n){var u=re();try{nn(n)}catch(h){if(Y(u),h!==h+0)throw h;ae(1,0)}}function Ju(n,u,h){var c=re();try{return gn(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function Yu(n,u,h,c,f,x){var I=re();try{sn(n,u,h,c,f,x)}catch(A){if(Y(I),A!==A+0)throw A;ae(1,0)}}function el(n,u,h){var c=re();try{$n(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function tl(n,u,h,c,f,x,I){var A=re();try{tn(n,u,h,c,f,x,I)}catch(O){if(Y(A),O!==O+0)throw O;ae(1,0)}}function rl(n,u,h,c,f,x,I,A){var O=re();try{rn(n,u,h,c,f,x,I,A)}catch(D){if(Y(O),D!==D+0)throw D;ae(1,0)}}function il(n,u,h,c,f,x){var I=re();try{return mn(n,u,h,c,f,x)}catch(A){if(Y(I),A!==A+0)throw A;ae(1,0)}}function al(n,u,h,c,f,x,I,A){var O=re();try{return In(n,u,h,c,f,x,I,A)}catch(D){if(Y(O),D!==D+0)throw D;ae(1,0)}}function nl(n,u,h,c,f,x,I,A,O,D){var V=re();try{cn(n,u,h,c,f,x,I,A,O,D)}catch(Q){if(Y(V),Q!==Q+0)throw Q;ae(1,0)}}function sl(n,u,h,c,f,x,I,A,O){var D=re();try{ln(n,u,h,c,f,x,I,A,O)}catch(V){if(Y(D),V!==V+0)throw V;ae(1,0)}}function ol(n){var u=re();try{return on(n)}catch(h){if(Y(u),h!==h+0)throw h;ae(1,0)}}function ul(n,u,h,c,f,x,I,A,O,D){var V=re();try{return yn(n,u,h,c,f,x,I,A,O,D)}catch(Q){if(Y(V),Q!==Q+0)throw Q;ae(1,0)}}function ll(n,u,h){var c=re();try{return un(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function dl(n,u,h,c){var f=re();try{return pn(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;return ae(1,0),0n}}function pl(n,u,h){var c=re();try{return hn(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function hl(n,u,h,c,f,x,I,A,O,D,V,Q){var ne=re();try{fn(n,u,h,c,f,x,I,A,O,D,V,Q)}catch(_e){if(Y(ne),_e!==_e+0)throw _e;ae(1,0)}}function cl(n,u,h,c,f,x,I,A,O,D,V){var Q=re();try{dn(n,u,h,c,f,x,I,A,O,D,V)}catch(ne){if(Y(Q),ne!==ne+0)throw ne;ae(1,0)}}function fl(n,u,h,c,f,x,I,A,O,D,V){var Q=re();try{return _n(n,u,h,c,f,x,I,A,O,D,V)}catch(ne){if(Y(Q),ne!==ne+0)throw ne;ae(1,0)}}function ml(n,u,h,c){var f=re();try{return wn(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function gl(n,u,h,c){var f=re();try{return bn(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function yl(n,u,h,c){var f=re();try{return vn(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function _l(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e){var Le=re();try{xn(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)}catch(qt){if(Y(Le),qt!==qt+0)throw qt;ae(1,0)}}function $l(n,u,h,c,f){var x=re();try{Sn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function wl(n,u,h){var c=re();try{kn(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function bl(n,u){var h=re();try{return an(n,u)}catch(c){if(Y(h),c!==c+0)throw c;return ae(1,0),0n}}function vl(n,u,h,c,f){var x=re();try{return Cn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function xl(n,u,h,c,f,x,I,A,O,D,V,Q,ne){var _e=re();try{En(n,u,h,c,f,x,I,A,O,D,V,Q,ne)}catch(Le){if(Y(_e),Le!==Le+0)throw Le;ae(1,0)}}function Sl(n,u,h,c){var f=re();try{return zn(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function kl(n,u,h,c,f){var x=re();try{return An(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;return ae(1,0),0n}}function Tl(n,u,h,c,f){var x=re();try{On(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function Cl(n,u,h,c,f){var x=re();try{return Rn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function Il(n,u,h,c,f){var x=re();try{Bn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function El(n,u,h,c,f){var x=re();try{return Nn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function zl(n,u,h,c,f){var x=re();try{Mn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function Al(n,u,h,c,f,x,I){var A=re();try{return Dn(n,u,h,c,f,x,I)}catch(O){if(Y(A),O!==O+0)throw O;ae(1,0)}}function Ol(n,u,h,c,f,x,I){var A=re();try{return Pn(n,u,h,c,f,x,I)}catch(O){if(Y(A),O!==O+0)throw O;ae(1,0)}}return i.stackSave=()=>re(),i.stackRestore=n=>Y(n),i.stackAlloc=n=>Jr(n),i.setValue=function(n,u,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":B()[n>>>0]=u;break;case"i16":se()[n>>>1>>>0]=u;break;case"i32":N()[n>>>2>>>0]=u;break;case"i64":Z[n>>>3]=BigInt(u);break;case"float":qe()[n>>>2>>>0]=u;break;case"double":De()[n>>>3>>>0]=u;break;case"*":ue()[n>>>2>>>0]=u;break;default:Xe(`invalid type for setValue: ${h}`)}},i.getValue=function(n,u="i8"){switch(u.endsWith("*")&&(u="*"),u){case"i1":case"i8":return B()[n>>>0];case"i16":return se()[n>>>1>>>0];case"i32":return N()[n>>>2>>>0];case"i64":return Z[n>>>3];case"float":return qe()[n>>>2>>>0];case"double":return De()[n>>>3>>>0];case"*":return ue()[n>>>2>>>0];default:Xe(`invalid type for getValue: ${u}`)}},i.UTF8ToString=Ce,i.stringToUTF8=St,i.lengthBytesUTF8=Ji,function n(){if(0<yt)Mt=n;else if(p)a(i),st();else{for(;0<Rr.length;)Rr.shift()(i);0<yt?Mt=n:(i.calledRun=!0,H||(st(),a(i)))}}(),i.PTR_SIZE=4,o}),D$=Wl,nc=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),nc&&Wl()}),ql,sc,kt,P$,ks,oc,uc,Vl,lc,Ll,U$,Gl,W$,rh=ee(()=>{th(),ql=typeof location>"u"?void 0:location.origin,sc=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL("/beandex/assets/ort.webgpu.bundle.min-CEayb2S6.mjs",import.meta.url).href,ql).href:import.meta.url},kt=sc(),P$=()=>{if(kt&&!kt.startsWith("blob:"))return kt.substring(0,kt.lastIndexOf("/")+1)},ks=(e,t)=>{try{let r=t??kt;return(r?new URL(e,r):new URL(e)).origin===ql}catch{return!1}},oc=(e,t)=>{let r=t??kt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},uc=(e,t)=>`${t??"./"}${e}`,Vl=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},lc=async e=>(await import(e)).default,Ll=(X3(),ro(B$)).default,U$=async()=>{if(!kt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ks(kt))return[void 0,Ll()];let e=await Vl(kt);return[e,Ll(e)]},Gl=(J3(),ro(M$)).default,W$=async(e,t,r)=>{if(!e&&!t&&Gl&&kt&&ks(kt))return[void 0,Gl];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??oc(a,t),i=r&&s&&!ks(s,t),o=i?await Vl(s):s??uc(a,t);return[i?o:void 0,await lc(o)]}}}),Hl,Ts,Hn,Fl,dc,pc,ih,et,vi=ee(()=>{rh(),Ts=!1,Hn=!1,Fl=!1,dc=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},pc=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ih=async e=>{if(Ts)return Promise.resolve();if(Hn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Fl)throw new Error("previous call to 'initializeWebAssembly()' failed.");Hn=!0;let t=e.initTimeout,r=e.numThreads;if(!pc())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=dc();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let s=e.wasmPaths,i=typeof s=="string"?s:void 0,o=s==null?void 0:s.mjs,l=(o==null?void 0:o.href)??o,d=s==null?void 0:s.wasm,p=(d==null?void 0:d.href)??d,m=e.wasmBinary,[g,y]=await W$(l,i,r>1),_=!1,$=[];if(t>0&&$.push(new Promise(w=>{setTimeout(()=>{_=!0,w()},t)})),$.push(new Promise((w,S)=>{let v={numThreads:r};if(m)v.wasmBinary=m;else if(p||i)v.locateFile=b=>p??i+b;else if(l&&l.indexOf("blob:")!==0)v.locateFile=b=>new URL(b,l).href;else if(g){let b=P$();b&&(v.locateFile=T=>b+T)}y(v).then(b=>{Hn=!1,Ts=!0,Hl=b,w(),g&&URL.revokeObjectURL(g)},b=>{Hn=!1,Fl=!0,S(b)})})),await Promise.race($),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},et=()=>{if(Ts&&Hl)return Hl;throw new Error("WebAssembly is not initialized yet.")}}),ht,io,Re,ah=ee(()=>{vi(),ht=(e,t)=>{let r=et(),a=r.lengthBytesUTF8(e)+1,s=r._malloc(a);return r.stringToUTF8(e,s,a),t.push(s),s},io=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([s,i])=>{let o=t?t+s:s;if(typeof i=="object")io(i,o+".",r,a);else if(typeof i=="string"||typeof i=="number")a(o,i.toString());else if(typeof i=="boolean")a(o,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},Re=e=>{let t=et(),r=t.stackSave();try{let a=t.PTR_SIZE,s=t.stackAlloc(2*a);t._OrtGetLastError(s,s+a);let i=Number(t.getValue(s,a===4?"i32":"i64")),o=t.getValue(s+a,"*"),l=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),q$,Y3=ee(()=>{vi(),ah(),q$=e=>{let t=et(),r=0,a=[],s=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)s.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)s.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(s.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=ht(e.tag,a)),r=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,i),r===0&&Re("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&io(e.extra,"",new WeakSet,(o,l)=>{let d=ht(o,a),p=ht(l,a);t._OrtAddRunConfigEntry(r,d,p)!==0&&Re(`Can't set a run config entry: ${o} - ${l}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(o=>t._free(o)),i}}}),hc,cc,fc,mc,V$,eS=ee(()=>{vi(),ah(),hc=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},cc=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},fc=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},mc=(e,t,r)=>{for(let a of t){let s=typeof a=="string"?a:a.name;switch(s){case"webnn":if(s="WEBNN",typeof a!="string"){let o=a==null?void 0:a.deviceType;if(o){let l=ht("deviceType",r),d=ht(o,r);et()._OrtAddSessionConfigEntry(e,l,d)!==0&&Re(`Can't set a session config entry: 'deviceType' - ${o}.`)}}break;case"webgpu":if(s="JS",typeof a!="string"){let o=a;if(o!=null&&o.preferredLayout){if(o.preferredLayout!=="NCHW"&&o.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${o.preferredLayout}`);let l=ht("preferredLayout",r),d=ht(o.preferredLayout,r);et()._OrtAddSessionConfigEntry(e,l,d)!==0&&Re(`Can't set a session config entry: 'preferredLayout' - ${o.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let i=ht(s,r);et()._OrtAppendExecutionProvider(e,i)!==0&&Re(`Can't append execution provider: ${s}.`)}},V$=e=>{let t=et(),r=0,a=[],s=e||{};fc(s);try{let i=hc(s.graphOptimizationLevel??"all"),o=cc(s.executionMode??"sequential"),l=typeof s.logId=="string"?ht(s.logId,a):0,d=s.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=s.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let m=typeof s.optimizedModelFilePath=="string"?ht(s.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(i,!!s.enableCpuMemArena,!!s.enableMemPattern,o,!!s.enableProfiling,0,l,d,p,m),r===0&&Re("Can't create session options."),s.executionProviders&&mc(r,s.executionProviders,a),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);let g=ht("enableGraphCapture",a),y=ht(s.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,g,y)!==0&&Re(`Can't set a session config entry: 'enableGraphCapture' - ${s.enableGraphCapture}.`)}if(s.freeDimensionOverrides)for(let[g,y]of Object.entries(s.freeDimensionOverrides)){if(typeof g!="string")throw new Error(`free dimension override name must be a string: ${g}`);if(typeof y!="number"||!Number.isInteger(y)||y<0)throw new Error(`free dimension override value must be a non-negative integer: ${y}`);let _=ht(g,a);t._OrtAddFreeDimensionOverride(r,_,y)!==0&&Re(`Can't set a free dimension override: ${g} - ${y}.`)}return s.extra!==void 0&&io(s.extra,"",new WeakSet,(g,y)=>{let _=ht(g,a),$=ht(y,a);t._OrtAddSessionConfigEntry(r,_,$)!==0&&Re(`Can't set a session config entry: ${g} - ${y}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Re("Can't release session options."),a.forEach(o=>t._free(o)),i}}}),Ii,li,di,nh,ao,sh,oh,Sp,we=ee(()=>{Ii=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},li=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},di=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((s,i)=>s*i,1);return r>0?Math.ceil(a*r):void 0},nh=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ao=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},sh=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",oh=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Sp=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),uh,L$=ee(()=>{th(),uh=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let s=t.body.getReader(),i;try{i=new ArrayBuffer(a)}catch(l){if(l instanceof RangeError){let d=Math.ceil(a/65536);i=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let o=0;for(;;){let{done:l,value:d}=await s.read();if(l)break;let p=d.byteLength;new Uint8Array(i,o,p).set(d),o+=p}return new Uint8Array(i,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),gc,yc,_c,$c,lh,wc,Ee,$r=ee(()=>{we(),gc=["V","I","W","E","F"],yc=(e,t)=>{console.log(`[${gc[e]},${new Date().toISOString()}]${t}`)},lh=(e,t)=>{_c=e,$c=t},wc=(e,t)=>{let r=ao(e),a=ao(_c);r>=a&&yc(r,typeof t=="function"?t():t)},Ee=(...e)=>{$c&&wc(...e)}}),dh,G$=ee(()=>{we(),dh=(e,t)=>new(nh(t))(e)}),ph=ee(()=>{}),jl,Cs,Is,bc,vc,Kl,kp,xc,H$,tS=ee(()=>{$r(),ph(),jl=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Cs=[],Is=e=>Math.ceil(Number(e)/16)*16,bc=e=>{for(let t=0;t<Cs.length;t++){let r=Cs[t];if(e<=r)return r}return Math.ceil(e/16)*16},vc=1,Kl=()=>vc++,kp=async(e,t,r,a)=>{let s=Is(r),i=e.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,i,0,s),e.flush(),await i.mapAsync(GPUMapMode.READ);let l=i.getMappedRange();if(a){let d=a();return d.set(new Uint8Array(l,0,r)),d}else return new Uint8Array(l.slice(0,r))}finally{i.destroy()}},xc=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of jl)Cs.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,s=t.byteLength,i=Is(s),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==s)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${s}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,a,s)),l.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(l,0,o.gpuData.buffer,0,i),this.backend.device.queue.submit([p.finish()]),l.destroy(),Ee("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let s=Is(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,s)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Kl();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ee("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=bc(e),a,s=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(s||i){let l=(s?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?a=l.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let o={id:Kl(),type:0,buffer:a};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Ee("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ee("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await kp(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=jl.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ee("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},H$=(...e)=>new xc(...e)}),Sc,Ne,Fe=ee(()=>{Sc=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ne=e=>new Sc(e)}),kc,Oi,L,no,F$,j$,K$,xe=ee(()=>{kc=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Oi=class{static calcShape(e,t,r=!1){let a=e.length,s=t.length;if(a===0)return t;if(s===0)return e;let i=Math.max(e.length,t.length),o=new Array(i);if(r){if(a<2||s<2)return;let l=kc.calcMatMulShape([e[a-2],e[a-1]],[t[s-2],t[s-1]]);if(l===void 0)return;[o[i-2],o[i-1]]=l}for(let l=r?3:1;l<=i;l++){let d=a-l<0?1:e[a-l],p=s-l<0?1:t[s-l];if(d!==p&&d>1&&p>1)return;let m=Math.max(d,p);if(d&&p)o[i-l]=Math.max(d,p);else{if(m>1)return;o[i-l]=0}}return o}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let s=1;s<=r;s++)if(e[r-s]!==1&&e[r-s]!==t[a-s])return!1;return!0}},L=class Js{static size(t){return Js.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let s=new Array(a),i=a-1;for(;i>=0;){if(t[i]%r===0){s[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");s[i]=1,r/=t[i],i--}for(i--;i>=0;i--)s[i]=t[i];return s}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Js.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Js.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let s=1;for(let i=r;i<a;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");s*=Number(t[i])}return s}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let s=r-3;s>=0;--s)a[s]=a[s+1]*t[s+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((s,i)=>s+r[i]+r[i+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,s)=>a===r[s])}},no=class ls{static adjustPoolAttributes(t,r,a,s,i,o){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=a.length?a.push(r[l+2]):a[l]=r[l+2];for(let l=0;l<a.length;l++)if(l<s.length){if(s[l]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let l=0;l<a.length;l++)if(l<i.length){if(i[l]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let l=0;l<a.length*2;l++)if(l<o.length){if(o[l]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let l=0;l<a.length;l++){if(a[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[l]>=a[l]||o[l+a.length]>=a[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,s,i,o,l){if(l){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)ls.adjustPadAndReturnShape(t[d+(o?1:2)],r[d],a[d],s[d],i,d,d+t.length-2,l)}}static computePoolOutputShape(t,r,a,s,i,o,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return ls.computeShapeHelper(t,r,d,a,s,i,o,l),d}static computeConvOutputShape(t,r,a,s,i,o,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return ls.computeShapeHelper(!1,t,d,a,s,i,o,l),d}static computeShapeHelper(t,r,a,s,i,o,l,d){if(t)for(let p=0;p<r.length-2;p++)a.push(1);else for(let p=0;p<r.length-2;p++)a.push(ls.adjustPadAndReturnShape(r[p+2],s[p],i[p],o[p],l,p,p+r.length-2,d))}static adjustPadAndReturnShape(t,r,a,s,i,o,l,d){let p=a*(s-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return i[o]=0,i[l]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let m=((t+r-1)/r-1)*r+s-t;return i[o]=Math.floor(d==="SAME_LOWER"?(m+1)/2:m/2),i[l]=m-i[o],Math.floor((t+m-s)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[o]+i[l]-p)/r+1)}},F$=class{static getShapeOfGemmResult(e,t,r,a,s){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,o,l;t?(i=e[1],o=e[0]):(i=e[0],o=e[1]);let d=-1;if(a?(l=r[0],d=1):(l=r[1],d=0),r[d]!==o)throw new Error("dimension mismatch");if(i<=0||l<=0||o<=0)throw new Error("invalid shape specified");if(s&&!Oi.isValidBroadcast(s,[i,l]))throw new Error("gemm: invalid bias shape for broadcast");return[i,l,o]}},j$=-34028234663852886e22,K$=34028234663852886e22}),Ri,Es,rt,ft,ge,Ge,Tp,zi,Cr,pe,Fn,F,le,Q$,hh,Tc,Z$,ke=ee(()=>{we(),xe(),Ri=64,Es=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},rt=(e,t=1)=>{let r=Es(e,t);return typeof r=="string"?r:r[0]},ft=(e,t=1)=>{let r=Es(e,t);return typeof r=="string"?r:r[1]},ge=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:L.computeStrides(r)})}),t},Ge=e=>e%4===0?4:e%2===0?2:1,Tp=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,zi=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Cr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,pe=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Fn=(e,t,r,a,s)=>{let i=typeof r=="number",o=i?r:r.length,l=[...new Array(o).keys()],d=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,p=Es(t,s),m=typeof p=="string"?p:p[1],g=typeof p=="string"?p:p[0],y={indices:d,value:m,storage:g,tensor:t},_=B=>typeof B=="string"?B:`${B}u`,$={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=i?"uniforms.":"",S=`${w}${e}_shape`,v=`${w}${e}_strides`,b="";for(let B=0;B<o-1;B++)b+=`
    let dim${B} = current / ${pe(v,B,o)};
    let rest${B} = current % ${pe(v,B,o)};
    indices[${B}] = dim${B};
    current = rest${B};
    `;b+=`indices[${o-1}] = current;`;let T=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${y.indices} {
    var indices: ${y.indices};
    var current = offset;
    ${b}
    return indices;
  }`,k=B=>($.offsetToIndices=!0,o<2?B:`o2i_${e}(${B})`),C=[];if(o>=2)for(let B=o-1;B>=0;B--)C.push(`${pe(v,B,o)} * (indices[${B}])`);let E=o<2?"":`
  fn i2o_${e}(indices: ${y.indices}) -> u32 {
    return ${C.join("+")};
  }`,z=B=>($.indicesToOffset=!0,o<2?B:`i2o_${e}(${B})`),R=(...B)=>o===0?"0u":`${y.indices}(${B.map(_).join(",")})`,P=(B,U)=>o<2?`${B}`:`${pe(B,U,o)}`,q=(B,U,se)=>o<2?`${B}=${se};`:`${pe(B,U,o)}=${se};`,X={},ie=(B,U)=>{$.broadcastedIndicesToOffset=!0;let se=`${U.name}broadcastedIndicesTo${e}Offset`;if(se in X)return`${se}(${B})`;let $e=[];for(let N=o-1;N>=0;N--){let ue=U.indicesGet("outputIndices",N+U.rank-o);$e.push(`${P(v,N)} * (${ue} % ${P(S,N)})`)}return X[se]=`fn ${se}(outputIndices: ${U.type.indices}) -> u32 {
             return ${$e.length>0?$e.join("+"):"0u"};
           }`,`${se}(${B})`},K=(B,U)=>(()=>{if(y.storage===y.value)return`${e}[${B}]=${U};`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`${e}[${B}]=vec2<u32>(u32(${U}), select(0u, 0xFFFFFFFFu, ${U} < 0));`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`${e}[${B}]=vec2<u32>(u32(${U}), 0u);`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`${e}[${B}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${U}));`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),J=B=>(()=>{if(y.storage===y.value)return`${e}[${B}]`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`i32(${e}[${B}].x)`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`u32(${e}[${B}].x)`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${B}] & 0xFFu), bool(${e}[${B}] & 0xFF00u), bool(${e}[${B}] & 0xFF0000u), bool(${e}[${B}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),Z=o<2?"":`
  fn get_${e}ByIndices(indices: ${y.indices}) -> ${m} {
    return ${J(`i2o_${e}(indices)`)};
  }`,W=o<2?"":(()=>{let B=l.map(se=>`d${se}: u32`).join(", "),U=l.map(se=>`d${se}`).join(", ");return`
  fn get_${e}(${B}) -> ${m} {
    return get_${e}ByIndices(${R(U)});
  }`})(),oe=(...B)=>{if(B.length!==o)throw new Error(`indices length must be ${o}`);let U=B.map(_).join(",");return o===0?J("0u"):o===1?J(U[0]):($.get=!0,$.getByIndices=!0,$.indicesToOffset=!0,`get_${e}(${U})`)},ce=B=>o<2?J(B):($.getByIndices=!0,$.indicesToOffset=!0,`get_${e}ByIndices(${B})`),H=o<2?"":`
  fn set_${e}ByIndices(indices: ${y.indices}, value: ${m}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,fe=o<2?"":(()=>{let B=l.map(se=>`d${se}: u32`).join(", "),U=l.map(se=>`d${se}`).join(", ");return`
  fn set_${e}(${B}, value: ${m}) {
    set_${e}ByIndices(${R(U)}, value);
  }`})();return{impl:()=>{let B=[],U=!1;return $.offsetToIndices&&(B.push(T),U=!0),$.indicesToOffset&&(B.push(E),U=!0),$.broadcastedIndicesToOffset&&(Object.values(X).forEach(se=>B.push(se)),U=!0),$.set&&(B.push(fe),U=!0),$.setByIndices&&(B.push(H),U=!0),$.get&&(B.push(W),U=!0),$.getByIndices&&(B.push(Z),U=!0),!i&&U&&B.unshift(`const ${S} = ${y.indices}(${r.join(",")});`,`const ${v} = ${y.indices}(${L.computeStrides(r).join(",")});`),B.join(`
`)},type:y,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:ie,indices:R,indicesGet:P,indicesSet:q,set:(...B)=>{if(B.length!==o+1)throw new Error(`indices length must be ${o}`);let U=B[o];if(typeof U!="string")throw new Error("value must be string");let se=B.slice(0,o).map(_).join(",");return o===0?K("0u",U):o===1?K(se[0],U):($.set=!0,$.setByIndices=!0,$.indicesToOffset=!0,`set_${e}(${se}, ${U})`)},setByOffset:K,setByIndices:(B,U)=>o<2?K(B,U):($.setByIndices=!0,$.indicesToOffset=!0,`set_${e}ByIndices(${B}, ${U});`),get:oe,getByOffset:J,getByIndices:ce,usage:a,name:e,strides:v,shape:S,rank:o}},F=(e,t,r,a=1)=>Fn(e,t,r,"input",a),le=(e,t,r,a=1)=>Fn(e,t,r,"output",a),Q$=(e,t,r)=>Fn(e,t,r,"atomicOutput",1),hh=(e,t,r,a=1)=>Fn(e,t,r,"internal",a),Tc=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ri){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let s=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=s?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=s?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${i}) {
    ${o}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let s=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${s}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Z$=(e,t)=>new Tc(e,t)}),Cc,Ql,Ic,Ec,zc,Ac,Et,X$,J$,Er=ee(()=>{we(),xe(),Fe(),ke(),Cc=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ql=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ic=(e,t)=>L.sortBasedOnPerm(e,Ql(e.length,t)),Ec=(e,t,r,a)=>{let s=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)s+=`a[${e[i]}]=i[${i}];`;return s+="return a;}"},zc=(e,t)=>{let r=[],a=[];for(let s=0;s<e.length;++s)e[s]!==1&&r.push(e[s]),e[t[s]]!==1&&a.push(t[s]);return{newShape:r,newPerm:a}},Ac=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},Et=(e,t)=>{let r=e.dataType,a=e.dims.length,s=Ql(a,t),i=Ic(e.dims,s),o=e.dims,l=i,d=a<2||Ac(s,e.dims),p;if(d)return p=$=>{let w=F("input",r,o,4),S=le("output",r,l,4);return`
  ${$.registerUniform("output_size","u32").declareVariables(w,S)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=L.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil($/64/4)},programUniforms:[{type:12,data:Math.ceil($/4)}]}},getShaderSource:p};let{newShape:m,newPerm:g}=zc(e.dims,s),y=L.areEqual(g,[2,3,1]),_=L.areEqual(g,[3,1,2]);if(m.length===2||y||_){o=y?[m[0],m[1]*m[2]]:_?[m[0]*m[1],m[2]]:m,l=[o[1],o[0]];let $=16;return p=w=>{let S=F("a",r,o.length),v=le("output",r,l.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${$+1}>, ${$}>;
  ${w.mainStart([$,$,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${$} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${$}u + local_id.x;
    let input_row = workgroup_id_x * ${$}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${$}u + local_id.x;
    let output_row = workgroup_id_y * ${$}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=L.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/$),y:Math.ceil(l[0]/$)},programUniforms:[{type:12,data:w},...ge(o,l)]}},getShaderSource:p}}return p=$=>{let w=F("a",r,o.length),S=le("output",r,l.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(w,S)}

  ${Ec(s,a,w,S)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let $=L.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...ge(o,l)]}},getShaderSource:p}},X$=(e,t)=>{Cc(e.inputs,t.perm),e.compute(Et(e.inputs[0],t.perm))},J$=e=>Ne({perm:e.perm})}),Oc,Rc,Bc,Nc,Mc,Dc,Pc,Uc,Wc,qc,Vt,Y$,ew,tw,rw,iw,aw,nw,sw,ow,uw,rS=ee(()=>{we(),xe(),ke(),ch(),Er(),Oc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Rc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Bc={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Nc={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Mc=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},Dc=(e,t)=>{let r=[],a=e.length;for(let i=0;i<a;i++)t.indexOf(i)===-1&&r.push(e[i]);let s=t.map(i=>e[i]);return[r,s]},Pc=(e,t)=>{let r=e.length+t.length,a=[],s=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?a.push(e[s++]):a.push(1);return a},Uc=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Wc=(e,t)=>{let r=[];if(!Uc(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},qc=(e,t,r,a,s,i,o)=>{let l=r[0].dims,d=L.size(i),p=L.size(o),m=F("_A",r[0].dataType,l),g=le("output",s,i),y=64;d===1&&(y=256);let _=`
          var<workgroup> aBestValues : array<f32, ${y}>;
       `,$=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(m,g)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(y)}

          let outputIndex = global_idx / ${y};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Bc[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${y}) {
           let candidate = f32(${m.getByOffset("offset + k")});
           bestValue = ${Oc[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${y}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Rc[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${g.setByOffset("outputIndex",`${a==="mean"?`${g.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${g.type.storage}(${Nc[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${y}`,inputDependencies:["type"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},Vt=(e,t,r,a)=>{let s=e.inputs.length===1?r:Cp(e.inputs,r),i=s.axes;i.length===0&&!s.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((_,$)=>$));let o=L.normalizeAxes(i,e.inputs[0].dims.length),l=o,d=e.inputs[0],p=Wc(l,e.inputs[0].dims.length);p.length>0&&(d=e.compute(Et(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],l=Mc(l.length,d.dims.length));let[m,g]=Dc(d.dims,l),y=m;s.keepDims&&(y=Pc(m,o)),e.compute(qc(t,s.cacheKey,[d],a,e.inputs[0].dataType,y,g),{inputs:[d]})},Y$=(e,t)=>{Vt(e,"ReduceMeanShared",t,"mean")},ew=(e,t)=>{Vt(e,"ReduceL1Shared",t,"l1")},tw=(e,t)=>{Vt(e,"ReduceL2Shared",t,"l2")},rw=(e,t)=>{Vt(e,"ReduceLogSumExpShared",t,"logSumExp")},iw=(e,t)=>{Vt(e,"ReduceMaxShared",t,"max")},aw=(e,t)=>{Vt(e,"ReduceMinShared",t,"min")},nw=(e,t)=>{Vt(e,"ReduceProdShared",t,"prod")},sw=(e,t)=>{Vt(e,"ReduceSumShared",t,"sum")},ow=(e,t)=>{Vt(e,"ReduceSumSquareShared",t,"sumSquare")},uw=(e,t)=>{Vt(e,"ReduceLogSumShared",t,"logSum")}}),Lt,Vc,so,Cp,Gt,Lc,Gc,Hc,Fc,jc,Kc,Qc,Zc,Xc,Jc,Ht,lw,dw,pw,hw,cw,fw,mw,gw,yw,_w,ch=ee(()=>{we(),xe(),Fe(),ke(),rS(),Lt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Vc=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],so=(e,t,r,a,s,i,o=!1,l=!1)=>{let d=[],p=r[0].dims,m=p.length,g=L.normalizeAxes(s,m),y=!l&&g.length===0;p.forEach((w,S)=>{y||g.indexOf(S)>=0?o&&d.push(1):d.push(w)});let _=d.length,$=L.size(d);return{name:e,shaderCache:t,getShaderSource:w=>{let S=[],v=F("_A",r[0].dataType,m),b=le("output",i,_),T=a(v,b,g),k=T[2];for(let C=0,E=0;C<m;C++)y||g.indexOf(C)>=0?(o&&E++,k=`for(var j${C}: u32 = 0; j${C} < ${p[C]}; j${C}++) {
                  ${T[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${v.indicesSet("input_indices",C,`j${C}`)}
                  ${k}
                }`):(S.push(`${v.indicesSet("input_indices",C,b.indicesGet("output_indices",E))};`),E++);return`

        ${w.registerUniform("output_size","u32").declareVariables(v,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${k}
          ${T[3]}
          ${T.length===4?b.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...ge(p,d)]})}},Cp=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),Ne({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Gt=(e,t,r,a)=>{let s=e.inputs,i=s.length===1?r:Cp(s,r);e.compute(so(t,{hint:i.cacheKey,inputDependencies:["rank"]},[s[0]],i.noopWithEmptyAxes&&i.axes.length===0?Vc:a,i.axes,s[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},Lc=(e,t)=>{Lt(e.inputs),Gt(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Gc=(e,t)=>{Lt(e.inputs),Gt(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Hc=(e,t)=>{Lt(e.inputs),Gt(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Fc=(e,t)=>{Lt(e.inputs),Gt(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},jc=(e,t)=>{Lt(e.inputs),Gt(e,"ReduceMax",t,(r,a,s)=>{let i=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&i.push(r.indicesSet("input_indices",o,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Kc=(e,t)=>{Lt(e.inputs),Gt(e,"ReduceMean",t,(r,a,s)=>{let i=1;for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&(i*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${i});`]})},Qc=(e,t)=>{Lt(e.inputs),Gt(e,"ReduceMin",t,(r,a,s)=>{let i=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&i.push(`input_indices[${o}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Zc=(e,t)=>{Lt(e.inputs),Gt(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Xc=(e,t)=>{Lt(e.inputs),Gt(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Jc=(e,t)=>{Lt(e.inputs),Gt(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ht=(e,t,r)=>{if(t.length===0)return r;let a=1,s=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?a*=e[i]:s*=e[i];return s<32&&a>1024},lw=(e,t)=>{Ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Kc(e,t):Y$(e,t)},dw=(e,t)=>{Ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gc(e,t):ew(e,t)},pw=(e,t)=>{Ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hc(e,t):tw(e,t)},hw=(e,t)=>{Ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fc(e,t):rw(e,t)},cw=(e,t)=>{Ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jc(e,t):iw(e,t)},fw=(e,t)=>{Ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qc(e,t):aw(e,t)},mw=(e,t)=>{Ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zc(e,t):nw(e,t)},gw=(e,t)=>{Ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xc(e,t):sw(e,t)},yw=(e,t)=>{Ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jc(e,t):ow(e,t)},_w=(e,t)=>{Ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lc(e,t):uw(e,t)}}),Zl,$w,ww,Ip,iS=ee(()=>{we(),Fe(),ch(),Zl=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},$w=(e,t)=>{Zl(e.inputs);let r=(a,s,i)=>{let o=[];for(let l=0;l<a.rank;l++)(i.indexOf(l)>=0||i.length===0)&&o.push(`input_indices[${l}] = 0;`);return[`${o.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(so("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ww=(e,t)=>{Zl(e.inputs);let r=(a,s,i)=>{let o=[];for(let l=0;l<a.rank;l++)(i.indexOf(l)>=0||i.length===0)&&o.push(`input_indices[${l}] = 0;`);return[`${o.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(so("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ip=e=>Ne(e)}),Yc,zs,ef,tf,rf,$s,af,bw,fh=ee(()=>{we(),xe(),ph(),ke(),Yc=(e,t)=>{let r=e[0],a=e[1],s=e[2],i=e[3],o=e[4],l=e[5];if(o&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],m=r.dims[2];if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==m)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(s.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let g=s.dims[0]/3,y=g,_=y;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");g=t.qkvHiddenSizes[0],y=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let $=p;if(g!==y)throw new Error("qkv_hidden_sizes first element should be same as the second");if(s.dims[0]!==g+y+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(o){if(y!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==y/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=o.dims[3])}let S=$+w,v=-1,b=0;if(i)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==p||l.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:w,kvSequenceLength:$,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:m,hiddenSize:g,vHiddenSize:_,headSize:Math.floor(g/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},zs=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,ef=(e,t,r,a,s,i,o,l)=>{let d=Ge(o?1:i),p=64,m=i/d;m<p&&(p=32);let g=Math.ceil(i/d/p),y=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:s},{type:12,data:m},{type:12,data:g}],_=rt(e.dataType,d),$=ft(1,d),w=["type"];o&&w.push("type"),l&&w.push("type");let S=v=>{let b=le("x",e.dataType,e.dims,d),T=[b],k=o?F("seq_lens",o.dataType,o.dims):void 0;k&&T.push(k);let C=l?F("total_sequence_length_input",l.dataType,l.dims):void 0;C&&T.push(C);let E=ft(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${v.registerUniforms(z).declareVariables(...T)}
  ${v.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${zs(k,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${$}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${$}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(d){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${$}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${$}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(d){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${$}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${_};${d}`,inputDependencies:w},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(i/p),y:s,z:t*r},programUniforms:y})}},tf=(e,t,r,a,s,i,o,l,d)=>{let p=o+i.kvSequenceLength,m=[i.batchSize,i.numHeads,i.sequenceLength,p],g=e>1&&a,y=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=g?[i.batchSize,y,p,i.headSize]:void 0,$=i.nReps?i.nReps:1,w=i.scale===0?1/Math.sqrt(i.headSize):i.scale,S=Ge(i.headSize),v=i.headSize/S,b=12,T={x:Math.ceil(p/b),y:Math.ceil(i.sequenceLength/b),z:i.batchSize*i.numHeads},k=[{type:12,data:i.sequenceLength},{type:12,data:v},{type:12,data:p},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:w},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:$}],C=g&&a&&L.size(a.dims)>0,E=["type","type"];C&&E.push("type"),s&&E.push("type"),l&&E.push("type"),d&&E.push("type");let z=[{dims:m,dataType:t.dataType,gpuDataType:0}];g&&z.push({dims:_,dataType:t.dataType,gpuDataType:0});let R=P=>{let q=F("q",t.dataType,t.dims,S),X=F("key",r.dataType,r.dims,S),ie=[q,X];if(C){let H=F("past_key",a.dataType,a.dims,S);ie.push(H)}s&&ie.push(F("attention_bias",s.dataType,s.dims));let K=l?F("seq_lens",l.dataType,l.dims):void 0;K&&ie.push(K);let J=d?F("total_sequence_length_input",d.dataType,d.dims):void 0;J&&ie.push(J);let Z=le("output",t.dataType,m),W=[Z];g&&W.push(le("present_key",t.dataType,_,S));let oe=ft(1,S),ce=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${q.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${q.type.storage}, ${b*b}>;
  ${P.registerUniforms(ce).declareVariables(...ie,...W)}
  ${P.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${$===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${$===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${zs(K,J,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&g?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${g?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${oe}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&g?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${g?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${oe}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${Z.type.value} (sum * uniforms.alpha) + ${s?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${s!==void 0};${a!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:z,dispatchGroup:T,programUniforms:k}),getShaderSource:R}},rf=(e,t,r,a,s,i,o=void 0,l=void 0)=>{let d=i+s.kvSequenceLength,p=s.nReps?s.nReps:1,m=s.vHiddenSize*p,g=e>1&&a,y=s.kvNumHeads?s.kvNumHeads:s.numHeads,_=g?[s.batchSize,y,d,s.headSize]:void 0,$=[s.batchSize,s.sequenceLength,m],w=12,S={x:Math.ceil(s.vHeadSize/w),y:Math.ceil(s.sequenceLength/w),z:s.batchSize*s.numHeads},v=[{type:12,data:s.sequenceLength},{type:12,data:d},{type:12,data:s.vHeadSize},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:12,data:m},{type:12,data:i},{type:12,data:s.kvSequenceLength},{type:12,data:p}],b=g&&a&&L.size(a.dims)>0,T=["type","type"];b&&T.push("type"),o&&T.push("type"),l&&T.push("type");let k=[{dims:$,dataType:t.dataType,gpuDataType:0}];g&&k.push({dims:_,dataType:t.dataType,gpuDataType:0});let C=E=>{let z=F("probs",t.dataType,t.dims),R=F("v",r.dataType,r.dims),P=[z,R];b&&P.push(F("past_value",a.dataType,a.dims));let q=o?F("seq_lens",o.dataType,o.dims):void 0;o&&P.push(q);let X=l?F("total_sequence_length_input",l.dataType,l.dims):void 0;l&&P.push(X);let ie=[le("output",t.dataType,$)];g&&ie.push(le("present_value",t.dataType,_));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${z.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${z.type.value}, ${w*w}>;
  ${E.registerUniforms(K).declareVariables(...P,...ie)}
  ${E.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${zs(q,X,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&g?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${g?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&g?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${g?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:v}),getShaderSource:C}},$s=(e,t,r,a,s,i,o,l,d,p,m=void 0,g=void 0)=>{let y=Math.min(e.outputCount,1+(o?1:0)+(l?1:0)),_=y>1?p.pastSequenceLength:0,$=_+p.kvSequenceLength,w=d&&L.size(d.dims)>0?d:void 0,S=[t,r];y>1&&o&&L.size(o.dims)>0&&S.push(o),w&&S.push(w),m&&S.push(m),g&&S.push(g);let v=e.compute(tf(y,t,r,o,w,p,_,m,g),{inputs:S,outputs:y>1?[-1,1]:[-1]})[0];e.compute(ef(v,p.batchSize,p.numHeads,_,p.sequenceLength,$,m,g),{inputs:m&&g?[v,m,g]:[v],outputs:[]});let b=[v,a];y>1&&l&&L.size(l.dims)>0&&b.push(l),m&&b.push(m),g&&b.push(g),e.compute(rf(y,v,a,l,p,_,m,g),{inputs:b,outputs:y>1?[0,2]:[0]})},af=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,s=t.inputHiddenSize,i=t.headSize,o=12,l={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:a},{type:12,data:s},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],m=g=>{let y=le("output_q",d[0].dataType,r),_=le("output_k",d[0].dataType,r),$=le("output_v",d[0].dataType,r),w=F("input",d[0].dataType,d[0].dims),S=F("weight",d[1].dataType,d[1].dims),v=F("bias",d[2].dataType,d[2].dims),b=w.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${b}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${b}, ${o*o}>;
  var<workgroup> tileWeightK: array<${b}, ${o*o}>;
  var<workgroup> tileWeightV: array<${b}, ${o*o}>;
  ${g.registerUniforms(T).declareVariables(w,S,v,y,_,$)}
  ${g.mainStart([o,o,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:m},{inputs:d,outputs:[-1,-1,-1]})},bw=(e,t)=>{let r=Yc(e.inputs,t),[a,s,i]=af(e,r);return $s(e,a,s,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),nf,sf,of,vw,aS=ee(()=>{rr(),we(),xe(),Fe(),ke(),nf=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,s,i)=>{let o=s.length;if(o!==a.length)throw new Error(`${i}: num dimensions != ${o}`);s.forEach((l,d)=>{if(l!==a[d])throw new Error(`${i}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},sf=(e,t)=>{let{epsilon:r,spatial:a,format:s}=t,i=e[0].dims,o=a?Ge(i[i.length-1]):1,l=s==="NHWC"&&i.length>1?o:1,d=L.size(i)/o,p=a,m=p?i.length:i,g=F("x",e[0].dataType,e[0].dims,o),y=F("scale",e[1].dataType,e[1].dims,l),_=F("bias",e[2].dataType,e[2].dims,l),$=F("inputMean",e[3].dataType,e[3].dims,l),w=F("inputVar",e[4].dataType,e[4].dims,l),S=le("y",e[0].dataType,m,o),v=()=>{let T="";if(a)T=`let cOffset = ${i.length===1?"0u":s==="NHWC"?`outputIndices[${i.length-1}] / ${o}`:"outputIndices[1]"};`;else if(s==="NCHW")T=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${y.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let k=1;k<y.rank;k++)T+=`cIndices[${k}] = outputIndices[${k}];`;T+=`let cOffset = ${y.indicesToOffset("cIndices")};`}return T},b=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(g,y,_,$,w,S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${o}`)};
    ${v()}
    let scale = ${y.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${$.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${g.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${o}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...ge(i)]:[{type:12,data:d}]})}},of=e=>Ne(e),vw=(e,t)=>{let{inputs:r,outputCount:a}=e,s=of({...t,outputCount:a});if(Ue.webgpu.validateInputContent&&nf(r,s),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(sf(r,s))}}),uf,lf,xw,nS=ee(()=>{xe(),ke(),uf=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},lf=e=>{let t=e[0].dims,r=e[0].dims[2],a=L.size(t)/4,s=e[0].dataType,i=F("input",s,t,4),o=F("bias",s,[r],4),l=F("residual",s,t,4),d=le("output",s,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(i,o,l,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${i.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},xw=e=>{uf(e.inputs),e.compute(lf(e.inputs))}}),df,Ae,Sw,kw,Tw,Cw,Iw,Ew,zw,Aw,Ow,pf,Rw,Bw,Nw,Mw,ds,Dw,Ys,Pw,Uw,Ww,qw,Vw,Lw,Gw,Hw,Fw,jw,Kw,Qw,Zw,Xw,Jw,Yw,Xl,e1,Ep,zp,t1,r1,i1,hf,cf,a1,mh=ee(()=>{we(),xe(),Fe(),ke(),df=(e,t,r,a,s,i,o)=>{let l=Math.ceil(t/4),d="";typeof s=="string"?d=`${s}(a)`:d=s("a");let p=F("inputData",r,[l],4),m=le("outputData",a,[l],4),g=[{name:"vec_size",type:"u32"}];return o&&g.push(...o),`
      ${e.registerUniforms(g).declareVariables(p,m)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${m.setByOffset("global_idx",d)}
  }`},Ae=(e,t,r,a,s,i=e.dataType,o,l)=>{let d=[{type:12,data:Math.ceil(L.size(e.dims)/4)}];return o&&d.push(...o),{name:t,shaderCache:{hint:s,inputDependencies:["type"]},getShaderSource:p=>df(p,L.size(e.dims),e.dataType,i,r,a,l),getRunData:p=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(L.size(p[0].dims)/64/4)},programUniforms:d})}},Sw=e=>{e.compute(Ae(e.inputs[0],"Abs","abs"))},kw=e=>{e.compute(Ae(e.inputs[0],"Acos","acos"))},Tw=e=>{e.compute(Ae(e.inputs[0],"Acosh","acosh"))},Cw=e=>{e.compute(Ae(e.inputs[0],"Asin","asin"))},Iw=e=>{e.compute(Ae(e.inputs[0],"Asinh","asinh"))},Ew=e=>{e.compute(Ae(e.inputs[0],"Atan","atan"))},zw=e=>{e.compute(Ae(e.inputs[0],"Atanh","atanh"))},Aw=e=>Ne(e),Ow=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ae(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},pf=e=>{let t,r,a=e.length>=2&&e[1].data!==0,s=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=s?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=s?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ne({min:t,max:r})},Rw=(e,t)=>{let r=t||pf(e.inputs),a=ft(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Clip",s=>`clamp(${s}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},Bw=e=>{e.compute(Ae(e.inputs[0],"Ceil","ceil"))},Nw=e=>{e.compute(Ae(e.inputs[0],"Cos","cos"))},Mw=e=>{e.compute(Ae(e.inputs[0],"Cosh","cosh"))},ds=e=>Ne(e),Dw=(e,t)=>{let r=ft(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ys=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Pw=e=>{let t=ft(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Ys(t)))},Uw=e=>{e.compute(Ae(e.inputs[0],"Exp","exp"))},Ww=e=>{e.compute(Ae(e.inputs[0],"Floor","floor"))},qw=e=>{let t=ft(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Ys(t)))},Vw=(e,t)=>{let r=ft(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Lw=e=>{e.compute(Ae(e.inputs[0],"Not",t=>`!${t}`))},Gw=e=>{e.compute(Ae(e.inputs[0],"Neg",t=>`-${t}`))},Hw=e=>{e.compute(Ae(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Fw=e=>{let t=ft(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},jw=e=>{e.compute(Ae(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Kw=e=>Ne(e),Qw=(e,t)=>{let r=ft(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Zw=e=>{e.compute(Ae(e.inputs[0],"Sin","sin"))},Xw=e=>{e.compute(Ae(e.inputs[0],"Sinh","sinh"))},Jw=e=>{e.compute(Ae(e.inputs[0],"Sqrt","sqrt"))},Yw=e=>{e.compute(Ae(e.inputs[0],"Tan","tan"))},Xl=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,e1=e=>{e.compute(Ae(e.inputs[0],"Tanh",Xl))},Ep=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Xl("v")};
}
`,zp=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,t1=e=>{let t=ft(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"FastGelu",zp,Ep(t),void 0,e.inputs[0].dataType))},r1=(e,t)=>{let r=ft(e.inputs[0].dataType);return e.compute(Ae(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},i1=e=>{e.compute(Ae(e.inputs[0],"Log","log"))},hf=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,cf=e=>`quick_gelu_impl(${e})`,a1=(e,t)=>{let r=ft(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"QuickGelu",cf,hf(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ff,mf,n1,sS=ee(()=>{xe(),ke(),mh(),ff=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},mf=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=F("input",e[0].dataType,e[0].dims,4),a=F("bias",e[0].dataType,[e[0].dims[2]],4),s=le("output",e[0].dataType,t,4),i=L.size(t)/4,o=rt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,a,s)}

  ${Ys(o)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},n1=e=>{ff(e.inputs),e.compute(mf(e.inputs))}}),gf,yf,Ft,s1,o1,u1,l1,d1,p1,h1,c1,f1,m1,oS=ee(()=>{we(),xe(),ke(),gf=(e,t,r,a,s,i,o,l,d,p,m,g)=>{let y,_;typeof l=="string"?y=_=(b,T)=>`${l}((${b}),(${T}))`:typeof l=="function"?y=_=l:(y=l.scalar,_=l.vector);let $=le("outputData",m,a.length,4),w=F("aData",d,t.length,4),S=F("bData",p,r.length,4),v;if(s)if(i){let b=L.size(t)===1,T=L.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;b||T?v=$.setByOffset("global_idx",_(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),T?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${$.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",$)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",$)};
            ${$.setByOffset("global_idx",_(o||k?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||C?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=$.setByOffset("global_idx",_(w.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(T,k,C="")=>{let E=`aData[indexA${k}][componentA${k}]`,z=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${$.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${w.broadcastedIndicesToOffset(`outputIndices${k}`,$)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,$)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${T}[${k}] = ${C}(${y(E,z)});
          `};m===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,S,$)}

        ${g??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},yf=(e,t,r,a,s,i,o=r.dataType)=>{let l=r.dims.map(w=>Number(w)??1),d=a.dims.map(w=>Number(w)??1),p=!L.areEqual(l,d),m=l,g=L.size(l),y=!1,_=!1,$=[p];if(p){let w=Oi.calcShape(l,d,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");m=w.slice(),g=L.size(m);let S=L.size(l)===1,v=L.size(d)===1,b=l.length>0&&l[l.length-1]%4===0,T=d.length>0&&d[d.length-1]%4===0;$.push(S),$.push(v),$.push(b),$.push(T);let k=1;for(let C=1;C<m.length;C++){let E=l[l.length-C],z=d[d.length-C];if(E===z)k*=E;else break}k%4===0?(_=!0,y=!0):(S||v||b||T)&&(y=!0)}else y=!0;return $.push(y),{name:e,shaderCache:{hint:t+$.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>gf(w,l,d,m,y,p,_,s,r.dataType,a.dataType,o,i),getRunData:()=>({outputs:[{dims:m,dataType:o}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(L.size(m)/4)},...ge(l,d,m)]})}},Ft=(e,t,r,a,s,i)=>{e.compute(yf(t,s??"",e.inputs[0],e.inputs[1],r,a,i))},s1=e=>{Ft(e,"Add",(t,r)=>`${t}+${r}`)},o1=e=>{Ft(e,"Div",(t,r)=>`${t}/${r}`)},u1=e=>{Ft(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},l1=e=>{Ft(e,"Mul",(t,r)=>`${t}*${r}`)},d1=e=>{let t=F("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ft(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},p1=e=>{Ft(e,"Sub",(t,r)=>`${t}-${r}`)},h1=e=>{Ft(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},c1=e=>{Ft(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},f1=e=>{Ft(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},m1=e=>{Ft(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),_f,$f,wf,bf,g1,y1,uS=ee(()=>{we(),xe(),Fe(),ke(),_f=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],s=a.dataType,i=a.dims.length;e.forEach((o,l)=>{if(l!==r){if(o.dataType!==s)throw new Error("input tensors should be one type");if(o.dims.length!==i)throw new Error("input tensors should have the same shape");o.dims.forEach((d,p)=>{if(p!==t&&d!==a.dims[p])throw new Error("non concat dimensions must match")})}})},$f=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,wf=(e,t)=>{let r=e.length,a=[];for(let s=0;s<r;++s){let i=t.setByOffset("global_idx",e[s].getByIndices("indices"));r===1?a.push(i):s===0?a.push(`if (inputIndex == ${s}u) { ${i} }`):s===r-1?a.push(`else { ${i} }`):a.push(`else if (inputIndex == ${s}) { ${i} }`)}return a.join(`
`)},bf=(e,t,r,a)=>{let s=L.size(r),i=new Array(e.length),o=new Array(e.length),l=0,d=[],p=[],m=[{type:12,data:s}];for(let w=0;w<e.length;++w)l+=e[w].dims[t],i[w]=l,p.push(e[w].dims.length),o[w]=F(`input${w}`,a,p[w]),d.push("rank"),m.push({type:12,data:i[w]});for(let w=0;w<e.length;++w)m.push(...ge(e[w].dims));m.push(...ge(r));let g=le("output",a,r.length),y=g.indicesGet("indices",t),_=Array.from(Array(i.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),$=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)w.registerUniform(`sizeInConcatAxis${S}`,"u32");return w.declareVariables(...o,g)})()}

  ${$f(i.length,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${g.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${y});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${_});
      ${y} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${wf(o,g)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:m}),getShaderSource:$}},g1=(e,t)=>{let r=e.inputs,a=r[0].dims,s=L.normalizeAxis(t.axis,a.length);_f(r,s);let i=a.slice();i[s]=r.reduce((l,d)=>l+(d.dims.length>s?d.dims[s]:0),0);let o=r.filter(l=>L.size(l.dims)>0);e.compute(bf(o,s,i,r[0].dataType),{inputs:o})},y1=e=>Ne({axis:e.axis})}),gi,yi,_i,gh,xi=ee(()=>{we(),xe(),gi=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},yi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},_i=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},gh=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[j$,K$];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),at,_1,yh=ee(()=>{at=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},_1=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),$1,lS=ee(()=>{$1=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),gs,_h,$h=ee(()=>{we(),xe(),ke(),xi(),gs=(e,t,r,a,s)=>{let i=a-r;return`
      ${Array.from({length:r}).map((o,l)=>`
      if (${pe(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,pe(s,l+i,a))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},_h=(e,t,r,a,s=!1,i)=>{let o=e[0].dims,l=e[1].dims,d=o[o.length-2],p=l[l.length-1],m=o[o.length-1],g=Ge(p),y=Ge(m),_=Ge(d),$=L.size(r)/g/_,w=e.length>2,S=a?a.slice(0,-2):r.slice(0,-2),v=[L.size(S),d,p],b=[{type:12,data:$},{type:12,data:d},{type:12,data:p},{type:12,data:m}];yi(t,b),b.push(...ge(S,o,l)),w&&b.push(...ge(e[2].dims)),b.push(...ge(v));let T=k=>{let C=hh("batch_dims",e[0].dataType,S.length),E=F("a",e[0].dataType,o.length,y),z=F("b",e[1].dataType,l.length,g),R=le("output",e[0].dataType,v.length,g),P=rt(R.type.tensor),q=gi(t,R.type.value,P),X=[E,z],ie="";if(w){let Z=s?g:1;X.push(F("bias",e[2].dataType,e[2].dims.length,Z)),ie=`${s?`value += bias[col / ${Z}];`:`value += ${R.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];_i(t,K);let J=()=>{let Z=`var a_data: ${E.type.value};`;for(let W=0;W<y;W++)Z+=`
              let b_data${W} = b[(b_offset + (k + ${W}) * uniforms.N + col) / ${g}];`;for(let W=0;W<_;W++){Z+=`a_data = a[(a_offset + (row + ${W}) * uniforms.K + k) / ${y}];`;for(let oe=0;oe<y;oe++)Z+=`
            values[${W}] = fma(${z.type.value}(a_data${y===1?"":`[${oe}]`}), b_data${oe}, values[${W}]);
`}return Z};return`
  ${k.registerUniforms(K).registerInternalVariables(C).declareVariables(...X,R)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${g})) * ${g};
    var index1 = global_idx / (uniforms.N / ${g});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${gs("a_indices",E,E.rank-2,C.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${gs("b_indices",z,z.rank-2,C.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${R.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${y}) {
      ${J()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${ie}
      ${q}
      let cur_indices = ${R.type.indices}(batch, row + i, col);
      let offset = ${R.indicesToOffset("cur_indices")};
      ${R.setByOffset(`offset / ${g}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${g};${y};${_};${s}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:T}}}),vf,xf,Ap,Jl,Sf,Op,kf,oo,wh=ee(()=>{we(),xe(),ke(),xi(),$h(),yh(),vf=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,xf=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Ap=(e,t,r="f32",a,s=!1,i=32,o=!1,l=32)=>{let d=t[1]*e[1],p=t[0]*e[0],m=s?d:i,g=s?i:d,y=m/t[0],_=i/t[1];if(!((s&&y===4&&e[1]===4||!s&&(y===3||y===4))&&m%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${s} is true, innerElementSize ${y} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${y} must be 3 or 4.
  tileAWidth ${m} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${y}<${r}>, ${m/y}>, ${g}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${y};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${o?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${vf(s,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${y===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${xf(s,y)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Jl=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Sf=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Op=(e,t,r="f32",a,s=!1,i=32,o=!1,l=32,d=!1)=>{let p=e[1]*t[1],m=e[0]*t[0],g=s?p:i,y=s?i:p;if(!(y%t[1]===0&&g%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${y} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${g} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let _=y/t[1],$=g/t[0],w=i/t[1],S=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${m};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${y}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${t[0]}) {
          ${Jl(s,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${s?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${$};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${$}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Jl(s,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Sf(s)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${g}>, ${y}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${m}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},kf=(e,t,r,a,s=!1)=>{let[i,o,l,d]=a,p=rt(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${at(e,p)} {
      var value = ${at(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${gs("aIndices",o,o.rank-2,i.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${at(e,p)} {
      var value = ${at(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${gs("bIndices",l,l.rank-2,i.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${at(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${s?"bias[colIn]":`${at(e,p)}(bias[row])`};`:""}
        ${r}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},oo=(e,t,r,a,s=!1,i)=>{let o=e[0].dims,l=e[1].dims,d=o.slice(0,-2),p=l.slice(0,-2),m=a?a.slice(0,-2):r.slice(0,-2),g=L.size(m),y=o[o.length-2],_=o[o.length-1],$=l[l.length-1],w=_%4===0&&$%4===0,S=y<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil($/v[0]/S[0]),Math.ceil(y/v[1]/S[1]),Math.ceil(g/v[2]/S[2])],T=w?4:1,k=[...d,y,_/T],C=k.length,E=[...p,_,$/T],z=E.length,R=[g,y,$/T],P=[{type:6,data:y},{type:6,data:$},{type:6,data:_}];yi(t,P),P.push(...ge(m,k,E));let q=["rank","rank"],X=e.length>2;X&&(P.push(...ge(e[2].dims)),q.push("rank")),P.push(...ge(R));let ie=K=>{let J=m.length,Z=hh("batchDims",e[0].dataType,J,1),W=rt(e[0].dataType),oe=F("a",e[0].dataType,C,T),ce=F("b",e[1].dataType,z,T),H=le("result",e[0].dataType,R.length,T),fe=[oe,ce];if(X){let N=s?T:1;fe.push(F("bias",e[2].dataType,e[2].dims.length,N))}let B=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];_i(t,B);let U=rt(H.type.tensor),se=gi(t,H.type.value,U),$e=kf(T,X,se,[Z,oe,ce,H],s);return`
  ${K.registerUniforms(B).registerInternalVariables(Z).declareVariables(...fe,H)}
  ${$e}
  ${w?Ap(S,v,W,Z):Op(S,v,W,Z)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${w};${s}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:P}),getShaderSource:ie}}}),Tf,w1,dS=ee(()=>{we(),$r(),ke(),xi(),yh(),lS(),wh(),Tf=(e,t,r,a,s=!1,i,o=4,l=4,d=4,p="f32")=>{let m=P=>{switch(P){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},g=P=>{switch(P){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},y=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,$=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${at(o,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${$} && xCol >= 0 && xCol < ${w}) {
      ${y}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${m(o)}
    }
    return resData;`,T=e?t&&a?`
    let col = colIn * ${o};
    ${b}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${at(o,p)}(0.0);`:a&&r?`
    let col = colIn * ${o};
    ${b}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${at(o,p)}(0.0);`,k=e?a&&r?g(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g(l)}
    }
    return ${at(l,p)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${g(l)}
    }
    return ${at(l,p)}(0.0);`,C=at(d,p),E=at(e?o:l,p),z=at(e?l:o,p),R=gi(i,C,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?T:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${_1(s)}
      ${R}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},w1=(e,t,r,a,s,i,o,l,d)=>{let p=t.format==="NHWC",m=p?e[0].dims[3]:e[0].dims[1],g=r[0],y=p?r[2]:r[3],_=p?r[1]:r[2],$=p?r[3]:r[1],w=p&&(m%4===0||m%3===0)&&$%4===0,S=p?$:y*_,v=p?y*_:$,b=[8,8,1],T=a<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/b[0]/T[0]),Math.ceil(v/b[1]/T[1]),Math.ceil(g/b[2]/T[2])];Ee("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let C=w?p&&m%4!==0?3:4:1,E=b[1]*T[1],z=b[0]*T[0],R=Math.max(b[0]*C,b[1]),P=a%E===0,q=s%z===0,X=i%R===0,ie=w?[C,4,4]:[1,1,1],K=[{type:6,data:a},{type:6,data:s},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];yi(t,K),K.push(...ge(e[0].dims,e[1].dims));let J=["rank","rank"];o&&(K.push(...ge(e[2].dims)),J.push("rank")),K.push(...ge(r));let Z=W=>{let oe=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];_i(t,oe);let ce=w?4:1,H=rt(e[0].dataType),fe=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${H}>`:H}) {
        result[flatIndex] = ${w?`vec4<${H}>`:H}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${H}>`:H}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,B=F("x",e[0].dataType,e[0].dims.length,C===3?1:C),U=F("w",e[1].dataType,e[1].dims.length,ce),se=[B,U],$e=le("result",e[0].dataType,r.length,ce);if(o){let N=F("bias",e[2].dataType,e[2].dims.length,ce);se.push(N),fe+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${H}>`:H} {
          return bias[coords.${p?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${$1("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${W.registerUniforms(oe).declareVariables(...se,$e)}
        ${fe}
        ${Tf(p,P,q,X,o,t,ie[0],ie[1],ie[2],H)}
        ${w?Ap(T,b,H,void 0,!p,R):Op(T,b,H,void 0,!p,R,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${w};${P};${q};${X};${E};${z};${R}`,inputDependencies:J},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:K}),getShaderSource:Z}}}),Cf,Yl,jn,If,ed,Ef,b1,v1,pS=ee(()=>{we(),$r(),xe(),ke(),xi(),yh(),Cf=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Yl=e=>typeof e=="number"?[e,e,e]:e,jn=(e,t)=>t<=1?e:e+(e-1)*(t-1),If=(e,t,r,a=1)=>{let s=jn(t,a);return Math.floor((e[0]*(r-1)-r+s)/2)},ed=(e,t,r,a,s)=>{s==null&&(s=If(e,t[0],a[0]));let i=[0,0,0,r];for(let o=0;o<3;o++)e[o]+2*s>=t[o]&&(i[o]=Math.trunc((e[o]-t[o]+2*s)/a[o]+1));return i},Ef=(e,t,r,a,s,i,o,l,d,p)=>{let m,g,y,_;if(e==="VALID"&&(e=0),typeof e=="number"){m={top:e,bottom:e,left:e,right:e,front:e,back:e};let $=ed([t,r,a,1],[l,d,p],1,[s,i,o],e);g=$[0],y=$[1],_=$[2]}else if(Array.isArray(e)){if(!e.every((w,S,v)=>w===v[0]))throw Error(`Unsupported padding parameter: ${e}`);m={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let $=ed([t,r,a,1],[l,d,p],1,[s,i,o],e[0]);g=$[0],y=$[1],_=$[2]}else if(e==="SAME_UPPER"){g=Math.ceil(t/s),y=Math.ceil(r/i),_=Math.ceil(a/o);let $=(g-1)*s+l-t,w=(y-1)*i+d-r,S=(_-1)*o+p-a,v=Math.floor($/2),b=$-v,T=Math.floor(w/2),k=w-T,C=Math.floor(S/2),E=S-C;m={top:T,bottom:k,left:C,right:E,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:m,outDepth:g,outHeight:y,outWidth:_}},b1=(e,t,r,a,s,i=!1,o="channelsLast")=>{let l,d,p,m,g;if(o==="channelsLast")[l,d,p,m,g]=e;else if(o==="channelsFirst")[l,g,d,p,m]=e;else throw new Error(`Unknown dataFormat ${o}`);let[y,,_,$,w]=t,[S,v,b]=Yl(r),[T,k,C]=Yl(a),E=jn(_,T),z=jn($,k),R=jn(w,C),{padInfo:P,outDepth:q,outHeight:X,outWidth:ie}=Ef(s,d,p,m,S,v,b,E,z,R),K=i?y*g:y,J=[0,0,0,0,0];return o==="channelsFirst"?J=[l,K,q,X,ie]:o==="channelsLast"&&(J=[l,q,X,ie,K]),{batchSize:l,dataFormat:o,inDepth:d,inHeight:p,inWidth:m,inChannels:g,outDepth:q,outHeight:X,outWidth:ie,outChannels:K,padInfo:P,strideDepth:S,strideHeight:v,strideWidth:b,filterDepth:_,filterHeight:$,filterWidth:w,effectiveFilterDepth:E,effectiveFilterHeight:z,effectiveFilterWidth:R,dilationDepth:T,dilationHeight:k,dilationWidth:C,inShape:e,outShape:J,filterShape:t}},v1=(e,t,r,a,s,i)=>{let o=i==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],d={x:r.map((S,v)=>v)},p=[Math.ceil(Cf(d.x.map(S=>r[S]))/l[0]),1,1];Ee("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let m=1,g=L.size(r),y=[{type:12,data:g},{type:12,data:a},{type:12,data:s},{type:12,data:t.strides},{type:12,data:t.dilations}];yi(t,y),y.push(...ge(e[0].dims,e[1].dims));let _=["rank","rank"],$=e.length===3;$&&(y.push(...ge(e[2].dims)),_.push("rank")),y.push(...ge(r));let w=S=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:s.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];_i(t,v);let b=1,T=rt(e[0].dataType),k=F("x",e[0].dataType,e[0].dims.length,m),C=F("W",e[1].dataType,e[1].dims.length,b),E=[k,C],z=le("result",e[0].dataType,r.length,b),R="";if($){let X=F("bias",e[2].dataType,e[2].dims.length,b);E.push(X),R+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${o?pe("coords",4,5):pe("coords",1,5)}];
        }`}let P=at(m,T),q=gi(t,P,T);return`
            ${R}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${S.registerUniforms(v).declareVariables(...E,z)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${pe("coords",0,k.rank)};
              let d2 = ${o?pe("coords",k.rank-1,k.rank):pe("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${o?pe("coords",1,k.rank):pe("coords",2,k.rank)},
              ${o?pe("coords",2,k.rank):pe("coords",3,k.rank)},
              ${o?pe("coords",3,k.rank):pe("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?pe("uniforms.x_shape",1,k.rank):pe("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${o?pe("uniforms.x_shape",2,k.rank):pe("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${o?pe("uniforms.x_shape",3,k.rank):pe("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${o?pe("uniforms.x_shape",4,k.rank):pe("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${$?"value = value + getBiasByOutputCoords(coords)":""};
              ${q}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${m};${$}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:y}),getShaderSource:w}}}),x1,S1,hS=ee(()=>{we(),xe(),ke(),xi(),x1=(e,t,r,a)=>{let s=e.length>2,i=s?"value += b[output_channel];":"",o=e[0].dims,l=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],m=p/t.group,g=d&&m>=4?Ge(p):1,y=L.size(r)/g,_=[{type:12,data:y},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:m}];yi(t,_),_.push(...ge(o,[l[0],l[1],l[2],l[3]/g]));let $=s?["rank","rank","rank"]:["rank","rank"];_.push(...ge([r[0],r[1],r[2],r[3]/g]));let w=S=>{let v=le("output",e[0].dataType,r.length,g),b=rt(v.type.tensor),T=gi(t,v.type.value,b),k=F("x",e[0].dataType,o.length),C=F("w",e[1].dataType,l.length,g),E=[k,C];s&&E.push(F("b",e[2].dataType,e[2].dims,g));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];_i(t,z);let R=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(z).declareVariables(...E,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${g} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${R}
    ${i}
    ${T}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${g}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:w}},S1=(e,t,r,a)=>{let s=e.length>2,i=Ge(r[3]),o=Ge(r[2]),l=L.size(r)/i/o,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],m=[r[0],r[1],r[2],r[3]/i],g=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];yi(t,g),g.push(...ge(d,p,m));let y=(o-1)*t.strides[1]+p[1],_=$=>{let w=le("output",e[0].dataType,m.length,i),S=rt(w.type.tensor),v=gi(t,w.type.value,S),b=F("x",e[0].dataType,d.length,i),T=F("w",e[1].dataType,p.length,i),k=[b,T];s&&k.push(F("b",e[2].dataType,e[2].dims,i));let C=s?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return _i(t,E),`
  ${$.registerUniforms(E).declareVariables(...k,w)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${y}>;
    var values: array<${w.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${y}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${C}
      ${v}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${o};${y};${p[0]};${p[1]}`,inputDependencies:s?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:_}}}),zf,As,Af,Os,Rp,td,Of,Rf,Bp,cS=ee(()=>{xe(),dS(),pS(),wh(),hS(),xi(),$h(),Er(),zf=(e,t,r,a,s,i)=>{let o=e[0],l=e.slice(i?1:2,i?3:4),d=l.length,p=t[0],m=t.slice(2).map((y,_)=>y+(y-1)*(r[_]-1)),g=l.map((y,_)=>y+a[_]+a[_+d]).map((y,_)=>Math.floor((y-m[_]+s[_])/s[_]));return g.splice(0,0,o),g.splice(i?3:1,0,p),g},As=[2,3,1,0],Af=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Os=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let a=e.pads.slice();no.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let s=Object.assign({},e);return Object.assign(s,{kernelShape:r,pads:a}),s},Rp=e=>{let t=gh(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],s=e.dilations,i=e.group,o=e.kernel_shape,l=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:a,format:r,dilations:s,group:i,kernelShape:o,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},td=(e,t,r,a)=>{let s=r.format==="NHWC",i=zf(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,s);if(r.group!==1){let E=[t[0]];if(s){let z=e.kernelCustomData.wT??e.compute(Et(t[1],As),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),E.push(z)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&s&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(S1(E,r,i,a),{inputs:E}):e.compute(x1(E,r,i,a),{inputs:E});return}let o=t.length===3,l=t[0].dims[s?1:2],d=t[0].dims[s?2:3],p=t[0].dims[s?3:1],m=t[1].dims[2],g=t[1].dims[3],y=i[s?1:2],_=i[s?2:3],$=i[s?3:1],w=s&&m===l&&g===d&&r.pads[0]===0&&r.pads[1]===0;if(w||m===1&&g===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let E=i[0],z,R,P,q=[];if(s){let K=e.kernelCustomData.wT??e.compute(Et(t[1],As),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),w){let J=l*d*p;z=t[0].reshape([1,E,J]),R=K.reshape([1,J,$]),P=[1,E,$]}else z=t[0].reshape([E,l*d,p]),R=K.reshape([1,p,$]),P=[E,y*_,$];q.push(z),q.push(R)}else z=t[0].reshape([E,p,l*d]),R=t[1].reshape([1,$,p]),P=[E,$,y*_],q.push(R),q.push(z);o&&q.push(t[2]);let X=P[2],ie=q[0].dims[q[0].dims.length-1];X<8&&ie<8?e.compute(_h(q,r,i,P,s,a),{inputs:q}):e.compute(oo(q,r,i,P,s,a),{inputs:q});return}let S=!0,v=e.kernelCustomData.wT??e.compute(Et(t[1],As),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];o&&b.push(t[2]);let T=s?y*_:$,k=s?$:y*_,C=m*g*p;e.compute(w1(b,r,i,T,k,C,o,S,a),{inputs:b})},Of=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let s=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),o=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=Os({...t,pads:s,strides:i,dilations:o,kernelShape:l},a);td(e,a,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Rf=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",s=Os(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,o=b1(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,a);e.compute(v1(t,s,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],a))},Bp=(e,t)=>{if(Af(e.inputs,t),e.inputs[0].dims.length===3)Of(e,t);else if(e.inputs[0].dims.length===5)Rf(e,e.inputs,t);else{let r=Os(t,e.inputs);td(e,e.inputs,r)}}}),k1,fS=ee(()=>{we(),$r(),xe(),ke(),k1=(e,t,r)=>{let a=e.length>2,s=t.outputShape,i=t.format==="NHWC",o=t.group,l=e[1].dims,d=l[2]/o,p=l[3],m=i?Ge(d):1,g=i?Ge(p):1,y=i?p===1?m:g:1,_=L.size(s)/g,$=[Math.ceil(_/64),1,1];Ee("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let w=["rank","rank"],S=[t.strides[0],t.strides[1]],v=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],b=[t.dilations[0],t.dilations[1]],T=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],k=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],C=[{type:12,data:_},{type:12,data:S},{type:12,data:v},{type:12,data:b},{type:12,data:T},{type:6,data:k},{type:12,data:d},{type:12,data:p},...ge(e[0].dims,e[1].dims)];a&&(C.push(...ge(e[2].dims)),w.push("rank")),C.push(...ge(s));let E=z=>{let R=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=rt(e[0].dataType),q=i?1:2,X=i?2:3,ie=i?3:1,K=F("W",e[1].dataType,e[1].dims.length,y),J=F("Dy",e[0].dataType,e[0].dims.length,m),Z=[J,K];a&&Z.push(F("bias",e[2].dataType,[s[ie]].length,g));let W=le("result",e[0].dataType,s.length,g),oe=()=>{let H="";if(m===1)H+=`
        let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${K.getByOffset(`w_offset / ${y}`)};
        dotProd = dotProd + xValue * wValue;`;else if(p===1)H+=`
          let wValue = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${y}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let fe=0;fe<m;fe++)H+=`
            let wValue${fe} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${fe}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${fe}] * wValue${fe};`;return H},ce=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",ie)};
            let r = ${W.indicesGet("outputIndices",q)};
            let c = ${W.indicesGet("outputIndices",X)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${W.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${P}(dyRCorner) + ${P}(wR)) / ${P}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${P}(uniforms.Dy_shape[${q}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${P}(dyCCorner) + ${P}(wC)) / ${P}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${P}(uniforms.Dy_shape[${X}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${m}) {
                  let xValue = ${i?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m}`):J.get("batch","inputChannel","idyR","idyC")};
                  ${oe()}
                  inputChannel = inputChannel + ${m};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${g}]`:""};
            ${W.setByOffset("global_idx","value")};
          `;return`
    ${z.registerUniforms(R).declareVariables(...Z,W)}
      ${z.mainStart()}
      ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ce}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${m}${y}${g}${p===1}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:r?r(s):s,dataType:e[0].dataType}],programUniforms:C}),getShaderSource:E}}}),Bf,Nf,Mf,rd,T1,Df,id,Pf,C1,mS=ee(()=>{fS(),xi(),Er(),Bf=(e,t,r,a,s,i)=>(e-1)*t+r+(a-1)*s+1-i,Nf=(e,t,r,a,s)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=i,r[s]=e-i):t==="SAME_LOWER"&&(r[a]=e-i,r[s]=i)},Mf=(e,t,r,a,s,i,o,l,d,p)=>{let m=e.length-2,g=p.length===0;d.length<m&&d.push(...Array(m-d.length).fill(0));let y=e[0],_=t[l?3:1]*s;for(let $=0,w=e.length-m-(l?1:0);$<m;++$,++w){let S=e[w],v=g?S*o[$]:p[$],b=Bf(S,o[$],i[$],t[w],r[$],v);Nf(b,a,i,$,$+m),g&&p.push(o[$]*(S-1)+d[$]+(t[w]-1)*r[$]+1-i[$]-i[$+m])}p.splice(0,0,y),p.splice(l?3:1,0,_)},rd=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((g,y)=>g*y,1)===0){r.length=0;for(let g=2;g<t[1].dims.length;++g)r.push(t[1].dims[g])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let s=e.pads.slice(),i=e.outputShape.slice(),o=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;d=new Array(g).fill(1)}let p=e.strides.slice();if(p.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;p=new Array(g).fill(1)}Mf(l,r,d,e.autoPad,e.group,s,p,a,o,i);let m=Object.assign({},e);return Object.assign(m,{kernelShape:r,pads:s,outputPadding:o,outputShape:i,dilations:d,strides:p}),m},T1=e=>{let t=gh(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],s=e.dilations,i=e.group,o=e.kernelShape,l=e.pads,d=e.strides,p=e.wIsConst(),m=e.outputPadding,g=e.outputShape;return{autoPad:a,format:r,dilations:s,group:i,kernelShape:o,outputPadding:m,outputShape:g,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Df=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let s=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==s))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((o,l)=>o+l,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((o,l)=>o+l,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((o,l)=>o+l,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((o,l)=>o+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},id=(e,t,r,a)=>{let s=e.kernelCustomData.wT??e.compute(Et(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=s);let i=[t[0],s];t.length===3&&i.push(t[2]),e.compute(k1(i,r,a),{inputs:i})},Pf=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let s=t.kernelShape;(s.length===0||s[0]===0)&&(s=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],o=[1].concat(o),i=[1].concat(i),s=[1].concat(s);let d=t.outputPadding;d=[0].concat(d);let p=rd({...t,pads:l,strides:o,dilations:i,kernelShape:s,outputPadding:d},a);id(e,a,p,m=>r?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},C1=(e,t)=>{if(Df(e.inputs,t),e.inputs[0].dims.length===3)Pf(e,t);else{let r=rd(t,e.inputs);id(e,e.inputs,r)}}}),Uf,I1,E1,gS=ee(()=>{we(),xe(),Fe(),ke(),Uf=(e,t,r,a)=>{let s=L.size(t),i=t.length,o=F("input",e,i),l=le("output",e,i),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=L.normalizeAxis(d,i),m=g=>{let y=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,_=pe("uniforms.input_shape","uniforms.axis",i),$=a.reverse?y+(a.exclusive?" + 1":""):"0",w=a.reverse?_:y+(a.exclusive?"":" + 1");return`
                ${g.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,l)}
                ${g.mainStart()}
                  ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${$};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},{type:12,data:p},...ge(t,t)]}),getShaderSource:m}},I1=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,s=e.inputs[1];e.compute(Uf(a,r,s,t),{inputs:[0]})},E1=e=>{let t=e.exclusive===1,r=e.reverse===1;return Ne({exclusive:t,reverse:r})}}),Wf,qf,Vf,z1,A1,yS=ee(()=>{we(),xe(),Fe(),ke(),Wf=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},qf=(e,t,r,a)=>{let s=[];s.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)s.push(r.indicesSet("a",e[i],`i[${i}]`));return s.push("return a;}"),s.join(`
`)},Vf=(e,t)=>{let r,a,s,i,o,l,d=t.format==="NHWC",p=t.blocksize,m=t.mode==="DCR";d?([r,a,s,i]=e.dims,o=m?[r,a,s,p,p,i/p**2]:[r,a,s,i/p**2,p,p],l=m?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,s,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=m?[r,p,p,i/p**2,a,s]:[r,i/p**2,p,p,a,s],l=m?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let g=e.reshape(o),y=g.dims.length,_=e.dataType,$=F("a",_,y),w=le("output",_,y),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables($,w)}

  ${qf(l,y,$,w)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=d?[r,a*p,s*p,i/p**2]:[r,i/p**2,a*p,s*p],T=L.size(b),k=g.dims,C=L.sortBasedOnPerm(k,l);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...ge(k,C)]}},getShaderSource:S}},z1=(e,t)=>{Wf(e.inputs),e.compute(Vf(e.inputs[0],t))},A1=e=>Ne({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Rs,Kn,ad,Lf,Gf,Hf,Ff,nd,jf,O1,R1,_S=ee(()=>{we(),xe(),Fe(),ke(),Rs="[a-zA-Z]|\\.\\.\\.",Kn="("+Rs+")+",ad="^"+Kn+"$",Lf="("+Kn+",)*"+Kn,Gf="^"+Lf+"$",Hf=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Ff=class{constructor(e,t){var s;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Gf)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,o)=>{let l=e[o].dims.slice();if(!i.match(RegExp(ad)))throw new Error("Invalid LHS term");let d=this.processTerm(i,!0,l,o);this.lhs.push(d)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,o])=>o.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(Kn)))throw new Error("Invalid RHS");(s=a.match(RegExp(Rs,"g")))==null||s.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(i);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let s=r.length,i=!1,o=[],l=0;if(!e.match(RegExp(ad))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(Rs,"g")),p=new Hf(a);return d==null||d.forEach((m,g)=>{if(m==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let y=s-d.length+1;if(y<0)throw new Error("Ellipsis out of bounds");if(o=r.slice(l,l+y),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<o.length;_++){let $=String.fromCharCode(48+_);p.addSymbol($,g+_),this.addSymbol($,r[l++],a)}}else p.addSymbol(m,g+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(m,r[l++],a)}),p}},nd=e=>e+"_max",jf=(e,t,r,a)=>{let s=e.map(p=>p.length).map((p,m)=>F(`input${m}`,t,p)),i=L.size(a),o=le("output",t,a.length),l=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let m=[],g="var prod = 1.0;",y="var sum = 0.0;",_="sum += prod;",$=[],w=[],S=[],v=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,C)=>{var E;if(r.rhs.symbolToIndices.has(C)){let z=(E=r.rhs.symbolToIndices.get(C))==null?void 0:E[0];z!==void 0&&r.lhs.forEach((R,P)=>{if(k.inputIndices.includes(P)){let q=R.symbolToIndices.get(C);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(X=>{m.push(`${s[P].indicesSet(`input${P}Indices`,X,o.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,R)=>{if(k.inputIndices.includes(R)){let P=z.symbolToIndices.get(C);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(q=>{$.push(`${s[R].indicesSet(`input${R}Indices`,q,`${C}`)}`)}),v.push(`prod *= ${s[R].getByIndices(`input${R}Indices`)};`)}}),w.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${nd(C)}; ${C}++) {`),S.push("}")});let T=b?[...m,`let sum = ${s.map((k,C)=>k.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...m,y,...w,...$,g,...v,_,...S];return`
            ${p.registerUniforms(l.map(k=>({name:`${nd(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...s,o)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${s.map((k,C)=>`var input${C}Indices: ${s[C].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=l.filter(g=>r.symbolToInfo.has(g)).map(g=>{var y;return{type:12,data:((y=r.symbolToInfo.get(g))==null?void 0:y.dimValue)||0}});p.push({type:12,data:i});let m=e.map((g,y)=>[...ge(g)]).reduce((g,y)=>g.concat(y),p);return m.push(...ge(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m}},getShaderSource:d}},O1=(e,t)=>{let r=new Ff(e.inputs,t.equation),a=r.outputDims,s=e.inputs.map((i,o)=>i.dims);e.compute(jf(s,e.inputs[0].dataType,r,a))},R1=e=>{let t=e.equation.replace(/\s+/g,"");return Ne({equation:t})}}),Kf,sd,Qf,Zf,B1,$S=ee(()=>{we(),xe(),ke(),Kf=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,s=t.length<r.length?0:t.length-r.length;for(;a<r.length&&s<t.length;++a,++s)if(r[a]!==t[s]&&r[a]!==1&&t[s]!==1)throw new Error("Expand requires shape to be broadcastable to input")},sd=(e,t)=>{let r=e.length-t.length,a=[];for(let s=0;s<r;++s)a.push(e[s]);for(let s=0;s<t.length;++s)a.push(t[s]===1?e[s+r]:t[s]);return a},Qf=(e,t)=>e.length>t.length?sd(e,t):sd(t,e),Zf=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=Qf(t,r),s=e[0].dataType,i=s===9||L.size(t)===1,o=s===9||t.length>0&&t[t.length-1]%4===0?4:1,l=i||a.length>0&&a[a.length-1]%4===0?4:1,d=Math.ceil(L.size(a)/l),p=g=>{let y=F("input",s,t.length,o),_=le("output",s,a.length,l),$;if(s===9){let w=(S,v,b="")=>`
          let outputIndices${v} = ${_.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,_)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${b}(${y.getByOffset(`index${v}`)}[component${v}]);
        `;$=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else $=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${y.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${y.getByOffset(`inputOffset / ${o}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${g.registerUniform("vec_size","u32").declareVariables(y,_)}
    ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${$}`},m=[{type:12,data:d},...ge(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${o}${l}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m})}},B1=e=>{Kf(e.inputs),e.compute(Zf(e.inputs),{inputs:[0]})}}),Xf,N1,wS=ee(()=>{we(),xe(),ke(),mh(),Xf=e=>{let t=e[0].dataType,r=L.size(e[0].dims),a=L.size(e[1].dims),s=a%4===0,i=o=>{let l=F("x",t,[1],4),d=F("bias",t,[1],4),p=le("y",t,[1],4),m=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],g=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${d.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,y=s?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${g(0)}${g(1)}${g(2)}${g(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(m).declareVariables(l,d,p)}

    ${Ep(ft(t))}

    ${o.mainStart(Ri)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${y}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",zp("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Ri/4)}})}},N1=e=>{e.inputs.length<2||L.size(e.inputs[1].dims)===0?t1(e):e.compute(Xf(e.inputs))}}),Jf,Yf,M1,D1,bS=ee(()=>{we(),xe(),Fe(),ke(),Jf=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Yf=(e,t)=>{let r=e[0].dims,a=e[1].dims,s=r.length,i=L.normalizeAxis(t.axis,s),o=r.slice(0);o.splice(i,1,...a);let l=r[i],d=e[0].dataType===9?4:1,p=Math.ceil(L.size(o)/d),m=[{type:12,data:p},{type:6,data:l},{type:12,data:i},...ge(e[0].dims,e[1].dims,o)],g=y=>{let _=F("data",e[0].dataType,e[0].dims.length,d),$=F("inputIndices",e[1].dataType,e[1].dims.length),w=le("output",e[0].dataType,o.length,d),S=b=>{let T=a.length,k=`var indicesIndices${b}  = ${$.type.indices}(0);`;for(let C=0;C<T;C++)k+=`${T>1?`indicesIndices${b}[${C}]`:`indicesIndices${b}`} = ${o.length>1?`outputIndices${b}[uniforms.axis + ${C}]`:`outputIndices${b}`};`;k+=`
          var idx${b} = ${$.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${_.type.indices};
        `;for(let C=0,E=0;C<s;C++)C===i?(k+=`${s>1?`dataIndices${b}[${C}]`:`dataIndices${b}`} = u32(idx${b});`,E+=T):(k+=`${s>1?`dataIndices${b}[${C}]`:`dataIndices${b}`} = ${o.length>1?`outputIndices${b}[${E}]`:`outputIndices${b}`};`,E++);return k},v;if(e[0].dataType===9){let b=(T,k,C="")=>`
          let outputIndices${k} = ${w.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${_.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${T}[${k}] = ${C}(${_.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,$,w)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:g}},M1=e=>Ne({axis:e.axis}),D1=(e,t)=>{let r=e.inputs;Jf(r),e.compute(Yf(e.inputs,t))}}),em,P1,U1,vS=ee(()=>{we(),xe(),ke(),em=(e,t,r,a,s,i,o,l,d)=>{let p=[{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:12,data:r},{type:12,data:o},{type:12,data:l},{type:12,data:d}],m=[i];p.push(...ge(t.dims,m));let g=y=>{let _=F("indices_data",t.dataType,t.dims.length),$=le("input_slice_offsets_data",12,1,1),w=[_,$],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:s.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${y.registerUniforms(S).declareVariables(...w)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${s.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${s.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:m,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:g},{inputs:[t],outputs:[-1]})[0]},P1=(e,t)=>{let r=e.inputs,a=r[0].dims,s=r[0].dataType,i=r[1].dims,o=i[i.length-1],l=L.sizeToDimension(i,i.length-1),d=L.sizeFromDimension(a,t.batchDims+o),p=L.sizeToDimension(a,t.batchDims),m=L.sizeFromDimension(a,t.batchDims),g=l/p,y=new Array(o),_=d;for(let k=0;k<o;++k)y[o-1-k]=_,_*=a[t.batchDims+o-1-k];let $=em(e,r[1],y,t.batchDims,a,l,g,m,o),w=t.batchDims+o;if(w>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=i.slice(0,-1).concat(a.slice(w)),v=L.size(S),b=[{type:12,data:v},{type:12,data:d},...ge(r[0].dims,$.dims,S)],T=k=>{let C=F("data",r[0].dataType,r[0].dims.length),E=F("slice_offsets",12,$.dims.length),z=le("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,E,z)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:s}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:T},{inputs:[r[0],$]})},U1=e=>({batchDims:e.batch_dims,cacheKey:""})}),tm,rm,W1,q1,xS=ee(()=>{we(),xe(),Fe(),ke(),tm=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=L.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,s=e[0],i=e[2],o=e.length===4?e[3]:void 0;if(i.dims.length!==s.dims.length||!s.dims.map((l,d)=>d===r?Math.ceil(l/a)===i.dims[d]:l===i.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==s.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==i.dims.length||!o.dims.map((l,d)=>l===i.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},rm=(e,t)=>{let r=e[0].dims,a=e[1].dims,s=r.length,i=L.normalizeAxis(t.gatherAxis,s),o=L.normalizeAxis(t.quantizeAxis,s),l=r.slice(0);l.splice(i,1,...a);let d=L.size(l),p=e[2].dataType,m=e[0].dataType===22,g=[{type:12,data:d},{type:12,data:o},{type:12,data:i},{type:12,data:t.blockSize},...ge(...e.map((_,$)=>_.dims),l)],y=_=>{let $=F("data",e[0].dataType,e[0].dims.length),w=F("inputIndices",e[1].dataType,e[1].dims.length),S=F("scales",e[2].dataType,e[2].dims.length),v=e.length>3?F("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=le("output",p,l.length),T=[$,w,S];v&&T.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(k).declareVariables(...T,b)}
        ${_.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${$.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${$.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${$.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${$.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${$.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${$.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ft(p)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,$)=>$!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,$)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:g}),getShaderSource:y}},W1=(e,t)=>{let r=e.inputs;tm(r,t),e.compute(rm(e.inputs,t))},q1=e=>Ne({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),im,am,V1,L1,SS=ee(()=>{we(),xe(),Fe(),ke(),im=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},am=(e,t)=>{let r=e[0].dims,a=e[0].dataType,s=r.length,i=e[1].dims,o=e[1].dataType,l=L.normalizeAxis(t.axis,s),d=r[l],p=i.slice(0),m=L.size(p),g=F("input",a,s),y=F("indicesInput",o,i.length),_=le("output",a,p.length),$=[{type:12,data:m},{type:6,data:d},{type:12,data:l}];return $.push(...ge(r,i,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:$}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,_)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${y.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${g.type.indices}(outputIndices);
      ${g.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${g.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},V1=e=>Ne({axis:e.axis}),L1=(e,t)=>{let r=e.inputs;im(r),e.compute(am(e.inputs,t))}}),nm,sm,G1,H1,kS=ee(()=>{we(),xe(),ke(),nm=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},sm=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[s,i,o]=F$.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),l=[s,i];if(!l)throw new Error("Can't use gemm on the given tensors");let d=16,p=Math.ceil(i/d),m=Math.ceil(s/d),g=!0,y=L.size(l),_=[{type:12,data:g?p:y},{type:12,data:s},{type:12,data:i},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],$=["type","type"];e.length===3&&(_.push(...ge(e[2].dims)),$.push("rank")),_.push(...ge(l));let w=v=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",k=F("a",e[0].dataType,e[0].dims),C=F("b",e[1].dataType,e[1].dims),E=k.type.value,z=null,R=[k,C];e.length===3&&(z=F("c",e[2].dataType,e[2].dims.length),R.push(z));let P=le("output",e[0].dataType,l.length);R.push(P);let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(q).declareVariables(...R)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${T}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",P)}; value += ${E}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let b=F("a",e[0].dataType,e[0].dims),T=F("b",e[1].dataType,e[1].dims),k=null,C=[b,T];e.length===3&&(k=F("c",e[2].dataType,e[2].dims.length),C.push(k));let E=le("output",e[0].dataType,l.length);C.push(E);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],R="",P="";t.transA&&t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,R="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,R="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,R="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,R="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let q=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(z).declareVariables(...C)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${d}>, ${d}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${d}>, ${d}>;
  ${v.mainStart([d,d,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${d};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${d};
    let num_tiles = (uniforms.K - 1) / ${d} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${P}
      k_start = k_start + ${d};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${d}; k++) {
        ${R}
      }
      workgroupBarrier();
    }

    ${q}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return g?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:p*m},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:w}},G1=e=>{let t=e.transA,r=e.transB,a=e.alpha,s=e.beta;return{transA:t,transB:r,alpha:a,beta:s,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},H1=(e,t)=>{nm(e.inputs),e.compute(sm(e.inputs,t))}}),ar,yr,ei,ti,om,um,lm,dm,pm,hm,cm,fm,F1,j1,TS=ee(()=>{we(),xe(),Fe(),ke(),[ar,yr,ei,ti]=[0,1,2,3],om=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},um=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,lm=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,dm=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,pm=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,hm=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ar}] = batch;
     indices[${yr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${ei}] = u32(r);
            indices[${ti}] = u32(c);
          }
        `;case"border":return`
          indices[${ei}] = u32(clamp(r, 0, H - 1));
          indices[${ti}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${ei}] = gs_reflect(r, border[1], border[3]);
          indices[${ti}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,cm=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ar}], indices[${yr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ar}], indices[${yr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ar}], indices[${yr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ar}], indices[${yr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ar}], indices[${yr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ar}], indices[${yr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,fm=(e,t)=>{let r=F("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],s=F("grid",e[1].dataType,a.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ar,yr,ei,ti]=[0,3,1,2]);let o=le("output",e[0].dataType,i.length),l=r.type.value,d=L.size(i),p=[{type:12,data:d},...ge(e[0].dims,a,i)],m=g=>`
  ${g.registerUniform("output_size","u32").declareVariables(r,s,o)}
  ${um}
  ${lm(l)}
  ${dm(t)}
  ${pm(t)}
  ${hm(r,l,t)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${ei}]);
      let W_in = i32(uniforms.x_shape[${ti}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${ar}], indices[${ei}], indices[${ti}]);
      let nxy = ${s.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${cm(o,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:g=>{let y=L.size(i);return{outputs:[{dims:i,dataType:g[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:p}},getShaderSource:m}},F1=(e,t)=>{om(e.inputs),e.compute(fm(e.inputs,t))},j1=e=>Ne({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),$t,mm,K1,od,gm,ps,Q1,Z1=ee(()=>{we(),xe(),Fe(),ph(),fh(),ke(),Er(),$t=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,mm=(e,t)=>{let r=e[0],a=$t(e,1),s=$t(e,2),i=$t(e,3),o=$t(e,4),l=$t(e,5),d=$t(e,6),p=$t(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let m=r.dims[0],g=r.dims[1],y=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=g,$=0,w=0,S=Math.floor(y/t.numHeads);if(d&&p&&L.size(d.dims)&&L.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==m||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==m||p.dims[1]!==t.numHeads||p.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=d.dims[2],w=d.dims[2]}else if(d&&L.size(d.dims)||p&&L.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(a&&L.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,_=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,_=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,_=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(i&&L.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=$+_,T=0;if(o&&L.size(o.dims)>0){T=8;let z=o.dims;throw z.length===1?z[0]===m?T=1:z[0]===3*m+2&&(T=3):z.length===2&&z[0]===m&&z[1]===b&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,C=y;if(s&&L.size(s.dims)>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(_!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=s.dims[2]}else{if(_!==s.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=s.dims[1]*s.dims[3],k=!0}}let E=!1;if(o&&L.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(l&&L.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==m||l.dims[1]!==t.numHeads||l.dims[2]!==g||l.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:g,pastSequenceLength:$,kvSequenceLength:_,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:y,vHiddenSize:C,headSize:S,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:E,passPastInKv:k,qkvFormat:v}},K1=e=>Ne({...e}),od=Ne({perm:[0,2,1,3]}),gm=(e,t,r,a,s,i,o)=>{let l=[a,s,i],d=L.size(l),p=[{type:12,data:d},{type:12,data:o},{type:12,data:i}],m=g=>{let y=le("qkv_with_bias",t.dataType,l),_=F("qkv",t.dataType,l),$=F("bias",r.dataType,l),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${g.registerUniforms(w).declareVariables(_,$,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:m},{inputs:[t,r],outputs:[-1]})[0]},ps=(e,t,r,a,s,i,o,l)=>{let d=i;if(o&&L.size(o.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=gm(e,i,o,t,a,r*s,l),d=d.reshape([t,a,r,s]),r===1||a===1?d:e.compute(Et(d,od.perm),{inputs:[d],outputs:[-1]})[0]}else return i.dims.length===3&&(d=i.reshape([t,a,r,s])),r===1||a===1?d:e.compute(Et(d,od.perm),{inputs:[d],outputs:[-1]})[0]},Q1=(e,t)=>{let r=mm(e.inputs,t),a=e.inputs[0],s=$t(e.inputs,1),i=$t(e.inputs,2),o=$t(e.inputs,3),l=$t(e.inputs,4),d=$t(e.inputs,5),p=$t(e.inputs,6),m=$t(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((s==null?void 0:s.dims.length)===5)throw new Error("Packed KV is not implemented");let g=s&&i&&s.dims.length===4&&i.dims.length===4,y=ps(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,o,0);if(g)return $s(e,y,s,i,l,void 0,p,m,d,r);if(!s||!i)throw new Error("key and value must be provided");let _=ps(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,s,o,r.hiddenSize),$=ps(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,o,2*r.hiddenSize);$s(e,y,_,$,l,void 0,p,m,d,r)}}),ym,_m,$m,wm,Np,X1,J1,Y1=ee(()=>{we(),xe(),Fe(),ke(),ym=e=>{if(!e||e.length<1)throw new Error("too few inputs")},_m=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(s=>r.push(Number(s))),a=r.length),Ne({numOutputs:a,axis:t.axis,splitSizes:r})},$m=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${pe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,wm=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let s=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(s):a===0?r.push(`if (output_number == ${a}u) { ${s} }`):a===t-1?r.push(`else { ${s} }`):r.push(`else if (output_number == ${a}) { ${s} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Np=(e,t)=>{let r=e[0].dims,a=L.size(r),s=e[0].dataType,i=L.normalizeAxis(t.axis,r.length),o=new Array(t.numOutputs),l=F("input",s,r.length),d=new Array(t.numOutputs),p=[],m=[],g=0,y=[{type:12,data:a}];for(let $=0;$<t.numOutputs;$++){g+=t.splitSizes[$],d[$]=g;let w=r.slice();w[i]=t.splitSizes[$],m.push(w),o[$]=le(`output${$}`,s,w.length),p.push({dims:m[$],dataType:e[0].dataType})}y.push({type:12,data:d},...ge(r,...m));let _=$=>`
  ${$.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...o)}
  ${$m(d.length)}
  ${wm(o)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${pe("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:y})}},X1=(e,t)=>{ym(e.inputs);let r=e.inputs.length===1?t:_m(e.inputs,t);e.compute(Np(e.inputs,r),{inputs:[0]})},J1=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Ne({axis:t,numOutputs:a,splitSizes:r})}}),bm,vm,ud,eb,CS=ee(()=>{Fe(),fh(),Z1(),Y1(),Er(),bm=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],s=e[2],i=e[3],o=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=r.dims[0],p=r.dims[1],m=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],g=p,y=0,_=!a||a.dims.length===0,$=Math.floor(_?m/(t.numHeads+2*t.kvNumHeads):m/t.numHeads);_&&(m=$*t.numHeads);let w=i&&i.dims.length!==0,S=o&&o.dims.length!==0;if(w&&i.dims.length===4&&i.dims[0]===d&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===$)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&S){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=i.dims[2]}else if(w||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');g=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');g=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let b=0,T=!1,k=t.kvNumHeads?$*t.kvNumHeads:m;if(s&&s.dims.length>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(g!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=s.dims[2]}else{if(g!==s.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=s.dims[1]*s.dims[3],T=!0}}let C=e.length>4?e[5]:void 0;if(C&&C.dims.length!==1&&C.dims[0]!==d)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:d,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:m,vHiddenSize:k,headSize:$,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:v}},vm=Ne({perm:[0,2,1,3]}),ud=(e,t,r)=>{let a=t,s=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,s,r.headSize]),a=e.compute(Et(a,vm.perm),{inputs:[a],outputs:[-1]})[0]),a},eb=(e,t)=>{var S;let r=bm(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],s=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,m=r.kvNumHeads?r.kvNumHeads:r.numHeads,g=Ne({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,m*r.headSize,m*r.headSize]}),[y,_,$]=!s&&!i?e.compute(Np([a],g),{inputs:[a],outputs:[-1,-1,-1]}):[a,s,i],w=ps(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,y,void 0,0);$s(e,w,ud(e,_,r),ud(e,$,r),void 0,void 0,o,l,void 0,r,d,p)}}),ld,xm,Sm,tb,IS=ee(()=>{we(),xe(),Er(),ke(),ld=(e,t,r,a,s,i,o,l)=>{let d=Ge(i),p=d===1?"f32":`vec${d}f`,m=d===1?"vec2f":`mat2x${d}f`,g=s*o,y=64;g===1&&(y=256);let _=[s,o,i/d],$=[s,o,2],w=["rank","type","type"],S=[];S.push(...ge(_,$));let v=b=>{let T=F("x",t.dataType,3,d),k=F("scale",r.dataType,r.dims),C=F("bias",a.dataType,a.dims),E=le("output",1,3,2),z=[T,k,C,E];return`
  var<workgroup> workgroup_shared : array<${m}, ${y}>;
  const workgroup_size = ${y}u;
  ${b.declareVariables(...z)}
  ${b.mainStart(y)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${m}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Cr("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${Cr("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l};${y}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:$,dataType:1}],dispatchGroup:{x:g},programUniforms:S}),getShaderSource:v},{inputs:[t,r,a],outputs:[-1]})[0]},xm=(e,t,r)=>{let a=t[0].dims,s=a,i=2,o=a[0],l=a[1],d=L.sizeFromDimension(a,i),p=Ge(d),m=L.size(s)/p,g=ld(e,t[0],t[1],t[2],o,d,l,r.epsilon),y=[o,l,d/p],_=[o,l],$=["type","none"],w=S=>{let v=F("x",t[0].dataType,y.length,p),b=F("scale_shift",1,_.length,2),T=le("output",t[0].dataType,y.length,p),k=[v,b,T];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...ge(y,_,y)]}),getShaderSource:w},{inputs:[t[0],g]})},Sm=(e,t,r)=>{let a=t[0].dims,s=a,i=a[0],o=a[a.length-1],l=L.sizeFromDimension(a,1)/o,d=Ge(o),p=L.size(s)/d,m=[{type:12,data:l},{type:12,data:Math.floor(o/d)}],g=["type","type"],y=!1,_=[0,a.length-1];for(let v=0;v<a.length-2;v++)y=y||a[v+1]!==1,_.push(v+1);y=y&&a[a.length-1]!==1;let $=y?e.compute(Et(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(v,b)=>a[_[b]])),w=ld(e,$,t[1],t[2],i,l,o,r.epsilon),S=v=>{let b=rt(t[0].dataType),T=d===1?"vec2f":`mat${d}x2f`,k=z=>{let R=z===0?"x":"y",P=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${b}(${P}(scale.${R}))`;case 2:return`vec2<${b}>(${P}(scale[0].${R}, scale[1].${R}))`;case 4:return`vec4<${b}>(${P}(scale[0].${R}, scale[1].${R}, scale[2].${R}, scale[3].${R}))`;default:throw new Error(`Not supported compoents ${d}`)}},C=F("input",t[0].dataType,t[0].dims,d),E=le("output",t[0].dataType,s,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:S},{inputs:[t[0],w]})},tb=(e,t)=>{t.format==="NHWC"?Sm(e,e.inputs,t):xm(e,e.inputs,t)}}),km,Tm,rb,ES=ee(()=>{we(),xe(),ke(),km=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Tm=(e,t,r)=>{let a=t.simplified,s=e[0].dims,i=e[1],o=!a&&e[2],l=s,d=L.normalizeAxis(t.axis,s.length),p=L.sizeToDimension(s,d),m=L.sizeFromDimension(s,d),g=L.size(i.dims),y=o?L.size(o.dims):0;if(g!==m||o&&y!==m)throw new Error(`Size of X.shape()[axis:] == ${m}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${g} and bias size of ${y}`);let _=[];for(let C=0;C<s.length;++C)C<d?_.push(s[C]):_.push(1);let $=Ge(m),w=["type","type"],S=[{type:12,data:p},{type:1,data:m},{type:12,data:Math.floor(m/$)},{type:1,data:t.epsilon}];o&&w.push("type");let v=r>1,b=r>2,T=C=>{let E=rt(e[0].dataType),z=[F("x",e[0].dataType,e[0].dims,$),F("scale",i.dataType,i.dims,$)];o&&z.push(F("bias",o.dataType,o.dims,$)),z.push(le("output",e[0].dataType,l,$)),v&&z.push(le("mean_data_output",1,_)),b&&z.push(le("inv_std_output",1,_));let R=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(R).declareVariables(...z)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Tp("f32",$)};
    var mean_square_vector = ${Tp("f32",$)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${zi(E,$,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Cr("mean_vector",$)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Cr("mean_square_vector",$)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${zi(E,$,"x[j + offset]")};
      let f32scale = ${zi(E,$,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${zi(E,$,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:l,dataType:e[0].dataType}];return v&&k.push({dims:_,dataType:1}),b&&k.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${$};${r};${a}`,inputDependencies:w},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:S}),getShaderSource:T}},rb=(e,t)=>{km(e.inputs),e.compute(Tm(e.inputs,t,e.outputCount))}}),Cm,ib,zS=ee(()=>{xe(),$h(),wh(),Cm=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},ib=e=>{Cm(e.inputs);let t=Oi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(_h(e.inputs,{activation:""},t));else{let s=t[t.length-2],i=L.size(e.inputs[0].dims.slice(0,-2)),o=L.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&s===1&&o===1){let l=e.inputs[0].reshape([1,i,a]),d=e.inputs[1].reshape([1,a,r]),p=[1,i,r],m=[l,d];e.compute(oo(m,{activation:""},t,p),{inputs:m})}else e.compute(oo(e.inputs,{activation:""},t))}}}),Im,Em,zm,ab,nb,AS=ee(()=>{we(),xe(),Fe(),ke(),Im=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let s=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,o=e[1];if(!L.areEqual(o.dims,[t.n,s,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(L.size(l)!==t.n*s)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*s:t.n*Math.floor((s+1)/2);if(L.size(d)!==p)throw new Error("zeroPoints input size error.")}},Em=(e,t)=>{let r=e[0].dims,a=r.length,s=r[a-2],i=t.k,o=t.n,l=r.slice(0,a-2),d=L.size(l),p=e[1].dims[2]/4,m=e[0].dataType,g=Ge(t.k),y=Ge(p),_=Ge(o),$=l.concat([s,o]),w=s>1&&o/_%2===0?2:1,S=L.size($)/_/w,v=64,b=[],T=[d,s,i/g],k=L.convertShape(e[1].dims).slice();k.splice(-1,1,p/y),b.push(...ge(T)),b.push(...ge(k)),b.push(...ge(e[2].dims)),e.length===4&&b.push(...ge(L.convertShape(e[3].dims)));let C=[d,s,o/_];b.push(...ge(C));let E=z=>{let R=T.length,P=F("a",e[0].dataType,R,g),q=F("b",12,k.length,y),X=F("scales",e[2].dataType,e[2].dims.length),ie=[P,q,X],K=e.length===4?F("zero_points",12,e[3].dims.length):void 0;K&&ie.push(K);let J=C.length,Z=le("output",e[0].dataType,J,_),W=rt(e[0].dataType),oe=(()=>{switch(g){case 1:return`array<${W}, 8>`;case 2:return`mat4x2<${W}>`;case 4:return`mat2x4<${W}>`;default:throw new Error(`${g}-component is not supported.`)}})(),ce=()=>{let B=`
          // reuse a data
            var input_offset = ${P.indicesToOffset(`${P.type.indices}(batch, row, word_offset)`)};
            var a_data: ${oe};
            for (var j: u32 = 0; j < ${8/g}; j++) {
              a_data[j] = ${P.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let U=0;U<_*w;U++)B+=`
            b_value = ${y===1?`b${U}_data`:`b${U}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${oe}(${Array.from({length:4},(se,$e)=>`${W}(b_value_lower[${$e}]), ${W}(b_value_upper[${$e}])`).join(", ")});
            b_dequantized_values = ${g===1?`${oe}(${Array.from({length:8},(se,$e)=>`(b_quantized_values[${$e}] - ${K?`zero_point${U}`:"zero_point"}) * scale${U}`).join(", ")});`:`(b_quantized_values - ${oe}(${Array(8).fill(`${K?`zero_point${U}`:"zero_point"}`).join(",")})) * scale${U};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(U/_)}]${_>1?`[${U%_}]`:""} += ${Array.from({length:8/g},(se,$e)=>`${g===1?`a_data[${$e}] * b_dequantized_values[${$e}]`:`dot(a_data[${$e}], b_dequantized_values[${$e}])`}`).join(" + ")};
          `;return B},H=()=>{let B=`
            var col_index = col * ${_};
            ${K?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${W}(8);`}
            `;for(let U=0;U<_*w;U++)B+=`
            let scale${U} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${W}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return B},fe=()=>{let B=`col_index = col * ${_};`;for(let U=0;U<_*w;U++)B+=`
            let b${U}_data = ${q.getByIndices(`${q.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return B+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${oe};
            var b_dequantized_values: ${oe};`,B};return`
        var<workgroup> workgroup_shared: array<${Z.type.value}, ${w*v}>;
        ${z.declareVariables(...ie,Z)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${Z.offsetToIndices(`(global_idx / ${v}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/g};
            ${H()}
            for (var word: u32 = 0; word < ${p}; word += ${y}) {
              ${fe()}
              for (var i: u32 = 0; i < ${y}; i++) {
                ${ce()}
                word_offset += ${8/g};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${Z.type.value} = ${Z.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${Z.setByIndices(`${Z.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${g};${y};${_};${w};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:m}],dispatchGroup:{x:S},programUniforms:b}),getShaderSource:E}},zm=(e,t)=>{let r=e[0].dims,a=r.length,s=r[a-2],i=t.k,o=t.n,l=r.slice(0,a-2),d=L.size(l),p=e[1].dims[2]/4,m=e[0].dataType,g=Ge(t.k),y=Ge(p),_=l.concat([s,o]),$=128,w=o%8===0?8:o%4===0?4:1,S=$/w,v=S*y*8,b=v/g,T=v/t.blockSize,k=L.size(_)/w,C=[],E=[d,s,i/g],z=L.convertShape(e[1].dims).slice();z.splice(-1,1,p/y),C.push(...ge(E)),C.push(...ge(z)),C.push(...ge(e[2].dims)),e.length===4&&C.push(...ge(L.convertShape(e[3].dims)));let R=[d,s,o];C.push(...ge(R));let P=q=>{let X=E.length,ie=F("a",e[0].dataType,X,g),K=F("b",12,z.length,y),J=F("scales",e[2].dataType,e[2].dims.length),Z=[ie,K,J],W=e.length===4?F("zero_points",12,e[3].dims.length):void 0;W&&Z.push(W);let oe=R.length,ce=le("output",e[0].dataType,oe),H=rt(e[0].dataType),fe=()=>{switch(g){case 1:return`
          let a_data0 = vec4<${H}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${H}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${H}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${H}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${g}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ie.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${ce.type.value}, ${S}>, ${w}>;
        ${q.declareVariables(...Z,ce)}
        ${q.mainStart([S,w,1])}
          let output_indices = ${ce.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${T} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${$})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ie.getByIndices(`${ie.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ie.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${T} + local_id.x;
            ${W?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${W.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${H}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${H}(8);`}
            let scale = ${J.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${K.getByIndices(`${K.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/g};
            for (var i: u32 = 0; i < ${y}; i++) {
              ${fe()}
              let b_value = ${y===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${H}>(${Array.from({length:4},(B,U)=>`${H}(b_value_lower[${U}]), ${H}(b_value_upper[${U}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${H}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(B,U)=>`${`dot(a_data${U}, b_dequantized_values[${U}])`}`).join(" + ")};
              word_offset += ${8/g};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${ce.type.value} = ${ce.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ce.setByIndices(`${ce.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${g};${y};${S};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:m}],dispatchGroup:{x:k},programUniforms:C}),getShaderSource:P}},ab=(e,t)=>{Im(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(zm(e.inputs,t)):e.compute(Em(e.inputs,t))},nb=e=>Ne(e)}),Am,Om,Rm,Bm,Nm,Mm,Dm,Pm,sb,OS=ee(()=>{we(),xe(),ke(),Am=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Om=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
            k = i32(${e.indicesGet("indices",s)}) - ${pe("uniforms.pads",s,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${pe("uniforms.x_shape",s,t)})) {
              break;
            }
            offset += k * i32(${pe("uniforms.x_strides",s,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Rm=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${pe("uniforms.pads",s,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${pe("uniforms.x_shape",s,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${pe("uniforms.x_shape",s,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${pe("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Bm=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${pe("uniforms.pads",s,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${pe("uniforms.x_shape",s,t)})) {
                  k = i32(${pe("uniforms.x_shape",s,t)}) - 1;
                }
                offset += k * i32(${pe("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Nm=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${pe("uniforms.pads",s,r)};
                if (k < 0)  {
                  k += i32(${pe("uniforms.x_shape",s,t)}]);
                }
                if (k >= i32(${pe("uniforms.x_shape",s,t)})) {
                  k -= i32(${pe("uniforms.x_shape",s,t)});
                }
                offset += k * i32(${pe("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Mm=(e,t,r)=>{switch(r.mode){case 0:return Om(e,t,r.pads.length);case 1:return Rm(e,t,r.pads.length);case 2:return Bm(e,t,r.pads.length);case 3:return Nm(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Dm=(e,t)=>{let r=L.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,s=L.size(r),i=[{type:12,data:s},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&i.push({type:o?e[2].dataType:1,data:t.value}),i.push(...ge(e[0].dims,r));let l=["rank"],d=p=>{let m=le("output",e[0].dataType,r.length),g=F("x",e[0].dataType,a.length),y=g.type.value,_=Mm(m,a.length,t),$=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&$.push({name:"constant_value",type:o?y:"f32"}),`
            ${p.registerUniforms($).declareVariables(g,m)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${m.offsetToIndices("global_idx")};

            var value = ${y}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(L.size(r)/64)},programUniforms:i}),getShaderSource:d}},Pm=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,s=e[0].dims.length,i=new Int32Array(2*s).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)i[Number(l[d])]=Number(r[d]),i[Number(l[d])+s]=Number(r[d+l.length])}else r.forEach((l,d)=>i[Number(d)]=Number(l));let o=[];return i.forEach(l=>o.push(l)),{mode:t.mode,value:a,pads:o}}else return t},sb=(e,t)=>{Am(e.inputs);let r=Pm(e.inputs,t);e.compute(Dm(e.inputs,r),{inputs:[0]})}}),Qn,dd,pd,hd,cd,Um,Wm,fd,md,ob,ub,gd,lb,db,yd,pb,hb,cb,fb,RS=ee(()=>{rr(),we(),xe(),ke(),Qn=e=>{if(Ue.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},dd=(e,t,r)=>{let a=t.format==="NHWC",s=e.dims.slice();a&&s.splice(1,0,s.pop());let i=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),l=t.strides.slice(),d=i?t.dilations.slice():[],p=t.pads.slice();no.adjustPoolAttributes(r,s,o,l,d,p);let m=no.computePoolOutputShape(r,s,l,d,o,p,t.autoPad),g=Object.assign({},t);i?Object.assign(g,{kernelShape:o,strides:l,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(g,{kernelShape:o,strides:l,pads:p,cacheKey:t.cacheKey});let y=m.slice();return y.push(y.splice(1,1)[0]),[g,a?y:m]},pd=(e,t)=>{let r=t.format==="NHWC",a=L.size(e),s=L.size(t.kernelShape),i=[{type:12,data:a},{type:12,data:s}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],m=t.pads[t.pads.length-1],g=!!(p+m);i.push({type:12,data:l},{type:12,data:d},{type:12,data:p},{type:12,data:m}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let y=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],$=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];y=!!(w+S),i.push({type:12,data:_},{type:12,data:$},{type:12,data:w},{type:12,data:S}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,o,!0,g,y]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=L.computeStrides(t.kernelShape);i.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,m)=>p+m);return[i,o,!!d,!1,!1]}},hd=(e,t,r,a,s,i,o,l,d,p,m,g)=>{let y=s.format==="NHWC",_=t.type.value,$=le("output",t.type.tensor,a);if(s.kernelShape.length<=2){let w="",S="",v="",b=r-(y?2:1);if(m?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,s.kernelShape.length===2){let T=r-(y?3:2);g?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var value = ${_}(${l});
              var pad = 0;
              ${S}
              ${w}
              ${v}
              ${o}

              output[global_idx] = value;
            }`}else{if(y)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=s.kernelShape.length,S=s.pads.length,v="";return p?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(d).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${_}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${pe("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${pe("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${pe("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${pe("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${o}

              output[global_idx] = value;
            }`}},cd=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Um=e=>`${cd(e)};${e.countIncludePad}`,Wm=e=>`${cd(e)};${e.storageOrder};${e.dilations}`,fd=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),md=(e,t,r,a)=>{let[s,i]=dd(t,a,r),o=F("x",t.dataType,t.dims.length),l=o.type.value,d="value += x_val;",p="";s.countIncludePad?p+=`value /= ${l}(uniforms.kernelSize);`:p+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[m,g,y,_,$]=pd(i,s);m.push(...ge(t.dims,i));let w=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${y};${_};${$}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(L.size(i)/64)},programUniforms:m}),getShaderSource:S=>hd(S,o,t.dims.length,i.length,s,d,p,0,g,y,_,$)}},ob=e=>{let t=e.count_include_pad!==0,r=fd(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:Um(a)}},ub=(e,t)=>{Qn(e.inputs),e.compute(md("AveragePool",e.inputs[0],!1,t))},gd={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},lb=e=>{let t=e.format;return{format:t,...gd,cacheKey:t}},db=(e,t)=>{Qn(e.inputs),e.compute(md("GlobalAveragePool",e.inputs[0],!0,t))},yd=(e,t,r,a)=>{let[s,i]=dd(t,a,r),o=`
      value = max(x_val, value);
    `,l="",d=F("x",t.dataType,t.dims.length),p=["rank"],[m,g,y,_,$]=pd(i,s);return m.push(...ge(t.dims,i)),{name:e,shaderCache:{hint:`${a.cacheKey};${y};${_};${$}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(L.size(i)/64)},programUniforms:m}),getShaderSource:w=>hd(w,d,t.dims.length,i.length,s,o,l,t.dataType===10?-65504:-1e5,g,y,_,$)}},pb=(e,t)=>{Qn(e.inputs),e.compute(yd("MaxPool",e.inputs[0],!1,t))},hb=e=>{let t=e.storage_order,r=e.dilations,a=fd(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let s={storageOrder:t,dilations:r,...a,cacheKey:""};return{...s,cacheKey:Wm(s)}},cb=e=>{let t=e.format;return{format:t,...gd,cacheKey:t}},fb=(e,t)=>{Qn(e.inputs),e.compute(yd("GlobalMaxPool",e.inputs[0],!0,t))}}),qm,Vm,mb,gb,BS=ee(()=>{we(),xe(),Fe(),ke(),qm=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((s,i)=>i===t.axis||s===e[0].dims[i]).reduce((s,i)=>s&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Vm=(e,t)=>{let r=L.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,s=a===3,i=e[0].dims,o=e[1].dataType,l=L.size(i),d=a===3||a===2,p=d?[Math.ceil(L.size(e[0].dims)/4)]:e[0].dims,m=e[1].dims,g=e.length>2?e[2]:void 0,y=g?d?[Math.ceil(L.size(g.dims)/4)]:g.dims:void 0,_=m.length===0||m.length===1&&m[0]===1,$=_===!1&&m.length===1,w=Ge(l),S=_&&(!d||w===4),v=S?w:1,b=S&&!d?w:1,T=F("input",d?12:a,p.length,b),k=F("scale",o,m.length),C=g?F("zero_point",d?12:a,y.length):void 0,E=le("output",o,i.length,v),z=[T,k];C&&z.push(C);let R=[p,m];g&&R.push(y);let P=[{type:12,data:l/v},{type:12,data:r},{type:12,data:t.blockSize},...ge(...R,i)],q=X=>{let ie=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(ie).declareVariables(...z,E)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${s?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${k.getByOffset("0")}`:$?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?_?d?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:$?d?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${d?s?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:q,getRunData:()=>({outputs:[{dims:i,dataType:o}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:P})}},mb=(e,t)=>{qm(e.inputs,t),e.compute(Vm(e.inputs,t))},gb=e=>Ne({axis:e.axis,blockSize:e.blockSize})}),Lm,Gm,yb,NS=ee(()=>{rr(),we(),ke(),Lm=(e,t,r)=>{let a=e===t,s=e<t&&r<0,i=e>t&&r>0;if(a||s||i)throw new Error("Range these inputs' contents are invalid.")},Gm=(e,t,r,a)=>{let s=Math.abs(Math.ceil((t-e)/r)),i=[s],o=s,l=[{type:12,data:o},{type:a,data:e},{type:a,data:r},...ge(i)],d=p=>{let m=le("output",a,i.length),g=m.type.value,y=[{name:"outputSize",type:"u32"},{name:"start",type:g},{name:"delta",type:g}];return`
        ${p.registerUniforms(y).declareVariables(m)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${g}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l})}},yb=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),Ue.webgpu.validateInputContent&&Lm(t,r,a),e.compute(Gm(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),Hm,Fm,_b,$b,MS=ee(()=>{we(),xe(),Fe(),ke(),Hm=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let s=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${s}bitcast<${a}>(oldValue) + (${r})${i}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${s}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${s}min(bitcast<${a}>(oldValue), (${r}))${i}`;case"mul":return`${s}(bitcast<${a}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Fm=(e,t)=>{let r=e[0].dims,a=e[1].dims,s=r,i=1,o=Math.ceil(L.size(a)/i),l=a[a.length-1],d=L.sizeFromDimension(r,l),p=[{type:12,data:o},{type:12,data:l},{type:12,data:d},...ge(e[1].dims,e[2].dims,s)],m=g=>{let y=F("indices",e[1].dataType,e[1].dims.length),_=F("updates",e[2].dataType,e[2].dims.length,i),$=t.reduction!=="none"&&t.reduction!==""?Q$("output",e[0].dataType,s.length):le("output",e[0].dataType,s.length,i);return`
      ${g.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(y,_,$)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${L.size(a)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Hm(t.reduction,"output[data_offset + i]","value",$.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:m}},_b=e=>Ne({reduction:e.reduction}),$b=(e,t)=>{e.compute(Fm(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),jm,Km,Qm,_d,Zm,Xm,Jm,Ym,eg,tg,rg,ig,$d,ag,ng,sg,og,ug,wb,bb,DS=ee(()=>{we(),xe(),Fe(),ke(),jm=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Km=(e,t,r)=>{t.every(s=>s>=0&&s<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((s,i)=>a[s]=e[i]),a},Qm=(e,t,r,a,s,i)=>{let[o,l,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(m=>i.push(m));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(m=>a.push(m)),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");jm(a,t),t.axes.length>0&&Km(a,t.axes,p).forEach((m,g)=>a[g]=m)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(m=>s.push(Number(m))),s.length!==0&&s.length!==p&&r>=18&&s.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof s<"u"&&a.length>0&&s.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},_d=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,Zm=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${_d("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${_d("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Xm=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Jm=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),s=e.length===0?a:e.slice();return t.length>0?(t.forEach((i,o)=>{a[i]=s[o],a[o+r]=s[t.length+o]}),a):s},Ym=(e,t,r,a)=>{let s=[];if(r.length>0)if(a.length>0){if(e.forEach(i=>s.push(i)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((i,o)=>s[i]=r[o])}else r.forEach(i=>s.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");s=e.map((i,o)=>Math.round(i*t[o]))}return s},eg=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let s=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=a),r.axes.forEach(i=>s[i]=Math.round(e[i]*t[i]))):(t.fill(a,0,t.length),s.forEach((i,o)=>s[o]=Math.round(i*t[o]))),s},tg=(e,t,r,a,s)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${pe("uniforms.scales","i",a)};
        var roi_low = ${pe("uniforms.roi","i",s)};
        var roi_hi = ${pe("uniforms.roi",`i + ${t.length}`,s)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${pe("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${pe("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,rg=(e,t,r,a,s,i,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${pe("uniforms.scales","i",s)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${pe("uniforms.roi","i",i)};
          var roi_hi = ${pe("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${pe("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${pe("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,ig=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${pe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,$d=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",ag=(e,t,r,a,s)=>{let[i,o,l,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${$d(e,d,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${o}];
      var col:${p} = originalIndices[${l}];
      ${a?`if (row < 0 || row > (${r[o]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${s};
      }`:""};
      row = max(0, min(row, ${r[o]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ng=(e,t,r,a,s,i,o,l,d,p)=>{let m=r.length===2,[g,y]=m?[0,1]:[2,3],_=e.type.value,$=w=>{let S=w===g?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${s[w]},
        ${a[w]}, ${r[w]}, ${i[w]}, ${i[w]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${d};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${_} = originalIdx + ${_}(i);
          if (${S} < 0 || ${S} >= ${r[w]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${S} = max(0, min(${S}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${S})`)};
          data[i + 1] = ${w===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(g)};
    ${$(y)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},sg=(e,t,r,a,s)=>{let[i,o,l,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],m=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${m} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${$d(e,p,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${m} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${m} = originalIndices[${o}];
      var height:${m} = originalIndices[${l}];
      var width:${m} = originalIndices[${d}];
      ${a?`if (depth < 0 || depth > (${r[o]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${s};
        }`:""};

    depth = max(0, min(depth, ${r[o]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${m} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${m} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${m} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${m} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${m} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${m} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${m} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${m} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${m} = abs(depth - ${m}(depth1));
      var dx2: ${m} = abs(${m}(depth2) - depth);
      var dy1: ${m} = abs(height - ${m}(height1));
      var dy2: ${m} = abs(${m}(height2) - height);
      var dz1: ${m} = abs(width - ${m}(width1));
      var dz2: ${m} = abs(${m}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},og=(e,t,r,a,s,i)=>{let o=e.dims,l=Jm(i,t.axes,o.length),d=Ym(o,a,s,t.axes),p=a.slice();a.length===0&&(p=o.map((b,T)=>b===0?1:d[T]/b),t.keepAspectRatioPolicy!=="stretch"&&(d=eg(o,p,t)));let m=le("output",e.dataType,d.length),g=F("input",e.dataType,o.length),y=L.size(d),_=o.length===d.length&&o.every((b,T)=>b===d[T]),$=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,S=g.type.value,v=b=>`
      ${_?"":`
      ${Zm(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${ig(g,o)};
              ${Xm(t.nearestMode,r,S)};
              ${rg(g,m,o,d,p.length,l.length,$)};
              `;case"linear":return`
              ${tg(m,o,d,p.length,l.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${ag(g,m,o,$,w)}`;if(o.length===3||o.length===5)return`${sg(g,m,o,$,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${ng(g,m,o,d,p,l,t.cubicCoeffA,$,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",l.length).declareVariables(g,m)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${m.offsetToIndices("global_idx")};
        var input_indices: ${g.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${g.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${s.length>0?s:""}|${l.length>0?l:""}|${_}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},{type:1,data:p},{type:1,data:l},...ge(o,d)]})}},ug=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},wb=(e,t)=>{let r=[],a=[],s=[],i=ug(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Qm(e.inputs,t,i,r,a,s),e.compute(og(e.inputs[0],t,i,r,a,s),{inputs:[0]})},bb=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,s=e.cubicCoeffA,i=e.excludeOutside!==0,o=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return Ne({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:s,excludeOutside:i,extrapolationValue:o,keepAspectRatioPolicy:l,mode:d,nearestMode:p})}}),lg,dg,vb,PS=ee(()=>{we(),xe(),Fe(),ke(),lg=(e,t)=>{let[r,a,s,i]=e,{numHeads:o,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!L.areEqual(a.dims,[])&&!L.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!L.areEqual(s.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],m=s.dims[0],g=L.sizeFromDimension(r.dims,1)/p,y=l===0?s.dims[1]*2:g/o;if(l>y)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(d!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(p!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(y/2!==s.dims[1]&&l/2!==s.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${s.dims[1]}`);if(p>m)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},dg=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:s,scale:i}=t,o=e[0].dims[0],l=L.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=l/d,m=e[2].dims[1],g=s===0?m*2:p/a,y=new Array(o,d,p/g,g-m),_=L.computeStrides(y),$=[{type:1,data:i},{type:12,data:y},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[l,p,g,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,g,d*g,1]}):[],...ge(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=S=>{let v=F("input",e[0].dataType,e[0].dims.length),b=F("position_ids",e[1].dataType,e[1].dims.length),T=F("cos_cache",e[2].dataType,e[2].dims.length),k=F("sin_cache",e[3].dataType,e[3].dims.length),C=le("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:y.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables(v,b,T,k,C)}

        ${S.mainStart(Ri)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",le("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ne({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(L.size(y)/Ri)},programUniforms:$})}},vb=(e,t)=>{lg(e.inputs,t),e.compute(dg(e.inputs,t))}}),pg,hg,xb,US=ee(()=>{we(),xe(),ke(),pg=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let s=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==s)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==s)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==s)throw new Error("Bias must have the same hidden size as input")}},hg=(e,t,r,a)=>{let s=t.simplified,i=e[0].dims,o=L.size(i),l=i,d=o,p=i.slice(-1)[0],m=a?i.slice(0,-1).concat(1):[],g=!s&&e.length>3,y=e.length>4,_=a&&r>1,$=a&&r>2,w=r>3,S=64,v=Ge(p),b=[{type:12,data:d},{type:12,data:v},{type:12,data:p},{type:1,data:t.epsilon}],T=C=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[F("x",e[0].dataType,e[0].dims,v),F("skip",e[1].dataType,e[1].dims,v),F("gamma",e[2].dataType,e[2].dims,v)];g&&z.push(F("beta",e[3].dataType,e[3].dims,v)),y&&z.push(F("bias",e[4].dataType,e[4].dims,v)),z.push(le("output",e[0].dataType,l,v)),_&&z.push(le("mean_output",1,m)),$&&z.push(le("inv_std_output",1,m)),w&&z.push(le("input_skip_bias_sum",e[0].dataType,l,v));let R=rt(e[0].dataType),P=rt(1,v);return`

      ${C.registerUniforms(E).declareVariables(...z)}
      var<workgroup> sum_shared : array<${P}, ${S}>;
      var<workgroup> sum_squared_shared : array<${P}, ${S}>;

      ${C.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${y?"bias[offset1d + i]":R+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${zi(R,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Cr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Cr("square_sum",v)} / f32(uniforms.hidden_size) ${s?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${$?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${s?"":`- ${R}(mean)`}) *
            ${R}(inv_std_dev) * gamma[offset1d + i]
            ${g?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:l,dataType:e[0].dataType}];return r>1&&k.push({dims:m,dataType:1}),r>2&&k.push({dims:m,dataType:1}),r>3&&k.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${_};${$};${w}`,inputDependencies:e.map((C,E)=>"type")},getShaderSource:T,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:b})}},xb=(e,t)=>{pg(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(hg(e.inputs,t,e.outputCount,!1),{outputs:r})}}),cg,Zn,fg,wd,mg,gg,Sb,kb,WS=ee(()=>{we(),xe(),Fe(),ke(),cg=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},Zn=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},fg=(e,t)=>{if(e.length>1){let r=Zn(e,1),a=Zn(e,2),s=Zn(e,3);return s.length===0&&(s=[...Array(e[0].dims.length).keys()]),Ne({starts:r,ends:a,axes:s})}else return t},wd=(e,t,r,a,s)=>{let i=e;return e<0&&(i+=r[a[t]]),s[t]<0?Math.max(0,Math.min(i,r[a[t]]-1)):Math.max(0,Math.min(i,r[a[t]]))},mg=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${pe("uniforms.input_shape","i",r.length)};
            let steps_i = ${pe("uniforms.steps","i",r.length)};
            let signs_i = ${pe("uniforms.signs","i",r.length)};
            let starts_i = ${pe("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,gg=(e,t)=>{let r=e[0].dims,a=L.size(r),s=t.axes.length>0?L.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=Zn(e,4);i.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(s.length).fill(1));let o=t.starts.map((v,b)=>wd(v,b,r,s,i)),l=t.ends.map((v,b)=>wd(v,b,r,s,i));if(s.length!==o.length||s.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(s.length!==r.length)for(let v=0;v<r.length;++v)s.includes(v)||(o.splice(v,0,0),l.splice(v,0,r[v]),i.splice(v,0,1));let d=i.map(v=>Math.sign(v));i.forEach((v,b,T)=>{if(v<0){let k=(l[b]-o[b])/v,C=o[b],E=C+k*i[b];o[b]=E,l[b]=C,T[b]=-v}});let p=r.slice(0);s.forEach((v,b)=>{p[v]=Math.ceil((l[v]-o[v])/i[v])});let m={dims:p,dataType:e[0].dataType},g=le("output",e[0].dataType,p.length),y=F("input",e[0].dataType,e[0].dims.length),_=L.size(p),$=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:i.length}],w=[{type:12,data:_},{type:12,data:o},{type:6,data:d},{type:12,data:i},...ge(e[0].dims,p)],S=v=>`
      ${v.registerUniforms($).declareVariables(y,g)}
        ${mg(y,g,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${g.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${g.setByOffset("global_idx",y.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${o.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[m],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:w})}},Sb=(e,t)=>{cg(e.inputs,t);let r=fg(e.inputs,t);e.compute(gg(e.inputs,r),{inputs:[0]})},kb=e=>{let t=e.starts,r=e.ends,a=e.axes;return Ne({starts:t,ends:r,axes:a})}}),yg,_g,Tb,Cb,qS=ee(()=>{we(),xe(),Fe(),Er(),ke(),yg=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},_g=(e,t)=>{let r=e.inputs[0],a=r.dims,s=L.size(a),i=a.length,o=L.normalizeAxis(t.axis,i),l=o<a.length-1,d,p=[];l?(p=Array.from({length:i},(z,R)=>R),p[o]=i-1,p[i-1]=o,d=e.compute(Et(r,p),{inputs:[r],outputs:[-1]})[0]):d=r;let m=d.dims,g=m[i-1],y=s/g,_=Ge(g),$=g/_,w=64;y===1&&(w=256);let S=(z,R)=>R===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:R===2?`max(${z}.x, ${z}.y)`:R===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=F("x",d.dataType,d.dims,_),b=le("result",d.dataType,d.dims,_),T=v.type.value,k=rt(d.dataType)==="f32"?`var threadMax = ${T}(-3.402823e+38f);`:`var threadMax = ${T}(-65504.0h);`,C=z=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(v,b)}
      ${z.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${S("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${Cr("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${_};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:m,dataType:d.dataType}],dispatchGroup:{x:y},programUniforms:[{type:6,data:$}]}),getShaderSource:C},{inputs:[d],outputs:[l?-1:0]})[0];l&&e.compute(Et(E,p),{inputs:[E]})},Tb=(e,t)=>{yg(e.inputs),_g(e,t)},Cb=e=>Ne({axis:e.axis})}),bd,$g,wg,bg,Ib,VS=ee(()=>{we(),xe(),ke(),bd=e=>Array.from(e.getBigInt64Array(),Number),$g=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(bd(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},wg=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},bg=(e,t)=>{let r=e[0].dims,a=t??bd(e[1]),s=wg(r,a),i=L.size(s),o=e[0].dataType,l=F("input",o,r.length),d=le("output",o,s.length),p=m=>`
      const inputShape = ${l.indices(...r)};
      ${m.registerUniform("output_size","u32").declareVariables(l,d)}
      ${m.mainStart()}
      ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...ge(e[0].dims,s)]}),getShaderSource:p}},Ib=e=>{$g(e.inputs),e.compute(bg(e.inputs),{inputs:[0]})}}),vg,xg,Eb,LS=ee(()=>{we(),xe(),ke(),vg=(e,t,r,a,s)=>{let i=le("output_data",s,r.length,4),o=F("a_data",t[1].dataType,t[1].dims.length,4),l=F("b_data",t[2].dataType,t[2].dims.length,4),d=F("c_data",t[0].dataType,t[0].dims.length,4),p,m=(g,y,_)=>`select(${y}, ${g}, ${_})`;if(!a)p=i.setByOffset("global_idx",m(o.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let g=(y,_,$="")=>{let w=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,v=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${i.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${o.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_b${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_c${_} = ${d.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${y}[${_}] = ${$}(${m(w,S,v)});
          `};s===9?p=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${g("output_data[global_idx]",0)}
            ${g("output_data[global_idx]",1)}
            ${g("output_data[global_idx]",2)}
            ${g("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,o,l,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},xg=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,s=e[1].dataType,i=!(L.areEqual(t,r)&&L.areEqual(r,a)),o=t,l=L.size(t);if(i){let p=Oi.calcShape(Oi.calcShape(t,r,!1),a,!1);if(!p)throw new Error("Can't perform where op on the given tensors");o=p,l=L.size(o)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>vg(p,e,o,i,s),getRunData:()=>({outputs:[{dims:o,dataType:s}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...ge(a,t,r,o)]})}},Eb=e=>{e.compute(xg(e.inputs))}}),zb,GS=ee(()=>{iS(),fh(),aS(),nS(),sS(),oS(),uS(),cS(),mS(),gS(),yS(),_S(),$S(),wS(),bS(),vS(),xS(),SS(),kS(),TS(),CS(),IS(),ES(),zS(),AS(),Z1(),OS(),RS(),BS(),NS(),MS(),ch(),DS(),PS(),US(),WS(),qS(),Y1(),VS(),Er(),mh(),LS(),zb=new Map([["Abs",[Sw]],["Acos",[kw]],["Acosh",[Tw]],["Add",[s1]],["ArgMax",[ww,Ip]],["ArgMin",[$w,Ip]],["Asin",[Cw]],["Asinh",[Iw]],["Atan",[Ew]],["Atanh",[zw]],["Attention",[bw]],["AveragePool",[ub,ob]],["BatchNormalization",[vw]],["BiasAdd",[xw]],["BiasSplitGelu",[n1]],["Cast",[Ow,Aw]],["Ceil",[Bw]],["Clip",[Rw]],["Concat",[g1,y1]],["Conv",[Bp,Rp]],["ConvTranspose",[C1,T1]],["Cos",[Nw]],["Cosh",[Mw]],["CumSum",[I1,E1]],["DepthToSpace",[z1,A1]],["DequantizeLinear",[mb,gb]],["Div",[o1]],["Einsum",[O1,R1]],["Elu",[Dw,ds]],["Equal",[u1]],["Erf",[Pw]],["Exp",[Uw]],["Expand",[B1]],["FastGelu",[N1]],["Floor",[Ww]],["FusedConv",[Bp,Rp]],["Gather",[D1,M1]],["GatherElements",[L1,V1]],["GatherBlockQuantized",[W1,q1]],["GatherND",[P1,U1]],["Gelu",[qw]],["Gemm",[H1,G1]],["GlobalAveragePool",[db,lb]],["GlobalMaxPool",[fb,cb]],["Greater",[h1]],["GreaterOrEqual",[f1]],["GridSample",[F1,j1]],["GroupQueryAttention",[eb]],["HardSigmoid",[Qw,Kw]],["InstanceNormalization",[tb]],["LayerNormalization",[rb]],["LeakyRelu",[Vw,ds]],["Less",[c1]],["LessOrEqual",[m1]],["Log",[i1]],["MatMul",[ib]],["MatMulNBits",[ab,nb]],["MaxPool",[pb,hb]],["Mul",[l1]],["MultiHeadAttention",[Q1,K1]],["Neg",[Gw]],["Not",[Lw]],["Pad",[sb]],["Pow",[d1]],["QuickGelu",[a1,ds]],["Range",[yb]],["Reciprocal",[Hw]],["ReduceMin",[fw]],["ReduceMean",[lw]],["ReduceMax",[cw]],["ReduceSum",[gw]],["ReduceProd",[mw]],["ReduceL1",[dw]],["ReduceL2",[pw]],["ReduceLogSum",[_w]],["ReduceLogSumExp",[hw]],["ReduceSumSquare",[yw]],["Relu",[Fw]],["Resize",[wb,bb]],["RotaryEmbedding",[vb]],["ScatterND",[$b,_b]],["Sigmoid",[jw]],["Sin",[Zw]],["Sinh",[Xw]],["Slice",[Sb,kb]],["SkipLayerNormalization",[xb]],["Split",[X1,J1]],["Sqrt",[Jw]],["Softmax",[Tb,Cb]],["Sub",[p1]],["Tan",[Yw]],["Tanh",[e1]],["ThresholdedRelu",[r1,ds]],["Tile",[Ib]],["Transpose",[X$,J$]],["Where",[Eb]]])}),Ab,HS=ee(()=>{rr(),$r(),ke(),Ab=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,s){er(e.programInfo.name);let i=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let p of t)l.push({binding:l.length,resource:{buffer:p.buffer}});for(let p of r)l.push({binding:l.length,resource:{buffer:p.buffer}});s&&l.push({binding:l.length,resource:s});let d=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}o.setPipeline(e.computePipeline),o.setBindGroup(0,d),o.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Rt(e.programInfo.name)}dispose(){}build(e,t){er(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(p=>{r.features.has(p.feature)&&a.push(`enable ${p.extension};`)});let s=Z$(t,this.backend.device.limits),i=e.getShaderSource(s),o=`${a.join(`
`)}
${s.additionalImplementations}
${i}`,l=r.createShaderModule({code:o,label:e.name});Ee("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let d=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Rt(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:s.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,s=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=s&&r<=s&&a<=s)return[t,r,a];let i=t*r*a,o=Math.ceil(Math.sqrt(i));if(o>s){if(o=Math.ceil(Math.cbrt(i)),o>s)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),Sg,kg,Tg,Cg,Ob,FS=ee(()=>{rr(),we(),$r(),G$(),tS(),GS(),HS(),Sg=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let s=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${s}`);break}case"rank":{let i=e[a].dims.length;r.push(`${s};${i}`);break}case"dims":{let i=e[a].dims.join(",");r.push(`${s};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},kg=(e,t,r)=>{var s,i;let a=e.name;return(s=e.shaderCache)!=null&&s.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${Sg(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,a},Tg=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Cg=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},Ob=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},s=i=>t.features.has(i)&&r.push(i)&&!0;s("chromium-experimental-timestamp-query-inside-passes")||s("timestamp-query"),s("shader-f16"),s("subgroups")&&s("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new Cg(this.device),this.adapterInfo=new Tg(t.info||await t.requestAdapterInfo()),this.gpuDataManager=H$(this),this.programManager=new Ab(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,lh(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;er(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let s=0;s<t.length/2;s++){let i=r[s],o=i.kernelId,l=this.kernels.get(o),d=l.kernelType,p=l.kernelName,m=i.programName,g=i.inputTensorViews,y=i.outputTensorViews,_=t[s*2],$=t[s*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let w=Number(_-this.queryTimeBase),S=Number($-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:g.map(v=>({dims:v.dims,dataType:li(v.dataType)})),outputsMetadata:y.map(v=>({dims:v.dims,dataType:li(v.dataType)})),kernelId:o,kernelType:d,kernelName:p,programName:m,startTime:w,endTime:S});else{let v="";g.forEach((T,k)=>{v+=`input[${k}]: [${T.dims}] | ${li(T.dataType)}, `});let b="";y.forEach((T,k)=>{b+=`output[${k}]: [${T.dims}] | ${li(T.dataType)}, `}),console.log(`[profiling] kernel "${o}|${d}|${p}|${m}" ${v}${b}execution time: ${S-w} ns`)}_s("GPU",`${m}::${_}::${$}`)}e.unmap(),this.pendingQueries.delete(e)}),Rt()}run(e,t,r,a,s,i){er(e.name);let o=[];for(let b=0;b<t.length;++b){let T=t[b].data;if(T===0)continue;let k=this.gpuDataManager.get(T);if(!k)throw new Error(`no GPU data for input: ${T}`);o.push(k)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),m=r.length===0?l.map((b,T)=>T):r;if(m.length!==l.length)throw new Error(`Output size ${m.length} must be equal to ${l.length}.`);let g=[],y=[];for(let b=0;b<l.length;++b){if(!Number.isInteger(m[b])||m[b]<-3||m[b]>=i)throw new Error(`Invalid output index: ${m[b]}`);if(m[b]===-3)continue;let T=m[b]===-1,k=m[b]===-2,C=T||k?s(l[b].dataType,l[b].dims):a(m[b],l[b].dataType,l[b].dims);if(g.push(C),C.data===0)continue;let E=this.gpuDataManager.get(C.data);if(!E)throw new Error(`no GPU data for output: ${C.data}`);if(T&&this.temporaryData.push(E),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(E)}y.push(E)}if(o.length!==t.length||y.length!==g.length){if(y.length===0)return Rt(e.name),g;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(p){let b=0,T=[];p.forEach(z=>{let R=typeof z.data=="number"?[z.data]:z.data;if(R.length===0)return;let P=z.type===10?2:4,q,X;z.type===10?(X=R.length>4?16:R.length>2?8:R.length*P,q=R.length>4?16:P*R.length):(X=R.length<=2?R.length*P:16,q=16),b=Math.ceil(b/X)*X,T.push(b);let ie=z.type===10?8:4;b+=R.length>4?Math.ceil(R.length/ie)*q:R.length*P});let k=16;b=Math.ceil(b/k)*k;let C=new ArrayBuffer(b);p.forEach((z,R)=>{let P=T[R],q=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(C,P,q.length).set(q);else if(z.type===12)new Uint32Array(C,P,q.length).set(q);else if(z.type===10)new Uint16Array(C,P,q.length).set(q);else if(z.type===1)new Float32Array(C,P,q.length).set(q);else throw new Error(`Unsupported uniform type: ${li(z.type)}`)});let E=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,C,0,b),this.gpuDataManager.release(E.id),_={offset:0,size:b,buffer:E.buffer}}let $=this.programManager.normalizeDispatchGroupSize(d),w=$[1]===1&&$[2]===1,S=kg(e,t,w),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,$),this.programManager.setArtifact(S,v),Ee("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),p&&v.uniformVariablesInfo){if(p.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${p.length} in program "${v.programInfo.name}".`);for(let b=0;b<p.length;b++){let T=p[b],k=T.type,C=typeof T.data=="number"?1:T.data.length,[E,z]=v.uniformVariablesInfo[b];if(k!==E||C!==z)throw new Error(`Uniform variable ${b} mismatch: expect type ${E} with size ${z}, got type ${k} with size ${C} in program "${v.programInfo.name}".`)}}if(Ee("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${$[0]}x${$[1]}x${$[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:g};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,o,y,$,_),Rt(e.name),g}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let s=zb.get(e);if(!s)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:a,kernelEntry:s[0],attributes:[s[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let s=a.kernelType,i=a.kernelName,o=a.kernelEntry,l=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${s}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),Ee("info",()=>`[WebGPU] Start to run kernel "[${s}] ${i}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),o(t,l[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${s}] ${i}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${s}] ${i}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let s=this.sessionExternalDataMapping.get(e);s||(s=new Map,this.sessionExternalDataMapping.set(e,s));let i=s.get(t),o=this.gpuDataManager.registerExternalBuffer(r,a,i);return s.set(t,[o,r]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await kp(this,e,t);return dh(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ee("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ee("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ee("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let s=this.getComputePassEncoder(),i=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),s.setPipeline(i.computePipeline),s.setBindGroup(0,i.bindGroup),s.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Ig,vd,Eg,xd,Sd,kd,zg,Rb,jS=ee(()=>{$r(),Ig=1,vd=()=>Ig++,Eg=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),xd=(e,t)=>{let r=Eg.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,s)=>a*s)*r/8):0},Sd=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return xd(this.dataType,this.tensorShape)}destroy(){Ee("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,s)=>a===r[s])}},kd=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let s=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(s,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==xd(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,i,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Ee("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},zg=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=vd();return this.tensorTrackersById.set(e,new kd(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,s){Ee("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${s}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,a,s)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Ee("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let s=this.getMLContext(e),i=vd(),o=new Sd({sessionId:e,context:s,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new kd(this,o)),this.externalTensors.add(o),i}async getCachedTensor(e,t,r,a,s,i){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){Ee("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let m=this.freeTensors.splice(d,1)[0];return m.sessionId=e,m}Ee("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let l=await o.createTensor({dataType:t,shape:r,dimensions:r,usage:a,writable:s,readable:i});return new Sd({sessionId:e,context:o,tensor:l,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Rb=(...e)=>new zg(...e)}),Bs,Ag,Bb,KS=ee(()=>{we(),vi(),G$(),jS(),$r(),Bs=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ag=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((s,i)=>s===a[i]&&e[s]===t[s])},Bb=class{constructor(e){this.tensorManager=Rb(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,lh(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ee("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ee("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Ee("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>Ag(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(s=>s.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ee("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,s){let i=Bs.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,a,s)}async createTemporaryTensor(e,t,r){Ee("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=Bs.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let s=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,s,a,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(s):this.temporarySessionTensorIds.set(e,[s]),s}uploadTensor(e,t){if(!et().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ee("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return dh(r,t)}}registerMLTensor(e,t,r,a){let s=Bs.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,s,a);return Ee("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${s}, dimensions: ${a}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,s,i){if(!i)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=i.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,p;switch(s.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${s.dataType} in creating WebNN Constant from external data.`)}return Ee("verbose",()=>`[WebNN] registerMLConstant {dataType: ${s.dataType}, shape: ${s.shape}}}`),a.constant(s,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),Nb={};vs(Nb,{init:()=>Mb});var Ns,Og,Mb,QS=ee(()=>{we(),FS(),$r(),xe(),KS(),Ns=class Db{constructor(t,r,a,s){this.module=t,this.dataType=r,this.data=a,this.dims=s}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=L.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=L.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=L.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=L.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(L.size(t)!==L.size(this.dims))throw new Error("Invalid new shape");return new Db(this.module,this.dataType,this.data,t)}},Og=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,s=r/e.PTR_SIZE,i=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*s++,i));let o=Number(e.getValue(a*s++,i));this.outputCount=Number(e.getValue(a*s++,i)),this.customDataOffset=Number(e.getValue(a*s++,"*")),this.customDataSize=Number(e.getValue(a*s++,i));let l=[];for(let d=0;d<o;d++){let p=Number(e.getValue(a*s++,i)),m=Number(e.getValue(a*s++,"*")),g=Number(e.getValue(a*s++,i)),y=[];for(let _=0;_<g;_++)y.push(Number(e.getValue(a*s++,i)));l.push(new Ns(e,p,m,y))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let r=((o=t==null?void 0:t.inputs)==null?void 0:o.map(l=>typeof l=="number"?this.inputs[l]:l))??this.inputs,a=(t==null?void 0:t.outputs)??[],s=(l,d,p)=>new Ns(this.module,d,this.output(l,p),p),i=(l,d)=>{let p=di(l,d);if(!p)throw new Error(`Unsupported data type: ${l}`);let m=p>0?this.backend.gpuDataManager.create(p).id:0;return new Ns(this.module,l,m,d)};return this.backend.run(e,r,a,s,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,s=a===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*a);this.module.setValue(i,t.length,s);for(let o=0;o<t.length;o++)this.module.setValue(i+a*(o+1),t[o],s);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},Mb=async(e,t,r,a)=>{let s=t.jsepInit;if(!s)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=new Ob;await i.initialize(r,a),s("webgpu",[i,o=>i.alloc(Number(o)),o=>i.free(o),(o,l,d,p=!1)=>{if(p)Ee("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),i.memcpy(Number(o),Number(l));else{Ee("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let m=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));i.upload(Number(l),m)}},async(o,l,d)=>{Ee("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await i.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>i.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>i.releaseKernel(o),(o,l,d,p)=>{Ee("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let m=new Og(t,i,Number(l));return i.computeKernel(Number(o),m,p)},()=>i.captureBegin(),()=>i.captureEnd(),()=>i.replay()])}else{let i=new Bb(r);s("webnn",[i,()=>i.reserveTensorId(),o=>i.releaseTensorId(o),async(o,l,d,p,m)=>i.ensureTensor(o,l,d,p,m),(o,l)=>{i.uploadTensor(o,l)},async(o,l)=>i.downloadTensor(o,l)])}}}),Rg,bh,vh,vr,Bg,uo,xh,Sh,Td,kh,Th,Ch,Pb=ee(()=>{Y3(),eS(),we(),vi(),ah(),L$(),Rg=(e,t)=>{et()._OrtInit(e,t)!==0&&Re("Can't initialize onnxruntime.")},bh=async e=>{Rg(e.wasm.numThreads,ao(e.logLevel))},vh=async(e,t)=>{{let r=(QS(),ro(Nb)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:i}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",et(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",et(),e)}}},vr=new Map,Bg=e=>{let t=et(),r=t.stackSave();try{let a=t.PTR_SIZE,s=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,s,s+a)!==0&&Re("Can't get session input/output count.");let i=a===4?"i32":"i64";return[Number(t.getValue(s,i)),Number(t.getValue(s+a,i))]}finally{t.stackRestore(r)}},uo=e=>{let t=et(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},xh=async(e,t)=>{var g,y,_;let r,a,s=et();Array.isArray(e)?[r,a]=e:e.buffer===s.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=uo(e);let i=0,o=0,l=0,d=[],p=[],m=[];try{if([o,d]=V$(t),(t==null?void 0:t.externalData)&&s.mountExternalData){let C=[];for(let E of t.externalData){let z=typeof E=="string"?E:E.path;C.push(uh(typeof E=="string"?E:E.data).then(R=>{s.mountExternalData(z,R)}))}await Promise.all(C)}for(let C of(t==null?void 0:t.executionProviders)??[])if((typeof C=="string"?C:C.name)==="webnn"){if(s.shouldTransferToMLTensor=!1,typeof C!="string"){let E=C,z=E==null?void 0:E.context,R=E==null?void 0:E.gpuDevice,P=E==null?void 0:E.deviceType,q=E==null?void 0:E.powerPreference;z?s.currentContext=z:R?s.currentContext=await s.jsepCreateMLContext(R):s.currentContext=await s.jsepCreateMLContext({deviceType:P,powerPreference:q})}else s.currentContext=await s.jsepCreateMLContext();break}i=await s._OrtCreateSession(r,a,o),i===0&&Re("Can't create a session."),(g=s.jsepOnCreateSession)==null||g.call(s),s.currentContext&&(s.jsepRegisterMLContext(i,s.currentContext),s.currentContext=void 0,s.shouldTransferToMLTensor=!0);let[$,w]=Bg(i),S=!!(t!=null&&t.enableGraphCapture),v=[],b=[],T=[];for(let C=0;C<$;C++){let E=s._OrtGetInputName(i,C);E===0&&Re("Can't get an input name."),p.push(E),v.push(s.UTF8ToString(E))}for(let C=0;C<w;C++){let E=s._OrtGetOutputName(i,C);E===0&&Re("Can't get an output name."),m.push(E);let z=s.UTF8ToString(E);b.push(z);{if(S&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let R=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[z])??"cpu";if(R!=="cpu"&&R!=="cpu-pinned"&&R!=="gpu-buffer"&&R!=="ml-tensor")throw new Error(`Not supported preferred output location: ${R}.`);if(S&&R!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${R}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(R)}}let k=null;return T.some(C=>C==="gpu-buffer"||C==="ml-tensor")&&(l=s._OrtCreateBinding(i),l===0&&Re("Can't create IO binding."),k={handle:l,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(C=>Sp(C))}),vr.set(i,[i,p,m,k,S,!1]),[i,v,b]}catch($){throw p.forEach(w=>s._OrtFree(w)),m.forEach(w=>s._OrtFree(w)),l!==0&&s._OrtReleaseBinding(l)!==0&&Re("Can't release IO binding."),i!==0&&s._OrtReleaseSession(i)!==0&&Re("Can't release session."),$}finally{s._free(r),o!==0&&s._OrtReleaseSessionOptions(o)!==0&&Re("Can't release session options."),d.forEach($=>s._free($)),(_=s.unmountExternalData)==null||_.call(s)}},Sh=e=>{var d;let t=et(),r=vr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,s,i,o,l]=r;o&&(l&&t._OrtClearBoundOutputs(o.handle)!==0&&Re("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&Re("Can't release IO binding.")),(d=t.jsepOnReleaseSession)==null||d.call(t,e),s.forEach(p=>t._OrtFree(p)),i.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(a)!==0&&Re("Can't release session."),vr.delete(e)},Td=async(e,t,r,a,s,i=!1)=>{if(!e){t.push(0);return}let o=et(),l=o.PTR_SIZE,d=e[0],p=e[1],m=e[3],g=m,y,_;if(d==="string"&&(m==="gpu-buffer"||m==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&m!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(m==="gpu-buffer"){let S=e[2].gpuBuffer;_=di(Ii(d),p);let v=o.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=v(a,s,S,_)}else if(m==="ml-tensor"){let S=e[2].mlTensor;_=di(Ii(d),p);let v=o.jsepRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=v(a,S,Ii(d),p)}else{let S=e[2];if(Array.isArray(S)){_=l*S.length,y=o._malloc(_),r.push(y);for(let v=0;v<S.length;v++){if(typeof S[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);o.setValue(y+v*l,ht(S[v],r),"*")}}else{let v=o.jsepIsGraphInput;if(d!=="string"&&v){let b=o._OrtGetInputName(a,s),T=o.UTF8ToString(b);if(v(a,T)){let k=Ii(d);_=di(k,p),g="ml-tensor";let C=o.jsepCreateTemporaryTensor,E=o.jsepUploadTensor;if(!C||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await C(a,k,p);E(z,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),y=z}else _=S.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),y)}else _=S.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),y)}}let $=o.stackSave(),w=o.stackAlloc(4*p.length);try{p.forEach((v,b)=>o.setValue(w+b*l,v,l===4?"i32":"i64"));let S=o._OrtCreateTensor(Ii(d),y,_,w,p.length,Sp(g));S===0&&Re(`Can't create tensor for input/output. session=${a}, index=${s}.`),t.push(S)}finally{o.stackRestore($)}},kh=async(e,t,r,a,s,i)=>{var X,ie,K;let o=et(),l=o.PTR_SIZE,d=vr.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],m=d[1],g=d[2],y=d[3],_=d[4],$=d[5],w=t.length,S=a.length,v=0,b=[],T=[],k=[],C=[],E=o.stackSave(),z=o.stackAlloc(w*l),R=o.stackAlloc(w*l),P=o.stackAlloc(S*l),q=o.stackAlloc(S*l);try{[v,b]=q$(i);for(let W=0;W<w;W++)await Td(r[W],T,C,e,t[W],_);for(let W=0;W<S;W++)await Td(s[W],k,C,e,w+a[W],_);for(let W=0;W<w;W++)o.setValue(z+W*l,T[W],"*"),o.setValue(R+W*l,m[t[W]],"*");for(let W=0;W<S;W++)o.setValue(P+W*l,k[W],"*"),o.setValue(q+W*l,g[a[W]],"*");if(y&&!$){let{handle:W,outputPreferredLocations:oe,outputPreferredLocationsEncoded:ce}=y;if(m.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${m.length}).`);for(let H=0;H<w;H++){let fe=t[H];await o._OrtBindInput(W,m[fe],T[H])!==0&&Re(`Can't bind input[${H}] for session=${e}.`)}for(let H=0;H<S;H++){let fe=a[H];(X=s[H])!=null&&X[3]?o._OrtBindOutput(W,g[fe],k[H],0)!==0&&Re(`Can't bind pre-allocated output[${H}] for session=${e}.`):o._OrtBindOutput(W,g[fe],0,ce[fe])!==0&&Re(`Can't bind output[${H}] to ${oe[H]} for session=${e}.`)}vr.set(e,[p,m,g,y,_,!0])}(ie=o.jsepOnRunStart)==null||ie.call(o,p);let J;y?J=await o._OrtRunWithBinding(p,y.handle,S,P,v):J=await o._OrtRun(p,R,z,w,q,S,P,v),J!==0&&Re("failed to call OrtRun().");let Z=[];for(let W=0;W<S;W++){let oe=Number(o.getValue(P+W*l,"*"));if(oe===k[W]){Z.push(s[W]);continue}let ce=o.stackSave(),H=o.stackAlloc(4*l),fe=!1,B,U=0;try{o._OrtGetTensorData(oe,H,H+l,H+2*l,H+3*l)!==0&&Re(`Can't access output tensor data on index ${W}.`);let se=l===4?"i32":"i64",$e=Number(o.getValue(H,se));U=o.getValue(H+l,"*");let N=o.getValue(H+l*2,"*"),ue=Number(o.getValue(H+l*3,se)),qe=[];for(let Ie=0;Ie<ue;Ie++)qe.push(Number(o.getValue(N+Ie*l,se)));o._OrtFree(N)!==0&&Re("Can't free memory for tensor dims.");let De=qe.reduce((Ie,me)=>Ie*me,1);B=li($e);let gt=y==null?void 0:y.outputPreferredLocations[a[W]];if(B==="string"){if(gt==="gpu-buffer"||gt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ie=[];for(let me=0;me<De;me++){let st=o.getValue(U+me*l,"*"),Nt=o.getValue(U+(me+1)*l,"*"),yt=me===De-1?void 0:Nt-st;Ie.push(o.UTF8ToString(st,yt))}Z.push([B,qe,Ie,"cpu"])}else if(gt==="gpu-buffer"&&De>0){let Ie=o.jsepGetBuffer;if(!Ie)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let me=Ie(U),st=di($e,De);if(st===void 0||!sh(B))throw new Error(`Unsupported data type: ${B}`);fe=!0,Z.push([B,qe,{gpuBuffer:me,download:o.jsepCreateDownloader(me,st,B),dispose:()=>{o._OrtReleaseTensor(oe)!==0&&Re("Can't release tensor.")}},"gpu-buffer"])}else if(gt==="ml-tensor"&&De>0){let Ie=o.jsepEnsureTensor;if(!Ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(di($e,De)===void 0||!oh(B))throw new Error(`Unsupported data type: ${B}`);let me=await Ie(e,U,$e,qe,!1);fe=!0,Z.push([B,qe,{mlTensor:me,download:o.jsepCreateMLTensorDownloader(U,B),dispose:()=>{o.jsepReleaseTensorId(U),o._OrtReleaseTensor(oe)}},"ml-tensor"])}else{let Ie=nh(B),me=new Ie(De);new Uint8Array(me.buffer,me.byteOffset,me.byteLength).set(o.HEAPU8.subarray(U,U+me.byteLength)),Z.push([B,qe,me,"cpu"])}}finally{o.stackRestore(ce),B==="string"&&U&&o._free(U),fe||o._OrtReleaseTensor(oe),(K=o.jsepOnRunEnd)==null||K.call(o,p)}}return y&&!_&&(o._OrtClearBoundOutputs(y.handle)!==0&&Re("Can't clear bound outputs."),vr.set(e,[p,m,g,y,_,!1])),Z}finally{o.stackRestore(E),T.forEach(J=>o._OrtReleaseTensor(J)),k.forEach(J=>o._OrtReleaseTensor(J)),C.forEach(J=>o._free(J)),v!==0&&o._OrtReleaseRunOptions(v),b.forEach(J=>o._free(J))}},Th=e=>{let t=et(),r=vr.get(e);if(!r)throw new Error("invalid session id");let a=r[0],s=t._OrtEndProfiling(a);s===0&&Re("Can't get an profile file name."),t._OrtFree(s)},Ch=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),xr,bt,Ti,Xn,Jn,Ms,Cd,Ds,ri,ii,Ng,Ub,Wb,qb,Vb,Lb,Gb,Hb,Fb=ee(()=>{rr(),Pb(),vi(),rh(),xr=()=>!!Ue.wasm.proxy&&typeof document<"u",Ti=!1,Xn=!1,Jn=!1,Ds=new Map,ri=(e,t)=>{let r=Ds.get(e);r?r.push(t):Ds.set(e,[t])},ii=()=>{if(Ti||!Xn||Jn||!bt)throw new Error("worker not ready")},Ng=e=>{switch(e.data.type){case"init-wasm":Ti=!1,e.data.err?(Jn=!0,Cd[1](e.data.err)):(Xn=!0,Cd[0]()),Ms&&(URL.revokeObjectURL(Ms),Ms=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Ds.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Ub=async()=>{if(!Xn){if(Ti)throw new Error("multiple calls to 'initWasm()' detected.");if(Jn)throw new Error("previous call to 'initWasm()' failed.");if(Ti=!0,xr())return new Promise((e,t)=>{bt==null||bt.terminate(),U$().then(([r,a])=>{var s;try{bt=a,bt.onerror=o=>t(o),bt.onmessage=Ng,Cd=[e,t];let i={type:"init-wasm",in:Ue};!i.in.wasm.wasmPaths&&(r||(s=import.meta.url)!=null&&s.startsWith("file:"))&&(i.in.wasm.wasmPaths={wasm:new URL("/beandex/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href}),bt.postMessage(i),Ms=r}catch(i){t(i)}},t)});try{await ih(Ue.wasm),await bh(Ue),Xn=!0}catch(e){throw Jn=!0,e}finally{Ti=!1}}},Wb=async e=>{if(xr())return ii(),new Promise((t,r)=>{ri("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:Ue}};bt.postMessage(a)});await vh(Ue,e)},qb=async e=>xr()?(ii(),new Promise((t,r)=>{ri("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};bt.postMessage(a,[e.buffer])})):uo(e),Vb=async(e,t)=>{if(xr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return ii(),new Promise((r,a)=>{ri("create",[r,a]);let s={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),bt.postMessage(s,i)})}else return xh(e,t)},Lb=async e=>{if(xr())return ii(),new Promise((t,r)=>{ri("release",[t,r]);let a={type:"release",in:e};bt.postMessage(a)});Sh(e)},Gb=async(e,t,r,a,s,i)=>{if(xr()){if(r.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return ii(),new Promise((o,l)=>{ri("run",[o,l]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:a,options:i}};bt.postMessage(p,Ch(d))})}else return kh(e,t,r,a,s,i)},Hb=async e=>{if(xr())return ii(),new Promise((t,r)=>{ri("end-profiling",[t,r]);let a={type:"end-profiling",in:e};bt.postMessage(a)});Th(e)}}),Id,Mg,jb,ZS=ee(()=>{rr(),Fb(),we(),th(),L$(),Id=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Mg=e=>{switch(e[3]){case"cpu":return new Jt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!sh(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:s}=e[2];return Jt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:s})}case"ml-tensor":{let t=e[0];if(!oh(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:s}=e[2];return Jt.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:s})}default:throw new Error(`invalid data location: ${e[3]}`)}},jb=class{async fetchModelAndCopyToWasmMemory(e){return qb(await uh(e))}async loadModel(e,t){er();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Vb(r,t),Rt()}async dispose(){return Lb(this.sessionId)}async run(e,t,r){er();let a=[],s=[];Object.entries(e).forEach(g=>{let y=g[0],_=g[1],$=this.inputNames.indexOf(y);if($===-1)throw new Error(`invalid input '${y}'`);a.push(_),s.push($)});let i=[],o=[];Object.entries(t).forEach(g=>{let y=g[0],_=g[1],$=this.outputNames.indexOf(y);if($===-1)throw new Error(`invalid output '${y}'`);i.push(_),o.push($)});let l=a.map((g,y)=>Id(g,()=>`input "${this.inputNames[s[y]]}"`)),d=i.map((g,y)=>g?Id(g,()=>`output "${this.outputNames[o[y]]}"`):null),p=await Gb(this.sessionId,s,l,o,d,r),m={};for(let g=0;g<p.length;g++)m[this.outputNames[o[g]]]=i[g]??Mg(p[g]);return Rt(),m}startProfiling(){}endProfiling(){Hb(this.sessionId)}}}),Kb={};vs(Kb,{OnnxruntimeWebAssemblyBackend:()=>Dp,initializeFlags:()=>Mp,wasmBackend:()=>Qb});var Mp,Dp,Qb,XS=ee(()=>{rr(),Fb(),ZS(),Mp=()=>{if((typeof Ue.wasm.initTimeout!="number"||Ue.wasm.initTimeout<0)&&(Ue.wasm.initTimeout=0),Ue.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof Ue.wasm.proxy!="boolean"&&(Ue.wasm.proxy=!1),typeof Ue.wasm.trace!="boolean"&&(Ue.wasm.trace=!1),typeof Ue.wasm.numThreads!="number"||!Number.isInteger(Ue.wasm.numThreads)||Ue.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ue.wasm.numThreads=1;else{let e=typeof navigator>"u"?M3("node:os").cpus().length:navigator.hardwareConcurrency;Ue.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Dp=class{async init(e){Mp(),await Ub(),await Wb(e)}async createInferenceSessionHandler(e,t){let r=new jb;return await r.loadModel(e,t),Promise.resolve(r)}},Qb=new Dp});rr();rr();rr();var JS="1.21.0",YS=R$;{let e=(XS(),ro(Kb)).wasmBackend;fi("webgpu",e,5),fi("webnn",e,5),fi("cpu",e,10),fi("wasm",e,10)}Object.defineProperty(Ue.versions,"web",{value:JS,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vT=Object.freeze(Object.defineProperty({__proto__:null,get InferenceSession(){return eh},get TRACE(){return _s},get TRACE_FUNC_BEGIN(){return er},get TRACE_FUNC_END(){return Rt},get Tensor(){return Jt},default:YS,get env(){return Ue},get registerBackend(){return fi}},Symbol.toStringTag,{value:"Module"}));/*!
 * ONNX Runtime Web v1.21.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Ih=Object.defineProperty,ek=Object.getOwnPropertyDescriptor,tk=Object.getOwnPropertyNames,rk=Object.prototype.hasOwnProperty,ik=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),te=(e,t)=>()=>(e&&(t=e(e=0)),t),xs=(e,t)=>{for(var r in t)Ih(e,r,{get:t[r],enumerable:!0})},ak=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of tk(t))!rk.call(e,s)&&s!==r&&Ih(e,s,{get:()=>t[s],enumerable:!(a=ek(t,s))||a.enumerable});return e},lo=e=>ak(Ih({},"__esModule",{value:!0}),e),Yn,Sr,mi,Dg,Zb,Xb=te(()=>{Yn=new Map,Sr=[],mi=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Yn.get(e);if(a===void 0)Yn.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let s=Sr.indexOf(e);s!==-1&&Sr.splice(s,1);for(let i=0;i<Sr.length;i++)if(Yn.get(Sr[i]).priority<=r){Sr.splice(i,0,e);return}Sr.push(e)}return}throw new TypeError("not a valid backend")},Dg=async e=>{let t=Yn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Zb=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),a=r.length===0?Sr:r,s,i=[],o=new Set;for(let d of a){let p=await Dg(d);typeof p=="string"?i.push({name:d,err:p}):(s||(s=p),s===p&&o.add(d))}if(!s)throw new Error(`no available backend found. ERR: ${i.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of i)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let l=t.filter(d=>o.has(typeof d=="string"?d:d.name));return[s,new Proxy(e,{get:(d,p)=>p==="executionProviders"?l:Reflect.get(d,p)})]}}),nk=te(()=>{Xb()}),Jb,sk=te(()=>{Jb="1.21.0"}),Ed,Ot,Yb=te(()=>{sk(),Ed="warning",Ot={wasm:{},webgl:{},webgpu:{},versions:{common:Jb},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ed=e}},get logLevel(){return Ed}},Object.defineProperty(Ot,"logLevel",{enumerable:!0})}),We,ok=te(()=>{Yb(),We=Ot}),ev,tv,uk=te(()=>{ev=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let s,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[3]):(s=e.dims[3],i=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let m=i*s,g=0,y=m,_=m*2,$=-1;o==="RGBA"?(g=0,y=m,_=m*2,$=m*3):o==="RGB"?(g=0,y=m,_=m*2):o==="RBG"&&(g=0,_=m,y=m*2);for(let w=0;w<i;w++)for(let S=0;S<s;S++){let v=(e.data[g++]-p[0])*d[0],b=(e.data[y++]-p[1])*d[1],T=(e.data[_++]-p[2])*d[2],k=$===-1?255:(e.data[$++]-p[3])*d[3];a.fillStyle="rgba("+v+","+b+","+T+","+k+")",a.fillRect(S,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},tv=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let s,i,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[1],o=e.dims[3]):(s=e.dims[3],i=e.dims[2],o=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t==null?void 0:t.norm,p,m;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?m=[0,0,0,0]:typeof d.bias=="number"?m=[d.bias,d.bias,d.bias,d.bias]:(m=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(m[3]=d.bias[3]));let g=i*s;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let y=4,_=0,$=1,w=2,S=3,v=0,b=g,T=g*2,k=-1;l==="RGBA"?(v=0,b=g,T=g*2,k=g*3):l==="RGB"?(v=0,b=g,T=g*2):l==="RBG"&&(v=0,T=g,b=g*2),a=r.createImageData(s,i);for(let C=0;C<i*s;_+=y,$+=y,w+=y,S+=y,C++)a.data[_]=(e.data[v++]-m[0])*p[0],a.data[$]=(e.data[b++]-m[1])*p[1],a.data[w]=(e.data[T++]-m[2])*p[2],a.data[S]=k===-1?255:(e.data[k++]-m[3])*p[3]}else throw new Error("Can not access image data");return a}}),Ps,rv,iv,av,nv,sv,lk=te(()=>{Eh(),Ps=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,s=t.norm??{mean:255,bias:0},i,o;typeof s.mean=="number"?i=[s.mean,s.mean,s.mean,s.mean]:i=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?o=[s.bias,s.bias,s.bias,s.bias]:o=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*a,m=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),g=4,y=0,_=1,$=2,w=3,S=0,v=p,b=p*2,T=-1;l==="RGB"&&(g=3,y=0,_=1,$=2,w=-1),d==="RGBA"?T=p*3:d==="RBG"?(S=0,b=p,v=p*2):d==="BGR"&&(b=0,v=p,S=p*2);for(let k=0;k<p;k++,y+=g,$+=g,_+=g,w+=g)m[S++]=(e[y]+o[0])/i[0],m[v++]=(e[_]+o[1])/i[1],m[b++]=(e[$]+o[2])/i[2],T!==-1&&w!==-1&&(m[T++]=(e[w]+o[3])/i[3]);return d==="RGBA"?new It("float32",m,[1,4,r,a]):new It("float32",m,[1,3,r,a])},rv=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",o,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=m=>typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||m instanceof OffscreenCanvas?m.getContext("2d"):null;if(r){let m=d();m.width=e.width,m.height=e.height;let g=p(m);if(g!=null){let y=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(y=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=y,l.width=_}else l.tensorFormat="RGBA",l.height=y,l.width=_;g.drawImage(e,0,0),o=g.getImageData(0,0,_,y).data}else throw new Error("Can not access image data")}else if(a){let m,g;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(m=t.resizedHeight,g=t.resizedWidth):(m=e.height,g=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=m,l.width=g,t!==void 0){let y=d();y.width=g,y.height=m;let _=p(y);if(_!=null)_.putImageData(e,0,0),o=_.getImageData(0,0,g,m).data;else throw new Error("Can not access image data")}else o=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let m=d();m.width=e.width,m.height=e.height;let g=p(m);if(g!=null){let y=e.height,_=e.width;return g.drawImage(e,0,0,_,y),o=g.getImageData(0,0,_,y).data,l.height=y,l.width=_,Ps(o,l)}else throw new Error("Can not access image data")}else{if(i)return new Promise((m,g)=>{let y=d(),_=p(y);if(!e||!_)return g();let $=new Image;$.crossOrigin="Anonymous",$.src=e,$.onload=()=>{y.width=$.width,y.height=$.height,_.drawImage($,0,0,y.width,y.height);let w=_.getImageData(0,0,y.width,y.height);l.height=y.height,l.width=y.width,m(Ps(w.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Ps(o,l);throw new Error("Input data provided is not supported - aborted tensor creation")},iv=(e,t)=>{let{width:r,height:a,download:s,dispose:i}=t,o=[1,a,r,4];return new It({location:"texture",type:"float32",texture:e,dims:o,download:s,dispose:i})},av=(e,t)=>{let{dataType:r,dims:a,download:s,dispose:i}=t;return new It({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:s,dispose:i})},nv=(e,t)=>{let{dataType:r,dims:a,download:s,dispose:i}=t;return new It({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:s,dispose:i})},sv=(e,t,r)=>new It({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),pi,hs,zd,ov,dk=te(()=>{pi=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),hs=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),zd=!1,ov=()=>{if(!zd){zd=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(pi.set("int64",BigInt64Array),hs.set(BigInt64Array,"int64")),t&&(pi.set("uint64",BigUint64Array),hs.set(BigUint64Array,"uint64")),a?(pi.set("float16",r),hs.set(r,"float16")):pi.set("float16",Uint16Array)}}}),uv,lv,pk=te(()=>{Eh(),uv=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},lv=(e,t)=>{switch(e.location){case"cpu":return new It(e.type,e.data,t);case"cpu-pinned":return new It({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new It({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new It({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new It({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),It,Eh=te(()=>{uk(),lk(),dk(),pk(),It=class{constructor(e,t,r){ov();let a,s;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,s=e.dims,e.location){case"cpu-pinned":{let o=pi.get(a);if(!o)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,l;if(typeof e=="string")if(a=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let d=pi.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?o=d.from(t,BigInt):o=d.from(t)}else if(t instanceof d)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&d!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")a="string",o=e;else if(d==="boolean")a="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",o=Uint8Array.from(e);else{let d=hs.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=d,o=e}if(l===void 0)l=[o.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");s=l,this.cpuData=o,this.dataLocation="cpu"}let i=uv(s);if(this.cpuData&&i!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=s,this.size=i}static async fromImage(e,t){return rv(e,t)}static fromTexture(e,t){return iv(e,t)}static fromGpuBuffer(e,t){return av(e,t)}static fromMLTensor(e,t){return nv(e,t)}static fromPinnedBuffer(e,t,r){return sv(e,t,r)}toDataURL(e){return ev(this,e)}toImageData(e){return tv(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return lv(this,e)}}}),Yt,dv=te(()=>{Eh(),Yt=It}),ws,Ad,tr,Bt,pv=te(()=>{Yb(),ws=(e,t)=>{(typeof Ot.trace>"u"?!Ot.wasm.trace:!Ot.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ad=(e,t)=>{var s;let r=((s=new Error().stack)==null?void 0:s.split(/\r\n|\r|\n/g))||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let o=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(o+=`::${t}`),ws("CPU",o);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},tr=e=>{(typeof Ot.trace>"u"?!Ot.wasm.trace:!Ot.trace)||Ad("BEGIN",e)},Bt=e=>{(typeof Ot.trace>"u"?!Ot.wasm.trace:!Ot.trace)||Ad("END",e)}}),hv,hk=te(()=>{Xb(),dv(),pv(),hv=class cv{constructor(t){this.handler=t}async run(t,r,a){tr();let s={},i={};if(typeof t!="object"||t===null||t instanceof Yt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Yt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);s[p]=null}if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,m=Object.getOwnPropertyNames(r);for(let g of this.outputNames)if(m.indexOf(g)!==-1){let y=r[g];(y===null||y instanceof Yt)&&(p=!0,o=!1,s[g]=y)}if(p){if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(o)for(let p of this.outputNames)s[p]=null;let l=await this.handler.run(t,s,i),d={};for(let p in l)if(Object.hasOwnProperty.call(l,p)){let m=l[p];m instanceof Yt?d[p]=m:d[p]=new Yt(m.type,m.data,m.dims)}return Bt(),d}async release(){return this.handler.dispose()}static async create(t,r,a,s){tr();let i,o={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let m=t,g=0,y=t.byteLength;if(typeof r=="object"&&r!==null)o=r;else if(typeof r=="number"){if(g=r,!Number.isSafeInteger(g))throw new RangeError("'byteOffset' must be an integer.");if(g<0||g>=m.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${m.byteLength}).`);if(y=t.byteLength-g,typeof a=="number"){if(y=a,!Number.isSafeInteger(y))throw new RangeError("'byteLength' must be an integer.");if(y<=0||g+y>m.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${m.byteLength-g}].`);if(typeof s=="object"&&s!==null)o=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(m,g,y)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await Zb(o),p=await l.createInferenceSessionHandler(i,d);return Bt(),new cv(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),zh,ck=te(()=>{hk(),zh=hv}),fk=te(()=>{}),mk=te(()=>{}),gk=te(()=>{}),yk=te(()=>{}),fv={};xs(fv,{InferenceSession:()=>zh,TRACE:()=>ws,TRACE_FUNC_BEGIN:()=>tr,TRACE_FUNC_END:()=>Bt,Tensor:()=>Yt,env:()=>We,registerBackend:()=>mi});var ir=te(()=>{nk(),ok(),ck(),dv(),fk(),mk(),pv(),gk(),yk()}),Ah=te(()=>{}),mv={};xs(mv,{default:()=>gv});var Od,Rd,gv,_k=te(()=>{var e;$3(),Si(),Oh(),Od="ort-wasm-proxy-worker",Rd=((e=globalThis.self)==null?void 0:e.name)===Od,Rd&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":Rh(a.wasm).then(()=>{Xh(a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})})},s=>{postMessage({type:r,err:s})});break;case"init-ep":{let{epName:s,env:i}=a;Jh(i,s).then(()=>{postMessage({type:r})},o=>{postMessage({type:r,err:o})});break}case"copy-from":{let{buffer:s}=a,i=go(s);postMessage({type:r,out:i});break}case"create":{let{model:s,options:i}=a;Yh(s,i).then(o=>{postMessage({type:r,out:o})},o=>{postMessage({type:r,err:o})});break}case"release":ec(a),postMessage({type:r});break;case"run":{let{sessionId:s,inputIndices:i,inputs:o,outputIndices:l,options:d}=a;tc(s,i,o,l,new Array(l.length).fill(null),d).then(p=>{p.some(m=>m[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:p},ic([...o,...p]))},p=>{postMessage({type:r,err:p})});break}case"end-profiling":rc(a),postMessage({type:r});break;default:}}catch(s){postMessage({type:r,err:s})}}),gv=Rd?null:t=>new Worker(t??Tt,{type:"module",name:Od})}),yv={};xs(yv,{default:()=>_v});var Bd,Nd,_v,Pg,$k=te(()=>{var e,t;Nd=(Bd=import.meta.url,async function(r={}){var Ln;var a,s,i=r,o=new Promise((n,u)=>{a=n,s=u}),l=typeof window=="object",d=typeof WorkerGlobalScope<"u",p=d&&((Ln=self.name)==null?void 0:Ln.startsWith("em-pthread"));i.mountExternalData=(n,u)=>{n.startsWith("./")&&(n=n.substring(2)),(i.Bd||(i.Bd=new Map)).set(n,u)},i.unmountExternalData=()=>{delete i.Bd};var m=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let g=()=>{let n=(h,c,f)=>(...x)=>{let I=Qe,A=c==null?void 0:c();x=h(...x);let O=c==null?void 0:c();return A!==O&&(h=O,f(A),c=f=null),Qe!=I?new Promise((D,V)=>{Fr={resolve:D,reject:V}}):x},u=h=>async(...c)=>{var f;try{if(i.Cd)throw Error("Session already started");let x=i.Cd={be:c[0],errors:[]},I=await h(...c);if(i.Cd!==x)throw Error("Session mismatch");(f=i.Dd)==null||f.flush();let A=x.errors;if(0<A.length){let O=await Promise.all(A);if(O=O.filter(D=>D),0<O.length)throw Error(O.join(`
`))}return I}finally{i.Cd=null}};i._OrtCreateSession=n(i._OrtCreateSession,()=>i._OrtCreateSession,h=>i._OrtCreateSession=h),i._OrtRun=u(n(i._OrtRun,()=>i._OrtRun,h=>i._OrtRun=h)),i._OrtRunWithBinding=u(n(i._OrtRunWithBinding,()=>i._OrtRunWithBinding,h=>i._OrtRunWithBinding=h)),i._OrtBindInput=n(i._OrtBindInput,()=>i._OrtBindInput,h=>i._OrtBindInput=h),g=void 0};i.jsepInit=(n,u)=>{if(g==null||g(),n==="webgpu"){[i.Dd,i.Rd,i.Vd,i.Hd,i.Ud,i.hc,i.Wd,i.Zd,i.Sd,i.Td,i.Xd]=u;let h=i.Dd;i.jsepRegisterBuffer=(c,f,x,I)=>h.registerBuffer(c,f,x,I),i.jsepGetBuffer=c=>h.getBuffer(c),i.jsepCreateDownloader=(c,f,x)=>h.createDownloader(c,f,x),i.jsepOnCreateSession=c=>{h.onCreateSession(c)},i.jsepOnReleaseSession=c=>{h.onReleaseSession(c)},i.jsepOnRunStart=c=>h.onRunStart(c),i.$d=(c,f)=>{h.upload(c,f)}}else if(n==="webnn"){[i.Dd,i.Yd,i.Id,i.jsepEnsureTensor,i.Jd,i.jsepDownloadTensor]=u,i.jsepReleaseTensorId=i.Id,i.jsepUploadTensor=i.Jd;let h=i.Dd;i.jsepOnRunStart=c=>h.onRunStart(c),i.jsepOnRunEnd=h.onRunEnd.bind(h),i.jsepRegisterMLContext=(c,f)=>{h.registerMLContext(c,f)},i.jsepOnReleaseSession=c=>{h.onReleaseSession(c)},i.jsepCreateMLTensorDownloader=(c,f)=>h.createMLTensorDownloader(c,f),i.jsepRegisterMLTensor=(c,f,x,I)=>h.registerMLTensor(c,f,x,I),i.jsepCreateMLContext=c=>h.createMLContext(c),i.jsepRegisterMLConstant=(c,f,x,I,A)=>h.registerMLConstant(c,f,x,I,A,i.Bd),i.jsepRegisterGraphInput=h.registerGraphInput.bind(h),i.jsepIsGraphInput=h.isGraphInput.bind(h),i.jsepCreateTemporaryTensor=h.createTemporaryTensor.bind(h)}};var y,_,$=Object.assign({},i),w=(n,u)=>{throw u},S="";(l||d)&&(d?S=self.location.href:typeof document<"u"&&document.currentScript&&(S=document.currentScript.src),Bd&&(S=Bd),S=S.startsWith("blob:")?"":S.slice(0,S.replace(/[?#].*/,"").lastIndexOf("/")+1),d&&(_=n=>{var u=new XMLHttpRequest;return u.open("GET",n,!1),u.responseType="arraybuffer",u.send(null),new Uint8Array(u.response)}),y=async n=>{if(fe(n))return new Promise((h,c)=>{var f=new XMLHttpRequest;f.open("GET",n,!0),f.responseType="arraybuffer",f.onload=()=>{f.status==200||f.status==0&&f.response?h(f.response):c(f.status)},f.onerror=c,f.send(null)});var u=await fetch(n,{credentials:"same-origin"});if(u.ok)return u.arrayBuffer();throw Error(u.status+" : "+u.url)});var v=console.log.bind(console),b=console.error.bind(console),T=v,k=b;Object.assign(i,$),$=null;var C,E,z,R,P,q,X,ie,K,J,Z,W,oe,ce=i.wasmBinary,H=!1,fe=n=>n.startsWith("file://");function B(){return C.buffer!=R.buffer&&me(),R}function U(){return C.buffer!=R.buffer&&me(),P}function se(){return C.buffer!=R.buffer&&me(),q}function $e(){return C.buffer!=R.buffer&&me(),X}function N(){return C.buffer!=R.buffer&&me(),ie}function ue(){return C.buffer!=R.buffer&&me(),K}function qe(){return C.buffer!=R.buffer&&me(),J}function De(){return C.buffer!=R.buffer&&me(),oe}if(p){let n=function(u){try{var h=u.data,c=h.yd;if(c==="load"){let f=[];self.onmessage=x=>f.push(x),self.startWorker=()=>{postMessage({yd:"loaded"});for(let x of f)n(x);self.onmessage=n};for(let x of h.Od)i[x]&&!i[x].proxy||(i[x]=(...I)=>{postMessage({yd:"callHandler",Nd:x,args:I})},x=="print"&&(T=i[x]),x=="printErr"&&(k=i[x]));C=h.he,me(),gt(h.ie)}else if(c==="run"){$o(h.xd),Zr(h.xd,0,0,1,0,0),Li(),Gr(h.xd),Ie||(Da(),Ie=!0);try{wo(h.de,h.Fd)}catch(f){if(f!="unwind")throw f}}else h.target!=="setimmediate"&&(c==="checkMailbox"?Ie&&or():c&&(k(`worker: received unknown command ${c}`),k(h)))}catch(f){throw Pa(),f}};var gt,Ie=!1;k=function(...u){u=u.join(" "),console.error(u)},self.alert=function(...u){postMessage({yd:"alert",text:u.join(" "),fe:mr()})},self.onunhandledrejection=u=>{throw u.reason||u},self.onmessage=n}function me(){var n=C.buffer;i.HEAP8=R=new Int8Array(n),i.HEAP16=q=new Int16Array(n),i.HEAPU8=P=new Uint8Array(n),i.HEAPU16=X=new Uint16Array(n),i.HEAP32=ie=new Int32Array(n),i.HEAPU32=K=new Uint32Array(n),i.HEAPF32=J=new Float32Array(n),i.HEAPF64=oe=new Float64Array(n),i.HEAP64=Z=new BigInt64Array(n),i.HEAPU64=W=new BigUint64Array(n)}function st(){p?startWorker(i):M.Bb()}p||(C=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),me());var Nt,yt=0,Mt=null;function Mi(){if(--yt==0&&Mt){var n=Mt;Mt=null,n()}}function Xe(n){throw k(n="Aborted("+n+")"),H=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),s(n),n}function Di(){return{a:{Ta:_o,Va:yo,W:bo,la:vo,b:So,u:ko,R:To,Za:Co,d:Io,pb:ji,g:xo,T:Zi,Ga:Xi,lb:Yi,nb:ea,Ha:ta,Ea:ra,wb:ia,Da:aa,pa:na,mb:sa,jb:oa,Fa:ua,kb:la,Ma:Eo,za:zo,eb:Ao,cb:Ro,ya:No,V:Mo,N:Do,db:Po,ma:Ho,fb:Fo,zb:jo,hb:Ko,qb:Qo,ab:Zo,Aa:Xo,yb:Gr,Ja:Jo,S:Yo,Wa:eu,$:iu,G:au,E:su,m:qr,H:ou,B:du,X:pu,J:hu,v:cu,O:fu,D:mu,t:gu,A:yu,z:_u,w:$u,r:wu,tb:bu,ub:vu,vb:xu,rb:xa,sb:Sa,bb:ka,Oa:ku,La:Cu,y:Iu,ja:Eu,Ba:zu,Ka:Tu,qa:Au,Ia:Ou,ib:Ru,U:Su,fa:Bu,Sa:Nu,gb:Mu,Qa:Du,Pa:Pu,Ab:Ea,Ca:za,ob:Nr,aa:Aa,oa:Oa,xb:Ra,na:Ba,$a:pl,ia:Sl,sa:El,ga:ll,da:yl,ua:Cl,p:ol,e:Hu,c:Lu,ea:ml,f:Fu,n:Ku,k:il,Y:Zu,ka:al,j:ul,wa:fl,Ra:Ol,ca:vl,Ua:Al,P:gl,K:Ju,_:bl,Q:dl,Z:kl,x:Xu,l:Gu,va:wl,i:Vu,h:Qu,ra:zl,ta:Il,o:ju,q:Yu,s:tl,I:rl,C:sl,L:nl,xa:cl,_a:hl,F:xl,Ya:_l,ba:Tl,M:el,Xa:$l,ha:Wu,a:C,Na:Br}}}var Ar={1319426:()=>typeof wasmOffsetConverter<"u",1319483:(n,u,h,c,f)=>{if(i===void 0||!i.Bd)return 1;if((n=Ce(Number(n>>>0))).startsWith("./")&&(n=n.substring(2)),!(n=i.Bd.get(n)))return 2;if(u=Number(u>>>0),h=Number(h>>>0),c=Number(c>>>0),u+h>n.byteLength)return 3;try{let x=n.subarray(u,u+h);switch(f){case 0:U().set(x,c>>>0);break;case 1:i.$d(c,x);break;default:return 4}return 0}catch{return 4}},1320198:(n,u,h)=>{i.Jd(n,U().subarray(u>>>0,u+h>>>0))},1320261:()=>i.Yd(),1320302:n=>{i.Id(n)},1320338:()=>{i.Sd()},1320369:()=>{i.Td()},1320398:()=>{i.Xd()},1320423:n=>i.Rd(n),1320456:n=>i.Vd(n),1320488:(n,u,h)=>{i.Hd(Number(n),Number(u),Number(h),!0)},1320551:(n,u,h)=>{i.Hd(Number(n),Number(u),Number(h))},1320608:n=>{i.hc("Abs",n,void 0)},1320659:n=>{i.hc("Neg",n,void 0)},1320710:n=>{i.hc("Floor",n,void 0)},1320763:n=>{i.hc("Ceil",n,void 0)},1320815:n=>{i.hc("Reciprocal",n,void 0)},1320873:n=>{i.hc("Sqrt",n,void 0)},1320925:n=>{i.hc("Exp",n,void 0)},1320976:n=>{i.hc("Erf",n,void 0)},1321027:n=>{i.hc("Sigmoid",n,void 0)},1321082:(n,u,h)=>{i.hc("HardSigmoid",n,{alpha:u,beta:h})},1321161:n=>{i.hc("Log",n,void 0)},1321212:n=>{i.hc("Sin",n,void 0)},1321263:n=>{i.hc("Cos",n,void 0)},1321314:n=>{i.hc("Tan",n,void 0)},1321365:n=>{i.hc("Asin",n,void 0)},1321417:n=>{i.hc("Acos",n,void 0)},1321469:n=>{i.hc("Atan",n,void 0)},1321521:n=>{i.hc("Sinh",n,void 0)},1321573:n=>{i.hc("Cosh",n,void 0)},1321625:n=>{i.hc("Asinh",n,void 0)},1321678:n=>{i.hc("Acosh",n,void 0)},1321731:n=>{i.hc("Atanh",n,void 0)},1321784:n=>{i.hc("Tanh",n,void 0)},1321836:n=>{i.hc("Not",n,void 0)},1321887:(n,u,h)=>{i.hc("Clip",n,{min:u,max:h})},1321956:n=>{i.hc("Clip",n,void 0)},1322008:(n,u)=>{i.hc("Elu",n,{alpha:u})},1322066:n=>{i.hc("Gelu",n,void 0)},1322118:n=>{i.hc("Relu",n,void 0)},1322170:(n,u)=>{i.hc("LeakyRelu",n,{alpha:u})},1322234:(n,u)=>{i.hc("ThresholdedRelu",n,{alpha:u})},1322304:(n,u)=>{i.hc("Cast",n,{to:u})},1322362:n=>{i.hc("Add",n,void 0)},1322413:n=>{i.hc("Sub",n,void 0)},1322464:n=>{i.hc("Mul",n,void 0)},1322515:n=>{i.hc("Div",n,void 0)},1322566:n=>{i.hc("Pow",n,void 0)},1322617:n=>{i.hc("Equal",n,void 0)},1322670:n=>{i.hc("Greater",n,void 0)},1322725:n=>{i.hc("GreaterOrEqual",n,void 0)},1322787:n=>{i.hc("Less",n,void 0)},1322839:n=>{i.hc("LessOrEqual",n,void 0)},1322898:(n,u,h,c,f)=>{i.hc("ReduceMean",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323073:(n,u,h,c,f)=>{i.hc("ReduceMax",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323247:(n,u,h,c,f)=>{i.hc("ReduceMin",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323421:(n,u,h,c,f)=>{i.hc("ReduceProd",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323596:(n,u,h,c,f)=>{i.hc("ReduceSum",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323770:(n,u,h,c,f)=>{i.hc("ReduceL1",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1323943:(n,u,h,c,f)=>{i.hc("ReduceL2",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1324116:(n,u,h,c,f)=>{i.hc("ReduceLogSum",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1324293:(n,u,h,c,f)=>{i.hc("ReduceSumSquare",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1324473:(n,u,h,c,f)=>{i.hc("ReduceLogSumExp",n,{keepDims:!!u,noopWithEmptyAxes:!!h,axes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1324653:n=>{i.hc("Where",n,void 0)},1324706:(n,u,h)=>{i.hc("Transpose",n,{perm:u?Array.from(N().subarray(Number(u)>>>0,Number(h)>>>0)):[]})},1324830:(n,u,h,c)=>{i.hc("DepthToSpace",n,{blocksize:u,mode:Ce(h),format:c?"NHWC":"NCHW"})},1324963:(n,u,h,c)=>{i.hc("DepthToSpace",n,{blocksize:u,mode:Ce(h),format:c?"NHWC":"NCHW"})},1325096:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e,Le)=>{i.hc("ConvTranspose",n,{format:O?"NHWC":"NCHW",autoPad:u,dilations:[h],group:c,kernelShape:[f],pads:[x,I],strides:[A],wIsConst:()=>!!B()[D>>>0],outputPadding:V?Array.from(N().subarray(Number(V)>>>0,Number(Q)>>>0)):[],outputShape:ne?Array.from(N().subarray(Number(ne)>>>0,Number(_e)>>>0)):[],activation:Ce(Le)})},1325529:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("ConvTranspose",n,{format:A?"NHWC":"NCHW",autoPad:u,dilations:Array.from(N().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:c,kernelShape:Array.from(N().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),pads:Array.from(N().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(N().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!B()[O>>>0],outputPadding:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],outputShape:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[],activation:Ce(_e)})},1326190:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e,Le)=>{i.hc("ConvTranspose",n,{format:O?"NHWC":"NCHW",autoPad:u,dilations:[h],group:c,kernelShape:[f],pads:[x,I],strides:[A],wIsConst:()=>!!B()[D>>>0],outputPadding:V?Array.from(N().subarray(Number(V)>>>0,Number(Q)>>>0)):[],outputShape:ne?Array.from(N().subarray(Number(ne)>>>0,Number(_e)>>>0)):[],activation:Ce(Le)})},1326623:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("ConvTranspose",n,{format:A?"NHWC":"NCHW",autoPad:u,dilations:Array.from(N().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:c,kernelShape:Array.from(N().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),pads:Array.from(N().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(N().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!B()[O>>>0],outputPadding:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],outputShape:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[],activation:Ce(_e)})},1327284:(n,u)=>{i.hc("GlobalAveragePool",n,{format:u?"NHWC":"NCHW"})},1327375:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("AveragePool",n,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:h,count_include_pad:c,storage_order:f,dilations:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(N().subarray(Number(A)>>>0,Number(O)>>>0)):[],pads:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],strides:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[]})},1327854:(n,u)=>{i.hc("GlobalAveragePool",n,{format:u?"NHWC":"NCHW"})},1327945:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("AveragePool",n,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:h,count_include_pad:c,storage_order:f,dilations:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(N().subarray(Number(A)>>>0,Number(O)>>>0)):[],pads:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],strides:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[]})},1328424:(n,u)=>{i.hc("GlobalMaxPool",n,{format:u?"NHWC":"NCHW"})},1328511:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("MaxPool",n,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:h,count_include_pad:c,storage_order:f,dilations:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(N().subarray(Number(A)>>>0,Number(O)>>>0)):[],pads:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],strides:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[]})},1328986:(n,u)=>{i.hc("GlobalMaxPool",n,{format:u?"NHWC":"NCHW"})},1329073:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>{i.hc("MaxPool",n,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:h,count_include_pad:c,storage_order:f,dilations:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(N().subarray(Number(A)>>>0,Number(O)>>>0)):[],pads:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],strides:Q?Array.from(N().subarray(Number(Q)>>>0,Number(ne)>>>0)):[]})},1329548:(n,u,h,c,f)=>{i.hc("Gemm",n,{alpha:u,beta:h,transA:c,transB:f})},1329652:n=>{i.hc("MatMul",n,void 0)},1329706:(n,u,h,c)=>{i.hc("ArgMax",n,{keepDims:!!u,selectLastIndex:!!h,axis:c})},1329814:(n,u,h,c)=>{i.hc("ArgMin",n,{keepDims:!!u,selectLastIndex:!!h,axis:c})},1329922:(n,u)=>{i.hc("Softmax",n,{axis:u})},1329985:(n,u)=>{i.hc("Concat",n,{axis:u})},1330045:(n,u,h,c,f)=>{i.hc("Split",n,{axis:u,numOutputs:h,splitSizes:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1330201:n=>{i.hc("Expand",n,void 0)},1330255:(n,u)=>{i.hc("Gather",n,{axis:Number(u)})},1330326:(n,u)=>{i.hc("GatherElements",n,{axis:Number(u)})},1330405:(n,u)=>{i.hc("GatherND",n,{batch_dims:Number(u)})},1330484:(n,u,h,c,f,x,I,A,O,D,V)=>{i.hc("Resize",n,{antialias:u,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(c)>>>0)):[],coordinateTransformMode:Ce(f),cubicCoeffA:x,excludeOutside:I,extrapolationValue:A,keepAspectRatioPolicy:Ce(O),mode:Ce(D),nearestMode:Ce(V)})},1330846:(n,u,h,c,f,x,I)=>{i.hc("Slice",n,{starts:u?Array.from(N().subarray(Number(u)>>>0,Number(h)>>>0)):[],ends:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[],axes:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[]})},1331110:n=>{i.hc("Tile",n,void 0)},1331162:(n,u,h)=>{i.hc("InstanceNormalization",n,{epsilon:u,format:h?"NHWC":"NCHW"})},1331276:(n,u,h)=>{i.hc("InstanceNormalization",n,{epsilon:u,format:h?"NHWC":"NCHW"})},1331390:n=>{i.hc("Range",n,void 0)},1331443:(n,u)=>{i.hc("Einsum",n,{equation:Ce(u)})},1331524:(n,u,h,c,f)=>{i.hc("Pad",n,{mode:u,value:h,pads:c?Array.from(N().subarray(Number(c)>>>0,Number(f)>>>0)):[]})},1331667:(n,u,h,c,f,x)=>{i.hc("BatchNormalization",n,{epsilon:u,momentum:h,spatial:!!f,trainingMode:!!c,format:x?"NHWC":"NCHW"})},1331836:(n,u,h,c,f,x)=>{i.hc("BatchNormalization",n,{epsilon:u,momentum:h,spatial:!!f,trainingMode:!!c,format:x?"NHWC":"NCHW"})},1332005:(n,u,h)=>{i.hc("CumSum",n,{exclusive:Number(u),reverse:Number(h)})},1332102:(n,u,h)=>{i.hc("DequantizeLinear",n,{axis:u,blockSize:h})},1332192:(n,u,h,c,f)=>{i.hc("GridSample",n,{align_corners:u,mode:Ce(h),padding_mode:Ce(c),format:f?"NHWC":"NCHW"})},1332362:(n,u,h,c,f)=>{i.hc("GridSample",n,{align_corners:u,mode:Ce(h),padding_mode:Ce(c),format:f?"NHWC":"NCHW"})},1332532:(n,u)=>{i.hc("ScatterND",n,{reduction:Ce(u)})},1332617:(n,u,h,c,f,x,I,A,O)=>{i.hc("Attention",n,{numHeads:u,isUnidirectional:h,maskFilterValue:c,scale:f,doRotary:x,qkvHiddenSizes:I?Array.from(N().subarray(Number(A)>>>0,Number(A)+I>>>0)):[],pastPresentShareBuffer:!!O})},1332889:n=>{i.hc("BiasAdd",n,void 0)},1332944:n=>{i.hc("BiasSplitGelu",n,void 0)},1333005:n=>{i.hc("FastGelu",n,void 0)},1333061:(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e,Le,qt)=>{i.hc("Conv",n,{format:Q?"NHWC":"NCHW",auto_pad:u,dilations:h?Array.from(N().subarray(Number(h)>>>0,Number(c)>>>0)):[],group:f,kernel_shape:x?Array.from(N().subarray(Number(x)>>>0,Number(I)>>>0)):[],pads:A?Array.from(N().subarray(Number(A)>>>0,Number(O)>>>0)):[],strides:D?Array.from(N().subarray(Number(D)>>>0,Number(V)>>>0)):[],w_is_const:()=>!!B()[Number(ne)>>>0],activation:Ce(_e),activation_params:Le?Array.from(qe().subarray(Number(Le)>>>0,Number(qt)>>>0)):[]})},1333645:n=>{i.hc("Gelu",n,void 0)},1333697:(n,u,h,c,f,x,I,A,O)=>{i.hc("GroupQueryAttention",n,{numHeads:u,kvNumHeads:h,scale:c,softcap:f,doRotary:x,rotaryInterleaved:I,smoothSoftmax:A,localWindowSize:O})},1333914:(n,u,h,c)=>{i.hc("LayerNormalization",n,{axis:u,epsilon:h,simplified:!!c})},1334025:(n,u,h,c)=>{i.hc("LayerNormalization",n,{axis:u,epsilon:h,simplified:!!c})},1334136:(n,u,h,c,f,x)=>{i.hc("MatMulNBits",n,{k:u,n:h,accuracyLevel:c,bits:f,blockSize:x})},1334263:(n,u,h,c,f,x)=>{i.hc("MultiHeadAttention",n,{numHeads:u,isUnidirectional:h,maskFilterValue:c,scale:f,doRotary:x})},1334422:(n,u)=>{i.hc("QuickGelu",n,{alpha:u})},1334486:(n,u,h,c,f)=>{i.hc("RotaryEmbedding",n,{interleaved:!!u,numHeads:h,rotaryEmbeddingDim:c,scale:f})},1334625:(n,u,h)=>{i.hc("SkipLayerNormalization",n,{epsilon:u,simplified:!!h})},1334727:(n,u,h)=>{i.hc("SkipLayerNormalization",n,{epsilon:u,simplified:!!h})},1334829:(n,u,h,c)=>{i.hc("GatherBlockQuantized",n,{gatherAxis:u,quantizeAxis:h,blockSize:c})},1334950:n=>{i.Wd(n)},1334984:(n,u)=>i.Zd(Number(n),Number(u),i.Cd.be,i.Cd.errors)};function yo(n,u,h){return ya(async()=>{await i.Ud(Number(n),Number(u),Number(h))})}function _o(){return typeof wasmOffsetConverter<"u"}class Or{constructor(u){Rl(this,"name","ExitStatus");this.message=`Program terminated with exit(${u})`,this.status=u}}var Pi=n=>{n.terminate(),n.onmessage=()=>{}},Rr=[],Ui=n=>{ut.length==0&&(Hi(),Gi(ut[0]));var u=ut.pop();if(!u)return 6;Dt.push(u),_t[n.xd]=u,u.xd=n.xd;var h={yd:"run",de:n.ce,Fd:n.Fd,xd:n.xd};return u.postMessage(h,n.Ld),0},ot=0,ve=(n,u,...h)=>{for(var c=2*h.length,f=re(),x=Jr(8*c),I=x>>>3,A=0;A<h.length;A++){var O=h[A];typeof O=="bigint"?(Z[I+2*A]=1n,Z[I+2*A+1]=O):(Z[I+2*A]=0n,De()[I+2*A+1>>>0]=O)}return n=Ua(n,0,c,x,u),Y(f),n};function Br(n){if(p)return ve(0,1,n);if(z=n,!(0<ot)){for(var u of Dt)Pi(u);for(u of ut)Pi(u);ut=[],Dt=[],_t={},H=!0}w(0,new Or(n))}function Wi(n){if(p)return ve(1,0,n);Nr(n)}var Nr=n=>{if(z=n,p)throw Wi(n),"unwind";Br(n)},ut=[],Dt=[],qi=[],_t={},Vi=n=>{var u=n.xd;delete _t[u],ut.push(n),Dt.splice(Dt.indexOf(n),1),n.xd=0,Wa(u)};function Li(){qi.forEach(n=>n())}var Gi=n=>new Promise(u=>{n.onmessage=f=>{var x=(f=f.data).yd;if(f.Ed&&f.Ed!=mr()){var I=_t[f.Ed];I?I.postMessage(f,f.Ld):k(`Internal error! Worker sent a message "${x}" to target pthread ${f.Ed}, but that thread no longer exists!`)}else x==="checkMailbox"?or():x==="spawnThread"?Ui(f):x==="cleanupThread"?Vi(_t[f.ee]):x==="loaded"?(n.loaded=!0,u(n)):x==="alert"?alert(`Thread ${f.fe}: ${f.text}`):f.target==="setimmediate"?n.postMessage(f):x==="callHandler"?i[f.Nd](...f.args):x&&k(`worker sent an unknown command ${x}`)},n.onerror=f=>{throw k(`worker sent an error! ${f.filename}:${f.lineno}: ${f.message}`),f};var h,c=[];for(h of[])i.propertyIsEnumerable(h)&&c.push(h);n.postMessage({yd:"load",Od:c,he:C,ie:E})});function Hi(){var n=new Worker(import.meta.url.startsWith("file:")?new URL("/beandex/assets/ort.bundle.min-OfoG_cy9.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});ut.push(n)}var $o=n=>{me();var u=ue()[n+52>>>2>>>0];n=ue()[n+56>>>2>>>0],La(u,u-n),Y(u)},wo=(n,u)=>{ot=0,n=Yr(n,u),0<ot?z=n:Xr(n)},sr=[];function bo(n){var u=new Mr(n>>>=0);if(B()[u.wd+12>>>0]==0){var h=1;B()[u.wd+12>>>0]=h}return h=0,B()[u.wd+13>>>0]=h,sr.push(u),Ha(n),ja(n)}var xt=0,vo=()=>{ae(0,0);var n=sr.pop();Ga(n.Gd),xt=0};class Mr{constructor(u){this.Gd=u,this.wd=u-24}}function xo(n){throw xt||(xt=n>>>0),xt}var Dr=n=>{var u=xt;if(!u)return Wt(0),0;var h=new Mr(u);ue()[h.wd+16>>>2>>>0]=u;var c=ue()[h.wd+4>>>2>>>0];if(!c)return Wt(0),u;for(var f of n){if(f===0||f===c)break;if(Fa(f,c,h.wd+16))return Wt(f),u}return Wt(c),u};function So(){return Dr([])}function ko(n){return Dr([n>>>0])}function To(n,u){return Dr([n>>>0,u>>>0])}var Co=()=>{var n=sr.pop();n||Xe("no exception to throw");var u=n.Gd;if(B()[n.wd+13>>>0]==0){sr.push(n);var h=1;B()[n.wd+13>>>0]=h,h=0,B()[n.wd+12>>>0]=h}throw xt=u};function Io(n,u,h){var c=new Mr(n>>>=0);throw u>>>=0,h>>>=0,ue()[c.wd+16>>>2>>>0]=0,ue()[c.wd+4>>>2>>>0]=u,ue()[c.wd+8>>>2>>>0]=h,xt=n}function Fi(n,u,h,c){return p?ve(2,1,n,u,h,c):ji(n,u,h,c)}function ji(n,u,h,c){if(n>>>=0,h>>>=0,c>>>=0,m===void 0)return 6;var f=[];return p&&f.length===0?Fi(n,u>>>=0,h,c):(n={ce:h,xd:n,Fd:c,Ld:f},p?(n.yd="spawnThread",postMessage(n,f),0):Ui(n))}var Ki=typeof TextDecoder<"u"?new TextDecoder:void 0,Qi=(n,u=0,h=NaN)=>{var c=(u>>>=0)+h;for(h=u;n[h]&&!(h>=c);)++h;if(16<h-u&&n.buffer&&Ki)return Ki.decode(n.buffer instanceof ArrayBuffer?n.subarray(u,h):n.slice(u,h));for(c="";u<h;){var f=n[u++];if(128&f){var x=63&n[u++];if((224&f)==192)c+=String.fromCharCode((31&f)<<6|x);else{var I=63&n[u++];65536>(f=(240&f)==224?(15&f)<<12|x<<6|I:(7&f)<<18|x<<12|I<<6|63&n[u++])?c+=String.fromCharCode(f):(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|1023&f))}}else c+=String.fromCharCode(f)}return c},Ce=(n,u)=>(n>>>=0)?Qi(U(),n,u):"";function Zi(n,u,h){return p?ve(3,1,n,u,h):0}function Xi(n,u){if(p)return ve(4,1,n,u)}var Ji=n=>{for(var u=0,h=0;h<n.length;++h){var c=n.charCodeAt(h);127>=c?u++:2047>=c?u+=2:55296<=c&&57343>=c?(u+=4,++h):u+=3}return u},St=(n,u,h)=>{var c=U();if(u>>>=0,0<h){var f=u;h=u+h-1;for(var x=0;x<n.length;++x){var I=n.charCodeAt(x);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&n.charCodeAt(++x)),127>=I){if(u>=h)break;c[u++>>>0]=I}else{if(2047>=I){if(u+1>=h)break;c[u++>>>0]=192|I>>6}else{if(65535>=I){if(u+2>=h)break;c[u++>>>0]=224|I>>12}else{if(u+3>=h)break;c[u++>>>0]=240|I>>18,c[u++>>>0]=128|I>>12&63}c[u++>>>0]=128|I>>6&63}c[u++>>>0]=128|63&I}}c[u>>>0]=0,n=u-f}else n=0;return n};function Yi(n,u){if(p)return ve(5,1,n,u)}function ea(n,u,h){if(p)return ve(6,1,n,u,h)}function ta(n,u,h){return p?ve(7,1,n,u,h):0}function ra(n,u){if(p)return ve(8,1,n,u)}function ia(n,u,h){if(p)return ve(9,1,n,u,h)}function aa(n,u,h,c){if(p)return ve(10,1,n,u,h,c)}function na(n,u,h,c){if(p)return ve(11,1,n,u,h,c)}function sa(n,u,h,c){if(p)return ve(12,1,n,u,h,c)}function oa(n){if(p)return ve(13,1,n)}function ua(n,u){if(p)return ve(14,1,n,u)}function la(n,u,h){if(p)return ve(15,1,n,u,h)}var da,lt,Eo=()=>Xe(""),Ke=n=>{for(var u="";U()[n>>>0];)u+=da[U()[n++>>>0]];return u},Pr={},Ur={};function Je(n,u,h={}){return function(c,f,x={}){var I=f.name;if(!c)throw new lt(`type "${I}" must have a positive integer typeid pointer`);if(Ur.hasOwnProperty(c)){if(x.Pd)return;throw new lt(`Cannot register type '${I}' twice`)}Ur[c]=f,Pr.hasOwnProperty(c)&&(f=Pr[c],delete Pr[c],f.forEach(A=>A()))}(n,u,h)}var pa=(n,u,h)=>{switch(u){case 1:return h?c=>B()[c>>>0]:c=>U()[c>>>0];case 2:return h?c=>se()[c>>>1>>>0]:c=>$e()[c>>>1>>>0];case 4:return h?c=>N()[c>>>2>>>0]:c=>ue()[c>>>2>>>0];case 8:return h?c=>Z[c>>>3]:c=>W[c>>>3];default:throw new TypeError(`invalid integer width (${u}): ${n}`)}};function zo(n,u,h){h>>>=0,Je(n>>>=0,{name:u=Ke(u>>>0),fromWireType:c=>c,toWireType:function(c,f){if(typeof f!="bigint"&&typeof f!="number")throw f=f===null?"null":(c=typeof f)=="object"||c==="array"||c==="function"?f.toString():""+f,new TypeError(`Cannot convert "${f}" to ${this.name}`);return typeof f=="number"&&(f=BigInt(f)),f},zd:dt,readValueFromPointer:pa(u,h,u.indexOf("u")==-1),Ad:null})}var dt=8;function Ao(n,u,h,c){Je(n>>>=0,{name:u=Ke(u>>>0),fromWireType:function(f){return!!f},toWireType:function(f,x){return x?h:c},zd:dt,readValueFromPointer:function(f){return this.fromWireType(U()[f>>>0])},Ad:null})}var Wr=[],Ye=[];function qr(n){9<(n>>>=0)&&--Ye[n+1]==0&&(Ye[n]=void 0,Wr.push(n))}var Pe=n=>{if(!n)throw new lt("Cannot use deleted val. handle = "+n);return Ye[n]},Ve=n=>{switch(n){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let u=Wr.pop()||Ye.length;return Ye[u]=n,Ye[u+1]=1,u}};function Vr(n){return this.fromWireType(ue()[n>>>2>>>0])}var Oo={name:"emscripten::val",fromWireType:n=>{var u=Pe(n);return qr(n),u},toWireType:(n,u)=>Ve(u),zd:dt,readValueFromPointer:Vr,Ad:null};function Ro(n){return Je(n>>>0,Oo)}var Bo=(n,u)=>{switch(u){case 4:return function(h){return this.fromWireType(qe()[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(De()[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${u}): ${n}`)}};function No(n,u,h){h>>>=0,Je(n>>>=0,{name:u=Ke(u>>>0),fromWireType:c=>c,toWireType:(c,f)=>f,zd:dt,readValueFromPointer:Bo(u,h),Ad:null})}function Mo(n,u,h,c,f){if(n>>>=0,h>>>=0,u=Ke(u>>>0),f===-1&&(f=4294967295),f=A=>A,c===0){var x=32-8*h;f=A=>A<<x>>>x}var I=u.includes("unsigned")?function(A,O){return O>>>0}:function(A,O){return O};Je(n,{name:u,fromWireType:f,toWireType:I,zd:dt,readValueFromPointer:pa(u,h,c!==0),Ad:null})}function Do(n,u,h){function c(x){var I=ue()[x>>>2>>>0];return x=ue()[x+4>>>2>>>0],new f(B().buffer,x,I)}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][u];Je(n>>>=0,{name:h=Ke(h>>>0),fromWireType:c,zd:dt,readValueFromPointer:c},{Pd:!0})}function Po(n,u){Je(n>>>=0,{name:u=Ke(u>>>0),fromWireType:function(h){for(var c,f=ue()[h>>>2>>>0],x=h+4,I=x,A=0;A<=f;++A){var O=x+A;A!=f&&U()[O>>>0]!=0||(I=Ce(I,O-I),c===void 0?c=I:(c+="\0",c+=I),I=O+1)}return Ze(h),c},toWireType:function(h,c){c instanceof ArrayBuffer&&(c=new Uint8Array(c));var f=typeof c=="string";if(!(f||c instanceof Uint8Array||c instanceof Uint8ClampedArray||c instanceof Int8Array))throw new lt("Cannot pass non-string to std::string");var x=f?Ji(c):c.length,I=gr(4+x+1),A=I+4;if(ue()[I>>>2>>>0]=x,f)St(c,A,x+1);else if(f)for(f=0;f<x;++f){var O=c.charCodeAt(f);if(255<O)throw Ze(I),new lt("String has UTF-16 code units that do not fit in 8 bits");U()[A+f>>>0]=O}else for(f=0;f<x;++f)U()[A+f>>>0]=c[f];return h!==null&&h.push(Ze,I),I},zd:dt,readValueFromPointer:Vr,Ad(h){Ze(h)}})}var ha=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Uo=(n,u)=>{for(var h=n>>1,c=h+u/2;!(h>=c)&&$e()[h>>>0];)++h;if(32<(h<<=1)-n&&ha)return ha.decode(U().slice(n,h));for(h="",c=0;!(c>=u/2);++c){var f=se()[n+2*c>>>1>>>0];if(f==0)break;h+=String.fromCharCode(f)}return h},Wo=(n,u,h)=>{if(h??(h=2147483647),2>h)return 0;var c=u;h=(h-=2)<2*n.length?h/2:n.length;for(var f=0;f<h;++f){var x=n.charCodeAt(f);se()[u>>>1>>>0]=x,u+=2}return se()[u>>>1>>>0]=0,u-c},qo=n=>2*n.length,Vo=(n,u)=>{for(var h=0,c="";!(h>=u/4);){var f=N()[n+4*h>>>2>>>0];if(f==0)break;++h,65536<=f?(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|1023&f)):c+=String.fromCharCode(f)}return c},Lo=(n,u,h)=>{if(u>>>=0,h??(h=2147483647),4>h)return 0;var c=u;h=c+h-4;for(var f=0;f<n.length;++f){var x=n.charCodeAt(f);if(55296<=x&&57343>=x&&(x=65536+((1023&x)<<10)|1023&n.charCodeAt(++f)),N()[u>>>2>>>0]=x,(u+=4)+4>h)break}return N()[u>>>2>>>0]=0,u-c},Go=n=>{for(var u=0,h=0;h<n.length;++h){var c=n.charCodeAt(h);55296<=c&&57343>=c&&++h,u+=4}return u};function Ho(n,u,h){if(n>>>=0,u>>>=0,h=Ke(h>>>=0),u===2)var c=Uo,f=Wo,x=qo,I=A=>$e()[A>>>1>>>0];else u===4&&(c=Vo,f=Lo,x=Go,I=A=>ue()[A>>>2>>>0]);Je(n,{name:h,fromWireType:A=>{for(var O,D=ue()[A>>>2>>>0],V=A+4,Q=0;Q<=D;++Q){var ne=A+4+Q*u;Q!=D&&I(ne)!=0||(V=c(V,ne-V),O===void 0?O=V:(O+="\0",O+=V),V=ne+u)}return Ze(A),O},toWireType:(A,O)=>{if(typeof O!="string")throw new lt(`Cannot pass non-string to C++ string type ${h}`);var D=x(O),V=gr(4+D+u);return ue()[V>>>2>>>0]=D/u,f(O,V+4,D+u),A!==null&&A.push(Ze,V),V},zd:dt,readValueFromPointer:Vr,Ad(A){Ze(A)}})}function Fo(n,u){Je(n>>>=0,{Qd:!0,name:u=Ke(u>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function jo(n){Zr(n>>>0,!d,1,!l,131072,!1),Li()}var Lr=n=>{if(!H)try{if(n(),!(0<ot))try{p?Xr(z):Nr(z)}catch(u){u instanceof Or||u=="unwind"||w(0,u)}}catch(u){u instanceof Or||u=="unwind"||w(0,u)}};function Gr(n){n>>>=0,typeof Atomics.ge=="function"&&(Atomics.ge(N(),n>>>2,n).value.then(or),n+=128,Atomics.store(N(),n>>>2,1))}var or=()=>{var n=mr();n&&(Gr(n),Lr(Va))};function Ko(n,u){(n>>>=0)==u>>>0?setTimeout(or):p?postMessage({Ed:n,yd:"checkMailbox"}):(n=_t[n])&&n.postMessage({yd:"checkMailbox"})}var Hr=[];function Qo(n,u,h,c,f){for(u>>>=0,c/=2,Hr.length=c,h=f>>>0>>>3,f=0;f<c;f++)Hr[f]=Z[h+2*f]?Z[h+2*f+1]:De()[h+2*f+1>>>0];return(u?Ar[u]:qu[n])(...Hr)}var Zo=()=>{ot=0};function Xo(n){n>>>=0,p?postMessage({yd:"cleanupThread",ee:n}):Vi(_t[n])}function Jo(n){}var ur=(n,u)=>{var h=Ur[n];if(h===void 0)throw n=Ma(n),h=Ke(n),Ze(n),new lt(`${u} has unknown type ${h}`);return h},ca=(n,u,h)=>{var c=[];return n=n.toWireType(c,h),c.length&&(ue()[u>>>2>>>0]=Ve(c)),n};function Yo(n,u,h){return u>>>=0,h>>>=0,n=Pe(n>>>0),u=ur(u,"emval::as"),ca(u,h,n)}function eu(n,u){return u>>>=0,n=Pe(n>>>0),(u=ur(u,"emval::as")).toWireType(null,n)}var lr=n=>{try{n()}catch(u){Xe(u)}},pt=0,Qe=null,fa=0,dr=[],ma={},ga={},tu=0,Fr=null,ru=[];function ya(n){return function(u){if(!H){if(pt===0){var h=!1,c=!1;u((f=0)=>{if(!H&&(fa=f,h=!0,c)){pt=2,lr(()=>qn(Qe)),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.resume(),f=!1;try{var x=function(){var O=N()[Qe+8>>>2>>>0];return O=M[ga[O]],--ot,O()}()}catch(O){x=O,f=!0}var I=!1;if(!Qe){var A=Fr;A&&(Fr=null,(f?A.reject:A.resolve)(x),I=!0)}if(f&&!I)throw x}}),c=!0,h||(pt=1,Qe=function(){var f=gr(65548),x=f+12;ue()[f>>>2>>>0]=x,ue()[f+4>>>2>>>0]=x+65536,x=dr[0];var I=ma[x];return I===void 0&&(I=tu++,ma[x]=I,ga[I]=x),x=I,N()[f+8>>>2>>>0]=x,f}(),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.pause(),lr(()=>Un(Qe)))}else pt===2?(pt=0,lr(Vn),Ze(Qe),Qe=null,ru.forEach(Lr)):Xe(`invalid state: ${pt}`);return fa}}(u=>{n().then(u)})}function iu(n){return n>>>=0,ya(async()=>{var u=await Pe(n);return Ve(u)})}var pr=[];function au(n,u,h,c){return h>>>=0,c>>>=0,(n=pr[n>>>0])(null,u=Pe(u>>>0),h,c)}var nu={},hr=n=>{var u=nu[n];return u===void 0?Ke(n):u};function su(n,u,h,c,f){return h>>>=0,c>>>=0,f>>>=0,(n=pr[n>>>0])(u=Pe(u>>>0),u[h=hr(h)],c,f)}var _a=()=>typeof globalThis=="object"?globalThis:Function("return this")();function ou(n){return(n>>>=0)==0?Ve(_a()):(n=hr(n),Ve(_a()[n]))}var uu=n=>{var u=pr.length;return pr.push(n),u},lu=(n,u)=>{for(var h=Array(n),c=0;c<n;++c)h[c]=ur(ue()[u+4*c>>>2>>>0],"parameter "+c);return h},$a=(n,u)=>Object.defineProperty(u,"name",{value:n});function du(n,u,h){var c=(u=lu(n,u>>>0)).shift();n--;var f=`return function (obj, func, destructorsRef, args) {
`,x=0,I=[];h===0&&I.push("obj");for(var A=["retType"],O=[c],D=0;D<n;++D)I.push("arg"+D),A.push("argType"+D),O.push(u[D]),f+=`  var arg${D} = argType${D}.readValueFromPointer(args${x?"+"+x:""});
`,x+=u[D].zd;return f+=`  var rv = ${h===1?"new func":"func.call"}(${I.join(", ")});
`,c.Qd||(A.push("emval_returnValue"),O.push(ca),f+=`  return emval_returnValue(retType, destructorsRef, rv);
`),A.push(f+`};
`),n=function(V){var Q=Function;if(!(Q instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof Q} which is not a function`);var ne=$a(Q.name||"unknownFunctionName",function(){});return ne.prototype=Q.prototype,ne=new ne,(V=Q.apply(ne,V))instanceof Object?V:ne}(A)(...O),h=`methodCaller<(${u.map(V=>V.name).join(", ")}) => ${c.name}>`,uu($a(h,n))}function pu(n){return n=hr(n>>>0),Ve(i[n])}function hu(n,u){return u>>>=0,n=Pe(n>>>0),u=Pe(u),Ve(n[u])}function cu(n){9<(n>>>=0)&&(Ye[n+1]+=1)}function fu(){return Ve([])}function mu(n){n=Pe(n>>>0);for(var u=Array(n.length),h=0;h<n.length;h++)u[h]=n[h];return Ve(u)}function gu(n){return Ve(hr(n>>>0))}function yu(){return Ve({})}function _u(n){for(var u=Pe(n>>>=0);u.length;){var h=u.pop();u.pop()(h)}qr(n)}function $u(n,u,h){u>>>=0,h>>>=0,n=Pe(n>>>0),u=Pe(u),h=Pe(h),n[u]=h}function wu(n,u){return u>>>=0,n=(n=ur(n>>>0,"_emval_take_value")).readValueFromPointer(u),Ve(n)}function bu(n,u){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),u>>>=0,n=new Date(1e3*n),N()[u>>>2>>>0]=n.getUTCSeconds(),N()[u+4>>>2>>>0]=n.getUTCMinutes(),N()[u+8>>>2>>>0]=n.getUTCHours(),N()[u+12>>>2>>>0]=n.getUTCDate(),N()[u+16>>>2>>>0]=n.getUTCMonth(),N()[u+20>>>2>>>0]=n.getUTCFullYear()-1900,N()[u+24>>>2>>>0]=n.getUTCDay(),n=(n.getTime()-Date.UTC(n.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,N()[u+28>>>2>>>0]=n}var wa=n=>n%4==0&&(n%100!=0||n%400==0),ba=[0,31,60,91,121,152,182,213,244,274,305,335],va=[0,31,59,90,120,151,181,212,243,273,304,334];function vu(n,u){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),u>>>=0,n=new Date(1e3*n),N()[u>>>2>>>0]=n.getSeconds(),N()[u+4>>>2>>>0]=n.getMinutes(),N()[u+8>>>2>>>0]=n.getHours(),N()[u+12>>>2>>>0]=n.getDate(),N()[u+16>>>2>>>0]=n.getMonth(),N()[u+20>>>2>>>0]=n.getFullYear()-1900,N()[u+24>>>2>>>0]=n.getDay();var h=(wa(n.getFullYear())?ba:va)[n.getMonth()]+n.getDate()-1|0;N()[u+28>>>2>>>0]=h,N()[u+36>>>2>>>0]=-60*n.getTimezoneOffset(),h=new Date(n.getFullYear(),6,1).getTimezoneOffset();var c=new Date(n.getFullYear(),0,1).getTimezoneOffset();n=0|(h!=c&&n.getTimezoneOffset()==Math.min(c,h)),N()[u+32>>>2>>>0]=n}function xu(n){n>>>=0;var u=new Date(N()[n+20>>>2>>>0]+1900,N()[n+16>>>2>>>0],N()[n+12>>>2>>>0],N()[n+8>>>2>>>0],N()[n+4>>>2>>>0],N()[n>>>2>>>0],0),h=N()[n+32>>>2>>>0],c=u.getTimezoneOffset(),f=new Date(u.getFullYear(),6,1).getTimezoneOffset(),x=new Date(u.getFullYear(),0,1).getTimezoneOffset(),I=Math.min(x,f);return 0>h?N()[n+32>>>2>>>0]=+(f!=x&&I==c):0<h!=(I==c)&&(f=Math.max(x,f),u.setTime(u.getTime()+6e4*((0<h?I:f)-c))),N()[n+24>>>2>>>0]=u.getDay(),h=(wa(u.getFullYear())?ba:va)[u.getMonth()]+u.getDate()-1|0,N()[n+28>>>2>>>0]=h,N()[n>>>2>>>0]=u.getSeconds(),N()[n+4>>>2>>>0]=u.getMinutes(),N()[n+8>>>2>>>0]=u.getHours(),N()[n+12>>>2>>>0]=u.getDate(),N()[n+16>>>2>>>0]=u.getMonth(),N()[n+20>>>2>>>0]=u.getYear(),n=u.getTime(),BigInt(isNaN(n)?-1:n/1e3)}function xa(n,u,h,c,f,x,I){return p?ve(16,1,n,u,h,c,f,x,I):-52}function Sa(n,u,h,c,f,x){if(p)return ve(17,1,n,u,h,c,f,x)}var Pt={},Su=()=>performance.timeOrigin+performance.now();function ka(n,u){if(p)return ve(18,1,n,u);if(Pt[n]&&(clearTimeout(Pt[n].id),delete Pt[n]),!u)return 0;var h=setTimeout(()=>{delete Pt[n],Lr(()=>qa(n,performance.timeOrigin+performance.now()))},u);return Pt[n]={id:h,ke:u},0}function ku(n,u,h,c){n>>>=0,u>>>=0,h>>>=0,c>>>=0;var f=new Date().getFullYear(),x=new Date(f,0,1).getTimezoneOffset();f=new Date(f,6,1).getTimezoneOffset();var I=Math.max(x,f);ue()[n>>>2>>>0]=60*I,N()[u>>>2>>>0]=+(x!=f),n=(u=A=>{var O=Math.abs(A);return`UTC${0<=A?"-":"+"}${String(Math.floor(O/60)).padStart(2,"0")}${String(O%60).padStart(2,"0")}`})(x),u=u(f),f<x?(St(n,h,17),St(u,c,17)):(St(n,c,17),St(u,h,17))}var Tu=()=>Date.now();function Cu(n,u,h){return 0<=n&&3>=n?(n===0?n=Date.now():n=performance.timeOrigin+performance.now(),Z[h>>>0>>>3]=BigInt(Math.round(1e6*n)),0):28}var jr=[],Ta=(n,u)=>{jr.length=0;for(var h;h=U()[n++>>>0];){var c=h!=105;u+=(c&=h!=112)&&u%8?4:0,jr.push(h==112?ue()[u>>>2>>>0]:h==106?Z[u>>>3]:h==105?N()[u>>>2>>>0]:De()[u>>>3>>>0]),u+=c?8:4}return jr};function Iu(n,u,h){return n>>>=0,u=Ta(u>>>0,h>>>0),Ar[n](...u)}function Eu(n,u,h){return n>>>=0,u=Ta(u>>>0,h>>>0),Ar[n](...u)}var zu=()=>{};function Au(n,u){return k(Ce(n>>>0,u>>>0))}var Ou=()=>{throw ot+=1,"unwind"};function Ru(){return 4294901760}var Bu=()=>navigator.hardwareConcurrency;function Nu(){return Xe("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Mu(n){n>>>=0;var u=U().length;if(n<=u||4294901760<n)return!1;for(var h=1;4>=h;h*=2){var c=u*(1+.2/h);c=Math.min(c,n+100663296);e:{c=(Math.min(4294901760,65536*Math.ceil(Math.max(n,c)/65536))-C.buffer.byteLength+65535)/65536|0;try{C.grow(c),me();var f=1;break e}catch{}f=void 0}if(f)return!0}return!1}var cr=()=>(Xe("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Ut={},Ca=n=>{n.forEach(u=>{cr()})};function Du(){var n=Error().stack.toString().split(`
`);return n[0]=="Error"&&n.shift(),Ca(n),Ut.Kd=cr(),Ut.ae=n,Ut.Kd}function Pu(n,u,h){if(n>>>=0,u>>>=0,Ut.Kd==n)var c=Ut.ae;else(c=Error().stack.toString().split(`
`))[0]=="Error"&&c.shift(),Ca(c);for(var f=3;c[f]&&cr()!=n;)++f;for(n=0;n<h&&c[n+f];++n)N()[u+4*n>>>2>>>0]=cr();return n}var Kr,Qr={},Ia=()=>{if(!Kr){var n,u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(n in Qr)Qr[n]===void 0?delete u[n]:u[n]=Qr[n];var h=[];for(n in u)h.push(`${n}=${u[n]}`);Kr=h}return Kr};function Ea(n,u){if(p)return ve(19,1,n,u);n>>>=0,u>>>=0;var h=0;return Ia().forEach((c,f)=>{var x=u+h;for(f=ue()[n+4*f>>>2>>>0]=x,x=0;x<c.length;++x)B()[f++>>>0]=c.charCodeAt(x);B()[f>>>0]=0,h+=c.length+1}),0}function za(n,u){if(p)return ve(20,1,n,u);n>>>=0,u>>>=0;var h=Ia();ue()[n>>>2>>>0]=h.length;var c=0;return h.forEach(f=>c+=f.length+1),ue()[u>>>2>>>0]=c,0}function Aa(n){return p?ve(21,1,n):52}function Oa(n,u,h,c){return p?ve(22,1,n,u,h,c):52}function Ra(n,u,h,c){return p?ve(23,1,n,u,h,c):70}var Uu=[null,[],[]];function Ba(n,u,h,c){if(p)return ve(24,1,n,u,h,c);u>>>=0,h>>>=0,c>>>=0;for(var f=0,x=0;x<h;x++){var I=ue()[u>>>2>>>0],A=ue()[u+4>>>2>>>0];u+=8;for(var O=0;O<A;O++){var D=U()[I+O>>>0],V=Uu[n];D===0||D===10?((n===1?T:k)(Qi(V)),V.length=0):V.push(D)}f+=A}return ue()[c>>>2>>>0]=f,0}function Wu(n){return n>>>0}p||function(){for(var n=i.numThreads-1;n--;)Hi();Rr.unshift(()=>{yt++,function(u){p?u():Promise.all(ut.map(Gi)).then(u)}(()=>Mi())})}();for(var Na=Array(256),fr=0;256>fr;++fr)Na[fr]=String.fromCharCode(fr);da=Na,lt=i.BindingError=class extends Error{constructor(n){super(n),this.name="BindingError"}},i.InternalError=class extends Error{constructor(n){super(n),this.name="InternalError"}},Ye.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>Ye.length/2-5-Wr.length;var M,qu=[Br,Wi,Fi,Zi,Xi,Yi,ea,ta,ra,ia,aa,na,sa,oa,ua,la,xa,Sa,ka,Ea,za,Aa,Oa,Ra,Ba];(async function(){function n(c,f){return M=c.exports,M=function(){var x=M,I={};for(let[A,O]of Object.entries(x))I[A]=typeof O=="function"?(...D)=>{dr.push(A);try{return O(...D)}finally{H||(dr.pop(),Qe&&pt===1&&dr.length===0&&(pt=0,ot+=1,lr(Wn),typeof Fibers<"u"&&Fibers.le()))}}:O;return I}(),M=function(){var x=M,I=O=>D=>O(D)>>>0,A=O=>()=>O()>>>0;return(x=Object.assign({},x)).Cb=I(x.Cb),x.fc=A(x.fc),x.ic=I(x.ic),x.vc=I(x.vc),x.wc=A(x.wc),x.Ac=I(x.Ac),x}(),qi.push(M.jc),E=f,Mi(),M}yt++;var u=Di();if(i.instantiateWasm)return new Promise(c=>{i.instantiateWasm(u,(f,x)=>{n(f,x),c(f.exports)})});if(p)return new Promise(c=>{gt=f=>{var x=new WebAssembly.Instance(f,Di());c(n(x,f))}});Nt??(Nt=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",S):S+"ort-wasm-simd-threaded.jsep.wasm":new URL("/beandex/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href);try{var h=await async function(c){var f=Nt;if(!ce&&typeof WebAssembly.instantiateStreaming=="function"&&!fe(f))try{var x=fetch(f,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(x,c)}catch(I){k(`wasm streaming compile failed: ${I}`),k("falling back to ArrayBuffer instantiation")}return async function(I,A){try{var O=await async function(D){if(!ce)try{var V=await y(D);return new Uint8Array(V)}catch{}if(D==Nt&&ce)D=new Uint8Array(ce);else{if(!_)throw"both async and sync fetching of the wasm failed";D=_(D)}return D}(I);return await WebAssembly.instantiate(O,A)}catch(D){k(`failed to asynchronously prepare wasm: ${D}`),Xe(D)}}(f,c)}(u);return n(h.instance,h.module)}catch(c){return s(c),Promise.reject(c)}})();var Ma=n=>(Ma=M.Cb)(n),Da=()=>(Da=M.Db)();i._OrtInit=(n,u)=>(i._OrtInit=M.Eb)(n,u),i._OrtGetLastError=(n,u)=>(i._OrtGetLastError=M.Fb)(n,u),i._OrtCreateSessionOptions=(n,u,h,c,f,x,I,A,O,D)=>(i._OrtCreateSessionOptions=M.Gb)(n,u,h,c,f,x,I,A,O,D),i._OrtAppendExecutionProvider=(n,u)=>(i._OrtAppendExecutionProvider=M.Hb)(n,u),i._OrtAddFreeDimensionOverride=(n,u,h)=>(i._OrtAddFreeDimensionOverride=M.Ib)(n,u,h),i._OrtAddSessionConfigEntry=(n,u,h)=>(i._OrtAddSessionConfigEntry=M.Jb)(n,u,h),i._OrtReleaseSessionOptions=n=>(i._OrtReleaseSessionOptions=M.Kb)(n),i._OrtCreateSession=(n,u,h)=>(i._OrtCreateSession=M.Lb)(n,u,h),i._OrtReleaseSession=n=>(i._OrtReleaseSession=M.Mb)(n),i._OrtGetInputOutputCount=(n,u,h)=>(i._OrtGetInputOutputCount=M.Nb)(n,u,h),i._OrtGetInputName=(n,u)=>(i._OrtGetInputName=M.Ob)(n,u),i._OrtGetOutputName=(n,u)=>(i._OrtGetOutputName=M.Pb)(n,u),i._OrtFree=n=>(i._OrtFree=M.Qb)(n),i._OrtCreateTensor=(n,u,h,c,f,x)=>(i._OrtCreateTensor=M.Rb)(n,u,h,c,f,x),i._OrtGetTensorData=(n,u,h,c,f)=>(i._OrtGetTensorData=M.Sb)(n,u,h,c,f),i._OrtReleaseTensor=n=>(i._OrtReleaseTensor=M.Tb)(n),i._OrtCreateRunOptions=(n,u,h,c)=>(i._OrtCreateRunOptions=M.Ub)(n,u,h,c),i._OrtAddRunConfigEntry=(n,u,h)=>(i._OrtAddRunConfigEntry=M.Vb)(n,u,h),i._OrtReleaseRunOptions=n=>(i._OrtReleaseRunOptions=M.Wb)(n),i._OrtCreateBinding=n=>(i._OrtCreateBinding=M.Xb)(n),i._OrtBindInput=(n,u,h)=>(i._OrtBindInput=M.Yb)(n,u,h),i._OrtBindOutput=(n,u,h,c)=>(i._OrtBindOutput=M.Zb)(n,u,h,c),i._OrtClearBoundOutputs=n=>(i._OrtClearBoundOutputs=M._b)(n),i._OrtReleaseBinding=n=>(i._OrtReleaseBinding=M.$b)(n),i._OrtRunWithBinding=(n,u,h,c,f)=>(i._OrtRunWithBinding=M.ac)(n,u,h,c,f),i._OrtRun=(n,u,h,c,f,x,I,A)=>(i._OrtRun=M.bc)(n,u,h,c,f,x,I,A),i._OrtEndProfiling=n=>(i._OrtEndProfiling=M.cc)(n),i._JsepOutput=(n,u,h)=>(i._JsepOutput=M.dc)(n,u,h),i._JsepGetNodeName=n=>(i._JsepGetNodeName=M.ec)(n);var mr=()=>(mr=M.fc)(),Ze=i._free=n=>(Ze=i._free=M.gc)(n),gr=i._malloc=n=>(gr=i._malloc=M.ic)(n),Zr=(n,u,h,c,f,x)=>(Zr=M.kc)(n,u,h,c,f,x),Pa=()=>(Pa=M.lc)(),Ua=(n,u,h,c,f)=>(Ua=M.mc)(n,u,h,c,f),Wa=n=>(Wa=M.nc)(n),Xr=n=>(Xr=M.oc)(n),qa=(n,u)=>(qa=M.pc)(n,u),Va=()=>(Va=M.qc)(),ae=(n,u)=>(ae=M.rc)(n,u),Wt=n=>(Wt=M.sc)(n),La=(n,u)=>(La=M.tc)(n,u),Y=n=>(Y=M.uc)(n),Jr=n=>(Jr=M.vc)(n),re=()=>(re=M.wc)(),Ga=n=>(Ga=M.xc)(n),Ha=n=>(Ha=M.yc)(n),Fa=(n,u,h)=>(Fa=M.zc)(n,u,h),ja=n=>(ja=M.Ac)(n),Ka=i.dynCall_iii=(n,u,h)=>(Ka=i.dynCall_iii=M.Bc)(n,u,h),Qa=i.dynCall_vi=(n,u)=>(Qa=i.dynCall_vi=M.Cc)(n,u),Yr=i.dynCall_ii=(n,u)=>(Yr=i.dynCall_ii=M.Dc)(n,u),Za=i.dynCall_vii=(n,u,h)=>(Za=i.dynCall_vii=M.Ec)(n,u,h),Xa=i.dynCall_iiii=(n,u,h,c)=>(Xa=i.dynCall_iiii=M.Fc)(n,u,h,c),Ja=i.dynCall_viii=(n,u,h,c)=>(Ja=i.dynCall_viii=M.Gc)(n,u,h,c),Ya=i.dynCall_iiiii=(n,u,h,c,f)=>(Ya=i.dynCall_iiiii=M.Hc)(n,u,h,c,f),en=i.dynCall_viiii=(n,u,h,c,f)=>(en=i.dynCall_viiii=M.Ic)(n,u,h,c,f),tn=i.dynCall_viiiiii=(n,u,h,c,f,x,I)=>(tn=i.dynCall_viiiiii=M.Jc)(n,u,h,c,f,x,I),rn=i.dynCall_viiiiiii=(n,u,h,c,f,x,I,A)=>(rn=i.dynCall_viiiiiii=M.Kc)(n,u,h,c,f,x,I,A),an=i.dynCall_ji=(n,u)=>(an=i.dynCall_ji=M.Lc)(n,u),nn=i.dynCall_v=n=>(nn=i.dynCall_v=M.Mc)(n),sn=i.dynCall_viiiii=(n,u,h,c,f,x)=>(sn=i.dynCall_viiiii=M.Nc)(n,u,h,c,f,x),on=i.dynCall_i=n=>(on=i.dynCall_i=M.Oc)(n),un=i.dynCall_fii=(n,u,h)=>(un=i.dynCall_fii=M.Pc)(n,u,h),ln=i.dynCall_viiiiiiii=(n,u,h,c,f,x,I,A,O)=>(ln=i.dynCall_viiiiiiii=M.Qc)(n,u,h,c,f,x,I,A,O),dn=i.dynCall_viiiiiiiiii=(n,u,h,c,f,x,I,A,O,D,V)=>(dn=i.dynCall_viiiiiiiiii=M.Rc)(n,u,h,c,f,x,I,A,O,D,V),pn=i.dynCall_jiii=(n,u,h,c)=>(pn=i.dynCall_jiii=M.Sc)(n,u,h,c),hn=i.dynCall_dii=(n,u,h)=>(hn=i.dynCall_dii=M.Tc)(n,u,h),cn=i.dynCall_viiiiiiiii=(n,u,h,c,f,x,I,A,O,D)=>(cn=i.dynCall_viiiiiiiii=M.Uc)(n,u,h,c,f,x,I,A,O,D),fn=i.dynCall_viiiiiiiiiii=(n,u,h,c,f,x,I,A,O,D,V,Q)=>(fn=i.dynCall_viiiiiiiiiii=M.Vc)(n,u,h,c,f,x,I,A,O,D,V,Q),mn=i.dynCall_iiiiii=(n,u,h,c,f,x)=>(mn=i.dynCall_iiiiii=M.Wc)(n,u,h,c,f,x),gn=i.dynCall_iij=(n,u,h)=>(gn=i.dynCall_iij=M.Xc)(n,u,h),yn=i.dynCall_iiiiiiiiii=(n,u,h,c,f,x,I,A,O,D)=>(yn=i.dynCall_iiiiiiiiii=M.Yc)(n,u,h,c,f,x,I,A,O,D),_n=i.dynCall_iiiiiiiiiii=(n,u,h,c,f,x,I,A,O,D,V)=>(_n=i.dynCall_iiiiiiiiiii=M.Zc)(n,u,h,c,f,x,I,A,O,D,V),$n=i.dynCall_vij=(n,u,h)=>($n=i.dynCall_vij=M._c)(n,u,h),wn=i.dynCall_iiif=(n,u,h,c)=>(wn=i.dynCall_iiif=M.$c)(n,u,h,c),bn=i.dynCall_iiij=(n,u,h,c)=>(bn=i.dynCall_iiij=M.ad)(n,u,h,c),vn=i.dynCall_fiii=(n,u,h,c)=>(vn=i.dynCall_fiii=M.bd)(n,u,h,c),xn=i.dynCall_viiiiiiiiiiiii=(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)=>(xn=i.dynCall_viiiiiiiiiiiii=M.cd)(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e),Sn=i.dynCall_vjiii=(n,u,h,c,f)=>(Sn=i.dynCall_vjiii=M.dd)(n,u,h,c,f),kn=i.dynCall_vif=(n,u,h)=>(kn=i.dynCall_vif=M.ed)(n,u,h),Tn=i.dynCall_iiiiiii=(n,u,h,c,f,x,I)=>(Tn=i.dynCall_iiiiiii=M.fd)(n,u,h,c,f,x,I),Cn=i.dynCall_iiiij=(n,u,h,c,f)=>(Cn=i.dynCall_iiiij=M.gd)(n,u,h,c,f),In=i.dynCall_iiiiiiii=(n,u,h,c,f,x,I,A)=>(In=i.dynCall_iiiiiiii=M.hd)(n,u,h,c,f,x,I,A),En=i.dynCall_viiiiiiiiiiii=(n,u,h,c,f,x,I,A,O,D,V,Q,ne)=>(En=i.dynCall_viiiiiiiiiiii=M.id)(n,u,h,c,f,x,I,A,O,D,V,Q,ne),zn=i.dynCall_diii=(n,u,h,c)=>(zn=i.dynCall_diii=M.jd)(n,u,h,c),An=i.dynCall_jiiii=(n,u,h,c,f)=>(An=i.dynCall_jiiii=M.kd)(n,u,h,c,f),On=i.dynCall_viiij=(n,u,h,c,f)=>(On=i.dynCall_viiij=M.ld)(n,u,h,c,f),Rn=i.dynCall_fiiii=(n,u,h,c,f)=>(Rn=i.dynCall_fiiii=M.md)(n,u,h,c,f),Bn=i.dynCall_viiif=(n,u,h,c,f)=>(Bn=i.dynCall_viiif=M.nd)(n,u,h,c,f),Nn=i.dynCall_diiii=(n,u,h,c,f)=>(Nn=i.dynCall_diiii=M.od)(n,u,h,c,f),Mn=i.dynCall_viiid=(n,u,h,c,f)=>(Mn=i.dynCall_viiid=M.pd)(n,u,h,c,f),Dn=i.dynCall_iiiijii=(n,u,h,c,f,x,I)=>(Dn=i.dynCall_iiiijii=M.qd)(n,u,h,c,f,x,I),Pn=i.dynCall_iiiiiij=(n,u,h,c,f,x,I)=>(Pn=i.dynCall_iiiiiij=M.rd)(n,u,h,c,f,x,I),Un=n=>(Un=M.sd)(n),Wn=()=>(Wn=M.td)(),qn=n=>(qn=M.ud)(n),Vn=()=>(Vn=M.vd)();function Vu(n,u,h){var c=re();try{Za(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function Lu(n,u,h){var c=re();try{return Ka(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function Gu(n,u){var h=re();try{Qa(n,u)}catch(c){if(Y(h),c!==c+0)throw c;ae(1,0)}}function Hu(n,u){var h=re();try{return Yr(n,u)}catch(c){if(Y(h),c!==c+0)throw c;ae(1,0)}}function Fu(n,u,h,c){var f=re();try{return Xa(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function ju(n,u,h,c,f){var x=re();try{en(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function Ku(n,u,h,c,f){var x=re();try{return Ya(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function Qu(n,u,h,c){var f=re();try{Ja(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function Zu(n,u,h,c,f,x,I){var A=re();try{return Tn(n,u,h,c,f,x,I)}catch(O){if(Y(A),O!==O+0)throw O;ae(1,0)}}function Xu(n){var u=re();try{nn(n)}catch(h){if(Y(u),h!==h+0)throw h;ae(1,0)}}function Ju(n,u,h){var c=re();try{return gn(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function Yu(n,u,h,c,f,x){var I=re();try{sn(n,u,h,c,f,x)}catch(A){if(Y(I),A!==A+0)throw A;ae(1,0)}}function el(n,u,h){var c=re();try{$n(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function tl(n,u,h,c,f,x,I){var A=re();try{tn(n,u,h,c,f,x,I)}catch(O){if(Y(A),O!==O+0)throw O;ae(1,0)}}function rl(n,u,h,c,f,x,I,A){var O=re();try{rn(n,u,h,c,f,x,I,A)}catch(D){if(Y(O),D!==D+0)throw D;ae(1,0)}}function il(n,u,h,c,f,x){var I=re();try{return mn(n,u,h,c,f,x)}catch(A){if(Y(I),A!==A+0)throw A;ae(1,0)}}function al(n,u,h,c,f,x,I,A){var O=re();try{return In(n,u,h,c,f,x,I,A)}catch(D){if(Y(O),D!==D+0)throw D;ae(1,0)}}function nl(n,u,h,c,f,x,I,A,O,D){var V=re();try{cn(n,u,h,c,f,x,I,A,O,D)}catch(Q){if(Y(V),Q!==Q+0)throw Q;ae(1,0)}}function sl(n,u,h,c,f,x,I,A,O){var D=re();try{ln(n,u,h,c,f,x,I,A,O)}catch(V){if(Y(D),V!==V+0)throw V;ae(1,0)}}function ol(n){var u=re();try{return on(n)}catch(h){if(Y(u),h!==h+0)throw h;ae(1,0)}}function ul(n,u,h,c,f,x,I,A,O,D){var V=re();try{return yn(n,u,h,c,f,x,I,A,O,D)}catch(Q){if(Y(V),Q!==Q+0)throw Q;ae(1,0)}}function ll(n,u,h){var c=re();try{return un(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function dl(n,u,h,c){var f=re();try{return pn(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;return ae(1,0),0n}}function pl(n,u,h){var c=re();try{return hn(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function hl(n,u,h,c,f,x,I,A,O,D,V,Q){var ne=re();try{fn(n,u,h,c,f,x,I,A,O,D,V,Q)}catch(_e){if(Y(ne),_e!==_e+0)throw _e;ae(1,0)}}function cl(n,u,h,c,f,x,I,A,O,D,V){var Q=re();try{dn(n,u,h,c,f,x,I,A,O,D,V)}catch(ne){if(Y(Q),ne!==ne+0)throw ne;ae(1,0)}}function fl(n,u,h,c,f,x,I,A,O,D,V){var Q=re();try{return _n(n,u,h,c,f,x,I,A,O,D,V)}catch(ne){if(Y(Q),ne!==ne+0)throw ne;ae(1,0)}}function ml(n,u,h,c){var f=re();try{return wn(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function gl(n,u,h,c){var f=re();try{return bn(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function yl(n,u,h,c){var f=re();try{return vn(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function _l(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e){var Le=re();try{xn(n,u,h,c,f,x,I,A,O,D,V,Q,ne,_e)}catch(qt){if(Y(Le),qt!==qt+0)throw qt;ae(1,0)}}function $l(n,u,h,c,f){var x=re();try{Sn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function wl(n,u,h){var c=re();try{kn(n,u,h)}catch(f){if(Y(c),f!==f+0)throw f;ae(1,0)}}function bl(n,u){var h=re();try{return an(n,u)}catch(c){if(Y(h),c!==c+0)throw c;return ae(1,0),0n}}function vl(n,u,h,c,f){var x=re();try{return Cn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function xl(n,u,h,c,f,x,I,A,O,D,V,Q,ne){var _e=re();try{En(n,u,h,c,f,x,I,A,O,D,V,Q,ne)}catch(Le){if(Y(_e),Le!==Le+0)throw Le;ae(1,0)}}function Sl(n,u,h,c){var f=re();try{return zn(n,u,h,c)}catch(x){if(Y(f),x!==x+0)throw x;ae(1,0)}}function kl(n,u,h,c,f){var x=re();try{return An(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;return ae(1,0),0n}}function Tl(n,u,h,c,f){var x=re();try{On(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function Cl(n,u,h,c,f){var x=re();try{return Rn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function Il(n,u,h,c,f){var x=re();try{Bn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function El(n,u,h,c,f){var x=re();try{return Nn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function zl(n,u,h,c,f){var x=re();try{Mn(n,u,h,c,f)}catch(I){if(Y(x),I!==I+0)throw I;ae(1,0)}}function Al(n,u,h,c,f,x,I){var A=re();try{return Dn(n,u,h,c,f,x,I)}catch(O){if(Y(A),O!==O+0)throw O;ae(1,0)}}function Ol(n,u,h,c,f,x,I){var A=re();try{return Pn(n,u,h,c,f,x,I)}catch(O){if(Y(A),O!==O+0)throw O;ae(1,0)}}return i.stackSave=()=>re(),i.stackRestore=n=>Y(n),i.stackAlloc=n=>Jr(n),i.setValue=function(n,u,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":B()[n>>>0]=u;break;case"i16":se()[n>>>1>>>0]=u;break;case"i32":N()[n>>>2>>>0]=u;break;case"i64":Z[n>>>3]=BigInt(u);break;case"float":qe()[n>>>2>>>0]=u;break;case"double":De()[n>>>3>>>0]=u;break;case"*":ue()[n>>>2>>>0]=u;break;default:Xe(`invalid type for setValue: ${h}`)}},i.getValue=function(n,u="i8"){switch(u.endsWith("*")&&(u="*"),u){case"i1":case"i8":return B()[n>>>0];case"i16":return se()[n>>>1>>>0];case"i32":return N()[n>>>2>>>0];case"i64":return Z[n>>>3];case"float":return qe()[n>>>2>>>0];case"double":return De()[n>>>3>>>0];case"*":return ue()[n>>>2>>>0];default:Xe(`invalid type for getValue: ${u}`)}},i.UTF8ToString=Ce,i.stringToUTF8=St,i.lengthBytesUTF8=Ji,function n(){if(0<yt)Mt=n;else if(p)a(i),st();else{for(;0<Rr.length;)Rr.shift()(i);0<yt?Mt=n:(i.calledRun=!0,H||(st(),a(i)))}}(),i.PTR_SIZE=4,o}),_v=Nd,Pg=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Pg&&Nd()}),Md,Ug,Tt,$v,Us,Wg,qg,Dd,Vg,Pd,wv,Ud,bv,Oh=te(()=>{Ah(),Md=typeof location>"u"?void 0:location.origin,Ug=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL("/beandex/assets/ort.bundle.min-OfoG_cy9.mjs",import.meta.url).href,Md).href:import.meta.url},Tt=Ug(),$v=()=>{if(Tt&&!Tt.startsWith("blob:"))return Tt.substring(0,Tt.lastIndexOf("/")+1)},Us=(e,t)=>{try{let r=t??Tt;return(r?new URL(e,r):new URL(e)).origin===Md}catch{return!1}},Wg=(e,t)=>{let r=t??Tt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},qg=(e,t)=>`${t??"./"}${e}`,Dd=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Vg=async e=>(await import(e)).default,Pd=(_k(),lo(mv)).default,wv=async()=>{if(!Tt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Us(Tt))return[void 0,Pd()];let e=await Dd(Tt);return[e,Pd(e)]},Ud=($k(),lo(yv)).default,bv=async(e,t,r)=>{if(!e&&!t&&Ud&&Tt&&Us(Tt))return[void 0,Ud];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Wg(a,t),i=r&&s&&!Us(s,t),o=i?await Dd(s):s??qg(a,t);return[i?o:void 0,await Vg(o)]}}}),Wd,Ws,es,qd,Lg,Gg,Rh,tt,Si=te(()=>{Oh(),Ws=!1,es=!1,qd=!1,Lg=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Gg=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Rh=async e=>{if(Ws)return Promise.resolve();if(es)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(qd)throw new Error("previous call to 'initializeWebAssembly()' failed.");es=!0;let t=e.initTimeout,r=e.numThreads;if(!Gg())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=Lg();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let s=e.wasmPaths,i=typeof s=="string"?s:void 0,o=s==null?void 0:s.mjs,l=(o==null?void 0:o.href)??o,d=s==null?void 0:s.wasm,p=(d==null?void 0:d.href)??d,m=e.wasmBinary,[g,y]=await bv(l,i,r>1),_=!1,$=[];if(t>0&&$.push(new Promise(w=>{setTimeout(()=>{_=!0,w()},t)})),$.push(new Promise((w,S)=>{let v={numThreads:r};if(m)v.wasmBinary=m;else if(p||i)v.locateFile=b=>p??i+b;else if(l&&l.indexOf("blob:")!==0)v.locateFile=b=>new URL(b,l).href;else if(g){let b=$v();b&&(v.locateFile=T=>b+T)}y(v).then(b=>{es=!1,Ws=!0,Wd=b,w(),g&&URL.revokeObjectURL(g)},b=>{es=!1,qd=!0,S(b)})})),await Promise.race($),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},tt=()=>{if(Ws&&Wd)return Wd;throw new Error("WebAssembly is not initialized yet.")}}),ct,po,Be,Bh=te(()=>{Si(),ct=(e,t)=>{let r=tt(),a=r.lengthBytesUTF8(e)+1,s=r._malloc(a);return r.stringToUTF8(e,s,a),t.push(s),s},po=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([s,i])=>{let o=t?t+s:s;if(typeof i=="object")po(i,o+".",r,a);else if(typeof i=="string"||typeof i=="number")a(o,i.toString());else if(typeof i=="boolean")a(o,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},Be=e=>{let t=tt(),r=t.stackSave();try{let a=t.PTR_SIZE,s=t.stackAlloc(2*a);t._OrtGetLastError(s,s+a);let i=Number(t.getValue(s,a===4?"i32":"i64")),o=t.getValue(s+a,"*"),l=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),vv,wk=te(()=>{Si(),Bh(),vv=e=>{let t=tt(),r=0,a=[],s=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)s.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)s.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(s.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=ct(e.tag,a)),r=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,i),r===0&&Be("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&po(e.extra,"",new WeakSet,(o,l)=>{let d=ct(o,a),p=ct(l,a);t._OrtAddRunConfigEntry(r,d,p)!==0&&Be(`Can't set a run config entry: ${o} - ${l}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(o=>t._free(o)),i}}}),Hg,Fg,jg,Kg,xv,bk=te(()=>{Si(),Bh(),Hg=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Fg=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},jg=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Kg=(e,t,r)=>{for(let a of t){let s=typeof a=="string"?a:a.name;switch(s){case"webnn":if(s="WEBNN",typeof a!="string"){let o=a==null?void 0:a.deviceType;if(o){let l=ct("deviceType",r),d=ct(o,r);tt()._OrtAddSessionConfigEntry(e,l,d)!==0&&Be(`Can't set a session config entry: 'deviceType' - ${o}.`)}}break;case"webgpu":if(s="JS",typeof a!="string"){let o=a;if(o!=null&&o.preferredLayout){if(o.preferredLayout!=="NCHW"&&o.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${o.preferredLayout}`);let l=ct("preferredLayout",r),d=ct(o.preferredLayout,r);tt()._OrtAddSessionConfigEntry(e,l,d)!==0&&Be(`Can't set a session config entry: 'preferredLayout' - ${o.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let i=ct(s,r);tt()._OrtAppendExecutionProvider(e,i)!==0&&Be(`Can't append execution provider: ${s}.`)}},xv=e=>{let t=tt(),r=0,a=[],s=e||{};jg(s);try{let i=Hg(s.graphOptimizationLevel??"all"),o=Fg(s.executionMode??"sequential"),l=typeof s.logId=="string"?ct(s.logId,a):0,d=s.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=s.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let m=typeof s.optimizedModelFilePath=="string"?ct(s.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(i,!!s.enableCpuMemArena,!!s.enableMemPattern,o,!!s.enableProfiling,0,l,d,p,m),r===0&&Be("Can't create session options."),s.executionProviders&&Kg(r,s.executionProviders,a),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);let g=ct("enableGraphCapture",a),y=ct(s.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,g,y)!==0&&Be(`Can't set a session config entry: 'enableGraphCapture' - ${s.enableGraphCapture}.`)}if(s.freeDimensionOverrides)for(let[g,y]of Object.entries(s.freeDimensionOverrides)){if(typeof g!="string")throw new Error(`free dimension override name must be a string: ${g}`);if(typeof y!="number"||!Number.isInteger(y)||y<0)throw new Error(`free dimension override value must be a non-negative integer: ${y}`);let _=ct(g,a);t._OrtAddFreeDimensionOverride(r,_,y)!==0&&Be(`Can't set a free dimension override: ${g} - ${y}.`)}return s.extra!==void 0&&po(s.extra,"",new WeakSet,(g,y)=>{let _=ct(g,a),$=ct(y,a);t._OrtAddSessionConfigEntry(r,_,$)!==0&&Be(`Can't set a session config entry: ${g} - ${y}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Be("Can't release session options."),a.forEach(o=>t._free(o)),i}}}),Ei,hi,ci,Nh,ho,Mh,Dh,Pp,be=te(()=>{Ei=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},hi=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},ci=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((s,i)=>s*i,1);return r>0?Math.ceil(a*r):void 0},Nh=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ho=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Mh=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Dh=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Pp=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ph,Sv=te(()=>{Ah(),Ph=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let s=t.body.getReader(),i;try{i=new ArrayBuffer(a)}catch(l){if(l instanceof RangeError){let d=Math.ceil(a/65536);i=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let o=0;for(;;){let{done:l,value:d}=await s.read();if(l)break;let p=d.byteLength;new Uint8Array(i,o,p).set(d),o+=p}return new Uint8Array(i,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Qg,Zg,Xg,Jg,Uh,Yg,ze,wr=te(()=>{be(),Qg=["V","I","W","E","F"],Zg=(e,t)=>{console.log(`[${Qg[e]},${new Date().toISOString()}]${t}`)},Uh=(e,t)=>{Xg=e,Jg=t},Yg=(e,t)=>{let r=ho(e),a=ho(Xg);r>=a&&Zg(r,typeof t=="function"?t():t)},ze=(...e)=>{Jg&&Yg(...e)}}),Wh,kv=te(()=>{be(),Wh=(e,t)=>new(Nh(t))(e)}),qh=te(()=>{}),Vd,qs,Vs,ey,ty,Ld,Up,ry,Tv,vk=te(()=>{wr(),qh(),Vd=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),qs=[],Vs=e=>Math.ceil(Number(e)/16)*16,ey=e=>{for(let t=0;t<qs.length;t++){let r=qs[t];if(e<=r)return r}return Math.ceil(e/16)*16},ty=1,Ld=()=>ty++,Up=async(e,t,r,a)=>{let s=Vs(r),i=e.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,i,0,s),e.flush(),await i.mapAsync(GPUMapMode.READ);let l=i.getMappedRange();if(a){let d=a();return d.set(new Uint8Array(l,0,r)),d}else return new Uint8Array(l.slice(0,r))}finally{i.destroy()}},ry=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Vd)qs.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,s=t.byteLength,i=Vs(s),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==s)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${s}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,a,s)),l.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(l,0,o.gpuData.buffer,0,i),this.backend.device.queue.submit([p.finish()]),l.destroy(),ze("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let s=Vs(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,s)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return ze("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Ld();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),ze("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ze("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=ey(e),a,s=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(s||i){let l=(s?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?a=l.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let o={id:Ld(),type:0,buffer:a};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),ze("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ze("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Up(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Vd.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ze("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Tv=(...e)=>new ry(...e)}),iy,Me,je=te(()=>{iy=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Me=e=>new iy(e)}),ay,Bi,G,co,Cv,Iv,Ev,Se=te(()=>{ay=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Bi=class{static calcShape(e,t,r=!1){let a=e.length,s=t.length;if(a===0)return t;if(s===0)return e;let i=Math.max(e.length,t.length),o=new Array(i);if(r){if(a<2||s<2)return;let l=ay.calcMatMulShape([e[a-2],e[a-1]],[t[s-2],t[s-1]]);if(l===void 0)return;[o[i-2],o[i-1]]=l}for(let l=r?3:1;l<=i;l++){let d=a-l<0?1:e[a-l],p=s-l<0?1:t[s-l];if(d!==p&&d>1&&p>1)return;let m=Math.max(d,p);if(d&&p)o[i-l]=Math.max(d,p);else{if(m>1)return;o[i-l]=0}}return o}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let s=1;s<=r;s++)if(e[r-s]!==1&&e[r-s]!==t[a-s])return!1;return!0}},G=class eo{static size(t){return eo.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let s=new Array(a),i=a-1;for(;i>=0;){if(t[i]%r===0){s[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");s[i]=1,r/=t[i],i--}for(i--;i>=0;i--)s[i]=t[i];return s}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return eo.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return eo.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let s=1;for(let i=r;i<a;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");s*=Number(t[i])}return s}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let s=r-3;s>=0;--s)a[s]=a[s+1]*t[s+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((s,i)=>s+r[i]+r[i+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,s)=>a===r[s])}},co=class cs{static adjustPoolAttributes(t,r,a,s,i,o){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=a.length?a.push(r[l+2]):a[l]=r[l+2];for(let l=0;l<a.length;l++)if(l<s.length){if(s[l]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let l=0;l<a.length;l++)if(l<i.length){if(i[l]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let l=0;l<a.length*2;l++)if(l<o.length){if(o[l]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let l=0;l<a.length;l++){if(a[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[l]>=a[l]||o[l+a.length]>=a[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,s,i,o,l){if(l){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)cs.adjustPadAndReturnShape(t[d+(o?1:2)],r[d],a[d],s[d],i,d,d+t.length-2,l)}}static computePoolOutputShape(t,r,a,s,i,o,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return cs.computeShapeHelper(t,r,d,a,s,i,o,l),d}static computeConvOutputShape(t,r,a,s,i,o,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return cs.computeShapeHelper(!1,t,d,a,s,i,o,l),d}static computeShapeHelper(t,r,a,s,i,o,l,d){if(t)for(let p=0;p<r.length-2;p++)a.push(1);else for(let p=0;p<r.length-2;p++)a.push(cs.adjustPadAndReturnShape(r[p+2],s[p],i[p],o[p],l,p,p+r.length-2,d))}static adjustPadAndReturnShape(t,r,a,s,i,o,l,d){let p=a*(s-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return i[o]=0,i[l]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let m=((t+r-1)/r-1)*r+s-t;return i[o]=Math.floor(d==="SAME_LOWER"?(m+1)/2:m/2),i[l]=m-i[o],Math.floor((t+m-s)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[o]+i[l]-p)/r+1)}},Cv=class{static getShapeOfGemmResult(e,t,r,a,s){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,o,l;t?(i=e[1],o=e[0]):(i=e[0],o=e[1]);let d=-1;if(a?(l=r[0],d=1):(l=r[1],d=0),r[d]!==o)throw new Error("dimension mismatch");if(i<=0||l<=0||o<=0)throw new Error("invalid shape specified");if(s&&!Bi.isValidBroadcast(s,[i,l]))throw new Error("gemm: invalid bias shape for broadcast");return[i,l,o]}},Iv=-34028234663852886e22,Ev=34028234663852886e22}),Ni,Ls,it,mt,ye,He,Wp,Ai,Ir,he,ts,j,de,zv,Vh,ny,Av,Te=te(()=>{be(),Se(),Ni=64,Ls=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},it=(e,t=1)=>{let r=Ls(e,t);return typeof r=="string"?r:r[0]},mt=(e,t=1)=>{let r=Ls(e,t);return typeof r=="string"?r:r[1]},ye=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:G.computeStrides(r)})}),t},He=e=>e%4===0?4:e%2===0?2:1,Wp=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ai=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Ir=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,he=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ts=(e,t,r,a,s)=>{let i=typeof r=="number",o=i?r:r.length,l=[...new Array(o).keys()],d=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,p=Ls(t,s),m=typeof p=="string"?p:p[1],g=typeof p=="string"?p:p[0],y={indices:d,value:m,storage:g,tensor:t},_=B=>typeof B=="string"?B:`${B}u`,$={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=i?"uniforms.":"",S=`${w}${e}_shape`,v=`${w}${e}_strides`,b="";for(let B=0;B<o-1;B++)b+=`
    let dim${B} = current / ${he(v,B,o)};
    let rest${B} = current % ${he(v,B,o)};
    indices[${B}] = dim${B};
    current = rest${B};
    `;b+=`indices[${o-1}] = current;`;let T=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${y.indices} {
    var indices: ${y.indices};
    var current = offset;
    ${b}
    return indices;
  }`,k=B=>($.offsetToIndices=!0,o<2?B:`o2i_${e}(${B})`),C=[];if(o>=2)for(let B=o-1;B>=0;B--)C.push(`${he(v,B,o)} * (indices[${B}])`);let E=o<2?"":`
  fn i2o_${e}(indices: ${y.indices}) -> u32 {
    return ${C.join("+")};
  }`,z=B=>($.indicesToOffset=!0,o<2?B:`i2o_${e}(${B})`),R=(...B)=>o===0?"0u":`${y.indices}(${B.map(_).join(",")})`,P=(B,U)=>o<2?`${B}`:`${he(B,U,o)}`,q=(B,U,se)=>o<2?`${B}=${se};`:`${he(B,U,o)}=${se};`,X={},ie=(B,U)=>{$.broadcastedIndicesToOffset=!0;let se=`${U.name}broadcastedIndicesTo${e}Offset`;if(se in X)return`${se}(${B})`;let $e=[];for(let N=o-1;N>=0;N--){let ue=U.indicesGet("outputIndices",N+U.rank-o);$e.push(`${P(v,N)} * (${ue} % ${P(S,N)})`)}return X[se]=`fn ${se}(outputIndices: ${U.type.indices}) -> u32 {
             return ${$e.length>0?$e.join("+"):"0u"};
           }`,`${se}(${B})`},K=(B,U)=>(()=>{if(y.storage===y.value)return`${e}[${B}]=${U};`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`${e}[${B}]=vec2<u32>(u32(${U}), select(0u, 0xFFFFFFFFu, ${U} < 0));`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`${e}[${B}]=vec2<u32>(u32(${U}), 0u);`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`${e}[${B}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${U}));`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),J=B=>(()=>{if(y.storage===y.value)return`${e}[${B}]`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`i32(${e}[${B}].x)`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`u32(${e}[${B}].x)`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${B}] & 0xFFu), bool(${e}[${B}] & 0xFF00u), bool(${e}[${B}] & 0xFF0000u), bool(${e}[${B}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),Z=o<2?"":`
  fn get_${e}ByIndices(indices: ${y.indices}) -> ${m} {
    return ${J(`i2o_${e}(indices)`)};
  }`,W=o<2?"":(()=>{let B=l.map(se=>`d${se}: u32`).join(", "),U=l.map(se=>`d${se}`).join(", ");return`
  fn get_${e}(${B}) -> ${m} {
    return get_${e}ByIndices(${R(U)});
  }`})(),oe=(...B)=>{if(B.length!==o)throw new Error(`indices length must be ${o}`);let U=B.map(_).join(",");return o===0?J("0u"):o===1?J(U[0]):($.get=!0,$.getByIndices=!0,$.indicesToOffset=!0,`get_${e}(${U})`)},ce=B=>o<2?J(B):($.getByIndices=!0,$.indicesToOffset=!0,`get_${e}ByIndices(${B})`),H=o<2?"":`
  fn set_${e}ByIndices(indices: ${y.indices}, value: ${m}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,fe=o<2?"":(()=>{let B=l.map(se=>`d${se}: u32`).join(", "),U=l.map(se=>`d${se}`).join(", ");return`
  fn set_${e}(${B}, value: ${m}) {
    set_${e}ByIndices(${R(U)}, value);
  }`})();return{impl:()=>{let B=[],U=!1;return $.offsetToIndices&&(B.push(T),U=!0),$.indicesToOffset&&(B.push(E),U=!0),$.broadcastedIndicesToOffset&&(Object.values(X).forEach(se=>B.push(se)),U=!0),$.set&&(B.push(fe),U=!0),$.setByIndices&&(B.push(H),U=!0),$.get&&(B.push(W),U=!0),$.getByIndices&&(B.push(Z),U=!0),!i&&U&&B.unshift(`const ${S} = ${y.indices}(${r.join(",")});`,`const ${v} = ${y.indices}(${G.computeStrides(r).join(",")});`),B.join(`
`)},type:y,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:ie,indices:R,indicesGet:P,indicesSet:q,set:(...B)=>{if(B.length!==o+1)throw new Error(`indices length must be ${o}`);let U=B[o];if(typeof U!="string")throw new Error("value must be string");let se=B.slice(0,o).map(_).join(",");return o===0?K("0u",U):o===1?K(se[0],U):($.set=!0,$.setByIndices=!0,$.indicesToOffset=!0,`set_${e}(${se}, ${U})`)},setByOffset:K,setByIndices:(B,U)=>o<2?K(B,U):($.setByIndices=!0,$.indicesToOffset=!0,`set_${e}ByIndices(${B}, ${U});`),get:oe,getByOffset:J,getByIndices:ce,usage:a,name:e,strides:v,shape:S,rank:o}},j=(e,t,r,a=1)=>ts(e,t,r,"input",a),de=(e,t,r,a=1)=>ts(e,t,r,"output",a),zv=(e,t,r)=>ts(e,t,r,"atomicOutput",1),Vh=(e,t,r,a=1)=>ts(e,t,r,"internal",a),ny=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ni){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let s=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=s?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=s?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${i}) {
    ${o}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let s=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${s}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Av=(e,t)=>new ny(e,t)}),sy,Gd,oy,uy,ly,dy,zt,Ov,Rv,zr=te(()=>{be(),Se(),je(),Te(),sy=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Gd=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),oy=(e,t)=>G.sortBasedOnPerm(e,Gd(e.length,t)),uy=(e,t,r,a)=>{let s=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)s+=`a[${e[i]}]=i[${i}];`;return s+="return a;}"},ly=(e,t)=>{let r=[],a=[];for(let s=0;s<e.length;++s)e[s]!==1&&r.push(e[s]),e[t[s]]!==1&&a.push(t[s]);return{newShape:r,newPerm:a}},dy=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},zt=(e,t)=>{let r=e.dataType,a=e.dims.length,s=Gd(a,t),i=oy(e.dims,s),o=e.dims,l=i,d=a<2||dy(s,e.dims),p;if(d)return p=$=>{let w=j("input",r,o,4),S=de("output",r,l,4);return`
  ${$.registerUniform("output_size","u32").declareVariables(w,S)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=G.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil($/64/4)},programUniforms:[{type:12,data:Math.ceil($/4)}]}},getShaderSource:p};let{newShape:m,newPerm:g}=ly(e.dims,s),y=G.areEqual(g,[2,3,1]),_=G.areEqual(g,[3,1,2]);if(m.length===2||y||_){o=y?[m[0],m[1]*m[2]]:_?[m[0]*m[1],m[2]]:m,l=[o[1],o[0]];let $=16;return p=w=>{let S=j("a",r,o.length),v=de("output",r,l.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${$+1}>, ${$}>;
  ${w.mainStart([$,$,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${$} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${$}u + local_id.x;
    let input_row = workgroup_id_x * ${$}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${$}u + local_id.x;
    let output_row = workgroup_id_y * ${$}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=G.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/$),y:Math.ceil(l[0]/$)},programUniforms:[{type:12,data:w},...ye(o,l)]}},getShaderSource:p}}return p=$=>{let w=j("a",r,o.length),S=de("output",r,l.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(w,S)}

  ${uy(s,a,w,S)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let $=G.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...ye(o,l)]}},getShaderSource:p}},Ov=(e,t)=>{sy(e.inputs,t.perm),e.compute(zt(e.inputs[0],t.perm))},Rv=e=>Me({perm:e.perm})}),py,hy,cy,fy,my,gy,yy,_y,$y,wy,jt,Bv,Nv,Mv,Dv,Pv,Uv,Wv,qv,Vv,Lv,xk=te(()=>{be(),Se(),Te(),Lh(),zr(),py={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},hy={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},cy={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},fy={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},my=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},gy=(e,t)=>{let r=[],a=e.length;for(let i=0;i<a;i++)t.indexOf(i)===-1&&r.push(e[i]);let s=t.map(i=>e[i]);return[r,s]},yy=(e,t)=>{let r=e.length+t.length,a=[],s=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?a.push(e[s++]):a.push(1);return a},_y=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},$y=(e,t)=>{let r=[];if(!_y(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},wy=(e,t,r,a,s,i,o)=>{let l=r[0].dims,d=G.size(i),p=G.size(o),m=j("_A",r[0].dataType,l),g=de("output",s,i),y=64;d===1&&(y=256);let _=`
          var<workgroup> aBestValues : array<f32, ${y}>;
       `,$=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(m,g)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(y)}

          let outputIndex = global_idx / ${y};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${cy[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${y}) {
           let candidate = f32(${m.getByOffset("offset + k")});
           bestValue = ${py[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${y}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${hy[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${g.setByOffset("outputIndex",`${a==="mean"?`${g.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${g.type.storage}(${fy[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${y}`,inputDependencies:["type"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},jt=(e,t,r,a)=>{let s=e.inputs.length===1?r:qp(e.inputs,r),i=s.axes;i.length===0&&!s.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((_,$)=>$));let o=G.normalizeAxes(i,e.inputs[0].dims.length),l=o,d=e.inputs[0],p=$y(l,e.inputs[0].dims.length);p.length>0&&(d=e.compute(zt(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],l=my(l.length,d.dims.length));let[m,g]=gy(d.dims,l),y=m;s.keepDims&&(y=yy(m,o)),e.compute(wy(t,s.cacheKey,[d],a,e.inputs[0].dataType,y,g),{inputs:[d]})},Bv=(e,t)=>{jt(e,"ReduceMeanShared",t,"mean")},Nv=(e,t)=>{jt(e,"ReduceL1Shared",t,"l1")},Mv=(e,t)=>{jt(e,"ReduceL2Shared",t,"l2")},Dv=(e,t)=>{jt(e,"ReduceLogSumExpShared",t,"logSumExp")},Pv=(e,t)=>{jt(e,"ReduceMaxShared",t,"max")},Uv=(e,t)=>{jt(e,"ReduceMinShared",t,"min")},Wv=(e,t)=>{jt(e,"ReduceProdShared",t,"prod")},qv=(e,t)=>{jt(e,"ReduceSumShared",t,"sum")},Vv=(e,t)=>{jt(e,"ReduceSumSquareShared",t,"sumSquare")},Lv=(e,t)=>{jt(e,"ReduceLogSumShared",t,"logSum")}}),Kt,by,fo,qp,Qt,vy,xy,Sy,ky,Ty,Cy,Iy,Ey,zy,Ay,Zt,Gv,Hv,Fv,jv,Kv,Qv,Zv,Xv,Jv,Yv,Lh=te(()=>{be(),Se(),je(),Te(),xk(),Kt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},by=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],fo=(e,t,r,a,s,i,o=!1,l=!1)=>{let d=[],p=r[0].dims,m=p.length,g=G.normalizeAxes(s,m),y=!l&&g.length===0;p.forEach((w,S)=>{y||g.indexOf(S)>=0?o&&d.push(1):d.push(w)});let _=d.length,$=G.size(d);return{name:e,shaderCache:t,getShaderSource:w=>{let S=[],v=j("_A",r[0].dataType,m),b=de("output",i,_),T=a(v,b,g),k=T[2];for(let C=0,E=0;C<m;C++)y||g.indexOf(C)>=0?(o&&E++,k=`for(var j${C}: u32 = 0; j${C} < ${p[C]}; j${C}++) {
                  ${T[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${v.indicesSet("input_indices",C,`j${C}`)}
                  ${k}
                }`):(S.push(`${v.indicesSet("input_indices",C,b.indicesGet("output_indices",E))};`),E++);return`

        ${w.registerUniform("output_size","u32").declareVariables(v,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${k}
          ${T[3]}
          ${T.length===4?b.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...ye(p,d)]})}},qp=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),Me({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Qt=(e,t,r,a)=>{let s=e.inputs,i=s.length===1?r:qp(s,r);e.compute(fo(t,{hint:i.cacheKey,inputDependencies:["rank"]},[s[0]],i.noopWithEmptyAxes&&i.axes.length===0?by:a,i.axes,s[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},vy=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},xy=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Sy=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ky=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Ty=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceMax",t,(r,a,s)=>{let i=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&i.push(r.indicesSet("input_indices",o,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Cy=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceMean",t,(r,a,s)=>{let i=1;for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&(i*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${i});`]})},Iy=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceMin",t,(r,a,s)=>{let i=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&i.push(`input_indices[${o}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Ey=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},zy=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Ay=(e,t)=>{Kt(e.inputs),Qt(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Zt=(e,t,r)=>{if(t.length===0)return r;let a=1,s=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?a*=e[i]:s*=e[i];return s<32&&a>1024},Gv=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cy(e,t):Bv(e,t)},Hv=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xy(e,t):Nv(e,t)},Fv=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sy(e,t):Mv(e,t)},jv=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ky(e,t):Dv(e,t)},Kv=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ty(e,t):Pv(e,t)},Qv=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Iy(e,t):Uv(e,t)},Zv=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ey(e,t):Wv(e,t)},Xv=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zy(e,t):qv(e,t)},Jv=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ay(e,t):Vv(e,t)},Yv=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vy(e,t):Lv(e,t)}}),Hd,e2,t2,Vp,Sk=te(()=>{be(),je(),Lh(),Hd=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},e2=(e,t)=>{Hd(e.inputs);let r=(a,s,i)=>{let o=[];for(let l=0;l<a.rank;l++)(i.indexOf(l)>=0||i.length===0)&&o.push(`input_indices[${l}] = 0;`);return[`${o.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(fo("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},t2=(e,t)=>{Hd(e.inputs);let r=(a,s,i)=>{let o=[];for(let l=0;l<a.rank;l++)(i.indexOf(l)>=0||i.length===0)&&o.push(`input_indices[${l}] = 0;`);return[`${o.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(fo("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Vp=e=>Me(e)}),Oy,Gs,Ry,By,Ny,bs,My,r2,Gh=te(()=>{be(),Se(),qh(),Te(),Oy=(e,t)=>{let r=e[0],a=e[1],s=e[2],i=e[3],o=e[4],l=e[5];if(o&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],m=r.dims[2];if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==m)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(s.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let g=s.dims[0]/3,y=g,_=y;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");g=t.qkvHiddenSizes[0],y=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let $=p;if(g!==y)throw new Error("qkv_hidden_sizes first element should be same as the second");if(s.dims[0]!==g+y+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(o){if(y!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==y/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=o.dims[3])}let S=$+w,v=-1,b=0;if(i)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==p||l.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:w,kvSequenceLength:$,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:m,hiddenSize:g,vHiddenSize:_,headSize:Math.floor(g/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Gs=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Ry=(e,t,r,a,s,i,o,l)=>{let d=He(o?1:i),p=64,m=i/d;m<p&&(p=32);let g=Math.ceil(i/d/p),y=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:s},{type:12,data:m},{type:12,data:g}],_=it(e.dataType,d),$=mt(1,d),w=["type"];o&&w.push("type"),l&&w.push("type");let S=v=>{let b=de("x",e.dataType,e.dims,d),T=[b],k=o?j("seq_lens",o.dataType,o.dims):void 0;k&&T.push(k);let C=l?j("total_sequence_length_input",l.dataType,l.dims):void 0;C&&T.push(C);let E=mt(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${v.registerUniforms(z).declareVariables(...T)}
  ${v.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Gs(k,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${$}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${$}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(d){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${$}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${$}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(d){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${$}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${_};${d}`,inputDependencies:w},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(i/p),y:s,z:t*r},programUniforms:y})}},By=(e,t,r,a,s,i,o,l,d)=>{let p=o+i.kvSequenceLength,m=[i.batchSize,i.numHeads,i.sequenceLength,p],g=e>1&&a,y=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=g?[i.batchSize,y,p,i.headSize]:void 0,$=i.nReps?i.nReps:1,w=i.scale===0?1/Math.sqrt(i.headSize):i.scale,S=He(i.headSize),v=i.headSize/S,b=12,T={x:Math.ceil(p/b),y:Math.ceil(i.sequenceLength/b),z:i.batchSize*i.numHeads},k=[{type:12,data:i.sequenceLength},{type:12,data:v},{type:12,data:p},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:w},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:$}],C=g&&a&&G.size(a.dims)>0,E=["type","type"];C&&E.push("type"),s&&E.push("type"),l&&E.push("type"),d&&E.push("type");let z=[{dims:m,dataType:t.dataType,gpuDataType:0}];g&&z.push({dims:_,dataType:t.dataType,gpuDataType:0});let R=P=>{let q=j("q",t.dataType,t.dims,S),X=j("key",r.dataType,r.dims,S),ie=[q,X];if(C){let H=j("past_key",a.dataType,a.dims,S);ie.push(H)}s&&ie.push(j("attention_bias",s.dataType,s.dims));let K=l?j("seq_lens",l.dataType,l.dims):void 0;K&&ie.push(K);let J=d?j("total_sequence_length_input",d.dataType,d.dims):void 0;J&&ie.push(J);let Z=de("output",t.dataType,m),W=[Z];g&&W.push(de("present_key",t.dataType,_,S));let oe=mt(1,S),ce=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${q.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${q.type.storage}, ${b*b}>;
  ${P.registerUniforms(ce).declareVariables(...ie,...W)}
  ${P.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${$===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${$===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Gs(K,J,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&g?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${g?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${oe}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&g?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${g?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${oe}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${Z.type.value} (sum * uniforms.alpha) + ${s?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${s!==void 0};${a!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:z,dispatchGroup:T,programUniforms:k}),getShaderSource:R}},Ny=(e,t,r,a,s,i,o=void 0,l=void 0)=>{let d=i+s.kvSequenceLength,p=s.nReps?s.nReps:1,m=s.vHiddenSize*p,g=e>1&&a,y=s.kvNumHeads?s.kvNumHeads:s.numHeads,_=g?[s.batchSize,y,d,s.headSize]:void 0,$=[s.batchSize,s.sequenceLength,m],w=12,S={x:Math.ceil(s.vHeadSize/w),y:Math.ceil(s.sequenceLength/w),z:s.batchSize*s.numHeads},v=[{type:12,data:s.sequenceLength},{type:12,data:d},{type:12,data:s.vHeadSize},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:12,data:m},{type:12,data:i},{type:12,data:s.kvSequenceLength},{type:12,data:p}],b=g&&a&&G.size(a.dims)>0,T=["type","type"];b&&T.push("type"),o&&T.push("type"),l&&T.push("type");let k=[{dims:$,dataType:t.dataType,gpuDataType:0}];g&&k.push({dims:_,dataType:t.dataType,gpuDataType:0});let C=E=>{let z=j("probs",t.dataType,t.dims),R=j("v",r.dataType,r.dims),P=[z,R];b&&P.push(j("past_value",a.dataType,a.dims));let q=o?j("seq_lens",o.dataType,o.dims):void 0;o&&P.push(q);let X=l?j("total_sequence_length_input",l.dataType,l.dims):void 0;l&&P.push(X);let ie=[de("output",t.dataType,$)];g&&ie.push(de("present_value",t.dataType,_));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${z.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${z.type.value}, ${w*w}>;
  ${E.registerUniforms(K).declareVariables(...P,...ie)}
  ${E.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Gs(q,X,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&g?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${g?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&g?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${g?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:v}),getShaderSource:C}},bs=(e,t,r,a,s,i,o,l,d,p,m=void 0,g=void 0)=>{let y=Math.min(e.outputCount,1+(o?1:0)+(l?1:0)),_=y>1?p.pastSequenceLength:0,$=_+p.kvSequenceLength,w=d&&G.size(d.dims)>0?d:void 0,S=[t,r];y>1&&o&&G.size(o.dims)>0&&S.push(o),w&&S.push(w),m&&S.push(m),g&&S.push(g);let v=e.compute(By(y,t,r,o,w,p,_,m,g),{inputs:S,outputs:y>1?[-1,1]:[-1]})[0];e.compute(Ry(v,p.batchSize,p.numHeads,_,p.sequenceLength,$,m,g),{inputs:m&&g?[v,m,g]:[v],outputs:[]});let b=[v,a];y>1&&l&&G.size(l.dims)>0&&b.push(l),m&&b.push(m),g&&b.push(g),e.compute(Ny(y,v,a,l,p,_,m,g),{inputs:b,outputs:y>1?[0,2]:[0]})},My=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,s=t.inputHiddenSize,i=t.headSize,o=12,l={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:a},{type:12,data:s},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],m=g=>{let y=de("output_q",d[0].dataType,r),_=de("output_k",d[0].dataType,r),$=de("output_v",d[0].dataType,r),w=j("input",d[0].dataType,d[0].dims),S=j("weight",d[1].dataType,d[1].dims),v=j("bias",d[2].dataType,d[2].dims),b=w.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${b}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${b}, ${o*o}>;
  var<workgroup> tileWeightK: array<${b}, ${o*o}>;
  var<workgroup> tileWeightV: array<${b}, ${o*o}>;
  ${g.registerUniforms(T).declareVariables(w,S,v,y,_,$)}
  ${g.mainStart([o,o,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:m},{inputs:d,outputs:[-1,-1,-1]})},r2=(e,t)=>{let r=Oy(e.inputs,t),[a,s,i]=My(e,r);return bs(e,a,s,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Dy,Py,Uy,i2,kk=te(()=>{ir(),be(),Se(),je(),Te(),Dy=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,s,i)=>{let o=s.length;if(o!==a.length)throw new Error(`${i}: num dimensions != ${o}`);s.forEach((l,d)=>{if(l!==a[d])throw new Error(`${i}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Py=(e,t)=>{let{epsilon:r,spatial:a,format:s}=t,i=e[0].dims,o=a?He(i[i.length-1]):1,l=s==="NHWC"&&i.length>1?o:1,d=G.size(i)/o,p=a,m=p?i.length:i,g=j("x",e[0].dataType,e[0].dims,o),y=j("scale",e[1].dataType,e[1].dims,l),_=j("bias",e[2].dataType,e[2].dims,l),$=j("inputMean",e[3].dataType,e[3].dims,l),w=j("inputVar",e[4].dataType,e[4].dims,l),S=de("y",e[0].dataType,m,o),v=()=>{let T="";if(a)T=`let cOffset = ${i.length===1?"0u":s==="NHWC"?`outputIndices[${i.length-1}] / ${o}`:"outputIndices[1]"};`;else if(s==="NCHW")T=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${y.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let k=1;k<y.rank;k++)T+=`cIndices[${k}] = outputIndices[${k}];`;T+=`let cOffset = ${y.indicesToOffset("cIndices")};`}return T},b=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(g,y,_,$,w,S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${o}`)};
    ${v()}
    let scale = ${y.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${$.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${g.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${o}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...ye(i)]:[{type:12,data:d}]})}},Uy=e=>Me(e),i2=(e,t)=>{let{inputs:r,outputCount:a}=e,s=Uy({...t,outputCount:a});if(We.webgpu.validateInputContent&&Dy(r,s),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Py(r,s))}}),Wy,qy,a2,Tk=te(()=>{Se(),Te(),Wy=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},qy=e=>{let t=e[0].dims,r=e[0].dims[2],a=G.size(t)/4,s=e[0].dataType,i=j("input",s,t,4),o=j("bias",s,[r],4),l=j("residual",s,t,4),d=de("output",s,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(i,o,l,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${i.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},a2=e=>{Wy(e.inputs),e.compute(qy(e.inputs))}}),Vy,Oe,n2,s2,o2,u2,l2,d2,p2,h2,c2,Ly,f2,m2,g2,y2,fs,_2,to,$2,w2,b2,v2,x2,S2,k2,T2,C2,I2,E2,z2,A2,O2,R2,B2,Fd,N2,Lp,Gp,M2,D2,P2,Gy,Hy,U2,Hh=te(()=>{be(),Se(),je(),Te(),Vy=(e,t,r,a,s,i,o)=>{let l=Math.ceil(t/4),d="";typeof s=="string"?d=`${s}(a)`:d=s("a");let p=j("inputData",r,[l],4),m=de("outputData",a,[l],4),g=[{name:"vec_size",type:"u32"}];return o&&g.push(...o),`
      ${e.registerUniforms(g).declareVariables(p,m)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${m.setByOffset("global_idx",d)}
  }`},Oe=(e,t,r,a,s,i=e.dataType,o,l)=>{let d=[{type:12,data:Math.ceil(G.size(e.dims)/4)}];return o&&d.push(...o),{name:t,shaderCache:{hint:s,inputDependencies:["type"]},getShaderSource:p=>Vy(p,G.size(e.dims),e.dataType,i,r,a,l),getRunData:p=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(G.size(p[0].dims)/64/4)},programUniforms:d})}},n2=e=>{e.compute(Oe(e.inputs[0],"Abs","abs"))},s2=e=>{e.compute(Oe(e.inputs[0],"Acos","acos"))},o2=e=>{e.compute(Oe(e.inputs[0],"Acosh","acosh"))},u2=e=>{e.compute(Oe(e.inputs[0],"Asin","asin"))},l2=e=>{e.compute(Oe(e.inputs[0],"Asinh","asinh"))},d2=e=>{e.compute(Oe(e.inputs[0],"Atan","atan"))},p2=e=>{e.compute(Oe(e.inputs[0],"Atanh","atanh"))},h2=e=>Me(e),c2=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Oe(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Ly=e=>{let t,r,a=e.length>=2&&e[1].data!==0,s=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=s?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=s?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Me({min:t,max:r})},f2=(e,t)=>{let r=t||Ly(e.inputs),a=mt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Clip",s=>`clamp(${s}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},m2=e=>{e.compute(Oe(e.inputs[0],"Ceil","ceil"))},g2=e=>{e.compute(Oe(e.inputs[0],"Cos","cos"))},y2=e=>{e.compute(Oe(e.inputs[0],"Cosh","cosh"))},fs=e=>Me(e),_2=(e,t)=>{let r=mt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},to=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,$2=e=>{let t=mt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,to(t)))},w2=e=>{e.compute(Oe(e.inputs[0],"Exp","exp"))},b2=e=>{e.compute(Oe(e.inputs[0],"Floor","floor"))},v2=e=>{let t=mt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,to(t)))},x2=(e,t)=>{let r=mt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},S2=e=>{e.compute(Oe(e.inputs[0],"Not",t=>`!${t}`))},k2=e=>{e.compute(Oe(e.inputs[0],"Neg",t=>`-${t}`))},T2=e=>{e.compute(Oe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},C2=e=>{let t=mt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},I2=e=>{e.compute(Oe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},E2=e=>Me(e),z2=(e,t)=>{let r=mt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},A2=e=>{e.compute(Oe(e.inputs[0],"Sin","sin"))},O2=e=>{e.compute(Oe(e.inputs[0],"Sinh","sinh"))},R2=e=>{e.compute(Oe(e.inputs[0],"Sqrt","sqrt"))},B2=e=>{e.compute(Oe(e.inputs[0],"Tan","tan"))},Fd=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,N2=e=>{e.compute(Oe(e.inputs[0],"Tanh",Fd))},Lp=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Fd("v")};
}
`,Gp=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,M2=e=>{let t=mt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"FastGelu",Gp,Lp(t),void 0,e.inputs[0].dataType))},D2=(e,t)=>{let r=mt(e.inputs[0].dataType);return e.compute(Oe(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},P2=e=>{e.compute(Oe(e.inputs[0],"Log","log"))},Gy=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Hy=e=>`quick_gelu_impl(${e})`,U2=(e,t)=>{let r=mt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"QuickGelu",Hy,Gy(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Fy,jy,W2,Ck=te(()=>{Se(),Te(),Hh(),Fy=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},jy=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=j("input",e[0].dataType,e[0].dims,4),a=j("bias",e[0].dataType,[e[0].dims[2]],4),s=de("output",e[0].dataType,t,4),i=G.size(t)/4,o=it(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,a,s)}

  ${to(o)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},W2=e=>{Fy(e.inputs),e.compute(jy(e.inputs))}}),Ky,Qy,Xt,q2,V2,L2,G2,H2,F2,j2,K2,Q2,Z2,Ik=te(()=>{be(),Se(),Te(),Ky=(e,t,r,a,s,i,o,l,d,p,m,g)=>{let y,_;typeof l=="string"?y=_=(b,T)=>`${l}((${b}),(${T}))`:typeof l=="function"?y=_=l:(y=l.scalar,_=l.vector);let $=de("outputData",m,a.length,4),w=j("aData",d,t.length,4),S=j("bData",p,r.length,4),v;if(s)if(i){let b=G.size(t)===1,T=G.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;b||T?v=$.setByOffset("global_idx",_(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),T?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${$.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",$)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",$)};
            ${$.setByOffset("global_idx",_(o||k?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||C?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=$.setByOffset("global_idx",_(w.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(T,k,C="")=>{let E=`aData[indexA${k}][componentA${k}]`,z=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${$.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${w.broadcastedIndicesToOffset(`outputIndices${k}`,$)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,$)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${T}[${k}] = ${C}(${y(E,z)});
          `};m===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,S,$)}

        ${g??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Qy=(e,t,r,a,s,i,o=r.dataType)=>{let l=r.dims.map(w=>Number(w)??1),d=a.dims.map(w=>Number(w)??1),p=!G.areEqual(l,d),m=l,g=G.size(l),y=!1,_=!1,$=[p];if(p){let w=Bi.calcShape(l,d,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");m=w.slice(),g=G.size(m);let S=G.size(l)===1,v=G.size(d)===1,b=l.length>0&&l[l.length-1]%4===0,T=d.length>0&&d[d.length-1]%4===0;$.push(S),$.push(v),$.push(b),$.push(T);let k=1;for(let C=1;C<m.length;C++){let E=l[l.length-C],z=d[d.length-C];if(E===z)k*=E;else break}k%4===0?(_=!0,y=!0):(S||v||b||T)&&(y=!0)}else y=!0;return $.push(y),{name:e,shaderCache:{hint:t+$.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Ky(w,l,d,m,y,p,_,s,r.dataType,a.dataType,o,i),getRunData:()=>({outputs:[{dims:m,dataType:o}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(G.size(m)/4)},...ye(l,d,m)]})}},Xt=(e,t,r,a,s,i)=>{e.compute(Qy(t,s??"",e.inputs[0],e.inputs[1],r,a,i))},q2=e=>{Xt(e,"Add",(t,r)=>`${t}+${r}`)},V2=e=>{Xt(e,"Div",(t,r)=>`${t}/${r}`)},L2=e=>{Xt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},G2=e=>{Xt(e,"Mul",(t,r)=>`${t}*${r}`)},H2=e=>{let t=j("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Xt(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},F2=e=>{Xt(e,"Sub",(t,r)=>`${t}-${r}`)},j2=e=>{Xt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},K2=e=>{Xt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Q2=e=>{Xt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Z2=e=>{Xt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Zy,Xy,Jy,Yy,X2,J2,Ek=te(()=>{be(),Se(),je(),Te(),Zy=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],s=a.dataType,i=a.dims.length;e.forEach((o,l)=>{if(l!==r){if(o.dataType!==s)throw new Error("input tensors should be one type");if(o.dims.length!==i)throw new Error("input tensors should have the same shape");o.dims.forEach((d,p)=>{if(p!==t&&d!==a.dims[p])throw new Error("non concat dimensions must match")})}})},Xy=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Jy=(e,t)=>{let r=e.length,a=[];for(let s=0;s<r;++s){let i=t.setByOffset("global_idx",e[s].getByIndices("indices"));r===1?a.push(i):s===0?a.push(`if (inputIndex == ${s}u) { ${i} }`):s===r-1?a.push(`else { ${i} }`):a.push(`else if (inputIndex == ${s}) { ${i} }`)}return a.join(`
`)},Yy=(e,t,r,a)=>{let s=G.size(r),i=new Array(e.length),o=new Array(e.length),l=0,d=[],p=[],m=[{type:12,data:s}];for(let w=0;w<e.length;++w)l+=e[w].dims[t],i[w]=l,p.push(e[w].dims.length),o[w]=j(`input${w}`,a,p[w]),d.push("rank"),m.push({type:12,data:i[w]});for(let w=0;w<e.length;++w)m.push(...ye(e[w].dims));m.push(...ye(r));let g=de("output",a,r.length),y=g.indicesGet("indices",t),_=Array.from(Array(i.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),$=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)w.registerUniform(`sizeInConcatAxis${S}`,"u32");return w.declareVariables(...o,g)})()}

  ${Xy(i.length,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${g.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${y});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${_});
      ${y} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Jy(o,g)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:m}),getShaderSource:$}},X2=(e,t)=>{let r=e.inputs,a=r[0].dims,s=G.normalizeAxis(t.axis,a.length);Zy(r,s);let i=a.slice();i[s]=r.reduce((l,d)=>l+(d.dims.length>s?d.dims[s]:0),0);let o=r.filter(l=>G.size(l.dims)>0);e.compute(Yy(o,s,i,r[0].dataType),{inputs:o})},J2=e=>Me({axis:e.axis})}),$i,wi,bi,Fh,ki=te(()=>{be(),Se(),$i=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},wi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},bi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Fh=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[Iv,Ev];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),nt,Y2,jh=te(()=>{nt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Y2=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),ex,zk=te(()=>{ex=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ys,Kh,Qh=te(()=>{be(),Se(),Te(),ki(),ys=(e,t,r,a,s)=>{let i=a-r;return`
      ${Array.from({length:r}).map((o,l)=>`
      if (${he(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,he(s,l+i,a))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Kh=(e,t,r,a,s=!1,i)=>{let o=e[0].dims,l=e[1].dims,d=o[o.length-2],p=l[l.length-1],m=o[o.length-1],g=He(p),y=He(m),_=He(d),$=G.size(r)/g/_,w=e.length>2,S=a?a.slice(0,-2):r.slice(0,-2),v=[G.size(S),d,p],b=[{type:12,data:$},{type:12,data:d},{type:12,data:p},{type:12,data:m}];wi(t,b),b.push(...ye(S,o,l)),w&&b.push(...ye(e[2].dims)),b.push(...ye(v));let T=k=>{let C=Vh("batch_dims",e[0].dataType,S.length),E=j("a",e[0].dataType,o.length,y),z=j("b",e[1].dataType,l.length,g),R=de("output",e[0].dataType,v.length,g),P=it(R.type.tensor),q=$i(t,R.type.value,P),X=[E,z],ie="";if(w){let Z=s?g:1;X.push(j("bias",e[2].dataType,e[2].dims.length,Z)),ie=`${s?`value += bias[col / ${Z}];`:`value += ${R.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];bi(t,K);let J=()=>{let Z=`var a_data: ${E.type.value};`;for(let W=0;W<y;W++)Z+=`
              let b_data${W} = b[(b_offset + (k + ${W}) * uniforms.N + col) / ${g}];`;for(let W=0;W<_;W++){Z+=`a_data = a[(a_offset + (row + ${W}) * uniforms.K + k) / ${y}];`;for(let oe=0;oe<y;oe++)Z+=`
            values[${W}] = fma(${z.type.value}(a_data${y===1?"":`[${oe}]`}), b_data${oe}, values[${W}]);
`}return Z};return`
  ${k.registerUniforms(K).registerInternalVariables(C).declareVariables(...X,R)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${g})) * ${g};
    var index1 = global_idx / (uniforms.N / ${g});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${ys("a_indices",E,E.rank-2,C.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${ys("b_indices",z,z.rank-2,C.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${R.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${y}) {
      ${J()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${ie}
      ${q}
      let cur_indices = ${R.type.indices}(batch, row + i, col);
      let offset = ${R.indicesToOffset("cur_indices")};
      ${R.setByOffset(`offset / ${g}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${g};${y};${_};${s}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:T}}}),e0,t0,Hp,jd,r0,Fp,i0,mo,Zh=te(()=>{be(),Se(),Te(),ki(),Qh(),jh(),e0=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,t0=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Hp=(e,t,r="f32",a,s=!1,i=32,o=!1,l=32)=>{let d=t[1]*e[1],p=t[0]*e[0],m=s?d:i,g=s?i:d,y=m/t[0],_=i/t[1];if(!((s&&y===4&&e[1]===4||!s&&(y===3||y===4))&&m%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${s} is true, innerElementSize ${y} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${y} must be 3 or 4.
  tileAWidth ${m} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${y}<${r}>, ${m/y}>, ${g}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${y};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${o?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${e0(s,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${y===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${t0(s,y)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},jd=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,r0=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Fp=(e,t,r="f32",a,s=!1,i=32,o=!1,l=32,d=!1)=>{let p=e[1]*t[1],m=e[0]*t[0],g=s?p:i,y=s?i:p;if(!(y%t[1]===0&&g%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${y} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${g} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let _=y/t[1],$=g/t[0],w=i/t[1],S=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${m};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${y}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${t[0]}) {
          ${jd(s,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${s?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${$};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${$}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${jd(s,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${r0(s)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${g}>, ${y}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${m}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},i0=(e,t,r,a,s=!1)=>{let[i,o,l,d]=a,p=it(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${nt(e,p)} {
      var value = ${nt(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${ys("aIndices",o,o.rank-2,i.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${nt(e,p)} {
      var value = ${nt(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${ys("bIndices",l,l.rank-2,i.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${nt(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${s?"bias[colIn]":`${nt(e,p)}(bias[row])`};`:""}
        ${r}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},mo=(e,t,r,a,s=!1,i)=>{let o=e[0].dims,l=e[1].dims,d=o.slice(0,-2),p=l.slice(0,-2),m=a?a.slice(0,-2):r.slice(0,-2),g=G.size(m),y=o[o.length-2],_=o[o.length-1],$=l[l.length-1],w=_%4===0&&$%4===0,S=y<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil($/v[0]/S[0]),Math.ceil(y/v[1]/S[1]),Math.ceil(g/v[2]/S[2])],T=w?4:1,k=[...d,y,_/T],C=k.length,E=[...p,_,$/T],z=E.length,R=[g,y,$/T],P=[{type:6,data:y},{type:6,data:$},{type:6,data:_}];wi(t,P),P.push(...ye(m,k,E));let q=["rank","rank"],X=e.length>2;X&&(P.push(...ye(e[2].dims)),q.push("rank")),P.push(...ye(R));let ie=K=>{let J=m.length,Z=Vh("batchDims",e[0].dataType,J,1),W=it(e[0].dataType),oe=j("a",e[0].dataType,C,T),ce=j("b",e[1].dataType,z,T),H=de("result",e[0].dataType,R.length,T),fe=[oe,ce];if(X){let N=s?T:1;fe.push(j("bias",e[2].dataType,e[2].dims.length,N))}let B=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];bi(t,B);let U=it(H.type.tensor),se=$i(t,H.type.value,U),$e=i0(T,X,se,[Z,oe,ce,H],s);return`
  ${K.registerUniforms(B).registerInternalVariables(Z).declareVariables(...fe,H)}
  ${$e}
  ${w?Hp(S,v,W,Z):Fp(S,v,W,Z)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${w};${s}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:P}),getShaderSource:ie}}}),a0,tx,Ak=te(()=>{be(),wr(),Te(),ki(),jh(),zk(),Zh(),a0=(e,t,r,a,s=!1,i,o=4,l=4,d=4,p="f32")=>{let m=P=>{switch(P){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},g=P=>{switch(P){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},y=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,$=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${nt(o,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${$} && xCol >= 0 && xCol < ${w}) {
      ${y}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${m(o)}
    }
    return resData;`,T=e?t&&a?`
    let col = colIn * ${o};
    ${b}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${nt(o,p)}(0.0);`:a&&r?`
    let col = colIn * ${o};
    ${b}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${nt(o,p)}(0.0);`,k=e?a&&r?g(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g(l)}
    }
    return ${nt(l,p)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${g(l)}
    }
    return ${nt(l,p)}(0.0);`,C=nt(d,p),E=nt(e?o:l,p),z=nt(e?l:o,p),R=$i(i,C,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?T:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${Y2(s)}
      ${R}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},tx=(e,t,r,a,s,i,o,l,d)=>{let p=t.format==="NHWC",m=p?e[0].dims[3]:e[0].dims[1],g=r[0],y=p?r[2]:r[3],_=p?r[1]:r[2],$=p?r[3]:r[1],w=p&&(m%4===0||m%3===0)&&$%4===0,S=p?$:y*_,v=p?y*_:$,b=[8,8,1],T=a<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/b[0]/T[0]),Math.ceil(v/b[1]/T[1]),Math.ceil(g/b[2]/T[2])];ze("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let C=w?p&&m%4!==0?3:4:1,E=b[1]*T[1],z=b[0]*T[0],R=Math.max(b[0]*C,b[1]),P=a%E===0,q=s%z===0,X=i%R===0,ie=w?[C,4,4]:[1,1,1],K=[{type:6,data:a},{type:6,data:s},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];wi(t,K),K.push(...ye(e[0].dims,e[1].dims));let J=["rank","rank"];o&&(K.push(...ye(e[2].dims)),J.push("rank")),K.push(...ye(r));let Z=W=>{let oe=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];bi(t,oe);let ce=w?4:1,H=it(e[0].dataType),fe=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${H}>`:H}) {
        result[flatIndex] = ${w?`vec4<${H}>`:H}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${H}>`:H}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,B=j("x",e[0].dataType,e[0].dims.length,C===3?1:C),U=j("w",e[1].dataType,e[1].dims.length,ce),se=[B,U],$e=de("result",e[0].dataType,r.length,ce);if(o){let N=j("bias",e[2].dataType,e[2].dims.length,ce);se.push(N),fe+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${H}>`:H} {
          return bias[coords.${p?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${ex("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${W.registerUniforms(oe).declareVariables(...se,$e)}
        ${fe}
        ${a0(p,P,q,X,o,t,ie[0],ie[1],ie[2],H)}
        ${w?Hp(T,b,H,void 0,!p,R):Fp(T,b,H,void 0,!p,R,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${w};${P};${q};${X};${E};${z};${R}`,inputDependencies:J},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:K}),getShaderSource:Z}}}),n0,Kd,rs,s0,Qd,o0,rx,ix,Ok=te(()=>{be(),wr(),Se(),Te(),ki(),jh(),n0=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Kd=e=>typeof e=="number"?[e,e,e]:e,rs=(e,t)=>t<=1?e:e+(e-1)*(t-1),s0=(e,t,r,a=1)=>{let s=rs(t,a);return Math.floor((e[0]*(r-1)-r+s)/2)},Qd=(e,t,r,a,s)=>{s==null&&(s=s0(e,t[0],a[0]));let i=[0,0,0,r];for(let o=0;o<3;o++)e[o]+2*s>=t[o]&&(i[o]=Math.trunc((e[o]-t[o]+2*s)/a[o]+1));return i},o0=(e,t,r,a,s,i,o,l,d,p)=>{let m,g,y,_;if(e==="VALID"&&(e=0),typeof e=="number"){m={top:e,bottom:e,left:e,right:e,front:e,back:e};let $=Qd([t,r,a,1],[l,d,p],1,[s,i,o],e);g=$[0],y=$[1],_=$[2]}else if(Array.isArray(e)){if(!e.every((w,S,v)=>w===v[0]))throw Error(`Unsupported padding parameter: ${e}`);m={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let $=Qd([t,r,a,1],[l,d,p],1,[s,i,o],e[0]);g=$[0],y=$[1],_=$[2]}else if(e==="SAME_UPPER"){g=Math.ceil(t/s),y=Math.ceil(r/i),_=Math.ceil(a/o);let $=(g-1)*s+l-t,w=(y-1)*i+d-r,S=(_-1)*o+p-a,v=Math.floor($/2),b=$-v,T=Math.floor(w/2),k=w-T,C=Math.floor(S/2),E=S-C;m={top:T,bottom:k,left:C,right:E,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:m,outDepth:g,outHeight:y,outWidth:_}},rx=(e,t,r,a,s,i=!1,o="channelsLast")=>{let l,d,p,m,g;if(o==="channelsLast")[l,d,p,m,g]=e;else if(o==="channelsFirst")[l,g,d,p,m]=e;else throw new Error(`Unknown dataFormat ${o}`);let[y,,_,$,w]=t,[S,v,b]=Kd(r),[T,k,C]=Kd(a),E=rs(_,T),z=rs($,k),R=rs(w,C),{padInfo:P,outDepth:q,outHeight:X,outWidth:ie}=o0(s,d,p,m,S,v,b,E,z,R),K=i?y*g:y,J=[0,0,0,0,0];return o==="channelsFirst"?J=[l,K,q,X,ie]:o==="channelsLast"&&(J=[l,q,X,ie,K]),{batchSize:l,dataFormat:o,inDepth:d,inHeight:p,inWidth:m,inChannels:g,outDepth:q,outHeight:X,outWidth:ie,outChannels:K,padInfo:P,strideDepth:S,strideHeight:v,strideWidth:b,filterDepth:_,filterHeight:$,filterWidth:w,effectiveFilterDepth:E,effectiveFilterHeight:z,effectiveFilterWidth:R,dilationDepth:T,dilationHeight:k,dilationWidth:C,inShape:e,outShape:J,filterShape:t}},ix=(e,t,r,a,s,i)=>{let o=i==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],d={x:r.map((S,v)=>v)},p=[Math.ceil(n0(d.x.map(S=>r[S]))/l[0]),1,1];ze("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let m=1,g=G.size(r),y=[{type:12,data:g},{type:12,data:a},{type:12,data:s},{type:12,data:t.strides},{type:12,data:t.dilations}];wi(t,y),y.push(...ye(e[0].dims,e[1].dims));let _=["rank","rank"],$=e.length===3;$&&(y.push(...ye(e[2].dims)),_.push("rank")),y.push(...ye(r));let w=S=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:s.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];bi(t,v);let b=1,T=it(e[0].dataType),k=j("x",e[0].dataType,e[0].dims.length,m),C=j("W",e[1].dataType,e[1].dims.length,b),E=[k,C],z=de("result",e[0].dataType,r.length,b),R="";if($){let X=j("bias",e[2].dataType,e[2].dims.length,b);E.push(X),R+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${o?he("coords",4,5):he("coords",1,5)}];
        }`}let P=nt(m,T),q=$i(t,P,T);return`
            ${R}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${S.registerUniforms(v).declareVariables(...E,z)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${he("coords",0,k.rank)};
              let d2 = ${o?he("coords",k.rank-1,k.rank):he("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${o?he("coords",1,k.rank):he("coords",2,k.rank)},
              ${o?he("coords",2,k.rank):he("coords",3,k.rank)},
              ${o?he("coords",3,k.rank):he("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?he("uniforms.x_shape",1,k.rank):he("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${o?he("uniforms.x_shape",2,k.rank):he("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${o?he("uniforms.x_shape",3,k.rank):he("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${o?he("uniforms.x_shape",4,k.rank):he("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${$?"value = value + getBiasByOutputCoords(coords)":""};
              ${q}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${m};${$}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:y}),getShaderSource:w}}}),ax,nx,Rk=te(()=>{be(),Se(),Te(),ki(),ax=(e,t,r,a)=>{let s=e.length>2,i=s?"value += b[output_channel];":"",o=e[0].dims,l=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],m=p/t.group,g=d&&m>=4?He(p):1,y=G.size(r)/g,_=[{type:12,data:y},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:m}];wi(t,_),_.push(...ye(o,[l[0],l[1],l[2],l[3]/g]));let $=s?["rank","rank","rank"]:["rank","rank"];_.push(...ye([r[0],r[1],r[2],r[3]/g]));let w=S=>{let v=de("output",e[0].dataType,r.length,g),b=it(v.type.tensor),T=$i(t,v.type.value,b),k=j("x",e[0].dataType,o.length),C=j("w",e[1].dataType,l.length,g),E=[k,C];s&&E.push(j("b",e[2].dataType,e[2].dims,g));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];bi(t,z);let R=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(z).declareVariables(...E,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${g} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${R}
    ${i}
    ${T}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${g}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:w}},nx=(e,t,r,a)=>{let s=e.length>2,i=He(r[3]),o=He(r[2]),l=G.size(r)/i/o,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],m=[r[0],r[1],r[2],r[3]/i],g=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];wi(t,g),g.push(...ye(d,p,m));let y=(o-1)*t.strides[1]+p[1],_=$=>{let w=de("output",e[0].dataType,m.length,i),S=it(w.type.tensor),v=$i(t,w.type.value,S),b=j("x",e[0].dataType,d.length,i),T=j("w",e[1].dataType,p.length,i),k=[b,T];s&&k.push(j("b",e[2].dataType,e[2].dims,i));let C=s?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return bi(t,E),`
  ${$.registerUniforms(E).declareVariables(...k,w)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${y}>;
    var values: array<${w.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${y}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${C}
      ${v}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${o};${y};${p[0]};${p[1]}`,inputDependencies:s?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:_}}}),u0,Hs,l0,Fs,jp,Zd,d0,p0,Kp,Bk=te(()=>{Se(),Ak(),Ok(),Zh(),Rk(),ki(),Qh(),zr(),u0=(e,t,r,a,s,i)=>{let o=e[0],l=e.slice(i?1:2,i?3:4),d=l.length,p=t[0],m=t.slice(2).map((y,_)=>y+(y-1)*(r[_]-1)),g=l.map((y,_)=>y+a[_]+a[_+d]).map((y,_)=>Math.floor((y-m[_]+s[_])/s[_]));return g.splice(0,0,o),g.splice(i?3:1,0,p),g},Hs=[2,3,1,0],l0=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Fs=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let a=e.pads.slice();co.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let s=Object.assign({},e);return Object.assign(s,{kernelShape:r,pads:a}),s},jp=e=>{let t=Fh(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],s=e.dilations,i=e.group,o=e.kernel_shape,l=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:a,format:r,dilations:s,group:i,kernelShape:o,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Zd=(e,t,r,a)=>{let s=r.format==="NHWC",i=u0(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,s);if(r.group!==1){let E=[t[0]];if(s){let z=e.kernelCustomData.wT??e.compute(zt(t[1],Hs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),E.push(z)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&s&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(nx(E,r,i,a),{inputs:E}):e.compute(ax(E,r,i,a),{inputs:E});return}let o=t.length===3,l=t[0].dims[s?1:2],d=t[0].dims[s?2:3],p=t[0].dims[s?3:1],m=t[1].dims[2],g=t[1].dims[3],y=i[s?1:2],_=i[s?2:3],$=i[s?3:1],w=s&&m===l&&g===d&&r.pads[0]===0&&r.pads[1]===0;if(w||m===1&&g===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let E=i[0],z,R,P,q=[];if(s){let K=e.kernelCustomData.wT??e.compute(zt(t[1],Hs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),w){let J=l*d*p;z=t[0].reshape([1,E,J]),R=K.reshape([1,J,$]),P=[1,E,$]}else z=t[0].reshape([E,l*d,p]),R=K.reshape([1,p,$]),P=[E,y*_,$];q.push(z),q.push(R)}else z=t[0].reshape([E,p,l*d]),R=t[1].reshape([1,$,p]),P=[E,$,y*_],q.push(R),q.push(z);o&&q.push(t[2]);let X=P[2],ie=q[0].dims[q[0].dims.length-1];X<8&&ie<8?e.compute(Kh(q,r,i,P,s,a),{inputs:q}):e.compute(mo(q,r,i,P,s,a),{inputs:q});return}let S=!0,v=e.kernelCustomData.wT??e.compute(zt(t[1],Hs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];o&&b.push(t[2]);let T=s?y*_:$,k=s?$:y*_,C=m*g*p;e.compute(tx(b,r,i,T,k,C,o,S,a),{inputs:b})},d0=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let s=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),o=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=Fs({...t,pads:s,strides:i,dilations:o,kernelShape:l},a);Zd(e,a,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},p0=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",s=Fs(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,o=rx(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,a);e.compute(ix(t,s,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],a))},Kp=(e,t)=>{if(l0(e.inputs,t),e.inputs[0].dims.length===3)d0(e,t);else if(e.inputs[0].dims.length===5)p0(e,e.inputs,t);else{let r=Fs(t,e.inputs);Zd(e,e.inputs,r)}}}),sx,Nk=te(()=>{be(),wr(),Se(),Te(),sx=(e,t,r)=>{let a=e.length>2,s=t.outputShape,i=t.format==="NHWC",o=t.group,l=e[1].dims,d=l[2]/o,p=l[3],m=i?He(d):1,g=i?He(p):1,y=i?p===1?m:g:1,_=G.size(s)/g,$=[Math.ceil(_/64),1,1];ze("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let w=["rank","rank"],S=[t.strides[0],t.strides[1]],v=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],b=[t.dilations[0],t.dilations[1]],T=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],k=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],C=[{type:12,data:_},{type:12,data:S},{type:12,data:v},{type:12,data:b},{type:12,data:T},{type:6,data:k},{type:12,data:d},{type:12,data:p},...ye(e[0].dims,e[1].dims)];a&&(C.push(...ye(e[2].dims)),w.push("rank")),C.push(...ye(s));let E=z=>{let R=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=it(e[0].dataType),q=i?1:2,X=i?2:3,ie=i?3:1,K=j("W",e[1].dataType,e[1].dims.length,y),J=j("Dy",e[0].dataType,e[0].dims.length,m),Z=[J,K];a&&Z.push(j("bias",e[2].dataType,[s[ie]].length,g));let W=de("result",e[0].dataType,s.length,g),oe=()=>{let H="";if(m===1)H+=`
        let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${K.getByOffset(`w_offset / ${y}`)};
        dotProd = dotProd + xValue * wValue;`;else if(p===1)H+=`
          let wValue = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${y}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let fe=0;fe<m;fe++)H+=`
            let wValue${fe} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${fe}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${fe}] * wValue${fe};`;return H},ce=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",ie)};
            let r = ${W.indicesGet("outputIndices",q)};
            let c = ${W.indicesGet("outputIndices",X)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${W.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${P}(dyRCorner) + ${P}(wR)) / ${P}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${P}(uniforms.Dy_shape[${q}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${P}(dyCCorner) + ${P}(wC)) / ${P}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${P}(uniforms.Dy_shape[${X}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${m}) {
                  let xValue = ${i?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m}`):J.get("batch","inputChannel","idyR","idyC")};
                  ${oe()}
                  inputChannel = inputChannel + ${m};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${g}]`:""};
            ${W.setByOffset("global_idx","value")};
          `;return`
    ${z.registerUniforms(R).declareVariables(...Z,W)}
      ${z.mainStart()}
      ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ce}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${m}${y}${g}${p===1}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:r?r(s):s,dataType:e[0].dataType}],programUniforms:C}),getShaderSource:E}}}),h0,c0,f0,Xd,ox,m0,Jd,g0,ux,Mk=te(()=>{Nk(),ki(),zr(),h0=(e,t,r,a,s,i)=>(e-1)*t+r+(a-1)*s+1-i,c0=(e,t,r,a,s)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=i,r[s]=e-i):t==="SAME_LOWER"&&(r[a]=e-i,r[s]=i)},f0=(e,t,r,a,s,i,o,l,d,p)=>{let m=e.length-2,g=p.length===0;d.length<m&&d.push(...Array(m-d.length).fill(0));let y=e[0],_=t[l?3:1]*s;for(let $=0,w=e.length-m-(l?1:0);$<m;++$,++w){let S=e[w],v=g?S*o[$]:p[$],b=h0(S,o[$],i[$],t[w],r[$],v);c0(b,a,i,$,$+m),g&&p.push(o[$]*(S-1)+d[$]+(t[w]-1)*r[$]+1-i[$]-i[$+m])}p.splice(0,0,y),p.splice(l?3:1,0,_)},Xd=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((g,y)=>g*y,1)===0){r.length=0;for(let g=2;g<t[1].dims.length;++g)r.push(t[1].dims[g])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let s=e.pads.slice(),i=e.outputShape.slice(),o=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;d=new Array(g).fill(1)}let p=e.strides.slice();if(p.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;p=new Array(g).fill(1)}f0(l,r,d,e.autoPad,e.group,s,p,a,o,i);let m=Object.assign({},e);return Object.assign(m,{kernelShape:r,pads:s,outputPadding:o,outputShape:i,dilations:d,strides:p}),m},ox=e=>{let t=Fh(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],s=e.dilations,i=e.group,o=e.kernelShape,l=e.pads,d=e.strides,p=e.wIsConst(),m=e.outputPadding,g=e.outputShape;return{autoPad:a,format:r,dilations:s,group:i,kernelShape:o,outputPadding:m,outputShape:g,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},m0=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let s=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==s))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((o,l)=>o+l,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((o,l)=>o+l,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((o,l)=>o+l,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((o,l)=>o+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Jd=(e,t,r,a)=>{let s=e.kernelCustomData.wT??e.compute(zt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=s);let i=[t[0],s];t.length===3&&i.push(t[2]),e.compute(sx(i,r,a),{inputs:i})},g0=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let s=t.kernelShape;(s.length===0||s[0]===0)&&(s=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],o=[1].concat(o),i=[1].concat(i),s=[1].concat(s);let d=t.outputPadding;d=[0].concat(d);let p=Xd({...t,pads:l,strides:o,dilations:i,kernelShape:s,outputPadding:d},a);Jd(e,a,p,m=>r?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},ux=(e,t)=>{if(m0(e.inputs,t),e.inputs[0].dims.length===3)g0(e,t);else{let r=Xd(t,e.inputs);Jd(e,e.inputs,r)}}}),y0,lx,dx,Dk=te(()=>{be(),Se(),je(),Te(),y0=(e,t,r,a)=>{let s=G.size(t),i=t.length,o=j("input",e,i),l=de("output",e,i),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=G.normalizeAxis(d,i),m=g=>{let y=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,_=he("uniforms.input_shape","uniforms.axis",i),$=a.reverse?y+(a.exclusive?" + 1":""):"0",w=a.reverse?_:y+(a.exclusive?"":" + 1");return`
                ${g.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,l)}
                ${g.mainStart()}
                  ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${$};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},{type:12,data:p},...ye(t,t)]}),getShaderSource:m}},lx=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,s=e.inputs[1];e.compute(y0(a,r,s,t),{inputs:[0]})},dx=e=>{let t=e.exclusive===1,r=e.reverse===1;return Me({exclusive:t,reverse:r})}}),_0,$0,w0,px,hx,Pk=te(()=>{be(),Se(),je(),Te(),_0=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},$0=(e,t,r,a)=>{let s=[];s.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)s.push(r.indicesSet("a",e[i],`i[${i}]`));return s.push("return a;}"),s.join(`
`)},w0=(e,t)=>{let r,a,s,i,o,l,d=t.format==="NHWC",p=t.blocksize,m=t.mode==="DCR";d?([r,a,s,i]=e.dims,o=m?[r,a,s,p,p,i/p**2]:[r,a,s,i/p**2,p,p],l=m?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,s,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=m?[r,p,p,i/p**2,a,s]:[r,i/p**2,p,p,a,s],l=m?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let g=e.reshape(o),y=g.dims.length,_=e.dataType,$=j("a",_,y),w=de("output",_,y),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables($,w)}

  ${$0(l,y,$,w)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=d?[r,a*p,s*p,i/p**2]:[r,i/p**2,a*p,s*p],T=G.size(b),k=g.dims,C=G.sortBasedOnPerm(k,l);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...ye(k,C)]}},getShaderSource:S}},px=(e,t)=>{_0(e.inputs),e.compute(w0(e.inputs[0],t))},hx=e=>Me({blocksize:e.blocksize,mode:e.mode,format:e.format})}),js,is,Yd,b0,v0,x0,S0,ep,k0,cx,fx,Uk=te(()=>{be(),Se(),je(),Te(),js="[a-zA-Z]|\\.\\.\\.",is="("+js+")+",Yd="^"+is+"$",b0="("+is+",)*"+is,v0="^"+b0+"$",x0=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},S0=class{constructor(e,t){var s;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(v0)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,o)=>{let l=e[o].dims.slice();if(!i.match(RegExp(Yd)))throw new Error("Invalid LHS term");let d=this.processTerm(i,!0,l,o);this.lhs.push(d)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,o])=>o.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(is)))throw new Error("Invalid RHS");(s=a.match(RegExp(js,"g")))==null||s.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(i);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let s=r.length,i=!1,o=[],l=0;if(!e.match(RegExp(Yd))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(js,"g")),p=new x0(a);return d==null||d.forEach((m,g)=>{if(m==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let y=s-d.length+1;if(y<0)throw new Error("Ellipsis out of bounds");if(o=r.slice(l,l+y),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<o.length;_++){let $=String.fromCharCode(48+_);p.addSymbol($,g+_),this.addSymbol($,r[l++],a)}}else p.addSymbol(m,g+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(m,r[l++],a)}),p}},ep=e=>e+"_max",k0=(e,t,r,a)=>{let s=e.map(p=>p.length).map((p,m)=>j(`input${m}`,t,p)),i=G.size(a),o=de("output",t,a.length),l=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let m=[],g="var prod = 1.0;",y="var sum = 0.0;",_="sum += prod;",$=[],w=[],S=[],v=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,C)=>{var E;if(r.rhs.symbolToIndices.has(C)){let z=(E=r.rhs.symbolToIndices.get(C))==null?void 0:E[0];z!==void 0&&r.lhs.forEach((R,P)=>{if(k.inputIndices.includes(P)){let q=R.symbolToIndices.get(C);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(X=>{m.push(`${s[P].indicesSet(`input${P}Indices`,X,o.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,R)=>{if(k.inputIndices.includes(R)){let P=z.symbolToIndices.get(C);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(q=>{$.push(`${s[R].indicesSet(`input${R}Indices`,q,`${C}`)}`)}),v.push(`prod *= ${s[R].getByIndices(`input${R}Indices`)};`)}}),w.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${ep(C)}; ${C}++) {`),S.push("}")});let T=b?[...m,`let sum = ${s.map((k,C)=>k.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...m,y,...w,...$,g,...v,_,...S];return`
            ${p.registerUniforms(l.map(k=>({name:`${ep(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...s,o)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${s.map((k,C)=>`var input${C}Indices: ${s[C].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=l.filter(g=>r.symbolToInfo.has(g)).map(g=>{var y;return{type:12,data:((y=r.symbolToInfo.get(g))==null?void 0:y.dimValue)||0}});p.push({type:12,data:i});let m=e.map((g,y)=>[...ye(g)]).reduce((g,y)=>g.concat(y),p);return m.push(...ye(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m}},getShaderSource:d}},cx=(e,t)=>{let r=new S0(e.inputs,t.equation),a=r.outputDims,s=e.inputs.map((i,o)=>i.dims);e.compute(k0(s,e.inputs[0].dataType,r,a))},fx=e=>{let t=e.equation.replace(/\s+/g,"");return Me({equation:t})}}),T0,tp,C0,I0,mx,Wk=te(()=>{be(),Se(),Te(),T0=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,s=t.length<r.length?0:t.length-r.length;for(;a<r.length&&s<t.length;++a,++s)if(r[a]!==t[s]&&r[a]!==1&&t[s]!==1)throw new Error("Expand requires shape to be broadcastable to input")},tp=(e,t)=>{let r=e.length-t.length,a=[];for(let s=0;s<r;++s)a.push(e[s]);for(let s=0;s<t.length;++s)a.push(t[s]===1?e[s+r]:t[s]);return a},C0=(e,t)=>e.length>t.length?tp(e,t):tp(t,e),I0=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=C0(t,r),s=e[0].dataType,i=s===9||G.size(t)===1,o=s===9||t.length>0&&t[t.length-1]%4===0?4:1,l=i||a.length>0&&a[a.length-1]%4===0?4:1,d=Math.ceil(G.size(a)/l),p=g=>{let y=j("input",s,t.length,o),_=de("output",s,a.length,l),$;if(s===9){let w=(S,v,b="")=>`
          let outputIndices${v} = ${_.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,_)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${b}(${y.getByOffset(`index${v}`)}[component${v}]);
        `;$=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else $=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${y.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${y.getByOffset(`inputOffset / ${o}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${g.registerUniform("vec_size","u32").declareVariables(y,_)}
    ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${$}`},m=[{type:12,data:d},...ye(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${o}${l}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m})}},mx=e=>{T0(e.inputs),e.compute(I0(e.inputs),{inputs:[0]})}}),E0,gx,qk=te(()=>{be(),Se(),Te(),Hh(),E0=e=>{let t=e[0].dataType,r=G.size(e[0].dims),a=G.size(e[1].dims),s=a%4===0,i=o=>{let l=j("x",t,[1],4),d=j("bias",t,[1],4),p=de("y",t,[1],4),m=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],g=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${d.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,y=s?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${g(0)}${g(1)}${g(2)}${g(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(m).declareVariables(l,d,p)}

    ${Lp(mt(t))}

    ${o.mainStart(Ni)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${y}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",Gp("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Ni/4)}})}},gx=e=>{e.inputs.length<2||G.size(e.inputs[1].dims)===0?M2(e):e.compute(E0(e.inputs))}}),z0,A0,yx,_x,Vk=te(()=>{be(),Se(),je(),Te(),z0=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},A0=(e,t)=>{let r=e[0].dims,a=e[1].dims,s=r.length,i=G.normalizeAxis(t.axis,s),o=r.slice(0);o.splice(i,1,...a);let l=r[i],d=e[0].dataType===9?4:1,p=Math.ceil(G.size(o)/d),m=[{type:12,data:p},{type:6,data:l},{type:12,data:i},...ye(e[0].dims,e[1].dims,o)],g=y=>{let _=j("data",e[0].dataType,e[0].dims.length,d),$=j("inputIndices",e[1].dataType,e[1].dims.length),w=de("output",e[0].dataType,o.length,d),S=b=>{let T=a.length,k=`var indicesIndices${b}  = ${$.type.indices}(0);`;for(let C=0;C<T;C++)k+=`${T>1?`indicesIndices${b}[${C}]`:`indicesIndices${b}`} = ${o.length>1?`outputIndices${b}[uniforms.axis + ${C}]`:`outputIndices${b}`};`;k+=`
          var idx${b} = ${$.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${_.type.indices};
        `;for(let C=0,E=0;C<s;C++)C===i?(k+=`${s>1?`dataIndices${b}[${C}]`:`dataIndices${b}`} = u32(idx${b});`,E+=T):(k+=`${s>1?`dataIndices${b}[${C}]`:`dataIndices${b}`} = ${o.length>1?`outputIndices${b}[${E}]`:`outputIndices${b}`};`,E++);return k},v;if(e[0].dataType===9){let b=(T,k,C="")=>`
          let outputIndices${k} = ${w.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${_.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${T}[${k}] = ${C}(${_.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,$,w)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:g}},yx=e=>Me({axis:e.axis}),_x=(e,t)=>{let r=e.inputs;z0(r),e.compute(A0(e.inputs,t))}}),O0,$x,wx,Lk=te(()=>{be(),Se(),Te(),O0=(e,t,r,a,s,i,o,l,d)=>{let p=[{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:12,data:r},{type:12,data:o},{type:12,data:l},{type:12,data:d}],m=[i];p.push(...ye(t.dims,m));let g=y=>{let _=j("indices_data",t.dataType,t.dims.length),$=de("input_slice_offsets_data",12,1,1),w=[_,$],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:s.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${y.registerUniforms(S).declareVariables(...w)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${s.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${s.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:m,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:g},{inputs:[t],outputs:[-1]})[0]},$x=(e,t)=>{let r=e.inputs,a=r[0].dims,s=r[0].dataType,i=r[1].dims,o=i[i.length-1],l=G.sizeToDimension(i,i.length-1),d=G.sizeFromDimension(a,t.batchDims+o),p=G.sizeToDimension(a,t.batchDims),m=G.sizeFromDimension(a,t.batchDims),g=l/p,y=new Array(o),_=d;for(let k=0;k<o;++k)y[o-1-k]=_,_*=a[t.batchDims+o-1-k];let $=O0(e,r[1],y,t.batchDims,a,l,g,m,o),w=t.batchDims+o;if(w>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=i.slice(0,-1).concat(a.slice(w)),v=G.size(S),b=[{type:12,data:v},{type:12,data:d},...ye(r[0].dims,$.dims,S)],T=k=>{let C=j("data",r[0].dataType,r[0].dims.length),E=j("slice_offsets",12,$.dims.length),z=de("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,E,z)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:s}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:T},{inputs:[r[0],$]})},wx=e=>({batchDims:e.batch_dims,cacheKey:""})}),R0,B0,bx,vx,Gk=te(()=>{be(),Se(),je(),Te(),R0=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=G.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,s=e[0],i=e[2],o=e.length===4?e[3]:void 0;if(i.dims.length!==s.dims.length||!s.dims.map((l,d)=>d===r?Math.ceil(l/a)===i.dims[d]:l===i.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==s.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==i.dims.length||!o.dims.map((l,d)=>l===i.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},B0=(e,t)=>{let r=e[0].dims,a=e[1].dims,s=r.length,i=G.normalizeAxis(t.gatherAxis,s),o=G.normalizeAxis(t.quantizeAxis,s),l=r.slice(0);l.splice(i,1,...a);let d=G.size(l),p=e[2].dataType,m=e[0].dataType===22,g=[{type:12,data:d},{type:12,data:o},{type:12,data:i},{type:12,data:t.blockSize},...ye(...e.map((_,$)=>_.dims),l)],y=_=>{let $=j("data",e[0].dataType,e[0].dims.length),w=j("inputIndices",e[1].dataType,e[1].dims.length),S=j("scales",e[2].dataType,e[2].dims.length),v=e.length>3?j("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=de("output",p,l.length),T=[$,w,S];v&&T.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(k).declareVariables(...T,b)}
        ${_.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${$.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${$.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${$.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${$.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${$.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${$.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${mt(p)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,$)=>$!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,$)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:g}),getShaderSource:y}},bx=(e,t)=>{let r=e.inputs;R0(r,t),e.compute(B0(e.inputs,t))},vx=e=>Me({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),N0,M0,xx,Sx,Hk=te(()=>{be(),Se(),je(),Te(),N0=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},M0=(e,t)=>{let r=e[0].dims,a=e[0].dataType,s=r.length,i=e[1].dims,o=e[1].dataType,l=G.normalizeAxis(t.axis,s),d=r[l],p=i.slice(0),m=G.size(p),g=j("input",a,s),y=j("indicesInput",o,i.length),_=de("output",a,p.length),$=[{type:12,data:m},{type:6,data:d},{type:12,data:l}];return $.push(...ye(r,i,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:$}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,_)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${y.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${g.type.indices}(outputIndices);
      ${g.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${g.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},xx=e=>Me({axis:e.axis}),Sx=(e,t)=>{let r=e.inputs;N0(r),e.compute(M0(e.inputs,t))}}),D0,P0,kx,Tx,Fk=te(()=>{be(),Se(),Te(),D0=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},P0=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[s,i,o]=Cv.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),l=[s,i];if(!l)throw new Error("Can't use gemm on the given tensors");let d=16,p=Math.ceil(i/d),m=Math.ceil(s/d),g=!0,y=G.size(l),_=[{type:12,data:g?p:y},{type:12,data:s},{type:12,data:i},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],$=["type","type"];e.length===3&&(_.push(...ye(e[2].dims)),$.push("rank")),_.push(...ye(l));let w=v=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",k=j("a",e[0].dataType,e[0].dims),C=j("b",e[1].dataType,e[1].dims),E=k.type.value,z=null,R=[k,C];e.length===3&&(z=j("c",e[2].dataType,e[2].dims.length),R.push(z));let P=de("output",e[0].dataType,l.length);R.push(P);let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(q).declareVariables(...R)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${T}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",P)}; value += ${E}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let b=j("a",e[0].dataType,e[0].dims),T=j("b",e[1].dataType,e[1].dims),k=null,C=[b,T];e.length===3&&(k=j("c",e[2].dataType,e[2].dims.length),C.push(k));let E=de("output",e[0].dataType,l.length);C.push(E);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],R="",P="";t.transA&&t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,R="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,R="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,R="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,R="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let q=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(z).declareVariables(...C)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${d}>, ${d}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${d}>, ${d}>;
  ${v.mainStart([d,d,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${d};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${d};
    let num_tiles = (uniforms.K - 1) / ${d} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${P}
      k_start = k_start + ${d};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${d}; k++) {
        ${R}
      }
      workgroupBarrier();
    }

    ${q}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return g?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:p*m},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:w}},kx=e=>{let t=e.transA,r=e.transB,a=e.alpha,s=e.beta;return{transA:t,transB:r,alpha:a,beta:s,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Tx=(e,t)=>{D0(e.inputs),e.compute(P0(e.inputs,t))}}),nr,_r,ai,ni,U0,W0,q0,V0,L0,G0,H0,F0,Cx,Ix,jk=te(()=>{be(),Se(),je(),Te(),[nr,_r,ai,ni]=[0,1,2,3],U0=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},W0=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,q0=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,V0=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,L0=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,G0=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${nr}] = batch;
     indices[${_r}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${ai}] = u32(r);
            indices[${ni}] = u32(c);
          }
        `;case"border":return`
          indices[${ai}] = u32(clamp(r, 0, H - 1));
          indices[${ni}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${ai}] = gs_reflect(r, border[1], border[3]);
          indices[${ni}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,H0=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${nr}], indices[${_r}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${nr}], indices[${_r}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${nr}], indices[${_r}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${nr}], indices[${_r}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${nr}], indices[${_r}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${nr}], indices[${_r}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,F0=(e,t)=>{let r=j("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],s=j("grid",e[1].dataType,a.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[nr,_r,ai,ni]=[0,3,1,2]);let o=de("output",e[0].dataType,i.length),l=r.type.value,d=G.size(i),p=[{type:12,data:d},...ye(e[0].dims,a,i)],m=g=>`
  ${g.registerUniform("output_size","u32").declareVariables(r,s,o)}
  ${W0}
  ${q0(l)}
  ${V0(t)}
  ${L0(t)}
  ${G0(r,l,t)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${ai}]);
      let W_in = i32(uniforms.x_shape[${ni}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${nr}], indices[${ai}], indices[${ni}]);
      let nxy = ${s.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${H0(o,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:g=>{let y=G.size(i);return{outputs:[{dims:i,dataType:g[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:p}},getShaderSource:m}},Cx=(e,t)=>{U0(e.inputs),e.compute(F0(e.inputs,t))},Ix=e=>Me({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),wt,j0,Ex,rp,K0,ms,zx,Ax=te(()=>{be(),Se(),je(),qh(),Gh(),Te(),zr(),wt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,j0=(e,t)=>{let r=e[0],a=wt(e,1),s=wt(e,2),i=wt(e,3),o=wt(e,4),l=wt(e,5),d=wt(e,6),p=wt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let m=r.dims[0],g=r.dims[1],y=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=g,$=0,w=0,S=Math.floor(y/t.numHeads);if(d&&p&&G.size(d.dims)&&G.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==m||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==m||p.dims[1]!==t.numHeads||p.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=d.dims[2],w=d.dims[2]}else if(d&&G.size(d.dims)||p&&G.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(a&&G.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,_=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,_=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,_=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(i&&G.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=$+_,T=0;if(o&&G.size(o.dims)>0){T=8;let z=o.dims;throw z.length===1?z[0]===m?T=1:z[0]===3*m+2&&(T=3):z.length===2&&z[0]===m&&z[1]===b&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,C=y;if(s&&G.size(s.dims)>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(_!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=s.dims[2]}else{if(_!==s.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=s.dims[1]*s.dims[3],k=!0}}let E=!1;if(o&&G.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(l&&G.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==m||l.dims[1]!==t.numHeads||l.dims[2]!==g||l.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:g,pastSequenceLength:$,kvSequenceLength:_,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:y,vHiddenSize:C,headSize:S,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:E,passPastInKv:k,qkvFormat:v}},Ex=e=>Me({...e}),rp=Me({perm:[0,2,1,3]}),K0=(e,t,r,a,s,i,o)=>{let l=[a,s,i],d=G.size(l),p=[{type:12,data:d},{type:12,data:o},{type:12,data:i}],m=g=>{let y=de("qkv_with_bias",t.dataType,l),_=j("qkv",t.dataType,l),$=j("bias",r.dataType,l),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${g.registerUniforms(w).declareVariables(_,$,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:m},{inputs:[t,r],outputs:[-1]})[0]},ms=(e,t,r,a,s,i,o,l)=>{let d=i;if(o&&G.size(o.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=K0(e,i,o,t,a,r*s,l),d=d.reshape([t,a,r,s]),r===1||a===1?d:e.compute(zt(d,rp.perm),{inputs:[d],outputs:[-1]})[0]}else return i.dims.length===3&&(d=i.reshape([t,a,r,s])),r===1||a===1?d:e.compute(zt(d,rp.perm),{inputs:[d],outputs:[-1]})[0]},zx=(e,t)=>{let r=j0(e.inputs,t),a=e.inputs[0],s=wt(e.inputs,1),i=wt(e.inputs,2),o=wt(e.inputs,3),l=wt(e.inputs,4),d=wt(e.inputs,5),p=wt(e.inputs,6),m=wt(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((s==null?void 0:s.dims.length)===5)throw new Error("Packed KV is not implemented");let g=s&&i&&s.dims.length===4&&i.dims.length===4,y=ms(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,o,0);if(g)return bs(e,y,s,i,l,void 0,p,m,d,r);if(!s||!i)throw new Error("key and value must be provided");let _=ms(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,s,o,r.hiddenSize),$=ms(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,o,2*r.hiddenSize);bs(e,y,_,$,l,void 0,p,m,d,r)}}),Q0,Z0,X0,J0,Qp,Ox,Rx,Bx=te(()=>{be(),Se(),je(),Te(),Q0=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Z0=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(s=>r.push(Number(s))),a=r.length),Me({numOutputs:a,axis:t.axis,splitSizes:r})},X0=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${he("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,J0=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let s=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(s):a===0?r.push(`if (output_number == ${a}u) { ${s} }`):a===t-1?r.push(`else { ${s} }`):r.push(`else if (output_number == ${a}) { ${s} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Qp=(e,t)=>{let r=e[0].dims,a=G.size(r),s=e[0].dataType,i=G.normalizeAxis(t.axis,r.length),o=new Array(t.numOutputs),l=j("input",s,r.length),d=new Array(t.numOutputs),p=[],m=[],g=0,y=[{type:12,data:a}];for(let $=0;$<t.numOutputs;$++){g+=t.splitSizes[$],d[$]=g;let w=r.slice();w[i]=t.splitSizes[$],m.push(w),o[$]=de(`output${$}`,s,w.length),p.push({dims:m[$],dataType:e[0].dataType})}y.push({type:12,data:d},...ye(r,...m));let _=$=>`
  ${$.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...o)}
  ${X0(d.length)}
  ${J0(o)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${he("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:y})}},Ox=(e,t)=>{Q0(e.inputs);let r=e.inputs.length===1?t:Z0(e.inputs,t);e.compute(Qp(e.inputs,r),{inputs:[0]})},Rx=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Me({axis:t,numOutputs:a,splitSizes:r})}}),Y0,e_,ip,Nx,Kk=te(()=>{je(),Gh(),Ax(),Bx(),zr(),Y0=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],s=e[2],i=e[3],o=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=r.dims[0],p=r.dims[1],m=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],g=p,y=0,_=!a||a.dims.length===0,$=Math.floor(_?m/(t.numHeads+2*t.kvNumHeads):m/t.numHeads);_&&(m=$*t.numHeads);let w=i&&i.dims.length!==0,S=o&&o.dims.length!==0;if(w&&i.dims.length===4&&i.dims[0]===d&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===$)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&S){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=i.dims[2]}else if(w||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');g=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');g=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let b=0,T=!1,k=t.kvNumHeads?$*t.kvNumHeads:m;if(s&&s.dims.length>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(g!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=s.dims[2]}else{if(g!==s.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=s.dims[1]*s.dims[3],T=!0}}let C=e.length>4?e[5]:void 0;if(C&&C.dims.length!==1&&C.dims[0]!==d)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:d,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:m,vHiddenSize:k,headSize:$,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:v}},e_=Me({perm:[0,2,1,3]}),ip=(e,t,r)=>{let a=t,s=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,s,r.headSize]),a=e.compute(zt(a,e_.perm),{inputs:[a],outputs:[-1]})[0]),a},Nx=(e,t)=>{var S;let r=Y0(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],s=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,m=r.kvNumHeads?r.kvNumHeads:r.numHeads,g=Me({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,m*r.headSize,m*r.headSize]}),[y,_,$]=!s&&!i?e.compute(Qp([a],g),{inputs:[a],outputs:[-1,-1,-1]}):[a,s,i],w=ms(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,y,void 0,0);bs(e,w,ip(e,_,r),ip(e,$,r),void 0,void 0,o,l,void 0,r,d,p)}}),ap,t_,r_,Mx,Qk=te(()=>{be(),Se(),zr(),Te(),ap=(e,t,r,a,s,i,o,l)=>{let d=He(i),p=d===1?"f32":`vec${d}f`,m=d===1?"vec2f":`mat2x${d}f`,g=s*o,y=64;g===1&&(y=256);let _=[s,o,i/d],$=[s,o,2],w=["rank","type","type"],S=[];S.push(...ye(_,$));let v=b=>{let T=j("x",t.dataType,3,d),k=j("scale",r.dataType,r.dims),C=j("bias",a.dataType,a.dims),E=de("output",1,3,2),z=[T,k,C,E];return`
  var<workgroup> workgroup_shared : array<${m}, ${y}>;
  const workgroup_size = ${y}u;
  ${b.declareVariables(...z)}
  ${b.mainStart(y)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${m}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Ir("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${Ir("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l};${y}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:$,dataType:1}],dispatchGroup:{x:g},programUniforms:S}),getShaderSource:v},{inputs:[t,r,a],outputs:[-1]})[0]},t_=(e,t,r)=>{let a=t[0].dims,s=a,i=2,o=a[0],l=a[1],d=G.sizeFromDimension(a,i),p=He(d),m=G.size(s)/p,g=ap(e,t[0],t[1],t[2],o,d,l,r.epsilon),y=[o,l,d/p],_=[o,l],$=["type","none"],w=S=>{let v=j("x",t[0].dataType,y.length,p),b=j("scale_shift",1,_.length,2),T=de("output",t[0].dataType,y.length,p),k=[v,b,T];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...ye(y,_,y)]}),getShaderSource:w},{inputs:[t[0],g]})},r_=(e,t,r)=>{let a=t[0].dims,s=a,i=a[0],o=a[a.length-1],l=G.sizeFromDimension(a,1)/o,d=He(o),p=G.size(s)/d,m=[{type:12,data:l},{type:12,data:Math.floor(o/d)}],g=["type","type"],y=!1,_=[0,a.length-1];for(let v=0;v<a.length-2;v++)y=y||a[v+1]!==1,_.push(v+1);y=y&&a[a.length-1]!==1;let $=y?e.compute(zt(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(v,b)=>a[_[b]])),w=ap(e,$,t[1],t[2],i,l,o,r.epsilon),S=v=>{let b=it(t[0].dataType),T=d===1?"vec2f":`mat${d}x2f`,k=z=>{let R=z===0?"x":"y",P=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${b}(${P}(scale.${R}))`;case 2:return`vec2<${b}>(${P}(scale[0].${R}, scale[1].${R}))`;case 4:return`vec4<${b}>(${P}(scale[0].${R}, scale[1].${R}, scale[2].${R}, scale[3].${R}))`;default:throw new Error(`Not supported compoents ${d}`)}},C=j("input",t[0].dataType,t[0].dims,d),E=de("output",t[0].dataType,s,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:S},{inputs:[t[0],w]})},Mx=(e,t)=>{t.format==="NHWC"?r_(e,e.inputs,t):t_(e,e.inputs,t)}}),i_,a_,Dx,Zk=te(()=>{be(),Se(),Te(),i_=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},a_=(e,t,r)=>{let a=t.simplified,s=e[0].dims,i=e[1],o=!a&&e[2],l=s,d=G.normalizeAxis(t.axis,s.length),p=G.sizeToDimension(s,d),m=G.sizeFromDimension(s,d),g=G.size(i.dims),y=o?G.size(o.dims):0;if(g!==m||o&&y!==m)throw new Error(`Size of X.shape()[axis:] == ${m}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${g} and bias size of ${y}`);let _=[];for(let C=0;C<s.length;++C)C<d?_.push(s[C]):_.push(1);let $=He(m),w=["type","type"],S=[{type:12,data:p},{type:1,data:m},{type:12,data:Math.floor(m/$)},{type:1,data:t.epsilon}];o&&w.push("type");let v=r>1,b=r>2,T=C=>{let E=it(e[0].dataType),z=[j("x",e[0].dataType,e[0].dims,$),j("scale",i.dataType,i.dims,$)];o&&z.push(j("bias",o.dataType,o.dims,$)),z.push(de("output",e[0].dataType,l,$)),v&&z.push(de("mean_data_output",1,_)),b&&z.push(de("inv_std_output",1,_));let R=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(R).declareVariables(...z)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Wp("f32",$)};
    var mean_square_vector = ${Wp("f32",$)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ai(E,$,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Ir("mean_vector",$)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Ir("mean_square_vector",$)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ai(E,$,"x[j + offset]")};
      let f32scale = ${Ai(E,$,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Ai(E,$,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:l,dataType:e[0].dataType}];return v&&k.push({dims:_,dataType:1}),b&&k.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${$};${r};${a}`,inputDependencies:w},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:S}),getShaderSource:T}},Dx=(e,t)=>{i_(e.inputs),e.compute(a_(e.inputs,t,e.outputCount))}}),n_,Px,Xk=te(()=>{Se(),Qh(),Zh(),n_=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Px=e=>{n_(e.inputs);let t=Bi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(Kh(e.inputs,{activation:""},t));else{let s=t[t.length-2],i=G.size(e.inputs[0].dims.slice(0,-2)),o=G.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&s===1&&o===1){let l=e.inputs[0].reshape([1,i,a]),d=e.inputs[1].reshape([1,a,r]),p=[1,i,r],m=[l,d];e.compute(mo(m,{activation:""},t,p),{inputs:m})}else e.compute(mo(e.inputs,{activation:""},t))}}}),s_,o_,u_,Ux,Wx,Jk=te(()=>{be(),Se(),je(),Te(),s_=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let s=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,o=e[1];if(!G.areEqual(o.dims,[t.n,s,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(G.size(l)!==t.n*s)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*s:t.n*Math.floor((s+1)/2);if(G.size(d)!==p)throw new Error("zeroPoints input size error.")}},o_=(e,t)=>{let r=e[0].dims,a=r.length,s=r[a-2],i=t.k,o=t.n,l=r.slice(0,a-2),d=G.size(l),p=e[1].dims[2]/4,m=e[0].dataType,g=He(t.k),y=He(p),_=He(o),$=l.concat([s,o]),w=s>1&&o/_%2===0?2:1,S=G.size($)/_/w,v=64,b=[],T=[d,s,i/g],k=G.convertShape(e[1].dims).slice();k.splice(-1,1,p/y),b.push(...ye(T)),b.push(...ye(k)),b.push(...ye(e[2].dims)),e.length===4&&b.push(...ye(G.convertShape(e[3].dims)));let C=[d,s,o/_];b.push(...ye(C));let E=z=>{let R=T.length,P=j("a",e[0].dataType,R,g),q=j("b",12,k.length,y),X=j("scales",e[2].dataType,e[2].dims.length),ie=[P,q,X],K=e.length===4?j("zero_points",12,e[3].dims.length):void 0;K&&ie.push(K);let J=C.length,Z=de("output",e[0].dataType,J,_),W=it(e[0].dataType),oe=(()=>{switch(g){case 1:return`array<${W}, 8>`;case 2:return`mat4x2<${W}>`;case 4:return`mat2x4<${W}>`;default:throw new Error(`${g}-component is not supported.`)}})(),ce=()=>{let B=`
          // reuse a data
            var input_offset = ${P.indicesToOffset(`${P.type.indices}(batch, row, word_offset)`)};
            var a_data: ${oe};
            for (var j: u32 = 0; j < ${8/g}; j++) {
              a_data[j] = ${P.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let U=0;U<_*w;U++)B+=`
            b_value = ${y===1?`b${U}_data`:`b${U}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${oe}(${Array.from({length:4},(se,$e)=>`${W}(b_value_lower[${$e}]), ${W}(b_value_upper[${$e}])`).join(", ")});
            b_dequantized_values = ${g===1?`${oe}(${Array.from({length:8},(se,$e)=>`(b_quantized_values[${$e}] - ${K?`zero_point${U}`:"zero_point"}) * scale${U}`).join(", ")});`:`(b_quantized_values - ${oe}(${Array(8).fill(`${K?`zero_point${U}`:"zero_point"}`).join(",")})) * scale${U};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(U/_)}]${_>1?`[${U%_}]`:""} += ${Array.from({length:8/g},(se,$e)=>`${g===1?`a_data[${$e}] * b_dequantized_values[${$e}]`:`dot(a_data[${$e}], b_dequantized_values[${$e}])`}`).join(" + ")};
          `;return B},H=()=>{let B=`
            var col_index = col * ${_};
            ${K?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${W}(8);`}
            `;for(let U=0;U<_*w;U++)B+=`
            let scale${U} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${W}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return B},fe=()=>{let B=`col_index = col * ${_};`;for(let U=0;U<_*w;U++)B+=`
            let b${U}_data = ${q.getByIndices(`${q.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return B+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${oe};
            var b_dequantized_values: ${oe};`,B};return`
        var<workgroup> workgroup_shared: array<${Z.type.value}, ${w*v}>;
        ${z.declareVariables(...ie,Z)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${Z.offsetToIndices(`(global_idx / ${v}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/g};
            ${H()}
            for (var word: u32 = 0; word < ${p}; word += ${y}) {
              ${fe()}
              for (var i: u32 = 0; i < ${y}; i++) {
                ${ce()}
                word_offset += ${8/g};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${Z.type.value} = ${Z.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${Z.setByIndices(`${Z.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${g};${y};${_};${w};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:m}],dispatchGroup:{x:S},programUniforms:b}),getShaderSource:E}},u_=(e,t)=>{let r=e[0].dims,a=r.length,s=r[a-2],i=t.k,o=t.n,l=r.slice(0,a-2),d=G.size(l),p=e[1].dims[2]/4,m=e[0].dataType,g=He(t.k),y=He(p),_=l.concat([s,o]),$=128,w=o%8===0?8:o%4===0?4:1,S=$/w,v=S*y*8,b=v/g,T=v/t.blockSize,k=G.size(_)/w,C=[],E=[d,s,i/g],z=G.convertShape(e[1].dims).slice();z.splice(-1,1,p/y),C.push(...ye(E)),C.push(...ye(z)),C.push(...ye(e[2].dims)),e.length===4&&C.push(...ye(G.convertShape(e[3].dims)));let R=[d,s,o];C.push(...ye(R));let P=q=>{let X=E.length,ie=j("a",e[0].dataType,X,g),K=j("b",12,z.length,y),J=j("scales",e[2].dataType,e[2].dims.length),Z=[ie,K,J],W=e.length===4?j("zero_points",12,e[3].dims.length):void 0;W&&Z.push(W);let oe=R.length,ce=de("output",e[0].dataType,oe),H=it(e[0].dataType),fe=()=>{switch(g){case 1:return`
          let a_data0 = vec4<${H}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${H}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${H}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${H}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${g}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ie.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${ce.type.value}, ${S}>, ${w}>;
        ${q.declareVariables(...Z,ce)}
        ${q.mainStart([S,w,1])}
          let output_indices = ${ce.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${T} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${$})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ie.getByIndices(`${ie.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ie.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${T} + local_id.x;
            ${W?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${W.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${H}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${H}(8);`}
            let scale = ${J.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${K.getByIndices(`${K.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/g};
            for (var i: u32 = 0; i < ${y}; i++) {
              ${fe()}
              let b_value = ${y===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${H}>(${Array.from({length:4},(B,U)=>`${H}(b_value_lower[${U}]), ${H}(b_value_upper[${U}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${H}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(B,U)=>`${`dot(a_data${U}, b_dequantized_values[${U}])`}`).join(" + ")};
              word_offset += ${8/g};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${ce.type.value} = ${ce.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ce.setByIndices(`${ce.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${g};${y};${S};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:m}],dispatchGroup:{x:k},programUniforms:C}),getShaderSource:P}},Ux=(e,t)=>{s_(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(u_(e.inputs,t)):e.compute(o_(e.inputs,t))},Wx=e=>Me(e)}),l_,d_,p_,h_,c_,f_,m_,g_,qx,Yk=te(()=>{be(),Se(),Te(),l_=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},d_=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
            k = i32(${e.indicesGet("indices",s)}) - ${he("uniforms.pads",s,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${he("uniforms.x_shape",s,t)})) {
              break;
            }
            offset += k * i32(${he("uniforms.x_strides",s,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},p_=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${he("uniforms.pads",s,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${he("uniforms.x_shape",s,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${he("uniforms.x_shape",s,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${he("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},h_=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${he("uniforms.pads",s,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${he("uniforms.x_shape",s,t)})) {
                  k = i32(${he("uniforms.x_shape",s,t)}) - 1;
                }
                offset += k * i32(${he("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},c_=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${he("uniforms.pads",s,r)};
                if (k < 0)  {
                  k += i32(${he("uniforms.x_shape",s,t)}]);
                }
                if (k >= i32(${he("uniforms.x_shape",s,t)})) {
                  k -= i32(${he("uniforms.x_shape",s,t)});
                }
                offset += k * i32(${he("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},f_=(e,t,r)=>{switch(r.mode){case 0:return d_(e,t,r.pads.length);case 1:return p_(e,t,r.pads.length);case 2:return h_(e,t,r.pads.length);case 3:return c_(e,t,r.pads.length);default:throw new Error("Invalid mode")}},m_=(e,t)=>{let r=G.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,s=G.size(r),i=[{type:12,data:s},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&i.push({type:o?e[2].dataType:1,data:t.value}),i.push(...ye(e[0].dims,r));let l=["rank"],d=p=>{let m=de("output",e[0].dataType,r.length),g=j("x",e[0].dataType,a.length),y=g.type.value,_=f_(m,a.length,t),$=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&$.push({name:"constant_value",type:o?y:"f32"}),`
            ${p.registerUniforms($).declareVariables(g,m)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${m.offsetToIndices("global_idx")};

            var value = ${y}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(G.size(r)/64)},programUniforms:i}),getShaderSource:d}},g_=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,s=e[0].dims.length,i=new Int32Array(2*s).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)i[Number(l[d])]=Number(r[d]),i[Number(l[d])+s]=Number(r[d+l.length])}else r.forEach((l,d)=>i[Number(d)]=Number(l));let o=[];return i.forEach(l=>o.push(l)),{mode:t.mode,value:a,pads:o}}else return t},qx=(e,t)=>{l_(e.inputs);let r=g_(e.inputs,t);e.compute(m_(e.inputs,r),{inputs:[0]})}}),as,np,sp,op,up,y_,__,lp,dp,Vx,Lx,pp,Gx,Hx,hp,Fx,jx,Kx,Qx,eT=te(()=>{ir(),be(),Se(),Te(),as=e=>{if(We.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},np=(e,t,r)=>{let a=t.format==="NHWC",s=e.dims.slice();a&&s.splice(1,0,s.pop());let i=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),l=t.strides.slice(),d=i?t.dilations.slice():[],p=t.pads.slice();co.adjustPoolAttributes(r,s,o,l,d,p);let m=co.computePoolOutputShape(r,s,l,d,o,p,t.autoPad),g=Object.assign({},t);i?Object.assign(g,{kernelShape:o,strides:l,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(g,{kernelShape:o,strides:l,pads:p,cacheKey:t.cacheKey});let y=m.slice();return y.push(y.splice(1,1)[0]),[g,a?y:m]},sp=(e,t)=>{let r=t.format==="NHWC",a=G.size(e),s=G.size(t.kernelShape),i=[{type:12,data:a},{type:12,data:s}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],m=t.pads[t.pads.length-1],g=!!(p+m);i.push({type:12,data:l},{type:12,data:d},{type:12,data:p},{type:12,data:m}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let y=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],$=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];y=!!(w+S),i.push({type:12,data:_},{type:12,data:$},{type:12,data:w},{type:12,data:S}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,o,!0,g,y]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=G.computeStrides(t.kernelShape);i.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,m)=>p+m);return[i,o,!!d,!1,!1]}},op=(e,t,r,a,s,i,o,l,d,p,m,g)=>{let y=s.format==="NHWC",_=t.type.value,$=de("output",t.type.tensor,a);if(s.kernelShape.length<=2){let w="",S="",v="",b=r-(y?2:1);if(m?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,s.kernelShape.length===2){let T=r-(y?3:2);g?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var value = ${_}(${l});
              var pad = 0;
              ${S}
              ${w}
              ${v}
              ${o}

              output[global_idx] = value;
            }`}else{if(y)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=s.kernelShape.length,S=s.pads.length,v="";return p?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(d).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${_}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${he("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${he("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${he("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${he("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${o}

              output[global_idx] = value;
            }`}},up=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,y_=e=>`${up(e)};${e.countIncludePad}`,__=e=>`${up(e)};${e.storageOrder};${e.dilations}`,lp=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),dp=(e,t,r,a)=>{let[s,i]=np(t,a,r),o=j("x",t.dataType,t.dims.length),l=o.type.value,d="value += x_val;",p="";s.countIncludePad?p+=`value /= ${l}(uniforms.kernelSize);`:p+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[m,g,y,_,$]=sp(i,s);m.push(...ye(t.dims,i));let w=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${y};${_};${$}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(G.size(i)/64)},programUniforms:m}),getShaderSource:S=>op(S,o,t.dims.length,i.length,s,d,p,0,g,y,_,$)}},Vx=e=>{let t=e.count_include_pad!==0,r=lp(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:y_(a)}},Lx=(e,t)=>{as(e.inputs),e.compute(dp("AveragePool",e.inputs[0],!1,t))},pp={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Gx=e=>{let t=e.format;return{format:t,...pp,cacheKey:t}},Hx=(e,t)=>{as(e.inputs),e.compute(dp("GlobalAveragePool",e.inputs[0],!0,t))},hp=(e,t,r,a)=>{let[s,i]=np(t,a,r),o=`
      value = max(x_val, value);
    `,l="",d=j("x",t.dataType,t.dims.length),p=["rank"],[m,g,y,_,$]=sp(i,s);return m.push(...ye(t.dims,i)),{name:e,shaderCache:{hint:`${a.cacheKey};${y};${_};${$}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(G.size(i)/64)},programUniforms:m}),getShaderSource:w=>op(w,d,t.dims.length,i.length,s,o,l,t.dataType===10?-65504:-1e5,g,y,_,$)}},Fx=(e,t)=>{as(e.inputs),e.compute(hp("MaxPool",e.inputs[0],!1,t))},jx=e=>{let t=e.storage_order,r=e.dilations,a=lp(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let s={storageOrder:t,dilations:r,...a,cacheKey:""};return{...s,cacheKey:__(s)}},Kx=e=>{let t=e.format;return{format:t,...pp,cacheKey:t}},Qx=(e,t)=>{as(e.inputs),e.compute(hp("GlobalMaxPool",e.inputs[0],!0,t))}}),$_,w_,Zx,Xx,tT=te(()=>{be(),Se(),je(),Te(),$_=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((s,i)=>i===t.axis||s===e[0].dims[i]).reduce((s,i)=>s&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},w_=(e,t)=>{let r=G.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,s=a===3,i=e[0].dims,o=e[1].dataType,l=G.size(i),d=a===3||a===2,p=d?[Math.ceil(G.size(e[0].dims)/4)]:e[0].dims,m=e[1].dims,g=e.length>2?e[2]:void 0,y=g?d?[Math.ceil(G.size(g.dims)/4)]:g.dims:void 0,_=m.length===0||m.length===1&&m[0]===1,$=_===!1&&m.length===1,w=He(l),S=_&&(!d||w===4),v=S?w:1,b=S&&!d?w:1,T=j("input",d?12:a,p.length,b),k=j("scale",o,m.length),C=g?j("zero_point",d?12:a,y.length):void 0,E=de("output",o,i.length,v),z=[T,k];C&&z.push(C);let R=[p,m];g&&R.push(y);let P=[{type:12,data:l/v},{type:12,data:r},{type:12,data:t.blockSize},...ye(...R,i)],q=X=>{let ie=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(ie).declareVariables(...z,E)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${s?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${k.getByOffset("0")}`:$?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?_?d?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:$?d?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${d?s?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:q,getRunData:()=>({outputs:[{dims:i,dataType:o}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:P})}},Zx=(e,t)=>{$_(e.inputs,t),e.compute(w_(e.inputs,t))},Xx=e=>Me({axis:e.axis,blockSize:e.blockSize})}),b_,v_,Jx,rT=te(()=>{ir(),be(),Te(),b_=(e,t,r)=>{let a=e===t,s=e<t&&r<0,i=e>t&&r>0;if(a||s||i)throw new Error("Range these inputs' contents are invalid.")},v_=(e,t,r,a)=>{let s=Math.abs(Math.ceil((t-e)/r)),i=[s],o=s,l=[{type:12,data:o},{type:a,data:e},{type:a,data:r},...ye(i)],d=p=>{let m=de("output",a,i.length),g=m.type.value,y=[{name:"outputSize",type:"u32"},{name:"start",type:g},{name:"delta",type:g}];return`
        ${p.registerUniforms(y).declareVariables(m)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${g}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l})}},Jx=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),We.webgpu.validateInputContent&&b_(t,r,a),e.compute(v_(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),x_,S_,Yx,e3,iT=te(()=>{be(),Se(),je(),Te(),x_=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let s=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${s}bitcast<${a}>(oldValue) + (${r})${i}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${s}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${s}min(bitcast<${a}>(oldValue), (${r}))${i}`;case"mul":return`${s}(bitcast<${a}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},S_=(e,t)=>{let r=e[0].dims,a=e[1].dims,s=r,i=1,o=Math.ceil(G.size(a)/i),l=a[a.length-1],d=G.sizeFromDimension(r,l),p=[{type:12,data:o},{type:12,data:l},{type:12,data:d},...ye(e[1].dims,e[2].dims,s)],m=g=>{let y=j("indices",e[1].dataType,e[1].dims.length),_=j("updates",e[2].dataType,e[2].dims.length,i),$=t.reduction!=="none"&&t.reduction!==""?zv("output",e[0].dataType,s.length):de("output",e[0].dataType,s.length,i);return`
      ${g.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(y,_,$)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${G.size(a)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${x_(t.reduction,"output[data_offset + i]","value",$.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:m}},Yx=e=>Me({reduction:e.reduction}),e3=(e,t)=>{e.compute(S_(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),k_,T_,C_,cp,I_,E_,z_,A_,O_,R_,B_,N_,fp,M_,D_,P_,U_,W_,t3,r3,aT=te(()=>{be(),Se(),je(),Te(),k_=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},T_=(e,t,r)=>{t.every(s=>s>=0&&s<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((s,i)=>a[s]=e[i]),a},C_=(e,t,r,a,s,i)=>{let[o,l,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(m=>i.push(m));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(m=>a.push(m)),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");k_(a,t),t.axes.length>0&&T_(a,t.axes,p).forEach((m,g)=>a[g]=m)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(m=>s.push(Number(m))),s.length!==0&&s.length!==p&&r>=18&&s.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof s<"u"&&a.length>0&&s.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},cp=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,I_=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${cp("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${cp("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",E_=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",z_=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),s=e.length===0?a:e.slice();return t.length>0?(t.forEach((i,o)=>{a[i]=s[o],a[o+r]=s[t.length+o]}),a):s},A_=(e,t,r,a)=>{let s=[];if(r.length>0)if(a.length>0){if(e.forEach(i=>s.push(i)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((i,o)=>s[i]=r[o])}else r.forEach(i=>s.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");s=e.map((i,o)=>Math.round(i*t[o]))}return s},O_=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let s=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=a),r.axes.forEach(i=>s[i]=Math.round(e[i]*t[i]))):(t.fill(a,0,t.length),s.forEach((i,o)=>s[o]=Math.round(i*t[o]))),s},R_=(e,t,r,a,s)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${he("uniforms.scales","i",a)};
        var roi_low = ${he("uniforms.roi","i",s)};
        var roi_hi = ${he("uniforms.roi",`i + ${t.length}`,s)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${he("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${he("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,B_=(e,t,r,a,s,i,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${he("uniforms.scales","i",s)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${he("uniforms.roi","i",i)};
          var roi_hi = ${he("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${he("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${he("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,N_=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${he("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,fp=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",M_=(e,t,r,a,s)=>{let[i,o,l,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${fp(e,d,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${o}];
      var col:${p} = originalIndices[${l}];
      ${a?`if (row < 0 || row > (${r[o]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${s};
      }`:""};
      row = max(0, min(row, ${r[o]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},D_=(e,t,r,a,s,i,o,l,d,p)=>{let m=r.length===2,[g,y]=m?[0,1]:[2,3],_=e.type.value,$=w=>{let S=w===g?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${s[w]},
        ${a[w]}, ${r[w]}, ${i[w]}, ${i[w]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${d};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${_} = originalIdx + ${_}(i);
          if (${S} < 0 || ${S} >= ${r[w]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${S} = max(0, min(${S}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${S})`)};
          data[i + 1] = ${w===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(g)};
    ${$(y)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},P_=(e,t,r,a,s)=>{let[i,o,l,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],m=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${m} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${fp(e,p,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${m} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${m} = originalIndices[${o}];
      var height:${m} = originalIndices[${l}];
      var width:${m} = originalIndices[${d}];
      ${a?`if (depth < 0 || depth > (${r[o]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${s};
        }`:""};

    depth = max(0, min(depth, ${r[o]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${m} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${m} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${m} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${m} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${m} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${m} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${m} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${m} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${m} = abs(depth - ${m}(depth1));
      var dx2: ${m} = abs(${m}(depth2) - depth);
      var dy1: ${m} = abs(height - ${m}(height1));
      var dy2: ${m} = abs(${m}(height2) - height);
      var dz1: ${m} = abs(width - ${m}(width1));
      var dz2: ${m} = abs(${m}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},U_=(e,t,r,a,s,i)=>{let o=e.dims,l=z_(i,t.axes,o.length),d=A_(o,a,s,t.axes),p=a.slice();a.length===0&&(p=o.map((b,T)=>b===0?1:d[T]/b),t.keepAspectRatioPolicy!=="stretch"&&(d=O_(o,p,t)));let m=de("output",e.dataType,d.length),g=j("input",e.dataType,o.length),y=G.size(d),_=o.length===d.length&&o.every((b,T)=>b===d[T]),$=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,S=g.type.value,v=b=>`
      ${_?"":`
      ${I_(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${N_(g,o)};
              ${E_(t.nearestMode,r,S)};
              ${B_(g,m,o,d,p.length,l.length,$)};
              `;case"linear":return`
              ${R_(m,o,d,p.length,l.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${M_(g,m,o,$,w)}`;if(o.length===3||o.length===5)return`${P_(g,m,o,$,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${D_(g,m,o,d,p,l,t.cubicCoeffA,$,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",l.length).declareVariables(g,m)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${m.offsetToIndices("global_idx")};
        var input_indices: ${g.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${g.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${s.length>0?s:""}|${l.length>0?l:""}|${_}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},{type:1,data:p},{type:1,data:l},...ye(o,d)]})}},W_=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},t3=(e,t)=>{let r=[],a=[],s=[],i=W_(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");C_(e.inputs,t,i,r,a,s),e.compute(U_(e.inputs[0],t,i,r,a,s),{inputs:[0]})},r3=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,s=e.cubicCoeffA,i=e.excludeOutside!==0,o=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return Me({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:s,excludeOutside:i,extrapolationValue:o,keepAspectRatioPolicy:l,mode:d,nearestMode:p})}}),q_,V_,i3,nT=te(()=>{be(),Se(),je(),Te(),q_=(e,t)=>{let[r,a,s,i]=e,{numHeads:o,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!G.areEqual(a.dims,[])&&!G.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!G.areEqual(s.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],m=s.dims[0],g=G.sizeFromDimension(r.dims,1)/p,y=l===0?s.dims[1]*2:g/o;if(l>y)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(d!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(p!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(y/2!==s.dims[1]&&l/2!==s.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${s.dims[1]}`);if(p>m)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},V_=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:s,scale:i}=t,o=e[0].dims[0],l=G.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=l/d,m=e[2].dims[1],g=s===0?m*2:p/a,y=new Array(o,d,p/g,g-m),_=G.computeStrides(y),$=[{type:1,data:i},{type:12,data:y},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[l,p,g,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,g,d*g,1]}):[],...ye(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=S=>{let v=j("input",e[0].dataType,e[0].dims.length),b=j("position_ids",e[1].dataType,e[1].dims.length),T=j("cos_cache",e[2].dataType,e[2].dims.length),k=j("sin_cache",e[3].dataType,e[3].dims.length),C=de("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:y.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables(v,b,T,k,C)}

        ${S.mainStart(Ni)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",de("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Me({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(G.size(y)/Ni)},programUniforms:$})}},i3=(e,t)=>{q_(e.inputs,t),e.compute(V_(e.inputs,t))}}),L_,G_,a3,sT=te(()=>{be(),Se(),Te(),L_=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let s=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==s)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==s)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==s)throw new Error("Bias must have the same hidden size as input")}},G_=(e,t,r,a)=>{let s=t.simplified,i=e[0].dims,o=G.size(i),l=i,d=o,p=i.slice(-1)[0],m=a?i.slice(0,-1).concat(1):[],g=!s&&e.length>3,y=e.length>4,_=a&&r>1,$=a&&r>2,w=r>3,S=64,v=He(p),b=[{type:12,data:d},{type:12,data:v},{type:12,data:p},{type:1,data:t.epsilon}],T=C=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[j("x",e[0].dataType,e[0].dims,v),j("skip",e[1].dataType,e[1].dims,v),j("gamma",e[2].dataType,e[2].dims,v)];g&&z.push(j("beta",e[3].dataType,e[3].dims,v)),y&&z.push(j("bias",e[4].dataType,e[4].dims,v)),z.push(de("output",e[0].dataType,l,v)),_&&z.push(de("mean_output",1,m)),$&&z.push(de("inv_std_output",1,m)),w&&z.push(de("input_skip_bias_sum",e[0].dataType,l,v));let R=it(e[0].dataType),P=it(1,v);return`

      ${C.registerUniforms(E).declareVariables(...z)}
      var<workgroup> sum_shared : array<${P}, ${S}>;
      var<workgroup> sum_squared_shared : array<${P}, ${S}>;

      ${C.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${y?"bias[offset1d + i]":R+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ai(R,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Ir("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Ir("square_sum",v)} / f32(uniforms.hidden_size) ${s?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${$?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${s?"":`- ${R}(mean)`}) *
            ${R}(inv_std_dev) * gamma[offset1d + i]
            ${g?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:l,dataType:e[0].dataType}];return r>1&&k.push({dims:m,dataType:1}),r>2&&k.push({dims:m,dataType:1}),r>3&&k.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${_};${$};${w}`,inputDependencies:e.map((C,E)=>"type")},getShaderSource:T,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:b})}},a3=(e,t)=>{L_(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(G_(e.inputs,t,e.outputCount,!1),{outputs:r})}}),H_,ns,F_,mp,j_,K_,n3,s3,oT=te(()=>{be(),Se(),je(),Te(),H_=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},ns=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},F_=(e,t)=>{if(e.length>1){let r=ns(e,1),a=ns(e,2),s=ns(e,3);return s.length===0&&(s=[...Array(e[0].dims.length).keys()]),Me({starts:r,ends:a,axes:s})}else return t},mp=(e,t,r,a,s)=>{let i=e;return e<0&&(i+=r[a[t]]),s[t]<0?Math.max(0,Math.min(i,r[a[t]]-1)):Math.max(0,Math.min(i,r[a[t]]))},j_=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${he("uniforms.input_shape","i",r.length)};
            let steps_i = ${he("uniforms.steps","i",r.length)};
            let signs_i = ${he("uniforms.signs","i",r.length)};
            let starts_i = ${he("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,K_=(e,t)=>{let r=e[0].dims,a=G.size(r),s=t.axes.length>0?G.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=ns(e,4);i.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(s.length).fill(1));let o=t.starts.map((v,b)=>mp(v,b,r,s,i)),l=t.ends.map((v,b)=>mp(v,b,r,s,i));if(s.length!==o.length||s.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(s.length!==r.length)for(let v=0;v<r.length;++v)s.includes(v)||(o.splice(v,0,0),l.splice(v,0,r[v]),i.splice(v,0,1));let d=i.map(v=>Math.sign(v));i.forEach((v,b,T)=>{if(v<0){let k=(l[b]-o[b])/v,C=o[b],E=C+k*i[b];o[b]=E,l[b]=C,T[b]=-v}});let p=r.slice(0);s.forEach((v,b)=>{p[v]=Math.ceil((l[v]-o[v])/i[v])});let m={dims:p,dataType:e[0].dataType},g=de("output",e[0].dataType,p.length),y=j("input",e[0].dataType,e[0].dims.length),_=G.size(p),$=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:i.length}],w=[{type:12,data:_},{type:12,data:o},{type:6,data:d},{type:12,data:i},...ye(e[0].dims,p)],S=v=>`
      ${v.registerUniforms($).declareVariables(y,g)}
        ${j_(y,g,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${g.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${g.setByOffset("global_idx",y.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${o.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[m],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:w})}},n3=(e,t)=>{H_(e.inputs,t);let r=F_(e.inputs,t);e.compute(K_(e.inputs,r),{inputs:[0]})},s3=e=>{let t=e.starts,r=e.ends,a=e.axes;return Me({starts:t,ends:r,axes:a})}}),Q_,Z_,o3,u3,uT=te(()=>{be(),Se(),je(),zr(),Te(),Q_=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Z_=(e,t)=>{let r=e.inputs[0],a=r.dims,s=G.size(a),i=a.length,o=G.normalizeAxis(t.axis,i),l=o<a.length-1,d,p=[];l?(p=Array.from({length:i},(z,R)=>R),p[o]=i-1,p[i-1]=o,d=e.compute(zt(r,p),{inputs:[r],outputs:[-1]})[0]):d=r;let m=d.dims,g=m[i-1],y=s/g,_=He(g),$=g/_,w=64;y===1&&(w=256);let S=(z,R)=>R===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:R===2?`max(${z}.x, ${z}.y)`:R===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=j("x",d.dataType,d.dims,_),b=de("result",d.dataType,d.dims,_),T=v.type.value,k=it(d.dataType)==="f32"?`var threadMax = ${T}(-3.402823e+38f);`:`var threadMax = ${T}(-65504.0h);`,C=z=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(v,b)}
      ${z.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${S("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${Ir("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${_};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:m,dataType:d.dataType}],dispatchGroup:{x:y},programUniforms:[{type:6,data:$}]}),getShaderSource:C},{inputs:[d],outputs:[l?-1:0]})[0];l&&e.compute(zt(E,p),{inputs:[E]})},o3=(e,t)=>{Q_(e.inputs),Z_(e,t)},u3=e=>Me({axis:e.axis})}),gp,X_,J_,Y_,l3,lT=te(()=>{be(),Se(),Te(),gp=e=>Array.from(e.getBigInt64Array(),Number),X_=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(gp(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},J_=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Y_=(e,t)=>{let r=e[0].dims,a=t??gp(e[1]),s=J_(r,a),i=G.size(s),o=e[0].dataType,l=j("input",o,r.length),d=de("output",o,s.length),p=m=>`
      const inputShape = ${l.indices(...r)};
      ${m.registerUniform("output_size","u32").declareVariables(l,d)}
      ${m.mainStart()}
      ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...ye(e[0].dims,s)]}),getShaderSource:p}},l3=e=>{X_(e.inputs),e.compute(Y_(e.inputs),{inputs:[0]})}}),e$,t$,d3,dT=te(()=>{be(),Se(),Te(),e$=(e,t,r,a,s)=>{let i=de("output_data",s,r.length,4),o=j("a_data",t[1].dataType,t[1].dims.length,4),l=j("b_data",t[2].dataType,t[2].dims.length,4),d=j("c_data",t[0].dataType,t[0].dims.length,4),p,m=(g,y,_)=>`select(${y}, ${g}, ${_})`;if(!a)p=i.setByOffset("global_idx",m(o.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let g=(y,_,$="")=>{let w=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,v=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${i.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${o.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_b${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_c${_} = ${d.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${y}[${_}] = ${$}(${m(w,S,v)});
          `};s===9?p=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${g("output_data[global_idx]",0)}
            ${g("output_data[global_idx]",1)}
            ${g("output_data[global_idx]",2)}
            ${g("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,o,l,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},t$=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,s=e[1].dataType,i=!(G.areEqual(t,r)&&G.areEqual(r,a)),o=t,l=G.size(t);if(i){let p=Bi.calcShape(Bi.calcShape(t,r,!1),a,!1);if(!p)throw new Error("Can't perform where op on the given tensors");o=p,l=G.size(o)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>e$(p,e,o,i,s),getRunData:()=>({outputs:[{dims:o,dataType:s}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...ye(a,t,r,o)]})}},d3=e=>{e.compute(t$(e.inputs))}}),p3,pT=te(()=>{Sk(),Gh(),kk(),Tk(),Ck(),Ik(),Ek(),Bk(),Mk(),Dk(),Pk(),Uk(),Wk(),qk(),Vk(),Lk(),Gk(),Hk(),Fk(),jk(),Kk(),Qk(),Zk(),Xk(),Jk(),Ax(),Yk(),eT(),tT(),rT(),iT(),Lh(),aT(),nT(),sT(),oT(),uT(),Bx(),lT(),zr(),Hh(),dT(),p3=new Map([["Abs",[n2]],["Acos",[s2]],["Acosh",[o2]],["Add",[q2]],["ArgMax",[t2,Vp]],["ArgMin",[e2,Vp]],["Asin",[u2]],["Asinh",[l2]],["Atan",[d2]],["Atanh",[p2]],["Attention",[r2]],["AveragePool",[Lx,Vx]],["BatchNormalization",[i2]],["BiasAdd",[a2]],["BiasSplitGelu",[W2]],["Cast",[c2,h2]],["Ceil",[m2]],["Clip",[f2]],["Concat",[X2,J2]],["Conv",[Kp,jp]],["ConvTranspose",[ux,ox]],["Cos",[g2]],["Cosh",[y2]],["CumSum",[lx,dx]],["DepthToSpace",[px,hx]],["DequantizeLinear",[Zx,Xx]],["Div",[V2]],["Einsum",[cx,fx]],["Elu",[_2,fs]],["Equal",[L2]],["Erf",[$2]],["Exp",[w2]],["Expand",[mx]],["FastGelu",[gx]],["Floor",[b2]],["FusedConv",[Kp,jp]],["Gather",[_x,yx]],["GatherElements",[Sx,xx]],["GatherBlockQuantized",[bx,vx]],["GatherND",[$x,wx]],["Gelu",[v2]],["Gemm",[Tx,kx]],["GlobalAveragePool",[Hx,Gx]],["GlobalMaxPool",[Qx,Kx]],["Greater",[j2]],["GreaterOrEqual",[Q2]],["GridSample",[Cx,Ix]],["GroupQueryAttention",[Nx]],["HardSigmoid",[z2,E2]],["InstanceNormalization",[Mx]],["LayerNormalization",[Dx]],["LeakyRelu",[x2,fs]],["Less",[K2]],["LessOrEqual",[Z2]],["Log",[P2]],["MatMul",[Px]],["MatMulNBits",[Ux,Wx]],["MaxPool",[Fx,jx]],["Mul",[G2]],["MultiHeadAttention",[zx,Ex]],["Neg",[k2]],["Not",[S2]],["Pad",[qx]],["Pow",[H2]],["QuickGelu",[U2,fs]],["Range",[Jx]],["Reciprocal",[T2]],["ReduceMin",[Qv]],["ReduceMean",[Gv]],["ReduceMax",[Kv]],["ReduceSum",[Xv]],["ReduceProd",[Zv]],["ReduceL1",[Hv]],["ReduceL2",[Fv]],["ReduceLogSum",[Yv]],["ReduceLogSumExp",[jv]],["ReduceSumSquare",[Jv]],["Relu",[C2]],["Resize",[t3,r3]],["RotaryEmbedding",[i3]],["ScatterND",[e3,Yx]],["Sigmoid",[I2]],["Sin",[A2]],["Sinh",[O2]],["Slice",[n3,s3]],["SkipLayerNormalization",[a3]],["Split",[Ox,Rx]],["Sqrt",[R2]],["Softmax",[o3,u3]],["Sub",[F2]],["Tan",[B2]],["Tanh",[N2]],["ThresholdedRelu",[D2,fs]],["Tile",[l3]],["Transpose",[Ov,Rv]],["Where",[d3]]])}),h3,hT=te(()=>{ir(),wr(),Te(),h3=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,s){tr(e.programInfo.name);let i=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let p of t)l.push({binding:l.length,resource:{buffer:p.buffer}});for(let p of r)l.push({binding:l.length,resource:{buffer:p.buffer}});s&&l.push({binding:l.length,resource:s});let d=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}o.setPipeline(e.computePipeline),o.setBindGroup(0,d),o.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Bt(e.programInfo.name)}dispose(){}build(e,t){tr(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(p=>{r.features.has(p.feature)&&a.push(`enable ${p.extension};`)});let s=Av(t,this.backend.device.limits),i=e.getShaderSource(s),o=`${a.join(`
`)}
${s.additionalImplementations}
${i}`,l=r.createShaderModule({code:o,label:e.name});ze("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let d=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Bt(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:s.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,s=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=s&&r<=s&&a<=s)return[t,r,a];let i=t*r*a,o=Math.ceil(Math.sqrt(i));if(o>s){if(o=Math.ceil(Math.cbrt(i)),o>s)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),r$,i$,a$,n$,c3,cT=te(()=>{ir(),be(),wr(),kv(),vk(),pT(),hT(),r$=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let s=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${s}`);break}case"rank":{let i=e[a].dims.length;r.push(`${s};${i}`);break}case"dims":{let i=e[a].dims.join(",");r.push(`${s};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},i$=(e,t,r)=>{var s,i;let a=e.name;return(s=e.shaderCache)!=null&&s.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${r$(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,a},a$=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},n$=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},c3=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},s=i=>t.features.has(i)&&r.push(i)&&!0;s("chromium-experimental-timestamp-query-inside-passes")||s("timestamp-query"),s("shader-f16"),s("subgroups")&&s("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new n$(this.device),this.adapterInfo=new a$(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Tv(this),this.programManager=new h3(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Uh(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;tr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let s=0;s<t.length/2;s++){let i=r[s],o=i.kernelId,l=this.kernels.get(o),d=l.kernelType,p=l.kernelName,m=i.programName,g=i.inputTensorViews,y=i.outputTensorViews,_=t[s*2],$=t[s*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let w=Number(_-this.queryTimeBase),S=Number($-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:g.map(v=>({dims:v.dims,dataType:hi(v.dataType)})),outputsMetadata:y.map(v=>({dims:v.dims,dataType:hi(v.dataType)})),kernelId:o,kernelType:d,kernelName:p,programName:m,startTime:w,endTime:S});else{let v="";g.forEach((T,k)=>{v+=`input[${k}]: [${T.dims}] | ${hi(T.dataType)}, `});let b="";y.forEach((T,k)=>{b+=`output[${k}]: [${T.dims}] | ${hi(T.dataType)}, `}),console.log(`[profiling] kernel "${o}|${d}|${p}|${m}" ${v}${b}execution time: ${S-w} ns`)}ws("GPU",`${m}::${_}::${$}`)}e.unmap(),this.pendingQueries.delete(e)}),Bt()}run(e,t,r,a,s,i){tr(e.name);let o=[];for(let b=0;b<t.length;++b){let T=t[b].data;if(T===0)continue;let k=this.gpuDataManager.get(T);if(!k)throw new Error(`no GPU data for input: ${T}`);o.push(k)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),m=r.length===0?l.map((b,T)=>T):r;if(m.length!==l.length)throw new Error(`Output size ${m.length} must be equal to ${l.length}.`);let g=[],y=[];for(let b=0;b<l.length;++b){if(!Number.isInteger(m[b])||m[b]<-3||m[b]>=i)throw new Error(`Invalid output index: ${m[b]}`);if(m[b]===-3)continue;let T=m[b]===-1,k=m[b]===-2,C=T||k?s(l[b].dataType,l[b].dims):a(m[b],l[b].dataType,l[b].dims);if(g.push(C),C.data===0)continue;let E=this.gpuDataManager.get(C.data);if(!E)throw new Error(`no GPU data for output: ${C.data}`);if(T&&this.temporaryData.push(E),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(E)}y.push(E)}if(o.length!==t.length||y.length!==g.length){if(y.length===0)return Bt(e.name),g;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(p){let b=0,T=[];p.forEach(z=>{let R=typeof z.data=="number"?[z.data]:z.data;if(R.length===0)return;let P=z.type===10?2:4,q,X;z.type===10?(X=R.length>4?16:R.length>2?8:R.length*P,q=R.length>4?16:P*R.length):(X=R.length<=2?R.length*P:16,q=16),b=Math.ceil(b/X)*X,T.push(b);let ie=z.type===10?8:4;b+=R.length>4?Math.ceil(R.length/ie)*q:R.length*P});let k=16;b=Math.ceil(b/k)*k;let C=new ArrayBuffer(b);p.forEach((z,R)=>{let P=T[R],q=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(C,P,q.length).set(q);else if(z.type===12)new Uint32Array(C,P,q.length).set(q);else if(z.type===10)new Uint16Array(C,P,q.length).set(q);else if(z.type===1)new Float32Array(C,P,q.length).set(q);else throw new Error(`Unsupported uniform type: ${hi(z.type)}`)});let E=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,C,0,b),this.gpuDataManager.release(E.id),_={offset:0,size:b,buffer:E.buffer}}let $=this.programManager.normalizeDispatchGroupSize(d),w=$[1]===1&&$[2]===1,S=i$(e,t,w),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,$),this.programManager.setArtifact(S,v),ze("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),p&&v.uniformVariablesInfo){if(p.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${p.length} in program "${v.programInfo.name}".`);for(let b=0;b<p.length;b++){let T=p[b],k=T.type,C=typeof T.data=="number"?1:T.data.length,[E,z]=v.uniformVariablesInfo[b];if(k!==E||C!==z)throw new Error(`Uniform variable ${b} mismatch: expect type ${E} with size ${z}, got type ${k} with size ${C} in program "${v.programInfo.name}".`)}}if(ze("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${$[0]}x${$[1]}x${$[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:g};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,o,y,$,_),Bt(e.name),g}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let s=p3.get(e);if(!s)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:a,kernelEntry:s[0],attributes:[s[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let s=a.kernelType,i=a.kernelName,o=a.kernelEntry,l=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${s}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),ze("info",()=>`[WebGPU] Start to run kernel "[${s}] ${i}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),o(t,l[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${s}] ${i}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${s}] ${i}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let s=this.sessionExternalDataMapping.get(e);s||(s=new Map,this.sessionExternalDataMapping.set(e,s));let i=s.get(t),o=this.gpuDataManager.registerExternalBuffer(r,a,i);return s.set(t,[o,r]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await Up(this,e,t);return Wh(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ze("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ze("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ze("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let s=this.getComputePassEncoder(),i=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),s.setPipeline(i.computePipeline),s.setBindGroup(0,i.bindGroup),s.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),s$,yp,o$,_p,$p,wp,u$,f3,fT=te(()=>{wr(),s$=1,yp=()=>s$++,o$=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),_p=(e,t)=>{let r=o$.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,s)=>a*s)*r/8):0},$p=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return _p(this.dataType,this.tensorShape)}destroy(){ze("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,s)=>a===r[s])}},wp=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let s=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(s,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==_p(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,i,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else ze("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},u$=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=yp();return this.tensorTrackersById.set(e,new wp(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,s){ze("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${s}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,a,s)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ze("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let s=this.getMLContext(e),i=yp(),o=new $p({sessionId:e,context:s,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new wp(this,o)),this.externalTensors.add(o),i}async getCachedTensor(e,t,r,a,s,i){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){ze("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let m=this.freeTensors.splice(d,1)[0];return m.sessionId=e,m}ze("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let l=await o.createTensor({dataType:t,shape:r,dimensions:r,usage:a,writable:s,readable:i});return new $p({sessionId:e,context:o,tensor:l,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},f3=(...e)=>new u$(...e)}),Ks,l$,m3,mT=te(()=>{be(),Si(),kv(),fT(),wr(),Ks=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),l$=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((s,i)=>s===a[i]&&e[s]===t[s])},m3=class{constructor(e){this.tensorManager=f3(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Uh(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ze("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ze("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ze("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>l$(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(s=>s.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ze("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,s){let i=Ks.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,a,s)}async createTemporaryTensor(e,t,r){ze("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=Ks.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let s=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,s,a,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(s):this.temporarySessionTensorIds.set(e,[s]),s}uploadTensor(e,t){if(!tt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ze("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Wh(r,t)}}registerMLTensor(e,t,r,a){let s=Ks.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,s,a);return ze("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${s}, dimensions: ${a}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,s,i){if(!i)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=i.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,p;switch(s.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${s.dataType} in creating WebNN Constant from external data.`)}return ze("verbose",()=>`[WebNN] registerMLConstant {dataType: ${s.dataType}, shape: ${s.shape}}}`),a.constant(s,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),g3={};xs(g3,{init:()=>y3});var Qs,d$,y3,gT=te(()=>{be(),cT(),wr(),Se(),mT(),Qs=class _3{constructor(t,r,a,s){this.module=t,this.dataType=r,this.data=a,this.dims=s}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(G.size(t)!==G.size(this.dims))throw new Error("Invalid new shape");return new _3(this.module,this.dataType,this.data,t)}},d$=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,s=r/e.PTR_SIZE,i=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*s++,i));let o=Number(e.getValue(a*s++,i));this.outputCount=Number(e.getValue(a*s++,i)),this.customDataOffset=Number(e.getValue(a*s++,"*")),this.customDataSize=Number(e.getValue(a*s++,i));let l=[];for(let d=0;d<o;d++){let p=Number(e.getValue(a*s++,i)),m=Number(e.getValue(a*s++,"*")),g=Number(e.getValue(a*s++,i)),y=[];for(let _=0;_<g;_++)y.push(Number(e.getValue(a*s++,i)));l.push(new Qs(e,p,m,y))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let r=((o=t==null?void 0:t.inputs)==null?void 0:o.map(l=>typeof l=="number"?this.inputs[l]:l))??this.inputs,a=(t==null?void 0:t.outputs)??[],s=(l,d,p)=>new Qs(this.module,d,this.output(l,p),p),i=(l,d)=>{let p=ci(l,d);if(!p)throw new Error(`Unsupported data type: ${l}`);let m=p>0?this.backend.gpuDataManager.create(p).id:0;return new Qs(this.module,l,m,d)};return this.backend.run(e,r,a,s,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,s=a===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*a);this.module.setValue(i,t.length,s);for(let o=0;o<t.length;o++)this.module.setValue(i+a*(o+1),t[o],s);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},y3=async(e,t,r,a)=>{let s=t.jsepInit;if(!s)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=new c3;await i.initialize(r,a),s("webgpu",[i,o=>i.alloc(Number(o)),o=>i.free(o),(o,l,d,p=!1)=>{if(p)ze("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),i.memcpy(Number(o),Number(l));else{ze("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let m=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));i.upload(Number(l),m)}},async(o,l,d)=>{ze("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await i.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>i.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>i.releaseKernel(o),(o,l,d,p)=>{ze("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let m=new d$(t,i,Number(l));return i.computeKernel(Number(o),m,p)},()=>i.captureBegin(),()=>i.captureEnd(),()=>i.replay()])}else{let i=new m3(r);s("webnn",[i,()=>i.reserveTensorId(),o=>i.releaseTensorId(o),async(o,l,d,p,m)=>i.ensureTensor(o,l,d,p,m),(o,l)=>{i.uploadTensor(o,l)},async(o,l)=>i.downloadTensor(o,l)])}}}),p$,Xh,Jh,kr,h$,go,Yh,ec,bp,tc,rc,ic,$3=te(()=>{wk(),bk(),be(),Si(),Bh(),Sv(),p$=(e,t)=>{tt()._OrtInit(e,t)!==0&&Be("Can't initialize onnxruntime.")},Xh=async e=>{p$(e.wasm.numThreads,ho(e.logLevel))},Jh=async(e,t)=>{{let r=(gT(),lo(g3)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:i}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",tt(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",tt(),e)}}},kr=new Map,h$=e=>{let t=tt(),r=t.stackSave();try{let a=t.PTR_SIZE,s=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,s,s+a)!==0&&Be("Can't get session input/output count.");let i=a===4?"i32":"i64";return[Number(t.getValue(s,i)),Number(t.getValue(s+a,i))]}finally{t.stackRestore(r)}},go=e=>{let t=tt(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Yh=async(e,t)=>{var g,y,_;let r,a,s=tt();Array.isArray(e)?[r,a]=e:e.buffer===s.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=go(e);let i=0,o=0,l=0,d=[],p=[],m=[];try{if([o,d]=xv(t),(t==null?void 0:t.externalData)&&s.mountExternalData){let C=[];for(let E of t.externalData){let z=typeof E=="string"?E:E.path;C.push(Ph(typeof E=="string"?E:E.data).then(R=>{s.mountExternalData(z,R)}))}await Promise.all(C)}for(let C of(t==null?void 0:t.executionProviders)??[])if((typeof C=="string"?C:C.name)==="webnn"){if(s.shouldTransferToMLTensor=!1,typeof C!="string"){let E=C,z=E==null?void 0:E.context,R=E==null?void 0:E.gpuDevice,P=E==null?void 0:E.deviceType,q=E==null?void 0:E.powerPreference;z?s.currentContext=z:R?s.currentContext=await s.jsepCreateMLContext(R):s.currentContext=await s.jsepCreateMLContext({deviceType:P,powerPreference:q})}else s.currentContext=await s.jsepCreateMLContext();break}i=await s._OrtCreateSession(r,a,o),i===0&&Be("Can't create a session."),(g=s.jsepOnCreateSession)==null||g.call(s),s.currentContext&&(s.jsepRegisterMLContext(i,s.currentContext),s.currentContext=void 0,s.shouldTransferToMLTensor=!0);let[$,w]=h$(i),S=!!(t!=null&&t.enableGraphCapture),v=[],b=[],T=[];for(let C=0;C<$;C++){let E=s._OrtGetInputName(i,C);E===0&&Be("Can't get an input name."),p.push(E),v.push(s.UTF8ToString(E))}for(let C=0;C<w;C++){let E=s._OrtGetOutputName(i,C);E===0&&Be("Can't get an output name."),m.push(E);let z=s.UTF8ToString(E);b.push(z);{if(S&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let R=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[z])??"cpu";if(R!=="cpu"&&R!=="cpu-pinned"&&R!=="gpu-buffer"&&R!=="ml-tensor")throw new Error(`Not supported preferred output location: ${R}.`);if(S&&R!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${R}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(R)}}let k=null;return T.some(C=>C==="gpu-buffer"||C==="ml-tensor")&&(l=s._OrtCreateBinding(i),l===0&&Be("Can't create IO binding."),k={handle:l,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(C=>Pp(C))}),kr.set(i,[i,p,m,k,S,!1]),[i,v,b]}catch($){throw p.forEach(w=>s._OrtFree(w)),m.forEach(w=>s._OrtFree(w)),l!==0&&s._OrtReleaseBinding(l)!==0&&Be("Can't release IO binding."),i!==0&&s._OrtReleaseSession(i)!==0&&Be("Can't release session."),$}finally{s._free(r),o!==0&&s._OrtReleaseSessionOptions(o)!==0&&Be("Can't release session options."),d.forEach($=>s._free($)),(_=s.unmountExternalData)==null||_.call(s)}},ec=e=>{var d;let t=tt(),r=kr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,s,i,o,l]=r;o&&(l&&t._OrtClearBoundOutputs(o.handle)!==0&&Be("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&Be("Can't release IO binding.")),(d=t.jsepOnReleaseSession)==null||d.call(t,e),s.forEach(p=>t._OrtFree(p)),i.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(a)!==0&&Be("Can't release session."),kr.delete(e)},bp=async(e,t,r,a,s,i=!1)=>{if(!e){t.push(0);return}let o=tt(),l=o.PTR_SIZE,d=e[0],p=e[1],m=e[3],g=m,y,_;if(d==="string"&&(m==="gpu-buffer"||m==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&m!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(m==="gpu-buffer"){let S=e[2].gpuBuffer;_=ci(Ei(d),p);let v=o.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=v(a,s,S,_)}else if(m==="ml-tensor"){let S=e[2].mlTensor;_=ci(Ei(d),p);let v=o.jsepRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=v(a,S,Ei(d),p)}else{let S=e[2];if(Array.isArray(S)){_=l*S.length,y=o._malloc(_),r.push(y);for(let v=0;v<S.length;v++){if(typeof S[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);o.setValue(y+v*l,ct(S[v],r),"*")}}else{let v=o.jsepIsGraphInput;if(d!=="string"&&v){let b=o._OrtGetInputName(a,s),T=o.UTF8ToString(b);if(v(a,T)){let k=Ei(d);_=ci(k,p),g="ml-tensor";let C=o.jsepCreateTemporaryTensor,E=o.jsepUploadTensor;if(!C||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await C(a,k,p);E(z,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),y=z}else _=S.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),y)}else _=S.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),y)}}let $=o.stackSave(),w=o.stackAlloc(4*p.length);try{p.forEach((v,b)=>o.setValue(w+b*l,v,l===4?"i32":"i64"));let S=o._OrtCreateTensor(Ei(d),y,_,w,p.length,Pp(g));S===0&&Be(`Can't create tensor for input/output. session=${a}, index=${s}.`),t.push(S)}finally{o.stackRestore($)}},tc=async(e,t,r,a,s,i)=>{var X,ie,K;let o=tt(),l=o.PTR_SIZE,d=kr.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],m=d[1],g=d[2],y=d[3],_=d[4],$=d[5],w=t.length,S=a.length,v=0,b=[],T=[],k=[],C=[],E=o.stackSave(),z=o.stackAlloc(w*l),R=o.stackAlloc(w*l),P=o.stackAlloc(S*l),q=o.stackAlloc(S*l);try{[v,b]=vv(i);for(let W=0;W<w;W++)await bp(r[W],T,C,e,t[W],_);for(let W=0;W<S;W++)await bp(s[W],k,C,e,w+a[W],_);for(let W=0;W<w;W++)o.setValue(z+W*l,T[W],"*"),o.setValue(R+W*l,m[t[W]],"*");for(let W=0;W<S;W++)o.setValue(P+W*l,k[W],"*"),o.setValue(q+W*l,g[a[W]],"*");if(y&&!$){let{handle:W,outputPreferredLocations:oe,outputPreferredLocationsEncoded:ce}=y;if(m.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${m.length}).`);for(let H=0;H<w;H++){let fe=t[H];await o._OrtBindInput(W,m[fe],T[H])!==0&&Be(`Can't bind input[${H}] for session=${e}.`)}for(let H=0;H<S;H++){let fe=a[H];(X=s[H])!=null&&X[3]?o._OrtBindOutput(W,g[fe],k[H],0)!==0&&Be(`Can't bind pre-allocated output[${H}] for session=${e}.`):o._OrtBindOutput(W,g[fe],0,ce[fe])!==0&&Be(`Can't bind output[${H}] to ${oe[H]} for session=${e}.`)}kr.set(e,[p,m,g,y,_,!0])}(ie=o.jsepOnRunStart)==null||ie.call(o,p);let J;y?J=await o._OrtRunWithBinding(p,y.handle,S,P,v):J=await o._OrtRun(p,R,z,w,q,S,P,v),J!==0&&Be("failed to call OrtRun().");let Z=[];for(let W=0;W<S;W++){let oe=Number(o.getValue(P+W*l,"*"));if(oe===k[W]){Z.push(s[W]);continue}let ce=o.stackSave(),H=o.stackAlloc(4*l),fe=!1,B,U=0;try{o._OrtGetTensorData(oe,H,H+l,H+2*l,H+3*l)!==0&&Be(`Can't access output tensor data on index ${W}.`);let se=l===4?"i32":"i64",$e=Number(o.getValue(H,se));U=o.getValue(H+l,"*");let N=o.getValue(H+l*2,"*"),ue=Number(o.getValue(H+l*3,se)),qe=[];for(let Ie=0;Ie<ue;Ie++)qe.push(Number(o.getValue(N+Ie*l,se)));o._OrtFree(N)!==0&&Be("Can't free memory for tensor dims.");let De=qe.reduce((Ie,me)=>Ie*me,1);B=hi($e);let gt=y==null?void 0:y.outputPreferredLocations[a[W]];if(B==="string"){if(gt==="gpu-buffer"||gt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ie=[];for(let me=0;me<De;me++){let st=o.getValue(U+me*l,"*"),Nt=o.getValue(U+(me+1)*l,"*"),yt=me===De-1?void 0:Nt-st;Ie.push(o.UTF8ToString(st,yt))}Z.push([B,qe,Ie,"cpu"])}else if(gt==="gpu-buffer"&&De>0){let Ie=o.jsepGetBuffer;if(!Ie)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let me=Ie(U),st=ci($e,De);if(st===void 0||!Mh(B))throw new Error(`Unsupported data type: ${B}`);fe=!0,Z.push([B,qe,{gpuBuffer:me,download:o.jsepCreateDownloader(me,st,B),dispose:()=>{o._OrtReleaseTensor(oe)!==0&&Be("Can't release tensor.")}},"gpu-buffer"])}else if(gt==="ml-tensor"&&De>0){let Ie=o.jsepEnsureTensor;if(!Ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(ci($e,De)===void 0||!Dh(B))throw new Error(`Unsupported data type: ${B}`);let me=await Ie(e,U,$e,qe,!1);fe=!0,Z.push([B,qe,{mlTensor:me,download:o.jsepCreateMLTensorDownloader(U,B),dispose:()=>{o.jsepReleaseTensorId(U),o._OrtReleaseTensor(oe)}},"ml-tensor"])}else{let Ie=Nh(B),me=new Ie(De);new Uint8Array(me.buffer,me.byteOffset,me.byteLength).set(o.HEAPU8.subarray(U,U+me.byteLength)),Z.push([B,qe,me,"cpu"])}}finally{o.stackRestore(ce),B==="string"&&U&&o._free(U),fe||o._OrtReleaseTensor(oe),(K=o.jsepOnRunEnd)==null||K.call(o,p)}}return y&&!_&&(o._OrtClearBoundOutputs(y.handle)!==0&&Be("Can't clear bound outputs."),kr.set(e,[p,m,g,y,_,!1])),Z}finally{o.stackRestore(E),T.forEach(J=>o._OrtReleaseTensor(J)),k.forEach(J=>o._OrtReleaseTensor(J)),C.forEach(J=>o._free(J)),v!==0&&o._OrtReleaseRunOptions(v),b.forEach(J=>o._free(J))}},rc=e=>{let t=tt(),r=kr.get(e);if(!r)throw new Error("invalid session id");let a=r[0],s=t._OrtEndProfiling(a);s===0&&Be("Can't get an profile file name."),t._OrtFree(s)},ic=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),Tr,vt,Ci,ss,os,Zs,vp,Xs,si,oi,c$,w3,b3,v3,x3,S3,k3,T3,C3=te(()=>{ir(),$3(),Si(),Oh(),Tr=()=>!!We.wasm.proxy&&typeof document<"u",Ci=!1,ss=!1,os=!1,Xs=new Map,si=(e,t)=>{let r=Xs.get(e);r?r.push(t):Xs.set(e,[t])},oi=()=>{if(Ci||!ss||os||!vt)throw new Error("worker not ready")},c$=e=>{switch(e.data.type){case"init-wasm":Ci=!1,e.data.err?(os=!0,vp[1](e.data.err)):(ss=!0,vp[0]()),Zs&&(URL.revokeObjectURL(Zs),Zs=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Xs.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},w3=async()=>{if(!ss){if(Ci)throw new Error("multiple calls to 'initWasm()' detected.");if(os)throw new Error("previous call to 'initWasm()' failed.");if(Ci=!0,Tr())return new Promise((e,t)=>{vt==null||vt.terminate(),wv().then(([r,a])=>{var s;try{vt=a,vt.onerror=o=>t(o),vt.onmessage=c$,vp=[e,t];let i={type:"init-wasm",in:We};!i.in.wasm.wasmPaths&&(r||(s=import.meta.url)!=null&&s.startsWith("file:"))&&(i.in.wasm.wasmPaths={wasm:new URL("/beandex/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href}),vt.postMessage(i),Zs=r}catch(i){t(i)}},t)});try{await Rh(We.wasm),await Xh(We),ss=!0}catch(e){throw os=!0,e}finally{Ci=!1}}},b3=async e=>{if(Tr())return oi(),new Promise((t,r)=>{si("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:We}};vt.postMessage(a)});await Jh(We,e)},v3=async e=>Tr()?(oi(),new Promise((t,r)=>{si("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};vt.postMessage(a,[e.buffer])})):go(e),x3=async(e,t)=>{if(Tr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return oi(),new Promise((r,a)=>{si("create",[r,a]);let s={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),vt.postMessage(s,i)})}else return Yh(e,t)},S3=async e=>{if(Tr())return oi(),new Promise((t,r)=>{si("release",[t,r]);let a={type:"release",in:e};vt.postMessage(a)});ec(e)},k3=async(e,t,r,a,s,i)=>{if(Tr()){if(r.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return oi(),new Promise((o,l)=>{si("run",[o,l]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:a,options:i}};vt.postMessage(p,ic(d))})}else return tc(e,t,r,a,s,i)},T3=async e=>{if(Tr())return oi(),new Promise((t,r)=>{si("end-profiling",[t,r]);let a={type:"end-profiling",in:e};vt.postMessage(a)});rc(e)}}),xp,f$,I3,yT=te(()=>{ir(),C3(),be(),Ah(),Sv(),xp=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},f$=e=>{switch(e[3]){case"cpu":return new Yt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Mh(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:s}=e[2];return Yt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:s})}case"ml-tensor":{let t=e[0];if(!Dh(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:s}=e[2];return Yt.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:s})}default:throw new Error(`invalid data location: ${e[3]}`)}},I3=class{async fetchModelAndCopyToWasmMemory(e){return v3(await Ph(e))}async loadModel(e,t){tr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await x3(r,t),Bt()}async dispose(){return S3(this.sessionId)}async run(e,t,r){tr();let a=[],s=[];Object.entries(e).forEach(g=>{let y=g[0],_=g[1],$=this.inputNames.indexOf(y);if($===-1)throw new Error(`invalid input '${y}'`);a.push(_),s.push($)});let i=[],o=[];Object.entries(t).forEach(g=>{let y=g[0],_=g[1],$=this.outputNames.indexOf(y);if($===-1)throw new Error(`invalid output '${y}'`);i.push(_),o.push($)});let l=a.map((g,y)=>xp(g,()=>`input "${this.inputNames[s[y]]}"`)),d=i.map((g,y)=>g?xp(g,()=>`output "${this.outputNames[o[y]]}"`):null),p=await k3(this.sessionId,s,l,o,d,r),m={};for(let g=0;g<p.length;g++)m[this.outputNames[o[g]]]=i[g]??f$(p[g]);return Bt(),m}startProfiling(){}endProfiling(){T3(this.sessionId)}}}),E3={};xs(E3,{OnnxruntimeWebAssemblyBackend:()=>Xp,initializeFlags:()=>Zp,wasmBackend:()=>z3});var Zp,Xp,z3,_T=te(()=>{ir(),C3(),yT(),Zp=()=>{if((typeof We.wasm.initTimeout!="number"||We.wasm.initTimeout<0)&&(We.wasm.initTimeout=0),We.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof We.wasm.proxy!="boolean"&&(We.wasm.proxy=!1),typeof We.wasm.trace!="boolean"&&(We.wasm.trace=!1),typeof We.wasm.numThreads!="number"||!Number.isInteger(We.wasm.numThreads)||We.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)We.wasm.numThreads=1;else{let e=typeof navigator>"u"?ik("node:os").cpus().length:navigator.hardwareConcurrency;We.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Xp=class{async init(e){Zp(),await w3(),await b3(e)}async createInferenceSessionHandler(e,t){let r=new I3;return await r.loadModel(e,t),Promise.resolve(r)}},z3=new Xp});ir();ir();ir();var $T="1.21.0",wT=fv;{let e=(_T(),lo(E3)).wasmBackend;mi("webgpu",e,5),mi("webnn",e,5),mi("cpu",e,10),mi("wasm",e,10)}Object.defineProperty(We.versions,"web",{value:$T,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xT=Object.freeze(Object.defineProperty({__proto__:null,get InferenceSession(){return zh},get TRACE(){return ws},get TRACE_FUNC_BEGIN(){return tr},get TRACE_FUNC_END(){return Bt},get Tensor(){return Yt},default:wT,get env(){return We},get registerBackend(){return mi}},Symbol.toStringTag,{value:"Module"}));export{xT as a,vT as o};
