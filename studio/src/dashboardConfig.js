export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f7b1009ede07000ee83b51c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7w42wwt6',
                  apiId: '6372d93d-0913-4558-b8cd-5f6e58bae62c'
                },
                {
                  buildHookId: '5f7b100aede070013383b3f7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fios3ibb',
                  apiId: '1a786137-13b5-48ed-b476-28e84c3baa27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/christoffer-hk/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fios3ibb.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
