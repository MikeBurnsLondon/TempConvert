import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Temperature Converter');
  }));

  it('should have initial value of zero Centigrade', async(() => {
    let centValue = component.valCentigrade;
    expect(centValue).toEqual(0);
  }));

  it('should have initial value of 32 Fahrenheit', async(() => {
    let fahrValue = component.valFahrenheit;
    expect(fahrValue).toEqual(32);
  }));

  it('should have initial value of 273.15 Kelvin', async(() => {
    let kelvValue = component.valKelvin;
    expect(kelvValue).toEqual(273.15);
  }));

  it('should update Kelvin to 283.15 when Centigrade changes to 10', async(() => {
    component.valCentigrade = 10;
    component.ValueChanged('centigrade');
    let kelvValue = component.valKelvin;
    expect(kelvValue).toEqual(283.15);
  }));

  it('should update Fahrenheit to 50 when Centigrade changes to 10', async(() => {
    component.valCentigrade = 10;
    component.ValueChanged('centigrade');
    let fahrValue = component.valFahrenheit;
    expect(fahrValue).toEqual(50);
  }));

});
