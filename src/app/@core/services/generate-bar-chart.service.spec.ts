import { TestBed } from '@angular/core/testing';

import { GenerateBarChartService } from './generate-bar-chart.service';

describe('GenerateBarChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateBarChartService = TestBed.get(GenerateBarChartService);
    expect(service).toBeTruthy();
  });
});
