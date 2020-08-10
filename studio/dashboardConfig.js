export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f311498bf54e9ef26719844',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-837pmv3f',
                  apiId: 'f27271c1-abc4-4d6c-bf6b-b907aa18aaff'
                },
                {
                  buildHookId: '5f311498fe295100b7573fef',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ipe8ugns',
                  apiId: '4ba57512-42d7-4413-bb14-bb02cc849e04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shridharpoman/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ipe8ugns.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
