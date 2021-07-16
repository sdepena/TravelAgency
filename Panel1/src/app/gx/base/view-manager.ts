import { Observable, Subscription, fromEvent } from "rxjs";
import { Settings } from "app/app.settings";

export enum NavigationStyle {
  Cascade = "cascade",
  Flip = "flip",
  Slide = "slide",
  Split = "split",
}

export class ViewManager {
  resizeObservable: Observable<Event>;
  resizeSubscription: Subscription;

  views: ComponentViewDefinition[] = [];
  view: string = null;
  type = "";

  navigationStyle: string;
  oldMode = "";

  start(viewVariants: ComponentViewDefinition[]) {
    this.views = viewVariants || [];
    this.updateViewManager();
    this.resizeObservable = fromEvent(window, "resize");
    this.resizeSubscription = this.resizeObservable.subscribe(evt => {
      this.updateViewManager();
    });
  }

  bindApplicationBar() {
    const findCurrentView = viewMatchesViewport(window);
    const currentView =
      this.views
        .filter((platform) => this.type === "" || platform.type === this.type)
        .find(findCurrentView) || this.views[0];
    if (currentView !== undefined) {
      if (currentView.appBarBindFn !== undefined) {
        currentView.appBarBindFn(this.navigationStyle);
      }
    }
  }

  update(m: string) {
    if (this.oldMode !== m) {
      if (m !== "") {
        this.type = "edit";
      } else {
        this.type = "";
      }
      this.updateViewManager();
      this.oldMode = m;
    }
  }

  updateViewManager() {
    const findCurrentView = viewMatchesViewport(window);
    const currentView =
      this.views
        .filter((platform) => this.type === "" || platform.type === this.type)
        .find(findCurrentView) || this.views[0];

    const currentAppView = Settings.applicationLayouts.find(findCurrentView);

    this.navigationStyle =
      currentAppView !== undefined &&
        currentAppView.navigationStyle !== "default"
        ? currentAppView.navigationStyle
        : Settings.DEFAULT_NAVIGATION_STYLE;

    if (currentView !== undefined) {
      if (currentView.appBarInitFn !== undefined) {
        currentView.appBarInitFn(this.navigationStyle);
      }
    }

    this.view = currentView === undefined ? null : currentView.name;
  }

  end() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
    const viewDef = this.getViewDefinition();
    if (viewDef !== undefined && viewDef.appBarResetFn !== undefined) {
      viewDef.appBarResetFn();
    }
  }

  getUIModelDefaults(containerName?: string) {
    const viewDef = this.getViewDefinition();
    if (viewDef !== undefined && viewDef.appBarResetFn !== undefined) {
      return viewDef.UIModelDefaults(containerName, this.navigationStyle);
    }
    return [];
  }

  getViewDefinition(): ComponentViewDefinition {
    return this.views.find((viewDef) => viewDef.name === this.view);
  }
}

const viewMatchesViewport = (win: Window) => (platform: ViewBounds) => {
  const shortestBound = Math.min(win.innerWidth, win.innerHeight);
  const longestBound = Math.max(win.innerWidth, win.innerHeight);
  return (
    (platform.minShortestBound > 0
      ? platform.minShortestBound < shortestBound
      : true) &&
    (platform.maxShortestBound > 0
      ? platform.maxShortestBound > shortestBound
      : true) &&
    (platform.minLongestBound > 0
      ? platform.minLongestBound < longestBound
      : true) &&
    (platform.maxLongestBound > 0
      ? platform.maxLongestBound > longestBound
      : true)
  );
};

export interface ViewBounds {
  minShortestBound: number;
  maxShortestBound: number;
  minLongestBound: number;
  maxLongestBound: number;
}

export interface ComponentViewDefinition extends ViewBounds {
  name: string;
  type: string;
  appBarInitFn?: (navigationStyle: string) => void;
  appBarBindFn?: (navigationStyle: string) => void;
  appBarResetFn?: () => void;
  UIModelDefaults?: (containerName: string, navigationStyle: string) => any;
}

export interface ApplicationViewDefinition extends ViewBounds {
  navigationStyle: NavigationStyle | string;
}
