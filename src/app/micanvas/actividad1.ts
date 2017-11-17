import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Window} from '../milib/views/window/Window';
import {Button,ButtonListener} from '../milib/views/buttons/button';
import {Letra} from '../milib/views/letras/letra';

import {Label} from '../milib/views/labels/label';


export class Actividad1 implements EventsAdminListener,ButtonListener{

    //NG BUILD --PROD

    private motor:Motor;
    private panelMenu:Panel;
    private panelJuego:Panel;
    private imagenFondo:Imagen;
    private window1:Window;
    private buttonSalir:Button;
    private buttonNuevo:Button;
    private buttonContinuar:Button;
    private imagenCentro:Imagen;
    private imagenGanar:Imagen;
    private w2:Window;
    private w3:Window;
    private pmw=DataHolder.instance.nScreenWidth*0.6;
    private pmx=DataHolder.instance.nScreenWidth2-(this.pmw>>1);
    private pmh=DataHolder.instance.nScreenHeight*0.6;
    private pmy=DataHolder.instance.nScreenHeight2-(this.pmh>>1);
    private lblPreg:Label;
    private btnLetra1:Button;
    private btnLetra2:Button;
    private btnLetra3:Button;
    private btnLetra4:Button;
    private btnLetra5:Button;
    private btnLetra6:Button;
    private btnLetra7:Button;
    private btnLetra8:Button;
    private btnLetra9:Button;
    private btnLetra10:Button;
    private btnLetra11:Button;
    private btnLetra12:Button;
    private btnLetra13:Button;
    private btnLetra14:Button;
    private btnLetra15:Button;
    private btnLetra16:Button;
    private btnLetra17:Button;
    private btnLetra18:Button;
    private btnLetra19:Button;
    private btnLetra20:Button;
    private btnLetra21:Button;
    private btnLetra22:Button;
    private btnLetra23:Button;
    private btnLetra24:Button;
    private btnLetra25:Button;
    private btnLetra26:Button;
    private btnLetra27:Button;
    private btnLetra28:Button;
    private btnLetra29:Button;
    private btnLetra30:Button;
    private btnLetra31:Button;
    private btnLetra32:Button;
    private btnLetra33:Button;
    private btnLetra34:Button;
    private btnLetra35:Button;
    private btnLetra36:Button;
    private btnValidar:Button;


    private buttonX:Button;
    private buttonX2:Button;
    private arrayPreguntas: any[];
    private palabras: any[];
    
    private arrayResp: any[];
    private arrayRespCorrec: any[];
    private imagenTitulo:Imagen;
    private imagenW2:Imagen;
    private imagenComo:Imagen;
    private buttonComo:Button;
    private wComo:Window;
    private lblComo:Label;
    private lbl2Como:Label;
    private lbl3Como:Label;
    private lbl4Como:Label;
    private lbla:Label;
    private lblPreg1:Label;
    private StringAux: string;

    
    


    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/1.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        this.palabras= ["house","cat","red","dog","life","sea"];
    }

    /**
     * OJO!! AUNQUE EN ESTE EJEMPLO SE USE EL PANEL, ES OBLIGATORIO CREAR UN OBJETO WINDOW EN EL MILIB, Y AGREGARLE EL BOTON
     * DE SALIR EN LA ESQUINA COMO SALE EN EL LA PAGINA WEB. HABRA QUE QUITAR EL PANEL Y USAR WINDOW
     */
    private crearEscenarioMenu():void{

        this.window1=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
        this.motor.addViewToParentView(this.imagenFondo,this.window1);

        //CREAMOS IMAGEN CON TITULO
        this.imagenTitulo=new Imagen(this.motor,this.pmx,this.pmy-250,this.pmw/1,this.pmh/1.5);
        this.imagenTitulo.setImg('./assets/tcr.png')
        this.motor.addViewToParentView(this.imagenFondo,this.imagenTitulo);


        //CREAMOS IMAGEN Y AÑADIMOS AL WINDOW CENTRAL
       this.imagenCentro=new Imagen(this.motor,0,0,this.pmw,this.pmh);
       this.imagenCentro.setImg('./assets/btc.jpg');
       this.motor.addViewToParentView(this.window1,this.imagenCentro);
        
       //AÑADIR BOTON COMO JUGAR
       //this.buttonComo=new Button(this.motor,this.pmx*2.7,this.pmy*2.7,100,50);
       //this.buttonComo.setTexto("COMO JUGAR");
       //this.motor.addViewToParentView(this.window1,this.buttonComo);
       //this.buttonComo.setImagePath('./assets/btn.png')
       //this.buttonComo.setListener(this);

       //AÑADIR BOTON SALIR
       this.buttonSalir=new Button(this.motor,this.pmx*0.4,this.pmy*2.1,200,100);
       this.buttonSalir.setTexto("SALIR");
       this.motor.addViewToParentView(this.window1,this.buttonSalir);
       this.buttonSalir.setImagePath('./assets/btn.png')
       this.buttonSalir.setListener(this);
       
       //AÑADIR BOTON CONTINUAR
       this.buttonContinuar=new Button(this.motor,this.pmx*0.4,this.pmy*1.2,200,100);
       this.buttonContinuar.setTexto("CONTINUAR");
       this.motor.addViewToParentView(this.window1,this.buttonContinuar);
       this.buttonContinuar.setImagePath('./assets/btn.png');
       this.buttonContinuar.setListener(this);
       //AÑADIR BOTON NUEVO
       this.buttonNuevo=new Button(this.motor,this.pmx*0.4,this.pmy*0.3,200,100);
       this.buttonNuevo.setTexto("NUEVO");
       this.motor.addViewToParentView(this.window1,this.buttonNuevo);
       this.buttonNuevo.setImagePath('./assets/btn.png');
       this.buttonNuevo.setListener(this);

        //LABEL PARA SETEAR FONTS :P
        this.lbla= new Label(this.motor,this.pmx*1.3,40,0,0);
        this.motor.addViewToParentView(this.window1,this.lbla);
        this.lbla.setTexto(""); 
        this.lbla.setFontStyle("12px Comic Sans MS");
        this.StringAux = "";
       


    }
    buttonListenerOnClick?(btn:Button):void{
        
        //ESTE IF THE 36 BOTONES DEBERIA HACERSE COMPROBANDO ALGUN TIPO DE ARRAY O MATRIZ. NO NOS DABA TIEMPO LO SIENTO. ADEMAS, TUVILLA ESTA EN NUESTRO EQUIPO....
        if(btn==this.btnLetra1 || btn==this.btnLetra2 || btn==this.btnLetra3 || btn==this.btnLetra4 || btn==this.btnLetra5 || btn==this.btnLetra6 || btn==this.btnLetra7 || btn==this.btnLetra8 || btn==this.btnLetra9 || btn==this.btnLetra10 || btn==this.btnLetra11 || btn==this.btnLetra12 || btn==this.btnLetra13 || btn==this.btnLetra14 || btn==this.btnLetra15 || btn==this.btnLetra16 || btn==this.btnLetra17 || btn==this.btnLetra18 || btn==this.btnLetra19 || btn==this.btnLetra20 || btn==this.btnLetra21 || btn==this.btnLetra22 || btn==this.btnLetra23 || btn==this.btnLetra24 || btn==this.btnLetra25 || btn==this.btnLetra26|| btn==this.btnLetra27 || btn==this.btnLetra28 || btn==this.btnLetra29|| btn==this.btnLetra30 || btn==this.btnLetra31 || btn==this.btnLetra32 || btn==this.btnLetra33 || btn==this.btnLetra34 || btn==this.btnLetra35 || btn==this.btnLetra36){
            btn.setImagePath('./assets/verde.jpg');
            this.StringAux += btn.getLbl().getTexto()
            this.lblPreg.setTexto(this.StringAux);
        }
        if(btn==this.btnValidar){
            if(this.StringAux==this.palabras[0]){
                this.lblPreg.setTexto("CORRECTO");
            }
        }
        
        if(btn==this.buttonNuevo){
            //CREAMOS WINDOW NUEVO
            this.w2=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
            this.motor.addViewToParentView(this.imagenFondo,this.w2);
            //IMAGEN PARA EL WINDOW
            this.imagenW2=new Imagen(this.motor,0,0,this.pmw,this.pmh);
            this.imagenW2.setImg('./assets/2.jpg')
            this.motor.addViewToParentView(this.w2,this.imagenW2);
             //CREAMOS BOTON X
             this.buttonX = new Button (this.motor,this.pmx*2.85,0,50,50);
             this.buttonX.setTexto("");
             this.motor.addViewToParentView(this.w2,this.buttonX);
             this.buttonX.setListener(this);
             this.buttonX.setImagePath('./assets/x.png');

             //CREAMOS BOTON VALIDAR
             this.btnValidar = new Button (this.motor,this.pmx*2.85,this.pmh-50,50,50);
             this.btnValidar.setTexto("Validar");
             this.motor.addViewToParentView(this.w2,this.btnValidar);
             this.btnValidar.setListener(this);
             this.btnValidar.setImagePath('./assets/x.png');

            //CREAMOS LABEL DE LA PREGUNTA
            this.lblPreg= new Label(this.motor,this.pmx*1.3,this.pmy*0.3,0,0);
            this.lblPreg.setTexto("");
            this.motor.addViewToParentView(this.w2,this.lblPreg);
            this.lblPreg.setFontStyle("50px Comic Sans MS");

            //CREAMOS LOS 25 BOTONES PARA LAS LETRAS 
            //LINEA 1
            this.btnLetra1 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1,40,40);
            this.btnLetra1.setTexto("h");
            this.motor.addViewToParentView(this.w2,this.btnLetra1);
            this.btnLetra1.setListener(this);
            
            this.btnLetra2 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1,40,40);
            this.btnLetra2.setTexto("a");
            this.motor.addViewToParentView(this.w2,this.btnLetra2);
            this.btnLetra2.setListener(this);

            this.btnLetra3 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1,40,40);
            this.btnLetra3.setTexto("a");
            this.motor.addViewToParentView(this.w2,this.btnLetra3);
            this.btnLetra3.setListener(this);

            this.btnLetra4 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1,40,40);
            this.btnLetra4.setTexto("a");
            this.motor.addViewToParentView(this.w2,this.btnLetra4);
            this.btnLetra4.setListener(this);

            this.btnLetra5 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1,40,40);
            this.btnLetra5.setTexto("h");
            this.motor.addViewToParentView(this.w2,this.btnLetra5);
            this.btnLetra5.setListener(this);

            this.btnLetra6 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1,40,40);
            this.btnLetra6.setTexto("a");
            this.motor.addViewToParentView(this.w2,this.btnLetra6);
            this.btnLetra6.setListener(this);
            //LINEA 2
            this.btnLetra7 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+40,40,40);
            this.btnLetra7.setTexto("o");
            this.motor.addViewToParentView(this.w2,this.btnLetra7);
            this.btnLetra7.setListener(this);

            this.btnLetra8 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+40,40,40);
            this.btnLetra8.setTexto("b");
            this.motor.addViewToParentView(this.w2,this.btnLetra8);
            this.btnLetra8.setListener(this);

            this.btnLetra9 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+40,40,40);
            this.btnLetra9.setTexto("o");
            this.motor.addViewToParentView(this.w2,this.btnLetra9);
            this.btnLetra9.setListener(this);

            this.btnLetra10 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+40,40,40);
            this.btnLetra10.setTexto("b");
            this.motor.addViewToParentView(this.w2,this.btnLetra10);
            this.btnLetra10.setListener(this);

            this.btnLetra11 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+40,40,40);
            this.btnLetra11.setTexto("b");
            this.motor.addViewToParentView(this.w2,this.btnLetra11);
            this.btnLetra11.setListener(this);

            this.btnLetra12 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1+40,40,40);
            this.btnLetra12.setTexto("b");
            this.motor.addViewToParentView(this.w2,this.btnLetra12);
            this.btnLetra12.setListener(this);

            
            //LINEA 3
            this.btnLetra13 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+80,40,40);
            this.btnLetra13.setTexto("s");
            this.motor.addViewToParentView(this.w2,this.btnLetra13);
            this.btnLetra13.setListener(this);

            this.btnLetra14 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+80,40,40);
            this.btnLetra14.setTexto("u");
            this.motor.addViewToParentView(this.w2,this.btnLetra14);
            this.btnLetra14.setListener(this);

            this.btnLetra15 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+80,40,40);
            this.btnLetra15.setTexto("c");
            this.motor.addViewToParentView(this.w2,this.btnLetra15);
            this.btnLetra15.setListener(this);

            this.btnLetra16 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+80,40,40);
            this.btnLetra16.setTexto("c");
            this.motor.addViewToParentView(this.w2,this.btnLetra16);
            this.btnLetra16.setListener(this);

            this.btnLetra17 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+80,40,40);
            this.btnLetra17.setTexto("c");
            this.motor.addViewToParentView(this.w2,this.btnLetra17);
            this.btnLetra17.setListener(this);

            this.btnLetra18 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1+80,40,40);
            this.btnLetra18.setTexto("s");
            this.motor.addViewToParentView(this.w2,this.btnLetra18);
            this.btnLetra18.setListener(this);
             //LINEA 4
             this.btnLetra19 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+120,40,40);
             this.btnLetra19.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra19);
             this.btnLetra19.setListener(this);
 
             this.btnLetra20 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+120,40,40);
             this.btnLetra20.setTexto("d");
             this.motor.addViewToParentView(this.w2,this.btnLetra20);
             this.btnLetra20.setListener(this);
 
             this.btnLetra21 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+120,40,40);
             this.btnLetra21.setTexto("s");
             this.motor.addViewToParentView(this.w2,this.btnLetra21);
             this.btnLetra21.setListener(this);
 
             this.btnLetra22 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+120,40,40);
             this.btnLetra22.setTexto("d");
             this.motor.addViewToParentView(this.w2,this.btnLetra22);
             this.btnLetra22.setListener(this);
             
             this.btnLetra23 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+120,40,40);
             this.btnLetra23.setTexto("d");
             this.motor.addViewToParentView(this.w2,this.btnLetra23);
             this.btnLetra23.setListener(this);

             this.btnLetra24 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1+120,40,40);
             this.btnLetra24.setTexto("d");
             this.motor.addViewToParentView(this.w2,this.btnLetra24);
             this.btnLetra24.setListener(this);

             //LINEA 5
             this.btnLetra25 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+160,40,40);
             this.btnLetra25.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra25);
             this.btnLetra25.setListener(this);
 
             this.btnLetra26 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+160,40,40);
             this.btnLetra26.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra26);
             this.btnLetra26.setListener(this);
 
             this.btnLetra27 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+160,40,40);
             this.btnLetra27.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra27);
             this.btnLetra27.setListener(this);
 
             this.btnLetra28 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+160,40,40);
             this.btnLetra28.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra28);
             this.btnLetra28.setListener(this);
 
             this.btnLetra29 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+160,40,40);
             this.btnLetra29.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra29);
             this.btnLetra29.setListener(this);

             this.btnLetra30 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1+160,40,40);
             this.btnLetra30.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra30);
             this.btnLetra30.setListener(this);

             //LINEA6
             this.btnLetra31 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+200,40,40);
             this.btnLetra31.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra31);
             this.btnLetra31.setListener(this);
 
             this.btnLetra32 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+200,40,40);
             this.btnLetra32.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra32);
             this.btnLetra32.setListener(this);
 
             this.btnLetra33 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+200,40,40);
             this.btnLetra33.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra33);
             this.btnLetra33.setListener(this);
 
             this.btnLetra34 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+200,40,40);
             this.btnLetra34.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra34);
             this.btnLetra34.setListener(this);
 
             this.btnLetra35 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+200,40,40);
             this.btnLetra35.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra35);
             this.btnLetra35.setListener(this);

             this.btnLetra36 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1+200,40,40);
             this.btnLetra36.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra36);
             this.btnLetra36.setListener(this);

            


            



        }
        if(btn==this.btnLetra1){
            
            
        }



















        //CREAMOS PANTALLA COMO JUGAR
        if(btn==this.buttonComo){
            this.wComo=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
            this.motor.addViewToParentView(this.imagenFondo,this.wComo);
            //IMAGEN PARA EL FONDO 
            this.imagenComo=new Imagen(this.motor,0,0,this.pmw,this.pmh);
            this.imagenComo.setImg('./assets/lt.jpg')
            this.motor.addViewToParentView(this.wComo,this.imagenComo);
           

        }
        //VOLVEMOS A LA PANTALLA EN LA QUE ESTABAMOS JUGANDO
        if(btn==this.buttonContinuar){
            this.motor.setViewVisibility(this.w2.uid,true);
        }
        //SALIR DEL JUEGO
        if(btn==this.buttonSalir){
            this.wComo=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
            this.buttonNuevo.setTexto("ADIOS");
        }
        //SALIMOS AL MENU INICIAL
        if(btn==this.buttonX){
            this.motor.setViewVisibility(this.w2.uid,false);
            this.motor.setViewVisibility(this.w3.uid,false);
        }
        if(btn==this.buttonX2){
            this.motor.setViewVisibility(this.wComo.uid,false);
        }
        //SI ACIERTAS LA PRIMERA PREGUNTA
       
        //SI ACIERTAS LA TERCERA PREGUNTA, PONEMOS NUEVA VIEW DE VICTORIA
        else if(btn.getLbl().getTexto()==this.arrayRespCorrec[2]){
            this.w3=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
            this.motor.addViewToParentView(this.imagenFondo,this.w3);
            this.imagenGanar=new Imagen(this.motor,0,0,this.pmw,this.pmh);
            this.imagenGanar.setImg('./assets/hasganado.jpg');
            this.motor.addViewToParentView(this.w3,this.imagenGanar);
            this.motor.addViewToParentView(this.w3,this.buttonX);

        }

        //SI FALLAMOS SALIMOS AL MENU PRINCIPAL. AÑADIDOS A LA CONDICION TAMBIEN LOS BOTONES DE NUEVO Y CONTINUAR PARA NO QUITAR SU FUNCIONALIDAD
        else if(btn!=this.buttonNuevo&& btn.getLbl().getTexto()!=this.arrayRespCorrec[0] && btn.getLbl().getTexto()!=this.arrayRespCorrec[1] && btn.getLbl().getTexto()!=this.arrayRespCorrec[2] && btn!=this.buttonContinuar) {
            this.motor.setViewVisibility(this.w2.uid,false);

        }
        
    
        

    }

    
    

    private crearEscenarioJuego():void{
        
    }


    screenSizeChanged?(vWidth:number,vHeight:number):void{
        //AJUSTAMOS LA POSICION DE LOS BOTON Y EL LBLPREGUNTA CUANDO LA PANTALLA CAMBIE DE TAMAÑO, PARA AJUSTARLA.

        this.buttonNuevo.setPosition(this.pmx*1.3,this.pmy*0.3);
        this.buttonSalir.setPosition(this.pmx*1.3,this.pmy*2.1);
        this.buttonContinuar.setPosition(this.pmx*1.3,this.pmy*1.2);
        this.buttonComo.setPosition(this.pmx*2.7,this.pmy*2.7);


        this.buttonX.setPosition(this.pmx*2.5,0);


       
        this.lblPreg.setPosition(this.pmx*1.9,this.pmy*2.2)

    
      }

}