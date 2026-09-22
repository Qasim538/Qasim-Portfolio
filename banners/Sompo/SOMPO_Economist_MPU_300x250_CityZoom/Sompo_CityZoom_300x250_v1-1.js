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



(lib.CityZoomImage = function() {
	this.initialize(img.CityZoomImage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,936);// helper functions:

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


(lib.Text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaAyIAAg8QAAgMgHgHQgHgHgLAAQgGAAgHADQgGAEgDAGQgEAGAAAHIAAA8IgOAAIAAhiIALAAIACAOIABAAQAFgIAIgEQAHgDAIAAQAKAAAJAEQAIAFAFAJQAFAKAAALIAAA8g");
	this.shape.setTransform(66.075,13.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAtQgLgGgGgLQgFgMgBgQQABgQAFgLQAGgLALgGQAKgGAMAAQAOAAAKAGQAKAGAGALQAGALAAAQQAAAQgGAMQgGALgKAGQgKAGgOAAQgMAAgKgGgAgVgbQgJAKAAARQAAASAJAKQAIAKANAAQAOAAAJgKQAIgKABgSQgBgRgIgKQgJgKgOAAQgNAAgIAKg");
	this.shape_1.setTransform(55.35,14.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGBEIAAhiIANAAIAABigAgGgyQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEAAQgDABgDgDg");
	this.shape_2.setTransform(47.925,12.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMA/QgKAAgGgHQgHgHAAgLIAAg8IgQAAIAAgNIAQAAIACgbIALAAIAAAbIAaAAIAAANIgaAAIAAA8QAAAFADADQADADAFAAIAPAAIAAAOg");
	this.shape_3.setTransform(42.425,12.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAtQgKgGgFgLQgHgMABgQQgBgQAHgLQAFgLAKgGQALgGAMAAQANAAALAGQAKAGAGALQAFALAAAQQAAAQgFAMQgGALgKAGQgLAGgNAAQgMAAgLgGgAgVgbQgJAKAAARQAAASAJAKQAIAKANAAQAOAAAJgKQAJgKAAgSQAAgRgJgKQgJgKgOAAQgNAAgIAKg");
	this.shape_4.setTransform(33.8,14.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA2AyIAAg8QAAgMgHgHQgGgHgKAAQgKAAgHAHQgHAIAAALIAAA8IgNAAIAAg8QAAgMgGgHQgHgHgKAAQgKAAgHAHQgHAIAAALIAAA8IgOAAIAAhiIALAAIACAOIABAAQAJgPASAAQAJAAAIAEQAHAFADAJIABAAQAFgKAIgEQAIgEALAAQAJAAAIAEQAIAFAEAJQAFAKAAALIAAA8g");
	this.shape_5.setTransform(20.375,13.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAaAyIAAg8QAAgMgHgHQgHgHgLAAQgGAAgHADQgGAEgDAGQgEAGAAAHIAAA8IgOAAIAAhiIALAAIACAOIABAAQAFgIAIgEQAHgDAIAAQAKAAAJAEQAIAFAFAJQAFAKAAALIAAA8g");
	this.shape_6.setTransform(2.925,13.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGBEIAAhiIANAAIAABigAgGgyQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEAAQgDABgDgDg");
	this.shape_7.setTransform(-4.425,12.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXA+QgKgHgFgLQgGgMAAgQQAAgQAGgKQAFgMAKgGQAKgGAMAAQAJAAAIADQAIAFAFAGIABAAIAAgvIAPAAIAACEIgMAAIgCgNIgBAAQgFAIgIAEQgIADgKAAQgMAAgKgFgAgVgLQgIAKAAARQAAASAIAKQAIAKANAAQAOAAAIgKQAIgKAAgSQAAgRgIgKQgIgKgOAAQgNAAgIAKg");
	this.shape_8.setTransform(-16.475,12.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGBCIAAiEIANAAIAACEg");
	this.shape_9.setTransform(-23.9,12.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAxIAAhiIALAAIADAOIABAAQAEgHAGgDQAFgDAKgBIALAAIAAAOIgLAAQgLAAgHAHQgIAHABAKIAAA8g");
	this.shape_10.setTransform(-28.85,14.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAtQgLgGgGgLQgFgMAAgQQAAgQAFgLQAGgLALgGQAKgGAMAAQANAAALAGQAKAGAGALQAGALAAAQQAAAQgGAMQgGALgKAGQgLAGgNAAQgMAAgKgGgAgWgbQgIAKAAARQAAASAIAKQAJAKANAAQAOAAAJgKQAIgKAAgSQAAgRgIgKQgJgKgOAAQgNAAgJAKg");
	this.shape_11.setTransform(-38.15,14.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAxIgVhLIgBAAIgVBLIgSAAIgbhiIAOAAIAWBQIABAAIAXhQIANAAIAXBQIABAAIAVhQIAPAAIgbBig");
	this.shape_12.setTransform(-50.4,14.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWAvQgIgEgEgHQgEgHgBgIQABgJAEgHQAEgGAJgEQAIgEALAAIAbAAIAAgGQAAgKgGgGQgHgGgKAAQgJAAgFAEQgGADgDAHIgPAAQAEgNAKgHQAKgHAOAAQARAAALAJQAKAKAAAQIAABAIgMAAIgCgNIgBAAQgDAGgJAEQgIAFgJAAQgKAAgIgEgAgTAIQgFAFAAAIQAAAIAFAEQAGAFAJAAQAMAAAJgIQAIgIAAgMIAAgGIgbAAQgLAAgGAEg");
	this.shape_13.setTransform(-66.6,14.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAxIAAhiIALAAIADAOIABAAQAEgHAGgDQAGgDAJgBIALAAIAAAOIgLAAQgLAAgHAHQgHAHAAAKIAAA8g");
	this.shape_14.setTransform(72.95,-9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXAtQgKgGgGgLQgFgMAAgQQAAgQAFgLQAGgLAKgGQALgGAMAAQANAAALAGQAKAGAGALQAFALABAQQgBAQgFAMQgGALgKAGQgLAGgNAAQgMAAgLgGgAgWgbQgIAKAAARQAAASAIAKQAJAKANAAQAOAAAJgKQAIgKAAgSQAAgRgIgKQgJgKgOAAQgNAAgJAKg");
	this.shape_15.setTransform(63.65,-9.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLBCIAAhUIgQAAIAAgOIAQAAIAAgJQAAgKAHgIQAGgGAKgBIAQAAIAAAOIgPAAQgFAAgDADQgDADAAAFIAAAJIAaAAIAAAOIgaAAIAABUg");
	this.shape_16.setTransform(55.125,-11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAMA/QgKAAgGgHQgHgHAAgLIAAg8IgQAAIAAgNIAQAAIACgbIALAAIAAAbIAaAAIAAANIgaAAIAAA8QAAAFADADQADADAFAAIAPAAIAAAOg");
	this.shape_17.setTransform(44.275,-11.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGBCIAAiEIANAAIAACEg");
	this.shape_18.setTransform(38.95,-11.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGBEIAAhiIANAAIAABigAgGgyQgDgDAAgEQAAgEADgEQADgCADgBQAEABADACQADAEAAAEQAAAEgDADQgDACgEAAQgDABgDgDg");
	this.shape_19.setTransform(34.775,-11.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVAuQgIgFgFgKQgFgIAAgNIAAg8IAOAAIAAA8QAAANAHAHQAHAHALAAQAGAAAHgDQAGgEADgHQAEgFAAgIIAAg8IAOAAIAABiIgMAAIgBgNIgBAAQgFAIgIAEQgHADgIAAQgKAAgJgEg");
	this.shape_20.setTransform(27.475,-9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQA/QgIgDgGgIIgBAAIgCANIgKAAIAAiEIANAAIAAAvIABAAQAGgGAIgFQAHgDAKAAQAMAAAKAGQAKAGAFAMQAGAKAAAQQAAAQgGAMQgFALgKAHQgKAFgMAAQgKAAgIgEgAgWgLQgHAKgBARQABASAHAKQAJAKANAAQANAAAJgKQAIgKAAgSQAAgRgIgKQgJgKgNAAQgNAAgJAKg");
	this.shape_21.setTransform(16.85,-11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWAtQgKgGgGgLQgGgMAAgQQAAgPAGgMQAGgLAKgGQAKgGAMAAQAOAAAKAHQALAHAFAKQAFALAAALIgBAJIhJAAQABAQAIAIQAIAJANAAQARAAAJgOIAPAAQgFANgLAHQgLAHgOAAQgNAAgKgGgAAegIQgBgMgIgJQgHgIgOAAQgMAAgIAIQgHAIgCANIA7AAIAAAAg");
	this.shape_22.setTransform(1.525,-9.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAtQgLgGgFgLQgGgMAAgQQAAgQAGgLQAFgLALgGQAKgGAMAAQAPAAALAHQAKAHAFANIgPAAQgIgOgSAAQgNAAgIAKQgJAKAAARQAAASAJAKQAIAKANAAQASAAAIgOIAPAAQgFANgKAHQgLAHgPAAQgMAAgKgGg");
	this.shape_23.setTransform(-8.775,-9.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAaAyIAAg8QAAgMgHgHQgHgHgLAAQgGAAgHADQgGAEgDAGQgEAGAAAHIAAA8IgOAAIAAhiIALAAIACAOIABAAQAFgIAIgEQAHgDAIAAQAKAAAJAEQAIAFAFAJQAFAKAAALIAAA8g");
	this.shape_24.setTransform(-19.125,-9.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWAvQgIgEgEgHQgEgHgBgIQABgJAEgHQAFgGAHgEQAJgEALAAIAbAAIAAgGQAAgKgGgGQgHgGgKAAQgJAAgFAEQgGADgDAHIgOAAQADgNAKgHQAKgHAOAAQARAAALAJQAKAKgBAQIAABAIgLAAIgCgNIgBAAQgDAGgJAEQgIAFgJAAQgLAAgHgEgAgTAIQgFAFAAAIQAAAIAFAEQAFAFAKAAQAMAAAJgIQAIgIAAgMIAAgGIgbAAQgKAAgHAEg");
	this.shape_25.setTransform(-29.6,-9.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAxIAAhiIAMAAIACAOIAAAAQAEgHAHgDQAGgDAJgBIAKAAIAAAOIgKAAQgLAAgHAHQgHAHgBAKIAAA8g");
	this.shape_26.setTransform(-37.1,-9.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAuQgIgFgFgKQgFgIAAgNIAAg8IAOAAIAAA8QAAANAHAHQAHAHALAAQAGAAAHgDQAGgEADgHQAEgFAAgIIAAg8IAOAAIAABiIgMAAIgBgNIgBAAQgFAIgIAEQgHADgIAAQgKAAgJgEg");
	this.shape_27.setTransform(-46.275,-9.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAsQgKgIgDgMIAPAAQADAGAFAEQAHAEAHAAQAMAAAGgEQAGgFAAgGQAAgFgEgEQgDgDgFgBIgMgEIgRgFQgHgBgFgGQgFgGAAgLQAAgHAEgGQAEgHAJgEQAHgDAKAAQAOAAAJAGQALAGACAMIgPAAQgCgFgGgDQgEgDgJAAQgKAAgFAEQgEADgBAHQABAGADADQADADAFACIAMAEIASAFQAGACAFAFQAFAGAAAKQAAAHgFAHQgEAGgJAEQgIAEgMAAQgNAAgLgHg");
	this.shape_28.setTransform(-56.05,-9.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAaAyIAAg8QAAgMgHgHQgHgHgLAAQgGAAgHADQgGAEgDAGQgEAGAAAHIAAA8IgOAAIAAhiIALAAIACAOIABAAQAFgIAIgEQAHgDAIAAQAKAAAJAEQAIAFAFAJQAFAKAAALIAAA8g");
	this.shape_29.setTransform(-65.675,-9.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHBCIAAiEIAPAAIAACEg");
	this.shape_30.setTransform(-73.375,-11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-25.7,304,51.5);


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
	this.shape.graphics.f("#000000").s().p("AFlBLQgageAAgtQAAgtAagdQAdgfAyAAQAzAAAbAeQAaAdAAAuQAAAvgbAdQgcAegxAAQgyAAgdgfgAF/g3QgRAXAAAgQABAgAQAYQASAcAjAAQAhAAAUgcQAPgXAAghQAAgggPgXQgUgcghAAQgiAAgTAcgAlPBLQgageAAgtQAAgtAagdQAdgfAyAAQAzAAAbAeQAZAdAAAuQAAAvgaAdQgcAegxAAQgyAAgdgfgAk1g3QgQAXgBAgQABAgAQAYQASAcAiAAQAiAAATgcQAQgXAAghQAAgggPgXQgUgcgiAAQghAAgTAcgAobBfIACgYQAhAOAfAAQAWAAAOgIQAPgJAAgSQAAgOgNgLQgLgIgWgIIgTgIQgxgSAAghQAAgbAbgPQAXgNAiAAQAfAAAbAHIgDAXQgcgKgbAAQgUAAgOAIQgOAJAAAPQAAAMALAIQAJAHAUAIIASAHQA5AUAAAlQAAAdgZAQQgYAPglAAQgkAAgggLgACeBnIAAjNIBBAAQBWAAAAA7QAAAigaAPQgXAOgnAAIgcAAIAABTgADBAAIAgAAQAXAAANgLQANgLAAgVQAAgTgOgKQgNgJgWAAIggAAgABUBnIAAizIhHCzIgdAAIhGizIAACzIgfAAIAAjNIAxAAIBDCsIBDisIAvAAIAADNg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-10.6,108,21.299999999999997);


(lib.Sompo_Logo_Shadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#8D1B27","#8B1A26","#851823","#7C161F","#7A161E","#70131A","#6A1117","#681116","#5F0F12","#580D10","#560C0F"],[0.094,0.176,0.208,0.224,0.231,0.275,0.337,0.51,0.569,0.659,0.906],-7.7,13.1,5,-9.6).s().p("Ag9BMQgogoAAg4QAAgxAgglQAYgIAVAAQgYAPgOAYQgPAaAAAdQABAuAgAgQAhAhAsAAQAmAAAfgYQgIAWgQATQgUAHgZAAQg2AAgogng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-11.5,20.4,23);


(lib.Sompo_Logo_RedDot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Sompo_Logo_RedDot
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6B120F","#CE2C3A"],[0,1],0,13.6,0,-13.5).s().p("AhfBgQgngoAAg4QAAg3AngoQAognA3AAQA5AAAnAnQAoAoAAA3QAAA4goAoQgoAng4AAQg3AAgogng");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-13.5,27.1,27.1);


(lib.Sompo_Logo_circle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#404040","#999999","#E6E6E6","#999999","#404040"],[0,0.275,0.498,0.863,1],0,12.3,0,-12.3).s().p("AhWBXQgkglAAgyQAAgyAkgkQAkgkAyAAQAzAAAkAkQAkAkAAAyQAAAygkAlQgkAkgzAAQgyAAgkgkgAhNhOQghAhAAAtQAAAuAhAgQAgAhAtAAQAuAAAgghQAhggAAguQAAgtghghQggghguAAQgtAAggAhg");
	this.shape.setTransform(0,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#A6A6A6","#404040","#E6E6E6","#BFBFBF"],[0,0.086,0.4,0.498,1],0,13.6,0,-13.5).s().p("AhfBgQgngoAAg4QAAg3AogoQAngnA3AAQA4AAAoAnQAoAoAAA3QAAA4goAoQgoAng4AAQg3AAgogngAhUhTQgiAjgBAwQABAyAiAjQAjAjAxAAQAxAAAkgjQAjgjAAgyQAAgwgjgjQgkgjgxAAQgxAAgjAjg");
	this.shape_1.setTransform(0,0.025);

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
	mask.graphics.p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	mask.setTransform(276.5,370.65);

	// Layer_3
	this.instance = new lib.CityZoomImage();
	this.instance.setTransform(0,0,0.7522,0.7522);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(126.5,245.7,300,250), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjIDJIAAmRIGRAAIAAGRg");
	mask_1.setTransform(20.075,20.075);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiNCOQg7g7AAhTQAAhSA7g7QA7g7BSAAQBTAAA7A7QA7A7AABSQAABTg7A7Qg7A7hTAAQhSAAg7g7gAABDHQATAAAQgbQAQgbAJgsIg8AAgAgjCsQAQAbATAAIAAhiIg8AAQAJAsAQAbgAApCmQgNAagRAHQAjgEAegbQAdgaARgpIg7AAQgJAngNAagAgKDHQgRgHgNgaQgNgagJgnIg7AAQARApAdAaQAeAbAjAEIAAAAgABUCjQgaAagfAIQAugGAmgaQAmgZAXgnIgwAAQgPAlgZAZgAgaDFQgfgIgagaQgZgZgPglIgwAAQAXAnAmAZQAmAaAuAGIAAAAgAB9BjIAwAAQAagtAAg1Ig3AAQAAA0gTAugAA/BjIA8AAQATguAAg0IhGAAQAAA0gJAugAABBjIA8AAQAJgqABg4IhGAAgAg8BjIA8AAIAAhiIhGAAQABA4AJAqgAg+BjQgJguAAg0IhGAAQAAA0ATAuIA8AAIAAAAgAh8BjQgTguAAg0Ig3AAQABA1AZAtIAwAAIAAAAgADHAAQAAg1gagtIgwAAQATAuAAA0IA3AAIAAAAgACOAAQAAg0gTguIg8AAQAJAuAAA0IBGAAIAAAAgABHAAQgBg4gJgqIg8AAIAABiIBGAAIAAAAgAhGAAIBGAAIAAhiIg8AAQgJAqgBA4gAiNAAIBGAAQAAg0AJguIg8AAQgTAuAAA0gAjGAAIA3AAQAAgzATgvIgwAAQgZAtgBA1gACshkQgXgngmgZQgmgagugGQAfAIAaAaQAZAZAPAlIAwAAIAAAAgAB6hkQgRgpgdgaQgegbgjgDQARAHANAaQANAZAJAnIA7AAIAAAAgAA9hkQgJgsgQgaQgQgbgTgBIAABiIA8AAIAAAAgAgjiqQgQAagJAsIA8AAIAAhiQgTABgQAbgAhLinQgdAagRApIA7AAQAJgnANgZQANgaARgHQgjADgeAbgAhuikQgmAZgXAnIAwAAQAPglAZgZQAagaAfgIQguAGgmAag");
	this.shape.setTransform(20.075,20.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,40.2,40.2), null);


(lib.Heading1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CD2E34").s().p("AghBXQgNgIgJgQQgHgRgBgXQABgXAHgPQAJgRANgIQAOgJARAAQAOAAAMAGQALAFAHAJIABAAIAAhCIAUAAIAAC8IgPAAIgEgTIgBAAQgHALgLAFQgNAGgOAAQgRAAgOgJgAgegQQgMAOAAAZQAAAaAMAOQALAOATAAQAUAAAMgOQAMgOgBgaQABgZgMgOQgMgOgUAAQgTAAgLAOg");
	this.shape.setTransform(117.25,0.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD2E34").s().p("AgfBAQgPgIgIgQQgJgRAAgXQAAgWAJgQQAIgRAPgIQANgJASAAQAUAAAPAKQAOAKAIAPQAGAQAAAPIgBANIhoAAQACAXAMAMQALAMASAAQAZAAAMgUIAWAAQgIATgPAKQgPAKgVAAQgSAAgOgJgAArgLQgCgSgKgMQgMgMgTAAQgSAAgKALQgLAMgCATIBUAAIAAAAg");
	this.shape_1.setTransform(102.4,3.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD2E34").s().p("AgJBhIAAiLIATAAIAACLgAgJhIQgEgEAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(92.175,0.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CD2E34").s().p("AgQBfIAAh5IgWAAIAAgTIAWAAIAAgNQAAgPAKgKQAJgLAPABIAVAAIAAATIgUAAQgHAAgFAEQgEAEAAAIIAAANIAkAAIAAATIgkAAIAAB5g");
	this.shape_3.setTransform(85.125,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CD2E34").s().p("AgJBhIAAiLIATAAIAACLgAgJhIQgEgEAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_4.setTransform(77.875,0.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CD2E34").s().p("AgJBfIAAi8IATAAIAAC8g");
	this.shape_5.setTransform(72.25,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CD2E34").s().p("Ag+BjIAAjCIAQAAIADATIABAAQAHgKALgGQANgFANAAQASAAAOAIQANAJAIAQQAJAQAAAYQAAAXgJAPQgIAQgNAIQgOAJgSAAQgNAAgMgFQgLgFgHgKIgBAAIAABIgAgfhAQgMAOABAaQgBAYAMAOQAMAPATAAQATAAAMgPQAMgOAAgYQAAgagMgOQgMgOgTgBQgTABgMAOg");
	this.shape_6.setTransform(61.95,5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CD2E34").s().p("ABMBIIAAhWQAAgSgJgKQgIgKgPAAQgOAAgKALQgKALAAAQIAABWIgTAAIAAhWQAAgSgJgKQgJgKgOAAQgPAAgJALQgLALABAQIAABWIgUAAIAAiMIAPAAIAEATIABAAQANgWAZABQAMAAALAGQALAHAFAMIACAAQAGgNAMgGQALgGAPAAQAOgBAKAIQALAGAHANQAGANABARIAABWg");
	this.shape_7.setTransform(42.55,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CD2E34").s().p("AgJBhIAAiLIATAAIAACLgAgJhIQgEgEAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_8.setTransform(28.325,0.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CD2E34").s().p("AgjA+QgOgLgEgRIAVAAQAEAJAJAGQAIAFALAAQARAAAIgGQAJgGAAgKQgBgHgEgEQgEgFgHgCIgSgFQgQgDgJgEQgKgDgHgIQgHgJAAgPQAAgKAGgJQAGgJALgFQAMgGAOAAQATAAAOAJQAOAKAEAQIgWAAQgDgHgHgFQgIgEgLAAQgOAAgHAFQgIAGABAJQgBAIAFAFQAEAEAIADIASAFIAZAIQAJACAHAJQAHAIAAANQAAALgHAKQgGAJgNAFQgMAGgQAAQgUAAgPgLg");
	this.shape_9.setTransform(19.4,3.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CD2E34").s().p("AgeBhIAVg2Ig5iLIAVAAIAtBvIACAAIArhvIAXAAIhNDBg");
	this.shape_10.setTransform(0.8,5.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CD2E34").s().p("AASBZQgPAAgJgKQgKgKAAgPIAAhVIgWAAIAAgTIAWAAIACgmIARAAIAAAmIAkAAIAAATIgkAAIAABVQAAAHAEAFQAFAEAHAAIAUAAIAAATg");
	this.shape_11.setTransform(-10.825,1.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CD2E34").s().p("AgJBhIAAiLIATAAIAACLgAgJhIQgEgEAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(-18.075,0.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CD2E34").s().p("AAnBGIgng6IgmA6IgXAAIAyhIIgwhDIAYAAIAjA0IAlg0IAWAAIgvBDIAyBIg");
	this.shape_13.setTransform(-26.9,3.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CD2E34").s().p("AggBAQgOgIgIgQQgJgRABgXQgBgWAJgQQAIgRAOgIQAPgJARAAQAVAAAOAKQAOAKAIAPQAGAQABAPIgCANIhoAAQACAXALAMQAMAMATAAQAYAAAMgUIAVAAQgGATgQAKQgPAKgUAAQgTAAgPgJgAArgLQgBgSgMgMQgKgMgUAAQgSAAgLALQgKAMgCATIBUAAIAAAAg");
	this.shape_14.setTransform(-40.4,3.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CD2E34").s().p("AgJBfIAAi8IATAAIAAC8g");
	this.shape_15.setTransform(-50.7,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CD2E34").s().p("Ag+BjIAAjCIAPAAIAEATIABAAQAHgKALgGQANgFAOAAQARAAAOAIQANAJAJAQQAHAQABAYQgBAXgHAPQgJAQgNAIQgOAJgRAAQgOAAgMgFQgLgFgHgKIgBAAIAABIgAgfhAQgMAOABAaQgBAYAMAOQAMAPATAAQAUAAALgPQAMgOAAgYQAAgagMgOQgLgOgUgBQgTABgMAOg");
	this.shape_16.setTransform(-61,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CD2E34").s().p("ABMBIIAAhWQAAgSgJgKQgJgKgOAAQgPAAgJALQgKALAAAQIAABWIgTAAIAAhWQAAgSgJgKQgJgKgPAAQgOAAgJALQgKALAAAQIAABWIgVAAIAAiMIAQAAIAEATIABAAQANgWAZABQAMAAALAGQALAHAFAMIACAAQAGgNAMgGQALgGAPAAQANgBALAIQALAGAHANQAGANABARIAABWg");
	this.shape_17.setTransform(-80.4,3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CD2E34").s().p("AghBAQgOgIgIgQQgJgRAAgXQAAgWAJgRQAIgQAOgIQAPgJASAAQATAAAPAJQAOAIAJAQQAIARAAAWQAAAXgIARQgJAQgOAIQgPAJgTAAQgSAAgPgJgAgfgnQgMAOAAAZQAAAaAMAOQAMAOATAAQAUAAAMgOQANgOAAgaQAAgZgNgOQgMgOgUAAQgTAAgMAOg");
	this.shape_18.setTransform(-99.375,3.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CD2E34").s().p("AgnBWQgUgLgLgWQgKgWAAgfQAAgeAKgWQALgWAUgLQATgLAYAAQAbAAAVANQATANAKAaIgZAAQgHgQgNgIQgOgIgSAAQgRAAgPAJQgNAJgIARQgIARAAAYQAAAZAIARQAIARANAJQAPAJARAAQASAAAOgIQANgIAHgRIAZAAQgKAbgTANQgVANgbAAQgYAAgTgLg");
	this.shape_19.setTransform(-115.95,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-18.8,304,37.7);


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
	this.shape.graphics.f("#CD2E34").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,2.9,2.9);


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
	this.shape.graphics.f("#CD2E34").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,2.9,2.9);


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
	this.shape.graphics.f("#CD2E34").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,2.9,2.9);


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
	this.shape.graphics.f("#FCEEED").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Image
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-5.7,-18.65,1,1,0,0,0,270.8,352);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.5,-370.6,541.6,704);


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
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40.1,40.1);


// stage content:
(lib.Sompo_300x250_v11 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(149.95,38.05,0.5,0.5,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:149.9,y:37.55,alpha:1},8).wait(83));

	// Globe_Dot2
	this.instance_1 = new lib.Globe_Dot2();
	this.instance_1.setTransform(134.35,48.55,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:134.2,alpha:1},8).wait(75));

	// Globe_Dot3
	this.instance_2 = new lib.Globe_Dot3();
	this.instance_2.setTransform(156.7,59.6,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(105).to({_off:false},0).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:156.75,y:59.55,alpha:1},8).wait(67));

	// Globe
	this.instance_3 = new lib.Globe();
	this.instance_3.setTransform(149.95,48.55);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(83).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:149.9,alpha:1},9).wait(88));

	// Heading1
	this.instance_4 = new lib.Heading1();
	this.instance_4.setTransform(150,102.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).to({alpha:1},10).wait(120));

	// Text
	this.instance_5 = new lib.Text();
	this.instance_5.setTransform(150,151.25);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60).to({_off:false},0).to({alpha:1},9).wait(111));

	// Sompo_Logo_Text
	this.instance_6 = new lib.Sompo_Logo_Text();
	this.instance_6.setTransform(171.35,209.35);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(87).to({_off:false},0).to({alpha:1},4).wait(89));

	// Sompo_Logo_circle
	this.instance_7 = new lib.Sompo_Logo_circle();
	this.instance_7.setTransform(102.9,204);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(92).to({_off:false},0).to({x:96.45,alpha:1},3).to({x:93.7},4).to({rotation:180},4).to({rotation:0},12).wait(65));

	// Sompo_Logo_Shadow
	this.instance_8 = new lib.Sompo_Logo_Shadow();
	this.instance_8.setTransform(90.65,207.55);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({_off:false},0).wait(81));

	// Sompo_Logo_RedDot
	this.instance_9 = new lib.Sompo_Logo_RedDot();
	this.instance_9.setTransform(88.15,209.55);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;
	var instance_9Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_9.filters = [instance_9Filter_1];
	this.instance_9.cache(-15,-15,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(48).to({_off:false},0).to({regX:0.2,regY:0.1,scaleX:0.45,scaleY:0.45,x:150},11).to({regX:0,regY:0,scaleX:1.45,scaleY:1.45,x:149.95,y:209.5,alpha:1},6).to({scaleX:1,scaleY:1,x:135.3,y:209.55},10).to({x:88.15},24).wait(81));
	this.timeline.addTween(cjs.Tween.get(instance_9Filter_1).wait(48).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 11).to(new cjs.ColorFilter(0,0,0,1,227,0,0,0), 6).wait(10).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24).wait(81));

	// Background
	this.instance_10 = new lib.Background();
	this.instance_10.setTransform(450,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(22).to({_off:false},0).to({x:150},25,cjs.Ease.cubicIn).wait(133));

	// Image
	this.instance_11 = new lib.Image();
	this.instance_11.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.096,scaleY:1.096},30).wait(150));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_9, startFrame:48, endFrame:48, x:-15, y:-15, w:31, h:31});
	this.filterCacheList.push({instance: this.instance_9, startFrame:49, endFrame:59, x:-15, y:-15, w:31, h:31});
	this.filterCacheList.push({instance: this.instance_9, startFrame:60, endFrame:65, x:-15, y:-15, w:31, h:31});
	this.filterCacheList.push({instance: this.instance_9, startFrame:66, endFrame:75, x:-15, y:-15, w:31, h:31});
	this.filterCacheList.push({instance: this.instance_9, startFrame:76, endFrame:99, x:-15, y:-15, w:31, h:31});
	this.filterCacheList.push({instance: this.instance_9, startFrame:99, endFrame:180, x:-15, y:-15, w:31, h:31});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-156.2,603,646.7);
// library properties:
lib.properties = {
	id: '7CFD8955CF3B43ADB521A783B4629A6F',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CityZoomImage.jpg", id:"CityZoomImage"}
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
an.compositions['7CFD8955CF3B43ADB521A783B4629A6F'] = {
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