import { TestBed } from '@angular/core/testing';

import { TeamFinderService } from './team-finder.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TeamFinderService', () => {
  let service: TeamFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamFinderService]
    });
    service = TestBed.inject(TeamFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
