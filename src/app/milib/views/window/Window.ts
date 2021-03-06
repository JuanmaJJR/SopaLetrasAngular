import {View} from '../view';
import {Motor} from '../../engines/motor'

export class Window extends View{

    private sColor:string='#FFFFFF';
    
    
    public setColor(vsColor:string):void{
        this.sColor=vsColor;
    }
    
    paint(vctx:CanvasRenderingContext2D){
        
    
        vctx.fillStyle = this.sColor;  
        vctx.fillRect(this.x, this.y, this.w, this.h);
        
    }
    public setSize(vWidth:number,vHeight:number):void{
        super.setSize(vWidth,vHeight);
    }
    public setPosition(vX:number,vY:number):void{
        super.setPosition(vX,vY);
    }


}