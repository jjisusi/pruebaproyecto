import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-mandelbrot',
  templateUrl: './mandelbrot.component.html',
  styleUrls: ['./mandelbrot.component.css']
})
export class MandelbrotComponent implements OnInit {

  @ViewChild('canvas', {static: true}) canvasRef: ElementRef
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  @Input('panX') panX = 2
  @Input('panY') panY = 1.5
  @Input('magnificationFactor') magnificationFactor = 200
  @Input('maxIterations') maxIterations = 100
  @Input('mId') mId: string
  @Output('onMandelbrotDelete') onMandelbrotDelete = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
    this.canvas = this.canvasRef.nativeElement
    this.ctx = this.canvas.getContext("2d");
    this.draw()
  }

  delete() {
    console.log(this.mId)
    console.log(this.panX)
    console.log(this.panY)
    console.log(this.magnificationFactor)
    console.log(this.maxIterations)
    
    this.onMandelbrotDelete.emit(this.mId)
  }

  checkIfBelongsToMandelbrotSet(x, y) {
    var realComponentOfResult = x;
    var imaginaryComponentOfResult = y;
    for (var i = 0; i < this.maxIterations; i++) {
      var tempRealComponent = realComponentOfResult * realComponentOfResult
        - imaginaryComponentOfResult * imaginaryComponentOfResult
        + x;
      var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
        + y;
      realComponentOfResult = tempRealComponent;
      imaginaryComponentOfResult = tempImaginaryComponent;

      // Return a number as a percentage
      if (realComponentOfResult * imaginaryComponentOfResult > 5)
        return (i / this.maxIterations * 100);
    }
    return 0;   // Return zero if in set 
  }

  draw() {
    for (var x = 0; x < this.canvas.width; x++) {
      for (var y = 0; y < this.canvas.height; y++) {
        var belongsToSet =
          this.checkIfBelongsToMandelbrotSet(x / this.magnificationFactor - this.panX,
            y / this.magnificationFactor - this.panY);
        if (belongsToSet == 0) {
          this.ctx.fillStyle = '#000';
          this.ctx.fillRect(x, y, 1, 1); // Draw a black pixel
        } else {
          this.ctx.fillStyle = 'hsl(0, 100%, ' + belongsToSet + '%)';
          this.ctx.fillRect(x, y, 1, 1); // Draw a colorful pixel
        }
      }
    }
  }
}
