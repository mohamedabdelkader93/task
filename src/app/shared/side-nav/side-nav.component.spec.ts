import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { SideNavComponent } from '../side-nav/side-nav.component';

describe('SideNav', () => {
  /**
   * Provide our implementations or mocks to the dependency injector
   */
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      /**
       * Provide a better mock.
       */
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      SideNavComponent
    ]
  }));

  it('should log ngOnInit', inject([SideNavComponent], (SideNav: SideNavComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    SideNav.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
