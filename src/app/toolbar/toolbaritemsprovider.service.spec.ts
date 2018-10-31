import { TestBed } from '@angular/core/testing';

import { ToolbaritemsproviderService } from './toolbaritemsprovider.service';

describe('ToolbaritemsproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolbaritemsproviderService = TestBed.get(ToolbaritemsproviderService);
    expect(service).toBeTruthy();
  });
});
