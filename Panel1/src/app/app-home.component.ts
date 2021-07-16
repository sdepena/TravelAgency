import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CompositeNavigation } from 'app/gx/navigation/composite-navigation';
import { ActionState } from 'app/gx/base/action-state.dt';

@Component({
  selector: 'app-home',
  template: '',
})

export class AppHome implements OnInit {

  subscriptions = new Subscription();

  constructor( private activatedRoute: ActivatedRoute, private nvg: CompositeNavigation) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
