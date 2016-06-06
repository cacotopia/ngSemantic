System.register(["@angular/core", "ng-semantic", "../../prismjs/prismjs"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng_semantic_1, prismjs_1;
    var DimmerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
            }],
        execute: function() {
            DimmerComponent = (function () {
                function DimmerComponent() {
                }
                DimmerComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        selector: "dimmer",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Dimmer</h1>\n        <p>Semantic UI Dimmer module <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/modules/dimmer.html\" target=\"_blank\">Semantic UI Dimmer</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>Note that selector attribute on sm-dimmer and value in smDirDimmer must be same.</p>\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-dimmer selector=\"page\">\n        <div class=\"center\">\n            <h2 class=\"ui inverted icon header\">\n                <i class=\"mail icon\"></i>\n                Dimmer Message\n                <div class=\"sub header\">Dimmer sub-header</div>\n            </h2>\n        </div>\n    </sm-dimmer>\n    <sm-button smDirDimmer=\"page\" class=\"primary\">Page dimmer</sm-button>\n    \n    <h4 class=\"ui header\">Code</h4>\n    <codeblock prismjs=\"html\">\n&lt;sm-dimmer selector=\"page\">\n    &lt;div class=\"center\">\n        &lt;h2 class=\"ui inverted icon header\">\n            &lt;i class=\"mail icon\">&lt;/i>\n            Dimmer Message\n            &lt;div class=\"sub header\">Dimmer sub-header&lt;/div>\n        &lt;/h2>\n    &lt;/div>\n&lt;/sm-dimmer>\n&lt;sm-button smDirDimmer=\"page\" class=\"primary\">Page dimmer&lt;/sm-button>\n</codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DimmerComponent);
                return DimmerComponent;
            }());
            exports_1("DimmerComponent", DimmerComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGltbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOENBO2dCQUFBO2dCQUE4QixDQUFDO2dCQTFDL0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxpQ0FBbUIsRUFBRSxpQ0FBbUIsRUFBUSw0QkFBa0IsRUFBUSwwQkFBZ0IsQ0FBQzt3QkFDeEcsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxvMUNBb0NiO3FCQUNBLENBQUM7O21DQUFBO2dCQUU0QixzQkFBQztZQUFELENBQUMsQUFBL0IsSUFBK0I7WUFBL0IsNkNBQStCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcbmltcG9ydCB7IENvZGVibG9ja0NvbXBvbmVudCwgUHJpc21Kc0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9wcmlzbWpzL3ByaXNtanNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIDxUeXBlPkNvZGVibG9ja0NvbXBvbmVudCwgPFR5cGU+UHJpc21Kc0RpcmVjdGl2ZV0sXG4gICAgc2VsZWN0b3I6IFwiZGltbWVyXCIsXG4gICAgdGVtcGxhdGU6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5EaW1tZXI8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBEaW1tZXIgbW9kdWxlIDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9kaW1tZXIuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIERpbW1lcjwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxwPk5vdGUgdGhhdCBzZWxlY3RvciBhdHRyaWJ1dGUgb24gc20tZGltbWVyIGFuZCB2YWx1ZSBpbiBzbURpckRpbW1lciBtdXN0IGJlIHNhbWUuPC9wPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxzbS1kaW1tZXIgc2VsZWN0b3I9XCJwYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInVpIGludmVydGVkIGljb24gaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYWlsIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgRGltbWVyIE1lc3NhZ2VcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViIGhlYWRlclwiPkRpbW1lciBzdWItaGVhZGVyPC9kaXY+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NtLWRpbW1lcj5cbiAgICA8c20tYnV0dG9uIHNtRGlyRGltbWVyPVwicGFnZVwiIGNsYXNzPVwicHJpbWFyeVwiPlBhZ2UgZGltbWVyPC9zbS1idXR0b24+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gICAgPGNvZGVibG9jayBwcmlzbWpzPVwiaHRtbFwiPlxuJmx0O3NtLWRpbW1lciBzZWxlY3Rvcj1cInBhZ2VcIj5cbiAgICAmbHQ7ZGl2IGNsYXNzPVwiY2VudGVyXCI+XG4gICAgICAgICZsdDtoMiBjbGFzcz1cInVpIGludmVydGVkIGljb24gaGVhZGVyXCI+XG4gICAgICAgICAgICAmbHQ7aSBjbGFzcz1cIm1haWwgaWNvblwiPiZsdDsvaT5cbiAgICAgICAgICAgIERpbW1lciBNZXNzYWdlXG4gICAgICAgICAgICAmbHQ7ZGl2IGNsYXNzPVwic3ViIGhlYWRlclwiPkRpbW1lciBzdWItaGVhZGVyJmx0Oy9kaXY+XG4gICAgICAgICZsdDsvaDI+XG4gICAgJmx0Oy9kaXY+XG4mbHQ7L3NtLWRpbW1lcj5cbiZsdDtzbS1idXR0b24gc21EaXJEaW1tZXI9XCJwYWdlXCIgY2xhc3M9XCJwcmltYXJ5XCI+UGFnZSBkaW1tZXImbHQ7L3NtLWJ1dHRvbj5cbjwvY29kZWJsb2NrPlxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgRGltbWVyQ29tcG9uZW50IHt9XG4iXX0=