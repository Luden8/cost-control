import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NgModelAbstractComponent } from './ng-model-abstract.component'

describe('NgModelAbstractComponent', () => {
  let component: NgModelAbstractComponent
  let fixture: ComponentFixture<NgModelAbstractComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgModelAbstractComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(NgModelAbstractComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
