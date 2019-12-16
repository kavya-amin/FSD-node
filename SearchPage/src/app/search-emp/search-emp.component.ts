// import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Inject } from '@angular/core';
// import { SearchServiceService } from '../search-service.service';
// import { CardsDemoComponent } from '../cards-demo/cards-demo.component';
// import { Router } from '@angular/router';
// import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { FileUploadService } from '../file-upload.service';
// import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
// import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
// import { LoginPageComponent } from '../login-page/login-page.component';

// @Component({
//   selector: 'app-search-emp',
//   templateUrl: './search-emp.component.html',
//   styleUrls: ['./search-emp.component.css']
// })
// export class SearchEmpComponent implements OnInit {

//   associateData: any;
//   associateSkillsData: any;
//   associateSkillsDataArr: any[];
//   associateSearched:any[] = [];
//   tempskills:any[] = [];
//   associateSkills:any[]=[];
//   associateId:any;
//   selectedOption : string = 'Name';
//   searchOn : string;
//   sortBy: string = 'Sort By';
//   sortFlag :boolean = true;
//   sortOn:string[];
//   index : number;
//   typed : string;
//   skills:any[];
//   skillArray:any[] = [];
//   tempo:any;
//   temp:number;
//   enableSearch : boolean = true;
//   searchPlaceholder :string = 'Search Associate';
//   sorta:string;
//   test:any;
//   skill:any;
//   display= 'none';
//   display1 = "none";
//   namePattern = '^[a-zA-z \s]+$';
//   mobilePattern = '^[0-9]{10}$';
//   previewPhoto =false;
//   assoc:any;
//   numOfInput:any;
//   arr : number[]=[];
//   skillName:any[]=[];
//   categoryName:any[]=[];
// assId:string;
// assName:string;
// assEmail:string;
// assMobile:number;
// assImage:string;
// selectedFiles: FileList;
// selectedFile : File  = null;
// currentFileUpload: File;
// uploadData : File;

// selectFile(event) 
// {
//   this.selectedFiles = event.target.files;
// }  

// onFileSelected(event){
//   this.selectedFile = <File> event.target.files[0];
// }

// upload() 
// {
//     this.currentFileUpload = this.selectedFiles.item(0);
//     console.log("File name: "+ this.selectedFiles.item(0).name);
//         this.assImage=this.selectedFiles.item(0).name;
//      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
//      if (event instanceof HttpResponse) {
//         console.log('File is completely uploaded!');       
//       }
//     });
//     this.selectedFiles = undefined;
// }


//   constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private _scrollToService: ScrollToService,private uploadService: FileUploadService,private httpObj: HttpClient,private ser: SearchServiceService, private card: CardsDemoComponent, private router: Router) 
//   {     
    
//     console.log(" local storage length "+localStorage.length);
//     if(localStorage.length == 0)
//     {
//       this.router.navigate(['/loginPage']);
//     }
    
//     console.log("service constructor called");
//     let responseData = this.httpObj.get("http://localhost:8088/associate/all");
//     responseData.subscribe((response) => {
//       console.log(response);
//        this.associateData = response;
//      });
     
//      console.log("data fetched in"+this.associateData);

//      let responseData2 = this.httpObj.get("http://localhost:8088/associateSkills/all");
//     responseData2.subscribe((response) => {
//       console.log(response);
//        this.associateSkillsData = response;
//        this.associateSkillsDataArr = this.associateSkillsData;
//      });
//   }

//   ngOnInit() {
//   }

//   form = new FormGroup({
//     assId : new FormControl('',[Validators.required, Validators.minLength(3)]),
//     assName: new FormControl('',[Validators.required, Validators.pattern(this.namePattern)]),
//     assEmail : new FormControl('',[Validators.required, Validators.email]),
//     assMobile : new FormControl('',[Validators.required,Validators.pattern(this.mobilePattern)]),
//     assImage : new FormControl('')
//   })
//   viewAssociate(id: string)
//   {
//     console.log("button clicked for: "+id);
//     this.ser.associateId = id;
//     this.associateSearched.length = 0;
//     this.router.navigate(['/star',id]);
//     const config: ScrollToConfigOptions = {
//       target: 'destination'
//     };
 
//     this._scrollToService.scrollTo(config);
//   }

//   saveAssociate()
//   {
//     console.log(this.assName+" "+this.assId +" "+this.assEmail+" "+this.assMobile+" "+this.assImage);
//     let httpHeaders = new HttpHeaders({
//       'Content-Type' : 'application/json',
//       'Cache-Control': 'no-cache'});
    
//       let options = {
//         headers: httpHeaders};

//     this.httpObj.post("http://localhost:8088/saveAssociate",
//     {
//       "associateId": this.assId,
//       "associateName": this.assName,
//       "associateEmail": this.assEmail,
//       "associateImage": this.assImage,
//       "associateMobile": this.assMobile
//     }
//   ,options).subscribe(data  => {console.log("PUT Request is successful ", data); 
//   this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
//   this.router.navigate(['/star',this.assId,'displaySkills',this.assId]));
//   const config: ScrollToConfigOptions = {
//     target: 'addDestination'
//   };

//   this._scrollToService.scrollTo(config);
//   });
//   }

//   togglePhotoPreview(){
//     this.previewPhoto = !this.previewPhoto;
//   }
   
// openModal(){
//     this.display ='block';
//   }
//   onClose(){
//     this.display ='none';
//   }

//   openNewSkills()
//   {
//     this.display1 = "block";
//   }
//   onCloseHandled()
//   {
//     this.display1 = "none";
//   }
//   logout()
//   {
//     this.router.navigate(['/loginPage']);
//     localStorage.clear();
//   }
//   scrollUpToSearch()
//   {
//     const config: ScrollToConfigOptions = {
//       target: 'searchDestination'
//     };
  
//     this._scrollToService.scrollTo(config);
//   }
//   getNum()
//   {
//     console.log(this.numOfInput);
//     this.arr.length=0;
//     for (let i = 0; i <this.numOfInput; i++) {
//       this.arr[i]=i;
      
//     }
//   }

//   onSubmit(params)
//  {
//    console.log(params.value);
//    let responseData = this.httpObj.get("http://localhost:8088/skills/all");
//     responseData.subscribe((response) => {
//       console.log("Skills "+response);
//        this.tempo = response;
//        this.skills = this.tempo;
//        var length = this.skills.length + 1;
//        for(var index = 0; index < this.numOfInput; index++)
//        {
         
//            this.skill = {'skillName':this.skillName[index],
//                     'skillCategory':this.categoryName[index],
//                     'skillId':(length+100)
//                   };
         
//          length++;
//         console.log(this.skillName[index]);
//         console.log(this.categoryName[index]);
//         this.skillArray.push(this.skill);
//        }
       

//        console.log(this.skillArray);

//        let httpHeaders = new HttpHeaders({
//         'Content-Type' : 'application/json',
//         'Cache-Control': 'no-cache'});
      
//         let options = {
//           headers: httpHeaders};
  
//       this.httpObj.post("http://localhost:8088/saveSkills",this.skillArray
//     ,options).subscribe(data  => {console.log("PUT Request is successful ", data); this.display1="none";
//     });
//     });
//   }

//   @ViewChild('searchBarFocus',{static: false}) inputEl:ElementRef;

//   searchCall()
//   {
//     this.associateSearched.length = 0;
//     this.associateSkills.length = 0;
//     console.log(this.typed+" typed");
//     this.index = 0;
//     if(this.typed.length!=0 )
//     {
//       if(this.selectedOption == 'Id')
//       {
//         console.log("Searching on id");
//         for(let temp of this.associateData)
//         {
      
//           if(temp.associateId.toLowerCase().includes(this.typed.toLowerCase()))
//           {
//             console.log(temp.associateId +"starts with "+this.typed);
//             this.associateSearched[this.index] = temp;
//             console.log("searchCall "+ this.associateSearched[this.index]);
//             this.index++;
//           }
//         }
        
//       }

//       if(this.selectedOption == 'Name')
//       {
//         console.log("Searching on name");
//         for(let temp of this.associateData)
//         {
      
//           if(temp.associateName.toLowerCase().includes(this.typed.toLowerCase()))
//           {
//             console.log(temp.associateName +"starts with "+this.typed);
//             this.associateSearched[this.index] = temp;
//             console.log("searchCall "+ this.associateSearched[this.index]);
//             this.index++;
//           }
//         }
//       }

//       if(this.selectedOption == 'Email')
//       {
//         console.log("Searching on email");
//         for(let temp of this.associateData)
//         {
      
//           if(temp.associateEmail.toLowerCase().includes(this.typed.toLowerCase()))
//           {
//             console.log(temp.associateEmail +"starts with "+this.typed);
//             this.associateSearched[this.index] = temp;
//             console.log("searchCall "+ this.associateSearched[this.index]);
//             this.index++;
//           }
//         }
//       }

//       if(this.selectedOption == 'Mobile')
//       {
//         console.log("Searching on mobile");
//         for(let temp of this.associateData)
//         {
      
//           if(temp.associateMobile.includes(this.typed))
//           {
//             console.log(temp.associateMobile +"starts with "+this.typed);
//             this.associateSearched[this.index] = temp;
//             console.log("searchCall "+ this.associateSearched[this.index]);
//             this.index++;
//           }
//         }
//       }

//       if(this.selectedOption == 'Skill Name')
//       {
//         console.log("searching on skills");
//         console.log(this.associateSkillsDataArr);
//         for(let temp of this.associateSkillsDataArr)
//         {
//           if(temp.sid.skillName.toLowerCase().includes(this.typed.toLowerCase()))
//           {
//             console.log(temp.sid.skillName +"starts with "+this.typed);
//             console.log(temp.aid);
//             this.associateSearched[this.index] = temp.aid;
//             this.associateSkills[this.index] = temp;
//             console.log("searchCall "+ this.associateSearched[this.index]);
//             this.index++;
//           }
//         }

//         console.log("search completed");
//         console.log(this.associateSearched);
//       }
      
//       this.associateSearched = this.associateSearched;
      
//     }
//   }

  
//   selectedSort()
//   {
    
//     if(this.sorta == 'Id')
//       this.associateSearched = this.sortByKey(this.associateSearched, 'associateId');
//     if(this.sorta == 'Name')
//       this.associateSearched = this.sortByKey(this.associateSearched, 'associateName'); 
//     if(this.sorta == 'Email')
//       this.associateSearched = this.sortByKey(this.associateSearched, 'associateEmail');
//     if(this.sorta == 'Mobile')
//       this.associateSearched = this.sortByKey(this.associateSearched, 'associateMobile');     
    
//   }

//   sortOnSkill(s)
//   {
//     if(s == 'Expirience')
//     {
//       this.sortBy = "Sort On Experience";
//       this.associateSearched.length = 0;
//       this.tempskills = this.sortByKey(this.associateSkills, 'duration');
//       this.temp = 0;
//       for(this.index = this.tempskills.length - 1; this.index >= 0;this.index--)
//         this.associateSearched[this.temp++] = this.tempskills[this.index].aid;
//     }
//     if(s == 'Certification')
//     {
//       this.sortBy = "Sort on certification";
//       this.associateSearched.length = 0;
//       for(this.index = 0; this.index < this.associateSkills.length;this.index++)
//       {
//         console.log(this.associateSkills[this.index].certification);
//         if(this.associateSkills[this.index].certification == "true")
//         {  this.associateSearched[this.index] = this.associateSkills[this.index].aid;
//           console.log("true for "+this.associateSkills[this.index].aid.associateId);
//         }
//       }
//     }if(s == 'Rating')
//     {
//       this.sortBy = "Sort On Rating";
//       this.associateSearched.length = 0;
//       this.tempskills = this.sortByKey(this.associateSkills, 'rating');
//       this.temp = 0;
//       for(this.index = this.tempskills.length - 1; this.index >= 0;this.index--)
//       {
//         this.associateSearched[this.temp++] = this.tempskills[this.index].aid;
//       }
//     } 
//   }

//   sortByKey(array : any, key : any) : any
//   {
//     console.log("sorting on string :"+ key);
//     return array.sort(function(a, b) 
//     {
//       var x = a[key]; var y = b[key];
//       console.log(x+" "+y);
//       return ((x < y) ? -1 : ((x > y) ? 1 : 0));
//     });
//   }
//   selectedsort(stk : string){
//     this.sorta=stk;
//     this.sortFlag = true;
//     this.enableSearch = true;
//     if(this.sorta == 'Id')
//     {
//       this.searchPlaceholder = 'Search Associate By ID';
//       this.sortBy = 'Sort Associate ID';
//       this.sortOn = [];
//     }
//     if(this.sorta == 'Name')
//     {
  
//       this.searchPlaceholder = 'Search Associate By Name';
//       this.sortBy = 'Sort Associate'
//       this.sortOn = [];
//     }
//     if(this.sorta == 'Email')
//     {
  
//       this.searchPlaceholder = 'Search Associate By Email';
//       this.sortBy = 'Sort Associate Email';
//       this.sortOn = [];
//     }
//     if(this.sorta == 'Mobile')
//     {
      
//       this.searchPlaceholder = 'Search Associate By Mobile';
//       this.sortBy = 'Sort Associate Mobile ';
//       this.sortOn = [];
//     }
//     if(this.sorta == 'Skill Name')
//     {
//       this.searchPlaceholder = 'Search Associate By Skill Name';
//       this.sortBy = 'Sort Associate Skills By';
//       this.sortOn = ['Expirience', 'Certification' , 'Rating'];
//     }
//   }
//   selected(option :string)
//   {
//     this.selectedOption = option;
//     this.sortFlag = true;
//     this.enableSearch = true;
  
//     console.log("button click");
    
//     this.inputEl.nativeElement.focus();
    
//   }
// }


import { Component, OnInit, Input } from '@angular/core';
import { DropdownSplitComponent } from '../dropdown-split/dropdown-split.component';
import { SearchServiceService } from '../search-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpHeaders } from '@angular/common/http'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { TabHeadingDirective } from 'ngx-bootstrap';

@Component({
    selector: 'app-search-emp',
    templateUrl: './search-emp.component.html',
    styleUrls: ['./search-emp.component.css']
   })

export class SearchEmpComponent implements OnInit {
  display = 'none';
  displayDelete = 'none';
  associateId:any;
  formNew : FormGroup;
  associateData:any;
  temp:any[]=[];
  associateCertified:any[]=[];
  index:number;
  totalDuration:number=0;
  closeResult: string;
  inputId : string;
 body : string;
  inputEmail : string;
  inputName : string;
  inputImage : string;
  inputMobile : string;
  skillmAssoId:string;  
  skillmRating : number;
  skillmCertification:string;
  skillmName : string;
  skillmStartDate : string;
  skillmEndDate : string;
  skillmId : string;
  skillmCategory : string;
  skillmSrno: string;
  onlyAssociateData :any;
  selectedFiles: FileList;
  currentFileUpload: File;
  assImage:any;
  dateVal:boolean;
  public pieChartLabels:string[]=[];
   public pieChartData:number[]=[];
   public pieChartType:string = 'pie';
   public pieChartColors: Array < any > = [{
    backgroundColor: ['#f5a9cf', '#91a8eb', '#84e8d6','#eddc8e','#91eda8','#e0555c','#e6663c','rgba(148,159,177,0.2)'],
 }];
  constructor(private _scrollToService: ScrollToService,private uploadService: FileUploadService,private route: ActivatedRoute, private httpObj: HttpClient,private modalService: NgbModal, private router:Router) 
  { 
    this.route.params.subscribe(params => {
      this.associateId = params['id'];
      console.log("constaructor hit "+this.associateId);

      this.formNew = new FormGroup({
        body : new FormControl("")
      })
    
      let responseData = this.httpObj.get("http://localhost:8088/associate/"+this.associateId);
      responseData.subscribe((response) => {
      this.onlyAssociateData = response;
      console.log("temp is: "+this.onlyAssociateData.associateId);
      this.inputId = this.onlyAssociateData.associateId;
      this.inputName = this.onlyAssociateData.associateName;
      this.inputEmail = this.onlyAssociateData.associateEmail;
      this.inputMobile = this.onlyAssociateData.associateMobile;
      this.inputImage = this.onlyAssociateData.associateImage;
      this.totalDuration = 0;
      let responseData = this.httpObj.get("http://localhost:8088/associateSkills/"+this.associateId);
    responseData.subscribe((response) => {
      console.log("data for associate id: "+this.associateId);
      console.log(response);
       this.associateData = response;
      this.temp = this.associateData;
      var today = new Date();
      var endDay = today.getDate();
      var endMonth = today.getMonth() + 1;
      var endYear = today.getFullYear();
      
      console.log(today.getDate()+" "+(today.getMonth() + 1)+" "+today.getFullYear());
      for(this.index = 0; this.index < this.temp.length; this.index++)
      {
        console.log(this.temp[this.index].sid.skillName);
        if(this.temp[this.index].duration == "undefined" && this.temp[this.index].startDate != "undefined")
        {
          console.log("duration undefined for:"+this.temp[this.index].sid.skillName);
          var start = this.temp[this.index].startDate;
          var sdate = start.split("/");
          var startDay = sdate[0];
          var startMonth = sdate[1];
          var startYear = sdate[2];
          console.log("sdate "+sdate[0]+" "+sdate[1]+" "+sdate[2]);
          var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
          var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          var yearDiff = endYear - startYear;
          var monthDiff = endMonth - startMonth;
          if (monthDiff < 0) {
             yearDiff--;
              monthDiff += 12;
          }
    var dayDiff = endDay - startDay;
    if (dayDiff < 0) {
        if (monthDiff > 0) {
            monthDiff--;
        } else {
            yearDiff--;
            monthDiff = 11;
        }
        dayDiff += daysInMonth[startMonth];
    }
    this.temp[this.index].experience = yearDiff + ' Years ' + monthDiff + ' Months ' + dayDiff + ' Days ';
      console.log(yearDiff + 'Y ' + monthDiff + 'M ' + dayDiff + 'D');
      console.log(yearDiff*365 + monthDiff*30 + dayDiff);
      this.temp[this.index].duration = (yearDiff*365 + monthDiff*30 + dayDiff);
      this.totalDuration= this.totalDuration + (yearDiff*365 + monthDiff*30 + dayDiff);
       console.log("tot duration :"+this.totalDuration);
          

        }
        else if(this.temp[this.index].startDate == "undefined")
        {
          console.log("start date undefined");
          this.totalDuration= this.totalDuration + 0;
        }
        else{
          this.totalDuration= this.totalDuration + parseInt(this.temp[this.index].duration,10);
          console.log("total duration: "+this.totalDuration);
        }
      }
      
      for(this.index = 0; this.index < this.temp.length; this.index++)
      {

        this.pieChartLabels[this.index]=this.temp[this.index].sid.skillName;
        this.pieChartData[this.index]=(this.temp[this.index].duration/this.totalDuration)*100;
        console.log("calculated duration"+(this.temp[this.index].duration/this.totalDuration)*100);
        if(this.temp[this.index].certification == "true")
            this.associateCertified[this.index] = true;
        else
            this.associateCertified[this.index] = false;
      }

      console.log("piedata:" +this.pieChartData);
      console.log("pielabel:"+this.pieChartLabels);
     });
    });
    });
  }

  ngOnInit() 
  {
    
  }

  logout()
  {
    this.router.navigate(['/loginPage']);
    localStorage.clear();
  }
   

  sendMail()
  {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'});
    
      let options = {
        headers: httpHeaders};
        console.log(this.inputId + this.inputName + "  body  "+ this.body + this.inputEmail + this.inputMobile + this.inputImage );
     
        if(this.body == undefined)
        {
          this.body = "welcome";
        }

        console.log(this.body);
        this.httpObj.post("http://localhost:8088/send-mail",
        {
          "message" : this.body,
          "mail" : this.inputEmail
     }
  ,options).subscribe(data  => {console.log("PUT Request is successful ", data); 
 
})
  error  => {console.log("Error", error);}
  }

  selectFile(event) 
  {
  this.selectedFiles = event.target.files;
  }

upload() 
{
    this.currentFileUpload = this.selectedFiles.item(0);
    console.log("File name: "+ this.selectedFiles.item(0).name);
    this.assImage=this.selectedFiles.item(0).name;
     this.uploadService.pushFileToStorage(this.currentFileUpload);
     
    //  .subscribe(event => 
    //  if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');  
        let httpHeaders = new HttpHeaders({
          'Content-Type' : 'application/json',
          'Cache-Control': 'no-cache'});
        
          let options = {
            headers: httpHeaders};
        this.httpObj.post("http://localhost:8088/saveAssociate",
        {
      "associateId": this.inputId,
      "associateName": this.inputName,
      "associateEmail": this.inputEmail,
      "associateImage": this.assImage,
      "associateMobile": this.inputMobile
      }
  ,options).subscribe(data  => {console.log("PUT Request is successful ", data); 
 // this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  //this.router.navigate(['/searchPage/star',this.associateId]));
  const config: ScrollToConfigOptions = {
    target: 'destination'
  };
  //this.router.navigate(['/star/',this.associateId]);

  this._scrollToService.scrollTo(config);
},
  error  => {console.log("Error", error);
  });     
    this.selectedFiles = undefined;
}

  addSkills()
  {
    
    this.router.navigate(['/star1',this.associateId,'displaySkills',this.associateId]);
    const config: ScrollToConfigOptions = {
      target: 'addDestination'
    };
  
    this._scrollToService.scrollTo(config);
  }

  saveUpdate()
  {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'});
    
      let options = {
        headers: httpHeaders};

        
    this.httpObj.put("http://localhost:8088/updateAssociate",
    {
      "associateId": this.inputId,
      "associateName": this.inputName,
      "associateEmail": this.inputEmail,
      "associateImage": this.inputImage,
      "associateMobile": this.inputMobile
    }
  ,options).subscribe(data  => {console.log("PUT Request is successful ", data); 
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  this.router.navigate(['/star1',this.associateId]));
  const config: ScrollToConfigOptions = {
    target: 'destination'
  };

  this._scrollToService.scrollTo(config);
},
  error  => {console.log("Error", error);
  });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log("close1");
      this.saveUpdate();
    }, (reason) => {
      console.log("close2");
      this.saveUpdate();
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  openDelete(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log("close1");
      this.deleteAssociate();
    }, (reason) => {
      console.log("close2");
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
  openModal(assoId:any, skillId:any)
  {
    console.log(assoId,skillId);
    this.display='block';
    this.skillmAssoId = assoId;
    for(this.index=0; this.index<this.temp.length;this.index++)
    {
      if(this.temp[this.index].sid.skillId == skillId)
      {
        console.log("matched for: "+this.temp[this.index].sid.skillId);
        this.skillmName = this.temp[this.index].sid.skillName;
        this.skillmSrno = this.temp[this.index].srNo;  
        this.skillmId = this.temp[this.index].sid.skillId;
        this.skillmCategory = this.temp[this.index].sid.skillCategory;      
      }
    }
  }

  deleteSkill(srNo:any)
  {
    console.log(srNo);
    
    this.httpObj.delete("http://localhost:8088/deleteAssociateSkill/"+srNo).subscribe(data  => {console.log("PUT Request is successful ", data);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  this.router.navigate(['/star1',this.associateId]));
  const config: ScrollToConfigOptions = {
    target: 'destination'
  };

  this._scrollToService.scrollTo(config);
    error  => {console.log("Error", error);}});
  }

  submit(){
    let b = this.formNew.value.body;
    console.log(b);
  }
  onSubmit(params)
  {
    console.log("in submit");
    
    console.log(params.value);
    var startYear = params.value.dp.year;
    var endYear = params.value.dp1.year;
    var endMonth = params.value.dp1.month;
    var startMonth = params.value.dp.month;
    var endDay = params.value.dp1.day;
    var startDay = params.value.dp.day;
    
    var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var yearDiff = endYear - startYear;
    var monthDiff = endMonth - startMonth;
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }
    var dayDiff = endDay - startDay;
    if (dayDiff < 0) {
        if (monthDiff > 0) {
            monthDiff--;
        } else {
            yearDiff--;
            monthDiff = 11;
        }
        dayDiff += daysInMonth[startMonth];
    }
    console.log(yearDiff + 'Y ' + monthDiff + 'M ' + dayDiff + 'D');
    console.log(yearDiff*365 + monthDiff*30 + dayDiff);
    var duration = yearDiff*365 + monthDiff*30 + dayDiff;
    var certify; var experience = yearDiff + ' Years ' + monthDiff + ' Months ' + dayDiff + ' Days';
    if(params.value.certify==true)
        certify="true";
      else
        certify="false";

        console.log(this.skillmSrno+" "+ this.inputId+" "+ this.inputName+" "+this.inputEmail+" "+this.inputImage+
        " "+this.inputMobile+" "+this.skillmName+" "+this.skillmCategory+" "+certify+" "+this.skillmId+" "+this.skillmRating);
    
    console.log("date diif: "+yearDiff + " "+ monthDiff+ " "+dayDiff);
        
    if(yearDiff < 0 || monthDiff < 0 || dayDiff < 0 )
    {
      console.log("date val failed");
      this.dateVal = true;
    }   
    else{ 
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'});
    
      let options = {
        headers: httpHeaders};

    this.httpObj.put("http://localhost:8088/updateAssociateSkills",
    {
      
        "srNo": this.skillmSrno,
        "aid": {
            "associateId": this.inputId,
            "associateName": this.inputName,
            "associateEmail": this.inputEmail,
            "associateImage": this.inputImage,
            "associateMobile": this.inputMobile
        },
        "sid": {
            "skillName": this.skillmName,
            "skillCategory": this.skillmCategory,
            "skillId": this.skillmId
        },
        "certification": certify,
        "rating": this.skillmRating,
        "startDate": startDay+"/"+startMonth+"/"+startYear,
        "endDate": endDay+"/"+endMonth+"/"+endYear,
        "duration": duration,
        "experience": experience
    }
  ,options).subscribe(data  => {console.log("PUT Request is successful ", data);
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  this.router.navigate(['/star1',this.associateId]));
  const config: ScrollToConfigOptions = {
    target: 'destination'
  };

  this._scrollToService.scrollTo(config);
  error  => {console.log("Error", error);}});
  }
  }
  onCloseHandled()
  {
    this.display='none';
  }

  openDeleteModal()
  {
    this.displayDelete = 'block';
  }

  deleteAssociate()
  {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'});
    
      let options = {
        headers: httpHeaders};
    console.log("in delete associate "+this.temp[0]);
    
      this.httpObj.delete("http://localhost:8088/deleteAssociateSkillByAid/"+this.associateId,
      ).subscribe(data  => {console.log("PUT Request for delete skill is successful ", data);
      error  => {console.log("Error", error);}
    
    this.httpObj.delete("http://localhost:8088/deleteAssociate/"+this.associateId).subscribe(data  => {console.log("PUT Request is successful ", data);
    this.router.navigate(['/searchEmp']);
    error  => {console.log("Error", error);}});});
  }
  
  
}



