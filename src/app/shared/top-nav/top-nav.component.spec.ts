import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { TopNavComponent } from '../top-nav/top-nav.component';

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
      TopNavComponent
    ]
  }));

  it('should log ngOnInit', inject([TopNavComponent], (SideNav: TopNavComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    SideNav.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
