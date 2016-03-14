System.config({
  baseURL: "/",
  buildCSS: false,
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "format": "esm"
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*",
    "addison:*": "jspm_packages/addison/*"
  },

  packages: {
    "src": {
      "defaultExtension": "ts"
    },
    "ui/ui-framework": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "format": "esm"
        }
      }
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.0",
    "less": "github:HuasoFoundries/systemjs-less-plugin@1.4.2",
    "less.js": "github:distros/less@2.4.0",
    "typescript": "npm:typescript@1.8.7",
    "ui/ui-framework": "addison:ui/ui-framework@dev",
    "addison:ui/ui-framework@dev": {
      "angular": "github:angular/bower-angular@1.5.0",
      "angular-chart.js": "npm:angular-chart.js@0.8.9",
      "angular-material": "github:angular/bower-material@1.0.6",
      "angular-mocks": "npm:angular-mocks@1.5.0",
      "angular-route": "github:angular/bower-angular-route@1.5.0",
      "component-router": "npm:@angular/router@0.2.0",
      "core-js": "npm:core-js@0.9.18",
      "css": "github:systemjs/plugin-css@0.1.20",
      "font-awesome": "npm:font-awesome@4.5.0",
      "lodash": "npm:lodash@4.6.1",
      "mihai-agape/angular-timeline": "github:mihai-agape/angular-timeline@1.6.1",
      "moment": "npm:moment@2.12.0",
      "ng-file-upload": "npm:ng-file-upload@11.2.3",
      "oblador/angular-scroll": "github:oblador/angular-scroll@1.0.0",
      "rx-lite": "npm:rx-lite@4.0.8",
      "text": "github:systemjs/plugin-text@0.0.2",
      "typescript": "npm:typescript@1.8.7"
    },
    "github:HuasoFoundries/systemjs-less-plugin@1.4.2": {
      "less.js": "github:distros/less@2.4.0"
    },
    "github:angular/bower-angular-animate@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-aria@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-route@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-material@1.0.6": {
      "angular": "github:angular/bower-angular@1.5.0",
      "angular-animate": "github:angular/bower-angular-animate@1.5.0",
      "angular-aria": "github:angular/bower-angular-aria@1.5.0",
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:@angular/router@0.2.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "npm:angular-chart.js@0.8.9": {
      "angular": "npm:angular@1.5.0",
      "chart.js": "npm:chart.js@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chart.js@1.0.2": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@4.6.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:moment@2.12.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ng-file-upload@11.2.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:rx-lite@4.0.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
