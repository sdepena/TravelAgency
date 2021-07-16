import { Component, Input } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { AppContainer } from 'app/gx/base/app-container';
import { CompositeNavigation } from 'app/gx/navigation/composite-navigation';
import { PanelComponent } from 'app/gx/base/panel.component';
import { BcPanelComponent} from 'app/gx/base/bc-panel.component';
import { GAMService} from "app/gx/auth/gam.service";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppBarService } from "app/gx/base/app-bar.service";
import { NavigationStyle } from "app/gx/base/view-manager";
import { Settings } from "app/app.settings";

import { Panel1_Level_DetailService , Panel1_Level_DetailData } from './panel1_level_detail.service';
import { msg as GeneXus__SD__Interop_msg } from '@genexus/web-standard-functions/dist/lib-esm/misc/msg';
import { UIFormElement } from 'app/gx/ui/model/ui-form';
import { UIActionBarElement } from 'app/gx/ui/model/ui-actionbar';

@Component({
  selector: 'Panel1_Level_Detail',
  templateUrl: './panel1_level_detail.component.html',
  providers: [
    Panel1_Level_DetailService,
  ],
  styles: [":host { display: flex; flex: 1; }"]
})
export class Panel1_Level_DetailComponent extends PanelComponent {

  Panel1_data: Panel1_Level_DetailData;
  uiModel: Panel1_Level_DetailUIModel;
  uiActions: Panel1_Level_DetailUIActions;
  @Input('mode') 
  Mode: string;


  stateMembers = [
    ['Mode',],
    ['Panel1_data','uiModel',] 
  ];

  _routingPath = 'Panel1-Level_Detail';
  views = [
    {
      name: "ViewAny",
      type: "any",
      minShortestBound: 0,
      maxShortestBound: 0,
      minLongestBound: 0,
      maxLongestBound: 0,
      appBarInitFn: this.initAppBar_ViewAny.bind(this),
      appBarBindFn: this.bindAppBar_ViewAny.bind(this),
      appBarResetFn: this.resetAppBar_ViewAny.bind(this),
      UIModelDefaults: this.getUIModelDefaults_ViewAny.bind(this)

    }

  ];



  constructor(
      private panelService: Panel1_Level_DetailService,
      protected gam: GAMService,
      public app:AppContainer,
      protected nvg:CompositeNavigation,
      protected activatedRoute: ActivatedRoute,
      private appBarService: AppBarService
  ) {
    super( app, nvg, activatedRoute);
    this.uiActions = new Panel1_Level_DetailUIActions(this);

    this.canControlAppBar = activatedRoute.component === Panel1_Level_DetailComponent;
    this.showAsCard = !this.canControlAppBar;
    this.initState(null);
  }

  initState(params) {
    this.Panel1_data = new Panel1_Level_DetailData();
    this.uiModel = new Panel1_Level_DetailUIModel(this);
    this.Mode = !params ? this.Mode : "";

    this.loadParams(params);

    this.viewManager.update(this.Mode);
    this.updateUIModel( this.uiModel, this.viewManager.getUIModelDefaults());

    this.panelService.start();
  }

  bindAppBar_ViewAny(navigationStyle: NavigationStyle) {
    this.uiModel.ctrlApplicationbar.navigationStyle = navigationStyle;
    this.uiModel.ctrlApplicationbar.showBackButton = this.nvg.canGoBack()
    this.uiModel.ctrlApplicationbar.actionItems = [];
    this.uiModel.ctrlApplicationbar.onBackButtonClick = () => this.callAction(this.__Cancel);
    this.appBarService.bind( this.showAsCard, this.uiModel.ctrlApplicationbar);
  }

  initAppBar_ViewAny() {
  }


  resetAppBar_ViewAny() {
  }
   

  getUIModelDefaults_ViewAny( containerName?: string) {
    if (!containerName) {
      return [
        ['ctrlApplicationbar', 'class', 'ApplicationBars'],
        ['ctrlApplicationbar', 'visible', true],
        ['ctrlApplicationbar', 'caption', this.app.translate('Panel1')],
        ['ctrlApplicationbar', 'showBackButton', 'False']
      ];
    }

    return [];
  }


  // Actions
  _Submit = async (): Promise<any> => {
    const __aSt = this.startAction();
    try {
      	await GeneXus__SD__Interop_msg( this.app.translate('Hello World'));
    } catch (e) {
      this.processCompositeError(e);
    } finally {
      this.endAction(__aSt);
    }
  } 



  // Load and refresh
  loadParams(params) {
    if (params) {
      this.Mode = this.nvg.getParam('mode', params, 1) || "";
    }
  }

  async loadPanel() {
    this.Panel1_data = await this.panelService.getPanel1_Level_Detail( );


  }

  async Refresh(type?: string) {
    this.Panel1_data = await this.panelService.getPanel1_Level_Detail( );


  }



}

class Panel1_Level_DetailUIModel {

  private _host: Panel1_Level_DetailComponent;

  constructor( host: Panel1_Level_DetailComponent) {
    this._host = host;
    this.ctrlForm.applicationBar = this.ctrlApplicationbar;

  }

  ctrlForm = new UIFormElement();
  ctrlApplicationbar = new UIActionBarElement();
}

  

class Panel1_Level_DetailUIActions {

  private _host: Panel1_Level_DetailComponent;

  constructor( host: Panel1_Level_DetailComponent) {
    this._host = host;
  }

}
 