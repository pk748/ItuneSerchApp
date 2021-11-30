import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
  artistId: string;
  artistName: string;
  previewUrl: string;
  country: string
}

interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  listOfSummaryData: DataItem;


  listOfColumns: ColumnItem[] = [
    {
      name: 'Artist Id',
  
    },
    {
      name: 'Artist Name',
      filterMultiple: false,
      listOfFilter: [
        { text: 'Jack Johnson', value: 'Jack Johnson' },
        { text: 'Jake Kasdan', value: 'Jake Kasdan' },
        { text: 'J.J. Abrams', value: 'J.J. Abrams' },
        { text: 'This Bike Is a Pipe Bomb', value: 'This Bike Is a Pipe Bomb' },
        
        
      ],
      filterFn: (artistName: string, item: DataItem) => item.artistName.indexOf(artistName) !== -1
    },
    {
      name: 'Country',
     
      filterMultiple: false,
      listOfFilter: [
        { text: 'USA', value: 'USA' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (country: string, item: DataItem) => item.country.indexOf(country) !== -1
    },
    {
      name: 'Preview',
    }
  ];

  listOfData: DataItem[];


  // **************************************************************************************************************************************************
  // ?CONSTRUCTOR START
  // **************************************************************************************************************************************************
  constructor(
    private http: HttpClient,
  ) {

    this.getItunesMusicDataList();
  }
  // **************************************************************************************************************************************************
  // ?CONSTRUCTOR END
  // **************************************************************************************************************************************************




  // **************************************************************************************************************************************************
  // ?NGONINIT END
  // **************************************************************************************************************************************************
  ngOnInit() {
  }
  // **************************************************************************************************************************************************
  // ?NGONINIT END
  // **************************************************************************************************************************************************

  // ***************************************************************************************************************************************
  //getItunesMusicDataList Function Call start
  getItunesMusicDataList() {
    try {
      var req_url = 'https://itunes.apple.com/search?term=jack+johnson&limit=25.';


      this.http.get(req_url).subscribe((data: any) => {
        console.log(data.results)
        this.listOfData =data.results
      },
        (error: any) => {

        });
    }
    catch (e) {
    }
  }
  //getItunesMusicDataList Function Call  end
  // ***************************************************************************************************************************************






}