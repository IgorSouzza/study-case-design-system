module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Generate new design system component base',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name?',
      },
      {
        type: 'confirm',
        name: 'simpleStyled',
        message: 'Generate as simple styled component?'
    }
    ],
    actions: function(data) {
      const actions = [
        {
          type: 'append',
          path: '../react/src/index.tsx',
          pattern: /\/\/ generateHere/g,
          template: "export * from './components/{{pascalCase name}}'", // replace your append template here
        },
        {
          type: 'add',
          path: '../docs/src/stories/{{pascalCase name}}.stories.tsx',
          templateFile: './templates/components/stories.tsx.hbs'
        }
      ];

      if (data.simpleStyled) {
        actions.push({
          type: 'add',
          path: '../react/src/components/{{pascalCase name}}.tsx',
          templateFile: './templates/components/styled-component.tsx.hbs'
        })
      } else {}

      return actions;
    }
  });
};