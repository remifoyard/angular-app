import { TestBed, inject } from '@angular/core/testing';

import { AccueilServiceService } from './accueil-service.service';

describe('AccueilServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccueilServiceService]
    });
  });

  it('should be created', inject([AccueilServiceService], (service: AccueilServiceService) => {
    expect(service).toBeTruthy();
  }));
});
