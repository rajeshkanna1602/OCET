import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';  
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //constructor() { }
  constructor(private usrService :CommonService,) {   }  
  Repdata:any;  
  incrno1:number=0;
  incrno=0;
  
  fet_ans=[];
  fet_opt:string[];
  fet_option=[];
  answered=false;
  chkopt1status=false;
  chkopt2status=false;
  chkopt3status=false;
  chkopt4status=false;
  nofques=15;
  myArray =[0,1,2,3];
  indx:number;
  show=false;
  otp=false;
  welp=false;
  otl=true;
  resp=false;
  // i:number;
  mark:number=0;
    //i=1;
  a:number;
  b:number;
  c:number;
  d:number;
  retest:boolean=false;

  ngOnInit() {
    
    this.usrService.Getquiz().subscribe(
    
      data =>  this.Repdata = data

    )
    //this.assignfirque();
    this.show=false;
    //console.log("ng init");
    // this.fet_opt[0]=this.Repdata[this.incrno].opt1;
    // alert("fet op calu :"+this.fet_opt);
    //this.incrno=0;
    //this.incrno1=0;
    //this.mark=0;
  }
nxtbut=function()
{

  //alert("Next question");
  //this.chkstatus=false;
  // alert("chk opt1 status : "+this.chkopt1status);

  
  //alert(this.incrno);
  
  // alert(this.fet_ans[0]);
  // alert(this.fet_ans[1]);
  // alert(this.fet_ans[2]);
  // alert(this.fet_ans[3]);
  //this.resp=true;
  if(this.answered==true)
    {
      //console.log("befor incr :"+this.incrno1)
      if(this.incrno1<14)
     { this.incrno1=this.incrno1+1;
      //console.log("increno 1 :"+this.incrno1)
    }
      this.assignque();

    //this.incrno1=this.incrno1+1;
    }else{
        alert("please choose any one");
    }
}

assignfirque()
{
  //console.log("first ques");
  //alert("incro no in first ques :"+this.incrno);
  //alert("fet option befor :"+this.Repdata[this.incrno].opt1);;
  //alert("chk : "+this.incrno1);
  this.myArray[0]=0;
  this.myArray[1]=1;
  this.myArray[2]=2;
  this.myArray[3]=3;
  this.a=4;
  this.b=4;
  this.c=4;
  this.d=4;
  //console.log("incre no :" +this.incrno);
 //alert("repd data  : "+this.Repdata.ques);
  //alert("chumma");
  // while(this.Repdata)
  // {
  //   alert("yes");
  // }
  this.fet_option[0]=this.Repdata[this.incrno].opt1;
  //this.incrno1=this.incrno1+1;
  this.fet_option[1]=this.Repdata[this.incrno].opt2;
//  alert("incre no : "+ this.incrno);
  this.fet_option[2]=this.Repdata[this.incrno].opt3;
  this.fet_option[3]=this.Repdata[this.incrno].opt4;
//
  //this.fet_opt=this.Repdata[this.incrno].opt1
  //alert("fet opt 0 " + this.fet_option[0]);
  //this.fet_opt=this.Repdata[this.incrno].opt2
  //alert("fet opt 0"+this.fet_opt[1]);
  // alert("Array 0 val :"+this.myArray[0]);
  // alert("Array 1 val :"+this.myArray[1]);
  // alert("Array 2 val :"+this.myArray[2]);
  // alert("Array 3 val :"+this.myArray[3]);
  //alert("first lengh :"+ this.myArray.length);
  this.a=this.myArray[Math.floor(Math.random() * this.myArray.length)];
  //alert("a valu : "+this.a);
  this.indx=this.myArray.indexOf(this.a);
  this.myArray.splice(this.indx,1);
  //alert("sec lengh :"+ this.myArray.length);
  this.b=this.myArray[Math.floor(Math.random() * this.myArray.length)];
  //  alert("Array 0 val :"+this.myArray[0]);
  //  alert("Array 1 val :"+this.myArray[1]);
  //  alert("Array 2 val :"+this.myArray[2]);
  //  alert("Array 3 val :"+this.myArray[3]);
  //this.b=Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  this.indx=this.myArray.indexOf(this.b);
  this.myArray.splice(this.indx,1);
  
  //alert("third lengh :"+ this.myArray.length);
  this.c=this.myArray[Math.floor(Math.random() * this.myArray.length)];
  this.indx=this.myArray.indexOf(this.c);
  this.myArray.splice(this.indx,1);
 //alert("final lengh :"+ this.myArray.length);
  //alert("final arrry : "+this.myArray[0]);
  this.d=this.myArray[Math.floor(Math.random() * this.myArray.length)];
  // this.c=Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  // this.d=Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  //  alert("A valu : " +this.a);
  //  alert("b valu :  " +this.b);
  //  alert("c valu :  " +this.c);
  //  alert("d valu :  " +this.d);
  //alert(this.b);
  this.incrno=this.incrno+1;
}

assignque()
{
  //alert("assign ques");
  // alert("chk opt1 status : "+this.chkopt1status);
  // alert("chk opt2 status : "+this.chkopt2status);
  // alert("chk opt3 status : "+this.chkopt3status);
  // alert("chk opt4 status : "+this.chkopt4status);
  // alert("doingin false");
  //alert("incrno : "+this.incrno);
  //alert("no of que : "+this.nofques);
  

  if(this.incrno<this.nofques)
  {
    //alert("question : "+this.Repdata[this.incrno].ques);
    // alert("increment no : "+this.incrno);
    // alert("no of ques :"+this.nofques);
    //alert("true park");
  this.chkopt1status=false;
  this.chkopt2status=false;
  this.chkopt3status=false;
  this.chkopt4status=false;
  // alert("chk opt1 status : "+this.chkopt1status);
  // alert("chk opt2 status : "+this.chkopt2status);
  // alert("chk opt3 status : "+this.chkopt3status);
  // alert("chk opt4 status : "+this.chkopt4status);

  this.answered=false;
  this.myArray[0]=0;
  this.myArray[1]=1;
  this.myArray[2]=2;
  this.myArray[3]=3;
  this.a=4;
  this.b=4;
  this.c=4;
  this.d=4;
 
  //alert("fet option befor :"+this.Repdata[this.incrno].opt1);
  
  //alert("incr : "+this.incrno);
  this.fet_option[0]=this.Repdata[this.incrno].opt1;
  //this.incrno1=this.incrno1+1;
  this.fet_option[1]=this.Repdata[this.incrno].opt2;
//  alert("incre no : "+ this.incrno);
  this.fet_option[2]=this.Repdata[this.incrno].opt3;
  this.fet_option[3]=this.Repdata[this.incrno].opt4;
//
  //this.fet_opt=this.Repdata[this.incrno].opt1
  //alert("fet opt 0 " + this.fet_option[0]);
  //this.fet_opt=this.Repdata[this.incrno].opt2
  //alert("fet opt 0"+this.fet_opt[1]);
  // alert("Array 0 val :"+this.myArray[0]);
  // alert("Array 1 val :"+this.myArray[1]);
  // alert("Array 2 val :"+this.myArray[2]);
  // alert("Array 3 val :"+this.myArray[3]);
  //alert("first lengh :"+ this.myArray.length);
  this.a=this.myArray[Math.floor(Math.random() * this.myArray.length)];
  //alert("a valu : "+this.a);
  this.indx=this.myArray.indexOf(this.a);
  this.myArray.splice(this.indx,1);
  //alert("sec lengh :"+ this.myArray.length);
  this.b=this.myArray[Math.floor(Math.random() * this.myArray.length)];
  // alert("Array 0 val :"+this.myArray[0]);
  // alert("Array 1 val :"+this.myArray[1]);
  // alert("Array 2 val :"+this.myArray[2]);
  // alert("Array 3 val :"+this.myArray[3]);
  //this.b=Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  this.indx=this.myArray.indexOf(this.b);
  this.myArray.splice(this.indx,1);
  
  //alert("third lengh :"+ this.myArray.length);
  this.c=this.myArray[Math.floor(Math.random() * this.myArray.length)];
  this.indx=this.myArray.indexOf(this.c);
  this.myArray.splice(this.indx,1);
 //alert("final lengh :"+ this.myArray.length);
  //alert("final arrry : "+this.myArray[0]);
  this.d=this.myArray[Math.floor(Math.random() * this.myArray.length)];
  // this.c=Math.floor(Math.random() * (3 - 0 + 1)) 
  // this.fet_option[0]=this.Repdata[this.incrno].opt1;
  // this.fet_option[1]=this.Repdata[this.incrno].opt2;
  // this.fet_option[2]=this.Repdata[this.incrno].opt3;
  // this.fet_option[3]=this.Repdata[this.incrno].opt4;
  //alert("b valu : "+this.b);
  // alert("c valu : "+this.c);
  // alert("d valu : "+this.d);
  // alert("after :"+this.incrno);
  // alert("fet option after :"+this.Repdata[this.incrno].opt1);
  this.incrno=this.incrno+1;
 }else{
   //alert("fihi") ;
   
  alert("FInished");

  this.calcmark();
  this.retest=true;
  this.otp=false;
  this.resp=true;
  this.otl=true;

  //this.chkopt1status=false;
  //this.chkopt2status=false;
 // this.chkopt3status=false;
  //this.chkopt4status=false;


  }
  // alert("assign");
  //quesform.opt1.checked="false";
  //quesForm.opt1.checked=false;
  
}

calcmark=function()
{
  
  //alert("repdat count :"+this.Repdata);
  //alert("fet_an cunt : "+this.fet_ans.count);
  for(let i=0;i<this.nofques;i++)
  {
    //alert("repdata anser :"+this.Repdata[i].answer);
    if(this.Repdata[i].answer===this.fet_ans[i])
    this.mark=this.mark+1;
  }
  //alert("you narm : "+ this.mark);
}

opt1getvalue=function()
{
  //alert("a valu :"+ this.a);
  //alert("fet iption :"+ this.fet_option[0]);
this.fet_ans[this.incrno1]=this.fet_option[this.a];
//this.chkstatus=true;
//alert("chk");
this.answered=true;
//alert(this.answered);
}
opt2getvalue=function()
{
this.fet_ans[this.incrno1]=this.fet_option[this.b];
//alert("incrqno : "+this.incrno);
//alert("incrno : "+this.incrno);
//alert("chk");
// alert("sec");
this.answered=true;
}
opt3getvalue=function()
{
this.fet_ans[this.incrno1]=this.fet_option[this.c];
//alert("chk");
// alert(this.fet_ans[this.incrno]);
this.answered=true;
}
opt4getvalue=function()
{
this.fet_ans[this.incrno1]=this.fet_option[this.d];
//alert("chk");
// alert(this.fet_ans[this.incrno]);
this.answered=true;
}

ont=function()
{
  //alert("ont"+this.show);
  //this.show=true;
  this.welp=true;
  //ontp.style.display:none;
  this.resp=false;
  console.log("befor if :"+this.retest+this.incrno);
  
  if(this.retest)
  {
    console.log("this.retest :"+ this.retest);
    this.ngOnInit();
  }
this.incrno=0;
this.incrno1=0;
this.mark=0;
this.chkopt1status=false;
  this.chkopt2status=false;
  this.chkopt3status=false;
  this.chkopt4status=false;
}

starttestbut=function()
{
  
  //this.assignque();
  // this.usrService.Getquiz().subscribe(
    
  //      data =>  this.Repdata = data

  //   )
  // //alert(this.Repdata)
  
  this.welp=false;
  this.otp=true;
  this.otl=false;
  //this.resp=true;
  this.assignfirque();
}
showres=function()
{
//this.resp=false;
//this.otl=true;
//alert("result");
}
hme=function()
{
  //alert("home");
}
}
