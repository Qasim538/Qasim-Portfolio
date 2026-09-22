(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.TrafficImage = function() {
	this.initialize(img.TrafficImage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1475,983);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Sompo_Logo_Text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Sompo_Logo_Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFmBLQgbgeAAgtQAAgtAagdQAdgfAyAAQAyAAAcAeQAaAdAAAuQAAAvgbAdQgcAegxAAQgyAAgcgfgAF/g3QgQAXAAAgQAAAgAQAYQASAcAjAAQAhAAAUgcQAPgXAAghQAAgggPgXQgUgcghAAQgiAAgTAcgAlPBLQgbgeABgtQAAgtAagdQAdgfAyAAQAyAAAcAeQAaAdAAAuQAAAvgbAdQgcAegxAAQgyAAgdgfgAk1g3QgQAXAAAgQAAAgAQAYQASAcAiAAQAiAAATgcQAQgXAAghQAAgggPgXQgTgcgjAAQghAAgTAcgAobBfIACgYQAgAOAgAAQAVAAAPgIQAPgJAAgSQAAgOgNgKQgKgIgXgJIgTgIQgxgRAAgiQAAgbAbgPQAXgNAiAAQAeAAAcAIIgDAWQgbgKgbAAQgVAAgOAIQgOAJAAAPQgBAMAMAJQAJAHAUAHIASAHQAbAKANALQARAPAAAVQAAAdgZAQQgYAPglAAQgiAAgigLgACfBnIAAjNIBAAAQBWAAAAA7QAAAigaAPQgXAPgnAAIgcAAIAABSgADBAAIAgAAQAXAAANgLQANgLAAgVQAAgTgOgKQgNgJgWAAIggAAgABUBnIAAizIhHCzIgdAAIhGizIAACzIgfAAIAAjNIAxAAIBDCsIBDisIAwAAIAADNg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-10.6,108,21.299999999999997);


(lib.Sompo_Logo_Shadow1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Sompo_Logo_Shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8D1B27","#8B1A26","#851823","#7C161F","#7A161E","#70131A","#6A1117","#681116","#5F0F12","#580D10","#560C0F"],[0.094,0.176,0.208,0.224,0.231,0.275,0.337,0.51,0.569,0.659,0.906],-7.7,13,5,-9.6).s().p("AAhBzQg2AAgogoQgognAAg3QAAgyAgglQAXgIAWAAQgYAPgOAYQgOAaAAAeQAAAtAgAgQAgAhAtAAQAnAAAegYQgIAXgQARQgVAIgVAAIgDAAg");
	this.shape.setTransform(0,0.0015);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-11.5,20.4,23);


(lib.Sompo_Logo_Dot_Red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Sompo_Logo_Dot_Red
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6B120F","#CE2C3A"],[0,1],0,13.6,0,-13.5).s().p("AhfBgQgngnAAg5QAAg3AngoQAogoA3AAQA5AAAnAoQAoAoAAA3QAAA5goAnQgnAng5AAQg3AAgogng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-13.5,27.1,27.1);


(lib.Sompo_Logo_circle1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Sompo_Logo_circle
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#404040","#999999","#E6E6E6","#999999","#404040"],[0,0.275,0.498,0.863,1],0,12.3,0,-12.3).s().p("AhWBXQgkgkAAgzQAAgyAkgkQAkgkAyAAQAzAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgzAAQgyAAgkgkgAhNhOQghAhAAAtQAAAuAhAgQAgAhAtAAQAuAAAgghQAhggAAguQAAgtghghQggggguAAQgtAAggAgg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#A6A6A6","#404040","#E6E6E6","#BFBFBF"],[0,0.086,0.4,0.498,1],0,13.6,0,-13.5).s().p("AhfBgQgogoAAg4QAAg3ApgoQAngnA3AAQA5AAAnAnQAoAoAAA3QAAA4goAoQgnAog5AAQg3AAgogogAhUhUQgiAkgBAwQABAyAiAiQAkAkAwAAQAxAAAkgkQAigiABgyQgBgwgigkQgkgigxgBQgwABgkAig");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-13.5,27.1,27.1);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjQDRIAAmhIGhAAIAAGhg");
	mask.setTransform(20.925,20.925);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiTCUQg9g9AAhXQAAhVA9g+QA+g9BVAAQBXAAA9A9QA9A+AABVQAABXg9A9Qg9A9hXAAQhVAAg+g9gAABDPQAUAAAQgcQARgcAJguIg+AAgAgkCzQARAcATAAIAAhmIg+AAQAJAuARAcgAArCsQgOAbgRAIQAkgEAfgcQAegbASgrIg+AAQgJApgNAagAgLDPQgQgIgPgbQgOgbgIgoIg+AAQASArAeAbQAfAcAkAEIAAAAgABXCqQgaAbggAIQAvgGAogbQAngaAYgpIgyAAQgQAngaAagAgbDNQgggIgbgbQgagagQgnIgyAAQAYApAnAaQAoAbAwAGIAAAAgACCBnIAyAAQAbgvAAg3Ig5AAQAAA3gUAvgABCBnIA+AAQAUgvAAg3IhJAAQAAA3gJAvgAABBnIA/AAQAJgvAAg3IhIAAgAg/BnIA/AAIAAhmIhIAAQAAA3AJAvgAhABnQgKguAAg4IhJAAQAAA2AUAwIA/AAIAAAAgAiBBnQgTgvgBg3Ig5AAQAAA3AbAvIAyAAIAAAAgADPAAQAAg2gbgwIgyAAQAUAvAAA3IA5AAIAAAAgACUAAQAAg3gUgvIg+AAQAJAwAAA2IBJAAIAAAAgABJAAQAAg2gJgwIg/AAIAABmIBIAAIAAAAgAhIAAIBIAAIAAhmIg/AAQgJAwAAA2gAiTAAIBJAAQAAg3AKgvIg/AAQgUAxAAA1gAjOAAIA5AAQABg3ATgvIgyAAQgbAwAAA2gACzhoQgYgogngbQgogbgvgGQAgAIAaAbQAaAaAQAnIAyAAIAAAAgAB/hoQgSgrgegbQgfgcgkgEQARAIAOAbQANAaAJApIA+AAIAAAAgAA/hoQgJgugRgbQgQgcgUgBIAABmIA+AAIAAAAgAgkixQgRAbgJAuIA+AAIAAhmQgTABgRAcgAhOiuQgeAbgSArIA+AAQAIgoAOgbQAPgbAQgIQgkAEgfAcgAhzirQgnAbgYAoIAyAAQAQgnAagaQAbgbAggIQgwAGgoAbg");
	this.shape.setTransform(20.925,20.925);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,41.9,41.9), null);


(lib.New_Image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// New_Image
	this.instance = new lib.TrafficImage();
	this.instance.setTransform(-376.1,-250.65,0.5795,0.5795);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-376.1,-250.6,752.2,501.29999999999995);


(lib.Heading = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Heading
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD2E34").s().p("AgwB+QgUgMgLgYQgMgYAAghQAAghAMgWQALgZAUgMQATgMAaAAQAUAAARAHQAQAJAKANIACAAIAAhgIAeAAIAAEQIgYAAIgEgbIgCAAQgKAPgRAIQgRAJgVAAQgaAAgTgNgAgsgXQgRATAAAlQAAAlARAVQAQAUAcAAQAcAAARgUQARgVAAglQAAglgRgTQgRgVgcAAQgcAAgQAVg");
	this.shape.setTransform(219.375,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD2E34").s().p("AguBdQgVgNgMgXQgMgYAAghQAAggAMgYQAMgYAVgMQAUgMAaAAQAeAAAUAOQAVAOAKAWQALAXAAAWIgCATIiXAAQACAhARARQARASAbAAQAjAAASgdIAfAAQgKAbgWAPQgXAOgdAAQgbAAgVgMgAA+gRQgCgZgQgSQgQgRgcAAQgaAAgQAQQgPARgDAbIB6AAIAAAAg");
	this.shape_1.setTransform(198.075,5.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD2E34").s().p("AgOCMIAAjJIAdAAIAADJgAgOhoQgFgGAAgIQAAgJAFgGQAHgHAHAAQAJAAAFAHQAHAGgBAJQABAIgHAFQgFAHgJAAQgHgBgHgFg");
	this.shape_2.setTransform(183.45,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CD2E34").s().p("AgYCIIAAiuIggAAIAAgbIAgAAIAAgTQAAgXAOgOQAOgPAVAAIAgAAIAAAcIgeAAQgKAAgHAHQgGAGAAALIAAATIA1AAIAAAbIg1AAIAACug");
	this.shape_3.setTransform(173.375,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CD2E34").s().p("AgNCMIAAjJIAcAAIAADJgAgNhoQgHgGABgIQgBgJAHgGQAFgHAIAAQAJAAAGAHQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIgBgFgFg");
	this.shape_4.setTransform(163.05,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CD2E34").s().p("AgNCIIAAkQIAcAAIAAEQg");
	this.shape_5.setTransform(155.05,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CD2E34").s().p("AhbCOIAAkYIAYAAIAEAcIACAAQAKgPARgIQARgIAVAAQAaAAAUAMQATAMAMAYQALAYAAAhQAAAhgLAXQgMAXgTANQgUAMgaAAQgUAAgQgIQgRgHgKgOIgCAAIAABngAgsheQgRAUAAAmQAAAkARAUQARAVAbAAQAdAAARgVQARgUAAgkQAAgmgRgUQgRgUgdAAQgbAAgRAUg");
	this.shape_6.setTransform(140.225,8.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CD2E34").s().p("ABuBnIAAh7QABgagNgPQgOgOgUAAQgVAAgOAPQgOAQAAAYIAAB7IgdAAIAAh7QABgagNgPQgNgOgVAAQgVAAgOAPQgOAQAAAYIAAB7IgeAAIAAjKIAYAAIAEAcIACAAQASgfAlAAQATAAAPAJQAPAKAIASIACAAQAKgTAQgJQASgJAVAAQATAAAQAKQAQAJAJATQAJATAAAZIAAB7g");
	this.shape_7.setTransform(112.35,4.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CD2E34").s().p("AgOCMIAAjJIAdAAIAADJgAgOhoQgFgGgBgIQABgJAFgGQAHgHAHAAQAJAAAFAHQAHAGAAAJQAAAIgHAFQgFAHgJAAQgHgBgHgFg");
	this.shape_8.setTransform(92,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CD2E34").s().p("AgyBaQgVgQgGgZIAfAAQAFAOAMAHQAOAIAPAAQAYAAANgJQAMgIAAgOQAAgLgHgGQgGgGgKgEIgagHQgWgFgPgFQgOgFgKgMQgKgMAAgWQAAgPAIgNQAKgNAQgIQARgHAUAAQAcAAAUANQAVANAFAYIgfAAQgFgLgKgGQgLgGgRAAQgUAAgLAIQgKAHAAAOQAAALAGAHQAHAHAKADIAaAIIAlALQANAEAKAMQAKAMAAAUQAAAPgKAOQgJANgSAIQgSAIgXAAQgdAAgVgPg");
	this.shape_9.setTransform(79.2,5.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CD2E34").s().p("AgsCMIAfhOIhUjJIAgAAIBCChIACAAIA/ihIAgAAIhvEXg");
	this.shape_10.setTransform(52.6,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CD2E34").s().p("AAZCBQgVAAgOgPQgOgOAAgWIAAh8IggAAIAAgbIAgAAIAEg3IAYAAIAAA3IA1AAIAAAbIg1AAIAAB8QAAAKAGAHQAHAHAKAAIAeAAIAAAbg");
	this.shape_11.setTransform(35.975,2.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CD2E34").s().p("AgNCMIAAjJIAcAAIAADJgAgNhoQgHgGAAgIQAAgJAHgGQAFgHAIAAQAJAAAFAHQAHAGAAAJQAAAIgHAFQgFAHgJAAQgIgBgFgFg");
	this.shape_12.setTransform(25.65,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CD2E34").s().p("AA5BlIg5hUIg4BUIghAAIBIhoIhEhhIAhAAIA0BLIA1hLIAhAAIhFBhIBJBog");
	this.shape_13.setTransform(13.075,5.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CD2E34").s().p("AguBdQgVgNgMgXQgMgYAAghQAAggAMgYQAMgYAVgMQAUgMAaAAQAeAAAUAOQAVAOAKAWQALAXAAAWIgCATIiXAAQACAhARARQARASAbAAQAjAAASgdIAfAAQgKAbgWAPQgXAOgdAAQgbAAgVgMgAA+gRQgCgZgQgSQgQgRgcAAQgaAAgQAQQgPARgDAbIB6AAIAAAAg");
	this.shape_14.setTransform(-6.275,5.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CD2E34").s().p("AgNCIIAAkQIAbAAIAAEQg");
	this.shape_15.setTransform(-21.05,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CD2E34").s().p("AhbCOIAAkYIAYAAIAEAcIACAAQAKgPARgIQARgIAVAAQAaAAAUAMQATAMAMAYQALAYAAAhQAAAhgLAXQgMAXgTANQgUAMgaAAQgUAAgQgIQgRgHgKgOIgCAAIAABngAgsheQgRAUAAAmQAAAkARAUQARAVAbAAQAdAAARgVQARgUAAgkQAAgmgRgUQgRgUgdAAQgbAAgRAUg");
	this.shape_16.setTransform(-35.875,8.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CD2E34").s().p("ABuBnIAAh7QAAgagMgPQgNgOgWAAQgUAAgOAPQgOAQAAAYIAAB7IgcAAIAAh7QAAgagOgPQgMgOgVAAQgVAAgOAPQgOAQAAAYIAAB7IgdAAIAAjKIAXAAIAEAcIACAAQASgfAkAAQAUAAAPAJQAPAKAIASIACAAQAKgTARgJQAQgJAWAAQATAAAQAKQAQAJAKATQAIATABAZIAAB7g");
	this.shape_17.setTransform(-63.75,4.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CD2E34").s().p("AgwBdQgVgNgMgXQgMgYAAghQAAghAMgXQAMgYAVgMQAWgMAaAAQAcAAAVAMQAVAMAMAYQAMAXAAAhQAAAhgMAYQgMAXgVANQgVAMgcAAQgaAAgWgMgAgug5QgRAVAAAkQAAAlARAUQATAVAbAAQAdAAASgVQASgUAAglQAAgkgSgVQgSgUgdAAQgbAAgTAUg");
	this.shape_18.setTransform(-91,5.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CD2E34").s().p("Ag5B8QgcgQgQgfQgPggAAgtQAAgsAPgfQAQggAcgQQAbgQAkAAQAngBAdAUQAcATAPAlIgjAAQgLgXgUgMQgSgLgbAAQgZAAgVAMQgUANgMAaQgLAYAAAjQAAAjALAaQAMAZAUAMQAVANAZAAQAbAAASgMQAUgKALgZIAjAAQgPAmgcAUQgdASgnABQgkAAgbgRg");
	this.shape_19.setTransform(-114.85,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.9,-25.7,465.9,52.7);


(lib.Globe_Dot3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Globe_Dot3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD2E34").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,3,3);


(lib.Globe_Dot2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Globe_Dot2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD2E34").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.4,3,2.9);


(lib.Globe_Dot1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Globe_Dot1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD2E34").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,2.9,2.9);


(lib.Copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaAyIAAg8QAAgMgHgHQgHgHgLAAQgGAAgHADQgGAEgDAGQgEAGAAAHIAAA8IgOAAIAAhiIALAAIACAOIABAAQAFgIAIgEQAHgDAIAAQAKAAAJAEQAIAFAFAJQAFAKAAALIAAA8g");
	this.shape.setTransform(235.725,2.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAtQgLgGgGgLQgFgMgBgQQABgQAFgLQAGgLALgGQAKgGAMAAQAOAAAKAGQAKAGAGALQAGALAAAQQAAAQgGAMQgGALgKAGQgKAGgOAAQgMAAgKgGgAgWgbQgIAKAAARQAAASAIAKQAJAKANAAQAOAAAJgKQAIgKABgSQgBgRgIgKQgJgKgOAAQgNAAgJAKg");
	this.shape_1.setTransform(225,2.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGBEIAAhiIANAAIAABigAgGgyQgDgDAAgEQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgCg");
	this.shape_2.setTransform(217.575,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMA/QgKAAgGgHQgHgHAAgLIAAg8IgQAAIAAgNIAQAAIACgbIALAAIAAAbIAaAAIAAANIgaAAIAAA8QAAAFADADQADADAFAAIAPAAIAAAOg");
	this.shape_3.setTransform(212.075,0.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAtQgKgGgFgLQgHgMABgQQgBgQAHgLQAFgLAKgGQALgGAMAAQANAAALAGQAKAGAGALQAFALAAAQQAAAQgFAMQgGALgKAGQgLAGgNAAQgMAAgLgGgAgVgbQgJAKAAARQAAASAJAKQAIAKANAAQAOAAAJgKQAJgKAAgSQAAgRgJgKQgJgKgOAAQgNAAgIAKg");
	this.shape_4.setTransform(203.45,2.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA2AyIAAg8QAAgMgHgHQgGgHgKAAQgKAAgHAHQgHAIAAALIAAA8IgNAAIAAg8QAAgMgGgHQgHgHgKAAQgKAAgHAHQgHAIAAALIAAA8IgOAAIAAhiIALAAIACAOIABAAQAJgPASAAQAJAAAIAEQAHAFADAJIABAAQAFgKAIgEQAIgEALAAQAJAAAIAEQAIAFAEAJQAFAKAAALIAAA8g");
	this.shape_5.setTransform(190.025,2.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAaAyIAAg8QAAgMgHgHQgHgHgLAAQgGAAgHADQgGAEgDAGQgEAGAAAHIAAA8IgOAAIAAhiIALAAIACAOIABAAQAFgIAIgEQAHgDAIAAQAKAAAJAEQAIAFAFAJQAFAKAAALIAAA8g");
	this.shape_6.setTransform(172.575,2.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGBEIAAhiIANAAIAABigAgGgyQgDgDAAgEQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgCg");
	this.shape_7.setTransform(165.225,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXA+QgKgHgFgLQgGgLAAgRQAAgQAGgKQAFgMAKgGQAKgGAMAAQAJAAAIAEQAIAEAFAGIABAAIAAguIAPAAIAACDIgMAAIgCgNIgBAAQgFAIgIADQgIAFgKAAQgMgBgKgFgAgVgLQgIAKAAARQAAASAIAKQAIAKANAAQAOAAAIgKQAIgKAAgSQAAgRgIgKQgIgKgOAAQgNAAgIAKg");
	this.shape_8.setTransform(153.175,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_9.setTransform(145.75,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAxIAAhiIALAAIADAOIABAAQAEgHAGgDQAFgEAKAAIALAAIAAAOIgLAAQgLAAgHAHQgIAHABALIAAA7g");
	this.shape_10.setTransform(140.8,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAtQgLgGgGgLQgFgMAAgQQAAgQAFgLQAGgLALgGQAKgGAMAAQANAAALAGQAKAGAGALQAGALAAAQQAAAQgGAMQgGALgKAGQgLAGgNAAQgMAAgKgGgAgWgbQgIAKAAARQAAASAIAKQAJAKANAAQAOAAAJgKQAIgKAAgSQAAgRgIgKQgJgKgOAAQgNAAgJAKg");
	this.shape_11.setTransform(131.5,2.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAxIgVhLIgBAAIgVBLIgSAAIgbhiIAOAAIAWBPIABAAIAXhPIANAAIAXBPIABAAIAVhPIAPAAIgbBig");
	this.shape_12.setTransform(119.25,2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWAvQgIgEgEgHQgEgHgBgIQABgJAEgHQAEgGAJgEQAIgEALAAIAbAAIAAgGQAAgKgGgGQgHgGgKAAQgJAAgFAEQgGADgDAHIgPAAQAEgNAKgHQAKgHAOAAQARAAALAJQAKAKAAAQIAABAIgMAAIgCgNIgBAAQgDAGgIAEQgJAFgJAAQgKAAgIgEgAgTAIQgFAFAAAIQAAAIAFAEQAGAFAJAAQAMAAAJgIQAIgIAAgMIAAgGIgbAAQgKAAgHAEg");
	this.shape_13.setTransform(103.05,2.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAxIAAhiIALAAIADAOIABAAQAEgHAGgDQAGgEAJAAIALAAIAAAOIgLAAQgLAAgHAHQgHAHAAALIAAA7g");
	this.shape_14.setTransform(91.4,2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXAtQgKgGgGgLQgFgMAAgQQAAgQAFgLQAGgLAKgGQALgGAMAAQANAAALAGQAKAGAGALQAFALABAQQgBAQgFAMQgGALgKAGQgLAGgNAAQgMAAgLgGgAgWgbQgIAKAAARQAAASAIAKQAJAKANAAQAOAAAJgKQAIgKAAgSQAAgRgIgKQgJgKgOAAQgNAAgJAKg");
	this.shape_15.setTransform(82.1,2.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLBCIAAhUIgQAAIAAgOIAQAAIAAgJQAAgKAHgIQAGgGAKAAIAQAAIAAANIgPAAQgFAAgDADQgDADAAAFIAAAJIAaAAIAAAOIgaAAIAABUg");
	this.shape_16.setTransform(73.575,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAMA/QgKAAgGgHQgHgHAAgLIAAg8IgQAAIAAgNIAQAAIACgbIALAAIAAAbIAaAAIAAANIgaAAIAAA8QAAAFADADQADADAFAAIAPAAIAAAOg");
	this.shape_17.setTransform(62.725,0.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_18.setTransform(57.4,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGBEIAAhiIANAAIAABigAgGgyQgDgDAAgEQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgCg");
	this.shape_19.setTransform(53.225,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVAtQgIgFgFgIQgFgKAAgMIAAg8IAOAAIAAA8QAAANAHAHQAHAHALAAQAGAAAHgDQAGgEADgGQAEgGAAgIIAAg8IAOAAIAABiIgMAAIgBgNIgBAAQgFAIgIAEQgHAEgIAAQgKgBgJgFg");
	this.shape_20.setTransform(45.925,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQA/QgIgDgGgIIgBAAIgBANIgLAAIAAiDIANAAIAAAuIABAAQAGgGAIgEQAHgEAKAAQAMAAAKAGQAKAGAFAMQAGAKAAAQQAAARgGALQgFALgKAHQgKAFgMABQgKAAgIgFgAgWgLQgHAKgBARQABASAHAKQAJAKANAAQANAAAJgKQAIgKAAgSQAAgRgIgKQgJgKgNAAQgNAAgJAKg");
	this.shape_21.setTransform(35.3,0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWAtQgKgGgGgLQgGgMAAgQQAAgPAGgMQAGgLAKgGQAKgGAMAAQAOAAAKAHQALAHAFAKQAFALAAALIgBAJIhJAAQABAQAIAIQAIAJANAAQARAAAJgOIAPAAQgFANgLAHQgLAHgOAAQgNAAgKgGgAAegIQgBgMgIgJQgHgIgOAAQgMAAgIAIQgHAIgCANIA7AAIAAAAg");
	this.shape_22.setTransform(19.975,2.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAtQgLgGgFgLQgGgMAAgQQAAgQAGgLQAFgLALgGQAKgGAMAAQAPAAALAHQAKAHAFANIgPAAQgIgOgSAAQgNAAgIAKQgJAKAAARQAAASAJAKQAIAKANAAQASAAAIgOIAPAAQgFANgKAHQgLAHgPAAQgMAAgKgGg");
	this.shape_23.setTransform(9.675,2.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAaAyIAAg8QAAgMgHgHQgHgHgLAAQgGAAgHADQgGAEgDAGQgEAGAAAHIAAA8IgOAAIAAhiIALAAIACAOIABAAQAFgIAIgEQAHgDAIAAQAKAAAJAEQAIAFAFAJQAFAKAAALIAAA8g");
	this.shape_24.setTransform(-0.675,2.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWAvQgIgEgEgHQgEgHgBgIQABgJAEgHQAFgGAHgEQAJgEALAAIAbAAIAAgGQAAgKgGgGQgHgGgKAAQgJAAgFAEQgGADgDAHIgOAAQADgNAKgHQAKgHAOAAQARAAALAJQAKAKgBAQIAABAIgLAAIgCgNIgBAAQgDAGgJAEQgIAFgJAAQgLAAgHgEgAgTAIQgFAFAAAIQAAAIAFAEQAFAFAKAAQAMAAAJgIQAIgIAAgMIAAgGIgbAAQgKAAgHAEg");
	this.shape_25.setTransform(-11.15,2.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAxIAAhiIAMAAIACAOIAAAAQAEgHAHgDQAGgEAJAAIAKAAIAAAOIgKAAQgLAAgHAHQgHAHgBALIAAA7g");
	this.shape_26.setTransform(-18.65,2.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAtQgIgFgFgIQgFgKAAgMIAAg8IAOAAIAAA8QAAANAHAHQAHAHALAAQAGAAAHgDQAGgEADgGQAEgGAAgIIAAg8IAOAAIAABiIgMAAIgBgNIgBAAQgFAIgIAEQgHAEgIAAQgKgBgJgFg");
	this.shape_27.setTransform(-27.825,2.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXAsQgLgIgDgMIAPAAQADAGAFAEQAHAEAHAAQAMAAAGgEQAGgFAAgGQAAgFgDgEQgEgDgFgBIgMgEIgRgFQgHgBgFgGQgFgGAAgLQAAgHAEgGQAEgHAJgEQAHgDAKAAQAOAAAJAGQALAGACAMIgPAAQgCgFgGgDQgEgDgJAAQgKAAgFAEQgEADgBAHQABAGADADQADADAFACIAMAEIASAFQAGACAFAFQAFAGAAAKQAAAHgFAHQgEAGgJAEQgIAEgMAAQgNAAgKgHg");
	this.shape_28.setTransform(-37.6,2.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAaAyIAAg8QAAgMgHgHQgHgHgLAAQgGAAgHADQgGAEgDAGQgEAGAAAHIAAA8IgOAAIAAhiIALAAIACAOIABAAQAFgIAIgEQAHgDAIAAQAKAAAJAEQAIAFAFAJQAFAKAAALIAAA8g");
	this.shape_29.setTransform(-47.225,2.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_30.setTransform(-54.925,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.9,-13.8,485.8,27.700000000000003);


(lib.Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCEEED").s().p("Egl4ATiMAAAgnDMBLxAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.5,-125,485,250);


(lib.Globe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Globe
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0,0,1,1,0,0,0,20.9,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-20.9,41.9,41.9);


// stage content:
(lib.Sompo_Night_970x250_v11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Globe_Dot1
	this.instance = new lib.Globe_Dot1();
	this.instance.setTransform(923.05,35.9,0.35,0.35,0,0,0,0,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({regY:0,scaleX:1.1,scaleY:1.1,x:923,y:35.6,alpha:1},8).wait(102));

	// Globe_Dot2
	this.instance_1 = new lib.Globe_Dot2();
	this.instance_1.setTransform(906.8,47.05,0.35,0.35);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:906.7,alpha:1},9).wait(93));

	// Globe_Dot3
	this.instance_2 = new lib.Globe_Dot3();
	this.instance_2.setTransform(930.05,58.5,0.35,0.35,0,0,0,0.1,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87).to({_off:false},0).to({regX:0,scaleX:1.1,scaleY:1.1,x:930.15,alpha:1},8).wait(85));

	// Globe
	this.instance_3 = new lib.Globe();
	this.instance_3.setTransform(923.05,47.05);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:923,alpha:1},9).wait(108));

	// Heading
	this.instance_4 = new lib.Heading();
	this.instance_4.setTransform(715.6,113.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).to({alpha:1},11).wait(138));

	// Copy
	this.instance_5 = new lib.Copy();
	this.instance_5.setTransform(703.7,153.55);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).to({alpha:1},11).wait(127));

	// Sompo_Logo_Text
	this.instance_6 = new lib.Sompo_Logo_Text();
	this.instance_6.setTransform(889.9,213.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67).to({_off:false},0).wait(6).to({alpha:1},0).wait(107));

	// Sompo_Logo_circle1
	this.instance_7 = new lib.Sompo_Logo_circle1();
	this.instance_7.setTransform(830.05,208.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},0).to({x:823.3,y:208.95,alpha:1},2).to({rotation:180,x:812.25,y:208.1},4).to({rotation:0},17).wait(90));

	// Sompo_Logo_Shadow1
	this.instance_8 = new lib.Sompo_Logo_Shadow1();
	this.instance_8.setTransform(809.2,211.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(73).to({_off:false},0).wait(107));

	// Sompo_Logo_Dot_Red
	this.instance_9 = new lib.Sompo_Logo_Dot_Red();
	this.instance_9.setTransform(877.7,213.65,0.35,0.35,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;
	var instance_9Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_9.filters = [instance_9Filter_1];
	this.instance_9.cache(-15,-15,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40).to({_off:false},0).to({scaleX:1.4,scaleY:1.4,x:877.65,y:213.6,alpha:1},6).to({regX:0.2,scaleX:1,scaleY:1,x:874.9},9,cjs.Ease.cubicIn).to({regX:0,regY:0,x:806.7,y:213.65},18).wait(107));
	this.timeline.addTween(cjs.Tween.get(instance_9Filter_1).wait(40).to(new cjs.ColorFilter(0,0,0,1,227,0,0,0), 6).wait(9).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 18).wait(107));

	// Background
	this.instance_10 = new lib.Background();
	this.instance_10.setTransform(1212.85,125,1,1.016,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:727.5},29).wait(151));

	// New_Image
	this.instance_11 = new lib.New_Image();
	this.instance_11.setTransform(359.4,11.15,1.7255,1.7255);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.1596,scaleY:1.1596,x:188.1,y:140.65},29).to({scaleX:1,scaleY:1},141).wait(10));

	// Background_copy
	this.instance_12 = new lib.Background();
	this.instance_12.setTransform(485.5,125,2.0032,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(180));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_9, startFrame:40, endFrame:40, x:-15, y:-15, w:31, h:31});
	this.filterCacheList.push({instance: this.instance_9, startFrame:41, endFrame:46, x:-15, y:-15, w:31, h:31});
	this.filterCacheList.push({instance: this.instance_9, startFrame:47, endFrame:55, x:-15, y:-15, w:31, h:31});
	this.filterCacheList.push({instance: this.instance_9, startFrame:56, endFrame:73, x:-15, y:-15, w:31, h:31});
	this.filterCacheList.push({instance: this.instance_9, startFrame:73, endFrame:180, x:-15, y:-15, w:31, h:31});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(195.5,-296.3,1259.9,740);
// library properties:
lib.properties = {
	id: '340402B305AA4902929A84DBBE4AC4FA',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/TrafficImage.jpg", id:"TrafficImage"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['340402B305AA4902929A84DBBE4AC4FA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;