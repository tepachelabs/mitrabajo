import {Page} from '~/components/page'
import {PostsList} from '~/components/post-list'

const CalculatorsPage = () => {
  return (
    <Page title="Calcultadoras">
      <PostsList
        posts={[
          {
            content: 'Aguinaldo',
            title: 'Aguinaldo',
            keywords: 'Aguinaldo',
            slug: 'aguinaldo',
            description: 'Calculadora para obtener aguinaldo.',
          },
        ]}
      />
    </Page>
  )
}

export default CalculatorsPage
