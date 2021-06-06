"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./home.component");
describe('HomeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [home_component_1.HomeComponent],
            imports: [forms_1.FormsModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(home_component_1.HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should display a title', testing_1.async(function () {
        var titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Temperature Converter');
    }));
    it('should have initial value of zero Centigrade', testing_1.async(function () {
        var centValue = component.valCentigrade;
        expect(centValue).toEqual(0);
    }));
    it('should have initial value of 32 Fahrenheit', testing_1.async(function () {
        var fahrValue = component.valFahrenheit;
        expect(fahrValue).toEqual(32);
    }));
    it('should have initial value of 273.15 Kelvin', testing_1.async(function () {
        var kelvValue = component.valKelvin;
        expect(kelvValue).toEqual(273.15);
    }));
    it('should update Kelvin to 283.15 when Centigrade changes to 10', testing_1.async(function () {
        component.valCentigrade = 10;
        component.ValueChanged('centigrade');
        var kelvValue = component.valKelvin;
        expect(kelvValue).toEqual(283.15);
    }));
    it('should update Fahrenheit to 50 when Centigrade changes to 10', testing_1.async(function () {
        component.valCentigrade = 10;
        component.ValueChanged('centigrade');
        var fahrValue = component.valFahrenheit;
        expect(fahrValue).toEqual(50);
    }));
});
//# sourceMappingURL=home.component.spec.js.map