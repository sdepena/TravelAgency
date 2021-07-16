import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { Settings } from 'app/app.settings';
import { PanelService } from "app/gx/base/panel.service";
import { EndpointConnector } from "app/gx/base/endpoint.connector";
import { GAMService } from "app/gx/auth/gam.service";
import { Type, Transform } from 'class-transformer';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';


import { msg as GeneXus__SD__Interop_msg } from '@genexus/web-standard-functions/dist/lib-esm/misc/msg';
import { UIFormElement } from 'app/gx/ui/model/ui-form';
import { UIActionBarElement } from 'app/gx/ui/model/ui-actionbar';

@Injectable()
export class Panel1_Level_DetailService extends PanelService {

    constructor(private http: HttpClient, private _router:Router, private _loginService: GAMService) {
      super(_router, _loginService);
    }

  // Data services
  async getPanel1_Level_Detail( ): Promise<Panel1_Level_DetailData> {
        try {
            return await EndpointConnector.getDataForType<Panel1_Level_DetailData>(this.http, Settings.SERVICE_API_ENDPOINT + "Panel1_Level_Detail"+ "?gxid="+this.getGxid(0), Panel1_Level_DetailData);
        	
        }
        catch (error) {
          return this.handleError(error);
        }

  }


  // Other services

}

// Data structures
export class Panel1_Level_DetailData {
  Pgmdesc: string;
  Pgmname: string;
  Time: string;
  Today: Date;


  constructor() {
    this.Pgmdesc = "";
    this.Pgmname = "";
    this.Time = "";
    this.Today = new Date();

  }
}



 