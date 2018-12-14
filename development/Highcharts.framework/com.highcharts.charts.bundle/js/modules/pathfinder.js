/*
 Highcharts JS v7.0.0 (2018-12-11)
 Pathfinder

 (c) 2016-2018 ystein Moseng

 License: www.highcharts.com/license
*/
(function(r){"object"===typeof module&&module.exports?module.exports=r:"function"===typeof define&&define.amd?define(function(){return r}):r("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(r){var B=function(h){function w(e,c,g){g=g||0;var h=e.length-1;c-=1e-7;for(var l,p;g<=h;)if(l=h+g>>1,p=c-e[l].xMin,0<p)g=l+1;else if(0>p)h=l-1;else return l;return 0<g?g-1:0}function l(e,c){for(var g=w(e,c.x+1)+1;g--;){var h;if(h=e[g].xMax>=c.x)h=e[g],h=c.x<=h.xMax&&c.x>=h.xMin&&c.y<=h.yMax&&c.y>=
h.yMin;if(h)return g}return-1}function t(e){var c=[];if(e.length){c.push("M",e[0].start.x,e[0].start.y);for(var g=0;g<e.length;++g)c.push("L",e[g].end.x,e[g].end.y)}return c}function n(e,c){e.yMin=z(e.yMin,c.yMin);e.yMax=q(e.yMax,c.yMax);e.xMin=z(e.xMin,c.xMin);e.xMax=q(e.xMax,c.xMax)}var q=Math.min,z=Math.max,u=Math.abs,r=h.pick;return{straight:function(e,c){return{path:["M",e.x,e.y,"L",c.x,c.y],obstacles:[{start:e,end:c}]}},simpleConnect:h.extend(function(e,c,g){function h(b,a,d,f,k){b={x:b.x,y:b.y};
b[a]=d[f||a]+(k||0);return b}function w(b,a,d){var f=u(a[d]-b[d+"Min"])>u(a[d]-b[d+"Max"]);return h(a,d,b,d+(f?"Max":"Min"),f?1:-1)}var p=[],a,b=r(g.startDirectionX,u(c.x-e.x)>u(c.y-e.y))?"x":"y",d=g.chartObstacles,k=l(d,e);g=l(d,c);var f;-1<g?(a=d[g],g=w(a,c,b),a={start:g,end:c},f=g):f=c;-1<k&&(d=d[k],g=w(d,e,b),p.push({start:e,end:g}),g[b]>e[b]===g[b]>f[b]&&(b="y"===b?"x":"y",c=e[b]<c[b],p.push({start:g,end:h(g,b,d,b+(c?"Max":"Min"),c?1:-1)}),b="y"===b?"x":"y"));e=p.length?p[p.length-1].end:e;g=
h(e,b,f);p.push({start:e,end:g});b=h(g,"y"===b?"x":"y",f);p.push({start:g,end:b});p.push(a);return{path:t(p),obstacles:p}},{requiresObstacles:!0}),fastAvoid:h.extend(function(e,c,g){function h(b,a,d){var f,k,e,g,c,h=b.x<a.x?1:-1;b.x<a.x?(f=b,k=a):(f=a,k=b);b.y<a.y?(g=b,e=a):(g=a,e=b);for(c=0>h?q(w(m,k.x),m.length-1):0;m[c]&&(0<h&&m[c].xMin<=k.x||0>h&&m[c].xMax>=f.x);){if(m[c].xMin<=k.x&&m[c].xMax>=f.x&&m[c].yMin<=e.y&&m[c].yMax>=g.y)return d?{y:b.y,x:b.x<a.x?m[c].xMin-1:m[c].xMax+1,obstacle:m[c]}:
{x:b.x,y:b.y<a.y?m[c].yMin-1:m[c].yMax+1,obstacle:m[c]};c+=h}return a}function y(b,a,d,f,k){var c=k.soft,e=k.hard,g=f?"x":"y",x={x:a.x,y:a.y},v={x:a.x,y:a.y};k=b[g+"Max"]>=c[g+"Max"];var c=b[g+"Min"]<=c[g+"Min"],F=b[g+"Max"]>=e[g+"Max"],e=b[g+"Min"]<=e[g+"Min"],m=u(b[g+"Min"]-a[g]),l=u(b[g+"Max"]-a[g]);d=10>u(m-l)?a[g]<d[g]:l<m;v[g]=b[g+"Min"];x[g]=b[g+"Max"];b=h(a,v,f)[g]!==v[g];a=h(a,x,f)[g]!==x[g];d=b?a?d:!0:a?!1:d;d=c?k?d:!0:k?!1:d;return e?F?d:!0:F?!1:d}function p(b,a,d){if(b.x===a.x&&b.y===
a.y)return[];var f=d?"x":"y",k,c,e,x,v=g.obstacleOptions.margin;k={soft:{xMin:D,xMax:E,yMin:G,yMax:H},hard:g.hardBounds};c=l(m,b);-1<c?(c=m[c],k=y(c,b,a,d,k),n(c,g.hardBounds),x=d?{y:b.y,x:c[k?"xMax":"xMin"]+(k?1:-1)}:{x:b.x,y:c[k?"yMax":"yMin"]+(k?1:-1)},e=l(m,x),-1<e&&(e=m[e],n(e,g.hardBounds),x[f]=k?z(c[f+"Max"]-v+1,(e[f+"Min"]+c[f+"Max"])/2):q(c[f+"Min"]+v-1,(e[f+"Max"]+c[f+"Min"])/2),b.x===x.x&&b.y===x.y?(A&&(x[f]=k?z(c[f+"Max"],e[f+"Max"])+1:q(c[f+"Min"],e[f+"Min"])-1),A=!A):A=!1),b=[{start:b,
end:x}]):(f=h(b,{x:d?a.x:b.x,y:d?b.y:a.y},d),b=[{start:b,end:{x:f.x,y:f.y}}],f[d?"x":"y"]!==a[d?"x":"y"]&&(k=y(f.obstacle,f,a,!d,k),n(f.obstacle,g.hardBounds),k={x:d?f.x:f.obstacle[k?"xMax":"xMin"]+(k?1:-1),y:d?f.obstacle[k?"yMax":"yMin"]+(k?1:-1):f.y},d=!d,b=b.concat(p({x:f.x,y:f.y},k,d))));return b=b.concat(p(b[b.length-1].end,a,!d))}function a(b,a,d){var f=q(b.xMax-a.x,a.x-b.xMin)<q(b.yMax-a.y,a.y-b.yMin);d=y(b,a,d,f,{soft:g.hardBounds,hard:g.hardBounds});return f?{y:a.y,x:b[d?"xMax":"xMin"]+(d?
1:-1)}:{x:a.x,y:b[d?"yMax":"yMin"]+(d?1:-1)}}var b=r(g.startDirectionX,u(c.x-e.x)>u(c.y-e.y)),d=b?"x":"y",k,f,x=[],A=!1,v=g.obstacleMetrics,D=q(e.x,c.x)-v.maxWidth-10,E=z(e.x,c.x)+v.maxWidth+10,G=q(e.y,c.y)-v.maxHeight-10,H=z(e.y,c.y)+v.maxHeight+10,m=g.chartObstacles;k=w(m,D);v=w(m,E);m=m.slice(k,v+1);-1<(v=l(m,c))&&(f=a(m[v],c,e),x.push({end:c,start:f}),c=f);for(;-1<(v=l(m,c));)k=0>c[d]-e[d],f={x:c.x,y:c.y},f[d]=m[v][k?d+"Max":d+"Min"]+(k?1:-1),x.push({end:c,start:f}),c=f;e=p(e,c,b);e=e.concat(x.reverse());
return{path:t(e),obstacles:e}},{requiresObstacles:!0})}}(r);(function(h){h.SVGRenderer.prototype.symbols.arrow=function(h,l,t,n){return["M",h,l+n/2,"L",h+t,l,"L",h,l+n/2,"L",h+t,l+n]};h.SVGRenderer.prototype.symbols["arrow-half"]=function(w,l,t,n){return h.SVGRenderer.prototype.symbols.arrow(w,l,t/2,n)};h.SVGRenderer.prototype.symbols["triangle-left"]=function(h,l,t,n){return["M",h+t,l,"L",h,l+n/2,"L",h+t,l+n,"Z"]};h.SVGRenderer.prototype.symbols["arrow-filled"]=h.SVGRenderer.prototype.symbols["triangle-left"];
h.SVGRenderer.prototype.symbols["triangle-left-half"]=function(w,l,t,n){return h.SVGRenderer.prototype.symbols["triangle-left"](w,l,t/2,n)};h.SVGRenderer.prototype.symbols["arrow-filled-half"]=h.SVGRenderer.prototype.symbols["triangle-left-half"]})(r);(function(h,w){function l(a){var b=a.shapeArgs;return b?{xMin:b.x,xMax:b.x+b.width,yMin:b.y,yMax:b.y+b.height}:(b=a.graphic&&a.graphic.getBBox())?{xMin:a.plotX-b.width/2,xMax:a.plotX+b.width/2,yMin:a.plotY-b.height/2,yMax:a.plotY+b.height/2}:null}function t(a){for(var b=
a.length,d=0,k,f,c=[],g=function(b,a,d){d=C(d,10);var f=b.yMax+d>a.yMin-d&&b.yMin-d<a.yMax+d,k=b.xMax+d>a.xMin-d&&b.xMin-d<a.xMax+d,c=f?b.xMin>a.xMax?b.xMin-a.xMax:a.xMin-b.xMax:Infinity,e=k?b.yMin>a.yMax?b.yMin-a.yMax:a.yMin-b.yMax:Infinity;return k&&f?d?g(b,a,Math.floor(d/2)):Infinity:p(c,e)};d<b;++d)for(k=d+1;k<b;++k)f=g(a[d],a[k]),80>f&&c.push(f);c.push(80);return y(Math.floor(c.sort(function(b,a){return b-a})[Math.floor(c.length/10)]/2-1),1)}function n(a,b,d){this.init(a,b,d)}function q(a){this.init(a)}
function r(a){if(a.options.pathfinder||a.series.reduce(function(b,a){a.options&&g(!0,a.options.connectors=a.options.connectors||{},a.options.pathfinder);return b||a.options&&a.options.pathfinder},!1))g(!0,a.options.connectors=a.options.connectors||{},a.options.pathfinder),h.error('WARNING: Pathfinder options have been renamed. Use "chart.connectors" or "series.connectors" instead.')}var u=h.defined,B=h.deg2rad,e=h.extend,c=h.addEvent,g=h.merge,C=h.pick,y=Math.max,p=Math.min;e(h.defaultOptions,{connectors:{type:"straight",
lineWidth:1,marker:{enabled:!1,align:"center",verticalAlign:"middle",inside:!1,lineWidth:1},startMarker:{symbol:"diamond"},endMarker:{symbol:"arrow-filled"}}});n.prototype={init:function(a,b,d){this.fromPoint=a;this.toPoint=b;this.options=d;this.chart=a.series.chart;this.pathfinder=this.chart.pathfinder},renderPath:function(a,b,d){var k=this.chart,f=k.styledMode,c=k.pathfinder,g=!k.options.chart.forExport&&!1!==d,e=this.graphics&&this.graphics.path;c.group||(c.group=k.renderer.g().addClass("highcharts-pathfinder-group").attr({zIndex:-1}).add(k.seriesGroup));
c.group.translate(k.plotLeft,k.plotTop);e&&e.renderer||(e=k.renderer.path().add(c.group),f||e.attr({opacity:0}));e.attr(b);a={d:a};f||(a.opacity=1);e[g?"animate":"attr"](a,d);this.graphics=this.graphics||{};this.graphics.path=e},addMarker:function(a,b,d){var c=this.fromPoint.series.chart,f=c.pathfinder,c=c.renderer,g="start"===a?this.fromPoint:this.toPoint,e=g.getPathfinderAnchorPoint(b),h,l;b.enabled&&(d="start"===a?{x:d[4],y:d[5]}:{x:d[d.length-5],y:d[d.length-4]},d=g.getRadiansToVector(d,e),e=
g.getMarkerVector(d,b.radius,e),d=-d/B,b.width&&b.height?(h=b.width,l=b.height):h=l=2*b.radius,this.graphics=this.graphics||{},e={x:e.x-h/2,y:e.y-l/2,width:h,height:l,rotation:d,rotationOriginX:e.x,rotationOriginY:e.y},this.graphics[a]?this.graphics[a].animate(e):(this.graphics[a]=c.symbol(b.symbol).addClass("highcharts-point-connecting-path-"+a+"-marker").attr(e).add(f.group),c.styledMode||this.graphics[a].attr({fill:b.color||this.fromPoint.color,stroke:b.lineColor,"stroke-width":b.lineWidth,opacity:0}).animate({opacity:1},
g.series.options.animation)))},getPath:function(a){var b=this.pathfinder,d=this.chart,c=b.algorithms[a.type],f=b.chartObstacles;if("function"!==typeof c)h.error('"'+a.type+'" is not a Pathfinder algorithm.');else return c.requiresObstacles&&!f&&(f=b.chartObstacles=b.getChartObstacles(a),d.options.connectors.algorithmMargin=a.algorithmMargin,b.chartObstacleMetrics=b.getObstacleMetrics(f)),c(this.fromPoint.getPathfinderAnchorPoint(a.startMarker),this.toPoint.getPathfinderAnchorPoint(a.endMarker),g({chartObstacles:f,
lineObstacles:b.lineObstacles||[],obstacleMetrics:b.chartObstacleMetrics,hardBounds:{xMin:0,xMax:d.plotWidth,yMin:0,yMax:d.plotHeight},obstacleOptions:{margin:a.algorithmMargin},startDirectionX:b.getAlgorithmStartDirection(a.startMarker)},a))},render:function(){var a=this.fromPoint,b=a.series,d=b.chart,c=d.pathfinder,f=g(d.options.connectors,b.options.connectors,a.options.connectors,this.options),e={};d.styledMode||(e.stroke=f.lineColor||a.color,e["stroke-width"]=f.lineWidth,f.dashStyle&&(e.dashstyle=
f.dashStyle));e.class="highcharts-point-connecting-path highcharts-color-"+a.colorIndex;f=g(e,f);u(f.marker.radius)||(f.marker.radius=p(y(Math.ceil((f.algorithmMargin||8)/2)-1,1),5));a=this.getPath(f);d=a.path;a.obstacles&&(c.lineObstacles=c.lineObstacles||[],c.lineObstacles=c.lineObstacles.concat(a.obstacles));this.renderPath(d,e,b.options.animation);this.addMarker("start",g(f.marker,f.startMarker),d);this.addMarker("end",g(f.marker,f.endMarker),d)},destroy:function(){this.graphics&&(h.objectEach(this.graphics,
function(a){a.destroy()}),delete this.graphics)}};q.prototype={algorithms:w,init:function(a){this.chart=a;this.connections=[];c(a,"redraw",function(){this.pathfinder.update()})},update:function(a){var b=this.chart,d=this,c=d.connections;d.connections=[];b.series.forEach(function(a){a.visible&&a.points.forEach(function(a){var c,f=a.options&&a.options.connect&&h.splat(a.options.connect);a.visible&&!1!==a.isInside&&f&&f.forEach(function(f){c=b.get("string"===typeof f?f:f.to);c instanceof h.Point&&c.series.visible&&
c.visible&&!1!==c.isInside&&d.connections.push(new n(a,c,"string"===typeof f?{}:f))})})});for(var f=0,e,g,l=c.length,p=d.connections.length;f<l;++f){g=!1;for(e=0;e<p;++e)if(c[f].fromPoint===d.connections[e].fromPoint&&c[f].toPoint===d.connections[e].toPoint){d.connections[e].graphics=c[f].graphics;g=!0;break}g||c[f].destroy()}delete this.chartObstacles;delete this.lineObstacles;d.renderConnections(a)},renderConnections:function(a){a?this.chart.series.forEach(function(b){var a=function(){var a=b.chart.pathfinder;
(a&&a.connections||[]).forEach(function(a){a.fromPoint&&a.fromPoint.series===b&&a.render()});b.pathfinderRemoveRenderEvent&&(b.pathfinderRemoveRenderEvent(),delete b.pathfinderRemoveRenderEvent)};!1===b.options.animation?a():b.pathfinderRemoveRenderEvent=c(b,"afterAnimate",a)}):this.connections.forEach(function(a){a.render()})},getChartObstacles:function(a){for(var b=[],d=this.chart.series,c=C(a.algorithmMargin,0),f,e=0,g=d.length;e<g;++e)if(d[e].visible)for(var h=0,p=d[e].points.length,n;h<p;++h)n=
d[e].points[h],n.visible&&(n=l(n))&&b.push({xMin:n.xMin-c,xMax:n.xMax+c,yMin:n.yMin-c,yMax:n.yMax+c});b=b.sort(function(a,b){return a.xMin-b.xMin});u(a.algorithmMargin)||(f=a.algorithmMargin=t(b),b.forEach(function(a){a.xMin-=f;a.xMax+=f;a.yMin-=f;a.yMax+=f}));return b},getObstacleMetrics:function(a){for(var b=0,d=0,c,f,e=a.length;e--;)c=a[e].xMax-a[e].xMin,f=a[e].yMax-a[e].yMin,b<c&&(b=c),d<f&&(d=f);return{maxHeight:d,maxWidth:b}},getAlgorithmStartDirection:function(a){var b="top"!==a.verticalAlign&&
"bottom"!==a.verticalAlign;return"left"!==a.align&&"right"!==a.align?b?void 0:!1:b?!0:void 0}};h.Connection=n;h.Pathfinder=q;e(h.Point.prototype,{getPathfinderAnchorPoint:function(a){var b=l(this),c,e;switch(a.align){case "right":c="xMax";break;case "left":c="xMin"}switch(a.verticalAlign){case "top":e="yMin";break;case "bottom":e="yMax"}return{x:c?b[c]:(b.xMin+b.xMax)/2,y:e?b[e]:(b.yMin+b.yMax)/2}},getRadiansToVector:function(a,b){u(b)||(b=l(this),b={x:(b.xMin+b.xMax)/2,y:(b.yMin+b.yMax)/2});return Math.atan2(b.y-
a.y,a.x-b.x)},getMarkerVector:function(a,b,c){for(var e=2*Math.PI,d=l(this),g=d.xMax-d.xMin,h=d.yMax-d.yMin,n=Math.atan2(h,g),p=!1,g=g/2,t=h/2,w=d.xMin+g,d=d.yMin+t,q=w,m=d,u={},r=1,y=1;a<-Math.PI;)a+=e;for(;a>Math.PI;)a-=e;e=Math.tan(a);a>-n&&a<=n?(y=-1,p=!0):a>n&&a<=Math.PI-n?y=-1:a>Math.PI-n||a<=-(Math.PI-n)?(r=-1,p=!0):r=-1;p?(q+=r*g,m+=y*g*e):(q+=h/(2*e)*r,m+=y*t);c.x!==w&&(q=c.x);c.y!==d&&(m=c.y);u.x=q+b*Math.cos(a);u.y=m-b*Math.sin(a);return u}});h.Chart.prototype.callbacks.push(function(a){!1!==
a.options.connectors.enabled&&(r(a),this.pathfinder=new q(this),this.pathfinder.update(!0))})})(r,B)});
//# sourceMappingURL=pathfinder.js.map
