import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-everything',
  templateUrl: './save-everything.component.html',
  styleUrls: ['./save-everything.component.css']
})
export class SaveEverythingComponent implements OnInit 
{

//   selectedOption : string = 'Search Associate By';
//   sortBy: string = 'Sort By';
//   sortFlag :boolean = false;
//   sortOn:string[];
//   index : number;
//   typed : string;
//   enableSearch : boolean = false;
//   searchPlaceholder :string = 'Search Associate';
//   test:any;
//   constructor(private ser: SearchServiceService, private card: CardsDemoComponent) 
//   { 
//     console.log("dropdown constructor");
//   }

//   ngOnInit() {
//   }

  
//   searchCall()
//   {
//     this.ser.associateSearched.length = 0;
//     console.log(this.typed+" typed");
//     this.index = 0;
//     if(this.typed.length!=0 )
//     {
//       console.log(this.ser.associateSearched[0]);
//       for(let temp of this.ser.associateData)
//       {
      
//         if(temp.empName.toLowerCase().includes(this.typed.toLowerCase()))
//         {
//           console.log(temp.empName +"starts with "+this.typed);
//           this.ser.associateSearched[this.index] = temp;
//           console.log("searchCall "+ this.ser.associateSearched[this.index]);
//           this.index++;
//         }
//       }
      
//       this.ser.showCards = true;
//       this.card.ngOnInit();
//     }
//   }

  
//   selectedSort(sort :string)
//   {
//     this.sortBy = sort
//   }
//   selected(option :string)
//   {
//     this.selectedOption = option;
//     this.sortFlag = true;
//     this.enableSearch = true;
//     if(this.selectedOption == 'id')
//     {
//       this.searchPlaceholder = 'Search Associate By ID';
//       this.sortBy = 'Sort Associate ID By';
//       this.sortOn = ['Ascending Order', 'Descending Order'];
//     }
//     if(this.selectedOption == 'name')
//     {
//       this.searchPlaceholder = 'Search Associate By Name';
//       this.sortBy = 'Sort Associate By'
//       this.sortOn = ['First Name', 'Last Name']
//     }
//     if(this.selectedOption == 'email')
//     {
//       this.searchPlaceholder = 'Search Associate By Email';
//       this.sortBy = 'Sort Associate Email By';
//       this.sortOn = ['Ascending Order', 'Descending Order'];
//     }
//     if(this.selectedOption == 'mobile')
//     {
//       this.searchPlaceholder = 'Search Associate By Mobile';
//       this.sortBy = 'Sort Associate Mobile By';
//       this.sortOn = ['Ascending Order', 'Descending Order'];
//     }
//     if(this.selectedOption == 'skills')
//     {
//       this.searchPlaceholder = 'Search Associate By Skills';
//       this.sortBy = 'Sort Associate Skills By';
//       this.sortOn = ['Expirience', 'StartDate' , 'EndDate'];
//     }
    
//   }
// }


  constructor() { }

  ngOnInit() {
  }

}
