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
    //
    private btnLetra1a:Button;
    private btnLetra2a:Button;
    private btnLetra3a:Button;
    private btnLetra4a:Button;
    private btnLetra5a:Button;
    private btnLetra6a:Button;
    private btnLetra7a:Button;
    private btnLetra8a:Button;
    private btnLetra9a:Button;
    private btnLetra10a:Button;
    private btnLetra11a:Button;
    private btnLetra12a:Button;
    private btnLetra13a:Button;
    private btnLetra14a:Button;
    private btnLetra15a:Button;
    private btnLetra16a:Button;
    //
    private btnLetra1b:Button;
    private btnLetra2b:Button;
    private btnLetra3b:Button;
    private btnLetra4b:Button;
    private btnLetra5b:Button;
    private btnLetra6b:Button;
    private btnLetra7b:Button;
    private btnLetra8b:Button;
    private btnLetra9b:Button;
    private btnLetra10b:Button;
    private btnLetra11b:Button;
    private btnLetra12b:Button;
    private btnLetra13b:Button;
    private btnLetra14b:Button;
    private btnLetra15b:Button;
    private btnLetra16b:Button;
    private btnLetra17b:Button;
    private btnLetra18b:Button;
    private btnLetra19b:Button;
    private btnLetra20b:Button;
    private btnLetra21b:Button;
    private btnLetra22b:Button;
    private btnLetra23b:Button;
    private btnLetra24b:Button;
    private btnLetra25b:Button;
    private contador1 : number;
    private contador2: number;
    private contador0: number;
    





    //
    private wlvl2:Window;
    private btnValidar3:Button;
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
    private lblLvl:Label;
    private lblLvl3:Label;
    private btnValidar2:Button;
    private btnClear:Button;
    
    private lblPreg1:Label;
    private StringAux: string;
    private btnNextLvl1:Button;
    private btnNextLvl2:Button;
    private lblRest:Label;

    
    


    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/1.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        this.palabras= ["house","car","sea","dog","life","red"];
        this.contador1=0;
        this.contador2=0;
        this.contador0=0;
        
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
       this.buttonSalir=new Button(this.motor,this.pmw/2-100,this.pmy*1.8,200,100);
       this.buttonSalir.setTexto("SALIR");
       this.motor.addViewToParentView(this.window1,this.buttonSalir);
       this.buttonSalir.setImagePath('./assets/btn.png')
       this.buttonSalir.setListener(this);
       
    
       //AÑADIR BOTON NUEVO
       this.buttonNuevo=new Button(this.motor,this.pmw/2-100,this.pmy*0.5,200,100);
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
        if(btn==this.btnLetra1a || btn==this.btnLetra2a || btn==this.btnLetra3a || btn==this.btnLetra4a || btn==this.btnLetra5a || btn==this.btnLetra6a || btn==this.btnLetra7a || btn==this.btnLetra8a || btn==this.btnLetra9a || btn==this.btnLetra10a || btn==this.btnLetra11a || btn==this.btnLetra12a || btn==this.btnLetra13a || btn==this.btnLetra14a || btn==this.btnLetra15a || btn==this.btnLetra16a ){
            btn.setImagePath('./assets/verde.jpg');
            this.StringAux += btn.getLbl().getTexto()
            this.lblPreg.setTexto(this.StringAux);
        }
        if(btn==this.btnLetra1b || btn==this.btnLetra2b || btn==this.btnLetra3b || btn==this.btnLetra4b || btn==this.btnLetra5b || btn==this.btnLetra6b || btn==this.btnLetra7b || btn==this.btnLetra8b || btn==this.btnLetra9b || btn==this.btnLetra10b || btn==this.btnLetra11b || btn==this.btnLetra12b || btn==this.btnLetra13b || btn==this.btnLetra14b || btn==this.btnLetra15b || btn==this.btnLetra16b || btn==this.btnLetra17b || btn==this.btnLetra18b || btn==this.btnLetra19b || btn==this.btnLetra20b || btn==this.btnLetra21b || btn==this.btnLetra22b || btn==this.btnLetra23b || btn==this.btnLetra24b || btn==this.btnLetra25b  ){
            btn.setImagePath('./assets/verde.jpg');
            this.StringAux += btn.getLbl().getTexto()
            this.lblPreg.setTexto(this.StringAux);
        }

        if(btn==this.btnClear){

            this.StringAux = "";
            this.lblPreg.setTexto(this.StringAux);
            this.btnLetra1.setImagePath('./assets/a.png');
            this.btnLetra2.setImagePath("");
            this.btnLetra3.setImagePath("");
            this.btnLetra4.setImagePath("");
            this.btnLetra5.setImagePath("");
            this.btnLetra6.setImagePath("");
            this.btnLetra7.setImagePath("");
            this.btnLetra8.setImagePath("");
            this.btnLetra9.setImagePath("");
            this.btnLetra10.setImagePath("");
            this.btnLetra11.setImagePath("");
            this.btnLetra12.setImagePath("");
            this.btnLetra13.setImagePath("");
            this.btnLetra14.setImagePath("");
            this.btnLetra15.setImagePath("");
            this.btnLetra16.setImagePath("");
            this.btnLetra17.setImagePath("");
            this.btnLetra18.setImagePath("");
            this.btnLetra19.setImagePath("");
            this.btnLetra20.setImagePath("");
            this.btnLetra21.setImagePath("");
            this.btnLetra22.setImagePath("");
            this.btnLetra23.setImagePath("");
            this.btnLetra24.setImagePath("");
            this.btnLetra25.setImagePath("");
            this.btnLetra26.setImagePath("");
            this.btnLetra27.setImagePath("");
            this.btnLetra28.setImagePath("");
            this.btnLetra29.setImagePath("");
            this.btnLetra30.setImagePath("");
            this.btnLetra31.setImagePath("");
            this.btnLetra32.setImagePath("");
            this.btnLetra33.setImagePath("");
            this.btnLetra34.setImagePath("");
            this.btnLetra35.setImagePath("");
            this.btnLetra36.setImagePath("");
            this.btnValidar.setImagePath("");
            //
            this.btnLetra1a.setImagePath('./assets/a.png');
            this.btnLetra2a.setImagePath('./assets/a.png');
            this.btnLetra3a.setImagePath("'./assets/a.png'");
            this.btnLetra4a.setImagePath("");
            this.btnLetra5a.setImagePath("");
            this.btnLetra6a.setImagePath("");
            this.btnLetra7a.setImagePath("");
            this.btnLetra8a.setImagePath("");
            this.btnLetra9a.setImagePath("");
            this.btnLetra10a.setImagePath("");
            this.btnLetra11a.setImagePath("");
            this.btnLetra12a.setImagePath("");
            this.btnLetra13a.setImagePath("");
            this.btnLetra14a.setImagePath("");
            this.btnLetra15a.setImagePath("");
            this.btnLetra16a.setImagePath("");
            //
            this.btnLetra1b.setImagePath("");
            this.btnLetra2b.setImagePath("");
            this.btnLetra3b.setImagePath("");
            this.btnLetra4b.setImagePath("");
            this.btnLetra5b.setImagePath("");
            this.btnLetra6b.setImagePath("");
            this.btnLetra7b.setImagePath("");
            this.btnLetra8b.setImagePath("");
            this.btnLetra9b.setImagePath("");
            this.btnLetra10b.setImagePath("");
            this.btnLetra11b.setImagePath("");
            this.btnLetra12b.setImagePath("");
            this.btnLetra13b.setImagePath("");
            this.btnLetra14b.setImagePath("");
            this.btnLetra15b.setImagePath("");
            this.btnLetra16b.setImagePath("");
            this.btnLetra17b.setImagePath("");
            this.btnLetra18b.setImagePath("");
            this.btnLetra19b.setImagePath("");
            this.btnLetra20b.setImagePath("");
            this.btnLetra21b.setImagePath("");
            this.btnLetra22b.setImagePath("");
            this.btnLetra23b.setImagePath("");
            this.btnLetra24b.setImagePath("");
            this.btnLetra25b.setImagePath("");

        }
        if(btn==this.btnValidar3){
            if(this.StringAux==this.palabras[0]){
                this.lblPreg.setTexto("CORRECTO");
                this.contador2++;
                this.StringAux="";
                this.lblRest.setTexto("Palabras Restantes: 3/"+this.contador2);
                
                if(this.contador2==3){
                    this.w3=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
                    this.motor.addViewToParentView(this.imagenFondo,this.w3);
                    this.imagenGanar=new Imagen(this.motor,0,0,this.pmw,this.pmh);
                    this.imagenGanar.setImg('./assets/hasganado.jpg');
                    this.motor.addViewToParentView(this.w3,this.imagenGanar);
                    this.motor.addViewToParentView(this.w3,this.buttonX);
                }
            }
            else if(this.StringAux==this.palabras[1]){
                this.lblPreg.setTexto("CORRECTO");
                this.contador2++;
                this.StringAux="";
                this.lblRest.setTexto("Palabras Restantes: 3/"+this.contador2);
                
                
                if(this.contador2==3){
                    this.w3=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
                    this.motor.addViewToParentView(this.imagenFondo,this.w3);
                    this.imagenGanar=new Imagen(this.motor,0,0,this.pmw,this.pmh);
                    this.imagenGanar.setImg('./assets/hasganado.jpg');
                    this.motor.addViewToParentView(this.w3,this.imagenGanar);
                    this.motor.addViewToParentView(this.w3,this.buttonX);
                }
            }
            else if(this.StringAux==this.palabras[2]){
                this.lblPreg.setTexto("CORRECTO");
                this.contador2++;
                this.StringAux="";
                this.lblRest.setTexto("Palabras Restantes: 3/"+this.contador2);
                
                
                if(this.contador2==3){
                    this.w3=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
                    this.motor.addViewToParentView(this.imagenFondo,this.w3);
                    this.imagenGanar=new Imagen(this.motor,0,0,this.pmw,this.pmh);
                    this.imagenGanar.setImg('./assets/hasganado.jpg');
                    this.motor.addViewToParentView(this.w3,this.imagenGanar);
                    this.motor.addViewToParentView(this.w3,this.buttonX);
                }
            }
        }
        if(btn==this.btnValidar){
            if(this.StringAux==this.palabras[5]){
                this.lblPreg.setTexto("CORRECTO");
                this.btnNextLvl1.getLbl().setTexto("");
                this.contador0++;
                this.btnNextLvl1.setImagePath('./assets/n.png');
                
            }
            else{

            }
        }
        if(btn==this.btnValidar2){
            if(this.StringAux==this.palabras[3]){
                this.lblPreg.setTexto("CORRECTO");
                
                this.contador1++;
                this.StringAux="";
                this.lblRest.setTexto("Palabras Restantes: 2/"+this.contador1);
                if(this.contador1==2){
                    this.btnNextLvl2.getLbl().setTexto("");
                    this.btnNextLvl2.setImagePath('./assets/n.png');
                }
            }
            else if(this.StringAux==this.palabras[4]) {
                this.lblPreg.setTexto("CORRECTO");
                this.contador1++;
                this.StringAux="";
                this.lblRest.setTexto("Palabras Restantes: 2/"+this.contador1);
                if(this.contador1==2){
                    this.btnNextLvl2.getLbl().setTexto("");
                    this.btnNextLvl2.setImagePath('./assets/n.png');
                }

            }
        }



        if(btn==this.btnNextLvl1){
                        this.btnNextLvl1.setTexto("");
                         //CREAMOS WINDOW NUEVO
                         this.wlvl2=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
                         this.motor.addViewToParentView(this.imagenFondo,this.wlvl2);
                         //IMAGEN PARA EL WINDOW
                         this.imagenW2=new Imagen(this.motor,0,0,this.pmw,this.pmh);
                         this.imagenW2.setImg('./assets/2.jpg')
                         this.motor.addViewToParentView(this.wlvl2,this.imagenW2);
                          //CREAMOS BOTON X
                          this.buttonX = new Button (this.motor,this.pmx*2.85,0,50,50);
                          this.buttonX.setTexto("");
                          this.motor.addViewToParentView(this.wlvl2,this.buttonX);
                          this.buttonX.setListener(this);
                         // this.buttonX.setImagePath('./assets/x.png');
             
                          //CREAMOS BOTON VALIDAR
                          this.btnValidar2 = new Button (this.motor,this.pmw-200,this.pmh-100,200,100);
                         this.btnValidar2.setTexto("");
                          this.motor.addViewToParentView(this.wlvl2,this.btnValidar2);
                          this.btnValidar2.setListener(this);
                         this.btnValidar2.setImagePath('./assets/s.png');
             
                         //CREAMOS LABEL DE LA PREGUNTA
                         this.lblPreg= new Label(this.motor,this.pmx*1.3,this.pmy*0.3,0,0);
                         this.lblPreg.setTexto("");
                         this.StringAux = "";
                         this.motor.addViewToParentView(this.wlvl2,this.lblPreg);
                         this.lblPreg.setFontStyle("50px Comic Sans MS");
                          //CREAMOS LABEL DE PUNTOS
                          this.lblRest= new Label(this.motor,this.pmx*1.3,this.pmh-50,50,50);
                          this.lblRest.setTexto("");
                          this.lblRest.setTexto("Palabras Restantes: 2/"+this.contador1);
                          this.motor.addViewToParentView(this.wlvl2,this.lblRest);
                          this.lblPreg.setFontStyle("50px Comic Sans MS");
             
                         //CREAMOS LABEL DEL NIVEL
                         this.lblLvl3= new Label(this.motor,0,0,200,50);
                         this.lblLvl3.setTexto("Nivel 2");
                         this.motor.addViewToParentView(this.wlvl2,this.lblLvl3);
                         this.lblLvl3.setFontStyle("50px Comic Sans MS");
                          //CREAMOS BOTON NEXT LVL
                        this.btnNextLvl2 = new Button (this.motor,50,this.pmh-150,100,100);
                        this.btnNextLvl2.setTexto("");
                        this.motor.addViewToParentView(this.wlvl2,this.btnNextLvl2);
                        this.btnNextLvl2.setListener(this);
            
                         //LINEA 1
                         this.btnLetra1b = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1,40,40);
                         this.btnLetra1b.setTexto("l");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra1b);
                         this.btnLetra1b.setListener(this);
                         
                         this.btnLetra2b = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1,40,40);
                         this.btnLetra2b.setTexto("i");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra2b);
                         this.btnLetra2b.setListener(this);
             
                         this.btnLetra3b = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1,40,40);
                         this.btnLetra3b.setTexto("f");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra3b);
                         this.btnLetra3b.setListener(this);
             
                         this.btnLetra4b = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1,40,40);
                         this.btnLetra4b.setTexto("e");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra4b);
                         this.btnLetra4b.setListener(this);
             
                         this.btnLetra5b = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1,40,40);
                         this.btnLetra5b.setTexto("h");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra5b);
                         this.btnLetra5b.setListener(this);
             
                        //LINEA 2
                         this.btnLetra6b = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+40,40,40);
                         this.btnLetra6b.setTexto("a");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra6b);
                         this.btnLetra6b.setListener(this);


                         this.btnLetra7b = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+40,40,40);
                         this.btnLetra7b.setTexto("o");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra7b);
                         this.btnLetra7b.setListener(this);
             
                         this.btnLetra8b = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+40,40,40);
                         this.btnLetra8b.setTexto("b");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra8b);
                         this.btnLetra8b.setListener(this);
             
                         this.btnLetra9b = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+40,40,40);
                         this.btnLetra9b.setTexto("o");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra9b);
                         this.btnLetra9b.setListener(this);
             
                         this.btnLetra10b = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+40,40,40);
                         this.btnLetra10b.setTexto("b");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra10b);
                         this.btnLetra10b.setListener(this);

                         //LINEA 3
             
                         this.btnLetra11b = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+80,40,40);
                         this.btnLetra11b.setTexto("b");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra11b);
                         this.btnLetra11b.setListener(this);
             
                         this.btnLetra12b = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+80,40,40);
                         this.btnLetra12b.setTexto("b");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra12b);
                         this.btnLetra12b.setListener(this);
             
                         this.btnLetra13b = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+80,40,40);
                         this.btnLetra13b.setTexto("d");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra13b);
                         this.btnLetra13b.setListener(this);
             
                         this.btnLetra14b = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+80,40,40);                         
                         this.btnLetra14b.setTexto("o");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra14b);
                         this.btnLetra14b.setListener(this);
             
                         this.btnLetra15b = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+80,40,40);
                         this.btnLetra15b.setTexto("g");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra15b);
                         this.btnLetra15b.setListener(this);
             
                        //LINEA 4

                         this.btnLetra16b = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+120,40,40);
                         this.btnLetra16b.setTexto("c");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra16b);
                         this.btnLetra16b.setListener(this);
             
                         this.btnLetra17b = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+120,40,40);
                         this.btnLetra17b.setTexto("c");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra17b);
                         this.btnLetra17b.setListener(this);
             
                         this.btnLetra18b = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+120,40,40);
                         this.btnLetra18b.setTexto("s");
                         this.motor.addViewToParentView(this.wlvl2,this.btnLetra18b);
                         this.btnLetra18b.setListener(this);

                          this.btnLetra19b = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+120,40,40);
                          this.btnLetra19b.setTexto("s");
                          this.motor.addViewToParentView(this.wlvl2,this.btnLetra19b);
                          this.btnLetra19b.setListener(this);
              
                          this.btnLetra20b = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+120,40,40);
                          this.btnLetra20b.setTexto("d");
                          this.motor.addViewToParentView(this.wlvl2,this.btnLetra20b);
                          this.btnLetra20b.setListener(this);
              
                          //LINEA 5
                          this.btnLetra21b = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+160,40,40);
                          this.btnLetra21b.setTexto("s");
                          this.motor.addViewToParentView(this.wlvl2,this.btnLetra21b);
                          this.btnLetra21b.setListener(this);
              
                          this.btnLetra22b = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+160,40,40);
                          this.btnLetra22b.setTexto("d");
                          this.motor.addViewToParentView(this.wlvl2,this.btnLetra22b);
                          this.btnLetra22b.setListener(this);
                          
                          this.btnLetra23b = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+160,40,40);
                          this.btnLetra23b.setTexto("d");
                          this.motor.addViewToParentView(this.wlvl2,this.btnLetra23b);
                          this.btnLetra23b.setListener(this);
             
                          this.btnLetra24b = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+160,40,40);
                          this.btnLetra24b.setTexto("c");
                          this.motor.addViewToParentView(this.wlvl2,this.btnLetra24b);
                          this.btnLetra24b.setListener(this);

                          this.btnLetra25b = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+160,40,40);
                          this.btnLetra25b.setTexto("e");
                          this.motor.addViewToParentView(this.wlvl2,this.btnLetra25b);
                          this.btnLetra25b.setListener(this);
          
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
             this.btnValidar = new Button (this.motor,this.pmw-200,this.pmh-100,200,100);
             this.btnValidar.setTexto("");
             this.motor.addViewToParentView(this.w2,this.btnValidar);
             this.btnValidar.setListener(this);
             this.btnValidar.setImagePath('./assets/s.png');

             //CREAMOS BOTON CLEAR
             this.btnClear = new Button (this.motor,this.pmw-150,(this.pmh/2)-25,100,50);
             this.btnClear.setTexto("");
             this.motor.addViewToParentView(this.w2,this.btnClear);
             this.btnClear.setListener(this);
             this.btnClear.setImagePath('./assets/cls.png');
             


             //CREAMOS BOTON NEXT LVL
              this.btnNextLvl1 = new Button (this.motor,50,this.pmh-150,100,100);
              this.btnNextLvl1.setTexto("");
              this.motor.addViewToParentView(this.w2,this.btnNextLvl1);
              this.btnNextLvl1.setListener(this);
              //this.btnNextLvl1.setImagePath('./assets/x.png');

              

            //CREAMOS LABEL DE LA PREGUNTA
            this.lblPreg= new Label(this.motor,this.pmx*1.3,this.pmy*0.3,0,0);
            this.lblPreg.setTexto("");
            this.StringAux = "";
            this.motor.addViewToParentView(this.w2,this.lblPreg);
            this.lblPreg.setFontStyle("50px Comic Sans MS");

            //CREAMOS LABEL DEL NIVEL
            this.lblLvl= new Label(this.motor,0,0,200,50);
            this.lblLvl.setTexto("Nivel 1");
            this.motor.addViewToParentView(this.w2,this.lblLvl);
            this.lblLvl.setFontStyle("50px Comic Sans MS");

            this.lblRest= new Label(this.motor,this.pmx*1.3,this.pmh-50,50,50);
            this.lblRest.setTexto("");
            this.lblRest.setTexto("Palabras Restantes: 1/"+this.contador0);
            this.motor.addViewToParentView(this.w2,this.lblRest);
            this.lblPreg.setFontStyle("50px Comic Sans MS");

            //CREAMOS LOS 16 BOTONES PARA EL PRIMER NIVEL 
             /////

             this.btnLetra1a = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1,40,40);
             this.btnLetra1a.setTexto("h");
             this.motor.addViewToParentView(this.w2,this.btnLetra1a);
             this.btnLetra1a.setListener(this);
             
             this.btnLetra2a = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1,40,40);
             this.btnLetra2a.setTexto("a");
             this.motor.addViewToParentView(this.w2,this.btnLetra2a);
             this.btnLetra2a.setListener(this);
 
             this.btnLetra3a = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1,40,40);
             this.btnLetra3a.setTexto("a");
             this.motor.addViewToParentView(this.w2,this.btnLetra3a);
             this.btnLetra3a.setListener(this);
 
             this.btnLetra4a = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1,40,40);
             this.btnLetra4a.setTexto("a");
             this.motor.addViewToParentView(this.w2,this.btnLetra4a);
             this.btnLetra4a.setListener(this);
 
             this.btnLetra5a = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1,40,40);
             this.btnLetra5a.setTexto("h");
             this.motor.addViewToParentView(this.w2,this.btnLetra5a);
             this.btnLetra5a.setListener(this);
 
             this.btnLetra6a = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1,40,40);
             this.btnLetra6a.setTexto("a");
             this.motor.addViewToParentView(this.w2,this.btnLetra6a);
             this.btnLetra6a.setListener(this);
             //LINEA 2
             this.btnLetra7a = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+40,40,40);
             this.btnLetra7a.setTexto("o");
             this.motor.addViewToParentView(this.w2,this.btnLetra7a);
             this.btnLetra7a.setListener(this);
 
             this.btnLetra8a = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+40,40,40);
             this.btnLetra8a.setTexto("b");
             this.motor.addViewToParentView(this.w2,this.btnLetra8a);
             this.btnLetra8a.setListener(this);
 
             this.btnLetra9a = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+40,40,40);
             this.btnLetra9a.setTexto("r");
             this.motor.addViewToParentView(this.w2,this.btnLetra9a);
             this.btnLetra9a.setListener(this);
 
             this.btnLetra10a = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+40,40,40);
             this.btnLetra10a.setTexto("e");
             this.motor.addViewToParentView(this.w2,this.btnLetra10a);
             this.btnLetra10a.setListener(this);
 
             this.btnLetra11a = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+40,40,40);
             this.btnLetra11a.setTexto("d");
             this.motor.addViewToParentView(this.w2,this.btnLetra11a);
             this.btnLetra11a.setListener(this);
 
             this.btnLetra12a = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1+40,40,40);
             this.btnLetra12a.setTexto("b");
             this.motor.addViewToParentView(this.w2,this.btnLetra12a);
             this.btnLetra12a.setListener(this);
 
             
             //LINEA 3
             this.btnLetra13a = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+80,40,40);
             this.btnLetra13.setTexto("u");
             this.motor.addViewToParentView(this.w2,this.btnLetra13a);
             this.btnLetra13a.setListener(this);
 
             this.btnLetra14a = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+80,40,40);
             this.btnLetra14a.setTexto("u");
             this.motor.addViewToParentView(this.w2,this.btnLetra14a);
             this.btnLetra14a.setListener(this);
 
             this.btnLetra15a = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+80,40,40);
             this.btnLetra15.setTexto("c");
             this.motor.addViewToParentView(this.w2,this.btnLetra15a);
             this.btnLetra15a.setListener(this);
 
             this.btnLetra16a = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+80,40,40);
             this.btnLetra16a.setTexto("c");
             this.motor.addViewToParentView(this.w2,this.btnLetra16a);
             this.btnLetra16a.setListener(this);
 

            

//////////////////////////////////////////////////////////////////////////////////
            



        }


        if(btn==this.btnValidar2){
            

        }


                        /////////////////////////






            if(btn==this.btnValidar){

             
 
            
            
        }

        ///////////////////////////////////////////

if(btn==this.btnNextLvl2){
            this.btnNextLvl2.setTexto("");
             //CREAMOS WINDOW NUEVO
             this.wlvl2=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
             this.motor.addViewToParentView(this.imagenFondo,this.wlvl2);
             //IMAGEN PARA EL WINDOW
             this.imagenW2=new Imagen(this.motor,0,0,this.pmw,this.pmh);
             this.imagenW2.setImg('./assets/2.jpg')
             this.motor.addViewToParentView(this.wlvl2,this.imagenW2);
              //CREAMOS BOTON X
              this.buttonX = new Button (this.motor,this.pmx*2.85,0,50,50);
              this.buttonX.setTexto("");
              this.motor.addViewToParentView(this.wlvl2,this.buttonX);
              this.buttonX.setListener(this);
              this.buttonX.setImagePath('./assets/x.png');

              this.lblRest= new Label(this.motor,this.pmx*1.3,this.pmh-50,50,50);
              this.lblRest.setTexto("");
              this.lblRest.setTexto("Palabras Restantes: 3/"+this.contador2);
              this.motor.addViewToParentView(this.wlvl2,this.lblRest);
              this.lblPreg.setFontStyle("50px Comic Sans MS");
 
              //CREAMOS BOTON VALIDAR
              this.btnValidar3 = new Button (this.motor,this.pmw-200,this.pmh-100,200,100);
              this.btnValidar3.setTexto("");
              this.motor.addViewToParentView(this.wlvl2,this.btnValidar3);
              this.btnValidar3.setListener(this);
              this.btnValidar3.setImagePath('./assets/s.png');
 
             //CREAMOS LABEL DE LA PREGUNTA
             this.lblPreg= new Label(this.motor,this.pmx*1.3,this.pmy*0.3,0,0);
             this.lblPreg.setTexto("");
             this.StringAux = "";
             this.motor.addViewToParentView(this.wlvl2,this.lblPreg);
             this.lblPreg.setFontStyle("50px Comic Sans MS");
 
             //CREAMOS LABEL DEL NIVEL
             this.lblLvl3= new Label(this.motor,0,0,200,50);
             this.lblLvl3.setTexto("Nivel 3");
             this.motor.addViewToParentView(this.wlvl2,this.lblLvl3);
             this.lblLvl3.setFontStyle("50px Comic Sans MS");

             //LINEA 1
             this.btnLetra1 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1,40,40);
             this.btnLetra1.setTexto("h");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra1);
             this.btnLetra1.setListener(this);
             
             this.btnLetra2 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1,40,40);
             this.btnLetra2.setTexto("a");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra2);
             this.btnLetra2.setListener(this);
 
             this.btnLetra3 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1,40,40);
             this.btnLetra3.setTexto("a");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra3);
             this.btnLetra3.setListener(this);
 
             this.btnLetra4 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1,40,40);
             this.btnLetra4.setTexto("a");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra4);
             this.btnLetra4.setListener(this);
 
             this.btnLetra5 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1,40,40);
             this.btnLetra5.setTexto("h");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra5);
             this.btnLetra5.setListener(this);
 
             this.btnLetra6 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1,40,40);
             this.btnLetra6.setTexto("a");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra6);
             this.btnLetra6.setListener(this);
             //LINEA 2
             this.btnLetra7 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+40,40,40);
             this.btnLetra7.setTexto("o");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra7);
             this.btnLetra7.setListener(this);
 
             this.btnLetra8 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+40,40,40);
             this.btnLetra8.setTexto("b");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra8);
             this.btnLetra8.setListener(this);
 
             this.btnLetra9 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+40,40,40);
             this.btnLetra9.setTexto("o");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra9);
             this.btnLetra9.setListener(this);
 
             this.btnLetra10 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+40,40,40);
             this.btnLetra10.setTexto("b");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra10);
             this.btnLetra10.setListener(this);
 
             this.btnLetra11 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+40,40,40);
             this.btnLetra11.setTexto("b");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra11);
             this.btnLetra11.setListener(this);
 
             this.btnLetra12 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1+40,40,40);
             this.btnLetra12.setTexto("b");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra12);
             this.btnLetra12.setListener(this);
 
             
             //LINEA 3
             this.btnLetra13 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+80,40,40);
             this.btnLetra13.setTexto("u");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra13);
             this.btnLetra13.setListener(this);
 
             this.btnLetra14 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+80,40,40);
             this.btnLetra14.setTexto("u");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra14);
             this.btnLetra14.setListener(this);
 
             this.btnLetra15 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+80,40,40);
             this.btnLetra15.setTexto("c");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra15);
             this.btnLetra15.setListener(this);
 
             this.btnLetra16 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+80,40,40);
             this.btnLetra16.setTexto("c");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra16);
             this.btnLetra16.setListener(this);
 
             this.btnLetra17 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+80,40,40);
             this.btnLetra17.setTexto("c");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra17);
             this.btnLetra17.setListener(this);
 
             this.btnLetra18 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1+80,40,40);
             this.btnLetra18.setTexto("s");
             this.motor.addViewToParentView(this.wlvl2,this.btnLetra18);
             this.btnLetra18.setListener(this);
              //LINEA 4
              this.btnLetra19 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+120,40,40);
              this.btnLetra19.setTexto("s");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra19);
              this.btnLetra19.setListener(this);
  
              this.btnLetra20 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+120,40,40);
              this.btnLetra20.setTexto("d");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra20);
              this.btnLetra20.setListener(this);
  
              this.btnLetra21 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+120,40,40);
              this.btnLetra21.setTexto("s");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra21);
              this.btnLetra21.setListener(this);
  
              this.btnLetra22 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+120,40,40);
              this.btnLetra22.setTexto("d");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra22);
              this.btnLetra22.setListener(this);
              
              this.btnLetra23 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+120,40,40);
              this.btnLetra23.setTexto("d");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra23);
              this.btnLetra23.setListener(this);
 
              this.btnLetra24 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1+120,40,40);
              this.btnLetra24.setTexto("c");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra24);
              this.btnLetra24.setListener(this);
 
              //LINEA 5
              this.btnLetra25 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+160,40,40);
              this.btnLetra25.setTexto("e");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra25);
              this.btnLetra25.setListener(this);
  
              this.btnLetra26 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+160,40,40);
              this.btnLetra26.setTexto("e");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra26);
              this.btnLetra26.setListener(this);
  
              this.btnLetra27 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+160,40,40);
              this.btnLetra27.setTexto("e");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra27);
              this.btnLetra27.setListener(this);
  
              this.btnLetra28 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+160,40,40);
              this.btnLetra28.setTexto("s");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra28);
              this.btnLetra28.setListener(this);
  
              this.btnLetra29 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+160,40,40);
              this.btnLetra29.setTexto("e");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra29);
              this.btnLetra29.setListener(this);
 
              this.btnLetra30 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1+160,40,40);
              this.btnLetra30.setTexto("a");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra30);
              this.btnLetra30.setListener(this);
 
              //LINEA6
              this.btnLetra31 = new Button (this.motor,((this.pmw/2)-120),this.pmy*1.1+200,40,40);
              this.btnLetra31.setTexto("e");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra31);
              this.btnLetra31.setListener(this);
  
              this.btnLetra32 = new Button (this.motor,((this.pmw/2)-120)+40,this.pmy*1.1+200,40,40);
              this.btnLetra32.setTexto("e");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra32);
              this.btnLetra32.setListener(this);
  
              this.btnLetra33 = new Button (this.motor,((this.pmw/2)-120)+80,this.pmy*1.1+200,40,40);
              this.btnLetra33.setTexto("e");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra33);
              this.btnLetra33.setListener(this);
  
              this.btnLetra34 = new Button (this.motor,((this.pmw/2)-120)+120,this.pmy*1.1+200,40,40);
              this.btnLetra34.setTexto("e");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra34);
              this.btnLetra34.setListener(this);
  
              this.btnLetra35 = new Button (this.motor,((this.pmw/2)-120)+160,this.pmy*1.1+200,40,40);
              this.btnLetra35.setTexto("e");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra35);
              this.btnLetra35.setListener(this);
 
              this.btnLetra36 = new Button (this.motor,((this.pmw/2)-120)+200,this.pmy*1.1+200,40,40);
              this.btnLetra36.setTexto("r");
              this.motor.addViewToParentView(this.wlvl2,this.btnLetra36);
              this.btnLetra36.setListener(this);
 
            
            
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
       
        //SALIR DEL JUEGO
        if(btn==this.buttonSalir){
            this.wComo=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
            this.buttonNuevo.setTexto("ADIOS");
        }
        //SALIMOS AL MENU INICIAL
        if(btn==this.buttonX){
            this.motor.setViewVisibility(this.w2.uid,false);
            this.motor.setViewVisibility(this.wlvl2.uid,false);
            this.motor.setViewVisibility(this.w3.uid,false);
        }
        if(btn==this.buttonX2){
            this.motor.setViewVisibility(this.wComo.uid,false);
        }
        //SI ACIERTAS LA PRIMERA PREGUNTA
       
        //SI ACIERTAS LA TERCERA PREGUNTA, PONEMOS NUEVA VIEW DE VICTORIA
       
        //SI FALLAMOS SALIMOS AL MENU PRINCIPAL. AÑADIDOS A LA CONDICION TAMBIEN LOS BOTONES DE NUEVO Y CONTINUAR PARA NO QUITAR SU FUNCIONALIDAD

        
    
        

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