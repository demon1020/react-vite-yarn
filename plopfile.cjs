const componentBasePath = "src";

const fileSystem = require("fs");
const path = require("path");
module.exports = function (plop) {
  plop.setGenerator("store", {
    description: "create a store",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Please provide store name:",
      },
    ],
    actions: () => {
      return [
        {
          type: "add",
          path: "src/store/{{camelCase name}}/index.ts",
          templateFile: "plop-templates/store/index.hbs",
        },
      ];
    },
  });

  plop.setGenerator("component", {
    description: "create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Please provide component name:",
      },
      {
        type: "list",
        name: "type",
        choices: ["core", "layouts", "modules", "primitives"],
        message: "Please provide the component type:",
      },
      {
        type: "confirm",
        name: "smart",
        message: "",
        default: false,
      },
    ],
    actions: (data) => {
      data.basePath = componentBasePath;
      if (data.smart) {
        return [
          {
            type: "add",
            path: "{{basePath}}/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.props.ts",
            templateFile: "plop-templates/component/props.hbs",
          },
          {
            type: "add",
            path: "{{basePath}}/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.view.tsx",
            templateFile: "plop-templates/component/view.hbs",
          },
          {
            type: "add",
            path: "{{basePath}}/components/{{type}}/{{pascalCase name}}/index.ts",
            templateFile: "plop-templates/component/index.hbs",
          },
          {
            type: "add",
            path: "{{basePath}}/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.container.tsx",
            templateFile: "plop-templates/component/container.hbs",
          },
        ];
      }
      return [
        {
          type: "add",
          path: "{{basePath}}/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.props.ts",
          templateFile: "plop-templates/component/dumbProps.hbs",
        },
        {
          type: "add",
          path: "{{basePath}}/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.view.tsx",
          templateFile: "plop-templates/component/dumbView.hbs",
        },
        {
          type: "add",
          path: "{{basePath}}/components/{{type}}/{{pascalCase name}}/index.ts",
          templateFile: "plop-templates/component/dumbIndex.hbs",
        },
      ];
    },
  });

  plop.setGenerator("route", {
    description: "create a route",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Please provide route comopnent name:",
      },
      {
        type: "list",
        name: "type",
        choices: ["public", "admin"],
        message: "Please select route type:",
      },
      {
        type: "input",
        name: "path",
        message: "Please enter the path",
      },
    ],
    actions: (data) => {
      const paramsRaw = (data.path || "").match(/:\w+/gi);
      const params = paramsRaw ? paramsRaw.map((w) => w.split(":")[1]) : null;
      const indexPath = path.join("src/routes", data.type, "index.tsx");
      const constantsPath = path.join("src/constants", "routes.ts");
      const mainIndexPath = path.join("src/routes", "index.tsx");
      const isIndexFileCreated = fileSystem.existsSync(indexPath);
      const isContantsCreated = fileSystem.existsSync(constantsPath);
      const isMainIndexCreated = fileSystem.existsSync(mainIndexPath);
      const indexFileActions = [];

      if (!isIndexFileCreated) {
        indexFileActions.push({
          type: "add",
          path: "src/routes/{{type}}/index.tsx",
          templateFile: "plop-templates/route/typeIndex.hbs",
        });
      }

      if (!isMainIndexCreated) {
        indexFileActions.push({
          type: "add",
          path: "src/routes/index.tsx",
          templateFile: "plop-templates/route/mainIndex.hbs",
        });
      }

      if (!isContantsCreated) {
        indexFileActions.push({
          type: "add",
          path: "src/constants/routes.ts",
          templateFile: "plop-templates/route/contants.hbs",
        });
      }

      return [
        ...indexFileActions,
        {
          type: "add",
          path: "src/routes/{{type}}/{{pascalCase name}}/{{pascalCase name}}.container.tsx",
          templateFile: "plop-templates/route/container.hbs",
        },
        {
          type: "add",
          path: "src/routes/{{type}}/{{pascalCase name}}/{{pascalCase name}}.props.ts",
          templateFile: "plop-templates/route/props.hbs",
          data: {
            params: params
              ? `{\n  ${params.map((w) => `${w}: string;`).join("\n  ")}\n}`
              : `{}`,
          },
        },
        {
          type: "add",
          path: "src/routes/{{type}}/{{pascalCase name}}/{{pascalCase name}}.view.tsx",
          templateFile: "plop-templates/route/view.hbs",
        },
        {
          type: "add",
          path: "src/routes/{{type}}/{{pascalCase name}}/index.ts",
          templateFile: "plop-templates/route/index.hbs",
        },
        {
          type: "append",
          path: "src/routes/{{type}}/index.tsx",
          pattern: new RegExp(
            `(\\/\\/PLOP_TEMPLATE: ${data.type} ROUTE DEFINITIONS)`,
            "gi",
          ),
          template: `          {
              path: '{{path}}',
              element: <{{pascalCase name}} />,
            },`,
        },
        {
          type: "append",
          path: "src/routes/{{type}}/index.tsx",
          pattern: new RegExp(
            `(\\/\\/PLOP_TEMPLATE: ${data.type} ROUTE IMPORTS)`,
            "gi",
          ),
          template: "import {{pascalCase name}} from './{{pascalCase name}}';",
        },
        {
          type: "append",
          path: "src/constants/routes.ts",
          pattern: new RegExp(`(\\/\\/PLOP_TEMPLATE: ROUTE PATHS)`, "gi"),
          template: `  {{ constantCase name}}: '/{{ path }}',`,
        },
      ];
    },
  });
};
